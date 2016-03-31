// Compiled by ClojureScript 1.7.228 {:static-fns true}
goog.provide('cljsfiddle.parinfer_codemirror.editor');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljsfiddle.state');
goog.require('cljsfiddle.parinfer_codemirror.editor_support');
goog.require('goog.dom');
cljsfiddle.parinfer_codemirror.editor.frame_updates = (function (){var G__14117 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14117) : cljs.core.atom.call(null,G__14117));
})();
/**
 * Called before any change is applied to the editor.
 */
cljsfiddle.parinfer_codemirror.editor.before_change = (function cljsfiddle$parinfer_codemirror$editor$before_change(cm,change){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("setValue",change.origin)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cm.getValue(),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",change.text)))){
return change.cancel();
} else {
return null;
}
});
/**
 * Called after any change is applied to the editor.
 */
cljsfiddle.parinfer_codemirror.editor.on_change = (function cljsfiddle$parinfer_codemirror$editor$on_change(cm,change){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("setValue",change.origin)){
cljsfiddle.parinfer_codemirror.editor_support.fix_text_BANG_.cljs$core$IFn$_invoke$arity$variadic(cm,cljs.core.array_seq([new cljs.core.Keyword(null,"change","change",-1163046502),change], 0));

cljsfiddle.parinfer_codemirror.editor_support.update_cursor_BANG_(cm,change);

return cljsfiddle.parinfer_codemirror.editor_support.set_frame_updated_BANG_(cm,true);
} else {
return null;
}
});
/**
 * Called after the cursor moves in the editor.
 */
cljsfiddle.parinfer_codemirror.editor.on_cursor_activity = (function cljsfiddle$parinfer_codemirror$editor$on_cursor_activity(cm){
if(cljs.core.truth_(cljsfiddle.parinfer_codemirror.editor_support.frame_updated_QMARK_(cm))){
} else {
cljsfiddle.parinfer_codemirror.editor_support.fix_text_BANG_(cm);
}

return cljsfiddle.parinfer_codemirror.editor_support.set_frame_updated_BANG_(cm,false);
});
/**
 * Add parinfer goodness to a codemirror editor
 */
cljsfiddle.parinfer_codemirror.editor.parinferize_BANG_ = (function cljsfiddle$parinfer_codemirror$editor$parinferize_BANG_(cm,key_,parinfer_mode,initial_value){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljsfiddle.state.state) : cljs.core.deref.call(null,cljsfiddle.state.state)),key_))){
return null;
} else {
var initial_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljsfiddle.state.empty_editor_state,new cljs.core.Keyword(null,"mode","mode",654403691),parinfer_mode,cljs.core.array_seq([new cljs.core.Keyword(null,"text","text",-1790561697),initial_value], 0));
var prev_editor_state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljsfiddle.state.state) : cljs.core.deref.call(null,cljsfiddle.state.state)),key_))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljsfiddle.parinfer_codemirror.editor.frame_updates,cljs.core.assoc,key_,cljs.core.PersistentArrayMap.EMPTY);
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljsfiddle.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_], null),((function (initial_state,prev_editor_state){
return (function (p1__14118_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__6455__auto__ = p1__14118_SHARP_;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return initial_state;
}
})(),new cljs.core.Keyword(null,"cm","cm",540591536),cm);
});})(initial_state,prev_editor_state))
);

var x14120_14121 = cm;
x14120_14121.cljsfiddle$parinfer_codemirror$editor_support$IEditor$ = true;

x14120_14121.cljsfiddle$parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1 = ((function (x14120_14121,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return prev_editor_state;
});})(x14120_14121,initial_state,prev_editor_state))
;

x14120_14121.cljsfiddle$parinfer_codemirror$editor_support$IEditor$cm_key$arity$1 = ((function (x14120_14121,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return key_;
});})(x14120_14121,initial_state,prev_editor_state))
;

x14120_14121.cljsfiddle$parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1 = ((function (x14120_14121,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljsfiddle.parinfer_codemirror.editor.frame_updates) : cljs.core.deref.call(null,cljsfiddle.parinfer_codemirror.editor.frame_updates)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null));
});})(x14120_14121,initial_state,prev_editor_state))
;

x14120_14121.cljsfiddle$parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2 = ((function (x14120_14121,initial_state,prev_editor_state){
return (function (this$,value){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljsfiddle.parinfer_codemirror.editor.frame_updates,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null),value);
});})(x14120_14121,initial_state,prev_editor_state))
;


cm.on("change",cljsfiddle.parinfer_codemirror.editor.on_change);

cm.on("beforeChange",cljsfiddle.parinfer_codemirror.editor.before_change);

cm.on("cursorActivity",cljsfiddle.parinfer_codemirror.editor.on_cursor_activity);

return cm;
}
});
/**
 * Called everytime the state changes to sync the code editor.
 */
