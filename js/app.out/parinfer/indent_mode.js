// Compiled by ClojureScript 1.7.228 {:static-fns true}
goog.provide('parinfer.indent_mode');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('parinfer.string');
goog.require('parinfer.reader');
/**
 * An initial state of our running state.
 */
parinfer.indent_mode.initial_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728),new cljs.core.Keyword(null,"backup","backup",26347393),new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"postline-states","postline-states",1667653678),new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136),new cljs.core.Keyword(null,"line-no","line-no",-666819466),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762)],[cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-dy","line-dy",41667486),null,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),null], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,false,(-1),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null)]);
/**
 * Update the state by inferring closing delimiters.
 *   Do this by using the given indentation level.
 * 
 *   Example:
 * 
 *   (defn foo [a b
 *   ret           ;; <---  When we process `r`, we detect indentation, then...
 * 
 *   (defn foo [a b]  ;; <---  ... we insert a `]` after `b` since `[` is after `r` on the x-axis.
 *   ret           ;; <---  A `)` is inserted after `ret` if no further indented lines found.
 *   
 */
parinfer.indent_mode.close_delims = (function parinfer$indent_mode$close_delims(var_args){
var args13847 = [];
var len__7513__auto___13855 = arguments.length;
var i__7514__auto___13856 = (0);
while(true){
if((i__7514__auto___13856 < len__7513__auto___13855)){
args13847.push((arguments[i__7514__auto___13856]));

var G__13857 = (i__7514__auto___13856 + (1));
i__7514__auto___13856 = G__13857;
continue;
} else {
}
break;
}

var G__13849 = args13847.length;
switch (G__13849) {
case 1:
return parinfer.indent_mode.close_delims.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.indent_mode.close_delims.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13847.length)].join('')));

}
});

parinfer.indent_mode.close_delims.cljs$core$IFn$_invoke$arity$1 = (function (state){
return parinfer.indent_mode.close_delims.cljs$core$IFn$_invoke$arity$2(state,(0));
});

parinfer.indent_mode.close_delims.cljs$core$IFn$_invoke$arity$2 = (function (state,indent_x){
var vec__13850 = (function (){var stack = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(state);
var delims = "";
while(true){
if(cljs.core.not(cljs.core.seq(stack))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,delims], null);
} else {
var map__13852 = cljs.core.peek(stack);
var map__13852__$1 = ((((!((map__13852 == null)))?((((map__13852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13852):map__13852);
var x_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13852__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13852__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
if((x_pos >= indent_x)){
var G__13859 = cljs.core.pop(stack);
var G__13860 = [cljs.core.str(delims),cljs.core.str((parinfer.reader.matching_delim.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.matching_delim.cljs$core$IFn$_invoke$arity$1(ch) : parinfer.reader.matching_delim.call(null,ch)))].join('');
stack = G__13859;
delims = G__13860;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,delims], null);
}
}
break;
}
})();
var stack = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13850,(0),null);
var delims = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13850,(1),null);
var map__13851 = new cljs.core.Keyword(null,"insert","insert",1286475395).cljs$core$IFn$_invoke$arity$1(state);
var map__13851__$1 = ((((!((map__13851 == null)))?((((map__13851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13851):map__13851);
var line_dy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13851__$1,new cljs.core.Keyword(null,"line-dy","line-dy",41667486));
var x_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13851__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var line_no = (new cljs.core.Keyword(null,"line-no","line-no",-666819466).cljs$core$IFn$_invoke$arity$1(state) + line_dy);
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),line_no], null),parinfer.string.insert_string,x_pos,delims),new cljs.core.Keyword(null,"stack","stack",-793405930),stack);
return state__$1;
});

parinfer.indent_mode.close_delims.cljs$lang$maxFixedArity = 2;
/**
 * Update the state's delim trail as we scan across a line.
 *   We eventually remove the delim trail since the indented
 *   content below can cause the delims to move.
 * 
 *   Example:
 * 
 *   (foo (+ 2 3) [(bar)] )    ;; a potential comment
 *                  ^^^^
 *                   |
 *                   +-- trailing delims that we will remove
 *                        (notice whitespace will also be removed)
 *   
 */
