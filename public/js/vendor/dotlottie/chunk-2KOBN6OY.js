var lt = Object.defineProperty;
var Pt = (o, t, e) => t in o ? lt(o, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: e
}) : o[t] = e;
var a = (o, t) => lt(o, "name", {
    value: t,
    configurable: true
});
var l = (o, t, e) => Pt(o, typeof t != "symbol" ? t + "" : t, e);
var Z = globalThis, G = Z.ShadowRoot && (Z.ShadyCSS === void 0 || Z.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype, st = Symbol(), pt = new WeakMap, P, it = (P = class {
    constructor(t, e, s) {
        if (this._$cssResult$ = true,
        s !== st)
            throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t,
        this.t = e;
    }
    get styleSheet() {
        let t = this.o
          , e = this.t;
        if (G && t === void 0) {
            let s = e !== void 0 && e.length === 1;
            s && (t = pt.get(e)),
            t === void 0 && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText),
            s && pt.set(e, t));
        }
        return t
    }
    toString() {
        return this.cssText
    }
}
,
a(P, "n"),
P), ut = a(o => new it(typeof o == "string" ? o : o + "",void 0,st), "r"), ot = a( (o, ...t) => {
    let e = o.length === 1 ? o[0] : t.reduce( (s, i, r) => s + (n => {
        if (n._$cssResult$ === true)
            return n.cssText;
        if (typeof n == "number")
            return n;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
    }
    )(i) + o[r + 1], o[0]);
    return new it(e,o,st)
}
, "i"), ft = a( (o, t) => {
    if (G)
        o.adoptedStyleSheets = t.map(e => e instanceof CSSStyleSheet ? e : e.styleSheet);
    else
        for (let e of t) {
            let s = document.createElement("style")
              , i = Z.litNonce;
            i !== void 0 && s.setAttribute("nonce", i),
            s.textContent = e.cssText,
            o.appendChild(s);
        }
}
, "S"), rt = G ? o => o : o => o instanceof CSSStyleSheet ? (t => {
    let e = "";
    for (let s of t.cssRules)
        e += s.cssText;
    return ut(e)
}
)(o) : o;
var {is: It, defineProperty: Lt, getOwnPropertyDescriptor: Rt, getOwnPropertyNames: Ut, getOwnPropertySymbols: jt, getPrototypeOf: Nt} = Object
  , b = globalThis
  , mt = b.trustedTypes
  , Ht = mt ? mt.emptyScript : ""
  , kt = b.reactiveElementPolyfillSupport
  , D = a( (o, t) => o, "d")
  , z = {
    toAttribute(o, t) {
        switch (t) {
        case Boolean:
            o = o ? Ht : null;
            break;
        case Object:
        case Array:
            o = o == null ? o : JSON.stringify(o);
        }
        return o
    },
    fromAttribute(o, t) {
        let e = o;
        switch (t) {
        case Boolean:
            e = o !== null;
            break;
        case Number:
            e = o === null ? null : Number(o);
            break;
        case Object:
        case Array:
            try {
                e = JSON.parse(o);
            } catch {
                e = null;
            }
        }
        return e
    }
}
  , Q = a( (o, t) => !It(o, t), "f")
  , yt = {
    attribute: true,
    type: String,
    converter: z,
    reflect: false,
    useDefault: false,
    hasChanged: Q
};
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")),
b.litPropertyMetadata ?? (b.litPropertyMetadata = new WeakMap);
var I, v = (I = class extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(),
        (this.l ?? (this.l = [])).push(t);
    }
    static get observedAttributes() {
        return this.finalize(),
        this._$Eh && [...this._$Eh.keys()]
    }
    static createProperty(t, e=yt) {
        if (e.state && (e.attribute = false),
        this._$Ei(),
        this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = true),
        this.elementProperties.set(t, e),
        !e.noAccessor) {
            let s = Symbol()
              , i = this.getPropertyDescriptor(t, s, e);
            i !== void 0 && Lt(this.prototype, t, i);
        }
    }
    static getPropertyDescriptor(t, e, s) {
        let {get: i, set: r} = Rt(this.prototype, t) ?? {
            get() {
                return this[e]
            },
            set(n) {
                this[e] = n;
            }
        };
        return {
            get: i,
            set(n) {
                let c = i?.call(this);
                r?.call(this, n),
                this.requestUpdate(t, c, s);
            },
            configurable: true,
            enumerable: true
        }
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? yt
    }
    static _$Ei() {
        if (this.hasOwnProperty(D("elementProperties")))
            return;
        let t = Nt(this);
        t.finalize(),
        t.l !== void 0 && (this.l = [...t.l]),
        this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty(D("finalized")))
            return;
        if (this.finalized = true,
        this._$Ei(),
        this.hasOwnProperty(D("properties"))) {
            let e = this.properties
              , s = [...Ut(e), ...jt(e)];
            for (let i of s)
                this.createProperty(i, e[i]);
        }
        let t = this[Symbol.metadata];
        if (t !== null) {
            let e = litPropertyMetadata.get(t);
            if (e !== void 0)
                for (let[s,i] of e)
                    this.elementProperties.set(s, i);
        }
        this._$Eh = new Map;
        for (let[e,s] of this.elementProperties) {
            let i = this._$Eu(e, s);
            i !== void 0 && this._$Eh.set(i, e);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(t) {
        let e = [];
        if (Array.isArray(t)) {
            let s = new Set(t.flat(1 / 0).reverse());
            for (let i of s)
                e.unshift(rt(i));
        } else
            t !== void 0 && e.push(rt(t));
        return e
    }
    static _$Eu(t, e) {
        let s = e.attribute;
        return s === false ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0
    }
    constructor() {
        super(),
        this._$Ep = void 0,
        this.isUpdatePending = false,
        this.hasUpdated = false,
        this._$Em = null,
        this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise(t => this.enableUpdating = t),
        this._$AL = new Map,
        this._$E_(),
        this.requestUpdate(),
        this.constructor.l?.forEach(t => t(this));
    }
    addController(t) {
        (this._$EO ?? (this._$EO = new Set)).add(t),
        this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        let t = new Map
          , e = this.constructor.elementProperties;
        for (let s of e.keys())
            this.hasOwnProperty(s) && (t.set(s, this[s]),
            delete this[s]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        let t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return ft(t, this.constructor.elementStyles),
        t
    }
    connectedCallback() {
        this.renderRoot ?? (this.renderRoot = this.createRenderRoot()),
        this.enableUpdating(true),
        this._$EO?.forEach(t => t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach(t => t.hostDisconnected?.());
    }
    attributeChangedCallback(t, e, s) {
        this._$AK(t, s);
    }
    _$ET(t, e) {
        let s = this.constructor.elementProperties.get(t)
          , i = this.constructor._$Eu(t, s);
        if (i !== void 0 && s.reflect === true) {
            let r = (s.converter?.toAttribute !== void 0 ? s.converter : z).toAttribute(e, s.type);
            this._$Em = t,
            r == null ? this.removeAttribute(i) : this.setAttribute(i, r),
            this._$Em = null;
        }
    }
    _$AK(t, e) {
        let s = this.constructor
          , i = s._$Eh.get(t);
        if (i !== void 0 && this._$Em !== i) {
            let r = s.getPropertyOptions(i)
              , n = typeof r.converter == "function" ? {
                fromAttribute: r.converter
            } : r.converter?.fromAttribute !== void 0 ? r.converter : z;
            this._$Em = i,
            this[i] = n.fromAttribute(e, r.type) ?? this._$Ej?.get(i) ?? null,
            this._$Em = null;
        }
    }
    requestUpdate(t, e, s) {
        if (t !== void 0) {
            let i = this.constructor
              , r = this[t];
            if (s ?? (s = i.getPropertyOptions(t)),
            !((s.hasChanged ?? Q)(r, e) || s.useDefault && s.reflect && r === this._$Ej?.get(t) && !this.hasAttribute(i._$Eu(t, s))))
                return;
            this.C(t, e, s);
        }
        this.isUpdatePending === false && (this._$ES = this._$EP());
    }
    C(t, e, {useDefault: s, reflect: i, wrapped: r}, n) {
        s && !(this._$Ej ?? (this._$Ej = new Map)).has(t) && (this._$Ej.set(t, n ?? e ?? this[t]),
        r !== true || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (e = void 0),
        this._$AL.set(t, e)),
        i === true && this._$Em !== t && (this._$Eq ?? (this._$Eq = new Set)).add(t));
    }
    async _$EP() {
        this.isUpdatePending = true;
        try {
            await this._$ES;
        } catch (e) {
            Promise.reject(e);
        }
        let t = this.scheduleUpdate();
        return t != null && await t,
        !this.isUpdatePending
    }
    scheduleUpdate() {
        return this.performUpdate()
    }
    performUpdate() {
        if (!this.isUpdatePending)
            return;
        if (!this.hasUpdated) {
            if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()),
            this._$Ep) {
                for (let[i,r] of this._$Ep)
                    this[i] = r;
                this._$Ep = void 0;
            }
            let s = this.constructor.elementProperties;
            if (s.size > 0)
                for (let[i,r] of s) {
                    let {wrapped: n} = r
                      , c = this[i];
                    n !== true || this._$AL.has(i) || c === void 0 || this.C(i, void 0, r, c);
                }
        }
        let t = false
          , e = this._$AL;
        try {
            t = this.shouldUpdate(e),
            t ? (this.willUpdate(e),
            this._$EO?.forEach(s => s.hostUpdate?.()),
            this.update(e)) : this._$EM();
        } catch (s) {
            throw t = false,
            this._$EM(),
            s
        }
        t && this._$AE(e);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach(e => e.hostUpdated?.()),
        this.hasUpdated || (this.hasUpdated = true,
        this.firstUpdated(t)),
        this.updated(t);
    }
    _$EM() {
        this._$AL = new Map,
        this.isUpdatePending = false;
    }
    get updateComplete() {
        return this.getUpdateComplete()
    }
    getUpdateComplete() {
        return this._$ES
    }
    shouldUpdate(t) {
        return true
    }
    update(t) {
        this._$Eq && (this._$Eq = this._$Eq.forEach(e => this._$ET(e, this[e]))),
        this._$EM();
    }
    updated(t) {}
    firstUpdated(t) {}
}
,
a(I, "y"),
I);
v.elementStyles = [],
v.shadowRootOptions = {
    mode: "open"
},
v[D("elementProperties")] = new Map,
v[D("finalized")] = new Map,
kt?.({
    ReactiveElement: v
}),
(b.reactiveElementVersions ?? (b.reactiveElementVersions = [])).push("2.1.0");
var F = globalThis
  , X = F.trustedTypes
  , gt = X ? X.createPolicy("lit-html", {
    createHTML: a(o => o, "createHTML")
}) : void 0
  , vt = "$lit$"
  , S = `lit$${Math.random().toFixed(9).slice(2)}$`
  , Et = "?" + S
  , Tt = `<${Et}>`
  , O = document
  , V = a( () => O.createComment(""), "l")
  , J = a(o => o === null || typeof o != "object" && typeof o != "function", "c")
  , ht = Array.isArray
  , qt = a(o => ht(o) || typeof o?.[Symbol.iterator] == "function", "u")
  , nt = `[ 	
\f\r]`
  , B = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g
  , $t = /-->/g
  , _t = />/g
  , E = RegExp(`>|${nt}(?:([^\\s"'>=/]+)(${nt}*=${nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g")
  , At = /'/g
  , bt = /"/g
  , Ct = /^(?:script|style|textarea|title)$/i
  , ct = a(o => (t, ...e) => ({
    _$litType$: o,
    strings: t,
    values: e
}), "y")
  , xt = ct(1);
ct(2);
ct(3);
var M = Symbol.for("lit-noChange")
  , m = Symbol.for("lit-nothing")
  , St = new WeakMap
  , C = O.createTreeWalker(O, 129);
function wt(o, t) {
    if (!ht(o) || !o.hasOwnProperty("raw"))
        throw Error("invalid template strings array");
    return gt !== void 0 ? gt.createHTML(t) : t
}
a(wt, "P");
var Dt = a( (o, t) => {
    let e = o.length - 1, s = [], i, r = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = B;
    for (let c = 0; c < e; c++) {
        let h = o[c], f, $, d = -1, _ = 0;
        for (; _ < h.length && (n.lastIndex = _,
        $ = n.exec(h),
        $ !== null); )
            _ = n.lastIndex,
            n === B ? $[1] === "!--" ? n = $t : $[1] !== void 0 ? n = _t : $[2] !== void 0 ? (Ct.test($[2]) && (i = RegExp("</" + $[2], "g")),
            n = E) : $[3] !== void 0 && (n = E) : n === E ? $[0] === ">" ? (n = i ?? B,
            d = -1) : $[1] === void 0 ? d = -2 : (d = n.lastIndex - $[2].length,
            f = $[1],
            n = $[3] === void 0 ? E : $[3] === '"' ? bt : At) : n === bt || n === At ? n = E : n === $t || n === _t ? n = B : (n = E,
            i = void 0);
        let A = n === E && o[c + 1].startsWith("/>") ? " " : "";
        r += n === B ? h + Tt : d >= 0 ? (s.push(f),
        h.slice(0, d) + vt + h.slice(d) + S + A) : h + S + (d === -2 ? c : A);
    }
    return [wt(o, r + (o[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s]
}
, "V"), x, at = (x = class {
    constructor({strings: t, _$litType$: e}, s) {
        let i;
        this.parts = [];
        let r = 0
          , n = 0
          , c = t.length - 1
          , h = this.parts
          , [f,$] = Dt(t, e);
        if (this.el = x.createElement(f, s),
        C.currentNode = this.el.content,
        e === 2 || e === 3) {
            let d = this.el.content.firstChild;
            d.replaceWith(...d.childNodes);
        }
        for (; (i = C.nextNode()) !== null && h.length < c; ) {
            if (i.nodeType === 1) {
                if (i.hasAttributes())
                    for (let d of i.getAttributeNames())
                        if (d.endsWith(vt)) {
                            let _ = $[n++]
                              , A = i.getAttribute(d).split(S)
                              , K = /([.?@])?(.*)/.exec(_);
                            h.push({
                                type: 1,
                                index: r,
                                name: K[2],
                                strings: A,
                                ctor: K[1] === "." ? Bt : K[1] === "?" ? Ft : K[1] === "@" ? Vt : Y
                            }),
                            i.removeAttribute(d);
                        } else
                            d.startsWith(S) && (h.push({
                                type: 6,
                                index: r
                            }),
                            i.removeAttribute(d));
                if (Ct.test(i.tagName)) {
                    let d = i.textContent.split(S)
                      , _ = d.length - 1;
                    if (_ > 0) {
                        i.textContent = X ? X.emptyScript : "";
                        for (let A = 0; A < _; A++)
                            i.append(d[A], V()),
                            C.nextNode(),
                            h.push({
                                type: 2,
                                index: ++r
                            });
                        i.append(d[_], V());
                    }
                }
            } else if (i.nodeType === 8)
                if (i.data === Et)
                    h.push({
                        type: 2,
                        index: r
                    });
                else {
                    let d = -1;
                    for (; (d = i.data.indexOf(S, d + 1)) !== -1; )
                        h.push({
                            type: 7,
                            index: r
                        }),
                        d += S.length - 1;
                }
            r++;
        }
    }
    static createElement(t, e) {
        let s = O.createElement("template");
        return s.innerHTML = t,
        s
    }
}
,
a(x, "N"),
x);
function k(o, t, e=o, s) {
    if (t === M)
        return t;
    let i = s !== void 0 ? e._$Co?.[s] : e._$Cl
      , r = J(t) ? void 0 : t._$litDirective$;
    return i?.constructor !== r && (i?._$AO?.(false),
    r === void 0 ? i = void 0 : (i = new r(o),
    i._$AT(o, e, s)),
    s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = i : e._$Cl = i),
    i !== void 0 && (t = k(o, i._$AS(o, t.values), i, s)),
    t
}
a(k, "S");
var L, zt = (L = class {
    constructor(t, e) {
        this._$AV = [],
        this._$AN = void 0,
        this._$AD = t,
        this._$AM = e;
    }
    get parentNode() {
        return this._$AM.parentNode
    }
    get _$AU() {
        return this._$AM._$AU
    }
    u(t) {
        let {el: {content: e}, parts: s} = this._$AD
          , i = (t?.creationScope ?? O).importNode(e, true);
        C.currentNode = i;
        let r = C.nextNode()
          , n = 0
          , c = 0
          , h = s[0];
        for (; h !== void 0; ) {
            if (n === h.index) {
                let f;
                h.type === 2 ? f = new dt(r,r.nextSibling,this,t) : h.type === 1 ? f = new h.ctor(r,h.name,h.strings,this,t) : h.type === 6 && (f = new Jt(r,this,t)),
                this._$AV.push(f),
                h = s[++c];
            }
            n !== h?.index && (r = C.nextNode(),
            n++);
        }
        return C.currentNode = O,
        i
    }
    p(t) {
        let e = 0;
        for (let s of this._$AV)
            s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e),
            e += s.strings.length - 2) : s._$AI(t[e])),
            e++;
    }
}
,
a(L, "M"),
L), w, dt = (w = class {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv
    }
    constructor(t, e, s, i) {
        this.type = 2,
        this._$AH = m,
        this._$AN = void 0,
        this._$AA = t,
        this._$AB = e,
        this._$AM = s,
        this.options = i,
        this._$Cv = i?.isConnected ?? true;
    }
    get parentNode() {
        let t = this._$AA.parentNode
          , e = this._$AM;
        return e !== void 0 && t?.nodeType === 11 && (t = e.parentNode),
        t
    }
    get startNode() {
        return this._$AA
    }
    get endNode() {
        return this._$AB
    }
    _$AI(t, e=this) {
        t = k(this, t, e),
        J(t) ? t === m || t == null || t === "" ? (this._$AH !== m && this._$AR(),
        this._$AH = m) : t !== this._$AH && t !== M && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : qt(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB)
    }
    T(t) {
        this._$AH !== t && (this._$AR(),
        this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== m && J(this._$AH) ? this._$AA.nextSibling.data = t : this.T(O.createTextNode(t)),
        this._$AH = t;
    }
    $(t) {
        let {values: e, _$litType$: s} = t
          , i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = at.createElement(wt(s.h, s.h[0]), this.options)),
        s);
        if (this._$AH?._$AD === i)
            this._$AH.p(e);
        else {
            let r = new zt(i,this)
              , n = r.u(this.options);
            r.p(e),
            this.T(n),
            this._$AH = r;
        }
    }
    _$AC(t) {
        let e = St.get(t.strings);
        return e === void 0 && St.set(t.strings, e = new at(t)),
        e
    }
    k(t) {
        ht(this._$AH) || (this._$AH = [],
        this._$AR());
        let e = this._$AH, s, i = 0;
        for (let r of t)
            i === e.length ? e.push(s = new w(this.O(V()),this.O(V()),this,this.options)) : s = e[i],
            s._$AI(r),
            i++;
        i < e.length && (this._$AR(s && s._$AB.nextSibling, i),
        e.length = i);
    }
    _$AR(t=this._$AA.nextSibling, e) {
        for (this._$AP?.(false, true, e); t && t !== this._$AB; ) {
            let s = t.nextSibling;
            t.remove(),
            t = s;
        }
    }
    setConnected(t) {
        this._$AM === void 0 && (this._$Cv = t,
        this._$AP?.(t));
    }
}
,
a(w, "R"),
w), R, Y = (R = class {
    get tagName() {
        return this.element.tagName
    }
    get _$AU() {
        return this._$AM._$AU
    }
    constructor(t, e, s, i, r) {
        this.type = 1,
        this._$AH = m,
        this._$AN = void 0,
        this.element = t,
        this.name = e,
        this._$AM = i,
        this.options = r,
        s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String),
        this.strings = s) : this._$AH = m;
    }
    _$AI(t, e=this, s, i) {
        let r = this.strings
          , n = false;
        if (r === void 0)
            t = k(this, t, e, 0),
            n = !J(t) || t !== this._$AH && t !== M,
            n && (this._$AH = t);
        else {
            let c = t, h, f;
            for (t = r[0],
            h = 0; h < r.length - 1; h++)
                f = k(this, c[s + h], e, h),
                f === M && (f = this._$AH[h]),
                n || (n = !J(f) || f !== this._$AH[h]),
                f === m ? t = m : t !== m && (t += (f ?? "") + r[h + 1]),
                this._$AH[h] = f;
        }
        n && !i && this.j(t);
    }
    j(t) {
        t === m ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
,
a(R, "k"),
R), U, Bt = (U = class extends Y {
    constructor() {
        super(...arguments),
        this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === m ? void 0 : t;
    }
}
,
a(U, "H"),
U), j, Ft = (j = class extends Y {
    constructor() {
        super(...arguments),
        this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== m);
    }
}
,
a(j, "I"),
j), N, Vt = (N = class extends Y {
    constructor(t, e, s, i, r) {
        super(t, e, s, i, r),
        this.type = 5;
    }
    _$AI(t, e=this) {
        if ((t = k(this, t, e, 0) ?? m) === M)
            return;
        let s = this._$AH
          , i = t === m && s !== m || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive
          , r = t !== m && (s === m || i);
        i && this.element.removeEventListener(this.name, this, s),
        r && this.element.addEventListener(this.name, this, t),
        this._$AH = t;
    }
    handleEvent(t) {
        typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
,
a(N, "L"),
N), H, Jt = (H = class {
    constructor(t, e, s) {
        this.element = t,
        this.type = 6,
        this._$AN = void 0,
        this._$AM = e,
        this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU
    }
    _$AI(t) {
        k(this, t);
    }
}
,
a(H, "z"),
H);
var Wt = F.litHtmlPolyfillSupport;
Wt?.(at, dt),
(F.litHtmlVersions ?? (F.litHtmlVersions = [])).push("3.3.0");
var Ot = a( (o, t, e) => {
    let s = e?.renderBefore ?? t
      , i = s._$litPart$;
    if (i === void 0) {
        let r = e?.renderBefore ?? null;
        s._$litPart$ = i = new dt(t.insertBefore(V(), r),r,void 0,e ?? {});
    }
    return i._$AI(o),
    i
}
, "B");
var W = globalThis, q, T = (q = class extends v {
    constructor() {
        super(...arguments),
        this.renderOptions = {
            host: this
        },
        this._$Do = void 0;
    }
    createRenderRoot() {
        var e;
        let t = super.createRenderRoot();
        return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild),
        t
    }
    update(t) {
        let e = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
        super.update(t),
        this._$Do = Ot(e, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(),
        this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
        super.disconnectedCallback(),
        this._$Do?.setConnected(false);
    }
    render() {
        return M
    }
}
,
a(q, "i"),
q);
T._$litElement$ = true,
T.finalized = true,
W.litElementHydrateSupport?.({
    LitElement: T
});
var Kt = W.litElementPolyfillSupport;
Kt?.({
    LitElement: T
});
(W.litElementVersions ?? (W.litElementVersions = [])).push("4.2.0");
var Ae = a(o => (t, e) => {
    e !== void 0 ? e.addInitializer( () => {
        customElements.define(o, t);
    }
    ) : customElements.define(o, t);
}
, "t");
var Zt = {
    attribute: true,
    type: String,
    converter: z,
    reflect: false,
    hasChanged: Q
}
  , Gt = a( (o=Zt, t, e) => {
    let {kind: s, metadata: i} = e
      , r = globalThis.litPropertyMetadata.get(i);
    if (r === void 0 && globalThis.litPropertyMetadata.set(i, r = new Map),
    s === "setter" && ((o = Object.create(o)).wrapped = true),
    r.set(e.name, o),
    s === "accessor") {
        let {name: n} = e;
        return {
            set(c) {
                let h = t.get.call(this);
                t.set.call(this, c),
                this.requestUpdate(n, h, o);
            },
            init(c) {
                return c !== void 0 && this.C(n, void 0, o, c),
                c
            }
        }
    }
    if (s === "setter") {
        let {name: n} = e;
        return function(c) {
            let h = this[n];
            t.call(this, c),
            this.requestUpdate(n, h, o);
        }
    }
    throw Error("Unsupported decorator location: " + s)
}
, "r");
function p(o) {
    return (t, e) => typeof e == "object" ? Gt(o, t, e) : ( (s, i, r) => {
        let n = i.hasOwnProperty(r);
        return i.constructor.createProperty(r, s),
        n ? Object.getOwnPropertyDescriptor(i, r) : void 0
    }
    )(o, t, e)
}
a(p, "n");
function Mt(o) {
    return p({
        ...o,
        state: true,
        attribute: false
    })
}
a(Mt, "r");
function y(o, t, e, s) {
    var i = arguments.length, r = i < 3 ? t : s === null ? s = Object.getOwnPropertyDescriptor(t, e) : s, n;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        r = Reflect.decorate(o, t, e, s);
    else
        for (var c = o.length - 1; c >= 0; c--)
            (n = o[c]) && (r = (i < 3 ? n(r) : i > 3 ? n(t, e, r) : n(t, e)) || r);
    return i > 3 && r && Object.defineProperty(t, e, r),
    r
}
a(y, "_ts_decorate");
function g(o, t) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, t)
}
a(g, "_ts_metadata");
var et = class et extends T {
    constructor() {
        super();
        l(this, "animationId");
        l(this, "src");
        l(this, "data");
        l(this, "loop");
        l(this, "autoplay");
        l(this, "speed");
        l(this, "segment");
        l(this, "mode");
        l(this, "marker");
        l(this, "backgroundColor");
        l(this, "renderConfig");
        l(this, "useFrameInterpolation");
        l(this, "themeId");
        l(this, "workerId");
        l(this, "stateMachineId");
        l(this, "stateMachineConfig");
        l(this, "dotLottie", null);
    }
    _init() {
        let e = document.createElement("canvas");
        this.shadowRoot?.appendChild(e),
        this.dotLottie = this._createDotLottieInstance({
            canvas: e,
            src: this.src,
            data: this.data,
            loop: this.loop,
            autoplay: this.autoplay,
            speed: this.speed,
            segment: this.segment,
            mode: this.mode,
            renderConfig: this.renderConfig,
            useFrameInterpolation: this.useFrameInterpolation,
            themeId: this.themeId,
            animationId: this.animationId,
            stateMachineConfig: this.stateMachineConfig,
            stateMachineId: this.stateMachineId,
            workerId: this.workerId
        });
    }
    connectedCallback() {
        super.connectedCallback(),
        this._init();
    }
    adoptedCallback() {
        this._init();
    }
    disconnectedCallback() {
        super.disconnectedCallback(),
        this.dotLottie?.destroy(),
        this.dotLottie = null,
        this.shadowRoot?.querySelector("canvas")?.remove();
    }
    attributeChangedCallback(e, s, i) {
        if (super.attributeChangedCallback(e, s, i),
        !(!this.dotLottie || s === i)) {
            if (e === "segment") {
                let r = JSON.parse(i ?? "[]");
                Array.isArray(r) && r.length === 2 && typeof r[0] == "number" && typeof r[1] == "number" ? this.dotLottie.setSegment(r[0], r[1]) : this.dotLottie.setSegment(0, this.dotLottie.totalFrames);
            }
            e === "mode" && this.dotLottie.setMode(i || "forward"),
            e === "speed" && this.dotLottie.setSpeed(i ? Number(i) : 1),
            e === "loop" && this.dotLottie.setLoop(!!i),
            e === "useframeinterpolation" && this.dotLottie.setUseFrameInterpolation(typeof i == "string" ? JSON.parse(i) : true),
            e === "themeid" && this.dotLottie.setTheme(i ?? ""),
            e === "backgroundcolor" && this.dotLottie.setBackgroundColor(i ?? ""),
            e === "renderconfig" && this.dotLottie.setRenderConfig(JSON.parse(i ?? "{}")),
            e === "animationid" && i && this.dotLottie.loadAnimation(i),
            e === "marker" && this.dotLottie.setMarker(i ?? ""),
            e === "src" && i && this.dotLottie.load({
                src: i,
                data: this.data,
                loop: this.loop,
                autoplay: this.autoplay,
                speed: this.speed,
                segment: this.segment,
                mode: this.mode,
                renderConfig: this.renderConfig,
                useFrameInterpolation: this.useFrameInterpolation,
                themeId: this.themeId,
                stateMachineConfig: this.stateMachineConfig,
                stateMachineId: this.stateMachineId
            }),
            e === "data" && i && this.dotLottie.load({
                src: this.src,
                data: i,
                loop: this.loop,
                autoplay: this.autoplay,
                speed: this.speed,
                segment: this.segment,
                mode: this.mode,
                renderConfig: this.renderConfig,
                useFrameInterpolation: this.useFrameInterpolation,
                themeId: this.themeId,
                animationId: this.animationId,
                stateMachineConfig: this.stateMachineConfig,
                stateMachineId: this.stateMachineId
            }),
            e === "statemachineid" && this.dotLottie.isLoaded && (i ? this.dotLottie.stateMachineLoad(i) && this.dotLottie.stateMachineStart() : this.dotLottie.stateMachineStop()),
            e === "statemachineconfig" && this.dotLottie.stateMachineSetConfig(i ? JSON.parse(i) : null);
        }
    }
    render() {
        return xt`<slot></slot>`
    }
}
;
a(et, "BaseDotLottieWC"),
l(et, "styles", ot`
    :host {
      display: block;
      position: relative;
    }

    :host > canvas {
      width: 100%;
      height: 100%;
    }
  `);
var u = et;
y([p({
    type: String
}), g("design:type", String)], u.prototype, "animationId", void 0);
y([p({
    type: String
}), g("design:type", Object)], u.prototype, "src", void 0);
y([p({
    type: String
}), g("design:type", Object)], u.prototype, "data", void 0);
y([p({
    type: Boolean
}), g("design:type", Object)], u.prototype, "loop", void 0);
y([p({
    type: Boolean
}), g("design:type", Object)], u.prototype, "autoplay", void 0);
y([p({
    type: Number
}), g("design:type", Object)], u.prototype, "speed", void 0);
y([p({
    type: Array
}), g("design:type", Object)], u.prototype, "segment", void 0);
y([p({
    type: String
}), g("design:type", Object)], u.prototype, "mode", void 0);
y([p({
    type: String
}), g("design:type", Object)], u.prototype, "marker", void 0);
y([p({
    type: String
}), g("design:type", Object)], u.prototype, "backgroundColor", void 0);
y([p({
    type: Object
}), g("design:type", Object)], u.prototype, "renderConfig", void 0);
y([p({
    type: Boolean
}), g("design:type", Object)], u.prototype, "useFrameInterpolation", void 0);
y([p({
    type: String
}), g("design:type", Object)], u.prototype, "themeId", void 0);
y([p({
    type: String
}), g("design:type", String)], u.prototype, "workerId", void 0);
y([p({
    type: String
}), g("design:type", Object)], u.prototype, "stateMachineId", void 0);
y([p({
    type: Object
}), g("design:type", Object)], u.prototype, "stateMachineConfig", void 0);
y([Mt(), g("design:type", Object)], u.prototype, "dotLottie", void 0);
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
export {a, Ae as b, u as c};
//# sourceMappingURL=chunk-2KOBN6OY.js.map
//# sourceMappingURL=chunk-2KOBN6OY.js.map
