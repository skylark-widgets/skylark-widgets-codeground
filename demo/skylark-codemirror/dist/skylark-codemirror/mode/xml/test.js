/**
 * skylark-codemirror - A version of codemirror 5.45  that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-codemirror/
 * @license MIT
 */
!function(){var t=CodeMirror.getMode({indentUnit:2},"xml"),a="xml";function e(e){test.mode(e,t,Array.prototype.slice.call(arguments,1),a)}e("matching","[tag&bracket <][tag top][tag&bracket >]","  text","  [tag&bracket <][tag inner][tag&bracket />]","[tag&bracket </][tag top][tag&bracket >]"),e("nonmatching","[tag&bracket <][tag top][tag&bracket >]","  [tag&bracket <][tag inner][tag&bracket />]","  [tag&bracket </][tag&error tip][tag&bracket&error >]"),e("doctype","[meta <!doctype foobar>]","[tag&bracket <][tag top][tag&bracket />]"),e("cdata","[tag&bracket <][tag top][tag&bracket >]","  [atom <![CDATA[foo]","[atom barbazguh]]]]>]","[tag&bracket </][tag top][tag&bracket >]"),t=CodeMirror.getMode({indentUnit:2},"text/html"),e("selfclose","[tag&bracket <][tag html][tag&bracket >]",'  [tag&bracket <][tag link] [attribute rel]=[string stylesheet] [attribute href]=[string "/foobar"][tag&bracket >]',"[tag&bracket </][tag html][tag&bracket >]"),e("list","[tag&bracket <][tag ol][tag&bracket >]","  [tag&bracket <][tag li][tag&bracket >]one","  [tag&bracket <][tag li][tag&bracket >]two","[tag&bracket </][tag ol][tag&bracket >]"),e("valueless","[tag&bracket <][tag input] [attribute type]=[string checkbox] [attribute checked][tag&bracket />]"),e("pThenArticle","[tag&bracket <][tag p][tag&bracket >]","  foo","[tag&bracket <][tag article][tag&bracket >]bar")}();
//# sourceMappingURL=../../sourcemaps/mode/xml/test.js.map
