(this["webpackJsonpbuisness-react-landing-page"]=this["webpackJsonpbuisness-react-landing-page"]||[]).push([[0],{100:function(e,A,a){},101:function(e,A,a){},102:function(e,A,a){},103:function(e,A,a){},104:function(e,A,a){},109:function(e,A,a){},110:function(e,A,a){},111:function(e,A,a){},112:function(e,A,a){"use strict";a.r(A);var t=a(0),n=a.n(t),c=a(10),r=a.n(c),i=(a(92),a(93),a(22)),s=a(41),l=a(37),o=a(154),d=a(173),j=a(161),g=a(156),b=a(160),m=a(4),p=(a(94),a(74)),u=Object(p.a)({palette:{primary:{main:"#4e47ef "},secondary:{main:"#b56eff "}}}),O=a(176),h=a(158),x=a(157),f=a(159),C=a(2);function w(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(d.a,{className:"header-icon",component:"span",m:1,children:Object(C.jsx)(o.a,{href:"#about",className:"logo-text",children:Object(C.jsxs)("strong",{children:["Team",Object(C.jsx)("b",{children:"Ing"})]})})}),Object(C.jsx)(d.a,{className:"header-buttons",component:"span",m:1,children:Object(C.jsxs)(g.a,{theme:u,children:[Object(C.jsx)(o.a,{href:"#about",children:"About"}),Object(C.jsx)(o.a,{href:"#projects-ref",children:"Programs"}),Object(C.jsx)(o.a,{href:"#coding-challenges-ref1",children:"Free Challenges"}),Object(C.jsx)(o.a,{href:"#contact",variant:"outlined",color:"primary",children:"Contact"})]})})]})}function k(e){return Object(C.jsx)(x.a,Object(l.a)({button:!0,component:"a"},e))}function B(){var e=["about","projects-ref","coding-challenges-ref2","contact"],A=function(A){return Object(C.jsx)("div",{className:Object(m.a)(a.list,Object(s.a)({},a.fullList,"top"===A||"bottom"===A)),role:"presentation",onClick:g(A,!1),onKeyDown:g(A,!1),children:Object(C.jsx)(h.a,{children:["About","Projects","Coding Challenges","Contact"].map((function(A,a){return Object(C.jsx)(k,{href:"#".concat(e[a]),children:Object(C.jsx)(f.a,{primary:A})},A)}))})})},a=Object(b.a)({list:{width:250},fullList:{width:"auto"}})(),c=Object(t.useState)(!1),r=Object(i.a)(c,2),d=r[0],j=r[1],g=function(e,A){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&j(Object(l.a)(Object(l.a)({},d),{},Object(s.a)({},e,A)))}};return Object(C.jsx)("div",{children:["left"].map((function(e){return Object(C.jsxs)(n.a.Fragment,{children:[Object(C.jsx)(o.a,{onClick:g(e,!0),style:{fontSize:"24px"},children:"\u2630"}),Object(C.jsx)(O.a,{anchor:e,open:d[e],onClose:g(e,!1),children:A(e)})]},e)}))})}var Q=function(){var e=Object(t.useState)(!1),A=Object(i.a)(e,2),a=A[0],n=A[1],c=Object(t.useState)(window.innerWidth),r=Object(i.a)(c,2),s=r[0],l=r[1];return window.addEventListener("resize",(function(){l(window.innerWidth)})),Object(t.useEffect)((function(){n(s>680)}),[s]),Object(C.jsx)("div",{className:"header-container",children:Object(C.jsx)(j.a,{style:{display:"flex"},maxWidth:"lg",children:a?Object(C.jsx)(w,{}):Object(C.jsx)(B,{})})})},G=a(114),E=(a(100),a(162));var y=function(e){var A=e.id,a=e.className,t=e.background;return Object(C.jsxs)("div",{id:A,className:a,style:{backgroundColor:t},children:[Object(C.jsx)(E.a,{}),Object(C.jsx)(j.a,{maxWidth:"lg",children:Object(C.jsx)(d.a,{component:"div",className:"typography",children:e.children})})]})};a(101);var v=function(e){var A=e.size,a=e.image,t={backgroundImage:"url('".concat(a,"')"),backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"};return Object(C.jsx)("div",{className:"wrapper ".concat(A),style:t,children:e.children})},D=a.p+"static/media/logo2.f5c17237.svg",M={primary:"#4e47ef",secondary:"#b56eff",lightBackground:"#adcbe3",background:"#e7eff6",fonts:"#63ace5",white:"#ffffff",darkGray:"#2c302c",lila:"#b56eff",weirdGreen:"#defff2"};a(102);var N=function(){var e=Object(b.a)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),width:e.spacing(16),height:e.spacing(16)}}}}))();return Object(C.jsx)(y,{className:"container-slide",id:"about",background:M.darkGray,children:Object(C.jsxs)(d.a,{className:"container-content",children:[Object(C.jsx)(v,{className:e.root,size:"small",children:Object(C.jsx)(G.a,{className:"paper",elevation:3,children:Object(C.jsxs)("div",{children:[Object(C.jsx)("h1",{children:"TeamIng"}),Object(C.jsx)("p",{children:"We're a local swedish consulting company who have developed groundbreaking methods of team work."}),Object(C.jsxs)(g.a,{theme:u,children:[Object(C.jsx)(o.a,{href:"#projects-ref",variant:"contained",color:"primary",disableElevation:!0,children:"Look at our programs!"}),Object(C.jsx)(o.a,{href:"#contact",variant:"contained",color:"secondary",disableElevation:!0,children:"Our social media too!"})]})]})})}),Object(C.jsx)(v,{size:"large",image:D})]})})},I=a(163),J=(a(103),a.p+"static/media/program1.547ef659.jpg"),q=a.p+"static/media/program2.637ffc0b.jpg",Y=a.p+"static/media/program3.bda91085.png",S={hot:{name:"HOT",color:"#E34C26"},essential:{name:"Essential",color:"#34a853"},recommended:{name:"Recommended",color:"#666666"}},V=[{title:"Program 1",description:"Description of Program 1.",link:"",image:J,tags:[S.essential]},{title:"Program 2",description:"Description of Program 2.",link:"",image:q,tags:[S.recommended]},{title:"Program 3",description:"Description of Program 3.",link:"",image:Y,tags:[S.hot,S.recommended]}],K=a(164),T=a(165),Z=a(166),z=a(167),F=a(62),P=a(168);var W=function(e){var A=e.title,a=e.description,t=e.link,n=e.image,c=e.tags,r=void 0===c?[]:c,i=Object(b.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(0),textAlign:"center",color:"#ffffff",backgroundColor:"#333333"},media:{height:140}}}))();return Object(C.jsx)(I.a,{item:!0,sm:4,children:Object(C.jsxs)(K.a,{style:{minWidth:"150px"},children:[Object(C.jsxs)(T.a,{children:[Object(C.jsx)(Z.a,{className:i.media,image:n,title:A}),Object(C.jsxs)(z.a,{children:[Object(C.jsx)(F.a,{gutterBottom:!0,variant:"h5",component:"h1",children:A}),Object(C.jsx)(F.a,{variant:"body2",color:"textSecondary",component:"p",children:a}),Object(C.jsx)(I.a,{style:{marginTop:"10px"},container:!0,spacing:1,children:r.map((function(e,A){var a={backgroundColor:e.color,display:"inline-block",padding:"2px 7px",border:"none",fontSize:"16px",color:"#ffffff",borderRadius:"10px"};return Object(C.jsx)(I.a,{textAlign:"center",backgroundColor:"#000000",item:!0,sm:4.1,children:Object(C.jsx)(G.a,{elevation:0,style:a,color:"#000000",children:e.name})})}))})]})]}),Object(C.jsx)(P.a,{children:Object(C.jsx)(o.a,{href:t,target:"_blank",size:"small",color:"primary",children:"Visit"})})]})})};var R=function(){var e=Object(b.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},media:{height:140}}}))();return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(y,{className:"container-slide",id:"projects",background:M.primary,children:[Object(C.jsx)("span",{id:"projects-ref"}),Object(C.jsxs)(d.a,{className:"container-content ".concat(e.root),children:[Object(C.jsx)("h1",{style:{color:M.weirdGreen},children:"Our Programs"}),Object(C.jsx)(I.a,{container:!0,spacing:3,children:V.map((function(e,A){return Object(C.jsx)(W,{title:e.title,description:e.description,link:e.link,image:e.image,tags:e.tags},A)}))})]})]})})},X=(a(104),a(177)),H=a(170),L=a(169),U=a(61),_=a.n(U),$={easy:[{id:"panel-easy1",type:"Individual",name:"Challenge 1",description:"Challenge 1 description.",link:""}],medium:[{id:"panel-medium1",type:"Group",name:"Challenge 2",description:"Challenge 2 description.",link:""}],hard:[{id:"panel-hard1",type:"Pairs",name:"Challenge 3",description:"Challenge 3 description.",link:""}]};var ee=function(){var e=Object(b.a)((function(e){return{root:{width:"100%",flexGrow:1},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}}))(),A=n.a.useState(!1),a=Object(i.a)(A,2),t=a[0],c=a[1],r=function(e){return function(A,a){c(!!a&&e)}};return Object(C.jsxs)(y,{className:"container-slide",id:"coding-challenges",background:M.darkGray,children:[Object(C.jsx)("span",{id:"coding-challenges-ref1"}),Object(C.jsx)("span",{id:"coding-challenges-ref2"}),Object(C.jsx)("div",{className:"container-content challenges-container ".concat(e.root),children:Object(C.jsxs)(I.a,{container:!0,spacing:2,children:[Object(C.jsxs)(I.a,{item:!0,xs:!0,children:[Object(C.jsx)("h1",{style:{color:M.weirdGreen},children:"Easy"}),$.easy.map((function(A,a){var n=A.id,c=A.type,i=A.name,s=A.description,l=A.link;return Object(C.jsxs)(X.a,{expanded:t===n,onChange:r(n),children:[Object(C.jsxs)(L.a,{expandIcon:Object(C.jsx)(_.a,{}),"aria-controls":"panel2bh-content",id:"panel2bh-header",children:[Object(C.jsx)(F.a,{className:e.heading,children:Object(C.jsx)("code",{className:c,children:c})}),Object(C.jsx)(F.a,{className:e.secondaryHeading,children:i})]}),Object(C.jsx)(H.a,{children:Object(C.jsxs)(F.a,{children:[s,Object(C.jsx)("br",{}),Object(C.jsx)(o.a,{variant:"outlined",href:l,target:"_blank",size:"small",color:"primary",children:"Visit"})]})})]},a)}))]}),Object(C.jsxs)(I.a,{item:!0,xs:!0,children:[Object(C.jsx)("h1",{style:{color:M.weirdGreen},children:"Medium"}),$.medium.map((function(A,a){var n=A.id,c=A.type,i=A.name,s=A.description,l=A.link;return Object(C.jsxs)(X.a,{expanded:t===n,onChange:r(n),children:[Object(C.jsxs)(L.a,{expandIcon:Object(C.jsx)(_.a,{}),"aria-controls":"panel3bh-content",id:"panel3bh-header",children:[Object(C.jsx)(F.a,{className:e.heading,children:Object(C.jsx)("code",{className:c,children:c})}),Object(C.jsx)(F.a,{className:e.secondaryHeading,children:i})]}),Object(C.jsx)(H.a,{children:Object(C.jsxs)(F.a,{children:[s,Object(C.jsx)("br",{}),Object(C.jsx)(o.a,{variant:"outlined",href:l,target:"_blank",size:"small",color:"primary",children:"Visit"})]})})]},a)}))]}),Object(C.jsxs)(I.a,{item:!0,xs:!0,children:[Object(C.jsx)("h1",{style:{color:M.weirdGreen},children:"Hard"}),$.hard.map((function(A,a){var n=A.id,c=A.type,i=A.name,s=A.description,l=A.link;return Object(C.jsxs)(X.a,{expanded:t===n,onChange:r(n),children:[Object(C.jsxs)(L.a,{expandIcon:Object(C.jsx)(_.a,{}),"aria-controls":"panel4bh-content",id:"panel4bh-header",children:[Object(C.jsx)(F.a,{className:e.heading,children:Object(C.jsx)("code",{className:c,children:c})}),Object(C.jsx)(F.a,{className:e.secondaryHeading,children:i})]}),Object(C.jsx)(H.a,{children:Object(C.jsxs)(F.a,{children:[s,Object(C.jsx)("br",{}),Object(C.jsx)(o.a,{variant:"outlined",href:l,target:"_blank",size:"small",color:"primary",children:"Visit"})]})})]},a)}))]})]})})]})},Ae=a(172),ae=a(178),te=a(174),ne=a(72),ce=a.n(ne),re=a(73),ie=a.n(re),se=(a(109),a(110),a.p,[{name:"Facebook",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAABTElEQVQ4y+2VTy4EQRSHq82ETDgCsRM3cIcJESwshAMwiWEhkklsHYBEgjUWtkKsHMDWUhxASOgIMz3Vn/eqpdufkanuiZ166erq6vfVr+q9SpVhk6dC9kzDEFK0vBgssTTinKaENfRQ/GBLlJrNA8e0iyur0h1H7HPAIbvcfPR5whuUjSEQX33vSF/kA6tCTYCSWJl+hqS95wcreu3QPqcc5FFWl22TTDaQZ5waS1z5rLnNq9RrCjvlEe5d7D2jrcrrDi5JPeMG9EqV5ZwTLplM1zzBGaccc5vpm47bApqMCiBQVvxSpXCLMXGsuAmL6UAMMNg9VT0pJ8FaYZpFpx+4RA2zwDxVLrLAdYt2kipVnPOPtjq+Sb36JVVNGTD2z3M9hWfzKP/DfwH/fui3fsDR90M/LKws101D8M5X2YM4LKfwlHw9fvobsvUObssdlovJ5GMAAAAASUVORK5CYII=",link:""},{name:"Behance",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACeElEQVRYhe2WTYhOURzGf/9pmiamSZqkWUiSFZOMNMmGpayIQpnssGFpoWzIzlbMSlJsRsiSmjSl5GtKSJSPIRaMrzHyNj+L97513+O8451Bs5mnTvee83/O/z7n3Od8wBzmMMsIdQnQkolNlp4VYDwiPv9zBepHm8c79ZzaM1sCavip7mmQ7576bYpyrczPTX0zaAUG1GWZWDswb4rSliZKsR+o/euWgtMJ9AK7Sn3agH7gaNK/l6kHVvmTgMGIeJ/rqT4CTpSaVqaciBgvuAuB1UAHMAG8Bh5HxGRdh4wHFjWSrm5JuJcynB71auGTFKPqYbWt3GE6Ao4k3ONJfIf6vQkTD6kdUN0HPgILSnn6gbHiveaBDmAj9R4YB1ZFxPPi433AEPUmmwDeFPkXJuO5EBE7Z7oM36qbktEPJ5zz6oIi1qJuVT8lnPUzFfBM3VL6+PIk/kT9zeDqvoR3OrcKJpN6bkktAy6r2yNiEOhL4jeApWrabySpr83NQLfaWpQ2tV3tVNeo1xPuaMFLzdks3uZmoBIRlaRtArirbgNGqe5oAN3AOmB+Jk8zaM8JaIiIGFPHSgIAFgPfE+oV4D7wk/pTtfasvU9MS4DVtduVNI8DL5O22xFxrJmcTQtQ24FT1K/zCnCX+n0EYK96srYtl3L0AQdLTfdyJnyg3rF6rD5QH6pP1S8ZE10sJb+ZxIYK47YURt1cmLaMAzPdB1Rfqd0lAT0NRP4wfy4Mq60zFXDTzF1A3VAI+xOG1S6ongVnqXd1itqd8CvwguomcysiGnmlEzgE7AZWJHlGgAHgTG2p57P8I1i9E3QW1Q//5VI7hzn8LX4BHn1AYG/7M1EAAAAASUVORK5CYII=",link:""},{name:"Instagram",image:"data:image/png;base64,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",link:""},{name:"LinkedIn",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAADC0lEQVRYw+2YSU8UQRTHq2fGhLiACSMkfAAHSDQREmMiITHxon4Dt8Tt4MEl4wFvIuED6MGFuHATJJFw1AsnCKIHl4sHo4kxAaNMjHpAYHr+vnr1pq0egYHpsuLBqlSned3z//Gq3qulFZRSCJCmazMuYwpfEaKUoIakMEVKzaSYRkBXZRApahdRAOglF0WrFEiRlRlBrQ5jZC5GiBK39VdYCkW6jqGOCQwZJcM8tU/oxR60IZegtpFCLykZxVHjhkJeDA9RL6ZEhf/telIzqnltasEsOzjEo5OhwUolrGlS0aAh1p1Fi0IP384gq6NBYiGZJ0qUsqSqS4/CBN/0kXGDC0SE0Wp9rD2hOHCBLo5q5arA+NLF2gVFyaNLO5lSymHRamhn7VBJZLfaEAqAAJ04jP3YKNFSG6TV5EwZkotBtuKRJNYb7NRPaoTkbEipAvKA8z/krH3BvRvUCCmtDPkukwQY01nLeFWH/IhBdpu4dw3RU8ISV+A1R/xf6K5GPNGhR+0dOhIN/CoQWsRoLj1CIbyp7AWHdVQl4VI0S2V4vvsjzKtCqmYzz04sU55EgkpQdU+20OTWRMtxE7ahQWQ2k62RaxYNugNJeAdO4BLOYh97nLZHrjrkPg35HK3Vc1jEOP2doXad3vti2Towaa2jM7TYpsodufboKkp7LjPqAEecsY2jGwscGiYGQw6SEVnR1wgZZsESiz4TyG26X+TdCPAeH+j6k+VNCRnav948qfTkpngCSdJiJP+7075hezLIDQuid2bzeIxBvLR2KPrtq64g+hcfsUsW2SuRN/o66RJyQFspDXVCvhKAtn92A9FybwnA4cpPrlkdueQGUrYFOvM5g/J2SLiDPDUQSdPz7iC3fEAG/kP+OchdH5B7riHDPK2H1IBpgdyh+wWxTcUg5+QJ15UhldvUkWU8GbQ8mY5BLqziSWwvHN9wd+MUjuE4tZM4JD/Yi9OR7WC0nTDb6jM4Sk+4Lr/h9nJ08HII8nKc83Iw9XHE9vOxwMdnDy8fcPx8ivLwUe0Xc6vPeYSgsbgAAAAASUVORK5CYII=",link:""},{name:"YouTube",image:"data:image/png;base64,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",link:""},{name:"Medium",image:"data:image/png;base64,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",link:""},{name:"GitHub",image:a.p+"static/media/github.e6d9d727.png",link:""}]);var le=function(){return Object(C.jsx)(d.a,{className:"socialMedia-box",children:se.map((function(e,A){return Object(C.jsx)("a",{href:e.link,target:"_blank",children:Object(C.jsx)(d.a,{className:"box",children:Object(C.jsx)(Z.a,{style:{backgroundSize:"contain"},className:"icon",image:e.image},A)})})}))})};var oe=function(){var e=Object(t.useState)(!1),A=Object(i.a)(e,2),a=A[0],n=A[1],c=Object(t.useState)(""),r=Object(i.a)(c,2),s=r[0],j=r[1],g=Object(t.useState)(""),m=Object(i.a)(g,2),p=m[0],u=m[1],O=function(){n(!0)},h=function(e,A){"clickaway"!==A&&n(!1)},x=Object(b.a)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),width:e.spacing(16),height:e.spacing(16)}},button:{margin:e.spacing(1)}}}))();function f(e){u("error"),O()}function w(e){return Object(C.jsx)(te.a,Object(l.a)({elevation:6,variant:"filled"},e))}return Object(C.jsx)(y,{className:"container-slide",id:"contact",background:M.lila,children:Object(C.jsx)(d.a,{className:"container-content",children:Object(C.jsxs)(G.a,{className:"paper-form",elevation:3,children:[Object(C.jsxs)("form",{onSubmit:function(e){e.preventDefault(),!function(e){if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e.from_name.value).toLowerCase()))return j("Please use a valid email address."),!1;if(""==e._subject.value.replace(/\s+/g,""))return j("Please type a subject."),!1;if(""==e.message.value.replace(/\s+/g,""))return j("Please send a message."),!1;return!0}(e.target)?f():(ce.a.sendForm("#","#",e.target,"#").then((function(e){u("success"),j("Email sent! I will get back to you soon."),O(),console.log(e.text)}),(function(e){j("An error ocurred. Please try again."),f()})),e.target.reset())},children:[Object(C.jsx)("h1",{children:"Get in Touch"}),Object(C.jsx)(Ae.a,{className:"material-input",name:"from_name",size:"small",id:"outlined-basic",label:"Your email address",variant:"outlined"}),Object(C.jsx)(Ae.a,{className:"material-input",name:"_subject",size:"small",id:"outlined-basic",label:"Subject",variant:"outlined"}),Object(C.jsx)(Ae.a,{className:"material-input",name:"message",size:"small",multiline:!0,rows:"4",id:"outlined-basic",label:"Message body",variant:"outlined"}),Object(C.jsx)(o.a,{type:"submit",variant:"contained",color:"secondary",className:x.button,startIcon:Object(C.jsx)(ie.a,{}),children:"Send Email"}),Object(C.jsx)(ae.a,{open:a,autoHideDuration:0,onClose:h,children:Object(C.jsx)(w,{onClose:h,severity:p,children:s})})]}),Object(C.jsx)(le,{})]})})})};a(111);var de=function(){return Object(C.jsx)(G.a,{className:"footer-container",elevation:0,square:!0,style:{background:M.lila},children:Object(C.jsx)(d.a,{className:"content-box",children:Object(C.jsxs)(F.a,{children:["Copyright @ ",(new Date).getFullYear()," TeamIng. All Rights Reserved."]})})})};var je=function(){return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(Q,{}),Object(C.jsx)(N,{}),Object(C.jsx)(R,{}),Object(C.jsx)(ee,{}),Object(C.jsx)(oe,{}),Object(C.jsx)(de,{})]})};r.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(je,{})}),document.getElementById("root"))},92:function(e,A,a){},93:function(e,A,a){},94:function(e,A,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.d396fe98.chunk.js.map