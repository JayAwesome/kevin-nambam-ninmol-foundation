import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import usePageTitle from '../hooks/usePageTitle';

const observedThemes = [
  {
    title: 'Mentorship that opens doors',
    text:
      'The images repeatedly point to coaches, basketball leaders, and trusted figures whose presence helped shape discipline, confidence, and a wider vision of what sport can make possible.',
  },
  {
    title: 'Compassion in difficult places',
    text:
      'The outreach images show service among vulnerable families, including people facing displacement and hardship. They reflect a belief that dignity must remain visible even when life is difficult.',
  },
  {
    title: 'Children as the center of purpose',
    text:
      'School and community images show children gathered with hope, curiosity, and energy. Their presence gives the mission its urgency and keeps the work focused on the next generation.',
  },
  {
    title: 'Basketball as a bridge',
    text:
      'Basketball appears not only as a game, but as a meeting point for mentorship, leadership, education, discipline, and positive identity.',
  },
];

const peopleWhoShapedTheVision = [
  {
    name: 'Coach Michael Akuboh',
    role: 'Basketball mentor and development influence',
    image: '/media/inspiration/coach-michael-akuboh.jpeg',
    text:
      'This image reflects friendship, respect, and the quiet strength of mentorship. It points to the role coaches can play in helping young people see discipline as a pathway to growth.',
  },
  {
    name: 'Coach Oliver B. Johnson',
    role: 'Respected coach and role model',
    image: '/media/inspiration/coach-oliver-johnson.jpeg',
    text:
      'The image communicates honor for those who teach, guide, and remain present. It speaks to the kind of leadership that is patient, relational, and deeply formative.',
  },
  {
    name: 'Col. Samuel Amedu',
    role: 'Basketball administrator and institutional leader',
    image: '/media/inspiration/col-samuel-amedu.jpeg',
    text:
      'This image points to organized leadership within African basketball and the importance of structure, governance, and credible institutions in developing young people.',
  },
  {
    name: 'Masai Ujiri',
    role: 'Global basketball and youth-development inspiration',
    image: '/media/inspiration/masai-ujiri.jpeg',
    text:
      "The image connects the founder's inspiration to a wider African basketball story: one where sport can carry dreams, leadership, education, and continental pride.",
  },
];

const lessons = [
  {
    title: 'Compassion must be practical',
    text:
      'Kindness becomes meaningful when it reaches people where they are, whether through encouragement, material support, mentoring, or simple human presence.',
  },
  {
    title: 'Resilience can be taught',
    text:
      'The images show young people and communities facing real challenges, yet still responding to encouragement. That is the soil where resilience grows.',
  },
  {
    title: 'Leadership is service',
    text:
      "True leadership is not only position or visibility. It is the willingness to stand with others, guide them, and use one's experience to create opportunity.",
  },
  {
    title: 'Hope needs structure',
    text:
      'Hope becomes sustainable when it is supported by programs, mentors, accountable leadership, and pathways that help young people keep moving forward.',
  },
];

const galleryImages = [
  {
    image: '/media/inspiration/idp-mangu-service.jpeg',
    title: 'Standing with vulnerable families',
    caption:
      'A moment of service with displaced families in Mangu, reflecting compassion, dignity, and humanitarian responsibility.',
  },
  {
    image: '/media/inspiration/children-duty-aspiration.jpeg',
    title: 'Children who see possibility',
    caption:
      'A joyful community moment showing how children respond when a visible role model encourages them to dream beyond their circumstances.',
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
      'An image connected to organized basketball leadership and the value of credible institutions in youth development.',
  },
  {
    image: '/media/inspiration/masai-ujiri.jpeg',
    title: 'Dreaming beyond borders',
    caption:
      'A reminder that African basketball can inspire leadership, ambition, and opportunity across communities and nations.',
  },
  {
    image: '/media/inspiration/school-visit-hope.jpeg',
    title: 'Hope in school communities',
    caption:
      'Children gathered with energy and expectation, reflecting why education, mentorship, and community care matter.',
  },
];

const websiteSummary =
  'The inspiration behind the Kevin Nambam Ninmol Foundation is rooted in lived experience, basketball mentorship, community service, and the dignity of vulnerable people. The images that shaped this page reveal a founder influenced by coaches, basketball leaders, children, displaced families, and school communities. They show that service is not abstract; it is found in standing beside families facing hardship, encouraging children to believe in a bigger future, and learning from mentors who used sport to build discipline and leadership. These experiences shaped a worldview centered on compassion, resilience, accountability, and opportunity. The foundation was established to turn those lessons into practical support through education, youth empowerment, humanitarian relief, community development, and mentorship. Its mission continues to be guided by one conviction: every young person deserves hope, dignity, guidance, and the chance to rise beyond fear.';

const homepageSummary =
  "The foundation was inspired by mentors, children, displaced families, and community moments that revealed the power of sport, education, and compassion. These experiences shaped Kevin's commitment to help young people rise beyond fear, access opportunity, and build lives of dignity, confidence, and hope.";

