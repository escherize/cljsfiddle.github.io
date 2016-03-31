// Compiled by ClojureScript 1.7.228 {:static-fns true}
goog.provide('parinfer.paren_mode');
goog.require('cljs.core');
goog.require('parinfer.reader');
goog.require('parinfer.indent_mode');
goog.require('parinfer.string');
goog.require('clojure.string');
/**
 * An initial state of our running state.
 */
parinfer.paren_mode.initial_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"backup","backup",26347393),new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"dedent-x","dedent-x",1097411627),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136),new cljs.core.Keyword(null,"line-no","line-no",-666819466),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762),new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232)],[cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-dy","line-dy",41667486),null,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),null], null),null,cljs.core.PersistentVector.EMPTY,false,(-1),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null),(0)]);
parinfer.paren_mode.append_delim_trail = (function parinfer$paren_mode$append_delim_trail(p__14004){
var map__14008 = p__14004;
var map__14008__$1 = ((((!((map__14008 == null)))?((((map__14008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14008):map__14008);
var state = map__14008__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14008__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14008__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var insert = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14008__$1,new cljs.core.Keyword(null,"insert","insert",1286475395));
var opener = cljs.core.peek(stack);
var close_ch = (function (){var G__14010 = new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(opener);
return (parinfer.reader.matching_delim.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.matching_delim.cljs$core$IFn$_invoke$arity$1(G__14010) : parinfer.reader.matching_delim.call(null,G__14010));
})();
var stack__$1 = cljs.core.pop(stack);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"stack","stack",-793405930),stack__$1,cljs.core.array_seq([new cljs.core.Keyword(null,"dedent-x","dedent-x",1097411627),new cljs.core.Keyword(null,"x-pos","x-pos",-382213783).cljs$core$IFn$_invoke$arity$1(opener)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),(line_no + new cljs.core.Keyword(null,"line-dy","line-dy",41667486).cljs$core$IFn$_invoke$arity$1(insert))], null),parinfer.string.insert_string,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783).cljs$core$IFn$_invoke$arity$1(insert),close_ch),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"x-pos","x-pos",-382213783)], null),cljs.core.inc);
});
parinfer.paren_mode.min_indent = (function parinfer$paren_mode$min_indent(x,p__14011){
var map__14014 = p__14011;
var map__14014__$1 = ((((!((map__14014 == null)))?((((map__14014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14014):map__14014);
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14014__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var opener = cljs.core.peek(stack);
var temp__4423__auto__ = new cljs.core.Keyword(null,"x-pos","x-pos",-382213783).cljs$core$IFn$_invoke$arity$1(opener);
if(cljs.core.truth_(temp__4423__auto__)){
var start_x = temp__4423__auto__;
var x__6786__auto__ = (start_x + (1));
var y__6787__auto__ = x;
return ((x__6786__auto__ > y__6787__auto__) ? x__6786__auto__ : y__6787__auto__);
} else {
return x;
}
});
parinfer.paren_mode.min_dedent = (function parinfer$paren_mode$min_dedent(x,p__14016){
var map__14019 = p__14016;
var map__14019__$1 = ((((!((map__14019 == null)))?((((map__14019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14019):map__14019);
var dedent_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14019__$1,new cljs.core.Keyword(null,"dedent-x","dedent-x",1097411627));
if(cljs.core.truth_(dedent_x)){
var x__6793__auto__ = dedent_x;
var y__6794__auto__ = x;
return ((x__6793__auto__ < y__6794__auto__) ? x__6793__auto__ : y__6794__auto__);
} else {
return x;
}
});
parinfer.paren_mode.correct_indent = (function parinfer$paren_mode$correct_indent(p__14021){
var map__14024 = p__14021;
var map__14024__$1 = ((((!((map__14024 == null)))?((((map__14024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14024):map__14024);
var state = map__14024__$1;
var indent_delta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14024__$1,new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232));
var x_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14024__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14024__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var dedent_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14024__$1,new cljs.core.Keyword(null,"dedent-x","dedent-x",1097411627));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14024__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var opener = cljs.core.peek(stack);
var delta = new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232).cljs$core$IFn$_invoke$arity$2(opener,(0));
var new_x = parinfer.paren_mode.min_dedent(parinfer.paren_mode.min_indent((x_pos + delta),state),state);
var new_delta = (indent_delta + (new_x - x_pos));
var indent_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(new_x," "));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),line_no], null),indent_str),new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232),new_delta,cljs.core.array_seq([new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new_x,new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136),false,new cljs.core.Keyword(null,"dedent-x","dedent-x",1097411627),null], 0));
});
parinfer.paren_mode.handle_cursor_delta = (function parinfer$paren_mode$handle_cursor_delta(p__14026){
var map__14030 = p__14026;
var map__14030__$1 = ((((!((map__14030 == null)))?((((map__14030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14030):map__14030);
var state = map__14030__$1;
var indent_delta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14030__$1,new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14030__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var x_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14030__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var cursor_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14030__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var cursor_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14030__$1,new cljs.core.Keyword(null,"cursor-x","cursor-x",475204266));
var cursor_dx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14030__$1,new cljs.core.Keyword(null,"cursor-dx","cursor-dx",133069327));
var cursor_delta_QMARK_ = (function (){var and__6443__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cursor_line,line_no);
if(and__6443__auto__){
var and__6443__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cursor_x,x_pos);
if(and__6443__auto____$1){
return cursor_dx;
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})();
var G__14032 = state;
var G__14032__$1 = (cljs.core.truth_(cursor_delta_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__14032,new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232),cljs.core._PLUS_,cursor_dx):G__14032);
return G__14032__$1;
});
/**
 * Update the state by handling a possible indentation trigger.
 */
parinfer.paren_mode.process_indent = (function parinfer$paren_mode$process_indent(p__14033){
var map__14037 = p__14033;
var map__14037__$1 = ((((!((map__14037 == null)))?((((map__14037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14037):map__14037);
var state = map__14037__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14037__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var track_indent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14037__$1,new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136));
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14037__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14037__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14037__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var x_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14037__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var cursor_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14037__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var cursor_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14037__$1,new cljs.core.Keyword(null,"cursor-x","cursor-x",475204266));
var cursor_dx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14037__$1,new cljs.core.Keyword(null,"cursor-dx","cursor-dx",133069327));
var check_indent_QMARK_ = (function (){var and__6443__auto__ = track_indent_QMARK_;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = parinfer.reader.in_code_QMARK_(stack);
if(cljs.core.truth_(and__6443__auto____$1)){
return (cljs.core.not(parinfer.reader.whitespace_QMARK_(ch))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(";",ch));
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})();
var at_valid_closer_QMARK_ = (function (){var and__6443__auto__ = check_indent_QMARK_;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1(ch) : parinfer.reader.closing_delim_QMARK_.call(null,ch));
if(cljs.core.truth_(and__6443__auto____$1)){
return parinfer.reader.valid_closer_QMARK_(stack,ch);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})();
var cursor_holding_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(line_no,cursor_line)) && ((cursor_x <= x_pos));
var move_closer_QMARK_ = (function (){var and__6443__auto__ = at_valid_closer_QMARK_;
if(cljs.core.truth_(and__6443__auto__)){
return !(cursor_holding_QMARK_);
} else {
return and__6443__auto__;
}
})();
var skip_QMARK_ = (function (){var and__6443__auto__ = check_indent_QMARK_;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1(ch) : parinfer.reader.closing_delim_QMARK_.call(null,ch));
if(cljs.core.truth_(and__6443__auto____$1)){
return !(cursor_holding_QMARK_);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})();
var at_indent_QMARK_ = (function (){var and__6443__auto__ = check_indent_QMARK_;
if(cljs.core.truth_(and__6443__auto__)){
return cljs.core.not(skip_QMARK_);
} else {
return and__6443__auto__;
}
})();
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"process?","process?",-106844121),cljs.core.not(skip_QMARK_));
var G__14039 = state__$1;
var G__14039__$1 = (cljs.core.truth_(move_closer_QMARK_)?parinfer.paren_mode.append_delim_trail(G__14039):G__14039);
var G__14039__$2 = parinfer.paren_mode.handle_cursor_delta(G__14039__$1)
;
var G__14039__$3 = (cljs.core.truth_(at_indent_QMARK_)?parinfer.paren_mode.correct_indent(G__14039__$2):G__14039__$2);
return G__14039__$3;
});
/**
 * Update the state by processing the given character and its position.
 */
parinfer.paren_mode.process_char = (function parinfer$paren_mode$process_char(p__14040,ch){
var map__14044 = p__14040;
var map__14044__$1 = ((((!((map__14044 == null)))?((((map__14044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14044):map__14044);
var state = map__14044__$1;
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14044__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14044__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var x_pos = cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(lines,line_no));
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),x_pos,cljs.core.array_seq([new cljs.core.Keyword(null,"ch","ch",-554717905),[cljs.core.str(ch)].join('')], 0));
var state__$2 = parinfer.paren_mode.process_indent(state__$1);
var G__14046 = state__$2;
var G__14046__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"process?","process?",-106844121).cljs$core$IFn$_invoke$arity$1(state__$2))?parinfer.indent_mode.process_char_STAR_(G__14046):G__14046);
return G__14046__$1;
});
parinfer.paren_mode.reinsert_delims = (function parinfer$paren_mode$reinsert_delims(p__14047){
var map__14050 = p__14047;
var map__14050__$1 = ((((!((map__14050 == null)))?((((map__14050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14050):map__14050);
var state = map__14050__$1;
var removed_delims = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14050__$1,new cljs.core.Keyword(null,"removed-delims","removed-delims",137127226));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__14050,map__14050__$1,state,removed_delims){
return (function (state__$1,_delim){
return parinfer.paren_mode.append_delim_trail(state__$1);
});})(map__14050,map__14050__$1,state,removed_delims))
,state,removed_delims);
});
/**
 * Update the state by processing the given line of text.
 */
parinfer.paren_mode.process_line = (function parinfer$paren_mode$process_line(var_args){
var args14053 = [];
var len__7513__auto___14059 = arguments.length;
var i__7514__auto___14060 = (0);
while(true){
if((i__7514__auto___14060 < len__7513__auto___14059)){
args14053.push((arguments[i__7514__auto___14060]));

var G__14061 = (i__7514__auto___14060 + (1));
i__7514__auto___14060 = G__14061;
continue;
} else {
}
break;
}

var G__14055 = args14053.length;
switch (G__14055) {
case 1:
return parinfer.paren_mode.process_line.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.paren_mode.process_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14053.length)].join('')));

}
});