parinfer.indent_mode.update_delim_trail = (function parinfer$indent_mode$update_delim_trail(p__13862){
var map__13866 = p__13862;
var map__13866__$1 = ((((!((map__13866 == null)))?((((map__13866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13866):map__13866);
var state = map__13866__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13866__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var delim_trail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13866__$1,new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762));
var backup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13866__$1,new cljs.core.Keyword(null,"backup","backup",26347393));
var x_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13866__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13866__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var cursor_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13866__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13866__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var cursor_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13866__$1,new cljs.core.Keyword(null,"cursor-x","cursor-x",475204266));
var cursor_in_comment_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13866__$1,new cljs.core.Keyword(null,"cursor-in-comment?","cursor-in-comment?",1676951135));
var pass_char_QMARK_ = (function (){var or__6455__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(";",ch);
if(or__6455__auto__){
return or__6455__auto__;
} else {
var or__6455__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",ch);
if(or__6455__auto____$1){
return or__6455__auto____$1;
} else {
var or__6455__auto____$2 = parinfer.reader.whitespace_QMARK_(ch);
if(cljs.core.truth_(or__6455__auto____$2)){
return or__6455__auto____$2;
} else {
return (parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1(ch) : parinfer.reader.closing_delim_QMARK_.call(null,ch));
}
}
}
})();
var reset_QMARK_ = (cljs.core.truth_(parinfer.reader.in_code_QMARK_(stack))?(function (){var or__6455__auto__ = parinfer.reader.escaping_QMARK_(stack);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core.not(pass_char_QMARK_);
}
})():null);
var cursor_in_comment_QMARK___$1 = (function (){var or__6455__auto__ = cursor_in_comment_QMARK_;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
var and__6443__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cursor_line,line_no);
if(and__6443__auto__){
var and__6443__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x_pos,cursor_x);
if(and__6443__auto____$1){
return parinfer.reader.in_comment_QMARK_(stack);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
}
})();
var update_QMARK_ = (function (){var and__6443__auto__ = parinfer.reader.in_code_QMARK_(stack);
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = cljs.core.not(parinfer.reader.escaping_QMARK_(stack));
if(and__6443__auto____$1){
var and__6443__auto____$2 = (parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1(ch) : parinfer.reader.closing_delim_QMARK_.call(null,ch));
if(cljs.core.truth_(and__6443__auto____$2)){
return parinfer.reader.valid_closer_QMARK_(stack,ch);
} else {
return and__6443__auto____$2;
}
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})();
var backup__$1 = (function (){var G__13868 = backup;
var G__13868__$1 = (cljs.core.truth_(reset_QMARK_)?cljs.core.empty(G__13868):G__13868);
return G__13868__$1;
})();
var delim_trail__$1 = (cljs.core.truth_(reset_QMARK_)?cljs.core.PersistentArrayMap.EMPTY:(cljs.core.truth_(update_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(delim_trail,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981)], null),((function (pass_char_QMARK_,reset_QMARK_,cursor_in_comment_QMARK___$1,update_QMARK_,backup__$1,map__13866,map__13866__$1,state,stack,delim_trail,backup,x_pos,ch,cursor_line,line_no,cursor_x,cursor_in_comment_QMARK_){
return (function (p1__13861_SHARP_){
var or__6455__auto__ = p1__13861_SHARP_;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return x_pos;
}
});})(pass_char_QMARK_,reset_QMARK_,cursor_in_comment_QMARK___$1,update_QMARK_,backup__$1,map__13866,map__13866__$1,state,stack,delim_trail,backup,x_pos,ch,cursor_line,line_no,cursor_x,cursor_in_comment_QMARK_))
),new cljs.core.Keyword(null,"end","end",-268185958),(x_pos + (1))):delim_trail
));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"cursor-in-comment?","cursor-in-comment?",1676951135),cursor_in_comment_QMARK___$1,cljs.core.array_seq([new cljs.core.Keyword(null,"backup","backup",26347393),backup__$1,new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762),delim_trail__$1], 0));
});
/**
 * The presence of the cursor can block the removal of some part of the delim trail.
 */
