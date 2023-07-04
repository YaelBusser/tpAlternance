import{h as w,i as k,v as y,u as s,o as i,f as _,j as x,T as v,c as u,w as m,a as o,Z as V,t as B,g as c,b as r,k as C,n as $,d as P,e as h}from"./app-d089a9ca.js";import{_ as q}from"./GuestLayout-185c5d55.js";import{_ as p,a as f,b as g}from"./TextInput-81155fe1.js";import{P as N}from"./PrimaryButton-a86b3e16.js";import"./ApplicationLogo-c29dec8f.js";import"./_plugin-vue_export-helper-c27b6911.js";const R=["value"],S={name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(l,{emit:e}){const d=l,n=w({get(){return d.checked},set(t){e("update:checked",t)}});return(t,a)=>k((i(),_("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":a[0]||(a[0]=b=>x(n)?n.value=b:null),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,R)),[[y,s(n)]])}},U={key:0,class:"mb-4 font-medium text-sm text-green-600"},L=["onSubmit"],j={class:"mt-4"},D={class:"block mt-4"},E={class:"flex items-center"},F=r("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),M={class:"flex items-center justify-end mt-4"},T=h(" Forgot your password? "),z=h(" Log in "),K={name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(l){const e=v({email:"",password:"",remember:!1}),d=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(n,t)=>(i(),u(q,null,{default:m(()=>[o(s(V),{title:"Log in"}),l.status?(i(),_("div",U,B(l.status),1)):c("",!0),r("form",{onSubmit:P(d,["prevent"])},[r("div",null,[o(p,{for:"email",value:"Email"}),o(f,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":t[0]||(t[0]=a=>s(e).email=a),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(g,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",j,[o(p,{for:"password",value:"Password"}),o(f,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":t[1]||(t[1]=a=>s(e).password=a),required:"",autocomplete:"current-password"},null,8,["modelValue"]),o(g,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",D,[r("label",E,[o(S,{name:"remember",checked:s(e).remember,"onUpdate:checked":t[2]||(t[2]=a=>s(e).remember=a)},null,8,["checked"]),F])]),r("div",M,[l.canResetPassword?(i(),u(s(C),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:m(()=>[T]),_:1},8,["href"])):c("",!0),o(N,{class:$(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[z]),_:1},8,["class","disabled"])])],40,L)]),_:1}))}};export{K as default};