type MetaTag = {
  property?: string;
  name?: string;
  content: string;
}

const metaTags: MetaTag[] = [{
  name: 'language',
  content: 'english'
}, {
  name: 'author',
  content: 'Bas Klinkhamer'
}, {
  name: 'designer',
  content: 'Bas Klinkhamer'
}, {
  name: 'description',
  content: 'Hello, my name is Bas. I am a Frontend Developer.'
}, {
  name: 'abstract',
  content: 'Hello, my name is Bas. I am a Frontend Developer.'
}, {
  name: 'keywords',
  content: 'Frontend Developer, Developer, Scrum, Agile, FE Dev Profile'
}, {
  name: 'robots',
  content: 'index,follow'
}, {
  name: 'revisit-after',
  content: '14 days'
}, {
  name: 'distribution',
  content: 'web'
}, {
  name: 'robots',
  content: 'noodp'
}, {
  name: 'distribution',
  content: 'global'
}, {
  property: 'og:title',
  content: 'Bas Klinkhamer - Frontend Developer'
}, {
  property: 'og:url',
  content: 'https://position-fixed.nl/'
}, {
  property: 'og:image',
  content: 'https://position-fixed.nl/assets/bas.png'
}, {
  property: 'og:description',
  content: 'Hello, my name is Bas. I am a Frontend Developer.'
}, {
  property: 'og:locale',
  content: 'en_GB'
}, {
  property: 'og:type',
  content: 'website'
}];

export default metaTags;