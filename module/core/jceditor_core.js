/* module/core/jceditor_core.js */
/* module/util/browser.js */
define(["jcesel","module/util/browser"],
 function (_j,browser) { 

    var _jel = _j("body input");
    console.log(_jel.val("aaa"))

    _jel.each(function(i,el){
        console.log(i)   
        console.log(_j(el).val())   

    });

    function Editor (config) {
        this.config = config;
    };

    Editor.prototype.getConfig = function() {
        return this.config.show;
    };
    Editor.prototype.getBrwoserType = function() {
        return browser.type;
    };

    // 외부에 노출할 함수들만 반환한다.
    return Editor;
});
