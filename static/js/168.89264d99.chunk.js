"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{168:function(e,r,n){n.r(r),n.d(r,{default:function(){return v}});var t=n(861),a=n(439),c=n(757),u=n.n(c),s=n(64),o=n(791),i=n(689),l=n(390),p={},f=n(184),v=function(){var e=(0,i.UO)().movieId,r=(0,o.useState)(null),n=(0,a.Z)(r,2),c=n[0],v=n[1],h=(0,o.useState)(!0),d=(0,a.Z)(h,2),g=d[0],m=d[1];return(0,o.useEffect)((function(){var r=function(){var r=(0,t.Z)(u().mark((function r(){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,l.WB)(e);case 3:n=r.sent,v(n),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error:",r.t0.message);case 10:m(!1);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),(0,f.jsx)(f.Fragment,{children:g?(0,f.jsx)(s.a,{}):c&&c.length>0?(0,f.jsx)("ul",{className:p.filmReviewsList,children:c.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsx)("h3",{children:e.author}),(0,f.jsx)("p",{children:e.content})]},e.id)}))}):(0,f.jsx)("p",{className:p.noReviews,children:"We don't have any reviews for this movie"})})}},390:function(e,r,n){n.d(r,{B7:function(){return m},Tg:function(){return h},V0:function(){return g},WB:function(){return x},Y5:function(){return d}});var t=n(861),a=n(757),c=n.n(a),u=n(340),s="https://api.themoviedb.org/3",o="2c20fbd96e2b6495aa6eea116921e2ed",i="/trending/movie/day",l="/movie/ ",p="/credits",f="/reviews",v="/search/movie",h=function(){var e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s).concat(i,"?api_key=").concat(o,"&page=1&language=en-US&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzIwZmJkOTZlMmI2NDk1YWE2ZWVhMTE2OTIxZTJlZCIsInN1YiI6IjY1YTE2NDExMjE2MjFiMDEzMjU5NmM5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.69L9j4e3GZnO09kSS6bHy2r5ozYNRJaA0dWx4XAqvrY")}},e.prev=1,e.next=4,u.Z.get("".concat(s,"/movie/").concat(r),n);case 4:return t=e.sent,e.abrupt("return",t.data);case 8:throw e.prev=8,e.t0=e.catch(1),console.log("Error during fetch:",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}(),g=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s).concat(v,"?api_key=").concat(o,"&page=1&query=").concat(r,"&language=en-US&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("Error:",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s).concat(l).concat(r).concat(p,"?api_key=").concat(o,"&page=1&language=en-US&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.error("Error:",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),x=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s).concat(l).concat(r).concat(f,"?api_key=").concat(o,"&page=1&language=en-US&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("Error:",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=168.89264d99.chunk.js.map