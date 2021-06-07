/**
 * skylark-codemirror - A version of codemirror 5.45  that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-codemirror/
 * @license MIT
 */
define(["../../CodeMirror"],function(e){"use strict";e.defineMode("asterisk",function(){var e=["exten","same","include","ignorepat","switch"],t=["#include","#exec"],a=["addqueuemember","adsiprog","aelsub","agentlogin","agentmonitoroutgoing","agi","alarmreceiver","amd","answer","authenticate","background","backgrounddetect","bridge","busy","callcompletioncancel","callcompletionrequest","celgenuserevent","changemonitor","chanisavail","channelredirect","chanspy","clearhash","confbridge","congestion","continuewhile","controlplayback","dahdiacceptr2call","dahdibarge","dahdiras","dahdiscan","dahdisendcallreroutingfacility","dahdisendkeypadfacility","datetime","dbdel","dbdeltree","deadagi","dial","dictate","directory","disa","dumpchan","eagi","echo","endwhile","exec","execif","execiftime","exitwhile","extenspy","externalivr","festival","flash","followme","forkcdr","getcpeid","gosub","gosubif","goto","gotoif","gotoiftime","hangup","iax2provision","ices","importvar","incomplete","ivrdemo","jabberjoin","jabberleave","jabbersend","jabbersendgroup","jabberstatus","jack","log","macro","macroexclusive","macroexit","macroif","mailboxexists","meetme","meetmeadmin","meetmechanneladmin","meetmecount","milliwatt","minivmaccmess","minivmdelete","minivmgreet","minivmmwi","minivmnotify","minivmrecord","mixmonitor","monitor","morsecode","mp3player","mset","musiconhold","nbscat","nocdr","noop","odbc","odbc","odbcfinish","originate","ospauth","ospfinish","osplookup","ospnext","page","park","parkandannounce","parkedcall","pausemonitor","pausequeuemember","pickup","pickupchan","playback","playtones","privacymanager","proceeding","progress","queue","queuelog","raiseexception","read","readexten","readfile","receivefax","receivefax","receivefax","record","removequeuemember","resetcdr","retrydial","return","ringing","sayalpha","saycountedadj","saycountednoun","saycountpl","saydigits","saynumber","sayphonetic","sayunixtime","senddtmf","sendfax","sendfax","sendfax","sendimage","sendtext","sendurl","set","setamaflags","setcallerpres","setmusiconhold","sipaddheader","sipdtmfmode","sipremoveheader","skel","slastation","slatrunk","sms","softhangup","speechactivategrammar","speechbackground","speechcreate","speechdeactivategrammar","speechdestroy","speechloadgrammar","speechprocessingsound","speechstart","speechunloadgrammar","stackpop","startmusiconhold","stopmixmonitor","stopmonitor","stopmusiconhold","stopplaytones","system","testclient","testserver","transfer","tryexec","trysystem","unpausemonitor","unpausequeuemember","userevent","verbose","vmauthenticate","vmsayname","voicemail","voicemailmain","wait","waitexten","waitfornoise","waitforring","waitforsilence","waitmusiconhold","waituntil","while","zapateller"];return{startState:function(){return{extenStart:!1,extenSame:!1,extenInclude:!1,extenExten:!1,extenPriority:!1,extenApplication:!1}},token:function(n,i){var r="";return n.eatSpace()?null:i.extenStart?(n.eatWhile(/[^\s]/),r=n.current(),/^=>?$/.test(r)?(i.extenExten=!0,i.extenStart=!1,"strong"):(i.extenStart=!1,n.skipToEnd(),"error")):i.extenExten?(i.extenExten=!1,i.extenPriority=!0,n.eatWhile(/[^,]/),i.extenInclude&&(n.skipToEnd(),i.extenPriority=!1,i.extenInclude=!1),i.extenSame&&(i.extenPriority=!1,i.extenSame=!1,i.extenApplication=!0),"tag"):i.extenPriority?(i.extenPriority=!1,i.extenApplication=!0,n.next(),i.extenSame?null:(n.eatWhile(/[^,]/),"number")):i.extenApplication?(n.eatWhile(/,/),","===(r=n.current())?null:(n.eatWhile(/\w/),r=n.current().toLowerCase(),i.extenApplication=!1,-1!==a.indexOf(r)?"def strong":null)):function(a,n){var i="",r=a.next();if(";"==r)return a.skipToEnd(),"comment";if("["==r)return a.skipTo("]"),a.eat("]"),"header";if('"'==r)return a.skipTo('"'),"string";if("'"==r)return a.skipTo("'"),"string-2";if("#"==r&&(a.eatWhile(/\w/),i=a.current(),-1!==t.indexOf(i)))return a.skipToEnd(),"strong";if("$"==r&&"{"==a.peek())return a.skipTo("}"),a.eat("}"),"variable-3";if(a.eatWhile(/\w/),i=a.current(),-1!==e.indexOf(i)){switch(n.extenStart=!0,i){case"same":n.extenSame=!0;break;case"include":case"switch":case"ignorepat":n.extenInclude=!0}return"atom"}}(n,i)}}}),e.defineMIME("text/x-asterisk","asterisk")});
//# sourceMappingURL=../../sourcemaps/mode/asterisk/asterisk.js.map