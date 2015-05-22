console.clear();
//
(function(w){
	"use strict";
	function walk(node,filter){var f=filter,e=f(node);while(e){walk(e,f);e=e.nextSibling;}}
	function tree(node){var e=node;if(has(e,'nodeType')===1){tree.accepted(e);return e.firstChild;}}

	var d=w.document,
	isDefined=function(x){return typeof(x)!=='undefined';},
	shortCall=function(x){return Function.prototype.call.bind(x);},
	hasOwn=shortCall(Object.prototype.hasOwnProperty),
	has=function(o,p){return (isDefined(o) && (p in o) && hasOwn(o,p))?o[p]:false;},//...
	result=false;

	//garbage:
	shortCall=null;

	//customize:
	tree.accepted=function(tag){
	 var e=tag;
	 console.dir(e.tagName);
	};

	walk(d.documentElement,tree);
})(window);
