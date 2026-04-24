import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const en = {
  nav: {
    home: 'Home',
    about: 'About',
    leadership: 'Leadership',
    policies: 'Policies',
    programs: 'Programs',
    impact: 'Impact',
    getInvolved: 'Get Involved',
    donate: 'Donate',
    news: 'News',
    events: 'Events',
    contact: 'Contact',
  },
  ui: {
    menu: 'Menu',
    more: 'More',
    language: 'Language',
    english: 'English',
    french: 'French',
    hausa: 'Hausa',
    yoruba: 'Yoruba',
    igbo: 'Igbo',
    donate: 'Donate',
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode',
    readMore: 'Read More',
    seeImpact: 'See Impact',
  },
  footer: {
    text: 'A youth-focused foundation using sports, education, mentorship, and community support to build courageous futures.',
    explore: 'Explore',
    contact: 'Contact',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    copyright: 'Copyright (c) 2026 Kevin Nambam Ninmol Foundation. All rights reserved.',
  },
  newsletter: {
    eyebrow: 'Newsletter',
    title: 'Stay updated on our impact.',
    body: "Join our email list to receive stories, program updates, recent activities, and opportunities to support the foundation's work.",
    note: 'Build with us over the long term through updates that show where support is making a difference.',
    placeholder: 'Enter your email address',
    subscribe: 'Subscribe',
    emailLabel: 'Email address',
    empty: 'Please enter your email address.',
    success:
      'Thank you. Your newsletter signup has been captured in this placeholder flow and is ready to be connected to a live mailing system.',
  },
  credibility: {
    eyebrow: 'Credibility and Transparency',
    title: 'Built to inspire confidence among donors, partners, and institutions.',
    body: 'The foundation is committed to transparency, accountability, ethical stewardship, and responsible safeguarding practices as its work continues to grow.',
    trust: 'Trusted by communities and strengthened through visible service, practical partnerships, and responsible stewardship.',
    cta: 'Learn More About Our Governance',
  },
  floating: {
    whatsapp: 'WhatsApp Chat',
    whatsappAria: 'Chat with Kevin Nambam Ninmol Foundation on WhatsApp',
    faq: 'FAQ Assistant',
    assistantTitle: 'Foundation Assistant',
    assistantStatus: 'Online for quick guidance',
    assistantClose: 'Close assistant',
    assistantCopy:
      'Ask what the foundation does, how to donate, how to volunteer, or use one of the quick topic buttons below.',
    assistantInput: 'Ask a question...',
    assistantInputLabel: 'Ask the foundation assistant a question',
    send: 'Send',
    contactFoundation: 'Contact the Foundation',
    openWhatsapp: 'Open WhatsApp',
    viewPrograms: 'View Programs',
    goToDonate: 'Go to Donate',
    getInvolved: 'Get Involved',
    contactUs: 'Contact Us',
    topicWhatWeDo: 'What we do',
    topicDonate: 'How to donate',
    topicVolunteer: 'How to volunteer',
    topicContact: 'Contact details',
    topicFaq: 'General FAQs',
    responseWhatWeDo:
      'Kevin Nambam Ninmol Foundation uses basketball, mentorship, education support, and community outreach to help children and young people build confidence, make positive choices, and access opportunity.',
    responseDonate:
      'You can support the foundation through one-time or monthly giving. The Donate page explains giving tiers, what each amount supports, and the payment placeholder that can later be connected to Paystack or Flutterwave.',
    responseVolunteer:
      'Volunteers can support clinics, mentoring, outreach, and partnership activities. The Get Involved page explains where your time and skills can help and gives a direct route to connect with the team.',
    responseContact:
      'You can reach the foundation by phone, email, WhatsApp, or through the Contact page. The site also includes the office address and an embedded map to make the location easier to find.',
    responseFaq:
      'Common questions include how to support the foundation, whether organizations can partner, and how programs go beyond basketball into education, mentoring, and outreach.',
    fallback:
      'I do not have a precise answer for that yet, but I can guide you to the right page or help you contact the foundation directly on WhatsApp.',
    greeting:
      'Hello. I can help with what the foundation does, how to donate, how to volunteer, and other common questions.',
  },
  home: {
    title: 'Home',
    heroEyebrow: 'Kevin Nambam Ninmol Foundation',
    heroTitle: 'Empowering Youth Through Basketball, Education, and Mentorship',
    heroText:
      'We help young people choose hope over fear by opening pathways to growth, confidence, and opportunity through sport, learning, and guidance.',
    heroSupport:
      'Founded from lived experience and grounded in practical service, the foundation exists to help children and youth rise above limitation and pursue brighter futures.',
    trustBody:
      'Helping young people move from limitation to opportunity through consistent support and visible community engagement.',
    impactEyebrow: 'Impact Snapshot',
    impactTitle: 'A growing record of visible, community-rooted impact.',
    impactText:
      "A quick snapshot of the foundation's reach, delivery, and community presence.",
    aboutEyebrow: 'About Preview',
    aboutTitle: 'A personal story transformed into a public mission.',
    aboutText: 'A brief introduction to who we are and why this work exists.',
    aboutCopy:
      'The foundation uses sport, education support, and mentoring to help young people build confidence, make positive choices, and access opportunity.',
    aboutCta: 'Learn About Us',
    programsEyebrow: 'Programs',
    programsTitle: 'Focused programs that support learning, guidance, and youth development.',
    programsText: "A quick look at the foundation's main program areas.",
    programsCta: 'Read More on Programs',
    programLearnMore: 'Learn more',
  },
  donatePage: {
    title: 'Donate',
    heroEyebrow: 'Donate',
    heroTitle: 'Your support creates real change',
    heroSubtitle: 'This giving page is designed to make donating simple, clear, and trustworthy for every supporter.',
    giveEyebrow: 'Give Today',
    giveTitle: 'Choose how you want to support the mission.',
    giveText:
      'Your gift helps the foundation respond to practical needs through youth support, educational access, mentoring, and development initiatives across local and international giving options.',
    oneTime: 'One-time donation',
    monthly: 'Monthly donation',
    chooseCurrency: 'Choose your currency',
    currencyText:
      'Base donation amounts are set in NGN and displayed automatically in your selected currency.',
    customPlaceholder: 'Enter custom amount',
    customLabel: 'Custom donation amount',
    secureTitle: 'Secure payment options',
    secureText:
      'Paystack or Flutterwave can be connected here for secure one-time and monthly donations.',
    conversionNote: 'Approximate conversion:',
    transparencyEyebrow: 'Transparency',
    transparencyTitle: 'Where your money goes',
    transparencyBody:
      'Every contribution is used responsibly to create measurable impact. Donations help fund direct youth support, educational materials, mentoring activities, outreach delivery, and practical development programs.',
    transparencyStatement:
      'The foundation is committed to transparent stewardship so donors can understand how support is translated into practical work.',
    donorEyebrow: 'Donor Assurance',
    donorTitle: 'Giving should feel clear, secure, and trustworthy.',
    donorBody:
      'The foundation is committed to responsible stewardship, clear communication, and transparent use of resources so supporters can give with confidence.',
    donorReassurance: 'Every contribution is used responsibly to create measurable impact.',
    paymentNote: 'Payment gateway placeholder: Paystack / Flutterwave',
    ctaEyebrow: 'Donate',
    ctaTitle: 'Your support creates real change',
    ctaText:
      'Every donation helps extend opportunity, guidance, and practical support to young people who need it most.',
    giveNow: 'Give Now',
    donateNow: 'Donate Now',
    placeholderAlert: 'Secure payment integration placeholder.',
    subtitle: 'Support the work through clear, responsible giving.',
    chooseText: 'Choose an amount, select a giving frequency, and support the foundation with confidence.',
    impactIntroTag: 'What your gift makes possible',
    impactIntroText:
      'Each amount below is linked to a practical outcome so donors can understand what their support helps make possible.',
    ctaCopy:
      "Give today to help more young people access guidance, confidence, and practical opportunity through the foundation's work.",
    secureNote:
      'Every contribution is handled with the intention of supporting mission-aligned youth programs, education support, and accountable program delivery.',
    fundUseTag: 'Fund Use',
    fundUseTitle: 'Where your support goes',
    fundUseText:
      'Every contribution is directed toward youth programs, education support, and responsible delivery.',
    fundUseNote:
      'Donations are intended for mission-aligned activities that directly support young people and the safe delivery of programs.',
    fundUseMicro:
      'Funds are allocated to direct program delivery, education support, and the basic coordination required to run activities responsibly.',
    donorIntro:
      'Giving is designed to be simple, secure, and clear for both local and international supporters.',
    donorAssurance: 'Every contribution is used responsibly to create measurable impact.',
  },
  aboutPage: {
    title: 'About Us',
    heroEyebrow: 'About Us',
    heroTitle: 'About Us',
    heroSubtitle: 'Our story, identity, and commitment to youth development.',
    storyEyebrow: "Founder's Story",
    storyTitle: "Founder's Story",
    quote: 'Your beginning does not determine your end.',
    missionEyebrow: 'Our Mission',
    missionTitle: 'Our Mission',
    missionText: 'The mission defines why the foundation exists and how it serves young people.',
    goalsEyebrow: 'Our Goals',
    goalsTitle: 'Our Goals',
    goalsText: 'These priorities shape the kind of change the foundation is working toward.',
    objectivesEyebrow: 'Our Objectives',
    objectivesTitle: 'Our Objectives',
    objectivesText: 'These objectives keep the work focused, practical, and measurable.',
    visionTag: 'Vision',
    founderMessageTag: "Founder's Message",
    leadershipEyebrow: 'Leadership',
    leadershipTitle: 'Leadership and stewardship',
    leadershipText:
      'The foundation is led with a commitment to service, credibility, and responsible community impact.',
    nextEyebrow: 'Next Step',
    nextTitle: 'See how the foundation turns its mission into practical programs',
    nextText:
      'Explore the program areas to understand what the foundation does on the ground and how support translates into real opportunities for young people.',
    readPrograms: 'Read More on Programs',
    readLeadership: 'Read More on Leadership',
    viewPrograms: 'View Programs',
  },
  programsPage: {
    title: 'Programs',
    heroEyebrow: 'Programs',
    heroTitle: 'Programs designed to create clear, practical impact for young people.',
    heroSubtitle:
      'This page explains what the foundation does, how each program works, and what support makes possible.',
    introEyebrow: 'Program Areas',
    introTitle: 'Our work is structured around three clear areas of support.',
    introText:
      'Each program below shows its purpose, key activities, and the practical change it is designed to create.',
    categoryTag: 'Program Category',
    purpose: 'Purpose',
    activities: 'Key Activities',
    expectedImpact: 'Expected Impact',
    nextEyebrow: 'Next Step',
    nextTitle: 'See the evidence behind the work',
    nextText:
      'Visit the Impact page to see measurable reach, case stories, activity visuals, and reporting placeholders that show how the work is being delivered.',
    seeImpact: 'See Impact',
    viewImpact: 'View Impact',
  },
  impactPage: {
    title: 'Impact',
    heroEyebrow: 'Impact',
    heroTitle: 'Impact that is visible, honest, and community-rooted.',
    heroSubtitle:
      "This page focuses on results, evidence, and the visible outcomes of the foundation's work.",
    reachEyebrow: 'Our Reach',
    reachTitle: 'Measurable indicators of reach and program delivery.',
    reachText:
      'These figures show the scale of current youth engagement, community reach, and program delivery.',
    supportImpact: 'Support This Impact',
    evidenceTag: 'Evidence Snapshot',
    evidenceTitle: 'Visual overview of current reach and delivery',
    outcomesEyebrow: 'What Changed',
    outcomesTitle: 'Outcome areas that show how participation is translating into change.',
    outcomesText:
      'Beyond the numbers, the foundation looks for visible changes in confidence, participation, and decision-making.',
    caseEyebrow: 'Case Studies',
    caseTitle: 'Short stories that help explain the change behind the numbers.',
    caseText:
      "These stories show how support, encouragement, and structure can shift a young person's outlook.",
    changedEyebrow: 'What Has Changed',
    changedTitle: 'What has changed',
    changedText:
      'These before-and-after examples show the kind of progress the foundation is working to support.',
    before: 'Before',
    after: 'What changed',
    galleryEyebrow: 'Photo and Video Gallery',
    galleryTitle: 'Real photos and videos from activities',
    galleryText:
      "These images and clips show the foundation's work in real community and youth settings.",
    readDonate: 'Read More on Donate',
    reportsEyebrow: 'Reports & Documents',
    reportsTitle: 'Reporting materials that support professionalism.',
    reportsText:
      'These placeholders show the reporting structure used for annual communication, fund summaries, and program documentation.',
    downloadPlaceholder: 'Download Report Placeholder',
    nextEyebrow: 'Next Step',
    nextTitle: 'Help turn measurable impact into sustained support',
    nextText:
      'If this work aligns with your values, the Donate page shows giving options, fund-use priorities, and clear ways to support the foundation responsibly.',
    donate: 'Donate',
  },
  getInvolvedPage: {
    title: 'Get Involved',
    heroEyebrow: 'Get Involved',
    heroTitle: 'Turn your support into active impact.',
    heroSubtitle:
      'This page is designed to help visitors move from interest to action through volunteering, partnership, sponsorship, and internship opportunities.',
    whyEyebrow: 'Why Get Involved',
    whyTitle: 'There are meaningful ways to contribute at every level.',
    whyText:
      "Whether you are an individual, student, organization, or sponsor, getting involved helps expand the foundation's reach and strengthens support for young people.",
    readPrograms: 'Read more on Programs',
    volunteerEyebrow: 'Volunteer',
    volunteerTitle: 'Volunteer signup form',
    volunteerText:
      'Give your time, skills, and heart to support youth development, outreach activities, mentoring, and events.',
    readImpact: 'Read more on Impact',
    fullName: 'Full name',
    email: 'Email address',
    phone: 'Phone number',
    interest: 'Area of interest',
    helpMessage: 'Tell us how you would like to help',
    submitVolunteer: 'Submit Volunteer Interest',
    volunteerAlert: 'Volunteer signup integration coming soon.',
    benefitsTag: 'Volunteer Benefits',
    benefitsTitle: 'Why volunteer with us?',
    benefit1: 'Support real programs that directly serve young people',
    benefit2: 'Use your skills in a meaningful, community-rooted setting',
    benefit3: 'Contribute to a mission centered on hope and opportunity',
    partnerTag: 'Partnership Opportunities',
    partnerTitle: 'Partner with the foundation',
    partnerText:
      'We welcome partnerships with organizations, schools, institutions, and community groups that want to support youth development through sports, education, and mentoring.',
    explorePartnership: 'Explore Partnership',
    partnershipAlert: 'Partnership contact integration coming soon.',
    sponsorTag: 'Sponsorship Options',
    sponsorTitle: 'Sponsor a program or initiative',
    becomeSponsor: 'Become a Sponsor',
    sponsorAlert: 'Sponsorship enquiry integration coming soon.',
    internshipTag: 'Internship Opportunities',
    internshipTitle: 'Learn while contributing',
    applyInternship: 'Apply for Internship',
    internshipAlert: 'Internship application integration coming soon.',
  },
  contactPage: {
    title: 'Contact',
    heroEyebrow: 'Contact Us',
    heroTitle: 'We would love to hear from you.',
    heroSubtitle:
      'Whether you want to partner, volunteer, donate, or learn more about the foundation, this page makes it easy to reach a real team.',
    introEyebrow: 'Get In Touch',
    introTitle: 'Simple, direct ways to reach the foundation.',
    introText:
      'We welcome messages from supporters, partners, schools, media, and community members.',
    readAbout: 'Read more About Us',
    officeTag: 'Office Address',
    officeTitle: 'Visit or write to us',
    officeNote: 'Office visits can be coordinated through phone, email, or WhatsApp.',
    phoneTag: 'Phone and Email',
    phoneTitle: 'Speak with the team',
    phoneNote: 'For partnerships, sponsorships, and media enquiries, email is recommended.',
    whatsappTag: 'WhatsApp',
    whatsappTitle: 'Chat with us directly',
    whatsappText:
      'If WhatsApp is easier for you, send us a message and we will respond as soon as possible.',
    startWhatsapp: 'Start WhatsApp Chat',
    formEyebrow: 'Contact Form',
    formTitle: 'Send us a message.',
    formText:
      'Use the form for enquiries, partnership requests, media questions, or general messages.',
    readInvolved: 'Read more on Get Involved',
    subject: 'Subject',
    yourMessage: 'Your message',
    sendMessage: 'Send Message',
    formNote:
      "This form is currently a placeholder and will be connected to the foundation's email workflow soon.",
    thankYou: 'Thank you for reaching out. Contact form integration is coming soon.',
    officeInfoTag: 'Office Information',
    officeInfoTitle: 'Contact details',
    responseTag: 'Response',
    responseTitle: 'We aim to respond clearly and promptly.',
    responseText:
      'For partnership, sponsorship, and program-related enquiries, please include as much detail as possible so we can direct your message appropriately.',
    chatWhatsapp: 'Chat on WhatsApp',
    findUsEyebrow: 'Find Us',
    findUsTitle: 'Location map',
    findUsText: 'Use the map below as a placeholder reference for the foundation office.',
    mapTitle: 'Kevin Nambam Ninmol Foundation office location',
  },
  leadershipPage: {
    title: 'Leadership & Governance',
    heroEyebrow: 'Leadership & Governance',
    heroTitle: 'Leadership and governance structured for trust and accountability.',
    heroSubtitle: 'Meet the people and structures responsible for oversight and delivery.',
    boardEyebrow: 'Board of Trustees',
    boardTitle: 'Board of Trustees',
    boardText: 'The board provides oversight, stewardship, and high-level guidance.',
    managementEyebrow: 'Management Team',
    managementTitle: 'Management team',
    managementText: 'The management team supports implementation, coordination, and delivery.',
    governanceEyebrow: 'Governance Statement',
    governanceTitle: 'How decisions are made',
    governanceText:
      'Decision-making is guided by mission alignment, accountability, and transparent stewardship.',
  },
  policiesPage: {
    title: 'Policies & Safeguarding',
    heroEyebrow: 'Policies & Safeguarding',
    heroTitle: 'Policies and safeguarding standards that support trust.',
    heroSubtitle: 'A simple overview of the standards that guide safe and responsible work.',
    introEyebrow: 'Compliance Overview',
    introTitle: 'Professional standards for responsible service',
    introText: 'The foundation is committed to safe, respectful, and accountable practice.',
    assuranceTag: 'Professional Assurance',
    assuranceTitle: 'Built to support trust',
    assuranceText:
      "These summaries reflect the foundation's commitment to safe engagement, ethical operations, and responsible stewardship.",
    governanceTag: 'Good Governance',
    governanceText:
      'Documentation, internal processes, and oversight practices will continue to be strengthened as the organization grows.',
  },
  newsPage: {
    title: 'News',
    heroEyebrow: 'News and Stories',
    heroTitle: 'Articles, updates, and thought leadership.',
    heroSubtitle: "Short updates and stories from the foundation's work.",
    introEyebrow: 'Blog and Updates',
    introTitle: 'Recent news and updates',
    introText: 'Use this page to follow stories, field updates, and foundation news.',
  },
  eventsPage: {
    heroTitle: 'Upcoming events that bring community, partners, and youth together.',
    heroSubtitle: 'A globally credible NGO website should make participation easy.',
    registerInterest: 'Register Interest',
    generalRegistration: 'General Event Registration',
    formTag: 'Registration Form',
    formTitle: 'Register for upcoming events.',
    organization: 'Organization (optional)',
    selectEvent: 'Select an event',
    notes: 'Any questions or notes?',
    submit: 'Submit Registration',
  },
  programDetailPage: {
    titleFallback: 'Program',
    notFound: 'Program not found',
    backToPrograms: 'Back to Programs',
    heroEyebrow: 'Program Detail',
    overviewTag: 'Overview',
    purpose: 'Purpose',
    impactPageLink: 'Learn more through the Impact page',
    activitiesTitle: 'Program activities',
    impactTitle: 'Program impact',
  },
  content: {
    aboutStory: [
      'Kevin Nambam Ninmol Foundation was born from a personal journey marked by hardship, resilience, and the life-changing power of opportunity.',
      'Kevin grew up in a challenging environment where the future did not always appear clear. Basketball became more than a sport. It gave him direction, discipline, and access to education. Education, in turn, opened the way to leadership, service, and a wider sense of responsibility.',
      "What began as one young man's breakthrough has now become a public mission. The foundation exists to help children and young people, especially those facing social or economic limitation, discover that fear does not have to define their future.",
      'Through sports, mentorship, education support, and community-based outreach, the foundation works to build confidence, expand opportunity, and help young people make positive choices with lasting impact.',
    ],
    founderMessage:
      'Fear No Fear is not simply a slogan. It is a conviction born from experience. I know what it means to come from difficulty and to be changed by one real opportunity. This foundation was created so that more young people can receive guidance, support, and belief at the moment they need it most.',
    foundationGoals: [
      {
        title: 'Growth Mindset Development',
        text: 'Encourage young people to view challenges as opportunities for growth, resilience, and personal development.',
      },
      {
        title: 'Life Skills Empowerment',
        text: 'Equip young people with practical skills such as problem-solving, communication, teamwork, and responsible decision-making.',
      },
      {
        title: 'Mentorship and Guidance',
        text: 'Provide positive role models, encouragement, and personal guidance that help young people build confidence and direction.',
      },
      {
        title: 'Emotional Well-being',
        text: 'Promote healthy coping mechanisms and emotional support so young people can manage pressure and respond to life with strength.',
      },
    ],
    foundationObjectives: [
      'Establish and strengthen programs that promote emotional well-being, resilience, and life-skills development.',
      'Build partnerships with schools, communities, organizations, and businesses to expand reach and provide meaningful support.',
      'Train staff and volunteers so they are equipped to support young people effectively and responsibly.',
      'Evaluate and improve programs and services to ensure they continue to meet the real needs of young people.',
    ],
    heroStats: [
      {
        label: 'Youth reached',
        detail: 'Young people reached through clinics, mentoring, and outreach.',
      },
      {
        label: 'Programs conducted',
        detail: 'Programs, clinics, and outreach activities delivered.',
      },
      {
        label: 'Communities impacted',
        detail: 'Communities and institutions engaged through direct support.',
      },
      {
        label: 'Education actions',
        detail: 'Education support and scholarship actions provided.',
      },
    ],
    homepagePrograms: [
      {
        title: 'Education Support',
        subtitle: 'Learning access and scholarship pathways',
        excerpt:
          'Academic support, school materials, and scholarship pathways that help underserved students remain connected to opportunity.',
      },
      {
        title: 'Youth Development',
        subtitle: 'Sports, discipline, and confidence building',
        excerpt:
          'Basketball clinics and mindset coaching that build discipline, resilience, teamwork, and leadership in boys and girls.',
      },
      {
        title: 'Mentorship',
        subtitle: 'Guidance, life skills, and emotional support',
        excerpt:
          'Mentorship that strengthens communication, emotional well-being, decision-making, and practical life direction.',
      },
    ],
    donorProgramCategories: [
      {
        title: 'Youth Empowerment Through Basketball',
        purpose:
          'Use basketball as a structured pathway for discipline, confidence, teamwork, leadership, and positive decision-making.',
        activities: [
          'Basketball clinics and skill-development sessions for boys and girls',
          'Mindset and resilience talks woven into sports participation',
          'Coaching that reinforces discipline, teamwork, and leadership',
          'Safe, structured environments where young people can learn and grow',
        ],
        impact: [
          'Improved confidence and participation among young people',
          'Stronger teamwork, discipline, and coachability',
          'Positive youth engagement through sport-based mentoring',
        ],
      },
      {
        title: 'Education Support',
        purpose:
          'Reduce barriers to learning by connecting children and young people with educational materials, encouragement, and scholarship support.',
        activities: [
          'Scholarship identification and education support referrals',
          'Provision of books, school materials, and learning resources',
          'Academic encouragement and mentoring for students',
          'Support that helps young people remain engaged in school and growth',
        ],
        impact: [
          'Greater access to learning tools and educational support',
          'More confidence for students pursuing academic progress',
          'Practical pathways for underserved youth to stay connected to opportunity',
        ],
      },
      {
        title: 'Mentorship and Life Skills Development',
        purpose:
          'Help young people build character, emotional resilience, communication skills, and the confidence to make responsible life choices.',
        activities: [
          'Mentorship sessions with positive role models and coaches',
          'Workshops on communication, teamwork, and problem-solving',
          'Guidance on emotional well-being and healthy coping mechanisms',
          'Practical life-skills support for youth navigating daily challenges',
        ],
        impact: [
          'Stronger decision-making and social confidence among participants',
          'Healthier emotional responses to pressure and uncertainty',
          'A more supportive environment for youth growth beyond the basketball court',
        ],
      },
    ],
    involvementBenefits: [
      'Support young people with time, skills, funding, or institutional partnership',
      'Help expand practical programs in education, mentoring, and youth development',
      'Contribute to a mission rooted in visible community engagement and long-term growth',
      'Become part of a network committed to hope, courage, and positive youth outcomes',
    ],
    sponsorOptions: [
      'Program sponsorship for clinics and camps',
      'Education and scholarship support',
      'In-kind donations of books, gear, or supplies',
      'Strategic partnerships with schools and institutions',
    ],
    internshipOpportunities: [
      'Program support and youth engagement assistance',
      'Communications, storytelling, and media support',
      'Event coordination and logistics support',
      'Research, administration, and partnership support',
    ],
    impactMetrics: [
      {
        label: 'Youth impacted',
        detail: 'Young people engaged through clinics, mentoring, and outreach sessions.',
      },
      {
        label: 'Communities reached',
        detail: 'Communities and school environments reached through direct engagement.',
      },
      {
        label: 'Programs completed',
        detail: 'Basketball clinics, mentoring sessions, and outreach activities delivered.',
      },
      {
        label: 'Education support actions',
        detail: 'Education support and scholarship-related actions delivered.',
      },
    ],
    impactOutcomes: [
      {
        title: 'Improved confidence',
        detail:
          'Young people are given visible opportunities to participate, be encouraged, and build belief in their own ability.',
      },
      {
        title: 'Better decision-making',
        detail:
          'Mentorship, coaching, and guided conversations help participants make healthier and more responsible life choices.',
      },
      {
        title: 'Life skills development',
        detail:
          'Programs reinforce teamwork, communication, discipline, emotional resilience, and positive social behavior.',
      },
    ],
    caseStudies: [
      {
        title: 'Amina became more confident in group participation',
        summary:
          'Amina arrived at a youth session unsure of herself and hesitant to join activities. With repeated encouragement and structured participation, she became more willing to speak up and believe in her ability.',
      },
      {
        title: 'Daniel gained direction beyond the basketball court',
        summary:
          'Daniel first connected with the foundation through basketball. Over time, mentoring and guidance helped him build more discipline, improve decision-making, and develop a clearer direction in daily life.',
      },
    ],
    transformationStories: [
      {
        title: 'From hesitation to participation',
        before:
          'Some young people arrive unsure of themselves, reluctant to participate, and uncertain whether they belong in a structured setting.',
        after:
          'With coaching, encouragement, and consistent support, they begin to take initiative, work with others, and engage with greater confidence.',
      },
      {
        title: 'From limited access to visible support',
        before:
          'Families and communities facing pressure often have limited access to learning materials, safe youth programming, and positive role models.',
        after:
          'Through outreach, school engagement, and practical support, the foundation helps create visible pathways to participation, encouragement, and trust.',
      },
    ],
    donationBreakdown: [
      {
        title: 'Program delivery',
        detail: 'Supports youth programs, basketball clinics, mentoring sessions, and direct engagement activities.',
      },
      {
        title: 'Education support',
        detail: 'Funds learning materials, academic assistance, and scholarship-related support for young people.',
      },
      {
        title: 'Operations and accountability',
        detail: 'Covers responsible coordination, safeguarding, communication, and reporting needed to deliver programs well.',
      },
    ],
    donationTrustSignals: [
      'Secure checkout placeholder',
      'Paystack / Flutterwave ready',
      'Transparent stewardship and responsible fund use',
      'Mission-aligned giving for measurable youth impact',
    ],
    internationalPaymentOptions: [
      'NGN donors: local transfer or Paystack integration placeholder',
      'USD, GBP, and EUR donors: international card or Flutterwave gateway placeholder',
      'Currency conversion shown on the page is indicative and can be updated when live gateway rates are connected',
    ],
    sitewideCredibility: [
      {
        title: 'Country of Registration',
        text: 'Nigeria. Formal registration references and the official registration number can be published here once approved for public release.',
      },
      {
        title: 'Registration Number',
        text: 'Registration number placeholder: to be inserted as soon as the foundation legal number is ready for publication.',
      },
      {
        title: 'Legal Compliance',
        text: 'Kevin Nambam Ninmol Foundation operates in accordance with applicable laws and is committed to transparency and accountability.',
      },
      {
        title: 'Transparency',
        text: 'The foundation is committed to honest stewardship and clear communication with donors, partners, and communities.',
      },
      {
        title: 'Responsible Use of Funds',
        text: 'Resources are intended for mission-aligned programs, education support, community outreach, and responsible operations.',
      },
      {
        title: 'Accountability',
        text: 'The organization continues to strengthen reporting, oversight, and governance practices as it grows.',
      },
    ],
    managementProfiles: [
      {
        role: 'Founder and Executive Director',
        bio: 'Provides strategic leadership, program direction, and public representation for the foundation, grounded in lived experience and youth development through sport.',
      },
      {
        role: 'Program Implementation',
        bio: 'Supports delivery of clinics, mentoring sessions, outreach engagement, and coordination with local communities and schools.',
      },
      {
        role: 'Operations and Field Support',
        bio: 'Assists with logistics, participant support, communications, and day-to-day coordination that help programs run responsibly and effectively.',
      },
    ],
    boardOfTrustees: [
      {
        role: 'Chairman, Board of Trustees',
        bio: 'A governance-focused nonprofit leader with experience in education, social impact strategy, and institutional stewardship.',
      },
      {
        role: 'Secretary, Board of Trustees',
        bio: 'A legal and compliance professional supporting governance processes, record-keeping, and accountability structures for mission-driven organizations.',
      },
      {
        role: 'Treasurer, Board of Trustees',
        bio: 'A finance and administration practitioner with a focus on responsible resource management, reporting, and operational oversight.',
      },
    ],
    governanceStatement: [
      'The foundation is guided by a governance structure that separates strategic oversight from daily management responsibilities.',
      'The Board of Trustees provides direction, accountability oversight, and stewardship guidance, while the management team leads implementation, coordination, and day-to-day execution.',
      'Key decisions are informed through responsible consultation, mission alignment, and a commitment to transparency, ethical conduct, and the best interests of the young people and communities served.',
      'The foundation is committed to accountability in reporting, responsible use of funds, and clear communication with donors, partners, and institutional stakeholders.',
    ],
    policySections: [
      {
        title: 'Child Protection Policy',
        summary: 'The foundation is committed to creating safe environments for children and young people in all programs, outreach activities, and community engagements.',
        points: [
          'Children and young people must be treated with dignity, respect, and age-appropriate care at all times.',
          'Staff, volunteers, and partners are expected to avoid any conduct that could place a child at risk of harm, exploitation, neglect, or abuse.',
          'Safeguarding concerns are expected to be reported responsibly and responded to in a timely and protective manner.',
        ],
      },
      {
        title: 'Code of Conduct',
        summary: 'All representatives of the foundation are expected to act professionally, respectfully, and in a way that protects trust in the organization.',
        points: [
          'Behave with integrity, fairness, and respect toward beneficiaries, colleagues, donors, and partners.',
          'Avoid abusive, discriminatory, exploitative, or inappropriate conduct in any setting connected to the foundation.',
          'Uphold responsible behavior in communication, program delivery, financial handling, and representation of the foundation.',
        ],
      },
      {
        title: 'Transparency and Accountability',
        summary: 'The foundation is committed to responsible stewardship, transparent communication, and accountable decision-making.',
        points: [
          'Funds are intended for mission-aligned programs, operations, and activities that directly support the foundation work.',
          'The foundation aims to communicate honestly with donors, partners, and communities about its work, growth, and limitations.',
          'Governance, reporting, and oversight processes are being strengthened to reflect international nonprofit expectations.',
        ],
      },
      {
        title: 'Data Privacy Assurance',
        summary: 'The foundation respects the privacy of supporters, partners, and participants and is committed to handling personal information with care.',
        points: [
          'Personal details collected through forms or communications are intended only for legitimate foundation purposes.',
          'Information will not be shared irresponsibly and should be handled in a way that protects confidentiality and trust.',
          'As systems grow, data handling practices will continue to align with good governance, security, and lawful record management.',
        ],
      },
    ],
    reports: [
      {
        title: 'Annual Impact Report 2025',
        type: 'Annual Report',
        description: 'A downloadable placeholder for the foundation annual report covering activities, outputs, partnerships, and key learning points.',
      },
      {
        title: 'Financial Summary 2025',
        type: 'Financial Summary',
        description: 'A concise placeholder summary of income, expenditure priorities, and stewardship commitments for donor and institutional review.',
      },
      {
        title: 'Program Delivery Report',
        type: 'Program Report',
        description: 'A placeholder program report highlighting delivery areas, activities completed, and practical lessons from outreach, mentoring, and youth engagement.',
      },
    ],
    impactGalleryHighlights: [
      {
        title: 'Founder-led skills development',
        detail: 'Basketball sessions combine practical drills with visible mentorship and encouragement.',
      },
      {
        title: 'Structured youth participation',
        detail: 'Young people are engaged in disciplined activity that builds teamwork, confidence, and focus.',
      },
      {
        title: 'Community-centered outreach',
        detail: 'Programs bring together children, families, schools, and volunteers in shared support spaces.',
      },
      {
        title: 'School and outreach engagement',
        detail: 'The foundation shows up where young people already gather, making support easier to access.',
      },
      {
        title: 'Coaching in action',
        detail: 'Indoor and organized settings help reinforce discipline, repetition, and personal growth.',
      },
      {
        title: 'Recognition and educational progress',
        detail: 'Images of achievement help show how sport, learning, and encouragement are connected.',
      },
    ],
    mediaVideos: [
      { title: 'Founder story reel' },
      { title: 'Clinic highlights' },
      { title: 'Community engagement reel' },
    ],
    blogPosts: [
      {
        title: 'Building confidence through sport',
        excerpt: 'How basketball becomes a tool for resilience, discipline, and long-term mindset growth.',
        category: 'Insights',
      },
      {
        title: 'Why girls need more visible opportunity',
        excerpt: 'The Girl Child Initiative is about practical support, self-belief, and space to lead.',
        category: 'Girl Child Initiative',
      },
      {
        title: 'Community outreach is more than a single event',
        excerpt: 'What long-term trust-building looks like when outreach is rooted in dignity and presence.',
        category: 'Community',
      },
      {
        title: 'Education opens the second door',
        excerpt: 'Why scholarship support matters just as much as sports access in changing a young persons future.',
        category: 'Education',
      },
    ],
    upcomingEvents: [
      {
        title: 'Fear No Fear Community Clinic',
        location: 'Jos, Plateau State',
        description: 'A youth basketball clinic with mindset coaching, mentoring, and community engagement.',
      },
      {
        title: 'Girl Child Leadership Workshop',
        location: 'Partner School Hall',
        description: 'A focused session on confidence, opportunity, and practical leadership for girls.',
      },
      {
        title: 'Community Partners Breakfast',
        location: 'Jos Civic Center',
        description: 'A donor and partner engagement event for institutions, supporters, and strategic collaborators.',
      },
    ],
  },
};