parinfer.indent_mode.block_delim_trail = (function parinfer$indent_mode$block_delim_trail(p__13869){
var map__13877 = p__13869;
var map__13877__$1 = ((((!((map__13877 == null)))?((((map__13877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13877):map__13877);
var state = map__13877__$1;
var delim_trail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13877__$1,new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13877__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var cursor_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13877__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var cursor_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13877__$1,new cljs.core.Keyword(null,"cursor-x","cursor-x",475204266));
var cursor_in_comment_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13877__$1,new cljs.core.Keyword(null,"cursor-in-comment?","cursor-in-comment?",1676951135));
var map__13879 = delim_trail;
var map__13879__$1 = ((((!((map__13879 == null)))?((((map__13879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13879):map__13879);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13879__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13879__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var cursor_block_QMARK_ = (function (){var and__6443__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(line_no,cursor_line);
if(and__6443__auto__){
var and__6443__auto____$1 = start;
if(cljs.core.truth_(and__6443__auto____$1)){
return ((cursor_x > start)) && (cljs.core.not(cursor_in_comment_QMARK_));
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})();
var start__$1 = (function (){var G__13882 = start;
var G__13882__$1 = (cljs.core.truth_((function (){var and__6443__auto__ = start;
if(cljs.core.truth_(and__6443__auto__)){
return cursor_block_QMARK_;
} else {
return and__6443__auto__;
}
})())?(function (){var x__6786__auto__ = G__13882;
var y__6787__auto__ = cursor_x;
return ((x__6786__auto__ > y__6787__auto__) ? x__6786__auto__ : y__6787__auto__);
})():G__13882);
return G__13882__$1;
})();
var end__$1 = (function (){var G__13883 = end;
var G__13883__$1 = (cljs.core.truth_((function (){var and__6443__auto__ = end;
if(cljs.core.truth_(and__6443__auto__)){
return cursor_block_QMARK_;
} else {
return and__6443__auto__;
}
})())?(function (){var x__6786__auto__ = G__13883;
var y__6787__auto__ = cursor_x;
return ((x__6786__auto__ > y__6787__auto__) ? x__6786__auto__ : y__6787__auto__);
})():G__13883);
return G__13883__$1;
})();
var vec__13880 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start__$1,end__$1))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,end__$1], null));
var start__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13880,(0),null);
var end__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13880,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),start__$2,new cljs.core.Keyword(null,"end","end",-268185958),end__$2], null));
});
/**
 * Update the state by removing our marked delim trail.
 *   We remove the delims from the appropriate line of text,
 *   while also restoring their matching delims onto the stack.
 * 
 *   Example:
 * 
 *   (foo (+ 2 3) [(bar)] )    ;; a potential comment
 *   ^            ^^   ^^^^
 *   |            |     |
 *   |____________|     +-- Remove these from the text.
 *       |
 *       +-- Restore these onto the delim stack.
 *           (fyi, we originally popped them off to validate
 *            the closing delims. now we need them back to
 *            infer closing delims for indented lines.)
 *   
 */
parinfer.indent_mode.remove_delim_trail = (function parinfer$indent_mode$remove_delim_trail(p__13884){
var map__13891 = p__13884;
var map__13891__$1 = ((((!((map__13891 == null)))?((((map__13891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13891):map__13891);
var state = map__13891__$1;
var delim_trail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13891__$1,new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762));
var insert = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13891__$1,new cljs.core.Keyword(null,"insert","insert",1286475395));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13891__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13891__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var backup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13891__$1,new cljs.core.Keyword(null,"backup","backup",26347393));
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13891__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var map__13893 = delim_trail;
var map__13893__$1 = ((((!((map__13893 == null)))?((((map__13893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13893):map__13893);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13893__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13893__$1,new cljs.core.Keyword(null,"end","end",-268185958));
if(cljs.core.truth_((function (){var and__6443__auto__ = start;
if(cljs.core.truth_(and__6443__auto__)){
return end;
} else {
return and__6443__auto__;
}
})())){
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lines,line_no);
var delims = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(parinfer.reader.closing_delim_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(line,start,end)));
var remove_count = cljs.core.count(delims);
var ignore_count = (cljs.core.count(backup) - remove_count);
var vec__13895 = (function (){var backup__$1 = backup;
var stack__$1 = stack;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ignore_count,cljs.core.count(backup__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backup__$1,stack__$1], null);
} else {
var G__13897 = cljs.core.pop(backup__$1);
var G__13898 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack__$1,cljs.core.peek(backup__$1));
backup__$1 = G__13897;
stack__$1 = G__13898;
continue;
}
break;
}
})();
var backup__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13895,(0),null);
var stack__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13895,(1),null);
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),line_no], null),parinfer.string.remove_str_range,start,end),new cljs.core.Keyword(null,"backup","backup",26347393),backup__$1,cljs.core.array_seq([new cljs.core.Keyword(null,"stack","stack",-793405930),stack__$1,new cljs.core.Keyword(null,"removed-delims","removed-delims",137127226),delims], 0));
var insert_line_QMARK_ = (new cljs.core.Keyword(null,"line-dy","line-dy",41667486).cljs$core$IFn$_invoke$arity$1(insert) === (0));
var state__$2 = (function (){var G__13896 = state__$1;
var G__13896__$1 = ((insert_line_QMARK_)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__13896,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"x-pos","x-pos",-382213783)], null),cljs.core.min,start):G__13896);
return G__13896__$1;
})();
return state__$2;
} else {
return state;
}
});
/**
 * Update the state's trailing delimiter insertion point as we scan the line.
 * 
 *   Example:
 * 
 *   (defn foo [a b] ret)
 *   ^^^^^ ^^^ ^^ ^  ^^^
 *                  |
 *                  +-- final insertion point candidate
 * 
 *   Special rules allow the user to freely position the trailing
 *   delimiters while editing a line.
 * 
 *   
 */
