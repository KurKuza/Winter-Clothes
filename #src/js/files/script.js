"use strict"

// Ждем загрузку контента
window.onload = function () {
	const parallax = document.querySelector('.header-fullscreen');

	if (parallax) {
		const image1 = document.querySelector('.parallax-images__image-1');
		const image2 = document.querySelector('.parallax-images__image-2');
		const image3 = document.querySelector('.parallax-images__image-3');
		const image4 = document.querySelector('.parallax-images__image-4');
		const image5 = document.querySelector('.parallax-images__image-5');

		// Коэффициенты
		const forImage1 = 1/1.3;
		const forImage2 = 1.1/1.3;
		const forImage3 = 1.5/1.3;
		const forImage4 = 1.25/1.3;
		const forImage5 = 2/1.3;

		// Скорость анимации
		const speed = 0.05;

		// Объявление переменных
		let positionX = 0, positionY = 0;
		let coordXprocent = 0, coordYprocent = 0;

		function setMouseParallaxStyle() {
			const distX = coordXprocent - positionX;
			const distY = coordYprocent - positionY;

			positionX = positionX + (distX * speed);
			positionY = positionY + (distY * speed);

			// Передаем стили
			image1.style.cssText = `transform: translate(${positionX / forImage1}%,${positionY / forImage1}%);`;
			image2.style.cssText = `transform: translate(${positionX / forImage2}%,${positionY / forImage2}%);`;
			image3.style.cssText = `transform: translate(${positionX / forImage3}%,${positionY / forImage3}%);`;
			image4.style.cssText = `transform: translate(${positionX / forImage4}%,${positionY / forImage4}%);`;
			image5.style.cssText = `transform: translate(${positionX / forImage5}%,${positionY / forImage5}%);`;

			requestAnimationFrame(setMouseParallaxStyle);
		}
		setMouseParallaxStyle();

		parallax.addEventListener("mousemove", function (e) {
			// Получение ширины и высоты блока
			const parallaxWidth = parallax.offsetWidth;
			const parallaxHeight = parallax.offsetHeight;

			// Ноль по середине
			const coordX = e.pageX - parallaxWidth / 2;
			const coordY = e.pageY - parallaxHeight / 2;

			// Получаем проценты
			coordXprocent = coordX / parallaxWidth * 100;
			coordYprocent = coordY / parallaxHeight * 100;
		});

		// Parallax при скролле

		// let thresholdSets = [];
		// for (let i = 0; i <= 1.0; i += 0.005) {
		// 	thresholdSets.push(i);
		// }
		// const callback = function (entries, observer) {
		// 	const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
		// 	setParallaxItemsStyle(scrollTopProcent);
		// };
		// const observer = new IntersectionObserver(callback, {
		// 	threshold: thresholdSets
		// });

		// observer.observe(document.querySelector('.advantages'));

		// function setParallaxItemsStyle(scrollTopProcent) {
		// 	content.style.cssText = `transform: translate(0%,-${scrollTopProcent / 9}%);`;
		// 	mountains.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 6}%);`;
		// 	human.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 3}%);`;
		// }

	}
}