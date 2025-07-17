import{importShared as R}from"./__federation_fn_import-yu0FoGgY.js";var f={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g;function N(){if(g)return d;g=1;var a=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function l(p,r,s){var n=null;if(s!==void 0&&(n=""+s),r.key!==void 0&&(n=""+r.key),"key"in r){s={};for(var i in r)i!=="key"&&(s[i]=r[i])}else s=r;return r=s.ref,{$$typeof:a,type:p,key:n,ref:r!==void 0?r:null,props:s}}return d.Fragment=c,d.jsx=l,d.jsxs=l,d}var v;function w(){return v||(v=1,f.exports=N()),f.exports}var e=w();const k=await R("react"),{useEffect:y,useState:h,useRef:E,useCallback:_}=k,C="https://rickandmortyapi.com/api/character",A=a=>a==="Alive"?"text-green-600":a==="Dead"?"text-red-500":"text-gray-500",T=({user:a,onCharacterClick:c})=>{const[l,p]=h([]),[r,s]=h(1),[n,i]=h(!0),[x,b]=h(!1),u=E(null),j=_(t=>{x||(u.current&&u.current.disconnect(),u.current=new window.IntersectionObserver(o=>{o[0].isIntersecting&&n&&s(m=>m+1)}),t&&u.current.observe(t))},[x,n]);return y(()=>{b(!0),fetch(`${C}/?page=${r}`).then(t=>t.json()).then(t=>{p(o=>r===1?t.results:[...o,...t.results]),i(!!t.info?.next),b(!1)}).catch(()=>b(!1))},[r]),e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 pb-10",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-2 sm:px-4",children:[e.jsxs("header",{className:"pt-8 pb-6 text-center",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold text-gray-800 mb-2 drop-shadow-lg tracking-tight",children:"Rick and Morty Dashboard"}),e.jsxs("p",{className:"text-lg md:text-xl text-teal-800 font-medium mb-1",children:["Welcome, ",e.jsx("span",{className:"font-bold text-blue-600",children:a.username}),"!"]}),e.jsx("p",{className:"text-base text-gray-600 hidden sm:block",children:"Browse all Rick and Morty characters. Infinite scroll enabled. Click a card to see details soon!"})]}),e.jsxs("main",{children:[e.jsx("div",{className:`
              grid gap-4
              sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
              sm:gap-6
            `,children:l.map((t,o)=>{const m=e.jsxs("div",{className:`
                    group bg-white/70 backdrop-blur shadow-xl rounded-xl border border-blue-100 p-4 flex flex-col items-center
                    transition-all duration-200 ease-in-out
                    hover:scale-105 hover:shadow-2xl hover:z-10
                    cursor-pointer
                  `,onClick:()=>c&&c(t.id),children:[e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:t.image,alt:t.name,className:`
                        w-24 h-24 md:w-28 md:h-28 
                        object-cover rounded-full border-4 border-white shadow-md
                        group-hover:ring-4 group-hover:ring-blue-200 transition-all
                      `}),e.jsx("span",{className:`
                        absolute bottom-1 right-1 px-2 py-0.5 rounded-full text-xs font-bold bg-white/80
                        ${A(t.status)} shadow
                      `,children:t.status})]}),e.jsxs("div",{className:"mt-3 text-center",children:[e.jsx("div",{className:"font-semibold text-lg text-gray-700 group-hover:text-blue-700 transition",children:t.name}),e.jsx("div",{className:"text-xs text-gray-500 font-medium capitalize mt-1",children:t.species})]})]},t.id);return o===l.length-1?e.jsx("div",{ref:j,children:m},t.id):m})}),x&&e.jsxs("div",{className:"text-center my-6",children:[e.jsx("span",{className:"inline-block animate-spin rounded-full border-4 border-blue-200 border-t-blue-600 h-8 w-8 align-middle mr-2"}),e.jsx("span",{className:"text-blue-800 font-semibold",children:"Loading..."})]}),!n&&!x&&e.jsx("div",{className:"text-center my-8 text-gray-500 text-lg",children:"All characters loaded! 🚀"})]})]})})};export{T as default,e as j};