parinfer.indent_mode.update_insertion_pt = (function parinfer$indent_mode$update_insertion_pt(p__13899){
var map__13903 = p__13899;
var map__13903__$1 = ((((!((map__13903 == null)))?((((map__13903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13903):map__13903);
var state = map__13903__$1;
var track_indent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13903__$1,new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136));
var cursor_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13903__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13903__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13903__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13903__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var x_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13903__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13903__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var prev_ch = [cljs.core.str(cljs.core.last(cljs.core.get.cljs$core$IFn$_invoke$arity$2(lines,line_no)))].join('');
var insert_at_char_QMARK_ = (function (){var and__6443__auto__ = parinfer.reader.in_code_QMARK_(stack);
if(cljs.core.truth_(and__6443__auto__)){
return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",ch)) && ((cljs.core.not(parinfer.reader.whitespace_QMARK_(ch))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",prev_ch))) && ((cljs.core.not((parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1(ch) : parinfer.reader.closing_delim_QMARK_.call(null,ch)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(line_no,cursor_line)));
} else {
return and__6443__auto__;
}
})();
var insert = (cljs.core.truth_(insert_at_char_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-dy","line-dy",41667486),(0),new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),(x_pos + (1))], null):null);
var G__13905 = state;
var G__13905__$1 = (cljs.core.truth_(insert)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13905,new cljs.core.Keyword(null,"insert","insert",1286475395),insert):G__13905);
return G__13905__$1;
});
parinfer.indent_mode.get_cached_state = (function parinfer$indent_mode$get_cached_state(state){
return cljs.core.select_keys(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"insert","insert",1286475395)], null));
});
/**
 * Cache a subset of the state after some event.
 *   This is used by process-text-change.
 */
parinfer.indent_mode.commit_cached_state = (function parinfer$indent_mode$commit_cached_state(state,key_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,key_,cljs.core.conj,parinfer.indent_mode.get_cached_state(state));
});
/**
 * Update the state by handling a possible indentation trigger.
 * 
 *   Example:
 * 
 *   (defn foo [a b
 *   ret           ;; <---  When we process `r`, we detect indentation, then
 *                 ;;       we start backtracking to insert closing delimiters on a previous line.
 * 
 * 
 *   (defn foo [a b]
 *   )             ;; <---  If a line starts with a closing delimiter, it is not
 *                 ;;       considered an indentation trigger.  In fact, we skip
 *                 ;;       the character completely, removing it from the line.
 *   
 */
