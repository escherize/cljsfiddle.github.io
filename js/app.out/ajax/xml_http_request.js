// Compiled by ClojureScript 1.7.228 {:static-fns true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__11387,handler){
var map__11388 = p__11387;
var map__11388__$1 = ((((!((map__11388 == null)))?((((map__11388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11388):map__11388);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11388__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11388__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11388__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11388__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11388__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11388__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11388__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__11388,map__11388__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__11386_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__11386_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__11388,map__11388__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___11396 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___11396)){
var response_type_11397 = temp__4425__auto___11396;
this$__$1.responseType = cljs.core.name(response_type_11397);
} else {
}

var seq__11390_11398 = cljs.core.seq(headers);
var chunk__11391_11399 = null;
var count__11392_11400 = (0);
var i__11393_11401 = (0);
while(true){
if((i__11393_11401 < count__11392_11400)){
var vec__11394_11402 = chunk__11391_11399.cljs$core$IIndexed$_nth$arity$2(null,i__11393_11401);
var k_11403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11394_11402,(0),null);
var v_11404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11394_11402,(1),null);
this$__$1.setRequestHeader(k_11403,v_11404);

var G__11405 = seq__11390_11398;
var G__11406 = chunk__11391_11399;
var G__11407 = count__11392_11400;
var G__11408 = (i__11393_11401 + (1));
seq__11390_11398 = G__11405;
chunk__11391_11399 = G__11406;
count__11392_11400 = G__11407;
i__11393_11401 = G__11408;
continue;
} else {
var temp__4425__auto___11409 = cljs.core.seq(seq__11390_11398);
if(temp__4425__auto___11409){
var seq__11390_11410__$1 = temp__4425__auto___11409;
if(cljs.core.chunked_seq_QMARK_(seq__11390_11410__$1)){
var c__7258__auto___11411 = cljs.core.chunk_first(seq__11390_11410__$1);
var G__11412 = cljs.core.chunk_rest(seq__11390_11410__$1);
var G__11413 = c__7258__auto___11411;
var G__11414 = cljs.core.count(c__7258__auto___11411);
var G__11415 = (0);
seq__11390_11398 = G__11412;
chunk__11391_11399 = G__11413;
count__11392_11400 = G__11414;
i__11393_11401 = G__11415;
continue;
} else {
var vec__11395_11416 = cljs.core.first(seq__11390_11410__$1);
var k_11417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11395_11416,(0),null);
var v_11418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11395_11416,(1),null);
this$__$1.setRequestHeader(k_11417,v_11418);

var G__11419 = cljs.core.next(seq__11390_11410__$1);
var G__11420 = null;
var G__11421 = (0);
var G__11422 = (0);
seq__11390_11398 = G__11419;
chunk__11391_11399 = G__11420;
count__11392_11400 = G__11421;
i__11393_11401 = G__11422;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6455__auto__ = body;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map