function css(a) {
    var sheets = document.styleSheets, o = [];
    a.matches = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
    for (var i in sheets) {
        var rules = sheets[i].rules || sheets[i].cssRules;
        for (var r in rules) {
            if (a.matches(rules[r].selectorText)) {
                o.push(rules[r].cssText);
            }
        }
    }
    return o;
}


function css(a) {
 var i,s=document.styleSheets,r,j,o,x=[];
 for(i in s){r=s[i].rules;for(j in r){o=r[j];if(a.matches(o.selectorText)){x.push(o.cssText);};};};
 return x;
}
