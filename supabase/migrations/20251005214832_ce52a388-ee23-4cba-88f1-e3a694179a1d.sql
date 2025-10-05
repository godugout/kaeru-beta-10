-- Create table for ritual access email submissions (CRM)
CREATE TABLE public.ritual_access_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  consented_to_marketing BOOLEAN NOT NULL DEFAULT false,
  consented_to_privacy BOOLEAN NOT NULL DEFAULT true,
  source_page TEXT DEFAULT 'rituals',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  ip_address INET,
  user_agent TEXT,
  UNIQUE(email)
);

-- Enable Row Level Security
ALTER TABLE public.ritual_access_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for email gate)
CREATE POLICY "Anyone can submit ritual access request"
ON public.ritual_access_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create policy for authenticated users to view their own submissions
CREATE POLICY "Users can view their own submissions"
ON public.ritual_access_requests
FOR SELECT
TO authenticated
USING (auth.jwt() ->> 'email' = email);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_ritual_access_requests_updated_at
BEFORE UPDATE ON public.ritual_access_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for faster email lookups
CREATE INDEX idx_ritual_access_requests_email ON public.ritual_access_requests(email);
CREATE INDEX idx_ritual_access_requests_created_at ON public.ritual_access_requests(created_at DESC);