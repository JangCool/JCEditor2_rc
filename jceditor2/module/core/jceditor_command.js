define([ 
    JCEditor.config.home +"/module/util/util"
], function (util) { 

    //브라우져 유틸 정의.
    var b = util.browser;

    /*  
     * 에디터를 인스턴스객체로 생성하였을 때 변동이 없고 공통으로 참조하는 항목 관리.
     */
    var Command = function(idBox,selection){

        /* 에디터 구성(레이아웃 및 버튼) 엘리먼트 아이디 생성 */
        this.idBox = idBox;
        
        this.selection = selection;


    };

    Command.prototype = {

        /**
         * 다른 조작이 필요하지 않는 기본 명령어들을 실행 한다.
         *
         * @param event 엘리먼트이벤트 객체
         * @param commandName  명렁어.
         * @commandParam commandName 명령어에 필요한 인자 값.
         * 
         */
        execCommand : function (event, commandName, commandParam) {
            
            if ((commandName == "Cut"|| 
                commandName == "Paste"||
                commandName == "Copy") && 
                Browser.type != "MSIE") {
            
                if(commandName == "Cut"){
                    window.alert("브라우저의 보안설정 때문에 잘라내기 기능을 실행할 수 없습니다. 키보드 명령을 사용하십시요. (Ctrl+X).");
                }else if(commandName == "Copy"){
                    window.alert("브라우저의 보안설정 때문에 복사하기 기능을 실행할 수 없습니다. 키보드 명령을 사용하십시요. (Ctrl+C).");          
                }else if(commandName == "Paste"){
                    window.alert("브라우저의 보안설정 때문에 복사하기 기능을 실행할 수 없습니다. 키보드 명령을 사용하십시요. (Ctrl+V).");      
                }           
                return;         
            }else{
                        
                if (!commandParam) {commandParam = null;}   
                this.ifrmDoc.execCommand(commandName, false, commandParam);     
            }

        }
    }



    return Command;

});
