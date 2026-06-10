import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import { useLanguage } from '../context/LanguageContext';
import usePageTitle from '../hooks/usePageTitle';
import { blogPosts } from '../siteData';

function BlogPage() {
  const { t } = useLanguage();
  usePageTitle(t('newsPage.title'));
  const localizedPosts = t('content.blogPosts');

  return (
    <main>
      <PageHero
        eyebrow={t('newsPage.heroEyebrow')}
        title={t('newsPage.heroTitle')}
        subtitle={t('newsPage.heroSubtitle')}
        image="/media/humanitarian-relief-supplies.jpeg"
        imageAlt="Relief supplies arranged during a foundation community outreach"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow={t('newsPage.introEyebrow')}
            title={t('newsPage.introTitle')}
            text={t('newsPage.introText')}
            centered
          />
          <div className="news-grid">
            {blogPosts.map((post, index) => (
              <article key={post.slug} className="news-card">
                <p className="program-tag">{localizedPosts[index]?.category ?? post.category}</p>
                <h3>{localizedPosts[index]?.title ?? post.title}</h3>
                <p>{localizedPosts[index]?.excerpt ?? post.excerpt}</p>
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
