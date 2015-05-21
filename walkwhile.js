function walk(node,callback){
	var e=node,f=callback;
	if(e && e.nodeType===1){
		f(e);
		e=e.firstChild||false;
		while(e){walk(e,f);e=e.nextSibling;};
	};
};


walk(document.body, function(x){
    console.log(x.tagName)
});


old:
//node,callback
function walk(node,f){
	var e=node,i='nodeType';
	if(e && i in e && e[i]===1){
		i=f;i(e);
		e=e.firstChild||false;
		while(e){
			walk(e,i);
			e=e.nextSibling;
		};
	};
};
//
//e instanceof HTMLElement

function walk(node,callback){
 var e=node,f=callback;
 if(e && e.nodeType===1){f(e);e=e.firstChild||false;while(e){walk(e,f);e=e.nextSibling;};};
};


walk(document.body, function(x){
    console.log(x.tagName)
});
