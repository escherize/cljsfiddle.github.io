// Compiled by ClojureScript 1.7.228 {:static-fns true}
goog.provide('cljs.analyzer');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.tagged_literals');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.env');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs.analyzer._STAR_cljs_ns_STAR_ = new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
cljs.analyzer._STAR_cljs_file_STAR_ = null;
cljs.analyzer._STAR_cljs_static_fns_STAR_ = false;
cljs.analyzer._STAR_cljs_macros_path_STAR_ = "/cljs/core";
cljs.analyzer._STAR_cljs_macros_is_classpath_STAR_ = true;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558),cljs.core.PersistentVector.EMPTY], null));
cljs.analyzer._STAR_analyze_deps_STAR_ = true;
cljs.analyzer._STAR_load_tests_STAR_ = true;
cljs.analyzer._STAR_load_macros_STAR_ = true;
cljs.analyzer._STAR_reload_macros_STAR_ = false;
cljs.analyzer._STAR_macro_infer_STAR_ = true;
cljs.analyzer._STAR_file_defs_STAR_ = null;
cljs.analyzer._STAR_verbose_STAR_ = false;
cljs.analyzer._cljs_macros_loaded = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837)],[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]);
cljs.analyzer.js_reserved = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 62, ["typeof",null,"float",null,"implements",null,"else",null,"boolean",null,"abstract",null,"int",null,"static",null,"package",null,"this",null,"yield",null,"interface",null,"void",null,"delete",null,"class",null,"export",null,"var",null,"try",null,"long",null,"null",null,"return",null,"methods",null,"native",null,"private",null,"new",null,"for",null,"catch",null,"extends",null,"short",null,"protected",null,"throws",null,"synchronized",null,"transient",null,"super",null,"if",null,"let",null,"import",null,"char",null,"switch",null,"const",null,"case",null,"break",null,"volatile",null,"function",null,"continue",null,"final",null,"do",null,"double",null,"while",null,"public",null,"arguments",null,"debugger",null,"with",null,"instanceof",null,"default",null,"throw",null,"goto",null,"finally",null,"byte",null,"constructor",null,"in",null,"enum",null], null), null);
cljs.analyzer.SENTINEL = {};
cljs.analyzer.gets = (function cljs$analyzer$gets(var_args){
var args8177 = [];
var len__7513__auto___8180 = arguments.length;
var i__7514__auto___8181 = (0);
while(true){
if((i__7514__auto___8181 < len__7513__auto___8180)){
args8177.push((arguments[i__7514__auto___8181]));

var G__8182 = (i__7514__auto___8181 + (1));
i__7514__auto___8181 = G__8182;
continue;
} else {
}
break;
}

var G__8179 = args8177.length;
switch (G__8179) {
case 3:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8177.length)].join('')));

}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3 = (function (m,k0,k1){
var m__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k1);
}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4 = (function (m,k0,k1,k2){
var m__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,k1,cljs.analyzer.SENTINEL);
if((m__$2 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$2,k2);
}
}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5 = (function (m,k0,k1,k2,k3){
var m__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,k1,cljs.analyzer.SENTINEL);
if((m__$2 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$3 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$2,k2,cljs.analyzer.SENTINEL);
if((m__$3 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$3,k3);
}
}
}
});

cljs.analyzer.gets.cljs$lang$maxFixedArity = 5;
cljs.analyzer.CLJ_NIL_SYM = new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null);
cljs.analyzer.NUMBER_SYM = new cljs.core.Symbol(null,"number","number",-1084057331,null);
cljs.analyzer.STRING_SYM = new cljs.core.Symbol(null,"string","string",-349010059,null);
cljs.analyzer.BOOLEAN_SYM = new cljs.core.Symbol(null,"boolean","boolean",-278886877,null);
cljs.analyzer.JS_STAR_SYM = new cljs.core.Symbol(null,"js*","js*",-1134233646,null);
cljs.analyzer.DOT_SYM = new cljs.core.Symbol(null,".",".",1975675962,null);
cljs.analyzer.NEW_SYM = new cljs.core.Symbol(null,"new","new",-444906321,null);
cljs.analyzer.CLJS_CORE_SYM = new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null);
cljs.analyzer.CLJS_CORE_MACROS_SYM = new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null);
cljs.analyzer.IGNORE_SYM = new cljs.core.Symbol(null,"ignore","ignore",8989494,null);
cljs.analyzer.ANY_SYM = new cljs.core.Symbol(null,"any","any",-948528346,null);
cljs.analyzer.cljs_seq_QMARK_ = (function cljs$analyzer$cljs_seq_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (64))) || (x.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_map_QMARK_ = (function cljs$analyzer$cljs_map_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (1024))) || (x.cljs$core$IMap$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_vector_QMARK_ = (function cljs$analyzer$cljs_vector_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (16384))) || (x.cljs$core$IVector$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_set_QMARK_ = (function cljs$analyzer$cljs_set_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (4096))) || (x.cljs$core$ISet$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.munge_path = (function cljs$analyzer$munge_path(ss){
return cljs.core.munge([cljs.core.str(ss)].join(''));
});
/**
 * Given a namespace as a symbol return the relative path. May optionally
 *   provide the file extension, defaults to :cljs.
 */
cljs.analyzer.ns__GT_relpath = (function cljs$analyzer$ns__GT_relpath(var_args){
var args8192 = [];
var len__7513__auto___8195 = arguments.length;
var i__7514__auto___8196 = (0);
while(true){
if((i__7514__auto___8196 < len__7513__auto___8195)){
args8192.push((arguments[i__7514__auto___8196]));

var G__8197 = (i__7514__auto___8196 + (1));
i__7514__auto___8196 = G__8197;
continue;
} else {
}
break;
}

var G__8194 = args8192.length;
switch (G__8194) {
case 1:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8192.length)].join('')));

}
});

cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629));
});

cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2 = (function (ns,ext){
return [cljs.core.str(clojure.string.replace(cljs.analyzer.munge_path(ns),".","/")),cljs.core.str("."),cljs.core.str(cljs.core.name(ext))].join('');
});

cljs.analyzer.ns__GT_relpath.cljs$lang$maxFixedArity = 2;
cljs.analyzer.topo_sort = (function cljs$analyzer$topo_sort(var_args){
var args8199 = [];
var len__7513__auto___8213 = arguments.length;
var i__7514__auto___8214 = (0);
while(true){
if((i__7514__auto___8214 < len__7513__auto___8213)){
args8199.push((arguments[i__7514__auto___8214]));

var G__8215 = (i__7514__auto___8214 + (1));
i__7514__auto___8214 = G__8215;
continue;
} else {
}
break;
}

var G__8201 = args8199.length;
switch (G__8201) {
case 2:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8199.length)].join('')));

}
});

cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2 = (function (x,get_deps){
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4(x,(0),(function (){var G__8202 = cljs.core.sorted_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8202) : cljs.core.atom.call(null,G__8202));
})(),cljs.core.memoize(get_deps));
});

cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4 = (function (x,depth,state,memo_get_deps){
var deps = (memo_get_deps.cljs$core$IFn$_invoke$arity$1 ? memo_get_deps.cljs$core$IFn$_invoke$arity$1(x) : memo_get_deps.call(null,x));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),cljs.core.array_seq([deps], 0));

var seq__8203_8217 = cljs.core.seq(deps);
var chunk__8204_8218 = null;
var count__8205_8219 = (0);
var i__8206_8220 = (0);
while(true){
if((i__8206_8220 < count__8205_8219)){
var dep_8221 = chunk__8204_8218.cljs$core$IIndexed$_nth$arity$2(null,i__8206_8220);
cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4(dep_8221,(depth + (1)),state,memo_get_deps);

var G__8222 = seq__8203_8217;
var G__8223 = chunk__8204_8218;
var G__8224 = count__8205_8219;
var G__8225 = (i__8206_8220 + (1));
seq__8203_8217 = G__8222;
chunk__8204_8218 = G__8223;
count__8205_8219 = G__8224;
i__8206_8220 = G__8225;
continue;
} else {
var temp__4425__auto___8226 = cljs.core.seq(seq__8203_8217);
if(temp__4425__auto___8226){
var seq__8203_8227__$1 = temp__4425__auto___8226;
if(cljs.core.chunked_seq_QMARK_(seq__8203_8227__$1)){
var c__7258__auto___8228 = cljs.core.chunk_first(seq__8203_8227__$1);
var G__8229 = cljs.core.chunk_rest(seq__8203_8227__$1);
var G__8230 = c__7258__auto___8228;
var G__8231 = cljs.core.count(c__7258__auto___8228);
var G__8232 = (0);
seq__8203_8217 = G__8229;
chunk__8204_8218 = G__8230;
count__8205_8219 = G__8231;
i__8206_8220 = G__8232;
continue;
} else {
var dep_8233 = cljs.core.first(seq__8203_8227__$1);
cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4(dep_8233,(depth + (1)),state,memo_get_deps);

var G__8234 = cljs.core.next(seq__8203_8227__$1);
var G__8235 = null;
var G__8236 = (0);
var G__8237 = (0);
seq__8203_8217 = G__8234;
chunk__8204_8218 = G__8235;
count__8205_8219 = G__8236;
i__8206_8220 = G__8237;
continue;
}
} else {
}
}
break;
}

var seq__8207_8238 = cljs.core.seq(cljs.core.subseq.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core._LT_,depth));
var chunk__8208_8239 = null;
var count__8209_8240 = (0);
var i__8210_8241 = (0);
while(true){
if((i__8210_8241 < count__8209_8240)){
var vec__8211_8242 = chunk__8208_8239.cljs$core$IIndexed$_nth$arity$2(null,i__8210_8241);
var _LT_depth_8243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8211_8242,(0),null);
var __8244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8211_8242,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_8243], null),clojure.set.difference,cljs.core.array_seq([deps], 0));

var G__8245 = seq__8207_8238;
var G__8246 = chunk__8208_8239;
var G__8247 = count__8209_8240;
var G__8248 = (i__8210_8241 + (1));
seq__8207_8238 = G__8245;
chunk__8208_8239 = G__8246;
count__8209_8240 = G__8247;
i__8210_8241 = G__8248;
continue;
} else {
var temp__4425__auto___8249 = cljs.core.seq(seq__8207_8238);
if(temp__4425__auto___8249){
var seq__8207_8250__$1 = temp__4425__auto___8249;
if(cljs.core.chunked_seq_QMARK_(seq__8207_8250__$1)){
var c__7258__auto___8251 = cljs.core.chunk_first(seq__8207_8250__$1);
var G__8252 = cljs.core.chunk_rest(seq__8207_8250__$1);
var G__8253 = c__7258__auto___8251;
var G__8254 = cljs.core.count(c__7258__auto___8251);
var G__8255 = (0);
seq__8207_8238 = G__8252;
chunk__8208_8239 = G__8253;
count__8209_8240 = G__8254;
i__8210_8241 = G__8255;
continue;
} else {
var vec__8212_8256 = cljs.core.first(seq__8207_8250__$1);
var _LT_depth_8257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8212_8256,(0),null);
var __8258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8212_8256,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_8257], null),clojure.set.difference,cljs.core.array_seq([deps], 0));

var G__8259 = cljs.core.next(seq__8207_8250__$1);
var G__8260 = null;
var G__8261 = (0);
var G__8262 = (0);
seq__8207_8238 = G__8259;
chunk__8208_8239 = G__8260;
count__8209_8240 = G__8261;
i__8210_8241 = G__8262;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(depth,(0))){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)))));
} else {
return null;
}
});

cljs.analyzer.topo_sort.cljs$lang$maxFixedArity = 4;

cljs.analyzer.ast_QMARK_ = (function cljs$analyzer$ast_QMARK_(x){
return (cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,new cljs.core.Keyword(null,"op","op",-1882987955)));
});
if(typeof cljs.analyzer.error_message !== 'undefined'){
} else {
cljs.analyzer.error_message = (function (){var method_table__7368__auto__ = (function (){var G__8263 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8263) : cljs.core.atom.call(null,G__8263));
})();
var prefer_table__7369__auto__ = (function (){var G__8264 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8264) : cljs.core.atom.call(null,G__8264));
})();
var method_cache__7370__auto__ = (function (){var G__8265 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8265) : cljs.core.atom.call(null,G__8265));
})();
var cached_hierarchy__7371__auto__ = (function (){var G__8266 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8266) : cljs.core.atom.call(null,G__8266));
})();
var hierarchy__7372__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.analyzer","error-message"),((function (method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__,hierarchy__7372__auto__){
return (function() { 
var G__8267__delegate = function (warning_type,_){
return warning_type;
};
var G__8267 = function (warning_type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8268__i = 0, G__8268__a = new Array(arguments.length -  1);
while (G__8268__i < G__8268__a.length) {G__8268__a[G__8268__i] = arguments[G__8268__i + 1]; ++G__8268__i;}
  _ = new cljs.core.IndexedSeq(G__8268__a,0);
} 
return G__8267__delegate.call(this,warning_type,_);};
G__8267.cljs$lang$maxFixedArity = 1;
G__8267.cljs$lang$applyTo = (function (arglist__8269){
var warning_type = cljs.core.first(arglist__8269);
var _ = cljs.core.rest(arglist__8269);
return G__8267__delegate(warning_type,_);
});
G__8267.cljs$core$IFn$_invoke$arity$variadic = G__8267__delegate;
return G__8267;
})()
;})(method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__,hierarchy__7372__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7372__auto__,method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__));
})();
}
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),(function (warning_type,info){
return [cljs.core.str("Preamble resource file not found: "),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.Keyword(null,"missing","missing",362507769).cljs$core$IFn$_invoke$arity$1(info)))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),(function (warning_type,info){
return [cljs.core.str("Required namespace not provided for "),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.Keyword(null,"unprovided","unprovided",-652330764).cljs$core$IFn$_invoke$arity$1(info)))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),(function (warning_type,info){
return [cljs.core.str("Use of undeclared Var "),cljs.core.str(new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),(function (warning_type,p__8270){
var map__8271 = p__8270;
var map__8271__$1 = ((((!((map__8271 == null)))?((((map__8271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8271):map__8271);
var info = map__8271__$1;
var ns_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8271__$1,new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605));
var js_provide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8271__$1,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493));
return [cljs.core.str("No such namespace: "),cljs.core.str(ns_sym),cljs.core.str(", could not locate "),cljs.core.str(cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns_sym,new cljs.core.Keyword(null,"cljs","cljs",1492417629))),cljs.core.str(", "),cljs.core.str(cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns_sym,new cljs.core.Keyword(null,"cljc","cljc",-1728400583))),cljs.core.str(", or Closure namespace \""),cljs.core.str(js_provide),cljs.core.str("\"")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"undeclared-macros-ns","undeclared-macros-ns",-438029430),(function (warning_type,p__8273){
var map__8274 = p__8273;
var map__8274__$1 = ((((!((map__8274 == null)))?((((map__8274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8274):map__8274);
var info = map__8274__$1;
var ns_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8274__$1,new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605));
var js_provide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8274__$1,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493));
return [cljs.core.str("No such macros namespace: "),cljs.core.str(ns_sym),cljs.core.str(", could not locate "),cljs.core.str(cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns_sym,new cljs.core.Keyword(null,"clj","clj",-660495428))),cljs.core.str(" or "),cljs.core.str(cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns_sym,new cljs.core.Keyword(null,"cljc","cljc",-1728400583)))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" not declared ^:dynamic")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"redef","redef",1032704258),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" already refers to: "),cljs.core.str(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))].join(''))),cljs.core.str(" being replaced by: "),cljs.core.str(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323).cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))].join('')))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" at line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is being replaced")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),(function (warning_type,info){
return [cljs.core.str(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323).cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))].join(''))),cljs.core.str(" no longer fn, references are stale")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),(function (warning_type,info){
return [cljs.core.str("Wrong number of args ("),cljs.core.str(new cljs.core.Keyword(null,"argc","argc",-1452839519).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(") passed to "),cljs.core.str((function (){var or__6455__auto__ = new cljs.core.Keyword(null,"ctor","ctor",1750864802).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
}
})())].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fexpr","fexpr",-122857150).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str(" is deprecated.")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),(function (warning_type,info){
return [cljs.core.str("Invalid :refer, var "),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"lib","lib",191808726).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" does not exist")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),(function (warning_type,info){
return [cljs.core.str("Protocol "),cljs.core.str(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is deprecated")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),(function (warning_type,info){
return [cljs.core.str("Can't resolve protocol symbol "),cljs.core.str(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),(function (warning_type,info){
return [cljs.core.str("Symbol "),cljs.core.str(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is not a protocol")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),(function (warning_type,info){
if(cljs.core.truth_(new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840).cljs$core$IFn$_invoke$arity$1(info))){
return [cljs.core.str("Bad method signature in protocol implementation, "),cljs.core.str(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" does not declare method called "),cljs.core.str(new cljs.core.Keyword(null,"fname","fname",1500291491).cljs$core$IFn$_invoke$arity$1(info))].join('');
} else {
return [cljs.core.str("Bad method signature in protocol implementation, "),cljs.core.str(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"fname","fname",1500291491).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" does not declare arity "),cljs.core.str(new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949).cljs$core$IFn$_invoke$arity$1(info))].join('');
}
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),(function (warning_type,info){
return [cljs.core.str("Duplicated methods in protocol implementation "),cljs.core.str(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"fname","fname",1500291491).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),(function (warning_type,info){
return [cljs.core.str("Protocol "),cljs.core.str(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" implemented multiple times")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),(function (warning_type,info){
return [cljs.core.str("Protocol "),cljs.core.str(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" declares method "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" with variadic signature (&)")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(": Can't have more than 1 variadic overload")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(": Can't have fixed arity function with more params than variadic function")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(": Can't have 2 overloads with same arity")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),(function (warning_type,info){
return [cljs.core.str("Extending an existing JavaScript type - use a different symbol name "),cljs.core.str("instead of "),cljs.core.str(new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" e.g "),cljs.core.str(new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"js-op","js-op",-1046277897).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(", all arguments must be numbers, got "),cljs.core.str(new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" instead.")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),(function (warning_type,info){
return [cljs.core.str("Cannot invoke type constructor "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fexpr","fexpr",-122857150).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str(" as function ")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is a single segment namespace")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),(function (warning_type,p__8277){
var map__8278 = p__8277;
var map__8278__$1 = ((((!((map__8278 == null)))?((((map__8278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8278):map__8278);
var info = map__8278__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8278__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var munged = cljs.core.munge(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__8278,map__8278__$1,info,name){
return (function (p1__8276_SHARP_){
if(cljs.core.truth_((cljs.analyzer.js_reserved.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.js_reserved.cljs$core$IFn$_invoke$arity$1(p1__8276_SHARP_) : cljs.analyzer.js_reserved.call(null,p1__8276_SHARP_)))){
return [cljs.core.str(p1__8276_SHARP_),cljs.core.str("$")].join('');
} else {
return p1__8276_SHARP_;
}
});})(map__8278,map__8278__$1,info,name))
,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(name),/\./))));
return [cljs.core.str("Namespace "),cljs.core.str(name),cljs.core.str(" contains a reserved JavaScript keyword,"),cljs.core.str(" the corresponding Google Closure namespace will be munged to "),cljs.core.str(munged)].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),(function (warning_type,p__8280){
var map__8281 = p__8280;
var map__8281__$1 = ((((!((map__8281 == null)))?((((map__8281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8281):map__8281);
var info = map__8281__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8281__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8281__$1,new cljs.core.Keyword(null,"var","var",-769682797));
return [cljs.core.str("Namespace "),cljs.core.str(ns),cljs.core.str(" clashes with var "),cljs.core.str(var$)].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),(function (warning_type,p__8283){
var map__8284 = p__8283;
var map__8284__$1 = ((((!((map__8284 == null)))?((((map__8284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8284):map__8284);
var info = map__8284__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8284__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8284__$1,new cljs.core.Keyword(null,"method","method",55703592));
return [cljs.core.str("Bad extend-type method shape for protocol "),cljs.core.str(protocol),cljs.core.str(" method "),cljs.core.str(method),cljs.core.str(", method arities must be grouped together")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),(function (warning_type,p__8286){
var map__8287 = p__8286;
var map__8287__$1 = ((((!((map__8287 == null)))?((((map__8287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8287):map__8287);
var info = map__8287__$1;
var module_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8287__$1,new cljs.core.Keyword(null,"module-type","module-type",1392760304));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8287__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return [cljs.core.str("Unsupported JavaScript module type "),cljs.core.str(module_type),cljs.core.str(" for foreign library "),cljs.core.str(file),cljs.core.str(".")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),(function (warning_type,p__8289){
var map__8290 = p__8289;
var map__8290__$1 = ((((!((map__8290 == null)))?((((map__8290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8290):map__8290);
var preprocess = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8290__$1,new cljs.core.Keyword(null,"preprocess","preprocess",1208285012));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8290__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return [cljs.core.str("Unsupported preprocess value "),cljs.core.str(preprocess),cljs.core.str(" for foreign library "),cljs.core.str(file),cljs.core.str(".")].join('');
}));
cljs.analyzer.default_warning_handler = (function cljs$analyzer$default_warning_handler(warning_type,env,extra){
if(cljs.core.truth_((warning_type.cljs$core$IFn$_invoke$arity$1 ? warning_type.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_) : warning_type.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_)))){
var temp__4425__auto__ = (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(warning_type,extra) : cljs.analyzer.error_message.call(null,warning_type,extra));
if(cljs.core.truth_(temp__4425__auto__)){
var s = temp__4425__auto__;
var _STAR_print_fn_STAR_8295 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_err_fn_STAR_;

try{return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__8296 = env;
var G__8297 = [cljs.core.str("WARNING: "),cljs.core.str(s)].join('');
return (cljs.analyzer.message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.message.cljs$core$IFn$_invoke$arity$2(G__8296,G__8297) : cljs.analyzer.message.call(null,G__8296,G__8297));
})()], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_8295;
}} else {
return null;
}
} else {
return null;
}
});
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.default_warning_handler], null);
cljs.analyzer.repeat_char = (function cljs$analyzer$repeat_char(c,n){
var ret = c;
var n__$1 = n;
while(true){
if((n__$1 > (0))){
var G__8298 = [cljs.core.str(ret),cljs.core.str(c)].join('');
var G__8299 = (n__$1 - (1));
ret = G__8298;
n__$1 = G__8299;
continue;
} else {
return ret;
}
break;
}
});
cljs.analyzer.hex_format = (function cljs$analyzer$hex_format(s,pad){
var hex = s.charCodeAt((0)).toString((16));
var len = hex.length;
var hex__$1 = (((len < pad))?[cljs.core.str(cljs.analyzer.repeat_char("0",(pad - len))),cljs.core.str(hex)].join(''):hex);
return [cljs.core.str("_u"),cljs.core.str(hex__$1),cljs.core.str("_")].join('');
});
cljs.analyzer.gen_constant_id = (function cljs$analyzer$gen_constant_id(value){
var prefix = (((value instanceof cljs.core.Keyword))?"cst$kw$":(((value instanceof cljs.core.Symbol))?"cst$sym$":(function(){throw (new Error([cljs.core.str("constant type "),cljs.core.str(cljs.core.type(value)),cljs.core.str(" not supported")].join('')))})()
));
var name = (((value instanceof cljs.core.Keyword))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str(value)].join(''),(1)):[cljs.core.str(value)].join(''));
var name__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",name))?"_DOT_":clojure.string.replace(clojure.string.replace(cljs.core.munge(clojure.string.replace(name,"-","_DASH_")),".","$"),/[^a-z0-9$_]/i,((function (prefix,name){
return (function (p1__8300_SHARP_){
return cljs.analyzer.hex_format(p1__8300_SHARP_,(4));
});})(prefix,name))
));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(prefix),cljs.core.str(name__$1)].join(''));
});
cljs.analyzer.register_constant_BANG_ = (function cljs$analyzer$register_constant_BANG_(var_args){
var args8301 = [];
var len__7513__auto___8309 = arguments.length;
var i__7514__auto___8310 = (0);
while(true){
if((i__7514__auto___8310 < len__7513__auto___8309)){
args8301.push((arguments[i__7514__auto___8310]));

var G__8311 = (i__7514__auto___8310 + (1));
i__7514__auto___8310 = G__8311;
continue;
} else {
}
break;
}

var G__8303 = args8301.length;
switch (G__8303) {
case 1:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8301.length)].join('')));

}
});

cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (val){
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2(null,val);
});

cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (env,val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,(function (cenv){
var G__8304 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cenv,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889)], null),(function (table){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(table,val))){
return table;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(table,val,cljs.analyzer.gen_constant_id(val));
}
}));
var G__8304__$1 = (cljs.core.truth_(env)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__8304,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword("cljs.analyzer","constants","cljs.analyzer/constants",1697083770)], null),((function (G__8304){
return (function (p__8305){
var map__8306 = p__8305;
var map__8306__$1 = ((((!((map__8306 == null)))?((((map__8306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8306):map__8306);
var constants = map__8306__$1;
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8306__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8306__$1,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.PersistentVector.EMPTY);
var G__8308 = constants;
var G__8308__$1 = ((!(cljs.core.contains_QMARK_(seen,val)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__8308,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,val),cljs.core.array_seq([new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(order,val)], 0)):G__8308);
return G__8308__$1;
});})(G__8304))
):G__8304);
return G__8304__$1;
}));
});

cljs.analyzer.register_constant_BANG_.cljs$lang$maxFixedArity = 2;
cljs.analyzer.default_namespaces = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)], null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)], null)], null);
cljs.analyzer.namespaces = (function (){
if(typeof cljs.analyzer.t_cljs$analyzer8313 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.analyzer.t_cljs$analyzer8313 = (function (meta8314){
this.meta8314 = meta8314;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.analyzer.t_cljs$analyzer8313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8315,meta8314__$1){
var self__ = this;
var _8315__$1 = this;
return (new cljs.analyzer.t_cljs$analyzer8313(meta8314__$1));
});

cljs.analyzer.t_cljs$analyzer8313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8315){
var self__ = this;
var _8315__$1 = this;
return self__.meta8314;
});

cljs.analyzer.t_cljs$analyzer8313.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(!((cljs.env._STAR_compiler_STAR_ == null))){
return new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return cljs.analyzer.default_namespaces;
}
});

