/**
	Check JCEditor Namespace Object
**/
try{

	require.config({

		baseUrl :".",

		paths : {
			"jcesel" : "module/core/jceditor_selector"
		},

		shim : {
			"jcesel" : {
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
		return;
	}

	JCEditor = {};
}


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
