/**
 * skylark-codemirror - A version of codemirror 5.45  that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-codemirror/
 * @license MIT
 */
define(["../../CodeMirror"],function(e){function r(e){e.state.placeholder&&(e.state.placeholder.parentNode.removeChild(e.state.placeholder),e.state.placeholder=null)}function t(e){r(e);var t=e.state.placeholder=document.createElement("pre");t.style.cssText="height: 0; overflow: visible",t.style.direction=e.getOption("direction"),t.className="CodeMirror-placeholder";var o=e.getOption("placeholder");"string"==typeof o&&(o=document.createTextNode(o)),t.appendChild(o),e.display.lineSpace.insertBefore(t,e.display.lineSpace.firstChild)}function o(e){l(e)&&t(e)}function a(e){var o=e.getWrapperElement(),a=l(e);o.className=o.className.replace(" CodeMirror-empty","")+(a?" CodeMirror-empty":""),a?t(e):r(e)}function l(e){return 1===e.lineCount()&&""===e.getLine(0)}e.defineOption("placeholder","",function(t,l,n){var i=n&&n!=e.Init;if(l&&!i)t.on("blur",o),t.on("change",a),t.on("swapDoc",a),a(t);else if(!l&&i){t.off("blur",o),t.off("change",a),t.off("swapDoc",a),r(t);var c=t.getWrapperElement();c.className=c.className.replace(" CodeMirror-empty","")}l&&!t.hasFocus()&&o(t)})});
//# sourceMappingURL=../../sourcemaps/addon/display/placeholder.js.map
