// ---------header js -------- //
$('.lang_icon').click(function () {
    $('.lang_icon').toggleClass('icon-trans');
    $('.lang__box').slideToggle('d-block');
    console.log('ok');
})


// ----------- upload --------- //

$('#input').change(function (e) {
    $('.show_box').show();
    $('.upload_icon').addClass('d-none');
    var image = $('.show_box img');
    $('.show_box img').attr("src" , URL.createObjectURL(e.target.files[0]));
    
})

// ----------- delate uplad ------ //
$('.show_box').mouseover( function () {
    $('.file-delete').addClass('d-block');
});
$('.show_box').mouseout( function () {
    $('.file-delete').removeClass('d-block');
})

// ----------- FAQ js ------------- // 
$('.faq__card__head').click(function () {
    $(this).closest('.faq__card').find('.faq__card__body').slideToggle();

})