parinfer.paren_mode.process_line.cljs$core$IFn$_invoke$arity$1 = (function (line){
return parinfer.paren_mode.process_line.cljs$core$IFn$_invoke$arity$2(parinfer.paren_mode.initial_state,line);
});

parinfer.paren_mode.process_line.cljs$core$IFn$_invoke$arity$2 = (function (p__14056,line){
var map__14057 = p__14056;
var map__14057__$1 = ((((!((map__14057 == null)))?((((map__14057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14057):map__14057);
var state = map__14057__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14057__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14057__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14057__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var cursor_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14057__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var line_no__$1 = (line_no + (1));
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"backup","backup",26347393),cljs.core.PersistentVector.EMPTY,cljs.core.array_seq([new cljs.core.Keyword(null,"cursor-in-comment?","cursor-in-comment?",1676951135),false,new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null),new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136),cljs.core.not(parinfer.reader.in_str_QMARK_(stack)),new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232),(0),new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,""),new cljs.core.Keyword(null,"line-no","line-no",-666819466),line_no__$1,new cljs.core.Keyword(null,"removed-delims","removed-delims",137127226),cljs.core.PersistentVector.EMPTY], 0));
var state__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"line-dy","line-dy",41667486)], null),((function (line_no__$1,state__$1,map__14057,map__14057__$1,state,stack,lines,line_no,cursor_line){
return (function (p1__14052_SHARP_){
if(cljs.core.truth_(p1__14052_SHARP_)){
return (p1__14052_SHARP_ - (1));
} else {
return null;
}
});})(line_no__$1,state__$1,map__14057,map__14057__$1,state,stack,lines,line_no,cursor_line))
);
var state__$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(parinfer.paren_mode.process_char,state__$2,[cljs.core.str(line),cljs.core.str("\n")].join(''));
var state__$4 = parinfer.paren_mode.reinsert_delims(parinfer.indent_mode.remove_delim_trail(state__$3));
return state__$4;
});

