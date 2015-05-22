
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
