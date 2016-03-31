// Compiled by ClojureScript 1.7.228 {:static-fns true}
goog.provide('cemerick.url');
goog.require('cljs.core');
goog.require('pathetic.core');
goog.require('clojure.string');
goog.require('goog.Uri');
cemerick.url.url_encode = (function cemerick$url$url_encode(string){
var G__14207 = string;
var G__14207__$1 = (((G__14207 == null))?null:[cljs.core.str(G__14207)].join(''));
var G__14207__$2 = (((G__14207__$1 == null))?null:encodeURIComponent(G__14207__$1));
var G__14207__$3 = (((G__14207__$2 == null))?null:G__14207__$2.replace("+","%20"));
return G__14207__$3;
});
cemerick.url.url_decode = (function cemerick$url$url_decode(string){
var G__14209 = string;
var G__14209__$1 = (((G__14209 == null))?null:[cljs.core.str(G__14209)].join(''));
var G__14209__$2 = (((G__14209__$1 == null))?null:decodeURIComponent(G__14209__$1));
return G__14209__$2;
});
cemerick.url.map__GT_query = (function cemerick$url$map__GT_query(m){
var G__14213 = cljs.core.seq(m);
var G__14213__$1 = (((G__14213 == null))?null:cljs.core.sort.cljs$core$IFn$_invoke$arity$1(G__14213));
var G__14213__$2 = (((G__14213__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__14213,G__14213__$1){
return (function (p__14214){
var vec__14215 = p__14214;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14215,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14215,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cemerick.url.url_encode(cljs.core.name(k)),"=",cemerick.url.url_encode([cljs.core.str(v)].join(''))], null);
});})(G__14213,G__14213__$1))
,G__14213__$1));
var G__14213__$3 = (((G__14213__$2 == null))?null:cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("&",G__14213__$2));
var G__14213__$4 = (((G__14213__$3 == null))?null:cljs.core.flatten(G__14213__$3));
var G__14213__$5 = (((G__14213__$4 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,G__14213__$4));
return G__14213__$5;
});
cemerick.url.split_param = (function cemerick$url$split_param(param){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(param,/=/),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("")));
});
cemerick.url.query__GT_map = (function cemerick$url$query__GT_map(qstr){
if(!(clojure.string.blank_QMARK_(qstr))){
var G__14217 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(qstr,/&/);
var G__14217__$1 = (((G__14217 == null))?null:cljs.core.seq(G__14217));
var G__14217__$2 = (((G__14217__$1 == null))?null:cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cemerick.url.split_param,cljs.core.array_seq([G__14217__$1], 0)));
var G__14217__$3 = (((G__14217__$2 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cemerick.url.url_decode,G__14217__$2));
var G__14217__$4 = (((G__14217__$3 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,G__14217__$3));
return G__14217__$4;
} else {
return null;
}
});
cemerick.url.port_str = (function cemerick$url$port_str(protocol,port){
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,port)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),port)) && (!(((port === (80))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"http")))) && (!(((port === (443))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https"))))){
return [cljs.core.str(":"),cljs.core.str(port)].join('');
} else {
return null;
}
});
cemerick.url.url_creds = (function cemerick$url$url_creds(username,password){
if(cljs.core.truth_(username)){
return [cljs.core.str(username),cljs.core.str(":"),cljs.core.str(password)].join('');
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cemerick.url.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cemerick.url.URL = (function (protocol,username,password,host,port,path,query,anchor,__meta,__extmap,__hash){
this.protocol = protocol;
this.username = username;
this.password = password;
this.host = host;
this.port = port;
this.path = path;
this.query = query;
this.anchor = anchor;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cemerick.url.URL.prototype.toString = (function (){
var self__ = this;
var this$ = this;
var creds = cemerick.url.url_creds(self__.username,self__.password);
return [cljs.core.str(self__.protocol),cljs.core.str("://"),cljs.core.str(creds),cljs.core.str((cljs.core.truth_(creds)?"@":null)),cljs.core.str(self__.host),cljs.core.str(cemerick.url.port_str(self__.protocol,self__.port)),cljs.core.str(self__.path),cljs.core.str(((cljs.core.seq(self__.query))?[cljs.core.str("?"),cljs.core.str(((typeof self__.query === 'string')?self__.query:cemerick.url.map__GT_query(self__.query)))].join(''):null)),cljs.core.str((cljs.core.truth_(self__.anchor)?[cljs.core.str("#"),cljs.core.str(self__.anchor)].join(''):null))].join('');
});

cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7069__auto__,k__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7069__auto____$1,k__7070__auto__,null);
});

cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7071__auto__,k14219,else__7072__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
var G__14221 = (((k14219 instanceof cljs.core.Keyword))?k14219.fqn:null);
switch (G__14221) {
case "protocol":
return self__.protocol;

break;
case "username":
return self__.username;

break;
case "password":
return self__.password;

break;
case "host":
return self__.host;

break;
case "port":
return self__.port;

break;
case "path":
return self__.path;

break;
case "query":
return self__.query;

break;
case "anchor":
return self__.anchor;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14219,else__7072__auto__);

}
});

