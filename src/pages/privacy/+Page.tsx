import PolicyLayout, { PolicySection } from "@/components/PolicyLayout";

const SECTIONS = [
  { id: "information-we-collect", title: "Information we collect" },
  { id: "how-we-use", title: "How we use your information" },
  { id: "sharing", title: "Sharing your information" },
  { id: "data-retention", title: "Data retention" },
  { id: "security", title: "Security" },
  { id: "your-rights", title: "Your rights" },
  { id: "cookies", title: "Cookies" },
  { id: "childrens-privacy", title: "Children's privacy" },
  { id: "changes", title: "Changes to this policy" },
  { id: "contact", title: "Contact us" },
];

export default function PrivacyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      effectiveDate="May 19, 2026"
      sections={SECTIONS}
    >
      <p className="text-sm leading-7 text-gray-600 mb-10">
        Lexgrip ("we," "us," or "our") operates the Lexgrip website and
        application (the "Service"). This Privacy Policy explains how we
        collect, use, disclose, and safeguard your information when you use our
        Service. Please read it carefully. If you disagree with its terms, please
        discontinue use of the Service.
      </p>

      <PolicySection id="information-we-collect" title="1. Information we collect">
        <p>
          <strong className="text-gray-800">Information you provide directly.</strong> When
          you create an account, we collect your email address and password. If
          you subscribe to a paid plan, our payment processor collects your
          billing information — we do not store full payment card details on our
          servers.
        </p>
        <p>
          <strong className="text-gray-800">Information from your API key.</strong> If you
          connect your own third-party API key (e.g., OpenAI, Anthropic), we
          store that key in encrypted form solely to forward your requests. We
          do not use your key for any purpose other than completing the
          generation you requested.
        </p>
        <p>
          <strong className="text-gray-800">Usage data.</strong> We automatically collect
          certain information when you use the Service, including your IP
          address, browser type, device identifiers, pages visited, and
          vocabulary cards generated or studied. This data helps us understand
          how the Service is used and improve it.
        </p>
        <p>
          <strong className="text-gray-800">Learning data.</strong> We collect information
          about the vocabulary cards you create, your study history, spaced
          repetition scores, and tutor session transcripts (when the AI tutor
          feature is available). This data is core to delivering a personalised
          learning experience.
        </p>
      </PolicySection>

      <PolicySection id="how-we-use" title="2. How we use your information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Create and manage your account and authenticate you.</li>
          <li>Deliver, personalise, and improve the Service, including powering spaced repetition scheduling and AI tutor memory.</li>
          <li>Process payments and send receipts and billing communications.</li>
          <li>Send you product updates, security notices, and administrative messages. You may opt out of marketing emails at any time.</li>
          <li>Monitor for abuse, fraud, and violations of our Terms of Service.</li>
          <li>Comply with legal obligations.</li>
        </ul>
        <p>
          We do not sell your personal information to third parties. We do not
          use your learning data to train AI models for external purposes.
        </p>
      </PolicySection>

      <PolicySection id="sharing" title="3. Sharing your information">
        <p>We may share your information in the following limited circumstances:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-gray-800">Service providers.</strong> We share data with
            vendors who help us operate the Service (e.g., cloud hosting,
            payment processors, analytics). These providers are contractually
            obligated to use your data only to provide services to us.
          </li>
          <li>
            <strong className="text-gray-800">AI providers.</strong> When you generate
            vocabulary cards or interact with the AI tutor, your prompts are
            sent to AI providers (e.g., Anthropic). Their use of that data is
            governed by their own privacy policies.
          </li>
          <li>
            <strong className="text-gray-800">Legal requirements.</strong> We may disclose
            your information if required by law or in response to valid legal
            process.
          </li>
          <li>
            <strong className="text-gray-800">Business transfers.</strong> If Lexgrip is
            acquired or merges with another company, your information may be
            transferred as part of that transaction.
          </li>
        </ul>
      </PolicySection>

      <PolicySection id="data-retention" title="4. Data retention">
        <p>
          We retain your personal information for as long as your account is
          active or as needed to provide you the Service. If you delete your
          account, we will delete or anonymise your personal data within 30 days,
          except where we are required to retain it for legal or regulatory
          purposes.
        </p>
        <p>
          Aggregated, anonymised usage statistics that cannot identify you may
          be retained indefinitely.
        </p>
      </PolicySection>

      <PolicySection id="security" title="5. Security">
        <p>
          We implement industry-standard technical and organisational measures to
          protect your information, including encryption in transit (TLS) and at
          rest. API keys you provide are stored in encrypted form and never
          logged in plain text.
        </p>
        <p>
          No method of transmission or storage is 100% secure. While we strive
          to protect your information, we cannot guarantee absolute security. If
          you believe your account has been compromised, please contact us
          immediately.
        </p>
      </PolicySection>

      <PolicySection id="your-rights" title="6. Your rights">
        <p>
          Depending on your location, you may have the following rights regarding
          your personal information:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-gray-800">Access.</strong> Request a copy of the data we hold about you.</li>
          <li><strong className="text-gray-800">Correction.</strong> Request that we correct inaccurate or incomplete information.</li>
          <li><strong className="text-gray-800">Deletion.</strong> Request that we delete your personal data.</li>
          <li><strong className="text-gray-800">Portability.</strong> Request your data in a structured, machine-readable format.</li>
          <li><strong className="text-gray-800">Objection.</strong> Object to certain uses of your data, including direct marketing.</li>
        </ul>
        <p>
          To exercise any of these rights, email us at{" "}
          <a href="mailto:privacy@lexgrip.com" className="text-emerald-600 hover:underline">
            privacy@lexgrip.com
          </a>
          . We will respond within 30 days.
        </p>
      </PolicySection>

      <PolicySection id="cookies" title="7. Cookies">
        <p>
          We use cookies and similar tracking technologies to maintain your
          session, remember your preferences, and understand how the Service is
          used. Specifically:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-gray-800">Essential cookies</strong> are required for the Service to function and cannot be disabled.</li>
          <li><strong className="text-gray-800">Analytics cookies</strong> help us understand usage patterns. You may opt out by adjusting your browser settings or using a cookie opt-out tool.</li>
        </ul>
        <p>
          Most browsers allow you to control cookies through their settings.
          Disabling cookies may affect your ability to use parts of the Service.
        </p>
      </PolicySection>

      <PolicySection id="childrens-privacy" title="8. Children's privacy">
        <p>
          The Service is not directed to children under 13. We do not knowingly
          collect personal information from children under 13. If you are a
          parent or guardian and believe your child has provided us with personal
          information, please contact us and we will delete that information.
        </p>
      </PolicySection>

      <PolicySection id="changes" title="9. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. We will notify you
          of material changes by posting the new policy on this page and updating
          the effective date. For significant changes, we may also send an email
          notification to the address associated with your account.
        </p>
        <p>
          Your continued use of the Service after any changes constitutes your
          acceptance of the updated policy.
        </p>
      </PolicySection>

      <PolicySection id="contact" title="10. Contact us">
        <p>
          If you have questions or concerns about this Privacy Policy or our
          data practices, please contact us:
        </p>
        <div className="bg-gray-50 rounded-xl p-5 mt-2">
          <p className="font-semibold text-gray-800">Lexgrip</p>
          <p>
            Email:{" "}
            <a href="mailto:privacy@lexgrip.com" className="text-emerald-600 hover:underline">
              privacy@lexgrip.com
            </a>
          </p>
          <p>Website: <a href="https://lexgrip.com" className="text-emerald-600 hover:underline">lexgrip.com</a></p>
        </div>
      </PolicySection>
    </PolicyLayout>
  );
}
