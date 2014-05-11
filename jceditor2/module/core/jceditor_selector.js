/*
	본 셀렉터는 jQuery 및 문학청년님의 simplejQuery Tip, Sizzle Engine을 이용하여 
	이지윅 에디터 개발에 필요한 기능만 추출하여 작성하였음.
	jQuery : http://www.jQuery.com
	Sizzle : http://sizzlejs.com/
	문학청년 : http://youngman.kr/
*/
(function(window){

<<<<<<< HEAD
=======
	var jEventProxy = function(e) {
		var crossEvent = e ? e : global.event;
		jEventProxy.callback(crossEvent);
	}

>>>>>>> fe450dfa2be1acf3740cdddd377cf254674c63cd
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

				var hasOwnProperty = false;
				//IE9 이하에서는 document Object 는 hasOwnProperty 지원 안함.
				if(!selector.hasOwnProperty){
					hasOwnProperty = Object.prototype.hasOwnProperty.call(selector,"length");
				}else{
					hasOwnProperty = selector.hasOwnProperty("length");
				}

				if(hasOwnProperty){
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
		eq : function(idx){
			return this.get(idx);
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

<<<<<<< HEAD
		width : function() {
			var args = arguments;
			
			if(this.length == 1 && args.length == 0)  {
				return Number(this.elems[0].clientWidth);
			}
			
			return "";
		},

		height : function() {

			var args = arguments;
			
			if(this.length == 1 && args.length == 0)  {
				return Number(this.elems[0].clientHeight);
			}
			
			return "";
		},

=======
>>>>>>> fe450dfa2be1acf3740cdddd377cf254674c63cd
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
				this.style.display = "block";
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
		},


		/**
		* A.appendTo(B)
		* A 엘리먼트가 B 엘리먼트 안쪽(자식노드의) 마지막노드로 이동한다.
		* ex)_j('#aaa').insertBefore(_j("#cccc"));
		*
		* @param obj DOM 객체 또는 _j객체
		* @author 장진철 zerocooldog@pionnet.co.kr
		**/
		appendTo : function(obj) {

			this.each(function(i,el) {

				if(obj.constructor == jceSelector){
					obj.append(this);
				} else if(obj.nodeType) {
					obj.appendChild(this);
				}
			});
			
			return this;
		},

		/**
		* A.prependTo(B)
		* A 엘리먼트가 B 엘리먼트 안으로(자식노드의) 첫번째노드로 이동한다.
		* ex)_j('#aaa').prependTo(_j("#cccc"));
		*
		* @param obj DOM 객체 또는 _j객체
		* @author 장진철 zerocooldog@pionnet.co.kr
		**/
		prependTo : function(obj) {

			this.each(function(i,el) {

				if(obj.constructor == jceSelector){
					obj.prepend(this);
				} else if(obj.nodeType) {
					obj.insertBefore(this, obj.childNodes[0]);
				}
			});
			
			return this;
		},


		/**
		* A.insertBefore(B)
		* A 엘리먼트가 B 항목 앞으로 이동한다.
		* ex)_j('#aaa').insertBefore(_j("#cccc"));
		*
		* @param obj DOM 객체 또는 _j객체
		* @author 장진철 zerocooldog@pionnet.co.kr
		**/
		insertBefore : function(obj) {

			if(this.length > 0) {

				var elem = this.get(),
					target = (obj.length == 1) ? obj.get(0) : _j(obj).get(0),
					parent = (target[0].parentNode) ? target[0].parentNode : target[0].parentElement;

				for (var i = 0,elemLength = elem.length; i < elemLength; i++) {
					parent.insertBefore(elem[i], target[0]);
				};

			}
			
			return this;
		},


		/**
		* A.insertAfter(B)
		* A 엘리먼트가 B 항목 뒤로 이동한다.
		* ex)_j('#aaa').insertAfter(_j("#cccc"));
		*
		* @param obj DOM 객체 또는 _j객체
		* @author 장진철 zerocooldog@pionnet.co.kr
		**/
		insertAfter : function(obj) {

			if(this.length > 0) {

				var elem = this.get(),
					target = (obj.length == 1) ? obj.get(0) : _j(obj).get(0),
					parent = (target[0].parentNode) ? target[0].parentNode : target[0].parentElement;

				for (var i = 0,elemLength = elem.length; i < elemLength; i++) {
					parent.insertBefore(elem[i], target[0].nextSibling);
				};
<<<<<<< HEAD
=======

>>>>>>> fe450dfa2be1acf3740cdddd377cf254674c63cd
			}
			
			return this;
		},


		/**
		* A.append(B)
		* B엘리먼트를 A 엘리먼트 안쪽(자식노드) 끝 부분에 붙인다.
		* ex)_j('#aaa').append(_j("#cccc"));
		*
		* @param obj DOM 객체 또는 _j객체
		* @author 장진철 zerocooldog@pionnet.co.kr
		**/		
		append : function(obj) {

			this.each(function(i,el) {

				if(typeof obj == "string") { 

					this.innerHTML += obj;

				} else if(obj.constructor == jceSelector){

					if(obj.length > 0){
						obj.each(function(i){
							el.appendChild(this);
						});
					}

				} else if(obj.nodeType) {
					this.appendChild(obj);
				}
			});
			
			return this;
		},		


		/**
		* A.prepend(B)
		* B엘리먼트를 A 엘리먼트 안쪽(자식노드)  맨 앞 부분에 붙인다.
		* ex)_j('#aaa').prepend(_j("#cccc"));
		*
		* @param obj DOM 객체 또는 _j객체
		* @author 장진철 zerocooldog@pionnet.co.kr
		**/		
		prepend : function(obj) {

			this.each(function(i,el) {

				if(typeof obj == "string") { 
					this.innerHTML += obj;

				} else if(obj.constructor == jceSelector){

					if(obj.length > 0) {
						obj.each(function(i){
							el.insertBefore(this, el.childNodes[0]);
						});
					}

				} else if(obj.nodeType) {
					this.insertBefore(obj, this.childNodes[0]);
				}
			});
			
			return this;
		},	
		
<<<<<<< HEAD
		/**
		* 부모 엘리먼트를 찾는다.
		* @param obj DOM 객체 또는 _j객체
		* @author 장진철 zerocooldog@pionnet.co.kr
		**/		
		parent : function() {

			var parent = null;
			if(this.length > 0){
				parent = (this.elems[0].parentNode) ? this.elems[0].parentNode : this.elems[0].parentElement;
			}
			
			return _j(parent);
		},	

=======
>>>>>>> fe450dfa2be1acf3740cdddd377cf254674c63cd

		/**
		* 이벤트 등록
		* @param eventType 이벤트 명 on 글자를 붙이지 않는다 ex) click,mouseout
		* @param callback 이벤트 진행 시 실행 할 함수 
		*/
		bind : function(eventType, callback) {
			if(typeof eventType == "string" && typeof callback == "function") {
<<<<<<< HEAD
=======
				jEventProxy.callback = callback;
>>>>>>> fe450dfa2be1acf3740cdddd377cf254674c63cd
				
				this.each(function(i) {
					(function(target, type) {
						if(target.addEventListener) {
<<<<<<< HEAD
							target.addEventListener(type, callback, false);
						} else if(target.attachEvent) {
							target.attachEvent( "on" + type, callback);
=======
							target.addEventListener(type, jEventProxy, false);
						} else if(target.attachEvent) {
							target.attachEvent( "on" + type, jEventProxy);
>>>>>>> fe450dfa2be1acf3740cdddd377cf254674c63cd
						}
					})(this, eventType.toLowerCase());
				});
			}
			
			return this;
		},


		/**
		* 이벤트 제거
		* @param eventType 이벤트 명 on 글자를 붙이지 않는다 ex) click,mouseout
		*	
		*/
<<<<<<< HEAD
		unbind : function(eventType,callback) {
=======
		unbind : function(eventType) {
>>>>>>> fe450dfa2be1acf3740cdddd377cf254674c63cd

			if(typeof eventType == "string") {
				this.each(function(i) {
					(function(target, type) {
						if(target.detachEvent) {
<<<<<<< HEAD
							target.detachEvent("on" + type, callback);
						} else {
							target.removeEventListener(type, callback);
=======
							target.detachEvent("on" + type, jEventProxy);
						} else {
							target.removeEventListener(type, jEventProxy);
>>>>>>> fe450dfa2be1acf3740cdddd377cf254674c63cd
						}
					})(this, eventType.toLowerCase());
				});
			}
			
			return this;
		}		
	};

	jceSelector.fn.init.prototype = jceSelector.fn;

	if ( typeof window === "object" && typeof window.document === "object" ) {
		window._j = jceSelector;
	}

})(window);
