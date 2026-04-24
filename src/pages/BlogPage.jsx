import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import { useLanguage } from '../context/LanguageContext';
import usePageTitle from '../hooks/usePageTitle';
import { blogPosts } from '../siteData';

function BlogPage() {
  const { t } = useLanguage();
  usePageTitle(t('newsPage.title'));

  return (
    <main>
      <PageHero
        eyebrow={t('newsPage.heroEyebrow')}
        title={t('newsPage.heroTitle')}
        subtitle={t('newsPage.heroSubtitle')}
        image="/media/community-group.jpeg"
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
