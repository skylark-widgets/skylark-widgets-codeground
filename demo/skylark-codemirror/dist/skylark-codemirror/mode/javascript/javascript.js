/**
 * skylark-codemirror - A version of codemirror 5.45  that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-codemirror/
 * @license MIT
 */
define(["../../CodeMirror"],function(e){"use strict";e.defineMode("javascript",function(t,r){var n,a,i=t.indentUnit,o=r.statementIndent,c=r.jsonld,u=r.json||c,s=r.typescript,f=r.wordCharacters||/[\w$\xa1-\uffff]/,l=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),r=e("keyword b"),n=e("keyword c"),a=e("keyword d"),i=e("operator"),o={type:"atom",style:"atom"};return{if:e("if"),while:t,with:t,else:r,do:r,try:r,finally:r,return:a,break:a,continue:a,new:e("new"),delete:n,void:n,throw:n,debugger:e("debugger"),var:e("var"),const:e("var"),let:e("var"),function:e("function"),catch:e("catch"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:i,typeof:i,instanceof:i,true:o,false:o,null:o,undefined:o,NaN:o,Infinity:o,this:e("this"),class:e("class"),super:e("atom"),yield:n,export:e("export"),import:e("import"),extends:n,await:n}}(),d=/[+\-*&%=<>!?|~^@]/,p=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function m(e,t,r){return n=e,a=r,t}function v(e,t){var r,n=e.next();if('"'==n||"'"==n)return t.tokenize=(r=n,function(e,t){var n,a=!1;if(c&&"@"==e.peek()&&e.match(p))return t.tokenize=v,m("jsonld-keyword","meta");for(;null!=(n=e.next())&&(n!=r||a);)a=!a&&"\\"==n;return a||(t.tokenize=v),m("string","string")}),t.tokenize(e,t);if("."==n&&e.match(/^\d+(?:[eE][+\-]?\d+)?/))return m("number","number");if("."==n&&e.match(".."))return m("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(n))return m(n);if("="==n&&e.eat(">"))return m("=>","operator");if("0"==n&&e.match(/^(?:x[\da-f]+|o[0-7]+|b[01]+)n?/i))return m("number","number");if(/\d/.test(n))return e.match(/^\d*(?:n|(?:\.\d*)?(?:[eE][+\-]?\d+)?)?/),m("number","number");if("/"==n)return e.eat("*")?(t.tokenize=k,k(e,t)):e.eat("/")?(e.skipToEnd(),m("comment","comment")):Le(e,t,1)?(function(e){for(var t,r=!1,n=!1;null!=(t=e.next());){if(!r){if("/"==t&&!n)return;"["==t?n=!0:n&&"]"==t&&(n=!1)}r=!r&&"\\"==t}}(e),e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),m("regexp","string-2")):(e.eat("="),m("operator","operator",e.current()));if("`"==n)return t.tokenize=y,y(e,t);if("#"==n)return e.skipToEnd(),m("error","error");if(d.test(n))return">"==n&&t.lexical&&">"==t.lexical.type||(e.eat("=")?"!"!=n&&"="!=n||e.eat("="):/[<>*+\-]/.test(n)&&(e.eat(n),">"==n&&e.eat(n))),m("operator","operator",e.current());if(f.test(n)){e.eatWhile(f);var a=e.current();if("."!=t.lastType){if(l.propertyIsEnumerable(a)){var i=l[a];return m(i.type,i.style,a)}if("async"==a&&e.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/,!1))return m("async","keyword",a)}return m("variable","variable",a)}}function k(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=v;break}n="*"==r}return m("comment","comment")}function y(e,t){for(var r,n=!1;null!=(r=e.next());){if(!n&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=v;break}n=!n&&"\\"==r}return m("quasi","string-2",e.current())}var w="([{}])";function b(e,t){t.fatArrowAt&&(t.fatArrowAt=null);var r=e.string.indexOf("=>",e.start);if(!(r<0)){if(s){var n=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,r));n&&(r=n.index)}for(var a=0,i=!1,o=r-1;o>=0;--o){var c=e.string.charAt(o),u=w.indexOf(c);if(u>=0&&u<3){if(!a){++o;break}if(0==--a){"("==c&&(i=!0);break}}else if(u>=3&&u<6)++a;else if(f.test(c))i=!0;else{if(/["'\/]/.test(c))return;if(i&&!a){++o;break}}}i&&!a&&(t.fatArrowAt=o)}}var x={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,"jsonld-keyword":!0};function h(e,t,r,n,a,i){this.indented=e,this.column=t,this.type=r,this.prev=a,this.info=i,null!=n&&(this.align=n)}function g(e,t){for(var r=e.localVars;r;r=r.next)if(r.name==t)return!0;for(var n=e.context;n;n=n.prev)for(r=n.vars;r;r=r.next)if(r.name==t)return!0}var j={state:null,column:null,marked:null,cc:null};function M(){for(var e=arguments.length-1;e>=0;e--)j.cc.push(arguments[e])}function V(){return M.apply(null,arguments),!0}function A(e,t){for(var r=t;r;r=r.next)if(r.name==e)return!0;return!1}function E(e){var t=j.state;if(j.marked="def",t.context)if("var"==t.lexical.info&&t.context&&t.context.block){var n=function e(t,r){if(r){if(r.block){var n=e(t,r.prev);return n?n==r.prev?r:new I(n,r.vars,!0):null}return A(t,r.vars)?r:new I(r.prev,new T(t,r.vars),!1)}return null}(e,t.context);if(null!=n)return void(t.context=n)}else if(!A(e,t.localVars))return void(t.localVars=new T(e,t.localVars));r.globalVars&&!A(e,t.globalVars)&&(t.globalVars=new T(e,t.globalVars))}function z(e){return"public"==e||"private"==e||"protected"==e||"abstract"==e||"readonly"==e}function I(e,t,r){this.prev=e,this.vars=t,this.block=r}function T(e,t){this.name=e,this.next=t}var $=new T("this",new T("arguments",null));function C(){j.state.context=new I(j.state.context,j.state.localVars,!1),j.state.localVars=$}function O(){j.state.context=new I(j.state.context,j.state.localVars,!0),j.state.localVars=null}function q(){j.state.localVars=j.state.context.vars,j.state.context=j.state.context.prev}function P(e,t){var r=function(){var r=j.state,n=r.indented;if("stat"==r.lexical.type)n=r.lexical.indented;else for(var a=r.lexical;a&&")"==a.type&&a.align;a=a.prev)n=a.indented;r.lexical=new h(n,j.stream.column(),e,null,r.lexical,t)};return r.lex=!0,r}function S(){var e=j.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function N(e){return function t(r){return r==e?V():";"==e||"}"==r||")"==r||"]"==r?M():V(t)}}function U(e,t){return"var"==e?V(P("vardef",t),we,N(";"),S):"keyword a"==e?V(P("form"),D,U,S):"keyword b"==e?V(P("form"),U,S):"keyword d"==e?j.stream.match(/^\s*$/,!1)?V():V(P("stat"),G,N(";"),S):"debugger"==e?V(N(";")):"{"==e?V(P("}"),O,oe,S,q):";"==e?V():"if"==e?("else"==j.state.lexical.info&&j.state.cc[j.state.cc.length-1]==S&&j.state.cc.pop()(),V(P("form"),D,U,S,Me)):"function"==e?V(ze):"for"==e?V(P("form"),Ve,U,S):"class"==e||s&&"interface"==t?(j.marked="keyword",V(P("form","class"==e?e:t),Oe,S)):"variable"==e?s&&"declare"==t?(j.marked="keyword",V(U)):s&&("module"==t||"enum"==t||"type"==t)&&j.stream.match(/^\s*\w/,!1)?(j.marked="keyword","enum"==t?V(Je):"type"==t?V(Te,N("operator"),fe,N(";")):V(P("form"),be,N("{"),P("}"),oe,S,S)):s&&"namespace"==t?(j.marked="keyword",V(P("form"),H,U,S)):s&&"abstract"==t?(j.marked="keyword",V(U)):V(P("stat"),_):"switch"==e?V(P("form"),D,N("{"),P("}","switch"),O,oe,S,S,q):"case"==e?V(H,N(":")):"default"==e?V(N(":")):"catch"==e?V(P("form"),C,B,U,S,q):"export"==e?V(P("stat"),Ne,S):"import"==e?V(P("stat"),Be,S):"async"==e?V(U):"@"==t?V(H,U):M(P("stat"),H,N(";"),S)}function B(e){if("("==e)return V($e,N(")"))}function H(e,t){return F(e,t,!1)}function W(e,t){return F(e,t,!0)}function D(e){return"("!=e?M():V(P(")"),H,N(")"),S)}function F(e,t,r){if(j.state.fatArrowAt==j.stream.start){var n=r?X:R;if("("==e)return V(C,P(")"),ae($e,")"),S,N("=>"),n,q);if("variable"==e)return M(C,be,N("=>"),n,q)}var a=r?K:J;return x.hasOwnProperty(e)?V(a):"function"==e?V(ze,a):"class"==e||s&&"interface"==t?(j.marked="keyword",V(P("form"),Ce,S)):"keyword c"==e||"async"==e?V(r?W:H):"("==e?V(P(")"),G,N(")"),S,a):"operator"==e||"spread"==e?V(r?W:H):"["==e?V(P("]"),Ge,S,a):"{"==e?ie(te,"}",null,a):"quasi"==e?M(L,a):"new"==e?V(function(e){return function(t){return"."==t?V(e?Z:Y):"variable"==t&&s?V(ve,e?K:J):M(e?W:H)}}(r)):"import"==e?V(H):V()}function G(e){return e.match(/[;\}\)\],]/)?M():M(H)}function J(e,t){return","==e?V(H):K(e,t,!1)}function K(e,t,r){var n=0==r?J:K,a=0==r?H:W;return"=>"==e?V(C,r?X:R,q):"operator"==e?/\+\+|--/.test(t)||s&&"!"==t?V(n):s&&"<"==t&&j.stream.match(/^([^>]|<.*?>)*>\s*\(/,!1)?V(P(">"),ae(fe,">"),S,n):"?"==t?V(H,N(":"),a):V(a):"quasi"==e?M(L,n):";"!=e?"("==e?ie(W,")","call",n):"."==e?V(ee,n):"["==e?V(P("]"),G,N("]"),S,n):s&&"as"==t?(j.marked="keyword",V(fe,n)):"regexp"==e?(j.state.lastType=j.marked="operator",j.stream.backUp(j.stream.pos-j.stream.start-1),V(a)):void 0:void 0}function L(e,t){return"quasi"!=e?M():"${"!=t.slice(t.length-2)?V(L):V(H,Q)}function Q(e){if("}"==e)return j.marked="string-2",j.state.tokenize=y,V(L)}function R(e){return b(j.stream,j.state),M("{"==e?U:H)}function X(e){return b(j.stream,j.state),M("{"==e?U:W)}function Y(e,t){if("target"==t)return j.marked="keyword",V(J)}function Z(e,t){if("target"==t)return j.marked="keyword",V(K)}function _(e){return":"==e?V(S,U):M(J,N(";"),S)}function ee(e){if("variable"==e)return j.marked="property",V()}function te(e,t){if("async"==e)return j.marked="property",V(te);if("variable"==e||"keyword"==j.style){return j.marked="property","get"==t||"set"==t?V(re):(s&&j.state.fatArrowAt==j.stream.start&&(r=j.stream.match(/^\s*:\s*/,!1))&&(j.state.fatArrowAt=j.stream.pos+r[0].length),V(ne));var r}else{if("number"==e||"string"==e)return j.marked=c?"property":j.style+" property",V(ne);if("jsonld-keyword"==e)return V(ne);if(s&&z(t))return j.marked="keyword",V(te);if("["==e)return V(H,ce,N("]"),ne);if("spread"==e)return V(W,ne);if("*"==t)return j.marked="keyword",V(te);if(":"==e)return M(ne)}}function re(e){return"variable"!=e?M(ne):(j.marked="property",V(ze))}function ne(e){return":"==e?V(W):"("==e?M(ze):void 0}function ae(e,t,r){function n(a,i){if(r?r.indexOf(a)>-1:","==a){var o=j.state.lexical;return"call"==o.info&&(o.pos=(o.pos||0)+1),V(function(r,n){return r==t||n==t?M():M(e)},n)}return a==t||i==t?V():r&&r.indexOf(";")>-1?M(e):V(N(t))}return function(r,a){return r==t||a==t?V():M(e,n)}}function ie(e,t,r){for(var n=3;n<arguments.length;n++)j.cc.push(arguments[n]);return V(P(t,r),ae(e,t),S)}function oe(e){return"}"==e?V():M(U,oe)}function ce(e,t){if(s){if(":"==e||"in"==t)return V(fe);if("?"==t)return V(ce)}}function ue(e){if(s&&":"==e)return j.stream.match(/^\s*\w+\s+is\b/,!1)?V(H,se,fe):V(fe)}function se(e,t){if("is"==t)return j.marked="keyword",V()}function fe(e,t){return"keyof"==t||"typeof"==t||"infer"==t?(j.marked="keyword",V("typeof"==t?W:fe)):"variable"==e||"void"==t?(j.marked="type",V(me)):"|"==t||"&"==t?V(fe):"string"==e||"number"==e||"atom"==e?V(me):"["==e?V(P("]"),ae(fe,"]",","),S,me):"{"==e?V(P("}"),ae(de,"}",",;"),S,me):"("==e?V(ae(pe,")"),le,me):"<"==e?V(ae(fe,">"),fe):void 0}function le(e){if("=>"==e)return V(fe)}function de(e,t){return"variable"==e||"keyword"==j.style?(j.marked="property",V(de)):"?"==t||"number"==e||"string"==e?V(de):":"==e?V(fe):"["==e?V(N("variable"),ce,N("]"),de):"("==e?M(Ie,de):void 0}function pe(e,t){return"variable"==e&&j.stream.match(/^\s*[?:]/,!1)||"?"==t?V(pe):":"==e?V(fe):"spread"==e?V(pe):M(fe)}function me(e,t){return"<"==t?V(P(">"),ae(fe,">"),S,me):"|"==t||"."==e||"&"==t?V(fe):"["==e?V(fe,N("]"),me):"extends"==t||"implements"==t?(j.marked="keyword",V(fe)):"?"==t?V(fe,N(":"),fe):void 0}function ve(e,t){if("<"==t)return V(P(">"),ae(fe,">"),S,me)}function ke(){return M(fe,ye)}function ye(e,t){if("="==t)return V(fe)}function we(e,t){return"enum"==t?(j.marked="keyword",V(Je)):M(be,ce,ge,je)}function be(e,t){return s&&z(t)?(j.marked="keyword",V(be)):"variable"==e?(E(t),V()):"spread"==e?V(be):"["==e?ie(he,"]"):"{"==e?ie(xe,"}"):void 0}function xe(e,t){return"variable"!=e||j.stream.match(/^\s*:/,!1)?("variable"==e&&(j.marked="property"),"spread"==e?V(be):"}"==e?M():"["==e?V(H,N("]"),N(":"),xe):V(N(":"),be,ge)):(E(t),V(ge))}function he(){return M(be,ge)}function ge(e,t){if("="==t)return V(W)}function je(e){if(","==e)return V(we)}function Me(e,t){if("keyword b"==e&&"else"==t)return V(P("form","else"),U,S)}function Ve(e,t){return"await"==t?V(Ve):"("==e?V(P(")"),Ae,S):void 0}function Ae(e){return"var"==e?V(we,Ee):"variable"==e?V(Ee):M(Ee)}function Ee(e,t){return")"==e?V():";"==e?V(Ee):"in"==t||"of"==t?(j.marked="keyword",V(H,Ee)):M(H,Ee)}function ze(e,t){return"*"==t?(j.marked="keyword",V(ze)):"variable"==e?(E(t),V(ze)):"("==e?V(C,P(")"),ae($e,")"),S,ue,U,q):s&&"<"==t?V(P(">"),ae(ke,">"),S,ze):void 0}function Ie(e,t){return"*"==t?(j.marked="keyword",V(Ie)):"variable"==e?(E(t),V(Ie)):"("==e?V(C,P(")"),ae($e,")"),S,ue,q):s&&"<"==t?V(P(">"),ae(ke,">"),S,Ie):void 0}function Te(e,t){return"keyword"==e||"variable"==e?(j.marked="type",V(Te)):"<"==t?V(P(">"),ae(ke,">"),S):void 0}function $e(e,t){return"@"==t&&V(H,$e),"spread"==e?V($e):s&&z(t)?(j.marked="keyword",V($e)):s&&"this"==e?V(ce,ge):M(be,ce,ge)}function Ce(e,t){return"variable"==e?Oe(e,t):qe(e,t)}function Oe(e,t){if("variable"==e)return E(t),V(qe)}function qe(e,t){return"<"==t?V(P(">"),ae(ke,">"),S,qe):"extends"==t||"implements"==t||s&&","==e?("implements"==t&&(j.marked="keyword"),V(s?fe:H,qe)):"{"==e?V(P("}"),Pe,S):void 0}function Pe(e,t){return"async"==e||"variable"==e&&("static"==t||"get"==t||"set"==t||s&&z(t))&&j.stream.match(/^\s+[\w$\xa1-\uffff]/,!1)?(j.marked="keyword",V(Pe)):"variable"==e||"keyword"==j.style?(j.marked="property",V(s?Se:ze,Pe)):"number"==e||"string"==e?V(s?Se:ze,Pe):"["==e?V(H,ce,N("]"),s?Se:ze,Pe):"*"==t?(j.marked="keyword",V(Pe)):s&&"("==e?M(Ie,Pe):";"==e||","==e?V(Pe):"}"==e?V():"@"==t?V(H,Pe):void 0}function Se(e,t){if("?"==t)return V(Se);if(":"==e)return V(fe,ge);if("="==t)return V(W);var r=j.state.lexical.prev;return M(r&&"interface"==r.info?Ie:ze)}function Ne(e,t){return"*"==t?(j.marked="keyword",V(Fe,N(";"))):"default"==t?(j.marked="keyword",V(H,N(";"))):"{"==e?V(ae(Ue,"}"),Fe,N(";")):M(U)}function Ue(e,t){return"as"==t?(j.marked="keyword",V(N("variable"))):"variable"==e?M(W,Ue):void 0}function Be(e){return"string"==e?V():"("==e?M(H):M(He,We,Fe)}function He(e,t){return"{"==e?ie(He,"}"):("variable"==e&&E(t),"*"==t&&(j.marked="keyword"),V(De))}function We(e){if(","==e)return V(He,We)}function De(e,t){if("as"==t)return j.marked="keyword",V(He)}function Fe(e,t){if("from"==t)return j.marked="keyword",V(H)}function Ge(e){return"]"==e?V():M(ae(W,"]"))}function Je(){return M(P("form"),be,N("{"),P("}"),ae(Ke,"}"),S,S)}function Ke(){return M(be,ge)}function Le(e,t,r){return t.tokenize==v&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType)||"quasi"==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-(r||0)))}return q.lex=!0,S.lex=!0,{startState:function(e){var t={tokenize:v,lastType:"sof",cc:[],lexical:new h((e||0)-i,0,"block",!1),localVars:r.localVars,context:r.localVars&&new I(null,null,!1),indented:e||0};return r.globalVars&&"object"==typeof r.globalVars&&(t.globalVars=r.globalVars),t},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),b(e,t)),t.tokenize!=k&&e.eatSpace())return null;var r=t.tokenize(e,t);return"comment"==n?r:(t.lastType="operator"!=n||"++"!=a&&"--"!=a?n:"incdec",function(e,t,r,n,a){var i=e.cc;for(j.state=e,j.stream=a,j.marked=null,j.cc=i,j.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((i.length?i.pop():u?H:U)(r,n)){for(;i.length&&i[i.length-1].lex;)i.pop()();return j.marked?j.marked:"variable"==r&&g(e,n)?"variable-2":t}}(t,r,n,a,e))},indent:function(t,n){if(t.tokenize==k)return e.Pass;if(t.tokenize!=v)return 0;var a,c=n&&n.charAt(0),u=t.lexical;if(!/^\s*else\b/.test(n))for(var s=t.cc.length-1;s>=0;--s){var f=t.cc[s];if(f==S)u=u.prev;else if(f!=Me)break}for(;("stat"==u.type||"form"==u.type)&&("}"==c||(a=t.cc[t.cc.length-1])&&(a==J||a==K)&&!/^[,\.=+\-*:?[\(]/.test(n));)u=u.prev;o&&")"==u.type&&"stat"==u.prev.type&&(u=u.prev);var l=u.type,p=c==l;return"vardef"==l?u.indented+("operator"==t.lastType||","==t.lastType?u.info.length+1:0):"form"==l&&"{"==c?u.indented:"form"==l?u.indented+i:"stat"==l?u.indented+(function(e,t){return"operator"==e.lastType||","==e.lastType||d.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}(t,n)?o||i:0):"switch"!=u.info||p||0==r.doubleIndentSwitch?u.align?u.column+(p?0:1):u.indented+(p?0:i):u.indented+(/^(?:case|default)\b/.test(n)?i:2*i)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:u?null:"/*",blockCommentEnd:u?null:"*/",blockCommentContinue:u?null:" * ",lineComment:u?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:u?"json":"javascript",jsonldMode:c,jsonMode:u,expressionAllowed:Le,skipExpression:function(e){var t=e.cc[e.cc.length-1];t!=H&&t!=W||e.cc.pop()}}}),e.registerHelper("wordChars","javascript",/[\w$]/),e.defineMIME("text/javascript","javascript"),e.defineMIME("text/ecmascript","javascript"),e.defineMIME("application/javascript","javascript"),e.defineMIME("application/x-javascript","javascript"),e.defineMIME("application/ecmascript","javascript"),e.defineMIME("application/json",{name:"javascript",json:!0}),e.defineMIME("application/x-json",{name:"javascript",json:!0}),e.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),e.defineMIME("text/typescript",{name:"javascript",typescript:!0}),e.defineMIME("application/typescript",{name:"javascript",typescript:!0})});
//# sourceMappingURL=../../sourcemaps/mode/javascript/javascript.js.map