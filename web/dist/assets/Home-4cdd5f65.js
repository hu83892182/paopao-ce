import{W as Ue}from"./whisper-add-friend-fde59c3d.js";import{_ as Be}from"./whisper-6e97e8e3.js";import{_ as xe,a as Ee}from"./post-item.vue_vue_type_style_index_0_lang-299dc5b6.js";import{_ as Ve}from"./post-skeleton-dd55abe8.js";import{d as Ce,H as l,c as we,b as Ie,e as p,f as h,bf as w,j as A,k as n,w as i,q as x,Y as y,y as ke,A as G,x as se,F as ye,u as Ae,R as Fe,E as Ne}from"./@vue-a481fc63.js";import{u as ze}from"./vuex-44de225f.js";import{l as be}from"./lodash-e0b37ac3.js";import{g as Re,a as qe,c as Ge,b as Oe,d as Pe,e as Se,u as Ye,f as Le,h as Me,_ as We}from"./index-7d4ab953.js";import{p as Ke}from"./content-aad6a645.js";import{V as B,P as j}from"./IEnum-5453a777.js";import{I as je,V as Qe,A as He,d as Ze,E as Je}from"./@vicons-f0266f88.js";import{o as De,v as Xe,j as $e,e as et,w as tt,x as st,y as at,z as nt,A as ot,B as lt,C as it,a as Te,D as rt,E as ut,F as ct,G as pt,H as dt,l as vt,I as mt,J as _t,k as ft}from"./naive-ui-eecf2ec3.js";import{_ as gt}from"./main-nav.vue_vue_type_style_index_0_lang-52234344.js";import{b as ht,u as wt}from"./vue-router-e5a2430e.js";import{W as yt}from"./v3-infinite-loading-2c58ec2f.js";import{S as At}from"./@opentiny-d73a2d67.js";import"./copy-to-clipboard-4ef7d3eb.js";import"./@babel-725317a4.js";import"./toggle-selection-93f4ad84.js";import"./axios-4a70c6fc.js";import"./moment-2ab8298d.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-7c8d4b48.js";import"./evtd-b614532e.js";import"./@css-render-7124a1a5.js";import"./vooks-6d99783e.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";import"./paopao-video-player-2fe58954.js";import"./vue-1e3b54ec.js";import"./xss-a5544f63.js";import"./cssfilter-af71ba68.js";const kt=Q=>{const F=new FileReader,k=u=>["application/zip","application/x-zip","application/octet-stream","application/x-zip-compressed"].includes(u),b=()=>{const u=new Uint8Array(F.result).subarray(0,4);let z="";for(let _=0;_<u.length;_++)z+=u[_].toString(16);switch(z){case"504b0304":case"504b0506":case"504b0708":return k("application/zip");case"504b030414":return k("application/x-zip-compressed");case"504b0508":return k("application/x-zip");case"504b5370":return k("application/octet-stream");default:return!1}};return new Promise((u,z)=>{F.onloadend=()=>{const _=Q.type;u(_===""||_==="application/octet-stream"?b():k(_))},F.readAsArrayBuffer(Q.slice(0,4))})},bt={key:0,class:"compose-wrap"},Ct={class:"compose-line"},It={class:"compose-user"},zt={class:"compose-line compose-options"},Dt={class:"attachment"},Tt={class:"submit-wrap"},Ut={class:"attachment-list-wrap"},Bt={key:0,class:"attachment-price-wrap"},xt=A("span",null," 附件价格￥",-1),Et={key:0,class:"eye-wrap"},Vt={key:1,class:"link-wrap"},Ft={key:1,class:"compose-wrap"},Nt=A("div",{class:"login-wrap"},[A("span",{class:"login-banner"}," 登录后，精彩更多")],-1),Rt={key:0,class:"login-only-wrap"},qt={key:1,class:"login-wrap"},Gt=Ce({__name:"compose",emits:["post-success"],setup(Q,{emit:F}){const k=ze(),b=l([]),u=l(!1),z=l(!1),_=l(!1),E=l(!1),D=l(""),C=l([]),N=l(),O=l(0),v=l("public/image"),f=l([]),I=l([]),R=l([]),V=l([]),d=l(B.PUBLIC),g=l(B.PUBLIC),q="true".toLowerCase()==="true",T=+"400",P=l("true".toLowerCase()==="true"),Y=l("true".toLowerCase()==="true"),H=l("true".toLowerCase()==="true"),Z=l("false".toLowerCase()==="true"),ae=l("true".toLowerCase()==="true"),ne="/v1/attachment",oe=we(()=>"Bearer "+localStorage.getItem("PAOPAO_TOKEN")),le=we(()=>{let e=[{value:B.PUBLIC,label:"公开"},{value:B.PRIVATE,label:"私密"},{value:B.Following,label:"关注可见"}];return q&&e.push({value:B.FRIEND,label:"好友可见"}),e}),J=()=>{_.value=!_.value,_.value&&E.value&&(E.value=!1)},X=()=>{E.value=!E.value,E.value&&_.value&&(_.value=!1)},$=be.debounce(e=>{Re({k:e}).then(t=>{let o=[];t.suggest.map(a=>{o.push({label:a,value:a})}),b.value=o,u.value=!1}).catch(t=>{u.value=!1})},200),ee=be.debounce(e=>{qe({k:e}).then(t=>{let o=[];t.suggest.map(a=>{o.push({label:a,value:a})}),b.value=o,u.value=!1}).catch(t=>{u.value=!1})},200),ie=(e,t)=>{u.value||(u.value=!0,t==="@"?$(e):ee(e))},S=e=>{e.length>T?D.value=e.substring(0,T):D.value=e},L=e=>{v.value=e},M=e=>{for(let c=0;c<e.length;c++){var t=e[c].name,o=t.split(".").slice(0,-1).join("."),a=t.split(".").pop();o.length>30&&(e[c].name=o.substring(0,18)+"..."+o.substring(o.length-9)+"."+a)}f.value=e},U=async e=>{var t,o,a,c,m;return v.value==="public/image"&&!["image/png","image/jpg","image/jpeg","image/gif"].includes((t=e.file.file)==null?void 0:t.type)?(window.$message.warning("图片仅允许 png/jpg/gif 格式"),!1):v.value==="image"&&((o=e.file.file)==null?void 0:o.size)>10485760?(window.$message.warning("图片大小不能超过10MB"),!1):v.value==="public/video"&&!["video/mp4","video/quicktime"].includes((a=e.file.file)==null?void 0:a.type)?(window.$message.warning("视频仅允许 mp4/mov 格式"),!1):v.value==="public/video"&&((c=e.file.file)==null?void 0:c.size)>104857600?(window.$message.warning("视频大小不能超过100MB"),!1):v.value==="attachment"&&!await kt(e.file.file)?(window.$message.warning("附件仅允许 zip 格式"),!1):v.value==="attachment"&&((m=e.file.file)==null?void 0:m.size)>104857600?(window.$message.warning("附件大小不能超过100MB"),!1):!0},te=({file:e,event:t})=>{var o;try{let a=JSON.parse((o=t.target)==null?void 0:o.response);a.code===0&&(v.value==="public/image"&&I.value.push({id:e.id,content:a.data.content}),v.value==="public/video"&&R.value.push({id:e.id,content:a.data.content}),v.value==="attachment"&&V.value.push({id:e.id,content:a.data.content}))}catch{window.$message.error("上传失败")}},re=({file:e,event:t})=>{var o;try{let a=JSON.parse((o=t.target)==null?void 0:o.response);if(a.code!==0){let c=a.msg||"上传失败";a.details&&a.details.length>0&&a.details.map(m=>{c+=":"+m}),window.$message.error(c)}}catch{window.$message.error("上传失败")}},W=({file:e})=>{let t=I.value.findIndex(o=>o.id===e.id);t>-1&&I.value.splice(t,1),t=R.value.findIndex(o=>o.id===e.id),t>-1&&R.value.splice(t,1),t=V.value.findIndex(o=>o.id===e.id),t>-1&&V.value.splice(t,1)},ue=()=>{if(D.value.trim().length===0){window.$message.warning("请输入内容哦");return}let{tags:e,users:t}=Ke(D.value);const o=[];let a=100;o.push({content:D.value,type:j.TEXT,sort:a}),I.value.map(c=>{a++,o.push({content:c.content,type:j.IMAGEURL,sort:a})}),R.value.map(c=>{a++,o.push({content:c.content,type:j.VIDEOURL,sort:a})}),V.value.map(c=>{a++,o.push({content:c.content,type:j.ATTACHMENT,sort:a})}),C.value.length>0&&C.value.map(c=>{a++,o.push({content:c,type:j.LINKURL,sort:a})}),z.value=!0,Ge({contents:o,tags:Array.from(new Set(e)),users:Array.from(new Set(t)),attachment_price:+O.value*100,visibility:d.value}).then(c=>{var m;window.$message.success("发布成功"),z.value=!1,F("post-success",c),_.value=!1,E.value=!1,(m=N.value)==null||m.clear(),f.value=[],D.value="",C.value=[],I.value=[],R.value=[],V.value=[],d.value=g.value}).catch(c=>{z.value=!1})},s=e=>{k.commit("triggerAuth",!0),k.commit("triggerAuthKey",e)};return Ie(()=>{const e="friend".toLowerCase();q&&e==="friend"?g.value=B.FRIEND:e==="following"?g.value=B.Following:e==="public"?g.value=B.PUBLIC:g.value=B.PRIVATE,d.value=g.value}),(e,t)=>{const o=De,a=Xe,c=$e,m=et,K=tt,ce=st,pe=at,de=nt,ve=ot,me=lt,_e=it,fe=Te,ge=rt,he=ut;return p(),h("div",null,[w(k).state.userInfo.id>0?(p(),h("div",bt,[A("div",Ct,[A("div",It,[n(o,{round:"",size:30,src:w(k).state.userInfo.avatar},null,8,["src"])]),n(a,{type:"textarea",size:"large",autosize:"",bordered:!1,loading:u.value,value:D.value,prefix:["@","#"],options:b.value,onSearch:ie,"onUpdate:value":S,placeholder:"说说您的新鲜事..."},null,8,["loading","value","options"])]),n(me,{ref_key:"uploadRef",ref:N,abstract:"","list-type":"image",multiple:!0,max:9,action:ne,headers:{Authorization:oe.value},data:{type:v.value},"file-list":f.value,onBeforeUpload:U,onFinish:te,onError:re,onRemove:W,"onUpdate:fileList":M},{default:i(()=>[A("div",zt,[A("div",Dt,[n(K,{abstract:""},{default:i(({handleClick:r})=>[n(m,{disabled:f.value.length>0&&v.value==="public/video"||f.value.length===9,onClick:()=>{L("public/image"),r()},quaternary:"",circle:"",type:"primary"},{icon:i(()=>[n(c,{size:"20",color:"var(--primary-color)"},{default:i(()=>[n(w(je))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1}),Y.value?(p(),x(K,{key:0,abstract:""},{default:i(({handleClick:r})=>[n(m,{disabled:f.value.length>0&&v.value!=="public/video"||f.value.length===9,onClick:()=>{L("public/video"),r()},quaternary:"",circle:"",type:"primary"},{icon:i(()=>[n(c,{size:"20",color:"var(--primary-color)"},{default:i(()=>[n(w(Qe))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1})):y("",!0),H.value?(p(),x(K,{key:1,abstract:""},{default:i(({handleClick:r})=>[n(m,{disabled:f.value.length>0&&v.value==="public/video"||f.value.length===9,onClick:()=>{L("attachment"),r()},quaternary:"",circle:"",type:"primary"},{icon:i(()=>[n(c,{size:"20",color:"var(--primary-color)"},{default:i(()=>[n(w(He))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1})):y("",!0),n(m,{quaternary:"",circle:"",type:"primary",onClick:ke(J,["stop"])},{icon:i(()=>[n(c,{size:"20",color:"var(--primary-color)"},{default:i(()=>[n(w(Ze))]),_:1})]),_:1},8,["onClick"]),ae.value?(p(),x(m,{key:2,quaternary:"",circle:"",type:"primary",onClick:ke(X,["stop"])},{icon:i(()=>[n(c,{size:"20",color:"var(--primary-color)"},{default:i(()=>[n(w(Je))]),_:1})]),_:1},8,["onClick"])):y("",!0)]),A("div",Tt,[n(pe,{trigger:"hover",placement:"bottom"},{trigger:i(()=>[n(ce,{class:"text-statistic",type:"circle","show-indicator":!1,status:"success","stroke-width":10,percentage:D.value.length/w(T)*100},null,8,["percentage"])]),default:i(()=>[G(" "+se(D.value.length)+" / "+se(w(T)),1)]),_:1}),n(m,{loading:z.value,onClick:ue,type:"primary",secondary:"",round:""},{default:i(()=>[G(" 发布 ")]),_:1},8,["loading"])])]),A("div",Ut,[n(de),V.value.length>0?(p(),h("div",Bt,[Z.value?(p(),x(ve,{key:0,value:O.value,"onUpdate:value":t[0]||(t[0]=r=>O.value=r),min:0,max:1e5,placeholder:"请输入附件价格，0为免费附件"},{prefix:i(()=>[xt]),_:1},8,["value"])):y("",!0)])):y("",!0)])]),_:1},8,["headers","data","file-list"]),E.value?(p(),h("div",Et,[n(ge,{value:d.value,"onUpdate:value":t[1]||(t[1]=r=>d.value=r),name:"radiogroup"},{default:i(()=>[n(fe,null,{default:i(()=>[(p(!0),h(ye,null,Ae(le.value,r=>(p(),x(_e,{key:r.value,value:r.value,label:r.label},null,8,["value","label"]))),128))]),_:1})]),_:1},8,["value"])])):y("",!0),_.value?(p(),h("div",Vt,[n(he,{value:C.value,"onUpdate:value":t[2]||(t[2]=r=>C.value=r),placeholder:"请输入以http(s)://开头的链接",min:0,max:3},{"create-button-default":i(()=>[G(" 创建链接 ")]),_:1},8,["value"])])):y("",!0)])):(p(),h("div",Ft,[Nt,P.value?y("",!0):(p(),h("div",Rt,[n(m,{strong:"",secondary:"",round:"",type:"primary",onClick:t[3]||(t[3]=r=>s("signin"))},{default:i(()=>[G(" 登录 ")]),_:1})])),P.value?(p(),h("div",qt,[n(m,{strong:"",secondary:"",round:"",type:"primary",onClick:t[4]||(t[4]=r=>s("signin"))},{default:i(()=>[G(" 登录 ")]),_:1}),n(m,{strong:"",secondary:"",round:"",type:"info",onClick:t[5]||(t[5]=r=>s("signup"))},{default:i(()=>[G(" 注册 ")]),_:1})])):y("",!0)]))])}}});const Ot="data:image/png;base64,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",Pt="/assets/discover-tweets-ab101944.jpeg",St="/assets/following-tweets-e36b4410.jpeg",Yt={class:"slide-bar-item"},Lt={class:"slide-bar-item-title slide-bar-user-link"},Mt={key:1,class:"skeleton-wrap"},Wt={key:0,class:"empty-wrap"},Kt={key:1},jt={key:2},Qt={class:"load-more-wrap"},Ht={class:"load-more-spinner"},Zt=Ce({__name:"Home",setup(Q){const F="true".toLowerCase()==="true",k="true".toLowerCase()==="true",b=ze(),u=ht(),z=wt(),_=ct(),E=l(9),D=l(8),C=l([{title:"最新动态",style:1,username:"",avatar:Ot,show:!0},{title:"热门推荐",style:2,username:"",avatar:Pt,show:!1},{title:"正在关注",style:3,username:"",avatar:St,show:!1},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0}]),N=Fe({id:0,avatar:"",username:"",nickname:"",is_admin:!1,is_friend:!1,is_following:!1,created_on:0,follows:0,followings:0,status:1}),O=l(null),v=l("泡泡广场"),f=l(!1),I=l(!1),R=l(1),V=l(""),d=l([]),g=l(1),q=l(20),T=l(0),P=l(!1),Y=l(!1),H=l({id:0,avatar:"",username:"",nickname:"",is_admin:!1,is_friend:!0,is_following:!1,created_on:0,follows:0,followings:0,status:1}),Z=s=>{H.value=s,P.value=!0},ae=()=>{P.value=!1},ne=()=>{Y.value=!0},oe=s=>{_.warning({title:"删除好友",content:"将好友 “"+s.user.nickname+"” 删除，将同时删除 点赞/收藏 列表中关于该朋友的 “好友可见” 推文",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{Me({user_id:N.id}).then(e=>{window.$message.success("操作成功"),s.user.is_friend=!1}).catch(e=>{})}})},le=()=>{Y.value=!1,O.value=null},J=s=>{O.value=s,N.id=s.user.id,N.username=s.user.username,N.nickname=s.user.nickname,s.user.is_friend?oe(s):ne()},X=s=>{_.success({title:"提示",content:"确定"+(s.user.is_following?"取消关注":"关注")+"该用户吗？",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{s.user.is_following?Ye({user_id:s.user.id}).then(e=>{window.$message.success("操作成功"),$(s.user_id,!1)}).catch(e=>{}):Le({user_id:s.user.id}).then(e=>{window.$message.success("关注成功"),$(s.user_id,!0)}).catch(e=>{})}})};function $(s,e){for(let t in d.value)d.value[t].user_id==s&&(d.value[t].user.is_following=e)}const ee=()=>{v.value="泡泡广场",u.query&&u.query.q&&(u.query.t&&u.query.t==="tag"?v.value="#"+decodeURIComponent(u.query.q):v.value="搜索: "+decodeURIComponent(u.query.q))},ie=we(()=>F&&k&&b.state.desktopModelShow&&b.state.userInfo.id>0),S=()=>{f.value=!1,I.value=!1,d.value=[],g.value=1,T.value=0},L=(s,e)=>{switch(S(),R.value=s.style,u.query.q&&(u.query.q=null,ee()),s.style){case 1:U("newest");break;case 2:U("hots");break;case 3:u.query.q=null,U("following");break;case 21:V.value=s.username,te();break}C.value[e].show=!1},M=()=>{C.value=C.value.slice(0,3),!(!F||!k||b.state.userInfo.id===0)&&Oe({page:1,page_size:50}).then(s=>{var e=0;const t=s.list||[];let o=[];for(;e<t.length;e++){let a=t[e];o.push({title:a.nickname,style:21,username:a.username,avatar:a.avatar,show:a.is_fresh})}o.length>0&&(C.value=C.value.concat(o))}).catch(s=>{console.log(s)})},U=s=>{f.value=!0,Pe({query:u.query.q?decodeURIComponent(u.query.q):null,type:u.query.t,style:s,page:g.value,page_size:q.value}).then(e=>{f.value=!1,e.list.length===0&&(I.value=!0),g.value>1?d.value=d.value.concat(e.list):(d.value=e.list,window.scrollTo(0,0)),T.value=Math.ceil(e.pager.total_rows/q.value)}).catch(e=>{f.value=!1,g.value>1&&g.value--})},te=()=>{f.value=!0,Se({username:V.value,style:"post",page:g.value,page_size:q.value}).then(s=>{f.value=!1,s.list.length===0&&(I.value=!0),g.value>1?d.value=d.value.concat(s.list):(d.value=s.list||[],window.scrollTo(0,0)),T.value=Math.ceil(s.pager.total_rows/q.value)}).catch(s=>{d.value=[],g.value>1&&g.value--,f.value=!1})},re=s=>{z.push({name:"post",query:{id:s.id}})},W=()=>{switch(R.value){case 1:U("newest");break;case 2:U("hots");break;case 3:U("following");break;case 21:u.query.q?U("search"):te();break}},ue=()=>{g.value<T.value||T.value==0?(I.value=!1,g.value++,W()):I.value=!0};return Ie(()=>{S(),M(),U("newest")}),Ne(()=>({path:u.path,query:u.query,refresh:b.state.refresh}),(s,e)=>{if(ee(),s.refresh!==e.refresh){S(),setTimeout(()=>{M(),W()},0);return}e.path!=="/post"&&s.path==="/"&&(S(),setTimeout(()=>{M(),W()},0))}),(s,e)=>{const t=gt,o=Gt,a=dt,c=De,m=vt,K=mt,ce=Ve,pe=_t,de=xe,ve=Ee,me=Be,_e=Ue,fe=pt,ge=ft,he=Te;return p(),h("div",null,[n(t,{title:v.value},null,8,["title"]),n(fe,{class:"main-content-wrap",bordered:""},{default:i(()=>[n(a,null,{default:i(()=>[n(o,{onPostSuccess:re})]),_:1}),ie.value?(p(),x(a,{key:0},{default:i(()=>[n(w(At),{modelValue:C.value,"onUpdate:modelValue":e[0]||(e[0]=r=>C.value=r),"wheel-blocks":D.value,"init-blocks":E.value,onClick:L,tag:"div","sub-tag":"div"},{default:i(r=>[A("div",Yt,[n(m,{value:"1",offset:[-4,48],dot:"",show:r.slotData.show},{default:i(()=>[n(c,{round:"",size:48,src:r.slotData.avatar,class:"slide-bar-item-avatar"},null,8,["src"])]),_:2},1032,["show"]),A("div",Lt,[n(K,{"line-clamp":2},{default:i(()=>[G(se(r.slotData.title),1)]),_:2},1024)])])]),_:1},8,["modelValue","wheel-blocks","init-blocks"])]),_:1})):y("",!0),f.value&&d.value.length===0?(p(),h("div",Mt,[n(ce,{num:q.value},null,8,["num"])])):y("",!0),A("div",null,[d.value.length===0?(p(),h("div",Wt,[n(pe,{size:"large",description:"暂无数据"})])):y("",!0),w(b).state.desktopModelShow?(p(),h("div",Kt,[(p(!0),h(ye,null,Ae(d.value,r=>(p(),x(a,{key:r.id},{default:i(()=>[n(de,{post:r,isOwner:w(b).state.userInfo.id==r.user_id,addFollowAction:!0,onSendWhisper:Z,onHandleFollowAction:X,onHandleFriendAction:J},null,8,["post","isOwner"])]),_:2},1024))),128))])):(p(),h("div",jt,[(p(!0),h(ye,null,Ae(d.value,r=>(p(),x(a,{key:r.id},{default:i(()=>[n(ve,{post:r,isOwner:w(b).state.userInfo.id==r.user_id,addFollowAction:!0,onSendWhisper:Z,onHandleFollowAction:X,onHandleFriendAction:J},null,8,["post","isOwner"])]),_:2},1024))),128))]))]),n(me,{show:P.value,user:H.value,onSuccess:ae},null,8,["show","user"]),n(_e,{show:Y.value,user:N,onSuccess:le},null,8,["show","user"])]),_:1}),T.value>0?(p(),x(he,{key:0,justify:"center"},{default:i(()=>[n(w(yt),{class:"load-more",slots:{complete:"没有更多泡泡了",error:"加载出错"},onInfinite:e[1]||(e[1]=r=>ue())},{spinner:i(()=>[A("div",Qt,[I.value?y("",!0):(p(),x(ge,{key:0,size:14})),A("span",Ht,se(I.value?"没有更多泡泡了":"加载更多"),1)])]),_:1})]),_:1})):y("",!0)])}}});const Rs=We(Zt,[["__scopeId","data-v-75e2e9f1"]]);export{Rs as default};
