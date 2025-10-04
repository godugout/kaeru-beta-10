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
    // TODO: Set up analytics_events table in database
    console.log(`Product view tracked: ${productName}`, { visitorId, productId });
  } catch (error) {
    console.error('Error tracking product view:', error);
  }
};

// Track ritual view
export const trackRitualView = async (ritualId: string, ritualName: string) => {
  const visitorId = getVisitorId();
  try {
    // TODO: Set up analytics_events table in database
    console.log(`Ritual view tracked: ${ritualName}`, { visitorId, ritualId });
  } catch (error) {
    console.error('Error tracking ritual view:', error);
  }
};

// Track product interaction (e.g., clicking to view ritual)
export const trackProductInteraction = async (productId: string, productName: string, interactionType: string) => {
  const visitorId = getVisitorId();
  try {
    // TODO: Set up analytics_events table in database
    console.log(`Product interaction tracked: ${interactionType} - ${productName}`, { visitorId, productId });
  } catch (error) {
    console.error('Error tracking product interaction:', error);
  }
};
