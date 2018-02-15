/*! For license information please see LICENSES */
webpackJsonp([1],{FJ1P:function(t,e,n){"use strict";var a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}};t.exports=a},JbIr:function(t,e,n){var a=n("oFuC");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("34ba6bbf",a,!1,{sourceMap:!1})},SlEi:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Ycga"),i=n("ls7w"),r=!1;var o=function(t){r||n("JbIr")},s=n("VU/8")(a.a,i.a,!1,o,null,null);s.options.__file="pages/sections/projects.vue",e.default=s.exports},Ycga:function(t,e,n){"use strict";var a=n("FJ1P"),i=n.n(a);e.a={data:function(){return{projects:[{title:"Skyoo Tutors Platform",date:"May 2017 - December 2017",text:"\n            <p>\n            Skyoo Tutors is a platform for English learners in China to practice their speaking\n            skills with English speakers in the US. As the sole developer, I architected and implemented\n            a responsive web app frontend and backend:\n            </p>\n            <ul>\n              <li>\n              Backend built with Django Rest Framework, with timezone aware scheduling, payments, and video chat. \n              Uses Cellery for task management.\n              </li>\n              <li>\n              Modern frontend with Vue, Node, webpack. Includes state management, translations, and prerendering for SEO.\n              </li>\n            </ul>\n          ",img:"/projects/skyoo2.png",actions:[{title:"Site",link:"https://skyootutors.com",color:"primary"}]},{title:"FHIR Health Informatics",date:"January 2017 - May 2017",text:"\n          <p>\n          A collaboration between our team from Georgia Tech and UTHealth. The goal was to visualize nutrition scores\n          and other health information in EMRs for use by care providers.\n          </p>\n          <ul>\n            <li>\n            I implemented the FHIR app backend using Node JS, and concepted the front end using Adobe Illustrator.\n            </li>\n          </ul>",img:"/projects/nutrition.jpg",actions:[{title:"Github",link:"https://github.com/CheapeOne/GT-Nutrition",color:"primary"},{title:"PDF",link:"https://drive.google.com/file/d/1L0wKCt6fEwZwa9-qX_TZa94LBXKG9olb/view?usp=sharing",color:"primary"}]},{title:"Generative Adversarial Network",date:"January 2017 - May 2017",text:"I designed and trained a generative adversarial network (GAN) for generating dog images.\n          This made use of Scipy, Tensorflow, and the DCGAN architecture. Images were from the Stanford dogs dataset.\n          I wrote a Medium article about my findings (and GAN's in general) below:",img:"/projects/gan.png",actions:[{title:"Article",link:"https://medium.com/@cheapeone/the-the-ml-architecture-of-the-generation-d3b6f52faaab",color:"primary"}]},{title:"Wherever: Data Analytics",date:"October 2016 - December 2016",text:"A group project for CS 6240 Data Analytics. \n          The goal was to display recommendations for where someone should live.\n          I designed and built the frontend, using d3 + plotly to generate the map.",img:"/projects/wherever.jpg",actions:[{title:"PDF",link:"https://drive.google.com/file/d/1idSQvGd5HkapyeccbB9z3jkeianYhIGm/view?usp=sharing",color:"primary"}]},{title:"Georgia Tech Transportation",date:"August 2015 - May 2016",text:"\n          <p>\n          Worked with faculty to improve the tracking and scheduling of \n          Georgia Tech's buses. I specifically focused on using a configuration of \n          bluetooth beacons at each stop to track their movements \n          (as GPS would drift if they stay still too long). \n          </p>\n          <ul>\n            <li>\n              Developed an Android app for the driver's tablet to detect the beacons, \n              using the info + GPS to determine the state of the bus.\n            </li>\n          <ul>",img:"/projects/bus.jpg",actions:[{title:"Site",link:"http://www.vip.gatech.edu/teams/intelligent-transportation-systems",color:"primary"}]},{title:"Twitter Ticker",date:"May 2015 - August 2015",text:"\n          <p>\n          A group project for an Information Visualization course. We developed an \n          interactive visualization to compare stock data with twitter sentiment analysis.\n          </p>\n          <ul><li>\n          I led the effort to generate and clean Twitter sentiment data using Semantria \n          and Processing 2 (Java library).\n          </li></ul>\n          ",img:"/projects/twitter.png",actions:[{title:"Github",link:"https://github.com/Shreyyas/TwitterTicker",color:"primary"}]},{title:"Jane Bound Unity Game",date:"May 2015 - August 2015",text:"\n          <p>\n          A Unity game our group developed for a Game AI course. \n          The player must sneak through a procedurally generated level with patrolling guards.\n          </p>\n          <ul><li>\n          I built the AI behavior for the guards using behavior trees, allowing them to search \n          for the player using a navigation mesh.\n          </li></ul>\n          ",img:"/projects/jane.png",actions:[{title:"Github",link:"https://github.com/CheapeOne/JaneBound",color:"primary"}]},{title:"Visual Diff Website",date:"May 2014 - August 2014",text:"\n          <p>\n          Visual Diff is a web testing startup based in Atlanta. I redesigned their web app using AngularJS, along with D3 for graphs.\n          </p>\n          ",img:"/projects/diff.jpeg",actions:[{title:"Site",link:"http://www.visualdiff.com/",color:"primary"}]}]}},components:{"no-ssr":i.a},mounted:function(){"function"==typeof this.$redrawVueMasonry&&this.$redrawVueMasonry()}}},ls7w:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{id:"page",column:""}},[n("v-flex",{attrs:{xs12:""}},[n("h1",[t._v("Projects")])]),n("v-flex",{attrs:{xs12:""}},[n("div",{directives:[{name:"masonry",rawName:"v-masonry"}],staticClass:"masonry",attrs:{"transition-duration":"0.3s","item-selector":".masonry-item","fit-width":"true",gutter:".gutter-item"}},[n("div",{staticClass:"gutter-item"}),t._l(t.projects,function(e,a){return n("v-card",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],key:a,staticClass:"masonry-item xs12 sm6 md4 "},[n("v-card-media",{attrs:{id:"project-img-"+a,src:e.img,height:"200px"}}),n("v-card-text",[n("div",[n("span",{staticClass:"headline"},[t._v(t._s(e.title))]),n("p",[t._v(t._s(e.date))]),n("span",{domProps:{innerHTML:t._s(e.text)}})])]),n("v-spacer"),n("v-card-actions",t._l(e.actions,function(e,a){return n("v-btn",{key:a,attrs:{flat:"",color:e.color,href:e.link,target:"_blank"}},[t._v("\n            "+t._s(e.title)+"\n          ")])}))],1)})],2)])],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},oFuC:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"#project-img-0 .card__media__background{background-position-x:0!important;background-position-y:0!important}#project-img-1 .card__media__background{background-position-y:0!important}#project-img-3 .card__media__background{background-position-x:0!important}.masonry{margin:0 auto}.masonry-item{width:368px;margin-bottom:24px}.gutter-item{width:24px}@media (min-width:1264px){.masonry-item{width:368px!important}}@media (min-width:960px) and (max-width:1263px){.masonry-item{width:420px!important}}@media (max-width:791px){.masonry-item{width:320px!important}}@media (max-width:699px){.masonry,.masonry-item{width:100%!important}}",""])}});