cljs.analyzer.t_cljs$analyzer8313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta8314","meta8314",250026627,null)], null);
});

cljs.analyzer.t_cljs$analyzer8313.cljs$lang$type = true;

cljs.analyzer.t_cljs$analyzer8313.cljs$lang$ctorStr = "cljs.analyzer/t_cljs$analyzer8313";

cljs.analyzer.t_cljs$analyzer8313.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write(writer__7054__auto__,"cljs.analyzer/t_cljs$analyzer8313");
});

cljs.analyzer.__GT_t_cljs$analyzer8313 = (function cljs$analyzer$__GT_t_cljs$analyzer8313(meta8314){
return (new cljs.analyzer.t_cljs$analyzer8313(meta8314));
});

}

return (new cljs.analyzer.t_cljs$analyzer8313(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cljs.analyzer.get_namespace = (function cljs$analyzer$get_namespace(var_args){
var args8316 = [];
var len__7513__auto___8319 = arguments.length;
var i__7514__auto___8320 = (0);
while(true){
if((i__7514__auto___8320 < len__7513__auto___8319)){
args8316.push((arguments[i__7514__auto___8320]));

var G__8321 = (i__7514__auto___8320 + (1));
i__7514__auto___8320 = G__8321;
continue;
} else {
}
break;
}

var G__8318 = args8316.length;
switch (G__8318) {
case 1:
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8316.length)].join('')));

}
});

cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1 = (function (key){
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,key);
});

cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2 = (function (cenv,key){
var ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cenv) : cljs.core.deref.call(null,cenv)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),key], null));
if(!((ns == null))){
return ns;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),key)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)], null);
} else {
return null;
}
}
});

cljs.analyzer.get_namespace.cljs$lang$maxFixedArity = 2;
cljs.analyzer.get_line = (function cljs$analyzer$get_line(x,env){
var or__6455__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env);
}
});
cljs.analyzer.get_col = (function cljs$analyzer$get_col(x,env){
var or__6455__auto__ = new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(env);
}
});
/**
 * Given a Clojure namespace intern all macros into the ambient ClojureScript
 * analysis environment.
 */
cljs.analyzer.intern_macros = (function cljs$analyzer$intern_macros(var_args){
var args8323 = [];
var len__7513__auto___8330 = arguments.length;
var i__7514__auto___8331 = (0);
while(true){
if((i__7514__auto___8331 < len__7513__auto___8330)){
args8323.push((arguments[i__7514__auto___8331]));

var G__8332 = (i__7514__auto___8331 + (1));
i__7514__auto___8331 = G__8332;
continue;
} else {
}
break;
}

var G__8325 = args8323.length;
switch (G__8325) {
case 1:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8323.length)].join('')));

}
});

cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2(ns,false);
});

cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2 = (function (ns,reload){
if(cljs.core.truth_((function (){var or__6455__auto__ = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"macros","macros",811339431)], null)) == null);
if(or__6455__auto__){
return or__6455__auto__;
} else {
return reload;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"macros","macros",811339431)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8326){
var vec__8327 = p__8326;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8327,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8327,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var vm = cljs.core.meta(v);
var vm__$1 = (function (){var ns__$1 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(vm).getName();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(vm,new cljs.core.Keyword(null,"ns","ns",441598760),ns__$1,cljs.core.array_seq([new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(ns__$1)].join(''),[cljs.core.str(k)].join(''))], 0));
})();
return vm__$1;
})()], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__8328){
var vec__8329 = p__8328;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8329,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8329,(1),null);
return v.isMacro();
}),cljs.core.ns_interns_STAR_(ns)))));
} else {
return null;
}
});

cljs.analyzer.intern_macros.cljs$lang$maxFixedArity = 2;
/**
 * Construct an empty analysis environment. Required to analyze forms.
 */
cljs.analyzer.empty_env = (function cljs$analyzer$empty_env(){
var val__8121__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__8121__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"locals","locals",535295783),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"js-globals","js-globals",1670394727),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (val__8121__auto__){
return (function (p1__8334_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__8334_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),p1__8334_SHARP_], null)],null));
});})(val__8121__auto__))
,cljs.core.list(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.Symbol(null,"window","window",-1929916235,null),new cljs.core.Symbol(null,"document","document",311342840,null),new cljs.core.Symbol(null,"console","console",-1426363712,null),new cljs.core.Symbol(null,"escape","escape",648929575,null),new cljs.core.Symbol(null,"unescape","unescape",-2037730561,null),new cljs.core.Symbol(null,"screen","screen",-664376021,null),new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"navigator","navigator",-604431588,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"global","global",1734126574,null),new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"require","require",1172530194,null),new cljs.core.Symbol(null,"module","module",-1229817578,null),new cljs.core.Symbol(null,"exports","exports",895523255,null))))], null);
}finally {if((val__8121__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.analyzer.source_info = (function cljs$analyzer$source_info(var_args){
var args8335 = [];
var len__7513__auto___8338 = arguments.length;
var i__7514__auto___8339 = (0);
while(true){
if((i__7514__auto___8339 < len__7513__auto___8338)){
args8335.push((arguments[i__7514__auto___8339]));

var G__8340 = (i__7514__auto___8339 + (1));
i__7514__auto___8339 = G__8340;
continue;
} else {
}
break;
}

var G__8337 = args8335.length;
switch (G__8337) {
case 1:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8335.length)].join('')));

}
});

cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1 = (function (env){
var temp__4425__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__4425__auto__)){
var line = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)))?"cljs/core.cljs":cljs.analyzer._STAR_cljs_file_STAR_),new cljs.core.Keyword(null,"line","line",212345235),cljs.analyzer.get_line(cljs.core.name,env),new cljs.core.Keyword(null,"column","column",2078222095),cljs.analyzer.get_col(cljs.core.name,env)], null);
} else {
return null;
}
});

cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2 = (function (name,env){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)))?"cljs/core.cljs":cljs.analyzer._STAR_cljs_file_STAR_),new cljs.core.Keyword(null,"line","line",212345235),cljs.analyzer.get_line(name,env),new cljs.core.Keyword(null,"column","column",2078222095),cljs.analyzer.get_col(name,env)], null);
});

cljs.analyzer.source_info.cljs$lang$maxFixedArity = 2;
cljs.analyzer.message = (function cljs$analyzer$message(env,s){
return [cljs.core.str(s),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str(" at line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str(" "),cljs.core.str(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):(cljs.core.truth_(cljs.analyzer._STAR_cljs_file_STAR_)?[cljs.core.str(" in file "),cljs.core.str(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null)))].join('');
});
cljs.analyzer.warning = (function cljs$analyzer$warning(warning_type,env,extra){
var seq__8346 = cljs.core.seq(cljs.analyzer._STAR_cljs_warning_handlers_STAR_);
var chunk__8347 = null;
var count__8348 = (0);
var i__8349 = (0);
while(true){
if((i__8349 < count__8348)){
var handler = chunk__8347.cljs$core$IIndexed$_nth$arity$2(null,i__8349);
(handler.cljs$core$IFn$_invoke$arity$3 ? handler.cljs$core$IFn$_invoke$arity$3(warning_type,env,extra) : handler.call(null,warning_type,env,extra));

var G__8350 = seq__8346;
var G__8351 = chunk__8347;
var G__8352 = count__8348;
var G__8353 = (i__8349 + (1));
seq__8346 = G__8350;
chunk__8347 = G__8351;
count__8348 = G__8352;
i__8349 = G__8353;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8346);
if(temp__4425__auto__){
var seq__8346__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8346__$1)){
var c__7258__auto__ = cljs.core.chunk_first(seq__8346__$1);
var G__8354 = cljs.core.chunk_rest(seq__8346__$1);
var G__8355 = c__7258__auto__;
var G__8356 = cljs.core.count(c__7258__auto__);
var G__8357 = (0);
seq__8346 = G__8354;
chunk__8347 = G__8355;
count__8348 = G__8356;
i__8349 = G__8357;
continue;
} else {
var handler = cljs.core.first(seq__8346__$1);
(handler.cljs$core$IFn$_invoke$arity$3 ? handler.cljs$core$IFn$_invoke$arity$3(warning_type,env,extra) : handler.call(null,warning_type,env,extra));

var G__8358 = cljs.core.next(seq__8346__$1);
var G__8359 = null;
var G__8360 = (0);
var G__8361 = (0);
seq__8346 = G__8358;
chunk__8347 = G__8359;
count__8348 = G__8360;
i__8349 = G__8361;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.error = (function cljs$analyzer$error(var_args){
var args8362 = [];
var len__7513__auto___8365 = arguments.length;
var i__7514__auto___8366 = (0);
while(true){
if((i__7514__auto___8366 < len__7513__auto___8365)){
args8362.push((arguments[i__7514__auto___8366]));

var G__8367 = (i__7514__auto___8366 + (1));
i__7514__auto___8366 = G__8367;
continue;
} else {
}
break;
}

var G__8364 = args8362.length;
switch (G__8364) {
case 2:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8362.length)].join('')));

}
});

cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2 = (function (env,msg){
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,msg,null);
});

cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3 = (function (env,msg,cause){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.message(env,msg),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("cljs","analysis-error","cljs/analysis-error",-420526349)),cause);
});

cljs.analyzer.error.cljs$lang$maxFixedArity = 3;
cljs.analyzer.analysis_error_QMARK_ = (function cljs$analyzer$analysis_error_QMARK_(ex){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs","analysis-error","cljs/analysis-error",-420526349),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(ex)));
});
cljs.analyzer.implicit_nses = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"goog.string","goog.string",-2055533048,null),null,new cljs.core.Symbol(null,"goog","goog",-70603925,null),null,new cljs.core.Symbol(null,"goog.object","goog.object",678593132,null),null,new cljs.core.Symbol(null,"Math","Math",2033287572,null),null,new cljs.core.Symbol(null,"goog.array","goog.array",-671977860,null),null], null), null);
cljs.analyzer.implicit_import_QMARK_ = (function cljs$analyzer$implicit_import_QMARK_(env,prefix,suffix){
return cljs.core.contains_QMARK_(cljs.analyzer.implicit_nses,prefix);
});
cljs.analyzer.confirm_var_exist_warning = (function cljs$analyzer$confirm_var_exist_warning(env,prefix,suffix){
return (function (env__$1,prefix__$1,suffix__$1){
return cljs.analyzer.warning(new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),prefix__$1,new cljs.core.Keyword(null,"suffix","suffix",367373057),suffix__$1], null));
});
});
/**
 * Check if a JavaScript namespace has been loaded. JavaScript vars are
 *   not currently checked.
 */
cljs.analyzer.loaded_js_ns_QMARK_ = (function cljs$analyzer$loaded_js_ns_QMARK_(env,prefix){
if(cljs.core.truth_(cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),prefix))){
return null;
} else {
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env);
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(ns),prefix) == null))){
return true;
} else {
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ns),prefix) == null))){
return true;
} else {
return false;
}
}
}
});
cljs.analyzer.confirm_var_exists = (function cljs$analyzer$confirm_var_exists(var_args){
var args8370 = [];
var len__7513__auto___8373 = arguments.length;
var i__7514__auto___8374 = (0);
while(true){
if((i__7514__auto___8374 < len__7513__auto___8373)){
args8370.push((arguments[i__7514__auto___8374]));

var G__8375 = (i__7514__auto___8374 + (1));
i__7514__auto___8374 = G__8375;
continue;
} else {
}
break;
}

var G__8372 = args8370.length;
switch (G__8372) {
case 3:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8370.length)].join('')));

}
});

cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$3 = (function (env,prefix,suffix){
var warn = cljs.analyzer.confirm_var_exist_warning(env,prefix,suffix);
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4(env,prefix,suffix,warn);
});

cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4 = (function (env,prefix,suffix,missing_fn){
var sufstr = [cljs.core.str(suffix)].join('');
var suffix_str = (((!((".." === sufstr))) && (/\./.test(sufstr)))?cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(sufstr,/\./)):suffix);
var suffix__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(suffix_str);
if((!(cljs.analyzer.implicit_import_QMARK_(env,prefix,suffix__$1))) && (!(cljs.analyzer.loaded_js_ns_QMARK_(env,prefix))) && (!((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),suffix__$1)))) && ((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),prefix,new cljs.core.Keyword(null,"defs","defs",1398449717),suffix__$1) == null))){
return (missing_fn.cljs$core$IFn$_invoke$arity$3 ? missing_fn.cljs$core$IFn$_invoke$arity$3(env,prefix,suffix__$1) : missing_fn.call(null,env,prefix,suffix__$1));
} else {
return null;
}
});

cljs.analyzer.confirm_var_exists.cljs$lang$maxFixedArity = 4;
cljs.analyzer.confirm_var_exists_throw = (function cljs$analyzer$confirm_var_exists_throw(){
return (function (env,prefix,suffix){
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4(env,prefix,suffix,(function (env__$1,prefix__$1,suffix__$1){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env__$1,[cljs.core.str("Unable to resolve var: "),cljs.core.str(suffix__$1),cljs.core.str(" in this context")].join(''));
}));
});
});
cljs.analyzer.resolve_ns_alias = (function cljs$analyzer$resolve_ns_alias(env,name){
var sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),sym,sym);
});
cljs.analyzer.resolve_macro_ns_alias = (function cljs$analyzer$resolve_macro_ns_alias(env,name){
var sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),sym,sym);
});
/**
 * Given env, an analysis environment, and ns-sym, a symbol identifying a
 * namespace, confirm that the namespace exists. Warn if not found.
 */
cljs.analyzer.confirm_ns = (function cljs$analyzer$confirm_ns(env,ns_sym){
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),ns_sym)) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.implicit_nses,ns_sym) == null)) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),ns_sym) == null)) && ((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_sym) == null))){
return cljs.analyzer.warning(new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),ns_sym], null));
} else {
return null;
}
});
/**
 * Is sym visible from core in the current compilation namespace?
 */
cljs.analyzer.core_name_QMARK_ = (function cljs$analyzer$core_name_QMARK_(env,sym){
var and__6443__auto__ = (function (){var or__6455__auto__ = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Keyword(null,"defs","defs",1398449717),sym);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
var temp__4425__auto__ = (cljs.analyzer.get_expander.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.get_expander.cljs$core$IFn$_invoke$arity$2(sym,env) : cljs.analyzer.get_expander.call(null,sym,env));
if(cljs.core.truth_(temp__4425__auto__)){
var mac = temp__4425__auto__;
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(mac));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns.getName(),new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null));
} else {
return null;
}
}
})();
if(cljs.core.truth_(and__6443__auto__)){
return !(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"excludes","excludes",-1791725945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),sym));
} else {
return and__6443__auto__;
}
});
/**
 * Resolve a var. Accepts a side-effecting confirm fn for producing
 * warnings about unresolved vars.
 */
cljs.analyzer.resolve_var = (function cljs$analyzer$resolve_var(var_args){
var args8377 = [];
var len__7513__auto___8383 = arguments.length;
var i__7514__auto___8384 = (0);
while(true){
if((i__7514__auto___8384 < len__7513__auto___8383)){
args8377.push((arguments[i__7514__auto___8384]));

var G__8385 = (i__7514__auto___8384 + (1));
i__7514__auto___8384 = G__8385;
continue;
} else {
}
break;
}

var G__8379 = args8377.length;
switch (G__8379) {
case 2:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8377.length)].join('')));

}
});

cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2 = (function (env,sym){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,null);
});

cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3 = (function (env,sym,confirm){
while(true){
if(("js" === cljs.core.namespace(sym))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sym,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"js","js",-886355190,null)], null);
} else {
var s = [cljs.core.str(sym)].join('');
var lcls = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
var lb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lcls,sym);
if(!((lb == null))){
return lb;
} else {
if(!((cljs.core.namespace(sym) == null))){
var ns = cljs.core.namespace(sym);
var ns__$1 = ((("clojure.core" === ns))?"cljs.core":ns);
var full_ns = cljs.analyzer.resolve_ns_alias(env,ns__$1);
if((confirm == null)){
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),full_ns)){
cljs.analyzer.confirm_ns(env,full_ns);
} else {
}

var G__8380_8387 = env;
var G__8381_8388 = full_ns;
var G__8382_8389 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
(confirm.cljs$core$IFn$_invoke$arity$3 ? confirm.cljs$core$IFn$_invoke$arity$3(G__8380_8387,G__8381_8388,G__8382_8389) : confirm.call(null,G__8380_8387,G__8381_8388,G__8382_8389));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),full_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(full_ns)].join(''),[cljs.core.str(cljs.core.name(sym))].join('')),new cljs.core.Keyword(null,"ns","ns",441598760),full_ns], null)], 0));
} else {
if((goog.string.contains(s,".")) && (!(goog.string.contains(s,"..")))){
var idx = s.indexOf(".");
var prefix = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),idx));
var suffix = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(idx + (1)));
var lb__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lcls,prefix);
if(!((lb__$1 == null))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(lb__$1))].join(''),suffix)], null);
} else {
var cur_ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var full_ns = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cur_ns,new cljs.core.Keyword(null,"imports","imports",-1249933394),prefix);
if(!((full_ns == null))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(full_ns)].join(''),suffix)], null);
} else {
var info = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cur_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),prefix);
if(!((info == null))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([info,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cur_ns)].join(''),[cljs.core.str(sym)].join('')),new cljs.core.Keyword(null,"ns","ns",441598760),cur_ns], null)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),prefix,new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(suffix)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",prefix))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(suffix):cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(prefix)].join(''),suffix)),new cljs.core.Keyword(null,"ns","ns",441598760),prefix], null)], 0));
}
}
}
} else {
if(!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"uses","uses",232664692),sym) == null))){
var full_ns = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"uses","uses",232664692),sym);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),full_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(full_ns)].join(''),[cljs.core.str(sym)].join('')),new cljs.core.Keyword(null,"ns","ns",441598760),full_ns], null)], 0));
} else {
if(!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"imports","imports",-1249933394),sym) == null))){
var G__8390 = env;
var G__8391 = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"imports","imports",-1249933394),sym);
var G__8392 = confirm;
env = G__8390;
sym = G__8391;
confirm = G__8392;
continue;
} else {
var cur_ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var full_ns = ((!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cur_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym) == null)))?cur_ns:((cljs.analyzer.core_name_QMARK_(env,sym))?new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null):cur_ns
));
if((confirm == null)){
} else {
(confirm.cljs$core$IFn$_invoke$arity$3 ? confirm.cljs$core$IFn$_invoke$arity$3(env,full_ns,sym) : confirm.call(null,env,full_ns,sym));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),full_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(full_ns)].join(''),[cljs.core.str(sym)].join('')),new cljs.core.Keyword(null,"ns","ns",441598760),full_ns], null)], 0));

}
}
}
}
}
}
break;
}
});