cljsfiddle.parinfer_codemirror.editor.on_state_change = (function cljsfiddle$parinfer_codemirror$editor$on_state_change(_,___$1,old_state,new_state){
var seq__14132 = cljs.core.seq(new_state);
var chunk__14133 = null;
var count__14134 = (0);
var i__14135 = (0);
while(true){
if((i__14135 < count__14134)){
var vec__14136 = chunk__14133.cljs$core$IIndexed$_nth$arity$2(null,i__14135);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14136,(0),null);
var map__14137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14136,(1),null);
var map__14137__$1 = ((((!((map__14137 == null)))?((((map__14137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14137):map__14137);
var cm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14137__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14137__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__14142 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(text,cm.getValue());
if(changed_QMARK__14142){
cm.setValue(text);
} else {
}

var G__14143 = seq__14132;
var G__14144 = chunk__14133;
var G__14145 = count__14134;
var G__14146 = (i__14135 + (1));
seq__14132 = G__14143;
chunk__14133 = G__14144;
count__14134 = G__14145;
i__14135 = G__14146;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__14132);
if(temp__4425__auto__){
var seq__14132__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14132__$1)){
var c__7258__auto__ = cljs.core.chunk_first(seq__14132__$1);
var G__14147 = cljs.core.chunk_rest(seq__14132__$1);
var G__14148 = c__7258__auto__;
var G__14149 = cljs.core.count(c__7258__auto__);
var G__14150 = (0);
seq__14132 = G__14147;
chunk__14133 = G__14148;
count__14134 = G__14149;
i__14135 = G__14150;
continue;
} else {
var vec__14139 = cljs.core.first(seq__14132__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14139,(0),null);
var map__14140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14139,(1),null);
var map__14140__$1 = ((((!((map__14140 == null)))?((((map__14140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14140):map__14140);
var cm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14140__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14140__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__14151 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(text,cm.getValue());
if(changed_QMARK__14151){
cm.setValue(text);
} else {
}

var G__14152 = cljs.core.next(seq__14132__$1);
var G__14153 = null;
var G__14154 = (0);
var G__14155 = (0);
seq__14132 = G__14152;
chunk__14133 = G__14153;
count__14134 = G__14154;
i__14135 = G__14155;
continue;
}
} else {
return null;
}
}
break;
}
});
cljsfiddle.parinfer_codemirror.editor.force_editor_sync_BANG_ = (function cljsfiddle$parinfer_codemirror$editor$force_editor_sync_BANG_(){
var seq__14166 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljsfiddle.state.state) : cljs.core.deref.call(null,cljsfiddle.state.state)));
var chunk__14167 = null;
var count__14168 = (0);
var i__14169 = (0);
while(true){
if((i__14169 < count__14168)){
var vec__14170 = chunk__14167.cljs$core$IIndexed$_nth$arity$2(null,i__14169);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14170,(0),null);
var map__14171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14170,(1),null);
var map__14171__$1 = ((((!((map__14171 == null)))?((((map__14171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14171):map__14171);
var cm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14171__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14171__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);

var G__14176 = seq__14166;
var G__14177 = chunk__14167;
var G__14178 = count__14168;
var G__14179 = (i__14169 + (1));
seq__14166 = G__14176;
chunk__14167 = G__14177;
count__14168 = G__14178;
i__14169 = G__14179;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__14166);
if(temp__4425__auto__){
var seq__14166__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14166__$1)){
var c__7258__auto__ = cljs.core.chunk_first(seq__14166__$1);
var G__14180 = cljs.core.chunk_rest(seq__14166__$1);
var G__14181 = c__7258__auto__;
var G__14182 = cljs.core.count(c__7258__auto__);
var G__14183 = (0);
seq__14166 = G__14180;
chunk__14167 = G__14181;
count__14168 = G__14182;
i__14169 = G__14183;
continue;
} else {
var vec__14173 = cljs.core.first(seq__14166__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14173,(0),null);
var map__14174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14173,(1),null);
var map__14174__$1 = ((((!((map__14174 == null)))?((((map__14174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14174):map__14174);
var cm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14174__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14174__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);

var G__14184 = cljs.core.next(seq__14166__$1);
var G__14185 = null;
var G__14186 = (0);
var G__14187 = (0);
seq__14166 = G__14184;
chunk__14167 = G__14185;
count__14168 = G__14186;
i__14169 = G__14187;
continue;
}
} else {
return null;
}
}
break;
}
});
cljsfiddle.parinfer_codemirror.editor.start_editor_sync_BANG_ = (function cljsfiddle$parinfer_codemirror$editor$start_editor_sync_BANG_(){
cljs.core.add_watch(cljsfiddle.state.state,new cljs.core.Keyword(null,"editor-updater","editor-updater",-323951652),cljsfiddle.parinfer_codemirror.editor.on_state_change);

return cljsfiddle.parinfer_codemirror.editor.force_editor_sync_BANG_();
});

//# sourceMappingURL=editor.js.map