var sa_autosuggest=function(a){var Wb=-2;a.m=8;a.d=100;_w=window;_d=document;sb_de=_d.documentElement;sb_ie=!!_w.ActiveXObject;sb_i6=sb_ie&&!_w.XMLHttpRequest;function ob(a){return _d.getElementById(a)}sb_st=_w.setTimeout;sb_ct=_w.clearTimeout;sb_gt=function(){return(new Date).getTime()};sj_evt=new function(){var a={},b=this;function c(b){return a[b]||(a[b]=[])}b.fire=function(e){for(var a=c(e),d=a.e=arguments,b=0;b<a.length;b++)if(a[b].d)sb_st(Qb(a[b],d),a[b].d);else a[b](d)};b.bind=function(f,a,d,e){var b=c(f);a.d=e;b.push(a);d&&b.e&&a(b.e)};b.unbind=function(e,d){for(var c=0,b=a[e];b&&c<b.length;c++)if(b[c]==d){b.splice(c,1);break}}};function Qb(a){var b=arguments;return function(){a.apply(null,[].slice.apply(b).slice(1))}}sj_cook=new function(){var a=this;a.get=function(d,c){var a=_d.cookie.match(new RegExp("\\b"+d+"=[^;]+"));if(c&&a){var b=a[0].match(new RegExp("\\b"+c+"=([^&]*)"));return b?b[1]:null}return a?a[0]:null};a.set=function(c,d,k,j,i){var e,f=d+"="+k,b=a.get(c);if(b){var g=a.get(c,d);e=g?b.replace(d+"="+g,f):b+"&"+f}else e=c+"="+f;var h=location.hostname.match(/([^.]+\.[^.]*)$/);_d.cookie=e+(h?";domain="+h[0]:"")+(j?";expires="+(new Date((new Date).getTime()+6.3072e10)).toGMTString():"")+(i?";path="+i:"")}};function c(d,c,b){var a=_d.createElement(d);if(c)a.id=c;if(b)a.className=b;return a}function q(c,a,b,d){sb_ie?c.attachEvent("on"+a,b):c.addEventListener(a,b,d)}function Ac(c,a,b,d){sb_ie?c.detachEvent("on"+a,b):c.removeEventListener(a,b,d)}function mb(a){return sb_ie?event:a}function wc(a){return sb_ie?event.srcElement:a.target}sj_b=_d.body;function xc(b){var a=c("style");_d.getElementsByTagName("head")[0].appendChild(a);if(sb_ie)a.styleSheet.cssText=b;else a.appendChild(_d.createTextNode(b))}function yc(a){if(sb_ie)event.returnValue=false;else a.preventDefault()}function zc(a){if(sb_ie)a.cancelBubble=true;else a.stopPropagation()}function Pb(a,c,b){while(a&&a!=(b||sj_b)){if(a==c)return!0;a=a.parentNode}return!1}function Nb(d,c,b){var a;try{if(d.dispatchEvent){var e="HTMLEvents";if(c!="submit"){e="MouseEvents";a=_d.createEvent(e);a.initEvent(c,true,true,_w,0,0,0,0,0,false,false,false,false,0,b)}else{a=_d.createEvent(e);a.initEvent(c,true,true)}if(b)a.sourceElement=b;d.dispatchEvent(a)}else if(b){a=_d.createEventObject();a.sourceElement=b;d.fireEvent("on"+c,a)}else d.fireEvent("on"+c)}catch(f){}}var sb="getElementsByTagName",K="innerHTML",Kb=sj_b.textContent?"textContent":"innerText",b="appendChild",J="className",y="div",G="style",m="value",h="length",fb="display",Cb="nextSibling",dc="previousSibling",Cc="parentNode",Db="onmousedown",lb="li",Lb="SRCHHPGUSR",Ab="AS",Gb="sa_sg",Ec="as_sc",s=["pq","sc","sp","qs","sk"],Vb="<strong>",ac="</strong>",l=this,Rb=_d[sb]("head")[0],V={},nb=sa_loc,ab={AS:function(){return a.eWH?nb.H_AS:null}},v,j=ob(a.f),db=a.i,e=ob(db),H,R,O,Q,P,Hb,C,sc,Y,u,p,cb,Ob,o,X,M,N,gb,bb,Mb,Xb,pb={},w,eb,Dc,k,i,U,W,ib=typeof a.cb=="function"?a.cb:null,S=0,vb={},n=[],d,hb,I=null,g,f,t,Bc,L=0,kb=false,oc=2,Sb=0,Ub=4,qb=0,Ib=0,wb=0,uc=new RegExp("^\\s*","g"),fc=new RegExp("\\s+","g"),Nb,ub,xb,x;sa_pi=new Image;l.init=function(a){if(w=l.isDisabled())return;Y=a;l.customInit();rc()};l.isDisabled=function(){return sj_cook.get(Lb,Ab)==0};l.enable=function(a){w=!a;sj_cook.set(Lb,Ab,a?1:0,1,"/")};function rc(){i=a.nSb?0:1;U=a.nw;if(i){H=D("qs");H[m]="n";R=D("pq");O=D("sc");Q=D("sp");P=D("sk");j[b](H);j[b](P)}eb=a.eHS?1:0;N="";gb=e.value.toLowerCase();Ib=a.d;wb=a.t;bb=a.m?a.m:5;Mb=a.eHS||a.ePN?0:1;Xb=a.mh;if(a.p0)for(var d=a.p0.split(","),c=0;c<d[h];c++)pb[d[c]]=1;Ob=[a.u,"&mkt=",a.mkt,"&type=cb&cb=",Y,".apiCB"].join("");o="s+";a.ePN&&(o+="p+");a.eAN&&(o+="a+");a.eDN&&(o+="d+");a.eVN&&(o+="v+");a.eLO&&(o+="l+");X="&sid="+a.sid;if(a.hss&&_w.sessionStorage){M=1;SessionStorage.init(Y)}sj_evt.bind("onASKeyup"+db,mc,1);sj_evt.bind("onASClick"+db,lc,1);q(j,"submit",jb);q(e,"keydown",hc);q(e,"blur",Eb);q(e,"paste",nc)}function F(a){if(!a||a&&a.url)e[m]=d;else e[m]=n[a.ord];f=a;x&&x.AS.onSearchBoxChanged()}function hc(a){if(sb_ie)kb=a.keyCode==229;x&&x.AS.OnKeyDown(a);xb&&xb(a);if(k&&a.keyCode==27){r();B(a)}}function lc(){C&&sb_ct(C);if(W||w||k)return;W=1;E();Z();g=null}function Fb(){hb=d==""?null:d}function E(){d=e[m].replace(uc,"").replace(fc," ").toLowerCase()}function ic(d,e){p[K]="";n=[];var b=[],g,s=[],k=0,j=0,r=0;if(M){var o={},u=pb[d[0].Type];o.Type="HS";o.Suggests=getSessionStorageHistory(e);d.splice(u?1:0,0,o)}for(var g,q=0,c;q<d[h];q++){g=d[q];c=g.Type;s[b.length]=c;b=b.concat(g.Suggests);if(c=="HS")j+=g.Suggests.length}if(Sb)b=addQueryToSuggestions(b);for(var v=Math.max(a.cHS,bb-(b[h]-j)),f=0,t,c,i,m;k<Math.min(b[h],bb);f++){i=b[f];if(!i)break;(c=s[f])&&ab[c]&&(t=ab[c]())&&tc(t,f==0);m=i.Type=="HS";if(!(m&&r==v))try{if(jc(i,k)){k++;m&&r++}}catch(y){}}if(!j)I=e;N=e;l.ShowDropDown();x&&x.AS.OnAsUpdated(e)}function jc(e,j){var f=e.Type,a=c(lb,"",Gb+" "+Gb+f),d,i=V[f]||kc;a.src=f;a.ord=j;a.sk=e.Sk;a.onmouseover=function(){T(this)};a.onmouseout=z;a[Db]=Zb;a.onmouseup=cc;a=i(e,a);d=a[sb]("div")[0][Kb];for(var g=0;g<n[h];g++)if(n[g]==d)return 0;a.rawText=d;n.push(d);p[b](a);return 1}function tc(e,d){var a=c(lb,"","sa_hd"+(d?"":"_pad"));a.hd=1;a[K]=e;p[b](a)}function tb(b,a,e){var d=a?c(a,"",e):_d.createTextNode(b);a&&(d[Kb]=b);return d}function Jb(h,g,d){for(var c=[],a=0,e,f=h.split(Vb),a=0;a<f.length;a++)c=c.concat(f[a].split(ac));for(a=0;a<c.length;a++)if(c[a]){if(a%2==0)e=tb(c[a],d?"span":0,d);else e=tb(c[a],"strong",d);g[b](e)}}function Zb(a){a=mb(a);var b=a.button;if(b==2)B(a);else{t=this;L=1;ub&&ub()}}function cc(){if(t&&t==this){F(t);jb();i=i&&!t.url;if(i){i&&sj_evt.fire("onSearch",j);if(Nb){Ac(j,"submit",jb);Nb(j,"submit")}i&&j.submit()}t=null;L=0}}function Yb(){var e=c("ul"),h,g,d=[],f=0;if(a.lmh)d[f++]=yb(nb.L_MH,a.lmh);if(f<oc&&a.lp)d[f++]=yb(nb.L_P,a.lp);d[1]&&e[b](d[1]);d[0]&&e[b](d[0]);return e}function yb(i,f,g,h,e){var d=c(lb,"",h),a=c("a");a.handler=g;a.newWin=e;f&&(a.href=f);e&&(a.target="_blank");a.onmouseup=ec;a[K]=i;a[Db]=bc;d[b](a);return d}function bc(a){B(mb(a))}function ec(){var a=!this.newWin;if(this.handler)a=a&&this.handler();a&&r()}function B(a){zc(a);yc(a)}function nc(){sb_st(function(){E();zb()},50)}function D(b){var a=c("input");a.name=b;a.type="hidden";return a}function A(a){switch(a){case"sc":return n[h]+"-"+N[h];case"pq":return d;case"sp":return f.ord+1;case"qs":return f.src;case"sk":return f.sk}}function rb(){for(var b=[],a=0;a<s[h];a++)b=b.concat("&",s[a],"=",A(s[a]));return b.join("")}function Tb(){for(var b={},a=0;a<s[h];a++)b[s[a]]=A(s[a]);return b}function gc(){var a=0,d=_d.selection,c=e.selectionStart,b;if(c!=null)a=c;else if(d&&e.createTextRange){b=e.createTextRange();b.setEndPoint("EndToStart",d.createRange());a=b.text[h]}return a}function pc(){Hb&&sb_ct(Hb)}function qc(b){return!eb||M?false:!a.eHO||I==null?true:b.indexOf(I)!=0}function zb(){if(!qb){qb=1;Bb()}}function Bb(){d!=""&&Z();var a=Ib;if(wb)a*=1<<Math.max(0,S-Ub+1)/2;sb_st(Bb,a)}function Z(){hb!=d&&d[h]>=Mb&&vc()}function vc(){++S;var e=[Ob,"&q=",encodeURIComponent(d),"&cp=",gc()],f=o;if(a.h&&d!="")f+="h+";if(qc(d)){e.push(X,"&qt=",sb_gt());f+="hs+"}gb!=""&&e.push("&bq=",encodeURIComponent(gb));a.ds&&e.push("&ds=",a.ds);var g=c("script");Rb[b](g);g.src=e.concat("&o=",f.slice(0,-1)).join("");Fb()}function kc(d,a){var e=c(y,"","sa_tm");a[b](e);a.url=d.Url;Jb(d.Txt,e);return a}function T(a){z();a[J]=a[J]+" sa_hv";g=a}function z(){if(g){g[J]=g[J].replace(" sa_hv","");g=null}}l.customInit=function(){var d=ob(a.c?a.c:"sw_as");v=c(y,"","sa_as");q(sj_b,"mouseup",function(b){var a=wc(mb(b));if(!Pb(a,v)&&!Pb(a,e)){L=0;Eb()}});d[b](v);u=c(y,"","sw_b3");v[b](u);p=c("ul","","sa_drw");u[b](p);cb=c(y,"","sa_om");var f=Yb();cb[b](f);u[b](cb);d[G][fb]="block"};l.apiCB=function(h){if(w)return;S--;var a="",g=[],b,c=h.AS;try{E();a=c.Query;var e="_"+a,f=vb[e];f&&Rb.removeChild(f);vb[e]=null;if(a!=d)return;b=c.FullResults==1;if(!(g=c.Results)){C=sb_st(r,50);if(eb&&b)I=a;n=[];return}}catch(i){return}ic(g,a,b)};l.ShowDropDown=function(){if(!k){v[G][fb]="block";u[G].height="auto";u[G].width=e.parentNode.offsetWidth+Wb+"px";k=true}};function r(){if(k){v[G][fb]="none";g=hb=null;W=k=false;d=""}}function Eb(){if(!L)sc=sb_st(r,150)}function jb(d){var a=i&&!U,c=!!ib;if(f){if(f.ping)sa_pi.src=f.ping+(f.addPingInst?rb():"");if(f.url){_w.location=f.url+(f.addInst?rb():"");c=1;a=!U}else if(i){H[m]=f.src;R[m]=A("pq");Q[m]=A("sp");P[m]=f.sk;j[b](R);j[b](Q)}}if(i&&k){O[m]=A("sc");j[b](O)}!(w=a)&&Fb();c&&d&&B(d);pc();r();ib&&ib(e,Tb())}function mc(e){if(w)return;var a=e[1];if(k&&a==27){r();B(e.caller[0])}if(a>8&&a<40&&a!=38&&a!=32&&a!=13||a>111&&a<146)return;switch(a){case 38:if(k){if(kb)return;var b=p.lastChild;if(g)if(!(b=c(dc))){F();z();break}F(b);T(b)}break;case 40:var b=null;if(!k){E();Z();return}if(kb)return;if(!(g&&(b=c(Cb))))if(g){F();z();break}else{b=g=p.firstChild;if(b.hd)b=c(Cb)}F(b);T(b);break;case 13:if(!i)return;default:f=null;if(g){z();g=null}C&&sb_ct(C);E();if(d[h]==0){r();return}zb()}function c(b){var a=g;while(a=a[b])if(!a.hd)return a;return null}}l.sid=function(b){a.sid=b;X="&sid="+b};V.TR=V.WE=function(a,d){var f=a.Url.indexOf("/")==0,h=c(y,"","sa_tm"),e=c("img");e.src=f?"http://www.bing.com"+a.Img.src:a.Img.src;e.alt=a.Img.alt;e.width=a.Img.w;e.height=a.Img.h;var g=c(y,"","sa_ds");d[b](e);d[b](h);d[b](g);Jb(a.Txt,h);g[K]=a.Meta1;d.url=(f?"http://www.bing.com"+a.Url:a.Url)+"&FORM="+j.form.value;d.addInst=1;return d};ab.PN=function(){return d==""?a.tPN||sa_loc&&a.ePN&&sa_loc.H_PN:null};xc(".sa_as{display:none;position:absolute;top:-1px;left:1px}.sa_as ul{list-style:none}.sw_b3{border:1px solid #ccc;background:#fff;overflow:visible}.sa_drw{padding:.35em 0 0;background:#fff;margin:0}.sa_drw li{display:block;white-space:nowrap}.sa_sg,.sa_hd,.sa_hd_pad{font-size:120%;padding:.2em .55em;color:#737373;cursor:pointer}.sa_sg strong{color:#000}.sa_hd,.sa_hd_pad{padding-left:.7em;text-transform:uppercase;font-size:95%;color:#555;cursor:default}.sa_hd_pad{padding-top:.5em}.sa_sgWE,.sa_sgTR,.sa_sgVN{background:#f8f8f8}.sa_sgHS,.sa_sgHS strong{color:#639}.sa_sgDN .sa_tm,.sa_sgWE .sa_tm,.sa_sgTR .sa_tm{font-weight:bold}.sa_sgPN{color:#737373}.sa_sgWE img,.sa_sgTR img{float:left;margin:-.2em .5em 0 -.5em}.sa_ds{color:#737373;margin-top:.2em;font-size:90%}.sa_sgDN .sa_url{color:#568e1a;font-size:85%}.sa_vnh,.sa_tm strong.sa_vnh{color:#e66400}.sa_sgVN{padding:.35em .55em;position:relative;border-top:1px solid #ededed}.sa_sg .sa_ic{background:url(/fd/s/as_vn_icons.png) 0 0 no-repeat;width:20px;height:20px;position:absolute;top:5px;right:10px}.sa_sg .sa_ic_VI{background-position:-42px 0}.sa_sg .sa_ic_VV{background-position:-63px 0}.sa_sg .sa_ic_VT{background-position:0 0}.sa_sg .sa_ic_VM{background-position:-84px 0}.sa_sg .sa_ic_VS{background-position:-21px 0}.sa_sg .sa_ic_VA{background-position:-105px 0}.sa_sg .sa_ic_VG{background-position:-126px 0}.sa_om{background:#f8f8f8;border-top:1px solid #ccc;font-size:90%;height:1.6em;line-height:1.6em;padding:.16em 0 .2em 0}.sa_om a{color:#5077bb}.sa_om li{float:right;margin-left:1.3em}.sa_om ul{margin:0 .5em;padding:0}.sa_drw .sa_hv{background:#ededed}.sa_hv .sa_tm,.sa_hv .sa_url,.sa_om a:hover{text-decoration:underline}");q(e,"keyup",function(b){sj_evt.fire("onASKeyup"+a.i,b.keyCode)});q(e,"click",Qb(sj_evt.fire,"onASClick"+a.i))};sa_loc={};sa_loc.H_AS="\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438 \u0432 \u0406\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0456";sa_loc.H_PN="\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456 \u0437\u0430\u0440\u0430\u0437 \u0437\u0430\u043f\u0438\u0442\u0438";sa_loc.L_DP="\u0412\u0438\u043c\u043a\u043d\u0443\u0442\u0438 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u0456\u0439 \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u0434";sa_loc.L_H="\u0429\u043e \u0446\u0435?";sa_loc.L_HS_OFF="\u0412\u0438\u043c\u043a\u043d\u0443\u0442\u0438 \u0432\u0435\u0434\u0435\u043d\u043d\u044f \u0436\u0443\u0440\u043d\u0430\u043b\u0443";sa_loc.L_HS_ON="\u0423\u0432\u0456\u043c\u043a\u043d\u0443\u0442\u0438 \u0432\u0435\u0434\u0435\u043d\u043d\u044f \u0436\u0443\u0440\u043d\u0430\u043b\u0443";sa_loc.L_MH="\u041a\u0435\u0440\u0443\u0432\u0430\u043d\u043d\u044f \u0436\u0443\u0440\u043d\u0430\u043b\u043e\u043c \u043f\u043e\u0448\u0443\u043a\u0443";sa_loc.L_P="\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438";sa_loc.L_SA="\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u0432\u0441\u0456 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438"