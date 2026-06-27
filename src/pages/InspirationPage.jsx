import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ResponsiveImage from '../components/ResponsiveImage';
import SectionIntro from '../components/SectionIntro';
import usePageTitle from '../hooks/usePageTitle';
import { inspirations } from '../siteData';

const peopleWhoShapedTheVision = inspirations.map((person) => ({
  name: person.name,
  role: person.role,
  image: person.image,
  text: person.summary,
}));

const lessons = [
  {
    icon: 'C',
    title: 'Compassion',
    text: 'Service must reach people where they are, especially when hardship has made hope difficult.',
  },
  {
    icon: 'S',
    title: 'Service',
    text: 'Influence becomes meaningful when it is used to lift children, families, and communities.',
  },
  {
    icon: 'I',
    title: 'Integrity',
    text: 'Trust is built through honesty, consistency, and responsibility in every act of support.',
  },
  {
    icon: 'L',
    title: 'Leadership',
    text: 'Leadership is not only visibility. It is the courage to guide, protect, and create opportunity.',
  },
  {
    icon: 'F',
    title: 'Faith',
    text: 'Faith keeps service anchored in purpose, humility, and the belief that lives can change.',
  },
  {
    icon: 'R',
    title: 'Resilience',
    text: 'Young people can rise through difficulty when someone helps them see strength within themselves.',
  },
  {
    icon: 'H',
    title: 'Hope',
    text: 'Hope becomes powerful when it is paired with mentoring, education, and visible support.',
  },
  {
    icon: 'CR',
    title: 'Community Responsibility',
    text: 'A stronger future is built when communities share responsibility for the next generation.',
  },
];

const foundationConnections = [
  {
    title: 'Education support',
    text:
      'School visits show why children need encouragement, learning support, and visible reminders that their future matters.',
  },
  {
    title: 'Basketball mentorship',
    text:
      'Coaching influences and camp moments show how sport can teach discipline, confidence, teamwork, and positive identity.',
  },
  {
    title: 'Girl child confidence',
    text:
      'Girls shooting camp and cultural-value moments show why the foundation affirms girls with dignity, voice, and opportunity.',
  },
  {
    title: 'Humanitarian assistance',
    text:
      'Relief supplies and outreach visits show why compassion must become practical action for vulnerable families.',
  },
  {
    title: 'Community encouragement',
    text:
      'IDP and community service moments show the foundation standing with people during difficult seasons.',
  },
];

const galleryImages = [
  {
    image: '/media/school-visit-hope.jpeg',
    title: 'Hope in school communities',
    caption:
      'Children gathered with energy and expectation, reflecting why education, mentorship, and community care matter.',
  },
  {
    image: '/media/bishop-david-oyedepo.jpeg',
    title: 'Faith that strengthens purpose',
    caption:
      'A faith influence connected to the belief that all things are possible through Christ who strengthens.',
  },
  {
    image: '/media/coach-oliver-johnson.jpeg',
    title: 'Challenged to improve',
    caption:
      'A coaching influence that challenged improvement in rebounding ability and personal discipline.',
  },
  {
    image: '/media/masai-ujiri.jpeg',
    title: 'Dreaming beyond borders',
    caption:
      'A reminder that African basketball can inspire leadership, ambition, and opportunity across communities and nations.',
  },
  {
    image: '/media/samuel-amedu.jpeg',
    title: 'Governance and mentorship',
    caption:
      'A basketball governance influence connected to mentorship, structure, and experience in organized basketball.',
  },
  {
    image: '/media/coach-mike-akubo.jpeg',
    title: 'Education and structured training',
    caption:
      'A coaching influence that encouraged education, basketball development, discipline, and structured training.',
  },
  {
    image: '/media/founder-coach-baker-camp.jpeg',
    title: 'Learning to coach better',
    caption:
      'The founder attending a coaching camp, reflecting humility, growth, and continued learning.',
  },
  {
    image: '/media/idp-mangu-service.jpeg',
    title: 'Standing with vulnerable families',
    caption:
      'Service among displaced and vulnerable families, reflecting compassion, dignity, and humanitarian responsibility.',
  },
  {
    image: '/media/girl-child-cultural-values.jpeg',
    title: 'Culture, dignity, and confidence',
    caption:
      'A girl child encouragement moment affirming cultural values, identity, and confidence.',
  },
];