function InspirationPage() {
  usePageTitle('The Inspiration Behind the Foundation');

  return (
    <main>
      <PageHero
        eyebrow="Inspiration"
        title="The Inspiration Behind the Foundation"
        subtitle="The people, moments, and values that shaped a mission of dignity, service, and opportunity."
        image="/media/inspiration/school-visit-hope.jpeg"
      />

      <section className="section-space">
        <div className="container inspiration-opening-grid">
          <div>
            <SectionIntro
              eyebrow="Opening Reflection"
              title="A mission shaped by people, places, and responsibility."
              text="The Kevin Nambam Ninmol Foundation did not begin as an abstract idea. It grew from lived experience, from the discipline of basketball, from the influence of mentors, and from direct encounters with children and families who needed encouragement, care, and opportunity."
            />
            <div className="stacked-copy">
              <p>
                The images behind this story reveal a founder shaped by more than personal ambition. They show
                relationships with coaches and basketball leaders, moments of service with vulnerable communities,
                and school visits where children gathered with hope in their faces. Together, these moments point
                to a simple but powerful conviction: success becomes meaningful when it helps others rise.
              </p>
              <p>
                Basketball opened doors, but service gave those doors a deeper purpose. The same game that taught
                discipline, confidence, teamwork, and resilience also became a language for reaching young people
                who needed guidance and belief.
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
            eyebrow="Image Analysis"
            title="What the inspiration images reveal."
            text="Across the available images, the same themes return: mentorship, vulnerable communities, children, basketball, leadership, service, faith-shaped resilience, and hope."
            centered
          />
          <div className="inspiration-theme-grid">
            {observedThemes.map((theme) => (
              <article key={theme.title} className="inspiration-theme-card">
                <h3>{theme.title}</h3>
                <p>{theme.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="The People Who Shaped the Vision"
            title="Mentors, leaders, communities, and everyday heroes."
            text="The images identify influential basketball figures and community moments that helped shape the founder's values. Their lesson is not fame, but responsibility: when people invest in you, you become responsible for investing in others."
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

      <section className="section-space section-alt">
        <div className="container inspiration-story-stack">
          <article className="info-panel">
            <p className="program-tag">Lessons Learned</p>
            <h2>What these experiences taught.</h2>
            <div className="inspiration-lesson-grid">
              {lessons.map((lesson) => (
                <div key={lesson.title} className="inspiration-lesson-item">
                  <h3>{lesson.title}</h3>
                  <p>{lesson.text}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="info-panel">
            <p className="program-tag">Why the Foundation Was Established</p>
            <h2>To turn personal inspiration into public good.</h2>
            <div className="stacked-copy">
              <p>
                The foundation was established because the founder saw that talent alone is not enough. Young
                people need encouragement, safe spaces, role models, education support, and people willing to walk
                with them through difficult seasons.
              </p>
              <p>
                The images of displaced families and school communities make the mission broader than basketball.
                They show a humanitarian call: to serve with dignity, to respond to hardship with compassion, and
                to create opportunities that can outlast a single event.
              </p>
            </div>
          </article>

          <article className="info-panel">
            <p className="program-tag">Looking Ahead</p>
            <h2>The same inspiration continues to guide the work.</h2>
            <p>
              As the foundation grows, these influences remain its compass. Mentors remind the team to lead with
              discipline. Children remind the team to keep hope practical. Vulnerable communities remind the team
              to serve with humility. Basketball reminds the team that one opportunity can change the direction
              of a life.
            </p>
          </article>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Inspiration Gallery Captions"
            title="Images that carry the story."
            text="Suggested captions for the inspiration gallery, based on the people, places, and values visible in the images."
            centered
          />
          <div className="inspiration-gallery-grid">
            {galleryImages.map((item) => (
              <article key={item.image} className="inspiration-gallery-card">
                <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container">
          <SectionIntro
            eyebrow="Additional Story Assets"
            title="Summary copy for website and homepage use."
            text="These concise versions can be reused in campaign materials, homepage highlights, donor briefs, or printed communication."
          />
          <div className="inspiration-summary-grid">
            <article className="inspiration-summary-card">
              <p className="program-tag">Website Summary</p>
              <h3>150-word introduction</h3>
              <p>{websiteSummary}</p>
            </article>
            <article className="inspiration-summary-card">
              <p className="program-tag">Homepage Summary</p>
              <h3>50-word version</h3>
              <p>{homepageSummary}</p>
            </article>
            <article className="inspiration-summary-card inspiration-quote-card">
              <p className="program-tag">Featured Pull Quote</p>
              <h3>Quote for page highlight</h3>
              <p>
                "The foundation began where inspiration met responsibility: in the faces of children, the wisdom
                of mentors, and the belief that hope must become action."
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-space section-accent-band">
        <div className="container cta-band">
          <div>
            <p className="eyebrow">Closing Message</p>
            <h2>Hope becomes powerful when it is shared.</h2>
            <p>
              The foundation exists so that inspiration does not stop with one life. It becomes service, guidance,
              opportunity, and lasting impact for young people and communities.
            </p>
          </div>
          <div className="cta-band-actions">
            <Link to="/about" className="button button-ghost">
              Read About Us
            </Link>
            <Link to="/donate" className="button button-accent">
              Support the Mission
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default InspirationPage;
