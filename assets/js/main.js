(function () {
    // yandex maps
    var myMap;
    
    // Дождёмся загрузки API и готовности DOM.
    ymaps.ready(init);
    
    function init () {
        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map").
        myMap = new ymaps.Map('map', {
            // При инициализации карты обязательно нужно указать
            // её центр и коэффициент масштабирования.
            center: [55.76, 37.64], // Москва
            zoom: 10,
            controls: ['zoomControl']
        });
    }
    // counter
    var hours = document.getElementsByClassName('hours'),
        mins = document.getElementsByClassName('mins'),
        secs = document.getElementsByClassName('secs');
    setInterval(function () {
        var now = new Date(),
            h = ('0' + (23 - now.getHours()).toString()).slice(-2),
            m = ('0' + (59 - now.getMinutes()).toString()).slice(-2),
            s = ('0' + (59 - now.getSeconds()).toString()).slice(-2);

        [hours[0], hours[1]].forEach(function (el) {
            el.innerHTML = h;
        });
        [mins[0], mins[1]].forEach(function (el) {
            el.innerHTML = m;
        });
        [secs[0], secs[1]].forEach(function (el) {
            el.innerHTML = s;
        });
    }, 1000);

})();

function utmParser() {
       var url = document.URL.split('?')[1];
       var params = [], hash = [];

       if(url != undefined) {
           url = url.split('&');

           for ( var i=0; i<url.length; i++ ) {
               hash = url[i].split('=');
               hash[1] = decodeURI(hash[1]);
               params.push(hash[1]);
               params[hash[0]] = hash[1];
           }
       }

       console.log(params.utm_source);

       $('.source').val(params.utm_source);
       $('.keyword').val(params.keyword);

}

$(document).ready(function() {
    utmParser();

    $('.item', '.portfolio').hover(function() {
        $(this).find('.slideUp').toggleClass('slideUp_active');
    });

    $('.btn-more').click(function() {

        var $this = $(this);

        if($this.hasClass('clicked')) {
            $('.portfolio-items-wrapper').height(560);
            $this.text('Показать еще');
            $this.removeClass('clicked');

        } else {
            var realH = $('.portfolio-items-wrapper .column').height();
            $('.portfolio-items-wrapper').height(realH);
            $this.text('Скрыть');
            $this.addClass('clicked');
        }
    });

    $('form').submit(function(e){
        e.preventDefault();

        var form = $(this),
            action = form.attr('action'),
            order = form.serialize();

        $.ajax({
            type: "POST",
            url: action,
            data: order,
            success: function() {
                alert('Ваша заявка была успешно отправлена');
            },
            error: function(err) {
                alert('Ошибка. Попробуйте повторить отправку позднее');
            },
            timeout:4000
        });
    });
});
