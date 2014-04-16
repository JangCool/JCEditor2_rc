(function(window){

	var jceSelector = function(selector,context){

		return new jceSelector.fn.init( selector, context );
	};

	jceSelector.fn = jceSelector.prototype = {
		constructor : jceSelector,
		
		init : function( selector, context ){

			//초기화
			this.elems = _jSizzle(selector,context);
			this.length = this.elems.length || 0;

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
		}
	};


	// Give the init function the jQuery prototype for later instantiation
	jceSelector.fn.init.prototype = jceSelector.fn;



	if ( typeof window === "object" && typeof window.document === "object" ) {
		window._j = jceSelector;
	}

})(window);