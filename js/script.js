$(function () {
    // 언어 선택
    var isClose = true;
    $('.topNav-inner .lang li').on('click', function () {

        if (isClose == true) {
            $('.topNav-inner .lang').addClass('on');
            isClose = false;
            $('.topNav-inner .lang li').show();

        } else {
            $('.topNav-inner .lang').removeClass('on');
            isClose = true;
            $('.topNav-inner .lang li').hide();
            $(this).show();
        }
    });

    // nav fixed 적용
    $(window).on('scroll', function () {
        var num = $(this).scrollTop();

        if (num >= 120) {
            $('nav .bottomNav').addClass('on');
        } else if (num <= 120) {
            $('nav .bottomNav').removeClass('on');
        }

        if(num>=3600){
            $('.bottomNav').stop().animate({ 'height': 0 }, 0);
        } else{
            $('.bottomNav').stop().animate({ 'height': 50 }, 0);
        }

    });

    // 서브메뉴
    $('nav .bottomNav .bottomNav-inner .nav_menu>li').on('mouseover', function () {
        $('.bottomNav').stop().animate({ 'height': 280 }, 0);
        $('nav').stop().animate({ 'height': 400 }, 300);
    });

    $('nav .bottomNav .bottomNav-inner .nav_menu>li').on('mouseleave', function () {
        $('.bottomNav').stop().animate({ 'height': 50 }, 0);
        $('nav').stop().animate({ 'height': 170 }, 300);
    });

    // 헤더 슬라이더
    $('.header-slider').slick({
        autoplay: true,
        arrows: false,
        swipe: true,
        pauseOnHover: false,
        autoplaySpeed: 5000,
        speed: 1200,
        dots: true,
        fade: false
    });

    // our 애니메이션 적용
    $(window).on('scroll', function () {
        var num = $(this).scrollTop();
        if (num >= 1000) {
            $('.coffebene_our .our-inner h1').addClass('on');
            $('.coffebene_our .our-inner p').addClass('on');
        } else if (num <= 0) {
            $('.coffebene_our .our-inner h1').removeClass('on');
            $('.coffebene_our .our-inner p').removeClass('on');
        }
    });

    // MD 슬라이더
    $('.md-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 5000,
        speed: 1000,
        dots: false,
        fade: false
    });

    // SNS 슬라이더
    $('.sns-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 5000,
        speed: 1000,
        dots: false,
        fade: false,
        arrows: false,
    });

    // join 애니메이션 적용
    $(window).on('scroll', function () {
        var num = $(this).scrollTop();
        console.log(num);
        if (num >= 2500) {
            $('.cont-inner .cont-box .box-join strong').addClass('on');
            $('.cont-inner .cont-box .box-join>span').addClass('on');
        } else if (num <= 0) {
            $('.cont-inner .cont-box .box-join strong').removeClass('on');
            $('.cont-inner .cont-box .box-join>span').removeClass('on');
        }
    });

});