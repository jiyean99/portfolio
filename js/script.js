/* 스크롤관련 스크립트 */
$(window).scroll(function () {
    const scr = $(document).scrollTop();
    let des_h = $("#design-project").offset().top;
    let clo_h = $("#clone-project").offset().top;
    let mob_h = $("#mobile-project").offset().top;

    /* skill bar - 정해진 위치에서 실행 */
    if (scr > 1730) {
                $(".skill-grahp>li>p>span").addClass("stack1");
                $(".skill-grahp>li:nth-child(3)>p>span,.skill-grahp>li:nth-child(4)>p>span,.skill-grahp>li:nth-child(6)>p>span").addClass("stack2");
                $(".skill-grahp>li:nth-child(5)>p>span").addClass("stack3");
            }

    /* design project - 가로스크롤 생성 */ 
    let offset = scr - des_h

    if (scr > des_h) {
        $("#design-project .container").css({ left: -offset });
    }

    /* design project - 타이틀 고정 */ 
    if (scr >= des_h && scr <= clo_h) { 
        $("#design-project>div:first-child").addClass("top-fixed");
    }else {
        $("#design-project>div:first-child").removeClass("top-fixed");
    }

    /* clone project - 타이틀 고정 */ 
    if (scr >= clo_h && scr <= mob_h) { 
        $("#clone-project>div:first-child").addClass("top-fixed");
        $(".clone-wrap")
        .css("margin-top", "200px");
    }else {
        $("#clone-project>div:first-child").removeClass("top-fixed");
        $(".clone-wrap").css("margin-top", "0");
    }

});
/* footer 복사 이벤트 */
function copy_to_clipboard() {    
    var copyText = document.getElementById('mailCopy');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("Copy");
    alert('복사되었습니다, 감사합니다.');
}