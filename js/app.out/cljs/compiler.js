// Compiled by ClojureScript 1.7.228 {:static-fns true}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_first_ns_segment,cljs.core.keys(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__9726 = s;
var map__9726__$1 = ((((!((map__9726 == null)))?((((map__9726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9726):map__9726);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9726__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9726__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__9729 = info;
var map__9730 = G__9729;
var map__9730__$1 = ((((!((map__9730 == null)))?((((map__9730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9730):map__9730);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9730__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__9729__$1 = G__9729;
while(true){
var d__$2 = d__$1;
var map__9732 = G__9729__$1;
var map__9732__$1 = ((((!((map__9732 == null)))?((((map__9732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9732):map__9732);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9732__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__9734 = (d__$2 + (1));
var G__9735 = shadow__$1;
d__$1 = G__9734;
G__9729__$1 = G__9735;
continue;
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments()))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__9736){
var map__9742 = p__9736;
var map__9742__$1 = ((((!((map__9742 == null)))?((((map__9742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9742):map__9742);
var name_var = map__9742__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9742__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9742__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace([cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__9744 = info;
var map__9744__$1 = ((((!((map__9744 == null)))?((((map__9744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9744):map__9744);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9744__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9744__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__9746 = [cljs.core.str(clojure.string.replace([cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__9746) : cljs.compiler.munge.call(null,G__9746));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args9747 = [];
var len__7513__auto___9750 = arguments.length;
var i__7514__auto___9751 = (0);
while(true){
if((i__7514__auto___9751 < len__7513__auto___9750)){
args9747.push((arguments[i__7514__auto___9751]));

var G__9752 = (i__7514__auto___9751 + (1));
i__7514__auto___9751 = G__9752;
continue;
} else {
}
break;
}

var G__9749 = args9747.length;
switch (G__9749) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9747.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace([cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = cljs.core.munge(ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;
cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__9755 = cp;
switch (G__9755) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
return [cljs.core.str("\\u"),cljs.core.str(cp.toString((16)))].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__9761_9765 = cljs.core.seq(s);
var chunk__9762_9766 = null;
var count__9763_9767 = (0);
var i__9764_9768 = (0);
while(true){
if((i__9764_9768 < count__9763_9767)){
var c_9769 = chunk__9762_9766.cljs$core$IIndexed$_nth$arity$2(null,i__9764_9768);
sb.append(cljs.compiler.escape_char(c_9769));

var G__9770 = seq__9761_9765;
var G__9771 = chunk__9762_9766;
var G__9772 = count__9763_9767;
var G__9773 = (i__9764_9768 + (1));
seq__9761_9765 = G__9770;
chunk__9762_9766 = G__9771;
count__9763_9767 = G__9772;
i__9764_9768 = G__9773;
continue;
} else {
var temp__4425__auto___9774 = cljs.core.seq(seq__9761_9765);
if(temp__4425__auto___9774){
var seq__9761_9775__$1 = temp__4425__auto___9774;
if(cljs.core.chunked_seq_QMARK_(seq__9761_9775__$1)){
var c__7258__auto___9776 = cljs.core.chunk_first(seq__9761_9775__$1);
var G__9777 = cljs.core.chunk_rest(seq__9761_9775__$1);
var G__9778 = c__7258__auto___9776;
var G__9779 = cljs.core.count(c__7258__auto___9776);
var G__9780 = (0);
seq__9761_9765 = G__9777;
chunk__9762_9766 = G__9778;
count__9763_9767 = G__9779;
i__9764_9768 = G__9780;
continue;
} else {
var c_9781 = cljs.core.first(seq__9761_9775__$1);
sb.append(cljs.compiler.escape_char(c_9781));

var G__9782 = cljs.core.next(seq__9761_9775__$1);
var G__9783 = null;
var G__9784 = (0);
var G__9785 = (0);
seq__9761_9765 = G__9782;
chunk__9762_9766 = G__9783;
count__9763_9767 = G__9784;
i__9764_9768 = G__9785;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__7368__auto__ = (function (){var G__9786 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9786) : cljs.core.atom.call(null,G__9786));
})();
var prefer_table__7369__auto__ = (function (){var G__9787 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9787) : cljs.core.atom.call(null,G__9787));
})();
var method_cache__7370__auto__ = (function (){var G__9788 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9788) : cljs.core.atom.call(null,G__9788));
})();
var cached_hierarchy__7371__auto__ = (function (){var G__9789 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9789) : cljs.core.atom.call(null,G__9789));
})();
var hierarchy__7372__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7372__auto__,method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__8121__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__8121__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__9795_9800 = ast;
var map__9795_9801__$1 = ((((!((map__9795_9800 == null)))?((((map__9795_9800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9795_9800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9795_9800):map__9795_9800);
var env_9802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9795_9801__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_9802))){
var map__9797_9803 = env_9802;
var map__9797_9804__$1 = ((((!((map__9797_9803 == null)))?((((map__9797_9803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9797_9803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9797_9803):map__9797_9803);
var line_9805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9797_9804__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_9806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9797_9804__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__9797_9803,map__9797_9804__$1,line_9805,column_9806,map__9795_9800,map__9795_9801__$1,env_9802,val__8121__auto__){
return (function (m){
var minfo = (function (){var G__9799 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__9799__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__9799,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__9799);
return G__9799__$1;
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_9805 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__9797_9803,map__9797_9804__$1,line_9805,column_9806,map__9795_9800,map__9795_9801__$1,env_9802,val__8121__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_9806)?(column_9806 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__9797_9803,map__9797_9804__$1,line_9805,column_9806,map__9795_9800,map__9795_9801__$1,env_9802,val__8121__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__9797_9803,map__9797_9804__$1,line_9805,column_9806,map__9795_9800,map__9795_9801__$1,env_9802,val__8121__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__9797_9803,map__9797_9804__$1,line_9805,column_9806,map__9795_9800,map__9795_9801__$1,env_9802,val__8121__auto__))
,cljs.core.sorted_map()));
});})(map__9797_9803,map__9797_9804__$1,line_9805,column_9806,map__9795_9800,map__9795_9801__$1,env_9802,val__8121__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
}finally {if((val__8121__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__7520__auto__ = [];
var len__7513__auto___9813 = arguments.length;
var i__7514__auto___9814 = (0);
while(true){
if((i__7514__auto___9814 < len__7513__auto___9813)){
args__7520__auto__.push((arguments[i__7514__auto___9814]));

var G__9815 = (i__7514__auto___9814 + (1));
i__7514__auto___9814 = G__9815;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((0) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__7521__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__9809_9816 = cljs.core.seq(xs);
var chunk__9810_9817 = null;
var count__9811_9818 = (0);
var i__9812_9819 = (0);
while(true){
if((i__9812_9819 < count__9811_9818)){
var x_9820 = chunk__9810_9817.cljs$core$IIndexed$_nth$arity$2(null,i__9812_9819);
if((x_9820 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_9820)){
cljs.compiler.emit(x_9820);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_9820)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_9820);
} else {
if(goog.isFunction(x_9820)){
(x_9820.cljs$core$IFn$_invoke$arity$0 ? x_9820.cljs$core$IFn$_invoke$arity$0() : x_9820.call(null));
} else {
var s_9821 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_9820], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__9809_9816,chunk__9810_9817,count__9811_9818,i__9812_9819,s_9821,x_9820){
return (function (p1__9807_SHARP_){
return (p1__9807_SHARP_ + cljs.core.count(s_9821));
});})(seq__9809_9816,chunk__9810_9817,count__9811_9818,i__9812_9819,s_9821,x_9820))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_9821], 0));

}
}
}
}

var G__9822 = seq__9809_9816;
var G__9823 = chunk__9810_9817;
var G__9824 = count__9811_9818;
var G__9825 = (i__9812_9819 + (1));
seq__9809_9816 = G__9822;
chunk__9810_9817 = G__9823;
count__9811_9818 = G__9824;
i__9812_9819 = G__9825;
continue;
} else {
var temp__4425__auto___9826 = cljs.core.seq(seq__9809_9816);
if(temp__4425__auto___9826){
var seq__9809_9827__$1 = temp__4425__auto___9826;
if(cljs.core.chunked_seq_QMARK_(seq__9809_9827__$1)){
var c__7258__auto___9828 = cljs.core.chunk_first(seq__9809_9827__$1);
var G__9829 = cljs.core.chunk_rest(seq__9809_9827__$1);
var G__9830 = c__7258__auto___9828;
var G__9831 = cljs.core.count(c__7258__auto___9828);
var G__9832 = (0);
seq__9809_9816 = G__9829;
chunk__9810_9817 = G__9830;
count__9811_9818 = G__9831;
i__9812_9819 = G__9832;
continue;
} else {
var x_9833 = cljs.core.first(seq__9809_9827__$1);
if((x_9833 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_9833)){
cljs.compiler.emit(x_9833);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_9833)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_9833);
} else {
if(goog.isFunction(x_9833)){
(x_9833.cljs$core$IFn$_invoke$arity$0 ? x_9833.cljs$core$IFn$_invoke$arity$0() : x_9833.call(null));
} else {
var s_9834 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_9833], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__9809_9816,chunk__9810_9817,count__9811_9818,i__9812_9819,s_9834,x_9833,seq__9809_9827__$1,temp__4425__auto___9826){
return (function (p1__9807_SHARP_){
return (p1__9807_SHARP_ + cljs.core.count(s_9834));
});})(seq__9809_9816,chunk__9810_9817,count__9811_9818,i__9812_9819,s_9834,x_9833,seq__9809_9827__$1,temp__4425__auto___9826))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_9834], 0));

}
}
}
}

var G__9835 = cljs.core.next(seq__9809_9827__$1);
var G__9836 = null;
var G__9837 = (0);
var G__9838 = (0);
seq__9809_9816 = G__9835;
chunk__9810_9817 = G__9836;
count__9811_9818 = G__9837;
i__9812_9819 = G__9838;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq9808){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9808));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__7520__auto__ = [];
var len__7513__auto___9843 = arguments.length;
var i__7514__auto___9844 = (0);
while(true){
if((i__7514__auto___9844 < len__7513__auto___9843)){
args__7520__auto__.push((arguments[i__7514__auto___9844]));

var G__9845 = (i__7514__auto___9844 + (1));
i__7514__auto___9844 = G__9845;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((0) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__7521__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,xs);

cljs.core.println();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__9840){
var map__9841 = p__9840;
var map__9841__$1 = ((((!((map__9841 == null)))?((((map__9841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9841):map__9841);
var m = map__9841__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9841__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.array_seq([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq9839){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9839));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__7429__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_9848_9850 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_9849_9851 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_9848_9850,_STAR_print_fn_STAR_9849_9851,sb__7429__auto__){
return (function (x__7430__auto__){
return sb__7429__auto__.append(x__7430__auto__);
});})(_STAR_print_newline_STAR_9848_9850,_STAR_print_fn_STAR_9849_9851,sb__7429__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_9849_9851;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_9848_9850;
}
return [cljs.core.str(sb__7429__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__7368__auto__ = (function (){var G__9852 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9852) : cljs.core.atom.call(null,G__9852));
})();
var prefer_table__7369__auto__ = (function (){var G__9853 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9853) : cljs.core.atom.call(null,G__9853));
})();
var method_cache__7370__auto__ = (function (){var G__9854 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9854) : cljs.core.atom.call(null,G__9854));
})();
var cached_hierarchy__7371__auto__ = (function (){var G__9855 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9855) : cljs.core.atom.call(null,G__9855));
})();
var hierarchy__7372__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7372__auto__,method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__));
})();
}
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["null"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",x,")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x))], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(x)?"true":"false")], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(new RegExp(\"\"))"], 0));
} else {
var vec__9856 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9856,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9856,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9856,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pattern], 0));
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Keyword("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__9859_9861 = (cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__9859_9861) : cljs.compiler.emit_constant.call(null,G__9859_9861));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__9860_9862 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__9860_9862) : cljs.compiler.emit_constant.call(null,G__9860_9862));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Symbol("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(symstr) : cljs.compiler.emit_constant.call(null,symstr));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__9864_9865 = cljs.core.hash(sym);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__9864_9865) : cljs.compiler.emit_constant.call(null,G__9864_9865));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(null) : cljs.compiler.emit_constant.call(null,null));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
var value = (function (){var G__9866 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__9866) : x.call(null,G__9866));
})();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
var value = (function (){var G__9867 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__9867) : x.call(null,G__9867));
})();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new Date(",date.getTime(),")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__9869){
var map__9870 = p__9869;
var map__9870__$1 = ((((!((map__9870 == null)))?((((map__9870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9870):map__9870);
var arg = map__9870__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9870__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9870__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9870__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name)], null));
var or__6455__auto__ = js_module_name;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(arg)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__9710__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__9872 = info__$1;
var G__9872__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__9872):G__9872);
return G__9872__$1;
})()], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__9873){
var map__9874 = p__9873;
var map__9874__$1 = ((((!((map__9874 == null)))?((((map__9874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9874):map__9874);
var arg = map__9874__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9874__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9874__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9874__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9874__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))], 0)))].join('')));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))], 0)))].join('')));
}