cljs.analyzer.resolve_var.cljs$lang$maxFixedArity = 3;
/**
 * Given env, an analysis environment, and sym, a symbol, resolve an existing var.
 * Emits a warning if no such var exists.
 */
cljs.analyzer.resolve_existing_var = (function cljs$analyzer$resolve_existing_var(env,sym){
if(cljs.core.not(new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym)))){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,cljs.analyzer.confirm_var_exists);
} else {
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,sym);
}
});
/**
 * Given env, an analysis environment env, and names, a list of symbols, confirm
 * that all correspond to declared dynamic vars.
 */
cljs.analyzer.confirm_bindings = (function cljs$analyzer$confirm_bindings(env,names){
var seq__8397 = cljs.core.seq(names);
var chunk__8398 = null;
var count__8399 = (0);
var i__8400 = (0);
while(true){
if((i__8400 < count__8399)){
var name = chunk__8398.cljs$core$IIndexed$_nth$arity$2(null,i__8400);
var env_8401__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_8402 = cljs.analyzer.resolve_existing_var(env_8401__$1,name);
if(cljs.core.truth_((function (){var and__6443__auto__ = ev_8402;
if(cljs.core.truth_(and__6443__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(ev_8402));
} else {
return and__6443__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"dynamic","dynamic",704819571),env_8401__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ev","ev",-406827324),ev_8402,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ev_8402)], null));
} else {
}

var G__8403 = seq__8397;
var G__8404 = chunk__8398;
var G__8405 = count__8399;
var G__8406 = (i__8400 + (1));
seq__8397 = G__8403;
chunk__8398 = G__8404;
count__8399 = G__8405;
i__8400 = G__8406;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8397);
if(temp__4425__auto__){
var seq__8397__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8397__$1)){
var c__7258__auto__ = cljs.core.chunk_first(seq__8397__$1);
var G__8407 = cljs.core.chunk_rest(seq__8397__$1);
var G__8408 = c__7258__auto__;
var G__8409 = cljs.core.count(c__7258__auto__);
var G__8410 = (0);
seq__8397 = G__8407;
chunk__8398 = G__8408;
count__8399 = G__8409;
i__8400 = G__8410;
continue;
} else {
var name = cljs.core.first(seq__8397__$1);
var env_8411__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_8412 = cljs.analyzer.resolve_existing_var(env_8411__$1,name);
if(cljs.core.truth_((function (){var and__6443__auto__ = ev_8412;
if(cljs.core.truth_(and__6443__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(ev_8412));
} else {
return and__6443__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"dynamic","dynamic",704819571),env_8411__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ev","ev",-406827324),ev_8412,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ev_8412)], null));
} else {
}

var G__8413 = cljs.core.next(seq__8397__$1);
var G__8414 = null;
var G__8415 = (0);
var G__8416 = (0);
seq__8397 = G__8413;
chunk__8398 = G__8414;
count__8399 = G__8415;
i__8400 = G__8416;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given env, an analysis environment, and sym, a symbol, resolve a macro.
 */
cljs.analyzer.resolve_macro_var = (function cljs$analyzer$resolve_macro_var(env,sym){
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927));
if(cljs.core.truth_(cljs.core.namespace(sym))){
var ns__$1 = cljs.core.namespace(sym);
var ns__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clojure.core",ns__$1))?"cljs.core":ns__$1);
var full_ns = cljs.analyzer.resolve_macro_ns_alias(env,ns__$2);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,new cljs.core.Keyword(null,"macros","macros",811339431),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym))], null));
} else {
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym], null)))){
var full_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,new cljs.core.Keyword(null,"macros","macros",811339431),sym], null));
} else {
var ns__$1 = (cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"macros","macros",811339431),sym], null)))?ns:((cljs.analyzer.core_name_QMARK_(env,sym))?new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null):null));
if(cljs.core.truth_(ns__$1)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns__$1,new cljs.core.Keyword(null,"macros","macros",811339431),sym], null));
} else {
return null;
}

}
}
});


cljs.analyzer.specials = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 21, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,new cljs.core.Symbol(null,".",".",1975675962,null),null,new cljs.core.Symbol(null,"var","var",870848730,null),null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,new cljs.core.Symbol(null,"def","def",597100991,null),null], null), null);
cljs.analyzer._STAR_recur_frames_STAR_ = null;
cljs.analyzer._STAR_loop_lets_STAR_ = cljs.core.List.EMPTY;
cljs.analyzer._STAR_allow_redef_STAR_ = false;
cljs.analyzer.analyze_keyword = (function cljs$analyzer$analyze_keyword(env,sym){
cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2(env,sym);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),sym,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)], null);
});
cljs.analyzer.get_tag = (function cljs$analyzer$get_tag(e){
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(e);
if(!((tag == null))){
return tag;
} else {
var tag__$1 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(e));
if(!((tag__$1 == null))){
return tag__$1;
} else {
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(e)));
}
}
});
cljs.analyzer.find_matching_method = (function cljs$analyzer$find_matching_method(f,params){
var methods$ = (function (){var or__6455__auto__ = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(f);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f));
}
})();
var c = cljs.core.count(params);
return cljs.core.some(((function (methods$,c){
return (function (m){
var and__6443__auto__ = (function (){var or__6455__auto__ = (new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(m) === c);
if(or__6455__auto__){
return or__6455__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m);
}
})();
if(cljs.core.truth_(and__6443__auto__)){
return m;
} else {
return and__6443__auto__;
}
});})(methods$,c))
,methods$);
});
cljs.analyzer.type_QMARK_ = (function cljs$analyzer$type_QMARK_(env,t){
if((!((t == null))) && ((t instanceof cljs.core.Symbol))){
var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,t);
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(var$);
if(!((type == null))){
return type;
} else {
var type__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$));
if(!((type__$1 == null))){
return type__$1;
} else {
var proto = new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$);
if(!((proto == null))){
return proto;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null),null,new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null),null], null), null),t);
}
}
}
} else {
return null;
}
});
cljs.analyzer.NOT_NATIVE = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null),null], null), null);
cljs.analyzer.BOOLEAN_OR_SEQ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
cljs.analyzer.infer_if = (function cljs$analyzer$infer_if(env,e){
var map__8425 = e;
var map__8425__$1 = ((((!((map__8425 == null)))?((((map__8425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8425):map__8425);
var map__8426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8425__$1,new cljs.core.Keyword(null,"test","test",577538877));
var map__8426__$1 = ((((!((map__8426 == null)))?((((map__8426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8426):map__8426);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8426__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8426__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var then_tag = (function (){var G__8429 = env;
var G__8430 = new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__8429,G__8430) : cljs.analyzer.infer_tag.call(null,G__8429,G__8430));
})();
if((cljs.core.keyword_identical_QMARK_(op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && (!((form == null))) && (!(form === false))){
return then_tag;
} else {
var else_tag = (function (){var G__8431 = env;
var G__8432 = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__8431,G__8432) : cljs.analyzer.infer_tag.call(null,G__8431,G__8432));
})();
if((cljs.core.symbol_identical_QMARK_(then_tag,else_tag)) || (cljs.core.symbol_identical_QMARK_(else_tag,cljs.analyzer.IGNORE_SYM))){
return then_tag;
} else {
if(cljs.core.symbol_identical_QMARK_(then_tag,cljs.analyzer.IGNORE_SYM)){
return else_tag;
} else {
if(((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.NOT_NATIVE,then_tag) == null))) || (cljs.analyzer.type_QMARK_(env,then_tag))) && ((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.NOT_NATIVE,else_tag) == null))) || (cljs.analyzer.type_QMARK_(env,else_tag)))){
return new cljs.core.Symbol(null,"clj","clj",980036099,null);
} else {
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.BOOLEAN_OR_SEQ,then_tag) == null))) && (!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.BOOLEAN_OR_SEQ,else_tag) == null)))){
return new cljs.core.Symbol(null,"seq","seq",-177272256,null);
} else {
var then_tag__$1 = ((cljs.analyzer.cljs_set_QMARK_(then_tag))?then_tag:cljs.core.PersistentHashSet.fromArray([then_tag], true));
var else_tag__$1 = ((cljs.analyzer.cljs_set_QMARK_(else_tag))?else_tag:cljs.core.PersistentHashSet.fromArray([else_tag], true));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(then_tag__$1,else_tag__$1);
}

}
}
}
}
});
cljs.analyzer.infer_invoke = (function cljs$analyzer$infer_invoke(env,e){
var map__8435 = new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(e);
var map__8435__$1 = ((((!((map__8435 == null)))?((((map__8435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8435):map__8435);
var f = map__8435__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8435__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var ret_tag = (((new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info) == null))?null:new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990).cljs$core$IFn$_invoke$arity$1(info));
if(!((ret_tag == null))){
return ret_tag;
} else {
var args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(e);
var me = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.find_matching_method(f,args),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"method","method",55703592));
var ret_tag__$1 = (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(env,me) : cljs.analyzer.infer_tag.call(null,env,me));
if(!((ret_tag__$1 == null))){
return ret_tag__$1;
} else {
return cljs.analyzer.ANY_SYM;
}
}
});
/**
 * Given env, an analysis environment, and e, an AST node, return the inferred
 * type of the node
 */
cljs.analyzer.infer_tag = (function cljs$analyzer$infer_tag(env,e){
var tag = cljs.analyzer.get_tag(e);
if(!((tag == null))){
return tag;
} else {
var G__8453 = (((new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(e) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(e).fqn:null);
switch (G__8453) {
case "js":
return cljs.analyzer.ANY_SYM;

break;
case "let":
return cljs$analyzer$infer_tag(env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(e));

break;
case "do":
return cljs$analyzer$infer_tag(env,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(e));

break;
case "if":
return cljs.analyzer.infer_if(env,e);

break;
case "method":
return cljs$analyzer$infer_tag(env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(e));

break;
case "constant":
var G__8454 = new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__8454)){
return cljs.analyzer.BOOLEAN_SYM;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__8454)){
return cljs.analyzer.BOOLEAN_SYM;
} else {
return cljs.analyzer.ANY_SYM;

}
}

break;
case "recur":
return cljs.analyzer.IGNORE_SYM;

break;
case "loop":
return cljs$analyzer$infer_tag(env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(e));

break;
case "var":
if(!((new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(e) == null))){
return cljs$analyzer$infer_tag(env,new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(e));
} else {
return cljs$analyzer$infer_tag(env,new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(e));
}

break;
case "invoke":
return cljs.analyzer.infer_invoke(env,e);

break;
case "throw":
return cljs.analyzer.IGNORE_SYM;

break;
case "def":
return cljs$analyzer$infer_tag(env,new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(e));

break;
case "dot":
return cljs.analyzer.ANY_SYM;

break;
default:
return null;

}
}
});
if(typeof cljs.analyzer.parse !== 'undefined'){
} else {
cljs.analyzer.parse = (function (){var method_table__7368__auto__ = (function (){var G__8456 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8456) : cljs.core.atom.call(null,G__8456));
})();
var prefer_table__7369__auto__ = (function (){var G__8457 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8457) : cljs.core.atom.call(null,G__8457));
})();
var method_cache__7370__auto__ = (function (){var G__8458 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8458) : cljs.core.atom.call(null,G__8458));
})();
var cached_hierarchy__7371__auto__ = (function (){var G__8459 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8459) : cljs.core.atom.call(null,G__8459));
})();
var hierarchy__7372__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.analyzer","parse"),((function (method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__,hierarchy__7372__auto__){
return (function() { 
var G__8460__delegate = function (op,rest){
return op;
};
var G__8460 = function (op,var_args){
var rest = null;
if (arguments.length > 1) {
var G__8461__i = 0, G__8461__a = new Array(arguments.length -  1);
while (G__8461__i < G__8461__a.length) {G__8461__a[G__8461__i] = arguments[G__8461__i + 1]; ++G__8461__i;}
  rest = new cljs.core.IndexedSeq(G__8461__a,0);
} 
return G__8460__delegate.call(this,op,rest);};
G__8460.cljs$lang$maxFixedArity = 1;
G__8460.cljs$lang$applyTo = (function (arglist__8462){
var op = cljs.core.first(arglist__8462);
var rest = cljs.core.rest(arglist__8462);
return G__8460__delegate(op,rest);
});
G__8460.cljs$core$IFn$_invoke$arity$variadic = G__8460__delegate;
return G__8460;
})()
;})(method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__,hierarchy__7372__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7372__auto__,method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__));
})();
}
cljs.analyzer.var_ast = (function cljs$analyzer$var_ast(env,sym){
var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,cljs.analyzer.confirm_var_exists_throw());
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(temp__4423__auto__)){
var var_ns = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,sym) : cljs.analyzer.analyze.call(null,expr_env,sym)),new cljs.core.Keyword(null,"sym","sym",-1444860305),(function (){var G__8467 = expr_env;
var G__8468 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_ns),cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)))))));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__8467,G__8468) : cljs.analyzer.analyze.call(null,G__8467,G__8468));
})(),new cljs.core.Keyword(null,"meta","meta",1499536964),(function (){var ks = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null);
var m = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var user_meta = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(var$);
var uks = cljs.core.keys(user_meta);
return cljs.core.zipmap(uks,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (user_meta,uks,ks,var_ns,temp__4423__auto__,var$,expr_env){
return (function (p1__8463_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(user_meta,p1__8463_SHARP_)),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(user_meta,uks,ks,var_ns,temp__4423__auto__,var$,expr_env))
,uks));
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.zipmap(ks,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ks,var_ns,temp__4423__auto__,var$,expr_env){
return (function (p1__8464_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(var$,p1__8464_SHARP_)),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(ks,var_ns,temp__4423__auto__,var$,expr_env))
,ks)),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$))))))),cljs.core.array_seq([new cljs.core.Keyword(null,"test","test",577538877),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),cljs.core._conj(cljs.core.List.EMPTY,sym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$test",".-cljs$lang$test",718963148,null)),cljs.core._conj(cljs.core.List.EMPTY,sym)))))], 0)))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var arglists = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(var$);
var arglists_SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists)))?cljs.core.second(arglists):arglists);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta,arglists_SINGLEQUOTE_,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838).cljs$core$IFn$_invoke$arity$1(var$)))),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
})()], 0))], 0));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,m) : cljs.analyzer.analyze.call(null,expr_env,m));
})()], null);
} else {
return null;
}
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"var","var",870848730,null),(function (op,env,p__8469,_,___$1){
var vec__8470 = p__8469;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8470,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8470,(1),null);
var form = vec__8470;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"form","form",-1624062471),form], null),cljs.analyzer.var_ast(env,sym)], 0));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(function (op,env,p__8471,name,_){
var vec__8472 = p__8471;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8472,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8472,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8472,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8472,(3),null);
var form = vec__8472;
if((cljs.core.count(form) < (3))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Too few arguments to if");
} else {
}

if((cljs.core.count(form) > (4))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Too many arguments to if");
} else {
}

var test_expr = (function (){var _STAR_recur_frames_STAR_8473 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var G__8474 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var G__8475 = test;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__8474,G__8475) : cljs.analyzer.analyze.call(null,G__8474,G__8475));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8473;
}})();
var then_expr = (function (){var _STAR_allow_redef_STAR_8476 = cljs.analyzer._STAR_allow_redef_STAR_;
cljs.analyzer._STAR_allow_redef_STAR_ = true;

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,then) : cljs.analyzer.analyze.call(null,env,then));
}finally {cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR_8476;
}})();
var else_expr = (function (){var _STAR_allow_redef_STAR_8477 = cljs.analyzer._STAR_allow_redef_STAR_;
cljs.analyzer._STAR_allow_redef_STAR_ = true;

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,else$) : cljs.analyzer.analyze.call(null,env,else$));
}finally {cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR_8477;
}})();
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"test","test",577538877),test_expr,new cljs.core.Keyword(null,"then","then",460598070),then_expr,new cljs.core.Keyword(null,"else","else",-1508377146),else_expr,new cljs.core.Keyword(null,"unchecked","unchecked",924418378),cljs.core._STAR_unchecked_if_STAR_,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_expr,then_expr,else_expr], null)], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),(function (op,env,p__8480,name,_){
var vec__8481 = p__8480;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8481,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8481,(1),null);
var tests = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8481,(2),null);
var thens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8481,(3),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8481,(4),null);
var form = vec__8481;
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("case* must switch on symbol"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))], 0)))].join('')));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,tests)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("case* tests must be grouped in vectors"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"tests","tests",599445902,null))], 0)))].join('')));
}

var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var v = (function (){var _STAR_recur_frames_STAR_8482 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,sym) : cljs.analyzer.analyze.call(null,expr_env,sym));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8482;
}})();
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (expr_env,v,vec__8481,___$1,sym,tests,thens,default$,form){
return (function (p1__8478_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (expr_env,v,vec__8481,___$1,sym,tests,thens,default$,form){
return (function (t){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,t) : cljs.analyzer.analyze.call(null,expr_env,t));
});})(expr_env,v,vec__8481,___$1,sym,tests,thens,default$,form))
,p1__8478_SHARP_);
});})(expr_env,v,vec__8481,___$1,sym,tests,thens,default$,form))
,tests);
var thens__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (expr_env,v,tests__$1,vec__8481,___$1,sym,tests,thens,default$,form){
return (function (p1__8479_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,p1__8479_SHARP_) : cljs.analyzer.analyze.call(null,env,p1__8479_SHARP_));
});})(expr_env,v,tests__$1,vec__8481,___$1,sym,tests,thens,default$,form))
,thens);
var default$__$1 = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,default$) : cljs.analyzer.analyze.call(null,env,default$));
if(cljs.core.every_QMARK_(((function (expr_env,v,tests__$1,thens__$1,default$__$1,vec__8481,___$1,sym,tests,thens,default$,form){
return (function (t){
var or__6455__auto__ = new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(t));
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
var and__6443__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(t));
if(and__6443__auto__){
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.char_QMARK_).call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(t));
} else {
return and__6443__auto__;
}
}
});})(expr_env,v,tests__$1,thens__$1,default$__$1,vec__8481,___$1,sym,tests,thens,default$,form))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,tests__$1))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("case* tests must be numbers, strings, or constants"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"const","const",1709929842)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"constant","constant",-379609303),cljs.core.list(new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"t","t",242699008,null))),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"some-fn","some-fn",-490044165,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"char?","char?",-1072221244,null)),cljs.core.list(new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"t","t",242699008,null)))))),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"tests","tests",599445902,null)))], 0)))].join('')));
}

return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"case*","case*",716180697),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"v","v",21465059),v,new cljs.core.Keyword(null,"tests","tests",-1041085625),tests__$1,new cljs.core.Keyword(null,"thens","thens",226631442),thens__$1,new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),tests__$1,cljs.core.array_seq([thens__$1,(cljs.core.truth_(default$__$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$__$1], null):null)], 0)))], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),(function (op,env,p__8483,name,_){
var vec__8484 = p__8483;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8484,(0),null);
var throw$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8484,(1),null);
var form = vec__8484;
var throw_expr = (function (){var _STAR_recur_frames_STAR_8485 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var G__8486 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var G__8487 = throw$;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__8486,G__8487) : cljs.analyzer.analyze.call(null,G__8486,G__8487));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8485;
}})();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"throw","throw",-1044625833),throw_expr,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [throw_expr], null)], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),(function (op,env,p__8492,name,_){
var vec__8493 = p__8492;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8493,(0),null);
var body = cljs.core.nthnext(vec__8493,(1));
var form = vec__8493;
var catchenv = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113)], null),((function (vec__8493,___$1,body,form){
return (function (p1__8488_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),p1__8488_SHARP_)){
return new cljs.core.Keyword(null,"return","return",-1891502105);
} else {
return p1__8488_SHARP_;
}
});})(vec__8493,___$1,body,form))
);
var catch_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,((function (catchenv,vec__8493,___$1,body,form){
return (function (p1__8489_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__8489_SHARP_),new cljs.core.Symbol(null,"catch","catch",-1616370245,null));
});})(catchenv,vec__8493,___$1,body,form))
);
var default_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(catch_QMARK_,((function (catchenv,catch_QMARK_,vec__8493,___$1,body,form){
return (function (p1__8490_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__8490_SHARP_),new cljs.core.Keyword(null,"default","default",-1987822328));
});})(catchenv,catch_QMARK_,vec__8493,___$1,body,form))
);
var finally_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,((function (catchenv,catch_QMARK_,default_QMARK_,vec__8493,___$1,body,form){
return (function (p1__8491_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__8491_SHARP_),new cljs.core.Symbol(null,"finally","finally",-1065347064,null));
});})(catchenv,catch_QMARK_,default_QMARK_,vec__8493,___$1,body,form))
);
var map__8494 = (function (){var parser = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"forms","forms",2045992350),body,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"dblock","dblock",-1325623381),null,new cljs.core.Keyword(null,"fblock","fblock",-1236607426),null], null);
while(true){
if(cljs.core.seq_QMARK_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(parser))){
var vec__8495 = new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(parser);
var form__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8495,(0),null);
var forms_STAR_ = cljs.core.nthnext(vec__8495,(1));
var parser_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,new cljs.core.Keyword(null,"forms","forms",2045992350),forms_STAR_);
var G__8496 = (((new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(parser).fqn:null);
switch (G__8496) {
case "start":
if(cljs.core.truth_((catch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? catch_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : catch_QMARK_.call(null,form__$1)))){
var G__8508 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"catches","catches",-1478797617));
parser = G__8508;
continue;
} else {
if(cljs.core.truth_((finally_QMARK_.cljs$core$IFn$_invoke$arity$1 ? finally_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : finally_QMARK_.call(null,form__$1)))){
var G__8509 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705));
parser = G__8509;
continue;
} else {
var G__8510 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),cljs.core.conj,form__$1);
parser = G__8510;
continue;

}
}