const fr = {
  ...en,
  nav: { ...en.nav, home: 'Accueil', about: 'A propos', leadership: 'Direction', policies: 'Politiques', programs: 'Programmes', getInvolved: "S'impliquer", donate: 'Faire un don', news: 'Actualites', events: 'Evenements' },
  ui: { ...en.ui, more: 'Plus', language: 'Langue', english: 'Anglais', french: 'Francais', hausa: 'Hausa', yoruba: 'Yoruba', igbo: 'Igbo', donate: 'Faire un don', lightMode: 'Mode clair', darkMode: 'Mode sombre', switchToLight: 'Passer au mode clair', switchToDark: 'Passer au mode sombre', readMore: 'En savoir plus', seeImpact: "Voir l'impact" },
  footer: { ...en.footer, text: 'Une fondation tournee vers la jeunesse qui utilise le sport, l education, le mentorat et l appui communautaire pour construire des avenirs courageux.', explore: 'Explorer', phone: 'Telephone', address: 'Adresse', copyright: 'Copyright (c) 2026 Kevin Nambam Ninmol Foundation. Tous droits reserves.' },
  newsletter: { ...en.newsletter, title: 'Restez informe de notre impact.', body: 'Inscrivez-vous a notre liste email pour recevoir des histoires, des mises a jour de programmes, des activites recentes et des occasions de soutenir le travail de la fondation.', note: 'Construisez avec nous sur le long terme grace a des nouvelles qui montrent ou le soutien fait la difference.', placeholder: 'Entrez votre adresse email', subscribe: "S'abonner", emailLabel: 'Adresse email', empty: 'Veuillez entrer votre adresse email.' },
  home: { ...en.home, title: 'Accueil', heroTitle: 'Donner aux jeunes les moyens dagir grace au basketball, a leducation et au mentorat', heroText: 'Nous aidons les jeunes a choisir lespoir plutot que la peur en ouvrant des voies vers la croissance, la confiance et les opportunites par le sport, lapprentissage et laccompagnement.', heroSupport: 'Fondee sur une experience vecue et ancree dans un service concret, la fondation existe pour aider les enfants et les jeunes a depasser les limites et a poursuivre un avenir meilleur.', trustBody: 'Aider les jeunes a passer des limitations aux opportunites grace a un soutien constant et a un engagement visible dans la communaute.', impactEyebrow: 'Apercu de limpact', aboutEyebrow: 'Apercu', aboutText: 'Une breve introduction a qui nous sommes et pourquoi ce travail existe.', aboutCopy: 'La fondation utilise le sport, le soutien educatif et le mentorat pour aider les jeunes a developper leur confiance, faire de bons choix et acceder aux opportunites.', aboutCta: 'En savoir plus sur nous', programsTitle: 'Des programmes cibles qui soutiennent lapprentissage, laccompagnement et le developpement des jeunes.', programsText: 'Un bref apercu des principaux domaines de programme de la fondation.', programsCta: 'En savoir plus sur les programmes', programLearnMore: 'En savoir plus' },
  donatePage: { ...en.donatePage, title: 'Faire un don', heroEyebrow: 'Faire un don', heroTitle: 'Votre soutien cree un changement reel', heroSubtitle: 'Cette page de don est concue pour rendre la contribution simple, claire et digne de confiance pour chaque soutien.', giveEyebrow: 'Donnez aujourdhui', giveTitle: 'Choisissez comment soutenir la mission.', oneTime: 'Don ponctuel', monthly: 'Don mensuel', chooseCurrency: 'Choisissez votre devise', customPlaceholder: 'Entrez un montant personnalise', customLabel: 'Montant de don personnalise', secureTitle: 'Options de paiement securisees', transparencyEyebrow: 'Transparence', transparencyTitle: 'Ou va votre don', donorEyebrow: 'Assurance donateur', giveNow: 'Donner maintenant', donateNow: 'Faire un don', placeholderAlert: 'Integration securisee du paiement en cours.', subtitle: 'Soutenez le travail grace a un don clair et responsable.', chooseText: 'Choisissez un montant, une frequence de don et soutenez la fondation en toute confiance.', impactIntroTag: 'Ce que votre don rend possible', impactIntroText: 'Chaque montant est lie a un resultat concret afin que les donateurs comprennent ce que leur soutien permet.', ctaCopy: 'Donnez aujourdhui pour aider davantage de jeunes a acceder a la guidance, a la confiance et a des opportunites concretes.', fundUseTag: 'Utilisation des fonds', fundUseTitle: 'Ou va votre soutien', fundUseText: 'Chaque contribution est orientee vers les programmes jeunesse, le soutien educatif et une mise en oeuvre responsable.' },
  aboutPage: { ...en.aboutPage, heroTitle: 'A propos de nous', heroSubtitle: 'Notre histoire, notre identite et notre engagement envers le developpement des jeunes.', storyEyebrow: 'Histoire du fondateur', storyTitle: 'Histoire du fondateur', missionText: 'La mission explique pourquoi la fondation existe et comment elle sert les jeunes.', goalsEyebrow: 'Nos objectifs', goalsTitle: 'Nos objectifs', objectivesEyebrow: 'Nos objectifs operationnels', objectivesTitle: 'Nos objectifs operationnels', founderMessageTag: 'Message du fondateur', leadershipTitle: 'Leadership et gouvernance', nextTitle: 'Voyez comment la fondation transforme sa mission en programmes concrets', nextText: 'Explorez les domaines de programme pour comprendre ce que fait la fondation sur le terrain et comment le soutien se traduit en opportunites reelles pour les jeunes.', readPrograms: 'En savoir plus sur les programmes', readLeadership: 'En savoir plus sur la direction', viewPrograms: 'Voir les programmes' },
  programsPage: { ...en.programsPage, heroTitle: 'Des programmes concus pour creer un impact clair et concret pour les jeunes.', heroSubtitle: 'Cette page explique ce que fait la fondation, comment chaque programme fonctionne et ce que le soutien rend possible.', introEyebrow: 'Domaines de programme', introTitle: 'Notre travail est organise autour de trois domaines clairs de soutien.', introText: 'Chaque programme ci-dessous presente son objectif, ses activites cle et le changement concret recherche.', categoryTag: 'Categorie de programme', purpose: 'Objectif', activities: 'Activites cle', expectedImpact: 'Impact attendu', nextTitle: 'Voyez les preuves derriere le travail', nextText: 'Visitez la page Impact pour voir la portee mesurable, les histoires de cas, les visuels dactivites et les rapports de demonstration.', seeImpact: "Voir l'impact", viewImpact: "Voir l'impact" },
  impactPage: { ...en.impactPage, heroTitle: 'Un impact visible, honnete et ancre dans la communaute.', heroSubtitle: 'Cette page est consacree aux resultats, aux preuves et aux effets visibles du travail de la fondation.', reachTitle: 'Des indicateurs mesurables de portee et de mise en oeuvre.', supportImpact: 'Soutenir cet impact', evidenceTag: 'Apercu des preuves', evidenceTitle: 'Vue visuelle de la portee et de la mise en oeuvre actuelles', outcomesTitle: 'Domaines de resultat qui montrent comment la participation devient changement.', caseTitle: 'De courtes histoires qui aident a expliquer le changement derriere les chiffres.', changedTitle: 'Ce qui a change', galleryEyebrow: 'Galerie photo et video', galleryTitle: 'Photos et videos reelles des activites', readDonate: 'En savoir plus sur les dons', reportsTitle: 'Des supports de reporting qui renforcent le professionnalisme.', downloadPlaceholder: 'Telecharger le rapport de demonstration', nextTitle: 'Aidez a transformer un impact mesurable en soutien durable', donate: 'Faire un don' },
  getInvolvedPage: { ...en.getInvolvedPage, heroTitle: 'Transformez votre soutien en impact actif.', heroSubtitle: 'Cette page aide les visiteurs a passer de linteret a laction grace au benevolat, au partenariat, au sponsoring et aux stages.', whyEyebrow: 'Pourquoi simpliquer', whyTitle: 'Il existe des moyens utiles de contribuer a tous les niveaux.', whyText: 'Que vous soyez un particulier, un etudiant, une organisation ou un sponsor, vous impliquer aide a etendre la portee de la fondation.', readPrograms: 'En savoir plus sur les programmes', volunteerTitle: 'Formulaire dinscription benevole', readImpact: "En savoir plus sur l'impact", submitVolunteer: 'Envoyer ma candidature benevole', volunteerAlert: 'Integration du formulaire benevole a venir.', benefitsTag: 'Avantages du benevolat', benefitsTitle: 'Pourquoi faire du benevolat avec nous ?', partnerTitle: 'Devenir partenaire de la fondation', explorePartnership: 'Explorer le partenariat', partnershipAlert: 'Integration du contact partenariat a venir.', sponsorTitle: 'Sponsoriser un programme ou une initiative', becomeSponsor: 'Devenir sponsor', sponsorAlert: 'Integration de la demande de sponsoring a venir.', internshipTitle: 'Apprendre tout en contribuant', applyInternship: 'Postuler pour un stage', internshipAlert: 'Integration des candidatures de stage a venir.' },
  contactPage: { ...en.contactPage, heroEyebrow: 'Contact', heroTitle: 'Nous aimerions avoir de vos nouvelles.', heroSubtitle: 'Que vous souhaitiez devenir partenaire, benevole, donateur ou simplement en savoir plus, cette page facilite le contact avec une equipe reelle.', introEyebrow: 'Entrer en contact', introTitle: 'Des moyens simples et directs pour joindre la fondation.', readAbout: 'En savoir plus sur nous', officeTitle: 'Nous rendre visite ou nous ecrire', phoneTitle: "Parler a l'equipe", whatsappTitle: 'Discuter directement avec nous', startWhatsapp: 'Ouvrir WhatsApp', formTitle: 'Envoyez-nous un message.', readInvolved: 'En savoir plus sur Participer', sendMessage: 'Envoyer le message', thankYou: 'Merci de nous avoir contactes. L integration du formulaire arrive bientot.', officeInfoTitle: 'Coordonnees', responseTitle: 'Nous visons des reponses claires et rapides.', chatWhatsapp: 'Discuter sur WhatsApp', findUsEyebrow: 'Nous trouver', findUsTitle: 'Carte de localisation' },
  leadershipPage: { ...en.leadershipPage, heroTitle: 'Leadership et gouvernance structures pour la confiance et la responsabilite.', heroSubtitle: 'Rencontrez les personnes et les structures responsables de la supervision et de la mise en oeuvre.', boardText: 'Le conseil assure supervision, gestion et orientation de haut niveau.', managementTitle: 'Equipe de direction', managementText: "L'equipe de direction soutient la mise en oeuvre, la coordination et la livraison.", governanceTitle: 'Comment les decisions sont prises' },
  policiesPage: { ...en.policiesPage, heroTitle: 'Des politiques et des normes de sauvegarde qui soutiennent la confiance.', heroSubtitle: 'Un apercu simple des normes qui guident un travail sur et responsable.', introEyebrow: 'Apercu de la conformite', introTitle: 'Des normes professionnelles pour un service responsable', assuranceTag: 'Assurance professionnelle', assuranceTitle: 'Construit pour soutenir la confiance', governanceTag: 'Bonne gouvernance' },
  newsPage: { ...en.newsPage, heroEyebrow: 'Actualites et histoires', heroTitle: 'Articles, mises a jour et reflexions.', heroSubtitle: 'De courtes mises a jour et histoires sur le travail de la fondation.', introEyebrow: 'Blog et mises a jour', introTitle: 'Actualites recentes et mises a jour' },
  eventsPage: { ...en.eventsPage, heroTitle: 'Evenements a venir qui reunissent communaute, partenaires et jeunes.', heroSubtitle: 'Un site ONG credible doit rendre la participation simple.', registerInterest: "Exprimer son interet", generalRegistration: 'Inscription generale aux evenements', formTag: "Formulaire d'inscription", formTitle: 'Inscrivez-vous aux evenements a venir.', organization: 'Organisation (optionnel)', selectEvent: 'Choisir un evenement', notes: 'Questions ou remarques ?', submit: "Envoyer l'inscription" },
  programDetailPage: { ...en.programDetailPage, titleFallback: 'Programme', notFound: 'Programme introuvable', backToPrograms: 'Retour aux programmes', heroEyebrow: 'Details du programme', overviewTag: 'Apercu', impactPageLink: "En savoir plus via la page Impact", activitiesTitle: 'Activites du programme', impactTitle: 'Impact du programme' },
  content: {
    ...en.content,
    aboutStory: [
      'Kevin Nambam Ninmol Foundation est nee dun parcours personnel marque par les difficultes, la resilience et le pouvoir transformateur dune veritable opportunite.',
      'Kevin a grandi dans un environnement difficile ou l avenir semblait souvent incertain. Le basketball est devenu plus quun sport. Il lui a donne une direction, de la discipline et un acces a leducation.',
      'Ce qui a commence comme la percee dun jeune homme est devenu une mission publique. La fondation aide les enfants et les jeunes, en particulier ceux qui font face a des limites sociales ou economiques, a comprendre que la peur ne doit pas definir leur avenir.',
      'Par le sport, le mentorat, le soutien educatif et les actions communautaires, la fondation cherche a renforcer la confiance, elargir les opportunites et aider les jeunes a faire de meilleurs choix.',
    ],
    founderMessage:
      'Fear No Fear nest pas seulement un slogan. Cest une conviction nee de lexperience. Je sais ce que signifie venir de la difficulte et etre transforme par une seule vraie opportunite.',
  },
};

