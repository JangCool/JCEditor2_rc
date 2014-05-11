define([ 
    JCEditor.config.home +"/module/util/util"
], function (util) { 

    //브라우져 유틸 정의.
    var b = util.browser;

    /*  
     * 에디터를 인스턴스객체로 생성하였을 때 변동이 없고 공통으로 참조하는 항목 관리.
     */
    var Selection = function(idBox){

        /* 에디터 구성(레이아웃 및 버튼) 엘리먼트 아이디 생성 */
        this.idBox = idBox;

        /* selection 객체*/      
        this.selection = null;

        /* 선택된 항목 text*/      
        this.selectionText = null;

        /* 선택된 항목 HTML*/      
        this.selectionHtml = null;

        /** IE11 에서 포커스를 일어버리는 현상이 발생하여 선택된 부분 저장.**/   
        this.storedSelections = [];

        /** 내용을 편집할 iframe 객체**/   
        this.iframe = _j("#"+idBox.getIfrm());

    };

    Selection.prototype = {

        cntWin : function(){
            return this.iframe.eq(0)[0].contentWindow;
        },
        doc : function(){
            return this.cntWin().document;
        },
        body : function(){
            return _j("body",this.doc()).eq(0)[0];
        }, 

        getSelection : function () {
            

            //IE6,7,8,9,10
            if (b.type() == "MSIE" && b.version() < 11) {
            
                this.selection = this.doc().selection.createRange();
                this.selectionText = this.doc().selection.createRange().text;
                this.selectionhtmlText = this.doc().selection.createRange().htmlText;

            //IE11,Firefox,Chrome,Safari,Opera
            } else if (b.type() != "MSIE" || (b.type() == "MSIE" && b.version() >= 11) ) {
                
                var selectionObj = this.cntWin().getSelection();
                
                this.selection = selectionObj;
                this.selectionText = selectionObj.toString();
                if (this.selection.rangeCount) { 
                    var container = document.createElement("div"); 
                    for (var i = 0, len = this.selection.rangeCount; i < len; ++i) { 
                        container.appendChild(this.selection.getRangeAt(i).cloneContents()); 
                    } 
                    this.selectionHtml = container.innerHTML; 
                } 

            }

        },

        /**
         * IE 같은 경우 Iframe 영역 외의 화면에서 마우스 액션이 실행 될 경우 Iframe의 포커스 위치를 잃어버리는  
         * 현상이 발생하여 selection객체를 통하여 iframe에서 마지막으로 위차한 마우스 포커스 위치를 찾음.
         */
        getFocus : function () {

            //IE6,7,8,9,10
            if (b.type() == "MSIE" && b.version() < 11) {

                this.body().focus();  
                if (this.selection != null && this.selectionText.length > 0) {
                    this.selection.select();
                } else {

                    if(this.selection == null){
                        this.getSelection();
                    }
                    this.selection.collapse(false);           
                    this.selection.select();      
                }

            //IE11,Firefox,Chrome,Safari,Opera
            } else if (b.type() != "MSIE" || (b.type() == "MSIE" && b.version() >= 11) ) {
            
                if (b.type() == "Chrome" ) {
                    this.body().focus();
                }else{
                    this.cntWin().focus();                           
                }
            }
        },


    
        /**
         * InternetExplorer 11 에서 selection을 잃어버리는 현상이 발생. execcommand가 먹히지 않는다.
         * execcommand메서드가 실행되게 하기 위하여 selection range범위 객체를 저장한다.   * 
         */
        saveDragTextRange : function(){
            
            if (b.type() == "MSIE" && b.version() >= 11) {
                this.storedSelections[0] = this.selection.getRangeAt(0);
            }
        },
        
    
        /**
         * InternetExplorer 11 에서 selection을 잃어버리는 현상이 발생. execcommand가 먹히지 않는다.
         * execcommand메서드가 실행되게 하기 위하여 selection range범위 객체를 저장한걸 복구 한다.   * 
         */        
        restoreDragTextRange : function(){

            if (b.type() == "MSIE" && b.version() >= 11) {

                var selection = this.selection;
                selection.removeAllRanges();
                selection.addRange(this.storedSelections[0]);
                this.storedSelections[0] = null;
                
            }else{
                this.getFocus();
            }
        }

    }



    return Selection;

});