break;
case "catches":
if(cljs.core.truth_((default_QMARK_.cljs$core$IFn$_invoke$arity$1 ? default_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : default_QMARK_.call(null,form__$1)))){
var G__8511 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser_STAR_,new cljs.core.Keyword(null,"dblock","dblock",-1325623381),form__$1,cljs.core.array_seq([new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705)], 0));
parser = G__8511;
continue;
} else {
if(cljs.core.truth_((catch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? catch_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : catch_QMARK_.call(null,form__$1)))){
var G__8512 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138)], null),cljs.core.conj,form__$1);
parser = G__8512;
continue;
} else {
if(cljs.core.truth_((finally_QMARK_.cljs$core$IFn$_invoke$arity$1 ? finally_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : finally_QMARK_.call(null,form__$1)))){
var G__8513 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705));
parser = G__8513;
continue;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Invalid try form");

}
}
}

break;
case "finally":
var G__8514 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser_STAR_,new cljs.core.Keyword(null,"fblock","fblock",-1236607426),form__$1,cljs.core.array_seq([new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188)], 0));
parser = G__8514;
continue;

break;
case "done":
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Unexpected form after finally");

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(parser))].join('')));

}
} else {
return parser;
}
break;
}
})();
var map__8494__$1 = ((((!((map__8494 == null)))?((((map__8494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8494):map__8494);
var body__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8494__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var cblocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8494__$1,new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138));
var dblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8494__$1,new cljs.core.Keyword(null,"dblock","dblock",-1325623381));
var fblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8494__$1,new cljs.core.Keyword(null,"fblock","fblock",-1236607426));
var finally$ = ((cljs.core.seq(fblock))?(function (){var G__8498 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863));
var G__8499 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.rest(fblock))));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__8498,G__8499) : cljs.analyzer.analyze.call(null,G__8498,G__8499));
})():null);
var e = (cljs.core.truth_((function (){var or__6455__auto__ = cljs.core.seq(cblocks);
if(or__6455__auto__){
return or__6455__auto__;
} else {
return dblock;
}
})())?cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("e"):null);
var default$ = (function (){var temp__4423__auto__ = dblock;
if(cljs.core.truth_(temp__4423__auto__)){
var vec__8500 = temp__4423__auto__;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8500,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8500,(1),null);
var name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8500,(2),null);
var cb = cljs.core.nthnext(vec__8500,(3));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,name__$1),cljs.core._conj(cljs.core.List.EMPTY,e)))))),cljs.core.array_seq([cb], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),cljs.core._conj(cljs.core.List.EMPTY,e))));
}
})();
var cblock = ((cljs.core.seq(cblocks))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (catchenv,catch_QMARK_,default_QMARK_,finally_QMARK_,map__8494,map__8494__$1,body__$1,cblocks,dblock,fblock,finally$,e,default$,vec__8493,___$1,body,form){
return (function (p__8501){
var vec__8502 = p__8501;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8502,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8502,(1),null);
var name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8502,(2),null);
var cb = cljs.core.nthnext(vec__8502,(3));
if(cljs.core.truth_(name__$1)){
if(cljs.core.not(cljs.core.namespace(name__$1))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't qualify symbol in catch"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"name","name",-810760592,null)))], 0)))].join('')));
}
} else {
}

return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null)),cljs.core._conj(cljs.core.List.EMPTY,type),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,e)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,name__$1),cljs.core._conj(cljs.core.List.EMPTY,e)))))),cljs.core.array_seq([cb], 0)))))))));
});})(catchenv,catch_QMARK_,default_QMARK_,finally_QMARK_,map__8494,map__8494__$1,body__$1,cblocks,dblock,fblock,finally$,e,default$,vec__8493,___$1,body,form))
,cljs.core.array_seq([cblocks], 0)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),cljs.core._conj(cljs.core.List.EMPTY,default$)], 0)))):default$);
var locals = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(catchenv);
var locals__$1 = (cljs.core.truth_(e)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(locals,e,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),e,new cljs.core.Keyword(null,"line","line",212345235),cljs.analyzer.get_line(e,env),new cljs.core.Keyword(null,"column","column",2078222095),cljs.analyzer.get_col(e,env)], null)):locals);
var catch$ = (cljs.core.truth_(cblock)?(function (){var G__8503 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(catchenv,new cljs.core.Keyword(null,"locals","locals",535295783),locals__$1);
var G__8504 = cblock;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__8503,G__8504) : cljs.analyzer.analyze.call(null,G__8503,G__8504));
})():null);
var try$ = (function (){var G__8505 = (cljs.core.truth_((function (){var or__6455__auto__ = e;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return finally$;
}
})())?catchenv:env);
var G__8506 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1)));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__8505,G__8506) : cljs.analyzer.analyze.call(null,G__8505,G__8506));
})();
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"try","try",1380742522),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"try","try",1380742522),try$,new cljs.core.Keyword(null,"finally","finally",1589088705),finally$,new cljs.core.Keyword(null,"name","name",1843675177),e,new cljs.core.Keyword(null,"catch","catch",1038065524),catch$,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [try$,catch$,finally$], null)], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"def","def",597100991,null),(function (op,env,form,name,_){
var pfn = (function() {
var G__8525 = null;
var G__8525__2 = (function (___$1,sym){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null);
});
var G__8525__3 = (function (___$1,sym,init){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"init","init",-1875481434),init], null);
});
var G__8525__4 = (function (___$1,sym,doc,init){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"init","init",-1875481434),init], null);
});
G__8525 = function(___$1,sym,doc,init){
switch(arguments.length){
case 2:
return G__8525__2.call(this,___$1,sym);
case 3:
return G__8525__3.call(this,___$1,sym,doc);
case 4:
return G__8525__4.call(this,___$1,sym,doc,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8525.cljs$core$IFn$_invoke$arity$2 = G__8525__2;
G__8525.cljs$core$IFn$_invoke$arity$3 = G__8525__3;
G__8525.cljs$core$IFn$_invoke$arity$4 = G__8525__4;
return G__8525;
})()
;
var args = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pfn,form);
var sym = new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(args);
var sym_meta = cljs.core.meta(sym);
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
var dynamic = new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var locals = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
var clash_ns = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(sym)].join(''));
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),clash_ns], null)))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(sym)].join('')),new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(ns_name)].join(''),[cljs.core.str(sym)].join(''))], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace(sym))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't def ns-qualified name");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),sym)))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't redefine a constant");
} else {
}

var temp__4425__auto___8526 = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__4425__auto___8526)){
var doc_8527 = temp__4425__auto___8526;
if(typeof doc_8527 === 'string'){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Too many arguments to def");
}
} else {
}

var temp__4425__auto___8528 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null));
if(cljs.core.truth_(temp__4425__auto___8528)){
var v_8529 = temp__4425__auto___8528;
if(cljs.core.truth_((function (){var and__6443__auto__ = cljs.core.not(cljs.analyzer._STAR_allow_redef_STAR_);
if(and__6443__auto__){
var and__6443__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(v_8529));
if(and__6443__auto____$1){
var and__6443__auto____$2 = cljs.core.not(new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(sym_meta));
if(and__6443__auto____$2){
var and__6443__auto____$3 = cljs.analyzer._STAR_file_defs_STAR_;
if(cljs.core.truth_(and__6443__auto____$3)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_file_defs_STAR_) : cljs.core.deref.call(null,cljs.analyzer._STAR_file_defs_STAR_)),sym);
} else {
return and__6443__auto____$3;
}
} else {
return and__6443__auto____$2;
}
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(v_8529)], null));
} else {
}
} else {
}

if(cljs.core.truth_(cljs.analyzer._STAR_file_defs_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.analyzer._STAR_file_defs_STAR_,cljs.core.conj,sym);
} else {
}

var env__$1 = (cljs.core.truth_((function (){var or__6455__auto__ = (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ns_name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))) && (cljs.analyzer.core_name_QMARK_(env,sym));
if(or__6455__auto__){
return or__6455__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"uses","uses",232664692),sym], null));
}
})())?(function (){var ev = cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),sym);
cljs.analyzer.warning(new cljs.core.Keyword(null,"redef","redef",1032704258),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(ev),new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323),ns_name], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"excludes","excludes",-1791725945)], null),cljs.core.conj,cljs.core.array_seq([sym], 0));

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"excludes","excludes",-1791725945)], null),cljs.core.conj,sym);
})():env);
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"locals","locals",535295783)),sym));
var init_expr = ((cljs.core.contains_QMARK_(args,new cljs.core.Keyword(null,"init","init",-1875481434)))?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),var_name], null),sym_meta,(cljs.core.truth_(dynamic)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null):null),cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2(var_name,env__$1)], 0)));

var _STAR_recur_frames_STAR_8516 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var G__8517 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var G__8518 = new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(args);
var G__8519 = sym;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(G__8517,G__8518,G__8519) : cljs.analyzer.analyze.call(null,G__8517,G__8518,G__8519));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8516;
}})()
:null);
var fn_var_QMARK_ = (function (){var and__6443__auto__ = init_expr;
if(cljs.core.truth_(and__6443__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"fn","fn",-1175266204));
} else {
return and__6443__auto__;
}
})();
var tag__$1 = (cljs.core.truth_(fn_var_QMARK_)?(function (){var or__6455__auto__ = new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990).cljs$core$IFn$_invoke$arity$1(init_expr);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return tag;
}
})():tag);
var export_as = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"export","export",214356590).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
if(cljs.core.truth_(temp__4425__auto__)){
var export_val = temp__4425__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,export_val)){
return var_name;
} else {
return export_val;
}
} else {
return null;
}
})();
var doc = (function (){var or__6455__auto__ = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
}
})();
var temp__4425__auto___8530 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null));
if(cljs.core.truth_(temp__4425__auto___8530)){
var v_8531 = temp__4425__auto___8530;
if(cljs.core.truth_((function (){var and__6443__auto__ = cljs.core.not(new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym)));
if(and__6443__auto__){
var and__6443__auto____$1 = new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(v_8531);
if(cljs.core.truth_(and__6443__auto____$1)){
return cljs.core.not(fn_var_QMARK_);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323),ns_name,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null));
} else {
}
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),var_name], null),(function (){var G__8520 = sym_meta;
var G__8520__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(sym_meta))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8520,new cljs.core.Keyword(null,"test","test",577538877),true):G__8520);
return G__8520__$1;
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(sym_meta,new cljs.core.Keyword(null,"test","test",577538877)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878)], null),((function (env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns){
return (function (f){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env__$1)),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
return "cljs/core.cljs";
} else {
return f;
}
});})(env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns))
)], null),(cljs.core.truth_(doc)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc], null):null),(cljs.core.truth_(dynamic)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null):null),cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2(var_name,env__$1),(cljs.core.truth_(protocol)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),protocol], null):null),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
if(cljs.core.truth_(temp__4425__auto__)){
var protocol_symbol = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),protocol_symbol,new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol_symbol)),new cljs.core.Keyword(null,"impls","impls",-1314014853),cljs.core.PersistentHashSet.EMPTY], null);
} else {
return null;
}
})(),(cljs.core.truth_(fn_var_QMARK_)?(function (){var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns){
return (function (p1__8515_SHARP_){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(p1__8515_SHARP_)));
});})(env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns))
,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(init_expr));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),true,new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365),new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556),new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(init_expr)], null),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173).cljs$core$IFn$_invoke$arity$1(sym_meta);
if(cljs.core.truth_(temp__4423__auto__)){
var top_fn_meta = temp__4423__auto__;
return top_fn_meta;
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"method-params","method-params",-980792179),params,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.meta,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta)))], null);
}
})()], 0));
})():null),(cljs.core.truth_((function (){var and__6443__auto__ = fn_var_QMARK_;
if(cljs.core.truth_(and__6443__auto__)){
return tag__$1;
} else {
return and__6443__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),tag__$1], null):null)], 0)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"name","name",1843675177),var_name,new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__8521 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"locals","locals",535295783)),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),new cljs.core.Keyword(null,"def-var","def-var",-698214377),true);
var G__8522 = sym;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__8521,G__8522) : cljs.analyzer.analyze.call(null,G__8521,G__8522));
})(),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797)),new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516),new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(sym_meta),new cljs.core.Keyword(null,"init","init",-1875481434),init_expr], null),(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env__$1))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var-ast","var-ast",1200379319),cljs.analyzer.var_ast(env__$1,sym)], null):null),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(sym_meta);
if(cljs.core.truth_(temp__4425__auto__)){
var test = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test","test",577538877),(function (){var G__8523 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var G__8524 = test;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__8523,G__8524) : cljs.analyzer.analyze.call(null,G__8523,G__8524));
})()], null);
} else {
return null;
}
})(),(cljs.core.truth_(tag__$1)?(cljs.core.truth_(fn_var_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),tag__$1], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag__$1], null)):null),(cljs.core.truth_(dynamic)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null):null),(cljs.core.truth_(export_as)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export","export",214356590),export_as], null):null),(cljs.core.truth_(init_expr)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [init_expr], null)], null):null)], 0));
}));
cljs.analyzer.analyze_fn_method_param = (function cljs$analyzer$analyze_fn_method_param(env){
return (function (p__8534,name){
var vec__8535 = p__8534;
var locals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8535,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8535,(1),null);
var line = cljs.analyzer.get_line(name,env);
var column = cljs.analyzer.get_col(name,env);
var nmeta = cljs.core.meta(name);
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(nmeta);
var shadow = (((locals == null))?null:(locals.cljs$core$IFn$_invoke$arity$1 ? locals.cljs$core$IFn$_invoke$arity$1(name) : locals.call(null,name)));
var env__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null)], 0));
var param = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"shadow","shadow",873231803)],[name,true,new cljs.core.Keyword(null,"var","var",-769682797),env__$1,column,line,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"shadow","shadow",873231803),shadow], null),tag,shadow]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(locals,name,param),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,param)], null);
});
});
cljs.analyzer.analyze_fn_method_body = (function cljs$analyzer$analyze_fn_method_body(env,form,recur_frames){
var _STAR_recur_frames_STAR_8537 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = recur_frames;

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,form) : cljs.analyzer.analyze.call(null,env,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8537;
}});
cljs.analyzer.analyze_fn_method = (function cljs$analyzer$analyze_fn_method(env,locals,form,type){
var param_names = cljs.core.first(form);
var variadic = cljs.core.boolean$(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),param_names));
var param_names__$1 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),param_names));
var body = cljs.core.next(form);
var step = cljs.analyzer.analyze_fn_method_param(env);
var step_init = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [locals,cljs.core.PersistentVector.EMPTY], null);
var vec__8540 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,step_init,param_names__$1);
var locals__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8540,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8540,(1),null);
var params_SINGLEQUOTE_ = ((variadic === true)?cljs.core.butlast(params):params);
var fixed_arity = cljs.core.count(params_SINGLEQUOTE_);
var recur_frame = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"flag","flag",1088647881),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null))], null);
var recur_frames = cljs.core.cons(recur_frame,cljs.analyzer._STAR_recur_frames_STAR_);
var body_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.array_seq([new cljs.core.Keyword(null,"locals","locals",535295783),locals__$1], 0));
var body_form = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
var expr = cljs.analyzer.analyze_fn_method_body(body_env,body_form,recur_frames);
var recurs = (function (){var G__8541 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(recur_frame);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__8541) : cljs.core.deref.call(null,G__8541));
})();
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),fixed_arity,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"expr","expr",745722291),expr,new cljs.core.Keyword(null,"recurs","recurs",-1959309309),recurs], null);
});
cljs.analyzer.fn_name_var = (function cljs$analyzer$fn_name_var(env,locals,name){
if((name == null)){
return null;
} else {
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(locals,name);
var shadow__$1 = (((shadow == null))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-globals","js-globals",1670394727),name], null)):null);
var fn_scope = new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859).cljs$core$IFn$_invoke$arity$1(env);
var name_var = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531),true,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859),fn_scope,new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"shadow","shadow",873231803),shadow__$1], null)], null);
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name));
var ret_tag = (((tag == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),tag], null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name_var,ret_tag], 0));
}
});
cljs.analyzer.analyze_fn_methods_pass2_STAR_ = (function cljs$analyzer$analyze_fn_methods_pass2_STAR_(menv,locals,type,meths){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8542_SHARP_){
return cljs.analyzer.analyze_fn_method(menv,locals,p1__8542_SHARP_,type);
}),meths));
});
cljs.analyzer.analyze_fn_methods_pass2 = (function cljs$analyzer$analyze_fn_methods_pass2(menv,locals,type,meths){
var _STAR_cljs_warnings_STAR_8544 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));

try{return cljs.analyzer.analyze_fn_methods_pass2_STAR_(menv,locals,type,meths);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_8544;
}});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(function (op,env,p__8546,name,_){
var vec__8547 = p__8546;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8547,(0),null);
var args = cljs.core.nthnext(vec__8547,(1));
var form = vec__8547;
var vec__8548 = (((cljs.core.first(args) instanceof cljs.core.Symbol))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.seq(args)], null));
var name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8548,(0),null);
var meths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8548,(1),null);
var meths__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(meths)))?cljs.core._conj(cljs.core.List.EMPTY,meths):meths);
var locals = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
var name_var = cljs.analyzer.fn_name_var(env,locals,name__$1);
var env__$1 = ((!((name__$1 == null)))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859)], null),cljs.core.conj,name_var):env);
var locals__$1 = (((!((locals == null))) && (!((name__$1 == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(locals,name__$1,name_var):locals);
var form_meta = cljs.core.meta(form);
var type = new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742).cljs$core$IFn$_invoke$arity$1(form_meta);
var proto_impl = new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409).cljs$core$IFn$_invoke$arity$1(form_meta);
var proto_inline = new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026).cljs$core$IFn$_invoke$arity$1(form_meta);
var menv = (((cljs.core.count(meths__$1) > (1)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)):env__$1);
var menv__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([menv,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365),proto_impl,new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556),proto_inline], null)], 0));
var methods$ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__8548,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,form_meta,type,proto_impl,proto_inline,menv,menv__$1,vec__8547,___$1,args,form){
return (function (p1__8545_SHARP_){
return cljs.analyzer.analyze_fn_method(menv__$1,locals__$1,p1__8545_SHARP_,type);
});})(vec__8548,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,form_meta,type,proto_impl,proto_inline,menv,menv__$1,vec__8547,___$1,args,form))
,meths__$1);
var mfa = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),methods$));
var variadic = cljs.core.boolean$(cljs.core.some(new cljs.core.Keyword(null,"variadic","variadic",882626057),methods$));
var locals__$2 = ((!((name__$1 == null)))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(locals__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null),cljs.core.assoc,new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),true,new cljs.core.Keyword(null,"variadic","variadic",882626057),cljs.core.array_seq([variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$)], 0)):locals__$1);
var methods$__$1 = ((!((name__$1 == null)))?cljs.analyzer.analyze_fn_methods_pass2(menv__$1,locals__$2,type,meths__$1):methods$);
var form__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(form,cljs.core.dissoc,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742));
var js_doc = ((variadic === true)?"@param {...*} var_args":null);
var children = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),methods$__$1);
var ast = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"variadic","variadic",882626057),new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185),new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"methods","methods",453930866),new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)],[children,proto_inline,name_var,variadic,cljs.analyzer._STAR_loop_lets_STAR_,proto_impl,new cljs.core.Keyword(null,"fn","fn",-1175266204),env__$1,methods$__$1,cljs.analyzer._STAR_recur_frames_STAR_,mfa,form__$1,new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_doc], null)]);
var variadic_methods_8549 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"variadic","variadic",882626057),methods$__$1);
var variadic_params_8550 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(variadic_methods_8549)));
var param_counts_8551 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"params","params",710516235)),methods$__$1);
if(((1) < cljs.core.count(variadic_methods_8549))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),env__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name_var], null));
} else {
}

if(!(((variadic_params_8550 === (0))) || ((variadic_params_8550 === ((1) + mfa))))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),env__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name_var], null));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(param_counts_8551),param_counts_8551)){
cljs.analyzer.warning(new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),env__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name_var], null));
} else {
}

