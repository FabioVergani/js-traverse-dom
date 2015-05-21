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


walk(document.body, function(x){
    console.log(x.outerHTML);
});
