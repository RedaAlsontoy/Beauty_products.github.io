(function(){var t={2300:function(t,e,s){"use strict";var a=s(6848),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Header"),e("div",{staticClass:"content"},[e("router-view")],1)],1)},n=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("nav",{staticClass:"nav-bar"},[e("button",{ref:"toggleNav",staticClass:"fas fa-bars fa-2x toggle-haeder"}),e("ul",{ref:"links",staticClass:"links"},[e("li",[e("router-link",{staticClass:"home-text",attrs:{to:"/",exact:""}},[t._v("Home")]),e("router-link",{staticClass:"home-icon",attrs:{to:"/",exact:""}},[e("i",{staticClass:"fas fa-home fa-2x"})])],1),e("li",[e("router-link",{attrs:{to:"/about"}},[t._v("Contact Us")])],1),e("li",[e("router-link",{attrs:{to:"/help"}},[t._v("Products")])],1),e("li",[e("router-link",{attrs:{to:"/reda"}},[t._v("Reda")])],1)])]),e("div",{staticClass:"page-logo"},[e("router-link",{attrs:{to:"/"}},[e("img",{attrs:{alt:"Vue logo",src:s(9217)}})])],1)])},o=[],u={name:"Header-app",data(){return{isDragging:!1,startX:0}},mounted(){const t=this.$refs.toggleNav,e=this.$refs.links;t.addEventListener("click",(t=>{t.stopPropagation(),e.classList.toggle("show")})),document.addEventListener("click",(s=>{t.contains(s.target)||e.contains(s.target)||e.classList.remove("show")})),e.addEventListener("click",(t=>{"A"!==t.target.tagName&&"BUTTON"!==t.target.tagName||e.classList.remove("show")})),"ontouchstart"in window&&(document.addEventListener("touchstart",this.handleTouchStart),document.addEventListener("touchmove",this.handleTouchMove),document.addEventListener("touchend",this.handleTouchEnd))},methods:{handleTouchStart(t){const e=this.$refs.links;e.classList.contains("show")&&(this.isDragging=!0,this.startX=t.touches[0].clientX)},handleTouchMove(t){const e=this.$refs.links;if(this.isDragging&&e.classList.contains("show")){const s=t.touches[0].clientX-this.startX;s<-100&&(e.classList.remove("show"),this.isDragging=!1)}},handleTouchEnd(){this.isDragging=!1}},beforeDestroy(){const t=this.$refs.links;document.removeEventListener("click",this.handleDocumentClick),"ontouchstart"in window&&(document.removeEventListener("touchstart",this.handleTouchStart),document.removeEventListener("touchmove",this.handleTouchMove),document.removeEventListener("touchend",this.handleTouchEnd)),t.removeEventListener("click",this.handleNavClick)}},c=u,l=s(1656),d=(0,l.A)(c,r,o,!1,null,"1de3aab1",null),m=d.exports,f={components:{Header:m}},p=f,v=(0,l.A)(p,i,n,!1,null,null,null),g=v.exports,h=s(6178),b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("lainding"),e("product"),e("PageAbout")],1)},_=[],C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"landing sections",attrs:{id:"home"}},[e("div",{ref:"mainImage",staticClass:"overlay image",class:{"fade-out":t.isFading,"fade-in":!t.isFading},style:{backgroundImage:`url(${t.images[t.currentIndex]})`}},[t.images.length?t._e():e("div",[e("p",[t._v("No images found")])])]),t._m(0),t._m(1),t._m(2)])},y=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"png-image"},[e("img",{attrs:{src:s(859),alt:""}}),e("img",{attrs:{src:s(7600),alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"text"},[e("h1",{staticClass:"selection",attrs:{id:"home"}},[t._v(" Hello Every one! "),e("br"),t._v(" i'm "),e("span",{staticClass:"selection"},[t._v("Reda")]),t._v(" i make art. ")]),e("button",{staticClass:"page-button"},[t._v("Get Your Page")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"phone"},[e("span",[t._v("01070010523")])])}],x=(s(1454),{name:"page-landing",data(){return{images:[],currentIndex:0,isFading:!1}},created(){const t=s(958);if(this.images=t.keys().map((e=>t(e))),0===this.images.length)return void console.warn("No images found in the specified directory.");const e=localStorage.getItem("currentImageIndex");null!==e&&(this.currentIndex=parseInt(e,10))},mounted(){this.images.length>0&&this.startImageRotation()},methods:{startImageRotation(){const t=this.$refs.mainImage;setInterval((()=>{t&&(this.isFading=!0,setTimeout((()=>{this.currentIndex=(this.currentIndex+1)%this.images.length,localStorage.setItem("currentImageIndex",this.currentIndex),this.isFading=!1}),1e3))}),5e3)}}}),k=x,w=(0,l.A)(k,C,y,!1,null,"720dbffc",null),A=w.exports,L=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sections",attrs:{id:"products"}},[e("headText",{attrs:{msg:"our product"}}),t._m(0)],1)},E=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"menu-content"},[e("div",{staticClass:"menu-item"},[e("img",{attrs:{src:"images/menu/s1.png",alt:""}}),e("h5",[t._v("black hear")]),e("p",[t._v("$20.00 "),e("sub",[t._v("$25.00")])]),e("button",{staticClass:"page-button"},[t._v("add to cart")])]),e("div",{staticClass:"menu-item"},[e("img",{attrs:{src:"images/menu/s2.png",alt:""}}),e("h5",[t._v("black hear")]),e("p",[t._v("$20.00 "),e("sub",[t._v("$25.00")])]),e("button",{staticClass:"page-button"},[t._v("add to cart")])]),e("div",{staticClass:"menu-item"},[e("img",{attrs:{src:"images/menu/s3.png",alt:""}}),e("h5",[t._v("black hear")]),e("p",[t._v("$20.00 "),e("sub",[t._v("$25.00")])]),e("button",{staticClass:"page-button"},[t._v("add to cart")])]),e("div",{staticClass:"menu-item"},[e("img",{attrs:{src:"images/menu/s4.png",alt:""}}),e("h5",[t._v("black hear")]),e("p",[t._v("$20.00 "),e("sub",[t._v("$25.00")])]),e("button",{staticClass:"page-button"},[t._v("add to cart")])]),e("div",{staticClass:"menu-item"},[e("img",{attrs:{src:"images/menu/s5.png",alt:""}}),e("h5",[t._v("black hear")]),e("p",[t._v("$20.00 "),e("sub",[t._v("$25.00")])]),e("button",{staticClass:"page-button"},[t._v("add to cart")])]),e("div",{staticClass:"menu-item"},[e("img",{attrs:{src:"images/menu/s6.png",alt:""}}),e("h5",[t._v("black hear")]),e("p",[t._v("$20.00 "),e("sub",[t._v("$25.00")])]),e("button",{staticClass:"page-button"},[t._v("add to cart")])])]),e("div",{staticClass:"main-product"},[e("div",{staticClass:"menu-item-e"},[e("div",{staticClass:"icons"},[e("i",{staticClass:"fas fa-shopping-cart"}),e("i",{staticClass:"fas fa-heart"}),e("i",{staticClass:"fas fa-eye"})]),e("img",{attrs:{src:"images/menu/s7.png",alt:""}}),e("h5",[t._v("Coffee")]),e("div",{staticClass:"icons"},[e("i",{staticClass:"fas fa-star"}),e("i",{staticClass:"fas fa-star"}),e("i",{staticClass:"fas fa-star"}),e("i",{staticClass:"fas fa-star"}),e("i",{staticClass:"fas fa-star-half-alt"})]),e("p",[t._v("$20.00 "),e("sub",[t._v("$25.00")])])]),e("div",{staticClass:"menu-item-e"},[e("div",{staticClass:"icons"},[e("i",{staticClass:"fas fa-shopping-cart"}),e("i",{staticClass:"fas fa-heart"}),e("i",{staticClass:"fas fa-eye"})]),e("img",{attrs:{src:"images/menu/s8.png",alt:""}}),e("h5",[t._v("therapy")]),e("div",{staticClass:"icons"},[e("i",{staticClass:"fas fa-star"}),e("i",{staticClass:"fas fa-star"}),e("i",{staticClass:"fas fa-star"}),e("i",{staticClass:"fas fa-star"}),e("i",{staticClass:"fas fa-star-half-alt"})]),e("p",[t._v("$20.00 "),e("sub",[t._v("$25.00")])])])])])}],T=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-head"},[e("h1",[t._v(t._s(t.msg))])])},$=[],I={name:"App-About",props:{msg:String}},O=I,j=(0,l.A)(O,T,$,!1,null,null,null),S=j.exports,q={name:"our-product",components:{headText:S}},N=q,D=(0,l.A)(N,L,E,!1,null,"7162d20d",null),P=D.exports,M=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sections",attrs:{"data-scroll":"about",id:"about"}},[e("headText",{attrs:{msg:"about us"}}),t._m(0)],1)},F=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"about-content"},[e("div",{staticClass:"image"},[e("div",{staticClass:"overlay"}),e("img",{attrs:{id:"about-image",src:s(2114),alt:""}}),e("div",{staticClass:"bottons"},[e("button",{staticClass:"fas fa-angle-left fa-2x left-button change-iamges",attrs:{"data-background":"yes"}}),e("button",{staticClass:"fas fa-angle-right fa-2x right-button change-iamges",attrs:{"data-background":"no"}})])]),e("div",{staticClass:"text"},[e("h3",[t._v("What Makes Our "),e("span",[t._v("مُلخية")]),t._v(" Speacial")]),e("p",[t._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore illo cum sequi autem explicabo hic aspernatur beatae doloribus delectus quidem? ")]),e("p",[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, amet?")]),e("button",{staticClass:"page-button"},[t._v("Lean More")])])])])}],H={name:"App-About",components:{headText:S}},R=H,X=(0,l.A)(R,M,F,!1,null,"31bb9194",null),U=X.exports,W={name:"HomeView",components:{lainding:A,product:P,PageAbout:U}},Y=W,B=(0,l.A)(Y,b,_,!1,null,null,null),V=B.exports,G=function(){var t=this,e=t._self._c;return e("div",{staticClass:"help"},[e("h1",[t._v("this is reda page")]),e("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, explicabo ad est error dolore accusamus voluptatibus ullam quasi porro vero facilis illo, perferendis a aspernatur. Ea distinctio repellendus blanditiis rem? ")]),e("YousifWorld")],1)},z=[],J=function(){var t=this;t._self._c;return t._m(0)},K=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"yousif"},[e("h1",[t._v("this is yousif page")]),e("p",{attrs:{"data-color":"#eee"}},[t._v("this is paragraph in vue page")]),e("p",[t._v("this is vue js")])])}],Q={name:"YousifWorld"},Z=Q,tt=(0,l.A)(Z,J,K,!1,null,"9e4bbbfe",null),et=tt.exports,st={name:"vue-help",components:{YousifWorld:et}},at=st,it=(0,l.A)(at,G,z,!1,null,null,null),nt=it.exports,rt=function(){var t=this;t._self._c;return t._m(0)},ot=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"Reda-page"},[e("h1",[t._v("this is reda page")]),e("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, explicabo ad est error dolore accusamus voluptatibus ullam quasi porro vero facilis illo, perferendis a aspernatur. Ea distinctio repellendus blanditiis rem?")]),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, laboriosam ad consequuntur dolore, fugiat est ducimus aperiam alias mollitia eligendi blanditiis recusandae quidem perferendis quibusdam distinctio ipsam velit, nihil temporibus.")]),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, laboriosam ad consequuntur dolore, fugiat est ducimus aperiam alias mollitia eligendi blanditiis recusandae quidem perferendis quibusdam distinctio ipsam velit, nihil temporibus.")])])}],ut={name:"vue-reda"},ct=ut,lt=(0,l.A)(ct,rt,ot,!1,null,null,null),dt=lt.exports;a.Ay.use(h.Ay);const mt=[{path:"/",name:"home",component:V},{path:"/about",name:"about",component:()=>s.e(594).then(s.bind(s,1417))},{path:"/help",name:"help",component:nt},{path:"/reda",name:"reda",component:dt}],ft=new h.Ay({mode:"history",base:"/",routes:mt});var pt=ft,vt=s(3518);a.Ay.use(vt.Ay);var gt=new vt.Ay.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});s(8077);a.Ay.config.productionTip=!1,new a.Ay({router:pt,store:gt,render:t=>t(g)}).$mount("#app")},958:function(t,e,s){var a={"./perfume-6518634_1920.jpg":1275,"./s.jpg":4165};function i(t){var e=n(t);return s(e)}function n(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id=958},9217:function(t,e,s){"use strict";t.exports=s.p+"img/Logo.996785c6.png"},2114:function(t,e,s){"use strict";t.exports=s.p+"img/s1.af7b4849.jpg"},1275:function(t,e,s){"use strict";t.exports=s.p+"img/perfume-6518634_1920.d9b3ede1.jpg"},4165:function(t,e,s){"use strict";t.exports=s.p+"img/s.93df0440.jpg"},7600:function(t,e,s){"use strict";t.exports=s.p+"img/s100.1ad75d3b.png"},859:function(t,e,s){"use strict";t.exports=s.p+"img/s110.c4a3545e.png"}},e={};function s(a){var i=e[a];if(void 0!==i)return i.exports;var n=e[a]={exports:{}};return t[a].call(n.exports,n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,a,i,n){if(!a){var r=1/0;for(l=0;l<t.length;l++){a=t[l][0],i=t[l][1],n=t[l][2];for(var o=!0,u=0;u<a.length;u++)(!1&n||r>=n)&&Object.keys(s.O).every((function(t){return s.O[t](a[u])}))?a.splice(u--,1):(o=!1,n<r&&(r=n));if(o){t.splice(l--,1);var c=i();void 0!==c&&(e=c)}}return e}n=n||0;for(var l=t.length;l>0&&t[l-1][2]>n;l--)t[l]=t[l-1];t[l]=[a,i,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,a){return s.f[a](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/about.f1552c27.js"}}(),function(){s.miniCssF=function(t){}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="beauty-product-4:";s.l=function(a,i,n,r){if(t[a])t[a].push(i);else{var o,u;if(void 0!==n)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+n){o=d;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",e+n),o.src=a),t[a]=[i];var m=function(e,s){o.onerror=o.onload=null,clearTimeout(f);var i=t[a];if(delete t[a],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(t){return t(s)})),e)return e(s)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var t={524:0};s.f.j=function(e,a){var i=s.o(t,e)?t[e]:void 0;if(0!==i)if(i)a.push(i[2]);else{var n=new Promise((function(s,a){i=t[e]=[s,a]}));a.push(i[2]=n);var r=s.p+s.u(e),o=new Error,u=function(a){if(s.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var n=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;o.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",o.name="ChunkLoadError",o.type=n,o.request=r,i[1](o)}};s.l(r,u,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,n,r=a[0],o=a[1],u=a[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(u)var l=u(s)}for(e&&e(a);c<r.length;c++)n=r[c],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(l)},a=self["webpackChunkbeauty_product_4"]=self["webpackChunkbeauty_product_4"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[504],(function(){return s(2300)}));a=s.O(a)})();
//# sourceMappingURL=app.a43a2a4f.js.map