const ha = {
  ...en,
  nav: { ...en.nav, home: 'Gida', about: 'Game da mu', leadership: 'Jagoranci', policies: 'Dokoki', programs: 'Shirye-shirye', impact: 'Tasiri', getInvolved: 'Shiga tare da mu', donate: 'Ba da gudummawa', news: 'Labarai', events: 'Taro', contact: 'Tuntube mu' },
  ui: { ...en.ui, more: 'Kari', language: 'Harshe', english: 'Turanci', french: 'Faransanci', yoruba: 'Yarbanci', donate: 'Ba da gudummawa', lightMode: 'Yanayin haske', darkMode: 'Yanayin duhu', switchToLight: 'Canja zuwa yanayin haske', switchToDark: 'Canja zuwa yanayin duhu', readMore: 'Kara karatu', seeImpact: 'Duba tasiri' },
  footer: { ...en.footer, text: 'Gidauniya ce mai mayar da hankali kan matasa wadda ke amfani da wasanni, ilimi, jagoranci da tallafin al umma domin gina makoma mai karfi.', explore: 'Bincika', phone: 'Waya', address: 'Adireshi' },
  newsletter: { ...en.newsletter, title: 'Kasance da sabbin bayanai kan tasirinmu.', body: 'Shiga jerin email dinmu domin samun labarai, sabbin bayanan shirye-shirye, ayyukan baya-bayan nan da hanyoyin tallafawa aikin gidauniyar.', note: 'Ku gina tare da mu na dogon lokaci ta sabuntawa da ke nuna inda tallafi ke kawo canji.', placeholder: 'Shigar da adireshin email dinka', subscribe: 'Yi rajista', emailLabel: 'Adireshin email', empty: 'Da fatan a shigar da adireshin email dinka.' },
  home: { ...en.home, title: 'Gida', heroTitle: 'Karfafa matasa ta kwallon kwando, ilimi da jagoranci', heroText: 'Muna taimaka wa matasa su zabi bege maimakon tsoro ta bude hanyoyi zuwa ci gaba, kwarin gwiwa da dama ta hanyar wasanni, koyo da jagora.', heroSupport: 'An kafa ta daga kwarewar rayuwa kuma an gina ta a kan aiki na zahiri domin taimaka wa yara da matasa su tashi sama da takura su nemi kyakkyawar makoma.', trustBody: 'Taimaka wa matasa su tashi daga takura zuwa dama ta hanyar tallafi mai dorewa da kasancewa a fili a cikin al umma.', impactEyebrow: 'Takaitaccen tasiri', aboutEyebrow: 'Takaitaccen bayani', aboutText: 'Takaitaccen gabatarwa ga wanene mu da dalilin wannan aiki.', aboutCopy: 'Gidauniyar tana amfani da wasanni, tallafin ilimi, da jagoranci domin taimaka wa matasa su samu kwarin gwiwa da damar ci gaba.', aboutCta: 'Kara sani game da mu', programsText: 'Takaitaccen kallo kan manyan bangarorin shirye-shiryen gidauniyar.', programsCta: 'Kara karatu kan shirye-shirye', programLearnMore: 'Kara koyo' },
  donatePage: { ...en.donatePage, title: 'Ba da gudummawa', heroEyebrow: 'Ba da gudummawa', heroTitle: 'Tallafinka na kawo canji na gaske', heroSubtitle: 'An tsara wannan shafin gudummawa don sanya bayarwa ta zama mai sauki, bayyane kuma abin dogaro ga kowane mai tallafi.', giveEyebrow: 'Ba da gudummawa yau', giveTitle: 'Zabi yadda za ka tallafawa manufa.', oneTime: 'Gudummawar sau daya', monthly: 'Gudummawar kowane wata', chooseCurrency: 'Zabi kudinka', customPlaceholder: 'Shigar da adadi na musamman', customLabel: 'Adadin gudummawa na musamman', secureTitle: 'Hanyoyin biyan kudi masu tsaro', transparencyEyebrow: 'Gaskiya', transparencyTitle: 'Inda kudinka ke zuwa', donorEyebrow: 'Tabbacin mai bayarwa', giveNow: 'Ba da gudummawa yanzu', donateNow: 'Ba da gudummawa yanzu', placeholderAlert: 'Wurin biyan kudi mai tsaro yana nan tafe.', subtitle: 'Tallafa aikin ta hanyar bayarwa mai bayyani da alhaki.' },
  aboutPage: { ...en.aboutPage, heroSubtitle: 'Labarinmu, asalimmu, da alkawarinmu ga ci gaban matasa.', storyEyebrow: 'Labarin wanda ya kafa', storyTitle: 'Labarin wanda ya kafa', missionText: 'Wannan manufa tana bayyana dalilin da yasa gidauniyar take wanzuwa da yadda take yi wa matasa hidima.', goalsTitle: 'Manufofinmu', objectivesTitle: 'Burinmu na aiki', founderMessageTag: 'Sakon wanda ya kafa', leadershipTitle: 'Jagoranci da kulawa', nextTitle: 'Ga yadda gidauniyar ke juya manufa zuwa shirye-shirye masu amfani', readPrograms: 'Kara karatu kan shirye-shirye', readLeadership: 'Kara karatu kan jagoranci', viewPrograms: 'Duba shirye-shirye' },
  programsPage: { ...en.programsPage, heroSubtitle: 'Wannan shafi yana bayyana abin da gidauniyar ke yi, yadda kowane shiri ke aiki, da abin da tallafi ke ba da dama ga shi.', introEyebrow: 'Bangarorin shiri', introTitle: 'An tsara aikinmu a karkashin manyan bangarori uku na tallafi.', introText: 'Kowane shiri yana nuna manufarsa, manyan ayyukansa, da canjin da yake son samarwa.', categoryTag: 'Bangaren shiri', purpose: 'Manufa', activities: 'Muhimman ayyuka', expectedImpact: 'Tasirin da ake sa ran samu', nextTitle: 'Ga hujjojin da ke bayan aikin', seeImpact: 'Duba tasiri', viewImpact: 'Duba tasiri' },
  impactPage: { ...en.impactPage, heroSubtitle: 'Wannan shafi yana mayar da hankali kan sakamako, hujjoji, da bayyanannun sakamakon aikin gidauniyar.', supportImpact: 'Tallafa wa wannan tasiri', evidenceTag: 'Takaitaccen hujja', evidenceTitle: 'Hoton isa da aiwatarwa na yanzu', changedTitle: 'Abin da ya canza', galleryTitle: 'Hotuna da bidiyoyi na gaske daga ayyuka', readDonate: 'Kara karatu kan gudummawa', downloadPlaceholder: 'Zazzage rahoton misali', donate: 'Ba da gudummawa' },
  getInvolvedPage: { ...en.getInvolvedPage, heroSubtitle: 'An tsara wannan shafi don taimaka wa baki su sauya daga sha awa zuwa aiki ta hanyar sa kai, hadin gwiwa, daukar nauyi, da damar koyon aiki.', whyTitle: 'Akwai hanyoyi masu ma ana na bayar da gudunmawa a kowane mataki.', readPrograms: 'Kara karatu kan shirye-shirye', volunteerTitle: 'Fom din shiga aikin sa kai', readImpact: 'Kara karatu kan tasiri', submitVolunteer: 'Aika sha awar sa kai', volunteerAlert: 'Hada fom din sa kai na zuwa nan gaba.', benefitsTitle: 'Me yasa za a yi aikin sa kai tare da mu?', partnerTitle: 'Yi hadin gwiwa da gidauniyar', explorePartnership: 'Duba hadin gwiwa', partnershipAlert: 'Hada tuntuɓar hadin gwiwa na zuwa nan gaba.', sponsorTitle: 'Dauki nauyin shiri ko aiki', becomeSponsor: 'Zama mai daukar nauyi', sponsorAlert: 'Hada neman daukar nauyi na zuwa nan gaba.', internshipTitle: 'Koyi yayin da kake bayar da gudummawa', applyInternship: 'Nemi damar koyon aiki', internshipAlert: 'Hada neman koyon aiki na zuwa nan gaba.' },
  contactPage: { ...en.contactPage, heroTitle: 'Za mu so jin daga gare ku.', introEyebrow: 'Ku tuntube mu', introTitle: 'Hanyoyi masu sauki kuma kai tsaye na tuntubar gidauniyar.', readAbout: 'Kara karatu game da mu', officeTitle: 'Ku ziyarce mu ko ku rubuto mana', phoneTitle: 'Yi magana da tawaga', whatsappTitle: 'Yi hira da mu kai tsaye', startWhatsapp: 'Fara hirar WhatsApp', formTitle: 'Aiko mana da sako.', readInvolved: 'Kara karatu kan shiga tare da mu', sendMessage: 'Aika sako', thankYou: 'Mun gode da tuntuba. Hada fom din tuntuba na zuwa nan gaba.', officeInfoTitle: 'Bayanin tuntuɓa', responseTitle: 'Muna kokarin bada amsa cikin tsari da sauri.', chatWhatsapp: 'Yi hira a WhatsApp', findUsEyebrow: 'Nemo mu', findUsTitle: 'Taswirar wuri' },
  leadershipPage: { ...en.leadershipPage, heroTitle: 'Jagoranci da tsarin mulki da aka tsara don amana da rikon amana.', heroSubtitle: 'Ku sadu da mutanen da tsare-tsaren da ke da alhakin kulawa da aiwatarwa.', boardText: 'Kwamitin yana bada kulawa, rikon amana, da jagora a mataki na sama.', managementTitle: 'Tawagar gudanarwa', managementText: 'Tawagar gudanarwa tana tallafa wa aiwatarwa, hadin kai, da isar da aiki.', governanceTitle: 'Yadda ake yanke shawara' },
  policiesPage: { ...en.policiesPage, heroSubtitle: 'Takaitaccen bayani game da ka idoji da ke jagorantar aiki mai aminci da alhaki.', introEyebrow: 'Takaitaccen biyayya', introTitle: 'Ka idoji na kwarewa don hidima mai alhaki', assuranceTag: 'Tabbacin kwarewa', assuranceTitle: 'An gina shi don karfafa amana', governanceTag: 'Kyakykyawan shugabanci' },
  newsPage: { ...en.newsPage, heroEyebrow: 'Labarai da tatsuniyoyi', heroTitle: 'Makaloli, sabbin bayanai, da tunani masu jagoranci.', heroSubtitle: 'Takaitattun bayanai da labarai daga aikin gidauniyar.', introEyebrow: 'Blog da sabuntawa', introTitle: 'Sabbin labarai da bayanai' },
  eventsPage: { ...en.eventsPage, heroTitle: 'Taro masu zuwa da ke hada al umma, abokan hulda, da matasa.', heroSubtitle: 'Shafin NGO mai kima ya kamata ya saukaka shiga.', registerInterest: 'Nuna sha awa', generalRegistration: 'Rijistar taro gaba daya', formTag: 'Fom din rijista', formTitle: 'Yi rijista don taro masu zuwa.', organization: 'Kungiya (ba dole ba)', selectEvent: 'Zabi taro', notes: 'Tambayoyi ko bayanai?', submit: 'Aika rijista' },
  programDetailPage: { ...en.programDetailPage, titleFallback: 'Shiri', notFound: 'Ba a samu shirin ba', backToPrograms: 'Komawa shirye-shirye', heroEyebrow: 'Cikakken bayani kan shiri', overviewTag: 'Takaitaccen bayani', impactPageLink: 'Kara sani ta shafin Tasiri', activitiesTitle: 'Ayyukan shiri', impactTitle: 'Tasirin shiri' },
  content: {
    ...en.content,
    aboutStory: [
      'Kevin Nambam Ninmol Foundation ta samo asali ne daga tafiyar rayuwa mai cike da kalubale, juriya, da damar da ta canza rayuwa.',
      'Kevin ya taso a yanayi mai wahala inda makoma ba ta bayyana a sarari ba. Kwallon kwando ta zamo fiye da wasa. Ta ba shi hanya, ladabi, da damar ilimi.',
      'Abin da ya fara a matsayin nasarar mutum daya yanzu ya zama manufa ta jama a. Gidauniyar tana taimaka wa yara da matasa, musamman masu fuskantar takura ta zamantakewa ko tattalin arziki, su gane cewa tsoro bai kamata ya ayyana makomarsu ba.',
      'Ta hanyar wasanni, jagoranci, tallafin ilimi, da ayyukan al umma, gidauniyar tana kokarin gina kwarin gwiwa, fadada dama, da taimaka wa matasa su yi zabin kirki.',
    ],
    founderMessage:
      'Fear No Fear ba kawai taken magana ba ne. Imani ne da aka haifa daga kwarewa. Na san yadda wahala take da yadda dama guda daya za ta iya sauya rayuwa.',
  },
};