parinfer.indent_mode.process_indent = (function parinfer$indent_mode$process_indent(p__13906){
var map__13909 = p__13906;
var map__13909__$1 = ((((!((map__13909 == null)))?((((map__13909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13909):map__13909);
var state = map__13909__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13909__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var track_indent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13909__$1,new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136));
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13909__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13909__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var x_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13909__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13909__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
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
var skip_QMARK_ = (function (){var and__6443__auto__ = check_indent_QMARK_;
if(cljs.core.truth_(and__6443__auto__)){
return (parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1(ch) : parinfer.reader.closing_delim_QMARK_.call(null,ch));
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
if(cljs.core.truth_(at_indent_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parinfer.indent_mode.commit_cached_state(parinfer.indent_mode.close_delims.cljs$core$IFn$_invoke$arity$2(state__$1,x_pos),new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728)),new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136),false,cljs.core.array_seq([new cljs.core.Keyword(null,"processed-indent?","processed-indent?",526120923),true], 0));
} else {
return state__$1;
}
});
/**
 * Update the state by adding processed character to the line.
 */
parinfer.indent_mode.update_line = (function parinfer$indent_mode$update_line(p__13911){
var map__13914 = p__13911;
var map__13914__$1 = ((((!((map__13914 == null)))?((((map__13914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13914):map__13914);
var state = map__13914__$1;
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13914__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13914__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),line_no], null),cljs.core.str,ch);
});
/**
 * Save the text of a line before trailing delims were inserted.
 *   This allows to restore them when skipping to changed lines in
 *   process-text-change.
 */
parinfer.indent_mode.save_preinsert_line = (function parinfer$indent_mode$save_preinsert_line(p__13916){
var map__13920 = p__13916;
var map__13920__$1 = ((((!((map__13920 == null)))?((((map__13920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13920):map__13920);
var state = map__13920__$1;
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13920__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var insert = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13920__$1,new cljs.core.Keyword(null,"insert","insert",1286475395));
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13920__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var G__13922 = state;
var G__13922__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"line-dy","line-dy",41667486).cljs$core$IFn$_invoke$arity$1(insert)))?cljs.core.assoc_in(G__13922,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"line","line",212345235)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(lines,line_no)):G__13922);
return G__13922__$1;
});
parinfer.indent_mode.process_char_STAR_ = (function parinfer$indent_mode$process_char_STAR_(state){
return parinfer.indent_mode.update_line(parinfer.indent_mode.update_insertion_pt(parinfer.reader.push_char(parinfer.indent_mode.update_delim_trail(state))));
});
/**
 * Update the state by processing the given character and its position.
 */
parinfer.indent_mode.process_char = (function parinfer$indent_mode$process_char(p__13923,ch){
var map__13927 = p__13923;
var map__13927__$1 = ((((!((map__13927 == null)))?((((map__13927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13927):map__13927);
var state = map__13927__$1;
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13927__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13927__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var x_pos = cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(lines,line_no));
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),x_pos,cljs.core.array_seq([new cljs.core.Keyword(null,"ch","ch",-554717905),[cljs.core.str(ch)].join('')], 0));
var state__$2 = parinfer.indent_mode.process_indent(state__$1);
var G__13929 = state__$2;
var G__13929__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"process?","process?",-106844121).cljs$core$IFn$_invoke$arity$1(state__$2))?parinfer.indent_mode.process_char_STAR_(G__13929):G__13929);
return G__13929__$1;
});
/**
 * Update the state by processing the given line of text.
 */
parinfer.indent_mode.process_line = (function parinfer$indent_mode$process_line(var_args){
var args13931 = [];
var len__7513__auto___13938 = arguments.length;
var i__7514__auto___13939 = (0);
while(true){
if((i__7514__auto___13939 < len__7513__auto___13938)){
args13931.push((arguments[i__7514__auto___13939]));

var G__13940 = (i__7514__auto___13939 + (1));
i__7514__auto___13939 = G__13940;
continue;
} else {
}
break;
}

var G__13933 = args13931.length;
switch (G__13933) {
case 1:
return parinfer.indent_mode.process_line.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.indent_mode.process_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13931.length)].join('')));

}
});

parinfer.indent_mode.process_line.cljs$core$IFn$_invoke$arity$1 = (function (line){
return parinfer.indent_mode.process_line.cljs$core$IFn$_invoke$arity$2(parinfer.indent_mode.initial_state,line);
});

parinfer.indent_mode.process_line.cljs$core$IFn$_invoke$arity$2 = (function (p__13934,line){
var map__13935 = p__13934;
var map__13935__$1 = ((((!((map__13935 == null)))?((((map__13935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13935):map__13935);
var state = map__13935__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13935__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13935__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13935__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var cursor_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13935__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var line_no__$1 = (line_no + (1));
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"backup","backup",26347393),cljs.core.PersistentVector.EMPTY,cljs.core.array_seq([new cljs.core.Keyword(null,"cursor-in-comment?","cursor-in-comment?",1676951135),false,new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null),new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136),(cljs.core.seq(stack)) && (cljs.core.not(parinfer.reader.in_str_QMARK_(stack))),new cljs.core.Keyword(null,"processed-indent?","processed-indent?",526120923),false,new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,""),new cljs.core.Keyword(null,"line-no","line-no",-666819466),line_no__$1,new cljs.core.Keyword(null,"removed-delims","removed-delims",137127226),cljs.core.PersistentVector.EMPTY], 0));
var state__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"line-dy","line-dy",41667486)], null),((function (line_no__$1,state__$1,map__13935,map__13935__$1,state,stack,lines,line_no,cursor_line){
return (function (p1__13930_SHARP_){
if(cljs.core.truth_(p1__13930_SHARP_)){
return (p1__13930_SHARP_ - (1));
} else {
return null;
}
});})(line_no__$1,state__$1,map__13935,map__13935__$1,state,stack,lines,line_no,cursor_line))
);
var state__$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(parinfer.indent_mode.process_char,state__$2,[cljs.core.str(line),cljs.core.str("\n")].join(''));
var state__$4 = parinfer.indent_mode.commit_cached_state(parinfer.indent_mode.save_preinsert_line(parinfer.indent_mode.remove_delim_trail(parinfer.indent_mode.block_delim_trail(state__$3))),new cljs.core.Keyword(null,"postline-states","postline-states",1667653678));
var state__$5 = (function (){var G__13937 = state__$4;
var G__13937__$1 = ((cljs.core.not(new cljs.core.Keyword(null,"processed-indent?","processed-indent?",526120923).cljs$core$IFn$_invoke$arity$1(state__$4)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__13937,new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728),cljs.core.conj,null):G__13937);
return G__13937__$1;
})();
return state__$5;
});

