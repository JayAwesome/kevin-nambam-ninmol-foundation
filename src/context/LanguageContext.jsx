import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const en = {
  nav: { home: 'Home', about: 'About', leadership: 'Leadership', policies: 'Policies', programs: 'Programs', impact: 'Impact', getInvolved: 'Get Involved', donate: 'Donate', news: 'News', events: 'Events', contact: 'Contact' },
  ui: { menu: 'Menu', more: 'More', language: 'Language', english: 'English', french: 'French', hausa: 'Hausa', yoruba: 'Yoruba', igbo: 'Igbo', donate: 'Donate', lightMode: 'Light Mode', darkMode: 'Dark Mode', switchToLight: 'Switch to light mode', switchToDark: 'Switch to dark mode' },
  footer: { text: 'A youth-focused foundation using sports, education, mentorship, and community support to build courageous futures.', explore: 'Explore', contact: 'Contact', email: 'Email', phone: 'Phone', address: 'Address', copyright: 'Copyright (c) 2026 Kevin Nambam Ninmol Foundation. All rights reserved.' },
  newsletter: { eyebrow: 'Newsletter', title: 'Stay updated on our impact.', body: "Join our email list to receive stories, program updates, recent activities, and opportunities to support the foundation's work.", note: 'Build with us over the long term through updates that show where support is making a difference.', placeholder: 'Enter your email address', subscribe: 'Subscribe', emailLabel: 'Email address', empty: 'Please enter your email address.', success: 'Thank you. Your newsletter signup has been captured in this placeholder flow and is ready to be connected to a live mailing system.' },
  credibility: { eyebrow: 'Credibility and Transparency', title: 'Built to inspire confidence among donors, partners, and institutions.', body: 'The foundation is committed to transparency, accountability, ethical stewardship, and responsible safeguarding practices as its work continues to grow.', trust: 'Trusted by communities and strengthened through visible service, practical partnerships, and responsible stewardship.', cta: 'Learn More About Our Governance' },
  floating: {
    whatsapp: 'WhatsApp Chat', whatsappAria: 'Chat with Kevin Nambam Ninmol Foundation on WhatsApp', faq: 'FAQ Assistant',
    assistantTitle: 'Foundation Assistant', assistantStatus: 'Online for quick guidance', assistantClose: 'Close assistant',
    assistantCopy: 'Ask what the foundation does, how to donate, how to volunteer, or use one of the quick topic buttons below.',
    assistantInput: 'Ask a question...', assistantInputLabel: 'Ask the foundation assistant a question', send: 'Send',
    contactFoundation: 'Contact the Foundation', openWhatsapp: 'Open WhatsApp', viewPrograms: 'View Programs', goToDonate: 'Go to Donate', getInvolved: 'Get Involved', contactUs: 'Contact Us',
    topicWhatWeDo: 'What we do', topicDonate: 'How to donate', topicVolunteer: 'How to volunteer', topicContact: 'Contact details', topicFaq: 'General FAQs',
    responseWhatWeDo: 'Kevin Nambam Ninmol Foundation uses basketball, mentorship, education support, and community outreach to help children and young people build confidence, make positive choices, and access opportunity.',
    responseDonate: 'You can support the foundation through one-time or monthly giving. The Donate page explains giving tiers, what each amount supports, and the payment placeholder that can later be connected to Paystack or Flutterwave.',
    responseVolunteer: 'Volunteers can support clinics, mentoring, outreach, and partnership activities. The Get Involved page explains where your time and skills can help and gives a direct route to connect with the team.',
    responseContact: 'You can reach the foundation by phone, email, WhatsApp, or through the Contact page. The site also includes the office address and an embedded map to make the location easier to find.',
    responseFaq: 'Common questions include how to support the foundation, whether organizations can partner, and how programs go beyond basketball into education, mentoring, and outreach.',
    fallback: 'I do not have a precise answer for that yet, but I can guide you to the right page or help you contact the foundation directly on WhatsApp.',
    greeting: 'Hello. I can help with what the foundation does, how to donate, how to volunteer, and other common questions.',
  },
  home: {
    title: 'Home', heroEyebrow: 'Kevin Nambam Ninmol Foundation', heroTitle: 'Empowering Youth Through Basketball, Education, and Mentorship',
    heroText: 'We help young people choose hope over fear by opening pathways to growth, confidence, and opportunity through sport, learning, and guidance.',
    heroSupport: 'Founded from lived experience and grounded in practical service, the foundation exists to help children and youth rise above limitation and pursue brighter futures.',
    donateNow: 'Donate Now', joinUs: 'Join Us', trustAction: 'Trust through action',
    trustBody: 'Rooted in lived experience, youth mentorship, and visible community engagement in Jos and beyond.',
    impactEyebrow: 'Impact Snapshot', impactTitle: 'A growing record of visible, community-rooted impact.', impactText: 'We believe trust is built through measurable work, clear purpose, and consistent presence in the lives of young people.',
    aboutEyebrow: 'About Preview', aboutTitle: 'A personal story transformed into a public mission.', aboutText: 'Kevin Nambam Ninmol Foundation grew from a journey marked by hardship, resilience, and the life-changing power of opportunity.',
    aboutCopy: "From a difficult beginning to national and international basketball opportunities, Kevin's experience now fuels a foundation committed to helping young people find hope, structure, and support for the future.",
    aboutCta: 'Learn More About Us', programsEyebrow: 'Programs', programsTitle: 'Focused programs that support learning, guidance, and youth development.',
    programsText: 'Each program area is designed to respond to real needs with practical support and long-term encouragement.', programsCta: 'Explore All Programs',
    featuredEyebrow: 'Featured Video', featuredTitle: 'See the mission in motion.', featuredText: "Real footage from clinics and outreach helps supporters understand that the foundation's work is active, personal, and rooted in the community.",
    videoStoryLabel: 'Foundation story', videoClipsTitle: 'Youth impact clips', videoClipsText: 'Short clips from clinics and community activities help visitors feel the energy, sincerity, and consistency of the work.',
    testimonialsEyebrow: 'Testimonials', testimonialsTitle: 'Stories that reflect hope, growth, and real support.', testimonialsText: 'These short beneficiary-style stories help visitors understand how the foundation is experienced on the ground.',
    partnersEyebrow: 'Partners & Supporters', partnersTitle: 'Working together to expand our impact', partnersText: 'The foundation grows through collaboration with schools, communities, organizations, and supporters who help make youth-focused change more practical and sustainable.',
    actionEyebrow: 'Take Action', actionTitle: 'Partner with us to expand hope, opportunity, and youth development.', actionText: 'Your donations, partnerships, and support help strengthen education access, mentoring, and practical development opportunities for young people.',
    latestActivitiesEyebrow: 'Latest Activities', latestActivitiesTitle: 'Live updates from outreach, mentoring, and community work.', latestActivitiesText: 'These recent activity snapshots show that the foundation is active, consistent, and present in the lives of the young people it serves.',
    latestUpdatesEyebrow: 'Latest Updates', latestUpdatesTitle: 'Recent activities and updates from the field.', latestUpdatesText: 'Current updates help donors, partners, and visitors see that the work is active, transparent, and ongoing.',
    newsCta: 'Visit News Page', programLearnMore: 'Learn more',
    heroTrustSignals: ['Trusted by communities', 'Visible outreach and local partnerships', 'Transparent, mission-led delivery'],
  },
  donatePage: {
    title: 'Donate', heroEyebrow: 'Donate', heroTitle: 'Your support creates real change', heroSubtitle: 'This giving page is designed to make donating simple, clear, and trustworthy for every supporter.',
    giveEyebrow: 'Give Today', giveTitle: 'Choose how you want to support the mission.', giveText: 'Your gift helps the foundation respond to practical needs through youth support, educational access, mentoring, and development initiatives across local and international giving options.',
    oneTime: 'One-time donation', monthly: 'Monthly donation', chooseCurrency: 'Choose your currency', currencyText: 'Base donation amounts are set in NGN and displayed automatically in your selected currency.',
    customPlaceholder: 'Enter custom amount', customLabel: 'Custom donation amount', secureTitle: 'Secure payment options', secureText: 'Paystack or Flutterwave can be connected here for secure one-time and monthly donations.',
    conversionNote: 'Approximate conversion:', transparencyEyebrow: 'Transparency', transparencyTitle: 'Where your money goes',
    transparencyBody: 'Every contribution is used responsibly to create measurable impact. Donations help fund direct youth support, educational materials, mentoring activities, outreach delivery, and practical development programs.',
    transparencyStatement: 'The foundation is committed to transparent stewardship so donors can understand how support is translated into practical work.',
    donorEyebrow: 'Donor Assurance', donorTitle: 'Giving should feel clear, secure, and trustworthy.', donorBody: 'The foundation is committed to responsible stewardship, clear communication, and transparent use of resources so supporters can give with confidence.',
    donorReassurance: 'Every contribution is used responsibly to create measurable impact.', paymentNote: 'Payment gateway placeholder: Paystack / Flutterwave',
    ctaEyebrow: 'Donate', ctaTitle: 'Your support creates real change', ctaText: 'Every donation helps extend opportunity, guidance, and practical support to young people who need it most.', giveNow: 'Give Now', donateNow: 'Donate Now', placeholderAlert: 'Secure payment integration placeholder.',
  },
};