function InspirationPage() {
  usePageTitle('The Inspiration Behind the Foundation');
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const activeImage = activeImageIndex === null ? null : galleryImages[activeImageIndex];

  useEffect(() => {
    if (activeImageIndex === null) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveImageIndex(null);
      }

      if (event.key === 'ArrowRight') {
        setActiveImageIndex((currentIndex) =>
          currentIndex === null ? currentIndex : (currentIndex + 1) % galleryImages.length,
        );
      }

      if (event.key === 'ArrowLeft') {
        setActiveImageIndex((currentIndex) =>
          currentIndex === null
            ? currentIndex
            : (currentIndex - 1 + galleryImages.length) % galleryImages.length,
        );
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImageIndex]);

  const showPreviousImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === null ? currentIndex : (currentIndex - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  const showNextImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === null ? currentIndex : (currentIndex + 1) % galleryImages.length,
    );
  };

  return (
    <main>
      <PageHero
        eyebrow="Inspiration"
        title="The Inspiration Behind the Foundation"
        subtitle="The people, experiences, and values that inspired a lifelong commitment to service."
        image="/media/school-visit-hope.jpeg"
        imageAlt="Children gathered during a hopeful school community visit"
      />

      <section className="section-space">
        <div className="container inspiration-opening-grid">
          <div>
            <SectionIntro
              eyebrow="Opening Reflection"
              title="A mission shaped by people, places, and responsibility."
              text="The Kevin Nambam Ninmol Foundation grew from lived experience, the discipline of basketball, the influence of mentors, and direct encounters with children and families who needed care, guidance, and opportunity."
            />
            <div className="stacked-copy">
              <p>
                The images behind this page show more than memories. They reveal relationships, service moments,
                school visits, community hardship, and visible examples of leadership. Together, they point to a
                conviction that personal progress becomes more meaningful when it helps others rise.
              </p>
              <p>
                Basketball opened doors, but the people along the journey gave those doors deeper purpose. Coaches
                taught discipline. Communities revealed need. Children gave the mission urgency. Faith and resilience
                shaped the belief that fear does not have to define a young person's future.
              </p>
            </div>
          </div>
          <aside className="inspiration-pullquote">
            <p>
              "The foundation began where inspiration met responsibility: in the faces of children, the wisdom of
              mentors, and the belief that hope must become action."
            </p>
          </aside>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container">
          <SectionIntro
            eyebrow="The People Who Shaped the Vision"
            title="Mentors, leaders, communities, and everyday heroes."
            text="The people represented in these images point to the kind of influence that lasts: guidance, example, discipline, courage, and service."
            centered
          />
          <div className="inspiration-people-grid">
            {peopleWhoShapedTheVision.map((person) => (
              <article key={person.name} className="inspiration-person-card">
                <ResponsiveImage
                  src={person.image}
                  alt={person.name}
                  widths={[360, 640, 960]}
                  sizes="(max-width: 1080px) 100vw, 50vw"
                />
                <div>
                  <p className="program-tag">{person.role}</p>
                  <h3>{person.name}</h3>
                  <p>{person.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Lessons That Remain"
            title="The values that continue to guide the work."
            text="These lessons connect the founder's journey to the foundation's public mission: serving with dignity, building trust, and creating practical opportunity."
            centered
          />
          <div className="inspiration-lesson-grid">
            {lessons.map((lesson) => (
              <article key={lesson.title} className="inspiration-lesson-item">
                <span className="inspiration-lesson-icon" aria-hidden="true">
                  {lesson.icon}
                </span>
                <h3>{lesson.title}</h3>
                <p>{lesson.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container inspiration-story-stack">
          <article className="info-panel">
            <p className="program-tag">Why the Foundation Was Established</p>
            <h2>To turn personal inspiration into public good.</h2>
            <div className="stacked-copy">
              <p>
                The foundation was established because talent alone is not enough. Young people need guidance,
                encouragement, safe spaces, education support, and people willing to walk with them through difficult
                seasons.
              </p>
              <p>
                The inspiration images show a mission broader than sport. They connect basketball to care, education,
                humanitarian response, community development, and the belief that every child deserves a real chance
                to grow.
              </p>
            </div>
          </article>

          <div className="inspiration-program-grid" aria-label="How the inspiration connects to foundation work">
            {foundationConnections.map((item) => (
              <article key={item.title} className="inspiration-program-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Inspiration Gallery"
            title="Images that carry the story."
            text="Each image represents a person, place, or lesson that helped shape the foundation's commitment to dignity, service, and opportunity."
            centered
          />
          <div className="inspiration-gallery-grid">
            {galleryImages.map((item, index) => (
              <article key={item.image} className="inspiration-gallery-card">
                <button
                  type="button"
                  className="inspiration-gallery-button"
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`Open image: ${item.title}`}
                >
                  <ResponsiveImage
                    src={item.image}
                    alt={item.title}
                    widths={[360, 640, 960]}
                    sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 33vw"
                  />
                  <span className="inspiration-gallery-copy">
                    <strong>{item.title}</strong>
                    <span>{item.caption}</span>
                  </span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container inspiration-story-stack">
          <article className="info-panel">
            <p className="program-tag">Looking Ahead</p>
            <h2>The same inspiration continues to shape the future.</h2>
            <p>
              As the foundation grows, these influences remain its compass. Mentors remind the team to lead with
              discipline. Children remind the team to keep hope practical. Vulnerable communities remind the team to
              serve with humility. Basketball reminds the team that one opportunity can change the direction of a life.
            </p>
          </article>

          <article className="inspiration-featured-quote" aria-label="Featured quote">
            <p className="program-tag">Featured Quote</p>
            <blockquote>
              "When inspiration becomes responsibility, service becomes a legacy that can outlive one person's story."
            </blockquote>
          </article>
        </div>
      </section>

      <section className="section-space section-accent-band">
        <div className="container cta-band">
          <div>
            <p className="eyebrow">Call to Action</p>
            <h2>Join Us in Continuing the Legacy</h2>
            <p>
              Help turn inspiration into practical support for young people, families, and communities.
            </p>
          </div>
          <div className="cta-band-actions">
            <Link to="/donate" className="button button-accent">
              Support Our Work
            </Link>
            <Link to="/get-involved#volunteer-form" className="button button-ghost">
              Become a Volunteer
            </Link>
            <Link to="/get-involved" className="button button-ghost">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {activeImage ? (
        <div
          className="inspiration-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          onClick={() => setActiveImageIndex(null)}
        >
          <div className="inspiration-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="inspiration-lightbox-close"
              onClick={() => setActiveImageIndex(null)}
            >
              Close
            </button>
            <ResponsiveImage
              src={activeImage.image}
              alt={activeImage.title}
              widths={[640, 960, 1280]}
              sizes="100vw"
              loading="eager"
            />
            <div className="inspiration-lightbox-caption">
              <h3>{activeImage.title}</h3>
              <p>{activeImage.caption}</p>
            </div>
            <div className="inspiration-lightbox-nav">
              <button type="button" onClick={showPreviousImage}>
                Previous
              </button>
              <button type="button" onClick={showNextImage}>
                Next
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}

export default InspirationPage;
