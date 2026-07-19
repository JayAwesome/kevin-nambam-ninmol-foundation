import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import usePageTitle from '../hooks/usePageTitle';

function PrivacyPolicyPage() {
  usePageTitle('Privacy Policy');

  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How the foundation collects, uses, and protects personal information on this website."
        image="/media/founder-speaking-highlight.jpeg"
        imageAlt="Kevin Nambam Ninmol speaking during a foundation activity"
      />

      <section className="section-space">
        <div className="container legal-page">
          <SectionIntro
            eyebrow="Privacy"
            title="We respect the privacy of visitors, supporters, and partners."
            text="The information below explains what data may be collected through our forms and how it is handled."
          />

          <article className="legal-content">
            <h2>Information we collect</h2>
            <p>
              The foundation may collect your name, email address, phone number, country, city, state, areas of interest, and message when you submit a contact form, volunteer interest form, or newsletter signup.
            </p>
            <p>
              We may also receive technical information such as your IP address, browser type, and the pages you visit for security, site operation, and basic analytics purposes.
            </p>

            <h2>How we use your information</h2>
            <p>
              We use the information you provide to respond to enquiries, process volunteer or partnership interest, send updates if you have opted in, and improve the operation of the website.
            </p>

            <h2>Third-party services</h2>
            <p>
              This website may use Google reCAPTCHA and embedded Google Maps content. These services may process limited technical information in accordance with their own privacy policies.
            </p>

            <h2>Data protection</h2>
            <p>
              We keep personal information only for as long as needed for legitimate foundation purposes and protect it using reasonable administrative, technical, and physical safeguards.
            </p>
            <p>
              If you would like to request access to or deletion of personal data related to your contact or newsletter submission, please contact the foundation at the email address listed on this site.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicyPage;
