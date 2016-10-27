var w = $(window);

var post_share = $('.post-share');
var post_share_top = post_share.offset().top;

w.scroll(function(){

    var scrollTop = w.scrollTop();

    if(scrollTop > post_share_top) {
        post_share.addClass('share-fixo');
    } else {
        post_share.removeClass('share-fixo');
    }

});