const fr = {
  ...en,
  nav: { home: 'Accueil', about: 'A propos', leadership: 'Direction', policies: 'Politiques', programs: 'Programmes', impact: 'Impact', getInvolved: "S'impliquer", donate: 'Faire un don', news: 'Actualites', events: 'Evenements', contact: 'Contact' },
  ui: { ...en.ui, more: 'Plus', language: 'Langue', english: 'Anglais', french: 'Francais', donate: 'Faire un don', lightMode: 'Mode clair', darkMode: 'Mode sombre', switchToLight: 'Passer au mode clair', switchToDark: 'Passer au mode sombre' },
  footer: { text: 'Une fondation tournee vers la jeunesse qui utilise le sport, l education, le mentorat et l appui communautaire pour construire des avenirs courageux.', explore: 'Explorer', contact: 'Contact', email: 'Email', phone: 'Telephone', address: 'Adresse', copyright: 'Copyright (c) 2026 Kevin Nambam Ninmol Foundation. Tous droits reserves.' },
  newsletter: { eyebrow: 'Newsletter', title: 'Restez informe de notre impact.', body: 'Inscrivez-vous a notre liste email pour recevoir des histoires, des mises a jour de programmes, des activites recentes et des occasions de soutenir le travail de la fondation.', note: 'Construisez avec nous sur le long terme grace a des nouvelles qui montrent ou le soutien fait la difference.', placeholder: 'Entrez votre adresse email', subscribe: "S'abonner", emailLabel: 'Adresse email', empty: 'Veuillez entrer votre adresse email.', success: 'Merci. Votre inscription a la newsletter a ete enregistree dans ce flux de demonstration et peut maintenant etre reliee a un systeme d emailing en direct.' },
  credibility: { eyebrow: 'Credibilite et transparence', title: 'Concu pour inspirer confiance aux donateurs, partenaires et institutions.', body: 'La fondation s engage en faveur de la transparence, de la responsabilite, d une gestion ethique et de pratiques de sauvegarde responsables a mesure que son travail grandit.', trust: 'Appuyee par les communautes et renforcee par un service visible, des partenariats concrets et une gestion responsable.', cta: 'En savoir plus sur notre gouvernance' },
  home: { ...en.home, title: 'Accueil', heroTitle: 'Donner aux jeunes les moyens d agir grace au basketball, a l education et au mentorat', heroText: 'Nous aidons les jeunes a choisir l espoir plutot que la peur en ouvrant des voies vers la croissance, la confiance et les opportunites par le sport, l apprentissage et l accompagnement.', heroSupport: 'Fondee sur une experience vecue et ancree dans un service concret, la fondation existe pour aider les enfants et les jeunes a depasser les limites et a poursuivre un avenir meilleur.', donateNow: 'Faire un don', joinUs: 'Nous rejoindre', trustAction: 'La confiance par l action', impactEyebrow: 'Apercu de l impact', impactTitle: 'Un bilan croissant d impact visible et ancre dans la communaute.', aboutEyebrow: 'Apercu', aboutTitle: 'Une histoire personnelle transformee en mission publique.', aboutCta: 'En savoir plus sur nous', programsEyebrow: 'Programmes', programsTitle: 'Des programmes cibles qui soutiennent l apprentissage, l accompagnement et le developpement des jeunes.', programsCta: 'Explorer tous les programmes', featuredEyebrow: 'Video mise en avant', videoStoryLabel: 'Histoire de la fondation', videoClipsTitle: 'Clips d impact jeunesse', testimonialsEyebrow: 'Temoignages', partnersEyebrow: 'Partenaires et soutiens', actionEyebrow: 'Passer a l action', latestActivitiesEyebrow: 'Dernieres activites', latestUpdatesEyebrow: 'Dernieres mises a jour', newsCta: 'Voir la page Actualites', programLearnMore: 'En savoir plus' },
  donatePage: { ...en.donatePage, title: 'Faire un don', heroEyebrow: 'Faire un don', heroTitle: 'Votre soutien cree un changement reel', heroSubtitle: 'Cette page de don est concue pour rendre la contribution simple, claire et digne de confiance pour chaque soutien.', giveEyebrow: 'Donnez aujourd hui', giveTitle: 'Choisissez comment soutenir la mission.', oneTime: 'Don ponctuel', monthly: 'Don mensuel', chooseCurrency: 'Choisissez votre devise', customPlaceholder: 'Entrez un montant personnalise', customLabel: 'Montant de don personnalise', secureTitle: 'Options de paiement securisees', transparencyEyebrow: 'Transparence', transparencyTitle: 'A quoi sert votre don', donorEyebrow: 'Assurance donateur', ctaEyebrow: 'Faire un don', giveNow: 'Donner maintenant', donateNow: 'Faire un don', placeholderAlert: 'Integration securisee du paiement en cours.' },
};

