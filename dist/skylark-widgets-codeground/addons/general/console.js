/**
 * skylark-widgets-codeground - The skylark code playground widget for showcasing html/css/js.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-codeground/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-styler","../../addon","../../util","../../codeground"],function(e,t,n,o,i){"use strict";class s extends n{get options(){return{autoClear:!1}}_init(){super._init();var e=this.coder,n=this.options,o=`(function ${this.capture.toString()})();`,i=document.createElement("li");t.addClass(i,"codeg-nav-item codeg-nav-item-console"),i.innerHTML='<a href="#" data-codeg-type="console">JS Console</a>';var s=document.createElement("div");t.addClass(s,"codeg-pane codeg-pane-console"),s.innerHTML='\n              <div class="codeg-console-container">\n                <ul class="codeg-console-output"></ul>\n                <form class="codeg-console-input">\n                  <input type="text">\n                </form>\n              </div>\n              <button class="codeg-button codeg-console-clear">Clear</button>\n            ',e._velm.append(s),e._velm.find(".codeg-nav").append(i);var r=e.$container.querySelector(".codeg-console-container"),a=e.$container.querySelector(".codeg-console-output"),c=e.$container.querySelector(".codeg-console-input input"),l=e.$container.querySelector(".codeg-console-input"),d=e.$container.querySelector(".codeg-console-clear");l.addEventListener("submit",this.submit.bind(this)),c.addEventListener("keydown",this.history.bind(this)),d.addEventListener("click",this.clear.bind(this)),!0===n.autoClear&&e.on("change",this.autoClear.bind(this),29),e.on("change",this.change.bind(this),30),window.addEventListener("message",this.getMessage.bind(this)),this.$coderContainer=e.$container,this.$container=r,this.$input=c,this.$output=a,this.history=[],this.historyIndex=0,this.logCaptureSnippet=o,this.contentCache={html:"",css:"",js:""},this.getIframe=this.getIframe.bind(this)}getIframe(){return this.$coderContainer.querySelector(".codeg-pane-result iframe")}getMessage(e){if(e.source===this.getIframe().contentWindow){var t={};try{t=JSON.parse(e.data)}catch(e){}"codeg-console-log"===t.type&&this.log(t.message)}}autoClear(e,t){var n=e.content;"js"===e.type&&(n=n.replace(this.logCaptureSnippet,"")),!0!==e.forceRender&&this.contentCache[e.type]===n||this.clear(),this.contentCache[e.type]=n}change(e){var t=e.data;"js"===t.type&&-1===t.content.indexOf(this.logCaptureSnippet)&&(t.content=`${this.logCaptureSnippet}${t.content}`)}capture(){void 0!==window.console&&void 0!==window.console.log||(window.console={log:function(){}});var e=Function.prototype.bind.call(window.console.log,window.console);window.console.log=function(){[].slice.call(arguments).forEach(function(e){window.parent.postMessage(JSON.stringify({type:"codeg-console-log",message:e}),"*")}),e.apply(e,arguments)}}log(e="",n){var o=document.createElement("li");t.addClass(o,"codeg-console-log"),void 0!==n&&t.addClass(o,`codeg-console-log-${n}`),o.innerHTML=e,this.$output.appendChild(o)}submit(e){var t=this.$input.value.trim();if(""===t)return e.preventDefault();this.history.push(t),this.historyIndex=this.history.length,this.log(t,"history"),0!==t.indexOf("return")&&(t="return "+t);try{var n=this.getIframe().contentWindow.eval(`(function() {${t}})()`);this.log(n)}catch(e){this.log(e,"error")}this.$input.value="",this.$container.scrollTop=this.$container.scrollHeight,e.preventDefault()}clear(){this.$output.innerHTML=""}history(e){var t=!1,n=this.$input.selectionStart;38===e.keyCode&&0!==this.historyIndex&&0===n&&(this.historyIndex--,t=!0),40===e.keyCode&&this.historyIndex!==this.history.length-1&&n===this.$input.value.length&&(this.historyIndex++,t=!0),t&&(this.$input.value=this.history[this.historyIndex])}static get categoryName(){return"general"}static get addonName(){return"console"}}return s.register(i),s});
//# sourceMappingURL=../../sourcemaps/addons/general/console.js.map
