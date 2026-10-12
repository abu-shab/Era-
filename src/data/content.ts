import { images } from './images';

export const SITE = 'https://www.era-residence.com';
export const links = {
  home: '/',
  apartments: `${SITE}/apartments`,
  contact: `${SITE}/contact`,
  apartmentsOfType: (type: string) => `${SITE}/apartments?type=${type}`,
  privacy:
    'https://cdn.prod.website-files.com/6a0853d5dab31b18f0677081/6a1576532e78ed7645599d9b_politica_privacidad_era_residence.pdf',
  terms:
    'https://cdn.prod.website-files.com/6a0853d5dab31b18f0677081/6a1576732e78ed764559c153_terms_of_use_era_residence%20(1).pdf',
  maps: 'https://maps.app.goo.gl/EzyfT2M6vR5aBdMu9',
  phone: 'tel:+34655408648',
  credits: 'https://thefirstthelast.agency/?utm_source=era-residence&utm_medium=article&utm_campaign=promo',
};

export type Img = { src: string; srcSet: string };

export const tips = [
  {
    slug: 'crafted-to-endure',
    title: 'Crafted to Endure',
    text: 'Natural stone façades were selected for their timeless appearance, durability and ease of maintenance, allowing the architecture to age beautifully over time',
    top: '62.5%',
    left: '57.5%',
  },
  {
    slug: 'light-flow',
    title: 'Light & Flow',
    text: 'Terraces, rooftop solariums and expansive openings maximize natural light while creating a seamless indoor outdoor lifestyle.',
    top: '58.3%',
    left: '26.9%',
  },
  {
    slug: 'your-private-sanctuary',
    title: 'Your Private Sanctuary',
    text: 'Instead of corridors, walking paths connect the apartments — making Era Residence feel closer to a group of private homes than a standard apartment building.',
    top: '73.2%',
    left: '76.6%',
  },
];

export const benefits: { title: string; image: Img; text: string; caption: string }[] = [
  {
    title: 'Real-Life Location',
    image: images.benefitLocation,
    text: 'Nestled between pristine beaches, world-class golf courses and exclusive wellness clubs, Era Residence offers a rare balance of seclusion and seamless access to the finest Mediterranean lifestyle.',
    caption: 'Designed as a community, not a complex',
  },
  {
    title: 'Built to stay',
    image: images.benefitTerrace,
    text: "Drawing on the spirit of Marbella's golden age, the design blends modern architecture with natural materials, lush landscaping and thoughtfully crafted spaces.",
    caption: 'Designed as a community, not a complex',
  },
  {
    title: 'Boutique concept',
    image: images.benefitGarden,
    text: 'A boutique gated community of 25 residences on Costa del Sol, designed around privacy, wellbeing and timeless Mediterranean living.',
    caption: 'Designed as a community, not a complex',
  },
];

export const apartmentTypes: {
  title: string;
  bedrooms: string;
  area: string;
  text: string;
  cta: string;
  type: string;
  image: Img;
}[] = [
  {
    title: 'Ground floor + basement',
    bedrooms: '3',
    area: '178 — 202 m²',
    text: 'Private basement, direct outdoor access and a dedicated lower level.',
    cta: 'Explore Ground + basement',
    type: 'ground-floor-basement',
    image: images.groundFloorBasement,
  },
  {
    title: 'Ground Floor',
    bedrooms: '2',
    area: '97 — 104 m²',
    text: 'Step directly onto your terrace and into the communal gardens, blending indoor comfort with outdoor living.',
    cta: 'Explore Ground floor',
    type: 'ground-floor',
    image: images.groundFloorGarden,
  },
  {
    title: 'Penthouse duplex',
    bedrooms: '2-3',
    area: '124 — 243 m²',
    text: 'Two floors crowned with panoramic views and a private rooftop solarium — the ultimate expression of luxury living.',
    cta: 'Explore Penthouses',
    type: 'penthouse-duplex',
    image: images.penthouseTerrace,
  },
];

export const amenities: { slug: string; title: string; text: string; image: Img }[] = [
  {
    slug: 'gated-community',
    title: 'Gated community',
    text: 'Instead of corridors, walking paths connect the apartments — making Era Residence feel closer to a group of private homes than a standard',
    image: images.gatedCommunity,
  },
  {
    slug: 'swimming-pool-2',
    title: 'Swimming Pool',
    text: 'Saltwater swimming pool, Children’s pool, Sauna, jacuzzi and wellness shower',
    image: images.pool,
  },
  {
    slug: 'swimming-pool',
    title: 'Parking area',
    text: 'Each parking space includes pre-installation for optional EV charging.',
    image: images.parking,
  },
  {
    slug: 'spa-gym',
    title: 'Spa & gym',
    text: 'Designed exclusively for residents and their guests, the amenities at ERA encourage a slower and more balanced Mediterranean lifestyle',
    image: images.spaGym,
  },
  {
    slug: 'landscaping',
    title: 'Landscaping',
    text: 'The landscaping concept was designed to soften the architecture and strengthen the connection between the residences and the Mediterranean environment.',
    image: images.amenityLandscaping,
  },
];

export const gallery: Img[] = [images.gallery03, images.gallery07, images.gallery09, images.kitchen];

export const details: { title: string; text: string; logo?: string }[] = [
  { title: 'Developer', text: 'Swiss Technology S.L.' },
  {
    title: 'Sales & Marketing',
    text: 'Unreal Estate Group',
    logo: '/assets/svg/Unreal-logo.61941e.svg',
  },
  {
    title: 'License obtained',
    text: 'The project holds all required permits and an active construction license. All documentation is publicly available. Construction is already underway — visit the site in person or follow progress via our live online stream.',
  },
  {
    title: '2026',
    text: 'Currently under construction. The first phase of construction is underway, with ongoing development of the apartments and communal areas. Potential buyers can anticipate a modern living space upon completion of the build.',
  },
];

export const legal = [
  { label: 'Privacy policy', href: links.privacy },
  { label: 'Terms of Use', href: links.terms },
];

export const social = [
  {
    label: 'Linkedin',
    href: 'https://www.linkedin.com/company/eraresidenceestepona/?viewAsMember=true',
    icon: 'socialLinkedin',
  },
  { label: 'Facebook', href: 'https://www.facebook.com/era.residence.estepona', icon: 'socialFacebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/era.residence.estepona', icon: 'socialInstagram' },
] as const;
