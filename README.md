Previously, i was using astro and gatsby but over the period it became so hard to maintain. whenever i want to change something i clone repo and immediately i get dependencies error. i can dockerized site but i didn't want to make complex. so, i decided to build static site generator using node. my idea was simple i don't want to write html. i just want to change content and static site should automatically generate site

so, `config.js` have all kind of site content and `build.js` generate static site. if you are experienced developer it will be so easy to understand there is nothing complex here.

node, gh-pages dependencies are needed to run this static site generator. so, install it globally  
