// Compiled by ClojureScript 1.7.228 {:static-fns true}
goog.provide('parinfer.reader');
goog.require('cljs.core');
parinfer.reader.matching_delim = new cljs.core.PersistentArrayMap(null, 6, ["{","}","}","{","[","]","]","[","(",")",")","("], null);
parinfer.reader.opening_delim_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["(",null,"{",null,"[",null], null), null);
parinfer.reader.closing_delim_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["]",null,")",null,"}",null], null), null);
parinfer.reader.whitespace_QMARK_ = (function parinfer$reader$whitespace_QMARK_(ch){
return cljs.core.re_find(/\s/,ch);
});
parinfer.reader.prev_ch = (function parinfer$reader$prev_ch(stack){
return new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(cljs.core.peek(stack));
});
/**
 * Next character will be escaped.
 */
parinfer.reader.escaping_QMARK_ = (function parinfer$reader$escaping_QMARK_(stack){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",parinfer.reader.prev_ch(stack));
});
/**
 * Next character is inside a string.
 */
parinfer.reader.in_str_QMARK_ = (function parinfer$reader$in_str_QMARK_(stack){
var ch = parinfer.reader.prev_ch((function (){var G__13676 = stack;
var G__13676__$1 = (cljs.core.truth_(parinfer.reader.escaping_QMARK_(stack))?cljs.core.pop(G__13676):G__13676);
return G__13676__$1;
})());
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",ch);
});
/**
 * Next character is inside a comment.
 */
parinfer.reader.in_comment_QMARK_ = (function parinfer$reader$in_comment_QMARK_(stack){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(";",parinfer.reader.prev_ch(stack));
});
/**
 * Next character is inside actual code.
 */
parinfer.reader.in_code_QMARK_ = (function parinfer$reader$in_code_QMARK_(stack){
return (cljs.core.not(parinfer.reader.in_str_QMARK_(stack))) && (cljs.core.not(parinfer.reader.in_comment_QMARK_(stack)));
});
/**
 * Determine if the given closing delimiter can be used next, assuming we are inside code.
 */