return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(ast) : cljs.analyzer.analyze_wrap_meta.call(null,ast));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),(function (op,env,p__8552,name,_){
var vec__8553 = p__8552;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8553,(0),null);
var bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8553,(1),null);
var exprs = cljs.core.nthnext(vec__8553,(2));
var form = vec__8553;
if((cljs.core.vector_QMARK_(bindings)) && (cljs.core.even_QMARK_(cljs.core.count(bindings)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"bindings must be vector of even number of elements");
}

var n__GT_fexpr = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.second),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings)));
var names = cljs.core.keys(n__GT_fexpr);
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var vec__8554 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n__GT_fexpr,names,context,vec__8553,___$1,bindings,exprs,form){
return (function (p__8556,n){
var vec__8557 = p__8556;
var map__8558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8557,(0),null);
var map__8558__$1 = ((((!((map__8558 == null)))?((((map__8558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8558):map__8558);
var env__$1 = map__8558__$1;
var locals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8558__$1,new cljs.core.Keyword(null,"locals","locals",535295783));
var bes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8557,(1),null);
var ret_tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(n));
var fexpr = (function (){var _STAR_cljs_warnings_STAR_8560 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));

try{var G__8561 = env__$1;
var G__8562 = (n__GT_fexpr.cljs$core$IFn$_invoke$arity$1 ? n__GT_fexpr.cljs$core$IFn$_invoke$arity$1(n) : n__GT_fexpr.call(null,n));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__8561,G__8562) : cljs.analyzer.analyze.call(null,G__8561,G__8562));
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_8560;
}})();
var be = (function (){var G__8563 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"variadic","variadic",882626057),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"local","local",-1497766724)],[n,new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(fexpr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(fexpr)),cljs.analyzer.get_col(n,env__$1),cljs.analyzer.get_line(n,env__$1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(fexpr),true,(locals.cljs$core$IFn$_invoke$arity$1 ? locals.cljs$core$IFn$_invoke$arity$1(n) : locals.call(null,n)),true]);
var G__8563__$1 = (cljs.core.truth_(ret_tag)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8563,new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),ret_tag):G__8563);
return G__8563__$1;
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in(env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),n], null),be),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bes,be)], null);
});})(n__GT_fexpr,names,context,vec__8553,___$1,bindings,exprs,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,cljs.core.PersistentVector.EMPTY], null),names);
var meth_env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8554,(0),null);
var bes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8554,(1),null);
var meth_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meth_env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var vec__8555 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n__GT_fexpr,names,context,vec__8554,meth_env,bes,meth_env__$1,vec__8553,___$1,bindings,exprs,form){
return (function (p__8564,p__8565){
var vec__8566 = p__8564;
var meth_env__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8566,(0),null);
var bes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8566,(1),null);
var map__8567 = p__8565;
var map__8567__$1 = ((((!((map__8567 == null)))?((((map__8567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8567):map__8567);
var be = map__8567__$1;
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8567__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8567__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var env__$1 = cljs.core.assoc_in(meth_env__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),name__$1], null),shadow);
var fexpr = (function (){var G__8569 = env__$1;
var G__8570 = (n__GT_fexpr.cljs$core$IFn$_invoke$arity$1 ? n__GT_fexpr.cljs$core$IFn$_invoke$arity$1(name__$1) : n__GT_fexpr.call(null,name__$1));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__8569,G__8570) : cljs.analyzer.analyze.call(null,G__8569,G__8570));
})();
var be_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(be,new cljs.core.Keyword(null,"init","init",-1875481434),fexpr,cljs.core.array_seq([new cljs.core.Keyword(null,"variadic","variadic",882626057),new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(fexpr),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(fexpr),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(fexpr))], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in(env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),name__$1], null),be_SINGLEQUOTE_),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bes__$1,be_SINGLEQUOTE_)], null);
});})(n__GT_fexpr,names,context,vec__8554,meth_env,bes,meth_env__$1,vec__8553,___$1,bindings,exprs,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meth_env__$1,cljs.core.PersistentVector.EMPTY], null),bes);
var meth_env__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8555,(0),null);
var bes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8555,(1),null);
var expr = (function (){var G__8571 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meth_env__$2,new cljs.core.Keyword(null,"context","context",-830191113),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context))?new cljs.core.Keyword(null,"return","return",-1891502105):context));
var G__8572 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),exprs)));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__8571,G__8572) : cljs.analyzer.analyze.call(null,G__8571,G__8572));
})();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"letfn","letfn",-2121022354),new cljs.core.Keyword(null,"bindings","bindings",1271397192),bes__$1,new cljs.core.Keyword(null,"expr","expr",745722291),expr,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init","init",-1875481434),bes__$1)),expr)], null);
}));
cljs.analyzer.analyze_do_statements_STAR_ = (function cljs$analyzer$analyze_do_statements_STAR_(env,exprs){
return cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8573_SHARP_){
var G__8576 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863));
var G__8577 = p1__8573_SHARP_;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__8576,G__8577) : cljs.analyzer.analyze.call(null,G__8576,G__8577));
}),cljs.core.butlast(exprs)));
});
cljs.analyzer.analyze_do_statements = (function cljs$analyzer$analyze_do_statements(env,exprs){
var _STAR_recur_frames_STAR_8579 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_do_statements_STAR_(env,exprs);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8579;
}});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(function (op,env,p__8580,_,___$1){
var vec__8581 = p__8580;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8581,(0),null);
var exprs = cljs.core.nthnext(vec__8581,(1));
var form = vec__8581;
var statements = cljs.analyzer.analyze_do_statements(env,exprs);
if((cljs.core.count(exprs) <= (1))){
var ret = (function (){var G__8582 = env;
var G__8583 = cljs.core.first(exprs);
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__8582,G__8583) : cljs.analyzer.analyze.call(null,G__8582,G__8583));
})();
var children = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(statements),ret);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"do","do",46310725),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"statements","statements",600349855),statements,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"children","children",-940561982),children], null);
} else {
var ret_env = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"return","return",-1891502105)));
var ret = (function (){var G__8584 = ret_env;
var G__8585 = cljs.core.last(exprs);
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__8584,G__8585) : cljs.analyzer.analyze.call(null,G__8584,G__8585));
})();
var children = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(statements),ret);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"do","do",46310725),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"statements","statements",600349855),statements,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"children","children",-940561982),children], null);
}
}));
cljs.analyzer.analyze_let_binding_init = (function cljs$analyzer$analyze_let_binding_init(env,init,loop_lets){
var _STAR_loop_lets_STAR_8587 = cljs.analyzer._STAR_loop_lets_STAR_;
cljs.analyzer._STAR_loop_lets_STAR_ = loop_lets;

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,init) : cljs.analyzer.analyze.call(null,env,init));
}finally {cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR_8587;
}});
cljs.analyzer.get_let_tag = (function cljs$analyzer$get_let_tag(name,init_expr){
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name));
if(!((tag == null))){
return tag;
} else {
var tag__$1 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(init_expr);
if(!((tag__$1 == null))){
return tag__$1;
} else {
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(init_expr));
}
}
});
cljs.analyzer.analyze_let_bindings_STAR_ = (function cljs$analyzer$analyze_let_bindings_STAR_(encl_env,bindings){
var bes = cljs.core.PersistentVector.EMPTY;
var env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(encl_env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var bindings__$1 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
while(true){
var binding = cljs.core.first(bindings__$1);
if(!((binding == null))){
var vec__8595 = binding;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8595,(0),null);
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8595,(1),null);
if(cljs.core.truth_((function (){var or__6455__auto__ = !((cljs.core.namespace(name) == null));
if(or__6455__auto__){
return or__6455__auto__;
} else {
var G__8598 = [cljs.core.str(name)].join('');
var G__8599 = ".";
return goog.string.contains(G__8598,G__8599);
}
})())){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(encl_env,[cljs.core.str("Invalid local name: "),cljs.core.str(name)].join(''));
} else {
}

var init_expr = cljs.analyzer.analyze_let_binding_init(env,init,cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),bes], null),cljs.analyzer._STAR_loop_lets_STAR_));
var line = cljs.analyzer.get_line(name,env);
var col = cljs.analyzer.get_col(name,env);
var be = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"local","local",-1497766724)],[init_expr,name,true,new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null),col,line,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"shadow","shadow",873231803),(function (){var G__8600 = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
return (name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(G__8600) : name.call(null,G__8600));
})()], null),cljs.analyzer.get_let_tag(name,init_expr),(function (){var G__8601 = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
return (name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(G__8601) : name.call(null,G__8601));
})(),true]);
var be__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(init_expr)))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([be,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),true,new cljs.core.Keyword(null,"variadic","variadic",882626057),new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(init_expr))], null)], 0)):be);
var G__8602 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bes,be__$1);
var G__8603 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),name], null),be__$1);
var G__8604 = cljs.core.next(bindings__$1);
bes = G__8602;
env = G__8603;
bindings__$1 = G__8604;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bes,env], null);
}
break;
}
});
cljs.analyzer.analyze_let_bindings = (function cljs$analyzer$analyze_let_bindings(encl_env,bindings){
var _STAR_recur_frames_STAR_8606 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_let_bindings_STAR_(encl_env,bindings);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8606;
}});
cljs.analyzer.analyze_let_body_STAR_ = (function cljs$analyzer$analyze_let_body_STAR_(env,context,exprs){
var G__8609 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context))?new cljs.core.Keyword(null,"return","return",-1891502105):context));
var G__8610 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),exprs)));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__8609,G__8610) : cljs.analyzer.analyze.call(null,G__8609,G__8610));
});
cljs.analyzer.analyze_let_body = (function cljs$analyzer$analyze_let_body(env,context,exprs,recur_frames,loop_lets){
var _STAR_recur_frames_STAR_8613 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_loop_lets_STAR_8614 = cljs.analyzer._STAR_loop_lets_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = recur_frames;

cljs.analyzer._STAR_loop_lets_STAR_ = loop_lets;

try{return cljs.analyzer.analyze_let_body_STAR_(env,context,exprs);
}finally {cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR_8614;

cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8613;
}});
cljs.analyzer.analyze_let = (function cljs$analyzer$analyze_let(encl_env,p__8615,is_loop){
var vec__8618 = p__8615;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8618,(0),null);
var bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8618,(1),null);
var exprs = cljs.core.nthnext(vec__8618,(2));
var form = vec__8618;
if((cljs.core.vector_QMARK_(bindings)) && (cljs.core.even_QMARK_(cljs.core.count(bindings)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(encl_env,"bindings must be vector of even number of elements");
}

var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(encl_env);
var vec__8619 = cljs.analyzer.analyze_let_bindings(encl_env,bindings);
var bes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8619,(0),null);
var env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8619,(1),null);
var recur_frame = ((is_loop === true)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),bes,new cljs.core.Keyword(null,"flag","flag",1088647881),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null))], null):null);
var recur_frames = (cljs.core.truth_(recur_frame)?cljs.core.cons(recur_frame,cljs.analyzer._STAR_recur_frames_STAR_):cljs.analyzer._STAR_recur_frames_STAR_);
var loop_lets = ((is_loop === true)?cljs.analyzer._STAR_loop_lets_STAR_:((!((cljs.analyzer._STAR_loop_lets_STAR_ == null)))?cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),bes], null),cljs.analyzer._STAR_loop_lets_STAR_):null));
var expr = cljs.analyzer.analyze_let_body(env,context,exprs,recur_frames,loop_lets);
var op = ((is_loop === true)?new cljs.core.Keyword(null,"loop","loop",-395552849):new cljs.core.Keyword(null,"let","let",-1282412701));
var children = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init","init",-1875481434),bes)),expr);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),op,new cljs.core.Keyword(null,"env","env",-1815813235),encl_env,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bes,new cljs.core.Keyword(null,"expr","expr",745722291),expr,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),children], null);
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),(function (op,encl_env,form,_,___$1){
return cljs.analyzer.analyze_let(encl_env,form,false);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),(function (op,encl_env,form,_,___$1){
return cljs.analyzer.analyze_let(encl_env,form,true);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),(function (op,env,p__8621,_,___$1){
var vec__8622 = p__8621;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8622,(0),null);
var exprs = cljs.core.nthnext(vec__8622,(1));
var form = vec__8622;
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var frame = cljs.core.first(cljs.analyzer._STAR_recur_frames_STAR_);
var exprs__$1 = (function (){var _STAR_recur_frames_STAR_8623 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_8623,context,frame,vec__8622,___$2,exprs,form){
return (function (p1__8620_SHARP_){
var G__8624 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var G__8625 = p1__8620_SHARP_;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__8624,G__8625) : cljs.analyzer.analyze.call(null,G__8624,G__8625));
});})(_STAR_recur_frames_STAR_8623,context,frame,vec__8622,___$2,exprs,form))
,exprs));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8623;
}})();
if(cljs.core.truth_(frame)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't recur here");
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs__$1),cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"recur argument count mismatch");
}

var G__8626_8628 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(frame);
var G__8627_8629 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8626_8628,G__8627_8629) : cljs.core.reset_BANG_.call(null,G__8626_8628,G__8627_8629));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"recur","recur",-437573268),new cljs.core.Keyword(null,"form","form",-1624062471),form], null),new cljs.core.Keyword(null,"frame","frame",-1711082588),frame,cljs.core.array_seq([new cljs.core.Keyword(null,"exprs","exprs",1795829094),exprs__$1,new cljs.core.Keyword(null,"children","children",-940561982),exprs__$1], 0));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(function (_,env,p__8630,___$1,___$2){
var vec__8631 = p__8630;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8631,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8631,(1),null);
var G__8632 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"quoted?","quoted?",1464649621),true);
var G__8633 = x;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__8632,G__8633) : cljs.analyzer.analyze.call(null,G__8632,G__8633));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"new","new",-444906321,null),(function (_,env,p__8635,___$1,___$2){
var vec__8636 = p__8635;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8636,(0),null);
var ctor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8636,(1),null);
var args = cljs.core.nthnext(vec__8636,(2));
var form = vec__8636;
if((ctor instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"First arg to new must be a symbol");
}

var _STAR_recur_frames_STAR_8637 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var ctorexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,ctor) : cljs.analyzer.analyze.call(null,enve,ctor));
var ctor_var = cljs.analyzer.resolve_existing_var(env,ctor);
var record_args = (cljs.core.truth_((function (){var and__6443__auto__ = new cljs.core.Keyword(null,"record","record",-779106859).cljs$core$IFn$_invoke$arity$1(ctor_var);
if(cljs.core.truth_(and__6443__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ctor)));
} else {
return and__6443__auto__;
}
})())?cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,null) : cljs.analyzer.analyze.call(null,enve,null))):null);
var argexprs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (enve,ctorexpr,ctor_var,record_args,_STAR_recur_frames_STAR_8637,vec__8636,___$3,ctor,args,form){
return (function (p1__8634_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__8634_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__8634_SHARP_));
});})(enve,ctorexpr,ctor_var,record_args,_STAR_recur_frames_STAR_8637,vec__8636,___$3,ctor,args,form))
,args)),record_args);
var known_num_fields = new cljs.core.Keyword(null,"num-fields","num-fields",1529154024).cljs$core$IFn$_invoke$arity$1(ctor_var);
var argc = cljs.core.count(args);
if(cljs.core.truth_((function (){var and__6443__auto__ = cljs.core.not(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ctor)));
if(and__6443__auto__){
var and__6443__auto____$1 = known_num_fields;
if(cljs.core.truth_(and__6443__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(known_num_fields,argc);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"argc","argc",-1452839519),argc,new cljs.core.Keyword(null,"ctor","ctor",1750864802),ctor], null));
} else {
}

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"ctor","ctor",1750864802),ctorexpr,new cljs.core.Keyword(null,"args","args",1315556576),argexprs,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctorexpr], null),argexprs),new cljs.core.Keyword(null,"tag","tag",-1290361223),(function (){var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ctorexpr));
var or__6455__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Object","js/Object",61215323,null),new cljs.core.Symbol(null,"object","object",-1179821820,null),new cljs.core.Symbol("js","String","js/String",-2070054036,null),new cljs.core.Symbol(null,"string","string",-349010059,null),new cljs.core.Symbol("js","Array","js/Array",-423508366,null),new cljs.core.Symbol(null,"array","array",-440182315,null),new cljs.core.Symbol("js","Number","js/Number",-508133572,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol("js","Function","js/Function",-749892063,null),new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null).call(null,name);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return name;
}
})()], null);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8637;
}}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),(function (_,env,p__8638,___$1,___$2){
var vec__8639 = p__8638;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8639,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8639,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8639,(2),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8639,(3),null);
var form = vec__8639;
var vec__8640 = (cljs.core.truth_(alt)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,target),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,val)], 0)))),alt], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,val], null));
var target__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8640,(0),null);
var val__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8640,(1),null);
var _STAR_recur_frames_STAR_8641 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var targetexpr = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target__$1,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null))) && ((val__$1 === true) || (val__$1 === false)))?(function (){
cljs.core._STAR_unchecked_if_STAR_ = val__$1;

return new cljs.core.Keyword("cljs.analyzer","set-unchecked-if","cljs.analyzer/set-unchecked-if",1413639250);
})()
:(((target__$1 instanceof cljs.core.Symbol))?(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),target__$1)))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't set! a constant");
} else {
}

var local_8643 = (function (){var G__8642 = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
return (target__$1.cljs$core$IFn$_invoke$arity$1 ? target__$1.cljs$core$IFn$_invoke$arity$1(G__8642) : target__$1.call(null,G__8642));
})();
if(cljs.core.truth_((function (){var or__6455__auto__ = (local_8643 == null);
if(or__6455__auto__){
return or__6455__auto__;
} else {
var and__6443__auto__ = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(local_8643);
if(cljs.core.truth_(and__6443__auto__)){
var or__6455__auto____$1 = new cljs.core.Keyword(null,"mutable","mutable",875778266).cljs$core$IFn$_invoke$arity$1(local_8643);
if(cljs.core.truth_(or__6455__auto____$1)){
return or__6455__auto____$1;
} else {
var or__6455__auto____$2 = new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950).cljs$core$IFn$_invoke$arity$1(local_8643);
if(cljs.core.truth_(or__6455__auto____$2)){
return or__6455__auto____$2;
} else {
return new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411).cljs$core$IFn$_invoke$arity$1(local_8643);
}
}
} else {
return and__6443__auto__;
}
}
})())){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't set! local var or non-mutable field");
}

return (cljs.analyzer.analyze_symbol.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze_symbol.cljs$core$IFn$_invoke$arity$2(enve,target__$1) : cljs.analyzer.analyze_symbol.call(null,enve,target__$1));
})()
:((cljs.core.seq_QMARK_(target__$1))?(function (){var targetexpr = (cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3(enve,target__$1,null) : cljs.analyzer.analyze_seq.call(null,enve,target__$1,null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(targetexpr))){
return targetexpr;
} else {
return null;
}
})():null)
));
var valexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,val__$1) : cljs.analyzer.analyze.call(null,enve,val__$1));
if(cljs.core.truth_(targetexpr)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"set! target must be a field or a symbol naming a var");
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(targetexpr,new cljs.core.Keyword("cljs.analyzer","set-unchecked-if","cljs.analyzer/set-unchecked-if",1413639250))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"no-op","no-op",-93046065)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"set!","set!",-1389817006),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"target","target",253001721),targetexpr,new cljs.core.Keyword(null,"val","val",128701612),valexpr,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr,valexpr], null)], null);

}
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8641;
}}));
cljs.analyzer.foreign_dep_QMARK_ = (function cljs$analyzer$foreign_dep_QMARK_(dep){
if((dep instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol(null,"dep","dep",-142776527,null))], 0)))].join('')));
}

var js_index = new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
var temp__4423__auto__ = cljs.core.find(js_index,cljs.core.name(dep));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__8647 = temp__4423__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8647,(0),null);
var map__8648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8647,(1),null);
var map__8648__$1 = ((((!((map__8648 == null)))?((((map__8648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8648):map__8648);
var foreign = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8648__$1,new cljs.core.Keyword(null,"foreign","foreign",990521149));
return foreign;
} else {
return false;
}
});
/**
 * Given a lib, a namespace, deps, its dependencies, env, an analysis environment
 * and opts, compiler options - analyze all of the dependencies. Required to
 * correctly analyze usage of other namespaces.
 */
cljs.analyzer.analyze_deps = (function cljs$analyzer$analyze_deps(var_args){
var args8651 = [];
var len__7513__auto___8663 = arguments.length;
var i__7514__auto___8664 = (0);
while(true){
if((i__7514__auto___8664 < len__7513__auto___8663)){
args8651.push((arguments[i__7514__auto___8664]));

var G__8665 = (i__7514__auto___8664 + (1));
i__7514__auto___8664 = G__8665;
continue;
} else {
}
break;
}

var G__8653 = args8651.length;
switch (G__8653) {
case 3:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8651.length)].join('')));

}
});

cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3 = (function (lib,deps,env){
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4(lib,deps,env,null);
});

cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4 = (function (lib,deps,env,opts){
var compiler = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
var _STAR_cljs_dep_set_STAR_8654 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.analyzer._STAR_cljs_dep_set_STAR_,lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib);

try{if(cljs.core.every_QMARK_(((function (_STAR_cljs_dep_set_STAR_8654,compiler){
return (function (p1__8650_SHARP_){
return !(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__8650_SHARP_));
});})(_STAR_cljs_dep_set_STAR_8654,compiler))
,deps)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Circular dependency detected, "),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__8650#","p1__8650#",273829674,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"*cljs-dep-set*","*cljs-dep-set*",1566566915,null),new cljs.core.Symbol(null,"p1__8650#","p1__8650#",273829674,null)))),new cljs.core.Symbol(null,"deps","deps",-771075450,null))], 0)))].join('')));
}

var seq__8655 = cljs.core.seq(deps);
var chunk__8656 = null;
var count__8657 = (0);
var i__8658 = (0);
while(true){
if((i__8658 < count__8657)){
var dep = chunk__8656.cljs$core$IIndexed$_nth$arity$2(null,i__8658);
if(cljs.core.truth_((function (){var or__6455__auto__ = cljs.core.not_empty(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),dep,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)));
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131).cljs$core$IFn$_invoke$arity$1(compiler),cljs.core.name(dep));
}
})())){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__8659 = new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812);
var G__8660 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__8659,G__8660) : cljs.analyzer.error_message.call(null,G__8659,G__8660));
})());
}

var G__8667 = seq__8655;
var G__8668 = chunk__8656;
var G__8669 = count__8657;
var G__8670 = (i__8658 + (1));
seq__8655 = G__8667;
chunk__8656 = G__8668;
count__8657 = G__8669;
i__8658 = G__8670;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8655);
if(temp__4425__auto__){
var seq__8655__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8655__$1)){
var c__7258__auto__ = cljs.core.chunk_first(seq__8655__$1);
var G__8671 = cljs.core.chunk_rest(seq__8655__$1);
var G__8672 = c__7258__auto__;
var G__8673 = cljs.core.count(c__7258__auto__);
var G__8674 = (0);
seq__8655 = G__8671;
chunk__8656 = G__8672;
count__8657 = G__8673;
i__8658 = G__8674;
continue;
} else {
var dep = cljs.core.first(seq__8655__$1);
if(cljs.core.truth_((function (){var or__6455__auto__ = cljs.core.not_empty(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),dep,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)));
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131).cljs$core$IFn$_invoke$arity$1(compiler),cljs.core.name(dep));
}
})())){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__8661 = new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812);
var G__8662 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__8661,G__8662) : cljs.analyzer.error_message.call(null,G__8661,G__8662));
})());
}

var G__8675 = cljs.core.next(seq__8655__$1);
var G__8676 = null;
var G__8677 = (0);
var G__8678 = (0);
seq__8655 = G__8675;
chunk__8656 = G__8676;
count__8657 = G__8677;
i__8658 = G__8678;
continue;
}
} else {
return null;
}
}
break;
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_8654;
}});

