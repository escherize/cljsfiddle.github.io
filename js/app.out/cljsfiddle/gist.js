// Compiled by ClojureScript 1.7.228 {:static-fns true}
goog.provide('cljsfiddle.gist');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cemerick.url');
goog.require('reagent.core');
cljsfiddle.gist.load = (function cljsfiddle$gist$load(var_args){
var args__7520__auto__ = [];
var len__7513__auto___14263 = arguments.length;
var i__7514__auto___14264 = (0);
while(true){
if((i__7514__auto___14264 < len__7513__auto___14263)){
args__7520__auto__.push((arguments[i__7514__auto___14264]));

var G__14265 = (i__7514__auto___14264 + (1));
i__7514__auto___14264 = G__14265;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljsfiddle.gist.load.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljsfiddle.gist.load.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__14261){
var vec__14262 = p__14261;
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14262,(0),null);

return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str("https://api.github.com/gists/"),cljs.core.str(id)].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__14262,callback){
return (function (x){
var response_text = cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (vec__14262,callback){
return (function (x__$1){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x__$1,"content");
});})(vec__14262,callback))
,cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,"files"))));
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(response_text) : callback.call(null,response_text));
} else {
return null;
}
});})(vec__14262,callback))
], null)], 0));
});

cljsfiddle.gist.load.cljs$lang$maxFixedArity = (1);

cljsfiddle.gist.load.cljs$lang$applyTo = (function (seq14259){
var G__14260 = cljs.core.first(seq14259);
var seq14259__$1 = cljs.core.next(seq14259);
return cljsfiddle.gist.load.cljs$core$IFn$_invoke$arity$variadic(G__14260,seq14259__$1);
});
cljsfiddle.gist.set_url = (function cljsfiddle$gist$set_url(url){
return window.location = url;
});
cljsfiddle.gist.current_url = (function cljsfiddle$gist$current_url(){
return cemerick.url.url.cljs$core$IFn$_invoke$arity$1(window.location.href);
});
cljsfiddle.gist.assoc_anchor = (function cljsfiddle$gist$assoc_anchor(p__14266,key,value){
var map__14269 = p__14266;
var map__14269__$1 = ((((!((map__14269 == null)))?((((map__14269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14269):map__14269);
var url = map__14269__$1;
var anchor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14269__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var anchor_map = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.url.query__GT_map(anchor),cljs.core.PersistentArrayMap.fromArray([cljs.core.name(key),[cljs.core.str(value)].join('')], true, false)], 0));
var anchor_str = cemerick.url.map__GT_query(anchor_map);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(url,new cljs.core.Keyword(null,"anchor","anchor",1549638489),anchor_str);
});
cljsfiddle.gist.get_anchor = (function cljsfiddle$gist$get_anchor(key){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cemerick.url.query__GT_map(new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(cljsfiddle.gist.current_url())),cljs.core.name(key));
});
cljsfiddle.gist.save = (function cljsfiddle$gist$save(string){

return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("https://api.github.com/gists",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),"???",new cljs.core.Keyword(null,"public","public",1566243851),true,new cljs.core.Keyword(null,"files","files",-472457450),new cljs.core.PersistentArrayMap(null, 1, ["cljsfiddle_save.edn",new cljs.core.PersistentArrayMap(null, 1, ["content",string], null)], null)], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (resp){
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(resp,"id");
return cljsfiddle.gist.set_url([cljs.core.str(cljsfiddle.gist.assoc_anchor(cljsfiddle.gist.current_url(),"gist",id))].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (x){
return console.log(x);
})], null)], 0));
});

//# sourceMappingURL=gist.js.map