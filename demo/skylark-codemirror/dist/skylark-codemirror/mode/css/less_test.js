/**
 * skylark-codemirror - A version of codemirror 5.45  that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-codemirror/
 * @license MIT
 */
!function(){"use strict";var e=CodeMirror.getMode({indentUnit:2},"text/x-less");function r(r){test.mode(r,e,Array.prototype.slice.call(arguments,1),"less")}r("variable","[variable-2 @base]: [atom #f04615];","[qualifier .class] {","  [property width]: [variable&callee percentage]([number 0.5]); [comment // returns `50%`]","  [property color]: [variable&callee saturate]([variable-2 @base], [number 5%]);","}"),r("amp","[qualifier .child], [qualifier .sibling] {","  [qualifier .parent] [atom &] {","    [property color]: [keyword black];","  }","  [atom &] + [atom &] {","    [property color]: [keyword red];","  }","}"),r("mixin","[qualifier .mixin] ([variable dark]; [variable-2 @color]) {","  [property color]: [variable&callee darken]([variable-2 @color], [number 10%]);","}","[qualifier .mixin] ([variable light]; [variable-2 @color]) {","  [property color]: [variable&callee lighten]([variable-2 @color], [number 10%]);","}","[qualifier .mixin] ([variable-2 @_]; [variable-2 @color]) {","  [property display]: [atom block];","}","[variable-2 @switch]: [variable light];","[qualifier .class] {","  [qualifier .mixin]([variable-2 @switch]; [atom #888]);","}"),r("nest","[qualifier .one] {","  [def @media] ([property width]: [number 400px]) {","    [property font-size]: [number 1.2em];","    [def @media] [attribute print] [keyword and] [property color] {","      [property color]: [keyword blue];","    }","  }","}"),r("interpolation",".@{[variable foo]} { [property font-weight]: [atom bold]; }")}();
//# sourceMappingURL=../../sourcemaps/mode/css/less_test.js.map