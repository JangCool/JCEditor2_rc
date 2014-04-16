/*
	본 셀렉터는 jQuery 및 문학청년님의 simplejQuery Tip, Sizzle Engine을 이용하여 
	이지윅 에디터 조작에 필요한 기능만 추출하여 작성하였음.
	jQuery : http://www.jQuery.com
	Sizzle : http://sizzlejs.com/
	문학청년 : http://youngman.kr/
*/
(function(window){

	var jceSelector = function(selector,context){

		return new jceSelector.fn.init( selector, context );
	};

	jceSelector.fn = jceSelector.prototype = {
		constructor : jceSelector,
		
		init : function( selector, context ){


			//초기화 
			//nodeType은 DOM 객체일 경우 존재하는 속성이다. 1은 element,2는 attibute ,3은 text노드를 가르킨다.
			//HTMLCollection으로 넘어오는 객체는 배열형식으로 넘어오기 때문에 length 프로퍼티 체크 후 바로 elems에 대입한다.
			//selector 변수가 셀렉터 형식 문자열로 넘어오면 sizzle엔진을 이용하여 element 검색. 
			this.elems = [];
			this.length = 0;

			if ((typeof selector != "string")) {

				if(selector.hasOwnProperty("length")){
					this.elems = selector;
				}else if(selector.nodeType){
					this.elems.push(selector) ;
				}

			}else{
				this.elems = _jSizzle(selector,context);
			};

			this.length = this.elems.length;

			return this;
		},

		each : function(callback){

			for(var i=0, len=this.length; i < len; i++) {			
				callback.call(this.elems[i],i,this.elems[i]);
			};
			
			return this;
		},		

		get : function(idx){
			return (idx) ? this.elems[idx] : this.elems;
		},

		size : function(){
			return this.length;
		},

		html : function() {
			var args = arguments;
			
			if(this.elems.length == 1 && args.length == 0)  {
				return this.elems[0].innerHTML;
			} else {
				this.each(function(i) {
					if(args.length == 1 && typeof args[0] == "string") {
						this.innerHTML = args[0];
					}
				});
				 
				return this;
			}
			
			return "";
		},

		val : function() {
			var args = arguments;
			
			if(this.length == 1 && args.length == 0)  {
				return this.elems[0].value;
			} else  {
				this.each(function(i) {
					if(args.length == 1 && typeof args[0] == "string") {
						this.value = args[0];
					}
				});
				 
				return this;
			}
			
			return "";
		},

		css : function() {
			var args = arguments;
			
			this.each(function(i) {
				if(args.length == 1 && typeof args[0] == "object") { 
					for(var key in args[0]) {
						this.style[key] = args[0][key];
					}
				} else if(args.length == 2 && typeof args[0] == "string") {
					this.style[args[0]] = args[1];
				}
			});
			
			return this;
		},

		attr : function() {
			var args = arguments;
			
			this.each(function(i) {
				if(args.length == 1 && typeof args[0] == "object") { 
					for(var key in args[0]) {
						this.setAttribute(key, args[0][key]);
					}
				} else if(args.length == 2 && typeof args[0] == "string") {
					this.setAttribute(args[0], args[1]);
				}
			});
			
			return this;
		},

		show : function() {
			this.each(function(i) {
				this.style.display = "";
			});
			
			return this;
		},

		hide : function() {
			this.each(function(i) {
				this.style.display = "none";
			});
			
			return this;
		},

		remove : function() {
			this.each(function(i) {
				this.parentNode.removeChild(this);
			});
			
			return this;
		}
	};


	// Give the init function the jQuery prototype for later instantiation
	jceSelector.fn.init.prototype = jceSelector.fn;



	if ( typeof window === "object" && typeof window.document === "object" ) {
		window._j = jceSelector;
	}

})(window);