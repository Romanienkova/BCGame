window.onload=function(){const e=document.querySelector(".parallax");if(e){const a=document.querySelector(".images-parallax__player1"),s=document.querySelector(".images-parallax__players2"),n=document.querySelector(".images-parallax__coins"),o=40,r=20,l=30,c=.04;let i=0,m=0,u=0,f=0;function t(){i+=(u-i)*c,m+=(f-m)*c,a.style.cssText=`transform: translate(${i/o}%, ${m/o}%);`,s.style.cssText=`transform: translate(${i/r}%,${m/r}%);`,n.style.cssText=`transform: translate(${i/l}%,${m/l}%);`,requestAnimationFrame(t)}t(),e.addEventListener("mousemove",(function(t){const a=e.offsetWidth,s=e.offsetHeight,n=t.pageX-a/2,o=t.pageY-s/2;u=n/a*100,f=o/s*100}))}};
//# sourceMappingURL=index.6c7613a3.js.map