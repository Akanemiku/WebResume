jQuery(document).ready(function($) {
    $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');// 这行是 Opera 的补丁, 少了它 Opera 是直接用跳的而且画面闪烁 by willin

    $('#a').click(function(){
        $body.animate({scrollTop: $('#about').offset().top}, 1000);
        return false;// 返回false可以避免在原链接后加上#
    });
    $('#b').click(function(){
        $body.animate({scrollTop: $('#grade').offset().top}, 1000);
        return false;// 返回false可以避免在原链接后加上#
    });
    $('#c').click(function(){
        $body.animate({scrollTop: $('#gpa').offset().top}, 1000);
        return false;// 返回false可以避免在原链接后加上#
    });
    $('#d').click(function(){
        $body.animate({scrollTop: $('#skills').offset().top}, 1000);
        return false;// 返回false可以避免在原链接后加上#
    });
});