cljs.analyzer.analyze_deps.cljs$lang$maxFixedArity = 4;
cljs.analyzer.check_uses = (function cljs$analyzer$check_uses(uses,env){
var seq__8689 = cljs.core.seq(uses);
var chunk__8690 = null;
var count__8691 = (0);
var i__8692 = (0);
while(true){
if((i__8692 < count__8691)){
var vec__8693 = chunk__8690.cljs$core$IIndexed$_nth$arity$2(null,i__8692);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8693,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8693,(1),null);
var js_lib_8699 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131),cljs.core.name(lib)], null));
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),lib,new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null),new cljs.core.Keyword("cljs.analyzer","not-found","cljs.analyzer/not-found",427220150)),new cljs.core.Keyword("cljs.analyzer","not-found","cljs.analyzer/not-found",427220150))) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_lib_8699,new cljs.core.Keyword(null,"group","group",582596132)),new cljs.core.Keyword(null,"goog","goog",-1711135452)))) && (cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_lib_8699,new cljs.core.Keyword(null,"closure-lib","closure-lib",2105917916))))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__8694 = new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137);
var G__8695 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"var",new cljs.core.Keyword(null,"lib","lib",191808726),lib,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__8694,G__8695) : cljs.analyzer.error_message.call(null,G__8694,G__8695));
})());
} else {
}

var G__8700 = seq__8689;
var G__8701 = chunk__8690;
var G__8702 = count__8691;
var G__8703 = (i__8692 + (1));
seq__8689 = G__8700;
chunk__8690 = G__8701;
count__8691 = G__8702;
i__8692 = G__8703;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8689);
if(temp__4425__auto__){
var seq__8689__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8689__$1)){
var c__7258__auto__ = cljs.core.chunk_first(seq__8689__$1);
var G__8704 = cljs.core.chunk_rest(seq__8689__$1);
var G__8705 = c__7258__auto__;
var G__8706 = cljs.core.count(c__7258__auto__);
var G__8707 = (0);
seq__8689 = G__8704;
chunk__8690 = G__8705;
count__8691 = G__8706;
i__8692 = G__8707;
continue;
} else {
var vec__8696 = cljs.core.first(seq__8689__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8696,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8696,(1),null);
var js_lib_8708 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131),cljs.core.name(lib)], null));
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),lib,new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null),new cljs.core.Keyword("cljs.analyzer","not-found","cljs.analyzer/not-found",427220150)),new cljs.core.Keyword("cljs.analyzer","not-found","cljs.analyzer/not-found",427220150))) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_lib_8708,new cljs.core.Keyword(null,"group","group",582596132)),new cljs.core.Keyword(null,"goog","goog",-1711135452)))) && (cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_lib_8708,new cljs.core.Keyword(null,"closure-lib","closure-lib",2105917916))))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__8697 = new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137);
var G__8698 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"var",new cljs.core.Keyword(null,"lib","lib",191808726),lib,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__8697,G__8698) : cljs.analyzer.error_message.call(null,G__8697,G__8698));
})());
} else {
}

var G__8709 = cljs.core.next(seq__8689__$1);
var G__8710 = null;
var G__8711 = (0);
var G__8712 = (0);
seq__8689 = G__8709;
chunk__8690 = G__8710;
count__8691 = G__8711;
i__8692 = G__8712;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.check_use_macros = (function cljs$analyzer$check_use_macros(use_macros,env){
var seq__8723 = cljs.core.seq(use_macros);
var chunk__8724 = null;
var count__8725 = (0);
var i__8726 = (0);
while(true){
if((i__8726 < count__8725)){
var vec__8727 = chunk__8724.cljs$core$IIndexed$_nth$arity$2(null,i__8726);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8727,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8727,(1),null);
var the_ns_8733 = cljs.core.find_macros_ns(lib);
if(((the_ns_8733 == null)) || ((the_ns_8733.findInternedVar(sym) == null))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__8728 = new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137);
var G__8729 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"macro",new cljs.core.Keyword(null,"lib","lib",191808726),lib,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__8728,G__8729) : cljs.analyzer.error_message.call(null,G__8728,G__8729));
})());
} else {
}

var G__8734 = seq__8723;
var G__8735 = chunk__8724;
var G__8736 = count__8725;
var G__8737 = (i__8726 + (1));
seq__8723 = G__8734;
chunk__8724 = G__8735;
count__8725 = G__8736;
i__8726 = G__8737;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8723);
if(temp__4425__auto__){
var seq__8723__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8723__$1)){
var c__7258__auto__ = cljs.core.chunk_first(seq__8723__$1);
var G__8738 = cljs.core.chunk_rest(seq__8723__$1);
var G__8739 = c__7258__auto__;
var G__8740 = cljs.core.count(c__7258__auto__);
var G__8741 = (0);
seq__8723 = G__8738;
chunk__8724 = G__8739;
count__8725 = G__8740;
i__8726 = G__8741;
continue;
} else {
var vec__8730 = cljs.core.first(seq__8723__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8730,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8730,(1),null);
var the_ns_8742 = cljs.core.find_macros_ns(lib);
if(((the_ns_8742 == null)) || ((the_ns_8742.findInternedVar(sym) == null))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__8731 = new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137);
var G__8732 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"macro",new cljs.core.Keyword(null,"lib","lib",191808726),lib,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__8731,G__8732) : cljs.analyzer.error_message.call(null,G__8731,G__8732));
})());
} else {
}

var G__8743 = cljs.core.next(seq__8723__$1);
var G__8744 = null;
var G__8745 = (0);
var G__8746 = (0);
seq__8723 = G__8743;
chunk__8724 = G__8744;
count__8725 = G__8745;
i__8726 = G__8746;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.parse_ns_error_msg = (function cljs$analyzer$parse_ns_error_msg(spec,msg){
return [cljs.core.str(msg),cljs.core.str("; offending spec: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([spec], 0)))].join('');
});
cljs.analyzer.basic_validate_ns_spec = (function cljs$analyzer$basic_validate_ns_spec(env,macros_QMARK_,spec){
if(((spec instanceof cljs.core.Symbol)) || (cljs.core.sequential_QMARK_(spec))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only [lib.ns & options] and lib.ns specs supported in :require / :require-macros"));
}

if(cljs.core.sequential_QMARK_(spec)){
if((cljs.core.first(spec) instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Library name must be specified as a symbol in :require / :require-macros"));
}

if(cljs.core.odd_QMARK_(cljs.core.count(spec))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only :as alias and :refer (names) options supported in :require"));
}

if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.next(spec))))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only :as and :refer options supported in :require / :require-macros"));
}

if((function (){var fs = cljs.core.frequencies(cljs.core.next(spec));
return (((fs.cljs$core$IFn$_invoke$arity$2 ? fs.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"as","as",1148689641),(0)) : fs.call(null,new cljs.core.Keyword(null,"as","as",1148689641),(0))) <= (1))) && (((fs.cljs$core$IFn$_invoke$arity$2 ? fs.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer","refer",-964295553),(0)) : fs.call(null,new cljs.core.Keyword(null,"refer","refer",-964295553),(0))) <= (1)));
})()){
return null;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Each of :as and :refer options may only be specified once in :require / :require-macros"));
}
} else {
return null;
}
});
cljs.analyzer.parse_ns_excludes = (function cljs$analyzer$parse_ns_excludes(env,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__8749){
var vec__8750 = p__8749;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8750,(0),null);
var exclude = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8750,(1),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8750,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(exclude,new cljs.core.Keyword(null,"exclude","exclude",-1230250334))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Only [:refer-clojure :exclude (names)] form supported");
}

if(cljs.core.seq(s)){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Only one :refer-clojure form is allowed per namespace definition");
} else {
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(s,xs);
} else {
return s;
}
}),cljs.core.PersistentHashSet.EMPTY,args);
});
cljs.analyzer.use__GT_require = (function cljs$analyzer$use__GT_require(env,p__8751){
var vec__8753 = p__8751;
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8753,(0),null);
var kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8753,(1),null);
var referred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8753,(2),null);
var spec = vec__8753;
if(((lib instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"only","only",1907811652),kw)) && (cljs.core.sequential_QMARK_(referred)) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,referred))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only [lib.ns :only (names)] specs supported in :use / :use-macros"));
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib,new cljs.core.Keyword(null,"refer","refer",-964295553),referred], null);
});
cljs.analyzer.parse_require_spec = (function cljs$analyzer$parse_require_spec(env,macros_QMARK_,deps,aliases,spec){
while(true){
if((spec instanceof cljs.core.Symbol)){
var G__8764 = env;
var G__8765 = macros_QMARK_;
var G__8766 = deps;
var G__8767 = aliases;
var G__8768 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null);
env = G__8764;
macros_QMARK_ = G__8765;
deps = G__8766;
aliases = G__8767;
spec = G__8768;
continue;
} else {
cljs.analyzer.basic_validate_ns_spec(env,macros_QMARK_,spec);

var vec__8759 = spec;
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8759,(0),null);
var opts = cljs.core.nthnext(vec__8759,(1));
var lib__$1 = (function (){var temp__4423__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(lib)], null));
if(cljs.core.truth_(temp__4423__auto__)){
var js_module_name = temp__4423__auto__;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(js_module_name);
} else {
return lib;
}
})();
var map__8760 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var map__8760__$1 = ((((!((map__8760 == null)))?((((map__8760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8760):map__8760);
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8760__$1,new cljs.core.Keyword(null,"as","as",1148689641),lib__$1);
var referred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8760__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var vec__8761 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require","require",-468001333),new cljs.core.Keyword(null,"use","use",-1846382424)], null));
var rk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8761,(0),null);
var uk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8761,(1),null);
if(((alias instanceof cljs.core.Symbol)) || ((alias == null))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,":as must be followed by a symbol in :require / :require-macros"));
}

if(cljs.core.truth_(alias)){
var alias_type_8769 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.Keyword(null,"macros","macros",811339431):new cljs.core.Keyword(null,"fns","fns",1185138786));
var lib_SINGLEQUOTE__8770 = (function (){var G__8763 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(aliases) : cljs.core.deref.call(null,aliases));
return (alias_type_8769.cljs$core$IFn$_invoke$arity$1 ? alias_type_8769.cljs$core$IFn$_invoke$arity$1(G__8763) : alias_type_8769.call(null,G__8763));
})().call(null,alias);
if((!((lib_SINGLEQUOTE__8770 == null))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(lib__$1,lib_SINGLEQUOTE__8770))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,":as alias must be unique"));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(aliases,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias_type_8769], null),cljs.core.conj,cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias,lib__$1], null)], 0));
} else {
}

if(((cljs.core.sequential_QMARK_(referred)) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,referred))) || ((referred == null))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,":refer must be followed by a sequence of symbols in :require / :require-macros"));
}

if(cljs.core.truth_(macros_QMARK_)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(deps,cljs.core.conj,lib__$1);
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(alias)?cljs.core.PersistentArrayMap.fromArray([rk,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.fromArray([alias,lib__$1], true, false),cljs.core.PersistentArrayMap.fromArray([lib__$1,lib__$1], true, false)], 0))], true, false):null),(cljs.core.truth_(referred)?cljs.core.PersistentArrayMap.fromArray([uk,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(referred,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(lib__$1)))], true, false):null)], 0));
}
break;
}
});
cljs.analyzer.parse_import_spec = (function cljs$analyzer$parse_import_spec(env,deps,spec){
if(((cljs.core.sequential_QMARK_(spec)) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,spec))) || (((spec instanceof cljs.core.Symbol)) && ((cljs.core.namespace(spec) == null)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only lib.ns.Ctor or [lib.ns Ctor*] spec supported in :import"));
}

var import_map = ((cljs.core.sequential_QMARK_(spec))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8771_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__8771_SHARP_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core.first(spec)),cljs.core.str("."),cljs.core.str(p1__8771_SHARP_)].join(''))],null));
}),cljs.core.rest(spec))):cljs.core.PersistentArrayMap.fromArray([cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(spec)].join(''),/\./))),spec], true, false));
var seq__8778_8784 = cljs.core.seq(import_map);
var chunk__8779_8785 = null;
var count__8780_8786 = (0);
var i__8781_8787 = (0);
while(true){
if((i__8781_8787 < count__8780_8786)){
var vec__8782_8788 = chunk__8779_8785.cljs$core$IIndexed$_nth$arity$2(null,i__8781_8787);
var __8789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8782_8788,(0),null);
var spec_8790__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8782_8788,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(deps,cljs.core.conj,spec_8790__$1);

var G__8791 = seq__8778_8784;
var G__8792 = chunk__8779_8785;
var G__8793 = count__8780_8786;
var G__8794 = (i__8781_8787 + (1));
seq__8778_8784 = G__8791;
chunk__8779_8785 = G__8792;
count__8780_8786 = G__8793;
i__8781_8787 = G__8794;
continue;
} else {
var temp__4425__auto___8795 = cljs.core.seq(seq__8778_8784);
if(temp__4425__auto___8795){
var seq__8778_8796__$1 = temp__4425__auto___8795;
if(cljs.core.chunked_seq_QMARK_(seq__8778_8796__$1)){
var c__7258__auto___8797 = cljs.core.chunk_first(seq__8778_8796__$1);
var G__8798 = cljs.core.chunk_rest(seq__8778_8796__$1);
var G__8799 = c__7258__auto___8797;
var G__8800 = cljs.core.count(c__7258__auto___8797);
var G__8801 = (0);
seq__8778_8784 = G__8798;
chunk__8779_8785 = G__8799;
count__8780_8786 = G__8800;
i__8781_8787 = G__8801;
continue;
} else {
var vec__8783_8802 = cljs.core.first(seq__8778_8796__$1);
var __8803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8783_8802,(0),null);
var spec_8804__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8783_8802,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(deps,cljs.core.conj,spec_8804__$1);

var G__8805 = cljs.core.next(seq__8778_8796__$1);
var G__8806 = null;
var G__8807 = (0);
var G__8808 = (0);
seq__8778_8784 = G__8805;
chunk__8779_8785 = G__8806;
count__8780_8786 = G__8807;
i__8781_8787 = G__8808;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"import","import",-1399500709),import_map,new cljs.core.Keyword(null,"require","require",-468001333),import_map], null);
});
/**
 * Given a spec form check whether the spec namespace requires a macro file
 * of the same name. If so return true.
 */
cljs.analyzer.macro_autoload_ns_QMARK_ = (function cljs$analyzer$macro_autoload_ns_QMARK_(form){
if(cljs.core.truth_(cljs.analyzer._STAR_macro_infer_STAR_)){
var ns = ((cljs.core.sequential_QMARK_(form))?cljs.core.first(form):form);
var map__8811 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null));
var map__8811__$1 = ((((!((map__8811 == null)))?((((map__8811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8811):map__8811);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8811__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8811__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var or__6455__auto__ = cljs.core.some(cljs.core.PersistentHashSet.fromArray([ns], true),cljs.core.vals(use_macros));
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([ns], true),cljs.core.vals(require_macros));
}
} else {
return null;
}
});
/**
 * Given an original set of ns specs desugar :include-macros and :refer-macros
 * usage into only primitive spec forms - :use, :require, :use-macros,
 * :require-macros. If a library includes a macro file of with the same name
 * as the namespace will also be desugared.
 */
cljs.analyzer.desugar_ns_specs = (function cljs$analyzer$desugar_ns_specs(args){
var map__8820 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8821){
var vec__8822 = p__8821;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8822,(0),null);
var specs = cljs.core.nthnext(vec__8822,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,specs)], null);
}),args));
var map__8820__$1 = ((((!((map__8820 == null)))?((((map__8820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8820):map__8820);
var indexed = map__8820__$1;
var require = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8820__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var sugar_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"include-macros","include-macros",1228110289),null,new cljs.core.Keyword(null,"refer-macros","refer-macros",-1906841953),null], null), null);
var remove_from_spec = ((function (map__8820,map__8820__$1,indexed,require,sugar_keys){
return (function (pred,spec){
while(true){
if(cljs.core.not((function (){var and__6443__auto__ = cljs.core.sequential_QMARK_(spec);
if(and__6443__auto__){
return cljs.core.some(pred,spec);
} else {
return and__6443__auto__;
}
})())){
return spec;
} else {
var vec__8824 = cljs.core.split_with(cljs.core.complement(pred),spec);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8824,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8824,(1),null);
var G__8826 = pred;
var G__8827 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(l,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),r));
pred = G__8826;
spec = G__8827;
continue;
}
break;
}
});})(map__8820,map__8820__$1,indexed,require,sugar_keys))
;
var replace_refer_macros = ((function (map__8820,map__8820__$1,indexed,require,sugar_keys,remove_from_spec){
return (function (spec){
if(!(cljs.core.sequential_QMARK_(spec))){
return spec;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__8820,map__8820__$1,indexed,require,sugar_keys,remove_from_spec){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"refer-macros","refer-macros",-1906841953))){
return new cljs.core.Keyword(null,"refer","refer",-964295553);
} else {
return x;
}
});})(map__8820,map__8820__$1,indexed,require,sugar_keys,remove_from_spec))
,spec);
}
});})(map__8820,map__8820__$1,indexed,require,sugar_keys,remove_from_spec))
;
var reload_spec_QMARK_ = ((function (map__8820,map__8820__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros){
return (function (p1__8813_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null).call(null,p1__8813_SHARP_);
});})(map__8820,map__8820__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros))
;
var to_macro_specs = ((function (map__8820,map__8820__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (specs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__8820,map__8820__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (x){
if(cljs.core.not(reload_spec_QMARK_(x))){
return replace_refer_macros(remove_from_spec(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null),remove_from_spec(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-macros","include-macros",1228110289),null], null), null),x)));
} else {
return x;
}
});})(map__8820,map__8820__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__8820,map__8820__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (x){
var or__6455__auto__ = (function (){var and__6443__auto__ = cljs.core.sequential_QMARK_(x);
if(and__6443__auto__){
return cljs.core.some(sugar_keys,x);
} else {
return and__6443__auto__;
}
})();
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
var or__6455__auto____$1 = reload_spec_QMARK_(x);
if(cljs.core.truth_(or__6455__auto____$1)){
return or__6455__auto____$1;
} else {
return cljs.analyzer.macro_autoload_ns_QMARK_(x);
}
}
});})(map__8820,map__8820__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
,specs));
});})(map__8820,map__8820__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
;
var remove_sugar = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(remove_from_spec,sugar_keys);
var temp__4423__auto__ = cljs.core.seq(to_macro_specs(require));
if(temp__4423__auto__){
var require_specs = temp__4423__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (require_specs,temp__4423__auto__,map__8820,map__8820__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_,to_macro_specs,remove_sugar){
return (function (x){
if(cljs.core.not(reload_spec_QMARK_(x))){
var vec__8825 = x;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8825,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8825,(1),null);
return cljs.core.cons(k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(remove_sugar,v));
} else {
return x;
}
});})(require_specs,temp__4423__auto__,map__8820,map__8820__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_,to_macro_specs,remove_sugar))
,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),require_specs));
} else {
return args;
}
});
cljs.analyzer.find_def_clash = (function cljs$analyzer$find_def_clash(env,ns,segments){
var to_check = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (xs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.butlast(xs))),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.last(xs))], null);
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,segments)));
var seq__8834 = cljs.core.seq(to_check);
var chunk__8835 = null;
var count__8836 = (0);
var i__8837 = (0);
while(true){
if((i__8837 < count__8836)){
var vec__8838 = chunk__8835.cljs$core$IIndexed$_nth$arity$2(null,i__8837);
var clash_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8838,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8838,(1),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),clash_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),name], null)))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(clash_ns)].join(''),[cljs.core.str(name)].join(''))], null));
} else {
}

var G__8840 = seq__8834;
var G__8841 = chunk__8835;
var G__8842 = count__8836;
var G__8843 = (i__8837 + (1));
seq__8834 = G__8840;
chunk__8835 = G__8841;
count__8836 = G__8842;
i__8837 = G__8843;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8834);
if(temp__4425__auto__){
var seq__8834__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8834__$1)){
var c__7258__auto__ = cljs.core.chunk_first(seq__8834__$1);
var G__8844 = cljs.core.chunk_rest(seq__8834__$1);
var G__8845 = c__7258__auto__;
var G__8846 = cljs.core.count(c__7258__auto__);
var G__8847 = (0);
seq__8834 = G__8844;
chunk__8835 = G__8845;
count__8836 = G__8846;
i__8837 = G__8847;
continue;
} else {
var vec__8839 = cljs.core.first(seq__8834__$1);
var clash_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8839,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8839,(1),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),clash_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),name], null)))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(clash_ns)].join(''),[cljs.core.str(name)].join(''))], null));
} else {
}

var G__8848 = cljs.core.next(seq__8834__$1);
var G__8849 = null;
var G__8850 = (0);
var G__8851 = (0);
seq__8834 = G__8848;
chunk__8835 = G__8849;
count__8836 = G__8850;
i__8837 = G__8851;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.macro_ns_name = (function cljs$analyzer$macro_ns_name(name){
var name_str = [cljs.core.str(name)].join('');
if(cljs.core.not(goog.string.endsWith(name_str,"$macros"))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(name_str),cljs.core.str("$macros")].join(''));
} else {
return name;
}
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),(function (_,env,p__8854,___$1,opts){
var vec__8855 = p__8854;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8855,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8855,(1),null);
var args = cljs.core.nthnext(vec__8855,(2));
var form = vec__8855;
if((name instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Namespaces must be named by a symbol.");
}

var name__$1 = (function (){var G__8856 = name;
var G__8856__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))?cljs.analyzer.macro_ns_name(G__8856):G__8856);
return G__8856__$1;
})();
var segments_8869 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(name__$1),/\./);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(segments_8869))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name__$1], null));
} else {
}

if(cljs.core.truth_(cljs.core.some(cljs.analyzer.js_reserved,segments_8869))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name__$1], null));
} else {
}

cljs.analyzer.find_def_clash(env,name__$1,segments_8869);

