(this["webpackJsonpcloudnine-test"]=this["webpackJsonpcloudnine-test"]||[]).push([[0],{38:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var i,c,a,r,s,o,l,d,b,j=t(0),p=t.n(j),f=t(14),u=t.n(f),x=(t(38),t(11)),h=t(6),g=t(33),m=t(3),O=t(4),v=t.p+"static/media/arrow-left.9b7d0f17.svg",w=t.p+"static/media/filter.c35ec176.svg",y=O.a.button(i||(i=Object(m.a)(["\n  background: none;\n  border: none;\n  cursor: pointer;\n  height: 30px;\n  user-select: none;\n  width: 30px;\n  padding: 0;\n  outline: none;\n"]))),N=t(1),S=O.a.section(c||(c=Object(m.a)(["\n  align-items: center;\n  border-bottom: solid 1px #b69f58;\n  display: flex;\n  height: 30px;\n  justify-content: space-between;\n  padding: 25px 15px 8px;\n"]))),T=Object(O.a)(y)(a||(a=Object(m.a)(["\n  text-align: left;\n"]))),C=Object(O.a)(y)(r||(r=Object(m.a)(["\n  text-align: right;\n"]))),A=O.a.h1(s||(s=Object(m.a)(["\n  margin: 8px 0 10px 0;\n  color: #202020;\n  font-family: 'MillerBanner', serif;\n  font-size: 22px;\n  font-stretch: normal;\n  font-style: normal;\n  font-weight: 300;\n  letter-spacing: -0.13px;\n  line-height: normal;\n  text-align: center;\n"]))),R=function(e){var n=e.heading;return Object(N.jsxs)(S,{children:[Object(N.jsx)(T,{children:Object(N.jsx)("img",{src:v,alt:"back button"})}),Object(N.jsx)(A,{children:n}),Object(N.jsx)(C,{children:Object(N.jsx)("img",{src:w,alt:"filter button"})})]})},E=t(5),L=t(32);!function(e){e.RANGE_1="0-250",e.RANGE_2="250-500",e.RANGE_3="500-750",e.ALL="all"}(o||(o={})),function(e){e.TAB_1="Info",e.TAB_2="Schema"}(l||(l={})),function(e){e.SMALL="S",e.MEDIUM="M",e.LARGE="L"}(d||(d={})),function(e){e.INFO="Info",e.SCHEMA="Schema"}(b||(b={}));var k,M=[{value:o.ALL,label:"All Salons"},{value:o.RANGE_1,label:"Pris 0 - 250 kr"},{value:o.RANGE_2,label:"Pris 250 - 500 kr"},{value:o.RANGE_3,label:"Pris 500 - 750 kr"}];!function(e){e.SALON_INFO="Lorem ipsum dolor sit amet, vulputate nunc. Auctor viverra.\n  Ridiculus feugiat nunc porttitor volut pat, acu quis torquent\n  iaculis ultricies massa, duis nun quis que amet.",e.SCHEMA="Schema Content"}(k||(k={}));var H,P,_,z,I,G,B,F,D,U,q,W,J,V,K,Y,Q,X,Z,$,ee,ne,te,ie,ce,ae,re,se,oe,le,de,be,je,pe,fe,ue,xe,he,ge=Object(O.a)(L.a)(H||(H=Object(m.a)(["\n  width: 100%;\n"]))),me={fontFamily:"HelveticaNeue, sans-serif",fontSize:"15px",fontWeight:300,color:"#202020"},Oe={control:function(e){return Object(E.a)(Object(E.a)(Object(E.a)({},e),me),{},{cursor:"pointer",boxShadow:"none",borderWidth:0,borderBottomWidth:"1px",borderBottomColor:"#b69f58",height:"56px","&:hover":{borderBottomColor:"#b69f58"}})},option:function(e,n){return Object(E.a)(Object(E.a)(Object(E.a)({},e),me),{},{backgroundColor:n.isSelected?"#fae39f":"transparent",cursor:"pointer",padding:"12px 16px","&:hover":{backgroundColor:"#fae39f"}})},singleValue:function(e){return Object(E.a)(Object(E.a)(Object(E.a)({},e),me),{},{marginLeft:"8px"})},menu:function(e){return Object(E.a)(Object(E.a)({},e),{},{marginTop:"0"})},indicatorsContainer:function(e){return Object(E.a)(Object(E.a)({},e),{},{marginRight:"8px"})}},ve=function(e){var n=e.priceSelectionHandler,t=e.selectedPriceRange,i=Object(j.useMemo)((function(){return function(e){var n=e.priceRange;return M.find((function(e){return e.value===n}))||M[1]}({priceRange:t})}),[t]);return Object(N.jsx)("form",{children:Object(N.jsx)(ge,{options:M,onChange:n,value:i,components:{IndicatorSeparator:function(){return null}},theme:function(e){return Object(E.a)(Object(E.a)({},e),{},{borderRadius:0})},isSearchable:!1,styles:Oe})})},we=t.p+"static/media/arrow-right.432f180f.svg",ye=t.p+"static/media/star-fill.1dedcbdb.svg",Ne=t.p+"static/media/star-stroke.9199d66f.svg",Se=O.a.img(P||(P=Object(m.a)(["\n  margin-right: 4px;\n  width: ",";\n"])),(function(e){switch(e.size){case d.MEDIUM:return"13px";case d.LARGE:return"15px";case d.SMALL:default:return"9px"}})),Te=O.a.div(_||(_=Object(m.a)(["\n  display: flex;\n  align-items: center;\n"]))),Ce=function(e){var n=e.src,t=e.size;return Object(N.jsx)(Se,{src:n,size:t})},Ae=function(e){var n=e.stars,t=e.size,i=void 0===t?d.SMALL:t;return Object(N.jsx)(Te,{children:[1,2,3,4,5].map((function(e){return Object(N.jsx)(Ce,{src:n>=e?ye:Ne,size:i},e)}))})},Re=O.a.li(z||(z=Object(m.a)(["\n  border-bottom: solid 1px #eee;\n  display: flex;\n  padding: 16px 0;\n"]))),Ee=O.a.span(I||(I=Object(m.a)(["\n  color: #202020;\n  font-family: 'HelveticaNeue', sans-serif;\n  font-size: 15px;\n  width: 52px;\n  line-height: 20px;\n"]))),Le=O.a.div(G||(G=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n"]))),ke=O.a.span(B||(B=Object(m.a)(["\n  margin: 0;\n  color: #202020;\n  font-family: 'MillerBanner', serif;\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 16px;\n"]))),Me=O.a.div(F||(F=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  margin: 16px 0 12px;\n"]))),He=O.a.span(D||(D=Object(m.a)(["\n  margin-left: 4px;\n  font-family: 'HelveticaNeue', sans-serif;\n  font-size: 11px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: -0.07px;\n  color: #656565;\n"]))),Pe=O.a.span(U||(U=Object(m.a)(["\n  font-family: 'HelveticaNeue', sans-serif;\n  font-size: 15px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #656565;\n"]))),_e=O.a.div(q||(q=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: right;\n"]))),ze=O.a.span(W||(W=Object(m.a)(["\n  font-family: HelveticaNeue, sans-serif;\n  font-size: 15px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: right;\n  color: #202020;\n"]))),Ie=O.a.span(J||(J=Object(m.a)(["\n  font-family: HelveticaNeue, sans-serif;\n  font-size: 13px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: right;\n  margin-top: 14px;\n  color: #656565;\n"]))),Ge=Object(O.a)(x.b)(V||(V=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: flex-end;\n  width: 34px;\n"]))),Be=function(e){var n=e.salon,t=n.openTime,i=n.companyName,c=n.street,a=n.reviews,r=n.stars,s=n.price,o=n.distance,l=n.id;return Object(N.jsxs)(Re,{className:"salons-list-item",children:[Object(N.jsx)(Ee,{children:t}),Object(N.jsxs)(Le,{children:[Object(N.jsx)(ke,{children:i}),Object(N.jsxs)(Me,{children:[Object(N.jsx)(Ae,{stars:r,reviews:a})," ",Object(N.jsxs)(He,{children:["(",a,")"]})]}),Object(N.jsx)(Pe,{children:c})]}),Object(N.jsxs)(_e,{children:[Object(N.jsxs)(ze,{children:[s," kr"]}),Object(N.jsxs)(Ie,{children:[o," min"]})]}),Object(N.jsx)(Ge,{to:"/salon-details/".concat(l),children:Object(N.jsx)("img",{src:we,alt:"salon details link"})})]})},Fe=O.a.ul(K||(K=Object(m.a)(["\n  height: 546px;\n  margin: 0;\n  overflow-y: auto;\n  padding: 0 15px;\n"]))),De=function(e){var n=e.filteredSalons;return n.length?Object(N.jsx)(Fe,{children:n.map((function(e){return Object(j.createElement)(Be,{salon:e,key:e.id})}))}):Object(N.jsx)("span",{children:"No results found"})},Ue=t(21),qe="UPDATE_SELECTED_PRICE_RANGE",We="UPDATE_SELECTED_TAB",Je={selectedPriceRange:o.ALL,selectedTab:l.TAB_1,salonsList:[{id:"salon-1",companyName:"Sax & F\xf6n",price:320,reviews:32,street:"Vidargatan 25",distance:30,openTime:"12.00",closeTime:"18:00",stars:3,city:"Kiruna",postCode:"113 57",phoneNumber:"08-522 389 20",website:"www.salongweb.se"},{id:"salon-2",companyName:"H\xe5rizont",price:410,reviews:32,street:"Upplandsgatan 39",distance:30,openTime:"12.00",closeTime:"21:00",stars:5,city:"Stockholm",postCode:"113 54",phoneNumber:"08-522 777 14",website:"www.salongweb.se"},{id:"salon-3",companyName:"H\xe5rhuset",price:260,reviews:32,street:"R\xe5dmansgatan 4",distance:30,openTime:"12.00",closeTime:"22:00",stars:2,city:"Stockholm",postCode:"113 21",phoneNumber:"08-523 874 34",website:"www.salongweb.se"},{id:"salon-4",companyName:"Hair & Nu",price:340,reviews:18,street:"Frejgatan 5",distance:30,openTime:"12.00",closeTime:"21:00",stars:3,city:"Stockholm",postCode:"113 01",phoneNumber:"08-522 555 12",website:"www.salongweb.se"},{id:"salon-5",companyName:"Harley Davidson",price:115,reviews:32,street:"Odengatan 94",distance:30,openTime:"12.00",closeTime:"20:00",stars:5,city:"G\xf6teborg",postCode:"112 99",phoneNumber:"08-522 111 14",website:"www.salongweb.se"},{id:"salon-6",companyName:"Combs & Scisors",price:90,reviews:29,street:"Ystadgatan 9",distance:10,openTime:"7.00",closeTime:"15:00",stars:4,city:"G\xf6teborg",postCode:"112 47",phoneNumber:"08-522 773 94",website:"www.salongweb.se"},{id:"salon-7",companyName:"Fred Durst",price:220,reviews:38,street:"Lundgatan 55",distance:10,openTime:"7.00",closeTime:"23:00",stars:1,city:"Link\xf6ping",postCode:"114 12",phoneNumber:"08-521 777 46",website:"www.salongweb.se"},{id:"salon-8",companyName:"Bonnie & Clyde",price:590,reviews:43,street:"Uppsalagatan 56",distance:10,openTime:"5.00",closeTime:"19:00",stars:5,city:"G\xf6teborg",postCode:"113 68",phoneNumber:"08-001 002 03",website:"www.salongweb.se"}]},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case qe:return Object(E.a)(Object(E.a)({},e),{},{selectedPriceRange:n.selectedPriceRange});case We:return Object(E.a)(Object(E.a)({},e),{},{selectedTab:n.selectedTab});default:return Object(E.a)({},e)}},Ke=p.a.createContext(Je),Ye=function(e){var n=e.children,t=Object(j.useReducer)(Ve,Je),i=Object(Ue.a)(t,2),c=i[0],a=c.salonsList,r=c.selectedPriceRange,s=c.selectedTab,o=i[1];return Object(N.jsx)(Ke.Provider,{value:{salonsList:a,selectedPriceRange:r,selectedTab:s,dispatch:o},children:n})},Qe=O.a.section(Y||(Y=Object(m.a)(["\n  background: #fff;\n  height: 667px;\n"]))),Xe=function(){var e=Object(j.useContext)(Ke),n=e.salonsList,t=e.selectedPriceRange,i=e.dispatch,c=Object(j.useCallback)((function(e){i(function(e){var n=e.selectedPriceRange;return{type:qe,selectedPriceRange:n}}({selectedPriceRange:e.value}))}),[i]),a=Object(j.useMemo)((function(){return n.reduce((function(e,n){return function(e){var n=e.price;switch(e.priceRange){case o.ALL:return!0;case o.RANGE_1:return n>0&&n<250;case o.RANGE_2:return n>250&&n<500;case o.RANGE_3:return n>500&&n<750;default:return!1}}({price:n.price,priceRange:t})?[].concat(Object(g.a)(e),[n]):e}),[])}),[t,n]);return Object(N.jsxs)(Qe,{children:[Object(N.jsx)(R,{heading:"H\xe5r"}),Object(N.jsx)(ve,{priceSelectionHandler:c,selectedPriceRange:t}),Object(N.jsx)(De,{filteredSalons:a})]})},Ze=O.a.li(Q||(Q=Object(m.a)(["\n  flex-grow: 1;\n  height: 50px;\n  font-size: 15px;\n  font-family: 'HelveticaNeue, sans-serif';\n"]))),$e=O.a.button(X||(X=Object(m.a)(["\n  background: #fff;\n  border: none;\n  border-bottom: ",";\n  cursor: pointer;\n  height: 100%;\n  outline: none;\n  transition: border-color 0.2s ease-out;\n  width: 100%;\n  &:hover {\n    color: #6d5f37;\n  }\n"])),(function(e){var n=e.isSelected,t=void 0!==n&&n;return"solid ".concat(t?"2px":"1px"," ").concat(t?"#b69f58":"#eeeeee")})),en=function(e){var n=e.index,t=e.title,i=e.setSelectedTab,c=e.getIsSelected;return Object(N.jsx)(Ze,{children:Object(N.jsx)($e,{onClick:function(){return i(n)},isSelected:c(n),children:t})},n)},nn=O.a.div(Z||(Z=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),tn=O.a.ul($||($=Object(m.a)(["\n  display: flex;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]))),cn=function(e){var n=e.children,t=Object(j.useState)(0),i=Object(Ue.a)(t,2),c=i[0],a=i[1],r=Object(j.useCallback)((function(e){return c===e}),[c]);return Object(N.jsxs)(nn,{children:[Object(N.jsx)(tn,{children:n.map((function(e,n){var t=e.props.title;return Object(j.createElement)(en,{setSelectedTab:a,index:n,title:t,getIsSelected:r,key:n})}))}),n[c]]})},an=O.a.section(ee||(ee=Object(m.a)(["\n  padding: 0 15px;\n"]))),rn=O.a.div(ne||(ne=Object(m.a)(["\n  height: 20px;\n  background-color: #f9f9f9;\n"]))),sn=function(e){var n=e.children;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(rn,{}),Object(N.jsx)(an,{children:n})]})},on=cn,ln=t.p+"static/media/image.ad747265.jpg",dn=t.p+"static/media/arrow-left-white.4ca80e4a.svg",bn=t.p+"static/media/heart.465bc85e.svg",jn=O.a.section(te||(te=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 251px;\n  background-image: linear-gradient(\n      180deg,\n      transparent 50%,\n      #000 100%\n    ),\n    url(",");\n"])),ln),pn=O.a.section(ie||(ie=Object(m.a)(["\n  align-items: flex-end;\n  display: flex;\n  height: 36px;\n  justify-content: space-between;\n  padding: 23px 13px 0 10px;\n"]))),fn=Object(O.a)(x.b)(ce||(ce=Object(m.a)(["\n  text-align: left;\n  width: 30px;\n"]))),un=Object(O.a)(y)(ae||(ae=Object(m.a)(["\n  text-align: right;\n  margin-bottom: 4px;\n"]))),xn=O.a.section(re||(re=Object(m.a)(["\n  padding: 0 15px;\n  margin-top: 118px;\n  display: flex;\n  flex-direction: column;\n"]))),hn=O.a.h1(se||(se=Object(m.a)(["\n  font-family: 'MillerBanner', serif;\n  font-size: 22px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: -0.15px;\n  text-align: left;\n  color: #ffffff;\n  margin: 0 0 9px;\n"]))),gn=O.a.div(oe||(oe=Object(m.a)(["\n  display: flex;\n  align-items: center;\n"]))),mn=O.a.span(le||(le=Object(m.a)(["\n  margin-left: 8px;\n  font-family: 'HelveticaNeue', sans-serif;\n  font-size: 13px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: -0.07px;\n  color: #fff;\n  padding-bottom: 2px;\n"]))),On=function(e){var n=e.companyName,t=e.stars,i=e.reviews;return Object(N.jsxs)(jn,{children:[Object(N.jsxs)(pn,{children:[Object(N.jsx)(fn,{to:"/",children:Object(N.jsx)("img",{src:dn,alt:"back icon"})}),Object(N.jsx)(un,{children:Object(N.jsx)("img",{src:bn,alt:"heart icon"})})]}),Object(N.jsxs)(xn,{children:[Object(N.jsx)(hn,{children:n}),Object(N.jsxs)(gn,{children:[Object(N.jsx)(Ae,{stars:t,size:d.MEDIUM}),Object(N.jsxs)(mn,{children:["(",i,")"]})]})]})]})},vn=t.p+"static/media/globe.00a83730.svg",wn=t.p+"static/media/clock.196e2703.svg",yn=t.p+"static/media/phone.dd3cb251.svg",Nn=t.p+"static/media/pin.0765fb0a.svg",Sn=t.p+"static/media/arrow-down.4ff3b621.svg",Tn=O.a.div(de||(de=Object(m.a)(["\n  margin-top: 12px;\n  line-height: 1.47;\n  color: #2b2b2b;\n"]))),Cn=function(e){var n=e.text;return Object(N.jsx)(Tn,{children:n})},An=O.a.section(be||(be=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  font-family: 'HelveticaNeue', sans-serif;\n  font-size: 15px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  background-color: #fff;\n  color: #2b2b2b;\n"]))),Rn=O.a.ul(je||(je=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]))),En=O.a.li(pe||(pe=Object(m.a)(["\n  align-items: center;\n  border-bottom: solid 1px #eeeeee;\n  color: #202020;\n  padding: 15px 0;\n  display: flex;\n  &:last-child {\n    margin-bottom: 10px;\n  }\n"]))),Ln=O.a.div(fe||(fe=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  width: 30px;\n"]))),kn=O.a.img(ue||(ue=Object(m.a)(["\n  margin: ",";\n  height: ",";\n  cursor: ",";\n"])),(function(e){var n=e.margin;return void 0===n?"0":n}),(function(e){var n=e.height;return void 0===n?"15px":n}),(function(e){var n=e.cursor;return void 0===n?"none":n})),Mn=O.a.a(xe||(xe=Object(m.a)(["\n  color: #202020;\n  text-decoration: none;\n  &:hover {\n    text-decoration: underline;\n    color: #868475;\n  }\n"]))),Hn=function(e){var n=e.salon,t=n.street,i=n.postCode,c=n.city,a=n.closeTime,r=n.phoneNumber,s=n.website;return Object(N.jsxs)(An,{children:[Object(N.jsxs)(Rn,{children:[Object(N.jsxs)(En,{children:[Object(N.jsx)(Ln,{children:Object(N.jsx)(kn,{src:Nn,alt:"pin icon"})}),Object(N.jsx)("span",{children:"".concat(t,", ").concat(i," ").concat(c)})]}),Object(N.jsxs)(En,{children:[Object(N.jsx)(Ln,{children:Object(N.jsx)(kn,{src:wn,alt:"clock icon"})}),Object(N.jsxs)("span",{children:["\xd6ppet till ",a," idag"]})," ",Object(N.jsx)(kn,{src:Sn,height:"8px",margin:"0 0 0 13px",cursor:"pointer",alt:"expand icon"})]}),Object(N.jsxs)(En,{children:[Object(N.jsx)(Ln,{children:Object(N.jsx)(kn,{src:yn,alt:"phone icon"})}),Object(N.jsx)("span",{children:r})]}),Object(N.jsxs)(En,{children:[Object(N.jsx)(Ln,{children:Object(N.jsx)(kn,{src:vn,margin:"2px 0 0",alt:"phone icon"})}),Object(N.jsx)(Mn,{href:"https://".concat(s),target:"_blank",children:s})]})]}),Object(N.jsx)(Cn,{text:"".concat(k.SALON_INFO)})]})},Pn=O.a.section(he||(he=Object(m.a)(["\n  background: #fff;\n  height: 667px;\n"]))),_n=function(){var e=Object(h.g)().salonId,n=Object(j.useContext)(Ke).salonsList,t=Object(h.f)(),i=Object(j.useMemo)((function(){return n.find((function(n){return(null===n||void 0===n?void 0:n.id)===e}))}),[e,n]);return Object(j.useEffect)((function(){i||t.push("/")}),[i,t]),i?Object(N.jsxs)(Pn,{children:[Object(N.jsx)(On,{companyName:i.companyName,stars:i.stars,reviews:i.reviews}),Object(N.jsxs)(on,{children:[Object(N.jsx)(sn,{title:b.INFO,children:Object(N.jsx)(Hn,{salon:i})}),Object(N.jsx)(sn,{title:b.SCHEMA,children:Object(N.jsx)(Cn,{text:"".concat(k.SCHEMA," for ").concat(i.companyName)})})]})]}):null},zn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,57)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),i(e),c(e),a(e),r(e)}))};u.a.render(Object(N.jsx)(p.a.StrictMode,{children:Object(N.jsx)(Ye,{children:Object(N.jsx)(x.a,{children:Object(N.jsxs)(h.c,{children:[Object(N.jsx)(h.a,{exact:!0,path:"/",children:Object(N.jsx)(Xe,{})}),Object(N.jsx)(h.a,{path:"/salon-details/:salonId",children:Object(N.jsx)(_n,{})})]})})})}),document.getElementById("root")),zn()}},[[56,1,2]]]);
//# sourceMappingURL=main.1609b760.chunk.js.map