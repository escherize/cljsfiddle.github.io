// Compiled by ClojureScript 1.7.228 {:static-fns true}
goog.provide('cljsfiddle.samples_pane');
goog.require('cljs.core');
goog.require('cljsfiddle.state');
cljsfiddle.samples_pane.option_button = (function cljsfiddle$samples_pane$option_button(var_args){
var args__7520__auto__ = [];
var len__7513__auto___14195 = arguments.length;
var i__7514__auto___14196 = (0);
while(true){
if((i__7514__auto___14196 < len__7513__auto___14195)){
args__7520__auto__.push((arguments[i__7514__auto___14196]));

var G__14197 = (i__7514__auto___14196 + (1));
i__7514__auto___14196 = G__14197;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((2) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((2)),(0))):null);
return cljsfiddle.samples_pane.option_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7521__auto__);
});

cljsfiddle.samples_pane.option_button.cljs$core$IFn$_invoke$arity$variadic = (function (title,fill,p__14193){
var vec__14194 = p__14193;
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14194,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.button","div.ui.button",668900631),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__14194,callback){
return (function (){
cljsfiddle.state.update_text(fill);

return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
});})(vec__14194,callback))
], null),title], null);
});

cljsfiddle.samples_pane.option_button.cljs$lang$maxFixedArity = (2);

cljsfiddle.samples_pane.option_button.cljs$lang$applyTo = (function (seq14190){
var G__14191 = cljs.core.first(seq14190);
var seq14190__$1 = cljs.core.next(seq14190);
var G__14192 = cljs.core.first(seq14190__$1);
var seq14190__$2 = cljs.core.next(seq14190__$1);
return cljsfiddle.samples_pane.option_button.cljs$core$IFn$_invoke$arity$variadic(G__14191,G__14192,seq14190__$2);
});
cljsfiddle.samples_pane.samples_pane = (function cljsfiddle$samples_pane$samples_pane(var_args){
var args__7520__auto__ = [];
var len__7513__auto___14201 = arguments.length;
var i__7514__auto___14202 = (0);
while(true){
if((i__7514__auto___14202 < len__7513__auto___14201)){
args__7520__auto__.push((arguments[i__7514__auto___14202]));

var G__14203 = (i__7514__auto___14202 + (1));
i__7514__auto___14202 = G__14203;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((0) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((0)),(0))):null);
return cljsfiddle.samples_pane.samples_pane.cljs$core$IFn$_invoke$arity$variadic(argseq__7521__auto__);
});

