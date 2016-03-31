// Compiled by ClojureScript 1.7.228 {:static-fns true}
goog.provide('cljsfiddle.parinfer_codemirror.editor_support');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('parinfer.indent_mode');
goog.require('parinfer.paren_mode');
goog.require('cljsfiddle.state');

/**
 * Custom data/methods for a CodeMirror editor.
 * @interface
 */
cljsfiddle.parinfer_codemirror.editor_support.IEditor = function(){};

cljsfiddle.parinfer_codemirror.editor_support.cm_key = (function cljsfiddle$parinfer_codemirror$editor_support$cm_key(this$){
if((!((this$ == null))) && (!((this$.cljsfiddle$parinfer_codemirror$editor_support$IEditor$cm_key$arity$1 == null)))){
return this$.cljsfiddle$parinfer_codemirror$editor_support$IEditor$cm_key$arity$1(this$);
} else {
var x__7110__auto__ = (((this$ == null))?null:this$);
var m__7111__auto__ = (cljsfiddle.parinfer_codemirror.editor_support.cm_key[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return (m__7111__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7111__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7111__auto__.call(null,this$));
} else {
var m__7111__auto____$1 = (cljsfiddle.parinfer_codemirror.editor_support.cm_key["_"]);
if(!((m__7111__auto____$1 == null))){
return (m__7111__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7111__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7111__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditor.cm-key",this$);
}
}
}
});

cljsfiddle.parinfer_codemirror.editor_support.get_prev_state = (function cljsfiddle$parinfer_codemirror$editor_support$get_prev_state(this$){
if((!((this$ == null))) && (!((this$.cljsfiddle$parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1 == null)))){
return this$.cljsfiddle$parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1(this$);
} else {
var x__7110__auto__ = (((this$ == null))?null:this$);
var m__7111__auto__ = (cljsfiddle.parinfer_codemirror.editor_support.get_prev_state[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return (m__7111__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7111__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7111__auto__.call(null,this$));
} else {
var m__7111__auto____$1 = (cljsfiddle.parinfer_codemirror.editor_support.get_prev_state["_"]);
if(!((m__7111__auto____$1 == null))){
return (m__7111__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7111__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7111__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditor.get-prev-state",this$);
}
}
}
});

cljsfiddle.parinfer_codemirror.editor_support.frame_updated_QMARK_ = (function cljsfiddle$parinfer_codemirror$editor_support$frame_updated_QMARK_(this$){
if((!((this$ == null))) && (!((this$.cljsfiddle$parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1 == null)))){
return this$.cljsfiddle$parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1(this$);
} else {
var x__7110__auto__ = (((this$ == null))?null:this$);
var m__7111__auto__ = (cljsfiddle.parinfer_codemirror.editor_support.frame_updated_QMARK_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return (m__7111__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7111__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7111__auto__.call(null,this$));
} else {
var m__7111__auto____$1 = (cljsfiddle.parinfer_codemirror.editor_support.frame_updated_QMARK_["_"]);
if(!((m__7111__auto____$1 == null))){
return (m__7111__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7111__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7111__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditor.frame-updated?",this$);
}
}
}
});

cljsfiddle.parinfer_codemirror.editor_support.set_frame_updated_BANG_ = (function cljsfiddle$parinfer_codemirror$editor_support$set_frame_updated_BANG_(this$,value){
if((!((this$ == null))) && (!((this$.cljsfiddle$parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2 == null)))){
return this$.cljsfiddle$parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2(this$,value);
} else {
var x__7110__auto__ = (((this$ == null))?null:this$);
var m__7111__auto__ = (cljsfiddle.parinfer_codemirror.editor_support.set_frame_updated_BANG_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return (m__7111__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7111__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__7111__auto__.call(null,this$,value));
} else {
var m__7111__auto____$1 = (cljsfiddle.parinfer_codemirror.editor_support.set_frame_updated_BANG_["_"]);
if(!((m__7111__auto____$1 == null))){
return (m__7111__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7111__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,value) : m__7111__auto____$1.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IEditor.set-frame-updated!",this$);
}
}
}
});

/**
 * Correctly position cursor after text that was just typed.
 *   We need this since reformatting the text can shift things forward past our cursor.
 */
cljsfiddle.parinfer_codemirror.editor_support.update_cursor_BANG_ = (function cljsfiddle$parinfer_codemirror$editor_support$update_cursor_BANG_(cm,change){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("+input",change.origin)){
var selection_QMARK_ = cm.somethingSelected();
var text = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",change.text);
var from_x = change.from.ch;
var line_no = change.from.line;
var line = cm.getLine(line_no);
var insert_x = line.indexOf(text,from_x);
var after_x = (insert_x + cljs.core.count(text));
if(cljs.core.truth_(selection_QMARK_)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text,"\n")){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text,";")){
return cm.setCursor(line_no,after_x);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),insert_x)) || ((insert_x > from_x))){
return cm.setCursor(line_no,from_x);
} else {
return null;

}
}
}
}
} else {
return null;
}
});
cljsfiddle.parinfer_codemirror.editor_support.compute_cursor_dx = (function cljsfiddle$parinfer_codemirror$editor_support$compute_cursor_dx(cursor,change){
if(cljs.core.truth_(change)){
var ignore_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("+indenthack",change.origin);
if(ignore_QMARK_){
return (0);
} else {
var start_x = change.to.ch;
var new_lines = change.text;
var len_last_line = cljs.core.count(cljs.core.last(new_lines));
var end_x = (((cljs.core.count(new_lines) > (1)))?len_last_line:(len_last_line + change.from.ch));
return (end_x - start_x);
}
} else {
return null;
}
});
cljsfiddle.parinfer_codemirror.editor_support.compute_cm_change = (function cljsfiddle$parinfer_codemirror$editor_support$compute_cm_change(cm,change,options,prev_state){
var map__14092 = (cljs.core.truth_(change)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-line","start-line",-41746654),change.from.line,new cljs.core.Keyword(null,"end-line","end-line",1837326455),(change.to.line + (1)),new cljs.core.Keyword(null,"num-new-lines","num-new-lines",-1319642646),change.text.length], null):(function (){var start = new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007).cljs$core$IFn$_invoke$arity$1(prev_state);
var end = (start + (1));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-line","start-line",-41746654),start,new cljs.core.Keyword(null,"end-line","end-line",1837326455),end,new cljs.core.Keyword(null,"num-new-lines","num-new-lines",-1319642646),(end - start)], null);
})());
var map__14092__$1 = ((((!((map__14092 == null)))?((((map__14092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14092):map__14092);
var start_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14092__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14092__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var num_new_lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14092__$1,new cljs.core.Keyword(null,"num-new-lines","num-new-lines",-1319642646));
var lines = (function (){var iter__7227__auto__ = ((function (map__14092,map__14092__$1,start_line,end_line,num_new_lines){
return (function cljsfiddle$parinfer_codemirror$editor_support$compute_cm_change_$_iter__14094(s__14095){
return (new cljs.core.LazySeq(null,((function (map__14092,map__14092__$1,start_line,end_line,num_new_lines){
return (function (){
var s__14095__$1 = s__14095;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__14095__$1);
if(temp__4425__auto__){
var s__14095__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14095__$2)){
var c__7225__auto__ = cljs.core.chunk_first(s__14095__$2);
var size__7226__auto__ = cljs.core.count(c__7225__auto__);
var b__14097 = cljs.core.chunk_buffer(size__7226__auto__);
if((function (){var i__14096 = (0);
while(true){
if((i__14096 < size__7226__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7225__auto__,i__14096);
cljs.core.chunk_append(b__14097,cm.getLine(i));

var G__14100 = (i__14096 + (1));
i__14096 = G__14100;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14097),cljsfiddle$parinfer_codemirror$editor_support$compute_cm_change_$_iter__14094(cljs.core.chunk_rest(s__14095__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14097),null);
}
} else {
var i = cljs.core.first(s__14095__$2);
return cljs.core.cons(cm.getLine(i),cljsfiddle$parinfer_codemirror$editor_support$compute_cm_change_$_iter__14094(cljs.core.rest(s__14095__$2)));
}
} else {
return null;
}
break;
}
});})(map__14092,map__14092__$1,start_line,end_line,num_new_lines))
,null,null));
});})(map__14092,map__14092__$1,start_line,end_line,num_new_lines))
;
return iter__7227__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(start_line,(start_line + num_new_lines)));
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-no","line-no",-666819466),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_line,end_line], null),new cljs.core.Keyword(null,"new-line","new-line",1060819447),lines], null);
});
/**
 * Correctly format the text from the given editor.
 */
cljsfiddle.parinfer_codemirror.editor_support.fix_text_BANG_ = (function cljsfiddle$parinfer_codemirror$editor_support$fix_text_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___14109 = arguments.length;
var i__7514__auto___14110 = (0);
while(true){
if((i__7514__auto___14110 < len__7513__auto___14109)){
args__7520__auto__.push((arguments[i__7514__auto___14110]));

var G__14111 = (i__7514__auto___14110 + (1));
i__7514__auto___14110 = G__14111;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljsfiddle.parinfer_codemirror.editor_support.fix_text_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljsfiddle.parinfer_codemirror.editor_support.fix_text_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cm,p__14103){
var map__14104 = p__14103;
var map__14104__$1 = ((((!((map__14104 == null)))?((((map__14104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14104):map__14104);
var change = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14104__$1,new cljs.core.Keyword(null,"change","change",-1163046502),null);
var use_cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14104__$1,new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),false);
var current_text = cm.getValue();
var selection_QMARK_ = cm.somethingSelected();
var selections = cm.listSelections();
var cursor = cm.getCursor();
var scroller = cm.getScrollerElement();
var scroll_x = scroller.scrollLeft;
var scroll_y = scroller.scrollTop;
var options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007),cursor.line,new cljs.core.Keyword(null,"cursor-x","cursor-x",475204266),cursor.ch,new cljs.core.Keyword(null,"cursor-dx","cursor-dx",133069327),cljsfiddle.parinfer_codemirror.editor_support.compute_cursor_dx(cursor,change)], null);
var key_ = cljsfiddle.parinfer_codemirror.editor_support.cm_key(cm);
var mode = (function (){var or__6455__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljsfiddle.state.state) : cljs.core.deref.call(null,cljsfiddle.state.state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"mode","mode",654403691)], null));
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return new cljs.core.Keyword(null,"indent-mode","indent-mode",1737814542);
}
})();
var prev_state = cljsfiddle.parinfer_codemirror.editor_support.get_prev_state(cm);
var new_text = (function (){var G__14106 = (((mode instanceof cljs.core.Keyword))?mode.fqn:null);
switch (G__14106) {
case "indent-mode":
var result = (cljs.core.truth_((function (){var and__6443__auto__ = use_cache_QMARK_;
if(cljs.core.truth_(and__6443__auto__)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prev_state) : cljs.core.deref.call(null,prev_state));
} else {
return and__6443__auto__;
}
})())?parinfer.indent_mode.format_text_change.cljs$core$IFn$_invoke$arity$4(current_text,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prev_state) : cljs.core.deref.call(null,prev_state)),cljsfiddle.parinfer_codemirror.editor_support.compute_cm_change(cm,change,options,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prev_state) : cljs.core.deref.call(null,prev_state))),options):parinfer.indent_mode.format_text.cljs$core$IFn$_invoke$arity$2(current_text,options));
if(cljs.core.truth_(new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(result))){
var G__14107_14113 = prev_state;
var G__14108_14114 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(result);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14107_14113,G__14108_14114) : cljs.core.reset_BANG_.call(null,G__14107_14113,G__14108_14114));
} else {
}

return new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(result);

break;
case "paren-mode":
var result = parinfer.paren_mode.format_text.cljs$core$IFn$_invoke$arity$2(current_text,options);
return new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(result);

break;
default:
return null;

}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljsfiddle.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"text","text",-1790561697)], null),new_text);

if(cljs.core.truth_(selection_QMARK_)){
cm.setSelections(selections);
} else {
cm.setCursor(cursor);
}

return cm.scrollTo(scroll_x,scroll_y);
});

cljsfiddle.parinfer_codemirror.editor_support.fix_text_BANG_.cljs$lang$maxFixedArity = (1);

cljsfiddle.parinfer_codemirror.editor_support.fix_text_BANG_.cljs$lang$applyTo = (function (seq14101){
var G__14102 = cljs.core.first(seq14101);
var seq14101__$1 = cljs.core.next(seq14101);
return cljsfiddle.parinfer_codemirror.editor_support.fix_text_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14102,seq14101__$1);
});

//# sourceMappingURL=editor_support.js.map