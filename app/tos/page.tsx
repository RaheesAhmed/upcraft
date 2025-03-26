import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal - Upcraft",
  description: "Terms of Service, Privacy Policy, and Refund Policy for Upcraft AI-Powered Upwork Proposal Generator",
}

export default function LegalPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      <div className="container max-w-4xl py-12 px-4 md:px-6">
        <nav className="flex justify-center space-x-6 mb-12">
          <a href="#terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
          <a href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#refund" className="text-muted-foreground hover:text-foreground transition-colors">Refund Policy</a>
        </nav>

        {/* Terms of Service */}
        <div id="terms" className="space-y-8 text-foreground bg-card p-8 rounded-lg shadow-sm mb-12">
          <h1 className="text-4xl font-bold mb-8 text-primary text-center">Terms of Service</h1>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">1. Acceptance of Terms</h2>
            <p className="mb-4 leading-relaxed">
              By accessing and using Upcraft ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">2. Description of Service</h2>
            <p className="mb-4 leading-relaxed">
              Upcraft is an AI-powered tool designed to help users generate proposals and job descriptions for Upwork. The Service includes proposal generation, job description creation, and related features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>You must provide accurate and complete information when using the Service</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You agree not to use the Service for any illegal or unauthorized purpose</li>
              <li>You must not modify or attempt to manipulate the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">4. Content and Copyright</h2>
            <p className="mb-4 leading-relaxed">
              While Upcraft helps generate content, you are responsible for ensuring that your final proposals and job descriptions do not infringe on any third-party rights. You retain ownership of your content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">5. Limitation of Liability</h2>
            <p className="mb-4 leading-relaxed">
              Upcraft is provided "as is" without any warranties. We are not liable for any damages arising from your use of the Service or any generated content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">6. Changes to Terms</h2>
            <p className="mb-4 leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of the Service after changes constitutes acceptance of the new terms.
            </p>
          </section>
        </div>

        {/* Privacy Policy */}
        <div id="privacy" className="space-y-8 text-foreground bg-card p-8 rounded-lg shadow-sm mb-12">
          <h1 className="text-4xl font-bold mb-8 text-primary text-center">Privacy Policy</h1>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">1. Information We Collect</h2>
            <p className="mb-4 leading-relaxed">
              We collect information that you provide directly to us, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Account information (name, email, password)</li>
              <li>Profile information</li>
              <li>Content you generate using our Service</li>
              <li>Payment information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">2. How We Use Your Information</h2>
            <p className="mb-4 leading-relaxed">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Provide and maintain our Service</li>
              <li>Improve and personalize your experience</li>
              <li>Process your payments</li>
              <li>Communicate with you about our Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">3. Data Security</h2>
            <p className="mb-4 leading-relaxed">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">4. Your Rights</h2>
            <p className="mb-4 leading-relaxed">
              You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
            </p>
          </section>
        </div>

        {/* Refund Policy */}
        <div id="refund" className="space-y-8 text-foreground bg-card p-8 rounded-lg shadow-sm">
          <h1 className="text-4xl font-bold mb-8 text-primary text-center">Refund Policy</h1>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">1. Eligibility for Refunds</h2>
            <p className="mb-4 leading-relaxed">
              We offer refunds under the following conditions:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Service unavailability exceeding 24 hours</li>
              <li>Technical issues preventing core functionality</li>
              <li>Billing errors or duplicate charges</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">2. Refund Process</h2>
            <p className="mb-4 leading-relaxed">
              To request a refund:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Contact our support team within 7 days of purchase</li>
              <li>Provide your order details and reason for refund</li>
              <li>Allow up to 5-7 business days for processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">3. Non-Refundable Items</h2>
            <p className="mb-4 leading-relaxed">
              The following are not eligible for refunds:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Used or partially used services</li>
              <li>Customized proposals after delivery</li>
              <li>Subscription fees after 30 days of purchase</li>
            </ul>
          </section>
        </div>

        <div className="text-sm text-muted-foreground mt-8 text-center border-t pt-4">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </main>
  )
}