const ha = {
  ...en,
  nav: { home: 'Gida', about: 'Game da mu', leadership: 'Jagoranci', policies: 'Dokoki', programs: 'Shirye-shirye', impact: 'Tasiri', getInvolved: 'Shiga tare da mu', donate: 'Ba da gudummawa', news: 'Labarai', events: 'Taro', contact: 'Tuntube mu' },
  ui: { ...en.ui, more: 'Kari', language: 'Harshe', english: 'Turanci', french: 'Faransanci', yoruba: 'Yarbanci', donate: 'Ba da gudummawa', lightMode: 'Yanayin haske', darkMode: 'Yanayin duhu', switchToLight: 'Canja zuwa yanayin haske', switchToDark: 'Canja zuwa yanayin duhu' },
  footer: { text: 'Gidauniya ce mai mayar da hankali kan matasa wadda ke amfani da wasanni, ilimi, jagoranci da tallafin al umma domin gina makoma mai karfi.', explore: 'Bincika', contact: 'Tuntube mu', email: 'Email', phone: 'Waya', address: 'Adireshi', copyright: 'Copyright (c) 2026 Kevin Nambam Ninmol Foundation. Dukkan hakkoki suna nan.' },
  newsletter: { eyebrow: 'Newsletter', title: 'Kasance da sabbin bayanai kan tasirinmu.', body: 'Shiga jerin email dinmu domin samun labarai, sabbin bayanan shirye-shirye, ayyukan baya-bayan nan da hanyoyin tallafawa aikin gidauniyar.', note: 'Ku gina tare da mu na dogon lokaci ta sabuntawa da ke nuna inda tallafi ke kawo canji.', placeholder: 'Shigar da adireshin email dinka', subscribe: 'Yi rajista', emailLabel: 'Adireshin email', empty: 'Da fatan a shigar da adireshin email dinka.', success: 'Na gode. An dauki rajistar newsletter dinka a wannan tsari na wucin gadi kuma a shirye take a hada ta da tsarin aika wasiku na gaske.' },
  credibility: { eyebrow: 'Aminci da gaskiya', title: 'An gina shi domin ya karfafa amincewa ga masu tallafi, abokan hulda da hukumomi.', body: 'Gidauniyar tana jajircewa wajen gaskiya, rikon amana, kyakkyawan sarrafa albarkatu da kula da lafiyar yara yayin da aikinta ke bunkasa.', trust: 'Al ummomi sun amince da mu kuma muna karfafa aiki ta hanyar ayyuka bayyanannu, hadin gwiwa mai anfani da kuma rikon amana.', cta: 'Kara sani game da jagorancinmu' },
  home: { ...en.home, title: 'Gida', heroTitle: 'Karfafa matasa ta kwallon kwando, ilimi da jagoranci', heroText: 'Muna taimaka wa matasa su zabi bege maimakon tsoro ta bude hanyoyi zuwa ci gaba, kwarin gwiwa da dama ta hanyar wasanni, koyo da jagora.', heroSupport: 'An kafa ta daga kwarewar rayuwa kuma an gina ta a kan aiki na zahiri domin taimaka wa yara da matasa su tashi sama da takura su nemi kyakkyawar makoma.', donateNow: 'Ba da gudummawa yanzu', joinUs: 'Shiga tare da mu', trustAction: 'Aminci ta hanyar aiki', impactEyebrow: 'Takaitaccen tasiri', aboutEyebrow: 'Takaitaccen bayani', aboutCta: 'Kara sani game da mu', programsEyebrow: 'Shirye-shirye', programsCta: 'Binciki duk shirye-shirye', featuredEyebrow: 'Bidiyo na musamman', videoStoryLabel: 'Labarin gidauniya', videoClipsTitle: 'Gajerun bidiyon tasirin matasa', testimonialsEyebrow: 'Shaidu', partnersEyebrow: 'Abokan hulda da masu goyon baya', actionEyebrow: 'Yi aiki yanzu', latestActivitiesEyebrow: 'Sabbin ayyuka', latestUpdatesEyebrow: 'Sabbin bayanai', newsCta: 'Ziyarci shafin labarai', programLearnMore: 'Kara koyo' },
  donatePage: { ...en.donatePage, title: 'Ba da gudummawa', heroEyebrow: 'Ba da gudummawa', heroTitle: 'Tallafinka na kawo canji na gaske', heroSubtitle: 'An tsara wannan shafin gudummawa don sanya bayarwa ta zama mai sauki, bayyane kuma abin dogaro ga kowane mai tallafi.', giveEyebrow: 'Ba da gudummawa yau', giveTitle: 'Zabi yadda za ka tallafawa manufa.', oneTime: 'Gudummawar sau daya', monthly: 'Gudummawar kowane wata', chooseCurrency: 'Zabi kudinka', customPlaceholder: 'Shigar da adadi na musamman', customLabel: 'Adadin gudummawa na musamman', secureTitle: 'Hanyoyin biyan kudi masu tsaro', transparencyEyebrow: 'Gaskiya', transparencyTitle: 'Inda kudinka ke zuwa', donorEyebrow: 'Tabbacin mai bayarwa', ctaEyebrow: 'Ba da gudummawa', giveNow: 'Ba da gudummawa yanzu', donateNow: 'Ba da gudummawa yanzu', placeholderAlert: 'Wurin biyan kudi mai tsaro yana nan tafe.' },
};