parinfer.indent_mode.process_line.cljs$lang$maxFixedArity = 2;
parinfer.indent_mode.finalize_state = (function parinfer$indent_mode$finalize_state(p__13942){
var map__13946 = p__13942;
var map__13946__$1 = ((((!((map__13946 == null)))?((((map__13946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13946):map__13946);
var state = map__13946__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13946__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var valid_QMARK_ = cljs.core.not(parinfer.reader.in_str_QMARK_(stack));
var close_delims_QMARK_ = (valid_QMARK_) && (cljs.core.seq(stack));
var G__13948 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"valid?","valid?",-212412379),valid_QMARK_);
var G__13948__$1 = ((close_delims_QMARK_)?parinfer.indent_mode.close_delims.cljs$core$IFn$_invoke$arity$1(G__13948):G__13948);
return G__13948__$1;
});
/**
 * Fully processes the given text.  Returns new state.
 *   See `format-text` for usage.
 */
parinfer.indent_mode.process_text = (function parinfer$indent_mode$process_text(var_args){
var args13949 = [];
var len__7513__auto___13952 = arguments.length;
var i__7514__auto___13953 = (0);
while(true){
if((i__7514__auto___13953 < len__7513__auto___13952)){
args13949.push((arguments[i__7514__auto___13953]));

var G__13954 = (i__7514__auto___13953 + (1));
i__7514__auto___13953 = G__13954;
continue;
} else {
}
break;
}

var G__13951 = args13949.length;
switch (G__13951) {
case 1:
return parinfer.indent_mode.process_text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.indent_mode.process_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13949.length)].join('')));

}
});

parinfer.indent_mode.process_text.cljs$core$IFn$_invoke$arity$1 = (function (text){
return parinfer.indent_mode.process_text.cljs$core$IFn$_invoke$arity$2(text,null);
});

parinfer.indent_mode.process_text.cljs$core$IFn$_invoke$arity$2 = (function (text,options){
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([parinfer.indent_mode.initial_state,options], 0));
var lines = parinfer.string.get_lines(text);
var state__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(parinfer.indent_mode.process_line,state,lines);
return parinfer.indent_mode.finalize_state(state__$1);
});

parinfer.indent_mode.process_text.cljs$lang$maxFixedArity = 2;
parinfer.indent_mode.safe_subvec = (function parinfer$indent_mode$safe_subvec(v,i){
if((i < cljs.core.count(v))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,i);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * restore the text of a line before trailing delimiters were inserted
 */
parinfer.indent_mode.restore_insert_line = (function parinfer$indent_mode$restore_insert_line(p__13956){
var map__13961 = p__13956;
var map__13961__$1 = ((((!((map__13961 == null)))?((((map__13961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13961):map__13961);
var state = map__13961__$1;
var insert = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13961__$1,new cljs.core.Keyword(null,"insert","insert",1286475395));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13961__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var map__13963 = insert;
var map__13963__$1 = ((((!((map__13963 == null)))?((((map__13963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13963):map__13963);
var line_dy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13963__$1,new cljs.core.Keyword(null,"line-dy","line-dy",41667486));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13963__$1,new cljs.core.Keyword(null,"line","line",212345235));
if(cljs.core.truth_((function (){var and__6443__auto__ = line_dy;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = line;
if(cljs.core.truth_(and__6443__auto____$1)){
return (line_no >= (0));
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
var insert_line_no = (line_dy + line_no);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),insert_line_no], null),line);
} else {
return state;
}
});
/**
 * fill the rest of the lines with info from cache.
 */
parinfer.indent_mode.fill_rest_with_cache = (function parinfer$indent_mode$fill_rest_with_cache(prev_state,state,last_i){
var state__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.pop),new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.into,parinfer.indent_mode.safe_subvec(new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(prev_state),last_i)),new cljs.core.Keyword(null,"postline-states","postline-states",1667653678),cljs.core.into,parinfer.indent_mode.safe_subvec(new cljs.core.Keyword(null,"postline-states","postline-states",1667653678).cljs$core$IFn$_invoke$arity$1(prev_state),(last_i + (1)))),new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728),cljs.core.into,parinfer.indent_mode.safe_subvec(new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728).cljs$core$IFn$_invoke$arity$1(prev_state),(last_i + (1)))),cljs.core.last(new cljs.core.Keyword(null,"postline-states","postline-states",1667653678).cljs$core$IFn$_invoke$arity$1(prev_state))], 0));
var state__$2 = parinfer.indent_mode.restore_insert_line(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466),(cljs.core.count(new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(state__$1)) - (1))));
return state__$2;
});
/**
 * process a line that comes after those that have changed.
 *   'reduced' will halt further processing.
 */
