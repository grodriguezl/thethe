(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d231254"],{eefd:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-flex",{staticClass:"text-xs-left"},[r("v-divider"),r("v-card",[r("v-card-title",[r("v-flex",{attrs:{subheading:""}},[e._v("Maltiverse results for this resource")])],1),r("v-divider"),r("v-card-text",[e.resource.classification?r("v-layout",{attrs:{"align-center":""}},[r("v-flex",{attrs:{lg2:""}},[r("v-label",[e._v("Classification")])],1),r("v-flex",{attrs:{lg2:""}},[r("v-chip",{staticClass:"font-weight-bold",attrs:{color:e.classifier_color(e.resource.classification)}},[e._v(e._s(e.resource.classification))])],1),e.resource.entropy?r("v-flex",[r("v-layout",{attrs:{"align-center":""}},[r("v-flex",{attrs:{lg2:""}},[r("v-label",[e._v("Domain entropy")])],1),r("v-flex",[r("v-chip",{staticClass:"font-weight-bold"},[e._v(e._s(e.resource.entropy.toFixed(2)))])],1)],1)],1):e._e()],1):e._e(),r("v-divider"),e._l(e.resource.blacklist,(function(t,s){return r("v-flex",{key:s},[r("v-layout",{attrs:{"align-center":""}},[r("v-flex",{attrs:{lg1:""}},[r("v-label",[e._v("Description")])],1),r("v-flex",{attrs:{lg3:""}},[r("v-chip",{staticClass:"font-weight-bold"},[e._v(e._s(t.description))])],1),r("v-flex",{attrs:{"offset-xs-1":"",lg1:""}},[r("v-label",[e._v("Source")])],1),r("v-flex",{attrs:{lg3:""}},[r("v-chip",{staticClass:"font-weight-bold"},[e._v(e._s(t.source))])],1),r("v-flex",{attrs:{"offset-xs-1":"",lg1:""}},[r("v-label",[e._v("First seen")])],1),r("v-flex",[r("v-chip",[e._v(e._s(t.first_seen))])],1),r("v-flex",{attrs:{"offset-xs-1":"",lg1:""}},[r("v-label",[e._v("Last seen")])],1),r("v-flex",[r("v-chip",[e._v(e._s(t.last_seen))])],1)],1)],1)})),r("v-divider"),e.resource.tag&&e.resource.tag.length>0?r("v-layout",[r("v-flex",{attrs:{subheading:""}},[e._v("Tags")]),e._l(e.resource.tag,(function(t){return r("v-flex",{key:t},[r("v-chip",[e._v(e._s(t))])],1)}))],2):e._e()],2)],1)],1)},l=[],a=(r("a4d3"),r("4de4"),r("4160"),r("1d1c"),r("7a82"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3"));r("fa7d");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var o={name:"maltiverse",props:{plugin_data:Object},data:function(){return{}},computed:{resource:function(){var e=c({},this.plugin_data.results);return e}},methods:{classifier_color:function(e){return"malicious"===e?"red":"suspicious"===e?"orange":"blue"}}},n=o,v=r("2877"),f=Object(v["a"])(n,s,l,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d231254.9f39ee79.js.map