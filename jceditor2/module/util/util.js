define([ 
<<<<<<< HEAD
    JCEditor.config.home +"/module/jceditor_const"
], function (cst) { 
=======
], function () { 
>>>>>>> fe450dfa2be1acf3740cdddd377cf254674c63cd

/*  Util을 담아놓을 객체 생성
    JavaScript 기본 객체에 대한 기본 기능 변경 시 정의는 Util.js.method(), 
    이 이외에 text 형식은 Util.txt.function() Number 형식은 Util.num.function() 형식등으로  정의한다.*/

    var Util = {};

    //JavaScript 기본 객체에 대한 기본 기능 변경 시 정의, 이 이외에 text 형식은 Util.txt.function() Number 형식은 Util.num.function() 형식으로 정의한다.
    Util.js = {

    /**
     * 이벤트 진행시 이루어지는 버블링을 취소한다.
     * @param e 이벤트 객체.
     */
        stopPropagation : function(e){

            var evt = e ? e : window.event;
        
            if (evt.stopPropagation) {
                evt.stopPropagation();
            } else {
                evt.cancelBubble = true;
            }
        },

        /**
         * 브라우져에서 제공 되는 기본 이벤트를 무력화 한다.
         * @param e 이벤트 객체.
         */
        preventDefault : function(e){

            var evt = e ? e : window.event;
        
    
            if(evt.preventDefault) {
                evt.preventDefault(); 
            }else{
                evt.returnValue = false;
            }
        },

        /**
         * stopPropagation,preventDefault 함수를 동시에 실행한다.
         * @param e 이벤트 객체.
         */
        stopPreventEvent : function(e){

            Util.js.preventDefault(e);
            Util.js.stopPropagation(e);

        }
    };

    /*
    * text 유틸..
    */
    Util.txt = {


        /**
         * 문자열 좌우 공백 제거
         * @param str 문자열.
         */
        trim : function(str) {
            if(typeof(str) == "undefined") return "";
            return str.replace(/(^\s*)|(\s*$)/gi, "");
        },

    
        /**
         * 전체 문자열중 변경하고 싶은 문자 지정 후, 원하는 문자로 변경 
         *
         * @param target 변경하고 싶은 문자열 대상 .
         * @param from 변경하고 싶은 문자 .
         * @param to 변경할 문자.
         * @return string
         */
        replaceAll : function(target,from,to) {
            return target.replace(new RegExp(from, "g"), to);
        },


        /**
         * 문자열이 일정 길이가 될 때까지 왼쪽에서부터 특정 문자를 덧붙인다.
         *
         * @param targetStr 특정 문자를 덧붙일 대상 .
         * @param length 덧붙인 길이 
         * @param viewChar 길이 만큼 덧 붙일 문자.
         * @return string
         */
         lpad : function(targetStr,length,viewChar) {
            var addStr = "";
            
            if (typeof(targetStr) != "string") {
                targetStr += "";
            }

            var diffLen = length - targetStr.length; 

            for (var i = 0 ; i < diffLen; ++i) {
                addStr += viewChar;
            }

            return addStr += targetStr;
        },

        /**
         * 매개변수로 넘어오는 값이 빈 값인지 체크
         *
         * @param value 체크할 값.
         * @return boolean
         */
        isEmpty : function(value){

            if(value === null || value === undefined || value === ""){
                return true;
            }else{
                return false;
            }
        },

        /**
         * i18n 메세지에 {0},{1}... 항목 값을 대입한다.
         *
         * ex) i18n message js
         *      i18n = {hello : "hi!!, {0} bye~"}
         *      i18n(i18n.hello,"jangcool");
         *      hi!!, jangcool bye~;
         *
         * @param value 체크할 값.
         * @param value 체크할 값.
         * @return String
         */

        i18n : function() {
          var s = arguments[0];
          for (var i = 1; i < arguments.length; i++) {       
            var reg = new RegExp("\\{" + (i-1) + "\\}", "gm");             
            s = s.replace(reg, arguments[i]);
          }
          return s;
        }
    
    };

    /*
    * Number ,숫자형,실수형.. 유틸..
    */
    Util.num = {

    };

    Util.browser = {

        type : function(){

            var browerAgent = navigator.userAgent;            
            var browerType = ""; // 브라우져 종류
            // 브라우져 종류 설정.
            if (browerAgent.indexOf("Chrome") != -1) {
                browerType = "Chrome";
            } else if (browerAgent.indexOf("Firefox") != -1) {
                browerType = "Firefox";
            } else if (browerAgent.indexOf("Safari") != -1) {
                browerType = "Safari";
            } else if (browerAgent.indexOf("MSIE") != -1 || browerAgent.indexOf("rv:") != -1) {
                browerType = "MSIE";
            }else{
                browerType = "Opera";       
            }
            
            return browerType;   
        },

        version : function(){
            var browerAgent = navigator.userAgent;            
            var browerType = Util.browser.type();
            var rv = -1; // Return value assumes failure.      
            var ua = navigator.userAgent;
            var re = null;
            
            if (browerType == "MSIE") {
                
                if (browerAgent.indexOf("rv:") != -1) {
                    re = new RegExp("rv:([0-9]{1,}[\.0-9]{0,})");           
                }else{
                    re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");         
                }
                
            } else {
                re = new RegExp(browerType + "/([0-9]{1,}[\.0-9]{0,})");
            }
            if (re.exec(ua) != null) {
                rv = parseFloat(RegExp.$1);
            }

            return rv;
        },       

        getLocale  : function(){

            if ( navigator ) {
                if ( navigator.language ) {
                    return navigator.language;
                }
                else if ( navigator.browserLanguage ) {
                    return navigator.browserLanguage;
                }
                else if ( navigator.systemLanguage ) {
                    return navigator.systemLanguage;
                }
                else if ( navigator.userLanguage ) {
                    return navigator.userLanguage;
                }
            }
<<<<<<< HEAD
        },

        getDocType : function(){
            return document.doctype;
        },

        isHtml4 : function(strDocType){

            var docType = /-\/\/W3C\/\/DTD HTML 4.01 Transitional\/\//g

            return docType.test(strDocType);
        },

        isXhtml1 : function(strDocType){

            var docType = /-\/\/W3C\/\/DTD XHTML 1.0 Transitional\/\//g

            return docType.test(strDocType);
        },


        isHtml5 : function(strDocType){
            return ("<!DOCTYPE html>"== strDocType) ? true : false;
        }       
=======
        }
>>>>>>> fe450dfa2be1acf3740cdddd377cf254674c63cd
    }
    return JCEditor.util = Util;

});
