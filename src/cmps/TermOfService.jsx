// import React from "react";

// const TermOfService = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-6 text-gray-800">
//       <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
//       <p className="mb-4">Last updated: May 21, 2025</p>
//       <p className="mb-4">
//         Welcome to our Terms of Service page. Please review these terms before using our website.
//       </p>
//     </div>
//   );
// };

// export default TermOfService;

const TermsOfService = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms of Service</h1>
      <p className="terms-date">Last updated: May 21, 2025</p>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use the site.
        </p>
      </section>

      <section>
        <h2>2. Modifications</h2>
        <p>
          We reserve the right to change these terms at any time. We will notify users of any changes by updating the date at the top of this page.
        </p>
      </section>

      <section>
        <h2>3. User Responsibilities</h2>
        <p>
          You agree not to misuse our services or interfere with the functionality of the platform. Users are expected to use the site in a lawful and respectful manner.
        </p>
      </section>

      <section>
        <h2>4. Intellectual Property</h2>
        <p>
          All content on this site, including text, images, and code, is the property of the company or its licensors. Unauthorized use is strictly prohibited.
        </p>
      </section>

      <section>
        <h2>5. Account Security</h2>
        <p>
          If you create an account, you are responsible for maintaining its confidentiality and for any activity under your credentials.
        </p>
      </section>

      <section>
        <h2>6. Limitation of Liability</h2>
        <p>
          We are not liable for any damages arising from the use or inability to use the service, including but not limited to loss of data or profit.
        </p>
      </section>

      <section>
        <h2>7. Third-Party Links</h2>
        <p>
          Our service may contain links to third-party websites. We are not responsible for the content or practices of any linked sites.
        </p>
      </section>

      <section>
        <h2>8. Termination</h2>
        <p>
          We reserve the right to suspend or terminate access to our service at any time, without prior notice or liability.
        </p>
      </section>

      <section>
        <h2>9. Governing Law</h2>
        <p>
          These terms shall be governed by and interpreted in accordance with the laws of the jurisdiction in which our company operates.
        </p>
      </section>

      <section>
        <h2>10. Contact Us</h2>
        <p>
          For questions or concerns regarding these terms, please contact us at support@example.com.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
