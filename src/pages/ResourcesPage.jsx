import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import usePageTitle from '../hooks/usePageTitle';
import { blogPosts, reports } from '../siteData';

const publications = [
  {
    title: 'Foundation Profile',
    type: 'Publication',
    description: 'A concise organizational profile for donors, churches, partners, and institutions.',
  },
  {
    title: 'Safeguarding Summary',
    type: 'Policy Summary',
    description: 'A short overview of child protection, conduct, transparency, and data privacy commitments.',
  },
  {
    title: 'Partnership Brief',
    type: 'Partner Document',
    description: 'A simple brief explaining how organizations can collaborate with the foundation.',
  },
];

function ResourcesPage() {
  usePageTitle('Resources');

  return (
    <main>
      <PageHero
        eyebrow="Resources"
        title="Reports, updates, and documents."
        subtitle="A clear library for donors, partners, and supporters reviewing the foundation’s work."
        image="/media/hero-community.jpeg"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Reports"
            title="Annual and financial reporting."
            text="Downloadable report sections are ready for formal files as they become available."
            centered
          />
          <div className="reports-grid">
            {reports.map((report) => (
              <article key={report.title} className="report-card">
                <div className="report-card-top">
                  <span className="report-format-badge">{report.format}</span>
                  <span className="meta-line">{report.date}</span>
                </div>
                <p className="program-tag">{report.type}</p>
                <h3>{report.title}</h3>
                <p>{report.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container">
          <SectionIntro
            eyebrow="News"
            title="Latest updates."
            text="Short updates and reflections from foundation activity."
          />
          <div className="news-grid">
            {blogPosts.map((post) => (
              <article key={post.slug} className="news-card">
                <p className="program-tag">{post.category}</p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="meta-line">{post.date}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Publications"
            title="Useful documents for partners and institutions."
            text="These document sections give the site a professional resource structure while formal PDFs are prepared."
          />
          <div className="reports-grid">
            {publications.map((item) => (
              <article key={item.title} className="report-card">
                <p className="program-tag">{item.type}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default ResourcesPage;
