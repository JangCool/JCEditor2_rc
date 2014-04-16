/**
	Check JCEditor Namespace Object
**/
try{

	require.config({
		baseUrl :".",
		paths : {
			"jcesel" : "module/core/jceditor_selector",
			"jceSizzle" : "common/js/sizzle-min"
		},
		shim : {
			"jcesel" : {
				deps: ['jceSizzle'], //angular가 로드되기 전에 jceSizzle이 로드 되어야 한다.
				exports :"_j"

			}
		}
	});

	if(JCEditor != null && typeof(JCEditor) == "object"){
		console.log("Warning : is Object JCEditor....");
	}

}catch(e){

	if(e.message.indexOf("require") > -1){
		alert(e.message);
	};
};

if(window.console==undefined){console={log : function(){}};}
if(window.JCEditor==undefined){JCEditor={};}



JCEditor.create = function (config,callback) {

    var editor;
        /* js/main.js */
    require([
        'module/core/jceditor_core'
    ], function (Editor) {
        editor = new Editor(config);

        if(typeof(callback) == "function"){
        	callback(editor);
        }
    });

};
