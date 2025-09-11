
import { supabase } from "./client";
import { v4 as uuidv4 } from 'uuid';

// Get or create visitor ID from local storage
const getVisitorId = (): string => {
  let visitorId = localStorage.getItem('kaeru_visitor_id');
  if (!visitorId) {
    visitorId = uuidv4();
    localStorage.setItem('kaeru_visitor_id', visitorId);
  }
  return visitorId;
};

// Track product views
export const trackProductView = async (productId: string, productName: string) => {
  const visitorId = getVisitorId();
  try {
    await supabase.from('analytics_events').insert({
      visitor_id: visitorId,
      event_type: 'product_view',
      event_category: 'product',
      event_label: productName,
      event_data: { productId },
      page_url: window.location.href
    });
    console.log(`Product view tracked: ${productName}`);
  } catch (error) {
    console.error('Error tracking product view:', error);
  }
};

// Track ritual view
export const trackRitualView = async (ritualId: string, ritualName: string) => {
  const visitorId = getVisitorId();
  try {
    await supabase.from('analytics_events').insert({
      visitor_id: visitorId,
      event_type: 'ritual_view',
      event_category: 'ritual',
      event_label: ritualName,
      event_data: { ritualId },
      page_url: window.location.href
    });
    console.log(`Ritual view tracked: ${ritualName}`);
  } catch (error) {
    console.error('Error tracking ritual view:', error);
  }
};

// Track product interaction (e.g., clicking to view ritual)
export const trackProductInteraction = async (productId: string, productName: string, interactionType: string) => {
  const visitorId = getVisitorId();
  try {
    await supabase.from('analytics_events').insert({
      visitor_id: visitorId,
      event_type: 'product_interaction',
      event_category: 'interaction',
      event_label: interactionType,
      event_data: { productId, productName, interactionType },
      page_url: window.location.href
    });
    console.log(`Product interaction tracked: ${interactionType} - ${productName}`);
  } catch (error) {
    console.error('Error tracking product interaction:', error);
  }
};
