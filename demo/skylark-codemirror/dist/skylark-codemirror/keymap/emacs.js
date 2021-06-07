/**
 * skylark-codemirror - A version of codemirror 5.45  that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-codemirror/
 * @license MIT
 */
define(["../CodeMirror"],function(t){"use strict";var e=t.Pos;function n(t,e){return t.line==e.line&&t.ch==e.ch}var r=[];function o(t){r.push(t),r.length>50&&r.shift()}function i(t){return r[r.length-(t?Math.min(t,1):1)]||""}var l=null;function a(t,e,i,a,c){null==c&&(c=t.getRange(e,i)),"grow"==a&&l&&l.cm==t&&n(e,l.pos)&&t.isClean(l.gen)?function(t){if(!r.length)return o(t);r[r.length-1]+=t}(c):!1!==a&&o(c),t.replaceRange("",e,i,"+delete"),l="grow"==a?{cm:t,pos:e,gen:t.changeGeneration()}:null}function c(t,e,n){return t.findPosH(e,n,"char",!0)}function u(t,e,n){return t.findPosH(e,n,"word",!0)}function f(t,e,n){return t.findPosV(e,n,"line",t.doc.sel.goalColumn)}function s(t,e,n){return t.findPosV(e,n,"page",t.doc.sel.goalColumn)}function g(t,n,r){for(var o=n.line,i=t.getLine(o),l=/\S/.test(r<0?i.slice(0,n.ch):i.slice(n.ch)),a=t.firstLine(),c=t.lastLine();;){if((o+=r)<a||o>c)return t.clipPos(e(o-r,r<0?0:null));if(i=t.getLine(o),/\S/.test(i))l=!0;else if(l)return e(o,0)}}function C(t,n,r){for(var o=n.line,i=n.ch,l=t.getLine(n.line),a=!1;;){var c=l.charAt(i+(r<0?-1:0));if(c){if(a&&/[!?.]/.test(c))return e(o,i+(r>0?1:0));a||(a=/\w/.test(c)),i+=r}else{if(o==(r<0?t.firstLine():t.lastLine()))return e(o,i);if(l=t.getLine(o+r),!/\S/.test(l))return e(o,i);o+=r,i=r<0?l.length:0}}}function d(t,r,o){var i;if(t.findMatchingBracket&&(i=t.findMatchingBracket(r,{strict:!0}))&&i.match&&(i.forward?1:-1)==o)return o>0?e(i.to.line,i.to.ch+1):i.to;for(var l=!0;;l=!1){var a=t.getTokenAt(r),c=e(r.line,o<0?a.start:a.end);if(!(l&&o>0&&a.end==r.ch)&&/\w/.test(a.string))return c;var u=t.findPosH(c,o,"char");if(n(c,u))return r;r=u}}function p(t,e){var n=t.state.emacsPrefix;return n?(L(t),"-"==n?-1:Number(n)):e?null:1}function h(t){var e="string"==typeof t?function(e){e.execCommand(t)}:t;return function(t){var n=p(t);e(t);for(var r=1;r<n;++r)e(t)}}function A(t,e,r,o){var i=p(t);i<0&&(o=-o,i=-i);for(var l=0;l<i;++l){var a=r(t,e,o);if(n(a,e))break;e=a}return e}function v(t,e){var n=function(n){n.extendSelection(A(n,n.getCursor(),t,e))};return n.motion=!0,n}function m(t,e,n,r){for(var o,i=t.listSelections(),l=i.length;l--;)a(t,o=i[l].head,A(t,o,e,n),r)}function S(t,e){if(t.somethingSelected()){for(var n,r=t.listSelections(),o=r.length;o--;)a(t,(n=r[o]).anchor,n.head,e);return!0}}function P(t,e){t.state.emacsPrefix?"-"!=e&&(t.state.emacsPrefix+=e):(t.state.emacsPrefix=e,t.on("keyHandled",x),t.on("inputRead",R))}var w={"Alt-G":!0,"Ctrl-X":!0,"Ctrl-Q":!0,"Ctrl-U":!0};function x(t,e){t.state.emacsPrefixMap||w.hasOwnProperty(e)||L(t)}function L(t){t.state.emacsPrefix=null,t.off("keyHandled",x),t.off("inputRead",R)}function R(t,e){var n=p(t);if(n>1&&"+input"==e.origin){for(var r=e.text.join("\n"),o="",i=1;i<n;++i)o+=r;t.replaceSelection(o)}}function k(t,e){("string"!=typeof e||!/^\d$/.test(e)&&"Ctrl-U"!=e)&&(t.removeKeyMap(E),t.state.emacsPrefixMap=!1,t.off("keyHandled",k),t.off("inputRead",k))}function y(t){t.setCursor(t.getCursor()),t.setExtending(!t.getExtending()),t.on("change",function(){t.setExtending(!1)})}function U(t){t.setExtending(!1),t.setCursor(t.getCursor())}function X(t,e){var n=t.getCursor(),r=t.findPosH(n,1,"word");t.replaceRange(e(t.getRange(n,r)),n,r),t.setCursor(r)}t.emacs={kill:a,killRegion:S,repeated:h};var D=t.keyMap.emacs=t.normalizeKeyMap({"Ctrl-W":function(t){a(t,t.getCursor("start"),t.getCursor("end"),!0)},"Ctrl-K":h(function(t){var n=t.getCursor(),r=t.clipPos(e(n.line)),o=t.getRange(n,r);/\S/.test(o)||(o+="\n",r=e(n.line+1,0)),a(t,n,r,"grow",o)}),"Alt-W":function(t){o(t.getSelection()),U(t)},"Ctrl-Y":function(t){var e=t.getCursor();t.replaceRange(i(p(t)),e,e,"paste"),t.setSelection(e,t.getCursor())},"Alt-Y":function(t){t.replaceSelection((r.length>1&&r.pop(),i()),"around","paste")},"Ctrl-Space":y,"Ctrl-Shift-2":y,"Ctrl-F":v(c,1),"Ctrl-B":v(c,-1),Right:v(c,1),Left:v(c,-1),"Ctrl-D":function(t){m(t,c,1,!1)},Delete:function(t){S(t,!1)||m(t,c,1,!1)},"Ctrl-H":function(t){m(t,c,-1,!1)},Backspace:function(t){S(t,!1)||m(t,c,-1,!1)},"Alt-F":v(u,1),"Alt-B":v(u,-1),"Alt-Right":v(u,1),"Alt-Left":v(u,-1),"Alt-D":function(t){m(t,u,1,"grow")},"Alt-Backspace":function(t){m(t,u,-1,"grow")},"Ctrl-N":v(f,1),"Ctrl-P":v(f,-1),Down:v(f,1),Up:v(f,-1),"Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd",End:"goLineEnd",Home:"goLineStart","Alt-V":v(s,-1),"Ctrl-V":v(s,1),PageUp:v(s,-1),PageDown:v(s,1),"Ctrl-Up":v(g,-1),"Ctrl-Down":v(g,1),"Alt-A":v(C,-1),"Alt-E":v(C,1),"Alt-K":function(t){m(t,C,1,"grow")},"Ctrl-Alt-K":function(t){m(t,d,1,"grow")},"Ctrl-Alt-Backspace":function(t){m(t,d,-1,"grow")},"Ctrl-Alt-F":v(d,1),"Ctrl-Alt-B":v(d,-1),"Shift-Ctrl-Alt-2":function(t){var e=t.getCursor();t.setSelection(A(t,e,d,1),e)},"Ctrl-Alt-T":function(t){var e=d(t,t.getCursor(),-1),n=d(t,e,1),r=d(t,n,1),o=d(t,r,-1);t.replaceRange(t.getRange(o,r)+t.getRange(n,o)+t.getRange(e,n),e,r)},"Ctrl-Alt-U":h(function(t){for(var n=t.getCursor(),r=n.line,o=n.ch,i=[];r>=t.firstLine();){for(var l=t.getLine(r),a=null==o?l.length:o;a>0;)if(")"==(o=l.charAt(--a)))i.push("(");else if("]"==o)i.push("[");else if("}"==o)i.push("{");else if(/[\(\{\[]/.test(o)&&(!i.length||i.pop()!=o))return t.extendSelection(e(r,a));--r,o=null}}),"Alt-Space":function(t){for(var n=t.getCursor(),r=n.ch,o=n.ch,i=t.getLine(n.line);r&&/\s/.test(i.charAt(r-1));)--r;for(;o<i.length&&/\s/.test(i.charAt(o));)++o;t.replaceRange(" ",e(n.line,r),e(n.line,o))},"Ctrl-O":h(function(t){t.replaceSelection("\n","start")}),"Ctrl-T":h(function(t){t.execCommand("transposeChars")}),"Alt-C":h(function(t){X(t,function(t){var e=t.search(/\w/);return-1==e?t:t.slice(0,e)+t.charAt(e).toUpperCase()+t.slice(e+1).toLowerCase()})}),"Alt-U":h(function(t){X(t,function(t){return t.toUpperCase()})}),"Alt-L":h(function(t){X(t,function(t){return t.toLowerCase()})}),"Alt-;":"toggleComment","Ctrl-/":h("undo"),"Shift-Ctrl--":h("undo"),"Ctrl-Z":h("undo"),"Cmd-Z":h("undo"),"Shift-Alt-,":"goDocStart","Shift-Alt-.":"goDocEnd","Ctrl-S":"findPersistentNext","Ctrl-R":"findPersistentPrev","Ctrl-G":function(t){t.execCommand("clearSearch"),U(t)},"Shift-Alt-5":"replace","Alt-/":"autocomplete",Enter:"newlineAndIndent","Ctrl-J":h(function(t){t.replaceSelection("\n","end")}),Tab:"indentAuto","Alt-G G":function(t){var e=p(t,!0);if(null!=e&&e>0)return t.setCursor(e-1);!function(t,e,n){t.openDialog?t.openDialog(e+': <input type="text" style="width: 10em"/>',n,{bottom:!0}):n(prompt(e,""))}(t,"Goto line",function(e){var n;e&&!isNaN(n=Number(e))&&n==(0|n)&&n>0&&t.setCursor(n-1)})},"Ctrl-X Tab":function(t){t.indentSelection(p(t,!0)||t.getOption("indentUnit"))},"Ctrl-X Ctrl-X":function(t){t.setSelection(t.getCursor("head"),t.getCursor("anchor"))},"Ctrl-X Ctrl-S":"save","Ctrl-X Ctrl-W":"save","Ctrl-X S":"saveAll","Ctrl-X F":"open","Ctrl-X U":h("undo"),"Ctrl-X K":"close","Ctrl-X Delete":function(t){a(t,t.getCursor(),C(t,t.getCursor(),1),"grow")},"Ctrl-X H":"selectAll","Ctrl-Q Tab":h("insertTab"),"Ctrl-U":function(t){t.state.emacsPrefixMap=!0,t.addKeyMap(E),t.on("keyHandled",k),t.on("inputRead",k)}}),E={"Ctrl-G":L};function H(t){E[t]=function(e){P(e,t)},D["Ctrl-"+t]=function(e){P(e,t)},w["Ctrl-"+t]=!0}for(var M=0;M<10;++M)H(String(M));H("-")});
//# sourceMappingURL=../sourcemaps/keymap/emacs.js.map
