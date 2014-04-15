// 모듈 정의의 기본 형태
define(["module/util/browser"] // 의존 모듈들을 나열한다. 모듈이 한 개라도 배열로 넘겨야 한다.
, function (browser) { // 의존 모듈들은 순서대로 매개변수에 담긴다.
    // 의존 모듈들이 모두 로딩 완료되면 이 함수를 실행한다.
    // 초기화 영역
    
    function Editor (config) {
        this.config = config;
    };

    Editor.prototype.getConfig = function() {
        return browser.type;
    };

    // 외부에 노출할 함수들만 반환한다.
    return Editor;
});
