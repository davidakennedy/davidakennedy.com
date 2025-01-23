{
  "name": "{{ metadata.author.name }}",
  "description": "{{ metadata.description }}",
  "author": {
    "@type": "Person",
    "name": "{{ metadata.author.name }}"
  },
  "@type": "WebSite",
  "url": "{{ metadata.url }}",
  "image": "{{ metadata.author.avatar | url | absoluteUrl(metadata.site.url) }}",
  "headline": "{{ metadata.title }}",
  "sameAs": [
    "{{ metadata.author.social.github.url }}",
    "{{ metadata.author.social.codepen.url }}"
  ],
  "@context": "http://schema.org"
}
