/**
 * skylark-widgets-codeground - The skylark code playground widget for showcasing html/css/js.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-codeground/
 * @license MIT
 */
define(function(){"use strict";return{container:function(){return'\n    <ul class="codeg-nav">\n      <li class="codeg-nav-item codeg-nav-item-result">\n        <a href="#" data-codeg-type="result">\n          Result\n        </a>\n      </li>\n      <li class="codeg-nav-item codeg-nav-item-html">\n        <a href="#" data-codeg-type="html">\n          HTML\n        </a>\n      </li>\n      <li class="codeg-nav-item codeg-nav-item-css">\n        <a href="#" data-codeg-type="css">\n          CSS\n        </a>\n      </li>\n      <li class="codeg-nav-item codeg-nav-item-js">\n        <a href="#" data-codeg-type="js">\n          JavaScript\n        </a>\n      </li>\n    </ul>\n    <div class="codeg-pane codeg-pane-result"><iframe></iframe></div>\n    <div class="codeg-pane codeg-pane-html"></div>\n    <div class="codeg-pane codeg-pane-css"></div>\n    <div class="codeg-pane codeg-pane-js"></div>\n  '},paneActiveClass:function(n){return`codeg-pane-active-${n}`},containerClass:function(){return"coder"},hasFileClass:function(n){return`codeg-has-${n}`},editorClass:function(n){return`codeg-editor codeg-editor-${n}`},editorContent:function(n,e=""){return`\n    <textarea data-codeg-type="${n}" data-codeg-file="${e}"></textarea>\n    <div class="codeg-status"></div>\n  `},statusMessage:function(n){return`\n    <p>${n}</p>\n  `},statusClass:function(n){return`codeg-status-${n}`},statusActiveClass:function(n){return`codeg-status-active-${n}`},pluginClass:function(n){return`codeg-plugin-${n}`},statusLoading:function(n){return`Loading <strong>${n}</strong>..`},statusFetchError:function(n){return`There was an error loading <strong>${n}</strong>.`}}});
//# sourceMappingURL=sourcemaps/template.js.map
