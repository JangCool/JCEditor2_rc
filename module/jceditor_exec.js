if(!JCEditor){
    JCEditor = {};
};

JCEditor.create = function (config) {

    var editor;
        /* js/main.js */
    require([
        'js/jceditor'
    ], function (JCEditor) {

        return editor = new JCEditor(config);
    });
};
