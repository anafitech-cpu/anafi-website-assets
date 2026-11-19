export type Locale = "nl" | "en"

const en = {
  nav: {
    about: "About",
    services: "Services",
    whyAnafi: "Why Anafi",
    approach: "Approach",
    contactUs: "Let's Talk",
  },
  hero: {
    headingLine1: "Operational Intelligence",
    headingLine2: "built from first principles.",
  },
  about: {
    statement:
      "We reveal the operational intelligence already inside every organisation \u2014 and build the systems that keep it sharpening itself.",
    approachLabel: "Our Approach",
    pillars: [
      {
        word: "Reveal",
        description:
          "Surface the bottlenecks, waste, and untapped potential hidden in your operations.",
      },
      {
        word: "Architect",
        description:
          "Design lean systems with automation and AI as foundations, not bolt-ons.",
      },
      {
        word: "Sustain",
        description:
          "Build the leadership and culture so improvements compound after we leave.",
      },
    ],
  },
  services: {
    heading: "Services",
    items: [
      {
        title: "Diagnose",
        description:
          "End-to-end value stream mapping. We find every source of waste, delay, and variability \u2014 and produce a prioritised roadmap, grounded in data.",
      },
      {
        title: "Automate",
        description:
          "Industrial automation that serves your process, not the other way around. Integrated into existing production environments and human workflows.",
      },
      {
        title: "Embed AI",
        description:
          "Machine learning where it pays off: anomaly detection, predictive maintenance, demand forecasting. Built for industrial reliability, not demos.",
      },
      {
        title: "Sustain",
        description:
          "We embed with your teams to develop genuine Lean capability \u2014 and stay through implementation, change, and stabilisation.",
      },
    ],
  },
  whyAnafi: {
    tagline: "Differentiators",
    heading: "Why Anafi",
    items: [
      {
        title: "Rare Combination",
        body: "Most consultancies offer one or the other. We hold both \u2014 Lean manufacturing and applied machine learning, in the same room.",
      },
      {
        title: "The Method",
        body: "We never arrive with a pre-packaged solution. Every engagement begins with analysis of your context \u2014 before any recommendation.",
      },
      {
        title: "Culture",
        body: "Our measure of success is whether your teams can improve without us.",
      },
      {
        title: "Partnership",
        body: "We don\u2019t deliver a report and depart. We stay through implementation, stabilisation, and outcomes.",
      },
    ],
  },
  approach: {
    tagline: "How We Engage",
    heading: "From diagnosis to durable change.",
    steps: [
      {
        number: "01",
        title: "Discover",
        body: "We embed with your teams to map the value stream end-to-end. Every source of waste, delay, and variability — surfaced and prioritised.",
      },
      {
        number: "02",
        title: "Pilot",
        body: "We design and run a contained pilot on a single line or process. Real measurements, real outcomes, real evidence — before we scale.",
      },
      {
        number: "03",
        title: "Scale",
        body: "We roll the validated pattern across the operation, embed Lean capability in your teams, and stay through stabilisation.",
      },
    ],
  },
  contact: {
    heading: "Contact",
    intro:
      "Tell us where you’re stuck. We’ll come back within two working days with a 30-minute slot.",
    locationLabel: "Location",
    locationValue: "Eindhoven, Netherlands",
    emailLabel: "Email",
    thankYouTitle: "Almost there.",
    thankYouBody:
      "Your email client should now be open with your message ready to send. Please review and press send — a member of the Anafi team will be in contact shortly thereafter.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    companyLabel: "Company",
    companyPlaceholder: "Your organisation",
    emailFieldLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message",
    messagePlaceholder:
      "Describe your operational context and the challenges you are seeking to address.",
    submitButton: "Send",
    submittingButton: "Sending\u2026",
    errorTitle: "Something went wrong.",
    errorBody:
      "Your message could not be sent. Please try again, or email us directly at info@anafi.nl.",
  },
  footer: {
    copyright: "All rights reserved.",
    etymology: "Gr. \u1f00\u03bd\u03b1\u03c6\u03b1\u03af\u03bd\u03c9 \u2014 to reveal",
  },
  modeToggle: {
    light: "Switch to light mode",
    dark: "Switch to dark mode",
  },
}