const yo = {
  ...en,
  nav: { home: 'Ile', about: 'Nipa wa', leadership: 'Asiwaju', policies: 'Eto imulo', programs: 'Awon eto', impact: 'Ipa', getInvolved: 'Darapo mo wa', donate: 'Se iranlowo', news: 'Iroyin', events: 'Awon isele', contact: 'Kan si wa' },
  ui: { ...en.ui, more: 'Siwaju sii', language: 'Ede', english: 'Geesi', french: 'Faranse', donate: 'Se iranlowo', lightMode: 'Ipo imole', darkMode: 'Ipo okunkun', switchToLight: 'Yipada si ipo imole', switchToDark: 'Yipada si ipo okunkun' },
  footer: { text: 'Ajo idasile to dojuko odo ti n lo ere idaraya, eko, itoju ati atilẹyin agbegbe lati ko ojo iwaju akinkanju.', explore: 'Sawari', contact: 'Kan si wa', email: 'Email', phone: 'Foonu', address: 'Adiresi', copyright: 'Copyright (c) 2026 Kevin Nambam Ninmol Foundation. Gbogbo eto ni aabo.' },
  newsletter: { eyebrow: 'Newsletter', title: 'Maa mo nipa ipa wa.', body: 'Darapo mo atoko imeeli wa lati gba awon itan, imudojuiwon eto, awon ise to sese waye ati ona lati se atilẹyin ise idasile naa.', note: 'Ko pelu wa ni igba pipe nipasẹ awon imudojuiwon ti n fi han ibi ti atilẹyin n mu iyato wa.', placeholder: 'Te adiresi imeeli re sii', subscribe: 'Foruko sile', emailLabel: 'Adiresi imeeli', empty: 'Jowo te adiresi imeeli re sii.', success: 'Ese. A ti gba iforukosile newsletter re ninu ilana idanwo yii, o si setan lati so mo eto imeeli gidi.' },
  credibility: { eyebrow: 'Igbekele ati otito', title: 'A ko oju opo yii lati mu igbekele awon oluranlowo, awon alabasepo ati awon ile ise wa.', body: 'Idasile naa ni ifaramo si otito, ojuse, lilo oro ni iwa rere ati aabo awon omo nigba ti ise wa n gbooro si.', trust: 'Awon agbegbe gbagbo ninu wa, a si n lagbara sii nipa ise ti eniyan le ri, ifowosowopo to ni anfaani ati itoju oro to dara.', cta: 'Ko eko sii nipa isakoso wa' },
  home: { ...en.home, title: 'Ile', heroTitle: 'Fifun awon odo ni agbara nipasẹ basketball, eko ati itoju', heroText: 'A n ran awon odo lowo lati yan ireti dipo iberu nipa sisi ona si idagbasoke, igboya ati anfaani nipasẹ ere idaraya, eko ati itosona.', heroSupport: 'A da a sile lati inu iriri gidi ati ise to daju, lati ran awon omode ati odo lowo lati dide loke idena ki won le lepa ojo iwaju to dara.', donateNow: 'Se iranlowo bayii', joinUs: 'Darapo mo wa', trustAction: 'Igbekele nipasẹ ise', impactEyebrow: 'Akotan ipa', aboutEyebrow: 'Akotan nipa wa', aboutCta: 'Ko eko sii nipa wa', programsEyebrow: 'Awon eto', programsCta: 'Sawari gbogbo awon eto', featuredEyebrow: 'Fidio pataki', videoStoryLabel: 'Itan idasile', videoClipsTitle: 'Awon agekuru ipa odo', testimonialsEyebrow: 'Eri awon eniyan', partnersEyebrow: 'Alabasisepo ati awon olutileyin', actionEyebrow: 'Gba igbese', latestActivitiesEyebrow: 'Awon ise to sese waye', latestUpdatesEyebrow: 'Awon imudojuiwon tuntun', newsCta: 'Sabeewo si oju-iwe iroyin', programLearnMore: 'Ko eko sii' },
  donatePage: { ...en.donatePage, title: 'Se iranlowo', heroEyebrow: 'Se iranlowo', heroTitle: 'Atilẹyin re n se ayipada gidi', heroSubtitle: 'A se apeere oju-iwe iranlowo yii lati je ki fifunni rorun, kedere ati gbekele fun gbogbo alatilẹyin.', giveEyebrow: 'Se iranlowo loni', giveTitle: 'Yan bi o se fe se atilẹyin ise wa.', oneTime: 'Iranlowo lekan', monthly: 'Iranlowo oṣooṣu', chooseCurrency: 'Yan owo re', customPlaceholder: 'Te iye tire sii', customLabel: 'Iye iranlowo tire', secureTitle: 'Awon ona isanwo to ni aabo', transparencyEyebrow: 'Otito', transparencyTitle: 'Ibi ti owo re n lo', donorEyebrow: 'Idaniloju oluranlowo', ctaEyebrow: 'Se iranlowo', giveNow: 'Fun bayii', donateNow: 'Se iranlowo bayii', placeholderAlert: 'Aaye isanwo to ni aabo n bo laipe.' },
};

