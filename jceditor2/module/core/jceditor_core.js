/* module/core/jceditor_core.js */
/* module/util/browser.js */
define(
    [
        "jcesel",
        JCEditor.config.home +"/module/jceditor_const",
        JCEditor.config.home +"/module/util/util",
        JCEditor.config.home +"/module/etc/jceditor_selection",
        JCEditor.config.home +"/module/etc/jceditor_idbox"
    ],
 function (
    _j,
    cst,
    util,
    Selection,
    IdBox
) { 

    function Editor (textArea,width,height,option) {

        //에디터 옵션 설정.
        this.option = option;

        //국제화 관리.
        this.i18n = JCEditor.i18n[textArea];

        /* 에디터 구성(레이아웃 및 버튼) 엘리먼트 아이디 생성 */
        this.idbox = new IdBox(textArea);

        /* 에디터 내용을 편집 할 때 쓰이는 셀렉션 객체  */
        this.selection = new Selection(this.idbox);

        /** 전체 화면 모드일 때 이전 크기로 복원하기 위해 가로,세로 정보를 저장한다.**/            
        
        this.fullModeOffset = {
            containerWidth : 0,
            containerHeight : 0,
            contentWidth : 0,
            contentHeight : 0           
        };

    };

    Editor.prototype.getConfig = function() {
            console.log(util.txt.i18n(this.i18n.hello,"jangcool"));

           this.selection.getSelection();
           console.log(this.selection.selectionText)
           this.selection.getFocus();

        return this.option.show;
    };
    Editor.prototype.getBrwoserType = function() {
        return util.browser.type;
    };

    // 외부에 노출할 함수들만 반환한다.
    return Editor;
});