const nl: typeof en = {
  nav: {
    about: "Over ons",
    services: "Diensten",
    whyAnafi: "Waarom Anafi",
    approach: "Aanpak",
    contactUs: "Praat met ons",
  },
  hero: {
    headingLine1: "Operationele Intelligentie",
    headingLine2: "gebouwd vanuit eerste principes.",
  },
  about: {
    statement:
      "We onthullen de operationele intelligentie die al in elke organisatie aanwezig is \u2014 en bouwen de systemen die haar zichzelf laten aanscherpen.",
    approachLabel: "Onze Aanpak",
    pillars: [
      {
        word: "Onthullen",
        description:
          "De knelpunten, verspilling en onbenut potentieel die verborgen zitten in uw operaties zichtbaar maken.",
      },
      {
        word: "Ontwerpen",
        description:
          "Lean systemen ontwerpen met automatisering en AI als fundament, niet als opgelegd onderdeel.",
      },
      {
        word: "Verduurzamen",
        description:
          "Het leiderschap en de cultuur opbouwen zodat verbeteringen blijven doorwerken nadat wij vertrokken zijn.",
      },
    ],
  },
  services: {
    heading: "Diensten",
    items: [
      {
        title: "Diagnosticeren",
        description:
          "End-to-end value stream mapping. We vinden elke bron van verspilling, vertraging en variabiliteit \u2014 en leveren een geprioriteerde routekaart, gefundeerd op data.",
      },
      {
        title: "Automatiseren",
        description:
          "Industri\u00eble automatisering die uw proces dient, niet andersom. Ge\u00efntegreerd in bestaande productieomgevingen en menselijke workflows.",
      },
      {
        title: "AI inbedden",
        description:
          "Machine learning waar het rendement oplevert: anomaliedetectie, predictief onderhoud, vraagvoorspelling. Gebouwd voor industri\u00eble betrouwbaarheid, niet voor demo\u2019s.",
      },
      {
        title: "Verduurzamen",
        description:
          "We werken samen met uw teams om echte Lean-capaciteit te ontwikkelen \u2014 en blijven aan boord tijdens implementatie, verandering en stabilisatie.",
      },
    ],
  },
  whyAnafi: {
    tagline: "Onderscheidend Vermogen",
    heading: "Waarom Anafi",
    items: [
      {
        title: "Zeldzame Combinatie",
        body: "De meeste consultancies bieden het een of het ander. Wij hebben beide in huis \u2014 Lean manufacturing en toegepaste machine learning, aan dezelfde tafel.",
      },
      {
        title: "De Methode",
        body: "We komen nooit met een kant-en-klare oplossing. Elke opdracht begint met analyse van uw context \u2014 voordat er een aanbeveling volgt.",
      },
      {
        title: "Cultuur",
        body: "Onze maatstaf voor succes is of uw teams ook zonder ons kunnen verbeteren.",
      },
      {
        title: "Partnerschap",
        body: "We leveren geen rapport en vertrekken. We blijven door implementatie, stabilisatie en uitkomsten heen.",
      },
    ],
  },
  approach: {
    tagline: "Hoe Wij Werken",
    heading: "Van diagnose tot duurzame verandering.",
    steps: [
      {
        number: "01",
        title: "Ontdekken",
        body: "We werken samen met uw teams om de waardestroom end-to-end in kaart te brengen. Elke bron van verspilling, vertraging en variabiliteit \u2014 zichtbaar gemaakt en geprioriteerd.",
      },
      {
        number: "02",
        title: "Piloteren",
        body: "We ontwerpen en draaien een afgebakende pilot op \u00e9\u00e9n lijn of proces. Echte metingen, echte uitkomsten, echt bewijs \u2014 voordat we opschalen.",
      },
      {
        number: "03",
        title: "Opschalen",
        body: "We rollen het gevalideerde patroon uit over de operatie, verankeren Lean-capaciteit in uw teams en blijven betrokken tot aan stabilisatie.",
      },
    ],
  },
  contact: {
    heading: "Contact",
    intro:
      "Vertel ons waar u vastloopt. We komen binnen twee werkdagen terug met een afspraak van 30 minuten.",
    locationLabel: "Locatie",
    locationValue: "Eindhoven, Nederland",
    emailLabel: "E-mail",
    thankYouTitle: "Bijna klaar.",
    thankYouBody:
      "Uw e-mailprogramma zou nu geopend moeten zijn met uw bericht gereed om te verzenden. Controleer het en druk op verzenden — een lid van het Anafi-team neemt daarna spoedig contact met u op.",
    nameLabel: "Naam",
    namePlaceholder: "Uw naam",
    companyLabel: "Bedrijf",
    companyPlaceholder: "Uw organisatie",
    emailFieldLabel: "E-mail",
    emailPlaceholder: "uw@email.nl",
    messageLabel: "Bericht",
    messagePlaceholder:
      "Beschrijf uw operationele context en de uitdagingen die u wilt aanpakken.",
    submitButton: "Verzenden",
    submittingButton: "Verzenden\u2026",
    errorTitle: "Er is iets misgegaan.",
    errorBody:
      "Uw bericht kon niet worden verzonden. Probeer het opnieuw of mail ons rechtstreeks op info@anafi.nl.",
  },
  footer: {
    copyright: "Alle rechten voorbehouden.",
    etymology: "Gr. ἀναφαίνω — om te onthullen",
  },
  modeToggle: {
    light: "Schakel naar licht thema",
    dark: "Schakel naar donker thema",
  },
}

export type Translations = typeof en
export const translations: Record<Locale, Translations> = { nl, en }
