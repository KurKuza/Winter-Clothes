'use strict'



// const mainElement = document.documentElement;
// const mainElementHeight = mainElement.clientHeight;

// if (animItems.length > 0) {
// 	function animOnScroll(params) {
// 		for (let index = 0; index < animItems.length; index++) {
// 			const animItem = animItems[index];

// 		}
// 	}
// }


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
		const forImage1 = 1 / 1.3;
		const forImage2 = 1.1 / 1.3;
		const forImage3 = 1.5 / 1.3;
		const forImage4 = 1.25 / 1.3;
		const forImage5 = 2 / 1.3;

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

		// observer.observe(document.querySelector('.advantages__text'));

		// function setParallaxItemsStyle(scrollTopProcent) {
		// 	content.style.cssText = `transform: translate(0%,-${scrollTopProcent / 9}%);`;
		// 	mountains.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 6}%);`;
		// 	human.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 3}%);`;
		// }

	}
}



// функция определяет нахождение элемента в области видимости
// если элемент видно - возвращает true
// если элемент невидно - возвращает false
function isOnVisibleSpace(element) {
	var bodyHeight = window.innerHeight;
	var elemRect = element.getBoundingClientRect();
	var offset = elemRect.top;// - bodyRect.top;
	if (offset < 0) return false;
	if (offset > bodyHeight) return false;
	return true;
}



// глобальный объект с элементами, для которых отслеживаем их положение в зоне видимости
var listenedElements = [];
// обработчик события прокрутки экрана. Проверяет все элементы добавленные в listenedElements 
// на предмет попадания(выпадения) в зону видимости
window.onscroll = function () {
	listenedElements.forEach(item => {
		// проверяем находится ли элемент в зоне видимости
		var result = isOnVisibleSpace(item.el);

		// если элемент находился в зоне видимости и вышел из нее
		// вызываем обработчик выпадения из зоны видимости
		if (item.el.isOnVisibleSpace && !result) {
			item.el.isOnVisibleSpace = false;
			item.outVisibleSpace(item.el);
			return;
		}
		// если элемент находился вне зоны видимости и вошел в нее
		// вызываем обработчик попадания в зону видимости
		if (!item.el.isOnVisibleSpace && result) {
			item.el.isOnVisibleSpace = true;
			item.inVisibleSpace(item.el);
			return;
		}
	});
}

// функция устанавливает обработчики событий 
// появления элемента в зоне видимости и
// выхода из нее
function onVisibleSpaceListener(elementId, cbIn, cbOut) {
	// получаем ссылку на объект элемента
	var el = document.querySelector(elementId);
	// добавляем элемент и обработчики событий 
	// в массив отслеживаемых элементов
	listenedElements.push({
		el: el,
		inVisibleSpace: cbIn,
		outVisibleSpace: cbOut
	});
}

// устанавливаем обработчики для элемента "video"
onVisibleSpaceListener(".info__image",
	el => {
		// функция вызываемая при попадании элемента в зону видимости
		// тут вставляем код запуска анимации
		// el.innerHTML = "111111111111111111111111";

	},
	el => {
		// функция вызываемая при выпадении элемента из зоны видимости
		// тут вставляем код остановки анимации
		// el.innerHTML = "000000000000000000000000";
	}
);










