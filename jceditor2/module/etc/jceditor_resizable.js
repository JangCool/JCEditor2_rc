define([ 
    "jcesel",
    JCEditor.config.home +"/module/util/util"
], function (_j,util) { 

    //브라우져 유틸 정의.
    var b = util.browser;
    var js = util.js;


    /*  
     * 에디터를 인스턴스객체로 생성하였을 때 변동이 없고 공통으로 참조하는 항목 관리.
     */
    var Resizable = function(target){

        var arg = arguments;
        var self = this;

        this.startPosX = 0;
        this.startPosY = 0;
        this.diffPosX = 0;
        this.diffPosY = 0;
        this.reSizeStart = false;
        this.target = null;
        this.reszieItems = []; 

        if(arg.length > 0){

            this.target = _j("#"+arg[0]);

            for (var i = 1; i < arg.length; i++) {
                this.reszieItems[i-1] = _j("#"+arg[i]);

            };

        }else{
            alert("Resizable 이벤트를 적용할 target ID 를 지정하여 주십시오.");
            return;
        } 




        this.setMouseDown = function (e) {
            js.stopPreventEvent(e);

            self.startPosX = e.clientX;
            self.startPosY = e.clientY;

            self.reSizeStart = true;

            _j(document).bind("mousemove",self.setResizeMouseMove);
            _j(document).bind("mouseup",self.setResizeMouseUp);

        },

        this.setResizeMouseMove = function(e){
            
            js.stopPreventEvent(e);
            
            if(self.reSizeStart){

                var tmpX = e.clientX - self.startPosX;
                var tmpY = e.clientY - self.startPosY;
                var moveX = self.reszieItems[0].width() + tmpX;
                var moveY = self.reszieItems[0].height() + tmpY;

                for (var i = 0; i < self.reszieItems.length; i++) {

                    //IE8이하에서 width,heigt 값이 음수(-1) 값으로 셋팅되면 에러.. 0으로 맞춰준다.
                    if(moveX < 0 ){
                        moveX = 0;
                    }

                    if(moveY < 0 ){
                        moveY = 0;
                    }

                    self.reszieItems[i].eq(0)[0].style.cssText =";width:"+moveX+"px;height:"+ moveY+"px";

                };

                self.startPosX = e.clientX;
                self.startPosY = e.clientY;
            }              

        }


        this.setResizeMouseUp = function (e) {

            self.reSizeStart = false;

            _j(document).unbind("mousemove",self.setResizeMouseMove);
            _j(document).unbind("mouseup",self.setResizeMouseUp);

        }        

    };

    Resizable.prototype = {

        start : function () {

            var self = this;
            this.target.bind("mousedown",self.setMouseDown);
        }
    };

    return Resizable;

});