cemerick.url.URL.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7083__auto__,writer__7084__auto__,opts__7085__auto__){
var self__ = this;
var this__7083__auto____$1 = this;
var pr_pair__7086__auto__ = ((function (this__7083__auto____$1){
return (function (keyval__7087__auto__){
return cljs.core.pr_sequential_writer(writer__7084__auto__,cljs.core.pr_writer,""," ","",opts__7085__auto__,keyval__7087__auto__);
});})(this__7083__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7084__auto__,pr_pair__7086__auto__,"#cemerick.url.URL{",", ","}",opts__7085__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"username","username",1605666410),self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor],null))], null),self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IIterable$ = true;

cemerick.url.URL.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14218){
var self__ = this;
var G__14218__$1 = this;
return (new cljs.core.RecordIter((0),G__14218__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"anchor","anchor",1549638489)], null),cljs.core._iterator(self__.__extmap)));
});

cemerick.url.URL.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return self__.__meta;
});

cemerick.url.URL.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7063__auto__){
var self__ = this;
var this__7063__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,self__.__hash));
});

cemerick.url.URL.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7073__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7064__auto__){
var self__ = this;
var this__7064__auto____$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap(this__7064__auto____$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

cemerick.url.URL.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7065__auto__,other__7066__auto__){
var self__ = this;
var this__7065__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6443__auto__ = other__7066__auto__;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (this__7065__auto____$1.constructor === other__7066__auto__.constructor);
if(and__6443__auto____$1){
return cljs.core.equiv_map(this__7065__auto____$1,other__7066__auto__);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return true;
} else {
return false;
}
});

cemerick.url.URL.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7078__auto__,k__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"protocol","protocol",652470118),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"username","username",1605666410),null,new cljs.core.Keyword(null,"port","port",1534937262),null,new cljs.core.Keyword(null,"host","host",-1558485167),null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),null,new cljs.core.Keyword(null,"query","query",-1288509510),null], null), null),k__7079__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7078__auto____$1),self__.__meta),k__7079__auto__);
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7079__auto__)),null));
}
});

cemerick.url.URL.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7076__auto__,k__7077__auto__,G__14218){
var self__ = this;
var this__7076__auto____$1 = this;
var pred__14222 = cljs.core.keyword_identical_QMARK_;
var expr__14223 = k__7077__auto__;
if(cljs.core.truth_((pred__14222.cljs$core$IFn$_invoke$arity$2 ? pred__14222.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"protocol","protocol",652470118),expr__14223) : pred__14222.call(null,new cljs.core.Keyword(null,"protocol","protocol",652470118),expr__14223)))){
return (new cemerick.url.URL(G__14218,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14222.cljs$core$IFn$_invoke$arity$2 ? pred__14222.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"username","username",1605666410),expr__14223) : pred__14222.call(null,new cljs.core.Keyword(null,"username","username",1605666410),expr__14223)))){
return (new cemerick.url.URL(self__.protocol,G__14218,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14222.cljs$core$IFn$_invoke$arity$2 ? pred__14222.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"password","password",417022471),expr__14223) : pred__14222.call(null,new cljs.core.Keyword(null,"password","password",417022471),expr__14223)))){
return (new cemerick.url.URL(self__.protocol,self__.username,G__14218,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14222.cljs$core$IFn$_invoke$arity$2 ? pred__14222.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"host","host",-1558485167),expr__14223) : pred__14222.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),expr__14223)))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,G__14218,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14222.cljs$core$IFn$_invoke$arity$2 ? pred__14222.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"port","port",1534937262),expr__14223) : pred__14222.call(null,new cljs.core.Keyword(null,"port","port",1534937262),expr__14223)))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,G__14218,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14222.cljs$core$IFn$_invoke$arity$2 ? pred__14222.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),expr__14223) : pred__14222.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__14223)))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,G__14218,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14222.cljs$core$IFn$_invoke$arity$2 ? pred__14222.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"query","query",-1288509510),expr__14223) : pred__14222.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),expr__14223)))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,G__14218,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14222.cljs$core$IFn$_invoke$arity$2 ? pred__14222.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"anchor","anchor",1549638489),expr__14223) : pred__14222.call(null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),expr__14223)))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,G__14218,self__.__meta,self__.__extmap,null));
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7077__auto__,G__14218),null));
}
}
}
}
}
}
}
}
});

cemerick.url.URL.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7081__auto__){
var self__ = this;
var this__7081__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"username","username",1605666410),self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor],null))], null),self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7068__auto__,G__14218){
var self__ = this;
var this__7068__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,G__14218,self__.__extmap,self__.__hash));
});

