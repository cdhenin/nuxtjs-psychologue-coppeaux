(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{285:function(t,e,n){},286:function(t,e,n){"use strict";n.r(e);var o={props:["href","content"]},r=(n(288),n(22)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("a",{staticClass:"external",attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[e("font-awesome-icon",{staticClass:"icon",attrs:{"aria-hidden":"true",icon:["fas","arrow-up-right-from-square"]}}),t._v("\n  "+t._s(t.content)+"\n")],1)}),[],!1,null,"8a3d4c02",null);e.default=component.exports},288:function(t,e,n){"use strict";n(285)},289:function(t,e,n){},292:function(t,e,n){"use strict";n.r(e);var o={components:{ExternalLink:n(286).default},mounted:function(){"yes"===window.sessionStorage.getItem("gMapsConsent")?this.displayGmaps():document.getElementById("gMapsConsentBtn").addEventListener("click",this.gMapsConsent)},methods:{gMapsConsent:function(t){t.stopPropagation(),t.preventDefault(),window.sessionStorage.setItem("gMapsConsent","yes"),this.displayGmaps()},displayGmaps:function(){var iframe=document.createElement("iframe");iframe.src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11556.28201681057!2d1.4101201!3d43.6050736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x7f83287ad066bfe0!2sAmÃ©lie COPPEAUX- Psychologue!5e0!3m2!1sfr!2sfr!4v1671038760519!5m2!1sfr!2sfr",iframe.setAttribute("allowfullscreen",""),iframe.setAttribute("loading","lazy"),iframe.setAttribute("height","200"),iframe.setAttribute("aria-label","google map widget avec adresse du cabinet"),iframe.setAttribute("referrerpolicy","no-referrer-when-downgrade");var t=document.getElementById("googlemaps");t.classList.remove("dashed"),t.innerHTML="",t.append(iframe)}}},r=(n(293),n(22)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashed",attrs:{id:"googlemaps"}},[e("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","map-location-dot"]}}),t._v(" "),e("p",[t._v("\n        Les services google maps peuvent utiliser des cookies pour assurer leur\n        fonctionnement.\n    ")]),t._v(" "),e("p",[e("ExternalLink",{attrs:{href:"https://policies.google.com/privacy?hl=fr",content:"Voir la politique de Confidentialité de Google"}}),t._v("\n        et\n        "),e("ExternalLink",{attrs:{href:"https://www.google.com/intl/fr_US/help/terms_maps/",content:"voir les\n            conditions d’utilisation de Google\n            maps"}})],1),t._v(" "),e("button",{staticClass:"button",attrs:{id:"gMapsConsentBtn"}},[t._v("\n        Accepter et voir la carte\n    ")])],1)}),[],!1,null,"d58c0876",null);e.default=component.exports;installComponents(component,{ExternalLink:n(286).default})},293:function(t,e,n){"use strict";n(289)}}]);