/**
 * skylark-codemirror - A version of codemirror 5.45  that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-codemirror/
 * @license MIT
 */
define(["../../CodeMirror"],function(e){"use strict";e.defineMode("vb",function(n,t){var r="error";function i(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var a=new RegExp("^[\\+\\-\\*/%&\\\\|\\^~<>!]"),c=new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]"),o=new RegExp("^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))"),u=new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))"),d=new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))"),l=new RegExp("^[_A-Za-z][_A-Za-z0-9]*"),h=["class","module","sub","enum","select","while","if","function","get","set","property","try"],m=["else","elseif","case","catch"],f=["next","loop"],s=["and","or","not","xor","in"],p=i(s),k=["as","dim","break","continue","optional","then","until","goto","byval","byref","new","handles","property","return","const","private","protected","friend","public","shared","static","true","false"],g=["integer","string","double","decimal","boolean","short","char","float","single"],v=i(k),x=i(g),b='"',w=i(h),I=i(m),y=i(f),E=i(["end"]),L=i(["do"]),z=null;function C(e,n){n.currentIndent++}function R(e,n){n.currentIndent--}function F(e,n){if(e.eatSpace())return null;var i,h;if("'"===e.peek())return e.skipToEnd(),"comment";if(e.match(/^((&H)|(&O))?[0-9\.a-f]/i,!1)){var m=!1;if(e.match(/^\d*\.\d+F?/i)?m=!0:e.match(/^\d+\.\d*F?/)?m=!0:e.match(/^\.\d+F?/)&&(m=!0),m)return e.eat(/J/i),"number";var f=!1;if(e.match(/^&H[0-9a-f]+/i)?f=!0:e.match(/^&O[0-7]+/i)?f=!0:e.match(/^[1-9]\d*F?/)?(e.eat(/J/i),f=!0):e.match(/^0(?![\dx])/i)&&(f=!0),f)return e.eat(/L/i),"number"}return e.match(b)?(n.tokenize=(i=e.current(),h=1==i.length,function(e,n){for(;!e.eol();){if(e.eatWhile(/[^'"]/),e.match(i))return n.tokenize=F,"string";e.eat(/['"]/)}if(h){if(t.singleLineStringErrors)return r;n.tokenize=F}return"string"}),n.tokenize(e,n)):e.match(d)||e.match(u)?null:e.match(o)||e.match(a)||e.match(p)?"operator":e.match(c)?null:e.match(L)?(C(0,n),n.doInCurrentLine=!0,"keyword"):e.match(w)?(n.doInCurrentLine?n.doInCurrentLine=!1:C(0,n),"keyword"):e.match(I)?"keyword":e.match(E)?(R(0,n),R(0,n),"keyword"):e.match(y)?(R(0,n),"keyword"):e.match(x)?"keyword":e.match(v)?"keyword":e.match(l)?"variable":(e.next(),r)}return e.registerHelper("hintWords","vb",h.concat(m).concat(f).concat(s).concat(k).concat(g)),{electricChars:"dDpPtTfFeE ",startState:function(){return{tokenize:F,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:!1}},token:function(e,n){e.sol()&&(n.currentIndent+=n.nextLineIndent,n.nextLineIndent=0,n.doInCurrentLine=0);var t=function(e,n){var t=n.tokenize(e,n),i=e.current();if("."===i)return"variable"===(t=n.tokenize(e,n))?"variable":r;var a="[({".indexOf(i);return-1!==a&&C(0,n),"dedent"===z&&R(0,n)?r:-1!==(a="])}".indexOf(i))&&R(0,n)?r:t}(e,n);return n.lastToken={style:t,content:e.current()},t},indent:function(e,t){var r=t.replace(/^\s+|\s+$/g,"");return r.match(y)||r.match(E)||r.match(I)?n.indentUnit*(e.currentIndent-1):e.currentIndent<0?0:e.currentIndent*n.indentUnit},lineComment:"'"}}),e.defineMIME("text/x-vb","vb")});
//# sourceMappingURL=../../sourcemaps/mode/vb/vb.js.map