cemerick.url.URL.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7074__auto__,entry__7075__auto__){
var self__ = this;
var this__7074__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7075__auto__)){
return cljs.core._assoc(this__7074__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7075__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7075__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7074__auto____$1,entry__7075__auto__);
}
});

cemerick.url.URL.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null),new cljs.core.Symbol(null,"username","username",-1048769359,null),new cljs.core.Symbol(null,"password","password",2057553998,null),new cljs.core.Symbol(null,"host","host",82046360,null),new cljs.core.Symbol(null,"port","port",-1119498507,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.Symbol(null,"anchor","anchor",-1104797280,null)], null);
});

cemerick.url.URL.cljs$lang$type = true;

cemerick.url.URL.cljs$lang$ctorPrSeq = (function (this__7103__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cemerick.url/URL");
});

cemerick.url.URL.cljs$lang$ctorPrWriter = (function (this__7103__auto__,writer__7104__auto__){
return cljs.core._write(writer__7104__auto__,"cemerick.url/URL");
});

cemerick.url.__GT_URL = (function cemerick$url$__GT_URL(protocol,username,password,host,port,path,query,anchor){
return (new cemerick.url.URL(protocol,username,password,host,port,path,query,anchor,null,null,null));
});

cemerick.url.map__GT_URL = (function cemerick$url$map__GT_URL(G__14220){
return (new cemerick.url.URL(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(G__14220),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(G__14220),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(G__14220),new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(G__14220),new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(G__14220),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__14220),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__14220),new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(G__14220),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14220,new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.array_seq([new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"anchor","anchor",1549638489)], 0)),null));
});

cemerick.url.translate_default = (function cemerick$url$translate_default(s,old_default,new_default){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,old_default)){
return new_default;
} else {
return s;
}
});
cemerick.url.url_STAR_ = (function cemerick$url$url_STAR_(url){
var url__$1 = (new goog.Uri(url));
var vec__14227 = clojure.string.split.cljs$core$IFn$_invoke$arity$3((function (){var or__6455__auto__ = url__$1.getUserInfo();
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return "";
}
})(),/:/,(2));
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14227,(0),null);
var pass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14227,(1),null);
return (new cemerick.url.URL(url__$1.getScheme(),(function (){var and__6443__auto__ = cljs.core.seq(user);
if(and__6443__auto__){
return user;
} else {
return and__6443__auto__;
}
})(),(function (){var and__6443__auto__ = cljs.core.seq(pass);
if(and__6443__auto__){
return pass;
} else {
return and__6443__auto__;
}
})(),url__$1.getDomain(),cemerick.url.translate_default(url__$1.getPort(),null,(-1)),pathetic.core.normalize(url__$1.getPath()),cemerick.url.query__GT_map(cemerick.url.translate_default(url__$1.getQuery(),"",null)),cemerick.url.translate_default(url__$1.getFragment(),"",null),null,null,null));
});
/**
 * Returns a new URL record for the given url string(s).
 * 
 * The first argument must be a base url — either a complete url string, or
 * a pre-existing URL record instance that will serve as the basis for the new
 * URL.  Any additional arguments must be strings, which are interpreted as
 * relative paths that are successively resolved against the base url's path
 * to construct the final :path in the returned URL record. 
 * 
 * This function does not perform any url-encoding.  Use `url-encode` to encode
 * URL path segments as desired before passing them into this fn.
 */
cemerick.url.url = (function cemerick$url$url(var_args){
var args14228 = [];
var len__7513__auto___14233 = arguments.length;
var i__7514__auto___14234 = (0);
while(true){
if((i__7514__auto___14234 < len__7513__auto___14233)){
args14228.push((arguments[i__7514__auto___14234]));

var G__14235 = (i__7514__auto___14234 + (1));
i__7514__auto___14234 = G__14235;
continue;
} else {
}
break;
}

var G__14232 = args14228.length;
switch (G__14232) {
case 1:
return cemerick.url.url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7532__auto__ = (new cljs.core.IndexedSeq(args14228.slice((1)),(0)));
return cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7532__auto__);

}
});

cemerick.url.url.cljs$core$IFn$_invoke$arity$1 = (function (url){
if((url instanceof cemerick.url.URL)){
return url;
} else {
return cemerick.url.url_STAR_(url);
}
});

cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic = (function (base_url,path_segments){
var base_url__$1 = (((base_url instanceof cemerick.url.URL))?base_url:cemerick.url.url.cljs$core$IFn$_invoke$arity$1(base_url));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base_url__$1,new cljs.core.Keyword(null,"path","path",-188191168),pathetic.core.normalize(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(pathetic.core.resolve,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(base_url__$1),path_segments)));
});

cemerick.url.url.cljs$lang$applyTo = (function (seq14229){
var G__14230 = cljs.core.first(seq14229);
var seq14229__$1 = cljs.core.next(seq14229);
return cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic(G__14230,seq14229__$1);
});

cemerick.url.url.cljs$lang$maxFixedArity = (1);

//# sourceMappingURL=url.js.map