parinfer.indent_mode.process_unchanged_line_STAR_ = (function parinfer$indent_mode$process_unchanged_line_STAR_(prev_state,state,p__13965){
var vec__13967 = p__13965;
var old_i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13967,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13967,(1),null);
var cache = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13967,(2),null);
var state__$1 = parinfer.indent_mode.process_line.cljs$core$IFn$_invoke$arity$2(state,line);
var new_cache = cljs.core.last(new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728).cljs$core$IFn$_invoke$arity$1(state__$1));
var more_QMARK_ = ((old_i + (1)) < cljs.core.count(new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(prev_state)));
var can_skip_QMARK_ = (function (){var and__6443__auto__ = new_cache;
if(cljs.core.truth_(and__6443__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_cache,cache);
} else {
return and__6443__auto__;
}
})();
if(cljs.core.truth_((function (){var and__6443__auto__ = can_skip_QMARK_;
if(cljs.core.truth_(and__6443__auto__)){
return more_QMARK_;
} else {
return and__6443__auto__;
}
})())){
return cljs.core.reduced(parinfer.indent_mode.fill_rest_with_cache(prev_state,state__$1,old_i));
} else {
return state__$1;
}
});
/**
 * process the lines after those that have changed.
 */
parinfer.indent_mode.process_unchanged_lines = (function parinfer$indent_mode$process_unchanged_lines(prev_state,state,start_i){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(parinfer.indent_mode.process_unchanged_line_STAR_,prev_state),state,cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,cljs.core.iterate(cljs.core.inc,start_i),parinfer.indent_mode.safe_subvec(new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(prev_state),start_i),parinfer.indent_mode.safe_subvec(new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728).cljs$core$IFn$_invoke$arity$1(prev_state),start_i)));
});
/**
 * build an initial state based on our starting line and previous cache.
 */
parinfer.indent_mode.initial_cached_state = (function parinfer$indent_mode$initial_cached_state(p__13968,options,i){
var map__13971 = p__13968;
var map__13971__$1 = ((((!((map__13971 == null)))?((((map__13971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13971):map__13971);
var prev_state = map__13971__$1;
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13971__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var postline_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13971__$1,new cljs.core.Keyword(null,"postline-states","postline-states",1667653678));
var postindent_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13971__$1,new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728));
var line_data = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(lines,(0),i),new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(postindent_states,(0),i),new cljs.core.Keyword(null,"postline-states","postline-states",1667653678),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(postline_states,(0),i),new cljs.core.Keyword(null,"line-no","line-no",-666819466),(i - (1))], null);
var last_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(postline_states,(i - (1)));
return parinfer.indent_mode.restore_insert_line(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([parinfer.indent_mode.initial_state,options,line_data,last_cache], 0)));
});
/**
 * Processes the given change for the given state.  Returns new state.
 *   See `format-text-change` for usage.
 */
parinfer.indent_mode.process_text_change = (function parinfer$indent_mode$process_text_change(var_args){
var args13973 = [];
var len__7513__auto___13980 = arguments.length;
var i__7514__auto___13981 = (0);
while(true){
if((i__7514__auto___13981 < len__7513__auto___13980)){
args13973.push((arguments[i__7514__auto___13981]));

var G__13982 = (i__7514__auto___13981 + (1));
i__7514__auto___13981 = G__13982;
continue;
} else {
}
break;
}

var G__13975 = args13973.length;
switch (G__13975) {
case 2:
return parinfer.indent_mode.process_text_change.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return parinfer.indent_mode.process_text_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13973.length)].join('')));

}
});

parinfer.indent_mode.process_text_change.cljs$core$IFn$_invoke$arity$2 = (function (prev_state,change){
return parinfer.indent_mode.process_text_change.cljs$core$IFn$_invoke$arity$3(prev_state,change,null);
});

parinfer.indent_mode.process_text_change.cljs$core$IFn$_invoke$arity$3 = (function (prev_state,p__13976,options){
var map__13977 = p__13976;
var map__13977__$1 = ((((!((map__13977 == null)))?((((map__13977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13977):map__13977);
var change = map__13977__$1;
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13977__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var new_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13977__$1,new cljs.core.Keyword(null,"new-line","new-line",1060819447));
var vec__13979 = ((typeof line_no === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_no,(line_no + (1))], null):line_no);
var start_line_no = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13979,(0),null);
var end_line_no = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13979,(1),null);
var line_replacements = ((typeof new_line === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_line], null):new_line);
var state = parinfer.indent_mode.initial_cached_state(prev_state,options,start_line_no);
var state__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(parinfer.indent_mode.process_line,state,line_replacements);
var state__$2 = parinfer.indent_mode.process_unchanged_lines(prev_state,state__$1,end_line_no);
return parinfer.indent_mode.finalize_state(state__$2);
});

