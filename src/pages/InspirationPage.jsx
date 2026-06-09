import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import usePageTitle from '../hooks/usePageTitle';

const peopleWhoShapedTheVision = [
  {
    name: 'Coach Michael Akuboh',
    role: 'Basketball mentor and development influence',
    image: '/media/inspiration/coach-michael-akuboh.jpeg',
    text:
      'A reminder that mentorship can be both personal and practical. Coaches help young people turn discipline, correction, and encouragement into confidence.',
  },
  {
    name: 'Coach Oliver B. Johnson',
    role: 'Respected coach and role model',
    image: '/media/inspiration/coach-oliver-johnson.jpeg',
    text:
      'His influence reflects the value of patient leadership: showing up, guiding others, and helping athletes grow beyond the scoreboard.',
  },
  {
    name: 'Col. Samuel Amedu',
    role: 'Basketball administrator and institutional leader',
    image: '/media/inspiration/col-samuel-amedu.jpeg',
    text:
      'This inspiration points to the importance of structure, governance, and credible leadership in building programs that can last.',
  },
  {
    name: 'Masai Ujiri',
    role: 'Global basketball and youth-development inspiration',
    image: '/media/inspiration/masai-ujiri.jpeg',
    text:
      'A wider African basketball example showing that sport can carry education, leadership, pride, and opportunity across borders.',
  },
];

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
      'School and orphanage visits revealed how learning support, encouragement, and basic materials can protect a child from being left behind.',
  },
  {
    title: 'Healthcare initiatives',
    text:
      'Humanitarian encounters reinforce that wellbeing matters. Families facing vulnerability need care, dignity, and connection to practical support.',
  },
  {
    title: 'Humanitarian assistance',
    text:
      'Images from outreach with displaced and vulnerable families show why compassion must become direct action in moments of need.',
  },
  {
    title: 'Community development',
    text:
      'The foundation is shaped by communities, schools, and local leaders working together to create safer spaces for growth.',
  },
  {
    title: 'Youth empowerment',
    text:
      'Basketball remains a bridge for mentorship, discipline, teamwork, leadership, and positive identity among young people.',
  },
];

const galleryImages = [
  {
    image: '/media/inspiration/idp-mangu-service.jpeg',
    title: 'Standing with vulnerable families',
    caption:
      'Service among displaced families in Mangu, reflecting compassion, dignity, and humanitarian responsibility.',
  },
  {
    image: '/media/inspiration/children-duty-aspiration.jpeg',
    title: 'Children who see possibility',
    caption:
      'A community moment showing how children respond when a visible role model encourages them to dream beyond their circumstances.',
  },
  {
    image: '/media/inspiration/school-visit-hope.jpeg',
    title: 'Hope in school communities',
    caption:
      'Children gathered with energy and expectation, reflecting why education, mentorship, and community care matter.',
  },
  {
    image: '/media/inspiration/coach-michael-akuboh.jpeg',
    title: 'Mentorship through basketball',
    caption:
      'A relationship of respect and encouragement, showing how coaches can shape confidence and discipline.',
  },
  {
    image: '/media/inspiration/coach-oliver-johnson.jpeg',
    title: 'Honoring those who guide',
    caption:
      'A tribute to coaching influence, patient leadership, and the people who help athletes grow beyond the court.',
  },
  {
    image: '/media/inspiration/col-samuel-amedu.jpeg',
    title: 'Leadership and structure',
    caption:
      'A moment connected to organized basketball leadership and the value of credible institutions in youth development.',
  },
  {
    image: '/media/inspiration/masai-ujiri.jpeg',
    title: 'Dreaming beyond borders',
    caption:
      'A reminder that African basketball can inspire leadership, ambition, and opportunity across communities and nations.',
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
        image="/media/inspiration/school-visit-hope.jpeg"
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
                <img src={person.image} alt={person.name} loading="lazy" decoding="async" />
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
                  <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
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
            <img src={activeImage.image} alt={activeImage.title} />
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
