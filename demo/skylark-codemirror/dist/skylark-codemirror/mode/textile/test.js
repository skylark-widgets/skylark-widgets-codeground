/**
 * skylark-codemirror - A version of codemirror 5.45  that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-codemirror/
 * @license MIT
 */
!function(){var a=CodeMirror.getMode({tabSize:4},"textile");function e(e){test.mode(e,a,Array.prototype.slice.call(arguments,1))}e("simpleParagraphs","Some text.","","Some more text."),e("em","foo [em _bar_]"),e("emBoogus","code_mirror"),e("strong","foo [strong *bar*]"),e("strongBogus","3 * 3 = 9"),e("italic","foo [em __bar__]"),e("italicBogus","code__mirror"),e("bold","foo [strong **bar**]"),e("boldBogus","3 ** 3 = 27"),e("simpleLink",'[link "CodeMirror":https://codemirror.net]'),e("referenceLink",'[link "CodeMirror":code_mirror]',"Normal Text.","[link [[code_mirror]]https://codemirror.net]"),e("footCite","foo bar[qualifier [[1]]]"),e("footCiteBogus","foo bar[[1a2]]"),e("special-characters","Registered [tag (r)], Trademark [tag (tm)], and Copyright [tag (c)] 2008"),e("cite","A book is [keyword ??The Count of Monte Cristo??] by Dumas."),e("additionAndDeletion","The news networks declared [negative -Al Gore-] [positive +George W. Bush+] the winner in Florida."),e("subAndSup","f(x, n) = log [builtin ~4~] x [builtin ^n^]"),e("spanAndCode","A [quote %span element%] and [atom @code element@]"),e("spanBogus","Percentage 25% is not a span."),e("citeBogus","Question? is not a citation."),e("codeBogus","user@example.com"),e("subBogus","~username"),e("supBogus","foo ^ bar"),e("deletionBogus","3 - 3 = 0"),e("additionBogus","3 + 3 = 6"),e("image","An image: [string !http://www.example.com/image.png!]"),e("imageWithAltText","An image: [string !http://www.example.com/image.png (Alt Text)!]"),e("imageWithUrl","An image: [string !http://www.example.com/image.png!:http://www.example.com/]"),e("h1","[header&header-1 h1. foo]"),e("h2","[header&header-2 h2. foo]"),e("h3","[header&header-3 h3. foo]"),e("h4","[header&header-4 h4. foo]"),e("h5","[header&header-5 h5. foo]"),e("h6","[header&header-6 h6. foo]"),e("h7Bogus","h7. foo"),e("multipleHeaders","[header&header-1 h1. Heading 1]","","Some text.","","[header&header-2 h2. Heading 2]","","More text."),e("h1inline","[header&header-1 h1. foo ][header&header-1&em _bar_][header&header-1  baz]"),e("ul","foo","bar","","[variable-2 * foo]","[variable-2 * bar]"),e("ulNoBlank","foo","bar","[variable-2 * foo]","[variable-2 * bar]"),e("ol","foo","bar","","[variable-2 # foo]","[variable-2 # bar]"),e("olNoBlank","foo","bar","[variable-2 # foo]","[variable-2 # bar]"),e("ulFormatting","[variable-2 * ][variable-2&em _foo_][variable-2  bar]","[variable-2 * ][variable-2&strong *][variable-2&em&strong _foo_][variable-2&strong *][variable-2  bar]","[variable-2 * ][variable-2&strong *foo*][variable-2  bar]"),e("olFormatting","[variable-2 # ][variable-2&em _foo_][variable-2  bar]","[variable-2 # ][variable-2&strong *][variable-2&em&strong _foo_][variable-2&strong *][variable-2  bar]","[variable-2 # ][variable-2&strong *foo*][variable-2  bar]"),e("ulNested","[variable-2 * foo]","[variable-3 ** bar]","[keyword *** bar]","[variable-2 **** bar]","[variable-3 ** bar]"),e("olNested","[variable-2 # foo]","[variable-3 ## bar]","[keyword ### bar]","[variable-2 #### bar]","[variable-3 ## bar]"),e("ulNestedWithOl","[variable-2 * foo]","[variable-3 ## bar]","[keyword *** bar]","[variable-2 #### bar]","[variable-3 ** bar]"),e("olNestedWithUl","[variable-2 # foo]","[variable-3 ** bar]","[keyword ### bar]","[variable-2 **** bar]","[variable-3 ## bar]"),e("definitionList","[number - coffee := Hot ][number&em _and_][number  black]","","Normal text."),e("definitionListSpan","[number - coffee :=]","","[number Hot ][number&em _and_][number  black =:]","","Normal text."),e("boo","[number - dog := woof woof]","[number - cat := meow meow]","[number - whale :=]","[number Whale noises.]","","[number Also, ][number&em _splashing_][number . =:]"),e("divWithAttribute","[punctuation div][punctuation&attribute (#my-id)][punctuation . foo bar]"),e("divWithAttributeAnd2emRightPadding","[punctuation div][punctuation&attribute (#my-id)((][punctuation . foo bar]"),e("divWithClassAndId","[punctuation div][punctuation&attribute (my-class#my-id)][punctuation . foo bar]"),e("paragraphWithCss","p[attribute {color:red;}]. foo bar"),e("paragraphNestedStyles","p. [strong *foo ][strong&em _bar_][strong *]"),e("paragraphWithLanguage","p[attribute [[fr]]]. Parlez-vous français?"),e("paragraphLeftAlign","p[attribute <]. Left"),e("paragraphRightAlign","p[attribute >]. Right"),e("paragraphRightAlign","p[attribute =]. Center"),e("paragraphJustified","p[attribute <>]. Justified"),e("paragraphWithLeftIndent1em","p[attribute (]. Left"),e("paragraphWithRightIndent1em","p[attribute )]. Right"),e("paragraphWithLeftIndent2em","p[attribute ((]. Left"),e("paragraphWithRightIndent2em","p[attribute ))]. Right"),e("paragraphWithLeftIndent3emRightIndent2em","p[attribute ((())]. Right"),e("divFormatting","[punctuation div. ][punctuation&strong *foo ][punctuation&strong&em _bar_][punctuation&strong *]"),e("phraseModifierAttributes","p[attribute (my-class)]. This is a paragraph that has a class and this [em _][em&attribute (#special-phrase)][em emphasized phrase_] has an id."),e("linkWithClass",'[link "(my-class). This is a link with class":http://redcloth.org]'),e("paragraphLayouts","p. This is one paragraph.","","p. This is another."),e("div","[punctuation div. foo bar]"),e("pre","[operator pre. Text]"),e("bq.","[bracket bq. foo bar]","","Normal text."),e("footnote","[variable fn123. foo ][variable&strong *bar*]"),e("bq..ThenParagraph","[bracket bq.. foo bar]","","[bracket More quote.]","p. Normal Text"),e("bq..ThenH1","[bracket bq.. foo bar]","","[bracket More quote.]","[header&header-1 h1. Header Text]"),e("bc..ThenParagraph","[atom bc.. # Some ruby code]","[atom obj = {foo: :bar}]","[atom puts obj]","",'[atom obj[[:love]] = "*love*"]',"[atom puts obj.love.upcase]","","p. Normal text."),e("fn1..ThenParagraph","[variable fn1.. foo bar]","","[variable More.]","p. Normal Text"),e("pre..ThenParagraph","[operator pre.. foo bar]","","[operator More.]","p. Normal Text"),e("table","[variable-3&operator |_. name |_. age|]","[variable-3 |][variable-3&strong *Walter*][variable-3 |   5  |]","[variable-3 |Florence|   6  |]","","p. Normal text."),e("tableWithAttributes","[variable-3&operator |_. name |_. age|]","[variable-3 |][variable-3&attribute /2.][variable-3  Jim |]","[variable-3 |][variable-3&attribute \\2{color: red}.][variable-3  Sam |]"),e("html",'[comment <div id="wrapper">]','[comment <section id="introduction">]',"","[header&header-1 h1. Welcome]","","[variable-2 * Item one]","[variable-2 * Item two]","",'[comment <a href="http://example.com">Example</a>]',"","[comment </section>]","[comment </div>]"),e("inlineHtml",'I can use HTML directly in my [comment <span class="youbetcha">Textile</span>].'),e("notextile","[string-2 notextile. *No* formatting]"),e("notextileInline","Use [string-2 ==*asterisks*==] for [strong *strong*] text."),e("notextileWithPre","[operator pre. *No* formatting]"),e("notextileWithSpanningPre","[operator pre.. *No* formatting]","","[operator *No* formatting]"),e("phrase-in-word","foo_bar_baz"),e("phrase-non-word","[negative -x-] aaa-bbb ccc-ddd [negative -eee-] fff [negative -ggg-]"),e("phrase-lone-dash","foo - bar - baz")}();
//# sourceMappingURL=../../sourcemaps/mode/textile/test.js.map
