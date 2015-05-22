console.clear();
//
(function(w){
	"use strict";
	function walk(node,filter){var f=filter,e=f(node);while(e){walk(e,f);e=e.nextSibling;}}


	function tree(node){
	 var e=node, f=getProp, i=f(e,'nodeType');
	 if(i===false){
		console.error('nodetype:',i);
	 }else{
		 i=['','element','attribute','text','cdatasection','entityreference','entity','instruction','comment','document','doctype','fragment','notation'][i];
		 f=f(tree.handle,i);
		 if(f!==false){f(e);return e.firstChild;}else{console.debug('%cnode:',i,'color:red'');};
	 };
	}


	var d=w.document,
	isDefined=function(x){return typeof(x)!=='undefined';},
	shortCall=function(x){return Function.prototype.call.bind(x);},
	hasOwn=shortCall(Object.prototype.hasOwnProperty),
	getProp=function(o,p){return (isDefined(o) && (p in o) && hasOwn(o,p))?o[p]:false;},//...
	result=false;

	//garbage:
	shortCall=null;

	//customize:
	tree.handle={
		element:function(tag){
			var e=tag;console.dir(e.tagName);
		}/*,...*/
	};



	walk(d.documentElement,tree);
})(window);


/*
console.log(e.nodeType);
ELEMENT::1
ATTRIBUTE::2
TEXT::3
CDATA_SECTION::4
ENTITY_REFERENCE::5
ENTITY::6
PROCESSING_INSTRUCTION::7
COMMENT::8
DOCUMENT::9
DOCUMENT_TYPE::10
DOCUMENT_FRAGMENT::11
NOTATION::12
*/











console.clear();
//
(function(w){
	"use strict";
	function walk(node,filter){var f=filter,e=f(node);while(e){walk(e,f);e=e.nextSibling;}}

	function tree(node){
		var e=node, f=getProp;
		f=f(tree.handler,f(e,'nodeType'));
		if(f!==false){f(e);f=e.firstChild;}
		return f;
	}


	var d=w.document,
	isDefined=function(x){return typeof(x)!=='undefined';},
	shortCall=function(x){return Function.prototype.call.bind(x);},
	hasOwn=shortCall(Object.prototype.hasOwnProperty),
	getProp=function(o,p){return (isDefined(o) && (p in o) && hasOwn(o,p))?o[p]:false;},//...
	result=false;

	//garbage:
	shortCall=null;

	//customize:
	tree.handler=[
		null,
		function(tag){
			var e=tag;console.dir(e.tagName);
		},
	];

	walk(d.documentElement,tree);
})(window);



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
