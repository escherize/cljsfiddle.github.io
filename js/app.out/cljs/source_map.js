// Compiled by ClojureScript 1.7.228 {:static-fns true}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__9019){
var vec__9020 = p__9019;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9020,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9020,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__9022 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9022,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9022,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9022,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9022,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9022,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__4425__auto__)){
var name__$1 = temp__4425__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__9025 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9025,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9025,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9025,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9025,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9025,(4),null);
var vec__9026 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9026,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9026,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9026,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9026,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9026,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__6455__auto__ = source;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__6455__auto__ = line;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__6455__auto__ = col;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__6455__auto__ = name;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__9029 = segmap;
var map__9029__$1 = ((((!((map__9029 == null)))?((((map__9029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9029):map__9029);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9029__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9029__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9029__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9029__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9029__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__9029,map__9029__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__9029,map__9029__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__9029,map__9029__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__9029,map__9029__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__9029,map__9029__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__9029,map__9029__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args9031 = [];
var len__7513__auto___9035 = arguments.length;
var i__7514__auto___9036 = (0);
while(true){
if((i__7514__auto___9036 < len__7513__auto___9035)){
args9031.push((arguments[i__7514__auto___9036]));

var G__9037 = (i__7514__auto___9036 + (1));
i__7514__auto___9036 = G__9037;
continue;
} else {
}
break;
}

var G__9033 = args9031.length;
switch (G__9033) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9031.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__9034 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__9039 = cljs.core.next(segs__$1);
var G__9040 = nrelseg;
var G__9041 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__9039;
relseg__$1 = G__9040;
result__$1 = G__9041;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9034,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9034,(1),null);
var G__9042 = (gline + (1));
var G__9043 = cljs.core.next(lines__$1);
var G__9044 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__9045 = result__$1;
gline = G__9042;
lines__$1 = G__9043;
relseg = G__9044;
result = G__9045;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;
/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__9049 = segmap;
var map__9049__$1 = ((((!((map__9049 == null)))?((((map__9049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9049):map__9049);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9049__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9049__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9049__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9049__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9049__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__9049,map__9049__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__9049,map__9049__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__9046_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__9046_SHARP_,d__$1);
});})(map__9049,map__9049__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__9049,map__9049__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args9051 = [];
var len__7513__auto___9055 = arguments.length;
var i__7514__auto___9056 = (0);
while(true){
if((i__7514__auto___9056 < len__7513__auto___9055)){
args9051.push((arguments[i__7514__auto___9056]));

var G__9057 = (i__7514__auto___9056 + (1));
i__7514__auto___9056 = G__9057;
continue;
} else {
}
break;
}

var G__9053 = args9051.length;
switch (G__9053) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9051.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__9054 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__9059 = cljs.core.next(segs__$1);
var G__9060 = nrelseg;
var G__9061 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__9059;
relseg__$1 = G__9060;
result__$1 = G__9061;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9054,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9054,(1),null);
var G__9062 = (gline + (1));
var G__9063 = cljs.core.next(lines__$1);
var G__9064 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__9065 = result__$1;
gline = G__9062;
lines__$1 = G__9063;
relseg = G__9064;
result = G__9065;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;
/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = (function (){var G__9073 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9073) : cljs.core.atom.call(null,G__9073));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (relseg){
return (function (p__9074){
var vec__9075 = p__9074;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9075,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9075,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9075,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9075,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9075,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__9076){
var vec__9077 = p__9076;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9077,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9077,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9077,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9077,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9077,(4),null);
var seg = vec__9077;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(relseg) : cljs.core.deref.call(null,relseg)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__9077,gcol,sidx,line,col,name,seg,relseg){
return (function (p__9078){
var vec__9079 = p__9078;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9079,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9079,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9079,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9079,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9079,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__6455__auto__ = name;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__9077,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = (function (){var G__9138 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9138) : cljs.core.atom.call(null,G__9138));
})();
var names__GT_idx = (function (){var G__9139 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9139) : cljs.core.atom.call(null,G__9139));
})();
var name_idx = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__6455__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4423__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
var idx = (function (){var temp__4423__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx)),name);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return idx;
} else {
var cidx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(name_idx) : cljs.core.deref.call(null,name_idx));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__9140 = cljs.core.seq(infos);
var chunk__9141 = null;
var count__9142 = (0);
var i__9143 = (0);
while(true){
if((i__9143 < count__9142)){
var info = chunk__9141.cljs$core$IIndexed$_nth$arity$2(null,i__9143);
var segv_9193 = info__GT_segv(info,source_idx,line,col);
var gline_9194 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_9195 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)));
if((gline_9194 > (lc_9195 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__9140,chunk__9141,count__9142,i__9143,segv_9193,gline_9194,lc_9195,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_9194 - (lc_9195 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_9193], null));
});})(seq__9140,chunk__9141,count__9142,i__9143,segv_9193,gline_9194,lc_9195,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__9140,chunk__9141,count__9142,i__9143,segv_9193,gline_9194,lc_9195,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9194], null),cljs.core.conj,segv_9193);
});})(seq__9140,chunk__9141,count__9142,i__9143,segv_9193,gline_9194,lc_9195,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__9196 = seq__9140;
var G__9197 = chunk__9141;
var G__9198 = count__9142;
var G__9199 = (i__9143 + (1));
seq__9140 = G__9196;
chunk__9141 = G__9197;
count__9142 = G__9198;
i__9143 = G__9199;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9140);
if(temp__4425__auto__){
var seq__9140__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9140__$1)){
var c__7258__auto__ = cljs.core.chunk_first(seq__9140__$1);
var G__9200 = cljs.core.chunk_rest(seq__9140__$1);
var G__9201 = c__7258__auto__;
var G__9202 = cljs.core.count(c__7258__auto__);
var G__9203 = (0);
seq__9140 = G__9200;
chunk__9141 = G__9201;
count__9142 = G__9202;
i__9143 = G__9203;
continue;
} else {
var info = cljs.core.first(seq__9140__$1);
var segv_9204 = info__GT_segv(info,source_idx,line,col);
var gline_9205 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_9206 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)));
if((gline_9205 > (lc_9206 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__9140,chunk__9141,count__9142,i__9143,segv_9204,gline_9205,lc_9206,info,seq__9140__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_9205 - (lc_9206 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_9204], null));
});})(seq__9140,chunk__9141,count__9142,i__9143,segv_9204,gline_9205,lc_9206,info,seq__9140__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__9140,chunk__9141,count__9142,i__9143,segv_9204,gline_9205,lc_9206,info,seq__9140__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9205], null),cljs.core.conj,segv_9204);
});})(seq__9140,chunk__9141,count__9142,i__9143,segv_9204,gline_9205,lc_9206,info,seq__9140__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__9207 = cljs.core.next(seq__9140__$1);
var G__9208 = null;
var G__9209 = (0);
var G__9210 = (0);
seq__9140 = G__9207;
chunk__9141 = G__9208;
count__9142 = G__9209;
i__9143 = G__9210;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__9144_9211 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__9145_9212 = null;
var count__9146_9213 = (0);
var i__9147_9214 = (0);
while(true){
if((i__9147_9214 < count__9146_9213)){
var vec__9148_9215 = chunk__9145_9212.cljs$core$IIndexed$_nth$arity$2(null,i__9147_9214);
var source_idx_9216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9148_9215,(0),null);
var vec__9149_9217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9148_9215,(1),null);
var __9218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9149_9217,(0),null);
var lines_9219__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9149_9217,(1),null);
var seq__9150_9220 = cljs.core.seq(lines_9219__$1);
var chunk__9151_9221 = null;
var count__9152_9222 = (0);
var i__9153_9223 = (0);
while(true){
if((i__9153_9223 < count__9152_9222)){
var vec__9154_9224 = chunk__9151_9221.cljs$core$IIndexed$_nth$arity$2(null,i__9153_9223);
var line_9225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9154_9224,(0),null);
var cols_9226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9154_9224,(1),null);
var seq__9155_9227 = cljs.core.seq(cols_9226);
var chunk__9156_9228 = null;
var count__9157_9229 = (0);
var i__9158_9230 = (0);
while(true){
if((i__9158_9230 < count__9157_9229)){
var vec__9159_9231 = chunk__9156_9228.cljs$core$IIndexed$_nth$arity$2(null,i__9158_9230);
var col_9232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9159_9231,(0),null);
var infos_9233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9159_9231,(1),null);
encode_cols(infos_9233,source_idx_9216,line_9225,col_9232);

