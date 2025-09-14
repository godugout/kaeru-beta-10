import ShopLayout from "@/components/layouts/ShopLayout";
import { MaContainer } from "@/components/ui/japanese/Layout";
import SEOHead from "@/components/seo/SEOHead";

const ShippingPolicy = () => {
  return (
    <>
      <SEOHead 
        title="Shipping & Returns - KAERU CBD"
        description="Learn about KAERU CBD's shipping policies, delivery times, and return procedures."
      />
      <ShopLayout>
        <MaContainer className="py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-serif text-gold mb-8">Shipping & Returns</h1>
            
            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-xl text-white mb-4">Shipping Information</h2>
                <div className="text-white/80 space-y-4">
                  <h3 className="text-lg text-gold">Domestic Shipping (United States)</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Free shipping on orders over $75</li>
                    <li>Standard shipping: 3-7 business days ($8.99)</li>
                    <li>Express shipping: 1-3 business days ($19.99)</li>
                    <li>Overnight shipping: Next business day ($39.99)</li>
                  </ul>
                  
                  <h3 className="text-lg text-gold mt-6">International Shipping (Japan)</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Free shipping to Japan on orders over ¥15,000 ($100)</li>
                    <li>Standard international: 7-14 business days (¥2,250 / $15)</li>
                    <li>Express international: 3-7 business days (¥4,500 / $30)</li>
                  </ul>

                  <div className="bg-gold/10 border border-gold/20 rounded-lg p-4 mt-6">
                    <h4 className="text-gold font-medium mb-2">Delivery Estimates for Major Japanese Cities:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Tokyo, Osaka, Kyoto: 5-10 business days</li>
                      <li>• Yokohama, Nagoya, Kobe: 6-11 business days</li>
                      <li>• Fukuoka, Sapporo: 7-12 business days</li>
                      <li>• Rural areas: 8-14 business days</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl text-white mb-4">Order Processing</h2>
                <div className="text-white/80 space-y-4">
                  <p>Orders are processed Monday through Friday, excluding holidays. Orders placed after 2 PM EST will be processed the next business day.</p>
                  <p>You will receive a confirmation email with tracking information once your order ships.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl text-white mb-4">Returns & Exchanges</h2>
                <div className="text-white/80 space-y-4">
                  <h3 className="text-lg text-gold">Return Policy</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>30-day return window from delivery date</li>
                    <li>Products must be unopened and in original packaging</li>
                    <li>Original receipt or order confirmation required</li>
                    <li>Custom or personalized items cannot be returned</li>
                  </ul>
                  
                  <h3 className="text-lg text-gold mt-6">How to Return</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Contact our customer service team at returns@kaeru-cbd.com</li>
                    <li>Receive return authorization and prepaid shipping label</li>
                    <li>Package items securely with original packaging</li>
                    <li>Affix return label and drop off at designated carrier</li>
                  </ol>
                </div>
              </section>

              <section>
                <h2 className="text-xl text-white mb-4">Damaged or Lost Packages</h2>
                <div className="text-white/80 space-y-4">
                  <p>If your package arrives damaged or goes missing in transit, please contact us within 48 hours of delivery (or expected delivery date) at support@kaeru-cbd.com.</p>
                  <p>We will work with our shipping partners to resolve the issue and ensure you receive your products.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl text-white mb-4">Legal Compliance</h2>
                <div className="text-white/80 space-y-4">
                  <p>We only ship to locations where CBD products are legal. Customers are responsible for understanding their local laws and regulations.</p>
                  <p>Orders may be delayed or cancelled if shipping to a restricted area.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl text-white mb-4">Contact Us</h2>
                <div className="text-white/80">
                  <p>For shipping inquiries: shipping@kaeru-cbd.com</p>
                  <p>For returns: returns@kaeru-cbd.com</p>
                  <p>Customer service hours: Monday-Friday, 9 AM - 6 PM EST</p>
                </div>
              </section>

              <div className="text-white/50 text-sm mt-8 pt-8 border-t border-white/10">
                Last updated: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </MaContainer>
      </ShopLayout>
    </>
  );
};

export default ShippingPolicy;