cljsfiddle.samples_pane.samples_pane.cljs$core$IFn$_invoke$arity$variadic = (function (p__14199){
var vec__14200 = p__14199;
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14200,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.two.wide.column","div.two.wide.column",166585920),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Examples"], null)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.vertical.basic.buttons","div.ui.vertical.basic.buttons",1635423302),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"28px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsfiddle.samples_pane.option_button,"Simple h1","[:h1 \"Lemon\"]",callback], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsfiddle.samples_pane.option_button,"Simple h1 Component","(defn h1-component [& items]\n      [:h1 items])\n\n[h1-component \"Green Eggs\" \" and \" \"ham -\" \"YUM!\"]",callback], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsfiddle.samples_pane.option_button,"Single Component","(defn simple-component []\n  [:div\n   [:p \"I am a component!\"]\n   [:p.someclass\n    \"I have \" [:strong \"bold\"]\n    [:span {:style {:color \"red\"}} \" and red \"] \"text.\"]])\n\n[simple-component]",callback], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsfiddle.samples_pane.option_button,"Parent Component","(defn simple-component []\n  [:div\n   [:p \"I am a component!\"]\n   [:p.someclass\n    \"I have \" [:strong \"bold\"]\n    [:span {:style {:color \"red\"}} \" and red \"] \"text.\"]])\n\n(defn simple-parent []\n  [:div\n   [:p \"I include a simple-component.\"]\n   [simple-component]])\n\n[simple-parent]",callback], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsfiddle.samples_pane.option_button,"Hello Component","(defn hello-component [name]\n  [:p \"Hello, \" name \"!\"])\n\n(defn say-hello []\n  [hello-component \"world\"])\n\n[:div\n [say-hello]\n [hello-component \"Everyone!\"]\n ;; Notice it's perfectly composable:\n [hello-component\n  [:span {:style {:color \"orange\"}}\n   \"Lemon\"]]]",callback], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsfiddle.samples_pane.option_button,"Lister Component","(defn lister [items]\n  [:ul\n   (for [item items]\n     ^{:key item} [:li \"Item \" item])])\n\n(defn lister-user []\n  [:div\n   \"I am the lister-user!\"\n   [lister (range 3)]])\n\n[:div\n [:h1 \"Lister:\"]\n [lister [\"Apple\" \"Orange\" \"Grapefruit\"]]\n [:h1 \"Lister User:\"]\n [lister-user]]",callback], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsfiddle.samples_pane.option_button,"Counter Component","(def click-count (atom 0))\n\n(defn counting-component []\n  [:div\n   \"The atom \" [:code \"click-count\"] \" has value: \"\n   @click-count \". \"\n   [:div\n    [:input {:type \"button\"\n             :value \"Click me!\"\n             :on-click #(swap! click-count inc)}]]])\n\n[counting-component]",callback], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsfiddle.samples_pane.option_button,"Timer Component","(defn timer-component []\n  (let [seconds-elapsed (atom 0)]\n    (fn []\n      (js/setTimeout #(swap! seconds-elapsed inc) 1000)\n      [:div\n       \"Seconds Elapsed: \" @seconds-elapsed])))\n\n[timer-component]",callback], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsfiddle.samples_pane.option_button,"Form Component","(defn atom-input [value]\n  [:input {:type \"text\"\n           :value @value\n           :on-change #(reset! value (-> % .-target .-value))}])\n\n(defn shared-state []\n  (let [val (atom \"foo\")]\n    (fn []\n      [:div\n       [:p \"The value is now: \" @val]\n       [:p \"Change it here: \" [atom-input val]]])))\n\n[shared-state]",callback], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsfiddle.samples_pane.option_button,"BMI Calculator Component","(def bmi-data (atom {:height 180 :weight 80}))\n\n(defn calc-bmi []\n  (let [{:keys [height weight bmi] :as data} @bmi-data\n        h (/ height 100)]\n    (if (nil? bmi)\n      (assoc data :bmi (/ weight (* h h)))\n      (assoc data :weight (* bmi h h)))))\n\n(defn slider [param value min max]\n  [:input {:type \"range\" :value value :min min :max max\n           :style {:width \"100%\"}\n           :on-change (fn [e]\n                        (swap! bmi-data assoc param (.-target.value e))\n                        (when (not= param :bmi)\n                          (swap! bmi-data assoc :bmi nil)))}])\n\n(defn bmi-component []\n  (let [{:keys [weight height bmi]} (calc-bmi)\n        [color diagnose] (cond\n                          (< bmi 18.5) [\"orange\" \"underweight\"]\n                          (< bmi 25) [\"inherit\" \"normal\"]\n                          (< bmi 30) [\"orange\" \"overweight\"]\n                          :else [\"red\" \"obese\"])]\n    [:div\n     [:h3 \"BMI calculator\"]\n     [:div\n      \"Height: \" (int height) \"cm\"\n      [slider :height height 100 220]]\n     [:div\n      \"Weight: \" (int weight) \"kg\"\n      [slider :weight weight 30 150]]\n     [:div\n      \"BMI: \" (int bmi) \" \"\n      [:span {:style {:color color}} diagnose]\n      [slider :bmi bmi 10 50]]]))\n\n[bmi-component]",callback], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsfiddle.samples_pane.option_button,"Simple Component","(defonce timer (atom (js/Date.)))\n\n(defonce time-color (atom \"#f34\"))\n\n(defonce time-updater\n  (js/setInterval #(reset! timer (js/Date.)) 1000))\n\n(defn greeting [message]\n  [:h1 message])\n\n(defn clock []\n  (let [time-str (-> (.toTimeString @timer)\n                     (clojure.string/split \" \")\n                     first)]\n    [:span {:style {:color @time-color\n                    :font-size \"30px\"}}\n           time-str]))\n\n(defn color-input []\n  [:div {:style {:margin-top \"10px\"}}\n   \"Time color: \"\n   [:input {:type \"text\"\n            :value @time-color\n            :on-change #(reset! time-color (-> % .-target .-value))}]])\n\n(defn simple-example []\n  [:div\n   [greeting \"Hello world, it is now:\"]\n   [clock]\n   [color-input]])\n\n[simple-example]",callback], null)], null)], null);
});

cljsfiddle.samples_pane.samples_pane.cljs$lang$maxFixedArity = (0);

cljsfiddle.samples_pane.samples_pane.cljs$lang$applyTo = (function (seq14198){
return cljsfiddle.samples_pane.samples_pane.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14198));
});

//# sourceMappingURL=samples_pane.js.map