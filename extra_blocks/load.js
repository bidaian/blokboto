var blocks = document.currentScript.getAttribute('data-extra-blocks').split(':')
var generators = document.currentScript.getAttribute('data-extra-blocks-generators').split(':')
var params = new URLSearchParams(window.location.search.slice(1));


for (block of blocks) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `./extra_blocks/${block}/messages.js`;
  document.head.appendChild(script);

  script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `./extra_blocks/${block}/block.js`;
  document.head.appendChild(script);

  if (params.get('lang')) {
    lang = params.get('lang');
  }
  else {
    lang = 'es'
  }
  if (lang != 'en')
  {
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `./extra_blocks/${block}/msg/${lang}.js`;
    document.head.appendChild(script);
  }

  for (generator of generators) {
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `./extra_blocks/${block}/generators/${generator}.js`;
    document.head.appendChild(script);
  }
}
