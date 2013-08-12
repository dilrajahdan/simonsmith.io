!function(e,t){function n(e,t){return typeof e===t}function r(){var e,t,r,i,s;for(var o in a){if(e=[],t=a[o],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(r=0;r<t.options.aliases.length;r++)e.push(t.options.aliases[r].toLowerCase());for(i=n(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)c[e[s]]=i,u.push((c[e[s]]?"":"no-")+e[s])}}function i(e){var t,n=p.className,r=[];if(n=n.replace(/(^|\s)no-js(\s|$)/,"$1js$2"),c._config.enableClasses){for(var i=0;i<e.length;i++)e[i].match("^no-")||r.push("no-"+e[i]);t=new RegExp("(^|\\s)"+r.join("|")+"(\\s|$)","g"),n=n.replace(t,"$1$2"),n+=" "+e.join(" "+(c._config.classPrefix||"")),p.className=n}}function s(){var e=t.body;return e||(e=h("body"),e.fake=!0),e}function o(e,t,n,r){var i,o,a,l,c="modernizr",u=h("div"),d=s();if(parseInt(n,10))for(;n--;)a=h("div"),a.id=r?r[n]:c+(n+1),u.appendChild(a);return i=["&#173;",'<style id="s',c,'">',e,"</style>"].join(""),u.id=c,(d.fake?d:u).innerHTML+=i,d.appendChild(u),d.fake&&(d.style.background="",d.style.overflow="hidden",l=p.style.overflow,p.style.overflow="hidden",p.appendChild(d)),o=t(u,e),d.fake?(d.parentNode.removeChild(d),p.style.overflow=l):u.parentNode.removeChild(u),!!o}var a=[],l={_version:"v3.0.0pre",_config:{classPrefix:"",enableClasses:!0},_q:[],on:function(e,t){setTimeout(function(){t(this[e])},0)},addTest:function(e,t,n){a.push({name:e,fn:t,options:n})},addAsyncTest:function(e){a.push({name:null,fn:e})}},c=function(){};c.prototype=l,c=new c;var u=[],p=t.documentElement,d=u.slice;Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=d.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var s=new i,o=t.apply(s,n.concat(d.call(arguments)));return Object(o)===o?o:s}return t.apply(e,n.concat(d.call(arguments)))};return r});var h=function(){return t.createElement.apply(t,arguments)},f=function(t){var n,r=e.matchMedia||e.msMatchMedia;return r?r(t)&&r(t).matches||!1:(o("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),n)},m=l.mq=f;c.addTest("mediaqueries",m("only all")),c.addTest("history",function(){var t=navigator.userAgent;return-1!==t.indexOf("Android 2")&&-1!==t.indexOf("Mobile Safari")&&-1===t.indexOf("Chrome")?!1:e.history&&"pushState"in history}),c.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}});var g=" -webkit- -moz- -o- -ms- ".split(" ");l._prefixes=g;var y=l.testStyles=o;c.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",g.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");y(r,function(e){n=9===e.offsetTop})}return n}),r(),i(u),delete l.addTest,delete l.addAsyncTest;for(var v=0;v<c._q.length;v++)c._q[v]();e.Modernizr=c}(this,document);