parinfer.reader.valid_closer_QMARK_ = (function parinfer$reader$valid_closer_QMARK_(stack,ch){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parinfer.reader.prev_ch(stack),(parinfer.reader.matching_delim.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.matching_delim.cljs$core$IFn$_invoke$arity$1(ch) : parinfer.reader.matching_delim.call(null,ch)));
});
if(typeof parinfer.reader.push_char_STAR_ !== 'undefined'){
} else {
/**
 * Update the delimiter stack with the given character.
 */
parinfer.reader.push_char_STAR_ = (function (){var method_table__7368__auto__ = (function (){var G__13677 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13677) : cljs.core.atom.call(null,G__13677));
})();
var prefer_table__7369__auto__ = (function (){var G__13678 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13678) : cljs.core.atom.call(null,G__13678));
})();
var method_cache__7370__auto__ = (function (){var G__13679 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13679) : cljs.core.atom.call(null,G__13679));
})();
var cached_hierarchy__7371__auto__ = (function (){var G__13680 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13680) : cljs.core.atom.call(null,G__13680));
})();
var hierarchy__7372__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("parinfer.reader","push-char*"),((function (method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__,hierarchy__7372__auto__){
return (function (p__13681){
var map__13682 = p__13681;
var map__13682__$1 = ((((!((map__13682 == null)))?((((map__13682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13682):map__13682);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13682__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
if(cljs.core.truth_((parinfer.reader.opening_delim_QMARK_.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.opening_delim_QMARK_.cljs$core$IFn$_invoke$arity$1(ch) : parinfer.reader.opening_delim_QMARK_.call(null,ch)))){
return new cljs.core.Keyword(null,"open","open",-1763596448);
} else {
if(cljs.core.truth_((parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1(ch) : parinfer.reader.closing_delim_QMARK_.call(null,ch)))){
return new cljs.core.Keyword(null,"close","close",1835149582);
} else {
return ch;

}
}
});})(method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__,hierarchy__7372__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7372__auto__,method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__));
})();
}
parinfer.reader.push_char_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,"\t",(function (p__13684){
var map__13685 = p__13684;
var map__13685__$1 = ((((!((map__13685 == null)))?((((map__13685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13685):map__13685);
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13685__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.not(parinfer.reader.in_str_QMARK_(stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ch","ch",-554717905),"  "], null);
} else {
return null;

}
}));
parinfer.reader.push_char_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"open","open",-1763596448),(function (p__13687){
var map__13688 = p__13687;
var map__13688__$1 = ((((!((map__13688 == null)))?((((map__13688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13688):map__13688);
var state = map__13688__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13688__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_(stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop(stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_code_QMARK_(stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.select_keys(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905),new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232)], null)))], null);
} else {
return null;

}
}
}));
parinfer.reader.push_char_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"close","close",1835149582),(function (p__13690){
var map__13691 = p__13690;
var map__13691__$1 = ((((!((map__13691 == null)))?((((map__13691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13691):map__13691);
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13691__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var backup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13691__$1,new cljs.core.Keyword(null,"backup","backup",26347393));
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13691__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_(stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop(stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_code_QMARK_(stack))){
if(cljs.core.truth_(parinfer.reader.valid_closer_QMARK_(stack,ch))){
var opener = cljs.core.peek(stack);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop(stack),new cljs.core.Keyword(null,"backup","backup",26347393),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(backup,opener)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ch","ch",-554717905),""], null);
}
} else {
return null;

}
}
}));
parinfer.reader.push_char_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,";",(function (p__13693){
var map__13694 = p__13693;
var map__13694__$1 = ((((!((map__13694 == null)))?((((map__13694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13694):map__13694);
var state = map__13694__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13694__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_(stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop(stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_code_QMARK_(stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.select_keys(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905)], null)))], null);
} else {
return null;

}
}
}));
parinfer.reader.push_char_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,"\n",(function (p__13696){
var map__13697 = p__13696;
var map__13697__$1 = ((((!((map__13697 == null)))?((((map__13697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13697):map__13697);
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13697__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var stack__$1 = (function (){var G__13699 = stack;
var G__13699__$1 = (cljs.core.truth_(parinfer.reader.escaping_QMARK_(stack))?cljs.core.pop(G__13699):G__13699);
return G__13699__$1;
})();
var stack__$2 = (function (){var G__13700 = stack__$1;
var G__13700__$1 = (cljs.core.truth_(parinfer.reader.in_comment_QMARK_(stack__$1))?cljs.core.pop(G__13700):G__13700);
return G__13700__$1;
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",-554717905),"",new cljs.core.Keyword(null,"stack","stack",-793405930),stack__$2], null);
}));
parinfer.reader.push_char_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,"\\",(function (p__13701){
var map__13702 = p__13701;
var map__13702__$1 = ((((!((map__13702 == null)))?((((map__13702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13702):map__13702);
var state = map__13702__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13702__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_(stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop(stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_comment_QMARK_(stack))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.select_keys(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905)], null)))], null);

}
}
}));
parinfer.reader.push_char_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,"\"",(function (p__13704){
var map__13705 = p__13704;
var map__13705__$1 = ((((!((map__13705 == null)))?((((map__13705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13705):map__13705);
var state = map__13705__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13705__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_(stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop(stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_str_QMARK_(stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop(stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_comment_QMARK_(stack))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.select_keys(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905)], null)))], null);

}
}
}
}));
parinfer.reader.push_char_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__13707){
var map__13708 = p__13707;
var map__13708__$1 = ((((!((map__13708 == null)))?((((map__13708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13708):map__13708);
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13708__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_(stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop(stack)], null);
} else {
return null;

}
}));
parinfer.reader.push_char = (function parinfer$reader$push_char(state){
var new_data = (parinfer.reader.push_char_STAR_.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.push_char_STAR_.cljs$core$IFn$_invoke$arity$1(state) : parinfer.reader.push_char_STAR_.call(null,state));
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(((function (new_data){
return (function (p1__13711_SHARP_,p2__13710_SHARP_){
var or__6455__auto__ = p2__13710_SHARP_;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return p1__13711_SHARP_;
}
});})(new_data))
,cljs.core.array_seq([state,new_data], 0));
});

//# sourceMappingURL=reader.js.map