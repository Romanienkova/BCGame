window.onload=function(){const e=document.querySelector(".parallax");if(e){const n=document.querySelector(".images-parallax__player1"),r=document.querySelector(".images-parallax__players2"),a=document.querySelector(".images-parallax__coins"),o=40,l=25,c=30,f=.05;let m=0,i=0,u=0,y=0;function t(){m+=(u-m)*f,i+=(y-i)*f,n.style.cssText=`transform: translate(${m/o}%, ${i/o}%);`,r.style.cssText=`transform: translate(${m/l}%,${i/l}%);`,a.style.cssText=`transform: translate(${m/c}%,${i/c}%);`,requestAnimationFrame(t)}t(),e.addEventListener("mousemove",(function(t){const s=e.offsetWidth,n=e.offsetHeight,r=t.pageX-s/2,a=t.pageY-n/2;u=r/s*100,y=a/n*100}));let p=[];for(let d=0;d<1;d+=.005)p.push(d);function s(e){content.style.cssText=`transform: translate(0%,-${e/9}%);`,a.parentElement.style.cssText=`transform: translate(0%,-${e/6}%);`,n.parentElement.style.cssText=`transform: translate(0%,-${e/6}%);`,r.parentElement.style.cssText=`transform: translate(0%,-${e/3}%);`}new IntersectionObserver((function(t,n){s(window.pageYOffset/e.offsetHeight*100)}),{threshold:p}).observe(document.querySelector(".content"))}};
//# sourceMappingURL=index.28b48ce2.js.map