parinfer.paren_mode.process_line.cljs$lang$maxFixedArity = 2;
parinfer.paren_mode.finalize_state = (function parinfer$paren_mode$finalize_state(p__14063){
var map__14066 = p__14063;
var map__14066__$1 = ((((!((map__14066 == null)))?((((map__14066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14066):map__14066);
var state = map__14066__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14066__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var valid_QMARK_ = cljs.core.empty_QMARK_(stack);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"valid?","valid?",-212412379),valid_QMARK_);
});
/**
 * Update the state by processing the given text.
 */
parinfer.paren_mode.process_text = (function parinfer$paren_mode$process_text(var_args){
var args14068 = [];
var len__7513__auto___14071 = arguments.length;
var i__7514__auto___14072 = (0);
while(true){
if((i__7514__auto___14072 < len__7513__auto___14071)){
args14068.push((arguments[i__7514__auto___14072]));

var G__14073 = (i__7514__auto___14072 + (1));
i__7514__auto___14072 = G__14073;
continue;
} else {
}
break;
}

var G__14070 = args14068.length;
switch (G__14070) {
case 1:
return parinfer.paren_mode.process_text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.paren_mode.process_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14068.length)].join('')));

}
});

parinfer.paren_mode.process_text.cljs$core$IFn$_invoke$arity$1 = (function (text){
return parinfer.paren_mode.process_text.cljs$core$IFn$_invoke$arity$2(text,null);
});

