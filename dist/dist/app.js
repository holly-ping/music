!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){document.addEventListener("click",function(e){var t=e.target;if("tab"===t.dataset.role){[].forEach.call(t.parentElement.children,function(e){e.classList.remove("active")}),t.classList.add("active");var n=document.querySelector(t.dataset.view);n&&([].forEach.call(n.parentElement.children,function(e){e.style.display="none"}),n.style.display="block"),window.dispatchEvent(new Event("scroll"))}})},function(e,t,n){"use strict";n.r(t);n(0);var i="https://qq-music-api.now.sh/search",s="https://qq-music-api.now.sh/lyrics";function r(e){return new Promise(function(t,n){window.callback=function(n){var i=n.data.items[0].vkey,s="http://dl.stream.qqmusic.qq.com/C400".concat(e,".m4a?guid=").concat(9962061892,"&vkey=").concat(i,"&uin=0&fromtag=38");t(s)};var i=document.createElement("script");i.src="https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg?g_tk=1278911659&hostUin=0&format=jsonp&callback=callback&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&cid=205361747&uin=0&songmid="+e+"&filename=C400"+e+".m4a&guid=9962061892",document.body.appendChild(i)})}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t,this.$input=this.$el.querySelector("#search"),this.$input.addEventListener("keyup",this.onKeyUp.bind(this)),this.$songs=this.$el.querySelector(".song-list"),this.page=1,this.songs={},this.keyword="",this.perpage=20,this.nomore=!1,this.fetching=!1,this.onscroll=this.onScroll.bind(this),window.addEventListener("scroll",this.onscroll)}return function(e,t,n){t&&a(e.prototype,t),n&&a(e,n)}(e,[{key:"onKeyUp",value:function(e){var t=e.target.value.trim();if(!t)return this.reset();13===e.keyCode&&this.search(t)}},{key:"onScroll",value:function(e){if(this.nomore)return window.removeEventListener("scroll",this.onscroll);pageYOffset+document.documentElement.clientHeight>document.body.scrollHeight-50&&this.search(this.keyword,this.page+1)}},{key:"reset",value:function(){this.page=1,this.songs={},this.keyword="",this.nomore=!1,this.$songs.innerHTML=""}},{key:"search",value:function(e,t){var n=this;this.keyword===e&&this.songs[t||this.page]||this.nomore||this.fetching||(this.keyword!==e&&this.reset(),this.keyword=e,this.loading(),fetch(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return"".concat(i,"?keyword=").concat(e,"&page=").concat(t)}(this.keyword,t||this.page)).then(function(e){return e.json()}).then(function(e){return n.page=e.data.song.curpage,n.songs[n.page]=e.data.song.list,n.nomore="no results"===e.message,e.data.song.list}).then(function(e){return n.append(e)}).then(function(){return n.done()}).catch(function(){return n.fetching=!1}))}},{key:"append",value:function(e){var t=e.map(function(e){var t=e.singer.map(function(e){return e.name}).join(" ");return'\n        <a class="song-item"\n          href="#player?artist='.concat(t,"&songid=").concat(e.songid,"&songmid=").concat(e.songmid,"&songname=").concat(e.songname,"&albummid=").concat(e.albummid,"&duration=").concat(e.interval,'">\n          <i class="icon icon-music"></i>\n          <div class="song-name ellipsis">').concat(e.songname,'</div>\n          <div class="song-artist ellipsis">').concat(t,"</div>\n        </a>")}).join("");this.$songs.insertAdjacentHTML("beforeend",t)}},{key:"loading",value:function(){this.fetching=!0,this.$el.querySelector(".search-loading").classList.add("show")}},{key:"done",value:function(){this.fetching=!1,this.nomore?(this.$el.querySelector(".loading-icon").style.display="none",this.$el.querySelector(".loading-text").style.display="none",this.$el.querySelector(".loading-done").style.display="block",this.$el.querySelector(".search-loading").classList.add("show")):this.$el.querySelector(".search-loading").classList.remove("show")}}]),e}();function c(e){var t=[].slice.call(e||document.querySelectorAll(".lazyload"));if("IntersectionObserver"in window){var n=new IntersectionObserver(function(e){e.forEach(function(e){e.intersectionRatio>0&&l(e.target,function(){n.unobserve(e.target)})})},{threshold:.01});t.forEach(function(e){return n.observe(e)})}else{var i=function(e,t){var n,i;return function s(){var r=Date.now(),a=r-n;!n||a>=t?(e(),n=r):a<t&&(clearTimeout(i),i=setTimeout(s,t-a))}}(function(){if(0===t.length)return window.removeEventListener("scroll",i);(t=t.filter(function(e){return e.classList.contains("lazyload")})).forEach(function(e){return function(e){var t=e.getBoundingClientRect(),n=t.top,i=t.left,s=t.right,r=t.bottom,a=document.documentElement.clientWidth,o=document.documentElement.clientHeight;return(n>0&&n<o||r>0&&r<o)&&(i>0&&i<a||s>0&&s<a)}(e)&&l(e)})},300);window.addEventListener("scroll",i),window.dispatchEvent(new Event("scroll"))}}function l(e,t){var n=new Image;n.src=e.dataset.src,n.onload=function(){e.src=n.src,e.classList.remove("lazyload"),"function"==typeof t&&t()}}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t}return function(e,t,n){t&&u(e.prototype,t),n&&u(e,n)}(e,[{key:"launch",value:function(){var e=this;return fetch("https://qq-music-api.now.sh/top").then(function(e){return e.json()}).then(function(t){return e.list=t.data.topList}).then(function(){return e.render()}),this}},{key:"render",value:function(){var e=this;this.$el.querySelector(".toplist").innerHTML=this.list.map(function(t){return'<li class="top-item">\n        <div class="top-item-media">\n          <a href="#">\n            <img class="lazyload" data-src="'.concat(t.picUrl.replace("http://","https://"),'">\n          </a>\n        </div>\n        <div class="top-item-info">\n          <h3 class="top-item-title ellipsis">').concat(t.topTitle,'</h3>\n          <ul class="top-item-list">').concat(e.songlist(t.songList),"</ul>\n        </div>\n      </li>")}).join(""),c(this.$el.querySelectorAll(".lazyload"))}},{key:"songlist",value:function(e){return e.map(function(e,t){return'<li class="top-item-song">\n        <i class="song-index">'.concat(t+1,'</i>\n        <span class="song-name">').concat(e.songname,"</span>- ").concat(e.singername,"\n      </li>")}).join("")}}]),e}();function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t.el,this.slides=t.slides,this.interval=t.interval||3e3,this.duration=t.duration||300,this.index=0,this.render(),this.start()}return function(e,t,n){t&&d(e.prototype,t),n&&d(e,n)}(e,[{key:"render",value:function(){this.$el.innerHTML='<div class="qq-slider-wrap"></div>',this.$wrap=this.$el.firstElementChild,this.$wrap.style.transitionDuration="".concat(this.duration,"ms"),this.$wrap.style.width="".concat(100*this.slides.length,"%"),this.$wrap.innerHTML=this.slides.map(function(e){return'<div class="qq-slider-item">\n          <a href="'.concat(e.link,'">\n            <img src="').concat(e.image,'">\n          </a>\n      </div>')}).join("")}},{key:"start",value:function(){setInterval(this.next.bind(this),this.interval)}},{key:"next",value:function(){if(this.index+=1,this.index===this.slides.length)return this.$wrap.style.transform="translate(0)",void(this.index=0);this.$wrap.style.transform="translate(-".concat(100*this.index/this.slides.length,"%)")}}]),e}();function p(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t}return function(e,t,n){t&&p(e.prototype,t),n&&p(e,n)}(e,[{key:"launch",value:function(){var e=this;return fetch("https://qq-music-api.now.sh").then(function(e){return e.json()}).then(function(t){return e.json=t}).then(function(){return e.render()}),this}},{key:"render",value:function(){this.renderSlider(this.json.data.slider),this.renderRadios(this.json.data.radioList),this.renderPlayLists(this.json.data.songList),c()}},{key:"renderSlider",value:function(e){this.slider=new f({el:this.$el.querySelector("#slider"),slides:e.map(function(e){return{link:e.linkUrl.replace("http://","https://"),image:e.picUrl.replace("http://","https://")}})})}},{key:"renderRadios",value:function(e){this.$el.querySelector(".radios .list").innerHTML=e.map(function(e){return'<div class="list-item">\n        <div class="list-media">\n          <img class="lazyload" data-src="'.concat(e.picUrl,'">\n          <span class="icon icon-play"></span>\n        </div>\n        <div class="list-detail">\n          <h3 class="list-title">').concat(e.Ftitle,"</h3>\n        </div>\n      </div>")}).join("")}},{key:"renderPlayLists",value:function(e){this.$el.querySelector(".playlists .list").innerHTML=e.map(function(e){return'<div class="list-item">\n        <div class="list-media">\n          <img class="lazyload" data-src="'.concat(e.picUrl,'">\n          <span class="icon icon-play"></span>\n        </div>\n        <div class="list-detail">\n          <h3 class="list-title">').concat(e.songListDesc,'</h3>\n          <div class="list-text"></div>\n        </div>\n      </div>')}).join("")}}]),e}();function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var m=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t,this.elapsed=0,this.duration=n||0,this.progress=0,this.render(),this.$progress=this.$el.querySelector(".progress-bar-progress"),this.$elapsed=this.$el.querySelector(".progress-elapsed"),this.$duration=this.$el.querySelector(".progress-duration"),this.$elapsed.innerText=this.formatTime(this.elapsed),this.$duration.innerText=this.formatTime(this.duration),i&&this.start()}return function(e,t,n){t&&y(e.prototype,t),n&&y(e,n)}(e,[{key:"start",value:function(){this.pause(),this.intervalId=setInterval(this.update.bind(this),50)}},{key:"pause",value:function(){clearInterval(this.intervalId)}},{key:"update",value:function(){this.elapsed+=.05,this.elapsed>=this.duration&&this.reset(),this.progress=this.elapsed/this.duration,this.$progress.style.transform="translate(".concat(100*this.progress-100,"%)"),this.$elapsed.innerText=this.formatTime(this.elapsed)}},{key:"reset",value:function(e){this.pause(),this.elapsed=0,this.progress=0,this.$progress.style.transform="translate(-100%)",this.$elapsed.innerText=this.formatTime(this.elapsed),e&&(this.duration=+e,this.$duration.innerText=this.formatTime(this.duration))}},{key:"restart",value:function(){this.reset(),this.start()}},{key:"render",value:function(){this.$el.innerHTML='\n      <div class="progress-time progress-elapsed"></div>\n        <div class="progress-bar">\n          <div class="progress-bar-progress"></div>\n        </div>\n      <div class="progress-time progress-duration"></div>\n    '}},{key:"formatTime",value:function(e){var t=Math.floor(e/60),n=Math.floor(e%60);return t<10&&(t="0"+t),n<10&&(n="0"+n),"".concat(t,":").concat(n)}}]),e}();function g(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var w=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t,this.$el.innerHTML='<div class="player-lyrics-lines"></div>',this.$lines=this.$el.querySelector(".player-lyrics-lines"),this.$audio=n,this.text="",this.index=0,this.lyrics=[],this.elapsed=0,this.reset(this.text)}return function(e,t,n){t&&g(e.prototype,t),n&&g(e,n)}(e,[{key:"start",value:function(){this.pause(),this.intervalId=setInterval(this.update.bind(this),1e3)}},{key:"pause",value:function(){clearInterval(this.intervalId)}},{key:"update",value:function(){if(this.elapsed=Math.round(this.$audio?this.$audio.currentTime:this.elapsed+1),this.index!==this.lyrics.length-1){for(var e=this.index+1;e<this.lyrics.length;e++){var t=this.getSeconds(this.lyrics[e]);if(this.elapsed===t&&(!this.lyrics[e+1]||this.elapsed<this.getSeconds(this.lyrics[e+1]))){this.$lines.children[this.index].classList.remove("active"),this.$lines.children[e].classList.add("active"),this.index=e;break}}if(this.index>2){var n=-(this.index-2)*this.LINE_HEIGHT;this.$lines.style.transform="translateY(".concat(n,"px)")}}}},{key:"render",value:function(){var e=this.lyrics.map(function(e){return'\n      <div class="player-lyrics-line">'.concat(e.slice(10),"</div>\n    ")}).join("");this.$lines.innerHTML=e}},{key:"reset",value:function(e){this.pause(),this.index=0,this.elapsed=0,this.$lines.style.transform="translateY(0)";var t=this.$lines.querySelector(".active");t&&t.classList.remove("active"),e&&(this.text=this.formatText(e)||"",this.lyrics=this.text.match(/^\[\d{2}:\d{2}.\d{2}\](.+)$/gm)||[],this.lyrics.length&&this.render()),this.lyrics.length&&this.$lines.children[this.index].classList.add("active")}},{key:"restart",value:function(){this.reset(),this.start()}},{key:"getSeconds",value:function(e){return+e.replace(/^\[(\d{2}):(\d{2}).*/,function(e,t,n){return 60*+t+ +n})}},{key:"formatText",value:function(e){var t=document.createElement("div");return t.innerHTML=e,t.innerText}}]),e}();function b(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}w.prototype.LINE_HEIGHT=42;var $=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t,this.$el.addEventListener("click",this),this.$audio=this.createAudio(),this.lyrics=new w(this.$el.querySelector(".player-lyrics"),this.$audio),this.progress=new m(this.$el.querySelector(".progress")),this.fetching=!1}return function(e,t,n){t&&b(e.prototype,t),n&&b(e,n)}(e,[{key:"createAudio",value:function(){var e=this,t=document.createElement("audio");return t.id="player-".concat(Math.floor(100*Math.random()),"-").concat(+new Date),t.addEventListener("ended",function(){e.$audio.play(),e.lyrics.restart(),e.progress.restart()}),document.body.appendChild(t),t}},{key:"handleEvent",value:function(e){var t=e.target;switch(!0){case t.matches(".icon-play"):this.onPlay(e);break;case t.matches(".icon-pause"):this.onPause(e);break;case t.matches(".icon-list"):this.hide()}}},{key:"onPlay",value:function(e){this.fetching||this.$audio.src&&(console.log(this.$audio.src),this.$audio.play(),this.lyrics.start(),this.progress.start(),e.target.classList.add("icon-pause"),e.target.classList.remove("icon-play"))}},{key:"onPause",value:function(e){this.$audio.pause(),this.lyrics.pause(),this.progress.pause(),e.target.classList.add("icon-play"),e.target.classList.remove("icon-pause")}},{key:"play",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t){this.$el.querySelector(".song-name").innerText=t.songname,this.$el.querySelector(".song-artist").innerText=t.artist,this.progress.reset(t.duration);var n=function(e){return"https://y.gtimg.cn/music/photo_new/T002R150x150M000".concat(e,".jpg")}(t.albummid);this.$el.querySelector(".album-cover").src=n,this.$el.querySelector(".player-background").style.backgroundImage="url(".concat(n,")"),t.songid&&(this.songid!==t.songid&&(this.$el.querySelector(".icon-action").className="icon-action icon-play"),this.songid=t.songid,console.log(333,r(t.songmid).then()),r(t.songmid).then(function(t){e.$audio.src=t}),this.fetching=!0,fetch(function(e){return"".concat(s,"?id=").concat(e)}(this.songid)).then(function(e){return e.json()}).then(function(e){return e.lyric}).then(function(t){return e.lyrics.reset(t)}).catch(function(){}).then(function(){return e.fetching=!1})),this.show()}}},{key:"show",value:function(){this.$el.classList.add("show"),document.body.classList.add("noscroll")}},{key:"hide",value:function(){this.$el.classList.remove("show"),document.body.classList.remove("noscroll")}}]),e}(),k=(new o(document.querySelector("#search-view")),new $(document.querySelector("#player")));new h(document.querySelector("#rank-view")).launch(),new v(document.querySelector("#rec-view")).launch();function q(){var e=location.hash;if(/^#player\?.+/.test(e)){var t=e.slice(e.indexOf("?")+1).match(/(\w+)=([^&]+)/g),n=t&&t.reduce(function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e},{});k.play(n)}else k.hide()}document.querySelector(".show-player").addEventListener("click",function(){k.show()}),q(),addEventListener("hashchange",q)}]);
//# sourceMappingURL=app.js.map