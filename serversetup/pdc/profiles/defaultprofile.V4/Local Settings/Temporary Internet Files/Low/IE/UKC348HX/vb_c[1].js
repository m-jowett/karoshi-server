_w.VR={".b_scopebar":[0,0,0],".b_logo":[-1,-1,0],".b_searchboxForm":[100,40,0],"#id_h":[-1,0,0],"#b_tween":[100,-1,1],"#b_results":[100,-1,1],"#b_context":[710,-1,1],".b_footer":[0,-1,0],"#b_notificationContainer":[-1,-1,0],"#ajaxMaskLayer":[-1,-1,0],img:[-1,-1,0],iframe:[-1,-1,0],a:[-1,-1,0]};var sj_plog=function(n,t,i){var s="/fd/ls/lsp.aspx",u=+new Date,f='{"T": "'+n+'", "FID": "CI", "Name": "'+t+'", "Text": "'+escape(i.replace(/"/g,""))+'"}',e="<E><T>Event.ClientInst<\/T><IG>"+_G.IG+"<\/IG><TS>"+u+"<\/TS><D>"+f+"<\/D><\/E>",o="<ClientInstRequest><Events>"+e+"<\/Events><STS>"+u+"<\/STS><\/ClientInstRequest>",r=sj_gx();r.open("POST","/fd/ls/lsp.aspx",!0),r.setRequestHeader("Content-Type","text/xml"),r.send(o)};(function(){function n(){if(document.querySelector&&document.querySelectorAll){var t=_w.bmt||1e4,n=30;sb_st(function(){function st(n){var t=n.id?"#"+n.id:n.className?"."+n.className:g;return n.tagName+t}function v(n){var t=0,i=0;if(n.offsetParent)do t+=n.offsetLeft,i+=n.offsetTop;while(n=n.offsetParent);return[t,i]}function a(n,t){var r=[t[0],t[1],n.offsetWidth,n.offsetHeight],e,f,o;if(n.tagName==="A"){if(e=n.getAttribute("h"),f=n.getAttribute("href"),e&&e.length>0||f===null||f.length===0||f.indexOf("javascript")===0||f==="#")return;r.push(i(n,"href")?w(n.href):"NA")}if(n.tagName==="IMG"||n.tagName==="IFRAME"){try{o=i(n,"src")?w(n.src):"NA"}catch(s){o="ER"}r.push(o)}n.tagName==="IMG"&&(r.push(i(n,"naturalWidth")?n.naturalWidth:-1),r.push(i(n,"fileSize")?n.fileSize:-1)),et&&r.push(window.sj_vv(n).join(".")),u+=st(n)+l+r.join(tt)+nt}function i(n,t){return typeof n[t]!="undefined"}function w(n){var i,t;return n.indexOf("data")===0?i="E":(t=document.createElement("A"),t.href=n,i=t.href.length>0?t.hostname===location.hostname.toLowerCase()?"B":ft(t.hostname):"R"),i}function ft(n){for(var i=["live.com","virtualearth.net","fbcdn.net","bing.net","akamaihd.net","twimg.com","quoracdn.net","4sqi.net"],t=0;t<i.length;t++)if(n.indexOf(i[t])>=0)return"W"+i[t].charAt(0);return n}function rt(t,i){return t>=i-n&&t<=i+n}var p=_w.VR,e=[],l=":",tt="X",nt=";",g="",d=document.documentElement,k=d.clientWidth,ot=d.clientHeight,u="S"+l+[0,0,k,ot].join(tt)+nt,et=i(window,"sj_vv"),f,c,h,s,o,r;a(document.body,v(document.body));for(f in p){var y=p[f],t=y[0],b=y[1],ut=!!y[2],it=document.querySelectorAll(f);for(c=0;c<it.length;c++)if(h=it[c],s=v(h),t=_G.RTL&&t>=0?k-t-h.offsetWidth:t,(t>=0&&!rt(s[0],t)||b>=0&&!rt(s[1],b))&&e.push(f),a(h,s),ut)for(o=document.querySelectorAll(f+">*"),r=0;r<o.length;r++)a(o[r],v(o[r]))}u=(e.length>0?"E"+l+e.join(","):g)+u,e.length>0&&sj_evt.fire("LayoutError",u),sj_plog("CI.BoxModel","Perf",u)},t)}}sj_evt.bind("onP1",n,!0),sj_evt.bind("ajax.postload",n,!0)})()