import PolicyLayout, { PolicySection } from "@/components/PolicyLayout";

const SECTIONS = [
  { id: "acceptance", title: "Acceptance of terms" },
  { id: "description", title: "Description of service" },
  { id: "accounts", title: "User accounts" },
  { id: "acceptable-use", title: "Acceptable use" },
  { id: "intellectual-property", title: "Intellectual property" },
  { id: "payment", title: "Payment terms" },
  { id: "disclaimers", title: "Disclaimers" },
  { id: "liability", title: "Limitation of liability" },
  { id: "termination", title: "Termination" },
  { id: "governing-law", title: "Governing law" },
  { id: "changes", title: "Changes to terms" },
  { id: "contact", title: "Contact us" },
];

export default function TermsPage() {
  return (
    <PolicyLayout
      title="Terms of Service"
      effectiveDate="May 19, 2026"
      sections={SECTIONS}
    >
      <p className="text-sm leading-7 text-gray-600 mb-10">
        These Terms of Service ("Terms") govern your access to and use of the
        Lexgrip website and application (the "Service") operated by Lexgrip
        ("we," "us," or "our"). By accessing or using the Service, you agree to
        be bound by these Terms. If you do not agree, do not use the Service.
      </p>

      <PolicySection id="acceptance" title="1. Acceptance of terms">
        <p>
          By creating an account or using the Service in any way, you confirm
          that you are at least 13 years old, have read and understood these
          Terms, and agree to be bound by them. If you are using the Service on
          behalf of an organisation, you represent that you have authority to
          bind that organisation to these Terms.
        </p>
      </PolicySection>

      <PolicySection id="description" title="2. Description of service">
        <p>
          Lexgrip is a language learning platform that provides AI-assisted
          vocabulary card generation, spaced repetition study tools, and (when
          available) an AI conversation tutor. Features and availability may
          change over time. We reserve the right to modify, suspend, or
          discontinue any part of the Service with or without notice.
        </p>
        <p>
          Certain features are marked as "coming soon" and are not yet available.
          We make no guarantee as to when or whether those features will be
          released.
        </p>
      </PolicySection>

      <PolicySection id="accounts" title="3. User accounts">
        <p>
          You must create an account to use most features of the Service. You
          are responsible for:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Providing accurate, current, and complete information during registration.</li>
          <li>Maintaining the confidentiality of your password and account credentials.</li>
          <li>All activity that occurs under your account.</li>
          <li>Notifying us immediately at <a href="mailto:hello@lexgrip.com" className="text-emerald-600 hover:underline">hello@lexgrip.com</a> if you suspect unauthorised access.</li>
        </ul>
        <p>
          We reserve the right to suspend or terminate accounts that violate
          these Terms or are used for fraudulent purposes.
        </p>
      </PolicySection>

      <PolicySection id="acceptable-use" title="4. Acceptable use">
        <p>You agree not to use the Service to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Violate any applicable law or regulation.</li>
          <li>Infringe the intellectual property rights of others.</li>
          <li>Upload or generate content that is unlawful, harmful, threatening, abusive, harassing, defamatory, obscene, or otherwise objectionable.</li>
          <li>Attempt to reverse engineer, decompile, or extract source code from the Service.</li>
          <li>Use automated means (bots, scrapers) to access the Service without our prior written consent.</li>
          <li>Circumvent any rate limits, access controls, or security measures.</li>
          <li>Resell or redistribute access to the Service without authorisation.</li>
          <li>Use the Service in a way that could damage, overburden, or impair our infrastructure.</li>
        </ul>
      </PolicySection>

      <PolicySection id="intellectual-property" title="5. Intellectual property">
        <p>
          <strong className="text-gray-800">Our content.</strong> The Service and its original
          content, features, and functionality — including the software,
          design, text, and graphics — are owned by Lexgrip and protected by
          applicable intellectual property laws. You may not copy, modify,
          distribute, or create derivative works without our express written
          permission.
        </p>
        <p>
          <strong className="text-gray-800">Your content.</strong> You retain ownership of any
          content you submit to the Service (such as custom prompts or study
          notes). By submitting content, you grant Lexgrip a non-exclusive,
          worldwide, royalty-free licence to use, display, and process that
          content for the purpose of providing the Service.
        </p>
        <p>
          <strong className="text-gray-800">AI-generated content.</strong> Vocabulary cards
          and other content generated by AI are provided for your personal
          educational use. You are responsible for verifying accuracy before
          relying on any generated content.
        </p>
      </PolicySection>

      <PolicySection id="payment" title="6. Payment terms">
        <p>
          Certain features require a paid subscription. By subscribing, you agree
          to the following:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Subscription fees are billed in advance on a monthly basis.</li>
          <li>All fees are in US dollars and are non-refundable except where required by law.</li>
          <li>We reserve the right to change pricing with at least 30 days' notice. Founder-tier subscribers who joined before the founding period closed will not have their price increased.</li>
          <li>If a payment fails, we may suspend your access until the outstanding balance is resolved.</li>
          <li>You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period — you retain access until then.</li>
        </ul>
        <p>
          Payments are processed by a third-party payment provider. We do not
          store your full card details.
        </p>
      </PolicySection>

      <PolicySection id="disclaimers" title="7. Disclaimers">
        <p>
          The Service is provided "as is" and "as available" without warranties
          of any kind, either express or implied, including but not limited to
          implied warranties of merchantability, fitness for a particular
          purpose, or non-infringement.
        </p>
        <p>
          We do not warrant that the Service will be uninterrupted, error-free,
          or free of viruses or other harmful components. AI-generated content
          may contain errors, inaccuracies, or outdated information. You use
          such content at your own risk.
        </p>
        <p>
          Lexgrip is not responsible for the practices or content of any
          third-party AI providers whose services are used to generate content.
        </p>
      </PolicySection>

      <PolicySection id="liability" title="8. Limitation of liability">
        <p>
          To the maximum extent permitted by applicable law, Lexgrip and its
          officers, directors, employees, and agents shall not be liable for
          any indirect, incidental, special, consequential, or punitive damages,
          including loss of profits, data, or goodwill, arising out of or in
          connection with your use of the Service.
        </p>
        <p>
          In no event shall our total liability to you for all claims exceed the
          greater of (a) the amount you paid us in the 12 months preceding the
          claim or (b) $100 USD.
        </p>
        <p>
          Some jurisdictions do not allow the exclusion of certain warranties or
          the limitation of liability for certain damages. In such jurisdictions,
          our liability is limited to the fullest extent permitted by law.
        </p>
      </PolicySection>

      <PolicySection id="termination" title="9. Termination">
        <p>
          We may suspend or terminate your access to the Service at any time, with
          or without cause or notice, including if we reasonably believe you have
          violated these Terms.
        </p>
        <p>
          You may delete your account at any time through the account settings.
          Upon termination, your right to use the Service ceases immediately.
          Provisions of these Terms that by their nature should survive
          termination — including intellectual property, disclaimers, and
          limitation of liability — will survive.
        </p>
      </PolicySection>

      <PolicySection id="governing-law" title="10. Governing law">
        <p>
          These Terms are governed by and construed in accordance with the laws of
          the jurisdiction in which Lexgrip is established, without regard to
          conflict of law principles. Any disputes arising under these Terms shall
          be resolved exclusively in the courts of that jurisdiction, and you
          consent to personal jurisdiction there.
        </p>
      </PolicySection>

      <PolicySection id="changes" title="11. Changes to terms">
        <p>
          We reserve the right to modify these Terms at any time. We will notify
          you of material changes by posting the updated Terms on this page and
          updating the effective date. For significant changes, we may also send
          an email notification.
        </p>
        <p>
          Your continued use of the Service after changes become effective
          constitutes your acceptance of the revised Terms. If you do not agree
          to the updated Terms, you must stop using the Service.
        </p>
      </PolicySection>

      <PolicySection id="contact" title="12. Contact us">
        <p>
          If you have questions about these Terms, please contact us:
        </p>
        <div className="bg-gray-50 rounded-xl p-5 mt-2">
          <p className="font-semibold text-gray-800">Lexgrip</p>
          <p>
            Email:{" "}
            <a href="mailto:hello@lexgrip.com" className="text-emerald-600 hover:underline">
              hello@lexgrip.com
            </a>
          </p>
          <p>Website: <a href="https://lexgrip.com" className="text-emerald-600 hover:underline">lexgrip.com</a></p>
        </div>
      </PolicySection>
    </PolicyLayout>
  );
}
