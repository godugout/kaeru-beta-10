import ShopLayout from "@/components/layouts/ShopLayout";
import { MaContainer } from "@/components/ui/japanese/Layout";
import SEOHead from "@/components/seo/SEOHead";

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy - KAERU CBD"
        description="Read KAERU CBD's privacy policy and learn how we protect your personal information."
      />
      <ShopLayout>
        <MaContainer className="py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-serif text-gold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-xl text-white mb-4">Information We Collect</h2>
                <div className="text-white/80 space-y-4">
                  <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us.</p>
                  <p>Information collected may include: name, email address, shipping address, billing address, phone number, and payment information.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl text-white mb-4">How We Use Your Information</h2>
                <div className="text-white/80 space-y-4">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Process transactions and send you related information</li>
                    <li>Send you technical notices, updates, security alerts</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Communicate with you about products, services, and events</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl text-white mb-4">Information Sharing</h2>
                <div className="text-white/80 space-y-4">
                  <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
                  <p>We may share information with trusted third parties who assist us in operating our website, conducting our business, or serving our customers.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl text-white mb-4">Data Security</h2>
                <div className="text-white/80 space-y-4">
                  <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl text-white mb-4">Age Requirements</h2>
                <div className="text-white/80 space-y-4">
                  <p>Our products are intended for individuals 21 years of age or older. We do not knowingly collect personal information from individuals under 21.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl text-white mb-4">Contact Us</h2>
                <div className="text-white/80">
                  <p>If you have questions about this Privacy Policy, please contact us at privacy@kaeru-cbd.com</p>
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

export default PrivacyPolicy;