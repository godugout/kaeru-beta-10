import ShopLayout from "@/components/layouts/ShopLayout";
import { MaContainer } from "@/components/ui/japanese/Layout";
import SEOHead from "@/components/seo/SEOHead";

const TermsOfService = () => {
  return (
    <>
      <SEOHead 
        title="Terms of Service - KAERU CBD"
        description="Read KAERU CBD's terms of service and conditions of use."
      />
      <ShopLayout>
        <MaContainer className="py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-serif text-gold mb-8">Terms of Service</h1>
            
            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-xl text-white mb-4">Acceptance of Terms</h2>
                <div className="text-white/80 space-y-4">
                  <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl text-white mb-4">Age Requirement</h2>
                <div className="text-white/80 space-y-4">
                  <p>You must be 21 years of age or older to purchase our products. By using this site, you represent that you are at least 21 years old.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl text-white mb-4">Product Information</h2>
                <div className="text-white/80 space-y-4">
                  <p>Our CBD products are derived from hemp containing less than 0.3% THC. Products have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl text-white mb-4">Purchasing Terms</h2>
                <div className="text-white/80 space-y-4">
                  <p>All purchases are subject to product availability. We reserve the right to limit quantities and refuse service.</p>
                  <p>Prices are subject to change without notice. Payment must be received before products are shipped.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl text-white mb-4">Shipping and Returns</h2>
                <div className="text-white/80 space-y-4">
                  <p>We ship to locations where CBD products are legal. Customers are responsible for knowing their local laws.</p>
                  <p>Returns are accepted within 30 days of purchase for unopened products.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl text-white mb-4">Limitation of Liability</h2>
                <div className="text-white/80 space-y-4">
                  <p>KAERU CBD shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use of our products.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl text-white mb-4">Contact Information</h2>
                <div className="text-white/80">
                  <p>For questions regarding these terms, please contact us at legal@kaeru-cbd.com</p>
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

export default TermsOfService;