const yo = {
  ...en,
  nav: { ...en.nav, home: 'Ile', about: 'Nipa wa', leadership: 'Asiwaju', policies: 'Eto imulo', programs: 'Awon eto', impact: 'Ipa', getInvolved: 'Darapo mo wa', donate: 'Se iranlowo', news: 'Iroyin', events: 'Awon isele', contact: 'Kan si wa' },
  ui: { ...en.ui, more: 'Siwaju sii', language: 'Ede', english: 'Geesi', french: 'Faranse', donate: 'Se iranlowo', lightMode: 'Ipo imole', darkMode: 'Ipo okunkun', switchToLight: 'Yipada si ipo imole', switchToDark: 'Yipada si ipo okunkun', readMore: 'Ka sii', seeImpact: 'Wo ipa' },
  footer: { ...en.footer, text: 'Ajo idasile to dojuko odo ti n lo ere idaraya, eko, itoju ati atileyin agbegbe lati ko ojo iwaju akinkanju.', explore: 'Sawari', phone: 'Foonu', address: 'Adiresi' },
  newsletter: { ...en.newsletter, title: 'Maa mo nipa ipa wa.', body: 'Darapo mo atoko imeeli wa lati gba awon itan, imudojuiwon eto, awon ise to sese waye ati ona lati se atileyin ise idasile naa.', note: 'Ko pelu wa ni igba pipe nipase awon imudojuiwon ti n fi han ibi ti atileyin n mu iyato wa.', placeholder: 'Te adiresi imeeli re sii', subscribe: 'Foruko sile', emailLabel: 'Adiresi imeeli', empty: 'Jowo te adiresi imeeli re sii.' },
  home: { ...en.home, title: 'Ile', heroTitle: 'Fifun awon odo ni agbara nipase basketball, eko ati itoju', heroText: 'A n ran awon odo lowo lati yan ireti dipo iberu nipa sisi ona si idagbasoke, igboya ati anfaani nipase ere idaraya, eko ati itosona.', heroSupport: 'A da a sile lati inu iriri gidi ati ise to daju, lati ran awon omode ati odo lowo lati dide loke idena ki won le lepa ojo iwaju to dara.', trustBody: 'N ran awon odo lowo lati kuro ninu idena si anfaani nipase atileyin to duro ati ise ti eniyan le ri.', impactEyebrow: 'Akotan ipa', aboutEyebrow: 'Akotan nipa wa', aboutText: 'Ifihan kukuru si tani awa je ati idi ti ise yii fi wa.', aboutCopy: 'Idasile naa n lo ere idaraya, atileyin eko ati itoju lati ran awon odo lowo lati ko igboya, se yiyan to dara, ati ri anfaani.', aboutCta: 'Ko eko sii nipa wa', programsText: 'Wiwo kukuru si awon agbegbe eto pataki idasile naa.', programsCta: 'Ka sii lori awon eto', programLearnMore: 'Ko eko sii' },
  donatePage: { ...en.donatePage, title: 'Se iranlowo', heroEyebrow: 'Se iranlowo', heroTitle: 'Atileyin re n se ayipada gidi', heroSubtitle: 'A se apeere oju-iwe iranlowo yii lati je ki fifunni rorun, kedere ati gbekele fun gbogbo alatilẹyin.', giveEyebrow: 'Se iranlowo loni', giveTitle: 'Yan bi o se fe se atileyin ise wa.', oneTime: 'Iranlowo lekan', monthly: 'Iranlowo ososu', chooseCurrency: 'Yan owo re', customPlaceholder: 'Te iye tire sii', customLabel: 'Iye iranlowo tire', secureTitle: 'Awon ona isanwo to ni aabo', transparencyEyebrow: 'Otito', transparencyTitle: 'Ibi ti owo re n lo', donorEyebrow: 'Idaniloju oluranlowo', giveNow: 'Fun bayii', donateNow: 'Se iranlowo bayii', placeholderAlert: 'Aaye isanwo to ni aabo n bo laipe.' },
  aboutPage: { ...en.aboutPage, heroSubtitle: 'Itan wa, idanimọ wa, ati ifaramo wa si idagbasoke awon odo.', storyEyebrow: 'Itan oludasile', storyTitle: 'Itan oludasile', missionText: 'Ise wa salaye idi ti idasile naa fi wa ati bi o se n sin awon odo.', goalsTitle: 'Awon afojusun wa', objectivesTitle: 'Awon ero ise wa', founderMessageTag: 'Ifiranse oludasile', leadershipTitle: 'Asiwaju ati itoju', nextTitle: 'Wo bi idasile naa se n yi ise pada si awon eto to wulo', readPrograms: 'Ka sii lori awon eto', readLeadership: 'Ka sii lori asiwaju', viewPrograms: 'Wo awon eto' },
  programsPage: { ...en.programsPage, heroSubtitle: 'Oju-iwe yii salaye ohun ti idasile naa n se, bi eto kookan se n sise, ati ohun ti atileyin n seese.', introEyebrow: 'Awon agbegbe eto', introTitle: 'A ti pin ise wa si agbegbe atileyin meta to yege.', introText: 'Eto kankan ni isale n fi idi re han, awon ise pataki, ati ayipada to n fe mu wa.', categoryTag: 'Eka eto', purpose: 'Idi', activities: 'Awon ise pataki', expectedImpact: 'Ipa ti a n reti', nextTitle: 'Wo eri to wa leyin ise naa', seeImpact: 'Wo ipa', viewImpact: 'Wo ipa' },
  impactPage: { ...en.impactPage, heroSubtitle: 'Oju-iwe yii dojukọ esi, eri, ati awon abajade ti ise idasile naa.', supportImpact: 'Se atileyin fun ipa yii', evidenceTag: 'Akotan eri', evidenceTitle: 'Aworan akotan ibiti a de ati ifesemule lowolowo', changedTitle: 'Ohun ti yipada', galleryTitle: 'Awon fọto ati fidio gidi lati inu awon ise', readDonate: 'Ka sii lori iranlowo', downloadPlaceholder: 'Gba iroyin apere lati ayelujara', donate: 'Se iranlowo' },
  getInvolvedPage: { ...en.getInvolvedPage, heroSubtitle: 'A se oju-iwe yii lati ran awon alejo lowo lati bọ lati inu ife si igbese nipase iforuko sile gege bi alatilẹyin, alabaṣiṣẹpọ, onigbowo, tabi akekoo ise.', whyTitle: 'Ona to ni itumo wa lati se alabapin ni gbogbo ipele.', readPrograms: 'Ka sii lori awon eto', volunteerTitle: 'Foomu iforuko sile alatilẹyin', readImpact: 'Ka sii lori ipa', submitVolunteer: 'Fi ife alatilẹyin ranse', volunteerAlert: 'Asopọ foomu alatilẹyin n bo laipe.', benefitsTitle: 'Kini idi ti o fi yẹ ki o se alatilẹyin pelu wa?', partnerTitle: 'Darapo gege bi alabaṣiṣẹpọ', explorePartnership: 'Wo alabaṣepọ', partnershipAlert: 'Asopọ ibanisoro alabaṣepọ n bo laipe.', sponsorTitle: 'Se onigbowo eto tabi igbese kan', becomeSponsor: 'Di onigbowo', sponsorAlert: 'Asopọ ibeere onigbowo n bo laipe.', internshipTitle: 'Ko eko nigba ti o n se alabapin', applyInternship: 'Bere fun internship', internshipAlert: 'Asopọ ibeere internship n bo laipe.' },
  contactPage: { ...en.contactPage, heroTitle: 'A yoo fe gbo lati odo re.', introEyebrow: 'Kan si wa', introTitle: 'Awon ona to rorun ati taara lati kan si idasile naa.', readAbout: 'Ka sii nipa wa', officeTitle: 'Be wa wo tabi ko si wa', phoneTitle: 'Ba egbe naa soro', whatsappTitle: 'Ba wa soro taara', startWhatsapp: 'Bere iwiregbe WhatsApp', formTitle: 'Fi ifiranse ranse si wa.', readInvolved: 'Ka sii lori Darapo mo wa', sendMessage: 'Fi ifiranse ranse', thankYou: 'O seun fun ifiranse re. Asopọ foomu olubasoro n bo laipe.', officeInfoTitle: 'Alaye olubasoro', responseTitle: 'A n tiraka lati dahun ni kedere ati yarayara.', chatWhatsapp: 'Ba wa soro lori WhatsApp', findUsEyebrow: 'Wa wa', findUsTitle: 'Maapu ipo' },
  leadershipPage: { ...en.leadershipPage, heroTitle: 'Asiwaju ati isakoso ti a seto fun igbekele ati ojuse.', heroSubtitle: 'Pade awon eniyan ati eto ti o ni ojuse fun abojuto ati imuse.', boardText: 'Igbimo n pese abojuto, itoju, ati itonisona ipele giga.', managementTitle: 'Egbe isakoso', managementText: 'Egbe isakoso n se atileyin imuse, isokan, ati gbigbe ise.', governanceTitle: 'Bawo ni a se n se ipinnu' },
  policiesPage: { ...en.policiesPage, heroSubtitle: 'Akotan ti o rọrun nipa awon boṣewa ti o n dari ise ailewu ati ojuse.', introEyebrow: 'Akotan ibamu', introTitle: 'Awon boṣewa ojoogbon fun ise lododo', assuranceTag: 'Idaniloju ojoogbon', assuranceTitle: 'A ko o lati se atileyin igbekele', governanceTag: 'Isakoso to dara' },
  newsPage: { ...en.newsPage, heroEyebrow: 'Iroyin ati awon itan', heroTitle: 'Awon apeleko, imudojuiwon, ati ero amoja.', heroSubtitle: 'Awon imudojuiwon kukuru ati itan lati inu ise idasile naa.', introEyebrow: 'Bulogi ati imudojuiwon', introTitle: 'Iroyin ati imudojuiwon tuntun' },
  eventsPage: { ...en.eventsPage, heroTitle: 'Awon isele to n bo ti n ko agbegbe, alabaṣiṣẹpọ, ati odo jo.', heroSubtitle: 'Oju-iwe NGO to ni igbẹkẹle gbodo je ki ikopa rorun.', registerInterest: 'Foruko ife han', generalRegistration: 'Iforuko gbogbogbo fun isele', formTag: 'Foomu iforuko', formTitle: 'Foruko sile fun awon isele to n bo.', organization: 'Ajo (ayanfẹ)', selectEvent: 'Yan isele kan', notes: 'Ibeere tabi alaye kankan?', submit: 'Fi iforuko ranse' },
  programDetailPage: { ...en.programDetailPage, titleFallback: 'Eto', notFound: 'A ko ri eto naa', backToPrograms: 'Pada si Programs', heroEyebrow: 'Alaye eto', overviewTag: 'Akotan', impactPageLink: 'Ka sii nipa re lori oju-iwe Impact', activitiesTitle: 'Awon ise eto', impactTitle: 'Ipa eto' },
  content: {
    ...en.content,
    aboutStory: [
      'Kevin Nambam Ninmol Foundation jade lati inu irin-ajo igbesi aye ti o kun fun ipenija, suuru, ati agbara anfaani gidi lati yi aye pada.',
      'Kevin dagba ni agbegbe ti o nira nibiti ojo iwaju ko fi han gedegbe. Basketball di nkan ju ere lo. O fun ni itosona, ibawi, ati ona si eko.',
      'Ohun ti o bere gege bi isegun eniyan kan ti di ise ti gbogbo eniyan. Idasile naa n ran awon omode ati odo lowo, paapaa awon to n koju idena awujo tabi oro aje, lati mo pe iberu ko gbodo pinnu ojo iwaju won.',
      'Nipase ere idaraya, itoju, atileyin eko, ati ise agbegbe, idasile naa n sise lati ko igboya, fa anfaani sii, ati ran awon odo lowo lati se yiyan to dara.',
    ],
    founderMessage:
      'Fear No Fear kii se oro asan. Igbagbo ni ti iriri bi. Mo mo ohun ti o je lati wa lati inu isoro ati lati yi aye pada nipase anfaani gidi kan.',
  },
};

