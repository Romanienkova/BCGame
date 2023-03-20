'use strict';

window.onload = function () {
   const parallax = document.querySelector('.parallax');

   if (parallax) {
      const player1 = document.querySelector('.images-parallax__player1');
      const players2 = document.querySelector('.images-parallax__players2');
      const coins = document.querySelector('.images-parallax__coins');

      const forPlayer1 = 40;
      const forPlayers2 = 25;
      const forCoins = 30;

      const speed = 0.05;

      let positionX = 0,
         positionY = 0;
      let coordXprocent = 0,
         coordYprocent = 0;

      function setMouseParallaxStyle() {
         const distX = coordXprocent - positionX;
         const distY = coordYprocent - positionY;

         positionX = positionX + distX * speed;
         positionY = positionY + distY * speed;

         player1.style.cssText = `transform: translate(${
            positionX / forPlayer1
         }%, ${positionY / forPlayer1}%);`;

         players2.style.cssText = `transform: translate(${
            positionX / forPlayers2
         }%,${positionY / forPlayers2}%);`;

         coins.style.cssText = `transform: translate(${positionX / forCoins}%,${
            positionY / forCoins
         }%);`;

			requestAnimationFrame(setMouseParallaxStyle);
      }
      setMouseParallaxStyle();

      parallax.addEventListener('mousemove', function (e) {
         const parallaxWidth = parallax.offsetWidth;
         const parallaxHeight = parallax.offsetHeight;

         const coordX = e.pageX - parallaxWidth / 2;
         const coordY = e.pageY - parallaxHeight / 2;

         coordXprocent = (coordX / parallaxWidth) * 100;
         coordYprocent = (coordY / parallaxHeight) * 100;
      });
   }
};