var G__9234 = seq__9155_9227;
var G__9235 = chunk__9156_9228;
var G__9236 = count__9157_9229;
var G__9237 = (i__9158_9230 + (1));
seq__9155_9227 = G__9234;
chunk__9156_9228 = G__9235;
count__9157_9229 = G__9236;
i__9158_9230 = G__9237;
continue;
} else {
var temp__4425__auto___9238 = cljs.core.seq(seq__9155_9227);
if(temp__4425__auto___9238){
var seq__9155_9239__$1 = temp__4425__auto___9238;
if(cljs.core.chunked_seq_QMARK_(seq__9155_9239__$1)){
var c__7258__auto___9240 = cljs.core.chunk_first(seq__9155_9239__$1);
var G__9241 = cljs.core.chunk_rest(seq__9155_9239__$1);
var G__9242 = c__7258__auto___9240;
var G__9243 = cljs.core.count(c__7258__auto___9240);
var G__9244 = (0);
seq__9155_9227 = G__9241;
chunk__9156_9228 = G__9242;
count__9157_9229 = G__9243;
i__9158_9230 = G__9244;
continue;
} else {
var vec__9160_9245 = cljs.core.first(seq__9155_9239__$1);
var col_9246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9160_9245,(0),null);
var infos_9247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9160_9245,(1),null);
encode_cols(infos_9247,source_idx_9216,line_9225,col_9246);

var G__9248 = cljs.core.next(seq__9155_9239__$1);
var G__9249 = null;
var G__9250 = (0);
var G__9251 = (0);
seq__9155_9227 = G__9248;
chunk__9156_9228 = G__9249;
count__9157_9229 = G__9250;
i__9158_9230 = G__9251;
continue;
}
} else {
}
}
break;
}

var G__9252 = seq__9150_9220;
var G__9253 = chunk__9151_9221;
var G__9254 = count__9152_9222;
var G__9255 = (i__9153_9223 + (1));
seq__9150_9220 = G__9252;
chunk__9151_9221 = G__9253;
count__9152_9222 = G__9254;
i__9153_9223 = G__9255;
continue;
} else {
var temp__4425__auto___9256 = cljs.core.seq(seq__9150_9220);
if(temp__4425__auto___9256){
var seq__9150_9257__$1 = temp__4425__auto___9256;
if(cljs.core.chunked_seq_QMARK_(seq__9150_9257__$1)){
var c__7258__auto___9258 = cljs.core.chunk_first(seq__9150_9257__$1);
var G__9259 = cljs.core.chunk_rest(seq__9150_9257__$1);
var G__9260 = c__7258__auto___9258;
var G__9261 = cljs.core.count(c__7258__auto___9258);
var G__9262 = (0);
seq__9150_9220 = G__9259;
chunk__9151_9221 = G__9260;
count__9152_9222 = G__9261;
i__9153_9223 = G__9262;
continue;
} else {
var vec__9161_9263 = cljs.core.first(seq__9150_9257__$1);
var line_9264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9161_9263,(0),null);
var cols_9265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9161_9263,(1),null);
var seq__9162_9266 = cljs.core.seq(cols_9265);
var chunk__9163_9267 = null;
var count__9164_9268 = (0);
var i__9165_9269 = (0);
while(true){
if((i__9165_9269 < count__9164_9268)){
var vec__9166_9270 = chunk__9163_9267.cljs$core$IIndexed$_nth$arity$2(null,i__9165_9269);
var col_9271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9166_9270,(0),null);
var infos_9272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9166_9270,(1),null);
encode_cols(infos_9272,source_idx_9216,line_9264,col_9271);

var G__9273 = seq__9162_9266;
var G__9274 = chunk__9163_9267;
var G__9275 = count__9164_9268;
var G__9276 = (i__9165_9269 + (1));
seq__9162_9266 = G__9273;
chunk__9163_9267 = G__9274;
count__9164_9268 = G__9275;
i__9165_9269 = G__9276;
continue;
} else {
var temp__4425__auto___9277__$1 = cljs.core.seq(seq__9162_9266);
if(temp__4425__auto___9277__$1){
var seq__9162_9278__$1 = temp__4425__auto___9277__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9162_9278__$1)){
var c__7258__auto___9279 = cljs.core.chunk_first(seq__9162_9278__$1);
var G__9280 = cljs.core.chunk_rest(seq__9162_9278__$1);
var G__9281 = c__7258__auto___9279;
var G__9282 = cljs.core.count(c__7258__auto___9279);
var G__9283 = (0);
seq__9162_9266 = G__9280;
chunk__9163_9267 = G__9281;
count__9164_9268 = G__9282;
i__9165_9269 = G__9283;
continue;
} else {
var vec__9167_9284 = cljs.core.first(seq__9162_9278__$1);
var col_9285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9167_9284,(0),null);
var infos_9286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9167_9284,(1),null);
encode_cols(infos_9286,source_idx_9216,line_9264,col_9285);

