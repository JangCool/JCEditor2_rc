define([ 
    JCEditor.config.home +"/module/util/util"
], function (util) { 

    //브라우져 유틸 정의.
    var b = util.browser;

    /*  
     * 에디터를 인스턴스객체로 생성하였을 때 변동이 없고 공통으로 참조하는 항목 관리.
     */
    var IdBox = function(textArea){
        this.textArea = textArea;
    };

    IdBox.prototype = {

        /** 에디터를 둘러 쌓을 div 아이디 **/
<<<<<<< HEAD
        getContainer : function () {            
            return this.textArea+"-jceditor-container-div";
        },

        /** 편집 할 수 있는 Iframe 아이디 **/
=======
        getWrap : function () {            
            return this.textArea+"-jceditor-wrap-div";
        },

        /** 에디터를 둘러 쌓을 Iframe 아이디 **/
>>>>>>> fe450dfa2be1acf3740cdddd377cf254674c63cd
        getIfrm : function () {            
            return this.textArea+"-jceditor-edit-iframe";
        },      

<<<<<<< HEAD
        /** 아이프레임,TextArea가 들어갈 영역 ID. **/
        getContent : function () {            
            return this.textArea+"-jceditor-content-div";
        },   

        getResizable : function(){
            return this.textArea+"-jceditor-resizable-div";
        }   
    }

=======
        /** 버튼 및 아이프레임이 들어갈 컨테이너. **/
        getContainer : function () {            
            return this.textArea+"-jceditor-container-table";
        },      
    }



>>>>>>> fe450dfa2be1acf3740cdddd377cf254674c63cd
    return IdBox;

});
