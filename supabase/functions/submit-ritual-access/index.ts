import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.58.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface RitualAccessRequest {
  email: string;
  consented_to_marketing: boolean;
  consented_to_privacy: boolean;
  source_page?: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get request data
    const { email, consented_to_marketing, consented_to_privacy, source_page = 'rituals' }: RitualAccessRequest = await req.json();

    // Validate required fields
    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Valid email is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!consented_to_privacy) {
      return new Response(
        JSON.stringify({ error: 'Privacy policy consent is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get client IP and user agent
    const forwardedFor = req.headers.get('x-forwarded-for');
    // Extract first IP from comma-separated list (client IP is typically first)
    const ip_address = forwardedFor ? forwardedFor.split(',')[0].trim() : null;
    const user_agent = req.headers.get('user-agent') || null;

    console.log('Processing submission:', { email, ip_address, user_agent, source_page });

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Insert or update the record - prioritize saving email even if metadata fails
    const { data, error } = await supabase
      .from('ritual_access_requests')
      .upsert({
        email,
        consented_to_marketing,
        consented_to_privacy,
        source_page,
        ip_address,
        user_agent,
        updated_at: new Date().toISOString(),
      }, {
        onConflict: 'email',
        ignoreDuplicates: false
      })
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to save submission' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Ritual access request saved:', { email, source_page });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Access granted',
        data 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});