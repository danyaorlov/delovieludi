$(document).ready(function() {
    $(".slick-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        responsive: [
            {
                breakpoint:992,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

    if(document.documentElement.clientWidth > 992) {
        $(".second-block").height(document.documentElement.clientHeight);
        // ИНФОРМАЦИЯ О СОТРУДНИКАХ НА ОБЫЧНЫХ ЭКРАНАХ
        $(".block-employee").on("mousemove",function(e){
            var  mouse_x = e.offsetX;
            var  mouse_y = e.offsetY;
            var x_pos = e.clientX;
            var  id = $(this).data('content');
            $("#info-"+id).css({
                "top":mouse_y + "px" ,
                "left":mouse_x  + "px",
            }).addClass("display-block");

        });
        // Фиксация меню при скролле
        $(window).scroll(function () {
            if ( $(window).scrollTop() > 70){
                $(".header-menu").addClass("fixed-menu");
                $(".header-menu-style").addClass("scroll-header");
            }else{
                $(".header-menu").removeClass("fixed-menu");
                $(".header-menu-style").removeClass("scroll-header");
            }
        });
        //Выделение пунктов меню при попадании на блок
        $(window).scroll(function () {
            if ( $(window).scrollTop() + 50 >= 906 &&  $(window).scrollTop() + 50  < 3782.875){
                $('.navbar-style-default a[href="#full-service"]').addClass("nav-selected-block");
            }else{
                $('.navbar-style-default a[href="#full-service"]').removeClass("nav-selected-block");
            }
            if (  $(window).scrollTop() + 50 >= 3782.875){
                $('.navbar-style-default a[href="#about"]').addClass("nav-selected-block");
            }else{
                $('.navbar-style-default a[href="#about"]').removeClass("nav-selected-block");
            }
        });
    }else{
        $(".navbar-nav").addClass("navbar-nav-mobile");
        $("#dev-title-wrap").height(document.documentElement.clientHeight - 130);
        var height_dev = $("#dev-title-wrap").height();
        $("#title-block-bg").height(height_dev);
        var marginTitleText = ($("#dev-title-wrap").height() - $(".text-block").height())/2;
        $(".text-block").css({
            "margin": marginTitleText +"px 0"
        });
        var huntMarg = (document.documentElement.clientHeight -  $(".hunter").height())/2;
        $(".hunter").css({
            "margin":huntMarg/2 + "px 0px"
        });
        var marginImages = (($(".company-blocks").width() - 300) /4 );
        $(".information-block-employee").css({
            "margin":marginImages + "px"
        });


        // ИНФОРМАЦИЯ О СОТРУДНИКАХ НА МАЛЕНЬКИХ ЭКРАНАХ (НИЖЕ)
        // если ширина экрана , поделенная на 2, меньше, чем координата Х мыши то информация смещается налево

        $(".block-employee").on("click",function(e){

            var  mouse_x = e.offsetX;
            var  mouse_y = e.offsetY;
            var x_pos = e.clientX;
            var y_pos = e.clientY;
            var  id = $(this).data('content');
            var height_info = $("#info-"+id).height() / 2;
            var width_info = $("#info-"+id).width();
            $("#img-"+id).addClass("block-employee-img-mobile");
            if (x_pos > $(window).width() / 2){
                mouse_x = mouse_x - 220;

            }
            if (width_info > $(window).width()/2 && x_pos < $(window).width() / 2){
                mouse_x = mouse_x - (width_info - $(window).width()/2);

            }

            // все информ блоки справа смещаются ближе к центру на всю ширину блока
            if (y_pos > $(window).height()/ 2 && y_pos > height_info + 60){
                height_info = height_info * 2;

            }
            if (y_pos < (height_info + 60) && y_pos < $(window).height()/ 2){
                height_info = -(height_info - y_pos + height_info )/2 + 70;
            }

            $("#info-"+id).css({
                "top":mouse_y - height_info + "px" ,
                "left":mouse_x  + "px",
            }).addClass("display-block");

        });
        // Фиксация меню при скролле на маленьких экранах
        $(window).scroll(function () {

            var headerTop = $(".header-top").height();
            if ( $(window).scrollTop() > headerTop + 10){
                $(".header-menu").addClass("fixed-menu");
                $(".number-block-mobile > a").addClass("header-number-animate");
                $(".number-block-mobile > img.favico-mobile").css({
                    "width": 45,
                    "margin": "4px 0px"
                });
            }else{
                $(".header-menu").removeClass("fixed-menu");
                $(".number-block-mobile > a").removeClass("header-number-animate");
                $(".number-block-mobile > img.favico-mobile").css({
                    "width": 0,
                });
            }

        });

    }


    $(".block-employee").on("mouseleave",function () {
        var  id = $(this).data('content');
        $("#info-"+id).removeClass("display-block");
        $("#img-"+id).removeClass("block-employee-img-mobile");
    });

    $('.btn-enter').on('click',function () {
        $('.form-block').addClass('hidden');
        $('.form-block-access').removeClass('hidden');
    });
    window.onresize = function (e) {
        if(document.documentElement.clientWidth > 992) {
            $("#dev-title-wrap").height(document.documentElement.clientHeight - 70);
            $("#dev-title-wrap>img:first-child").height(document.documentElement.clientHeight - 70);
            $(".second-block").height(document.documentElement.clientHeight);
            $(".border-image-div").height(document.documentElement.clientHeight - 70);
        }else{
           var height_dev = $("#dev-title-wrap").height;
            $("#title-block-bg").height(height_dev);
        }
    };


    // ОТПРАВКА ДАННЫХ В БИТРИКС24
    $("#form").on('submit',function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "send_crm",
            data: $(this).serialize(),
            success:function (data) {

                $(".form-button").animate([{
                    opacity: '1'
                }, {
                    opacity: '0'
                }],300).addClass('text-access-form').val("Мы приняли вашу заявку!");
                $('#form>input[type = text]').val('')
            }
        })
    });
    // Появление формы обратной связи при клике на кнопку
    $(".main-block-button").on('click',function () {
       $('.hunter-block-background').removeClass('hidden').animate({
            "opacity":"1"
       },300);
       // Запрет на скролл страницы
        document.body.style.overflow = "hidden";
    });


    $('.hunter-block').on('click',function () {
                $('.hunter-block-background').animate({
                    "opacity":"0"
                },300).addClass('hidden');
        document.body.style.overflow = "auto";
    });


    $(".left-block-services").on("mouseover",function () {
       $(".image-tariff-1").addClass("image-active");
    });
    $(".left-block-services").on("mouseleave",function () {
        $(".image-tariff-1").removeClass("image-active");
    });

    $(".center-block-services").on("mouseover",function () {
        $(".image-tariff-2").addClass("image-active");
    });
    $(".center-block-services").on("mouseleave",function () {
        $(".image-tariff-2").removeClass("image-active");
    });
    $(".left-block-services").on("mouseover",function () {
        $(".image-tariff-1").addClass("image-active");
    });
    $(".left-block-services").on("mouseleave",function () {
        $(".image-tariff-1").removeClass("image-active");
    });

    $(".right-block-services").on("mouseover",function () {
        $(".image-tariff-3").addClass("image-active");
    });
    $(".right-block-services").on("mouseleave",function () {
        $(".image-tariff-3").removeClass("image-active");
    });

    // Отступ в блоке с СОТРУДНИКАМИ. Каждый второй опускается вниз на 30 px
    for (var i = 1; i <= 14; i++){
        var height_p = $(".block-employee[data-content="+i+"]>p").height();
        var height_img = $(".block-employee[data-content="+i+"]>img").height();
        var top_pos = (height_img - height_p)/2;
        $(".block-employee[data-content="+i+"]>p").css({
           "top":top_pos
        });

        if ( i % 2 == 0){
            $(".block-employee[data-content="+i+"]").css({
                "top":"30px"
            });
        }
    }
    $(".navbar-nav").on("click",function () {
       $(window).scrollTop = 500;
    });

    // НАВИГАЦИЯ ПО САЙТУ.
    // СКРОЛЛ на нужный блок при клике на ссылку
        $(".navbar-nav").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            console.log(top - 50);
            $('body,html').animate({scrollTop: top - 50}, 1500);
        });
    // Анимация иконки "Гамбургер"
    $(".navbar-toggler").on("click",function () {
        if ( $(".navbar-toggler-icon").hasClass("icon-animate")){
            $(".navbar-toggler-icon").removeClass("icon-animate");
        }else{
            $(".navbar-toggler-icon").addClass("icon-animate");
        }
    });
});


