webpackJsonp([4],{119:function(t,s,e){var r=e(4)(e(125),e(126),null,null);t.exports=r.exports},125:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=e(61);s.default={mixins:[r.a]}},126:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"d-flex justify-content-center"},[e("b-carousel",{attrs:{interval:3e3,background:"transparent"}},[e("b-carousel-slide",{attrs:{background:"transparent",height:"100px"}},[e("h3",{staticClass:"text-info"},[t._v(t._s(t.$t("h3.first")))]),t._v(" "),e("p",{staticClass:"text-muted"},[t._v(t._s(t.$t("p.first")))])]),t._v(" "),e("b-carousel-slide",{attrs:{background:"transparent",height:"100px"}},[e("h3",{staticClass:"text-success"},[t._v(t._s(t.$t("h3.second")))]),t._v(" "),e("p",{staticClass:"text-muted"},[t._v(t._s(t.$t("p.second")))])]),t._v(" "),e("b-carousel-slide",{attrs:{background:"transparent",height:"100px"}},[e("h3",{staticClass:"text-primary"},[t._v(t._s(t.$t("h3.third")))]),t._v(" "),e("p",{staticClass:"text-muted"},[t._v(t._s(t.$t("p.third")))])])],1)],1),t._v(" "),e("div",{staticClass:"row"},t._l(t.products,function(s){return e("div",{staticClass:"col-4"},[e("b-card",{key:s.id,staticClass:"mb-4",attrs:{header:s.title,"show-footer":""}},[e("p",[t._v(t._s(s.description))]),t._v(" "),e("small",{staticClass:"text-muted",slot:"footer"},[e("span",{staticClass:"float-left"},[t._v("$"+t._s(s.price))]),t._v(" "),e("span",{staticClass:"float-right"},[t._v(t._s(t.$t("span.first"))+" "+t._s(s.user.name))])])])],1)})),t._v(" "),e("b-pagination",{attrs:{size:"sm","total-rows":t.amountOfProducts,"per-page":6},model:{value:t.currentPage,callback:function(s){t.currentPage=s},expression:"currentPage"}})],1)},staticRenderFns:[]}},61:function(t,s,e){"use strict";var r=e(14),a=e.n(r),n=e(11),c={created:function(){this.getProducts(this.currentPage)},data:function(){return{currentPage:1}},watch:{currentPage:function(){this.getProducts(this.currentPage)}},i18n:{messages:{en:{"h3.first":"Many products","h3.second":"Cheap products","h3.third":"Buy fast","p.first":"Our users offer many products.","p.second":"The products here are very cheap.","p.third":"Buy fast and easy here.","span.first":"by","button.first":"View","button.second":"Next"},de:{"h3.first":"Viele Produkte","h3.second":"Günstige Produkte","h3.third":"Kaufe schnell","p.first":"Unsere Kunden bieten viele Produkte.","p.second":"Die Produkte sind sehr günstig hier.","p.third":"Kaufe hier schnell und einfach.","span.first":"von","button.first":"Angucken","button.second":"Nächste"}}},computed:{products:{get:function(){return this.$store.state.Products.products.products}},amountOfProducts:{get:function(){return this.$store.state.Products.products.amountOfProducts}}},methods:a()({},Object(n.b)(["getProducts"]))};s.a=c}});