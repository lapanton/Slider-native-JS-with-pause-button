
(function() {
  'use strict';

    var slid = document.querySelectorAll('#slides .slide'); //Обратились к каждому слайду
    var currentSlide = 0; // создаем переменную для счётчика которая будет начинаться с нуля
    var nextSlideInterval = setInterval(nextSlide, 2000); // создаём переменную в которую входит ф-ции которая будет через каждые две секунды перезапускаться

    function nextSlide() {
      slid[currentSlide].className = 'slide'; //Присвоили номера всем существующим слайдерам из контейнера
      currentSlide = (currentSlide+1)%slid.length; // Посчитаем все числа: 1%5=1, 2%5=2, 3%5=3, 4%5=4, and 5%5=0.
      slid[currentSlide].className = 'slide showing'; //После получения индекса слайда мы меняем класс и показываем новый. И опять прозрачность обрабатывается свойством transition.
    }


    // Для кнопки

    var playing = true; //создали переменную(флаг)
    var pausePlayButton = document.querySelector('#btn');//Обратились к нашей кнопке

    function pauseSlidershow() { // ф-ция для паузы
      pausePlayButton.innerHTML = 'Play';  //поменяли текст внутри кнопки
      playing =  false; // Поменяли флаг на фолс
      clearInterval(nextSlideInterval);  //Остановили переменную
    }

    function playSlideShow() {
      pausePlayButton.innerHTML = 'Pause'; //поменяли текст внутри кнопки
      playing =  true;  // Поменяли флаг на тру
      nextSlideInterval = setInterval(nextSlide,2000); // запустили ф-цию setInterval заново
    }


  pausePlayButton.onclick = function() {
      if(playing){
        pauseSlidershow();
      } else{
        playSlideShow();
      }
  };



})();