var G__9287 = cljs.core.next(seq__9162_9278__$1);
var G__9288 = null;
var G__9289 = (0);
var G__9290 = (0);
seq__9162_9266 = G__9287;
chunk__9163_9267 = G__9288;
count__9164_9268 = G__9289;
i__9165_9269 = G__9290;
continue;
}
} else {
}
}
break;
}

var G__9291 = cljs.core.next(seq__9150_9257__$1);
var G__9292 = null;
var G__9293 = (0);
var G__9294 = (0);
seq__9150_9220 = G__9291;
chunk__9151_9221 = G__9292;
count__9152_9222 = G__9293;
i__9153_9223 = G__9294;
continue;
}
} else {
}
}
break;
}

var G__9295 = seq__9144_9211;
var G__9296 = chunk__9145_9212;
var G__9297 = count__9146_9213;
var G__9298 = (i__9147_9214 + (1));
seq__9144_9211 = G__9295;
chunk__9145_9212 = G__9296;
count__9146_9213 = G__9297;
i__9147_9214 = G__9298;
continue;
} else {
var temp__4425__auto___9299 = cljs.core.seq(seq__9144_9211);
if(temp__4425__auto___9299){
var seq__9144_9300__$1 = temp__4425__auto___9299;
if(cljs.core.chunked_seq_QMARK_(seq__9144_9300__$1)){
var c__7258__auto___9301 = cljs.core.chunk_first(seq__9144_9300__$1);
var G__9302 = cljs.core.chunk_rest(seq__9144_9300__$1);
var G__9303 = c__7258__auto___9301;
var G__9304 = cljs.core.count(c__7258__auto___9301);
var G__9305 = (0);
seq__9144_9211 = G__9302;
chunk__9145_9212 = G__9303;
count__9146_9213 = G__9304;
i__9147_9214 = G__9305;
continue;
} else {
var vec__9168_9306 = cljs.core.first(seq__9144_9300__$1);
var source_idx_9307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9168_9306,(0),null);
var vec__9169_9308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9168_9306,(1),null);
var __9309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9169_9308,(0),null);
var lines_9310__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9169_9308,(1),null);
var seq__9170_9311 = cljs.core.seq(lines_9310__$1);
var chunk__9171_9312 = null;
var count__9172_9313 = (0);
var i__9173_9314 = (0);
while(true){
if((i__9173_9314 < count__9172_9313)){
var vec__9174_9315 = chunk__9171_9312.cljs$core$IIndexed$_nth$arity$2(null,i__9173_9314);
var line_9316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9174_9315,(0),null);
var cols_9317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9174_9315,(1),null);
var seq__9175_9318 = cljs.core.seq(cols_9317);
var chunk__9176_9319 = null;
var count__9177_9320 = (0);
var i__9178_9321 = (0);
while(true){
if((i__9178_9321 < count__9177_9320)){
var vec__9179_9322 = chunk__9176_9319.cljs$core$IIndexed$_nth$arity$2(null,i__9178_9321);
var col_9323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9179_9322,(0),null);
var infos_9324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9179_9322,(1),null);
encode_cols(infos_9324,source_idx_9307,line_9316,col_9323);

var G__9325 = seq__9175_9318;
var G__9326 = chunk__9176_9319;
var G__9327 = count__9177_9320;
var G__9328 = (i__9178_9321 + (1));
seq__9175_9318 = G__9325;
chunk__9176_9319 = G__9326;
count__9177_9320 = G__9327;
i__9178_9321 = G__9328;
continue;
} else {
var temp__4425__auto___9329__$1 = cljs.core.seq(seq__9175_9318);
if(temp__4425__auto___9329__$1){
var seq__9175_9330__$1 = temp__4425__auto___9329__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9175_9330__$1)){
var c__7258__auto___9331 = cljs.core.chunk_first(seq__9175_9330__$1);
var G__9332 = cljs.core.chunk_rest(seq__9175_9330__$1);
var G__9333 = c__7258__auto___9331;
var G__9334 = cljs.core.count(c__7258__auto___9331);
var G__9335 = (0);
seq__9175_9318 = G__9332;
chunk__9176_9319 = G__9333;
count__9177_9320 = G__9334;
i__9178_9321 = G__9335;
continue;
} else {
var vec__9180_9336 = cljs.core.first(seq__9175_9330__$1);
var col_9337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9180_9336,(0),null);
var infos_9338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9180_9336,(1),null);
encode_cols(infos_9338,source_idx_9307,line_9316,col_9337);

var G__9339 = cljs.core.next(seq__9175_9330__$1);
var G__9340 = null;
var G__9341 = (0);
var G__9342 = (0);
seq__9175_9318 = G__9339;
chunk__9176_9319 = G__9340;
count__9177_9320 = G__9341;
i__9178_9321 = G__9342;
continue;
}
} else {
}
}
break;
}

