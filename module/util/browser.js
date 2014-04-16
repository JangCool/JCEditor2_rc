define([ 
], function () { 
    
    var returnObj = {};
    returnObj.type ="";
    returnObj.version= "";

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
    
    returnObj.type = browerType;        
        
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
    
    
    returnObj.version = rv;
    
    return returnObj;

});
