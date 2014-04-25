define([ 
], function () { 

    /*  
     * 에디터를 인스턴스객체로 생성하였을 때 변동이 없고 공통으로 참조하는 항목 관리.
     */
    var Const = {};


    //에디터에서 보여줄 폰트 사이즈 
    Const.fontSize = {
        "1" : "8pt",
        "2" : "10pt",
        "3" : "12pt",
        "4" : "14pt",
        "5" : "18pt",
        "6" : "24pt",
        "7" : "36pt"
    };


    /*
    * 에디터에서 해당 블럭의 포맷(html 형식)을 지정.
    */
    Const.formatblock = {
            "p" : "기본 문단",
            "address" : "주소" ,
            "h1": "제목 1",
            "h2": "제목 2",
            "h3": "제목 3",
            "h4":  "제목 4",
            "h5": "제목 5",
            "h6": "제목 6",
            "pre" : "Formatted"
        };  


    /*
    * 에디터에서 이용할 폰트 목록
    */
    Const.fontFamily=[
                        "굴림",
                        "굴림체",
                        "돋움",
                        "돋움체",
                        "바탕", 
                        "바탕체",
                        "궁서",
                        "Arial",
                        "Arial Black",
                        "Comic Sans Ms",
                        "Courier New",
                        "Tahoma",
                        "Verdana"
                        ];

    
    /*
    * 에디터에서 이용할 폰트 목록
    */
    Const.fontFamily=[
                        "굴림",
                        "굴림체",
                        "돋움",
                        "돋움체",
                        "바탕", 
                        "바탕체",
                        "궁서",
                        "Arial",
                        "Arial Black",
                        "Comic Sans Ms",
                        "Courier New",
                        "Tahoma",
                        "Verdana"
                        ];


    /*
    * 폰트 색 및 폰트 배경색에 쓰일 색상 목록
    */
    Const.fontcolorpalate = ["#000000","#993300","#333300","#003300","#003366","#000080","#333399","#333333",
                             "#800000","#FF6600","#808000","#008000","#008080","#0000FF","#666699","#808080",
                             "#FF0000","#FF9900","#99CC00","#339966","#33CCCC","#3366FF","#800080","#999999",
                             "#FF00FF","#FFCC00","#FFFF00","#00FF00","#00FFFF","#00CCFF","#993366","#C0C0C0",
                             "#FF99CC","#FFCC99","#FFFF99","#CCFFCC","#CCFFFF","#99CCFF","#CC99FF","#FFFFFF"];

   
    /**
     * 에디터 툴바 버튼에 적용될 버튼 정보.
     * @type Json
     */
    Const.defineToolBar = {
                                 //커맨드 이름                 //버튼 누르기 전 css class                       //버튼 누른 후 css class                      //버튼 잠금 css class                              //버튼 명              //버튼 효과....
        FormatBlock :           ["FormatBlock",                "jceditor-formatblock-btn-off"                   ,"jceditor-formatblock-btn-on"              ,"jceditor-formatblock-btn-disabled"                ,"스타일"              ,false ],
        FontFamily :            ["FontFamily",                 "jceditor-fontfamily-btn-off"                    ,"jceditor-fontfamily-btn-on"               ,"jceditor-fontfamily-btn-disabled"                 ,"글꼴"                ,false ],
        FontSize :              ["FontSize",                   "jceditor-fontsize-btn-off"                      ,"jceditor-fontsize-btn-on"                 ,"jceditor-fontsize-btn-disabled"                   ,"크기"                ,false ],
        Bold :                  ["Bold",                       "jceditor-bold-btn-off"                          ,"jceditor-bold-btn-on"                     ,"jceditor-bold-btn-disabled"                       ,"굵게"                ,false ],
        Underline :             ["Underline",                  "jceditor-underline-btn-off"                     ,"jceditor-underline-btn-on"                ,"jceditor-underline-btn-disabled"                  ,"밑줄"                ,false ],
        Italic :                ["Italic",                     "jceditor-italic-btn-off"                        ,"jceditor-italic-btn-on"                   ,"jceditor-italic-btn-disabled"                     ,"기울림꼴"            ,false ],
        Strikethrough :         ["Strikethrough",              "jceditor-strikethrough-btn-off"                 ,"jceditor-strikethrough-btn-on"            ,"jceditor-strikethrough-btn-disabled"              ,"취소선"              ,false ],
        ForeColor :             ["ForeColor",                  "jceditor-forecolor-btn-off"                     ,"jceditor-forecolor-btn-on"                ,"jceditor-forecolor-btn-disabled"                  ,"글자색"              ,false ],
        BackColor :             ["BackColor",                  "jceditor-backcolor-btn-off"                     ,"jceditor-backcolor-btn-on"                ,"jceditor-backcolor-btn-disabled"                  ,"배경색"              ,false ],
        Justifyleft :           ["Justifyleft",                "jceditor-justifyleft-btn-off"                   ,"jceditor-justifyleft-btn-on"              ,"jceditor-justifyleft-btn-disabled"                ,"왼쪽정렬"            ,false ],
        Justifycenter :         ["Justifycenter",              "jceditor-justifycenter-btn-off"                 ,"jceditor-justifycenter-btn-on"            ,"jceditor-justifycenter-btn-disabled"              ,"중앙정렬"            ,false ],
        Justifyright :          ["Justifyright",               "jceditor-justifyright-btn-off"                  ,"jceditor-justifyright-btn-on"             ,"jceditor-justifyright-btn-disabled"               ,"오른쪽정렬"          ,false ],
        Justifyfull :           ["Justifyfull",                "jceditor-justifyfull-btn-off"                   ,"jceditor-justifyfull-btn-on"              ,"jceditor-justifyfull-btn-disabled"                ,"양쪽 맞춤"           ,false ],
        Insertorderedlist :     ["Insertorderedlist",          "jceditor-insertorderedlist-btn-off"             ,"jceditor-insertorderedlist-btn-on"        ,"jceditor-insertorderedlist-btn-disabled"          ,"순서있는 목록"       ,false ],
        Insertunorderedlist :   ["Insertunorderedlist",        "jceditor-insertunorderedlist-btn-off"           ,"jceditor-insertunorderedlist-btn-on"      ,"jceditor-insertunorderedlist-btn-disabled"        ,"순서없는 목록 "      ,false ],
        Outdent :               ["Outdent",                    "jceditor-outdent-btn-off"                       ,"jceditor-outdent-btn-on"                  ,"jceditor-outdent-btn-disabled"                    ,"내어쓰기"            ,true  ],
        Indent :                ["Indent",                     "jceditor-indent-btn-off"                        ,"jceditor-indent-btn-on"                   ,"jceditor-indent-btn-disabled"                     ,"들여쓰기"            ,true  ],
        CreateLink :            ["CreateLink",                 "jceditor-createlink-btn-off"                    ,"jceditor-createlink-btn-on"               ,"jceditor-createlink-btn-disabled"                 ,"링크"                ,false ],
        UnLink :                ["UnLink",                     "jceditor-unlink-btn-off"                        ,"jceditor-unlink-btn-on"                   ,"jceditor-unlink-btn-disabled"                     ,"링크제거"            ,false ],
        Htmlmode :              ["Htmlmode",                   "jceditor-html-btn-off"                          ,"jceditor-html-btn-on"                     ,"jceditor-html-btn-disabled"                       ,"배경색"              ,false ],
        NewDocument :           ["NewDocument",                "jceditor-new-btn-off"                           ,"jceditor-new-btn-on"                      ,"jceditor-new-btn-disabled"                        ,"새 문서"             ,true  ],
        Undo :                  ["Undo",                       "jceditor-undo-btn-off"                          ,"jceditor-undo-btn-on"                     ,"jceditor-undo-btn-disabled"                       ,"되돌리기"            ,true  ],
        Redo :                  ["Redo",                       "jceditor-redo-btn-off"                          ,"jceditor-redo-btn-on"                     ,"jceditor-redo-btn-disabled"                       ,"다시실행"            ,true  ],
        Cut :                   ["Cut",                        "jceditor-cut-btn-off"                           ,"jceditor-cut-btn-on"                      ,"jceditor-cut-btn-disabled"                        ,"자르기"              ,true  ],
        Copy :                  ["Copy",                       "jceditor-copy-btn-off"                          ,"jceditor-copy-btn-on"                     ,"jceditor-copy-btn-disabled"                       ,"복사하기"            ,true  ],
        Paste :                 ["Paste",                      "jceditor-paste-btn-off"                         ,"jceditor-paste-btn-on"                    ,"jceditor-paste-btn-disabled"                      ,"붙여넣기"            ,true  ],
        SelectAll :             ["SelectAll",                  "jceditor-selectall-btn-off"                     ,"jceditor-selectall-btn-on"                ,"jceditor-selectall-btn-disabled"                  ,"전체선택"            ,true  ],
        SubScript :             ["SubScript",                  "jceditor-subscript-btn-off"                     ,"jceditor-subscript-btn-on"                ,"jceditor-subscript-btn-disabled"                  ,"아래첨자"            ,true  ],
        SuperScript :           ["SuperScript",                "jceditor-superscript-btn-off"                   ,"jceditor-superscript-btn-on"              ,"jceditor-superscript-btn-disabled"                ,"윗첨자"              ,true  ],
        RemoveFormat :          ["RemoveFormat",               "jceditor-removeformat-btn-off"                  ,"jceditor-removeformat-btn-on"             ,"jceditor-removeformat-btn-disabled"               ,"서식제거"            ,true  ],
        Quotation :             ["Quotation",                  "jceditor-quotation-btn-off"                     ,"jceditor-quotation-btn-on"                ,"jceditor-quotation-btn-disabled"                  ,"인용구"              ,false ],
        Emoticon :              ["Emoticon",                   "jceditor-emoticon-btn-off"                      ,"jceditor-emoticon-btn-on"                 ,"jceditor-emoticon-btn-disabled"                   ,"이모티콘"            ,false ],
        Scharacter :            ["Scharacter",                 "jceditor-scharacter-btn-off"                    ,"jceditor-scharacter-btn-on"               ,"jceditor-scharacter-btn-disabled"                 ,"특수문자"            ,false ],
        Table :                 ["Table",                      "jceditor-table-btn-off"                         ,"jceditor-table-btn-on"                    ,"jceditor-table-btn-disabled"                      ,"테이블"              ,false ],
        Picture :               ["Picture",                    "jceditor-picture-btn-off"                       ,"jceditor-picture-btn-on"                  ,"jceditor-picture-btn-disabled"                    ,"사진"                ,false ],
        Flash :                 ["Flash",                      "jceditor-flash-btn-off"                         ,"jceditor-flash-btn-on"                    ,"jceditor-flash-btn-disabled"                      ,"플래시"              ,false ],
        Inserthorizontalrule :  ["Inserthorizontalrule",       "jceditor-horizon-btn-off"                       ,"jceditor-horizon-btn-on"                  ,"jceditor-horizon-btn-disabled"                    ,"수평선"              ,true  ],
        PrintLine :             ["PrintLine",                  "jceditor-printline-btn-off"                     ,"jceditor-printline-btn-on"                ,"jceditor-printline-btn-disabled"                  ,"인쇄쪽나눔"          ,true  ],
        Preview :               ["Preview",                    "jceditor-preview-btn-off"                       ,"jceditor-preview-btn-on"                  ,"jceditor-preview-btn-disabled"                    ,"미리보기"            ,true  ],
        Print :                 ["Print",                      "jceditor-print-btn-off"                         ,"jceditor-print-btn-on"                    ,"jceditor-print-btn-disabled"                      ,"인쇄"                ,true  ],
        FullScreen :            ["FullScreen",                 "jceditor-fullscreen-btn-off"                    ,"jceditor-fullscreen-btn-on"               ,"jceditor-fullscreen-btn-disabled"                 ,"전체화면"            ,false ]

    };


    Const.toolBar = {
                    
        options : {
            doc       :  ["NewDocument"],
            history   :  ["Undo","Redo"],
            clipboard :  ["Cut","Copy","Paste","SelectAll"],
            subsuper  :  ["SubScript","SuperScript","RemoveFormat"],
            insert    :  ["Quotation","Emoticon","Scharacter","Table","Picture","Flash","Inserthorizontalrule"],
            links     :  ["CreateLink","UnLink"],
            print     :  ["PrintLine","Preview","Print"],
            tools     :  ["FullScreen"]
        },
                    
        defaults : {
            styles       :  ["FormatBlock","FontFamily","FontSize"],
            color        :  ["ForeColor","BackColor"], 
            basicstyles  :  ["Bold","Underline","Italic","Strikethrough"],
            paragraph    :  ["Insertorderedlist","Insertunorderedlist","Justifyleft","Justifycenter","Justifyright","Justifyfull","Outdent","Indent"],
            mode         :  ["Htmlmode"]       
        }
    };

    return Const;

});