var map__9876 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__9876__$1 = ((((!((map__9876 == null)))?((((map__9876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9876):map__9876);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9876__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__9710__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__9878){
var map__9879 = p__9878;
var map__9879__$1 = ((((!((map__9879 == null)))?((((map__9879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9879):map__9879);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9879__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9879__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9879__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9710__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_((function (p1__9881_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__9881_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__9882){
var map__9883 = p__9882;
var map__9883__$1 = ((((!((map__9883 == null)))?((((map__9883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9883):map__9883);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9883__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9883__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9883__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__9710__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if((cljs.core.count(keys) === (0))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentArrayMap.EMPTY"], 0));
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_(keys))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], true, false)"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep(keys),"],[",cljs.compiler.comma_sep(vals),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (p__9885){
var map__9886 = p__9885;
var map__9886__$1 = ((((!((map__9886 == null)))?((((map__9886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9886):map__9886);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9886__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9886__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9710__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__9888){
var map__9889 = p__9888;
var map__9889__$1 = ((((!((map__9889 == null)))?((((map__9889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9889):map__9889);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9889__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9889__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9710__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_9891 = cljs.core.count(items);
if((cnt_9891 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentVector(null, ",cnt_9891,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_((function (p1__9892_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__9892_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__9893){
var map__9894 = p__9893;
var map__9894__$1 = ((((!((map__9894 == null)))?((((map__9894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9894):map__9894);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9894__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9894__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9710__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashSet.EMPTY"], 0));
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_(items))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"))),"], null), null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__9896){
var map__9897 = p__9896;
var map__9897__$1 = ((((!((map__9897 == null)))?((((map__9897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9897):map__9897);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9897__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9897__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9897__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9710__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["{"], 0));

var temp__4425__auto___9907 = cljs.core.seq(items);
if(temp__4425__auto___9907){
var items_9908__$1 = temp__4425__auto___9907;
var vec__9899_9909 = items_9908__$1;
var vec__9900_9910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9899_9909,(0),null);
var k_9911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9900_9910,(0),null);
var v_9912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9900_9910,(1),null);
var r_9913 = cljs.core.nthnext(vec__9899_9909,(1));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\"",cljs.core.name(k_9911),"\": ",v_9912], 0));

var seq__9901_9914 = cljs.core.seq(r_9913);
var chunk__9902_9915 = null;
var count__9903_9916 = (0);
var i__9904_9917 = (0);
while(true){
if((i__9904_9917 < count__9903_9916)){
var vec__9905_9918 = chunk__9902_9915.cljs$core$IIndexed$_nth$arity$2(null,i__9904_9917);
var k_9919__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9905_9918,(0),null);
var v_9920__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9905_9918,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_9919__$1),"\": ",v_9920__$1], 0));

var G__9921 = seq__9901_9914;
var G__9922 = chunk__9902_9915;
var G__9923 = count__9903_9916;
var G__9924 = (i__9904_9917 + (1));
seq__9901_9914 = G__9921;
chunk__9902_9915 = G__9922;
count__9903_9916 = G__9923;
i__9904_9917 = G__9924;
continue;
} else {
var temp__4425__auto___9925__$1 = cljs.core.seq(seq__9901_9914);
if(temp__4425__auto___9925__$1){
var seq__9901_9926__$1 = temp__4425__auto___9925__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9901_9926__$1)){
var c__7258__auto___9927 = cljs.core.chunk_first(seq__9901_9926__$1);
var G__9928 = cljs.core.chunk_rest(seq__9901_9926__$1);
var G__9929 = c__7258__auto___9927;
var G__9930 = cljs.core.count(c__7258__auto___9927);
var G__9931 = (0);
seq__9901_9914 = G__9928;
chunk__9902_9915 = G__9929;
count__9903_9916 = G__9930;
i__9904_9917 = G__9931;
continue;
} else {
var vec__9906_9932 = cljs.core.first(seq__9901_9926__$1);
var k_9933__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9906_9932,(0),null);
var v_9934__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9906_9932,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_9933__$1),"\": ",v_9934__$1], 0));

var G__9935 = cljs.core.next(seq__9901_9926__$1);
var G__9936 = null;
var G__9937 = (0);
var G__9938 = (0);
seq__9901_9914 = G__9935;
chunk__9902_9915 = G__9936;
count__9903_9916 = G__9937;
i__9904_9917 = G__9938;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["[",cljs.compiler.comma_sep(items),"]"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__9939){
var map__9940 = p__9939;
var map__9940__$1 = ((((!((map__9940 == null)))?((((map__9940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9940):map__9940);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9940__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9940__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__9710__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant.call(null,form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__9942){
var map__9945 = p__9942;
var map__9945__$1 = ((((!((map__9945 == null)))?((((map__9945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9945):map__9945);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9945__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9945__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__6443__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__6443__auto__){
var and__6443__auto____$1 = form;
if(cljs.core.truth_(and__6443__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__9947){
var map__9950 = p__9947;
var map__9950__$1 = ((((!((map__9950 == null)))?((((map__9950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9950):map__9950);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9950__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9950__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__6455__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__9952){
var map__9953 = p__9952;
var map__9953__$1 = ((((!((map__9953 == null)))?((((map__9953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9953):map__9953);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9953__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9953__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9953__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9953__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9953__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__6455__auto__ = unchecked;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then], 0));
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([else$], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(cljs.core.truth_(",test,")){"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(",test,"){"], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then,"} else {"], 0));

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([else$,"}"], 0));
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__9955){
var map__9956 = p__9955;
var map__9956__$1 = ((((!((map__9956 == null)))?((((map__9956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9956):map__9956);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9956__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9956__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9956__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9956__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9956__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function(){"], 0));
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",gs,";"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["switch (",v,") {"], 0));

var seq__9958_9972 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__9959_9973 = null;
var count__9960_9974 = (0);
var i__9961_9975 = (0);
while(true){
if((i__9961_9975 < count__9960_9974)){
var vec__9962_9976 = chunk__9959_9973.cljs$core$IIndexed$_nth$arity$2(null,i__9961_9975);
var ts_9977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9962_9976,(0),null);
var then_9978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9962_9976,(1),null);
var seq__9963_9979 = cljs.core.seq(ts_9977);
var chunk__9964_9980 = null;
var count__9965_9981 = (0);
var i__9966_9982 = (0);
while(true){
if((i__9966_9982 < count__9965_9981)){
var test_9983 = chunk__9964_9980.cljs$core$IIndexed$_nth$arity$2(null,i__9966_9982);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_9983,":"], 0));

var G__9984 = seq__9963_9979;
var G__9985 = chunk__9964_9980;
var G__9986 = count__9965_9981;
var G__9987 = (i__9966_9982 + (1));
seq__9963_9979 = G__9984;
chunk__9964_9980 = G__9985;
count__9965_9981 = G__9986;
i__9966_9982 = G__9987;
continue;
} else {
var temp__4425__auto___9988 = cljs.core.seq(seq__9963_9979);
if(temp__4425__auto___9988){
var seq__9963_9989__$1 = temp__4425__auto___9988;
if(cljs.core.chunked_seq_QMARK_(seq__9963_9989__$1)){
var c__7258__auto___9990 = cljs.core.chunk_first(seq__9963_9989__$1);
var G__9991 = cljs.core.chunk_rest(seq__9963_9989__$1);
var G__9992 = c__7258__auto___9990;
var G__9993 = cljs.core.count(c__7258__auto___9990);
var G__9994 = (0);
seq__9963_9979 = G__9991;
chunk__9964_9980 = G__9992;
count__9965_9981 = G__9993;
i__9966_9982 = G__9994;
continue;
} else {
var test_9995 = cljs.core.first(seq__9963_9989__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_9995,":"], 0));

var G__9996 = cljs.core.next(seq__9963_9989__$1);
var G__9997 = null;
var G__9998 = (0);
var G__9999 = (0);
seq__9963_9979 = G__9996;
chunk__9964_9980 = G__9997;
count__9965_9981 = G__9998;
i__9966_9982 = G__9999;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_9978], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_9978], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__10000 = seq__9958_9972;
var G__10001 = chunk__9959_9973;
var G__10002 = count__9960_9974;
var G__10003 = (i__9961_9975 + (1));
seq__9958_9972 = G__10000;
chunk__9959_9973 = G__10001;
count__9960_9974 = G__10002;
i__9961_9975 = G__10003;
continue;
} else {
var temp__4425__auto___10004 = cljs.core.seq(seq__9958_9972);
if(temp__4425__auto___10004){
var seq__9958_10005__$1 = temp__4425__auto___10004;
if(cljs.core.chunked_seq_QMARK_(seq__9958_10005__$1)){
var c__7258__auto___10006 = cljs.core.chunk_first(seq__9958_10005__$1);
var G__10007 = cljs.core.chunk_rest(seq__9958_10005__$1);
var G__10008 = c__7258__auto___10006;
var G__10009 = cljs.core.count(c__7258__auto___10006);
var G__10010 = (0);
seq__9958_9972 = G__10007;
chunk__9959_9973 = G__10008;
count__9960_9974 = G__10009;
i__9961_9975 = G__10010;
continue;
} else {
var vec__9967_10011 = cljs.core.first(seq__9958_10005__$1);
var ts_10012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9967_10011,(0),null);
var then_10013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9967_10011,(1),null);
var seq__9968_10014 = cljs.core.seq(ts_10012);
var chunk__9969_10015 = null;
var count__9970_10016 = (0);
var i__9971_10017 = (0);
while(true){
if((i__9971_10017 < count__9970_10016)){
var test_10018 = chunk__9969_10015.cljs$core$IIndexed$_nth$arity$2(null,i__9971_10017);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_10018,":"], 0));

var G__10019 = seq__9968_10014;
var G__10020 = chunk__9969_10015;
var G__10021 = count__9970_10016;
var G__10022 = (i__9971_10017 + (1));
seq__9968_10014 = G__10019;
chunk__9969_10015 = G__10020;
count__9970_10016 = G__10021;
i__9971_10017 = G__10022;
continue;
} else {
var temp__4425__auto___10023__$1 = cljs.core.seq(seq__9968_10014);
if(temp__4425__auto___10023__$1){
var seq__9968_10024__$1 = temp__4425__auto___10023__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9968_10024__$1)){
var c__7258__auto___10025 = cljs.core.chunk_first(seq__9968_10024__$1);
var G__10026 = cljs.core.chunk_rest(seq__9968_10024__$1);
var G__10027 = c__7258__auto___10025;
var G__10028 = cljs.core.count(c__7258__auto___10025);
var G__10029 = (0);
seq__9968_10014 = G__10026;
chunk__9969_10015 = G__10027;
count__9970_10016 = G__10028;
i__9971_10017 = G__10029;
continue;
} else {
var test_10030 = cljs.core.first(seq__9968_10024__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_10030,":"], 0));

var G__10031 = cljs.core.next(seq__9968_10024__$1);
var G__10032 = null;
var G__10033 = (0);
var G__10034 = (0);
seq__9968_10014 = G__10031;
chunk__9969_10015 = G__10032;
count__9970_10016 = G__10033;
i__9971_10017 = G__10034;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_10013], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_10013], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__10035 = cljs.core.next(seq__9958_10005__$1);
var G__10036 = null;
var G__10037 = (0);
var G__10038 = (0);
seq__9958_9972 = G__10035;
chunk__9959_9973 = G__10036;
count__9960_9974 = G__10037;
i__9961_9975 = G__10038;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",default$], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([default$], 0));
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",gs,";})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__10039){
var map__10040 = p__10039;
var map__10040__$1 = ((((!((map__10040 == null)))?((((map__10040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10040):map__10040);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10040__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10040__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function(){throw ",throw$,"})()"], 0));
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["throw ",throw$,";"], 0));
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type(env,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__10049 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10049,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10049,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type(env,rstr):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__10049,fstr,rstr,ret_t,axstr){
return (function (p1__10042_SHARP_){
return cljs$compiler$resolve_type(env,p1__10042_SHARP_);
});})(idx,vec__10049,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__10050 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),cljs.core.str(")")].join('');
var G__10050__$1 = (cljs.core.truth_(ret_t)?[cljs.core.str(G__10050),cljs.core.str(":"),cljs.core.str(ret_t)].join(''):G__10050);
return G__10050__$1;
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type(env,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ts__$1,xs){
return (function (p1__10051_SHARP_){
return cljs.compiler.resolve_type(env,p1__10051_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__10054 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10054,(0),null);
var ts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10054,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10054,(2),null);
var xs = cljs.core.nthnext(vec__10054,(3));
if(cljs.core.truth_((function (){var and__6443__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__6443__auto__){
var and__6443__auto____$1 = ts;
if(cljs.core.truth_(and__6443__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__10055 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10055,(0),null);
var ts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10055,(1),null);
var xs = cljs.core.nthnext(vec__10055,(2));
if(cljs.core.truth_((function (){var and__6443__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__6443__auto__){
var and__6443__auto____$1 = ts;
if(cljs.core.truth_(and__6443__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args10057 = [];
var len__7513__auto___10084 = arguments.length;
var i__7514__auto___10085 = (0);
while(true){
if((i__7514__auto___10085 < len__7513__auto___10084)){
args10057.push((arguments[i__7514__auto___10085]));

var G__10086 = (i__7514__auto___10085 + (1));
i__7514__auto___10085 = G__10086;
continue;
} else {
}
break;
}

var G__10059 = args10057.length;
switch (G__10059) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10057.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__10075 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__10056_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__10056_SHARP_);
} else {
return p1__10056_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10075,(0),null);
var ys = cljs.core.nthnext(vec__10075,(1));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(x,"*/","* /")], 0));

var seq__10076 = cljs.core.seq(ys);
var chunk__10077 = null;
var count__10078 = (0);
var i__10079 = (0);
while(true){
if((i__10079 < count__10078)){
var next_line = chunk__10077.cljs$core$IIndexed$_nth$arity$2(null,i__10079);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__10088 = seq__10076;
var G__10089 = chunk__10077;
var G__10090 = count__10078;
var G__10091 = (i__10079 + (1));
seq__10076 = G__10088;
chunk__10077 = G__10089;
count__10078 = G__10090;
i__10079 = G__10091;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10076);
if(temp__4425__auto__){
var seq__10076__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10076__$1)){
var c__7258__auto__ = cljs.core.chunk_first(seq__10076__$1);
var G__10092 = cljs.core.chunk_rest(seq__10076__$1);
var G__10093 = c__7258__auto__;
var G__10094 = cljs.core.count(c__7258__auto__);
var G__10095 = (0);
seq__10076 = G__10092;
chunk__10077 = G__10093;
count__10078 = G__10094;
i__10079 = G__10095;
continue;
} else {
var next_line = cljs.core.first(seq__10076__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__10096 = cljs.core.next(seq__10076__$1);
var G__10097 = null;
var G__10098 = (0);
var G__10099 = (0);
seq__10076 = G__10096;
chunk__10077 = G__10097;
count__10078 = G__10098;
i__10079 = G__10099;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

var seq__10080_10100 = cljs.core.seq(docs__$2);
var chunk__10081_10101 = null;
var count__10082_10102 = (0);
var i__10083_10103 = (0);
while(true){
if((i__10083_10103 < count__10082_10102)){
var e_10104 = chunk__10081_10101.cljs$core$IIndexed$_nth$arity$2(null,i__10083_10103);
if(cljs.core.truth_(e_10104)){
print_comment_lines(e_10104);
} else {
}

var G__10105 = seq__10080_10100;
var G__10106 = chunk__10081_10101;
var G__10107 = count__10082_10102;
var G__10108 = (i__10083_10103 + (1));
seq__10080_10100 = G__10105;
chunk__10081_10101 = G__10106;
count__10082_10102 = G__10107;
i__10083_10103 = G__10108;
continue;
} else {
var temp__4425__auto___10109 = cljs.core.seq(seq__10080_10100);
if(temp__4425__auto___10109){
var seq__10080_10110__$1 = temp__4425__auto___10109;
if(cljs.core.chunked_seq_QMARK_(seq__10080_10110__$1)){
var c__7258__auto___10111 = cljs.core.chunk_first(seq__10080_10110__$1);
var G__10112 = cljs.core.chunk_rest(seq__10080_10110__$1);
var G__10113 = c__7258__auto___10111;
var G__10114 = cljs.core.count(c__7258__auto___10111);
var G__10115 = (0);
seq__10080_10100 = G__10112;
chunk__10081_10101 = G__10113;
count__10082_10102 = G__10114;
i__10083_10103 = G__10115;
continue;
} else {
var e_10116 = cljs.core.first(seq__10080_10110__$1);
if(cljs.core.truth_(e_10116)){
print_comment_lines(e_10116);
} else {
}

var G__10117 = cljs.core.next(seq__10080_10110__$1);
var G__10118 = null;
var G__10119 = (0);
var G__10120 = (0);
seq__10080_10100 = G__10117;
chunk__10081_10101 = G__10118;
count__10082_10102 = G__10119;
i__10083_10103 = G__10120;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" */"], 0));
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;
cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword(null,"options","options",99638489));
var and__6443__auto__ = cljs.core.some(((function (opts){
return (function (p1__10122_SHARP_){
return goog.string.startsWith(p1__10122_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = opts;
if(cljs.core.truth_(and__6443__auto____$1)){
var and__6443__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__6443__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_(define))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([define], 0));
} else {
return null;
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
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__10123){
var map__10124 = p__10123;
var map__10124__$1 = ((((!((map__10124 == null)))?((((map__10124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10124):map__10124);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10124__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10124__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10124__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10124__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10124__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10124__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10124__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10124__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10124__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__6455__auto__ = init;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ("], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([var$], 0));

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",(function (){var temp__4423__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__4423__auto__)){
var define = temp__4423__auto__;
return define;
} else {
return init;
}
})()], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["; return ("], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0))], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
} else {
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");"], 0));
} else {
}

if(cljs.core.truth_((function (){var and__6443__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__6443__auto__)){
return test;
} else {
return and__6443__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([var$,".cljs$lang$test = ",test,";"], 0));
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__10126){
var map__10143 = p__10126;
var map__10143__$1 = ((((!((map__10143 == null)))?((((map__10143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10143):map__10143);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10143__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10143__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10143__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (",arglist,"){"], 0));

var seq__10145_10159 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__10146_10160 = null;
var count__10147_10161 = (0);
var i__10148_10162 = (0);
while(true){
if((i__10148_10162 < count__10147_10161)){
var vec__10149_10163 = chunk__10146_10160.cljs$core$IIndexed$_nth$arity$2(null,i__10148_10162);
var i_10164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10149_10163,(0),null);
var param_10165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10149_10163,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_10165);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__10166 = seq__10145_10159;
var G__10167 = chunk__10146_10160;
var G__10168 = count__10147_10161;
var G__10169 = (i__10148_10162 + (1));
seq__10145_10159 = G__10166;
chunk__10146_10160 = G__10167;
count__10147_10161 = G__10168;
i__10148_10162 = G__10169;
continue;
} else {
var temp__4425__auto___10170 = cljs.core.seq(seq__10145_10159);
if(temp__4425__auto___10170){
var seq__10145_10171__$1 = temp__4425__auto___10170;
if(cljs.core.chunked_seq_QMARK_(seq__10145_10171__$1)){
var c__7258__auto___10172 = cljs.core.chunk_first(seq__10145_10171__$1);
var G__10173 = cljs.core.chunk_rest(seq__10145_10171__$1);
var G__10174 = c__7258__auto___10172;
var G__10175 = cljs.core.count(c__7258__auto___10172);
var G__10176 = (0);
seq__10145_10159 = G__10173;
chunk__10146_10160 = G__10174;
count__10147_10161 = G__10175;
i__10148_10162 = G__10176;
continue;
} else {
var vec__10150_10177 = cljs.core.first(seq__10145_10171__$1);
var i_10178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10150_10177,(0),null);
var param_10179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10150_10177,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_10179);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__10180 = cljs.core.next(seq__10145_10171__$1);
var G__10181 = null;
var G__10182 = (0);
var G__10183 = (0);
seq__10145_10159 = G__10180;
chunk__10146_10160 = G__10181;
count__10147_10161 = G__10182;
i__10148_10162 = G__10183;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.rest(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name,"("], 0));

var seq__10151_10184 = cljs.core.seq(params);
var chunk__10152_10185 = null;
var count__10153_10186 = (0);
var i__10154_10187 = (0);
while(true){
if((i__10154_10187 < count__10153_10186)){
var param_10188 = chunk__10152_10185.cljs$core$IIndexed$_nth$arity$2(null,i__10154_10187);
cljs.compiler.emit(param_10188);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10188,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__10189 = seq__10151_10184;
var G__10190 = chunk__10152_10185;
var G__10191 = count__10153_10186;
var G__10192 = (i__10154_10187 + (1));
seq__10151_10184 = G__10189;
chunk__10152_10185 = G__10190;
count__10153_10186 = G__10191;
i__10154_10187 = G__10192;
continue;
} else {
var temp__4425__auto___10193 = cljs.core.seq(seq__10151_10184);
if(temp__4425__auto___10193){
var seq__10151_10194__$1 = temp__4425__auto___10193;
if(cljs.core.chunked_seq_QMARK_(seq__10151_10194__$1)){
var c__7258__auto___10195 = cljs.core.chunk_first(seq__10151_10194__$1);
var G__10196 = cljs.core.chunk_rest(seq__10151_10194__$1);
var G__10197 = c__7258__auto___10195;
var G__10198 = cljs.core.count(c__7258__auto___10195);
var G__10199 = (0);
seq__10151_10184 = G__10196;
chunk__10152_10185 = G__10197;
count__10153_10186 = G__10198;
i__10154_10187 = G__10199;
continue;
} else {
var param_10200 = cljs.core.first(seq__10151_10194__$1);
cljs.compiler.emit(param_10200);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10200,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__10201 = cljs.core.next(seq__10151_10194__$1);
var G__10202 = null;
var G__10203 = (0);
var G__10204 = (0);
seq__10151_10184 = G__10201;
chunk__10152_10185 = G__10202;
count__10153_10186 = G__10203;
i__10154_10187 = G__10204;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.seq(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name,"("], 0));

var seq__10155_10205 = cljs.core.seq(params);
var chunk__10156_10206 = null;
var count__10157_10207 = (0);
var i__10158_10208 = (0);
while(true){
if((i__10158_10208 < count__10157_10207)){
var param_10209 = chunk__10156_10206.cljs$core$IIndexed$_nth$arity$2(null,i__10158_10208);
cljs.compiler.emit(param_10209);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10209,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__10210 = seq__10155_10205;
var G__10211 = chunk__10156_10206;
var G__10212 = count__10157_10207;
var G__10213 = (i__10158_10208 + (1));
seq__10155_10205 = G__10210;
chunk__10156_10206 = G__10211;
count__10157_10207 = G__10212;
i__10158_10208 = G__10213;
continue;
} else {
var temp__4425__auto___10214 = cljs.core.seq(seq__10155_10205);
if(temp__4425__auto___10214){
var seq__10155_10215__$1 = temp__4425__auto___10214;
if(cljs.core.chunked_seq_QMARK_(seq__10155_10215__$1)){
var c__7258__auto___10216 = cljs.core.chunk_first(seq__10155_10215__$1);
var G__10217 = cljs.core.chunk_rest(seq__10155_10215__$1);
var G__10218 = c__7258__auto___10216;
var G__10219 = cljs.core.count(c__7258__auto___10216);
var G__10220 = (0);
seq__10155_10205 = G__10217;
chunk__10156_10206 = G__10218;
count__10157_10207 = G__10219;
i__10158_10208 = G__10220;
continue;
} else {
var param_10221 = cljs.core.first(seq__10155_10215__$1);
cljs.compiler.emit(param_10221);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10221,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__10222 = cljs.core.next(seq__10155_10215__$1);
var G__10223 = null;
var G__10224 = (0);
var G__10225 = (0);
seq__10155_10205 = G__10222;
chunk__10156_10206 = G__10223;
count__10157_10207 = G__10224;
i__10158_10208 = G__10225;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__10230 = cljs.core.seq(params);
var chunk__10231 = null;
var count__10232 = (0);
var i__10233 = (0);
while(true){
if((i__10233 < count__10232)){
var param = chunk__10231.cljs$core$IIndexed$_nth$arity$2(null,i__10233);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__10234 = seq__10230;
var G__10235 = chunk__10231;
var G__10236 = count__10232;
var G__10237 = (i__10233 + (1));
seq__10230 = G__10234;
chunk__10231 = G__10235;
count__10232 = G__10236;
i__10233 = G__10237;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10230);
if(temp__4425__auto__){
var seq__10230__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10230__$1)){
var c__7258__auto__ = cljs.core.chunk_first(seq__10230__$1);
var G__10238 = cljs.core.chunk_rest(seq__10230__$1);
var G__10239 = c__7258__auto__;
var G__10240 = cljs.core.count(c__7258__auto__);
var G__10241 = (0);
seq__10230 = G__10238;
chunk__10231 = G__10239;
count__10232 = G__10240;
i__10233 = G__10241;
continue;
} else {
var param = cljs.core.first(seq__10230__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__10242 = cljs.core.next(seq__10230__$1);
var G__10243 = null;
var G__10244 = (0);
var G__10245 = (0);
seq__10230 = G__10242;
chunk__10231 = G__10243;
count__10232 = G__10244;
i__10233 = G__10245;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__10246){
var map__10249 = p__10246;
var map__10249__$1 = ((((!((map__10249 == null)))?((((map__10249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10249):map__10249);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10249__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10249__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10249__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10249__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10249__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10249__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10249__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10249__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__9710__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"("], 0));

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null)))], 0)))].join('')));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__10251){
var map__10262 = p__10251;
var map__10262__$1 = ((((!((map__10262 == null)))?((((map__10262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10262):map__10262);
var f = map__10262__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10262__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10262__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10262__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10262__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10262__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10262__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10262__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10262__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__9710__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

var name_10272__$1 = (function (){var or__6455__auto__ = name;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_10273 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_10272__$1);
var delegate_name_10274 = [cljs.core.str(mname_10273),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",delegate_name_10274," = function ("], 0));

var seq__10264_10275 = cljs.core.seq(params);
var chunk__10265_10276 = null;
var count__10266_10277 = (0);
var i__10267_10278 = (0);
while(true){
if((i__10267_10278 < count__10266_10277)){
var param_10279 = chunk__10265_10276.cljs$core$IIndexed$_nth$arity$2(null,i__10267_10278);
cljs.compiler.emit(param_10279);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10279,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__10280 = seq__10264_10275;
var G__10281 = chunk__10265_10276;
var G__10282 = count__10266_10277;
var G__10283 = (i__10267_10278 + (1));
seq__10264_10275 = G__10280;
chunk__10265_10276 = G__10281;
count__10266_10277 = G__10282;
i__10267_10278 = G__10283;
continue;
} else {
var temp__4425__auto___10284 = cljs.core.seq(seq__10264_10275);
if(temp__4425__auto___10284){
var seq__10264_10285__$1 = temp__4425__auto___10284;
if(cljs.core.chunked_seq_QMARK_(seq__10264_10285__$1)){
var c__7258__auto___10286 = cljs.core.chunk_first(seq__10264_10285__$1);
var G__10287 = cljs.core.chunk_rest(seq__10264_10285__$1);
var G__10288 = c__7258__auto___10286;
var G__10289 = cljs.core.count(c__7258__auto___10286);
var G__10290 = (0);
seq__10264_10275 = G__10287;
chunk__10265_10276 = G__10288;
count__10266_10277 = G__10289;
i__10267_10278 = G__10290;
continue;
} else {
var param_10291 = cljs.core.first(seq__10264_10285__$1);
cljs.compiler.emit(param_10291);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10291,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__10292 = cljs.core.next(seq__10264_10285__$1);
var G__10293 = null;
var G__10294 = (0);
var G__10295 = (0);
seq__10264_10275 = G__10292;
chunk__10265_10276 = G__10293;
count__10266_10277 = G__10294;
i__10267_10278 = G__10295;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["){"], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_10273," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_10296 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_10296,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name_10274,".call(this,"], 0));

var seq__10268_10297 = cljs.core.seq(params);
var chunk__10269_10298 = null;
var count__10270_10299 = (0);
var i__10271_10300 = (0);
while(true){
if((i__10271_10300 < count__10270_10299)){
var param_10301 = chunk__10269_10298.cljs$core$IIndexed$_nth$arity$2(null,i__10271_10300);
cljs.compiler.emit(param_10301);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10301,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__10302 = seq__10268_10297;
var G__10303 = chunk__10269_10298;
var G__10304 = count__10270_10299;
var G__10305 = (i__10271_10300 + (1));
seq__10268_10297 = G__10302;
chunk__10269_10298 = G__10303;
count__10270_10299 = G__10304;
i__10271_10300 = G__10305;
continue;
} else {
var temp__4425__auto___10306 = cljs.core.seq(seq__10268_10297);
if(temp__4425__auto___10306){
var seq__10268_10307__$1 = temp__4425__auto___10306;
if(cljs.core.chunked_seq_QMARK_(seq__10268_10307__$1)){
var c__7258__auto___10308 = cljs.core.chunk_first(seq__10268_10307__$1);
var G__10309 = cljs.core.chunk_rest(seq__10268_10307__$1);
var G__10310 = c__7258__auto___10308;
var G__10311 = cljs.core.count(c__7258__auto___10308);
var G__10312 = (0);
seq__10268_10297 = G__10309;
chunk__10269_10298 = G__10310;
count__10270_10299 = G__10311;
i__10271_10300 = G__10312;
continue;
} else {
var param_10313 = cljs.core.first(seq__10268_10307__$1);
cljs.compiler.emit(param_10313);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10313,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__10314 = cljs.core.next(seq__10268_10307__$1);
var G__10315 = null;
var G__10316 = (0);
var G__10317 = (0);
seq__10268_10297 = G__10314;
chunk__10269_10298 = G__10315;
count__10270_10299 = G__10316;
i__10271_10300 = G__10317;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_10273,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_10273,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_10272__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_10273,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_10274,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_10273,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__10321){
var map__10322 = p__10321;
var map__10322__$1 = ((((!((map__10322 == null)))?((((map__10322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10322):map__10322);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10322__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10322__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10322__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10322__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10322__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10322__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10322__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.array_seq([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__10322,map__10322__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__10318_SHARP_){
var and__6443__auto__ = p1__10318_SHARP_;
if(cljs.core.truth_(and__6443__auto__)){
var G__10324 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__10318_SHARP_);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10324) : cljs.core.deref.call(null,G__10324));
} else {
return and__6443__auto__;
}
});})(map__10322,map__10322__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.array_seq([loop_lets], 0)))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_10344__$1 = (function (){var or__6455__auto__ = name;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_10345 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_10344__$1);
var maxparams_10346 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_10347 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_10344__$1,mname_10345,maxparams_10346,loop_locals,map__10322,map__10322__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(mname_10345),cljs.core.str("__"),cljs.core.str(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_10344__$1,mname_10345,maxparams_10346,loop_locals,map__10322,map__10322__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_10348 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_10344__$1,mname_10345,maxparams_10346,mmap_10347,loop_locals,map__10322,map__10322__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__10319_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__10319_SHARP_)));
});})(name_10344__$1,mname_10345,maxparams_10346,mmap_10347,loop_locals,map__10322,map__10322__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_10347));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_10345," = null;"], 0));

var seq__10325_10349 = cljs.core.seq(ms_10348);
var chunk__10326_10350 = null;
var count__10327_10351 = (0);
var i__10328_10352 = (0);
while(true){
if((i__10328_10352 < count__10327_10351)){
var vec__10329_10353 = chunk__10326_10350.cljs$core$IIndexed$_nth$arity$2(null,i__10328_10352);
var n_10354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10329_10353,(0),null);
var meth_10355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10329_10353,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_10354," = "], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_10355))){
cljs.compiler.emit_variadic_fn_method(meth_10355);
} else {
cljs.compiler.emit_fn_method(meth_10355);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__10356 = seq__10325_10349;
var G__10357 = chunk__10326_10350;
var G__10358 = count__10327_10351;
var G__10359 = (i__10328_10352 + (1));
seq__10325_10349 = G__10356;
chunk__10326_10350 = G__10357;
count__10327_10351 = G__10358;
i__10328_10352 = G__10359;
continue;
} else {
var temp__4425__auto___10360 = cljs.core.seq(seq__10325_10349);
if(temp__4425__auto___10360){
var seq__10325_10361__$1 = temp__4425__auto___10360;
if(cljs.core.chunked_seq_QMARK_(seq__10325_10361__$1)){
var c__7258__auto___10362 = cljs.core.chunk_first(seq__10325_10361__$1);
var G__10363 = cljs.core.chunk_rest(seq__10325_10361__$1);
var G__10364 = c__7258__auto___10362;
var G__10365 = cljs.core.count(c__7258__auto___10362);
var G__10366 = (0);
seq__10325_10349 = G__10363;
chunk__10326_10350 = G__10364;
count__10327_10351 = G__10365;
i__10328_10352 = G__10366;
continue;
} else {
var vec__10330_10367 = cljs.core.first(seq__10325_10361__$1);
var n_10368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10330_10367,(0),null);
var meth_10369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10330_10367,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_10368," = "], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_10369))){
cljs.compiler.emit_variadic_fn_method(meth_10369);
} else {
cljs.compiler.emit_fn_method(meth_10369);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__10370 = cljs.core.next(seq__10325_10361__$1);
var G__10371 = null;
var G__10372 = (0);
var G__10373 = (0);
seq__10325_10349 = G__10370;
chunk__10326_10350 = G__10371;
count__10327_10351 = G__10372;
i__10328_10352 = G__10373;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_10345," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_10346),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_10346)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_10346));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["switch(arguments.length){"], 0));

var seq__10331_10374 = cljs.core.seq(ms_10348);
var chunk__10332_10375 = null;
var count__10333_10376 = (0);
var i__10334_10377 = (0);
while(true){
if((i__10334_10377 < count__10333_10376)){
var vec__10335_10378 = chunk__10332_10375.cljs$core$IIndexed$_nth$arity$2(null,i__10334_10377);
var n_10379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10335_10378,(0),null);
var meth_10380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10335_10378,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_10380))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_10381 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_10381," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_10382 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_10381," = new cljs.core.IndexedSeq(",a_10382,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_10379,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_10346)),(((cljs.core.count(maxparams_10346) > (1)))?", ":null),restarg_10381,");"], 0));
} else {
var pcnt_10383 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_10380));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_10383,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_10379,".call(this",(((pcnt_10383 === (0)))?null:cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_10383,maxparams_10346))),",")),");"], 0));
}

var G__10384 = seq__10331_10374;
var G__10385 = chunk__10332_10375;
var G__10386 = count__10333_10376;
var G__10387 = (i__10334_10377 + (1));
seq__10331_10374 = G__10384;
chunk__10332_10375 = G__10385;
count__10333_10376 = G__10386;
i__10334_10377 = G__10387;
continue;
} else {
var temp__4425__auto___10388 = cljs.core.seq(seq__10331_10374);
if(temp__4425__auto___10388){
var seq__10331_10389__$1 = temp__4425__auto___10388;
if(cljs.core.chunked_seq_QMARK_(seq__10331_10389__$1)){
var c__7258__auto___10390 = cljs.core.chunk_first(seq__10331_10389__$1);
var G__10391 = cljs.core.chunk_rest(seq__10331_10389__$1);
var G__10392 = c__7258__auto___10390;
var G__10393 = cljs.core.count(c__7258__auto___10390);
var G__10394 = (0);
seq__10331_10374 = G__10391;
chunk__10332_10375 = G__10392;
count__10333_10376 = G__10393;
i__10334_10377 = G__10394;
continue;
} else {
var vec__10336_10395 = cljs.core.first(seq__10331_10389__$1);
var n_10396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10336_10395,(0),null);
var meth_10397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10336_10395,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_10397))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_10398 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_10398," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_10399 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_10398," = new cljs.core.IndexedSeq(",a_10399,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_10396,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_10346)),(((cljs.core.count(maxparams_10346) > (1)))?", ":null),restarg_10398,");"], 0));
} else {
var pcnt_10400 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_10397));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_10400,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_10396,".call(this",(((pcnt_10400 === (0)))?null:cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_10400,maxparams_10346))),",")),");"], 0));
}

var G__10401 = cljs.core.next(seq__10331_10389__$1);
var G__10402 = null;
var G__10403 = (0);
var G__10404 = (0);
seq__10331_10374 = G__10401;
chunk__10332_10375 = G__10402;
count__10333_10376 = G__10403;
i__10334_10377 = G__10404;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["throw(new Error('Invalid arity: ' + arguments.length));"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_10345,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_10345,".cljs$lang$applyTo = ",cljs.core.some(((function (name_10344__$1,mname_10345,maxparams_10346,mmap_10347,ms_10348,loop_locals,map__10322,map__10322__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__10320_SHARP_){
var vec__10337 = p1__10320_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10337,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10337,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_10344__$1,mname_10345,maxparams_10346,mmap_10347,ms_10348,loop_locals,map__10322,map__10322__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_10348),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__10338_10405 = cljs.core.seq(ms_10348);
var chunk__10339_10406 = null;
var count__10340_10407 = (0);
var i__10341_10408 = (0);
while(true){
if((i__10341_10408 < count__10340_10407)){
var vec__10342_10409 = chunk__10339_10406.cljs$core$IIndexed$_nth$arity$2(null,i__10341_10408);
var n_10410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10342_10409,(0),null);
var meth_10411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10342_10409,(1),null);
var c_10412 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_10411));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_10411))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_10345,".cljs$core$IFn$_invoke$arity$variadic = ",n_10410,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_10345,".cljs$core$IFn$_invoke$arity$",c_10412," = ",n_10410,";"], 0));
}

var G__10413 = seq__10338_10405;
var G__10414 = chunk__10339_10406;
var G__10415 = count__10340_10407;
var G__10416 = (i__10341_10408 + (1));
seq__10338_10405 = G__10413;
chunk__10339_10406 = G__10414;
count__10340_10407 = G__10415;
i__10341_10408 = G__10416;
continue;
} else {
var temp__4425__auto___10417 = cljs.core.seq(seq__10338_10405);
if(temp__4425__auto___10417){
var seq__10338_10418__$1 = temp__4425__auto___10417;
if(cljs.core.chunked_seq_QMARK_(seq__10338_10418__$1)){
var c__7258__auto___10419 = cljs.core.chunk_first(seq__10338_10418__$1);
var G__10420 = cljs.core.chunk_rest(seq__10338_10418__$1);
var G__10421 = c__7258__auto___10419;
var G__10422 = cljs.core.count(c__7258__auto___10419);
var G__10423 = (0);
seq__10338_10405 = G__10420;
chunk__10339_10406 = G__10421;
count__10340_10407 = G__10422;
i__10341_10408 = G__10423;
continue;
} else {
var vec__10343_10424 = cljs.core.first(seq__10338_10418__$1);
var n_10425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10343_10424,(0),null);
var meth_10426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10343_10424,(1),null);
var c_10427 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_10426));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_10426))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_10345,".cljs$core$IFn$_invoke$arity$variadic = ",n_10425,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_10345,".cljs$core$IFn$_invoke$arity$",c_10427," = ",n_10425,";"], 0));
}

var G__10428 = cljs.core.next(seq__10338_10418__$1);
var G__10429 = null;
var G__10430 = (0);
var G__10431 = (0);
seq__10338_10405 = G__10428;
chunk__10339_10406 = G__10429;
count__10340_10407 = G__10430;
i__10341_10408 = G__10431;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_10345,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__10432){
var map__10433 = p__10432;
var map__10433__$1 = ((((!((map__10433 == null)))?((((map__10433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10433):map__10433);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10433__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10433__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10433__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__6443__auto__ = statements;
if(cljs.core.truth_(and__6443__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__6443__auto__;
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__10435_10439 = cljs.core.seq(statements);
var chunk__10436_10440 = null;
var count__10437_10441 = (0);
var i__10438_10442 = (0);
while(true){
if((i__10438_10442 < count__10437_10441)){
var s_10443 = chunk__10436_10440.cljs$core$IIndexed$_nth$arity$2(null,i__10438_10442);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_10443], 0));

var G__10444 = seq__10435_10439;
var G__10445 = chunk__10436_10440;
var G__10446 = count__10437_10441;
var G__10447 = (i__10438_10442 + (1));
seq__10435_10439 = G__10444;
chunk__10436_10440 = G__10445;
count__10437_10441 = G__10446;
i__10438_10442 = G__10447;
continue;
} else {
var temp__4425__auto___10448 = cljs.core.seq(seq__10435_10439);
if(temp__4425__auto___10448){
var seq__10435_10449__$1 = temp__4425__auto___10448;
if(cljs.core.chunked_seq_QMARK_(seq__10435_10449__$1)){
var c__7258__auto___10450 = cljs.core.chunk_first(seq__10435_10449__$1);
var G__10451 = cljs.core.chunk_rest(seq__10435_10449__$1);
var G__10452 = c__7258__auto___10450;
var G__10453 = cljs.core.count(c__7258__auto___10450);
var G__10454 = (0);
seq__10435_10439 = G__10451;
chunk__10436_10440 = G__10452;
count__10437_10441 = G__10453;
i__10438_10442 = G__10454;
continue;
} else {
var s_10455 = cljs.core.first(seq__10435_10449__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_10455], 0));

var G__10456 = cljs.core.next(seq__10435_10449__$1);
var G__10457 = null;
var G__10458 = (0);
var G__10459 = (0);
seq__10435_10439 = G__10456;
chunk__10436_10440 = G__10457;
count__10437_10441 = G__10458;
i__10438_10442 = G__10459;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(cljs.core.truth_((function (){var and__6443__auto__ = statements;
if(cljs.core.truth_(and__6443__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__6443__auto__;
}
})())){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__10460){
var map__10461 = p__10460;
var map__10461__$1 = ((((!((map__10461 == null)))?((((map__10461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10461):map__10461);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10461__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10461__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10461__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10461__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10461__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__6455__auto__ = name;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["try{",try$,"}"], 0));

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}"], 0));
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Keyword(null,"constant","constant",-379609303),cljs.core.list(new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"finally","finally",-1065347064,null)))], 0)))].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["finally {",finally$,"}"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([try$], 0));
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__10463,is_loop){
var map__10475 = p__10463;
var map__10475__$1 = ((((!((map__10475 == null)))?((((map__10475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10475):map__10475);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10475__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10475__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10475__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_10477_10486 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_10477_10486,context,map__10475,map__10475__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_10477_10486,context,map__10475,map__10475__$1,bindings,expr,env))
,bindings):null));

try{var seq__10478_10487 = cljs.core.seq(bindings);
var chunk__10479_10488 = null;
var count__10480_10489 = (0);
var i__10481_10490 = (0);
while(true){
if((i__10481_10490 < count__10480_10489)){
var map__10482_10491 = chunk__10479_10488.cljs$core$IIndexed$_nth$arity$2(null,i__10481_10490);
var map__10482_10492__$1 = ((((!((map__10482_10491 == null)))?((((map__10482_10491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10482_10491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10482_10491):map__10482_10491);
var binding_10493 = map__10482_10492__$1;
var init_10494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10482_10492__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_10493);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_10494,";"], 0));

var G__10495 = seq__10478_10487;
var G__10496 = chunk__10479_10488;
var G__10497 = count__10480_10489;
var G__10498 = (i__10481_10490 + (1));
seq__10478_10487 = G__10495;
chunk__10479_10488 = G__10496;
count__10480_10489 = G__10497;
i__10481_10490 = G__10498;
continue;
} else {
var temp__4425__auto___10499 = cljs.core.seq(seq__10478_10487);
if(temp__4425__auto___10499){
var seq__10478_10500__$1 = temp__4425__auto___10499;
if(cljs.core.chunked_seq_QMARK_(seq__10478_10500__$1)){
var c__7258__auto___10501 = cljs.core.chunk_first(seq__10478_10500__$1);
var G__10502 = cljs.core.chunk_rest(seq__10478_10500__$1);
var G__10503 = c__7258__auto___10501;
var G__10504 = cljs.core.count(c__7258__auto___10501);
var G__10505 = (0);
seq__10478_10487 = G__10502;
chunk__10479_10488 = G__10503;
count__10480_10489 = G__10504;
i__10481_10490 = G__10505;
continue;
} else {
var map__10484_10506 = cljs.core.first(seq__10478_10500__$1);
var map__10484_10507__$1 = ((((!((map__10484_10506 == null)))?((((map__10484_10506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10484_10506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10484_10506):map__10484_10506);
var binding_10508 = map__10484_10507__$1;
var init_10509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10484_10507__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_10508);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_10509,";"], 0));

var G__10510 = cljs.core.next(seq__10478_10500__$1);
var G__10511 = null;
var G__10512 = (0);
var G__10513 = (0);
seq__10478_10487 = G__10510;
chunk__10479_10488 = G__10511;
count__10480_10489 = G__10512;
i__10481_10490 = G__10513;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_10477_10486;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__10514){
var map__10515 = p__10514;
var map__10515__$1 = ((((!((map__10515 == null)))?((((map__10515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10515):map__10515);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10515__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10515__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10515__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__7358__auto___10517 = cljs.core.count(exprs);
var i_10518 = (0);
while(true){
if((i_10518 < n__7358__auto___10517)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_10518) : temps.call(null,i_10518))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_10518) : exprs.call(null,i_10518)),";"], 0));

var G__10519 = (i_10518 + (1));
i_10518 = G__10519;
continue;
} else {
}
break;
}

var n__7358__auto___10520 = cljs.core.count(exprs);
var i_10521 = (0);
while(true){
if((i_10521 < n__7358__auto___10520)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_10521) : params.call(null,i_10521)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_10521) : temps.call(null,i_10521)),";"], 0));

var G__10522 = (i_10521 + (1));
i_10521 = G__10522;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__10523){
var map__10524 = p__10523;
var map__10524__$1 = ((((!((map__10524 == null)))?((((map__10524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10524):map__10524);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10524__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10524__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10524__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__10526_10534 = cljs.core.seq(bindings);
var chunk__10527_10535 = null;
var count__10528_10536 = (0);
var i__10529_10537 = (0);
while(true){
if((i__10529_10537 < count__10528_10536)){
var map__10530_10538 = chunk__10527_10535.cljs$core$IIndexed$_nth$arity$2(null,i__10529_10537);
var map__10530_10539__$1 = ((((!((map__10530_10538 == null)))?((((map__10530_10538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10530_10538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10530_10538):map__10530_10538);
var binding_10540 = map__10530_10539__$1;
var init_10541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10530_10539__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_10540)," = ",init_10541,";"], 0));

var G__10542 = seq__10526_10534;
var G__10543 = chunk__10527_10535;
var G__10544 = count__10528_10536;
var G__10545 = (i__10529_10537 + (1));
seq__10526_10534 = G__10542;
chunk__10527_10535 = G__10543;
count__10528_10536 = G__10544;
i__10529_10537 = G__10545;
continue;
} else {
var temp__4425__auto___10546 = cljs.core.seq(seq__10526_10534);
if(temp__4425__auto___10546){
var seq__10526_10547__$1 = temp__4425__auto___10546;
if(cljs.core.chunked_seq_QMARK_(seq__10526_10547__$1)){
var c__7258__auto___10548 = cljs.core.chunk_first(seq__10526_10547__$1);
var G__10549 = cljs.core.chunk_rest(seq__10526_10547__$1);
var G__10550 = c__7258__auto___10548;
var G__10551 = cljs.core.count(c__7258__auto___10548);
var G__10552 = (0);
seq__10526_10534 = G__10549;
chunk__10527_10535 = G__10550;
count__10528_10536 = G__10551;
i__10529_10537 = G__10552;
continue;
} else {
var map__10532_10553 = cljs.core.first(seq__10526_10547__$1);
var map__10532_10554__$1 = ((((!((map__10532_10553 == null)))?((((map__10532_10553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10532_10553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10532_10553):map__10532_10553);
var binding_10555 = map__10532_10554__$1;
var init_10556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10532_10554__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_10555)," = ",init_10556,";"], 0));

var G__10557 = cljs.core.next(seq__10526_10547__$1);
var G__10558 = null;
var G__10559 = (0);
var G__10560 = (0);
seq__10526_10534 = G__10557;
chunk__10527_10535 = G__10558;
count__10528_10536 = G__10559;
i__10529_10537 = G__10560;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__10563){
var map__10564 = p__10563;
var map__10564__$1 = ((((!((map__10564 == null)))?((((map__10564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10564):map__10564);
var expr = map__10564__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10564__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10564__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10564__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__6443__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__6443__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__6443__auto__ = protocol;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = tag;
if(cljs.core.truth_(and__6443__auto____$1)){
var or__6455__auto__ = (function (){var and__6443__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6443__auto____$2)){
var and__6443__auto____$3 = protocol;
if(cljs.core.truth_(and__6443__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__6443__auto____$3;
}
} else {
return and__6443__auto____$2;
}
})();
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
var and__6443__auto____$2 = (function (){var or__6455__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__6455__auto____$1)){
return or__6455__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__6443__auto____$2)){
var or__6455__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__6455__auto____$1){
return or__6455__auto____$1;
} else {
var and__6443__auto____$3 = !(cljs.core.set_QMARK_(tag));
if(and__6443__auto____$3){
var and__6443__auto____$4 = cljs.core.not(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__6443__auto____$4){
var temp__4425__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__6443__auto____$4;
}
} else {
return and__6443__auto____$3;
}
}
} else {
return and__6443__auto____$2;
}
}
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__6455__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__6455__auto__){
return or__6455__auto__;
} else {
var temp__4425__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4425__auto__)){
var ns_str = temp__4425__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__10566 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__6443__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__6443__auto__)){
return (arity > mfa);
} else {
return and__6443__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10564,map__10564__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10564,map__10564__$1,expr,f,args,env){
return (function (p1__10561_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__10561_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10564,map__10564__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10564,map__10564__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10564,map__10564__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10564,map__10564__$1,expr,f,args,env){
return (function (p1__10562_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__10562_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10564,map__10564__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10564,map__10564__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10566,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10566,(1),null);
var env__9710__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_10567 = [cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(args),".",pimpl_10567,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_10568 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_10568,args)),(((mfa_10568 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_10568,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__6455__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
var or__6455__auto____$1 = js_QMARK_;
if(or__6455__auto____$1){
return or__6455__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_((function (){var and__6443__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6443__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__6443__auto__;
}
})())){
var fprop_10569 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",f__$1,fprop_10569," ? ",f__$1,fprop_10569,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__10570){
var map__10571 = p__10570;
var map__10571__$1 = ((((!((map__10571 == null)))?((((map__10571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10571):map__10571);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10571__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10571__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10571__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9710__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__10573){
var map__10574 = p__10573;
var map__10574__$1 = ((((!((map__10574 == null)))?((((map__10574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10574):map__10574);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10574__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10574__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10574__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9710__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs," = cljs.core.set();"], 0));
} else {
}

var seq__10580_10584 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(libs))));
var chunk__10581_10585 = null;
var count__10582_10586 = (0);
var i__10583_10587 = (0);
while(true){
if((i__10583_10587 < count__10582_10586)){
var lib_10588 = chunk__10581_10585.cljs$core$IIndexed$_nth$arity$2(null,i__10583_10587);
if(cljs.core.truth_((function (){var or__6455__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_10588),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_10588),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__6455__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_10588),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_10588),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_10588),"');"], 0));

}
}

var G__10589 = seq__10580_10584;
var G__10590 = chunk__10581_10585;
var G__10591 = count__10582_10586;
var G__10592 = (i__10583_10587 + (1));
seq__10580_10584 = G__10589;
chunk__10581_10585 = G__10590;
count__10582_10586 = G__10591;
i__10583_10587 = G__10592;
continue;
} else {
var temp__4425__auto___10593 = cljs.core.seq(seq__10580_10584);
if(temp__4425__auto___10593){
var seq__10580_10594__$1 = temp__4425__auto___10593;
if(cljs.core.chunked_seq_QMARK_(seq__10580_10594__$1)){
var c__7258__auto___10595 = cljs.core.chunk_first(seq__10580_10594__$1);
var G__10596 = cljs.core.chunk_rest(seq__10580_10594__$1);
var G__10597 = c__7258__auto___10595;
var G__10598 = cljs.core.count(c__7258__auto___10595);
var G__10599 = (0);
seq__10580_10584 = G__10596;
chunk__10581_10585 = G__10597;
count__10582_10586 = G__10598;
i__10583_10587 = G__10599;
continue;
} else {
var lib_10600 = cljs.core.first(seq__10580_10594__$1);
if(cljs.core.truth_((function (){var or__6455__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_10600),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_10600),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__6455__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_10600),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_10600),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_10600),"');"], 0));

}
}

var G__10601 = cljs.core.next(seq__10580_10594__$1);
var G__10602 = null;
var G__10603 = (0);
var G__10604 = (0);
seq__10580_10584 = G__10601;
chunk__10581_10585 = G__10602;
count__10582_10586 = G__10603;
i__10583_10587 = G__10604;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__10605){
var map__10606 = p__10605;
var map__10606__$1 = ((((!((map__10606 == null)))?((((map__10606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10606):map__10606);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10606__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10606__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10606__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10606__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10606__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10606__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('cljs.core');"], 0));
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__10608){
var map__10609 = p__10608;
var map__10609__$1 = ((((!((map__10609 == null)))?((((map__10609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10609):map__10609);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10609__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10609__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10609__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10609__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10609__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

var seq__10611_10625 = cljs.core.seq(protocols);
var chunk__10612_10626 = null;
var count__10613_10627 = (0);
var i__10614_10628 = (0);
while(true){
if((i__10614_10628 < count__10613_10627)){
var protocol_10629 = chunk__10612_10626.cljs$core$IIndexed$_nth$arity$2(null,i__10614_10628);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(protocol_10629)].join('')),"}"], 0));

var G__10630 = seq__10611_10625;
var G__10631 = chunk__10612_10626;
var G__10632 = count__10613_10627;
var G__10633 = (i__10614_10628 + (1));
seq__10611_10625 = G__10630;
chunk__10612_10626 = G__10631;
count__10613_10627 = G__10632;
i__10614_10628 = G__10633;
continue;
} else {
var temp__4425__auto___10634 = cljs.core.seq(seq__10611_10625);
if(temp__4425__auto___10634){
var seq__10611_10635__$1 = temp__4425__auto___10634;
if(cljs.core.chunked_seq_QMARK_(seq__10611_10635__$1)){
var c__7258__auto___10636 = cljs.core.chunk_first(seq__10611_10635__$1);
var G__10637 = cljs.core.chunk_rest(seq__10611_10635__$1);
var G__10638 = c__7258__auto___10636;
var G__10639 = cljs.core.count(c__7258__auto___10636);
var G__10640 = (0);
seq__10611_10625 = G__10637;
chunk__10612_10626 = G__10638;
count__10613_10627 = G__10639;
i__10614_10628 = G__10640;
continue;
} else {
var protocol_10641 = cljs.core.first(seq__10611_10635__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(protocol_10641)].join('')),"}"], 0));

var G__10642 = cljs.core.next(seq__10611_10635__$1);
var G__10643 = null;
var G__10644 = (0);
var G__10645 = (0);
seq__10611_10625 = G__10642;
chunk__10612_10626 = G__10643;
count__10613_10627 = G__10644;
i__10614_10628 = G__10645;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__10615_10646 = cljs.core.seq(fields__$1);
var chunk__10616_10647 = null;
var count__10617_10648 = (0);
var i__10618_10649 = (0);
while(true){
if((i__10618_10649 < count__10617_10648)){
var fld_10650 = chunk__10616_10647.cljs$core$IIndexed$_nth$arity$2(null,i__10618_10649);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_10650," = ",fld_10650,";"], 0));

var G__10651 = seq__10615_10646;
var G__10652 = chunk__10616_10647;
var G__10653 = count__10617_10648;
var G__10654 = (i__10618_10649 + (1));
seq__10615_10646 = G__10651;
chunk__10616_10647 = G__10652;
count__10617_10648 = G__10653;
i__10618_10649 = G__10654;
continue;
} else {
var temp__4425__auto___10655 = cljs.core.seq(seq__10615_10646);
if(temp__4425__auto___10655){
var seq__10615_10656__$1 = temp__4425__auto___10655;
if(cljs.core.chunked_seq_QMARK_(seq__10615_10656__$1)){
var c__7258__auto___10657 = cljs.core.chunk_first(seq__10615_10656__$1);
var G__10658 = cljs.core.chunk_rest(seq__10615_10656__$1);
var G__10659 = c__7258__auto___10657;
var G__10660 = cljs.core.count(c__7258__auto___10657);
var G__10661 = (0);
seq__10615_10646 = G__10658;
chunk__10616_10647 = G__10659;
count__10617_10648 = G__10660;
i__10618_10649 = G__10661;
continue;
} else {
var fld_10662 = cljs.core.first(seq__10615_10656__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_10662," = ",fld_10662,";"], 0));

var G__10663 = cljs.core.next(seq__10615_10656__$1);
var G__10664 = null;
var G__10665 = (0);
var G__10666 = (0);
seq__10615_10646 = G__10663;
chunk__10616_10647 = G__10664;
count__10617_10648 = G__10665;
i__10618_10649 = G__10666;
continue;
}
} else {
}
}
break;
}

var seq__10619_10667 = cljs.core.seq(pmasks);
var chunk__10620_10668 = null;
var count__10621_10669 = (0);
var i__10622_10670 = (0);
while(true){
if((i__10622_10670 < count__10621_10669)){
var vec__10623_10671 = chunk__10620_10668.cljs$core$IIndexed$_nth$arity$2(null,i__10622_10670);
var pno_10672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10623_10671,(0),null);
var pmask_10673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10623_10671,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_10672,"$ = ",pmask_10673,";"], 0));

var G__10674 = seq__10619_10667;
var G__10675 = chunk__10620_10668;
var G__10676 = count__10621_10669;
var G__10677 = (i__10622_10670 + (1));
seq__10619_10667 = G__10674;
chunk__10620_10668 = G__10675;
count__10621_10669 = G__10676;
i__10622_10670 = G__10677;
continue;
} else {
var temp__4425__auto___10678 = cljs.core.seq(seq__10619_10667);
if(temp__4425__auto___10678){
var seq__10619_10679__$1 = temp__4425__auto___10678;
if(cljs.core.chunked_seq_QMARK_(seq__10619_10679__$1)){
var c__7258__auto___10680 = cljs.core.chunk_first(seq__10619_10679__$1);
var G__10681 = cljs.core.chunk_rest(seq__10619_10679__$1);
var G__10682 = c__7258__auto___10680;
var G__10683 = cljs.core.count(c__7258__auto___10680);
var G__10684 = (0);
seq__10619_10667 = G__10681;
chunk__10620_10668 = G__10682;
count__10621_10669 = G__10683;
i__10622_10670 = G__10684;
continue;
} else {
var vec__10624_10685 = cljs.core.first(seq__10619_10679__$1);
var pno_10686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10624_10685,(0),null);
var pmask_10687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10624_10685,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_10686,"$ = ",pmask_10687,";"], 0));

var G__10688 = cljs.core.next(seq__10619_10679__$1);
var G__10689 = null;
var G__10690 = (0);
var G__10691 = (0);
seq__10619_10667 = G__10688;
chunk__10620_10668 = G__10689;
count__10621_10669 = G__10690;
i__10622_10670 = G__10691;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__10692){
var map__10693 = p__10692;
var map__10693__$1 = ((((!((map__10693 == null)))?((((map__10693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10693):map__10693);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10693__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10693__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10693__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10693__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10693__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

var seq__10695_10709 = cljs.core.seq(protocols);
var chunk__10696_10710 = null;
var count__10697_10711 = (0);
var i__10698_10712 = (0);
while(true){
if((i__10698_10712 < count__10697_10711)){
var protocol_10713 = chunk__10696_10710.cljs$core$IIndexed$_nth$arity$2(null,i__10698_10712);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(protocol_10713)].join('')),"}"], 0));

var G__10714 = seq__10695_10709;
var G__10715 = chunk__10696_10710;
var G__10716 = count__10697_10711;
var G__10717 = (i__10698_10712 + (1));
seq__10695_10709 = G__10714;
chunk__10696_10710 = G__10715;
count__10697_10711 = G__10716;
i__10698_10712 = G__10717;
continue;
} else {
var temp__4425__auto___10718 = cljs.core.seq(seq__10695_10709);
if(temp__4425__auto___10718){
var seq__10695_10719__$1 = temp__4425__auto___10718;
if(cljs.core.chunked_seq_QMARK_(seq__10695_10719__$1)){
var c__7258__auto___10720 = cljs.core.chunk_first(seq__10695_10719__$1);
var G__10721 = cljs.core.chunk_rest(seq__10695_10719__$1);
var G__10722 = c__7258__auto___10720;
var G__10723 = cljs.core.count(c__7258__auto___10720);
var G__10724 = (0);
seq__10695_10709 = G__10721;
chunk__10696_10710 = G__10722;
count__10697_10711 = G__10723;
i__10698_10712 = G__10724;
continue;
} else {
var protocol_10725 = cljs.core.first(seq__10695_10719__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(protocol_10725)].join('')),"}"], 0));

var G__10726 = cljs.core.next(seq__10695_10719__$1);
var G__10727 = null;
var G__10728 = (0);
var G__10729 = (0);
seq__10695_10709 = G__10726;
chunk__10696_10710 = G__10727;
count__10697_10711 = G__10728;
i__10698_10712 = G__10729;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__10699_10730 = cljs.core.seq(fields__$1);
var chunk__10700_10731 = null;
var count__10701_10732 = (0);
var i__10702_10733 = (0);
while(true){
if((i__10702_10733 < count__10701_10732)){
var fld_10734 = chunk__10700_10731.cljs$core$IIndexed$_nth$arity$2(null,i__10702_10733);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_10734," = ",fld_10734,";"], 0));

var G__10735 = seq__10699_10730;
var G__10736 = chunk__10700_10731;
var G__10737 = count__10701_10732;
var G__10738 = (i__10702_10733 + (1));
seq__10699_10730 = G__10735;
chunk__10700_10731 = G__10736;
count__10701_10732 = G__10737;
i__10702_10733 = G__10738;
continue;
} else {
var temp__4425__auto___10739 = cljs.core.seq(seq__10699_10730);
if(temp__4425__auto___10739){
var seq__10699_10740__$1 = temp__4425__auto___10739;
if(cljs.core.chunked_seq_QMARK_(seq__10699_10740__$1)){
var c__7258__auto___10741 = cljs.core.chunk_first(seq__10699_10740__$1);
var G__10742 = cljs.core.chunk_rest(seq__10699_10740__$1);
var G__10743 = c__7258__auto___10741;
var G__10744 = cljs.core.count(c__7258__auto___10741);
var G__10745 = (0);
seq__10699_10730 = G__10742;
chunk__10700_10731 = G__10743;
count__10701_10732 = G__10744;
i__10702_10733 = G__10745;
continue;
} else {
var fld_10746 = cljs.core.first(seq__10699_10740__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_10746," = ",fld_10746,";"], 0));

var G__10747 = cljs.core.next(seq__10699_10740__$1);
var G__10748 = null;
var G__10749 = (0);
var G__10750 = (0);
seq__10699_10730 = G__10747;
chunk__10700_10731 = G__10748;
count__10701_10732 = G__10749;
i__10702_10733 = G__10750;
continue;
}
} else {
}
}
break;
}

var seq__10703_10751 = cljs.core.seq(pmasks);
var chunk__10704_10752 = null;
var count__10705_10753 = (0);
var i__10706_10754 = (0);
while(true){
if((i__10706_10754 < count__10705_10753)){
var vec__10707_10755 = chunk__10704_10752.cljs$core$IIndexed$_nth$arity$2(null,i__10706_10754);
var pno_10756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10707_10755,(0),null);
var pmask_10757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10707_10755,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_10756,"$ = ",pmask_10757,";"], 0));

var G__10758 = seq__10703_10751;
var G__10759 = chunk__10704_10752;
var G__10760 = count__10705_10753;
var G__10761 = (i__10706_10754 + (1));
seq__10703_10751 = G__10758;
chunk__10704_10752 = G__10759;
count__10705_10753 = G__10760;
i__10706_10754 = G__10761;
continue;
} else {
var temp__4425__auto___10762 = cljs.core.seq(seq__10703_10751);
if(temp__4425__auto___10762){
var seq__10703_10763__$1 = temp__4425__auto___10762;
if(cljs.core.chunked_seq_QMARK_(seq__10703_10763__$1)){
var c__7258__auto___10764 = cljs.core.chunk_first(seq__10703_10763__$1);
var G__10765 = cljs.core.chunk_rest(seq__10703_10763__$1);
var G__10766 = c__7258__auto___10764;
var G__10767 = cljs.core.count(c__7258__auto___10764);
var G__10768 = (0);
seq__10703_10751 = G__10765;
chunk__10704_10752 = G__10766;
count__10705_10753 = G__10767;
i__10706_10754 = G__10768;
continue;
} else {
var vec__10708_10769 = cljs.core.first(seq__10703_10763__$1);
var pno_10770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10708_10769,(0),null);
var pmask_10771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10708_10769,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_10770,"$ = ",pmask_10771,";"], 0));

var G__10772 = cljs.core.next(seq__10703_10763__$1);
var G__10773 = null;
var G__10774 = (0);
var G__10775 = (0);
seq__10703_10751 = G__10772;
chunk__10704_10752 = G__10773;
count__10705_10753 = G__10774;
i__10706_10754 = G__10775;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__10776){
var map__10777 = p__10776;
var map__10777__$1 = ((((!((map__10777 == null)))?((((map__10777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10777):map__10777);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10777__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10777__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10777__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10777__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10777__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9710__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__10779){
var map__10780 = p__10779;
var map__10780__$1 = ((((!((map__10780 == null)))?((((map__10780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10780):map__10780);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10780__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10780__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10780__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10780__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10780__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__6443__auto__ = code;
if(cljs.core.truth_(and__6443__auto__)){
var G__10782 = clojure.string.trim(code);
var G__10783 = "/*";
return goog.string.startsWith(G__10782,G__10783);
} else {
return and__6443__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([code], 0));
} else {
var env__9710__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9710__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__10792 = cljs.core.seq(table);
var chunk__10793 = null;
var count__10794 = (0);
var i__10795 = (0);
while(true){
if((i__10795 < count__10794)){
var vec__10796 = chunk__10793.cljs$core$IIndexed$_nth$arity$2(null,i__10795);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10796,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10796,(1),null);
var ns_10798 = cljs.core.namespace(sym);
var name_10799 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__10800 = seq__10792;
var G__10801 = chunk__10793;
var G__10802 = count__10794;
var G__10803 = (i__10795 + (1));
seq__10792 = G__10800;
chunk__10793 = G__10801;
count__10794 = G__10802;
i__10795 = G__10803;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10792);
if(temp__4425__auto__){
var seq__10792__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10792__$1)){
var c__7258__auto__ = cljs.core.chunk_first(seq__10792__$1);
var G__10804 = cljs.core.chunk_rest(seq__10792__$1);
var G__10805 = c__7258__auto__;
var G__10806 = cljs.core.count(c__7258__auto__);
var G__10807 = (0);
seq__10792 = G__10804;
chunk__10793 = G__10805;
count__10794 = G__10806;
i__10795 = G__10807;
continue;
} else {
var vec__10797 = cljs.core.first(seq__10792__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10797,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10797,(1),null);
var ns_10808 = cljs.core.namespace(sym);
var name_10809 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__10810 = cljs.core.next(seq__10792__$1);
var G__10811 = null;
var G__10812 = (0);
var G__10813 = (0);
seq__10792 = G__10810;
chunk__10793 = G__10811;
count__10794 = G__10812;
i__10795 = G__10813;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map