import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import usePageTitle from '../hooks/usePageTitle';

function TermsOfUsePage() {
  usePageTitle('Terms of Use');

  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        subtitle="The rules that govern how visitors may use the foundation website and its forms."
        image="/media/idp-mangu-service.jpeg"
        imageAlt="Community members gathered during a foundation service moment"
      />

      <section className="section-space">
        <div className="container legal-page">
          <SectionIntro
            eyebrow="Terms"
            title="Please use this website responsibly and respectfully."
            text="By accessing the site, you agree to these terms and to the lawful use of the content, forms, and contact details provided here."
          />

          <article className="legal-content">
            <h2>Permitted use</h2>
            <p>
              You may use this website to learn about the foundation, explore programs, contact the team, donate, or express interest in volunteering or partnership.
            </p>
            <p>
              You may not use the site for unlawful purposes, impersonation, spam, abusive contact, scraping, or interference with the site’s operation.
            </p>

            <h2>Forms and submissions</h2>
            <p>
              Information submitted through the contact, newsletter, or volunteer forms is intended for legitimate foundation communications and is subject to the privacy practices described on this website.
            </p>

            <h2>Content</h2>
            <p>
              The site’s text, images, and media are provided for informational and public-interest purposes. They may not be copied, republished, or redistributed without permission.
            </p>

            <h2>Limitation of liability</h2>
            <p>
              The foundation makes reasonable efforts to keep the website accurate and available, but does not guarantee uninterrupted access or the absence of errors, delays, or third-party service interruptions.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default TermsOfUsePage;