const ig = {
  ...en,
  nav: { home: 'Ulo', about: 'Banyere anyi', leadership: 'Ndu', policies: 'Atumatu', programs: 'Mmemme', impact: 'Mmetuta', getInvolved: 'Soro sonye', donate: 'Nye onyinye', news: 'Akuko', events: 'Ihe omume', contact: 'Kpotu anyi' },
  ui: { ...en.ui, more: 'Ozo', language: 'Asusu', english: 'Bekee', donate: 'Nye onyinye', lightMode: 'Uzo oku', darkMode: 'Uzo ojii', switchToLight: 'Gbanwee na uzo oku', switchToDark: 'Gbanwee na uzo ojii' },
  footer: { text: 'Otu ntolala na elekwasi anya n umuaka na ndi ntorobia, na-eji egwuregwu, akwukwo, nduzi na nkwado obodo wuo odi nihu siri ike.', explore: 'Choputa', contact: 'Kpotu anyi', email: 'Email', phone: 'Ekwenti', address: 'Adiresi', copyright: 'Copyright (c) 2026 Kevin Nambam Ninmol Foundation. Ikike nile echekwabara.' },
  newsletter: { eyebrow: 'Newsletter', title: 'Nara mmelite banyere mmetuta anyi.', body: 'Soro na ndepụta email anyi iji nata akuko, mmelite mmemme, ihe omume ohuru na uzo isi kwado oru ntolala a.', note: 'Wulite na anyi n oge ogologo site na mmelite na-egosi ebe nkwado na-eweta mgbanwe.', placeholder: 'Tinye adreesi email gi', subscribe: 'Debanye aha', emailLabel: 'Adreesi email', empty: 'Biko tinye adreesi email gi.', success: 'Daalu. Edebere aha newsletter gi n usoro ngosi a ma o di njikere ijikota ya na usoro mail nke eziokwu.' },
  credibility: { eyebrow: 'Nkwenye na nghota', title: 'A wuru ya iji mee ka ndi na-enye onyinye, ndi na-emekorita na ulo oru nwee obi ike ozugbo.', body: 'Ntolala a nwere nkwa nye nghota, ibu oru, iji akuku na omume oma na nchedo umuaka ka oru ya na-aru elu.', trust: 'Obodo na-atụkwasi anyi obi, a na-esikwa n oru a na-ahu anya, mmekorita bara uru na nlekota ego oma mee ka anyi sie ike.', cta: 'Mutakwuo banyere ndu na nhazi anyi' },
  home: { ...en.home, title: 'Ulo', heroTitle: 'Ikwado ndi ntorobia site na basketball, akwukwo na nduzi', heroText: 'Anyi na-enyere ndi ntorobia aka ihoro olile anya kama egwu site n imeghe uzo gara nihu, obi ike na ohere site na egwuregwu, mmuta na nduzi.', heroSupport: 'E hiwere ya site na ndumodu ndu n eziokwu ma gbanye mgborogwu n oru bara uru iji nyere umuaka na ndi ntorobia aka isite n mgbochi bilie ma soro odi nihu ka mma.', donateNow: 'Nye onyinye ugbu a', joinUs: 'Soro anyi', trustAction: 'Nkwenye site n oru', impactEyebrow: 'Ntule mmetuta', aboutEyebrow: 'Ntule banyere anyi', aboutCta: 'Mutakwuo banyere anyi', programsEyebrow: 'Mmemme', programsCta: 'Choputa mmemme nile', featuredEyebrow: 'Vidiyo puru iche', videoStoryLabel: 'Akuko ntolala', videoClipsTitle: 'Obere vidiyo mmetuta ndi ntorobia', testimonialsEyebrow: 'Ihe akaebe', partnersEyebrow: 'Ndi mmeko na ndi nkwado', actionEyebrow: 'Mee ihe ugbu a', latestActivitiesEyebrow: 'Ihe omume ohuru', latestUpdatesEyebrow: 'Mmelite ohuru', newsCta: 'Gaa na ibe Akuko', programLearnMore: 'Mutakwuo' },
  donatePage: { ...en.donatePage, title: 'Nye onyinye', heroEyebrow: 'Nye onyinye', heroTitle: 'Nkwado gi na-eweta mgbanwe n eziokwu', heroSubtitle: 'E mere ibe onyinye a iji mee ka inye onyinye di mfe, doo anya ma buru nke a puru itukwasi obi nye onye nkwado obula.', giveEyebrow: 'Nye onyinye taa', giveTitle: 'Horo otu i ga-esi kwado ozi a.', oneTime: 'Onyinye otu ugboro', monthly: 'Onyinye kwa onwa', chooseCurrency: 'Horo ego gi', customPlaceholder: 'Tinye ego nke gi', customLabel: 'Ego onyinye nke gi', secureTitle: 'Uzo ugwo echekwara', transparencyEyebrow: 'Nghota', transparencyTitle: 'Ebe ego gi na-aga', donorEyebrow: 'Nkwenye nye onye na-enye onyinye', ctaEyebrow: 'Nye onyinye', giveNow: 'Nye ugbu a', donateNow: 'Nye onyinye ugbu a', placeholderAlert: 'Njiko ugwo echekwara na-abia n oge na-adighi anya.' },
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
    const t = (path) => getValue(translations[language], path) ?? getValue(translations.en, path) ?? path;
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
