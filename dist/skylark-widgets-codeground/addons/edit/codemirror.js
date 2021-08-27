/**
 * skylark-widgets-codeground - The skylark code playground widget for showcasing html/css/js.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-codeground/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-data","skylark-codemirror/CodeMirror","../../_addon","../../util","../../code_ground","skylark-codemirror/mode/xml/xml","skylark-codemirror/mode/css/css","skylark-codemirror/mode/javascript/javascript","skylark-codemirror/mode/htmlmixed/htmlmixed","skylark-codemirror/mode/markdown/markdown","skylark-codemirror/addon/comment/comment","skylark-codemirror/addon/selection/active-line","skylark-codemirror/addon/fold/foldcode","skylark-codemirror/addon/fold/foldgutter","skylark-codemirror/addon/fold/brace-fold","skylark-codemirror/addon/fold/xml-fold","skylark-codemirror/addon/fold/indent-fold","skylark-codemirror/addon/fold/markdown-fold","skylark-codemirror/addon/fold/comment-fold","skylark-codemirror/addon/edit/matchbrackets","skylark-codemirror/addon/edit/closebrackets","skylark-codemirror/addon/edit/trailingspace","skylark-codemirror/addon/search/searchcursor","skylark-codemirror/addon/search/search","skylark-codemirror/addon/search/match-highlighter","skylark-codemirror/addon/dialog/dialog","skylark-codemirror/addon/hint/anyword-hint","skylark-codemirror/addon/hint/javascript-hint","skylark-codemirror/addon/lint/javascript-lint","skylark-codemirror/addon/lint/lint","skylark-codemirror/addon/tern/tern"],function(r,o,e,d,a,t){"use strict";class i extends d{get options(){return{highlightLine:!0,lineNumbers:!0,lineWrapping:!0,foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],pluginCssClass:"codeg-plugin-codemirror"}}_init(){super._init();var r,d=this.coder,t=this.options;this.editor={};var i={html:"htmlmixed"},n=(t=this.options,d.$container.querySelectorAll(".codeg-editor"));for(r=0;r<n.length;r++){let d=n[r].querySelector("textarea"),l=o.data(d,"codeg-type"),s=o.data(d,"codeg-file");this.editor[l]=e.fromTextArea(d,t),this.editor[l].setOption("mode",a.getMode(l,s,i))}d.on("change",this.change.bind(this),1)}editorChange(r){return()=>{var o=this.editor[r.type];r.content=o.getValue(),this.coder.emit("change",r)}}change(r,o){var e=r.data,d=this.editor[e.type];e.cmEditor||(d.setValue(e.content),e.cmEditor=d,d.on("change",this.editorChange(e)))}static get categoryName(){return"edit"}static get addonName(){return"codemirror"}}return i.register(t),i});
//# sourceMappingURL=../../sourcemaps/addons/edit/codemirror.js.map
