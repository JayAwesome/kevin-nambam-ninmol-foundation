import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import usePageTitle from '../hooks/usePageTitle';
import { blogPosts } from '../siteData';

function BlogPage() {
  usePageTitle('News');

  return (
    <main>
      <PageHero
        eyebrow="News and Stories"
        title="Articles, updates, and thought leadership."
        subtitle="A clean blog and news page helps the foundation feel active, transparent, and globally credible."
        image="/media/community-group.jpeg"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Blog and Updates"
            title="A simple, modern card layout for news and storytelling."
            centered
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

      <NewsletterSection />
    </main>
  );
}

export default BlogPage;