var G__9343 = seq__9170_9311;
var G__9344 = chunk__9171_9312;
var G__9345 = count__9172_9313;
var G__9346 = (i__9173_9314 + (1));
seq__9170_9311 = G__9343;
chunk__9171_9312 = G__9344;
count__9172_9313 = G__9345;
i__9173_9314 = G__9346;
continue;
} else {
var temp__4425__auto___9347__$1 = cljs.core.seq(seq__9170_9311);
if(temp__4425__auto___9347__$1){
var seq__9170_9348__$1 = temp__4425__auto___9347__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9170_9348__$1)){
var c__7258__auto___9349 = cljs.core.chunk_first(seq__9170_9348__$1);
var G__9350 = cljs.core.chunk_rest(seq__9170_9348__$1);
var G__9351 = c__7258__auto___9349;
var G__9352 = cljs.core.count(c__7258__auto___9349);
var G__9353 = (0);
seq__9170_9311 = G__9350;
chunk__9171_9312 = G__9351;
count__9172_9313 = G__9352;
i__9173_9314 = G__9353;
continue;
} else {
var vec__9181_9354 = cljs.core.first(seq__9170_9348__$1);
var line_9355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9181_9354,(0),null);
var cols_9356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9181_9354,(1),null);
var seq__9182_9357 = cljs.core.seq(cols_9356);
var chunk__9183_9358 = null;
var count__9184_9359 = (0);
var i__9185_9360 = (0);
while(true){
if((i__9185_9360 < count__9184_9359)){
var vec__9186_9361 = chunk__9183_9358.cljs$core$IIndexed$_nth$arity$2(null,i__9185_9360);
var col_9362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9186_9361,(0),null);
var infos_9363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9186_9361,(1),null);
encode_cols(infos_9363,source_idx_9307,line_9355,col_9362);

var G__9364 = seq__9182_9357;
var G__9365 = chunk__9183_9358;
var G__9366 = count__9184_9359;
var G__9367 = (i__9185_9360 + (1));
seq__9182_9357 = G__9364;
chunk__9183_9358 = G__9365;
count__9184_9359 = G__9366;
i__9185_9360 = G__9367;
continue;
} else {
var temp__4425__auto___9368__$2 = cljs.core.seq(seq__9182_9357);
if(temp__4425__auto___9368__$2){
var seq__9182_9369__$1 = temp__4425__auto___9368__$2;
if(cljs.core.chunked_seq_QMARK_(seq__9182_9369__$1)){
var c__7258__auto___9370 = cljs.core.chunk_first(seq__9182_9369__$1);
var G__9371 = cljs.core.chunk_rest(seq__9182_9369__$1);
var G__9372 = c__7258__auto___9370;
var G__9373 = cljs.core.count(c__7258__auto___9370);
var G__9374 = (0);
seq__9182_9357 = G__9371;
chunk__9183_9358 = G__9372;
count__9184_9359 = G__9373;
i__9185_9360 = G__9374;
continue;
} else {
var vec__9187_9375 = cljs.core.first(seq__9182_9369__$1);
var col_9376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9187_9375,(0),null);
var infos_9377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9187_9375,(1),null);
encode_cols(infos_9377,source_idx_9307,line_9355,col_9376);

var G__9378 = cljs.core.next(seq__9182_9369__$1);
var G__9379 = null;
var G__9380 = (0);
var G__9381 = (0);
seq__9182_9357 = G__9378;
chunk__9183_9358 = G__9379;
count__9184_9359 = G__9380;
i__9185_9360 = G__9381;
continue;
}
} else {
}
}
break;
}

var G__9382 = cljs.core.next(seq__9170_9348__$1);
var G__9383 = null;
var G__9384 = (0);
var G__9385 = (0);
seq__9170_9311 = G__9382;
chunk__9171_9312 = G__9383;
count__9172_9313 = G__9384;
i__9173_9314 = G__9385;
continue;
}
} else {
}
}
break;
}

var G__9386 = cljs.core.next(seq__9144_9300__$1);
var G__9387 = null;
var G__9388 = (0);
var G__9389 = (0);
seq__9144_9211 = G__9386;
chunk__9145_9212 = G__9387;
count__9146_9213 = G__9388;
i__9147_9214 = G__9389;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__9188 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__9080_SHARP_){
return [cljs.core.str(p1__9080_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__9081_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__9081_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__9082_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__9082_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx))),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx))))))};
var G__9188__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__9189 = G__9188;
var G__9190_9390 = G__9189;
var G__9191_9391 = "sourcesContent";
var G__9192_9392 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__9190_9390,G__9191_9391,G__9192_9392);

