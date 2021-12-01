// 浏览器标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // $('[rel="icon"]').attr('href', "/source/img/chat.png");
        document.title = '╭(°A°`)╮ 我崩溃啦 ~';
        clearTimeout(titleTime);
    }
    else {
        // $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '(ฅ>ω<*ฅ) 噫又好啦 ~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});