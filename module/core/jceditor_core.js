/* module/core/jceditor_core.js */
/* module/util/browser.js */
define(["jcesel","module/util/browser"],
 function (_j,browser) { 
    console.log(_j("aaa","aa").constructor);
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
