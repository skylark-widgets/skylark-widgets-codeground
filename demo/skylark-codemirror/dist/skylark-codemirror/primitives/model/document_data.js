/**
 * skylark-codemirror - A version of codemirror 5.45  that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-codemirror/
 * @license MIT
 */
define(["../display/mode_state","../display/operations","../display/view_tracking","../line/line_data","../line/spans","../line/utils_line","../measurement/position_measurement","../util/dom","../util/misc","../util/operation_group"],function(e,n,t,i,l,o,s,c,r,a){"use strict";function d(e,n){return 0==n.from.ch&&0==n.to.ch&&""==r.lst(n.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function h(e){("rtl"==e.doc.direction?c.addClass:c.rmClass)(e.display.lineDiv,"CodeMirror-rtl")}return{isWholeLineUpdate:d,updateDoc:function(e,n,t,l){function s(e){return t?t[e]:null}function c(e,t,o){i.updateLine(e,t,o,l),a.signalLater(e,"change",e,n)}function h(e,n){let t=[];for(let o=e;o<n;++o)t.push(new i.Line(g[o],s(o),l));return t}let u=n.from,f=n.to,g=n.text,m=o.getLine(e,u.line),p=o.getLine(e,f.line),x=r.lst(g),L=s(g.length-1),v=f.line-u.line;if(n.full)e.insert(0,h(0,g.length)),e.remove(g.length,e.size-g.length);else if(d(e,n)){let n=h(0,g.length-1);c(p,p.text,L),v&&e.remove(u.line,v),n.length&&e.insert(u.line,n)}else if(m==p)if(1==g.length)c(m,m.text.slice(0,u.ch)+x+m.text.slice(f.ch),L);else{let n=h(1,g.length-1);n.push(new i.Line(x+m.text.slice(f.ch),L,l)),c(m,m.text.slice(0,u.ch)+g[0],s(0)),e.insert(u.line+1,n)}else if(1==g.length)c(m,m.text.slice(0,u.ch)+g[0]+p.text.slice(f.ch),s(0)),e.remove(u.line+1,v);else{c(m,m.text.slice(0,u.ch)+g[0],s(0)),c(p,x+p.text.slice(f.ch),L);let n=h(1,g.length-1);v>1&&e.remove(u.line+1,v-1),e.insert(u.line+1,n)}a.signalLater(e,"change",e,n)},linkedDocs:function(e,n,t){!function e(i,l,o){if(i.linked)for(let s=0;s<i.linked.length;++s){let c=i.linked[s];if(c.doc==l)continue;let r=o&&c.sharedHist;t&&!r||(n(c.doc,r),e(c.doc,i,r))}}(e,null,!0)},attachDoc:function(n,i){if(i.cm)throw new Error("This document is already in use.");n.doc=i,i.cm=n,s.estimateLineHeights(n),e.loadMode(n),h(n),n.options.lineWrapping||l.findMaxLine(n),n.options.mode=i.modeOption,t.regChange(n)},directionChanged:function(e){n.runInOp(e,()=>{h(e),t.regChange(e)})}}});
//# sourceMappingURL=../../sourcemaps/primitives/model/document_data.js.map
