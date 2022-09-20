$('.trigger').click(function(){
    $(this).toggleClass('on');
    $('nav').slideToggle(400);
});

$(window).resize(function(){
    let winW = $(window).width();
    console.log('브라우저 가로 길이 ', winW)
    if( winW >= 768 &&$('nav').is(':hidden')) {
        console.log('nav가 안보임');
        $('nav').removeAttr('style');
    }
});