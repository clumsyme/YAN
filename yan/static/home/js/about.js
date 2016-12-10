window.onmousemove = function (event) {
    var mouseX = event.screenX
    var screenMiddleX = window.screen.width / 2,
        angle = (mouseX - screenMiddleX) * 15 / screenMiddleX
    $('img').css({ transform: 'rotate(' + angle + 'deg)' })

}

$(document).ready(function () {
    $('img').css({ 'animation': 'zhaoshou 3s linear infinite' })
})
if ($(document).width() > 800) {
    $('img').click(function (event) {
        console.log('click')
        $(this).css({ 'animation': 'jiaren 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28)' })
    })
    $('img').mouseup(function (event) {
        console.log('mouseup')
        $(this).css({ 'animation': 'zhaoshou 3s linear infinite' })
    })
    $('.about').mouseenter(function () {
        console.log('mouseenter')
        $('img').css({ 'animation': '' })
    })
    $('.about').mouseleave(function () {
        console.log('mouseleave')
        $('img').css({ 'animation': 'zhaoshou 3s linear infinite' })
    })
}