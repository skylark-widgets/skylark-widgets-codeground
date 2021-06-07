/**
 * skylark-codemirror - A version of codemirror 5.45  that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-codemirror/
 * @license MIT
 */
define(["../display/operations","../display/selection","../display/view_tracking","./input","../line/pos","../line/utils_line","../measurement/position_measurement","../model/changes","../model/selection","../model/selection_updates","../util/bidi","../util/browser","../util/dom","../util/event","../util/misc"],function(e,t,i,o,n,l,s,r,a,c,d,h,u,p,f){"use strict";class m{constructor(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new f.Delayed,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null}init(t){let i=this,n=i.cm,l=i.div=t.lineDiv;function s(e){if(p.signalDOMEvent(n,e))return;if(n.somethingSelected())o.setLastCopied({lineWise:!1,text:n.getSelections()}),"cut"==e.type&&n.replaceSelection("",null,"cut");else{if(!n.options.lineWiseCopyCut)return;{let t=o.copyableRanges(n);o.setLastCopied({lineWise:!0,text:t.text}),"cut"==e.type&&n.operation(()=>{n.setSelections(t.ranges,0,f.sel_dontScroll),n.replaceSelection("",null,"cut")})}}if(e.clipboardData){e.clipboardData.clearData();let t=o.lastCopied.text.join("\n");if(e.clipboardData.setData("Text",t),e.clipboardData.getData("Text")==t)return void e.preventDefault()}let t=o.hiddenTextarea(),s=t.firstChild;n.display.lineSpace.insertBefore(t,n.display.lineSpace.firstChild),s.value=o.lastCopied.text.join("\n");let r=document.activeElement;u.selectInput(s),setTimeout(()=>{n.display.lineSpace.removeChild(t),r.focus(),r==l&&i.showPrimarySelection()},50)}o.disableBrowserMagic(l,n.options.spellcheck,n.options.autocorrect,n.options.autocapitalize),p.on(l,"paste",t=>{p.signalDOMEvent(n,t)||o.handlePaste(t,n)||h.ie_version<=11&&setTimeout(e.operation(n,()=>this.updateFromDOM()),20)}),p.on(l,"compositionstart",e=>{this.composing={data:e.data,done:!1}}),p.on(l,"compositionupdate",e=>{this.composing||(this.composing={data:e.data,done:!1})}),p.on(l,"compositionend",e=>{this.composing&&(e.data!=this.composing.data&&this.readFromDOMSoon(),this.composing.done=!0)}),p.on(l,"touchstart",()=>i.forceCompositionEnd()),p.on(l,"input",()=>{this.composing||this.readFromDOMSoon()}),p.on(l,"copy",s),p.on(l,"cut",s)}prepareSelection(){let e=t.prepareSelection(this.cm,!1);return e.focus=this.cm.state.focused,e}showSelection(e,t){e&&this.cm.display.view.length&&((e.focus||t)&&this.showPrimarySelection(),this.showMultipleSelections(e))}getSelection(){return this.cm.display.wrapper.ownerDocument.getSelection()}showPrimarySelection(){let e=this.getSelection(),t=this.cm,i=t.doc.sel.primary(),o=i.from(),l=i.to();if(t.display.viewTo==t.display.viewFrom||o.line>=t.display.viewTo||l.line<t.display.viewFrom)return void e.removeAllRanges();let s=y(t,e.anchorNode,e.anchorOffset),r=y(t,e.focusNode,e.focusOffset);if(s&&!s.bad&&r&&!r.bad&&0==n.cmp(n.minPos(s,r),o)&&0==n.cmp(n.maxPos(s,r),l))return;let a=t.display.view,c=o.line>=t.display.viewFrom&&g(t,o)||{node:a[0].measure.map[2],offset:0},d=l.line<t.display.viewTo&&g(t,l);if(!d){let e=a[a.length-1].measure,t=e.maps?e.maps[e.maps.length-1]:e.map;d={node:t[t.length-1],offset:t[t.length-2]-t[t.length-3]}}if(!c||!d)return void e.removeAllRanges();let p,f=e.rangeCount&&e.getRangeAt(0);try{p=u.range(c.node,c.offset,d.offset,d.node)}catch(e){}p&&(!h.gecko&&t.state.focused?(e.collapse(c.node,c.offset),p.collapsed||(e.removeAllRanges(),e.addRange(p))):(e.removeAllRanges(),e.addRange(p)),f&&null==e.anchorNode?e.addRange(f):h.gecko&&this.startGracePeriod()),this.rememberSelection()}startGracePeriod(){clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(()=>{this.gracePeriod=!1,this.selectionChanged()&&this.cm.operation(()=>this.cm.curOp.selectionChanged=!0)},20)}showMultipleSelections(e){u.removeChildrenAndAdd(this.cm.display.cursorDiv,e.cursors),u.removeChildrenAndAdd(this.cm.display.selectionDiv,e.selection)}rememberSelection(){let e=this.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset}selectionInEditor(){let e=this.getSelection();if(!e.rangeCount)return!1;let t=e.getRangeAt(0).commonAncestorContainer;return u.contains(this.div,t)}focus(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()||this.showSelection(this.prepareSelection(),!0),this.div.focus())}blur(){this.div.blur()}getField(){return this.div}supportsTouch(){return!0}receivedFocus(){let t=this;this.selectionInEditor()?this.pollSelection():e.runInOp(this.cm,()=>t.cm.curOp.selectionChanged=!0),this.polling.set(this.cm.options.pollInterval,function e(){t.cm.state.focused&&(t.pollSelection(),t.polling.set(t.cm.options.pollInterval,e))})}selectionChanged(){let e=this.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset}pollSelection(){if(null!=this.readDOMTimeout||this.gracePeriod||!this.selectionChanged())return;let t=this.getSelection(),i=this.cm;if(h.android&&h.chrome&&this.cm.options.gutters.length&&function(e){for(let t=e;t;t=t.parentNode)if(/CodeMirror-gutter-wrapper/.test(t.className))return!0;return!1}(t.anchorNode))return this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),void this.focus();if(this.composing)return;this.rememberSelection();let o=y(i,t.anchorNode,t.anchorOffset),n=y(i,t.focusNode,t.focusOffset);o&&n&&e.runInOp(i,()=>{c.setSelection(i.doc,a.simpleSelection(o,n),f.sel_dontScroll),(o.bad||n.bad)&&(i.curOp.selectionChanged=!0)})}pollContent(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);let e,t,i,o=this.cm,a=o.display,c=o.doc.sel.primary(),d=c.from(),h=c.to();if(0==d.ch&&d.line>o.firstLine()&&(d=n.Pos(d.line-1,l.getLine(o.doc,d.line-1).length)),h.ch==l.getLine(o.doc,h.line).text.length&&h.line<o.lastLine()&&(h=n.Pos(h.line+1,0)),d.line<a.viewFrom||h.line>a.viewTo-1)return!1;d.line==a.viewFrom||0==(e=s.findViewIndex(o,d.line))?(t=l.lineNo(a.view[0].line),i=a.view[0].node):(t=l.lineNo(a.view[e].line),i=a.view[e-1].node.nextSibling);let u,p,m=s.findViewIndex(o,h.line);if(m==a.view.length-1?(u=a.viewTo-1,p=a.lineDiv.lastChild):(u=l.lineNo(a.view[m+1].line)-1,p=a.view[m+1].node.previousSibling),!i)return!1;let g=o.doc.splitLines(function(e,t,i,o,s){let r="",a=!1,c=e.doc.lineSeparator(),d=!1;function h(){a&&(r+=c,d&&(r+=c),a=d=!1)}function u(e){e&&(h(),r+=e)}function p(t){if(1==t.nodeType){let r=t.getAttribute("cm-text");if(r)return void u(r);let f,m=t.getAttribute("cm-marker");if(m){let t=e.findMarks(n.Pos(o,0),n.Pos(s+1,0),(i=+m,e=>e.id==i));return void(t.length&&(f=t[0].find(0))&&u(l.getBetween(e.doc,f.from,f.to).join(c)))}if("false"==t.getAttribute("contenteditable"))return;let g=/^(pre|div|p|li|table|br)$/i.test(t.nodeName);if(!/^br$/i.test(t.nodeName)&&0==t.textContent.length)return;g&&h();for(let e=0;e<t.childNodes.length;e++)p(t.childNodes[e]);/^(pre|p)$/i.test(t.nodeName)&&(d=!0),g&&(a=!0)}else 3==t.nodeType&&u(t.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "));var i}for(;p(t),t!=i;)t=t.nextSibling,d=!1;return r}(o,i,p,t,u)),v=l.getBetween(o.doc,n.Pos(t,0),n.Pos(u,l.getLine(o.doc,u).text.length));for(;g.length>1&&v.length>1;)if(f.lst(g)==f.lst(v))g.pop(),v.pop(),u--;else{if(g[0]!=v[0])break;g.shift(),v.shift(),t++}let y=0,C=0,S=g[0],O=v[0],b=Math.min(S.length,O.length);for(;y<b&&S.charCodeAt(y)==O.charCodeAt(y);)++y;let w=f.lst(g),D=f.lst(v),N=Math.min(w.length-(1==g.length?y:0),D.length-(1==v.length?y:0));for(;C<N&&w.charCodeAt(w.length-C-1)==D.charCodeAt(D.length-C-1);)++C;if(1==g.length&&1==v.length&&t==d.line)for(;y&&y>d.ch&&w.charCodeAt(w.length-C-1)==D.charCodeAt(D.length-C-1);)y--,C++;g[g.length-1]=w.slice(0,w.length-C).replace(/^\u200b+/,""),g[0]=g[0].slice(y).replace(/\u200b+$/,"");let P=n.Pos(t,y),T=n.Pos(u,v.length?f.lst(v).length-C:0);return g.length>1||g[0]||n.cmp(P,T)?(r.replaceRange(o.doc,g,P,T,"+input"),!0):void 0}ensurePolled(){this.forceCompositionEnd()}reset(){this.forceCompositionEnd()}forceCompositionEnd(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())}readFromDOMSoon(){null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout(()=>{if(this.readDOMTimeout=null,this.composing){if(!this.composing.done)return;this.composing=null}this.updateFromDOM()},80))}updateFromDOM(){!this.cm.isReadOnly()&&this.pollContent()||e.runInOp(this.cm,()=>i.regChange(this.cm))}setUneditable(e){e.contentEditable="false"}onKeyPress(t){0==t.charCode||this.composing||(t.preventDefault(),this.cm.isReadOnly()||e.operation(this.cm,o.applyTextInput)(this.cm,String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),0))}readOnlyChanged(e){this.div.contentEditable=String("nocursor"!=e)}onContextMenu(){}resetPosition(){}}function g(e,t){let i=s.findViewForLine(e,t.line);if(!i||i.hidden)return null;let o=l.getLine(e.doc,t.line),n=s.mapFromLineView(i,o,t.line),r=d.getOrder(o,e.doc.direction),a="left";if(r){a=d.getBidiPartAt(r,t.ch)%2?"right":"left"}let c=s.nodeAndOffsetInLineMap(n.map,t.ch,a);return c.offset="right"==c.collapse?c.end:c.start,c}function v(e,t){return t&&(e.bad=!0),e}function y(e,t,i){let o;if(t==e.display.lineDiv){if(!(o=e.display.lineDiv.childNodes[i]))return v(e.clipPos(n.Pos(e.display.viewTo-1)),!0);t=null,i=0}else for(o=t;;o=o.parentNode){if(!o||o==e.display.lineDiv)return null;if(o.parentNode&&o.parentNode==e.display.lineDiv)break}for(let n=0;n<e.display.view.length;n++){let l=e.display.view[n];if(l.node==o)return C(l,t,i)}}function C(e,t,i){let o=e.text.firstChild,s=!1;if(!t||!u.contains(o,t))return v(n.Pos(l.lineNo(e.line),0),!0);if(t==o&&(s=!0,t=o.childNodes[i],i=0,!t)){let t=e.rest?f.lst(e.rest):e.line;return v(n.Pos(l.lineNo(t),t.text.length),s)}let r=3==t.nodeType?t:null,a=t;for(r||1!=t.childNodes.length||3!=t.firstChild.nodeType||(r=t.firstChild,i&&(i=r.nodeValue.length));a.parentNode!=o;)a=a.parentNode;let c=e.measure,d=c.maps;function h(t,i,o){for(let s=-1;s<(d?d.length:0);s++){let r=s<0?c.map:d[s];for(let a=0;a<r.length;a+=3){let c=r[a+2];if(c==t||c==i){let i=l.lineNo(s<0?e.line:e.rest[s]),d=r[a]+o;return(o<0||c!=t)&&(d=r[a+(o?1:0)]),n.Pos(i,d)}}}}let p=h(r,a,i);if(p)return v(p,s);for(let e=a.nextSibling,t=r?r.nodeValue.length-i:0;e;e=e.nextSibling){if(p=h(e,e.firstChild,0))return v(n.Pos(p.line,p.ch-t),s);t+=e.textContent.length}for(let e=a.previousSibling,t=i;e;e=e.previousSibling){if(p=h(e,e.firstChild,-1))return v(n.Pos(p.line,p.ch+t),s);t+=e.textContent.length}}return m.prototype.needsContentAttribute=!0,m});
//# sourceMappingURL=../../sourcemaps/primitives/input/ContentEditableInput.js.map