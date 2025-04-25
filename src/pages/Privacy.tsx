const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00E5E5] mb-4">Cookie Policy</h2>
              <p className="text-gray-300 mb-4">
                Our website uses cookies to enhance your browsing experience. Cookies are small text files that are placed on your device when you visit our website. We use both first-party and third-party cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Essential cookies: Required for basic website functionality</li>
                <li>Analytics cookies: Help us understand how visitors use our website</li>
                <li>Preference cookies: Remember your settings and choices</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00E5E5] mb-4">Your Cookie Choices</h2>
              <p className="text-gray-300 mb-4">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00E5E5] mb-4">Data Collection and Usage</h2>
              <p className="text-gray-300 mb-4">
                We collect and process your personal data only with your consent or where we have legitimate interests to do so. The data we collect may include:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Information you provide through our contact forms</li>
                <li>Usage data and analytics information</li>
                <li>Technical data such as your IP address and browser information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00E5E5] mb-4">Third-Party Services</h2>
              <p className="text-gray-300 mb-4">
                We use the following third-party services that may collect information about you:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Google Analytics for website analytics</li>
                <li>Formspree for form submissions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00E5E5] mb-4">Your Rights</h2>
              <p className="text-gray-300 mb-4">
                Under applicable data protection laws, you have the following rights:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>The right to access your personal data</li>
                <li>The right to rectification of inaccurate personal data</li>
                <li>The right to erasure of your personal data</li>
                <li>The right to restrict processing of your personal data</li>
                <li>The right to data portability</li>
                <li>The right to object to processing of your personal data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#00E5E5] mb-4">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about our privacy policy or how we handle your data, please contact us through our contact form or email us at privacy@valctrl.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 