parinfer.indent_mode.process_text_change.cljs$lang$maxFixedArity = 3;
/**
 * Fully process the given text using Indent Mode.
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
 *  :state    - cached state to be passed to `format-text-change`
 *   
 */
parinfer.indent_mode.format_text = (function parinfer$indent_mode$format_text(var_args){
var args13984 = [];
var len__7513__auto___13987 = arguments.length;
var i__7514__auto___13988 = (0);
while(true){
if((i__7514__auto___13988 < len__7513__auto___13987)){
args13984.push((arguments[i__7514__auto___13988]));

var G__13989 = (i__7514__auto___13988 + (1));
i__7514__auto___13988 = G__13989;
continue;
} else {
}
break;
}

var G__13986 = args13984.length;
switch (G__13986) {
case 1:
return parinfer.indent_mode.format_text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.indent_mode.format_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13984.length)].join('')));

}
});

parinfer.indent_mode.format_text.cljs$core$IFn$_invoke$arity$1 = (function (text){
return parinfer.indent_mode.format_text.cljs$core$IFn$_invoke$arity$2(text,null);
});

parinfer.indent_mode.format_text.cljs$core$IFn$_invoke$arity$2 = (function (text,options){
var state = parinfer.indent_mode.process_text.cljs$core$IFn$_invoke$arity$2(text,options);
var out_text = (cljs.core.truth_(new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(state))?clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(state)):text);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),out_text,new cljs.core.Keyword(null,"valid?","valid?",-212412379),new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"state","state",-1988618099),state], null);
});

parinfer.indent_mode.format_text.cljs$lang$maxFixedArity = 2;
/**
 * Process changed lines in a previously processed text using Indent Mode.
 * 
 *   'text' is the full text (including the change).
 * 
 *   'prev-state' is the state after processing 'text' before the 'change' occurred.
 *  - found in the :state key of the result returned by `format-text` or this function.
 * 
 *   'change' is a map:
 * 
 *  KEY        |  DESCRIPTION             |  TYPE
 *  -----------+--------------------------+------------------------------------
 *  :line-no   |  line range to replace   |  a num or min,max line range
 *  :new-line  |  new line(s) to insert   |  a string or seq if multiple lines
 * 
 *   'options' is an optional map with supported keys:
 *  :cursor-x     - x position of the cursor (zero-based)
 *  :cursor-line  - line number of the cursor (zero-based)
 * 
 *   Returns a map:
 *  :text     - full text output
 *  :valid?   - indicates if the input was valid
 *  :state    - cached state to be passed to `format-text-change`
 *   
 */
parinfer.indent_mode.format_text_change = (function parinfer$indent_mode$format_text_change(var_args){
var args13991 = [];
var len__7513__auto___13994 = arguments.length;
var i__7514__auto___13995 = (0);
while(true){
if((i__7514__auto___13995 < len__7513__auto___13994)){
args13991.push((arguments[i__7514__auto___13995]));

var G__13996 = (i__7514__auto___13995 + (1));
i__7514__auto___13995 = G__13996;
continue;
} else {
}
break;
}

var G__13993 = args13991.length;
switch (G__13993) {
case 3:
return parinfer.indent_mode.format_text_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return parinfer.indent_mode.format_text_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13991.length)].join('')));

}
});

parinfer.indent_mode.format_text_change.cljs$core$IFn$_invoke$arity$3 = (function (text,prev_state,change){
return parinfer.indent_mode.format_text_change.cljs$core$IFn$_invoke$arity$4(text,prev_state,change,null);
});

parinfer.indent_mode.format_text_change.cljs$core$IFn$_invoke$arity$4 = (function (text,prev_state,change,options){
var state = parinfer.indent_mode.process_text_change.cljs$core$IFn$_invoke$arity$3(prev_state,change,options);
var out_text = (cljs.core.truth_(new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(state))?clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(state)):text);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),out_text,new cljs.core.Keyword(null,"valid?","valid?",-212412379),new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"state","state",-1988618099),state], null);
});

parinfer.indent_mode.format_text_change.cljs$lang$maxFixedArity = 4;

//# sourceMappingURL=indent_mode.js.map