parinfer.paren_mode.process_text.cljs$core$IFn$_invoke$arity$2 = (function (text,options){
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([parinfer.paren_mode.initial_state,options], 0));
var lines = parinfer.string.get_lines(text);
var state__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(parinfer.paren_mode.process_line,state,lines);
var state__$2 = parinfer.paren_mode.finalize_state(state__$1);
return state__$2;
});

parinfer.paren_mode.process_text.cljs$lang$maxFixedArity = 2;
/**
 * Fully process the given text using Paren Mode.
 * 
 *   'text' is the full text.
 * 
 *   'options' is an optional map with supported keys:
 *  :cursor-x     - x position of the cursor (zero-based)
 *  :cursor-line  - line number of the cursor (zero-based)
 * 
 *   Returns a map:
 *  :text     - full text output
 *  :valid?   - indicates if the input was valid
 *  :state    - cached state to be passed to `format-text-change` (once it is implemented)
 *   
 */
parinfer.paren_mode.format_text = (function parinfer$paren_mode$format_text(var_args){
var args14075 = [];
var len__7513__auto___14078 = arguments.length;
var i__7514__auto___14079 = (0);
while(true){
if((i__7514__auto___14079 < len__7513__auto___14078)){
args14075.push((arguments[i__7514__auto___14079]));

var G__14080 = (i__7514__auto___14079 + (1));
i__7514__auto___14079 = G__14080;
continue;
} else {
}
break;
}

var G__14077 = args14075.length;
switch (G__14077) {
case 1:
return parinfer.paren_mode.format_text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.paren_mode.format_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14075.length)].join('')));

}
});

parinfer.paren_mode.format_text.cljs$core$IFn$_invoke$arity$1 = (function (text){
return parinfer.paren_mode.format_text.cljs$core$IFn$_invoke$arity$2(text,null);
});

parinfer.paren_mode.format_text.cljs$core$IFn$_invoke$arity$2 = (function (text,options){
var state = parinfer.paren_mode.process_text.cljs$core$IFn$_invoke$arity$2(text,options);
var out_text = (cljs.core.truth_(new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(state))?clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(state)):text);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),out_text,new cljs.core.Keyword(null,"valid?","valid?",-212412379),new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"state","state",-1988618099),state], null);
});

parinfer.paren_mode.format_text.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=paren_mode.js.map