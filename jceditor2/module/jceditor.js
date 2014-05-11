/** JCEditor 객체 생성.**/
if(window.JCEditor==undefined){	JCEditor = {}; }; JCEditor.util = {}; JCEditor.config = {};

/**
	Configuration JCEditor Property
**/

/* 프로젝트 base URL */
JCEditor.config.baseUrl = ".";

/* jceditor home */
JCEditor.config.home = "jceditor2";

/* 에디터를 사용하고 있는 host 정보 ex) http://www.daum.net */
JCEditor.config.hostUrl = "";

/* 스킨이 들어있는 홈경로 지정 
 *
 * ex) JCEditor.config.home+"/skin"  or  skin           
 */
JCEditor.config.skinHome = JCEditor.config.home+"/skin";


/* 스킨 css 가 문서에 추가되어있는지 체크, [고정] ※수정 불가!!! */
JCEditor.config.isAddSkin = false;


/**
	Check JCEditor Namespace Object
**/

JCEditor.create = function (textarea,width,height,config,callback) { 

	//requirejs 로드 검증.
	try{

		require.config({
			baseUrl : JCEditor.config.baseUrl,
			paths : {
				"jcesel" : JCEditor.config.home +"/module/core/jceditor_selector",
				"jceSizzle" : JCEditor.config.home +"/common/js/sizzle-min"
			},
			shim : {
				"jcesel" : {
					deps: ['jceSizzle',JCEditor.config.home+'/module/util/util'], //jceditor_selector가 로드되기 전에 jceSizzle이 로드 되어야 한다.
					exports :"_j",
					init :function(jceSizzle,util){

						//css 스킨 로드
						//기본 스킨을 기본 값으로 셋팅.
						var skin = "default";
						if(config && config.skin && typeof(config.skin) == "string"){
							skin = config.skin;
						}

						var skinHome = (JCEditor.config.skinHome && JCEditor.config.skinHome != "")
										? JCEditor.config.skinHome 
										: JCEditor.config.home+"/skin";

						var url = skinHome+"/"+skin+"/default.css";
						//스킨 css가 문서에 추가되어 있는지 체크
						if(!JCEditor.config.isAddSkin){
							JCEditor.config.isAddSkin = true;
							JCEditor.loadCss(url);

						}

					}
				}
			},
			//ie8에서 스크립트가 잘못된 정보로 로딩시에 에러가 출력이 안되고 timeout 에러가 남... 그래서 7초간 딜레이가 생김. 그래서 1초로 셋팅.
			waitSeconds: 1

		});

	}catch(e){

		if(e.message.indexOf("require") > -1){
			alert(e.message);
		};
	};




    var editor; //콜백 매개변수로 넘길 editor instance 변수.
    var charset = "";

    //Util에 들어갈 내용이지만.. util을 모듈화 하였기에 그냥 하드코딩..
    if ( navigator.language ) {
        charset = navigator.language;
    }
    else if ( navigator.browserLanguage ) {
        charset = navigator.browserLanguage;
    }
    else if ( navigator.systemLanguage ) {
        charset = navigator.systemLanguage;
    }
    else if ( navigator.userLanguage ) {
        charset = navigator.userLanguage;
    }else{
    	charset = "base";
    }

    if(config.charset != undefined && config.charset != null && config.charset != ""){
    	charset = config.charset;
    }

    //i18n 모듈을 로드할 주소를 셋팅. 
    var i18n_module = JCEditor.config.home +'/module/lang/'+charset;
    
    var getInstance = function(i18n){
    	//18n파일을 불러오면 에디터 실행.
	    require([
	        JCEditor.config.home +'/module/core/jceditor_core'
	    ], function (Editor) {

			JCEditor.i18n = {};
	    	JCEditor.i18n[textarea] = i18n;

	        editor = new Editor(textarea,width,height,config);

	        if(typeof(callback) == "function"){
	        	callback(editor);
	        }
	    });
    }

    require([
        i18n_module 
    ], function (i18n) {
    	//18n파일을 불러오면 에디터 실행.
		getInstance(i18n);

    }, function(error){
	    //i18n 파일 못불러 오면 base 파일 찾아서 불러온다.
    	if((error.requireType == "scripterror") || (error.requireType == "timeout")){
			require.config.waitSeconds = 7; //default require timeout 
    		JCEditor.i18n = JCEditor.config.home +'/module/lang/base';

		    require([
		        i18n_module
		    ], function (i18n) {

    			//18n base 파일을 불러오면 에디터 실행.
				getInstance(i18n);

		    },function(error){

		    	//i18n base파일 못불러 오면 에러 출력.
		    	if(error.requireType == "scripterror"){
		    		alert("not found i18n is file...")
		    	}
		    });

    	}
    });

};

JCEditor.loadCss = function(url){

    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    
    if(document.getElementsByTagName("head")[0]){
	    document.getElementsByTagName("head")[0].appendChild(link);
    }else{
    	document.getElementsByTagName("body")[0].appendChild(link);
    }

}