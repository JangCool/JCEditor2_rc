(function(window){


	var rootjQuery;

	var jceSelector = function(selector,context){

		return new jceSelector.fn.init( selector, context, rootjQuery );
	};

	jceSelector.fn = jceSelector.prototype = {
		constructor : jceSelector,
		
		init : function(){
			
		}
	};


	// Give the init function the jQuery prototype for later instantiation
	jceSelector.fn.init.prototype = jceSelector.fn;


 	rootjQuery = jceSelector(document);


	if ( typeof window === "object" && typeof window.document === "object" ) {
		window._j = jceSelector;
	}

})(window);