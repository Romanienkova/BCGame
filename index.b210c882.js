!function(){"use strict";window.onload=function(){var e=document.querySelector(".parallax");if(e){var t=document.querySelector(".images-parallax__player1"),a=document.querySelector(".images-parallax__players2"),n=document.querySelector(".images-parallax__coins"),o=0,r=0,c=0,s=0;function l(){o+=.04*(c-o),r+=.04*(s-r),t.style.cssText="transform: translate(".concat(o/40,"%, ").concat(r/40,"%);"),a.style.cssText="transform: translate(".concat(o/20,"%,").concat(r/20,"%);"),n.style.cssText="transform: translate(".concat(o/30,"%,").concat(r/30,"%);"),requestAnimationFrame(l)}l(),e.addEventListener("mousemove",(function(t){var a=e.offsetWidth,n=e.offsetHeight,o=t.pageX-a/2,r=t.pageY-n/2;c=o/a*100,s=r/n*100}))}}}();
//# sourceMappingURL=index.b210c882.js.map