var docstring = ((typeof cljs.core.first(args) === 'string')?cljs.core.first(args):null);
var mdocstr = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name__$1));
var args__$1 = (cljs.core.truth_(docstring)?cljs.core.next(args):args);
var metadata = ((cljs.core.map_QMARK_(cljs.core.first(args__$1)))?cljs.core.first(args__$1):null);
var form_meta = cljs.core.meta(form);
var args__$2 = cljs.analyzer.desugar_ns_specs((cljs.core.truth_(metadata)?cljs.core.next(args__$1):args__$1));
var name__$2 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(name__$1,cljs.core.merge,metadata);
var excludes = cljs.analyzer.parse_ns_excludes(env,args__$2);
var deps = (function (){var G__8858 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8858) : cljs.core.atom.call(null,G__8858));
})();
var aliases = (function (){var G__8859 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fns","fns",1185138786),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"macros","macros",811339431),cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8859) : cljs.core.atom.call(null,G__8859));
})();
var spec_parsers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"require","require",-468001333),cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,false,deps,cljs.core.array_seq([aliases], 0)),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,true,deps,cljs.core.array_seq([aliases], 0)),new cljs.core.Keyword(null,"use","use",-1846382424),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,false,deps,cljs.core.array_seq([aliases], 0)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.use__GT_require,env)),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,true,deps,cljs.core.array_seq([aliases], 0)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.use__GT_require,env)),new cljs.core.Keyword(null,"import","import",-1399500709),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.parse_import_spec,env,deps)], null);
var valid_forms = (function (){var G__8860 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),null,new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),null,new cljs.core.Keyword(null,"import","import",-1399500709),null], null), null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8860) : cljs.core.atom.call(null,G__8860));
})();
var reload = (function (){var G__8861 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),null], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8861) : cljs.core.atom.call(null,G__8861));
})();
var reloads = (function (){var G__8862 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8862) : cljs.core.atom.call(null,G__8862));
})();
var map__8857 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__8855,___$2,name,args,form){
return (function (m,p__8863){
var vec__8864 = p__8863;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8864,(0),null);
var libs = cljs.core.nthnext(vec__8864,(1));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),null,new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),null,new cljs.core.Keyword(null,"import","import",-1399500709),null], null), null).call(null,k))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Only :refer-clojure, :require, :require-macros, :use, :use-macros, and :import libspecs supported");
}

if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(valid_forms) : cljs.core.deref.call(null,valid_forms)).call(null,k))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,[cljs.core.str("Only one "),cljs.core.str(k),cljs.core.str(" form is allowed per namespace definition")].join(''));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(valid_forms,cljs.core.disj,k);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"import","import",-1399500709),k)){
} else {
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reload","reload",863702807),null], null), null),libs))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reload,cljs.core.assoc,k,new cljs.core.Keyword(null,"reload","reload",863702807));
} else {
}

if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null),libs))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reload,cljs.core.assoc,k,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
} else {
}
}

var temp__4425__auto___8870 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__8864,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__8855,___$2,name,args,form){
return (function (p1__8852_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__8852_SHARP_));
});})(vec__8864,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__8855,___$2,name,args,form))
,libs));
if(temp__4425__auto___8870){
var xs_8871 = temp__4425__auto___8870;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reloads,cljs.core.assoc,k,cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,xs_8871),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xs_8871,temp__4425__auto___8870,vec__8864,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__8855,___$2,name,args,form){
return (function (p1__8853_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__8853_SHARP_));
});})(xs_8871,temp__4425__auto___8870,vec__8864,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__8855,___$2,name,args,form))
,xs_8871)));
} else {
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.merge,m,cljs.core.map.cljs$core$IFn$_invoke$arity$2((spec_parsers.cljs$core$IFn$_invoke$arity$1 ? spec_parsers.cljs$core$IFn$_invoke$arity$1(k) : spec_parsers.call(null,k)),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null),libs)));
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__8855,___$2,name,args,form))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__8855,___$2,name,args,form){
return (function (p__8865){
var vec__8866 = p__8865;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8866,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440));
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__8855,___$2,name,args,form))
,args__$2));
var map__8857__$1 = ((((!((map__8857 == null)))?((((map__8857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8857):map__8857);
var params = map__8857__$1;
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8857__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8857__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8857__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8857__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8857__$1,new cljs.core.Keyword(null,"import","import",-1399500709));
cljs.analyzer._STAR_cljs_ns_STAR_ = name__$2;

var ns_info = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"name","name",1843675177),name__$2,new cljs.core.Keyword(null,"doc","doc",1913296891),(function (){var or__6455__auto__ = docstring;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return mdocstr;
}
})(),new cljs.core.Keyword(null,"excludes","excludes",-1791725945),excludes,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),use_macros,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),require_macros,new cljs.core.Keyword(null,"uses","uses",232664692),uses,new cljs.core.Keyword(null,"requires","requires",-1201390927),requires,new cljs.core.Keyword(null,"imports","imports",-1249933394),imports], null);
var ns_info__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"merge","merge",-1804319409).cljs$core$IFn$_invoke$arity$1(form_meta))?(function (){var ns_info_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name__$2], null));
if((cljs.core.count(ns_info_SINGLEQUOTE_) > (0))){
var merge_keys = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"imports","imports",-1249933394)], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ns_info_SINGLEQUOTE_,cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.array_seq([cljs.core.select_keys(ns_info_SINGLEQUOTE_,merge_keys),cljs.core.select_keys(ns_info,merge_keys)], 0))], 0));
} else {
return ns_info;
}
})():ns_info);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name__$2], null),cljs.core.merge,cljs.core.array_seq([ns_info__$1], 0));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"deps","deps",1883360319),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(deps) : cljs.core.deref.call(null,deps)),new cljs.core.Keyword(null,"reload","reload",863702807),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)),new cljs.core.Keyword(null,"reloads","reloads",610698522),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reloads) : cljs.core.deref.call(null,reloads))], null),(function (){var G__8868 = ns_info__$1;
var G__8868__$1 = (cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__8868,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692)], null),((function (G__8868,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__8857,map__8857__$1,params,uses,requires,use_macros,require_macros,imports,name__$1,vec__8855,___$2,name,args,form){
return (function (m){
return cljs.core.with_meta(m,cljs.core.PersistentArrayMap.fromArray([(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)),true], true, false));
});})(G__8868,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__8857,map__8857__$1,params,uses,requires,use_macros,require_macros,imports,name__$1,vec__8855,___$2,name,args,form))
):G__8868);
var G__8868__$2 = (cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,new cljs.core.Keyword(null,"require","require",-468001333)))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__8868__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requires","requires",-1201390927)], null),((function (G__8868,G__8868__$1,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__8857,map__8857__$1,params,uses,requires,use_macros,require_macros,imports,name__$1,vec__8855,___$2,name,args,form){
return (function (m){
return cljs.core.with_meta(m,cljs.core.PersistentArrayMap.fromArray([(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,new cljs.core.Keyword(null,"require","require",-468001333)),true], true, false));
});})(G__8868,G__8868__$1,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__8857,map__8857__$1,params,uses,requires,use_macros,require_macros,imports,name__$1,vec__8855,___$2,name,args,form))
):G__8868__$1);
return G__8868__$2;
})()], 0));
}));
cljs.analyzer.parse_type = (function cljs$analyzer$parse_type(op,env,p__8872){
var vec__8876 = p__8872;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8876,(0),null);
var tsym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8876,(1),null);
var fields = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8876,(2),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8876,(3),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8876,(4),null);
var form = vec__8876;
var t = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),tsym));
var locals = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (t,vec__8876,_,tsym,fields,pmasks,body,form){
return (function (m,fld){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,fld,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"mutable","mutable",875778266),new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),new cljs.core.Keyword(null,"shadow","shadow",873231803)],[fld,true,cljs.analyzer.get_col(fld,env),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),cljs.analyzer.get_line(fld,env),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),new cljs.core.Keyword(null,"mutable","mutable",875778266).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(fld) : m.call(null,fld))]));
});})(t,vec__8876,_,tsym,fields,pmasks,body,form))
,cljs.core.PersistentArrayMap.EMPTY,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),op))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fields,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null)):fields));
var protocols = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tsym));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"defs","defs",1398449717),tsym], null),((function (t,locals,protocols,vec__8876,_,tsym,fields,pmasks,body,form){
return (function (m){
var m__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var or__6455__auto__ = m;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"name","name",1843675177),t,cljs.core.array_seq([new cljs.core.Keyword(null,"type","type",1174270348),true,new cljs.core.Keyword(null,"num-fields","num-fields",1529154024),cljs.core.count(fields),new cljs.core.Keyword(null,"record","record",-779106859),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),op)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m__$1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(tsym),new cljs.core.Keyword(null,"protocols","protocols",-5615896)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols], null),cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2(tsym,env)], 0));
});})(t,locals,protocols,vec__8876,_,tsym,fields,pmasks,body,form))
);

return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"op","op",-1882987955),op,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"t","t",-1397832519),t,new cljs.core.Keyword(null,"fields","fields",-1932066230),fields,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698),pmasks,new cljs.core.Keyword(null,"protocols","protocols",-5615896),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(protocols,new cljs.core.Symbol("cljs.core","Object","cljs.core/Object",-345545431,null)),new cljs.core.Keyword(null,"body","body",-2049205669),(function (){var G__8877 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"locals","locals",535295783),locals);
var G__8878 = body;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__8877,G__8878) : cljs.analyzer.analyze.call(null,G__8877,G__8878));
})()], null);
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type(new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),env,form);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type(new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),env,form);
}));
cljs.analyzer.property_symbol_QMARK_ = (function cljs$analyzer$property_symbol_QMARK_(p1__8879_SHARP_){
return cljs.core.boolean$((function (){var and__6443__auto__ = (p1__8879_SHARP_ instanceof cljs.core.Symbol);
if(and__6443__auto__){
return cljs.core.re_matches(/^-.*/,cljs.core.name(p1__8879_SHARP_));
} else {
return and__6443__auto__;
}
})());
});
cljs.analyzer.classify_dot_form = (function cljs$analyzer$classify_dot_form(p__8880){
var vec__8882 = p__8880;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8882,(0),null);
var member = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8882,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8882,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((target == null))?new cljs.core.Keyword("cljs.analyzer","error","cljs.analyzer/error",-65289642):new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889)
),(cljs.core.truth_(cljs.analyzer.property_symbol_QMARK_(member))?new cljs.core.Keyword("cljs.analyzer","property","cljs.analyzer/property",1113330886):(((member instanceof cljs.core.Symbol))?new cljs.core.Keyword("cljs.analyzer","symbol","cljs.analyzer/symbol",933248902):((cljs.core.seq_QMARK_(member))?new cljs.core.Keyword("cljs.analyzer","list","cljs.analyzer/list",-539585923):new cljs.core.Keyword("cljs.analyzer","error","cljs.analyzer/error",-65289642)
))),(((args == null))?cljs.core.List.EMPTY:new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889)
)], null);
});
if(typeof cljs.analyzer.build_dot_form !== 'undefined'){
} else {
cljs.analyzer.build_dot_form = (function (){var method_table__7368__auto__ = (function (){var G__8884 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8884) : cljs.core.atom.call(null,G__8884));
})();
var prefer_table__7369__auto__ = (function (){var G__8885 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8885) : cljs.core.atom.call(null,G__8885));
})();
var method_cache__7370__auto__ = (function (){var G__8886 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8886) : cljs.core.atom.call(null,G__8886));
})();
var cached_hierarchy__7371__auto__ = (function (){var G__8887 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8887) : cljs.core.atom.call(null,G__8887));
})();
var hierarchy__7372__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.analyzer","build-dot-form"),((function (method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__,hierarchy__7372__auto__){
return (function (p1__8883_SHARP_){
return cljs.analyzer.classify_dot_form(p1__8883_SHARP_);
});})(method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__,hierarchy__7372__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7372__auto__,method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__));
})();
}
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","property","cljs.analyzer/property",1113330886),cljs.core.List.EMPTY], null),(function (p__8888){
var vec__8889 = p__8888;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8889,(0),null);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8889,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8889,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601),new cljs.core.Keyword("cljs.analyzer","access","cljs.analyzer/access",-1639036494),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"field","field",-1302436500),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(prop).substring((1)))], null);
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","property","cljs.analyzer/property",1113330886),new cljs.core.Keyword("cljs.analyzer","list","cljs.analyzer/list",-539585923)], null),(function (p__8890){
var vec__8891 = p__8890;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8891,(0),null);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8891,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8891,(2),null);
throw (new Error([cljs.core.str("Cannot provide arguments "),cljs.core.str(args),cljs.core.str(" on property access "),cljs.core.str(prop)].join('')));
}));
/**
 * Builds the intermediate method call map used to reason about the parsed form during
 *   compilation.
 */
cljs.analyzer.build_method_call = (function cljs$analyzer$build_method_call(target,meth,args){
if((meth instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601),new cljs.core.Keyword("cljs.analyzer","call","cljs.analyzer/call",964149800),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"method","method",55703592),meth,new cljs.core.Keyword(null,"args","args",1315556576),args], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601),new cljs.core.Keyword("cljs.analyzer","call","cljs.analyzer/call",964149800),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"method","method",55703592),cljs.core.first(meth),new cljs.core.Keyword(null,"args","args",1315556576),args], null);
}
});
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","symbol","cljs.analyzer/symbol",933248902),new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889)], null),(function (p__8892){
var vec__8893 = p__8892;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8893,(0),null);
var meth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8893,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8893,(2),null);
return cljs.analyzer.build_method_call(target,meth,args);
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","symbol","cljs.analyzer/symbol",933248902),cljs.core.List.EMPTY], null),(function (p__8894){
var vec__8895 = p__8894;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8895,(0),null);
var meth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8895,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8895,(2),null);
return cljs.analyzer.build_method_call(target,meth,args);
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","list","cljs.analyzer/list",-539585923),cljs.core.List.EMPTY], null),(function (p__8896){
var vec__8897 = p__8896;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8897,(0),null);
var meth_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8897,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8897,(2),null);
return cljs.analyzer.build_method_call(target,cljs.core.first(meth_expr),cljs.core.rest(meth_expr));
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (dot_form){
throw (new Error([cljs.core.str("Unknown dot form of "),cljs.core.str(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),dot_form)),cljs.core.str(" with classification "),cljs.core.str(cljs.analyzer.classify_dot_form(dot_form))].join('')));
}));
cljs.analyzer.analyze_dot = (function cljs$analyzer$analyze_dot(env,target,field,member_PLUS_,form){
var v = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,field,member_PLUS_], null);
var map__8902 = (cljs.analyzer.build_dot_form.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.build_dot_form.cljs$core$IFn$_invoke$arity$1(v) : cljs.analyzer.build_dot_form.call(null,v));
var map__8902__$1 = ((((!((map__8902 == null)))?((((map__8902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8902):map__8902);
var dot_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8902__$1,new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601));
var target__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8902__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8902__$1,new cljs.core.Keyword(null,"method","method",55703592));
var field__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8902__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8902__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var targetexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,target__$1) : cljs.analyzer.analyze.call(null,enve,target__$1));
var form_meta = cljs.core.meta(form);
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(form_meta);
var G__8904 = (((dot_action instanceof cljs.core.Keyword))?dot_action.fqn:null);
switch (G__8904) {
case "cljs.analyzer/access":
var children = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr], null);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"dot","dot",1442709401),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"target","target",253001721),targetexpr,new cljs.core.Keyword(null,"field","field",-1302436500),field__$1,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], null);

break;
case "cljs.analyzer/call":
var argexprs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__8904,v,map__8902,map__8902__$1,dot_action,target__$1,method,field__$1,args,enve,targetexpr,form_meta,tag){
return (function (p1__8898_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__8898_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__8898_SHARP_));
});})(G__8904,v,map__8902,map__8902__$1,dot_action,target__$1,method,field__$1,args,enve,targetexpr,form_meta,tag))
,args);
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr], null),argexprs);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"dot","dot",1442709401),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"target","target",253001721),targetexpr,new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"args","args",1315556576),argexprs,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(dot_action)].join('')));

}
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,".",".",1975675962,null),(function (_,env,p__8906,___$1,___$2){
var vec__8907 = p__8906;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8907,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8907,(1),null);
var vec__8908 = cljs.core.nthnext(vec__8907,(2));
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8908,(0),null);
var member_PLUS_ = cljs.core.nthnext(vec__8908,(1));
var form = vec__8907;
var _STAR_recur_frames_STAR_8909 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_dot(env,target,field,member_PLUS_,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8909;
}}));
cljs.analyzer.get_js_tag = (function cljs$analyzer$get_js_tag(form){
var form_meta = cljs.core.meta(form);
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(form_meta);
if(!((tag == null))){
return tag;
} else {
if(new cljs.core.Keyword(null,"numeric","numeric",-1495594714).cljs$core$IFn$_invoke$arity$1(form_meta) === true){
return new cljs.core.Symbol(null,"number","number",-1084057331,null);
} else {
return null;
}
}
});
cljs.analyzer.js_star_interp = (function cljs$analyzer$js_star_interp(env,s){
var idx = s.indexOf("~{");
if(((-1) === idx)){
return cljs.core._conj(cljs.core.List.EMPTY,s);
} else {
var end = s.indexOf("}",idx);
var inner = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,((2) + idx),end))));
return (new cljs.core.LazySeq(null,((function (end,inner,idx){
return (function (){
return cljs.core.cons(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),idx),cljs.core.cons(inner,cljs$analyzer$js_star_interp(env,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(end + (1))))));
});})(end,inner,idx))
,null,null));
}
});
cljs.analyzer.js_star_seg = (function cljs$analyzer$js_star_seg(s){
var idx = s.indexOf("~{");
if(((-1) === idx)){
return cljs.core._conj(cljs.core.List.EMPTY,s);
} else {
var end = s.indexOf("}",idx);
return (new cljs.core.LazySeq(null,((function (end,idx){
return (function (){
return cljs.core.cons(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),idx),cljs$analyzer$js_star_seg(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(end + (1)))));
});})(end,idx))
,null,null));
}
});
cljs.analyzer.NUMERIC_SET = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"long","long",1469079434,null),null,new cljs.core.Symbol(null,"double","double",-1769548886,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null);
cljs.analyzer.numeric_type_QMARK_ = (function cljs$analyzer$numeric_type_QMARK_(t){
if((t == null)){
return true;
} else {
if(((t instanceof cljs.core.Symbol)) && (!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.NUMERIC_SET,t) == null)))){
return true;
} else {
if(cljs.analyzer.cljs_set_QMARK_(t)){
return (cljs.core.contains_QMARK_(t,new cljs.core.Symbol(null,"number","number",-1084057331,null))) || (cljs.core.contains_QMARK_(t,new cljs.core.Symbol(null,"long","long",1469079434,null))) || (cljs.core.contains_QMARK_(t,new cljs.core.Symbol(null,"double","double",-1769548886,null))) || (cljs.core.contains_QMARK_(t,new cljs.core.Symbol(null,"any","any",-948528346,null)));
} else {
return null;
}
}
}
});
cljs.analyzer.analyze_js_star_STAR_ = (function cljs$analyzer$analyze_js_star_STAR_(env,jsform,args,form){
var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var argexprs = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (enve){
return (function (p1__8913_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__8913_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__8913_SHARP_));
});})(enve))
,args));
var form_meta = cljs.core.meta(form);
var segs = cljs.analyzer.js_star_seg(jsform);
var tag = cljs.analyzer.get_js_tag(form);
var js_op = new cljs.core.Keyword(null,"js-op","js-op",-1046277897).cljs$core$IFn$_invoke$arity$1(form_meta);
var numeric = new cljs.core.Keyword(null,"numeric","numeric",-1495594714).cljs$core$IFn$_invoke$arity$1(form_meta);
if(numeric === true){
var types_8915 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (enve,argexprs,form_meta,segs,tag,js_op,numeric){
return (function (p1__8914_SHARP_){
return cljs.analyzer.infer_tag(env,p1__8914_SHARP_);
});})(enve,argexprs,form_meta,segs,tag,js_op,numeric))
,argexprs);
if(cljs.core.every_QMARK_(cljs.analyzer.numeric_type_QMARK_,types_8915)){
} else {
cljs.analyzer.warning(new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"js-op","js-op",-1046277897),js_op,new cljs.core.Keyword(null,"types","types",590030639),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,types_8915)], null));
}
} else {
}

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"segs","segs",-1940299576),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"js-op","js-op",-1046277897),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tag","tag",-1290361223)],[argexprs,argexprs,numeric,segs,new cljs.core.Keyword(null,"js","js",1768080579),env,js_op,form,tag]);
});
cljs.analyzer.analyze_js_star = (function cljs$analyzer$analyze_js_star(env,jsform,args,form){
var _STAR_recur_frames_STAR_8917 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_js_star_STAR_(env,jsform,args,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8917;
}});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(function (op,env,p__8918,_,___$1){
var vec__8919 = p__8918;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8919,(0),null);
var jsform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8919,(1),null);
var args = cljs.core.nthnext(vec__8919,(2));
var form = vec__8919;
if(typeof jsform === 'string'){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Invalid js* form");
}

if(!((args == null))){
return cljs.analyzer.analyze_js_star(env,jsform,args,form);
} else {
var code = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.analyzer.js_star_interp(env,jsform));
var tag = cljs.analyzer.get_js_tag(form);
var form_meta = cljs.core.meta(form);
var js_op = new cljs.core.Keyword(null,"js-op","js-op",-1046277897).cljs$core$IFn$_invoke$arity$1(form_meta);
var numeric = new cljs.core.Keyword(null,"numeric","numeric",-1495594714).cljs$core$IFn$_invoke$arity$1(form_meta);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"js-op","js-op",-1046277897),js_op,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),numeric], null);
}
}));
cljs.analyzer.analyzed_QMARK_ = (function cljs$analyzer$analyzed_QMARK_(f){
return cljs.core.contains_QMARK_(cljs.core.meta(f),new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162));
});
cljs.analyzer.all_values_QMARK_ = (function cljs$analyzer$all_values_QMARK_(exprs){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955),exprs));
});
cljs.analyzer.valid_arity_QMARK_ = (function cljs$analyzer$valid_arity_QMARK_(argc,method_params){
return cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.fromArray([argc], true),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,method_params)));
});
cljs.analyzer.parse_invoke_STAR_ = (function cljs$analyzer$parse_invoke_STAR_(env,p__8921){
var vec__8927 = p__8921;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8927,(0),null);
var args = cljs.core.nthnext(vec__8927,(1));
var form = vec__8927;
var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var fexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,f) : cljs.analyzer.analyze.call(null,enve,f));
var argc = cljs.core.count(args);
var fn_var_QMARK_ = new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr));
var kw_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(fexpr));
if(cljs.core.truth_(fn_var_QMARK_)){
var map__8928_8932 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr);
var map__8928_8933__$1 = ((((!((map__8928_8932 == null)))?((((map__8928_8932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8928_8932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8928_8932):map__8928_8932);
var variadic_8934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8928_8933__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var max_fixed_arity_8935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8928_8933__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var method_params_8936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8928_8933__$1,new cljs.core.Keyword(null,"method-params","method-params",-980792179));
var name_8937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8928_8933__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if((!(cljs.analyzer.valid_arity_QMARK_(argc,method_params_8936))) && ((!(variadic_8934)) || ((variadic_8934) && ((argc < max_fixed_arity_8935))))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name_8937,new cljs.core.Keyword(null,"argc","argc",-1452839519),argc], null));
} else {
}
} else {
}