return G__9189;
})():G__9188);
return G__9188__$1;
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__9398 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9398,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9398,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__9399 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9399,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9399,(1),null);
var G__9403 = cljs.core.next(col_map_seq);
var G__9404 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__9399,col,infos,vec__9398,line,col_map){
return (function (v,p__9400){
var map__9401 = p__9400;
var map__9401__$1 = ((((!((map__9401 == null)))?((((map__9401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9401):map__9401);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9401__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9401__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__9399,col,infos,vec__9398,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__9403;
new_cols = G__9404;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__9405 = cljs.core.next(line_map_seq);
var G__9406 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__9405;
new_lines = G__9406;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = (function (){var G__9458 = cljs.core.sorted_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9458) : cljs.core.atom.call(null,G__9458));
})();
var seq__9459_9509 = cljs.core.seq(reverse_map);
var chunk__9460_9510 = null;
var count__9461_9511 = (0);
var i__9462_9512 = (0);
while(true){
if((i__9462_9512 < count__9461_9511)){
var vec__9463_9513 = chunk__9460_9510.cljs$core$IIndexed$_nth$arity$2(null,i__9462_9512);
var line_9514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9463_9513,(0),null);
var columns_9515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9463_9513,(1),null);
var seq__9464_9516 = cljs.core.seq(columns_9515);
var chunk__9465_9517 = null;
var count__9466_9518 = (0);
var i__9467_9519 = (0);
while(true){
if((i__9467_9519 < count__9466_9518)){
var vec__9468_9520 = chunk__9465_9517.cljs$core$IIndexed$_nth$arity$2(null,i__9467_9519);
var column_9521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9468_9520,(0),null);
var column_info_9522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9468_9520,(1),null);
var seq__9469_9523 = cljs.core.seq(column_info_9522);
var chunk__9470_9524 = null;
var count__9471_9525 = (0);
var i__9472_9526 = (0);
while(true){
if((i__9472_9526 < count__9471_9525)){
var map__9473_9527 = chunk__9470_9524.cljs$core$IIndexed$_nth$arity$2(null,i__9472_9526);
var map__9473_9528__$1 = ((((!((map__9473_9527 == null)))?((((map__9473_9527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9473_9527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9473_9527):map__9473_9527);
var gline_9529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9473_9528__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9473_9528__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9473_9528__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9529], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9469_9523,chunk__9470_9524,count__9471_9525,i__9472_9526,seq__9464_9516,chunk__9465_9517,count__9466_9518,i__9467_9519,seq__9459_9509,chunk__9460_9510,count__9461_9511,i__9462_9512,map__9473_9527,map__9473_9528__$1,gline_9529,gcol_9530,name_9531,vec__9468_9520,column_9521,column_info_9522,vec__9463_9513,line_9514,columns_9515,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_9521], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9514,new cljs.core.Keyword(null,"col","col",-1959363084),column_9521,new cljs.core.Keyword(null,"name","name",1843675177),name_9531], null));
});})(seq__9469_9523,chunk__9470_9524,count__9471_9525,i__9472_9526,seq__9464_9516,chunk__9465_9517,count__9466_9518,i__9467_9519,seq__9459_9509,chunk__9460_9510,count__9461_9511,i__9462_9512,map__9473_9527,map__9473_9528__$1,gline_9529,gcol_9530,name_9531,vec__9468_9520,column_9521,column_info_9522,vec__9463_9513,line_9514,columns_9515,inverted))
,cljs.core.sorted_map()));

var G__9532 = seq__9469_9523;
var G__9533 = chunk__9470_9524;
var G__9534 = count__9471_9525;
var G__9535 = (i__9472_9526 + (1));
seq__9469_9523 = G__9532;
chunk__9470_9524 = G__9533;
count__9471_9525 = G__9534;
i__9472_9526 = G__9535;
continue;
} else {
var temp__4425__auto___9536 = cljs.core.seq(seq__9469_9523);
if(temp__4425__auto___9536){
var seq__9469_9537__$1 = temp__4425__auto___9536;
if(cljs.core.chunked_seq_QMARK_(seq__9469_9537__$1)){
var c__7258__auto___9538 = cljs.core.chunk_first(seq__9469_9537__$1);
var G__9539 = cljs.core.chunk_rest(seq__9469_9537__$1);
var G__9540 = c__7258__auto___9538;
var G__9541 = cljs.core.count(c__7258__auto___9538);
var G__9542 = (0);
seq__9469_9523 = G__9539;
chunk__9470_9524 = G__9540;
count__9471_9525 = G__9541;
i__9472_9526 = G__9542;
continue;
} else {
var map__9475_9543 = cljs.core.first(seq__9469_9537__$1);
var map__9475_9544__$1 = ((((!((map__9475_9543 == null)))?((((map__9475_9543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9475_9543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9475_9543):map__9475_9543);
var gline_9545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9475_9544__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9475_9544__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9475_9544__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9545], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9469_9523,chunk__9470_9524,count__9471_9525,i__9472_9526,seq__9464_9516,chunk__9465_9517,count__9466_9518,i__9467_9519,seq__9459_9509,chunk__9460_9510,count__9461_9511,i__9462_9512,map__9475_9543,map__9475_9544__$1,gline_9545,gcol_9546,name_9547,seq__9469_9537__$1,temp__4425__auto___9536,vec__9468_9520,column_9521,column_info_9522,vec__9463_9513,line_9514,columns_9515,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_9521], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9514,new cljs.core.Keyword(null,"col","col",-1959363084),column_9521,new cljs.core.Keyword(null,"name","name",1843675177),name_9547], null));
});})(seq__9469_9523,chunk__9470_9524,count__9471_9525,i__9472_9526,seq__9464_9516,chunk__9465_9517,count__9466_9518,i__9467_9519,seq__9459_9509,chunk__9460_9510,count__9461_9511,i__9462_9512,map__9475_9543,map__9475_9544__$1,gline_9545,gcol_9546,name_9547,seq__9469_9537__$1,temp__4425__auto___9536,vec__9468_9520,column_9521,column_info_9522,vec__9463_9513,line_9514,columns_9515,inverted))
,cljs.core.sorted_map()));

var G__9548 = cljs.core.next(seq__9469_9537__$1);
var G__9549 = null;
var G__9550 = (0);
var G__9551 = (0);
seq__9469_9523 = G__9548;
chunk__9470_9524 = G__9549;
count__9471_9525 = G__9550;
i__9472_9526 = G__9551;
continue;
}
} else {
}
}
break;
}

var G__9552 = seq__9464_9516;
var G__9553 = chunk__9465_9517;
var G__9554 = count__9466_9518;
var G__9555 = (i__9467_9519 + (1));
seq__9464_9516 = G__9552;
chunk__9465_9517 = G__9553;
count__9466_9518 = G__9554;
i__9467_9519 = G__9555;
continue;
} else {
var temp__4425__auto___9556 = cljs.core.seq(seq__9464_9516);
if(temp__4425__auto___9556){
var seq__9464_9557__$1 = temp__4425__auto___9556;
if(cljs.core.chunked_seq_QMARK_(seq__9464_9557__$1)){
var c__7258__auto___9558 = cljs.core.chunk_first(seq__9464_9557__$1);
var G__9559 = cljs.core.chunk_rest(seq__9464_9557__$1);
var G__9560 = c__7258__auto___9558;
var G__9561 = cljs.core.count(c__7258__auto___9558);
var G__9562 = (0);
seq__9464_9516 = G__9559;
chunk__9465_9517 = G__9560;
count__9466_9518 = G__9561;
i__9467_9519 = G__9562;
continue;
} else {
var vec__9477_9563 = cljs.core.first(seq__9464_9557__$1);
var column_9564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9477_9563,(0),null);
var column_info_9565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9477_9563,(1),null);
var seq__9478_9566 = cljs.core.seq(column_info_9565);
var chunk__9479_9567 = null;
var count__9480_9568 = (0);
var i__9481_9569 = (0);
while(true){
if((i__9481_9569 < count__9480_9568)){
var map__9482_9570 = chunk__9479_9567.cljs$core$IIndexed$_nth$arity$2(null,i__9481_9569);
var map__9482_9571__$1 = ((((!((map__9482_9570 == null)))?((((map__9482_9570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9482_9570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9482_9570):map__9482_9570);
var gline_9572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9482_9571__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9482_9571__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9482_9571__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9572], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9478_9566,chunk__9479_9567,count__9480_9568,i__9481_9569,seq__9464_9516,chunk__9465_9517,count__9466_9518,i__9467_9519,seq__9459_9509,chunk__9460_9510,count__9461_9511,i__9462_9512,map__9482_9570,map__9482_9571__$1,gline_9572,gcol_9573,name_9574,vec__9477_9563,column_9564,column_info_9565,seq__9464_9557__$1,temp__4425__auto___9556,vec__9463_9513,line_9514,columns_9515,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_9564], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9514,new cljs.core.Keyword(null,"col","col",-1959363084),column_9564,new cljs.core.Keyword(null,"name","name",1843675177),name_9574], null));
});})(seq__9478_9566,chunk__9479_9567,count__9480_9568,i__9481_9569,seq__9464_9516,chunk__9465_9517,count__9466_9518,i__9467_9519,seq__9459_9509,chunk__9460_9510,count__9461_9511,i__9462_9512,map__9482_9570,map__9482_9571__$1,gline_9572,gcol_9573,name_9574,vec__9477_9563,column_9564,column_info_9565,seq__9464_9557__$1,temp__4425__auto___9556,vec__9463_9513,line_9514,columns_9515,inverted))
,cljs.core.sorted_map()));

