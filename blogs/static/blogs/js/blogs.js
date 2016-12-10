// JavaScript by (c) LiYan
var header = document.getElementById('header')
window.onscroll = function () {
    if (document.body.scrollTop >= 90) {
        $('#header').css({height: 50,  boxShadow: '0 2px 3px rgba(0, 0, 0, 0.04)', color: 'black',
                          background: '#fff', borderBottom: '1px solid #dddddd'})
    } else {
        $('#header').css({height: 90, background: '#333'})
    }
}
$('.slideicon').click(function () {
    var element = $(this).parent().next()
    if (element.css('display') == 'none') {
        element.slideDown()
        // $(this).addClass('slideicon')
        $(this).removeClass('slidedicon')
    } else {
        element.slideUp()
        $(this).addClass('slidedicon')
        // $(this).removeClass('slideicon')
    }

})