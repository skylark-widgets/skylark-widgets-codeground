/**
 * skylark-codemirror - A version of codemirror 5.45  that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-codemirror/
 * @license MIT
 */
define(["../../CodeMirror","../../mode/sql/sql"],function(t){"use strict";var e,r,n,o,i={QUERY_DIV:";",ALIAS_KEYWORD:"AS"},s=t.Pos,a=t.cmpPos;function u(t){return"[object Array]"==Object.prototype.toString.call(t)}function l(t){return"string"==typeof t?t:t.text}function f(t,e){return u(e)&&(e={columns:e}),e.text||(e.text=t),e}function c(t){return e[t.toUpperCase()]}function p(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}function g(t,e){var r=t.length,n=l(e).substr(0,r);return t.toUpperCase()===n.toUpperCase()}function d(t,e,r,n){if(u(r))for(var o=0;o<r.length;o++)g(e,r[o])&&t.push(n(r[o]));else for(var i in r)if(r.hasOwnProperty(i)){var s=r[i];g(e,s=s&&!0!==s?s.displayText?{text:s.text,displayText:s.displayText}:s.text:i)&&t.push(n(s))}}function h(t){"."==t.charAt(0)&&(t=t.substr(1));for(var e=t.split(o+o),r=0;r<e.length;r++)e[r]=e[r].replace(new RegExp(o,"g"),"");return e.join(o)}function v(t){for(var e=l(t).split("."),r=0;r<e.length;r++)e[r]=o+e[r].replace(new RegExp(o,"g"),o+o)+o;var n=e.join(".");return"string"==typeof t?n:((t=p(t)).text=n,t)}function x(t,e){for(var r=t.split(/\s+/),n=0;n<r.length;n++)r[n]&&e(r[n].replace(/[,;]/g,""))}function C(t,e){for(var r=e.doc,n=r.getValue(),o=t.toUpperCase(),u="",l="",f=[],p={start:s(0,0),end:s(e.lastLine(),e.getLineHandle(e.lastLine()).length)},g=n.indexOf(i.QUERY_DIV);-1!=g;)f.push(r.posFromIndex(g)),g=n.indexOf(i.QUERY_DIV,g+1);f.unshift(s(0,0)),f.push(s(e.lastLine(),e.getLineHandle(e.lastLine()).text.length));for(var d=null,h=e.getCursor(),v=0;v<f.length;v++){if((null==d||a(h,d)>0)&&a(h,f[v])<=0){p={start:d,end:f[v]};break}d=f[v]}if(p.start){var C=r.getRange(p.start,p.end,!1);for(v=0;v<C.length;v++){if(x(C[v],function(t){var e=t.toUpperCase();e===o&&c(u)&&(l=u),e!==i.ALIAS_KEYWORD&&(u=t)}),l)break}}return l}t.registerHelper("hint","sql",function(i,a){e=function(t){var e={};if(u(t))for(var r=t.length-1;r>=0;r--){var n=t[r];e[l(n).toUpperCase()]=f(l(n),n)}else if(t)for(var o in t)e[o.toUpperCase()]=f(o,t[o]);return e}(a&&a.tables);var g=a&&a.defaultTable,x=a&&a.disableKeywords;r=g&&c(g),n=function(e){var r=e.doc.modeOption;return"sql"===r&&(r="text/x-sql"),t.resolveMode(r).keywords}(i),o=function(e){var r=e.doc.modeOption;return"sql"===r&&(r="text/x-sql"),t.resolveMode(r).identifierQuote||"`"}(i),g&&!r&&(r=C(g,i)),(r=r||[]).columns&&(r=r.columns);var m,y,A,b=i.getCursor(),U=[],w=i.getTokenAt(b);if(w.end>b.ch&&(w.end=b.ch,w.string=w.string.slice(0,b.ch-w.start)),w.string.match(/^[.`"\w@]\w*$/)?(A=w.string,m=w.start,y=w.end):(m=y=b.ch,A=""),"."==A.charAt(0)||A.charAt(0)==o)m=function(t,n,i,a){for(var u=!1,l=[],f=n.start,g=!0;g;)g="."==n.string.charAt(0),u=u||n.string.charAt(0)==o,f=n.start,l.unshift(h(n.string)),"."==(n=a.getTokenAt(s(t.line,n.start))).string&&(g=!0,n=a.getTokenAt(s(t.line,n.start)));var x=l.join(".");d(i,x,e,function(t){return u?v(t):t}),d(i,x,r,function(t){return u?v(t):t}),x=l.pop();var m=l.join("."),y=!1,A=m;if(!c(m)){var b=m;(m=C(m,a))!==b&&(y=!0)}var U=c(m);return U&&U.columns&&(U=U.columns),U&&d(i,x,U,function(t){var e=m;return 1==y&&(e=A),"string"==typeof t?t=e+"."+t:(t=p(t)).text=e+"."+t.text,u?v(t):t}),f}(b,w,U,i);else{var O=function(t,e){return"object"==typeof t?t.className=e:t={text:t,className:e},t};d(U,A,r,function(t){return O(t,"CodeMirror-hint-table CodeMirror-hint-default-table")}),d(U,A,e,function(t){return O(t,"CodeMirror-hint-table")}),x||d(U,A,n,function(t){return O(t.toUpperCase(),"CodeMirror-hint-keyword")})}return{list:U,from:s(b.line,m),to:s(b.line,y)}})});
//# sourceMappingURL=../../sourcemaps/addon/hint/sql-hint.js.map