var G__9575 = seq__9478_9566;
var G__9576 = chunk__9479_9567;
var G__9577 = count__9480_9568;
var G__9578 = (i__9481_9569 + (1));
seq__9478_9566 = G__9575;
chunk__9479_9567 = G__9576;
count__9480_9568 = G__9577;
i__9481_9569 = G__9578;
continue;
} else {
var temp__4425__auto___9579__$1 = cljs.core.seq(seq__9478_9566);
if(temp__4425__auto___9579__$1){
var seq__9478_9580__$1 = temp__4425__auto___9579__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9478_9580__$1)){
var c__7258__auto___9581 = cljs.core.chunk_first(seq__9478_9580__$1);
var G__9582 = cljs.core.chunk_rest(seq__9478_9580__$1);
var G__9583 = c__7258__auto___9581;
var G__9584 = cljs.core.count(c__7258__auto___9581);
var G__9585 = (0);
seq__9478_9566 = G__9582;
chunk__9479_9567 = G__9583;
count__9480_9568 = G__9584;
i__9481_9569 = G__9585;
continue;
} else {
var map__9484_9586 = cljs.core.first(seq__9478_9580__$1);
var map__9484_9587__$1 = ((((!((map__9484_9586 == null)))?((((map__9484_9586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9484_9586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9484_9586):map__9484_9586);
var gline_9588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9484_9587__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9484_9587__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9484_9587__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9588], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9478_9566,chunk__9479_9567,count__9480_9568,i__9481_9569,seq__9464_9516,chunk__9465_9517,count__9466_9518,i__9467_9519,seq__9459_9509,chunk__9460_9510,count__9461_9511,i__9462_9512,map__9484_9586,map__9484_9587__$1,gline_9588,gcol_9589,name_9590,seq__9478_9580__$1,temp__4425__auto___9579__$1,vec__9477_9563,column_9564,column_info_9565,seq__9464_9557__$1,temp__4425__auto___9556,vec__9463_9513,line_9514,columns_9515,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_9564], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9514,new cljs.core.Keyword(null,"col","col",-1959363084),column_9564,new cljs.core.Keyword(null,"name","name",1843675177),name_9590], null));
});})(seq__9478_9566,chunk__9479_9567,count__9480_9568,i__9481_9569,seq__9464_9516,chunk__9465_9517,count__9466_9518,i__9467_9519,seq__9459_9509,chunk__9460_9510,count__9461_9511,i__9462_9512,map__9484_9586,map__9484_9587__$1,gline_9588,gcol_9589,name_9590,seq__9478_9580__$1,temp__4425__auto___9579__$1,vec__9477_9563,column_9564,column_info_9565,seq__9464_9557__$1,temp__4425__auto___9556,vec__9463_9513,line_9514,columns_9515,inverted))
,cljs.core.sorted_map()));

var G__9591 = cljs.core.next(seq__9478_9580__$1);
var G__9592 = null;
var G__9593 = (0);
var G__9594 = (0);
seq__9478_9566 = G__9591;
chunk__9479_9567 = G__9592;
count__9480_9568 = G__9593;
i__9481_9569 = G__9594;
continue;
}
} else {
}
}
break;
}

var G__9595 = cljs.core.next(seq__9464_9557__$1);
var G__9596 = null;
var G__9597 = (0);
var G__9598 = (0);
seq__9464_9516 = G__9595;
chunk__9465_9517 = G__9596;
count__9466_9518 = G__9597;
i__9467_9519 = G__9598;
continue;
}
} else {
}
}
break;
}

