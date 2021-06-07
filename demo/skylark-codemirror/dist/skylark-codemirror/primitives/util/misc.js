/**
 * skylark-codemirror - A version of codemirror 5.45  that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-codemirror/
 * @license MIT
 */
define(function(){"use strict";function u(u,e,a){e||(e={});for(let c in u)!u.hasOwnProperty(c)||!1===a&&e.hasOwnProperty(c)||(e[c]=u[c]);return e}let e=[""];function a(u){return u[u.length-1]}function c(){}let t=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;function f(u){return/\w/.test(u)||u>""&&(u.toUpperCase()!=u.toLowerCase()||t.test(u))}let n=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function r(u){return u.charCodeAt(0)>=768&&n.test(u)}return{bind:function(u){let e=Array.prototype.slice.call(arguments,1);return function(){return u.apply(null,e)}},copyObj:u,countColumn:function(u,e,a,c,t){null==e&&-1==(e=u.search(/[^\s\u00a0]/))&&(e=u.length);for(let f=c||0,n=t||0;;){let c=u.indexOf("\t",f);if(c<0||c>=e)return n+(e-f);n+=c-f,n+=a-n%a,f=c+1}},Delayed:class{constructor(){this.id=null}set(u,e){clearTimeout(this.id),this.id=setTimeout(e,u)}},indexOf:function(u,e){for(let a=0;a<u.length;++a)if(u[a]==e)return a;return-1},scrollerGap:30,Pass:{toString:function(){return"CodeMirror.Pass"}},sel_dontScroll:{scroll:!1},sel_mouse:{origin:"*mouse"},sel_move:{origin:"+move"},findColumn:function(u,e,a){for(let c=0,t=0;;){let f=u.indexOf("\t",c);-1==f&&(f=u.length);let n=f-c;if(f==u.length||t+n>=e)return c+Math.min(n,e-t);if(t+=f-c,c=f+1,(t+=a-t%a)>=e)return c}},spaceStr:function(u){for(;e.length<=u;)e.push(a(e)+" ");return e[u]},lst:a,map:function(u,e){let a=[];for(let c=0;c<u.length;c++)a[c]=e(u[c],c);return a},insertSorted:function(u,e,a){let c=0,t=a(e);for(;c<u.length&&a(u[c])<=t;)c++;u.splice(c,0,e)},createObj:function(e,a){let t;return Object.create?t=Object.create(e):(c.prototype=e,t=new c),a&&u(a,t),t},isWordCharBasic:f,isWordChar:function(u,e){return e?!!(e.source.indexOf("\\w")>-1&&f(u))||e.test(u):f(u)},isEmpty:function(u){for(let e in u)if(u.hasOwnProperty(e)&&u[e])return!1;return!0},isExtendingChar:r,skipExtendingChars:function(u,e,a){for(;(a<0?e>0:e<u.length)&&r(u.charAt(e));)e+=a;return e},findFirst:function(u,e,a){let c=e>a?-1:1;for(;;){if(e==a)return e;let t=(e+a)/2,f=c<0?Math.ceil(t):Math.floor(t);if(f==e)return u(f)?e:a;u(f)?a=f:e=f+c}}}});
//# sourceMappingURL=../../sourcemaps/primitives/util/misc.js.map
