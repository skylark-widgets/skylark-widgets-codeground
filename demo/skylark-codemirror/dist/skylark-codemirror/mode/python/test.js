/**
 * skylark-codemirror - A version of codemirror 5.45  that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-codemirror/
 * @license MIT
 */
!function(){var r=CodeMirror.getMode({indentUnit:4},{name:"python",version:3,singleLineStringErrors:!1});function e(e){test.mode(e,r,Array.prototype.slice.call(arguments,1))}e("decoratorStartOfLine","[meta @dec]","[keyword def] [def function]():","    [keyword pass]"),e("decoratorIndented","[keyword class] [def Foo]:","    [meta @dec]","    [keyword def] [def function]():","        [keyword pass]"),e("matmulWithSpace:","[variable a] [operator @] [variable b]"),e("matmulWithoutSpace:","[variable a][operator @][variable b]"),e("matmulSpaceBefore:","[variable a] [operator @][variable b]");for(var i=["+","-","*","/","=","!",">","<"],t=0;t<i.length;++t){var n=i[t];e("before_equal_sign_"+n,"[variable a] [operator "+n+"=] [variable b]")}e("fValidStringPrefix","[string f'this is a]{[variable formatted]}[string string']"),e("fValidExpressioninFString","[string f'expression ]{[number 100][operator *][number 5]}[string string']"),e("fInvalidFString","[error f'this is wrong}]"),e("fNestedFString","[string f'expression ]{[number 100] [operator +] [string f'inner]{[number 5]}[string ']}[string string']"),e("uValidStringPrefix","[string u'this is an unicode string']"),e("nestedString","[string f']{[variable b][[ [string \"c\"] ]]}[string f'] [comment # oops]"),e("bracesInFString","[string f']{[variable x] [operator +] {}}[string !']"),e("nestedFString","[string f']{[variable b][[ [string f\"c\"] ]]}[string f'] [comment # oops]")}();
//# sourceMappingURL=../../sourcemaps/mode/python/test.js.map