var G__9599 = seq__9459_9509;
var G__9600 = chunk__9460_9510;
var G__9601 = count__9461_9511;
var G__9602 = (i__9462_9512 + (1));
seq__9459_9509 = G__9599;
chunk__9460_9510 = G__9600;
count__9461_9511 = G__9601;
i__9462_9512 = G__9602;
continue;
} else {
var temp__4425__auto___9603 = cljs.core.seq(seq__9459_9509);
if(temp__4425__auto___9603){
var seq__9459_9604__$1 = temp__4425__auto___9603;
if(cljs.core.chunked_seq_QMARK_(seq__9459_9604__$1)){
var c__7258__auto___9605 = cljs.core.chunk_first(seq__9459_9604__$1);
var G__9606 = cljs.core.chunk_rest(seq__9459_9604__$1);
var G__9607 = c__7258__auto___9605;
var G__9608 = cljs.core.count(c__7258__auto___9605);
var G__9609 = (0);
seq__9459_9509 = G__9606;
chunk__9460_9510 = G__9607;
count__9461_9511 = G__9608;
i__9462_9512 = G__9609;
continue;
} else {
var vec__9486_9610 = cljs.core.first(seq__9459_9604__$1);
var line_9611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9486_9610,(0),null);
var columns_9612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9486_9610,(1),null);
var seq__9487_9613 = cljs.core.seq(columns_9612);
var chunk__9488_9614 = null;
var count__9489_9615 = (0);
var i__9490_9616 = (0);
while(true){
if((i__9490_9616 < count__9489_9615)){
var vec__9491_9617 = chunk__9488_9614.cljs$core$IIndexed$_nth$arity$2(null,i__9490_9616);
var column_9618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9491_9617,(0),null);
var column_info_9619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9491_9617,(1),null);
var seq__9492_9620 = cljs.core.seq(column_info_9619);
var chunk__9493_9621 = null;
var count__9494_9622 = (0);
var i__9495_9623 = (0);
while(true){
if((i__9495_9623 < count__9494_9622)){
var map__9496_9624 = chunk__9493_9621.cljs$core$IIndexed$_nth$arity$2(null,i__9495_9623);
var map__9496_9625__$1 = ((((!((map__9496_9624 == null)))?((((map__9496_9624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9496_9624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9496_9624):map__9496_9624);
var gline_9626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9496_9625__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9496_9625__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9496_9625__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9626], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9492_9620,chunk__9493_9621,count__9494_9622,i__9495_9623,seq__9487_9613,chunk__9488_9614,count__9489_9615,i__9490_9616,seq__9459_9509,chunk__9460_9510,count__9461_9511,i__9462_9512,map__9496_9624,map__9496_9625__$1,gline_9626,gcol_9627,name_9628,vec__9491_9617,column_9618,column_info_9619,vec__9486_9610,line_9611,columns_9612,seq__9459_9604__$1,temp__4425__auto___9603,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_9618], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9611,new cljs.core.Keyword(null,"col","col",-1959363084),column_9618,new cljs.core.Keyword(null,"name","name",1843675177),name_9628], null));
});})(seq__9492_9620,chunk__9493_9621,count__9494_9622,i__9495_9623,seq__9487_9613,chunk__9488_9614,count__9489_9615,i__9490_9616,seq__9459_9509,chunk__9460_9510,count__9461_9511,i__9462_9512,map__9496_9624,map__9496_9625__$1,gline_9626,gcol_9627,name_9628,vec__9491_9617,column_9618,column_info_9619,vec__9486_9610,line_9611,columns_9612,seq__9459_9604__$1,temp__4425__auto___9603,inverted))
,cljs.core.sorted_map()));

var G__9629 = seq__9492_9620;
var G__9630 = chunk__9493_9621;
var G__9631 = count__9494_9622;
var G__9632 = (i__9495_9623 + (1));
seq__9492_9620 = G__9629;
chunk__9493_9621 = G__9630;
count__9494_9622 = G__9631;
i__9495_9623 = G__9632;
continue;
} else {
var temp__4425__auto___9633__$1 = cljs.core.seq(seq__9492_9620);
if(temp__4425__auto___9633__$1){
var seq__9492_9634__$1 = temp__4425__auto___9633__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9492_9634__$1)){
var c__7258__auto___9635 = cljs.core.chunk_first(seq__9492_9634__$1);
var G__9636 = cljs.core.chunk_rest(seq__9492_9634__$1);
var G__9637 = c__7258__auto___9635;
var G__9638 = cljs.core.count(c__7258__auto___9635);
var G__9639 = (0);
seq__9492_9620 = G__9636;
chunk__9493_9621 = G__9637;
count__9494_9622 = G__9638;
i__9495_9623 = G__9639;
continue;
} else {
var map__9498_9640 = cljs.core.first(seq__9492_9634__$1);
var map__9498_9641__$1 = ((((!((map__9498_9640 == null)))?((((map__9498_9640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9498_9640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9498_9640):map__9498_9640);
var gline_9642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9498_9641__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9498_9641__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9498_9641__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9642], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9492_9620,chunk__9493_9621,count__9494_9622,i__9495_9623,seq__9487_9613,chunk__9488_9614,count__9489_9615,i__9490_9616,seq__9459_9509,chunk__9460_9510,count__9461_9511,i__9462_9512,map__9498_9640,map__9498_9641__$1,gline_9642,gcol_9643,name_9644,seq__9492_9634__$1,temp__4425__auto___9633__$1,vec__9491_9617,column_9618,column_info_9619,vec__9486_9610,line_9611,columns_9612,seq__9459_9604__$1,temp__4425__auto___9603,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_9618], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9611,new cljs.core.Keyword(null,"col","col",-1959363084),column_9618,new cljs.core.Keyword(null,"name","name",1843675177),name_9644], null));
});})(seq__9492_9620,chunk__9493_9621,count__9494_9622,i__9495_9623,seq__9487_9613,chunk__9488_9614,count__9489_9615,i__9490_9616,seq__9459_9509,chunk__9460_9510,count__9461_9511,i__9462_9512,map__9498_9640,map__9498_9641__$1,gline_9642,gcol_9643,name_9644,seq__9492_9634__$1,temp__4425__auto___9633__$1,vec__9491_9617,column_9618,column_info_9619,vec__9486_9610,line_9611,columns_9612,seq__9459_9604__$1,temp__4425__auto___9603,inverted))
,cljs.core.sorted_map()));

var G__9645 = cljs.core.next(seq__9492_9634__$1);
var G__9646 = null;
var G__9647 = (0);
var G__9648 = (0);
seq__9492_9620 = G__9645;
chunk__9493_9621 = G__9646;
count__9494_9622 = G__9647;
i__9495_9623 = G__9648;
continue;
}
} else {
}
}
break;
}