const ig = {
  ...en,
  nav: { ...en.nav, home: 'Ulo', about: 'Banyere anyi', leadership: 'Ndu', policies: 'Atumatu', programs: 'Mmemme', impact: 'Mmetuta', getInvolved: 'Soro sonye', donate: 'Nye onyinye', news: 'Akuko', events: 'Ihe omume', contact: 'Kpotu anyi' },
  ui: { ...en.ui, more: 'Ozo', language: 'Asusu', english: 'Bekee', french: 'French', hausa: 'Hausa', yoruba: 'Yoruba', igbo: 'Igbo', donate: 'Nye onyinye', lightMode: 'Uzo oku', darkMode: 'Uzo ojii', switchToLight: 'Gbanwee na uzo oku', switchToDark: 'Gbanwee na uzo ojii', readMore: 'Mutakwuo', seeImpact: 'Lee mmetuta' },
  footer: { ...en.footer, text: 'Otu ntolala na elekwasi anya n umuaka na ndi ntorobia, na-eji egwuregwu, akwukwo, nduzi na nkwado obodo wuo odi nihu siri ike.', explore: 'Choputa', phone: 'Ekwenti', address: 'Adiresi' },
  newsletter: { ...en.newsletter, title: 'Nara mmelite banyere mmetuta anyi.', body: 'Soro na ndeputa email anyi iji nata akuko, mmelite mmemme, ihe omume ohuru na uzo isi kwado oru ntolala a.', note: 'Wulite na anyi n oge ogologo site na mmelite na-egosi ebe nkwado na-eweta mgbanwe.', placeholder: 'Tinye adreesi email gi', subscribe: 'Debanye aha', emailLabel: 'Adreesi email', empty: 'Biko tinye adreesi email gi.' },
  home: { ...en.home, title: 'Ulo', heroTitle: 'Ikwado ndi ntorobia site na basketball, akwukwo na nduzi', heroText: 'Anyi na-enyere ndi ntorobia aka ihoro olile anya kama egwu site n imeghe uzo gara nihu, obi ike na ohere site na egwuregwu, mmuta na nduzi.', heroSupport: 'E hiwere ya site na ndumodu ndu n eziokwu ma gbanye mgbalị n oru bara uru iji nyere umuaka na ndi ntorobia aka isite n mgbochi bilie ma soro odi nihu ka mma.', trustBody: 'Inyere ndi ntorobia aka isi na oke mgbochi gawa n ohere site na nkwado na-aga nihu na oru a na-ahu anya.', impactEyebrow: 'Ntule mmetuta', aboutEyebrow: 'Ntule banyere anyi', aboutText: 'Nkenke mmeghe banyere onye anyi bu na ihe mere oru a ji di.', aboutCopy: 'Ntolala a na-eji egwuregwu, nkwado akwukwo na nduzi nyere ndi ntorobia aka iwulite obi ike, ime mkpebi oma, na iru ohere.', aboutCta: 'Mutakwuo banyere anyi', programsText: 'Nlele nkenke banyere isi mpaghara mmemme nke ntolala a.', programsCta: 'Mutakwuo banyere mmemme', programLearnMore: 'Mutakwuo' },
  donatePage: { ...en.donatePage, title: 'Nye onyinye', heroEyebrow: 'Nye onyinye', heroTitle: 'Nkwado gi na-eweta mgbanwe n eziokwu', heroSubtitle: 'E mere ibe onyinye a iji mee ka inye onyinye di mfe, doo anya ma buru nke a puru itukwasi obi nye onye nkwado obula.', giveEyebrow: 'Nye onyinye taa', giveTitle: 'Horo otu i ga esi kwado ozi a.', oneTime: 'Onyinye otu ugboro', monthly: 'Onyinye kwa onwa', chooseCurrency: 'Horo ego gi', customPlaceholder: 'Tinye ego nke gi', customLabel: 'Ego onyinye nke gi', secureTitle: 'Uzo ugwo echekwara', transparencyEyebrow: 'Nghota', transparencyTitle: 'Ebe ego gi na-aga', donorEyebrow: 'Nkwenye nye onye na enye onyinye', giveNow: 'Nye ugbu a', donateNow: 'Nye onyinye ugbu a', placeholderAlert: 'Njiko ugwo echekwara na-abia n oge na-adighi anya.' },
  aboutPage: { ...en.aboutPage, heroSubtitle: 'Akuko anyi, njirimara anyi, na nkwa anyi n mmepe ndi ntorobia.', storyEyebrow: 'Akuko onye guzobere ya', storyTitle: 'Akuko onye guzobere ya', missionText: 'Ozi a na-akowa ihe mere ntolala ji di na otu o si ejeere ndi ntorobia ozi.', goalsTitle: 'Ebumnuche anyi', objectivesTitle: 'Ebumnuche oru anyi', founderMessageTag: 'Ozi onye guzobere ya', leadershipTitle: 'Ndu na nlekota', nextTitle: 'Lee otu ntolala si agbanwe ozi ya gaa n mmemme bara uru', readPrograms: 'Mutakwuo banyere mmemme', readLeadership: 'Mutakwuo banyere ndu', viewPrograms: 'Lee mmemme' },
  programsPage: { ...en.programsPage, heroSubtitle: 'Ibe a na-akowa ihe ntolala na-eme, otu mmemme obula si aru oru, na ihe nkwado na-eme ka o kwe omume.', introEyebrow: 'Mpaghara mmemme', introTitle: 'A haziri oru anyi n akuku ato doro anya nke nkwado.', introText: 'Mmemme obula n egosi ebumnuche ya, isi oru ya, na mgbanwe bara uru o choro iweta.', categoryTag: 'Akuku mmemme', purpose: 'Ebumnuche', activities: 'Isi oru', expectedImpact: 'Mmetuta a tụrụ anya ya', nextTitle: 'Lee ihe akaebe di n azu oru a', seeImpact: 'Lee mmetuta', viewImpact: 'Lee mmetuta' },
  impactPage: { ...en.impactPage, heroSubtitle: 'Ibe a na-elekwasi anya na nsonaazu, ihe akaebe, na ihe a na ahu anya sitere na oru ntolala a.', supportImpact: 'Kwado mmetuta a', evidenceTag: 'Nleba anya nke ihe akaebe', evidenceTitle: 'Ngosiputa anya nke iru ndi mmadu na nnyefe ugbu a', changedTitle: 'Ihe agbanweela', galleryTitle: 'Foto na vidiyo n eziokwu site na ihe omume', readDonate: 'Mutakwuo banyere inye onyinye', downloadPlaceholder: 'Budata ihe atu nke akuko', donate: 'Nye onyinye' },
  getInvolvedPage: { ...en.getInvolvedPage, heroSubtitle: 'E mere ibe a iji nyere ndi obia aka isi na mmasi gawa n ime ihe site n inye aka, mmekorita, nkwado ego, na ohere mmuta oru.', whyTitle: 'E nwere uzo bara uru isi sonye n okwa obula.', readPrograms: 'Mutakwuo banyere mmemme', volunteerTitle: 'Fom ndebanye aha onye inye aka', readImpact: 'Mutakwuo banyere mmetuta', submitVolunteer: 'Zipu mmasi inye aka', volunteerAlert: 'Njikota ndebanye aha ndi inye aka na-abia n oge na-adighi anya.', benefitsTitle: 'Gini mere i ga eji nyere anyi aka?', partnerTitle: 'Mekorita na ntolala a', explorePartnership: 'Lelee mmekorita', partnershipAlert: 'Njikota kontakti mmekorita na-abia n oge na-adighi anya.', sponsorTitle: 'Kwado mmemme ma obu atumatu', becomeSponsor: 'Buru onye nkwado', sponsorAlert: 'Njikota aririo nkwado na-abia n oge na-adighi anya.', internshipTitle: 'Muta mgbe i na enye aka', applyInternship: 'Tinye akwukwo internship', internshipAlert: 'Njikota ngwa internship na-abia n oge na-adighi anya.' },
  contactPage: { ...en.contactPage, heroTitle: 'Anyi ga-enwe obi uto inu n aka gi.', introEyebrow: 'Kpoturu anyi', introTitle: 'Uzo di mfe na kpomkwem isi ruo ntolala ahu.', readAbout: 'Mutakwuo banyere anyi', officeTitle: 'Bia leta anyi ma obu dee anyi akwukwo', phoneTitle: 'Kwuo okwu na otu anyi', whatsappTitle: 'Kparita uka na anyi ozugbo', startWhatsapp: 'Malite mkparita uka WhatsApp', formTitle: 'Zipu anyi ozi.', readInvolved: 'Mutakwuo banyere Soro sonye', sendMessage: 'Zipu ozi', thankYou: 'Daalu maka ikpoturu anyi. Njikota fom kontakti na-abia n oge na-adighi anya.', officeInfoTitle: 'Nkọwa kọntaktị', responseTitle: 'Anyị na-achọ ịza nke ọma na ngwa ngwa.', chatWhatsapp: 'Kparita uka na WhatsApp', findUsEyebrow: 'Chota anyi', findUsTitle: 'Mapu ebe' },
  leadershipPage: { ...en.leadershipPage, heroTitle: 'Ndu na nhazi e wuru maka ntukwasi obi na ibu oru.', heroSubtitle: 'Zute ndi mmadu na usoro na ahu maka nlekota na mmezu.', boardText: 'Boodu ahu na enye nlekota, nlekota ego, na nduzi di elu.', managementTitle: 'Otu njikwa', managementText: 'Otu njikwa na-akwado mmejuputa, nhazi, na nnyefe oru.', governanceTitle: 'Otu esi eme mkpebi' },
  policiesPage: { ...en.policiesPage, heroSubtitle: 'Nleba anya di mfe banyere ukpuru na-eduzi oru nchekwa na oru nwere ibu oru.', introEyebrow: 'Nchịkọtakwa nnabata', introTitle: 'Ukpuru ọkachamara maka oru nwere ibu oru', assuranceTag: 'Nkwenye ọkachamara', assuranceTitle: 'E wuru ya iji kwado ntụkwasị obi', governanceTag: 'Nlekọta oma' },
  newsPage: { ...en.newsPage, heroEyebrow: 'Akuko na akuko ndu', heroTitle: 'Edemede, mmelite, na echiche ndu.', heroSubtitle: 'Mmelite mkpirikpi na akuko sitere na oru ntolala.', introEyebrow: 'Blog na mmelite', introTitle: 'Akuko na mmelite ohuru' },
  eventsPage: { ...en.eventsPage, heroTitle: 'Ihe omume na-abia nke na-ejikota obodo, ndi mmekorita, na ndi ntorobia.', heroSubtitle: 'Weebusaiti NGO kwesiri ntụkwasị obi ga-eme ka isonye di mfe.', registerInterest: 'Debanye mmasi', generalRegistration: 'Ndebanye aha izugbe', formTag: 'Fom ndebanye aha', formTitle: 'Debanye aha maka ihe omume na-abia.', organization: 'Organisation (nhọrọ)', selectEvent: 'Horo ihe omume', notes: 'Ajụjụ ma obu nkowa?', submit: 'Zipu ndebanye aha' },
  programDetailPage: { ...en.programDetailPage, titleFallback: 'Mmemme', notFound: 'Ahughi mmemme a', backToPrograms: 'Laghachi na Programs', heroEyebrow: 'Nkọwa mmemme', overviewTag: 'Nchịkọta', impactPageLink: 'Mutakwuo site na ibe Impact', activitiesTitle: 'Oru mmemme', impactTitle: 'Mmetuta mmemme' },
  content: {
    ...en.content,
    aboutStory: [
      'Kevin Nambam Ninmol Foundation sitere na njem ndu nke juru na nsogbu, ntachi obi, na ike nke ezi ohere iji gbanwee ndu.',
      'Kevin toro n gburugburu siri ike ebe odi nihu adighi mgbe nile doo anya. Basketball ghoro ihe kariri egwuregwu. O nyere ya nduzi, ndidi, na uzo gara akwukwo.',
      'Ihe bidoro dika mmeri nke otu nwoke ghoro ozi obodo. Ntolala a na enyere umuaka na ndi ntorobia, karisia ndi na-eche ihu oke mgbochi obodo ma obu aku na uba, ka ha mara na egwu ekwesighi ikowa odi nihu ha.',
      'Site na egwuregwu, nduzi, nkwado akwukwo, na oru obodo, ntolala a na aru oru iwulite obi ike, igbasa ohere, na inyere ndi ntorobia ime mkpebi ka mma.',
    ],
    founderMessage:
      'Fear No Fear abughi nani okwu. O bu nkwenye amuru site na ahuhu ndu. Ama m ihe o putara isi na nsogbu bia na otu ezi ohere gbanwee ndu mmadu.',
  },
};

const translations = { en, fr, ha, yo, ig };

export const languageOptions = [
  { code: 'en', labelKey: 'ui.english' },
  { code: 'fr', labelKey: 'ui.french' },
  { code: 'ha', labelKey: 'ui.hausa' },
  { code: 'yo', labelKey: 'ui.yoruba' },
  { code: 'ig', labelKey: 'ui.igbo' },
];

const LanguageContext = createContext(null);

function getValue(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en');

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  const value = useMemo(() => {
    const t = (path) =>
      getValue(translations[language], path) ?? getValue(translations.en, path) ?? path;
    return { language, setLanguage, t };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
