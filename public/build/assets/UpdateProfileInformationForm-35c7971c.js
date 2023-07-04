import{K as v,T as g,f as n,b as a,a as s,u as e,w as r,i as h,y as x,g as f,z as V,d as k,e as u,o as m,k as b}from"./app-d089a9ca.js";import{a as p,b as _,_ as y}from"./TextInput-81155fe1.js";import{P as w}from"./PrimaryButton-a86b3e16.js";import"./_plugin-vue_export-helper-c27b6911.js";const S=a("header",null,[a("h2",{class:"text-lg font-medium text-gray-900"},"Profile Information"),a("p",{class:"mt-1 text-sm text-gray-600"}," Update your account's profile information and email address. ")],-1),B={key:0},N={class:"text-sm mt-2 text-gray-800"},E=u(" Your email address is unverified. "),P=u(" Click here to re-send the verification email. "),U={class:"mt-2 font-medium text-sm text-green-600"},$={class:"flex items-center gap-4"},C=u("Save"),T={key:0,class:"text-sm text-gray-600"},D={name:"UpdateProfileInformationForm",props:{mustVerifyEmail:{type:Boolean},status:{type:String}},setup(d){const l=v().props.auth.user,t=g({name:l.name,email:l.email});return(c,o)=>(m(),n("section",null,[S,a("form",{onSubmit:o[2]||(o[2]=k(i=>e(t).patch(c.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[a("div",null,[s(y,{for:"name",value:"Name"}),s(p,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(t).name,"onUpdate:modelValue":o[0]||(o[0]=i=>e(t).name=i),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),s(_,{class:"mt-2",message:e(t).errors.name},null,8,["message"])]),a("div",null,[s(y,{for:"email",value:"Email"}),s(p,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(t).email,"onUpdate:modelValue":o[1]||(o[1]=i=>e(t).email=i),required:"",autocomplete:"username"},null,8,["modelValue"]),s(_,{class:"mt-2",message:e(t).errors.email},null,8,["message"])]),d.mustVerifyEmail&&e(l).email_verified_at===null?(m(),n("div",B,[a("p",N,[E,s(e(b),{href:c.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:r(()=>[P]),_:1},8,["href"])]),h(a("div",U," A new verification link has been sent to your email address. ",512),[[x,d.status==="verification-link-sent"]])])):f("",!0),a("div",$,[s(w,{disabled:e(t).processing},{default:r(()=>[C]),_:1},8,["disabled"]),s(V,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:r(()=>[e(t).recentlySuccessful?(m(),n("p",T,"Saved.")):f("",!0)]),_:1})])],32)]))}};export{D as default};