var G__9649 = seq__9487_9613;
var G__9650 = chunk__9488_9614;
var G__9651 = count__9489_9615;
var G__9652 = (i__9490_9616 + (1));
seq__9487_9613 = G__9649;
chunk__9488_9614 = G__9650;
count__9489_9615 = G__9651;
i__9490_9616 = G__9652;
continue;
} else {
var temp__4425__auto___9653__$1 = cljs.core.seq(seq__9487_9613);
if(temp__4425__auto___9653__$1){
var seq__9487_9654__$1 = temp__4425__auto___9653__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9487_9654__$1)){
var c__7258__auto___9655 = cljs.core.chunk_first(seq__9487_9654__$1);
var G__9656 = cljs.core.chunk_rest(seq__9487_9654__$1);
var G__9657 = c__7258__auto___9655;
var G__9658 = cljs.core.count(c__7258__auto___9655);
var G__9659 = (0);
seq__9487_9613 = G__9656;
chunk__9488_9614 = G__9657;
count__9489_9615 = G__9658;
i__9490_9616 = G__9659;
continue;
} else {
var vec__9500_9660 = cljs.core.first(seq__9487_9654__$1);
var column_9661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9500_9660,(0),null);
var column_info_9662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9500_9660,(1),null);
var seq__9501_9663 = cljs.core.seq(column_info_9662);
var chunk__9502_9664 = null;
var count__9503_9665 = (0);
var i__9504_9666 = (0);
while(true){
if((i__9504_9666 < count__9503_9665)){
var map__9505_9667 = chunk__9502_9664.cljs$core$IIndexed$_nth$arity$2(null,i__9504_9666);
var map__9505_9668__$1 = ((((!((map__9505_9667 == null)))?((((map__9505_9667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9505_9667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9505_9667):map__9505_9667);
var gline_9669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9505_9668__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9505_9668__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9505_9668__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9669], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9501_9663,chunk__9502_9664,count__9503_9665,i__9504_9666,seq__9487_9613,chunk__9488_9614,count__9489_9615,i__9490_9616,seq__9459_9509,chunk__9460_9510,count__9461_9511,i__9462_9512,map__9505_9667,map__9505_9668__$1,gline_9669,gcol_9670,name_9671,vec__9500_9660,column_9661,column_info_9662,seq__9487_9654__$1,temp__4425__auto___9653__$1,vec__9486_9610,line_9611,columns_9612,seq__9459_9604__$1,temp__4425__auto___9603,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_9661], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9611,new cljs.core.Keyword(null,"col","col",-1959363084),column_9661,new cljs.core.Keyword(null,"name","name",1843675177),name_9671], null));
});})(seq__9501_9663,chunk__9502_9664,count__9503_9665,i__9504_9666,seq__9487_9613,chunk__9488_9614,count__9489_9615,i__9490_9616,seq__9459_9509,chunk__9460_9510,count__9461_9511,i__9462_9512,map__9505_9667,map__9505_9668__$1,gline_9669,gcol_9670,name_9671,vec__9500_9660,column_9661,column_info_9662,seq__9487_9654__$1,temp__4425__auto___9653__$1,vec__9486_9610,line_9611,columns_9612,seq__9459_9604__$1,temp__4425__auto___9603,inverted))
,cljs.core.sorted_map()));

var G__9672 = seq__9501_9663;
var G__9673 = chunk__9502_9664;
var G__9674 = count__9503_9665;
var G__9675 = (i__9504_9666 + (1));
seq__9501_9663 = G__9672;
chunk__9502_9664 = G__9673;
count__9503_9665 = G__9674;
i__9504_9666 = G__9675;
continue;
} else {
var temp__4425__auto___9676__$2 = cljs.core.seq(seq__9501_9663);
if(temp__4425__auto___9676__$2){
var seq__9501_9677__$1 = temp__4425__auto___9676__$2;
if(cljs.core.chunked_seq_QMARK_(seq__9501_9677__$1)){
var c__7258__auto___9678 = cljs.core.chunk_first(seq__9501_9677__$1);
var G__9679 = cljs.core.chunk_rest(seq__9501_9677__$1);
var G__9680 = c__7258__auto___9678;
var G__9681 = cljs.core.count(c__7258__auto___9678);
var G__9682 = (0);
seq__9501_9663 = G__9679;
chunk__9502_9664 = G__9680;
count__9503_9665 = G__9681;
i__9504_9666 = G__9682;
continue;
} else {
var map__9507_9683 = cljs.core.first(seq__9501_9677__$1);
var map__9507_9684__$1 = ((((!((map__9507_9683 == null)))?((((map__9507_9683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9507_9683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9507_9683):map__9507_9683);
var gline_9685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9507_9684__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9507_9684__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9507_9684__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9685], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9501_9663,chunk__9502_9664,count__9503_9665,i__9504_9666,seq__9487_9613,chunk__9488_9614,count__9489_9615,i__9490_9616,seq__9459_9509,chunk__9460_9510,count__9461_9511,i__9462_9512,map__9507_9683,map__9507_9684__$1,gline_9685,gcol_9686,name_9687,seq__9501_9677__$1,temp__4425__auto___9676__$2,vec__9500_9660,column_9661,column_info_9662,seq__9487_9654__$1,temp__4425__auto___9653__$1,vec__9486_9610,line_9611,columns_9612,seq__9459_9604__$1,temp__4425__auto___9603,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_9661], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9611,new cljs.core.Keyword(null,"col","col",-1959363084),column_9661,new cljs.core.Keyword(null,"name","name",1843675177),name_9687], null));
});})(seq__9501_9663,chunk__9502_9664,count__9503_9665,i__9504_9666,seq__9487_9613,chunk__9488_9614,count__9489_9615,i__9490_9616,seq__9459_9509,chunk__9460_9510,count__9461_9511,i__9462_9512,map__9507_9683,map__9507_9684__$1,gline_9685,gcol_9686,name_9687,seq__9501_9677__$1,temp__4425__auto___9676__$2,vec__9500_9660,column_9661,column_info_9662,seq__9487_9654__$1,temp__4425__auto___9653__$1,vec__9486_9610,line_9611,columns_9612,seq__9459_9604__$1,temp__4425__auto___9603,inverted))
,cljs.core.sorted_map()));

var G__9688 = cljs.core.next(seq__9501_9677__$1);
var G__9689 = null;
var G__9690 = (0);
var G__9691 = (0);
seq__9501_9663 = G__9688;
chunk__9502_9664 = G__9689;
count__9503_9665 = G__9690;
i__9504_9666 = G__9691;
continue;
}
} else {
}
}
break;
}

var G__9692 = cljs.core.next(seq__9487_9654__$1);
var G__9693 = null;
var G__9694 = (0);
var G__9695 = (0);
seq__9487_9613 = G__9692;
chunk__9488_9614 = G__9693;
count__9489_9615 = G__9694;
i__9490_9616 = G__9695;
continue;
}
} else {
}
}
break;
}

var G__9696 = cljs.core.next(seq__9459_9604__$1);
var G__9697 = null;
var G__9698 = (0);
var G__9699 = (0);
seq__9459_9509 = G__9696;
chunk__9460_9510 = G__9697;
count__9461_9511 = G__9698;
i__9462_9512 = G__9699;
continue;
}
} else {
}
}
break;
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inverted) : cljs.core.deref.call(null,inverted));
});

//# sourceMappingURL=source_map.js.map