if((kw_QMARK_) && (!((((1) === argc)) || (((2) === argc))))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.first(form),new cljs.core.Keyword(null,"argc","argc",-1452839519),argc], null));
} else {
}

var deprecated_QMARK__8938 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr));
var no_warn_QMARK__8939 = new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
if((cljs.core.boolean$(deprecated_QMARK__8938)) && (!(cljs.core.boolean$(no_warn_QMARK__8939)))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fexpr","fexpr",-122857150),fexpr], null));
} else {
}

if((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr)) == null)){
} else {
cljs.analyzer.warning(new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fexpr","fexpr",-122857150),fexpr], null));
}

var ana_expr = ((function (enve,fexpr,argc,fn_var_QMARK_,kw_QMARK_,vec__8927,f,args,form){
return (function (p1__8920_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__8920_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__8920_SHARP_));
});})(enve,fexpr,argc,fn_var_QMARK_,kw_QMARK_,vec__8927,f,args,form))
;
var argexprs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(ana_expr,args);
if(cljs.core.truth_((function (){var or__6455__auto__ = !(cljs.core.boolean$(cljs.analyzer._STAR_cljs_static_fns_STAR_));
if(or__6455__auto__){
return or__6455__auto__;
} else {
var or__6455__auto____$1 = !((f instanceof cljs.core.Symbol));
if(or__6455__auto____$1){
return or__6455__auto____$1;
} else {
var or__6455__auto____$2 = fn_var_QMARK_;
if(cljs.core.truth_(or__6455__auto____$2)){
return or__6455__auto____$2;
} else {
return (cljs.analyzer.analyzed_QMARK_(f)) || (cljs.analyzer.all_values_QMARK_(argexprs));
}
}
}
})())){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"invoke","invoke",1145927159),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"f","f",-1597136552),fexpr,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.vec(argexprs),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr], null),argexprs)], null);
} else {
var arg_syms = cljs.core.take.cljs$core$IFn$_invoke$arity$2(argc,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym));
var G__8930 = env;
var G__8931 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(arg_syms,args))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true)),arg_syms))))], 0))));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__8930,G__8931) : cljs.analyzer.analyze.call(null,G__8930,G__8931));
}
});
cljs.analyzer.parse_invoke = (function cljs$analyzer$parse_invoke(env,form){
var _STAR_recur_frames_STAR_8941 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.parse_invoke_STAR_(env,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8941;
}});
/**
 * Finds the var associated with sym
 */
cljs.analyzer.analyze_symbol = (function cljs$analyzer$analyze_symbol(env,sym){
if(new cljs.core.Keyword(null,"quoted?","quoted?",1464649621).cljs$core$IFn$_invoke$arity$1(env)){
cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2(env,sym);

var G__8945 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),sym,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__8945) : cljs.analyzer.analyze_wrap_meta.call(null,G__8945));
} else {
var map__8946 = cljs.core.meta(sym);
var map__8946__$1 = ((((!((map__8946 == null)))?((((map__8946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8946):map__8946);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8946__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8946__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var env__$1 = ((!((line == null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"line","line",212345235),line):env);
var env__$2 = ((!((column == null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword(null,"column","column",2078222095),column):env__$1);
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env__$2,new cljs.core.Keyword(null,"form","form",-1624062471),sym], null);
var lcls = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env__$2);
var lb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lcls,sym);
if(!((lb == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ret,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.array_seq([new cljs.core.Keyword(null,"info","info",-317069002),lb], 0));
} else {
if(!(new cljs.core.Keyword(null,"def-var","def-var",-698214377).cljs$core$IFn$_invoke$arity$1(env__$2) === true)){
var sym_meta = cljs.core.meta(sym);
var info = ((!(cljs.core.contains_QMARK_(sym_meta,new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162))))?cljs.analyzer.resolve_existing_var(env__$2,sym):cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env__$2,sym));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ret,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.array_seq([new cljs.core.Keyword(null,"info","info",-317069002),info], 0));
} else {
var info = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env__$2,sym);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ret,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.array_seq([new cljs.core.Keyword(null,"info","info",-317069002),info], 0));
}
}
}
});
cljs.analyzer.excluded_QMARK_ = (function cljs$analyzer$excluded_QMARK_(env,sym){
if(!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"excludes","excludes",-1791725945),sym) == null))){
return true;
} else {
return !((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"excludes","excludes",-1791725945),sym) == null));
}
});
cljs.analyzer.used_QMARK_ = (function cljs$analyzer$used_QMARK_(env,sym){
if(!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym) == null))){
return true;
} else {
return !((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym) == null));
}
});
cljs.analyzer.get_expander_ns = (function cljs$analyzer$get_expander_ns(env,nstr){
if(("clojure.core" === nstr)){
return cljs.core.find_macros_ns(cljs.analyzer.CLJS_CORE_MACROS_SYM);
} else {
if(("clojure.repl" === nstr)){
return cljs.core.find_macros_ns(new cljs.core.Symbol(null,"cljs.repl","cljs.repl",1767065658,null));
} else {
if(cljs.core.truth_(goog.string.contains(nstr,"."))){
return cljs.core.find_macros_ns(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(nstr));
} else {
var G__8949 = env;
var G__8949__$1 = (((G__8949 == null))?null:new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(G__8949));
var G__8949__$2 = (((G__8949__$1 == null))?null:new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(G__8949__$1));
var G__8949__$3 = (((G__8949__$2 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__8949__$2,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(nstr)));
var G__8949__$4 = (((G__8949__$3 == null))?null:cljs.core.find_ns(G__8949__$3));
return G__8949__$4;

}
}
}
});
cljs.analyzer.get_expander_STAR_ = (function cljs$analyzer$get_expander_STAR_(sym,env){
if((!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"locals","locals",535295783),sym) == null))) || ((cljs.analyzer.excluded_QMARK_(env,sym)) && (!(cljs.analyzer.used_QMARK_(env,sym))))){
return null;
} else {
var nstr = cljs.core.namespace(sym);
if(!((nstr == null))){
var ns = cljs.analyzer.get_expander_ns(env,nstr);
if((ns == null)){
return null;
} else {
return ns.findInternedVar(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym)));
}
} else {
var nsym = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym);
if(!((nsym == null))){
return cljs.core.find_macros_ns(nsym).findInternedVar(sym);
} else {
return cljs.core.find_macros_ns(cljs.analyzer.CLJS_CORE_MACROS_SYM).findInternedVar(sym);
}
}
}
});
/**
 * Given a sym, a symbol identifying a macro, and env, an analysis environment
 * return the corresponding Clojure macroexpander.
 */
cljs.analyzer.get_expander = (function cljs$analyzer$get_expander(sym,env){
var mvar = cljs.analyzer.get_expander_STAR_(sym,env);
if((!((mvar == null))) && (mvar.isMacro())){
return mvar;
} else {
return null;
}
});
cljs.analyzer.macroexpand_1_STAR_ = (function cljs$analyzer$macroexpand_1_STAR_(env,form){
var op = cljs.core.first(form);
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.specials,op) == null))){
return form;
} else {
var mac_var = (((op instanceof cljs.core.Symbol))?cljs.analyzer.get_expander(op,env):null);
if(!((mac_var == null))){
var form_SINGLEQUOTE_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mac_var) : cljs.core.deref.call(null,mac_var)),form,env,cljs.core.rest(form));
if(cljs.analyzer.cljs_seq_QMARK_(form_SINGLEQUOTE_)){
var sym_SINGLEQUOTE_ = cljs.core.first(form_SINGLEQUOTE_);
var sym = cljs.core.first(form);
if(cljs.core.symbol_identical_QMARK_(sym_SINGLEQUOTE_,cljs.analyzer.JS_STAR_SYM)){
var sym__$1 = (cljs.core.truth_(cljs.core.namespace(sym))?sym:cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",[cljs.core.str(sym)].join('')));
var js_op = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-op","js-op",-1046277897),sym__$1], null);
var numeric = (function (){var mac_var_ns = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(mac_var.sym));
var mac_var_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(mac_var.sym));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),mac_var_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),mac_var_name,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword("cljs.analyzer","numeric","cljs.analyzer/numeric",1415704188)], null));
})();
var js_op__$1 = ((numeric === true)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(js_op,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),true):js_op);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(form_SINGLEQUOTE_,cljs.core.merge,js_op__$1);
} else {
return form_SINGLEQUOTE_;
}
} else {
return form_SINGLEQUOTE_;
}
} else {
if((op instanceof cljs.core.Symbol)){
var opname = [cljs.core.str(op)].join('');
if(("." === opname.charAt((0)))){
var vec__8951 = cljs.core.next(form);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8951,(0),null);
var args = cljs.core.nthnext(vec__8951,(1));
return cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(cljs.analyzer.DOT_SYM,target,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(opname,(1))),args),cljs.core.meta(form));
} else {
if(("." === opname.charAt((opname.length - (1))))){
return cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.NEW_SYM,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(opname,(0),(cljs.core.count(opname) - (1)))),cljs.core.next(form)),cljs.core.meta(form));
} else {
return form;

}
}
} else {
return form;
}
}
}
});
/**
 * Given a env, an analysis environment, and form, a ClojureScript form,
 * macroexpand the form once.
 */
cljs.analyzer.macroexpand_1 = (function cljs$analyzer$macroexpand_1(env,form){
var val__8121__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__8121__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{try{return cljs.analyzer.macroexpand_1_STAR_(env,form);
}catch (e8953){var err__8157__auto__ = e8953;
if(cljs.analyzer.analysis_error_QMARK_(err__8157__auto__)){
throw err__8157__auto__;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,err__8157__auto__.message,err__8157__auto__);
}
}}finally {if((val__8121__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.analyzer.analyze_seq_STAR_ = (function cljs$analyzer$analyze_seq_STAR_(op,env,form,name,opts){
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.specials,op) == null))){
return (cljs.analyzer.parse.cljs$core$IFn$_invoke$arity$5 ? cljs.analyzer.parse.cljs$core$IFn$_invoke$arity$5(op,env,form,name,opts) : cljs.analyzer.parse.call(null,op,env,form,name,opts));
} else {
return cljs.analyzer.parse_invoke(env,form);
}
});
cljs.analyzer.analyze_seq_STAR__wrap = (function cljs$analyzer$analyze_seq_STAR__wrap(op,env,form,name,opts){
try{return cljs.analyzer.analyze_seq_STAR_(op,env,form,name,opts);
}catch (e8955){var err__8157__auto__ = e8955;
if(cljs.analyzer.analysis_error_QMARK_(err__8157__auto__)){
throw err__8157__auto__;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,err__8157__auto__.message,err__8157__auto__);
}
}});
cljs.analyzer.analyze_seq = (function cljs$analyzer$analyze_seq(var_args){
var args8956 = [];
var len__7513__auto___8959 = arguments.length;
var i__7514__auto___8960 = (0);
while(true){
if((i__7514__auto___8960 < len__7513__auto___8959)){
args8956.push((arguments[i__7514__auto___8960]));

var G__8961 = (i__7514__auto___8960 + (1));
i__7514__auto___8960 = G__8961;
continue;
} else {
}
break;
}

var G__8958 = args8956.length;
switch (G__8958) {
case 3:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8956.length)].join('')));

}
});

cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3 = (function (env,form,name){
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4(env,form,name,null);
});

cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4 = (function (env,form,name,opts){
if(new cljs.core.Keyword(null,"quoted?","quoted?",1464649621).cljs$core$IFn$_invoke$arity$1(env)){
return (cljs.analyzer.analyze_list.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze_list.cljs$core$IFn$_invoke$arity$2(env,form) : cljs.analyzer.analyze_list.call(null,env,form));
} else {
var line = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
var line__$1 = (((line == null))?new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env):line);
var col = new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
var col__$1 = (((col == null))?new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(env):col);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"line","line",212345235),line__$1,cljs.core.array_seq([new cljs.core.Keyword(null,"column","column",2078222095),col__$1], 0));
var op = cljs.core.first(form);
if((op == null)){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env__$1,"Can't call nil");
} else {
}

var mform = cljs.analyzer.macroexpand_1(env__$1,form);
if((form === mform)){
return cljs.analyzer.analyze_seq_STAR__wrap(op,env__$1,form,name,opts);
} else {
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(env__$1,mform,name,opts) : cljs.analyzer.analyze.call(null,env__$1,mform,name,opts));
}
}
});

cljs.analyzer.analyze_seq.cljs$lang$maxFixedArity = 4;
cljs.analyzer.analyze_map = (function cljs$analyzer$analyze_map(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var ks = (function (){var _STAR_recur_frames_STAR_8968 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_8968,expr_env){
return (function (p1__8963_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__8963_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__8963_SHARP_));
});})(_STAR_recur_frames_STAR_8968,expr_env))
,cljs.core.keys(form)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8968;
}})();
var vs = (function (){var _STAR_recur_frames_STAR_8969 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_8969,expr_env,ks){
return (function (p1__8964_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__8964_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__8964_SHARP_));
});})(_STAR_recur_frames_STAR_8969,expr_env,ks))
,cljs.core.vals(form)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8969;
}})();
var G__8970 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"keys","keys",1068423698),ks,new cljs.core.Keyword(null,"vals","vals",768058733),vs,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(ks,vs)),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","IMap","cljs.core/IMap",1407777598,null)], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__8970) : cljs.analyzer.analyze_wrap_meta.call(null,G__8970));
});
cljs.analyzer.analyze_list = (function cljs$analyzer$analyze_list(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var items = (function (){var _STAR_recur_frames_STAR_8974 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_8974,expr_env){
return (function (p1__8971_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__8971_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__8971_SHARP_));
});})(_STAR_recur_frames_STAR_8974,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8974;
}})();
var G__8975 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),items,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","IList","cljs.core/IList",1015168964,null)], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__8975) : cljs.analyzer.analyze_wrap_meta.call(null,G__8975));
});
cljs.analyzer.analyze_vector = (function cljs$analyzer$analyze_vector(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var items = (function (){var _STAR_recur_frames_STAR_8979 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_8979,expr_env){
return (function (p1__8976_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__8976_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__8976_SHARP_));
});})(_STAR_recur_frames_STAR_8979,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8979;
}})();
var G__8980 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),items,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","IVector","cljs.core/IVector",1711112835,null)], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__8980) : cljs.analyzer.analyze_wrap_meta.call(null,G__8980));
});
cljs.analyzer.analyze_set = (function cljs$analyzer$analyze_set(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var items = (function (){var _STAR_recur_frames_STAR_8984 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_8984,expr_env){
return (function (p1__8981_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__8981_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__8981_SHARP_));
});})(_STAR_recur_frames_STAR_8984,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8984;
}})();
var G__8985 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),items,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","ISet","cljs.core/ISet",2003412810,null)], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__8985) : cljs.analyzer.analyze_wrap_meta.call(null,G__8985));
});
cljs.analyzer.analyze_js_value = (function cljs$analyzer$analyze_js_value(env,form){
var val = form.val;
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var items = ((cljs.core.map_QMARK_(val))?cljs.core.zipmap(cljs.core.keys(val),(function (){var _STAR_recur_frames_STAR_8990 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_8990,val,expr_env){
return (function (p1__8986_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__8986_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__8986_SHARP_));
});})(_STAR_recur_frames_STAR_8990,val,expr_env))
,cljs.core.vals(val)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8990;
}})()):(function (){var _STAR_recur_frames_STAR_8991 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_8991,val,expr_env){
return (function (p1__8987_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__8987_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__8987_SHARP_));
});})(_STAR_recur_frames_STAR_8991,val,expr_env))
,val));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8991;
}})());
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-value","js-value",-758336661),new cljs.core.Keyword(null,"js-type","js-type",539386702),((cljs.core.map_QMARK_(val))?new cljs.core.Keyword(null,"object","object",1474613949):new cljs.core.Keyword(null,"array","array",-2080713842)),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),items,new cljs.core.Keyword(null,"tag","tag",-1290361223),((cljs.core.map_QMARK_(val))?new cljs.core.Symbol(null,"object","object",-1179821820,null):new cljs.core.Symbol(null,"array","array",-440182315,null))], null);
});
cljs.analyzer.elide_reader_meta = (function cljs$analyzer$elide_reader_meta(m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.array_seq([new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"source","source",-433931539)], 0));
});
cljs.analyzer.analyze_wrap_meta = (function cljs$analyzer$analyze_wrap_meta(expr){
var form = new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(expr);
var m = cljs.analyzer.elide_reader_meta(cljs.core.meta(form));
if(cljs.core.seq(m)){
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(expr);
var expr__$1 = cljs.core.assoc_in(expr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"context","context",-830191113)], null),new cljs.core.Keyword(null,"expr","expr",745722291));
var meta_expr = cljs.analyzer.analyze_map(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(expr__$1),m);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"meta","meta",1499536964),meta_expr,new cljs.core.Keyword(null,"expr","expr",745722291),expr__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meta_expr,expr__$1], null)], null);
} else {
return expr;
}
});
cljs.analyzer.infer_type = (function cljs$analyzer$infer_type(env,ast,_){
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ast);
if((tag == null)){
var tag__$1 = cljs.analyzer.infer_tag(env,ast);
if(!((tag__$1 == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag__$1);
} else {
return ast;
}
} else {
return ast;
}
});
cljs.analyzer._STAR_passes_STAR_ = null;
cljs.analyzer.analyze_form = (function cljs$analyzer$analyze_form(env,form,name,opts){
if((form instanceof cljs.core.Symbol)){
return cljs.analyzer.analyze_symbol(env,form);
} else {
if((cljs.analyzer.cljs_seq_QMARK_(form)) && (cljs.core.seq(form))){
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4(env,form,name,opts);
} else {
if(cljs.analyzer.cljs_map_QMARK_(form)){
return cljs.analyzer.analyze_map(env,form);
} else {
if(cljs.analyzer.cljs_vector_QMARK_(form)){
return cljs.analyzer.analyze_vector(env,form);
} else {
if(cljs.analyzer.cljs_set_QMARK_(form)){
return cljs.analyzer.analyze_set(env,form);
} else {
if((form instanceof cljs.core.Keyword)){
return cljs.analyzer.analyze_keyword(env,form);
} else {
if((form instanceof cljs.tagged_literals.JSValue)){
return cljs.analyzer.analyze_js_value(env,form);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,form)){
return cljs.analyzer.analyze_list(env,form);
} else {
var tag = (((form == null))?cljs.analyzer.CLJ_NIL_SYM:((typeof form === 'number')?cljs.analyzer.NUMBER_SYM:((typeof form === 'string')?cljs.analyzer.STRING_SYM:((form === true)?cljs.analyzer.BOOLEAN_SYM:((form === false)?cljs.analyzer.BOOLEAN_SYM:null)))));
var G__8993 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form], null);
var G__8993__$1 = (cljs.core.truth_(tag)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8993,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag):G__8993);
return G__8993__$1;

}
}
}
}
}
}
}
}
});
cljs.analyzer.analyze_STAR_ = (function cljs$analyzer$analyze_STAR_(env,form,name,opts){
var passes = cljs.analyzer._STAR_passes_STAR_;
var passes__$1 = (((passes == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.infer_type], null):passes);
var form__$1 = (((form instanceof cljs.core.LazySeq))?((cljs.core.seq(form))?form:cljs.core.List.EMPTY):form);
var ast = cljs.analyzer.analyze_form(env,form__$1,name,opts);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (passes,passes__$1,form__$1,ast){
return (function (ast__$1,pass){
return (pass.cljs$core$IFn$_invoke$arity$3 ? pass.cljs$core$IFn$_invoke$arity$3(env,ast__$1,opts) : pass.call(null,env,ast__$1,opts));
});})(passes,passes__$1,form__$1,ast))
,ast,passes__$1);
});
/**
 * Given an environment, a map containing {:locals (mapping of names to bindings), :context
 *   (one of :statement, :expr, :return), :ns (a symbol naming the
 *   compilation ns)}, and form, returns an expression object (a map
 *   containing at least :form, :op and :env keys). If expr has any (immediately)
 *   nested exprs, must have :children [exprs...] entry. This will
 *   facilitate code walking without knowing the details of the op set.
 */
cljs.analyzer.analyze = (function cljs$analyzer$analyze(var_args){
var args8994 = [];
var len__7513__auto___8999 = arguments.length;
var i__7514__auto___9000 = (0);
while(true){
if((i__7514__auto___9000 < len__7513__auto___8999)){
args8994.push((arguments[i__7514__auto___9000]));

var G__9001 = (i__7514__auto___9000 + (1));
i__7514__auto___9000 = G__9001;
continue;
} else {
}
break;
}

var G__8996 = args8994.length;
switch (G__8996) {
case 2:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8994.length)].join('')));

}
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (env,form){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(env,form,null);
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (env,form,name){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(env,form,name,null);
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4 = (function (env,form,name,opts){
var val__8121__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__8121__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{try{var _STAR_alias_map_STAR_8998 = cljs.tools.reader._STAR_alias_map_STAR_;
cljs.tools.reader._STAR_alias_map_STAR_ = (function (){var or__6455__auto__ = cljs.tools.reader._STAR_alias_map_STAR_;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();

try{return cljs.analyzer.analyze_STAR_(env,form,name,opts);
}finally {cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_8998;
}}catch (e8997){var err__8157__auto__ = e8997;
if(cljs.analyzer.analysis_error_QMARK_(err__8157__auto__)){
throw err__8157__auto__;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,err__8157__auto__.message,err__8157__auto__);
}
}}finally {if((val__8121__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});

cljs.analyzer.analyze.cljs$lang$maxFixedArity = 4;
cljs.analyzer.resolve_symbol = (function cljs$analyzer$resolve_symbol(s){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.analyzer._STAR_cljs_ns_STAR_], null)], null),s));
});

//# sourceMappingURL=analyzer.js.map