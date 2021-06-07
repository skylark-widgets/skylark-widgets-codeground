/**
 * skylark-codemirror - A version of codemirror 5.45  that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-codemirror/
 * @license MIT
 */
define(["../../CodeMirror","../../addon/mode/multiplex"],function(e){"use strict";e.defineMode("twig:inner",function(){var e=["and","as","autoescape","endautoescape","block","do","endblock","else","elseif","extends","for","endfor","embed","endembed","filter","endfilter","flush","from","if","endif","in","is","include","import","not","or","set","spaceless","endspaceless","with","endwith","trans","endtrans","blocktrans","endblocktrans","macro","endmacro","use","verbatim","endverbatim"],t=/^[+\-*&%=<>!?|~^]/,n=/^[:\[\(\{]/,i=["true","false","null","empty","defined","divisibleby","divisible by","even","odd","iterable","sameas","same as"],r=/^(\d[+\-\*\/])?\d+(\.\d+)?/;return e=new RegExp("(("+e.join(")|(")+"))\\b"),i=new RegExp("(("+i.join(")|(")+"))\\b"),{startState:function(){return{}},token:function(a,o){return function(a,o){var s=a.peek();if(o.incomment)return a.skipTo("#}")?(a.eatWhile(/\#|}/),o.incomment=!1):a.skipToEnd(),"comment";if(o.intag){if(o.operator){if(o.operator=!1,a.match(i))return"atom";if(a.match(r))return"number"}if(o.sign){if(o.sign=!1,a.match(i))return"atom";if(a.match(r))return"number"}if(o.instring)return s==o.instring&&(o.instring=!1),a.next(),"string";if("'"==s||'"'==s)return o.instring=s,a.next(),"string";if(a.match(o.intag+"}")||a.eat("-")&&a.match(o.intag+"}"))return o.intag=!1,"tag";if(a.match(t))return o.operator=!0,"operator";if(a.match(n))o.sign=!0;else if(a.eat(" ")||a.sol()){if(a.match(e))return"keyword";if(a.match(i))return"atom";if(a.match(r))return"number";a.sol()&&a.next()}else a.next();return"variable"}if(a.eat("{")){if(a.eat("#"))return o.incomment=!0,a.skipTo("#}")?(a.eatWhile(/\#|}/),o.incomment=!1):a.skipToEnd(),"comment";if(s=a.eat(/\{|%/))return o.intag=s,"{"==s&&(o.intag="}"),a.eat("-"),"tag"}a.next()}(a,o)}}}),e.defineMode("twig",function(t,n){var i=e.getMode(t,"twig:inner");return n&&n.base?e.multiplexingMode(e.getMode(t,n.base),{open:/\{[{#%]/,close:/[}#%]\}/,mode:i,parseDelimiters:!0}):i}),e.defineMIME("text/x-twig","twig")});
//# sourceMappingURL=../../sourcemaps/mode/twig/twig.js.map