/**
 * skylark-codemirror - A version of codemirror 5.45  that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-codemirror/
 * @license MIT
 */
define(["../util/browser","../util/dom","../util/misc"],function(e,l,r){"use strict";return{Display:function(i,t,n){let o=this;this.input=n,o.scrollbarFiller=l.elt("div",null,"CodeMirror-scrollbar-filler"),o.scrollbarFiller.setAttribute("cm-not-content","true"),o.gutterFiller=l.elt("div",null,"CodeMirror-gutter-filler"),o.gutterFiller.setAttribute("cm-not-content","true"),o.lineDiv=l.eltP("div",null,"CodeMirror-code"),o.selectionDiv=l.elt("div",null,null,"position: relative; z-index: 1"),o.cursorDiv=l.elt("div",null,"CodeMirror-cursors"),o.measure=l.elt("div",null,"CodeMirror-measure"),o.lineMeasure=l.elt("div",null,"CodeMirror-measure"),o.lineSpace=l.eltP("div",[o.measure,o.lineMeasure,o.selectionDiv,o.cursorDiv,o.lineDiv],null,"position: relative; outline: none");let u=l.eltP("div",[o.lineSpace],"CodeMirror-lines");o.mover=l.elt("div",[u],null,"position: relative"),o.sizer=l.elt("div",[o.mover],"CodeMirror-sizer"),o.sizerWidth=null,o.heightForcer=l.elt("div",null,null,"position: absolute; height: "+r.scrollerGap+"px; width: 1px;"),o.gutters=l.elt("div",null,"CodeMirror-gutters"),o.lineGutter=null,o.scroller=l.elt("div",[o.sizer,o.heightForcer,o.gutters],"CodeMirror-scroll"),o.scroller.setAttribute("tabIndex","-1"),o.wrapper=l.elt("div",[o.scrollbarFiller,o.gutterFiller,o.scroller],"CodeMirror"),e.ie&&e.ie_version<8&&(o.gutters.style.zIndex=-1,o.scroller.style.paddingRight=0),e.webkit||e.gecko&&e.mobile||(o.scroller.draggable=!0),i&&(i.appendChild?i.appendChild(o.wrapper):i(o.wrapper)),o.viewFrom=o.viewTo=t.first,o.reportedViewFrom=o.reportedViewTo=t.first,o.view=[],o.renderedView=null,o.externalMeasured=null,o.viewOffset=0,o.lastWrapHeight=o.lastWrapWidth=0,o.updateLineNumbers=null,o.nativeBarWidth=o.barHeight=o.barWidth=0,o.scrollbarsClipped=!1,o.lineNumWidth=o.lineNumInnerWidth=o.lineNumChars=null,o.alignWidgets=!1,o.cachedCharWidth=o.cachedTextHeight=o.cachedPaddingH=null,o.maxLine=null,o.maxLineLength=0,o.maxLineChanged=!1,o.wheelDX=o.wheelDY=o.wheelStartX=o.wheelStartY=null,o.shift=!1,o.selForContextMenu=null,o.activeTouch=null,n.init(o)}}});
//# sourceMappingURL=../../sourcemaps/primitives/display/Display.js.map
