export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-3xl py-16 md:py-24 px-4">
      <div className="prose dark:prose-invert lg:prose-lg">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <p>
          UGTechsolution ("us", "we", or "our") operates the UGTechsolution website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information Collection and Use</h2>
        <p>
          We collect several different types of information for various purposes to provide and improve our Service to you.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Personal Data</h3>
        <p>
          While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Usage Data</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">AI Content Generator Data</h3>
        <p>
          When you use our AI Content Idea Generator tool, we collect the information you provide, such as target audience, keywords, and other preferences. This data is sent to a third-party AI provider (such as Google's Gemini) to generate the content ideas. We do not store your prompts or the generated content, but the third-party provider may have its own data retention policies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Data</h2>
        <p>UGTechsolution uses the collected data for various purposes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To provide and maintain our Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our Service</li>
          <li>To monitor the usage of our Service</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Security of Data</h2>
        <p>
          The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Links to Other Sites</h2>
        <p>
          Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us through our <a href="/contact" className="text-primary hover:underline">contact page</a>.
        </p>
      </div>
    </div>
  );
}
