import{u as _}from"./orders-BfCjyNna.js";import{a as p,r as h,o as v,b as n,e as r,f as s,l as c,m as i,t,u as o,h as e,F as b,i as f,j as m,g as x}from"./index-BHz8NH5-.js";const g={class:"grid grid-cols-1 gap-5 md:grid-cols-2"},y={class:""},N={class:"border-b pb-2 text-lg text-blue-400"},w={class:"space-y-3 py-4 text-sm"},D={class:"font-bold"},M={class:"font-bold"},P={class:"font-bold"},S={class:""},T={class:"border-b pb-2 text-lg text-blue-400"},j={class:"space-y-3 py-4 text-sm"},k={class:"font-bold"},B={class:"font-bold"},C={class:"font-bold"},I={class:"md:col-span-2"},$={class:"border-b pb-2 text-lg text-blue-400"},q={class:"text-sm"},E={class:"mb-4 space-y-3 border-b py-4"},F={class:"h-20 w-20 overflow-hidden"},V=["src","alt"],L={class:"font-bold"},O={class:"flex justify-between md:text-lg"},z={class:"font-bold"},A={class:"font-bold"},R=p({__name:"index",setup(G){const u=_(),l=h({date:"",email:"",id:0,orderName:"",orderNumber:"",phone:"",total:0,products:[]});return v(async()=>{await u.getProducts(),l.value=u.order}),(H,J)=>{const d=m("v-card");return n(),r("div",g,[s("div",y,[c(d,{class:""},{default:i(()=>[s("div",N,[s("span",null,t(o(e)("orderInfo")),1)]),s("div",w,[s("div",null,[s("span",D,t(o(e)("orderNumber")),1),s("p",null,t(l.value.orderNumber),1)]),s("div",null,[s("span",M,t(o(e)("orderDate")),1),s("p",null,t(l.value.date),1)]),s("div",null,[s("span",P,t(o(e)("orderSource")),1),s("p",null,t(o(e)("frontPlatform")),1)])])]),_:1})]),s("div",S,[c(d,null,{default:i(()=>[s("div",T,[s("span",null,t(o(e)("orderNameData")),1)]),s("div",j,[s("div",null,[s("span",k,t(o(e)("orderName")),1),s("p",null,t(l.value.orderName),1)]),s("div",null,[s("span",B,t(o(e)("orderEmail")),1),s("p",null,t(l.value.email),1)]),s("div",null,[s("span",C,t(o(e)("phone")),1),s("p",null,t(l.value.phone),1)])])]),_:1})]),s("div",I,[c(d,null,{default:i(()=>[s("div",$,[s("span",null,t(o(e)("productDetail")),1)]),s("div",q,[s("div",E,[(n(!0),r(b,null,f(l.value.products,a=>(n(),r("div",{key:a.productId,class:"flex gap-5"},[s("div",F,[s("img",{class:"h-full w-full object-contain",src:a.img,alt:a.title},null,8,V)]),s("div",null,[s("p",L,t(a.title),1),s("p",null,t(Math.ceil(a.quantity))+" x NT$ "+t(Math.ceil(a.productPrice))+" = NT$ "+t(o(x)(Math.ceil(a.quantity*a.productPrice))),1)])]))),128))]),s("div",O,[s("span",z,t(o(e)("orderTotal")),1),s("p",A,"NT$ "+t(l.value.total),1)])])]),_:1})])])}}});export{R as default};