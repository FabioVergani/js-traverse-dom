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

function walk(obj,f){var o=obj,p='nodeType';if(o && p in o && o[p]===1){p=f;p(o);o=o.firstChild||false;while(o){walk(o,p);o=o.nextSibling;};};};

walk(document.body, function(x){
    console.log(x.outerHTML);
});
