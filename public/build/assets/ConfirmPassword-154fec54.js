import{T as m,c as d,w as t,o as l,a,u as o,Z as c,b as e,n as p,d as u,e as f}from"./app-d089a9ca.js";import{_}from"./GuestLayout-185c5d55.js";import{_ as w,a as b,b as h}from"./TextInput-81155fe1.js";import{P as x}from"./PrimaryButton-a86b3e16.js";import"./ApplicationLogo-c29dec8f.js";import"./_plugin-vue_export-helper-c27b6911.js";const g=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),y=["onSubmit"],P={class:"flex justify-end mt-4"},V=f(" Confirm "),j={name:"ConfirmPassword",setup(v){const s=m({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(C,r)=>(l(),d(_,null,{default:t(()=>[a(o(c),{title:"Confirm Password"}),g,e("form",{onSubmit:u(i,["prevent"])},[e("div",null,[a(w,{for:"password",value:"Password"}),a(b,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=n=>o(s).password=n),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(h,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",P,[a(x,{class:p(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[V]),_:1},8,["class","disabled"])])],40,y)]),_:1}))}};export{j as default};
