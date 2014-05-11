/* module/core/jceditor_core.js */
/* module/util/browser.js */
define(
    [
        "jcesel",
        JCEditor.config.home +"/module/jceditor_const",
        JCEditor.config.home +"/module/util/util",
        JCEditor.config.home +"/module/etc/jceditor_selection",
<<<<<<< HEAD
        JCEditor.config.home +"/module/etc/jceditor_idbox",
        JCEditor.config.home +"/module/etc/jceditor_resizable",
        JCEditor.config.home +"/module/etc/jceditor_command"
=======
        JCEditor.config.home +"/module/etc/jceditor_idbox"
>>>>>>> fe450dfa2be1acf3740cdddd377cf254674c63cd
    ],
 function (
    _j,
    cst,
    util,
    Selection,
<<<<<<< HEAD
    IdBox,
    Resizable,
    Command
=======
    IdBox
>>>>>>> fe450dfa2be1acf3740cdddd377cf254674c63cd
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

<<<<<<< HEAD
        /* 버튼 기능을 정의한다.  */
        this.command = new Command(this.idbox,this.selection);

=======
>>>>>>> fe450dfa2be1acf3740cdddd377cf254674c63cd
        /** 전체 화면 모드일 때 이전 크기로 복원하기 위해 가로,세로 정보를 저장한다.**/            
        
        this.fullModeOffset = {
            containerWidth : 0,
            containerHeight : 0,
            contentWidth : 0,
            contentHeight : 0           
        };

<<<<<<< HEAD
        var _init = (function(t){
          
            t.setEditBoxHeight();
            t.iframeEditMode();

            var resizable = new Resizable(t.idbox.getResizable(),t.idbox.getContent(),t.idbox.getIfrm(),t.idbox.textArea);
            resizable.start();
  
        })(this);

    };

    Editor.prototype  = {

        /**
        * 에디터의 가로와 세로 값을 지정 하였을때 textArea와 iframe 사이즈도 같이 늘어나게 한다.
        * 가로 세로 값은 content 영역 기준으로 설정한다.
        */

        setEditBoxHeight : function() {

            var doc = _j("#"+this.idbox.getContent()).eq(0)[0];

            if(doc.clientHeight != 0){
                _j("#"+this.idbox.getIfrm()).eq(0)[0].style.cssText =";width:"+doc.clientWidth+"px;height:"+ doc.clientHeight+"px";
                _j("#"+this.idbox.textArea).eq(0)[0].style.cssText =";width:"+doc.clientWidth+"px;height:"+ doc.clientHeight+"px";
            }
        },


        /**
         * iframe 을 에디터 편집기로 활용할 수 있게 편집 모드로 변경 한다.
         *
         */      
        iframeEditMode : function() {

            var ifrmDoc = this.selection.doc();
            ifrmDoc.open();
            ifrmDoc.write("<html>");
            ifrmDoc.write("<style >");

            var margin = null;
            var marginTop = "3";
            var marginBottom =  "3";
            var lineHeight =  "1.5";

            ifrmDoc.write("body{font-size:9pt;font-family:굴림;line-height:"+lineHeight+"}");
            
            ifrmDoc.write("</style>");
            ifrmDoc.write("<body></body>");
            ifrmDoc.write("</html>");
            ifrmDoc.close();


            if (util.browser.type() == "MSIE") {
                
                var ifrmBody = this.selection.body();
                ifrmBody.contentEditable=true;  
                ifrmBody.focus();          

            } else {

                ifrmDoc.designMode="on";        
                this.selection.cntWin().focus();   
            }

        }

    };

    Editor.prototype.getConfig = function() {
           console.log(util.txt.i18n(this.i18n.hello,"jangcool"));

           this.selection.getSelection();
           console.log("html4 : "+util.browser.isHtml4());
           console.log("html5 : "+util.browser.isHtml5());
           console.log("xhtml : "+util.browser.isXhtml1());
           this.selection.getFocus();


        return this.option.show;
    };

=======
    };

    Editor.prototype.getConfig = function() {
            console.log(util.txt.i18n(this.i18n.hello,"jangcool"));

           this.selection.getSelection();
           console.log(this.selection.selectionText)
           this.selection.getFocus();

        return this.option.show;
    };
>>>>>>> fe450dfa2be1acf3740cdddd377cf254674c63cd
    Editor.prototype.getBrwoserType = function() {
        return util.browser.type;
    };

    // 외부에 노출할 함수들만 반환한다.
    return Editor;
});
