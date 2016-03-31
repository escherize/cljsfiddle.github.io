// Compiled by ClojureScript 1.7.228 {:static-fns true}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__11343__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11344__i = 0, G__11344__a = new Array(arguments.length -  0);
while (G__11344__i < G__11344__a.length) {G__11344__a[G__11344__i] = arguments[G__11344__i + 0]; ++G__11344__i;}
  args = new cljs.core.IndexedSeq(G__11344__a,0);
} 
return G__11343__delegate.call(this,args);};
G__11343.cljs$lang$maxFixedArity = 0;
G__11343.cljs$lang$applyTo = (function (arglist__11345){
var args = cljs.core.seq(arglist__11345);
return G__11343__delegate(args);
});
G__11343.cljs$core$IFn$_invoke$arity$variadic = G__11343__delegate;
return G__11343;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__11346__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11346 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11347__i = 0, G__11347__a = new Array(arguments.length -  0);
while (G__11347__i < G__11347__a.length) {G__11347__a[G__11347__i] = arguments[G__11347__i + 0]; ++G__11347__i;}
  args = new cljs.core.IndexedSeq(G__11347__a,0);
} 
return G__11346__delegate.call(this,args);};
G__11346.cljs$lang$maxFixedArity = 0;
G__11346.cljs$lang$applyTo = (function (arglist__11348){
var args = cljs.core.seq(arglist__11348);
return G__11346__delegate(args);
});
G__11346.cljs$core$IFn$_invoke$arity$variadic = G__11346__delegate;
return G__11346;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.debug.warnings) : cljs.core.deref.call(null,reagent.debug.warnings));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map