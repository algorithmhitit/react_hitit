(this.webpackJsonpasdf=this.webpackJsonpasdf||[]).push([[0],{42:function(e,t,n){e.exports=n(65)},47:function(e,t,n){},48:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(15),l=n.n(r),o=(n(47),n(5)),i=n(6),s=n(9),m=n(7),u=n(8),d=(n(48),n(69)),h=n(70),f=n(11),E=f.Link,p=(f.Element,f.Events),v=(f.animateScroll,f.scrollSpy);var g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){p.scrollEvent.register("begin",(function(e,t){console.log("begin",arguments)})),p.scrollEvent.register("end",(function(e,t){console.log("end",arguments)})),v.update()}},{key:"componentWillUnmount",value:function(){p.scrollEvent.remove("begin"),p.scrollEvent.remove("end")}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{fixed:"top",bg:"dark",variant:"dark"},c.a.createElement(d.a.Brand,{href:"#home"},"HIT-IT HomePage"),c.a.createElement(h.a,{className:"mr-auto"},c.a.createElement(E,{className:"test6",to:"homeInsideContainer",spy:!0,smooth:!0,duration:500},c.a.createElement(h.a.Link,{href:"#home"},"Home")),c.a.createElement(E,{className:"test6",to:"featuresInsideContainer",spy:!0,smooth:!0,duration:500},c.a.createElement(h.a.Link,{href:"#features"},"Features")),c.a.createElement(E,{className:"test6",to:"photoInsideContainer",spy:!0,smooth:!0,duration:500},c.a.createElement(h.a.Link,{href:"#pricing"},"Photo")))))}}]),t}(c.a.Component),b=(n(61),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",{class:"page-footer font-small blue pt-4"},c.a.createElement("div",{class:"container-fluid text-center text-md-left"},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col-md-2 mb-md-0 mb-3"}),c.a.createElement("div",{class:"col-md-5 mt-md-0 mt-3"},c.a.createElement("h4",{class:"text-uppercase"},"Contact US "),c.a.createElement("p",{class:"footer_contact"},"\uc704\uce58 : \uc804\ubd81\ub300 7\ud638\uad00 \uc9c0\ud558 7007\ud638"),c.a.createElement("p",{class:"footer_contact"},"\uc804\ud654 : 010-4311-0624"),c.a.createElement("p",{class:"footer_contact"},"\uba54\uc77c : wjddlstn0614@naver.com"),c.a.createElement("br",null)),c.a.createElement("div",{class:"col-md-3 mb-md-0 mb-3"},c.a.createElement("h1",null,c.a.createElement("img",{src:"./hitit_logo.png",alt:"",height:"42",width:"42"})," HIT-IT")))))}}]),t}(c.a.Component)),y=(n(62),n(68)),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(e){var t,n,a,c,r,l,o,i=!0;function s(e){var t=0,n=0;e.pageX||e.pageY?(t=e.pageX,n=e.pageY):(e.clientX||e.clientY)&&(t=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,n=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),o.x=t,o.y=n}function m(){i=!(document.body.scrollTop>n)}function u(){t=window.innerWidth,n=window.innerHeight,a.style.height=n+"px",c.width=t,c.height=n}function d(){if(i)for(var e in r.clearRect(0,0,t,n),l)Math.abs(p(o,l[e]))<4e3?(l[e].active=.3,l[e].circle.active=.6):Math.abs(p(o,l[e]))<2e4?(l[e].active=.1,l[e].circle.active=.3):Math.abs(p(o,l[e]))<4e4?(l[e].active=.02,l[e].circle.active=.1):(l[e].active=0,l[e].circle.active=0),f(l[e]),l[e].circle.draw();requestAnimationFrame(d)}function h(e){y.b.to(e,1+1*Math.random(),{x:e.originX-50+100*Math.random(),y:e.originY-50+100*Math.random(),ease:y.a.easeInOut,onComplete:function(){h(e)}})}function f(e){if(e.active)for(var t in e.closest)r.beginPath(),r.moveTo(e.x,e.y),r.lineTo(e.closest[t].x,e.closest[t].y),r.strokeStyle="rgba(156,217,249,"+e.active+")",r.stroke()}function E(e,t,n){var a=this;a.pos=e||null,a.radius=t||null,a.color=n||null,this.draw=function(){a.active&&(r.beginPath(),r.arc(a.pos.x,a.pos.y,a.radius,0,2*Math.PI,!1),r.fillStyle="rgba(156,217,249,"+a.active+")",r.fill())}}function p(e,t){return Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)}!function(){t=window.innerWidth,n=window.innerHeight,o={x:t/2,y:n/2},(a=document.getElementById("large-header")).style.height=n+"px",(c=document.getElementById("demo-canvas")).width=t,c.height=n,r=c.getContext("2d"),l=[];for(var e=0;e<t;e+=t/20)for(var i=0;i<n;i+=n/20){var s=e+Math.random()*t/20,m=i+Math.random()*n/20,u={x:s,originX:s,y:m,originY:m};l.push(u)}for(var d=0;d<l.length;d++){for(var h=[],f=l[d],v=0;v<l.length;v++){var g=l[v];if(f!==g){for(var b=!1,y=0;y<5;y++)b||void 0===h[y]&&(h[y]=g,b=!0);for(y=0;y<5;y++)b||p(f,g)<p(f,h[y])&&(h[y]=g,b=!0)}}f.closest=h}for(var d in l){var j=new E(l[d],2+2*Math.random(),"rgba(255,255,255,0.3)");l[d].circle=j}}(),function(){for(var e in d(),l)h(l[e])}(),function(){"ontouchstart"in window||window.addEventListener("mousemove",s);window.addEventListener("scroll",m),window.addEventListener("resize",u)}()}},{key:"render",value:function(){return c.a.createElement("div",{id:"large-header",class:"large-header"},c.a.createElement("canvas",{id:"demo-canvas"}),c.a.createElement("h1",{class:"main-title"},"HIT-IT ",c.a.createElement("br",null)," ",c.a.createElement("span",{class:"thin"},"2020")))}}]),t}(c.a.Component),w=(n(63),n(40)),O=n.n(w),k=n(41),C=n.n(k),I=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(O.a,{cssModule:C.a},c.a.createElement("div",{"data-src":"https://i.imgur.com/qdCqCHS.jpg"}),c.a.createElement("div",{"data-src":"https://i.imgur.com/yfJfkl8.jpg"}),c.a.createElement("div",{"data-src":"https://i.imgur.com/69oeX5c.jpg"}),c.a.createElement("div",{"data-src":"https://i.imgur.com/xgjQNO5.jpg"}))}}]),t}(c.a.Component),x=f.Element,M=(f.scroller,function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{id:"scroll-animate-main"},c.a.createElement("div",{class:"wrapper-parallax"},c.a.createElement("header",null,c.a.createElement(g,null)),c.a.createElement(x,{name:"homeInsideContainer"},c.a.createElement(j,null)),c.a.createElement(x,{name:"featuresInsideContainer"},c.a.createElement("section",{class:"black"},c.a.createElement("div",{class:"content"},c.a.createElement("h1",{align:"center"}," \ub3d9\uc544\ub9ac \uc18c\uac1c"),c.a.createElement("br",null),c.a.createElement("p",null,"Hit it\uc740 \ub3c4\ub798\ud558\uace0\uc788\ub294 \uc815\ubcf4\ud654\uc2dc\ub300\uc5d0 \uc788\uc5b4 \ud544\uc218\ubd88\uac00\uacb0\ud55c \uc6f9 \ubd84\uc57c\uc5d0 \uc911\uc810\uc744 \ub450\uace0 \ud65c\ub3d9\ud558\ub294 \uc804\ubd81\ub300\ud559\uad50 \uc720\uc77c\uc758 \uc6f9\ub3d9\uc544\ub9ac\uc785\ub2c8\ub2e4."),c.a.createElement("p",null,"2012\ub144 \ucc3d\uc124 \uc774\ud6c4 \uc774\ub7ec\ud55c \uc6f9\uae30\uc220\uc5d0 \uad00\uc2ec\uc774 \uc788\ub294 \ud559\uc0dd\ub4e4\uc774 \ubaa8\uc5ec \ud504\ub85c\uadf8\ub798\ubc0d \uc2a4\ud130\ub514\ub098 \ud648\ud398\uc774\uc9c0 \uc81c\uc791 \uc2e4\uc2b5\uc744 \ud1b5\ud574 \uc6f9\uc5d0 \ub300\ud55c \uae4a\uc774 \uc788\ub294 \ud0d0\uad6c\ub97c \uc9c4\ud589\ud574\uc624\uace0 \uc788\uc2b5\ub2c8\ub2e4."),c.a.createElement("p",null,"\ub610\ud55c \uc7ac\ud559\uc0dd\uacfc \uc2e0\uc785\uc0dd\uac04\uc758 \uc2a4\ud130\ub514 \ud65c\ub3d9\uacfc MT, \uccb4\uc721\ub300\ud68c \ub4f1\uc758 \ub2e4\uc591\ud55c \uce5c\ubaa9\ud65c\ub3d9\uc744 \ud1b5\ud574 \ub3d9\uc544\ub9ac\uc6d0\ub07c\ub9ac\uc758 \ud654\ud569\ub3c4 \ub3c4\ubaa8\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.")))),c.a.createElement(x,{name:"photoInsideContainer"},c.a.createElement("section",{class:"gray"},c.a.createElement("div",{class:"content"},c.a.createElement(I,null)))),c.a.createElement("section",{class:"black"},c.a.createElement("div",{class:"content"},c.a.createElement("h1",{align:"center"}," \uc8fc\uc694 \ud65c\ub3d9"),c.a.createElement("br",null),c.a.createElement("p",null,"HIT-IT\uc740 \uc6f9\ub3d9\uc544\ub9ac\ub85c\uc11c \uc6f9\uae30\uc220 \ub2a5\ub825\uc744 \uac1c\ubc1c\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),c.a.createElement("p",null,"SCPC(\uc0bc\uc131 \ud504\ub85c\uadf8\ub798\ubc0d \uacbd\uc9c4\ub300\ud68c), ACM-ICPC \ub300\ud68c, \uc54c\uace0\ub9ac\uc998 \uc2a4\ud130\ub514 \ub4f1\uc758 \ud65c\ub3d9\uc744 \ud1b5\ud574 \ud504\ub85c\uadf8\ub798\ubc0d \uae30\ucd08 \ub2a5\ub825\uc778 \uc54c\uace0\ub9ac\uc998\uc744 \uc124\uacc4\ud558\ub294 \ub2a5\ub825\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\uace0 \ud648\ud398\uc774\uc9c0 \uc81c\uc791 \uc2a4\ud130\ub514, Python \uc2a4\ud130\ub514\ub97c \ud1b5\ud574 \uc6f9 \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uc775\ud788\uace0 \uc788\uc2b5\ub2c8\ub2e4."),c.a.createElement("p",null,"\ub610\ud55c \ucea1\uc2a4\ud1a4 \ub514\uc790\uc778\uacfc \ucef4\ud4e8\ud130 \uacf5\ud559\ubd80 \uc791\ud488\uacbd\uc9c4\ub300\ud68c \ub4f1\uc758 \ucc38\uac00\ub97c \ud1b5\ud574 \uc2e4\uc81c \ud504\ub85c\uadf8\ub798\ubc0d \uc774\uc6a9\ud55c \uc81c\ud488\uc744 \ub9cc\ub4dc\ub294 \uacbd\ud5d8\uc744 \ud558\uace0\uc788\uc2b5\ub2c8\ub2e4."),c.a.createElement("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \ub3d9\uc544\ub9ac \uce5c\ubaa9 \ud65c\ub3d9\uacfc \uc878\uc5c5 \uc120\ubc30 \uba58\ud1a0\ub9c1 \ub4f1\uc73c\ub85c \uc815\ubcf4 \uad50\ub958 \ubc0f \uae30\uc220 \uacf5\uc720 \ub4f1\uc744 \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."))),c.a.createElement("footer",null,c.a.createElement(b,null)))))}}]),t}(c.a.Component));n(64);l.a.render(c.a.createElement(M,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.32027887.chunk.js.map