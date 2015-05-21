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