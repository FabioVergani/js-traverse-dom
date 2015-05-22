
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



//


function walk(node,filter){
    var f=filter,e=f(node);

        while(e){
            walk(e,f);
            e = e.nextSibling;
        }

}
//

function has(o,p){return ((p in o) && Object.prototype.hasOwnProperty.call(o,p))?o[p]:false;}
//

function tree(tag){
 var e=tag;
 if(has(e,'nodeType')===1){
  //accepted:processit
  console.dir(e.tagName);
  return e.firstChild;
 }
}
//

var w=window, d=w.document;
walk(d.documentElement,tree);


/*
//function hasProperty(o,p){return Object.prototype.hasOwnProperty.call(o,p);};
*/
