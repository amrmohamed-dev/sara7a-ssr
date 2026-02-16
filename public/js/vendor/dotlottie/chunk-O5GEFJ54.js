import {a} from './chunk-2KOBN6OY.js';
var H3 = Object.defineProperty, N3 = a( (f, e, a) => e in f ? H3(f, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: a
}) : f[e] = a, "N3"), m = a( (f, e, a) => N3(f, typeof e != "symbol" ? e + "" : e, a), "f"), r1, G3 = (r1 = class {
    requestAnimationFrame(e) {
        return requestAnimationFrame(e)
    }
    cancelAnimationFrame(e) {
        cancelAnimationFrame(e);
    }
}
,
a(r1, "n2"),
r1), o1, V3 = (o1 = class {
    constructor() {
        m(this, "_lastHandleId", 0),
        m(this, "_lastImmediate", null);
    }
    requestAnimationFrame(e) {
        return this._lastHandleId >= Number.MAX_SAFE_INTEGER && (this._lastHandleId = 0),
        this._lastHandleId += 1,
        this._lastImmediate = setImmediate( () => {
            e(Date.now());
        }
        ),
        this._lastHandleId
    }
    cancelAnimationFrame(e) {
        this._lastImmediate && clearImmediate(this._lastImmediate);
    }
}
,
a(o1, "i2"),
o1), h1, q3 = (h1 = class {
    constructor() {
        m(this, "_strategy"),
        this._strategy = typeof requestAnimationFrame == "function" ? new G3 : new V3;
    }
    requestAnimationFrame(e) {
        return this._strategy.requestAnimationFrame(e)
    }
    cancelAnimationFrame(e) {
        this._strategy.cancelAnimationFrame(e);
    }
}
,
a(h1, "F1"),
h1), P = typeof window < "u" && typeof window.document < "u", d2 = new Uint8Array([80, 75, 3, 4]), J3 = ["v", "ip", "op", "layers", "fr", "w", "h"], X2 = "0.54.1", Y2 = "@lottiefiles/dotlottie-web", K3 = .75, Q3 = 4, X3 = ( () => {
    var f = typeof document < "u" ? document.currentScript?.src : void 0;
    return function(e={}) {
        var a1, n1;
        var a$1, r = e, l, L, N = new Promise( (t, i) => {
            l = t,
            L = i;
        }
        ), J = Object.assign({}, r), P1 = "./this.program", A = "", f2;
        typeof document < "u" && document.currentScript && (A = document.currentScript.src),
        f && (A = f),
        A.startsWith("blob:") ? A = "" : A = A.substr(0, A.replace(/[?#].*/, "").lastIndexOf("/") + 1),
        f2 = a(async t => {
            if (t = await fetch(t, {
                credentials: "same-origin"
            }),
            t.ok)
                return t.arrayBuffer();
            throw Error(t.status + " : " + t.url)
        }
        , "l2");
        var v1 = r.printErr || console.error.bind(console);
        Object.assign(r, J),
        J = null,
        r.thisProgram && (P1 = r.thisProgram);
        var E1 = r.wasmBinary, O1, A1 = false, N1, Z, F, t1, p1, K, b, v2, p2;
        function m2() {
            var t = O1.buffer;
            r.HEAP8 = Z = new Int8Array(t),
            r.HEAP16 = t1 = new Int16Array(t),
            r.HEAPU8 = F = new Uint8Array(t),
            r.HEAPU16 = p1 = new Uint16Array(t),
            r.HEAP32 = K = new Int32Array(t),
            r.HEAPU32 = b = new Uint32Array(t),
            r.HEAPF32 = v2 = new Float32Array(t),
            r.HEAPF64 = p2 = new Float64Array(t);
        }
        a(m2, "v2");
        var g2 = []
          , M2 = []
          , w2 = [];
        function i3() {
            var t = r.preRun.shift();
            g2.unshift(t);
        }
        a(i3, "t3");
        var Q = 0
          , m1 = null;
        function F1(t) {
            throw r.onAbort?.(t),
            t = "Aborted(" + t + ")",
            v1(t),
            A1 = true,
            t = new WebAssembly.RuntimeError(t + ". Build with -sASSERTIONS for more info."),
            L(t),
            t
        }
        a(F1, "y1");
        var L2 = a(t => t.startsWith("data:application/octet-stream;base64,"), "M2"), k1;
        async function a3(t) {
            if (!E1)
                try {
                    var i = await f2(t);
                    return new Uint8Array(i)
                } catch {}
            if (t == k1 && E1)
                t = new Uint8Array(E1);
            else
                throw "both async and sync fetching of the wasm failed";
            return t
        }
        a(a3, "n3");
        async function n3(t, i) {
            try {
                var n = await a3(t);
                return await WebAssembly.instantiate(n, i)
            } catch (s) {
                v1(`failed to asynchronously prepare wasm: ${s}`),
                F1(s);
            }
        }
        a(n3, "i3");
        async function s3(t) {
            var i = k1;
            if (!E1 && typeof WebAssembly.instantiateStreaming == "function" && !L2(i) && typeof fetch == "function")
                try {
                    var n = fetch(i, {
                        credentials: "same-origin"
                    });
                    return await WebAssembly.instantiateStreaming(n, t)
                } catch (s) {
                    v1(`wasm streaming compile failed: ${s}`),
                    v1("falling back to ArrayBuffer instantiation");
                }
            return n3(i, t)
        }
        a(s3, "r3");
        let y2 = (a1 = class {
            constructor(i) {
                m(this, "name", "ExitStatus"),
                this.message = `Program terminated with exit(${i})`,
                this.status = i;
            }
        }
        ,
        a(a1, "b2"),
        a1);
        var G1 = a(t => {
            for (; 0 < t.length; )
                t.shift()(r);
        }
        , "U1")
          , V1 = r.noExitRuntime || true
          , C2 = typeof TextDecoder < "u" ? new TextDecoder : void 0
          , D1 = a( (t=0, i=NaN) => {
            var n = F
              , s = t + i;
            for (i = t; n[i] && !(i >= s); )
                ++i;
            if (16 < i - t && n.buffer && C2)
                return C2.decode(n.subarray(t, i));
            for (s = ""; t < i; ) {
                var h = n[t++];
                if (h & 128) {
                    var d = n[t++] & 63;
                    if ((h & 224) == 192)
                        s += String.fromCharCode((h & 31) << 6 | d);
                    else {
                        var u = n[t++] & 63;
                        h = (h & 240) == 224 ? (h & 15) << 12 | d << 6 | u : (h & 7) << 18 | d << 12 | u << 6 | n[t++] & 63,
                        65536 > h ? s += String.fromCharCode(h) : (h -= 65536,
                        s += String.fromCharCode(55296 | h >> 10, 56320 | h & 1023));
                    }
                } else
                    s += String.fromCharCode(h);
            }
            return s
        }
        , "C1");
        let r3 = (n1 = class {
            constructor(i) {
                this.Ca = i - 24;
            }
        }
        ,
        a(n1, "a3"),
        n1);
        var b2 = 0
          , g1 = a( (t, i, n) => {
            var s = F;
            if (0 < n) {
                n = i + n - 1;
                for (var h = 0; h < t.length; ++h) {
                    var d = t.charCodeAt(h);
                    if (55296 <= d && 57343 >= d) {
                        var u = t.charCodeAt(++h);
                        d = 65536 + ((d & 1023) << 10) | u & 1023;
                    }
                    if (127 >= d) {
                        if (i >= n)
                            break;
                        s[i++] = d;
                    } else {
                        if (2047 >= d) {
                            if (i + 1 >= n)
                                break;
                            s[i++] = 192 | d >> 6;
                        } else {
                            if (65535 >= d) {
                                if (i + 2 >= n)
                                    break;
                                s[i++] = 224 | d >> 12;
                            } else {
                                if (i + 3 >= n)
                                    break;
                                s[i++] = 240 | d >> 18,
                                s[i++] = 128 | d >> 12 & 63;
                            }
                            s[i++] = 128 | d >> 6 & 63;
                        }
                        s[i++] = 128 | d & 63;
                    }
                }
                s[i] = 0;
            }
        }
        , "u1")
          , T1 = {}
          , q1 = a(t => {
            for (; t.length; ) {
                var i = t.pop();
                t.pop()(i);
            }
        }
        , "W1");
        function M1(t) {
            return this.fromWireType(b[t >> 2])
        }
        a(M1, "d1");
        var e1 = {}, X = {}, R1 = {}, w1, q = a( (t, i, n) => {
            function s(c) {
                if (c = n(c),
                c.length !== t.length)
                    throw new w1("Mismatched type converter count");
                for (var _ = 0; _ < t.length; ++_)
                    U(t[_], c[_]);
            }
            a(s, "a"),
            t.forEach(c => R1[c] = i);
            var h = Array(i.length)
              , d = []
              , u = 0;
            i.forEach( (c, _) => {
                X.hasOwnProperty(c) ? h[_] = X[c] : (d.push(c),
                e1.hasOwnProperty(c) || (e1[c] = []),
                e1[c].push( () => {
                    h[_] = X[c],
                    ++u,
                    u === d.length && s(h);
                }
                ));
            }
            ),
            d.length === 0 && s(h);
        }
        , "J"), I2, E = a(t => {
            for (var i = ""; F[t]; )
                i += I2[F[t++]];
            return i
        }
        , "S"), M;
        function o3(t, i, n={}) {
            var s = i.name;
            if (!t)
                throw new M(`type "${s}" must have a positive integer typeid pointer`);
            if (X.hasOwnProperty(t)) {
                if (n.hb)
                    return;
                throw new M(`Cannot register type '${s}' twice`)
            }
            X[t] = i,
            delete R1[t],
            e1.hasOwnProperty(t) && (i = e1[t],
            delete e1[t],
            i.forEach(h => h()));
        }
        a(o3, "o3");
        function U(t, i, n={}) {
            return o3(t, i, n)
        }
        a(U, "B");
        var J1 = a(t => {
            throw new M(t.Aa.Da.Ba.name + " instance already deleted")
        }
        , "$1")
          , K1 = false
          , S2 = a( () => {}
        , "w2")
          , P2 = a( (t, i, n) => i === n ? t : n.Ga === void 0 ? null : (t = P2(t, i, n.Ga),
        t === null ? null : n.$a(t)), "E2")
          , E2 = {}
          , h3 = {}
          , d3 = a( (t, i) => {
            if (i === void 0)
                throw new M("ptr should not be undefined");
            for (; t.Ga; )
                i = t.Qa(i),
                t = t.Ga;
            return h3[i]
        }
        , "d3")
          , $1 = a( (t, i) => {
            if (!i.Da || !i.Ca)
                throw new w1("makeClassHandle requires ptr and ptrType");
            if (!!i.Ha != !!i.Fa)
                throw new w1("Both smartPtrType and smartPtr must be specified");
            return i.count = {
                value: 1
            },
            L1(Object.create(t, {
                Aa: {
                    value: i,
                    writable: true
                }
            }))
        }
        , "E1")
          , L1 = a(t => typeof FinalizationRegistry > "u" ? (L1 = a(i => i, "c1"),
        t) : (K1 = new FinalizationRegistry(i => {
            i = i.Aa,
            --i.count.value,
            i.count.value === 0 && (i.Fa ? i.Ha.Ka(i.Fa) : i.Da.Ba.Ka(i.Ca));
        }
        ),
        L1 = a(i => {
            var n = i.Aa;
            return n.Fa && K1.register(i, {
                Aa: n
            }, i),
            i
        }
        , "c1"),
        S2 = a(i => {
            K1.unregister(i);
        }
        , "w2"),
        L1(t)), "c1");
        function U1() {}
        a(U1, "I1");
        var y1 = a( (t, i) => Object.defineProperty(i, "name", {
            value: t
        }), "l1")
          , O2 = a( (t, i, n) => {
            if (t[i].Ea === void 0) {
                var s = t[i];
                t[i] = function(...h) {
                    if (!t[i].Ea.hasOwnProperty(h.length))
                        throw new M(`Function '${n}' called with an invalid number of arguments (${h.length}) - expects one of (${t[i].Ea})!`);
                    return t[i].Ea[h.length].apply(this, h)
                }
                ,
                t[i].Ea = [],
                t[i].Ea[s.Na] = s;
            }
        }
        , "S2")
          , Q1 = a( (t, i, n) => {
            if (r.hasOwnProperty(t)) {
                if (n === void 0 || r[t].Ea !== void 0 && r[t].Ea[n] !== void 0)
                    throw new M(`Cannot register public name '${t}' twice`);
                if (O2(r, t, t),
                r[t].Ea.hasOwnProperty(n))
                    throw new M(`Cannot register multiple overloads of a function with the same number of arguments (${n})!`);
                r[t].Ea[n] = i;
            } else
                r[t] = i,
                r[t].Na = n;
        }
        , "V1")
          , c3 = a(t => {
            t = t.replace(/[^a-zA-Z0-9_]/g, "$");
            var i = t.charCodeAt(0);
            return 48 <= i && 57 >= i ? `_${t}` : t
        }
        , "c3");
        function u3(t, i, n, s, h, d, u, c) {
            this.name = t,
            this.constructor = i,
            this.Ma = n,
            this.Ka = s,
            this.Ga = h,
            this.bb = d,
            this.Qa = u,
            this.$a = c,
            this.jb = [];
        }
        a(u3, "l3");
        var X1 = a( (t, i, n) => {
            for (; i !== n; ) {
                if (!i.Qa)
                    throw new M(`Expected null or instance of ${n.name}, got an instance of ${i.name}`);
                t = i.Qa(t),
                i = i.Ga;
            }
            return t
        }
        , "j1");
        function l3(t, i) {
            if (i === null) {
                if (this.Ta)
                    throw new M(`null is not a valid ${this.name}`);
                return 0
            }
            if (!i.Aa)
                throw new M(`Cannot pass "${i2(i)}" as a ${this.name}`);
            if (!i.Aa.Ca)
                throw new M(`Cannot pass deleted object as a pointer of type ${this.name}`);
            return X1(i.Aa.Ca, i.Aa.Da.Ba, this.Ba)
        }
        a(l3, "p3");
        function _3(t, i) {
            if (i === null) {
                if (this.Ta)
                    throw new M(`null is not a valid ${this.name}`);
                if (this.Sa) {
                    var n = this.Ua();
                    return t !== null && t.push(this.Ka, n),
                    n
                }
                return 0
            }
            if (!i || !i.Aa)
                throw new M(`Cannot pass "${i2(i)}" as a ${this.name}`);
            if (!i.Aa.Ca)
                throw new M(`Cannot pass deleted object as a pointer of type ${this.name}`);
            if (!this.Ra && i.Aa.Da.Ra)
                throw new M(`Cannot convert argument of type ${i.Aa.Ha ? i.Aa.Ha.name : i.Aa.Da.name} to parameter type ${this.name}`);
            if (n = X1(i.Aa.Ca, i.Aa.Da.Ba, this.Ba),
            this.Sa) {
                if (i.Aa.Fa === void 0)
                    throw new M("Passing raw pointer to smart pointer is illegal");
                switch (this.ob) {
                case 0:
                    if (i.Aa.Ha === this)
                        n = i.Aa.Fa;
                    else
                        throw new M(`Cannot convert argument of type ${i.Aa.Ha ? i.Aa.Ha.name : i.Aa.Da.name} to parameter type ${this.name}`);
                    break;
                case 1:
                    n = i.Aa.Fa;
                    break;
                case 2:
                    if (i.Aa.Ha === this)
                        n = i.Aa.Fa;
                    else {
                        var s = i.clone();
                        n = this.kb(n, W1( () => s.delete())),
                        t !== null && t.push(this.Ka, n);
                    }
                    break;
                default:
                    throw new M("Unsupporting sharing policy")
                }
            }
            return n
        }
        a(_3, "f3");
        function f3(t, i) {
            if (i === null) {
                if (this.Ta)
                    throw new M(`null is not a valid ${this.name}`);
                return 0
            }
            if (!i.Aa)
                throw new M(`Cannot pass "${i2(i)}" as a ${this.name}`);
            if (!i.Aa.Ca)
                throw new M(`Cannot pass deleted object as a pointer of type ${this.name}`);
            if (i.Aa.Da.Ra)
                throw new M(`Cannot convert argument of type ${i.Aa.Da.name} to parameter type ${this.name}`);
            return X1(i.Aa.Ca, i.Aa.Da.Ba, this.Ba)
        }
        a(f3, "v3");
        function C1(t, i, n, s, h, d, u, c, _, p, v) {
            this.name = t,
            this.Ba = i,
            this.Ta = n,
            this.Ra = s,
            this.Sa = h,
            this.ib = d,
            this.ob = u,
            this.Ya = c,
            this.Ua = _,
            this.kb = p,
            this.Ka = v,
            h || i.Ga !== void 0 ? this.toWireType = _3 : (this.toWireType = s ? l3 : f3,
            this.Ja = null);
        }
        a(C1, "p1");
        var A2 = a( (t, i, n) => {
            if (!r.hasOwnProperty(t))
                throw new w1("Replacing nonexistent public symbol");
            r[t].Ea !== void 0 && n !== void 0 ? r[t].Ea[n] = i : (r[t] = i,
            r[t].Na = n);
        }
        , "P2"), T, v3 = a( (t, i, n=[]) => (t.includes("j") ? (t = t.replace(/p/g, "i"),
        i = (0,
        r["dynCall_" + t])(i, ...n)) : i = T.get(i)(...n),
        i), "_3"), p3 = a( (t, i) => (...n) => v3(t, i, n), "m3"), O = a( (t, i) => {
            t = E(t);
            var n = t.includes("j") ? p3(t, i) : T.get(i);
            if (typeof n != "function")
                throw new M(`unknown function pointer with signature ${t}: ${i}`);
            return n
        }
        , "P"), F2, k2 = a(t => {
            t = j2(t);
            var i = E(t);
            return V(t),
            i
        }
        , "T2"), x1 = a( (t, i) => {
            function n(d) {
                h[d] || X[d] || (R1[d] ? R1[d].forEach(n) : (s.push(d),
                h[d] = true));
            }
            a(n, "r");
            var s = []
              , h = {};
            throw i.forEach(n),
            new F2(`${t}: ` + s.map(k2).join([", "]))
        }
        , "S1"), Y1 = a( (t, i) => {
            for (var n = [], s = 0; s < t; s++)
                n.push(b[i + 4 * s >> 2]);
            return n
        }
        , "N1");
        function m3(t) {
            for (var i = 1; i < t.length; ++i)
                if (t[i] !== null && t[i].Ja === void 0)
                    return true;
            return false
        }
        a(m3, "g3");
        function Z1(t, i, n, s, h) {
            var d = i.length;
            if (2 > d)
                throw new M("argTypes array size mismatch! Must at least get return value and 'this' types!");
            var u = i[1] !== null && n !== null
              , c = m3(i)
              , _ = i[0].name !== "void"
              , p = d - 2
              , v = Array(p)
              , w = []
              , y = [];
            return y1(t, function(...k) {
                if (y.length = 0,
                w.length = u ? 2 : 1,
                w[0] = h,
                u) {
                    var I = i[1].toWireType(y, this);
                    w[1] = I;
                }
                for (var S = 0; S < p; ++S)
                    v[S] = i[S + 2].toWireType(y, k[S]),
                    w.push(v[S]);
                if (k = s(...w),
                c)
                    q1(y);
                else
                    for (S = u ? 1 : 2; S < i.length; S++) {
                        var x = S === 1 ? I : v[S - 2];
                        i[S].Ja !== null && i[S].Ja(x);
                    }
                return I = _ ? i[0].fromWireType(k) : void 0,
                I
            })
        }
        a(Z1, "G1");
        var D2 = a(t => {
            t = t.trim();
            let i = t.indexOf("(");
            return i !== -1 ? t.substr(0, i) : t
        }
        , "A2"), t2 = [], G = [], e2 = a(t => {
            9 < t && --G[t + 1] === 0 && (G[t] = void 0,
            t2.push(t));
        }
        , "q1"), i1 = a(t => {
            if (!t)
                throw new M("Cannot use deleted val. handle = " + t);
            return G[t]
        }
        , "i1"), W1 = a(t => {
            switch (t) {
            case void 0:
                return 2;
            case null:
                return 4;
            case true:
                return 6;
            case false:
                return 8;
            default:
                let i = t2.pop() || G.length;
                return G[i] = t,
                G[i + 1] = 1,
                i
            }
        }
        , "P1"), T2 = {
            name: "emscripten::val",
            fromWireType: a(t => {
                var i = i1(t);
                return e2(t),
                i
            }
            , "fromWireType"),
            toWireType: a( (t, i) => W1(i), "toWireType"),
            Ia: 8,
            readValueFromPointer: M1,
            Ja: null
        }, g3 = a( (t, i, n) => {
            switch (i) {
            case 1:
                return n ? function(s) {
                    return this.fromWireType(Z[s])
                }
                : function(s) {
                    return this.fromWireType(F[s])
                }
                ;
            case 2:
                return n ? function(s) {
                    return this.fromWireType(t1[s >> 1])
                }
                : function(s) {
                    return this.fromWireType(p1[s >> 1])
                }
                ;
            case 4:
                return n ? function(s) {
                    return this.fromWireType(K[s >> 2])
                }
                : function(s) {
                    return this.fromWireType(b[s >> 2])
                }
                ;
            default:
                throw new TypeError(`invalid integer width (${i}): ${t}`)
            }
        }
        , "M3"), z1 = a( (t, i) => {
            var n = X[t];
            if (n === void 0)
                throw t = `${i} has unknown type ${k2(t)}`,
                new M(t);
            return n
        }
        , "O1"), i2 = a(t => {
            if (t === null)
                return "null";
            var i = typeof t;
            return i === "object" || i === "array" || i === "function" ? t.toString() : "" + t
        }
        , "K1"), M3 = a( (t, i) => {
            switch (i) {
            case 4:
                return function(n) {
                    return this.fromWireType(v2[n >> 2])
                }
                ;
            case 8:
                return function(n) {
                    return this.fromWireType(p2[n >> 3])
                }
                ;
            default:
                throw new TypeError(`invalid float width (${i}): ${t}`)
            }
        }
        , "b3"), w3 = a( (t, i, n) => {
            switch (i) {
            case 1:
                return n ? s => Z[s] : s => F[s];
            case 2:
                return n ? s => t1[s >> 1] : s => p1[s >> 1];
            case 4:
                return n ? s => K[s >> 2] : s => b[s >> 2];
            default:
                throw new TypeError(`invalid integer width (${i}): ${t}`)
            }
        }
        , "y3"), L3 = Object.assign({
            optional: true
        }, T2), R2 = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, y3 = a( (t, i) => {
            for (var n = t >> 1, s = n + i / 2; !(n >= s) && p1[n]; )
                ++n;
            if (n <<= 1,
            32 < n - t && R2)
                return R2.decode(F.subarray(t, n));
            for (n = "",
            s = 0; !(s >= i / 2); ++s) {
                var h = t1[t + 2 * s >> 1];
                if (h == 0)
                    break;
                n += String.fromCharCode(h);
            }
            return n
        }
        , "L3"), C3 = a( (t, i, n) => {
            if (n ?? (n = 2147483647),
            2 > n)
                return 0;
            n -= 2;
            var s = i;
            n = n < 2 * t.length ? n / 2 : t.length;
            for (var h = 0; h < n; ++h)
                t1[i >> 1] = t.charCodeAt(h),
                i += 2;
            return t1[i >> 1] = 0,
            i - s
        }
        , "w3"), b3 = a(t => 2 * t.length, "E3"), I3 = a( (t, i) => {
            for (var n = 0, s = ""; !(n >= i / 4); ) {
                var h = K[t + 4 * n >> 2];
                if (h == 0)
                    break;
                ++n,
                65536 <= h ? (h -= 65536,
                s += String.fromCharCode(55296 | h >> 10, 56320 | h & 1023)) : s += String.fromCharCode(h);
            }
            return s
        }
        , "I3"), S3 = a( (t, i, n) => {
            if (n ?? (n = 2147483647),
            4 > n)
                return 0;
            var s = i;
            n = s + n - 4;
            for (var h = 0; h < t.length; ++h) {
                var d = t.charCodeAt(h);
                if (55296 <= d && 57343 >= d) {
                    var u = t.charCodeAt(++h);
                    d = 65536 + ((d & 1023) << 10) | u & 1023;
                }
                if (K[i >> 2] = d,
                i += 4,
                i + 4 > n)
                    break
            }
            return K[i >> 2] = 0,
            i - s
        }
        , "S3"), P3 = a(t => {
            for (var i = 0, n = 0; n < t.length; ++n) {
                var s = t.charCodeAt(n);
                55296 <= s && 57343 >= s && ++n,
                i += 4;
            }
            return i
        }
        , "P3"), a2 = 0, $2 = a( (t, i, n) => {
            var s = [];
            return t = t.toWireType(s, n),
            s.length && (b[i >> 2] = W1(s)),
            t
        }
        , "D2"), n2 = [], E3 = a(t => {
            var i = n2.length;
            return n2.push(t),
            i
        }
        , "O3"), O3 = a( (t, i) => {
            for (var n = Array(t), s = 0; s < t; ++s)
                n[s] = z1(b[i + 4 * s >> 2], "parameter " + s);
            return n
        }
        , "T3"), A3 = Reflect.construct, b1 = {}, U2 = a(t => {
            if (!(t instanceof y2 || t == "unwind"))
                throw t
        }
        , "k2"), x2 = a(t => {
            throw N1 = t,
            V1 || 0 < a2 || (r.onExit?.(t),
            A1 = true),
            new y2(t)
        }
        , "R2"), F3 = a(t => {
            if (!A1)
                try {
                    if (t(),
                    !(V1 || 0 < a2))
                        try {
                            N1 = t = N1,
                            x2(t);
                        } catch (i) {
                            U2(i);
                        }
                } catch (i) {
                    U2(i);
                }
        }
        , "F3"), s2 = {}, W2 = a( () => {
            if (!r2) {
                var t = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                    _: P1 || "./this.program"
                }, i;
                for (i in s2)
                    s2[i] === void 0 ? delete t[i] : t[i] = s2[i];
                var n = [];
                for (i in t)
                    n.push(`${i}=${t[i]}`);
                r2 = n;
            }
            return r2
        }
        , "B2"), r2, k3 = a( () => {
            if (typeof crypto == "object" && typeof crypto.getRandomValues == "function")
                return t => crypto.getRandomValues(t);
            F1("initRandomDevice");
        }
        , "x3"), z2 = a(t => (z2 = k3())(t), "U2");
        w1 = r.InternalError = class extends Error {
            constructor(t) {
                super(t),
                this.name = "InternalError";
            }
        }
        ;
        for (var B2 = Array(256), B1 = 0; 256 > B1; ++B1)
            B2[B1] = String.fromCharCode(B1);
        I2 = B2,
        M = r.BindingError = class extends Error {
            constructor(t) {
                super(t),
                this.name = "BindingError";
            }
        }
        ,
        Object.assign(U1.prototype, {
            isAliasOf: a(function(t) {
                if (!(this instanceof U1 && t instanceof U1))
                    return false;
                var i = this.Aa.Da.Ba
                  , n = this.Aa.Ca;
                t.Aa = t.Aa;
                var s = t.Aa.Da.Ba;
                for (t = t.Aa.Ca; i.Ga; )
                    n = i.Qa(n),
                    i = i.Ga;
                for (; s.Ga; )
                    t = s.Qa(t),
                    s = s.Ga;
                return i === s && n === t
            }, "isAliasOf"),
            clone: a(function() {
                if (this.Aa.Ca || J1(this),
                this.Aa.Pa)
                    return this.Aa.count.value += 1,
                    this;
                var t = L1
                  , i = Object
                  , n = i.create
                  , s = Object.getPrototypeOf(this)
                  , h = this.Aa;
                return t = t(n.call(i, s, {
                    Aa: {
                        value: {
                            count: h.count,
                            Oa: h.Oa,
                            Pa: h.Pa,
                            Ca: h.Ca,
                            Da: h.Da,
                            Fa: h.Fa,
                            Ha: h.Ha
                        }
                    }
                })),
                t.Aa.count.value += 1,
                t.Aa.Oa = false,
                t
            }, "clone"),
            delete() {
                if (this.Aa.Ca || J1(this),
                this.Aa.Oa && !this.Aa.Pa)
                    throw new M("Object already scheduled for deletion");
                S2(this);
                var t = this.Aa;
                --t.count.value,
                t.count.value === 0 && (t.Fa ? t.Ha.Ka(t.Fa) : t.Da.Ba.Ka(t.Ca)),
                this.Aa.Pa || (this.Aa.Fa = void 0,
                this.Aa.Ca = void 0);
            },
            isDeleted: a(function() {
                return !this.Aa.Ca
            }, "isDeleted"),
            deleteLater: a(function() {
                if (this.Aa.Ca || J1(this),
                this.Aa.Oa && !this.Aa.Pa)
                    throw new M("Object already scheduled for deletion");
                return this.Aa.Oa = true,
                this
            }, "deleteLater")
        }),
        Object.assign(C1.prototype, {
            cb(t) {
                return this.Ya && (t = this.Ya(t)),
                t
            },
            Wa(t) {
                this.Ka?.(t);
            },
            Ia: 8,
            readValueFromPointer: M1,
            fromWireType: a(function(t) {
                function i() {
                    return this.Sa ? $1(this.Ba.Ma, {
                        Da: this.ib,
                        Ca: n,
                        Ha: this,
                        Fa: t
                    }) : $1(this.Ba.Ma, {
                        Da: this,
                        Ca: t
                    })
                }
                a(i, "n");
                var n = this.cb(t);
                if (!n)
                    return this.Wa(t),
                    null;
                var s = d3(this.Ba, n);
                if (s !== void 0)
                    return s.Aa.count.value === 0 ? (s.Aa.Ca = n,
                    s.Aa.Fa = t,
                    s.clone()) : (s = s.clone(),
                    this.Wa(t),
                    s);
                if (s = this.Ba.bb(n),
                s = E2[s],
                !s)
                    return i.call(this);
                s = this.Ra ? s.Za : s.pointerType;
                var h = P2(n, this.Ba, s.Ba);
                return h === null ? i.call(this) : this.Sa ? $1(s.Ba.Ma, {
                    Da: s,
                    Ca: h,
                    Ha: this,
                    Fa: t
                }) : $1(s.Ba.Ma, {
                    Da: s,
                    Ca: h
                })
            }, "fromWireType")
        }),
        F2 = r.UnboundTypeError = ( (t, i) => {
            var n = y1(i, function(s) {
                this.name = i,
                this.message = s,
                s = Error(s).stack,
                s !== void 0 && (this.stack = this.toString() + `
` + s.replace(/^Error(:[^\n]*)?\n/, ""));
            });
            return n.prototype = Object.create(t.prototype),
            n.prototype.constructor = n,
            n.prototype.toString = function() {
                return this.message === void 0 ? this.name : `${this.name}: ${this.message}`
            }
            ,
            n
        }
        )(Error, "UnboundTypeError"),
        G.push(0, 1, void 0, 1, null, 1, true, 1, false, 1),
        r.count_emval_handles = () => G.length / 2 - 5 - t2.length;
        var D3 = {
            c: a( (t, i, n, s) => F1(`Assertion failed: ${t ? D1(t) : ""}, at: ` + [i ? i ? D1(i) : "" : "unknown filename", n, s ? s ? D1(s) : "" : "unknown function"]), "c"),
            j: a( (t, i, n) => {
                var s = new r3(t);
                throw b[s.Ca + 16 >> 2] = 0,
                b[s.Ca + 4 >> 2] = i,
                b[s.Ca + 8 >> 2] = n,
                b2 = t,
                b2
            }
            , "j"),
            P: a( () => {}
            , "P"),
            M: a( () => {}
            , "M"),
            N: a( () => {}
            , "N"),
            R: a(function() {}, "R"),
            O: a( () => {}
            , "O"),
            T: a( () => F1(""), "T"),
            w: a(t => {
                var i = T1[t];
                delete T1[t];
                var n = i.Ua
                  , s = i.Ka
                  , h = i.Xa
                  , d = h.map(u => u.gb).concat(h.map(u => u.mb));
                q([t], d, u => {
                    var c = {};
                    return h.forEach( (_, p) => {
                        var v = u[p]
                          , w = _.eb
                          , y = _.fb
                          , k = u[p + h.length]
                          , I = _.lb
                          , S = _.nb;
                        c[_.ab] = {
                            read: a(x => v.fromWireType(w(y, x)), "read"),
                            write: a( (x, I1) => {
                                var D = [];
                                I(S, x, k.toWireType(D, I1)),
                                q1(D);
                            }
                            , "write")
                        };
                    }
                    ),
                    [{
                        name: i.name,
                        fromWireType: a(_ => {
                            var p = {}, v;
                            for (v in c)
                                p[v] = c[v].read(_);
                            return s(_),
                            p
                        }
                        , "fromWireType"),
                        toWireType: a( (_, p) => {
                            for (var v in c)
                                if (!(v in p))
                                    throw new TypeError(`Missing field: "${v}"`);
                            var w = n();
                            for (v in c)
                                c[v].write(w, p[v]);
                            return _ !== null && _.push(s, w),
                            w
                        }
                        , "toWireType"),
                        Ia: 8,
                        readValueFromPointer: M1,
                        Ja: s
                    }]
                }
                );
            }
            , "w"),
            F: a( () => {}
            , "F"),
            _: a( (t, i, n, s) => {
                i = E(i),
                U(t, {
                    name: i,
                    fromWireType: a(function(h) {
                        return !!h
                    }, "fromWireType"),
                    toWireType: a(function(h, d) {
                        return d ? n : s
                    }, "toWireType"),
                    Ia: 8,
                    readValueFromPointer: a(function(h) {
                        return this.fromWireType(F[h])
                    }, "readValueFromPointer"),
                    Ja: null
                });
            }
            , "_"),
            m: a( (t, i, n, s, h, d, u, c, _, p, v, w, y) => {
                v = E(v),
                d = O(h, d),
                c && (c = O(u, c)),
                p && (p = O(_, p)),
                y = O(w, y);
                var k = c3(v);
                Q1(k, function() {
                    x1(`Cannot construct ${v} due to unbound types`, [s]);
                }),
                q([t, i, n], s ? [s] : [], I => {
                    if (I = I[0],
                    s)
                        var S = I.Ba
                          , x = S.Ma;
                    else
                        x = U1.prototype;
                    I = y1(v, function(...h2) {
                        if (Object.getPrototypeOf(this) !== I1)
                            throw new M("Use 'new' to construct " + v);
                        if (D.La === void 0)
                            throw new M(v + " has no accessible constructor");
                        var G2 = D.La[h2.length];
                        if (G2 === void 0)
                            throw new M(`Tried to invoke ctor of ${v} with invalid number of parameters (${h2.length}) - expected (${Object.keys(D.La).toString()}) parameters instead!`);
                        return G2.apply(this, h2)
                    });
                    var I1 = Object.create(x, {
                        constructor: {
                            value: I
                        }
                    });
                    I.prototype = I1;
                    var D = new u3(v,I,I1,y,S,d,c,p);
                    if (D.Ga) {
                        var S1;
                        (S1 = D.Ga).Va ?? (S1.Va = []),
                        D.Ga.Va.push(D);
                    }
                    return S = new C1(v,D,true,false,false),
                    S1 = new C1(v + "*",D,false,false,false),
                    x = new C1(v + " const*",D,false,true,false),
                    E2[t] = {
                        pointerType: S1,
                        Za: x
                    },
                    A2(k, I),
                    [S, S1, x]
                }
                );
            }
            , "m"),
            r: a( (t, i, n, s, h, d) => {
                var u = Y1(i, n);
                h = O(s, h),
                q([], [t], c => {
                    c = c[0];
                    var _ = `constructor ${c.name}`;
                    if (c.Ba.La === void 0 && (c.Ba.La = []),
                    c.Ba.La[i - 1] !== void 0)
                        throw new M(`Cannot register multiple constructors with identical number of parameters (${i - 1}) for class '${c.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
                    return c.Ba.La[i - 1] = () => {
                        x1(`Cannot construct ${c.name} due to unbound types`, u);
                    }
                    ,
                    q([], u, p => (p.splice(1, 0, null),
                    c.Ba.La[i - 1] = Z1(_, p, null, h, d),
                    [])),
                    []
                }
                );
            }
            , "r"),
            d: a( (t, i, n, s, h, d, u, c) => {
                var _ = Y1(n, s);
                i = E(i),
                i = D2(i),
                d = O(h, d),
                q([], [t], p => {
                    function v() {
                        x1(`Cannot call ${w} due to unbound types`, _);
                    }
                    a(v, "v"),
                    p = p[0];
                    var w = `${p.name}.${i}`;
                    i.startsWith("@@") && (i = Symbol[i.substring(2)]),
                    c && p.Ba.jb.push(i);
                    var y = p.Ba.Ma
                      , k = y[i];
                    return k === void 0 || k.Ea === void 0 && k.className !== p.name && k.Na === n - 2 ? (v.Na = n - 2,
                    v.className = p.name,
                    y[i] = v) : (O2(y, i, w),
                    y[i].Ea[n - 2] = v),
                    q([], _, I => (I = Z1(w, I, p, d, u),
                    y[i].Ea === void 0 ? (I.Na = n - 2,
                    y[i] = I) : y[i].Ea[n - 2] = I,
                    [])),
                    []
                }
                );
            }
            , "d"),
            Y: a(t => U(t, T2), "Y"),
            D: a( (t, i, n, s) => {
                function h() {}
                a(h, "o"),
                i = E(i),
                h.values = {},
                U(t, {
                    name: i,
                    constructor: h,
                    fromWireType: a(function(d) {
                        return this.constructor.values[d]
                    }, "fromWireType"),
                    toWireType: a( (d, u) => u.value, "toWireType"),
                    Ia: 8,
                    readValueFromPointer: g3(i, n, s),
                    Ja: null
                }),
                Q1(i, h);
            }
            , "D"),
            l: a( (t, i, n) => {
                var s = z1(t, "enum");
                i = E(i),
                t = s.constructor,
                s = Object.create(s.constructor.prototype, {
                    value: {
                        value: n
                    },
                    constructor: {
                        value: y1(`${s.name}_${i}`, function() {})
                    }
                }),
                t.values[n] = s,
                t[i] = s;
            }
            , "l"),
            A: a( (t, i, n) => {
                i = E(i),
                U(t, {
                    name: i,
                    fromWireType: a(s => s, "fromWireType"),
                    toWireType: a( (s, h) => h, "toWireType"),
                    Ia: 8,
                    readValueFromPointer: M3(i, n),
                    Ja: null
                });
            }
            , "A"),
            v: a( (t, i, n, s, h, d) => {
                var u = Y1(i, n);
                t = E(t),
                t = D2(t),
                h = O(s, h),
                Q1(t, function() {
                    x1(`Cannot call ${t} due to unbound types`, u);
                }, i - 1),
                q([], u, c => (A2(t, Z1(t, [c[0], null].concat(c.slice(1)), null, h, d), i - 1),
                []));
            }
            , "v"),
            n: a( (t, i, n, s, h) => {
                if (i = E(i),
                h === -1 && (h = 4294967295),
                h = a(c => c, "o"),
                s === 0) {
                    var d = 32 - 8 * n;
                    h = a(c => c << d >>> d, "o");
                }
                var u = i.includes("unsigned") ? function(c, _) {
                    return _ >>> 0
                }
                : function(c, _) {
                    return _
                }
                ;
                U(t, {
                    name: i,
                    fromWireType: h,
                    toWireType: u,
                    Ia: 8,
                    readValueFromPointer: w3(i, n, s !== 0),
                    Ja: null
                });
            }
            , "n"),
            g: a( (t, i, n) => {
                function s(d) {
                    return new h(Z.buffer,b[d + 4 >> 2],b[d >> 2])
                }
                a(s, "a");
                var h = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][i];
                n = E(n),
                U(t, {
                    name: n,
                    fromWireType: s,
                    Ia: 8,
                    readValueFromPointer: s
                }, {
                    hb: true
                });
            }
            , "g"),
            q: a(t => {
                U(t, L3);
            }
            , "q"),
            u: a( (t, i, n, s, h, d, u, c, _, p, v, w) => {
                n = E(n),
                d = O(h, d),
                c = O(u, c),
                p = O(_, p),
                w = O(v, w),
                q([t], [i], y => (y = y[0],
                [new C1(n,y.Ba,false,false,true,y,s,d,c,p,w)]));
            }
            , "u"),
            Z: a( (t, i) => {
                i = E(i),
                U(t, {
                    name: i,
                    fromWireType: a(function(n) {
                        for (var s = b[n >> 2], h = n + 4, d, u = h, c = 0; c <= s; ++c) {
                            var _ = h + c;
                            (c == s || F[_] == 0) && (u = u ? D1(u, _ - u) : "",
                            d === void 0 ? d = u : (d += "\0",
                            d += u),
                            u = _ + 1);
                        }
                        return V(n),
                        d
                    }, "fromWireType"),
                    toWireType: a(function(n, s) {
                        s instanceof ArrayBuffer && (s = new Uint8Array(s));
                        var h, d = typeof s == "string";
                        if (!(d || s instanceof Uint8Array || s instanceof Uint8ClampedArray || s instanceof Int8Array))
                            throw new M("Cannot pass non-string to std::string");
                        if (d)
                            for (var u = h = 0; u < s.length; ++u) {
                                var c = s.charCodeAt(u);
                                127 >= c ? h++ : 2047 >= c ? h += 2 : 55296 <= c && 57343 >= c ? (h += 4,
                                ++u) : h += 3;
                            }
                        else
                            h = s.length;
                        if (u = o2(4 + h + 1),
                        c = u + 4,
                        b[u >> 2] = h,
                        d)
                            g1(s, c, h + 1);
                        else if (d)
                            for (d = 0; d < h; ++d) {
                                var _ = s.charCodeAt(d);
                                if (255 < _)
                                    throw V(c),
                                    new M("String has UTF-16 code units that do not fit in 8 bits");
                                F[c + d] = _;
                            }
                        else
                            for (d = 0; d < h; ++d)
                                F[c + d] = s[d];
                        return n !== null && n.push(V, u),
                        u
                    }, "toWireType"),
                    Ia: 8,
                    readValueFromPointer: M1,
                    Ja(n) {
                        V(n);
                    }
                });
            }
            , "Z"),
            y: a( (t, i, n) => {
                if (n = E(n),
                i === 2)
                    var s = y3
                      , h = C3
                      , d = b3
                      , u = a(c => p1[c >> 1], "h");
                else
                    i === 4 && (s = I3,
                    h = S3,
                    d = P3,
                    u = a(c => b[c >> 2], "h"));
                U(t, {
                    name: n,
                    fromWireType: a(c => {
                        for (var _ = b[c >> 2], p, v = c + 4, w = 0; w <= _; ++w) {
                            var y = c + 4 + w * i;
                            (w == _ || u(y) == 0) && (v = s(v, y - v),
                            p === void 0 ? p = v : (p += "\0",
                            p += v),
                            v = y + i);
                        }
                        return V(c),
                        p
                    }
                    , "fromWireType"),
                    toWireType: a( (c, _) => {
                        if (typeof _ != "string")
                            throw new M(`Cannot pass non-string to C++ string type ${n}`);
                        var p = d(_)
                          , v = o2(4 + p + i);
                        return b[v >> 2] = p / i,
                        h(_, v + 4, p + i),
                        c !== null && c.push(V, v),
                        v
                    }
                    , "toWireType"),
                    Ia: 8,
                    readValueFromPointer: M1,
                    Ja(c) {
                        V(c);
                    }
                });
            }
            , "y"),
            x: a( (t, i, n, s, h, d) => {
                T1[t] = {
                    name: E(i),
                    Ua: O(n, s),
                    Ka: O(h, d),
                    Xa: []
                };
            }
            , "x"),
            i: a( (t, i, n, s, h, d, u, c, _, p) => {
                T1[t].Xa.push({
                    ab: E(i),
                    gb: n,
                    eb: O(s, h),
                    fb: d,
                    mb: u,
                    lb: O(c, _),
                    nb: p
                });
            }
            , "i"),
            $: a( (t, i) => {
                i = E(i),
                U(t, {
                    pb: true,
                    name: i,
                    Ia: 0,
                    fromWireType: a( () => {}
                    , "fromWireType"),
                    toWireType: a( () => {}
                    , "toWireType")
                });
            }
            , "$"),
            K: a( () => {
                V1 = false,
                a2 = 0;
            }
            , "K"),
            I: a( () => {
                throw 1 / 0
            }
            , "I"),
            C: a( (t, i, n) => (t = i1(t),
            i = z1(i, "emval::as"),
            $2(i, n, t)), "C"),
            p: a( (t, i, n, s) => (t = n2[t],
            i = i1(i),
            t(null, i, n, s)), "p"),
            W: e2,
            E: a( (t, i) => (t = i1(t),
            i = i1(i),
            t == i), "E"),
            o: a( (t, i, n) => {
                var s = O3(t, i)
                  , h = s.shift();
                t--;
                var d = Array(t);
                return i = `methodCaller<(${s.map(u => u.name).join(", ")}) => ${h.name}>`,
                E3(y1(i, (u, c, _, p) => {
                    for (var v = 0, w = 0; w < t; ++w)
                        d[w] = s[w].readValueFromPointer(p + v),
                        v += s[w].Ia;
                    return u = n === 1 ? A3(c, d) : c.apply(u, d),
                    $2(h, _, u)
                }
                ))
            }
            , "o"),
            z: a(t => {
                9 < t && (G[t + 1] += 1);
            }
            , "z"),
            ca: a(t => {
                var i = i1(t);
                q1(i),
                e2(t);
            }
            , "ca"),
            t: a( (t, i) => (t = z1(t, "_emval_take_value"),
            t = t.readValueFromPointer(i),
            W1(t)), "t"),
            G: a( (t, i) => {
                if (b1[t] && (clearTimeout(b1[t].id),
                delete b1[t]),
                !i)
                    return 0;
                var n = setTimeout( () => {
                    delete b1[t],
                    F3( () => H2(t, performance.now()));
                }
                , i);
                return b1[t] = {
                    id: n,
                    qb: i
                },
                0
            }
            , "G"),
            H: a( (t, i, n, s) => {
                var h = new Date().getFullYear()
                  , d = new Date(h,0,1).getTimezoneOffset();
                h = new Date(h,6,1).getTimezoneOffset(),
                b[t >> 2] = 60 * Math.max(d, h),
                K[i >> 2] = +(d != h),
                i = a(u => {
                    var c = Math.abs(u);
                    return `UTC${0 <= u ? "-" : "+"}${String(Math.floor(c / 60)).padStart(2, "0")}${String(c % 60).padStart(2, "0")}`
                }
                , "n"),
                t = i(d),
                i = i(h),
                h < d ? (g1(t, n, 17),
                g1(i, s, 17)) : (g1(t, s, 17),
                g1(i, n, 17));
            }
            , "H"),
            ba: a( () => performance.now(), "ba"),
            J: a(t => {
                var i = F.length;
                if (t >>>= 0,
                2147483648 < t)
                    return false;
                for (var n = 1; 4 >= n; n *= 2) {
                    var s = i * (1 + .2 / n);
                    s = Math.min(s, t + 100663296);
                    t: {
                        s = (Math.min(2147483648, 65536 * Math.ceil(Math.max(t, s) / 65536)) - O1.buffer.byteLength + 65535) / 65536 | 0;
                        try {
                            O1.grow(s),
                            m2();
                            var h = 1;
                            break t
                        } catch {}
                        h = void 0;
                    }
                    if (h)
                        return true
                }
                return false
            }
            , "J"),
            V: a( (t, i) => {
                var n = 0;
                return W2().forEach( (s, h) => {
                    var d = i + n;
                    for (h = b[t + 4 * h >> 2] = d,
                    d = 0; d < s.length; ++d)
                        Z[h++] = s.charCodeAt(d);
                    Z[h] = 0,
                    n += s.length + 1;
                }
                ),
                0
            }
            , "V"),
            X: a( (t, i) => {
                var n = W2();
                b[t >> 2] = n.length;
                var s = 0;
                return n.forEach(h => s += h.length + 1),
                b[i >> 2] = s,
                0
            }
            , "X"),
            S: a( () => 52, "S"),
            Q: a( () => 52, "Q"),
            k: T3,
            f: x3,
            e: B3,
            B: R3,
            aa: z3,
            a: $3,
            b: W3,
            h: U3,
            s: j3,
            U: x2,
            L: a( (t, i) => (z2(F.subarray(t, t + i)),
            0), "L")
        }, C;
        (async function() {
            function t(s) {
                return C = s.exports,
                O1 = C.da,
                m2(),
                T = C.ga,
                M2.unshift(C.ea),
                Q--,
                r.monitorRunDependencies?.(Q),
                Q == 0 && m1 && (s = m1,
                m1 = null,
                s()),
                C
            }
            a(t, "e"),
            Q++,
            r.monitorRunDependencies?.(Q);
            var i = {
                a: D3
            };
            if (r.instantiateWasm)
                try {
                    return r.instantiateWasm(i, t)
                } catch (s) {
                    v1(`Module.instantiateWasm callback failed with error: ${s}`),
                    L(s);
                }
            k1 ?? (k1 = L2("DotLottiePlayer.wasm") ? "DotLottiePlayer.wasm" : r.locateFile ? r.locateFile("DotLottiePlayer.wasm", A) : A + "DotLottiePlayer.wasm");
            try {
                var n = await s3(i);
                return t(n.instance),
                n
            } catch (s) {
                L(s);
            }
        }
        )();
        var o2 = a(t => (o2 = C.fa)(t), "e2")
          , V = a(t => (V = C.ha)(t), "N")
          , j2 = a(t => (j2 = C.ia)(t), "W2")
          , H2 = a( (t, i) => (H2 = C.ja)(t, i), "$2")
          , B = a( (t, i) => (B = C.ka)(t, i), "W")
          , j = a(t => (j = C.la)(t), "$")
          , H = a( () => (H = C.ma)(), "H");
        r.dynCall_jiii = (t, i, n, s) => (r.dynCall_jiii = C.na)(t, i, n, s),
        r.dynCall_jii = (t, i, n) => (r.dynCall_jii = C.oa)(t, i, n),
        r.dynCall_vjii = (t, i, n, s, h) => (r.dynCall_vjii = C.pa)(t, i, n, s, h),
        r.dynCall_vjfii = (t, i, n, s, h, d) => (r.dynCall_vjfii = C.qa)(t, i, n, s, h, d),
        r.dynCall_vjiii = (t, i, n, s, h, d) => (r.dynCall_vjiii = C.ra)(t, i, n, s, h, d),
        r.dynCall_vj = (t, i, n) => (r.dynCall_vj = C.sa)(t, i, n),
        r.dynCall_vjiiiii = (t, i, n, s, h, d, u, c) => (r.dynCall_vjiiiii = C.ta)(t, i, n, s, h, d, u, c),
        r.dynCall_vjiffii = (t, i, n, s, h, d, u, c) => (r.dynCall_vjiffii = C.ua)(t, i, n, s, h, d, u, c),
        r.dynCall_vjiiii = (t, i, n, s, h, d, u) => (r.dynCall_vjiiii = C.va)(t, i, n, s, h, d, u),
        r.dynCall_viijii = (t, i, n, s, h, d, u) => (r.dynCall_viijii = C.wa)(t, i, n, s, h, d, u),
        r.dynCall_iiiiij = (t, i, n, s, h, d, u) => (r.dynCall_iiiiij = C.xa)(t, i, n, s, h, d, u),
        r.dynCall_iiiiijj = (t, i, n, s, h, d, u, c, _) => (r.dynCall_iiiiijj = C.ya)(t, i, n, s, h, d, u, c, _),
        r.dynCall_iiiiiijj = (t, i, n, s, h, d, u, c, _, p) => (r.dynCall_iiiiiijj = C.za)(t, i, n, s, h, d, u, c, _, p);
        function T3(t, i) {
            var n = H();
            try {
                return T.get(t)(i)
            } catch (s) {
                if (j(n),
                s !== s + 0)
                    throw s;
                B(1, 0);
            }
        }
        a(T3, "k3");
        function R3(t, i, n, s, h, d) {
            var u = H();
            try {
                return T.get(t)(i, n, s, h, d)
            } catch (c) {
                if (j(u),
                c !== c + 0)
                    throw c;
                B(1, 0);
            }
        }
        a(R3, "R3");
        function $3(t, i) {
            var n = H();
            try {
                T.get(t)(i);
            } catch (s) {
                if (j(n),
                s !== s + 0)
                    throw s;
                B(1, 0);
            }
        }
        a($3, "B3");
        function U3(t, i, n, s) {
            var h = H();
            try {
                T.get(t)(i, n, s);
            } catch (d) {
                if (j(h),
                d !== d + 0)
                    throw d;
                B(1, 0);
            }
        }
        a(U3, "U3");
        function x3(t, i, n) {
            var s = H();
            try {
                return T.get(t)(i, n)
            } catch (h) {
                if (j(s),
                h !== h + 0)
                    throw h;
                B(1, 0);
            }
        }
        a(x3, "z3");
        function W3(t, i, n) {
            var s = H();
            try {
                T.get(t)(i, n);
            } catch (h) {
                if (j(s),
                h !== h + 0)
                    throw h;
                B(1, 0);
            }
        }
        a(W3, "W3");
        function z3(t) {
            var i = H();
            try {
                T.get(t)();
            } catch (n) {
                if (j(i),
                n !== n + 0)
                    throw n;
                B(1, 0);
            }
        }
        a(z3, "$3");
        function B3(t, i, n, s) {
            var h = H();
            try {
                return T.get(t)(i, n, s)
            } catch (d) {
                if (j(h),
                d !== d + 0)
                    throw d;
                B(1, 0);
            }
        }
        a(B3, "H3");
        function j3(t, i, n, s, h) {
            var d = H();
            try {
                T.get(t)(i, n, s, h);
            } catch (u) {
                if (j(d),
                u !== u + 0)
                    throw u;
                B(1, 0);
            }
        }
        a(j3, "V3");
        var j1;
        m1 = a(function t() {
            j1 || N2(),
            j1 || (m1 = t);
        }, "e");
        function N2() {
            function t() {
                if (!j1 && (j1 = true,
                r.calledRun = true,
                !A1)) {
                    if (G1(M2),
                    l(r),
                    r.onRuntimeInitialized?.(),
                    r.postRun)
                        for (typeof r.postRun == "function" && (r.postRun = [r.postRun]); r.postRun.length; ) {
                            var i = r.postRun.shift();
                            w2.unshift(i);
                        }
                    G1(w2);
                }
            }
            if (a(t, "e"),
            !(0 < Q)) {
                if (r.preRun)
                    for (typeof r.preRun == "function" && (r.preRun = [r.preRun]); r.preRun.length; )
                        i3();
                G1(g2),
                0 < Q || (r.setStatus ? (r.setStatus("Running..."),
                setTimeout( () => {
                    setTimeout( () => r.setStatus(""), 1),
                    t();
                }
                , 1)) : t());
            }
        }
        if (a(N2, "H2"),
        r.preInit)
            for (typeof r.preInit == "function" && (r.preInit = [r.preInit]); 0 < r.preInit.length; )
                r.preInit.pop()();
        return N2(),
        a$1 = N,
        a$1
    }
}
)(), Y3 = X3, d1, H1 = (d1 = class {
    constructor() {
        throw new Error("RendererLoader is a static class and cannot be instantiated.")
    }
    static async _tryLoad(e) {
        return await Y3({
            locateFile: a( () => e, "locateFile")
        })
    }
    static async _loadWithBackup() {
        return this._ModulePromise || (this._ModulePromise = this._tryLoad(this._wasmURL).catch(async e => {
            let a = `https://unpkg.com/${Y2}@${X2}/dist/dotlottie-player.wasm`;
            console.warn(`Primary WASM load failed from ${this._wasmURL}. Error: ${e.message}`),
            console.warn(`Attempting to load WASM from backup URL: ${a}`);
            try {
                return await this._tryLoad(a)
            } catch (r) {
                throw console.error(`Primary WASM URL failed: ${e.message}`),
                console.error(`Backup WASM URL failed: ${r.message}`),
                new Error("WASM loading failed from all sources.")
            }
        }
        )),
        this._ModulePromise
    }
    static async load() {
        return this._loadWithBackup()
    }
    static setWasmUrl(e) {
        e !== this._wasmURL && (this._wasmURL = e,
        this._ModulePromise = null);
    }
}
,
a(d1, "Z"),
d1);
m(H1, "_ModulePromise", null),
m(H1, "_wasmURL", `https://cdn.jsdelivr.net/npm/${Y2}@${X2}/dist/dotlottie-player.wasm`);
var c1, Z2 = (c1 = class {
    constructor() {
        m(this, "_eventListeners", new Map);
    }
    addEventListener(e, a) {
        let r = this._eventListeners.get(e);
        r || (r = new Set,
        this._eventListeners.set(e, r)),
        r.add(a);
    }
    removeEventListener(e, a) {
        let r = this._eventListeners.get(e);
        r && (a ? (r.delete(a),
        r.size === 0 && this._eventListeners.delete(e)) : this._eventListeners.delete(e));
    }
    dispatch(e) {
        this._eventListeners.get(e.type)?.forEach(a => a(e));
    }
    removeAllEventListeners() {
        this._eventListeners.clear();
    }
}
,
a(c1, "r1"),
c1), u1, W = (u1 = class {
    static _initializeObserver() {
        if (this._observer)
            return;
        let e = a(a => {
            a.forEach(r => {
                let l = this._observedCanvases.get(r.target);
                l && (r.isIntersecting ? l.unfreeze() : l.freeze());
            }
            );
        }
        , "t");
        this._observer = new IntersectionObserver(e,{
            threshold: 0
        });
    }
    static observe(e, a) {
        this._initializeObserver(),
        !this._observedCanvases.has(e) && (this._observedCanvases.set(e, a),
        this._observer?.observe(e));
    }
    static unobserve(e) {
        this._observer?.unobserve(e),
        this._observedCanvases.delete(e),
        this._observedCanvases.size === 0 && (this._observer?.disconnect(),
        this._observer = null);
    }
}
,
a(u1, "O"),
u1);
m(W, "_observer", null),
m(W, "_observedCanvases", new Map);
var l1, z = (l1 = class {
    static _initializeObserver() {
        if (this._observer)
            return;
        let e = a(a => {
            a.forEach(r => {
                let l = this._observedCanvases.get(r.target);
                if (!l)
                    return;
                let[L,N] = l;
                clearTimeout(N);
                let J = setTimeout( () => {
                    L.resize();
                }
                , 100);
                this._observedCanvases.set(r.target, [L, J]);
            }
            );
        }
        , "t");
        this._observer = new ResizeObserver(e);
    }
    static observe(e, a) {
        this._initializeObserver(),
        !this._observedCanvases.has(e) && (this._observedCanvases.set(e, [a, 0]),
        this._observer?.observe(e));
    }
    static unobserve(e) {
        let a = this._observedCanvases.get(e);
        if (a) {
            let r = a[1];
            r && clearTimeout(r);
        }
        this._observer?.unobserve(e),
        this._observedCanvases.delete(e),
        !this._observedCanvases.size && this._observer && (this._observer.disconnect(),
        this._observer = null);
    }
}
,
a(l1, "T"),
l1);
m(z, "_observer", null),
m(z, "_observedCanvases", new Map);
function Z3(f) {
    return /^#([\da-f]{6}|[\da-f]{8})$/iu.test(f)
}
a(Z3, "J3");
function t0(f) {
    if (!Z3(f))
        return 0;
    let e = f.replace("#", "");
    return e = e.length === 6 ? `${e}ff` : e,
    parseInt(e, 16)
}
a(t0, "K2");
function V2(f) {
    if (f.byteLength < 4)
        return false;
    let e = new Uint8Array(f.slice(0, d2.byteLength));
    for (let a = 0; a < d2.length; a += 1)
        if (d2[a] !== e[a])
            return false;
    return true
}
a(V2, "s2");
function q2(f) {
    return J3.every(e => Object.prototype.hasOwnProperty.call(f, e))
}
a(q2, "q2");
function J2(f) {
    if (typeof f == "string")
        try {
            return q2(JSON.parse(f))
        } catch {
            return false
        }
    else
        return q2(f)
}
a(J2, "o2");
function Y() {
    return 1 + ((P ? window.devicePixelRatio : 1) - 1) * K3
}
a(Y, "G");
function s1(f) {
    let e = f.getBoundingClientRect()
      , a = window.innerHeight || document.documentElement.clientHeight
      , r = window.innerWidth || document.documentElement.clientWidth;
    return !(e.bottom < 0 || e.top > a || e.right < 0 || e.left > r)
}
a(s1, "q");
function $(f) {
    let e = f.target;
    if (e instanceof HTMLCanvasElement) {
        let a = e.getBoundingClientRect();
        if (a.width === 0 || a.height === 0 || e.width === 0 || e.height === 0)
            return null;
        let r = e.width / a.width
          , l = e.height / a.height
          , L = (f.clientX - a.left) * r
          , N = (f.clientY - a.top) * l;
        return !Number.isFinite(L) || !Number.isFinite(N) || Number.isNaN(L) || Number.isNaN(N) ? null : {
            x: L,
            y: N
        }
    }
    return null
}
a($, "x");
function t3(f) {
    let e = f.replace("OpenUrl: ", ""), a = e.indexOf(" | Target: "), r, l;
    a === -1 ? (r = e,
    l = "_blank") : (r = e.substring(0, a),
    l = e.substring(a + 11)),
    window.open(r, l);
}
a(t3, "D1");
var c2 = a( (f, e) => f === "reverse" ? e.Mode.Reverse : f === "bounce" ? e.Mode.Bounce : f === "reverse-bounce" ? e.Mode.ReverseBounce : e.Mode.Forward, "u2"), e0 = a( (f, e) => f === "contain" ? e.Fit.Contain : f === "cover" ? e.Fit.Cover : f === "fill" ? e.Fit.Fill : f === "fit-height" ? e.Fit.FitHeight : f === "fit-width" ? e.Fit.FitWidth : e.Fit.None, "q3"), i0 = a( (f, e) => {
    let a = new e.VectorFloat;
    return a.push_back(f[0]),
    a.push_back(f[1]),
    a
}
, "K3"), u2 = a( (f, e) => {
    let a = new e.VectorFloat;
    return f.length !== 2 || (a.push_back(f[0]),
    a.push_back(f[1])),
    a
}
, "d2"), l2 = a( (f, e) => f ? {
    align: i0(f.align ?? [.5, .5], e),
    fit: e0(f.fit ?? "contain", e)
} : e.createDefaultLayout(), "h2"), g, e3 = (g = class {
    constructor(e) {
        m(this, "_canvas"),
        m(this, "_context", null),
        m(this, "_eventManager"),
        m(this, "_animationFrameId", null),
        m(this, "_frameManager"),
        m(this, "_dotLottieCore", null),
        m(this, "_stateMachineId", ""),
        m(this, "_stateMachineConfig", null),
        m(this, "_isStateMachineRunning", false),
        m(this, "_stateMachineObserverHandle", null),
        m(this, "_stateMachineInternalMessageObserver", null),
        m(this, "_dotLottieObserverHandle", null),
        m(this, "_renderConfig", {}),
        m(this, "_isFrozen", false),
        m(this, "_backgroundColor", null),
        m(this, "_boundOnClick", null),
        m(this, "_boundOnPointerUp", null),
        m(this, "_boundOnPointerDown", null),
        m(this, "_boundOnPointerMove", null),
        m(this, "_boundOnPointerEnter", null),
        m(this, "_boundOnPointerLeave", null),
        this._canvas = e.canvas,
        this._eventManager = new Z2,
        this._frameManager = new q3,
        this._renderConfig = {
            ...e.renderConfig,
            devicePixelRatio: e.renderConfig?.devicePixelRatio || Y(),
            freezeOnOffscreen: e.renderConfig?.freezeOnOffscreen ?? true
        },
        H1.load().then(a => {
            g._wasmModule = a;
            let r = new a.CallbackObserver;
            r.setOnLoad( () => {
                setTimeout( () => {
                    this._eventManager.dispatch({
                        type: "load"
                    });
                }
                , 0);
            }
            ),
            r.setOnLoadError( () => {
                setTimeout( () => {
                    this._eventManager.dispatch({
                        type: "loadError",
                        error: new Error("failed to load")
                    });
                }
                , 0);
            }
            ),
            r.setOnPlay( () => {
                setTimeout( () => {
                    this._eventManager.dispatch({
                        type: "play"
                    });
                }
                , 0);
            }
            ),
            r.setOnPause( () => {
                setTimeout( () => {
                    this._eventManager.dispatch({
                        type: "pause"
                    });
                }
                , 0);
            }
            ),
            r.setOnStop( () => {
                setTimeout( () => {
                    this._eventManager.dispatch({
                        type: "stop"
                    });
                }
                , 0);
            }
            ),
            r.setOnLoop(l => {
                setTimeout( () => {
                    this._eventManager.dispatch({
                        type: "loop",
                        loopCount: l
                    });
                }
                , 0);
            }
            ),
            r.setOnComplete( () => {
                setTimeout( () => {
                    this._eventManager.dispatch({
                        type: "complete"
                    });
                }
                , 0);
            }
            ),
            r.setOnFrame(l => {
                setTimeout( () => {
                    this._eventManager.dispatch({
                        type: "frame",
                        currentFrame: l
                    });
                }
                , 0);
            }
            ),
            r.setOnRender(l => {
                setTimeout( () => {
                    this._eventManager.dispatch({
                        type: "render",
                        currentFrame: l
                    });
                }
                , 0);
            }
            ),
            this._dotLottieCore = new a.DotLottiePlayer({
                animationId: e.animationId ?? "",
                themeId: e.themeId ?? "",
                stateMachineId: "",
                autoplay: e.autoplay ?? false,
                backgroundColor: 0,
                loopAnimation: e.loop ?? false,
                loopCount: e.loopCount ?? 0,
                mode: c2(e.mode ?? "forward", a),
                segment: u2(e.segment ?? [], a),
                speed: e.speed ?? 1,
                useFrameInterpolation: e.useFrameInterpolation ?? true,
                marker: e.marker ?? "",
                layout: l2(e.layout, a)
            }),
            this._stateMachineId = e.stateMachineId ?? "",
            this._stateMachineConfig = e.stateMachineConfig ?? null,
            this._dotLottieObserverHandle = this._dotLottieCore.subscribe(r),
            this._eventManager.dispatch({
                type: "ready"
            }),
            e.data ? this._loadFromData(e.data) : e.src && this._loadFromSrc(e.src),
            e.backgroundColor && this.setBackgroundColor(e.backgroundColor);
        }
        ).catch(a => {
            this._eventManager.dispatch({
                type: "loadError",
                error: new Error(`Failed to load wasm module: ${a}`)
            });
        }
        );
    }
    _dispatchError(e) {
        console.error(e),
        this._eventManager.dispatch({
            type: "loadError",
            error: new Error(e)
        });
    }
    async _fetchData(e) {
        let a = await fetch(e);
        if (!a.ok)
            throw new Error(`Failed to fetch animation data from URL: ${e}. ${a.status}: ${a.statusText}`);
        let r = await a.arrayBuffer();
        return V2(r) ? r : new TextDecoder().decode(r)
    }
    _loadFromData(e) {
        if (this._dotLottieCore === null)
            return;
        let a = this._canvas.width
          , r = this._canvas.height
          , l = false;
        if (typeof e == "string") {
            if (!J2(e)) {
                this._dispatchError("Invalid Lottie JSON string: The provided string does not conform to the Lottie JSON format.");
                return
            }
            l = this._dotLottieCore.loadAnimationData(e, a, r);
        } else if (e instanceof ArrayBuffer) {
            if (!V2(e)) {
                this._dispatchError("Invalid dotLottie ArrayBuffer: The provided ArrayBuffer does not conform to the dotLottie format.");
                return
            }
            l = this._dotLottieCore.loadDotLottieData(e, a, r);
        } else if (typeof e == "object") {
            if (!J2(e)) {
                this._dispatchError("Invalid Lottie JSON object: The provided object does not conform to the Lottie JSON format.");
                return
            }
            l = this._dotLottieCore.loadAnimationData(JSON.stringify(e), a, r);
        } else {
            this._dispatchError(`Unsupported data type for animation data. Expected: 
          - string (Lottie JSON),
          - ArrayBuffer (dotLottie),
          - object (Lottie JSON). 
          Received: ${typeof e}`);
            return
        }
        l && (this._renderConfig.quality !== void 0 && this._dotLottieCore.setQuality(this._renderConfig.quality),
        P && this.resize(),
        setTimeout( () => {
            this._eventManager.dispatch({
                type: "frame",
                currentFrame: this.currentFrame
            });
        }
        , 0),
        this._dotLottieCore.render(),
        this._draw(),
        this._stateMachineId ? this.stateMachineLoad(this._stateMachineId) && this.stateMachineStart() && this._startAnimationLoop() : this._dotLottieCore.isPlaying() && this._startAnimationLoop(),
        P && this._canvas instanceof HTMLCanvasElement && (this._renderConfig.freezeOnOffscreen && (W.observe(this._canvas, this),
        s1(this._canvas) || this.freeze()),
        this._renderConfig.autoResize && z.observe(this._canvas, this)));
    }
    _loadFromSrc(e) {
        this._fetchData(e).then(a => this._loadFromData(a)).catch(a => this._dispatchError(`Failed to load animation data from URL: ${e}. ${a}`));
    }
    get buffer() {
        return this._dotLottieCore ? this._dotLottieCore.buffer() : null
    }
    get activeAnimationId() {
        return this._dotLottieCore?.activeAnimationId()
    }
    get activeThemeId() {
        return this._dotLottieCore?.activeThemeId()
    }
    get layout() {
        let e = this._dotLottieCore?.config().layout;
        if (e)
            return {
                align: [e.align.get(0), e.align.get(1)],
                fit: ( () => {
                    switch (e.fit) {
                    case g._wasmModule?.Fit.Contain:
                        return "contain";
                    case g._wasmModule?.Fit.Cover:
                        return "cover";
                    case g._wasmModule?.Fit.Fill:
                        return "fill";
                    case g._wasmModule?.Fit.FitHeight:
                        return "fit-height";
                    case g._wasmModule?.Fit.FitWidth:
                        return "fit-width";
                    case g._wasmModule?.Fit.None:
                        return "none";
                    default:
                        return "contain"
                    }
                }
                )()
            }
    }
    get marker() {
        return this._dotLottieCore?.config().marker
    }
    get manifest() {
        try {
            let e = this._dotLottieCore?.manifestString();
            if (this._dotLottieCore === null || !e)
                return null;
            let a = JSON.parse(e);
            return Object.keys(a).length === 0 ? null : a
        } catch {
            return null
        }
    }
    get renderConfig() {
        return this._renderConfig
    }
    get segment() {
        let e = this._dotLottieCore?.config().segment;
        if (e && e.size() === 2)
            return [e.get(0), e.get(1)]
    }
    get loop() {
        return this._dotLottieCore?.config().loopAnimation ?? false
    }
    get mode() {
        let e = this._dotLottieCore?.config().mode;
        return e === g._wasmModule?.Mode.Reverse ? "reverse" : e === g._wasmModule?.Mode.Bounce ? "bounce" : e === g._wasmModule?.Mode.ReverseBounce ? "reverse-bounce" : "forward"
    }
    get isFrozen() {
        return this._isFrozen
    }
    get isStateMachineRunning() {
        return this._isStateMachineRunning
    }
    get backgroundColor() {
        return this._backgroundColor ?? ""
    }
    get autoplay() {
        return this._dotLottieCore?.config().autoplay ?? false
    }
    get useFrameInterpolation() {
        return this._dotLottieCore?.config().useFrameInterpolation ?? false
    }
    get speed() {
        return this._dotLottieCore?.config().speed ?? 0
    }
    get isReady() {
        return this._dotLottieCore !== null
    }
    get isLoaded() {
        return this._dotLottieCore?.isLoaded() ?? false
    }
    get isPlaying() {
        return this._dotLottieCore?.isPlaying() ?? false
    }
    get isPaused() {
        return this._dotLottieCore?.isPaused() ?? false
    }
    get isStopped() {
        return this._dotLottieCore?.isStopped() ?? false
    }
    get currentFrame() {
        return this._dotLottieCore ? Math.round(this._dotLottieCore.currentFrame() * 100) / 100 : 0
    }
    get loopCount() {
        return this._dotLottieCore?.loopCount() ?? 0
    }
    get totalFrames() {
        return this._dotLottieCore?.totalFrames() ?? 0
    }
    get duration() {
        return this._dotLottieCore?.duration() ?? 0
    }
    get segmentDuration() {
        return this._dotLottieCore?.segmentDuration() ?? 0
    }
    get canvas() {
        return this._canvas
    }
    load(e) {
        this._dotLottieCore === null || g._wasmModule === null || (this._stopAnimationLoop(),
        P && this._canvas instanceof HTMLCanvasElement && (W.unobserve(this._canvas),
        z.unobserve(this._canvas),
        this._cleanupStateMachineListeners()),
        this._isFrozen = false,
        this._dotLottieCore.setConfig({
            animationId: e.animationId ?? "",
            themeId: e.themeId ?? "",
            stateMachineId: "",
            autoplay: e.autoplay ?? false,
            backgroundColor: 0,
            loopAnimation: e.loop ?? false,
            loopCount: e.loopCount ?? 0,
            mode: c2(e.mode ?? "forward", g._wasmModule),
            segment: u2(e.segment ?? [], g._wasmModule),
            speed: e.speed ?? 1,
            useFrameInterpolation: e.useFrameInterpolation ?? true,
            marker: e.marker ?? "",
            layout: l2(e.layout, g._wasmModule)
        }),
        e.data ? this._loadFromData(e.data) : e.src && this._loadFromSrc(e.src),
        this.setBackgroundColor(e.backgroundColor ?? ""));
    }
    _draw() {
        if (this._dotLottieCore !== null && (!this._context && "getContext"in this._canvas && typeof this._canvas.getContext == "function" && (this._context = this._canvas.getContext("2d")),
        this._context)) {
            let e = this._dotLottieCore.buffer()
              , a = this._canvas.width * this._canvas.height * Q3;
            if (e.byteLength !== a) {
                console.warn(`Buffer size mismatch: got ${e.byteLength}, expected ${a}`);
                return
            }
            let r = null
              , l = new Uint8ClampedArray(e,0,e.byteLength);
            typeof ImageData > "u" ? (r = this._context.createImageData(this._canvas.width, this._canvas.height),
            r.data.set(l)) : r = new ImageData(l,this._canvas.width,this._canvas.height),
            this._context.putImageData(r, 0, 0);
        }
    }
    _stopAnimationLoop() {
        this._animationFrameId !== null && (this._frameManager.cancelAnimationFrame(this._animationFrameId),
        this._animationFrameId = null);
    }
    _startAnimationLoop() {
        this._animationFrameId === null && this._dotLottieCore && !this._isFrozen && (this._dotLottieCore.isPlaying() || this._isStateMachineRunning) && (this._animationFrameId = this._frameManager.requestAnimationFrame(this._animationLoop.bind(this)));
    }
    _animationLoop() {
        if (this._dotLottieCore === null) {
            this._stopAnimationLoop();
            return
        }
        if (!this._dotLottieCore.isPlaying() && !this._isStateMachineRunning) {
            this._stopAnimationLoop();
            return
        }
        try {
            this._dotLottieCore.tick() && this._draw(),
            this._animationFrameId = this._frameManager.requestAnimationFrame(this._animationLoop.bind(this));
        } catch (e) {
            console.error("Error in animation frame:", e),
            this._eventManager.dispatch({
                type: "renderError",
                error: e
            }),
            e instanceof WebAssembly.RuntimeError && this.destroy();
        }
    }
    play() {
        this._dotLottieCore === null || !this.isLoaded || (this._stopAnimationLoop(),
        (this._dotLottieCore.play() || this._dotLottieCore.isPlaying()) && (this._isFrozen = false,
        this._startAnimationLoop()),
        P && this._canvas instanceof HTMLCanvasElement && this._renderConfig.freezeOnOffscreen && !s1(this._canvas) && this.freeze());
    }
    pause() {
        this._dotLottieCore !== null && (this._dotLottieCore.pause(),
        this._stopAnimationLoop());
    }
    stop() {
        if (this._dotLottieCore === null)
            return;
        let e = this._dotLottieCore.stop();
        this._stopAnimationLoop(),
        e && (this._eventManager.dispatch({
            type: "frame",
            currentFrame: this.currentFrame
        }),
        this._dotLottieCore.render(),
        this._draw());
    }
    setFrame(e) {
        this._dotLottieCore !== null && this._dotLottieCore.seek(e) && this._dotLottieCore.render() && this._draw();
    }
    setSpeed(e) {
        this._dotLottieCore !== null && this._dotLottieCore.setConfig({
            ...this._dotLottieCore.config(),
            speed: e
        });
    }
    setBackgroundColor(e) {
        this._dotLottieCore !== null && (P && this._canvas instanceof HTMLCanvasElement ? this._canvas.style.backgroundColor = e : this._dotLottieCore.setConfig({
            ...this._dotLottieCore.config(),
            backgroundColor: t0(e)
        }),
        this._backgroundColor = e);
    }
    setLoop(e) {
        this._dotLottieCore !== null && this._dotLottieCore.setConfig({
            ...this._dotLottieCore.config(),
            loopAnimation: e
        });
    }
    setLoopCount(e) {
        this._dotLottieCore !== null && this._dotLottieCore.setConfig({
            ...this._dotLottieCore.config(),
            loopCount: e
        });
    }
    setUseFrameInterpolation(e) {
        this._dotLottieCore !== null && this._dotLottieCore.setConfig({
            ...this._dotLottieCore.config(),
            useFrameInterpolation: e
        });
    }
    addEventListener(e, a) {
        this._eventManager.addEventListener(e, a);
    }
    removeEventListener(e, a) {
        this._eventManager.removeEventListener(e, a);
    }
    destroy() {
        this._stopAnimationLoop(),
        this._isStateMachineRunning = false,
        P && this._canvas instanceof HTMLCanvasElement && (W.unobserve(this._canvas),
        z.unobserve(this._canvas)),
        this._stateMachineObserverHandle && (this._dotLottieCore?.stateMachineUnsubscribe(this._stateMachineObserverHandle),
        this._stateMachineObserverHandle.delete(),
        this._stateMachineObserverHandle = null),
        this._stateMachineInternalMessageObserver && (this._dotLottieCore?.stateMachineInternalUnsubscribe(this._stateMachineInternalMessageObserver),
        this._stateMachineInternalMessageObserver.delete(),
        this._stateMachineInternalMessageObserver = null),
        this._dotLottieObserverHandle && (this._dotLottieCore?.unsubscribe(this._dotLottieObserverHandle),
        this._dotLottieObserverHandle.delete(),
        this._dotLottieObserverHandle = null),
        this._dotLottieCore?.delete(),
        this._dotLottieCore = null,
        this._context = null,
        this._eventManager.dispatch({
            type: "destroy"
        }),
        this._eventManager.removeAllEventListeners(),
        this._cleanupStateMachineListeners();
    }
    freeze() {
        this._animationFrameId !== null && (this._stopAnimationLoop(),
        this._isFrozen = true,
        this._eventManager.dispatch({
            type: "freeze"
        }));
    }
    unfreeze() {
        this._animationFrameId === null && (this._isFrozen = false,
        this._eventManager.dispatch({
            type: "unfreeze"
        }),
        this._startAnimationLoop());
    }
    resize() {
        if (!(!this._dotLottieCore || !this.isLoaded)) {
            if (P && this._canvas instanceof HTMLCanvasElement) {
                let e = this._renderConfig.devicePixelRatio || window.devicePixelRatio || 1
                  , {height: a, width: r} = this._canvas.getBoundingClientRect();
                a !== 0 && r !== 0 && (this._canvas.width = r * e,
                this._canvas.height = a * e);
            }
            this._dotLottieCore.resize(this._canvas.width, this._canvas.height) && this._draw();
        }
    }
    setTransform(e) {
        if (!this._dotLottieCore || !g._wasmModule)
            return false;
        let a = new g._wasmModule.VectorFloat;
        for (let l of e)
            a.push_back(l);
        let r = this._dotLottieCore.setTransform(a);
        return r && this._dotLottieCore.render() && this._draw(),
        r
    }
    getTransform() {
        if (!this._dotLottieCore)
            return;
        let e = [0, 0, 0, 0, 0, 0, 0, 0, 0]
          , a = this._dotLottieCore.getTransform();
        for (let r = 0; r < a.size(); r += 1)
            e[r] = a.get(r);
        return e
    }
    setSegment(e, a) {
        this._dotLottieCore === null || g._wasmModule === null || this._dotLottieCore.setConfig({
            ...this._dotLottieCore.config(),
            segment: u2([e, a], g._wasmModule)
        });
    }
    setMode(e) {
        this._dotLottieCore === null || g._wasmModule === null || this._dotLottieCore.setConfig({
            ...this._dotLottieCore.config(),
            mode: c2(e, g._wasmModule)
        });
    }
    setRenderConfig(e) {
        let {devicePixelRatio: a, freezeOnOffscreen: r, quality: l, ...L} = e;
        this._renderConfig = {
            ...this._renderConfig,
            ...L,
            devicePixelRatio: a || Y(),
            freezeOnOffscreen: r ?? true,
            ...l !== void 0 && {
                quality: l
            }
        },
        l !== void 0 && this._dotLottieCore && this._dotLottieCore.setQuality(l),
        P && this._canvas instanceof HTMLCanvasElement && (this._renderConfig.autoResize ? z.observe(this._canvas, this) : z.unobserve(this._canvas),
        this._renderConfig.freezeOnOffscreen ? (W.observe(this._canvas, this),
        s1(this._canvas) || this.freeze()) : (W.unobserve(this._canvas),
        this._isFrozen && this.unfreeze()));
    }
    loadAnimation(e) {
        this._dotLottieCore === null || this._dotLottieCore.activeAnimationId() === e || this._dotLottieCore.loadAnimation(e, this._canvas.width, this._canvas.height) && (this._renderConfig.quality !== void 0 && this._dotLottieCore.setQuality(this._renderConfig.quality),
        this.resize());
    }
    setMarker(e) {
        this._dotLottieCore !== null && this._dotLottieCore.setConfig({
            ...this._dotLottieCore.config(),
            marker: e
        });
    }
    markers() {
        let e = this._dotLottieCore?.markers();
        if (e) {
            let a = [];
            for (let r = 0; r < e.size(); r += 1) {
                let l = e.get(r);
                a.push({
                    name: l.name,
                    time: l.time,
                    duration: l.duration
                });
            }
            return a
        }
        return []
    }
    setTheme(e) {
        if (this._dotLottieCore === null)
            return false;
        let a = this._dotLottieCore.setTheme(e);
        return a && (this._dotLottieCore.render(),
        this._draw()),
        a
    }
    resetTheme() {
        if (this._dotLottieCore === null)
            return false;
        let e = this._dotLottieCore.resetTheme();
        return e && (this._dotLottieCore.render(),
        this._draw()),
        e
    }
    setThemeData(e) {
        if (this._dotLottieCore === null)
            return false;
        let a = this._dotLottieCore.setThemeData(e);
        return a && (this._dotLottieCore.render(),
        this._draw()),
        a
    }
    setSlots(e) {
        this._dotLottieCore !== null && this._dotLottieCore.setSlots(e) && (this._dotLottieCore.render(),
        this._draw());
    }
    setLayout(e) {
        this._dotLottieCore === null || g._wasmModule === null || this._dotLottieCore.setConfig({
            ...this._dotLottieCore.config(),
            layout: l2(e, g._wasmModule)
        });
    }
    setViewport(e, a, r, l) {
        return this._dotLottieCore === null ? false : this._dotLottieCore.setViewport(e, a, r, l)
    }
    static setWasmUrl(e) {
        H1.setWasmUrl(e);
    }
    tween(e, a) {
        if (!g._wasmModule)
            return false;
        let r = [0, 0, 1, 1]
          , l = new g._wasmModule.VectorFloat;
        for (let L of r)
            l.push_back(L);
        return this._dotLottieCore?.tween(e, a, l) ?? false
    }
    tweenToMarker(e, a) {
        if (!g._wasmModule)
            return false;
        let r = [0, 0, 1, 1]
          , l = new g._wasmModule.VectorFloat;
        for (let L of r)
            l.push_back(L);
        return this._dotLottieCore?.tweenToMarker(e, a, l) ?? false
    }
    animationSize() {
        let e = this._dotLottieCore?.animationSize().get(0) ?? 0
          , a = this._dotLottieCore?.animationSize().get(1) ?? 0;
        return {
            width: e,
            height: a
        }
    }
    getLayerBoundingBox(e) {
        let a = this._dotLottieCore?.getLayerBounds(e);
        if (!a || a.size() !== 8)
            return;
        let r = [];
        for (let l = 0; l < 8; l += 1)
            r.push(a.get(l));
        return r
    }
    static transformThemeToLottieSlots(e, a) {
        return g._wasmModule?.transformThemeToLottieSlots(e, a) ?? ""
    }
    _setupStateMachineObservers() {
        if (!this._dotLottieCore || !g._wasmModule)
            return;
        let e = new g._wasmModule.CallbackStateMachineObserver;
        e.setOnStart( () => {
            setTimeout( () => {
                this._isStateMachineRunning = true,
                this._eventManager.dispatch({
                    type: "stateMachineStart"
                }),
                this._startAnimationLoop();
            }
            , 0);
        }
        ),
        e.setOnStop( () => {
            setTimeout( () => {
                this._isStateMachineRunning = false,
                this._eventManager.dispatch({
                    type: "stateMachineStop"
                }),
                this._dotLottieCore?.isPlaying() || this._stopAnimationLoop();
            }
            , 0);
        }
        ),
        e.setOnCustomEvent(r => {
            this._eventManager.dispatch({
                type: "stateMachineCustomEvent",
                eventName: r
            });
        }
        ),
        e.setOnBooleanInputValueChange( (r, l, L) => {
            this._eventManager.dispatch({
                type: "stateMachineBooleanInputValueChange",
                inputName: r,
                newValue: L,
                oldValue: l
            });
        }
        ),
        e.setOnNumericInputValueChange( (r, l, L) => {
            this._eventManager.dispatch({
                type: "stateMachineNumericInputValueChange",
                inputName: r,
                newValue: L,
                oldValue: l
            });
        }
        ),
        e.setOnStringInputValueChange( (r, l, L) => {
            this._eventManager.dispatch({
                type: "stateMachineStringInputValueChange",
                inputName: r,
                newValue: L,
                oldValue: l
            });
        }
        ),
        e.setOnInputFired(r => {
            this._eventManager.dispatch({
                type: "stateMachineInputFired",
                inputName: r
            });
        }
        ),
        e.setOnTransition( (r, l) => {
            this._eventManager.dispatch({
                type: "stateMachineTransition",
                fromState: r,
                toState: l
            });
        }
        ),
        e.setOnStateEntered(r => {
            this._eventManager.dispatch({
                type: "stateMachineStateEntered",
                state: r
            });
        }
        ),
        e.setOnStateExit(r => {
            this._eventManager.dispatch({
                type: "stateMachineStateExit",
                state: r
            });
        }
        ),
        e.setOnError(r => {
            this._eventManager.dispatch({
                type: "stateMachineError",
                error: r
            });
        }
        );
        let a = new g._wasmModule.CallbackStateMachineInternalObserver;
        a.setOnMessage(r => {
            P ? r.startsWith("OpenUrl: ") && t3(r) : this._eventManager.dispatch({
                type: "stateMachineInternalMessage",
                message: r
            });
        }
        ),
        this._stateMachineObserverHandle = this._dotLottieCore.stateMachineSubscribe(e),
        this._stateMachineInternalMessageObserver = this._dotLottieCore.stateMachineInternalSubscribe(a);
    }
    _cleanupStateMachineObservers() {
        this._stateMachineObserverHandle && (this._dotLottieCore?.stateMachineUnsubscribe(this._stateMachineObserverHandle),
        this._stateMachineObserverHandle.delete(),
        this._stateMachineObserverHandle = null),
        this._stateMachineInternalMessageObserver && (this._dotLottieCore?.stateMachineInternalUnsubscribe(this._stateMachineInternalMessageObserver),
        this._stateMachineInternalMessageObserver.delete(),
        this._stateMachineInternalMessageObserver = null);
    }
    stateMachineLoad(e) {
        if (!this._dotLottieCore || !g._wasmModule)
            return false;
        this._cleanupStateMachineObservers();
        let a = this._dotLottieCore.stateMachineLoad(e);
        return a && this._setupStateMachineObservers(),
        a
    }
    stateMachineLoadData(e) {
        if (!this._dotLottieCore || !g._wasmModule)
            return false;
        this._cleanupStateMachineObservers();
        let a = this._dotLottieCore.stateMachineLoadData(e);
        return a && this._setupStateMachineObservers(),
        a
    }
    stateMachineSetConfig(e) {
        this._stateMachineConfig = e;
    }
    stateMachineStart() {
        if (g._wasmModule === null || this._dotLottieCore === null)
            return false;
        let e = g._wasmModule.createDefaultOpenUrlPolicy();
        if (this._stateMachineConfig) {
            let r = this._stateMachineConfig.openUrlPolicy;
            if (r && typeof r.requireUserInteraction == "boolean" && (e.requireUserInteraction = r.requireUserInteraction),
            r?.whitelist) {
                e.whitelist = new g._wasmModule.VectorString;
                for (let l of r.whitelist)
                    e.whitelist.push_back(l);
            }
        }
        let a = this._dotLottieCore.stateMachineStart(e);
        return a && (this._isStateMachineRunning = true,
        this._setupStateMachineListeners(),
        this._startAnimationLoop()),
        a
    }
    stateMachineStop() {
        if (!this._dotLottieCore)
            return false;
        let e = this._dotLottieCore.stateMachineStop();
        return e && (this._cleanupStateMachineObservers(),
        this._isStateMachineRunning = false,
        this._cleanupStateMachineListeners(),
        this._dotLottieCore.isPlaying() || this._stopAnimationLoop()),
        e
    }
    stateMachineGetStatus() {
        return this._dotLottieCore?.stateMachineStatus() ?? ""
    }
    stateMachineGetCurrentState() {
        return this._dotLottieCore?.stateMachineCurrentState() ?? ""
    }
    stateMachineGetActiveId() {
        return this._dotLottieCore?.activeStateMachineId() ?? ""
    }
    stateMachineOverrideState(e, a=false) {
        return this._dotLottieCore?.stateMachineOverrideCurrentState(e, a) ?? false
    }
    stateMachineGet(e) {
        return this._dotLottieCore?.getStateMachine(e) ?? ""
    }
    stateMachineGetListeners() {
        if (!this._dotLottieCore)
            return [];
        let e = this._dotLottieCore.stateMachineFrameworkSetup()
          , a = [];
        for (let r = 0; r < e.size(); r += 1)
            a.push(e.get(r));
        return a
    }
    stateMachineSetBooleanInput(e, a) {
        return this._dotLottieCore?.stateMachineSetBooleanInput(e, a) ?? false
    }
    stateMachineSetNumericInput(e, a) {
        return this._dotLottieCore?.stateMachineSetNumericInput(e, a) ?? false
    }
    stateMachineSetStringInput(e, a) {
        return this._dotLottieCore?.stateMachineSetStringInput(e, a) ?? false
    }
    stateMachineGetBooleanInput(e) {
        return this._dotLottieCore?.stateMachineGetBooleanInput(e)
    }
    stateMachineGetNumericInput(e) {
        return this._dotLottieCore?.stateMachineGetNumericInput(e)
    }
    stateMachineGetStringInput(e) {
        return this._dotLottieCore?.stateMachineGetStringInput(e)
    }
    stateMachineFireEvent(e) {
        this._dotLottieCore?.stateMachineFireEvent(e);
    }
    stateMachinePostClickEvent(e, a) {
        this._dotLottieCore?.stateMachinePostClickEvent(e, a);
    }
    stateMachinePostPointerUpEvent(e, a) {
        this._dotLottieCore?.stateMachinePostPointerUpEvent(e, a);
    }
    stateMachinePostPointerDownEvent(e, a) {
        this._dotLottieCore?.stateMachinePostPointerDownEvent(e, a);
    }
    stateMachinePostPointerMoveEvent(e, a) {
        this._dotLottieCore?.stateMachinePostPointerMoveEvent(e, a);
    }
    stateMachinePostPointerEnterEvent(e, a) {
        this._dotLottieCore?.stateMachinePostPointerEnterEvent(e, a);
    }
    stateMachinePostPointerExitEvent(e, a) {
        this._dotLottieCore?.stateMachinePostPointerExitEvent(e, a);
    }
    _onClick(e) {
        let a = $(e);
        a && this.stateMachinePostClickEvent(a.x, a.y);
    }
    _onPointerUp(e) {
        let a = $(e);
        a && this.stateMachinePostPointerUpEvent(a.x, a.y);
    }
    _onPointerDown(e) {
        let a = $(e);
        a && this.stateMachinePostPointerDownEvent(a.x, a.y);
    }
    _onPointerMove(e) {
        let a = $(e);
        a && this.stateMachinePostPointerMoveEvent(a.x, a.y);
    }
    _onPointerEnter(e) {
        let a = $(e);
        a && this.stateMachinePostPointerEnterEvent(a.x, a.y);
    }
    _onPointerLeave(e) {
        let a = $(e);
        a && this.stateMachinePostPointerExitEvent(a.x, a.y);
    }
    _setupStateMachineListeners() {
        if (P && this._canvas instanceof HTMLCanvasElement && this._dotLottieCore !== null && this.isLoaded) {
            let e = this.stateMachineGetListeners();
            this._cleanupStateMachineListeners(),
            e.includes("Click") && (this._boundOnClick = this._onClick.bind(this),
            this._canvas.addEventListener("click", this._boundOnClick)),
            e.includes("PointerUp") && (this._boundOnPointerUp = this._onPointerUp.bind(this),
            this._canvas.addEventListener("pointerup", this._boundOnPointerUp)),
            e.includes("PointerDown") && (this._boundOnPointerDown = this._onPointerDown.bind(this),
            this._canvas.addEventListener("pointerdown", this._boundOnPointerDown)),
            e.includes("PointerMove") && (this._boundOnPointerMove = this._onPointerMove.bind(this),
            this._canvas.addEventListener("pointermove", this._boundOnPointerMove)),
            e.includes("PointerEnter") && (this._boundOnPointerEnter = this._onPointerEnter.bind(this),
            this._canvas.addEventListener("pointerenter", this._boundOnPointerEnter)),
            e.includes("PointerExit") && (this._boundOnPointerLeave = this._onPointerLeave.bind(this),
            this._canvas.addEventListener("pointerleave", this._boundOnPointerLeave));
        }
    }
    _cleanupStateMachineListeners() {
        P && this._canvas instanceof HTMLCanvasElement && (this._boundOnClick && (this._canvas.removeEventListener("click", this._boundOnClick),
        this._boundOnClick = null),
        this._boundOnPointerUp && (this._canvas.removeEventListener("pointerup", this._boundOnPointerUp),
        this._boundOnPointerUp = null),
        this._boundOnPointerDown && (this._canvas.removeEventListener("pointerdown", this._boundOnPointerDown),
        this._boundOnPointerDown = null),
        this._boundOnPointerMove && (this._canvas.removeEventListener("pointermove", this._boundOnPointerMove),
        this._boundOnPointerMove = null),
        this._boundOnPointerEnter && (this._canvas.removeEventListener("pointerenter", this._boundOnPointerEnter),
        this._boundOnPointerEnter = null),
        this._boundOnPointerLeave && (this._canvas.removeEventListener("pointerleave", this._boundOnPointerLeave),
        this._boundOnPointerLeave = null));
    }
}
,
a(g, "m"),
g);
m(e3, "_wasmModule", null);
var r0 = e3, _1, a0 = (_1 = class {
    constructor() {
        if (typeof Worker > "u")
            throw new Error("Worker is not supported in this environment.");
        let e = new Blob([new Uint8Array([34, 117, 115, 101, 32, 115, 116, 114, 105, 99, 116, 34, 59, 10, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 118, 97, 114, 32, 95, 95, 100, 101, 102, 80, 114, 111, 112, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 100, 101, 102, 105, 110, 101, 80, 114, 111, 112, 101, 114, 116, 121, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 100, 101, 102, 78, 111, 114, 109, 97, 108, 80, 114, 111, 112, 32, 61, 32, 40, 111, 98, 106, 44, 32, 107, 101, 121, 44, 32, 118, 97, 108, 117, 101, 41, 32, 61, 62, 32, 107, 101, 121, 32, 105, 110, 32, 111, 98, 106, 32, 63, 32, 95, 95, 100, 101, 102, 80, 114, 111, 112, 40, 111, 98, 106, 44, 32, 107, 101, 121, 44, 32, 123, 32, 101, 110, 117, 109, 101, 114, 97, 98, 108, 101, 58, 32, 116, 114, 117, 101, 44, 32, 99, 111, 110, 102, 105, 103, 117, 114, 97, 98, 108, 101, 58, 32, 116, 114, 117, 101, 44, 32, 119, 114, 105, 116, 97, 98, 108, 101, 58, 32, 116, 114, 117, 101, 44, 32, 118, 97, 108, 117, 101, 32, 125, 41, 32, 58, 32, 111, 98, 106, 91, 107, 101, 121, 93, 32, 61, 32, 118, 97, 108, 117, 101, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 32, 61, 32, 40, 111, 98, 106, 44, 32, 107, 101, 121, 44, 32, 118, 97, 108, 117, 101, 41, 32, 61, 62, 32, 95, 95, 100, 101, 102, 78, 111, 114, 109, 97, 108, 80, 114, 111, 112, 40, 111, 98, 106, 44, 32, 116, 121, 112, 101, 111, 102, 32, 107, 101, 121, 32, 33, 61, 61, 32, 34, 115, 121, 109, 98, 111, 108, 34, 32, 63, 32, 107, 101, 121, 32, 43, 32, 34, 34, 32, 58, 32, 107, 101, 121, 44, 32, 118, 97, 108, 117, 101, 41, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 97, 110, 105, 109, 97, 116, 105, 111, 110, 45, 102, 114, 97, 109, 101, 45, 109, 97, 110, 97, 103, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 87, 101, 98, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 83, 116, 114, 97, 116, 101, 103, 121, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 105, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 105, 100, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 78, 111, 100, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 83, 116, 114, 97, 116, 101, 103, 121, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 108, 97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 34, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 108, 97, 115, 116, 73, 109, 109, 101, 100, 105, 97, 116, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 32, 62, 61, 32, 78, 117, 109, 98, 101, 114, 46, 77, 65, 88, 95, 83, 65, 70, 69, 95, 73, 78, 84, 69, 71, 69, 82, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 32, 43, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 73, 109, 109, 101, 100, 105, 97, 116, 101, 32, 61, 32, 115, 101, 116, 73, 109, 109, 101, 100, 105, 97, 116, 101, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 40, 68, 97, 116, 101, 46, 110, 111, 119, 40, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 95, 105, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 73, 109, 109, 101, 100, 105, 97, 116, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 108, 101, 97, 114, 73, 109, 109, 101, 100, 105, 97, 116, 101, 40, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 73, 109, 109, 101, 100, 105, 97, 116, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 115, 116, 114, 97, 116, 101, 103, 121, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 114, 97, 116, 101, 103, 121, 32, 61, 32, 116, 121, 112, 101, 111, 102, 32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 32, 61, 61, 61, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 63, 32, 110, 101, 119, 32, 87, 101, 98, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 83, 116, 114, 97, 116, 101, 103, 121, 40, 41, 32, 58, 32, 110, 101, 119, 32, 78, 111, 100, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 83, 116, 114, 97, 116, 101, 103, 121, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 115, 116, 114, 97, 116, 101, 103, 121, 46, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 105, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 105, 100, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 99, 111, 110, 115, 116, 97, 110, 116, 115, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 61, 32, 116, 121, 112, 101, 111, 102, 32, 119, 105, 110, 100, 111, 119, 32, 33, 61, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 38, 38, 32, 116, 121, 112, 101, 111, 102, 32, 119, 105, 110, 100, 111, 119, 46, 100, 111, 99, 117, 109, 101, 110, 116, 32, 33, 61, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 59, 10, 32, 32, 118, 97, 114, 32, 90, 73, 80, 95, 83, 73, 71, 78, 65, 84, 85, 82, 69, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 91, 56, 48, 44, 32, 55, 53, 44, 32, 51, 44, 32, 52, 93, 41, 59, 10, 32, 32, 118, 97, 114, 32, 76, 79, 84, 84, 73, 69, 95, 74, 83, 79, 78, 95, 77, 65, 78, 68, 65, 84, 79, 82, 89, 95, 70, 73, 69, 76, 68, 83, 32, 61, 32, 91, 34, 118, 34, 44, 32, 34, 105, 112, 34, 44, 32, 34, 111, 112, 34, 44, 32, 34, 108, 97, 121, 101, 114, 115, 34, 44, 32, 34, 102, 114, 34, 44, 32, 34, 119, 34, 44, 32, 34, 104, 34, 93, 59, 10, 32, 32, 118, 97, 114, 32, 80, 65, 67, 75, 65, 71, 69, 95, 86, 69, 82, 83, 73, 79, 78, 32, 61, 32, 34, 48, 46, 53, 52, 46, 49, 34, 59, 10, 32, 32, 118, 97, 114, 32, 80, 65, 67, 75, 65, 71, 69, 95, 78, 65, 77, 69, 32, 61, 32, 34, 64, 108, 111, 116, 116, 105, 101, 102, 105, 108, 101, 115, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 45, 119, 101, 98, 34, 59, 10, 32, 32, 118, 97, 114, 32, 68, 69, 70, 65, 85, 76, 84, 95, 68, 80, 82, 95, 70, 65, 67, 84, 79, 82, 32, 61, 32, 48, 46, 55, 53, 59, 10, 32, 32, 118, 97, 114, 32, 66, 89, 84, 69, 83, 95, 80, 69, 82, 95, 80, 73, 88, 69, 76, 32, 61, 32, 52, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 99, 111, 114, 101, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 45, 112, 108, 97, 121, 101, 114, 46, 106, 115, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 77, 111, 100, 117, 108, 101, 32, 61, 32, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 118, 97, 114, 32, 95, 115, 99, 114, 105, 112, 116, 78, 97, 109, 101, 32, 61, 32, 116, 121, 112, 101, 111, 102, 32, 100, 111, 99, 117, 109, 101, 110, 116, 32, 33, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 63, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 99, 117, 114, 114, 101, 110, 116, 83, 99, 114, 105, 112, 116, 63, 46, 115, 114, 99, 32, 58, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 109, 111, 100, 117, 108, 101, 65, 114, 103, 32, 61, 32, 123, 125, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 109, 111, 100, 117, 108, 101, 82, 116, 110, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 109, 111, 100, 117, 108, 101, 65, 114, 103, 44, 32, 97, 97, 44, 32, 98, 97, 44, 32, 99, 97, 32, 61, 32, 110, 101, 119, 32, 80, 114, 111, 109, 105, 115, 101, 40, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 97, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 44, 32, 102, 97, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115, 105, 103, 110, 40, 123, 125, 44, 32, 104, 41, 44, 32, 104, 97, 32, 61, 32, 34, 46, 47, 116, 104, 105, 115, 46, 112, 114, 111, 103, 114, 97, 109, 34, 44, 32, 112, 32, 61, 32, 34, 34, 44, 32, 105, 97, 59, 10, 32, 32, 32, 32, 32, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 100, 111, 99, 117, 109, 101, 110, 116, 32, 38, 38, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 99, 117, 114, 114, 101, 110, 116, 83, 99, 114, 105, 112, 116, 32, 38, 38, 32, 40, 112, 32, 61, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 99, 117, 114, 114, 101, 110, 116, 83, 99, 114, 105, 112, 116, 46, 115, 114, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 115, 99, 114, 105, 112, 116, 78, 97, 109, 101, 32, 38, 38, 32, 40, 112, 32, 61, 32, 95, 115, 99, 114, 105, 112, 116, 78, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 112, 46, 115, 116, 97, 114, 116, 115, 87, 105, 116, 104, 40, 34, 98, 108, 111, 98, 58, 34, 41, 32, 63, 32, 112, 32, 61, 32, 34, 34, 32, 58, 32, 112, 32, 61, 32, 112, 46, 115, 117, 98, 115, 116, 114, 40, 48, 44, 32, 112, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 91, 63, 35, 93, 46, 42, 47, 44, 32, 34, 34, 41, 46, 108, 97, 115, 116, 73, 110, 100, 101, 120, 79, 102, 40, 34, 47, 34, 41, 32, 43, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 97, 32, 61, 32, 97, 115, 121, 110, 99, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 97, 119, 97, 105, 116, 32, 102, 101, 116, 99, 104, 40, 97, 44, 32, 123, 32, 99, 114, 101, 100, 101, 110, 116, 105, 97, 108, 115, 58, 32, 34, 115, 97, 109, 101, 45, 111, 114, 105, 103, 105, 110, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 97, 46, 111, 107, 41, 32, 114, 101, 116, 117, 114, 110, 32, 97, 46, 97, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 69, 114, 114, 111, 114, 40, 97, 46, 115, 116, 97, 116, 117, 115, 32, 43, 32, 34, 32, 58, 32, 34, 32, 43, 32, 97, 46, 117, 114, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 116, 32, 61, 32, 104, 46, 112, 114, 105, 110, 116, 69, 114, 114, 32, 124, 124, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 46, 98, 105, 110, 100, 40, 99, 111, 110, 115, 111, 108, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115, 105, 103, 110, 40, 104, 44, 32, 102, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 102, 97, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 116, 104, 105, 115, 80, 114, 111, 103, 114, 97, 109, 32, 38, 38, 32, 40, 104, 97, 32, 61, 32, 104, 46, 116, 104, 105, 115, 80, 114, 111, 103, 114, 97, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 106, 97, 32, 61, 32, 104, 46, 119, 97, 115, 109, 66, 105, 110, 97, 114, 121, 44, 32, 107, 97, 44, 32, 108, 97, 32, 61, 32, 102, 97, 108, 115, 101, 44, 32, 109, 97, 44, 32, 117, 44, 32, 120, 44, 32, 121, 44, 32, 122, 44, 32, 67, 44, 32, 68, 44, 32, 110, 97, 44, 32, 111, 97, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 112, 97, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 107, 97, 46, 98, 117, 102, 102, 101, 114, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 72, 69, 65, 80, 56, 32, 61, 32, 117, 32, 61, 32, 110, 101, 119, 32, 73, 110, 116, 56, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 72, 69, 65, 80, 49, 54, 32, 61, 32, 121, 32, 61, 32, 110, 101, 119, 32, 73, 110, 116, 49, 54, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 72, 69, 65, 80, 85, 56, 32, 61, 32, 120, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 72, 69, 65, 80, 85, 49, 54, 32, 61, 32, 122, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 49, 54, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 72, 69, 65, 80, 51, 50, 32, 61, 32, 67, 32, 61, 32, 110, 101, 119, 32, 73, 110, 116, 51, 50, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 72, 69, 65, 80, 85, 51, 50, 32, 61, 32, 68, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 51, 50, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 72, 69, 65, 80, 70, 51, 50, 32, 61, 32, 110, 97, 32, 61, 32, 110, 101, 119, 32, 70, 108, 111, 97, 116, 51, 50, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 72, 69, 65, 80, 70, 54, 52, 32, 61, 32, 111, 97, 32, 61, 32, 110, 101, 119, 32, 70, 108, 111, 97, 116, 54, 52, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 113, 97, 32, 61, 32, 91, 93, 44, 32, 114, 97, 32, 61, 32, 91, 93, 44, 32, 115, 97, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 116, 97, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 104, 46, 112, 114, 101, 82, 117, 110, 46, 115, 104, 105, 102, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 113, 97, 46, 117, 110, 115, 104, 105, 102, 116, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 70, 32, 61, 32, 48, 44, 32, 71, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 117, 97, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 111, 110, 65, 98, 111, 114, 116, 63, 46, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 34, 65, 98, 111, 114, 116, 101, 100, 40, 34, 32, 43, 32, 97, 32, 43, 32, 34, 41, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 32, 61, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 110, 101, 119, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 46, 82, 117, 110, 116, 105, 109, 101, 69, 114, 114, 111, 114, 40, 97, 32, 43, 32, 34, 46, 32, 66, 117, 105, 108, 100, 32, 119, 105, 116, 104, 32, 45, 115, 65, 83, 83, 69, 82, 84, 73, 79, 78, 83, 32, 102, 111, 114, 32, 109, 111, 114, 101, 32, 105, 110, 102, 111, 46, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 118, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 97, 46, 115, 116, 97, 114, 116, 115, 87, 105, 116, 104, 40, 34, 100, 97, 116, 97, 58, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 111, 99, 116, 101, 116, 45, 115, 116, 114, 101, 97, 109, 59, 98, 97, 115, 101, 54, 52, 44, 34, 41, 44, 32, 119, 97, 59, 10, 32, 32, 32, 32, 32, 32, 97, 115, 121, 110, 99, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 120, 97, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 106, 97, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 97, 119, 97, 105, 116, 32, 105, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 97, 32, 61, 61, 32, 119, 97, 32, 38, 38, 32, 106, 97, 41, 32, 97, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 106, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 116, 104, 114, 111, 119, 32, 34, 98, 111, 116, 104, 32, 97, 115, 121, 110, 99, 32, 97, 110, 100, 32, 115, 121, 110, 99, 32, 102, 101, 116, 99, 104, 105, 110, 103, 32, 111, 102, 32, 116, 104, 101, 32, 119, 97, 115, 109, 32, 102, 97, 105, 108, 101, 100, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 97, 115, 121, 110, 99, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 121, 97, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 97, 119, 97, 105, 116, 32, 120, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 119, 97, 105, 116, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 40, 99, 44, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 96, 102, 97, 105, 108, 101, 100, 32, 116, 111, 32, 97, 115, 121, 110, 99, 104, 114, 111, 110, 111, 117, 115, 108, 121, 32, 112, 114, 101, 112, 97, 114, 101, 32, 119, 97, 115, 109, 58, 32, 36, 123, 100, 125, 96, 41, 44, 32, 117, 97, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 97, 115, 121, 110, 99, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 122, 97, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 119, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 106, 97, 32, 38, 38, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 83, 116, 114, 101, 97, 109, 105, 110, 103, 32, 38, 38, 32, 33, 118, 97, 40, 98, 41, 32, 38, 38, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 102, 101, 116, 99, 104, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 102, 101, 116, 99, 104, 40, 98, 44, 32, 123, 32, 99, 114, 101, 100, 101, 110, 116, 105, 97, 108, 115, 58, 32, 34, 115, 97, 109, 101, 45, 111, 114, 105, 103, 105, 110, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 119, 97, 105, 116, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 83, 116, 114, 101, 97, 109, 105, 110, 103, 40, 99, 44, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 96, 119, 97, 115, 109, 32, 115, 116, 114, 101, 97, 109, 105, 110, 103, 32, 99, 111, 109, 112, 105, 108, 101, 32, 102, 97, 105, 108, 101, 100, 58, 32, 36, 123, 100, 125, 96, 41, 44, 32, 116, 40, 34, 102, 97, 108, 108, 105, 110, 103, 32, 98, 97, 99, 107, 32, 116, 111, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 32, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 105, 111, 110, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 121, 97, 40, 98, 44, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 108, 97, 115, 115, 32, 65, 97, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 110, 97, 109, 101, 34, 44, 32, 34, 69, 120, 105, 116, 83, 116, 97, 116, 117, 115, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 109, 101, 115, 115, 97, 103, 101, 32, 61, 32, 96, 80, 114, 111, 103, 114, 97, 109, 32, 116, 101, 114, 109, 105, 110, 97, 116, 101, 100, 32, 119, 105, 116, 104, 32, 101, 120, 105, 116, 40, 36, 123, 97, 125, 41, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 117, 115, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 66, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59, 32, 48, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 41, 32, 97, 46, 115, 104, 105, 102, 116, 40, 41, 40, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 67, 97, 32, 61, 32, 104, 46, 110, 111, 69, 120, 105, 116, 82, 117, 110, 116, 105, 109, 101, 32, 124, 124, 32, 116, 114, 117, 101, 44, 32, 68, 97, 32, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 32, 63, 32, 110, 101, 119, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 40, 41, 32, 58, 32, 118, 111, 105, 100, 32, 48, 44, 32, 69, 97, 32, 61, 32, 40, 97, 32, 61, 32, 48, 44, 32, 98, 32, 61, 32, 78, 97, 78, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 120, 44, 32, 100, 32, 61, 32, 97, 32, 43, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 98, 32, 61, 32, 97, 59, 32, 99, 91, 98, 93, 32, 38, 38, 32, 33, 40, 98, 32, 62, 61, 32, 100, 41, 59, 32, 41, 32, 43, 43, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 49, 54, 32, 60, 32, 98, 32, 45, 32, 97, 32, 38, 38, 32, 99, 46, 98, 117, 102, 102, 101, 114, 32, 38, 38, 32, 68, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 68, 97, 46, 100, 101, 99, 111, 100, 101, 40, 99, 46, 115, 117, 98, 97, 114, 114, 97, 121, 40, 97, 44, 32, 98, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 100, 32, 61, 32, 34, 34, 59, 32, 97, 32, 60, 32, 98, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 99, 91, 97, 43, 43, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 32, 38, 32, 49, 50, 56, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 99, 91, 97, 43, 43, 93, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 49, 57, 50, 32, 61, 61, 32, 40, 101, 32, 38, 32, 50, 50, 52, 41, 41, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 40, 101, 32, 38, 32, 51, 49, 41, 32, 60, 60, 32, 54, 32, 124, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107, 32, 61, 32, 99, 91, 97, 43, 43, 93, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 50, 50, 52, 32, 61, 61, 32, 40, 101, 32, 38, 32, 50, 52, 48, 41, 32, 63, 32, 40, 101, 32, 38, 32, 49, 53, 41, 32, 60, 60, 32, 49, 50, 32, 124, 32, 102, 32, 60, 60, 32, 54, 32, 124, 32, 107, 32, 58, 32, 40, 101, 32, 38, 32, 55, 41, 32, 60, 60, 32, 49, 56, 32, 124, 32, 102, 32, 60, 60, 32, 49, 50, 32, 124, 32, 107, 32, 60, 60, 32, 54, 32, 124, 32, 99, 91, 97, 43, 43, 93, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 53, 53, 51, 54, 32, 62, 32, 101, 32, 63, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 101, 41, 32, 58, 32, 40, 101, 32, 45, 61, 32, 54, 53, 53, 51, 54, 44, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 53, 53, 50, 57, 54, 32, 124, 32, 101, 32, 62, 62, 32, 49, 48, 44, 32, 53, 54, 51, 50, 48, 32, 124, 32, 101, 32, 38, 32, 49, 48, 50, 51, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 99, 108, 97, 115, 115, 32, 70, 97, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 67, 97, 32, 61, 32, 97, 32, 45, 32, 50, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 71, 97, 32, 61, 32, 48, 44, 32, 72, 97, 32, 61, 32, 48, 44, 32, 72, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 120, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 60, 32, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 98, 32, 43, 32, 99, 32, 45, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 101, 32, 61, 32, 48, 59, 32, 101, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 53, 53, 50, 57, 54, 32, 60, 61, 32, 102, 32, 38, 38, 32, 53, 55, 51, 52, 51, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 43, 43, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 54, 53, 53, 51, 54, 32, 43, 32, 40, 40, 102, 32, 38, 32, 49, 48, 50, 51, 41, 32, 60, 60, 32, 49, 48, 41, 32, 124, 32, 107, 32, 38, 32, 49, 48, 50, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 49, 50, 55, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 62, 61, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 48, 52, 55, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 43, 32, 49, 32, 62, 61, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 49, 57, 50, 32, 124, 32, 102, 32, 62, 62, 32, 54, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 54, 53, 53, 51, 53, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 43, 32, 50, 32, 62, 61, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 50, 50, 52, 32, 124, 32, 102, 32, 62, 62, 32, 49, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 43, 32, 51, 32, 62, 61, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 50, 52, 48, 32, 124, 32, 102, 32, 62, 62, 32, 49, 56, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 49, 50, 56, 32, 124, 32, 102, 32, 62, 62, 32, 49, 50, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 49, 50, 56, 32, 124, 32, 102, 32, 62, 62, 32, 54, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 49, 50, 56, 32, 124, 32, 102, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 73, 97, 32, 61, 32, 123, 125, 44, 32, 74, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 97, 46, 112, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 112, 111, 112, 40, 41, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 73, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 68, 91, 97, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 74, 32, 61, 32, 123, 125, 44, 32, 75, 32, 61, 32, 123, 125, 44, 32, 75, 97, 32, 61, 32, 123, 125, 44, 32, 76, 44, 32, 78, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 100, 40, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61, 32, 99, 40, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 103, 46, 108, 101, 110, 103, 116, 104, 32, 33, 61, 61, 32, 97, 46, 108, 101, 110, 103, 116, 104, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 76, 40, 34, 77, 105, 115, 109, 97, 116, 99, 104, 101, 100, 32, 116, 121, 112, 101, 32, 99, 111, 110, 118, 101, 114, 116, 101, 114, 32, 99, 111, 117, 110, 116, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 108, 32, 61, 32, 48, 59, 32, 108, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 108, 41, 32, 77, 40, 97, 91, 108, 93, 44, 32, 103, 91, 108, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 103, 41, 32, 61, 62, 32, 75, 97, 91, 103, 93, 32, 61, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 65, 114, 114, 97, 121, 40, 98, 46, 108, 101, 110, 103, 116, 104, 41, 44, 32, 102, 32, 61, 32, 91, 93, 44, 32, 107, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 103, 44, 32, 108, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 75, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 103, 41, 32, 63, 32, 101, 91, 108, 93, 32, 61, 32, 75, 91, 103, 93, 32, 58, 32, 40, 102, 46, 112, 117, 115, 104, 40, 103, 41, 44, 32, 74, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 103, 41, 32, 124, 124, 32, 40, 74, 91, 103, 93, 32, 61, 32, 91, 93, 41, 44, 32, 74, 91, 103, 93, 46, 112, 117, 115, 104, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 91, 108, 93, 32, 61, 32, 75, 91, 103, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 43, 43, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 107, 32, 61, 61, 61, 32, 102, 46, 108, 101, 110, 103, 116, 104, 32, 38, 38, 32, 100, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 61, 61, 61, 32, 102, 46, 108, 101, 110, 103, 116, 104, 32, 38, 38, 32, 100, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 76, 97, 44, 32, 79, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 98, 32, 61, 32, 34, 34, 59, 32, 120, 91, 97, 93, 59, 32, 41, 32, 98, 32, 43, 61, 32, 76, 97, 91, 120, 91, 97, 43, 43, 93, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 80, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 77, 97, 40, 97, 44, 32, 98, 44, 32, 99, 32, 61, 32, 123, 125, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 46, 110, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 116, 121, 112, 101, 32, 34, 36, 123, 100, 125, 34, 32, 109, 117, 115, 116, 32, 104, 97, 118, 101, 32, 97, 32, 112, 111, 115, 105, 116, 105, 118, 101, 32, 105, 110, 116, 101, 103, 101, 114, 32, 116, 121, 112, 101, 105, 100, 32, 112, 111, 105, 110, 116, 101, 114, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 75, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 46, 104, 98, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 114, 101, 103, 105, 115, 116, 101, 114, 32, 116, 121, 112, 101, 32, 39, 36, 123, 100, 125, 39, 32, 116, 119, 105, 99, 101, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 75, 91, 97, 93, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 108, 101, 116, 101, 32, 75, 97, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 74, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 97, 41, 32, 38, 38, 32, 40, 98, 32, 61, 32, 74, 91, 97, 93, 44, 32, 100, 101, 108, 101, 116, 101, 32, 74, 91, 97, 93, 44, 32, 98, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 101, 41, 32, 61, 62, 32, 101, 40, 41, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 77, 40, 97, 44, 32, 98, 44, 32, 99, 32, 61, 32, 123, 125, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 77, 97, 40, 97, 44, 32, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 79, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 97, 46, 65, 97, 46, 68, 97, 46, 66, 97, 46, 110, 97, 109, 101, 32, 43, 32, 34, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 97, 108, 114, 101, 97, 100, 121, 32, 100, 101, 108, 101, 116, 101, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 80, 97, 32, 61, 32, 102, 97, 108, 115, 101, 44, 32, 81, 97, 32, 61, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 82, 97, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 61, 61, 61, 32, 99, 41, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 99, 46, 71, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 82, 97, 40, 97, 44, 32, 98, 44, 32, 99, 46, 71, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 32, 61, 61, 61, 32, 97, 32, 63, 32, 110, 117, 108, 108, 32, 58, 32, 99, 46, 36, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 83, 97, 32, 61, 32, 123, 125, 44, 32, 84, 97, 32, 61, 32, 123, 125, 44, 32, 85, 97, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 98, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 112, 116, 114, 32, 115, 104, 111, 117, 108, 100, 32, 110, 111, 116, 32, 98, 101, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59, 32, 97, 46, 71, 97, 59, 32, 41, 32, 98, 32, 61, 32, 97, 46, 81, 97, 40, 98, 41, 44, 32, 97, 32, 61, 32, 97, 46, 71, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 84, 97, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 86, 97, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 68, 97, 32, 124, 124, 32, 33, 98, 46, 67, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 76, 40, 34, 109, 97, 107, 101, 67, 108, 97, 115, 115, 72, 97, 110, 100, 108, 101, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 112, 116, 114, 32, 97, 110, 100, 32, 112, 116, 114, 84, 121, 112, 101, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 33, 98, 46, 72, 97, 32, 33, 61, 61, 32, 33, 33, 98, 46, 70, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 76, 40, 34, 66, 111, 116, 104, 32, 115, 109, 97, 114, 116, 80, 116, 114, 84, 121, 112, 101, 32, 97, 110, 100, 32, 115, 109, 97, 114, 116, 80, 116, 114, 32, 109, 117, 115, 116, 32, 98, 101, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 46, 99, 111, 117, 110, 116, 32, 61, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 49, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 81, 40, 79, 98, 106, 101, 99, 116, 46, 99, 114, 101, 97, 116, 101, 40, 97, 44, 32, 123, 32, 65, 97, 58, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 98, 44, 32, 119, 114, 105, 116, 97, 98, 108, 101, 58, 32, 116, 114, 117, 101, 32, 125, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 81, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 61, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 70, 105, 110, 97, 108, 105, 122, 97, 116, 105, 111, 110, 82, 101, 103, 105, 115, 116, 114, 121, 41, 32, 114, 101, 116, 117, 114, 110, 32, 81, 32, 61, 32, 40, 98, 41, 32, 61, 62, 32, 98, 44, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 80, 97, 32, 61, 32, 110, 101, 119, 32, 70, 105, 110, 97, 108, 105, 122, 97, 116, 105, 111, 110, 82, 101, 103, 105, 115, 116, 114, 121, 40, 40, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 98, 46, 65, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 45, 98, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 61, 61, 61, 32, 98, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 32, 38, 38, 32, 40, 98, 46, 70, 97, 32, 63, 32, 98, 46, 72, 97, 46, 75, 97, 40, 98, 46, 70, 97, 41, 32, 58, 32, 98, 46, 68, 97, 46, 66, 97, 46, 75, 97, 40, 98, 46, 67, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 81, 32, 61, 32, 40, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 98, 46, 65, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 70, 97, 32, 38, 38, 32, 80, 97, 46, 114, 101, 103, 105, 115, 116, 101, 114, 40, 98, 44, 32, 123, 32, 65, 97, 58, 32, 99, 32, 125, 44, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 81, 97, 32, 61, 32, 40, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 97, 46, 117, 110, 114, 101, 103, 105, 115, 116, 101, 114, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 81, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 87, 97, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 88, 97, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 89, 97, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 79, 98, 106, 101, 99, 116, 46, 100, 101, 102, 105, 110, 101, 80, 114, 111, 112, 101, 114, 116, 121, 40, 98, 44, 32, 34, 110, 97, 109, 101, 34, 44, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 97, 32, 125, 41, 44, 32, 90, 97, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 97, 91, 98, 93, 46, 69, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 97, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 91, 98, 93, 32, 61, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 46, 46, 46, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 97, 91, 98, 93, 46, 69, 97, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 101, 46, 108, 101, 110, 103, 116, 104, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 70, 117, 110, 99, 116, 105, 111, 110, 32, 39, 36, 123, 99, 125, 39, 32, 99, 97, 108, 108, 101, 100, 32, 119, 105, 116, 104, 32, 97, 110, 32, 105, 110, 118, 97, 108, 105, 100, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 40, 36, 123, 101, 46, 108, 101, 110, 103, 116, 104, 125, 41, 32, 45, 32, 101, 120, 112, 101, 99, 116, 115, 32, 111, 110, 101, 32, 111, 102, 32, 40, 36, 123, 97, 91, 98, 93, 46, 69, 97, 125, 41, 33, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 91, 98, 93, 46, 69, 97, 91, 101, 46, 108, 101, 110, 103, 116, 104, 93, 46, 97, 112, 112, 108, 121, 40, 116, 104, 105, 115, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 91, 98, 93, 46, 69, 97, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 91, 98, 93, 46, 69, 97, 91, 100, 46, 78, 97, 93, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 36, 97, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 104, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 99, 32, 124, 124, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 104, 91, 97, 93, 46, 69, 97, 32, 38, 38, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 104, 91, 97, 93, 46, 69, 97, 91, 99, 93, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 114, 101, 103, 105, 115, 116, 101, 114, 32, 112, 117, 98, 108, 105, 99, 32, 110, 97, 109, 101, 32, 39, 36, 123, 97, 125, 39, 32, 116, 119, 105, 99, 101, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 90, 97, 40, 104, 44, 32, 97, 44, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 104, 91, 97, 93, 46, 69, 97, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 99, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 114, 101, 103, 105, 115, 116, 101, 114, 32, 109, 117, 108, 116, 105, 112, 108, 101, 32, 111, 118, 101, 114, 108, 111, 97, 100, 115, 32, 111, 102, 32, 97, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 119, 105, 116, 104, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 40, 36, 123, 99, 125, 41, 33, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 91, 97, 93, 46, 69, 97, 91, 99, 93, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 104, 91, 97, 93, 32, 61, 32, 98, 44, 32, 104, 91, 97, 93, 46, 78, 97, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 97, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 97, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 91, 94, 97, 45, 122, 65, 45, 90, 48, 45, 57, 95, 93, 47, 103, 44, 32, 34, 36, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 52, 56, 32, 60, 61, 32, 98, 32, 38, 38, 32, 53, 55, 32, 62, 61, 32, 98, 32, 63, 32, 96, 95, 36, 123, 97, 125, 96, 32, 58, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 98, 98, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 77, 97, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 75, 97, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 71, 97, 32, 61, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 98, 98, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 81, 97, 32, 61, 32, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 36, 97, 32, 61, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 106, 98, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59, 32, 98, 32, 33, 61, 61, 32, 99, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 81, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 69, 120, 112, 101, 99, 116, 101, 100, 32, 110, 117, 108, 108, 32, 111, 114, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 111, 102, 32, 36, 123, 99, 46, 110, 97, 109, 101, 125, 44, 32, 103, 111, 116, 32, 97, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 111, 102, 32, 36, 123, 98, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 98, 46, 81, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 98, 46, 71, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 100, 98, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 110, 117, 108, 108, 32, 61, 61, 61, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 84, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 110, 117, 108, 108, 32, 105, 115, 32, 110, 111, 116, 32, 97, 32, 118, 97, 108, 105, 100, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 65, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 34, 36, 123, 101, 98, 40, 98, 41, 125, 34, 32, 97, 115, 32, 97, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 65, 97, 46, 67, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 100, 101, 108, 101, 116, 101, 100, 32, 111, 98, 106, 101, 99, 116, 32, 97, 115, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 98, 40, 98, 46, 65, 97, 46, 67, 97, 44, 32, 98, 46, 65, 97, 46, 68, 97, 46, 66, 97, 44, 32, 116, 104, 105, 115, 46, 66, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 102, 98, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 110, 117, 108, 108, 32, 61, 61, 61, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 84, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 110, 117, 108, 108, 32, 105, 115, 32, 110, 111, 116, 32, 97, 32, 118, 97, 108, 105, 100, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 83, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 116, 104, 105, 115, 46, 85, 97, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 97, 32, 38, 38, 32, 97, 46, 112, 117, 115, 104, 40, 116, 104, 105, 115, 46, 75, 97, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 32, 124, 124, 32, 33, 98, 46, 65, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 34, 36, 123, 101, 98, 40, 98, 41, 125, 34, 32, 97, 115, 32, 97, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 65, 97, 46, 67, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 100, 101, 108, 101, 116, 101, 100, 32, 111, 98, 106, 101, 99, 116, 32, 97, 115, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 82, 97, 32, 38, 38, 32, 98, 46, 65, 97, 46, 68, 97, 46, 82, 97, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 67, 97, 110, 110, 111, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 98, 46, 65, 97, 46, 72, 97, 32, 63, 32, 98, 46, 65, 97, 46, 72, 97, 46, 110, 97, 109, 101, 32, 58, 32, 98, 46, 65, 97, 46, 68, 97, 46, 110, 97, 109, 101, 125, 32, 116, 111, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 99, 98, 40, 98, 46, 65, 97, 46, 67, 97, 44, 32, 98, 46, 65, 97, 46, 68, 97, 46, 66, 97, 44, 32, 116, 104, 105, 115, 46, 66, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 83, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 98, 46, 65, 97, 46, 70, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 80, 97, 115, 115, 105, 110, 103, 32, 114, 97, 119, 32, 112, 111, 105, 110, 116, 101, 114, 32, 116, 111, 32, 115, 109, 97, 114, 116, 32, 112, 111, 105, 110, 116, 101, 114, 32, 105, 115, 32, 105, 108, 108, 101, 103, 97, 108, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 116, 104, 105, 115, 46, 111, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 48, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 46, 65, 97, 46, 72, 97, 32, 61, 61, 61, 32, 116, 104, 105, 115, 41, 32, 99, 32, 61, 32, 98, 46, 65, 97, 46, 70, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 67, 97, 110, 110, 111, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 98, 46, 65, 97, 46, 72, 97, 32, 63, 32, 98, 46, 65, 97, 46, 72, 97, 46, 110, 97, 109, 101, 32, 58, 32, 98, 46, 65, 97, 46, 68, 97, 46, 110, 97, 109, 101, 125, 32, 116, 111, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 49, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 98, 46, 65, 97, 46, 70, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 50, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 46, 65, 97, 46, 72, 97, 32, 61, 61, 61, 32, 116, 104, 105, 115, 41, 32, 99, 32, 61, 32, 98, 46, 65, 97, 46, 70, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 46, 99, 108, 111, 110, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 116, 104, 105, 115, 46, 107, 98, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 98, 40, 40, 41, 32, 61, 62, 32, 100, 91, 34, 100, 101, 108, 101, 116, 101, 34, 93, 40, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 97, 32, 38, 38, 32, 97, 46, 112, 117, 115, 104, 40, 116, 104, 105, 115, 46, 75, 97, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 85, 110, 115, 117, 112, 112, 111, 114, 116, 105, 110, 103, 32, 115, 104, 97, 114, 105, 110, 103, 32, 112, 111, 108, 105, 99, 121, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 104, 98, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 110, 117, 108, 108, 32, 61, 61, 61, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 84, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 110, 117, 108, 108, 32, 105, 115, 32, 110, 111, 116, 32, 97, 32, 118, 97, 108, 105, 100, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 65, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 34, 36, 123, 101, 98, 40, 98, 41, 125, 34, 32, 97, 115, 32, 97, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 65, 97, 46, 67, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 100, 101, 108, 101, 116, 101, 100, 32, 111, 98, 106, 101, 99, 116, 32, 97, 115, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 46, 65, 97, 46, 68, 97, 46, 82, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 98, 46, 65, 97, 46, 68, 97, 46, 110, 97, 109, 101, 125, 32, 116, 111, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 98, 40, 98, 46, 65, 97, 46, 67, 97, 44, 32, 98, 46, 65, 97, 46, 68, 97, 46, 66, 97, 44, 32, 116, 104, 105, 115, 46, 66, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 98, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 44, 32, 108, 44, 32, 110, 44, 32, 109, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 66, 97, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 84, 97, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 82, 97, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 83, 97, 32, 61, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 105, 98, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 111, 98, 32, 61, 32, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 89, 97, 32, 61, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 85, 97, 32, 61, 32, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 107, 98, 32, 61, 32, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 75, 97, 32, 61, 32, 109, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 124, 124, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 98, 46, 71, 97, 32, 63, 32, 116, 104, 105, 115, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 32, 61, 32, 102, 98, 32, 58, 32, 40, 116, 104, 105, 115, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 32, 61, 32, 100, 32, 63, 32, 100, 98, 32, 58, 32, 104, 98, 44, 32, 116, 104, 105, 115, 46, 74, 97, 32, 61, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 106, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 104, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 97, 41, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 76, 40, 34, 82, 101, 112, 108, 97, 99, 105, 110, 103, 32, 110, 111, 110, 101, 120, 105, 115, 116, 101, 110, 116, 32, 112, 117, 98, 108, 105, 99, 32, 115, 121, 109, 98, 111, 108, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 104, 91, 97, 93, 46, 69, 97, 32, 38, 38, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 99, 32, 63, 32, 104, 91, 97, 93, 46, 69, 97, 91, 99, 93, 32, 61, 32, 98, 32, 58, 32, 40, 104, 91, 97, 93, 32, 61, 32, 98, 44, 32, 104, 91, 97, 93, 46, 78, 97, 32, 61, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 82, 44, 32, 107, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 32, 61, 32, 91, 93, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 106, 34, 41, 32, 63, 32, 40, 97, 32, 61, 32, 97, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 112, 47, 103, 44, 32, 34, 105, 34, 41, 44, 32, 98, 32, 61, 32, 40, 48, 44, 32, 104, 91, 34, 100, 121, 110, 67, 97, 108, 108, 95, 34, 32, 43, 32, 97, 93, 41, 40, 98, 44, 32, 46, 46, 46, 99, 41, 41, 32, 58, 32, 98, 32, 61, 32, 82, 46, 103, 101, 116, 40, 98, 41, 40, 46, 46, 46, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 108, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 40, 46, 46, 46, 99, 41, 32, 61, 62, 32, 107, 98, 40, 97, 44, 32, 98, 44, 32, 99, 41, 44, 32, 83, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 79, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 97, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 106, 34, 41, 32, 63, 32, 108, 98, 40, 97, 44, 32, 98, 41, 32, 58, 32, 82, 46, 103, 101, 116, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 99, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 117, 110, 107, 110, 111, 119, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 112, 111, 105, 110, 116, 101, 114, 32, 119, 105, 116, 104, 32, 115, 105, 103, 110, 97, 116, 117, 114, 101, 32, 36, 123, 97, 125, 58, 32, 36, 123, 98, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 109, 98, 44, 32, 111, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 110, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 79, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 84, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 112, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 99, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 91, 102, 93, 32, 124, 124, 32, 75, 91, 102, 93, 32, 124, 124, 32, 40, 75, 97, 91, 102, 93, 32, 63, 32, 75, 97, 91, 102, 93, 46, 102, 111, 114, 69, 97, 99, 104, 40, 99, 41, 32, 58, 32, 40, 100, 46, 112, 117, 115, 104, 40, 102, 41, 44, 32, 101, 91, 102, 93, 32, 61, 32, 116, 114, 117, 101, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 91, 93, 44, 32, 101, 32, 61, 32, 123, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 46, 102, 111, 114, 69, 97, 99, 104, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 109, 98, 40, 96, 36, 123, 97, 125, 58, 32, 96, 32, 43, 32, 100, 46, 109, 97, 112, 40, 111, 98, 41, 46, 106, 111, 105, 110, 40, 91, 34, 44, 32, 34, 93, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 113, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 99, 32, 61, 32, 91, 93, 44, 32, 100, 32, 61, 32, 48, 59, 32, 100, 32, 60, 32, 97, 59, 32, 100, 43, 43, 41, 32, 99, 46, 112, 117, 115, 104, 40, 68, 91, 98, 32, 43, 32, 52, 32, 42, 32, 100, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 114, 98, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 98, 32, 61, 32, 49, 59, 32, 98, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 98, 41, 32, 105, 102, 32, 40, 110, 117, 108, 108, 32, 33, 61, 61, 32, 97, 91, 98, 93, 32, 38, 38, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 97, 91, 98, 93, 46, 74, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 115, 98, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 98, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 32, 62, 32, 102, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 97, 114, 103, 84, 121, 112, 101, 115, 32, 97, 114, 114, 97, 121, 32, 115, 105, 122, 101, 32, 109, 105, 115, 109, 97, 116, 99, 104, 33, 32, 77, 117, 115, 116, 32, 97, 116, 32, 108, 101, 97, 115, 116, 32, 103, 101, 116, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 97, 110, 100, 32, 39, 116, 104, 105, 115, 39, 32, 116, 121, 112, 101, 115, 33, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107, 32, 61, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 98, 91, 49, 93, 32, 38, 38, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 99, 44, 32, 103, 32, 61, 32, 114, 98, 40, 98, 41, 44, 32, 108, 32, 61, 32, 34, 118, 111, 105, 100, 34, 32, 33, 61, 61, 32, 98, 91, 48, 93, 46, 110, 97, 109, 101, 44, 32, 110, 32, 61, 32, 102, 32, 45, 32, 50, 44, 32, 109, 32, 61, 32, 65, 114, 114, 97, 121, 40, 110, 41, 44, 32, 113, 32, 61, 32, 91, 93, 44, 32, 114, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 89, 97, 40, 97, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 46, 46, 46, 65, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 46, 108, 101, 110, 103, 116, 104, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 113, 46, 108, 101, 110, 103, 116, 104, 32, 61, 32, 107, 32, 63, 32, 50, 32, 58, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 113, 91, 48, 93, 32, 61, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 118, 32, 61, 32, 98, 91, 49, 93, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 40, 114, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 113, 91, 49, 93, 32, 61, 32, 118, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 119, 32, 61, 32, 48, 59, 32, 119, 32, 60, 32, 110, 59, 32, 43, 43, 119, 41, 32, 109, 91, 119, 93, 32, 61, 32, 98, 91, 119, 32, 43, 32, 50, 93, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 40, 114, 44, 32, 65, 91, 119, 93, 41, 44, 32, 113, 46, 112, 117, 115, 104, 40, 109, 91, 119, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 65, 32, 61, 32, 100, 40, 46, 46, 46, 113, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 103, 41, 32, 74, 97, 40, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 119, 32, 61, 32, 107, 32, 63, 32, 49, 32, 58, 32, 50, 59, 32, 119, 32, 60, 32, 98, 46, 108, 101, 110, 103, 116, 104, 59, 32, 119, 43, 43, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 69, 32, 61, 32, 49, 32, 61, 61, 61, 32, 119, 32, 63, 32, 118, 32, 58, 32, 109, 91, 119, 32, 45, 32, 50, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 98, 91, 119, 93, 46, 74, 97, 32, 38, 38, 32, 98, 91, 119, 93, 46, 74, 97, 40, 69, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 32, 61, 32, 108, 32, 63, 32, 98, 91, 48, 93, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 65, 41, 32, 58, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 118, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 116, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 97, 46, 116, 114, 105, 109, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 32, 61, 32, 97, 46, 105, 110, 100, 101, 120, 79, 102, 40, 34, 40, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 45, 49, 32, 33, 61, 61, 32, 98, 32, 63, 32, 97, 46, 115, 117, 98, 115, 116, 114, 40, 48, 44, 32, 98, 41, 32, 58, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 118, 98, 32, 61, 32, 91, 93, 44, 32, 85, 32, 61, 32, 91, 93, 44, 32, 119, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 57, 32, 60, 32, 97, 32, 38, 38, 32, 48, 32, 61, 61, 61, 32, 45, 45, 85, 91, 97, 32, 43, 32, 49, 93, 32, 38, 38, 32, 40, 85, 91, 97, 93, 32, 61, 32, 118, 111, 105, 100, 32, 48, 44, 32, 118, 98, 46, 112, 117, 115, 104, 40, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 86, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 67, 97, 110, 110, 111, 116, 32, 117, 115, 101, 32, 100, 101, 108, 101, 116, 101, 100, 32, 118, 97, 108, 46, 32, 104, 97, 110, 100, 108, 101, 32, 61, 32, 34, 32, 43, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 85, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 103, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 118, 111, 105, 100, 32, 48, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 110, 117, 108, 108, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 116, 114, 117, 101, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 54, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 102, 97, 108, 115, 101, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 56, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 32, 61, 32, 118, 98, 46, 112, 111, 112, 40, 41, 32, 124, 124, 32, 85, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 91, 98, 93, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 91, 98, 32, 43, 32, 49, 93, 32, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 120, 98, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 34, 101, 109, 115, 99, 114, 105, 112, 116, 101, 110, 58, 58, 118, 97, 108, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 86, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 119, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 103, 98, 40, 98, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 73, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 73, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 74, 97, 58, 32, 110, 117, 108, 108, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 121, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 49, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 117, 91, 100, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 120, 91, 100, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 50, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 121, 91, 100, 32, 62, 62, 32, 49, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 122, 91, 100, 32, 62, 62, 32, 49, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 52, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 67, 91, 100, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 68, 91, 100, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 84, 121, 112, 101, 69, 114, 114, 111, 114, 40, 96, 105, 110, 118, 97, 108, 105, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 119, 105, 100, 116, 104, 32, 40, 36, 123, 98, 125, 41, 58, 32, 36, 123, 97, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 122, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 75, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 99, 41, 32, 116, 104, 114, 111, 119, 32, 97, 32, 61, 32, 96, 36, 123, 98, 125, 32, 104, 97, 115, 32, 117, 110, 107, 110, 111, 119, 110, 32, 116, 121, 112, 101, 32, 36, 123, 111, 98, 40, 97, 41, 125, 96, 44, 32, 110, 101, 119, 32, 80, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 101, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 110, 117, 108, 108, 32, 61, 61, 61, 32, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 34, 110, 117, 108, 108, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 116, 121, 112, 101, 111, 102, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 111, 98, 106, 101, 99, 116, 34, 32, 61, 61, 61, 32, 98, 32, 124, 124, 32, 34, 97, 114, 114, 97, 121, 34, 32, 61, 61, 61, 32, 98, 32, 124, 124, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 61, 32, 98, 32, 63, 32, 97, 46, 116, 111, 83, 116, 114, 105, 110, 103, 40, 41, 32, 58, 32, 34, 34, 32, 43, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 65, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 52, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 110, 97, 91, 99, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 56, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 111, 97, 91, 99, 32, 62, 62, 32, 51, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 84, 121, 112, 101, 69, 114, 114, 111, 114, 40, 96, 105, 110, 118, 97, 108, 105, 100, 32, 102, 108, 111, 97, 116, 32, 119, 105, 100, 116, 104, 32, 40, 36, 123, 98, 125, 41, 58, 32, 36, 123, 97, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 66, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 49, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 40, 100, 41, 32, 61, 62, 32, 117, 91, 100, 93, 32, 58, 32, 40, 100, 41, 32, 61, 62, 32, 120, 91, 100, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 50, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 40, 100, 41, 32, 61, 62, 32, 121, 91, 100, 32, 62, 62, 32, 49, 93, 32, 58, 32, 40, 100, 41, 32, 61, 62, 32, 122, 91, 100, 32, 62, 62, 32, 49, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 52, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 40, 100, 41, 32, 61, 62, 32, 67, 91, 100, 32, 62, 62, 32, 50, 93, 32, 58, 32, 40, 100, 41, 32, 61, 62, 32, 68, 91, 100, 32, 62, 62, 32, 50, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 84, 121, 112, 101, 69, 114, 114, 111, 114, 40, 96, 105, 110, 118, 97, 108, 105, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 119, 105, 100, 116, 104, 32, 40, 36, 123, 98, 125, 41, 58, 32, 36, 123, 97, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 67, 98, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115, 105, 103, 110, 40, 123, 32, 111, 112, 116, 105, 111, 110, 97, 108, 58, 32, 116, 114, 117, 101, 32, 125, 44, 32, 120, 98, 41, 44, 32, 68, 98, 32, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 32, 63, 32, 110, 101, 119, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 40, 34, 117, 116, 102, 45, 49, 54, 108, 101, 34, 41, 32, 58, 32, 118, 111, 105, 100, 32, 48, 44, 32, 69, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 97, 32, 62, 62, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 100, 32, 61, 32, 99, 32, 43, 32, 98, 32, 47, 32, 50, 59, 32, 33, 40, 99, 32, 62, 61, 32, 100, 41, 32, 38, 38, 32, 122, 91, 99, 93, 59, 32, 41, 32, 43, 43, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 60, 60, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 51, 50, 32, 60, 32, 99, 32, 45, 32, 97, 32, 38, 38, 32, 68, 98, 41, 32, 114, 101, 116, 117, 114, 110, 32, 68, 98, 46, 100, 101, 99, 111, 100, 101, 40, 120, 46, 115, 117, 98, 97, 114, 114, 97, 121, 40, 97, 44, 32, 99, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 34, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 100, 32, 61, 32, 48, 59, 32, 33, 40, 100, 32, 62, 61, 32, 98, 32, 47, 32, 50, 41, 59, 32, 43, 43, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 121, 91, 97, 32, 43, 32, 50, 32, 42, 32, 100, 32, 62, 62, 32, 49, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 61, 61, 32, 101, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 70, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 63, 63, 32, 40, 99, 32, 61, 32, 50, 49, 52, 55, 52, 56, 51, 54, 52, 55, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 32, 62, 32, 99, 41, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 45, 61, 32, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 99, 32, 60, 32, 50, 32, 42, 32, 97, 46, 108, 101, 110, 103, 116, 104, 32, 63, 32, 99, 32, 47, 32, 50, 32, 58, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 101, 32, 61, 32, 48, 59, 32, 101, 32, 60, 32, 99, 59, 32, 43, 43, 101, 41, 32, 121, 91, 98, 32, 62, 62, 32, 49, 93, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 101, 41, 44, 32, 98, 32, 43, 61, 32, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 121, 91, 98, 32, 62, 62, 32, 49, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 32, 45, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 71, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 50, 32, 42, 32, 97, 46, 108, 101, 110, 103, 116, 104, 44, 32, 72, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 99, 32, 61, 32, 48, 44, 32, 100, 32, 61, 32, 34, 34, 59, 32, 33, 40, 99, 32, 62, 61, 32, 98, 32, 47, 32, 52, 41, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 67, 91, 97, 32, 43, 32, 52, 32, 42, 32, 99, 32, 62, 62, 32, 50, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 61, 61, 32, 101, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 43, 43, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 53, 53, 51, 54, 32, 60, 61, 32, 101, 32, 63, 32, 40, 101, 32, 45, 61, 32, 54, 53, 53, 51, 54, 44, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 53, 53, 50, 57, 54, 32, 124, 32, 101, 32, 62, 62, 32, 49, 48, 44, 32, 53, 54, 51, 50, 48, 32, 124, 32, 101, 32, 38, 32, 49, 48, 50, 51, 41, 41, 32, 58, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 73, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 63, 63, 32, 40, 99, 32, 61, 32, 50, 49, 52, 55, 52, 56, 51, 54, 52, 55, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 52, 32, 62, 32, 99, 41, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 100, 32, 43, 32, 99, 32, 45, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 101, 32, 61, 32, 48, 59, 32, 101, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 53, 53, 50, 57, 54, 32, 60, 61, 32, 102, 32, 38, 38, 32, 53, 55, 51, 52, 51, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 43, 43, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 54, 53, 53, 51, 54, 32, 43, 32, 40, 40, 102, 32, 38, 32, 49, 48, 50, 51, 41, 32, 60, 60, 32, 49, 48, 41, 32, 124, 32, 107, 32, 38, 32, 49, 48, 50, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 91, 98, 32, 62, 62, 32, 50, 93, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 43, 61, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 43, 32, 52, 32, 62, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 67, 91, 98, 32, 62, 62, 32, 50, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 32, 45, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 74, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 98, 32, 61, 32, 48, 44, 32, 99, 32, 61, 32, 48, 59, 32, 99, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 53, 53, 50, 57, 54, 32, 60, 61, 32, 100, 32, 38, 38, 32, 53, 55, 51, 52, 51, 32, 62, 61, 32, 100, 32, 38, 38, 32, 43, 43, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 43, 61, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 75, 98, 32, 61, 32, 48, 44, 32, 76, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 97, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 40, 100, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 46, 108, 101, 110, 103, 116, 104, 32, 38, 38, 32, 40, 68, 91, 98, 32, 62, 62, 32, 50, 93, 32, 61, 32, 103, 98, 40, 100, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 77, 98, 32, 61, 32, 91, 93, 44, 32, 78, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 77, 98, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 77, 98, 46, 112, 117, 115, 104, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 79, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 99, 32, 61, 32, 65, 114, 114, 97, 121, 40, 97, 41, 44, 32, 100, 32, 61, 32, 48, 59, 32, 100, 32, 60, 32, 97, 59, 32, 43, 43, 100, 41, 32, 99, 91, 100, 93, 32, 61, 32, 122, 98, 40, 68, 91, 98, 32, 43, 32, 52, 32, 42, 32, 100, 32, 62, 62, 32, 50, 93, 44, 32, 34, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 34, 32, 43, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 80, 98, 32, 61, 32, 82, 101, 102, 108, 101, 99, 116, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 44, 32, 81, 98, 32, 61, 32, 123, 125, 44, 32, 82, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 40, 97, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 65, 97, 32, 124, 124, 32, 34, 117, 110, 119, 105, 110, 100, 34, 32, 61, 61, 32, 97, 41, 41, 32, 116, 104, 114, 111, 119, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 83, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 32, 124, 124, 32, 48, 32, 60, 32, 75, 98, 32, 124, 124, 32, 40, 104, 46, 111, 110, 69, 120, 105, 116, 63, 46, 40, 97, 41, 44, 32, 108, 97, 32, 61, 32, 116, 114, 117, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 65, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 84, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 108, 97, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 97, 40, 41, 44, 32, 33, 40, 67, 97, 32, 124, 124, 32, 48, 32, 60, 32, 75, 98, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 32, 61, 32, 97, 32, 61, 32, 109, 97, 44, 32, 83, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 98, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 98, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 85, 98, 32, 61, 32, 123, 125, 44, 32, 87, 98, 32, 61, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 86, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 83, 69, 82, 58, 32, 34, 119, 101, 98, 95, 117, 115, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 79, 71, 78, 65, 77, 69, 58, 32, 34, 119, 101, 98, 95, 117, 115, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 65, 84, 72, 58, 32, 34, 47, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 87, 68, 58, 32, 34, 47, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 72, 79, 77, 69, 58, 32, 34, 47, 104, 111, 109, 101, 47, 119, 101, 98, 95, 117, 115, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 65, 78, 71, 58, 32, 40, 34, 111, 98, 106, 101, 99, 116, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 110, 97, 118, 105, 103, 97, 116, 111, 114, 32, 38, 38, 32, 110, 97, 118, 105, 103, 97, 116, 111, 114, 46, 108, 97, 110, 103, 117, 97, 103, 101, 115, 32, 38, 38, 32, 110, 97, 118, 105, 103, 97, 116, 111, 114, 46, 108, 97, 110, 103, 117, 97, 103, 101, 115, 91, 48, 93, 32, 124, 124, 32, 34, 67, 34, 41, 46, 114, 101, 112, 108, 97, 99, 101, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 45, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 95, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 32, 43, 32, 34, 46, 85, 84, 70, 45, 56, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 95, 58, 32, 104, 97, 32, 124, 124, 32, 34, 46, 47, 116, 104, 105, 115, 46, 112, 114, 111, 103, 114, 97, 109, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 98, 32, 105, 110, 32, 85, 98, 41, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 85, 98, 91, 98, 93, 32, 63, 32, 100, 101, 108, 101, 116, 101, 32, 97, 91, 98, 93, 32, 58, 32, 97, 91, 98, 93, 32, 61, 32, 85, 98, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 98, 32, 105, 110, 32, 97, 41, 32, 99, 46, 112, 117, 115, 104, 40, 96, 36, 123, 98, 125, 61, 36, 123, 97, 91, 98, 93, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 86, 98, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 86, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 86, 98, 44, 32, 88, 98, 32, 61, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 34, 111, 98, 106, 101, 99, 116, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 99, 114, 121, 112, 116, 111, 32, 38, 38, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 99, 114, 121, 112, 116, 111, 46, 103, 101, 116, 82, 97, 110, 100, 111, 109, 86, 97, 108, 117, 101, 115, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 97, 41, 32, 61, 62, 32, 99, 114, 121, 112, 116, 111, 46, 103, 101, 116, 82, 97, 110, 100, 111, 109, 86, 97, 108, 117, 101, 115, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 117, 97, 40, 34, 105, 110, 105, 116, 82, 97, 110, 100, 111, 109, 68, 101, 118, 105, 99, 101, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 89, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 89, 98, 32, 61, 32, 88, 98, 40, 41, 41, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 76, 32, 61, 32, 104, 46, 73, 110, 116, 101, 114, 110, 97, 108, 69, 114, 114, 111, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 101, 120, 116, 101, 110, 100, 115, 32, 69, 114, 114, 111, 114, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 112, 101, 114, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 34, 73, 110, 116, 101, 114, 110, 97, 108, 69, 114, 114, 111, 114, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 90, 98, 32, 61, 32, 65, 114, 114, 97, 121, 40, 50, 53, 54, 41, 44, 32, 36, 98, 32, 61, 32, 48, 59, 32, 50, 53, 54, 32, 62, 32, 36, 98, 59, 32, 43, 43, 36, 98, 41, 32, 90, 98, 91, 36, 98, 93, 32, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 36, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 76, 97, 32, 61, 32, 90, 98, 59, 10, 32, 32, 32, 32, 32, 32, 80, 32, 61, 32, 104, 46, 66, 105, 110, 100, 105, 110, 103, 69, 114, 114, 111, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 101, 120, 116, 101, 110, 100, 115, 32, 69, 114, 114, 111, 114, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 112, 101, 114, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 34, 66, 105, 110, 100, 105, 110, 103, 69, 114, 114, 111, 114, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115, 105, 103, 110, 40, 88, 97, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 65, 108, 105, 97, 115, 79, 102, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 40, 116, 104, 105, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 88, 97, 32, 38, 38, 32, 97, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 88, 97, 41, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 116, 104, 105, 115, 46, 65, 97, 46, 68, 97, 46, 66, 97, 44, 32, 99, 32, 61, 32, 116, 104, 105, 115, 46, 65, 97, 46, 67, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 65, 97, 32, 61, 32, 97, 46, 65, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 97, 46, 65, 97, 46, 68, 97, 46, 66, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 97, 32, 61, 32, 97, 46, 65, 97, 46, 67, 97, 59, 32, 98, 46, 71, 97, 59, 32, 41, 32, 99, 32, 61, 32, 98, 46, 81, 97, 40, 99, 41, 44, 32, 98, 32, 61, 32, 98, 46, 71, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59, 32, 100, 46, 71, 97, 59, 32, 41, 32, 97, 32, 61, 32, 100, 46, 81, 97, 40, 97, 41, 44, 32, 100, 32, 61, 32, 100, 46, 71, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 32, 61, 61, 61, 32, 100, 32, 38, 38, 32, 99, 32, 61, 61, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 108, 111, 110, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 65, 97, 46, 67, 97, 32, 124, 124, 32, 79, 97, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 65, 97, 46, 80, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 65, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 32, 43, 61, 32, 49, 44, 32, 116, 104, 105, 115, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 81, 44, 32, 98, 32, 61, 32, 79, 98, 106, 101, 99, 116, 44, 32, 99, 32, 61, 32, 98, 46, 99, 114, 101, 97, 116, 101, 44, 32, 100, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 103, 101, 116, 80, 114, 111, 116, 111, 116, 121, 112, 101, 79, 102, 40, 116, 104, 105, 115, 41, 44, 32, 101, 32, 61, 32, 116, 104, 105, 115, 46, 65, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 97, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 99, 97, 108, 108, 40, 98, 44, 32, 100, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 65, 97, 58, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 123, 32, 99, 111, 117, 110, 116, 58, 32, 101, 46, 99, 111, 117, 110, 116, 44, 32, 79, 97, 58, 32, 101, 46, 79, 97, 44, 32, 80, 97, 58, 32, 101, 46, 80, 97, 44, 32, 67, 97, 58, 32, 101, 46, 67, 97, 44, 32, 68, 97, 58, 32, 101, 46, 68, 97, 44, 32, 70, 97, 58, 32, 101, 46, 70, 97, 44, 32, 72, 97, 58, 32, 101, 46, 72, 97, 32, 125, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 65, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 32, 43, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 65, 97, 46, 79, 97, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 91, 34, 100, 101, 108, 101, 116, 101, 34, 93, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 65, 97, 46, 67, 97, 32, 124, 124, 32, 79, 97, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 65, 97, 46, 79, 97, 32, 38, 38, 32, 33, 116, 104, 105, 115, 46, 65, 97, 46, 80, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 79, 98, 106, 101, 99, 116, 32, 97, 108, 114, 101, 97, 100, 121, 32, 115, 99, 104, 101, 100, 117, 108, 101, 100, 32, 102, 111, 114, 32, 100, 101, 108, 101, 116, 105, 111, 110, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 81, 97, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 116, 104, 105, 115, 46, 65, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 45, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 61, 61, 61, 32, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 32, 38, 38, 32, 40, 97, 46, 70, 97, 32, 63, 32, 97, 46, 72, 97, 46, 75, 97, 40, 97, 46, 70, 97, 41, 32, 58, 32, 97, 46, 68, 97, 46, 66, 97, 46, 75, 97, 40, 97, 46, 67, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 65, 97, 46, 80, 97, 32, 124, 124, 32, 40, 116, 104, 105, 115, 46, 65, 97, 46, 70, 97, 32, 61, 32, 118, 111, 105, 100, 32, 48, 44, 32, 116, 104, 105, 115, 46, 65, 97, 46, 67, 97, 32, 61, 32, 118, 111, 105, 100, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 68, 101, 108, 101, 116, 101, 100, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 33, 116, 104, 105, 115, 46, 65, 97, 46, 67, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 108, 101, 116, 101, 76, 97, 116, 101, 114, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 65, 97, 46, 67, 97, 32, 124, 124, 32, 79, 97, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 65, 97, 46, 79, 97, 32, 38, 38, 32, 33, 116, 104, 105, 115, 46, 65, 97, 46, 80, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 79, 98, 106, 101, 99, 116, 32, 97, 108, 114, 101, 97, 100, 121, 32, 115, 99, 104, 101, 100, 117, 108, 101, 100, 32, 102, 111, 114, 32, 100, 101, 108, 101, 116, 105, 111, 110, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 87, 97, 46, 112, 117, 115, 104, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 65, 97, 46, 79, 97, 32, 61, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115, 105, 103, 110, 40, 105, 98, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 98, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 89, 97, 32, 38, 38, 32, 40, 97, 32, 61, 32, 116, 104, 105, 115, 46, 89, 97, 40, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 87, 97, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 75, 97, 63, 46, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 73, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 73, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 98, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 83, 97, 32, 63, 32, 86, 97, 40, 116, 104, 105, 115, 46, 66, 97, 46, 77, 97, 44, 32, 123, 32, 68, 97, 58, 32, 116, 104, 105, 115, 46, 105, 98, 44, 32, 67, 97, 58, 32, 99, 44, 32, 72, 97, 58, 32, 116, 104, 105, 115, 44, 32, 70, 97, 58, 32, 97, 32, 125, 41, 32, 58, 32, 86, 97, 40, 116, 104, 105, 115, 46, 66, 97, 46, 77, 97, 44, 32, 123, 32, 68, 97, 58, 32, 116, 104, 105, 115, 44, 32, 67, 97, 58, 32, 97, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 116, 104, 105, 115, 46, 99, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 99, 41, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 87, 97, 40, 97, 41, 44, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 85, 97, 40, 116, 104, 105, 115, 46, 66, 97, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 61, 61, 61, 32, 100, 46, 65, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 100, 46, 65, 97, 46, 67, 97, 32, 61, 32, 99, 44, 32, 100, 46, 65, 97, 46, 70, 97, 32, 61, 32, 97, 44, 32, 100, 46, 99, 108, 111, 110, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 100, 46, 99, 108, 111, 110, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 87, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 116, 104, 105, 115, 46, 66, 97, 46, 98, 98, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 83, 97, 91, 100, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 100, 41, 32, 114, 101, 116, 117, 114, 110, 32, 98, 46, 99, 97, 108, 108, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 116, 104, 105, 115, 46, 82, 97, 32, 63, 32, 100, 46, 90, 97, 32, 58, 32, 100, 46, 112, 111, 105, 110, 116, 101, 114, 84, 121, 112, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 82, 97, 40, 99, 44, 32, 116, 104, 105, 115, 46, 66, 97, 44, 32, 100, 46, 66, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 32, 61, 61, 61, 32, 101, 32, 63, 32, 98, 46, 99, 97, 108, 108, 40, 116, 104, 105, 115, 41, 32, 58, 32, 116, 104, 105, 115, 46, 83, 97, 32, 63, 32, 86, 97, 40, 100, 46, 66, 97, 46, 77, 97, 44, 32, 123, 32, 68, 97, 58, 32, 100, 44, 32, 67, 97, 58, 32, 101, 44, 32, 72, 97, 58, 32, 116, 104, 105, 115, 44, 32, 70, 97, 58, 32, 97, 32, 125, 41, 32, 58, 32, 86, 97, 40, 100, 46, 66, 97, 46, 77, 97, 44, 32, 123, 32, 68, 97, 58, 32, 100, 44, 32, 67, 97, 58, 32, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 109, 98, 32, 61, 32, 104, 46, 85, 110, 98, 111, 117, 110, 100, 84, 121, 112, 101, 69, 114, 114, 111, 114, 32, 61, 32, 40, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 89, 97, 40, 98, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 109, 101, 115, 115, 97, 103, 101, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 69, 114, 114, 111, 114, 40, 100, 41, 46, 115, 116, 97, 99, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 100, 32, 38, 38, 32, 40, 116, 104, 105, 115, 46, 115, 116, 97, 99, 107, 32, 61, 32, 116, 104, 105, 115, 46, 116, 111, 83, 116, 114, 105, 110, 103, 40, 41, 32, 43, 32, 34, 92, 110, 34, 32, 43, 32, 100, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 94, 69, 114, 114, 111, 114, 40, 58, 91, 94, 92, 110, 93, 42, 41, 63, 92, 110, 47, 44, 32, 34, 34, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 99, 114, 101, 97, 116, 101, 40, 97, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 46, 116, 111, 83, 116, 114, 105, 110, 103, 32, 61, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 116, 104, 105, 115, 46, 109, 101, 115, 115, 97, 103, 101, 32, 63, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 58, 32, 96, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 58, 32, 36, 123, 116, 104, 105, 115, 46, 109, 101, 115, 115, 97, 103, 101, 125, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 40, 69, 114, 114, 111, 114, 44, 32, 34, 85, 110, 98, 111, 117, 110, 100, 84, 121, 112, 101, 69, 114, 114, 111, 114, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 85, 46, 112, 117, 115, 104, 40, 48, 44, 32, 49, 44, 32, 118, 111, 105, 100, 32, 48, 44, 32, 49, 44, 32, 110, 117, 108, 108, 44, 32, 49, 44, 32, 116, 114, 117, 101, 44, 32, 49, 44, 32, 102, 97, 108, 115, 101, 44, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 99, 111, 117, 110, 116, 95, 101, 109, 118, 97, 108, 95, 104, 97, 110, 100, 108, 101, 115, 32, 61, 32, 40, 41, 32, 61, 62, 32, 85, 46, 108, 101, 110, 103, 116, 104, 32, 47, 32, 50, 32, 45, 32, 53, 32, 45, 32, 118, 98, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 108, 99, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 117, 97, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 65, 115, 115, 101, 114, 116, 105, 111, 110, 32, 102, 97, 105, 108, 101, 100, 58, 32, 36, 123, 97, 32, 63, 32, 69, 97, 40, 97, 41, 32, 58, 32, 34, 34, 125, 44, 32, 97, 116, 58, 32, 96, 32, 43, 32, 91, 98, 32, 63, 32, 98, 32, 63, 32, 69, 97, 40, 98, 41, 32, 58, 32, 34, 34, 32, 58, 32, 34, 117, 110, 107, 110, 111, 119, 110, 32, 102, 105, 108, 101, 110, 97, 109, 101, 34, 44, 32, 99, 44, 32, 100, 32, 63, 32, 100, 32, 63, 32, 69, 97, 40, 100, 41, 32, 58, 32, 34, 34, 32, 58, 32, 34, 117, 110, 107, 110, 111, 119, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 34, 93, 10, 32, 32, 32, 32, 32, 32, 32, 32, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 106, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 110, 101, 119, 32, 70, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 91, 100, 46, 67, 97, 32, 43, 32, 49, 54, 32, 62, 62, 32, 50, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 91, 100, 46, 67, 97, 32, 43, 32, 52, 32, 62, 62, 32, 50, 93, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 91, 100, 46, 67, 97, 32, 43, 32, 56, 32, 62, 62, 32, 50, 93, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 71, 97, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 72, 97, 43, 43, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 71, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 80, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 77, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 78, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 82, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 79, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 84, 58, 32, 40, 41, 32, 61, 62, 32, 117, 97, 40, 34, 34, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 119, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 73, 97, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 108, 101, 116, 101, 32, 73, 97, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 98, 46, 85, 97, 44, 32, 100, 32, 61, 32, 98, 46, 75, 97, 44, 32, 101, 32, 61, 32, 98, 46, 88, 97, 44, 32, 102, 32, 61, 32, 101, 46, 109, 97, 112, 40, 40, 107, 41, 32, 61, 62, 32, 107, 46, 103, 98, 41, 46, 99, 111, 110, 99, 97, 116, 40, 101, 46, 109, 97, 112, 40, 40, 107, 41, 32, 61, 62, 32, 107, 46, 109, 98, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40, 91, 97, 93, 44, 32, 102, 44, 32, 40, 107, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 103, 32, 61, 32, 123, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 108, 44, 32, 110, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 109, 32, 61, 32, 107, 91, 110, 93, 44, 32, 113, 32, 61, 32, 108, 46, 101, 98, 44, 32, 114, 32, 61, 32, 108, 46, 102, 98, 44, 32, 65, 32, 61, 32, 107, 91, 110, 32, 43, 32, 101, 46, 108, 101, 110, 103, 116, 104, 93, 44, 32, 118, 32, 61, 32, 108, 46, 108, 98, 44, 32, 119, 32, 61, 32, 108, 46, 110, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 91, 108, 46, 97, 98, 93, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 58, 32, 40, 69, 41, 32, 61, 62, 32, 109, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 113, 40, 114, 44, 32, 69, 41, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 119, 114, 105, 116, 101, 58, 32, 40, 69, 44, 32, 100, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 66, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 40, 119, 44, 32, 69, 44, 32, 65, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 40, 66, 44, 32, 100, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 74, 97, 40, 66, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 46, 110, 97, 109, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 108, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 110, 32, 61, 32, 123, 125, 44, 32, 109, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 109, 32, 105, 110, 32, 103, 41, 32, 110, 91, 109, 93, 32, 61, 32, 103, 91, 109, 93, 46, 114, 101, 97, 100, 40, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 40, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 108, 44, 32, 110, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 109, 32, 105, 110, 32, 103, 41, 32, 105, 102, 32, 40, 33, 40, 109, 32, 105, 110, 32, 110, 41, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 84, 121, 112, 101, 69, 114, 114, 111, 114, 40, 96, 77, 105, 115, 115, 105, 110, 103, 32, 102, 105, 101, 108, 100, 58, 32, 34, 36, 123, 109, 125, 34, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 113, 32, 61, 32, 99, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 109, 32, 105, 110, 32, 103, 41, 32, 103, 91, 109, 93, 46, 119, 114, 105, 116, 101, 40, 113, 44, 32, 110, 91, 109, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 108, 32, 38, 38, 32, 108, 46, 112, 117, 115, 104, 40, 100, 44, 32, 113, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 113, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 73, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 73, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 74, 97, 58, 32, 100, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 70, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 95, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 79, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 33, 33, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 101, 44, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 32, 63, 32, 99, 32, 58, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 73, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 120, 91, 101, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 74, 97, 58, 32, 110, 117, 108, 108, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 44, 32, 108, 44, 32, 110, 44, 32, 109, 44, 32, 113, 44, 32, 114, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 32, 61, 32, 79, 40, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 83, 40, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 38, 38, 32, 40, 103, 32, 61, 32, 83, 40, 107, 44, 32, 103, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 32, 38, 38, 32, 40, 110, 32, 61, 32, 83, 40, 108, 44, 32, 110, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 32, 61, 32, 83, 40, 113, 44, 32, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 65, 32, 61, 32, 97, 98, 40, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 36, 97, 40, 65, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 98, 40, 96, 67, 97, 110, 110, 111, 116, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 32, 36, 123, 109, 125, 32, 100, 117, 101, 32, 116, 111, 32, 117, 110, 98, 111, 117, 110, 100, 32, 116, 121, 112, 101, 115, 96, 44, 32, 91, 100, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40, 91, 97, 44, 32, 98, 44, 32, 99, 93, 44, 32, 100, 32, 63, 32, 91, 100, 93, 32, 58, 32, 91, 93, 44, 32, 40, 118, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 32, 61, 32, 118, 91, 48, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 119, 32, 61, 32, 118, 46, 66, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 69, 32, 61, 32, 119, 46, 77, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 69, 32, 61, 32, 88, 97, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 32, 61, 32, 89, 97, 40, 109, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 46, 46, 46, 78, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 79, 98, 106, 101, 99, 116, 46, 103, 101, 116, 80, 114, 111, 116, 111, 116, 121, 112, 101, 79, 102, 40, 116, 104, 105, 115, 41, 32, 33, 61, 61, 32, 100, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 85, 115, 101, 32, 39, 110, 101, 119, 39, 32, 116, 111, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 32, 34, 32, 43, 32, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 66, 46, 76, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 109, 32, 43, 32, 34, 32, 104, 97, 115, 32, 110, 111, 32, 97, 99, 99, 101, 115, 115, 105, 98, 108, 101, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 117, 98, 32, 61, 32, 66, 46, 76, 97, 91, 78, 97, 46, 108, 101, 110, 103, 116, 104, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 117, 98, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 84, 114, 105, 101, 100, 32, 116, 111, 32, 105, 110, 118, 111, 107, 101, 32, 99, 116, 111, 114, 32, 111, 102, 32, 36, 123, 109, 125, 32, 119, 105, 116, 104, 32, 105, 110, 118, 97, 108, 105, 100, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 32, 40, 36, 123, 78, 97, 46, 108, 101, 110, 103, 116, 104, 125, 41, 32, 45, 32, 101, 120, 112, 101, 99, 116, 101, 100, 32, 40, 36, 123, 79, 98, 106, 101, 99, 116, 46, 107, 101, 121, 115, 40, 66, 46, 76, 97, 41, 46, 116, 111, 83, 116, 114, 105, 110, 103, 40, 41, 125, 41, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 32, 105, 110, 115, 116, 101, 97, 100, 33, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 117, 98, 46, 97, 112, 112, 108, 121, 40, 116, 104, 105, 115, 44, 32, 78, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 97, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 99, 114, 101, 97, 116, 101, 40, 69, 44, 32, 123, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 58, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 118, 32, 125, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 32, 61, 32, 100, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 66, 32, 61, 32, 110, 101, 119, 32, 98, 98, 40, 109, 44, 32, 118, 44, 32, 100, 97, 44, 32, 114, 44, 32, 119, 44, 32, 102, 44, 32, 103, 44, 32, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 66, 46, 71, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 101, 97, 32, 61, 32, 66, 46, 71, 97, 41, 46, 86, 97, 32, 63, 63, 32, 40, 101, 97, 46, 86, 97, 32, 61, 32, 91, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 46, 71, 97, 46, 86, 97, 46, 112, 117, 115, 104, 40, 66, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 119, 32, 61, 32, 110, 101, 119, 32, 105, 98, 40, 109, 44, 32, 66, 44, 32, 116, 114, 117, 101, 44, 32, 102, 97, 108, 115, 101, 44, 32, 102, 97, 108, 115, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 97, 32, 61, 32, 110, 101, 119, 32, 105, 98, 40, 109, 32, 43, 32, 34, 42, 34, 44, 32, 66, 44, 32, 102, 97, 108, 115, 101, 44, 32, 102, 97, 108, 115, 101, 44, 32, 102, 97, 108, 115, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 69, 32, 61, 32, 110, 101, 119, 32, 105, 98, 40, 109, 32, 43, 32, 34, 32, 99, 111, 110, 115, 116, 42, 34, 44, 32, 66, 44, 32, 102, 97, 108, 115, 101, 44, 32, 116, 114, 117, 101, 44, 32, 102, 97, 108, 115, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 83, 97, 91, 97, 93, 32, 61, 32, 123, 32, 112, 111, 105, 110, 116, 101, 114, 84, 121, 112, 101, 58, 32, 101, 97, 44, 32, 90, 97, 58, 32, 69, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 106, 98, 40, 65, 44, 32, 118, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 119, 44, 32, 101, 97, 44, 32, 69, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107, 32, 61, 32, 113, 98, 40, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 83, 40, 100, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40, 91, 93, 44, 32, 91, 97, 93, 44, 32, 40, 103, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61, 32, 103, 91, 48, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 108, 32, 61, 32, 96, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 32, 36, 123, 103, 46, 110, 97, 109, 101, 125, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 103, 46, 66, 97, 46, 76, 97, 32, 38, 38, 32, 40, 103, 46, 66, 97, 46, 76, 97, 32, 61, 32, 91, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 103, 46, 66, 97, 46, 76, 97, 91, 98, 32, 45, 32, 49, 93, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 67, 97, 110, 110, 111, 116, 32, 114, 101, 103, 105, 115, 116, 101, 114, 32, 109, 117, 108, 116, 105, 112, 108, 101, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 115, 32, 119, 105, 116, 104, 32, 105, 100, 101, 110, 116, 105, 99, 97, 108, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 32, 40, 36, 123, 98, 32, 45, 32, 49, 125, 41, 32, 102, 111, 114, 32, 99, 108, 97, 115, 115, 32, 39, 36, 123, 103, 46, 110, 97, 109, 101, 125, 39, 33, 32, 79, 118, 101, 114, 108, 111, 97, 100, 32, 114, 101, 115, 111, 108, 117, 116, 105, 111, 110, 32, 105, 115, 32, 99, 117, 114, 114, 101, 110, 116, 108, 121, 32, 111, 110, 108, 121, 32, 112, 101, 114, 102, 111, 114, 109, 101, 100, 32, 117, 115, 105, 110, 103, 32, 116, 104, 101, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 99, 111, 117, 110, 116, 44, 32, 110, 111, 116, 32, 97, 99, 116, 117, 97, 108, 32, 116, 121, 112, 101, 32, 105, 110, 102, 111, 33, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 46, 66, 97, 46, 76, 97, 91, 98, 32, 45, 32, 49, 93, 32, 61, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 98, 40, 96, 67, 97, 110, 110, 111, 116, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 32, 36, 123, 103, 46, 110, 97, 109, 101, 125, 32, 100, 117, 101, 32, 116, 111, 32, 117, 110, 98, 111, 117, 110, 100, 32, 116, 121, 112, 101, 115, 96, 44, 32, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40, 91, 93, 44, 32, 107, 44, 32, 40, 110, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 46, 115, 112, 108, 105, 99, 101, 40, 49, 44, 32, 48, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 46, 66, 97, 46, 76, 97, 91, 98, 32, 45, 32, 49, 93, 32, 61, 32, 115, 98, 40, 108, 44, 32, 110, 44, 32, 110, 117, 108, 108, 44, 32, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 108, 32, 61, 32, 113, 98, 40, 99, 44, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 79, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 116, 98, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 83, 40, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40, 91, 93, 44, 32, 91, 97, 93, 44, 32, 40, 110, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 109, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 98, 40, 96, 67, 97, 110, 110, 111, 116, 32, 99, 97, 108, 108, 32, 36, 123, 113, 125, 32, 100, 117, 101, 32, 116, 111, 32, 117, 110, 98, 111, 117, 110, 100, 32, 116, 121, 112, 101, 115, 96, 44, 32, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 32, 61, 32, 110, 91, 48, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 113, 32, 61, 32, 96, 36, 123, 110, 46, 110, 97, 109, 101, 125, 46, 36, 123, 98, 125, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 46, 115, 116, 97, 114, 116, 115, 87, 105, 116, 104, 40, 34, 64, 64, 34, 41, 32, 38, 38, 32, 40, 98, 32, 61, 32, 83, 121, 109, 98, 111, 108, 91, 98, 46, 115, 117, 98, 115, 116, 114, 105, 110, 103, 40, 50, 41, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 38, 38, 32, 110, 46, 66, 97, 46, 106, 98, 46, 112, 117, 115, 104, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 114, 32, 61, 32, 110, 46, 66, 97, 46, 77, 97, 44, 32, 65, 32, 61, 32, 114, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 65, 32, 124, 124, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 65, 46, 69, 97, 32, 38, 38, 32, 65, 46, 99, 108, 97, 115, 115, 78, 97, 109, 101, 32, 33, 61, 61, 32, 110, 46, 110, 97, 109, 101, 32, 38, 38, 32, 65, 46, 78, 97, 32, 61, 61, 61, 32, 99, 32, 45, 32, 50, 32, 63, 32, 40, 109, 46, 78, 97, 32, 61, 32, 99, 32, 45, 32, 50, 44, 32, 109, 46, 99, 108, 97, 115, 115, 78, 97, 109, 101, 32, 61, 32, 110, 46, 110, 97, 109, 101, 44, 32, 114, 91, 98, 93, 32, 61, 32, 109, 41, 32, 58, 32, 40, 90, 97, 40, 114, 44, 32, 98, 44, 32, 113, 41, 44, 32, 114, 91, 98, 93, 46, 69, 97, 91, 99, 32, 45, 32, 50, 93, 32, 61, 32, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40, 91, 93, 44, 32, 108, 44, 32, 40, 118, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 32, 61, 32, 115, 98, 40, 113, 44, 32, 118, 44, 32, 110, 44, 32, 102, 44, 32, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 114, 91, 98, 93, 46, 69, 97, 32, 63, 32, 40, 118, 46, 78, 97, 32, 61, 32, 99, 32, 45, 32, 50, 44, 32, 114, 91, 98, 93, 32, 61, 32, 118, 41, 32, 58, 32, 114, 91, 98, 93, 46, 69, 97, 91, 99, 32, 45, 32, 50, 93, 32, 61, 32, 118, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 89, 58, 32, 40, 97, 41, 32, 61, 62, 32, 77, 40, 97, 44, 32, 120, 98, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 68, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 79, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 46, 118, 97, 108, 117, 101, 115, 32, 61, 32, 123, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 58, 32, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 46, 118, 97, 108, 117, 101, 115, 91, 102, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 102, 44, 32, 107, 41, 32, 61, 62, 32, 107, 46, 118, 97, 108, 117, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 73, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 121, 98, 40, 98, 44, 32, 99, 44, 32, 100, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 74, 97, 58, 32, 110, 117, 108, 108, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 36, 97, 40, 98, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 122, 98, 40, 97, 44, 32, 34, 101, 110, 117, 109, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 79, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 100, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 99, 114, 101, 97, 116, 101, 40, 100, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 108, 117, 101, 58, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 99, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 58, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 89, 97, 40, 96, 36, 123, 100, 46, 110, 97, 109, 101, 125, 95, 36, 123, 98, 125, 96, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 118, 97, 108, 117, 101, 115, 91, 99, 93, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 91, 98, 93, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 65, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 79, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 100, 41, 32, 61, 62, 32, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 100, 44, 32, 101, 41, 32, 61, 62, 32, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 73, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 65, 98, 40, 98, 44, 32, 99, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 74, 97, 58, 32, 110, 117, 108, 108, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107, 32, 61, 32, 113, 98, 40, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 79, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 116, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 83, 40, 100, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 36, 97, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 98, 40, 96, 67, 97, 110, 110, 111, 116, 32, 99, 97, 108, 108, 32, 36, 123, 97, 125, 32, 100, 117, 101, 32, 116, 111, 32, 117, 110, 98, 111, 117, 110, 100, 32, 116, 121, 112, 101, 115, 96, 44, 32, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 45, 32, 49, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40, 91, 93, 44, 32, 107, 44, 32, 40, 103, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 106, 98, 40, 97, 44, 32, 115, 98, 40, 97, 44, 32, 91, 103, 91, 48, 93, 44, 32, 110, 117, 108, 108, 93, 46, 99, 111, 110, 99, 97, 116, 40, 103, 46, 115, 108, 105, 99, 101, 40, 49, 41, 41, 44, 32, 110, 117, 108, 108, 44, 32, 101, 44, 32, 102, 41, 44, 32, 98, 32, 45, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 110, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 79, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 49, 32, 61, 61, 61, 32, 101, 32, 38, 38, 32, 40, 101, 32, 61, 32, 52, 50, 57, 52, 57, 54, 55, 50, 57, 53, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 40, 103, 41, 32, 61, 62, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 61, 61, 61, 32, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 51, 50, 32, 45, 32, 56, 32, 42, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 40, 103, 41, 32, 61, 62, 32, 103, 32, 60, 60, 32, 102, 32, 62, 62, 62, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107, 32, 61, 32, 98, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 117, 110, 115, 105, 103, 110, 101, 100, 34, 41, 32, 63, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 103, 44, 32, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 32, 62, 62, 62, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 103, 44, 32, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 40, 97, 44, 32, 123, 32, 110, 97, 109, 101, 58, 32, 98, 44, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 101, 44, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 107, 44, 32, 73, 97, 58, 32, 56, 44, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 66, 98, 40, 98, 44, 32, 99, 44, 32, 48, 32, 33, 61, 61, 32, 100, 41, 44, 32, 74, 97, 58, 32, 110, 117, 108, 108, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 103, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 100, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 101, 119, 32, 101, 40, 117, 46, 98, 117, 102, 102, 101, 114, 44, 32, 68, 91, 102, 32, 43, 32, 52, 32, 62, 62, 32, 50, 93, 44, 32, 68, 91, 102, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 91, 73, 110, 116, 56, 65, 114, 114, 97, 121, 44, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 44, 32, 73, 110, 116, 49, 54, 65, 114, 114, 97, 121, 44, 32, 85, 105, 110, 116, 49, 54, 65, 114, 114, 97, 121, 44, 32, 73, 110, 116, 51, 50, 65, 114, 114, 97, 121, 44, 32, 85, 105, 110, 116, 51, 50, 65, 114, 114, 97, 121, 44, 32, 70, 108, 111, 97, 116, 51, 50, 65, 114, 114, 97, 121, 44, 32, 70, 108, 111, 97, 116, 54, 52, 65, 114, 114, 97, 121, 93, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 79, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 40, 97, 44, 32, 123, 32, 110, 97, 109, 101, 58, 32, 99, 44, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 100, 44, 32, 73, 97, 58, 32, 56, 44, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 100, 32, 125, 44, 32, 123, 32, 104, 98, 58, 32, 116, 114, 117, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 113, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 40, 97, 44, 32, 67, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 117, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 44, 32, 108, 44, 32, 110, 44, 32, 109, 44, 32, 113, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 79, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 83, 40, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61, 32, 83, 40, 107, 44, 32, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 32, 61, 32, 83, 40, 108, 44, 32, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 113, 32, 61, 32, 83, 40, 109, 44, 32, 113, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40, 91, 97, 93, 44, 32, 91, 98, 93, 44, 32, 40, 114, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 32, 61, 32, 114, 91, 48, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 110, 101, 119, 32, 105, 98, 40, 99, 44, 32, 114, 46, 66, 97, 44, 32, 102, 97, 108, 115, 101, 44, 32, 102, 97, 108, 115, 101, 44, 32, 116, 114, 117, 101, 44, 32, 114, 44, 32, 100, 44, 32, 102, 44, 32, 103, 44, 32, 110, 44, 32, 113, 41, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 90, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 79, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 100, 32, 61, 32, 68, 91, 99, 32, 62, 62, 32, 50, 93, 44, 32, 101, 32, 61, 32, 99, 32, 43, 32, 52, 44, 32, 102, 44, 32, 107, 32, 61, 32, 101, 44, 32, 103, 32, 61, 32, 48, 59, 32, 103, 32, 60, 61, 32, 100, 59, 32, 43, 43, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 108, 32, 61, 32, 101, 32, 43, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 103, 32, 61, 61, 32, 100, 32, 124, 124, 32, 48, 32, 61, 61, 32, 120, 91, 108, 93, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 107, 32, 61, 32, 107, 32, 63, 32, 69, 97, 40, 107, 44, 32, 108, 32, 45, 32, 107, 41, 32, 58, 32, 34, 34, 44, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 102, 32, 63, 32, 102, 32, 61, 32, 107, 32, 58, 32, 40, 102, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 48, 41, 44, 32, 102, 32, 43, 61, 32, 107, 41, 44, 32, 107, 32, 61, 32, 108, 32, 43, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 84, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 99, 44, 32, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 32, 38, 38, 32, 40, 100, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 100, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 44, 32, 102, 32, 61, 32, 34, 115, 116, 114, 105, 110, 103, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 40, 102, 32, 124, 124, 32, 100, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 32, 124, 124, 32, 100, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 85, 105, 110, 116, 56, 67, 108, 97, 109, 112, 101, 100, 65, 114, 114, 97, 121, 32, 124, 124, 32, 100, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 73, 110, 116, 56, 65, 114, 114, 97, 121, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 110, 111, 110, 45, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 115, 116, 100, 58, 58, 115, 116, 114, 105, 110, 103, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 102, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 107, 32, 61, 32, 101, 32, 61, 32, 48, 59, 32, 107, 32, 60, 32, 100, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 103, 32, 61, 32, 100, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 50, 55, 32, 62, 61, 32, 103, 32, 63, 32, 101, 43, 43, 32, 58, 32, 50, 48, 52, 55, 32, 62, 61, 32, 103, 32, 63, 32, 101, 32, 43, 61, 32, 50, 32, 58, 32, 53, 53, 50, 57, 54, 32, 60, 61, 32, 103, 32, 38, 38, 32, 53, 55, 51, 52, 51, 32, 62, 61, 32, 103, 32, 63, 32, 40, 101, 32, 43, 61, 32, 52, 44, 32, 43, 43, 107, 41, 32, 58, 32, 101, 32, 43, 61, 32, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 101, 32, 61, 32, 100, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 107, 32, 61, 32, 97, 99, 40, 52, 32, 43, 32, 101, 32, 43, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61, 32, 107, 32, 43, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 91, 107, 32, 62, 62, 32, 50, 93, 32, 61, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 102, 41, 32, 72, 40, 100, 44, 32, 103, 44, 32, 101, 32, 43, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 102, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 102, 32, 61, 32, 48, 59, 32, 102, 32, 60, 32, 101, 59, 32, 43, 43, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 108, 32, 61, 32, 100, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 53, 53, 32, 60, 32, 108, 41, 32, 116, 104, 114, 111, 119, 32, 84, 40, 103, 41, 44, 32, 110, 101, 119, 32, 80, 40, 34, 83, 116, 114, 105, 110, 103, 32, 104, 97, 115, 32, 85, 84, 70, 45, 49, 54, 32, 99, 111, 100, 101, 32, 117, 110, 105, 116, 115, 32, 116, 104, 97, 116, 32, 100, 111, 32, 110, 111, 116, 32, 102, 105, 116, 32, 105, 110, 32, 56, 32, 98, 105, 116, 115, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 120, 91, 103, 32, 43, 32, 102, 93, 32, 61, 32, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 102, 111, 114, 32, 40, 102, 32, 61, 32, 48, 59, 32, 102, 32, 60, 32, 101, 59, 32, 43, 43, 102, 41, 32, 120, 91, 103, 32, 43, 32, 102, 93, 32, 61, 32, 100, 91, 102, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 99, 32, 38, 38, 32, 99, 46, 112, 117, 115, 104, 40, 84, 44, 32, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 73, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 73, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 74, 97, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 84, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 121, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 79, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 32, 61, 61, 61, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 69, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 70, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 71, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107, 32, 61, 32, 40, 103, 41, 32, 61, 62, 32, 122, 91, 103, 32, 62, 62, 32, 49, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 52, 32, 61, 61, 61, 32, 98, 32, 38, 38, 32, 40, 100, 32, 61, 32, 72, 98, 44, 32, 101, 32, 61, 32, 73, 98, 44, 32, 102, 32, 61, 32, 74, 98, 44, 32, 107, 32, 61, 32, 40, 103, 41, 32, 61, 62, 32, 68, 91, 103, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 103, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 108, 32, 61, 32, 68, 91, 103, 32, 62, 62, 32, 50, 93, 44, 32, 110, 44, 32, 109, 32, 61, 32, 103, 32, 43, 32, 52, 44, 32, 113, 32, 61, 32, 48, 59, 32, 113, 32, 60, 61, 32, 108, 59, 32, 43, 43, 113, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 114, 32, 61, 32, 103, 32, 43, 32, 52, 32, 43, 32, 113, 32, 42, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 113, 32, 61, 61, 32, 108, 32, 124, 124, 32, 48, 32, 61, 61, 32, 107, 40, 114, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 32, 61, 32, 100, 40, 109, 44, 32, 114, 32, 45, 32, 109, 41, 44, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 110, 32, 63, 32, 110, 32, 61, 32, 109, 32, 58, 32, 40, 110, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 48, 41, 44, 32, 110, 32, 43, 61, 32, 109, 41, 44, 32, 109, 32, 61, 32, 114, 32, 43, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 84, 40, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 103, 44, 32, 108, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 34, 115, 116, 114, 105, 110, 103, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 108, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 110, 111, 110, 45, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 67, 43, 43, 32, 115, 116, 114, 105, 110, 103, 32, 116, 121, 112, 101, 32, 36, 123, 99, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 110, 32, 61, 32, 102, 40, 108, 41, 44, 32, 109, 32, 61, 32, 97, 99, 40, 52, 32, 43, 32, 110, 32, 43, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 91, 109, 32, 62, 62, 32, 50, 93, 32, 61, 32, 110, 32, 47, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 40, 108, 44, 32, 109, 32, 43, 32, 52, 44, 32, 110, 32, 43, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 103, 32, 38, 38, 32, 103, 46, 112, 117, 115, 104, 40, 84, 44, 32, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 73, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 73, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 74, 97, 40, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 84, 40, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 120, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 73, 97, 91, 97, 93, 32, 61, 32, 123, 32, 110, 97, 109, 101, 58, 32, 79, 40, 98, 41, 44, 32, 85, 97, 58, 32, 83, 40, 99, 44, 32, 100, 41, 44, 32, 75, 97, 58, 32, 83, 40, 101, 44, 32, 102, 41, 44, 32, 88, 97, 58, 32, 91, 93, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 44, 32, 108, 44, 32, 110, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 73, 97, 91, 97, 93, 46, 88, 97, 46, 112, 117, 115, 104, 40, 123, 32, 97, 98, 58, 32, 79, 40, 98, 41, 44, 32, 103, 98, 58, 32, 99, 44, 32, 101, 98, 58, 32, 83, 40, 100, 44, 32, 101, 41, 44, 32, 102, 98, 58, 32, 102, 44, 32, 109, 98, 58, 32, 107, 44, 32, 108, 98, 58, 32, 83, 40, 103, 44, 32, 108, 41, 44, 32, 110, 98, 58, 32, 110, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 36, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 79, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 40, 97, 44, 32, 123, 32, 112, 98, 58, 32, 116, 114, 117, 101, 44, 32, 110, 97, 109, 101, 58, 32, 98, 44, 32, 73, 97, 58, 32, 48, 44, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 75, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 75, 98, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 73, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 73, 110, 102, 105, 110, 105, 116, 121, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 67, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 86, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 122, 98, 40, 98, 44, 32, 34, 101, 109, 118, 97, 108, 58, 58, 97, 115, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 76, 98, 40, 98, 44, 32, 99, 44, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 112, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 77, 98, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 86, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 40, 110, 117, 108, 108, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 87, 58, 32, 119, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 69, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 86, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 86, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 32, 61, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 111, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 79, 98, 40, 97, 44, 32, 98, 41, 44, 32, 101, 32, 61, 32, 100, 46, 115, 104, 105, 102, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 45, 45, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 96, 109, 101, 116, 104, 111, 100, 67, 97, 108, 108, 101, 114, 60, 40, 36, 123, 100, 46, 109, 97, 112, 40, 40, 107, 41, 32, 61, 62, 32, 107, 46, 110, 97, 109, 101, 41, 46, 106, 111, 105, 110, 40, 34, 44, 32, 34, 41, 125, 41, 32, 61, 62, 32, 36, 123, 101, 46, 110, 97, 109, 101, 125, 62, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 78, 98, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 97, 40, 98, 44, 32, 40, 107, 44, 32, 103, 44, 32, 108, 44, 32, 110, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 109, 32, 61, 32, 48, 44, 32, 113, 32, 61, 32, 48, 59, 32, 113, 32, 60, 32, 97, 59, 32, 43, 43, 113, 41, 32, 102, 91, 113, 93, 32, 61, 32, 100, 91, 113, 93, 46, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 40, 110, 32, 43, 32, 109, 41, 44, 32, 109, 32, 43, 61, 32, 100, 91, 113, 93, 46, 73, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 107, 32, 61, 32, 49, 32, 61, 61, 61, 32, 99, 32, 63, 32, 80, 98, 40, 103, 44, 32, 102, 41, 32, 58, 32, 103, 46, 97, 112, 112, 108, 121, 40, 107, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 76, 98, 40, 101, 44, 32, 108, 44, 32, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 122, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 57, 32, 60, 32, 97, 32, 38, 38, 32, 40, 85, 91, 97, 32, 43, 32, 49, 93, 32, 43, 61, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 86, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 74, 97, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 119, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 122, 98, 40, 97, 44, 32, 34, 95, 101, 109, 118, 97, 108, 95, 116, 97, 107, 101, 95, 118, 97, 108, 117, 101, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 97, 46, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 103, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 71, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 81, 98, 91, 97, 93, 32, 38, 38, 32, 40, 99, 108, 101, 97, 114, 84, 105, 109, 101, 111, 117, 116, 40, 81, 98, 91, 97, 93, 46, 105, 100, 41, 44, 32, 100, 101, 108, 101, 116, 101, 32, 81, 98, 91, 97, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 41, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 108, 101, 116, 101, 32, 81, 98, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 84, 98, 40, 40, 41, 32, 61, 62, 32, 98, 99, 40, 97, 44, 32, 112, 101, 114, 102, 111, 114, 109, 97, 110, 99, 101, 46, 110, 111, 119, 40, 41, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 81, 98, 91, 97, 93, 32, 61, 32, 123, 32, 105, 100, 58, 32, 99, 44, 32, 113, 98, 58, 32, 98, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 72, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 40, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 68, 97, 116, 101, 40, 41, 41, 46, 103, 101, 116, 70, 117, 108, 108, 89, 101, 97, 114, 40, 41, 44, 32, 102, 32, 61, 32, 110, 101, 119, 32, 68, 97, 116, 101, 40, 101, 44, 32, 48, 44, 32, 49, 41, 46, 103, 101, 116, 84, 105, 109, 101, 122, 111, 110, 101, 79, 102, 102, 115, 101, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 110, 101, 119, 32, 68, 97, 116, 101, 40, 101, 44, 32, 54, 44, 32, 49, 41, 46, 103, 101, 116, 84, 105, 109, 101, 122, 111, 110, 101, 79, 102, 102, 115, 101, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 91, 97, 32, 62, 62, 32, 50, 93, 32, 61, 32, 54, 48, 32, 42, 32, 77, 97, 116, 104, 46, 109, 97, 120, 40, 102, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 91, 98, 32, 62, 62, 32, 50, 93, 32, 61, 32, 78, 117, 109, 98, 101, 114, 40, 102, 32, 33, 61, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 40, 107, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 103, 32, 61, 32, 77, 97, 116, 104, 46, 97, 98, 115, 40, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 96, 85, 84, 67, 36, 123, 48, 32, 60, 61, 32, 107, 32, 63, 32, 34, 45, 34, 32, 58, 32, 34, 43, 34, 125, 36, 123, 83, 116, 114, 105, 110, 103, 40, 77, 97, 116, 104, 46, 102, 108, 111, 111, 114, 40, 103, 32, 47, 32, 54, 48, 41, 41, 46, 112, 97, 100, 83, 116, 97, 114, 116, 40, 50, 44, 32, 34, 48, 34, 41, 125, 36, 123, 83, 116, 114, 105, 110, 103, 40, 103, 32, 37, 32, 54, 48, 41, 46, 112, 97, 100, 83, 116, 97, 114, 116, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 50, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 48, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 125, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 98, 40, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 98, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 60, 32, 102, 32, 63, 32, 40, 72, 40, 97, 44, 32, 99, 44, 32, 49, 55, 41, 44, 32, 72, 40, 98, 44, 32, 100, 44, 32, 49, 55, 41, 41, 32, 58, 32, 40, 72, 40, 97, 44, 32, 100, 44, 32, 49, 55, 41, 44, 32, 72, 40, 98, 44, 32, 99, 44, 32, 49, 55, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 58, 32, 40, 41, 32, 61, 62, 32, 112, 101, 114, 102, 111, 114, 109, 97, 110, 99, 101, 46, 110, 111, 119, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 74, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 120, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 62, 62, 62, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 49, 52, 55, 52, 56, 51, 54, 52, 56, 32, 60, 32, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 99, 32, 61, 32, 49, 59, 32, 52, 32, 62, 61, 32, 99, 59, 32, 99, 32, 42, 61, 32, 50, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 32, 42, 32, 40, 49, 32, 43, 32, 48, 46, 50, 32, 47, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 77, 97, 116, 104, 46, 109, 105, 110, 40, 100, 44, 32, 97, 32, 43, 32, 49, 48, 48, 54, 54, 51, 50, 57, 54, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 40, 77, 97, 116, 104, 46, 109, 105, 110, 40, 50, 49, 52, 55, 52, 56, 51, 54, 52, 56, 44, 32, 54, 53, 53, 51, 54, 32, 42, 32, 77, 97, 116, 104, 46, 99, 101, 105, 108, 40, 77, 97, 116, 104, 46, 109, 97, 120, 40, 97, 44, 32, 100, 41, 32, 47, 32, 54, 53, 53, 51, 54, 41, 41, 32, 45, 32, 107, 97, 46, 98, 117, 102, 102, 101, 114, 46, 98, 121, 116, 101, 76, 101, 110, 103, 116, 104, 32, 43, 32, 54, 53, 53, 51, 53, 41, 32, 47, 32, 54, 53, 53, 51, 54, 32, 124, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 107, 97, 46, 103, 114, 111, 119, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 97, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 114, 101, 97, 107, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 86, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 87, 98, 40, 41, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 100, 44, 32, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 98, 32, 43, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 68, 91, 97, 32, 43, 32, 52, 32, 42, 32, 101, 32, 62, 62, 32, 50, 93, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 102, 32, 61, 32, 48, 59, 32, 102, 32, 60, 32, 100, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 102, 41, 32, 117, 91, 101, 43, 43, 93, 32, 61, 32, 100, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 91, 101, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 43, 61, 32, 100, 46, 108, 101, 110, 103, 116, 104, 32, 43, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 88, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 87, 98, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 91, 97, 32, 62, 62, 32, 50, 93, 32, 61, 32, 99, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 101, 41, 32, 61, 62, 32, 100, 32, 43, 61, 32, 101, 46, 108, 101, 110, 103, 116, 104, 32, 43, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 91, 98, 32, 62, 62, 32, 50, 93, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 83, 58, 32, 40, 41, 32, 61, 62, 32, 53, 50, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 81, 58, 32, 40, 41, 32, 61, 62, 32, 53, 50, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107, 58, 32, 99, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 58, 32, 100, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 58, 32, 101, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 66, 58, 32, 102, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 97, 58, 32, 103, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 58, 32, 104, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 58, 32, 105, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 58, 32, 106, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 58, 32, 107, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 85, 58, 32, 83, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 76, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 98, 40, 120, 46, 115, 117, 98, 97, 114, 114, 97, 121, 40, 97, 44, 32, 97, 32, 43, 32, 98, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 87, 59, 10, 32, 32, 32, 32, 32, 32, 40, 97, 115, 121, 110, 99, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 97, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 87, 32, 61, 32, 100, 46, 101, 120, 112, 111, 114, 116, 115, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 107, 97, 32, 61, 32, 87, 46, 100, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 97, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 32, 61, 32, 87, 46, 103, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 97, 46, 117, 110, 115, 104, 105, 102, 116, 40, 87, 46, 101, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 70, 45, 45, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 109, 111, 110, 105, 116, 111, 114, 82, 117, 110, 68, 101, 112, 101, 110, 100, 101, 110, 99, 105, 101, 115, 63, 46, 40, 70, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 61, 61, 32, 70, 32, 38, 38, 32, 71, 32, 38, 38, 32, 40, 100, 32, 61, 32, 71, 44, 32, 71, 32, 61, 32, 110, 117, 108, 108, 44, 32, 100, 40, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 87, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 70, 43, 43, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 109, 111, 110, 105, 116, 111, 114, 82, 117, 110, 68, 101, 112, 101, 110, 100, 101, 110, 99, 105, 101, 115, 63, 46, 40, 70, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 123, 32, 97, 58, 32, 108, 99, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 104, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 87, 97, 115, 109, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 104, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 87, 97, 115, 109, 40, 98, 44, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 96, 77, 111, 100, 117, 108, 101, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 87, 97, 115, 109, 32, 99, 97, 108, 108, 98, 97, 99, 107, 32, 102, 97, 105, 108, 101, 100, 32, 119, 105, 116, 104, 32, 101, 114, 114, 111, 114, 58, 32, 36, 123, 100, 125, 96, 41, 44, 32, 98, 97, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 119, 97, 32, 63, 63, 32, 40, 119, 97, 32, 61, 32, 118, 97, 40, 34, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 34, 41, 32, 63, 32, 34, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 34, 32, 58, 32, 104, 46, 108, 111, 99, 97, 116, 101, 70, 105, 108, 101, 32, 63, 32, 104, 46, 108, 111, 99, 97, 116, 101, 70, 105, 108, 101, 40, 34, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 34, 44, 32, 112, 41, 32, 58, 32, 112, 32, 43, 32, 34, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 97, 119, 97, 105, 116, 32, 122, 97, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 40, 99, 46, 105, 110, 115, 116, 97, 110, 99, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 41, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 99, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 97, 99, 32, 61, 32, 87, 46, 102, 97, 41, 40, 97, 41, 44, 32, 84, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 84, 32, 61, 32, 87, 46, 104, 97, 41, 40, 97, 41, 44, 32, 110, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 110, 98, 32, 61, 32, 87, 46, 105, 97, 41, 40, 97, 41, 44, 32, 98, 99, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 40, 98, 99, 32, 61, 32, 87, 46, 106, 97, 41, 40, 97, 44, 32, 98, 41, 44, 32, 88, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 40, 88, 32, 61, 32, 87, 46, 107, 97, 41, 40, 97, 44, 32, 98, 41, 44, 32, 89, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 89, 32, 61, 32, 87, 46, 108, 97, 41, 40, 97, 41, 44, 32, 90, 32, 61, 32, 40, 41, 32, 61, 62, 32, 40, 90, 32, 61, 32, 87, 46, 109, 97, 41, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 106, 105, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 106, 105, 105, 105, 32, 61, 32, 87, 46, 110, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 106, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 106, 105, 105, 32, 61, 32, 87, 46, 111, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 105, 105, 32, 61, 32, 87, 46, 112, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 102, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 102, 105, 105, 32, 61, 32, 87, 46, 113, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 105, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 105, 105, 105, 32, 61, 32, 87, 46, 114, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 32, 61, 32, 87, 46, 115, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 105, 105, 105, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 105, 105, 105, 105, 105, 32, 61, 32, 87, 46, 116, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 105, 102, 102, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 105, 102, 102, 105, 105, 32, 61, 32, 87, 46, 117, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 105, 105, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 105, 105, 105, 105, 32, 61, 32, 87, 46, 118, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 105, 105, 106, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 105, 105, 106, 105, 105, 32, 61, 32, 87, 46, 119, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 106, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 106, 32, 61, 32, 87, 46, 120, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 106, 106, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 44, 32, 108, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 106, 106, 32, 61, 32, 87, 46, 121, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 44, 32, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 105, 106, 106, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 44, 32, 108, 44, 32, 110, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 105, 106, 106, 32, 61, 32, 87, 46, 122, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 44, 32, 108, 44, 32, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 99, 99, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 82, 46, 103, 101, 116, 40, 97, 41, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 100, 32, 33, 61, 61, 32, 100, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 102, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 82, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 103, 32, 33, 61, 61, 32, 103, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 104, 99, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 46, 103, 101, 116, 40, 97, 41, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 100, 32, 33, 61, 61, 32, 100, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 106, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 102, 32, 33, 61, 61, 32, 102, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 100, 99, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 82, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 32, 33, 61, 61, 32, 101, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 99, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 32, 33, 61, 61, 32, 101, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 103, 99, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 46, 103, 101, 116, 40, 97, 41, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 32, 33, 61, 61, 32, 99, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 101, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 82, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 102, 32, 33, 61, 61, 32, 102, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 107, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 107, 32, 33, 61, 61, 32, 107, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 109, 99, 59, 10, 32, 32, 32, 32, 32, 32, 71, 32, 61, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 110, 99, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 99, 32, 124, 124, 32, 111, 99, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 99, 32, 124, 124, 32, 40, 71, 32, 61, 32, 110, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 111, 99, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 97, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 109, 99, 32, 38, 38, 32, 40, 109, 99, 32, 61, 32, 116, 114, 117, 101, 44, 32, 104, 46, 99, 97, 108, 108, 101, 100, 82, 117, 110, 32, 61, 32, 116, 114, 117, 101, 44, 32, 33, 108, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 97, 40, 114, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 97, 40, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 111, 110, 82, 117, 110, 116, 105, 109, 101, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 63, 46, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 104, 46, 112, 111, 115, 116, 82, 117, 110, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 104, 46, 112, 111, 115, 116, 82, 117, 110, 32, 38, 38, 32, 40, 104, 46, 112, 111, 115, 116, 82, 117, 110, 32, 61, 32, 91, 104, 46, 112, 111, 115, 116, 82, 117, 110, 93, 41, 59, 32, 104, 46, 112, 111, 115, 116, 82, 117, 110, 46, 108, 101, 110, 103, 116, 104, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 104, 46, 112, 111, 115, 116, 82, 117, 110, 46, 115, 104, 105, 102, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 97, 46, 117, 110, 115, 104, 105, 102, 116, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 97, 40, 115, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 40, 48, 32, 60, 32, 70, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 104, 46, 112, 114, 101, 82, 117, 110, 41, 32, 102, 111, 114, 32, 40, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 104, 46, 112, 114, 101, 82, 117, 110, 32, 38, 38, 32, 40, 104, 46, 112, 114, 101, 82, 117, 110, 32, 61, 32, 91, 104, 46, 112, 114, 101, 82, 117, 110, 93, 41, 59, 32, 104, 46, 112, 114, 101, 82, 117, 110, 46, 108, 101, 110, 103, 116, 104, 59, 32, 41, 32, 116, 97, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 97, 40, 113, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 60, 32, 70, 32, 124, 124, 32, 40, 104, 46, 115, 101, 116, 83, 116, 97, 116, 117, 115, 32, 63, 32, 40, 104, 46, 115, 101, 116, 83, 116, 97, 116, 117, 115, 40, 34, 82, 117, 110, 110, 105, 110, 103, 46, 46, 46, 34, 41, 44, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 104, 46, 115, 101, 116, 83, 116, 97, 116, 117, 115, 40, 34, 34, 41, 44, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 49, 41, 41, 32, 58, 32, 97, 40, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 104, 46, 112, 114, 101, 73, 110, 105, 116, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 104, 46, 112, 114, 101, 73, 110, 105, 116, 32, 38, 38, 32, 40, 104, 46, 112, 114, 101, 73, 110, 105, 116, 32, 61, 32, 91, 104, 46, 112, 114, 101, 73, 110, 105, 116, 93, 41, 59, 32, 48, 32, 60, 32, 104, 46, 112, 114, 101, 73, 110, 105, 116, 46, 108, 101, 110, 103, 116, 104, 59, 32, 41, 32, 104, 46, 112, 114, 101, 73, 110, 105, 116, 46, 112, 111, 112, 40, 41, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 111, 99, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 109, 111, 100, 117, 108, 101, 82, 116, 110, 32, 61, 32, 99, 97, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 82, 116, 110, 59, 10, 32, 32, 32, 32, 125, 59, 10, 32, 32, 125, 41, 40, 41, 59, 10, 32, 32, 118, 97, 114, 32, 100, 111, 116, 108, 111, 116, 116, 105, 101, 95, 112, 108, 97, 121, 101, 114, 95, 100, 101, 102, 97, 117, 108, 116, 32, 61, 32, 99, 114, 101, 97, 116, 101, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 77, 111, 100, 117, 108, 101, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 99, 111, 114, 101, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 45, 119, 97, 115, 109, 45, 108, 111, 97, 100, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 34, 82, 101, 110, 100, 101, 114, 101, 114, 76, 111, 97, 100, 101, 114, 32, 105, 115, 32, 97, 32, 115, 116, 97, 116, 105, 99, 32, 99, 108, 97, 115, 115, 32, 97, 110, 100, 32, 99, 97, 110, 110, 111, 116, 32, 98, 101, 32, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 100, 46, 34, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 97, 115, 121, 110, 99, 32, 95, 116, 114, 121, 76, 111, 97, 100, 40, 117, 114, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 111, 100, 117, 108, 101, 32, 61, 32, 97, 119, 97, 105, 116, 32, 100, 111, 116, 108, 111, 116, 116, 105, 101, 95, 112, 108, 97, 121, 101, 114, 95, 100, 101, 102, 97, 117, 108, 116, 40, 123, 32, 108, 111, 99, 97, 116, 101, 70, 105, 108, 101, 58, 32, 40, 41, 32, 61, 62, 32, 117, 114, 108, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 84, 114, 105, 101, 115, 32, 116, 111, 32, 108, 111, 97, 100, 32, 116, 104, 101, 32, 87, 65, 83, 77, 32, 109, 111, 100, 117, 108, 101, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 112, 114, 105, 109, 97, 114, 121, 32, 85, 82, 76, 44, 32, 102, 97, 108, 108, 105, 110, 103, 32, 98, 97, 99, 107, 32, 116, 111, 32, 97, 32, 98, 97, 99, 107, 117, 112, 32, 85, 82, 76, 32, 105, 102, 32, 110, 101, 99, 101, 115, 115, 97, 114, 121, 46, 10, 32, 32, 32, 32, 32, 42, 32, 84, 104, 114, 111, 119, 115, 32, 97, 110, 32, 101, 114, 114, 111, 114, 32, 105, 102, 32, 98, 111, 116, 104, 32, 85, 82, 76, 115, 32, 102, 97, 105, 108, 32, 116, 111, 32, 108, 111, 97, 100, 32, 116, 104, 101, 32, 109, 111, 100, 117, 108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 80, 114, 111, 109, 105, 115, 101, 60, 77, 111, 100, 117, 108, 101, 62, 32, 45, 32, 65, 32, 112, 114, 111, 109, 105, 115, 101, 32, 116, 104, 97, 116, 32, 114, 101, 115, 111, 108, 118, 101, 115, 32, 116, 111, 32, 116, 104, 101, 32, 108, 111, 97, 100, 101, 100, 32, 109, 111, 100, 117, 108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 97, 115, 121, 110, 99, 32, 95, 108, 111, 97, 100, 87, 105, 116, 104, 66, 97, 99, 107, 117, 112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 77, 111, 100, 117, 108, 101, 80, 114, 111, 109, 105, 115, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 77, 111, 100, 117, 108, 101, 80, 114, 111, 109, 105, 115, 101, 32, 61, 32, 116, 104, 105, 115, 46, 95, 116, 114, 121, 76, 111, 97, 100, 40, 116, 104, 105, 115, 46, 95, 119, 97, 115, 109, 85, 82, 76, 41, 46, 99, 97, 116, 99, 104, 40, 97, 115, 121, 110, 99, 32, 40, 105, 110, 105, 116, 105, 97, 108, 69, 114, 114, 111, 114, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 97, 99, 107, 117, 112, 85, 114, 108, 32, 61, 32, 96, 104, 116, 116, 112, 115, 58, 47, 47, 117, 110, 112, 107, 103, 46, 99, 111, 109, 47, 36, 123, 80, 65, 67, 75, 65, 71, 69, 95, 78, 65, 77, 69, 125, 64, 36, 123, 80, 65, 67, 75, 65, 71, 69, 95, 86, 69, 82, 83, 73, 79, 78, 125, 47, 100, 105, 115, 116, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 45, 112, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 119, 97, 114, 110, 40, 96, 80, 114, 105, 109, 97, 114, 121, 32, 87, 65, 83, 77, 32, 108, 111, 97, 100, 32, 102, 97, 105, 108, 101, 100, 32, 102, 114, 111, 109, 32, 36, 123, 116, 104, 105, 115, 46, 95, 119, 97, 115, 109, 85, 82, 76, 125, 46, 32, 69, 114, 114, 111, 114, 58, 32, 36, 123, 105, 110, 105, 116, 105, 97, 108, 69, 114, 114, 111, 114, 46, 109, 101, 115, 115, 97, 103, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 119, 97, 114, 110, 40, 96, 65, 116, 116, 101, 109, 112, 116, 105, 110, 103, 32, 116, 111, 32, 108, 111, 97, 100, 32, 87, 65, 83, 77, 32, 102, 114, 111, 109, 32, 98, 97, 99, 107, 117, 112, 32, 85, 82, 76, 58, 32, 36, 123, 98, 97, 99, 107, 117, 112, 85, 114, 108, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 119, 97, 105, 116, 32, 116, 104, 105, 115, 46, 95, 116, 114, 121, 76, 111, 97, 100, 40, 98, 97, 99, 107, 117, 112, 85, 114, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 98, 97, 99, 107, 117, 112, 69, 114, 114, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40, 96, 80, 114, 105, 109, 97, 114, 121, 32, 87, 65, 83, 77, 32, 85, 82, 76, 32, 102, 97, 105, 108, 101, 100, 58, 32, 36, 123, 105, 110, 105, 116, 105, 97, 108, 69, 114, 114, 111, 114, 46, 109, 101, 115, 115, 97, 103, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40, 96, 66, 97, 99, 107, 117, 112, 32, 87, 65, 83, 77, 32, 85, 82, 76, 32, 102, 97, 105, 108, 101, 100, 58, 32, 36, 123, 98, 97, 99, 107, 117, 112, 69, 114, 114, 111, 114, 46, 109, 101, 115, 115, 97, 103, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 34, 87, 65, 83, 77, 32, 108, 111, 97, 100, 105, 110, 103, 32, 102, 97, 105, 108, 101, 100, 32, 102, 114, 111, 109, 32, 97, 108, 108, 32, 115, 111, 117, 114, 99, 101, 115, 46, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 77, 111, 100, 117, 108, 101, 80, 114, 111, 109, 105, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 80, 117, 98, 108, 105, 99, 32, 109, 101, 116, 104, 111, 100, 32, 116, 111, 32, 108, 111, 97, 100, 32, 116, 104, 101, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 32, 109, 111, 100, 117, 108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 32, 85, 116, 105, 108, 105, 122, 101, 115, 32, 97, 32, 112, 114, 105, 109, 97, 114, 121, 32, 97, 110, 100, 32, 98, 97, 99, 107, 117, 112, 32, 85, 82, 76, 32, 102, 111, 114, 32, 114, 111, 98, 117, 115, 116, 110, 101, 115, 115, 46, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 80, 114, 111, 109, 105, 115, 101, 60, 77, 111, 100, 117, 108, 101, 62, 32, 45, 32, 65, 32, 112, 114, 111, 109, 105, 115, 101, 32, 116, 104, 97, 116, 32, 114, 101, 115, 111, 108, 118, 101, 115, 32, 116, 111, 32, 116, 104, 101, 32, 108, 111, 97, 100, 101, 100, 32, 109, 111, 100, 117, 108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 97, 115, 121, 110, 99, 32, 108, 111, 97, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 87, 105, 116, 104, 66, 97, 99, 107, 117, 112, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 83, 101, 116, 115, 32, 97, 32, 110, 101, 119, 32, 85, 82, 76, 32, 102, 111, 114, 32, 116, 104, 101, 32, 87, 65, 83, 77, 32, 102, 105, 108, 101, 32, 97, 110, 100, 32, 105, 110, 118, 97, 108, 105, 100, 97, 116, 101, 115, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 109, 111, 100, 117, 108, 101, 32, 112, 114, 111, 109, 105, 115, 101, 46, 10, 32, 32, 32, 32, 32, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 115, 116, 114, 105, 110, 103, 32, 45, 32, 32, 84, 104, 101, 32, 110, 101, 119, 32, 85, 82, 76, 32, 102, 111, 114, 32, 116, 104, 101, 32, 87, 65, 83, 77, 32, 102, 105, 108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 40, 117, 114, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 117, 114, 108, 32, 61, 61, 61, 32, 116, 104, 105, 115, 46, 95, 119, 97, 115, 109, 85, 82, 76, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 119, 97, 115, 109, 85, 82, 76, 32, 61, 32, 117, 114, 108, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 77, 111, 100, 117, 108, 101, 80, 114, 111, 109, 105, 115, 101, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 47, 47, 32, 101, 115, 108, 105, 110, 116, 45, 100, 105, 115, 97, 98, 108, 101, 45, 110, 101, 120, 116, 45, 108, 105, 110, 101, 32, 64, 116, 121, 112, 101, 115, 99, 114, 105, 112, 116, 45, 101, 115, 108, 105, 110, 116, 47, 110, 97, 109, 105, 110, 103, 45, 99, 111, 110, 118, 101, 110, 116, 105, 111, 110, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 44, 32, 34, 95, 77, 111, 100, 117, 108, 101, 80, 114, 111, 109, 105, 115, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 47, 47, 32, 85, 82, 76, 32, 102, 111, 114, 32, 116, 104, 101, 32, 87, 65, 83, 77, 32, 102, 105, 108, 101, 44, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 101, 100, 32, 117, 115, 105, 110, 103, 32, 112, 97, 99, 107, 97, 103, 101, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 44, 32, 34, 95, 119, 97, 115, 109, 85, 82, 76, 34, 44, 32, 96, 104, 116, 116, 112, 115, 58, 47, 47, 99, 100, 110, 46, 106, 115, 100, 101, 108, 105, 118, 114, 46, 110, 101, 116, 47, 110, 112, 109, 47, 36, 123, 80, 65, 67, 75, 65, 71, 69, 95, 78, 65, 77, 69, 125, 64, 36, 123, 80, 65, 67, 75, 65, 71, 69, 95, 86, 69, 82, 83, 73, 79, 78, 125, 47, 100, 105, 115, 116, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 45, 112, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 96, 41, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 101, 118, 101, 110, 116, 45, 109, 97, 110, 97, 103, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 69, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 34, 44, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 77, 97, 112, 40, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 108, 101, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 103, 101, 116, 40, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 108, 105, 115, 116, 101, 110, 101, 114, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 83, 101, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 115, 101, 116, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 97, 100, 100, 40, 108, 105, 115, 116, 101, 110, 101, 114, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 103, 101, 116, 40, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 108, 105, 115, 116, 101, 110, 101, 114, 115, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 100, 101, 108, 101, 116, 101, 40, 108, 105, 115, 116, 101, 110, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 115, 105, 122, 101, 32, 61, 61, 61, 32, 48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 100, 101, 108, 101, 116, 101, 40, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 100, 101, 108, 101, 116, 101, 40, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 100, 105, 115, 112, 97, 116, 99, 104, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 103, 101, 116, 40, 101, 118, 101, 110, 116, 46, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 63, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 61, 62, 32, 108, 105, 115, 116, 101, 110, 101, 114, 40, 101, 118, 101, 110, 116, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 109, 111, 118, 101, 65, 108, 108, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 99, 108, 101, 97, 114, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 111, 102, 102, 115, 99, 114, 101, 101, 110, 45, 111, 98, 115, 101, 114, 118, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 79, 98, 115, 101, 114, 118, 101, 114, 67, 97, 108, 108, 98, 97, 99, 107, 32, 61, 32, 40, 101, 110, 116, 114, 105, 101, 115, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 110, 116, 114, 105, 101, 115, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 101, 110, 116, 114, 121, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 103, 101, 116, 40, 101, 110, 116, 114, 121, 46, 116, 97, 114, 103, 101, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 110, 116, 114, 121, 46, 105, 115, 73, 110, 116, 101, 114, 115, 101, 99, 116, 105, 110, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 117, 110, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 101, 119, 32, 73, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 79, 98, 115, 101, 114, 118, 101, 114, 40, 105, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 79, 98, 115, 101, 114, 118, 101, 114, 67, 97, 108, 108, 98, 97, 99, 107, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 101, 115, 104, 111, 108, 100, 58, 32, 48, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 44, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 104, 97, 115, 40, 99, 97, 110, 118, 97, 115, 41, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 101, 116, 40, 99, 97, 110, 118, 97, 115, 44, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 63, 46, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 63, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 100, 101, 108, 101, 116, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 105, 122, 101, 32, 61, 61, 61, 32, 48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 63, 46, 100, 105, 115, 99, 111, 110, 110, 101, 99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 44, 32, 34, 95, 111, 98, 115, 101, 114, 118, 101, 114, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 44, 32, 34, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 34, 44, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 77, 97, 112, 40, 41, 41, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 114, 101, 115, 105, 122, 101, 45, 111, 98, 115, 101, 114, 118, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 82, 69, 83, 73, 90, 69, 95, 68, 69, 66, 79, 85, 78, 67, 69, 95, 84, 73, 77, 69, 32, 61, 32, 49, 48, 48, 59, 10, 32, 32, 118, 97, 114, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 105, 122, 101, 72, 97, 110, 100, 108, 101, 114, 32, 61, 32, 40, 101, 110, 116, 114, 105, 101, 115, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 110, 116, 114, 105, 101, 115, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 101, 110, 116, 114, 121, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 108, 101, 109, 101, 110, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 103, 101, 116, 40, 101, 110, 116, 114, 121, 46, 116, 97, 114, 103, 101, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 101, 108, 101, 109, 101, 110, 116, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 91, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 44, 32, 116, 105, 109, 101, 111, 117, 116, 93, 32, 61, 32, 101, 108, 101, 109, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 108, 101, 97, 114, 84, 105, 109, 101, 111, 117, 116, 40, 116, 105, 109, 101, 111, 117, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 110, 101, 119, 84, 105, 109, 101, 111, 117, 116, 32, 61, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 46, 114, 101, 115, 105, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 82, 69, 83, 73, 90, 69, 95, 68, 69, 66, 79, 85, 78, 67, 69, 95, 84, 73, 77, 69, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 101, 116, 40, 101, 110, 116, 114, 121, 46, 116, 97, 114, 103, 101, 116, 44, 32, 91, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 44, 32, 110, 101, 119, 84, 105, 109, 101, 111, 117, 116, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 101, 119, 32, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 114, 101, 115, 105, 122, 101, 72, 97, 110, 100, 108, 101, 114, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 44, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 104, 97, 115, 40, 99, 97, 110, 118, 97, 115, 41, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 101, 116, 40, 99, 97, 110, 118, 97, 115, 44, 32, 91, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 44, 32, 48, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 63, 46, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 108, 101, 109, 101, 110, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 103, 101, 116, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 105, 109, 101, 111, 117, 116, 73, 100, 32, 61, 32, 101, 108, 101, 109, 101, 110, 116, 91, 49, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 105, 109, 101, 111, 117, 116, 73, 100, 41, 32, 99, 108, 101, 97, 114, 84, 105, 109, 101, 111, 117, 116, 40, 116, 105, 109, 101, 111, 117, 116, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 63, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 100, 101, 108, 101, 116, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 105, 122, 101, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 46, 100, 105, 115, 99, 111, 110, 110, 101, 99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 44, 32, 34, 95, 111, 98, 115, 101, 114, 118, 101, 114, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 44, 32, 34, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 34, 44, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 77, 97, 112, 40, 41, 41, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 117, 116, 105, 108, 115, 46, 116, 115, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 72, 101, 120, 67, 111, 108, 111, 114, 40, 99, 111, 108, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 47, 94, 35, 40, 91, 92, 100, 97, 45, 102, 93, 123, 54, 125, 124, 91, 92, 100, 97, 45, 102, 93, 123, 56, 125, 41, 36, 47, 105, 117, 46, 116, 101, 115, 116, 40, 99, 111, 108, 111, 114, 41, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 104, 101, 120, 83, 116, 114, 105, 110, 103, 84, 111, 82, 71, 66, 65, 73, 110, 116, 40, 99, 111, 108, 111, 114, 72, 101, 120, 41, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 72, 101, 120, 67, 111, 108, 111, 114, 40, 99, 111, 108, 111, 114, 72, 101, 120, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 108, 101, 116, 32, 104, 101, 120, 32, 61, 32, 99, 111, 108, 111, 114, 72, 101, 120, 46, 114, 101, 112, 108, 97, 99, 101, 40, 34, 35, 34, 44, 32, 34, 34, 41, 59, 10, 32, 32, 32, 32, 104, 101, 120, 32, 61, 32, 104, 101, 120, 46, 108, 101, 110, 103, 116, 104, 32, 61, 61, 61, 32, 54, 32, 63, 32, 96, 36, 123, 104, 101, 120, 125, 102, 102, 96, 32, 58, 32, 104, 101, 120, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 112, 97, 114, 115, 101, 73, 110, 116, 40, 104, 101, 120, 44, 32, 49, 54, 41, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 68, 111, 116, 76, 111, 116, 116, 105, 101, 40, 102, 105, 108, 101, 68, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 102, 105, 108, 101, 68, 97, 116, 97, 46, 98, 121, 116, 101, 76, 101, 110, 103, 116, 104, 32, 60, 32, 52, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 102, 105, 108, 101, 83, 105, 103, 110, 97, 116, 117, 114, 101, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 102, 105, 108, 101, 68, 97, 116, 97, 46, 115, 108, 105, 99, 101, 40, 48, 44, 32, 90, 73, 80, 95, 83, 73, 71, 78, 65, 84, 85, 82, 69, 46, 98, 121, 116, 101, 76, 101, 110, 103, 116, 104, 41, 41, 59, 10, 32, 32, 32, 32, 102, 111, 114, 32, 40, 108, 101, 116, 32, 105, 32, 61, 32, 48, 59, 32, 105, 32, 60, 32, 90, 73, 80, 95, 83, 73, 71, 78, 65, 84, 85, 82, 69, 46, 108, 101, 110, 103, 116, 104, 59, 32, 105, 32, 43, 61, 32, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 90, 73, 80, 95, 83, 73, 71, 78, 65, 84, 85, 82, 69, 91, 105, 93, 32, 33, 61, 61, 32, 102, 105, 108, 101, 83, 105, 103, 110, 97, 116, 117, 114, 101, 91, 105, 93, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 114, 117, 101, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 76, 111, 116, 116, 105, 101, 74, 83, 79, 78, 40, 106, 115, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 76, 79, 84, 84, 73, 69, 95, 74, 83, 79, 78, 95, 77, 65, 78, 68, 65, 84, 79, 82, 89, 95, 70, 73, 69, 76, 68, 83, 46, 101, 118, 101, 114, 121, 40, 40, 102, 105, 101, 108, 100, 41, 32, 61, 62, 32, 79, 98, 106, 101, 99, 116, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 46, 99, 97, 108, 108, 40, 106, 115, 111, 110, 44, 32, 102, 105, 101, 108, 100, 41, 41, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 76, 111, 116, 116, 105, 101, 40, 102, 105, 108, 101, 68, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111, 102, 32, 102, 105, 108, 101, 68, 97, 116, 97, 32, 61, 61, 61, 32, 34, 115, 116, 114, 105, 110, 103, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 115, 76, 111, 116, 116, 105, 101, 74, 83, 79, 78, 40, 74, 83, 79, 78, 46, 112, 97, 114, 115, 101, 40, 102, 105, 108, 101, 68, 97, 116, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 95, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 115, 76, 111, 116, 116, 105, 101, 74, 83, 79, 78, 40, 102, 105, 108, 101, 68, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 103, 101, 116, 68, 101, 102, 97, 117, 108, 116, 68, 80, 82, 40, 41, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 112, 114, 32, 61, 32, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 63, 32, 119, 105, 110, 100, 111, 119, 46, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 58, 32, 49, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 49, 32, 43, 32, 40, 100, 112, 114, 32, 45, 32, 49, 41, 32, 42, 32, 68, 69, 70, 65, 85, 76, 84, 95, 68, 80, 82, 95, 70, 65, 67, 84, 79, 82, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 69, 108, 101, 109, 101, 110, 116, 73, 110, 86, 105, 101, 119, 112, 111, 114, 116, 40, 101, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 99, 116, 32, 61, 32, 101, 108, 101, 109, 101, 110, 116, 46, 103, 101, 116, 66, 111, 117, 110, 100, 105, 110, 103, 67, 108, 105, 101, 110, 116, 82, 101, 99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 118, 105, 101, 119, 112, 111, 114, 116, 72, 101, 105, 103, 104, 116, 32, 61, 32, 119, 105, 110, 100, 111, 119, 46, 105, 110, 110, 101, 114, 72, 101, 105, 103, 104, 116, 32, 124, 124, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 100, 111, 99, 117, 109, 101, 110, 116, 69, 108, 101, 109, 101, 110, 116, 46, 99, 108, 105, 101, 110, 116, 72, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 118, 105, 101, 119, 112, 111, 114, 116, 87, 105, 100, 116, 104, 32, 61, 32, 119, 105, 110, 100, 111, 119, 46, 105, 110, 110, 101, 114, 87, 105, 100, 116, 104, 32, 124, 124, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 100, 111, 99, 117, 109, 101, 110, 116, 69, 108, 101, 109, 101, 110, 116, 46, 99, 108, 105, 101, 110, 116, 87, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 33, 40, 114, 101, 99, 116, 46, 98, 111, 116, 116, 111, 109, 32, 60, 32, 48, 32, 124, 124, 32, 114, 101, 99, 116, 46, 116, 111, 112, 32, 62, 32, 118, 105, 101, 119, 112, 111, 114, 116, 72, 101, 105, 103, 104, 116, 32, 124, 124, 32, 114, 101, 99, 116, 46, 114, 105, 103, 104, 116, 32, 60, 32, 48, 32, 124, 124, 32, 114, 101, 99, 116, 46, 108, 101, 102, 116, 32, 62, 32, 118, 105, 101, 119, 112, 111, 114, 116, 87, 105, 100, 116, 104, 41, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 97, 110, 118, 97, 115, 32, 61, 32, 101, 118, 101, 110, 116, 46, 116, 97, 114, 103, 101, 116, 59, 10, 32, 32, 32, 32, 105, 102, 32, 40, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 99, 116, 32, 61, 32, 99, 97, 110, 118, 97, 115, 46, 103, 101, 116, 66, 111, 117, 110, 100, 105, 110, 103, 67, 108, 105, 101, 110, 116, 82, 101, 99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 114, 101, 99, 116, 46, 119, 105, 100, 116, 104, 32, 61, 61, 61, 32, 48, 32, 124, 124, 32, 114, 101, 99, 116, 46, 104, 101, 105, 103, 104, 116, 32, 61, 61, 61, 32, 48, 32, 124, 124, 32, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 61, 61, 61, 32, 48, 32, 124, 124, 32, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 61, 61, 61, 32, 48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 99, 97, 108, 101, 88, 32, 61, 32, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 47, 32, 114, 101, 99, 116, 46, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 99, 97, 108, 101, 89, 32, 61, 32, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 47, 32, 114, 101, 99, 116, 46, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 40, 101, 118, 101, 110, 116, 46, 99, 108, 105, 101, 110, 116, 88, 32, 45, 32, 114, 101, 99, 116, 46, 108, 101, 102, 116, 41, 32, 42, 32, 115, 99, 97, 108, 101, 88, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 40, 101, 118, 101, 110, 116, 46, 99, 108, 105, 101, 110, 116, 89, 32, 45, 32, 114, 101, 99, 116, 46, 116, 111, 112, 41, 32, 42, 32, 115, 99, 97, 108, 101, 89, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 78, 117, 109, 98, 101, 114, 46, 105, 115, 70, 105, 110, 105, 116, 101, 40, 120, 41, 32, 124, 124, 32, 33, 78, 117, 109, 98, 101, 114, 46, 105, 115, 70, 105, 110, 105, 116, 101, 40, 121, 41, 32, 124, 124, 32, 78, 117, 109, 98, 101, 114, 46, 105, 115, 78, 97, 78, 40, 120, 41, 32, 124, 124, 32, 78, 117, 109, 98, 101, 114, 46, 105, 115, 78, 97, 78, 40, 121, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 32, 120, 44, 32, 121, 32, 125, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 104, 97, 110, 100, 108, 101, 79, 112, 101, 110, 85, 114, 108, 40, 109, 101, 115, 115, 97, 103, 101, 41, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 110, 116, 101, 110, 116, 32, 61, 32, 109, 101, 115, 115, 97, 103, 101, 46, 114, 101, 112, 108, 97, 99, 101, 40, 34, 79, 112, 101, 110, 85, 114, 108, 58, 32, 34, 44, 32, 34, 34, 41, 59, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 97, 114, 103, 101, 116, 83, 101, 112, 97, 114, 97, 116, 111, 114, 73, 110, 100, 101, 120, 32, 61, 32, 99, 111, 110, 116, 101, 110, 116, 46, 105, 110, 100, 101, 120, 79, 102, 40, 34, 32, 124, 32, 84, 97, 114, 103, 101, 116, 58, 32, 34, 41, 59, 10, 32, 32, 32, 32, 108, 101, 116, 32, 117, 114, 108, 84, 111, 79, 112, 101, 110, 59, 10, 32, 32, 32, 32, 108, 101, 116, 32, 116, 97, 114, 103, 101, 116, 59, 10, 32, 32, 32, 32, 105, 102, 32, 40, 116, 97, 114, 103, 101, 116, 83, 101, 112, 97, 114, 97, 116, 111, 114, 73, 110, 100, 101, 120, 32, 61, 61, 61, 32, 45, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 117, 114, 108, 84, 111, 79, 112, 101, 110, 32, 61, 32, 99, 111, 110, 116, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 116, 97, 114, 103, 101, 116, 32, 61, 32, 34, 95, 98, 108, 97, 110, 107, 34, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 117, 114, 108, 84, 111, 79, 112, 101, 110, 32, 61, 32, 99, 111, 110, 116, 101, 110, 116, 46, 115, 117, 98, 115, 116, 114, 105, 110, 103, 40, 48, 44, 32, 116, 97, 114, 103, 101, 116, 83, 101, 112, 97, 114, 97, 116, 111, 114, 73, 110, 100, 101, 120, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 97, 114, 103, 101, 116, 32, 61, 32, 99, 111, 110, 116, 101, 110, 116, 46, 115, 117, 98, 115, 116, 114, 105, 110, 103, 40, 116, 97, 114, 103, 101, 116, 83, 101, 112, 97, 114, 97, 116, 111, 114, 73, 110, 100, 101, 120, 32, 43, 32, 34, 32, 124, 32, 84, 97, 114, 103, 101, 116, 58, 32, 34, 46, 108, 101, 110, 103, 116, 104, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 119, 105, 110, 100, 111, 119, 46, 111, 112, 101, 110, 40, 117, 114, 108, 84, 111, 79, 112, 101, 110, 44, 32, 116, 97, 114, 103, 101, 116, 41, 59, 10, 32, 32, 125, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 77, 111, 100, 101, 32, 61, 32, 40, 109, 111, 100, 101, 44, 32, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 34, 114, 101, 118, 101, 114, 115, 101, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 77, 111, 100, 101, 46, 82, 101, 118, 101, 114, 115, 101, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 34, 98, 111, 117, 110, 99, 101, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 77, 111, 100, 101, 46, 66, 111, 117, 110, 99, 101, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 34, 114, 101, 118, 101, 114, 115, 101, 45, 98, 111, 117, 110, 99, 101, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 77, 111, 100, 101, 46, 82, 101, 118, 101, 114, 115, 101, 66, 111, 117, 110, 99, 101, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 77, 111, 100, 101, 46, 70, 111, 114, 119, 97, 114, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 70, 105, 116, 32, 61, 32, 40, 102, 105, 116, 44, 32, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32, 34, 99, 111, 110, 116, 97, 105, 110, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 67, 111, 110, 116, 97, 105, 110, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32, 34, 99, 111, 118, 101, 114, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 67, 111, 118, 101, 114, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32, 34, 102, 105, 108, 108, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 70, 105, 108, 108, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32, 34, 102, 105, 116, 45, 104, 101, 105, 103, 104, 116, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 70, 105, 116, 72, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32, 34, 102, 105, 116, 45, 119, 105, 100, 116, 104, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 70, 105, 116, 87, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 78, 111, 110, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 65, 108, 105, 103, 110, 32, 61, 32, 40, 97, 108, 105, 103, 110, 44, 32, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 114, 101, 65, 108, 105, 103, 110, 32, 61, 32, 110, 101, 119, 32, 109, 111, 100, 117, 108, 101, 46, 86, 101, 99, 116, 111, 114, 70, 108, 111, 97, 116, 40, 41, 59, 10, 32, 32, 32, 32, 99, 111, 114, 101, 65, 108, 105, 103, 110, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 97, 108, 105, 103, 110, 91, 48, 93, 41, 59, 10, 32, 32, 32, 32, 99, 111, 114, 101, 65, 108, 105, 103, 110, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 97, 108, 105, 103, 110, 91, 49, 93, 41, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 111, 114, 101, 65, 108, 105, 103, 110, 59, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 83, 101, 103, 109, 101, 110, 116, 32, 61, 32, 40, 115, 101, 103, 109, 101, 110, 116, 44, 32, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110, 116, 32, 61, 32, 110, 101, 119, 32, 109, 111, 100, 117, 108, 101, 46, 86, 101, 99, 116, 111, 114, 70, 108, 111, 97, 116, 40, 41, 59, 10, 32, 32, 32, 32, 105, 102, 32, 40, 115, 101, 103, 109, 101, 110, 116, 46, 108, 101, 110, 103, 116, 104, 32, 33, 61, 61, 32, 50, 41, 32, 114, 101, 116, 117, 114, 110, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110, 116, 59, 10, 32, 32, 32, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110, 116, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 115, 101, 103, 109, 101, 110, 116, 91, 48, 93, 41, 59, 10, 32, 32, 32, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110, 116, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 115, 101, 103, 109, 101, 110, 116, 91, 49, 93, 41, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110, 116, 59, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 76, 97, 121, 111, 117, 116, 32, 61, 32, 40, 108, 97, 121, 111, 117, 116, 44, 32, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 33, 108, 97, 121, 111, 117, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 99, 114, 101, 97, 116, 101, 68, 101, 102, 97, 117, 108, 116, 76, 97, 121, 111, 117, 116, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 97, 108, 105, 103, 110, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 65, 108, 105, 103, 110, 40, 108, 97, 121, 111, 117, 116, 46, 97, 108, 105, 103, 110, 32, 63, 63, 32, 91, 48, 46, 53, 44, 32, 48, 46, 53, 93, 44, 32, 109, 111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 102, 105, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 70, 105, 116, 40, 108, 97, 121, 111, 117, 116, 46, 102, 105, 116, 32, 63, 63, 32, 34, 99, 111, 110, 116, 97, 105, 110, 34, 44, 32, 109, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 125, 59, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 32, 61, 32, 99, 108, 97, 115, 115, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 99, 111, 110, 102, 105, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 99, 97, 110, 118, 97, 115, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 99, 111, 110, 116, 101, 120, 116, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 34, 44, 32, 34, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 111, 110, 102, 105, 103, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 105, 115, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 82, 117, 110, 110, 105, 110, 103, 34, 44, 32, 102, 97, 108, 115, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 34, 44, 32, 123, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 105, 115, 70, 114, 111, 122, 101, 110, 34, 44, 32, 102, 97, 108, 115, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 47, 47, 32, 66, 111, 117, 110, 100, 32, 101, 118, 101, 110, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 102, 111, 114, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 98, 111, 117, 110, 100, 79, 110, 67, 108, 105, 99, 107, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 85, 112, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 99, 97, 110, 118, 97, 115, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 32, 61, 32, 110, 101, 119, 32, 69, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 32, 61, 32, 110, 101, 119, 32, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 99, 111, 110, 102, 105, 103, 46, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 58, 32, 99, 111, 110, 102, 105, 103, 46, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 63, 46, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32, 103, 101, 116, 68, 101, 102, 97, 117, 108, 116, 68, 80, 82, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 47, 47, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 32, 105, 115, 32, 116, 114, 117, 101, 32, 98, 121, 32, 100, 101, 102, 97, 117, 108, 116, 32, 116, 111, 32, 112, 114, 101, 118, 101, 110, 116, 32, 117, 110, 110, 101, 99, 101, 115, 115, 97, 114, 121, 32, 114, 101, 110, 100, 101, 114, 105, 110, 103, 32, 119, 104, 101, 110, 32, 116, 104, 101, 32, 99, 97, 110, 118, 97, 115, 32, 105, 115, 32, 111, 102, 102, 115, 99, 114, 101, 101, 110, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 58, 32, 99, 111, 110, 102, 105, 103, 46, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 63, 46, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 32, 63, 63, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 46, 108, 111, 97, 100, 40, 41, 46, 116, 104, 101, 110, 40, 40, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 32, 109, 111, 100, 117, 108, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 101, 119, 32, 109, 111, 100, 117, 108, 101, 46, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 76, 111, 97, 100, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 76, 111, 97, 100, 69, 114, 114, 111, 114, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 114, 114, 111, 114, 58, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 34, 102, 97, 105, 108, 101, 100, 32, 116, 111, 32, 108, 111, 97, 100, 34, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 80, 108, 97, 121, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 112, 108, 97, 121, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 80, 97, 117, 115, 101, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 112, 97, 117, 115, 101, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 83, 116, 111, 112, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 111, 112, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 76, 111, 111, 112, 40, 40, 108, 111, 111, 112, 67, 111, 117, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 67, 111, 117, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 67, 111, 109, 112, 108, 101, 116, 101, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 99, 111, 109, 112, 108, 101, 116, 101, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 70, 114, 97, 109, 101, 40, 40, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 102, 114, 97, 109, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 82, 101, 110, 100, 101, 114, 40, 40, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 114, 101, 110, 100, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 32, 110, 101, 119, 32, 109, 111, 100, 117, 108, 101, 46, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 58, 32, 99, 111, 110, 102, 105, 103, 46, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 32, 63, 63, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 101, 109, 101, 73, 100, 58, 32, 99, 111, 110, 102, 105, 103, 46, 116, 104, 101, 109, 101, 73, 100, 32, 63, 63, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 47, 47, 32, 70, 73, 88, 77, 69, 58, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 105, 100, 32, 105, 115, 32, 110, 111, 116, 32, 117, 115, 101, 102, 117, 108, 44, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 108, 111, 97, 100, 32, 97, 110, 100, 32, 115, 116, 97, 114, 116, 32, 111, 102, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 114, 101, 113, 117, 105, 114, 101, 32, 116, 111, 32, 98, 101, 32, 99, 111, 110, 116, 114, 111, 108, 108, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 102, 114, 97, 109, 101, 119, 111, 114, 107, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 117, 116, 111, 112, 108, 97, 121, 58, 32, 99, 111, 110, 102, 105, 103, 46, 97, 117, 116, 111, 112, 108, 97, 121, 32, 63, 63, 32, 102, 97, 108, 115, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 58, 32, 48, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 58, 32, 99, 111, 110, 102, 105, 103, 46, 108, 111, 111, 112, 32, 63, 63, 32, 102, 97, 108, 115, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 67, 111, 117, 110, 116, 58, 32, 99, 111, 110, 102, 105, 103, 46, 108, 111, 111, 112, 67, 111, 117, 110, 116, 32, 63, 63, 32, 48, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 111, 100, 101, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 77, 111, 100, 101, 40, 99, 111, 110, 102, 105, 103, 46, 109, 111, 100, 101, 32, 63, 63, 32, 34, 102, 111, 114, 119, 97, 114, 100, 34, 44, 32, 109, 111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101, 110, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 83, 101, 103, 109, 101, 110, 116, 40, 99, 111, 110, 102, 105, 103, 46, 115, 101, 103, 109, 101, 110, 116, 32, 63, 63, 32, 91, 93, 44, 32, 109, 111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 112, 101, 101, 100, 58, 32, 99, 111, 110, 102, 105, 103, 46, 115, 112, 101, 101, 100, 32, 63, 63, 32, 49, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 58, 32, 99, 111, 110, 102, 105, 103, 46, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 32, 63, 63, 32, 116, 114, 117, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 58, 32, 99, 111, 110, 102, 105, 103, 46, 109, 97, 114, 107, 101, 114, 32, 63, 63, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 121, 111, 117, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 76, 97, 121, 111, 117, 116, 40, 99, 111, 110, 102, 105, 103, 46, 108, 97, 121, 111, 117, 116, 44, 32, 109, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 32, 63, 63, 32, 34, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 111, 110, 102, 105, 103, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 111, 110, 102, 105, 103, 32, 63, 63, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 117, 98, 115, 99, 114, 105, 98, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 114, 101, 97, 100, 121, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 68, 97, 116, 97, 40, 99, 111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 83, 114, 99, 40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 99, 111, 110, 102, 105, 103, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 41, 46, 99, 97, 116, 99, 104, 40, 40, 101, 114, 114, 111, 114, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 114, 114, 111, 114, 58, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 70, 97, 105, 108, 101, 100, 32, 116, 111, 32, 108, 111, 97, 100, 32, 119, 97, 115, 109, 32, 109, 111, 100, 117, 108, 101, 58, 32, 36, 123, 101, 114, 114, 111, 114, 125, 96, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 109, 101, 115, 115, 97, 103, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40, 109, 101, 115, 115, 97, 103, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 69, 114, 114, 111, 114, 34, 44, 32, 101, 114, 114, 111, 114, 58, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 109, 101, 115, 115, 97, 103, 101, 41, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 97, 115, 121, 110, 99, 32, 95, 102, 101, 116, 99, 104, 68, 97, 116, 97, 40, 115, 114, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 97, 119, 97, 105, 116, 32, 102, 101, 116, 99, 104, 40, 115, 114, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 114, 101, 115, 112, 111, 110, 115, 101, 46, 111, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 70, 97, 105, 108, 101, 100, 32, 116, 111, 32, 102, 101, 116, 99, 104, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 100, 97, 116, 97, 32, 102, 114, 111, 109, 32, 85, 82, 76, 58, 32, 36, 123, 115, 114, 99, 125, 46, 32, 36, 123, 114, 101, 115, 112, 111, 110, 115, 101, 46, 115, 116, 97, 116, 117, 115, 125, 58, 32, 36, 123, 114, 101, 115, 112, 111, 110, 115, 101, 46, 115, 116, 97, 116, 117, 115, 84, 101, 120, 116, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 97, 116, 97, 32, 61, 32, 97, 119, 97, 105, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 46, 97, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 105, 115, 68, 111, 116, 76, 111, 116, 116, 105, 101, 40, 100, 97, 116, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 100, 97, 116, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 101, 119, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 40, 41, 46, 100, 101, 99, 111, 100, 101, 40, 100, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 108, 111, 97, 100, 70, 114, 111, 109, 68, 97, 116, 97, 40, 100, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 108, 101, 116, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111, 102, 32, 100, 97, 116, 97, 32, 61, 61, 61, 32, 34, 115, 116, 114, 105, 110, 103, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 76, 111, 116, 116, 105, 101, 40, 100, 97, 116, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 73, 110, 118, 97, 108, 105, 100, 32, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 32, 115, 116, 114, 105, 110, 103, 58, 32, 84, 104, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 115, 116, 114, 105, 110, 103, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 99, 111, 110, 102, 111, 114, 109, 32, 116, 111, 32, 116, 104, 101, 32, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 32, 102, 111, 114, 109, 97, 116, 46, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 68, 97, 116, 97, 40, 100, 97, 116, 97, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 100, 97, 116, 97, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 68, 111, 116, 76, 111, 116, 116, 105, 101, 40, 100, 97, 116, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 73, 110, 118, 97, 108, 105, 100, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 58, 32, 84, 104, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 99, 111, 110, 102, 111, 114, 109, 32, 116, 111, 32, 116, 104, 101, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 32, 102, 111, 114, 109, 97, 116, 46, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 97, 100, 68, 111, 116, 76, 111, 116, 116, 105, 101, 68, 97, 116, 97, 40, 100, 97, 116, 97, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111, 102, 32, 100, 97, 116, 97, 32, 61, 61, 61, 32, 34, 111, 98, 106, 101, 99, 116, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 76, 111, 116, 116, 105, 101, 40, 100, 97, 116, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 73, 110, 118, 97, 108, 105, 100, 32, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 32, 111, 98, 106, 101, 99, 116, 58, 32, 84, 104, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 111, 98, 106, 101, 99, 116, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 99, 111, 110, 102, 111, 114, 109, 32, 116, 111, 32, 116, 104, 101, 32, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 32, 102, 111, 114, 109, 97, 116, 46, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 68, 97, 116, 97, 40, 74, 83, 79, 78, 46, 115, 116, 114, 105, 110, 103, 105, 102, 121, 40, 100, 97, 116, 97, 41, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 85, 110, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 100, 97, 116, 97, 32, 116, 121, 112, 101, 32, 102, 111, 114, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 100, 97, 116, 97, 46, 32, 69, 120, 112, 101, 99, 116, 101, 100, 58, 32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 32, 115, 116, 114, 105, 110, 103, 32, 40, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 32, 40, 100, 111, 116, 76, 111, 116, 116, 105, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 32, 111, 98, 106, 101, 99, 116, 32, 40, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 41, 46, 32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 101, 99, 101, 105, 118, 101, 100, 58, 32, 36, 123, 116, 121, 112, 101, 111, 102, 32, 100, 97, 116, 97, 125, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 113, 117, 97, 108, 105, 116, 121, 32, 33, 61, 61, 32, 118, 111, 105, 100, 32, 48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 81, 117, 97, 108, 105, 116, 121, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 113, 117, 97, 108, 105, 116, 121, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 114, 101, 115, 105, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 102, 114, 97, 109, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 58, 32, 116, 104, 105, 115, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 109, 76, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 111, 97, 100, 40, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 115, 109, 76, 111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 109, 83, 116, 97, 114, 116, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 114, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 115, 109, 83, 116, 97, 114, 116, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 114, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 114, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 46, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 69, 108, 101, 109, 101, 110, 116, 73, 110, 86, 105, 101, 119, 112, 111, 114, 116, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 97, 117, 116, 111, 82, 101, 115, 105, 122, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 108, 111, 97, 100, 70, 114, 111, 109, 83, 114, 99, 40, 115, 114, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 102, 101, 116, 99, 104, 68, 97, 116, 97, 40, 115, 114, 99, 41, 46, 116, 104, 101, 110, 40, 40, 100, 97, 116, 97, 41, 32, 61, 62, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 68, 97, 116, 97, 40, 100, 97, 116, 97, 41, 41, 46, 99, 97, 116, 99, 104, 40, 40, 101, 114, 114, 111, 114, 41, 32, 61, 62, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 96, 70, 97, 105, 108, 101, 100, 32, 116, 111, 32, 108, 111, 97, 100, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 100, 97, 116, 97, 32, 102, 114, 111, 109, 32, 85, 82, 76, 58, 32, 36, 123, 115, 114, 99, 125, 46, 32, 36, 123, 101, 114, 114, 111, 114, 125, 96, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 98, 117, 102, 102, 101, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 98, 117, 102, 102, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 97, 99, 116, 105, 118, 101, 84, 104, 101, 109, 101, 73, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 97, 99, 116, 105, 118, 101, 84, 104, 101, 109, 101, 73, 100, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 108, 97, 121, 111, 117, 116, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 97, 121, 111, 117, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 108, 97, 121, 111, 117, 116, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 97, 121, 111, 117, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 108, 105, 103, 110, 58, 32, 91, 108, 97, 121, 111, 117, 116, 46, 97, 108, 105, 103, 110, 46, 103, 101, 116, 40, 48, 41, 44, 32, 108, 97, 121, 111, 117, 116, 46, 97, 108, 105, 103, 110, 46, 103, 101, 116, 40, 49, 41, 93, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 105, 116, 58, 32, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 108, 97, 121, 111, 117, 116, 46, 102, 105, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 63, 46, 70, 105, 116, 46, 67, 111, 110, 116, 97, 105, 110, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 99, 111, 110, 116, 97, 105, 110, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 63, 46, 70, 105, 116, 46, 67, 111, 118, 101, 114, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 99, 111, 118, 101, 114, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 63, 46, 70, 105, 116, 46, 70, 105, 108, 108, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 102, 105, 108, 108, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 63, 46, 70, 105, 116, 46, 70, 105, 116, 72, 101, 105, 103, 104, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 102, 105, 116, 45, 104, 101, 105, 103, 104, 116, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 63, 46, 70, 105, 116, 46, 70, 105, 116, 87, 105, 100, 116, 104, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 102, 105, 116, 45, 119, 105, 100, 116, 104, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 63, 46, 70, 105, 116, 46, 78, 111, 110, 101, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 110, 111, 110, 101, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 99, 111, 110, 116, 97, 105, 110, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 40, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 109, 97, 114, 107, 101, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114, 107, 101, 114, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 109, 97, 114, 107, 101, 114, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 97, 114, 107, 101, 114, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 109, 97, 110, 105, 102, 101, 115, 116, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 110, 105, 102, 101, 115, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 109, 97, 110, 105, 102, 101, 115, 116, 83, 116, 114, 105, 110, 103, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 33, 109, 97, 110, 105, 102, 101, 115, 116, 41, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 110, 105, 102, 101, 115, 116, 74, 115, 111, 110, 32, 61, 32, 74, 83, 79, 78, 46, 112, 97, 114, 115, 101, 40, 109, 97, 110, 105, 102, 101, 115, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 79, 98, 106, 101, 99, 116, 46, 107, 101, 121, 115, 40, 109, 97, 110, 105, 102, 101, 115, 116, 74, 115, 111, 110, 41, 46, 108, 101, 110, 103, 116, 104, 32, 61, 61, 61, 32, 48, 41, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 97, 110, 105, 102, 101, 115, 116, 74, 115, 111, 110, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 95, 101, 114, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 115, 101, 103, 109, 101, 110, 116, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 101, 103, 109, 101, 110, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 115, 101, 103, 109, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 115, 101, 103, 109, 101, 110, 116, 32, 38, 38, 32, 115, 101, 103, 109, 101, 110, 116, 46, 115, 105, 122, 101, 40, 41, 32, 61, 61, 61, 32, 50, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 115, 101, 103, 109, 101, 110, 116, 46, 103, 101, 116, 40, 48, 41, 44, 32, 115, 101, 103, 109, 101, 110, 116, 46, 103, 101, 116, 40, 49, 41, 93, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 108, 111, 111, 112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 109, 111, 100, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 111, 100, 101, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 109, 111, 100, 101, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 63, 46, 77, 111, 100, 101, 46, 82, 101, 118, 101, 114, 115, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 114, 101, 118, 101, 114, 115, 101, 34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 63, 46, 77, 111, 100, 101, 46, 66, 111, 117, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 98, 111, 117, 110, 99, 101, 34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 63, 46, 77, 111, 100, 101, 46, 82, 101, 118, 101, 114, 115, 101, 66, 111, 117, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 114, 101, 118, 101, 114, 115, 101, 45, 98, 111, 117, 110, 99, 101, 34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 102, 111, 114, 119, 97, 114, 100, 34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 70, 114, 111, 122, 101, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 82, 117, 110, 110, 105, 110, 103, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 105, 115, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 82, 117, 110, 110, 105, 110, 103, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 32, 63, 63, 32, 34, 34, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 97, 117, 116, 111, 112, 108, 97, 121, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 97, 117, 116, 111, 112, 108, 97, 121, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 115, 112, 101, 101, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 115, 112, 101, 101, 100, 32, 63, 63, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 82, 101, 97, 100, 121, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 33, 61, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 76, 111, 97, 100, 101, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 105, 115, 76, 111, 97, 100, 101, 100, 40, 41, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 80, 97, 117, 115, 101, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 105, 115, 80, 97, 117, 115, 101, 100, 40, 41, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 83, 116, 111, 112, 112, 101, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 105, 115, 83, 116, 111, 112, 112, 101, 100, 40, 41, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 77, 97, 116, 104, 46, 114, 111, 117, 110, 100, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 40, 41, 32, 42, 32, 49, 48, 48, 41, 32, 47, 32, 49, 48, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 108, 111, 111, 112, 67, 111, 117, 110, 116, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 108, 111, 111, 112, 67, 111, 117, 110, 116, 40, 41, 32, 63, 63, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 116, 111, 116, 97, 108, 70, 114, 97, 109, 101, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 116, 111, 116, 97, 108, 70, 114, 97, 109, 101, 115, 40, 41, 32, 63, 63, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 100, 117, 114, 97, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 100, 117, 114, 97, 116, 105, 111, 110, 40, 41, 32, 63, 63, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 115, 101, 103, 109, 101, 110, 116, 68, 117, 114, 97, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 101, 103, 109, 101, 110, 116, 68, 117, 114, 97, 116, 105, 111, 110, 40, 41, 32, 63, 63, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 99, 97, 110, 118, 97, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 108, 111, 97, 100, 40, 99, 111, 110, 102, 105, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 58, 32, 99, 111, 110, 102, 105, 103, 46, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 32, 63, 63, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 101, 109, 101, 73, 100, 58, 32, 99, 111, 110, 102, 105, 103, 46, 116, 104, 101, 109, 101, 73, 100, 32, 63, 63, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 117, 116, 111, 112, 108, 97, 121, 58, 32, 99, 111, 110, 102, 105, 103, 46, 97, 117, 116, 111, 112, 108, 97, 121, 32, 63, 63, 32, 102, 97, 108, 115, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 58, 32, 48, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 58, 32, 99, 111, 110, 102, 105, 103, 46, 108, 111, 111, 112, 32, 63, 63, 32, 102, 97, 108, 115, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 67, 111, 117, 110, 116, 58, 32, 99, 111, 110, 102, 105, 103, 46, 108, 111, 111, 112, 67, 111, 117, 110, 116, 32, 63, 63, 32, 48, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 111, 100, 101, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 77, 111, 100, 101, 40, 99, 111, 110, 102, 105, 103, 46, 109, 111, 100, 101, 32, 63, 63, 32, 34, 102, 111, 114, 119, 97, 114, 100, 34, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101, 110, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 83, 101, 103, 109, 101, 110, 116, 40, 99, 111, 110, 102, 105, 103, 46, 115, 101, 103, 109, 101, 110, 116, 32, 63, 63, 32, 91, 93, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 112, 101, 101, 100, 58, 32, 99, 111, 110, 102, 105, 103, 46, 115, 112, 101, 101, 100, 32, 63, 63, 32, 49, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 58, 32, 99, 111, 110, 102, 105, 103, 46, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 32, 63, 63, 32, 116, 114, 117, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 58, 32, 99, 111, 110, 102, 105, 103, 46, 109, 97, 114, 107, 101, 114, 32, 63, 63, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 121, 111, 117, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 76, 97, 121, 111, 117, 116, 40, 99, 111, 110, 102, 105, 103, 46, 108, 97, 121, 111, 117, 116, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 68, 97, 116, 97, 40, 99, 111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 83, 114, 99, 40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 99, 111, 110, 102, 105, 103, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 32, 63, 63, 32, 34, 34, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 100, 114, 97, 119, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 32, 38, 38, 32, 34, 103, 101, 116, 67, 111, 110, 116, 101, 120, 116, 34, 32, 105, 110, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 38, 38, 32, 116, 121, 112, 101, 111, 102, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 103, 101, 116, 67, 111, 110, 116, 101, 120, 116, 32, 61, 61, 61, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 103, 101, 116, 67, 111, 110, 116, 101, 120, 116, 40, 34, 50, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 117, 102, 102, 101, 114, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 98, 117, 102, 102, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 120, 112, 101, 99, 116, 101, 100, 76, 101, 110, 103, 116, 104, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 42, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 42, 32, 66, 89, 84, 69, 83, 95, 80, 69, 82, 95, 80, 73, 88, 69, 76, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 117, 102, 102, 101, 114, 46, 98, 121, 116, 101, 76, 101, 110, 103, 116, 104, 32, 33, 61, 61, 32, 101, 120, 112, 101, 99, 116, 101, 100, 76, 101, 110, 103, 116, 104, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 119, 97, 114, 110, 40, 96, 66, 117, 102, 102, 101, 114, 32, 115, 105, 122, 101, 32, 109, 105, 115, 109, 97, 116, 99, 104, 58, 32, 103, 111, 116, 32, 36, 123, 98, 117, 102, 102, 101, 114, 46, 98, 121, 116, 101, 76, 101, 110, 103, 116, 104, 125, 44, 32, 101, 120, 112, 101, 99, 116, 101, 100, 32, 36, 123, 101, 120, 112, 101, 99, 116, 101, 100, 76, 101, 110, 103, 116, 104, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 101, 116, 32, 105, 109, 97, 103, 101, 68, 97, 116, 97, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 108, 97, 109, 112, 101, 100, 66, 117, 102, 102, 101, 114, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 67, 108, 97, 109, 112, 101, 100, 65, 114, 114, 97, 121, 40, 98, 117, 102, 102, 101, 114, 44, 32, 48, 44, 32, 98, 117, 102, 102, 101, 114, 46, 98, 121, 116, 101, 76, 101, 110, 103, 116, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111, 102, 32, 73, 109, 97, 103, 101, 68, 97, 116, 97, 32, 61, 61, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 109, 97, 103, 101, 68, 97, 116, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 46, 99, 114, 101, 97, 116, 101, 73, 109, 97, 103, 101, 68, 97, 116, 97, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 109, 97, 103, 101, 68, 97, 116, 97, 46, 100, 97, 116, 97, 46, 115, 101, 116, 40, 99, 108, 97, 109, 112, 101, 100, 66, 117, 102, 102, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 109, 97, 103, 101, 68, 97, 116, 97, 32, 61, 32, 110, 101, 119, 32, 73, 109, 97, 103, 101, 68, 97, 116, 97, 40, 99, 108, 97, 109, 112, 101, 100, 66, 117, 102, 102, 101, 114, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 46, 112, 117, 116, 73, 109, 97, 103, 101, 68, 97, 116, 97, 40, 105, 109, 97, 103, 101, 68, 97, 116, 97, 44, 32, 48, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 115, 116, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 33, 61, 61, 32, 110, 117, 108, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 115, 116, 97, 114, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 38, 38, 32, 33, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 32, 38, 38, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 32, 124, 124, 32, 116, 104, 105, 115, 46, 95, 105, 115, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 82, 117, 110, 110, 105, 110, 103, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 32, 38, 38, 32, 33, 116, 104, 105, 115, 46, 95, 105, 115, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 82, 117, 110, 110, 105, 110, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 97, 100, 118, 97, 110, 99, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 116, 105, 99, 107, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 97, 100, 118, 97, 110, 99, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 114, 114, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40, 34, 69, 114, 114, 111, 114, 32, 105, 110, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 102, 114, 97, 109, 101, 58, 34, 44, 32, 101, 114, 114, 111, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 114, 101, 110, 100, 101, 114, 69, 114, 114, 111, 114, 34, 44, 32, 101, 114, 114, 111, 114, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 114, 114, 111, 114, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 46, 82, 117, 110, 116, 105, 109, 101, 69, 114, 114, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 100, 101, 115, 116, 114, 111, 121, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 112, 108, 97, 121, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 33, 116, 104, 105, 115, 46, 105, 115, 76, 111, 97, 100, 101, 100, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 108, 97, 121, 105, 110, 103, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 112, 108, 97, 121, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 112, 108, 97, 121, 105, 110, 103, 32, 124, 124, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 114, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 32, 38, 38, 32, 33, 105, 115, 69, 108, 101, 109, 101, 110, 116, 73, 110, 86, 105, 101, 119, 112, 111, 114, 116, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 112, 97, 117, 115, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 112, 97, 117, 115, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 111, 112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 111, 107, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 116, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 102, 114, 97, 109, 101, 34, 44, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 58, 32, 116, 104, 105, 115, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 70, 114, 97, 109, 101, 40, 102, 114, 97, 109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 102, 114, 97, 109, 101, 85, 112, 100, 97, 116, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 101, 107, 40, 102, 114, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 102, 114, 97, 109, 101, 85, 112, 100, 97, 116, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 110, 100, 101, 114, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 114, 101, 110, 100, 101, 114, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 112, 101, 101, 100, 40, 115, 112, 101, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 112, 101, 101, 100, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 99, 111, 108, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 115, 116, 121, 108, 101, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 32, 61, 32, 99, 111, 108, 111, 114, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 58, 32, 104, 101, 120, 83, 116, 114, 105, 110, 103, 84, 111, 82, 71, 66, 65, 73, 110, 116, 40, 99, 111, 108, 111, 114, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 32, 61, 32, 99, 111, 108, 111, 114, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 76, 111, 111, 112, 40, 108, 111, 111, 112, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 58, 32, 108, 111, 111, 112, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 76, 111, 111, 112, 67, 111, 117, 110, 116, 40, 108, 111, 111, 112, 67, 111, 117, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 67, 111, 117, 110, 116, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 85, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 40, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 100, 101, 115, 116, 114, 111, 121, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 82, 117, 110, 110, 105, 110, 103, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 85, 110, 115, 117, 98, 115, 99, 114, 105, 98, 101, 40, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 46, 100, 101, 108, 101, 116, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 85, 110, 115, 117, 98, 115, 99, 114, 105, 98, 101, 40, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 100, 101, 108, 101, 116, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 117, 110, 115, 117, 98, 115, 99, 114, 105, 98, 101, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 46, 100, 101, 108, 101, 116, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 100, 101, 108, 101, 116, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 100, 101, 115, 116, 114, 111, 121, 34, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 114, 101, 109, 111, 118, 101, 65, 108, 108, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 102, 114, 101, 101, 122, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 32, 61, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 102, 114, 101, 101, 122, 101, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 117, 110, 102, 114, 101, 101, 122, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 33, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 117, 110, 102, 114, 101, 101, 122, 101, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 114, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 115, 105, 122, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 124, 124, 32, 33, 116, 104, 105, 115, 46, 105, 115, 76, 111, 97, 100, 101, 100, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 112, 114, 32, 61, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32, 119, 105, 110, 100, 111, 119, 46, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 104, 101, 105, 103, 104, 116, 58, 32, 99, 108, 105, 101, 110, 116, 72, 101, 105, 103, 104, 116, 44, 32, 119, 105, 100, 116, 104, 58, 32, 99, 108, 105, 101, 110, 116, 87, 105, 100, 116, 104, 32, 125, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 103, 101, 116, 66, 111, 117, 110, 100, 105, 110, 103, 67, 108, 105, 101, 110, 116, 82, 101, 99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 108, 105, 101, 110, 116, 72, 101, 105, 103, 104, 116, 32, 33, 61, 61, 32, 48, 32, 38, 38, 32, 99, 108, 105, 101, 110, 116, 87, 105, 100, 116, 104, 32, 33, 61, 61, 32, 48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 61, 32, 99, 108, 105, 101, 110, 116, 87, 105, 100, 116, 104, 32, 42, 32, 100, 112, 114, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 61, 32, 99, 108, 105, 101, 110, 116, 72, 101, 105, 103, 104, 116, 32, 42, 32, 100, 112, 114, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 105, 122, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 115, 105, 122, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 114, 101, 115, 105, 122, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 84, 114, 97, 110, 115, 102, 111, 114, 109, 40, 116, 114, 97, 110, 115, 102, 111, 114, 109, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 124, 124, 32, 33, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 114, 97, 110, 115, 102, 111, 114, 109, 86, 101, 99, 116, 111, 114, 32, 61, 32, 110, 101, 119, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 46, 86, 101, 99, 116, 111, 114, 70, 108, 111, 97, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 99, 111, 110, 115, 116, 32, 118, 97, 108, 32, 111, 102, 32, 116, 114, 97, 110, 115, 102, 111, 114, 109, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 97, 110, 115, 102, 111, 114, 109, 86, 101, 99, 116, 111, 114, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 118, 97, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 111, 107, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 84, 114, 97, 110, 115, 102, 111, 114, 109, 40, 116, 114, 97, 110, 115, 102, 111, 114, 109, 86, 101, 99, 116, 111, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 107, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 110, 100, 101, 114, 40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 111, 107, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 84, 114, 97, 110, 115, 102, 111, 114, 109, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 114, 97, 110, 115, 102, 111, 114, 109, 32, 61, 32, 91, 48, 44, 32, 48, 44, 32, 48, 44, 32, 48, 44, 32, 48, 44, 32, 48, 44, 32, 48, 44, 32, 48, 44, 32, 48, 93, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 114, 97, 110, 115, 102, 111, 114, 109, 86, 101, 99, 116, 111, 114, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 103, 101, 116, 84, 114, 97, 110, 115, 102, 111, 114, 109, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 108, 101, 116, 32, 105, 32, 61, 32, 48, 59, 32, 105, 32, 60, 32, 116, 114, 97, 110, 115, 102, 111, 114, 109, 86, 101, 99, 116, 111, 114, 46, 115, 105, 122, 101, 40, 41, 59, 32, 105, 32, 43, 61, 32, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 97, 110, 115, 102, 111, 114, 109, 91, 105, 93, 32, 61, 32, 116, 114, 97, 110, 115, 102, 111, 114, 109, 86, 101, 99, 116, 111, 114, 46, 103, 101, 116, 40, 105, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 114, 97, 110, 115, 102, 111, 114, 109, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 101, 103, 109, 101, 110, 116, 40, 115, 116, 97, 114, 116, 70, 114, 97, 109, 101, 44, 32, 101, 110, 100, 70, 114, 97, 109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101, 110, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 83, 101, 103, 109, 101, 110, 116, 40, 91, 115, 116, 97, 114, 116, 70, 114, 97, 109, 101, 44, 32, 101, 110, 100, 70, 114, 97, 109, 101, 93, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 77, 111, 100, 101, 40, 109, 111, 100, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 111, 100, 101, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 77, 111, 100, 101, 40, 109, 111, 100, 101, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 82, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 40, 99, 111, 110, 102, 105, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 44, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 44, 32, 113, 117, 97, 108, 105, 116, 121, 44, 32, 46, 46, 46, 114, 101, 115, 116, 67, 111, 110, 102, 105, 103, 32, 125, 32, 61, 32, 99, 111, 110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 114, 101, 115, 116, 67, 111, 110, 102, 105, 103, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 47, 47, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 105, 115, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 99, 97, 115, 101, 44, 32, 105, 116, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 115, 101, 116, 32, 116, 111, 32, 116, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 118, 97, 108, 117, 101, 32, 105, 102, 32, 105, 116, 39, 115, 32, 110, 111, 116, 32, 112, 114, 111, 118, 105, 100, 101, 100, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 58, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32, 103, 101, 116, 68, 101, 102, 97, 117, 108, 116, 68, 80, 82, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 58, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 32, 63, 63, 32, 116, 114, 117, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 113, 117, 97, 108, 105, 116, 121, 32, 33, 61, 61, 32, 118, 111, 105, 100, 32, 48, 32, 38, 38, 32, 123, 32, 113, 117, 97, 108, 105, 116, 121, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 113, 117, 97, 108, 105, 116, 121, 32, 33, 61, 61, 32, 118, 111, 105, 100, 32, 48, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 81, 117, 97, 108, 105, 116, 121, 40, 113, 117, 97, 108, 105, 116, 121, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 97, 117, 116, 111, 82, 101, 115, 105, 122, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 46, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 69, 108, 101, 109, 101, 110, 116, 73, 110, 86, 105, 101, 119, 112, 111, 114, 116, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 117, 110, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 40, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 40, 41, 32, 61, 61, 61, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 40, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 113, 117, 97, 108, 105, 116, 121, 32, 33, 61, 61, 32, 118, 111, 105, 100, 32, 48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 81, 117, 97, 108, 105, 116, 121, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 113, 117, 97, 108, 105, 116, 121, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 114, 101, 115, 105, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 77, 97, 114, 107, 101, 114, 40, 109, 97, 114, 107, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114, 107, 101, 114, 115, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 109, 97, 114, 107, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 109, 97, 114, 107, 101, 114, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 117, 108, 116, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 108, 101, 116, 32, 105, 32, 61, 32, 48, 59, 32, 105, 32, 60, 32, 109, 97, 114, 107, 101, 114, 115, 46, 115, 105, 122, 101, 40, 41, 59, 32, 105, 32, 43, 61, 32, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114, 107, 101, 114, 32, 61, 32, 109, 97, 114, 107, 101, 114, 115, 46, 103, 101, 116, 40, 105, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 46, 112, 117, 115, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 109, 97, 114, 107, 101, 114, 46, 110, 97, 109, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 105, 109, 101, 58, 32, 109, 97, 114, 107, 101, 114, 46, 116, 105, 109, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 117, 114, 97, 116, 105, 111, 110, 58, 32, 109, 97, 114, 107, 101, 114, 46, 100, 117, 114, 97, 116, 105, 111, 110, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 114, 101, 115, 117, 108, 116, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 84, 104, 101, 109, 101, 40, 116, 104, 101, 109, 101, 73, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 104, 101, 109, 101, 76, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 84, 104, 101, 109, 101, 40, 116, 104, 101, 109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 101, 109, 101, 76, 111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 109, 101, 76, 111, 97, 100, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 115, 101, 116, 84, 104, 101, 109, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 104, 101, 109, 101, 82, 101, 115, 101, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 115, 101, 116, 84, 104, 101, 109, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 101, 109, 101, 82, 101, 115, 101, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 109, 101, 82, 101, 115, 101, 116, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 84, 104, 101, 109, 101, 68, 97, 116, 97, 40, 116, 104, 101, 109, 101, 68, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 104, 101, 109, 101, 76, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 84, 104, 101, 109, 101, 68, 97, 116, 97, 40, 116, 104, 101, 109, 101, 68, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 101, 109, 101, 76, 111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 109, 101, 76, 111, 97, 100, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 108, 111, 116, 115, 40, 115, 108, 111, 116, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 83, 108, 111, 116, 115, 40, 115, 108, 111, 116, 115, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 76, 97, 121, 111, 117, 116, 40, 108, 97, 121, 111, 117, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 121, 111, 117, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 76, 97, 121, 111, 117, 116, 40, 108, 97, 121, 111, 117, 116, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 86, 105, 101, 119, 112, 111, 114, 116, 40, 120, 44, 32, 121, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 86, 105, 101, 119, 112, 111, 114, 116, 40, 120, 44, 32, 121, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 40, 117, 114, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 46, 115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 40, 117, 114, 108, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 83, 116, 97, 114, 116, 32, 97, 32, 116, 119, 101, 101, 110, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 98, 101, 116, 119, 101, 101, 110, 32, 116, 119, 111, 32, 102, 114, 97, 109, 101, 32, 118, 97, 108, 117, 101, 115, 32, 119, 105, 116, 104, 32, 99, 117, 115, 116, 111, 109, 32, 101, 97, 115, 105, 110, 103, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 102, 114, 97, 109, 101, 32, 45, 32, 83, 116, 97, 114, 116, 105, 110, 103, 32, 102, 114, 97, 109, 101, 32, 118, 97, 108, 117, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 100, 117, 114, 97, 116, 105, 111, 110, 32, 45, 32, 68, 117, 114, 97, 116, 105, 111, 110, 32, 111, 102, 32, 116, 104, 101, 32, 116, 119, 101, 101, 110, 32, 105, 110, 32, 115, 101, 99, 111, 110, 100, 115, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 116, 114, 117, 101, 32, 105, 102, 32, 116, 119, 101, 101, 110, 32, 119, 97, 115, 32, 115, 116, 97, 114, 116, 101, 100, 32, 115, 117, 99, 99, 101, 115, 115, 102, 117, 108, 108, 121, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 116, 119, 101, 101, 110, 40, 102, 114, 97, 109, 101, 44, 32, 100, 117, 114, 97, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 97, 115, 105, 110, 103, 32, 61, 32, 91, 48, 44, 32, 48, 44, 32, 49, 44, 32, 49, 93, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 97, 115, 105, 110, 103, 86, 101, 99, 116, 111, 114, 32, 61, 32, 110, 101, 119, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 46, 86, 101, 99, 116, 111, 114, 70, 108, 111, 97, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 99, 111, 110, 115, 116, 32, 118, 97, 108, 32, 111, 102, 32, 101, 97, 115, 105, 110, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 97, 115, 105, 110, 103, 86, 101, 99, 116, 111, 114, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 118, 97, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 116, 119, 101, 101, 110, 40, 102, 114, 97, 109, 101, 44, 32, 100, 117, 114, 97, 116, 105, 111, 110, 44, 32, 101, 97, 115, 105, 110, 103, 86, 101, 99, 116, 111, 114, 41, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 83, 116, 97, 114, 116, 32, 97, 32, 116, 119, 101, 101, 110, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 116, 111, 32, 97, 32, 115, 112, 101, 99, 105, 102, 105, 99, 32, 109, 97, 114, 107, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 109, 97, 114, 107, 101, 114, 32, 45, 32, 84, 104, 101, 32, 109, 97, 114, 107, 101, 114, 32, 110, 97, 109, 101, 32, 116, 111, 32, 116, 119, 101, 101, 110, 32, 116, 111, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 116, 114, 117, 101, 32, 105, 102, 32, 116, 119, 101, 101, 110, 32, 119, 97, 115, 32, 115, 116, 97, 114, 116, 101, 100, 32, 115, 117, 99, 99, 101, 115, 115, 102, 117, 108, 108, 121, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 116, 119, 101, 101, 110, 84, 111, 77, 97, 114, 107, 101, 114, 40, 109, 97, 114, 107, 101, 114, 44, 32, 100, 117, 114, 97, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 97, 115, 105, 110, 103, 32, 61, 32, 91, 48, 44, 32, 48, 44, 32, 49, 44, 32, 49, 93, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 97, 115, 105, 110, 103, 86, 101, 99, 116, 111, 114, 32, 61, 32, 110, 101, 119, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 46, 86, 101, 99, 116, 111, 114, 70, 108, 111, 97, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 99, 111, 110, 115, 116, 32, 118, 97, 108, 32, 111, 102, 32, 101, 97, 115, 105, 110, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 97, 115, 105, 110, 103, 86, 101, 99, 116, 111, 114, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 118, 97, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 116, 119, 101, 101, 110, 84, 111, 77, 97, 114, 107, 101, 114, 40, 109, 97, 114, 107, 101, 114, 44, 32, 100, 117, 114, 97, 116, 105, 111, 110, 44, 32, 101, 97, 115, 105, 110, 103, 86, 101, 99, 116, 111, 114, 41, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 83, 105, 122, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 97, 110, 105, 109, 97, 116, 105, 111, 110, 83, 105, 122, 101, 40, 41, 46, 103, 101, 116, 40, 48, 41, 32, 63, 63, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 97, 110, 105, 109, 97, 116, 105, 111, 110, 83, 105, 122, 101, 40, 41, 46, 103, 101, 116, 40, 49, 41, 32, 63, 63, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 119, 105, 100, 116, 104, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 101, 105, 103, 104, 116, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 71, 101, 116, 32, 116, 104, 101, 32, 79, 114, 105, 101, 110, 116, 101, 100, 32, 66, 111, 117, 110, 100, 105, 110, 103, 32, 66, 111, 120, 32, 40, 79, 66, 66, 41, 32, 112, 111, 105, 110, 116, 115, 32, 111, 102, 32, 97, 32, 108, 97, 121, 101, 114, 32, 98, 121, 32, 105, 116, 115, 32, 110, 97, 109, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 108, 97, 121, 101, 114, 78, 97, 109, 101, 32, 45, 32, 84, 104, 101, 32, 110, 97, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32, 108, 97, 121, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 65, 110, 32, 97, 114, 114, 97, 121, 32, 111, 102, 32, 56, 32, 110, 117, 109, 98, 101, 114, 115, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 105, 110, 103, 32, 52, 32, 112, 111, 105, 110, 116, 115, 32, 40, 120, 44, 121, 41, 32, 111, 102, 32, 116, 104, 101, 32, 79, 66, 66, 32, 105, 110, 32, 99, 108, 111, 99, 107, 119, 105, 115, 101, 32, 111, 114, 100, 101, 114, 32, 115, 116, 97, 114, 116, 105, 110, 103, 32, 102, 114, 111, 109, 32, 116, 111, 112, 45, 108, 101, 102, 116, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 91, 120, 48, 44, 32, 121, 48, 44, 32, 120, 49, 44, 32, 121, 49, 44, 32, 120, 50, 44, 32, 121, 50, 44, 32, 120, 51, 44, 32, 121, 51, 93, 10, 32, 32, 32, 32, 32, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 97, 109, 112, 108, 101, 10, 32, 32, 32, 32, 32, 42, 32, 96, 96, 96, 116, 121, 112, 101, 115, 99, 114, 105, 112, 116, 10, 32, 32, 32, 32, 32, 42, 32, 47, 47, 32, 68, 114, 97, 119, 32, 97, 32, 112, 111, 108, 121, 103, 111, 110, 32, 97, 114, 111, 117, 110, 100, 32, 116, 104, 101, 32, 108, 97, 121, 101, 114, 32, 39, 76, 97, 121, 101, 114, 32, 49, 39, 10, 32, 32, 32, 32, 32, 42, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 39, 114, 101, 110, 100, 101, 114, 39, 44, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 99, 111, 110, 115, 116, 32, 111, 98, 98, 80, 111, 105, 110, 116, 115, 32, 61, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 46, 103, 101, 116, 76, 97, 121, 101, 114, 66, 111, 117, 110, 100, 105, 110, 103, 66, 111, 120, 40, 39, 76, 97, 121, 101, 114, 32, 49, 39, 41, 59, 10, 32, 32, 32, 32, 32, 42, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 105, 102, 32, 40, 111, 98, 98, 80, 111, 105, 110, 116, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 98, 101, 103, 105, 110, 80, 97, 116, 104, 40, 41, 59, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 109, 111, 118, 101, 84, 111, 40, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 48, 93, 44, 32, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 49, 93, 41, 59, 32, 47, 47, 32, 70, 105, 114, 115, 116, 32, 112, 111, 105, 110, 116, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 108, 105, 110, 101, 84, 111, 40, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 50, 93, 44, 32, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 51, 93, 41, 59, 32, 47, 47, 32, 83, 101, 99, 111, 110, 100, 32, 112, 111, 105, 110, 116, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 108, 105, 110, 101, 84, 111, 40, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 52, 93, 44, 32, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 53, 93, 41, 59, 32, 47, 47, 32, 84, 104, 105, 114, 100, 32, 112, 111, 105, 110, 116, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 108, 105, 110, 101, 84, 111, 40, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 54, 93, 44, 32, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 55, 93, 41, 59, 32, 47, 47, 32, 70, 111, 117, 114, 116, 104, 32, 112, 111, 105, 110, 116, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 99, 108, 111, 115, 101, 80, 97, 116, 104, 40, 41, 59, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 115, 116, 114, 111, 107, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 42, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 42, 32, 96, 96, 96, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 103, 101, 116, 76, 97, 121, 101, 114, 66, 111, 117, 110, 100, 105, 110, 103, 66, 111, 120, 40, 108, 97, 121, 101, 114, 78, 97, 109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 111, 117, 110, 100, 115, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 103, 101, 116, 76, 97, 121, 101, 114, 66, 111, 117, 110, 100, 115, 40, 108, 97, 121, 101, 114, 78, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 111, 117, 110, 100, 115, 41, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 111, 117, 110, 100, 115, 46, 115, 105, 122, 101, 40, 41, 32, 33, 61, 61, 32, 56, 41, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 111, 105, 110, 116, 115, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 108, 101, 116, 32, 105, 32, 61, 32, 48, 59, 32, 105, 32, 60, 32, 56, 59, 32, 105, 32, 43, 61, 32, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 112, 111, 105, 110, 116, 115, 46, 112, 117, 115, 104, 40, 98, 111, 117, 110, 100, 115, 46, 103, 101, 116, 40, 105, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 112, 111, 105, 110, 116, 115, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 116, 114, 97, 110, 115, 102, 111, 114, 109, 84, 104, 101, 109, 101, 84, 111, 76, 111, 116, 116, 105, 101, 83, 108, 111, 116, 115, 40, 116, 104, 101, 109, 101, 44, 32, 115, 108, 111, 116, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 63, 46, 116, 114, 97, 110, 115, 102, 111, 114, 109, 84, 104, 101, 109, 101, 84, 111, 76, 111, 116, 116, 105, 101, 83, 108, 111, 116, 115, 40, 116, 104, 101, 109, 101, 44, 32, 115, 108, 111, 116, 115, 41, 32, 63, 63, 32, 34, 34, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 47, 32, 35, 114, 101, 103, 105, 111, 110, 32, 83, 116, 97, 116, 101, 32, 77, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 95, 115, 101, 116, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 124, 124, 32, 33, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 101, 119, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 46, 67, 97, 108, 108, 98, 97, 99, 107, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 83, 116, 97, 114, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 82, 117, 110, 110, 105, 110, 103, 32, 61, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 114, 116, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 114, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 83, 116, 111, 112, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 82, 117, 110, 110, 105, 110, 103, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 111, 112, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 67, 117, 115, 116, 111, 109, 69, 118, 101, 110, 116, 40, 40, 101, 118, 101, 110, 116, 78, 97, 109, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 117, 115, 116, 111, 109, 69, 118, 101, 110, 116, 34, 44, 32, 101, 118, 101, 110, 116, 78, 97, 109, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 40, 40, 105, 110, 112, 117, 116, 78, 97, 109, 101, 44, 32, 111, 108, 100, 86, 97, 108, 117, 101, 44, 32, 110, 101, 119, 86, 97, 108, 117, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 34, 44, 32, 105, 110, 112, 117, 116, 78, 97, 109, 101, 44, 32, 110, 101, 119, 86, 97, 108, 117, 101, 44, 32, 111, 108, 100, 86, 97, 108, 117, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 40, 40, 105, 110, 112, 117, 116, 78, 97, 109, 101, 44, 32, 111, 108, 100, 86, 97, 108, 117, 101, 44, 32, 110, 101, 119, 86, 97, 108, 117, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 34, 44, 32, 105, 110, 112, 117, 116, 78, 97, 109, 101, 44, 32, 110, 101, 119, 86, 97, 108, 117, 101, 44, 32, 111, 108, 100, 86, 97, 108, 117, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 40, 40, 105, 110, 112, 117, 116, 78, 97, 109, 101, 44, 32, 111, 108, 100, 86, 97, 108, 117, 101, 44, 32, 110, 101, 119, 86, 97, 108, 117, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 34, 44, 32, 105, 110, 112, 117, 116, 78, 97, 109, 101, 44, 32, 110, 101, 119, 86, 97, 108, 117, 101, 44, 32, 111, 108, 100, 86, 97, 108, 117, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 73, 110, 112, 117, 116, 70, 105, 114, 101, 100, 40, 40, 105, 110, 112, 117, 116, 78, 97, 109, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 112, 117, 116, 70, 105, 114, 101, 100, 34, 44, 32, 105, 110, 112, 117, 116, 78, 97, 109, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 84, 114, 97, 110, 115, 105, 116, 105, 111, 110, 40, 40, 102, 114, 111, 109, 83, 116, 97, 116, 101, 44, 32, 116, 111, 83, 116, 97, 116, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 84, 114, 97, 110, 115, 105, 116, 105, 111, 110, 34, 44, 32, 102, 114, 111, 109, 83, 116, 97, 116, 101, 44, 32, 116, 111, 83, 116, 97, 116, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 83, 116, 97, 116, 101, 69, 110, 116, 101, 114, 101, 100, 40, 40, 115, 116, 97, 116, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 110, 116, 101, 114, 101, 100, 34, 44, 32, 115, 116, 97, 116, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 83, 116, 97, 116, 101, 69, 120, 105, 116, 40, 40, 115, 116, 97, 116, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 120, 105, 116, 34, 44, 32, 115, 116, 97, 116, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 69, 114, 114, 111, 114, 40, 40, 101, 114, 114, 111, 114, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 69, 114, 114, 111, 114, 34, 44, 32, 101, 114, 114, 111, 114, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 109, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 101, 119, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 46, 67, 97, 108, 108, 98, 97, 99, 107, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 77, 101, 115, 115, 97, 103, 101, 40, 40, 109, 101, 115, 115, 97, 103, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 109, 101, 115, 115, 97, 103, 101, 46, 115, 116, 97, 114, 116, 115, 87, 105, 116, 104, 40, 34, 79, 112, 101, 110, 85, 114, 108, 58, 32, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 97, 110, 100, 108, 101, 79, 112, 101, 110, 85, 114, 108, 40, 109, 101, 115, 115, 97, 103, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 34, 44, 32, 109, 101, 115, 115, 97, 103, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 117, 98, 115, 99, 114, 105, 98, 101, 40, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 83, 117, 98, 115, 99, 114, 105, 98, 101, 40, 115, 109, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 85, 110, 115, 117, 98, 115, 99, 114, 105, 98, 101, 40, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 46, 100, 101, 108, 101, 116, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 85, 110, 115, 117, 98, 115, 99, 114, 105, 98, 101, 40, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 100, 101, 108, 101, 116, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 76, 111, 97, 100, 32, 97, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 98, 121, 32, 73, 68, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 32, 45, 32, 84, 104, 101, 32, 73, 68, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 116, 111, 32, 108, 111, 97, 100, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 116, 114, 117, 101, 32, 105, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 119, 97, 115, 32, 108, 111, 97, 100, 101, 100, 32, 115, 117, 99, 99, 101, 115, 115, 102, 117, 108, 108, 121, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 111, 97, 100, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 124, 124, 32, 33, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 111, 97, 100, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 101, 116, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 111, 97, 100, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 76, 111, 97, 100, 32, 97, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 102, 114, 111, 109, 32, 100, 97, 116, 97, 32, 115, 116, 114, 105, 110, 103, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 32, 45, 32, 84, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 100, 97, 116, 97, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 116, 114, 117, 101, 32, 105, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 119, 97, 115, 32, 108, 111, 97, 100, 101, 100, 32, 115, 117, 99, 99, 101, 115, 115, 102, 117, 108, 108, 121, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 111, 97, 100, 68, 97, 116, 97, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 124, 124, 32, 33, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 111, 97, 100, 68, 97, 116, 97, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 101, 116, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 111, 97, 100, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 83, 101, 116, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 99, 111, 110, 102, 105, 103, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 99, 111, 110, 102, 105, 103, 32, 45, 32, 84, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 99, 111, 110, 102, 105, 103, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 67, 111, 110, 102, 105, 103, 40, 99, 111, 110, 102, 105, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 111, 110, 102, 105, 103, 32, 61, 32, 99, 111, 110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 83, 116, 97, 114, 116, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 116, 114, 117, 101, 32, 105, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 119, 97, 115, 32, 115, 116, 97, 114, 116, 101, 100, 32, 115, 117, 99, 99, 101, 115, 115, 102, 117, 108, 108, 121, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 114, 116, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 114, 101, 79, 112, 101, 110, 85, 114, 108, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 46, 99, 114, 101, 97, 116, 101, 68, 101, 102, 97, 117, 108, 116, 79, 112, 101, 110, 85, 114, 108, 80, 111, 108, 105, 99, 121, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 111, 110, 102, 105, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 111, 112, 101, 110, 85, 114, 108, 80, 111, 108, 105, 99, 121, 32, 61, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 111, 110, 102, 105, 103, 46, 111, 112, 101, 110, 85, 114, 108, 80, 111, 108, 105, 99, 121, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 112, 101, 110, 85, 114, 108, 80, 111, 108, 105, 99, 121, 32, 38, 38, 32, 116, 121, 112, 101, 111, 102, 32, 111, 112, 101, 110, 85, 114, 108, 80, 111, 108, 105, 99, 121, 46, 114, 101, 113, 117, 105, 114, 101, 85, 115, 101, 114, 73, 110, 116, 101, 114, 97, 99, 116, 105, 111, 110, 32, 61, 61, 61, 32, 34, 98, 111, 111, 108, 101, 97, 110, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 114, 101, 79, 112, 101, 110, 85, 114, 108, 46, 114, 101, 113, 117, 105, 114, 101, 85, 115, 101, 114, 73, 110, 116, 101, 114, 97, 99, 116, 105, 111, 110, 32, 61, 32, 111, 112, 101, 110, 85, 114, 108, 80, 111, 108, 105, 99, 121, 46, 114, 101, 113, 117, 105, 114, 101, 85, 115, 101, 114, 73, 110, 116, 101, 114, 97, 99, 116, 105, 111, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 112, 101, 110, 85, 114, 108, 80, 111, 108, 105, 99, 121, 63, 46, 119, 104, 105, 116, 101, 108, 105, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 114, 101, 79, 112, 101, 110, 85, 114, 108, 46, 119, 104, 105, 116, 101, 108, 105, 115, 116, 32, 61, 32, 110, 101, 119, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 46, 86, 101, 99, 116, 111, 114, 83, 116, 114, 105, 110, 103, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 99, 111, 110, 115, 116, 32, 117, 114, 108, 32, 111, 102, 32, 111, 112, 101, 110, 85, 114, 108, 80, 111, 108, 105, 99, 121, 46, 119, 104, 105, 116, 101, 108, 105, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 114, 101, 79, 112, 101, 110, 85, 114, 108, 46, 119, 104, 105, 116, 101, 108, 105, 115, 116, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 117, 114, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 114, 116, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 114, 116, 40, 99, 111, 114, 101, 79, 112, 101, 110, 85, 114, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 115, 116, 97, 114, 116, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 82, 117, 110, 110, 105, 110, 103, 32, 61, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 101, 116, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 114, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 115, 116, 97, 114, 116, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 83, 116, 111, 112, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 116, 114, 117, 101, 32, 105, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 119, 97, 115, 32, 115, 116, 111, 112, 112, 101, 100, 32, 115, 117, 99, 99, 101, 115, 115, 102, 117, 108, 108, 121, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 111, 112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 111, 112, 112, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 115, 116, 111, 112, 112, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 82, 117, 110, 110, 105, 110, 103, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 115, 116, 111, 112, 112, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 71, 101, 116, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 115, 116, 97, 116, 117, 115, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 115, 116, 97, 116, 117, 115, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 83, 116, 97, 116, 117, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 117, 115, 40, 41, 32, 63, 63, 32, 34, 34, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 71, 101, 116, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 115, 116, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 115, 116, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 67, 117, 114, 114, 101, 110, 116, 83, 116, 97, 116, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 117, 114, 114, 101, 110, 116, 83, 116, 97, 116, 101, 40, 41, 32, 63, 63, 32, 34, 34, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 71, 101, 116, 32, 116, 104, 101, 32, 97, 99, 116, 105, 118, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 73, 68, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 97, 99, 116, 105, 118, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 73, 68, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 65, 99, 116, 105, 118, 101, 73, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 97, 99, 116, 105, 118, 101, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 40, 41, 32, 63, 63, 32, 34, 34, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 79, 118, 101, 114, 114, 105, 100, 101, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 115, 116, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 115, 116, 97, 116, 101, 32, 45, 32, 84, 104, 101, 32, 115, 116, 97, 116, 101, 32, 116, 111, 32, 111, 118, 101, 114, 114, 105, 100, 101, 32, 116, 111, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 105, 109, 109, 101, 100, 105, 97, 116, 101, 32, 45, 32, 87, 104, 101, 116, 104, 101, 114, 32, 116, 111, 32, 105, 109, 109, 101, 100, 105, 97, 116, 101, 108, 121, 32, 116, 114, 97, 110, 115, 105, 116, 105, 111, 110, 32, 116, 111, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 116, 114, 117, 101, 32, 105, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 111, 118, 101, 114, 114, 105, 100, 101, 32, 119, 97, 115, 32, 115, 117, 99, 99, 101, 115, 115, 102, 117, 108, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 118, 101, 114, 114, 105, 100, 101, 83, 116, 97, 116, 101, 40, 115, 116, 97, 116, 101, 44, 32, 105, 109, 109, 101, 100, 105, 97, 116, 101, 32, 61, 32, 102, 97, 108, 115, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 118, 101, 114, 114, 105, 100, 101, 67, 117, 114, 114, 101, 110, 116, 83, 116, 97, 116, 101, 40, 115, 116, 97, 116, 101, 44, 32, 105, 109, 109, 101, 100, 105, 97, 116, 101, 41, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 71, 101, 116, 32, 97, 32, 115, 112, 101, 99, 105, 102, 105, 99, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 98, 121, 32, 73, 68, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 32, 45, 32, 84, 104, 101, 32, 73, 68, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 116, 111, 32, 103, 101, 116, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 100, 97, 116, 97, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 103, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 32, 63, 63, 32, 34, 34, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 71, 101, 116, 32, 116, 104, 101, 32, 108, 105, 115, 116, 32, 111, 102, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 65, 114, 114, 97, 121, 32, 111, 102, 32, 108, 105, 115, 116, 101, 110, 101, 114, 32, 110, 97, 109, 101, 115, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 86, 101, 99, 116, 111, 114, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 70, 114, 97, 109, 101, 119, 111, 114, 107, 83, 101, 116, 117, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 108, 101, 116, 32, 105, 32, 61, 32, 48, 59, 32, 105, 32, 60, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 86, 101, 99, 116, 111, 114, 46, 115, 105, 122, 101, 40, 41, 59, 32, 105, 32, 43, 61, 32, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 112, 117, 115, 104, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 86, 101, 99, 116, 111, 114, 46, 103, 101, 116, 40, 105, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 83, 101, 116, 32, 97, 32, 98, 111, 111, 108, 101, 97, 110, 32, 105, 110, 112, 117, 116, 32, 118, 97, 108, 117, 101, 32, 102, 111, 114, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 110, 97, 109, 101, 32, 45, 32, 84, 104, 101, 32, 110, 97, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32, 98, 111, 111, 108, 101, 97, 110, 32, 105, 110, 112, 117, 116, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 118, 97, 108, 117, 101, 32, 45, 32, 84, 104, 101, 32, 98, 111, 111, 108, 101, 97, 110, 32, 118, 97, 108, 117, 101, 32, 116, 111, 32, 115, 101, 116, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 83, 101, 116, 32, 97, 32, 110, 117, 109, 101, 114, 105, 99, 32, 105, 110, 112, 117, 116, 32, 118, 97, 108, 117, 101, 32, 102, 111, 114, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 110, 97, 109, 101, 32, 45, 32, 84, 104, 101, 32, 110, 97, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32, 110, 117, 109, 101, 114, 105, 99, 32, 105, 110, 112, 117, 116, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 118, 97, 108, 117, 101, 32, 45, 32, 84, 104, 101, 32, 110, 117, 109, 101, 114, 105, 99, 32, 118, 97, 108, 117, 101, 32, 116, 111, 32, 115, 101, 116, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 83, 101, 116, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 105, 110, 112, 117, 116, 32, 118, 97, 108, 117, 101, 32, 102, 111, 114, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 110, 97, 109, 101, 32, 45, 32, 84, 104, 101, 32, 110, 97, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 105, 110, 112, 117, 116, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 118, 97, 108, 117, 101, 32, 45, 32, 84, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 118, 97, 108, 117, 101, 32, 116, 111, 32, 115, 101, 116, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 71, 101, 116, 32, 97, 32, 98, 111, 111, 108, 101, 97, 110, 32, 105, 110, 112, 117, 116, 32, 118, 97, 108, 117, 101, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 110, 97, 109, 101, 32, 45, 32, 84, 104, 101, 32, 110, 97, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32, 98, 111, 111, 108, 101, 97, 110, 32, 105, 110, 112, 117, 116, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 98, 111, 111, 108, 101, 97, 110, 32, 118, 97, 108, 117, 101, 32, 111, 114, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 32, 105, 102, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 71, 101, 116, 32, 97, 32, 110, 117, 109, 101, 114, 105, 99, 32, 105, 110, 112, 117, 116, 32, 118, 97, 108, 117, 101, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 110, 97, 109, 101, 32, 45, 32, 84, 104, 101, 32, 110, 97, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32, 110, 117, 109, 101, 114, 105, 99, 32, 105, 110, 112, 117, 116, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 110, 117, 109, 101, 114, 105, 99, 32, 118, 97, 108, 117, 101, 32, 111, 114, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 32, 105, 102, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 71, 101, 116, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 105, 110, 112, 117, 116, 32, 118, 97, 108, 117, 101, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 110, 97, 109, 101, 32, 45, 32, 84, 104, 101, 32, 110, 97, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 105, 110, 112, 117, 116, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 118, 97, 108, 117, 101, 32, 111, 114, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 32, 105, 102, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 70, 105, 114, 101, 32, 97, 110, 32, 101, 118, 101, 110, 116, 32, 105, 110, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 110, 97, 109, 101, 32, 45, 32, 84, 104, 101, 32, 110, 97, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32, 101, 118, 101, 110, 116, 32, 116, 111, 32, 102, 105, 114, 101, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 70, 105, 114, 101, 69, 118, 101, 110, 116, 40, 110, 97, 109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 70, 105, 114, 101, 69, 118, 101, 110, 116, 40, 110, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 80, 111, 115, 116, 32, 97, 32, 99, 108, 105, 99, 107, 32, 101, 118, 101, 110, 116, 32, 116, 111, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 120, 32, 45, 32, 84, 104, 101, 32, 120, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 99, 108, 105, 99, 107, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 121, 32, 45, 32, 84, 104, 101, 32, 121, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 99, 108, 105, 99, 107, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 101, 118, 101, 110, 116, 32, 114, 101, 115, 117, 108, 116, 32, 111, 114, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 67, 108, 105, 99, 107, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 67, 108, 105, 99, 107, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 80, 111, 115, 116, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 32, 117, 112, 32, 101, 118, 101, 110, 116, 32, 116, 111, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 120, 32, 45, 32, 84, 104, 101, 32, 120, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 112, 111, 105, 110, 116, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 121, 32, 45, 32, 84, 104, 101, 32, 121, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 112, 111, 105, 110, 116, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 101, 118, 101, 110, 116, 32, 114, 101, 115, 117, 108, 116, 32, 111, 114, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 80, 111, 115, 116, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 32, 100, 111, 119, 110, 32, 101, 118, 101, 110, 116, 32, 116, 111, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 120, 32, 45, 32, 84, 104, 101, 32, 120, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 112, 111, 105, 110, 116, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 121, 32, 45, 32, 84, 104, 101, 32, 121, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 112, 111, 105, 110, 116, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 101, 118, 101, 110, 116, 32, 114, 101, 115, 117, 108, 116, 32, 111, 114, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 80, 111, 115, 116, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 32, 109, 111, 118, 101, 32, 101, 118, 101, 110, 116, 32, 116, 111, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 120, 32, 45, 32, 84, 104, 101, 32, 120, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 112, 111, 105, 110, 116, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 121, 32, 45, 32, 84, 104, 101, 32, 121, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 112, 111, 105, 110, 116, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 101, 118, 101, 110, 116, 32, 114, 101, 115, 117, 108, 116, 32, 111, 114, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 80, 111, 115, 116, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 32, 101, 110, 116, 101, 114, 32, 101, 118, 101, 110, 116, 32, 116, 111, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 120, 32, 45, 32, 84, 104, 101, 32, 120, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 112, 111, 105, 110, 116, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 121, 32, 45, 32, 84, 104, 101, 32, 121, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 112, 111, 105, 110, 116, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 101, 118, 101, 110, 116, 32, 114, 101, 115, 117, 108, 116, 32, 111, 114, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 80, 111, 115, 116, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 32, 101, 120, 105, 116, 32, 101, 118, 101, 110, 116, 32, 116, 111, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 120, 32, 45, 32, 84, 104, 101, 32, 120, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 112, 111, 105, 110, 116, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 121, 32, 45, 32, 84, 104, 101, 32, 121, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 112, 111, 105, 110, 116, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 101, 118, 101, 110, 116, 32, 114, 101, 115, 117, 108, 116, 32, 111, 114, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 67, 108, 105, 99, 107, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 111, 115, 105, 116, 105, 111, 110, 32, 61, 32, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 112, 111, 115, 105, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 67, 108, 105, 99, 107, 69, 118, 101, 110, 116, 40, 112, 111, 115, 105, 116, 105, 111, 110, 46, 120, 44, 32, 112, 111, 115, 105, 116, 105, 111, 110, 46, 121, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 85, 112, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 111, 115, 105, 116, 105, 111, 110, 32, 61, 32, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 112, 111, 115, 105, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116, 40, 112, 111, 115, 105, 116, 105, 111, 110, 46, 120, 44, 32, 112, 111, 115, 105, 116, 105, 111, 110, 46, 121, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 111, 115, 105, 116, 105, 111, 110, 32, 61, 32, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 112, 111, 115, 105, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69, 118, 101, 110, 116, 40, 112, 111, 115, 105, 116, 105, 111, 110, 46, 120, 44, 32, 112, 111, 115, 105, 116, 105, 111, 110, 46, 121, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 111, 115, 105, 116, 105, 111, 110, 32, 61, 32, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 112, 111, 115, 105, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40, 112, 111, 115, 105, 116, 105, 111, 110, 46, 120, 44, 32, 112, 111, 115, 105, 116, 105, 111, 110, 46, 121, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 111, 115, 105, 116, 105, 111, 110, 32, 61, 32, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 112, 111, 115, 105, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118, 101, 110, 116, 40, 112, 111, 115, 105, 116, 105, 111, 110, 46, 120, 44, 32, 112, 111, 115, 105, 116, 105, 111, 110, 46, 121, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 111, 115, 105, 116, 105, 111, 110, 32, 61, 32, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 112, 111, 115, 105, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40, 112, 111, 115, 105, 116, 105, 111, 110, 46, 120, 44, 32, 112, 111, 115, 105, 116, 105, 111, 110, 46, 121, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 115, 101, 116, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 33, 61, 61, 32, 110, 117, 108, 108, 32, 38, 38, 32, 116, 104, 105, 115, 46, 105, 115, 76, 111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 67, 108, 105, 99, 107, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 67, 108, 105, 99, 107, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 67, 108, 105, 99, 107, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 99, 108, 105, 99, 107, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 67, 108, 105, 99, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 85, 112, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 85, 112, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 85, 112, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 117, 112, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 85, 112, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 100, 111, 119, 110, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 109, 111, 118, 101, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 101, 110, 116, 101, 114, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 108, 101, 97, 118, 101, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 67, 108, 105, 99, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 99, 108, 105, 99, 107, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 67, 108, 105, 99, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 67, 108, 105, 99, 107, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 85, 112, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 117, 112, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 85, 112, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 85, 112, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 100, 111, 119, 110, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 109, 111, 118, 101, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 101, 110, 116, 101, 114, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 108, 101, 97, 118, 101, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 47, 32, 35, 101, 110, 100, 114, 101, 103, 105, 111, 110, 10, 32, 32, 125, 59, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 44, 32, 34, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 118, 97, 114, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 119, 111, 114, 107, 101, 114, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 46, 119, 111, 114, 107, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 32, 61, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 77, 97, 112, 40, 41, 59, 10, 32, 32, 118, 97, 114, 32, 101, 118, 101, 110, 116, 72, 97, 110, 100, 108, 101, 114, 77, 97, 112, 32, 61, 32, 123, 10, 32, 32, 32, 32, 114, 101, 97, 100, 121, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 82, 101, 97, 100, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 99, 111, 109, 112, 108, 101, 116, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 67, 111, 109, 112, 108, 101, 116, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 76, 111, 97, 100, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 108, 111, 97, 100, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 69, 114, 114, 111, 114, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 69, 114, 114, 111, 114, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 76, 111, 97, 100, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 108, 111, 97, 100, 69, 114, 114, 111, 114, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 114, 101, 110, 100, 101, 114, 69, 114, 114, 111, 114, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 110, 100, 101, 114, 69, 114, 114, 111, 114, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 82, 101, 110, 100, 101, 114, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 114, 101, 110, 100, 101, 114, 69, 114, 114, 111, 114, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 111, 112, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 111, 112, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 76, 111, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 108, 111, 111, 112, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 108, 97, 121, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 108, 97, 121, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 80, 108, 97, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 112, 108, 97, 121, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 97, 117, 115, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 97, 117, 115, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 80, 97, 117, 115, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 112, 97, 117, 115, 101, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 111, 112, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 111, 112, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 111, 112, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 102, 114, 97, 109, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 102, 114, 97, 109, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 70, 114, 97, 109, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 102, 114, 97, 109, 101, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 114, 101, 110, 100, 101, 114, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 110, 100, 101, 114, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 82, 101, 110, 100, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 114, 101, 110, 100, 101, 114, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 102, 114, 101, 101, 122, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 102, 114, 101, 101, 122, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 70, 114, 101, 101, 122, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 102, 114, 101, 101, 122, 101, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 117, 110, 102, 114, 101, 101, 122, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 117, 110, 102, 114, 101, 101, 122, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 85, 110, 102, 114, 101, 101, 122, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 117, 110, 102, 114, 101, 101, 122, 101, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 100, 101, 115, 116, 114, 111, 121, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 101, 115, 116, 114, 111, 121, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 68, 101, 115, 116, 114, 111, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 100, 101, 115, 116, 114, 111, 121, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 114, 116, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 114, 116, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 114, 116, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 114, 116, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 111, 112, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 111, 112, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 111, 112, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 84, 114, 97, 110, 115, 105, 116, 105, 111, 110, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 84, 114, 97, 110, 115, 105, 116, 105, 111, 110, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 84, 114, 97, 110, 115, 105, 116, 105, 111, 110, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 84, 114, 97, 110, 115, 105, 116, 105, 111, 110, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 110, 116, 101, 114, 101, 100, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 110, 116, 101, 114, 101, 100, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 110, 116, 101, 114, 101, 100, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 110, 116, 101, 114, 101, 100, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 120, 105, 116, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 120, 105, 116, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 120, 105, 116, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 120, 105, 116, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 117, 115, 116, 111, 109, 69, 118, 101, 110, 116, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 117, 115, 116, 111, 109, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 117, 115, 116, 111, 109, 69, 118, 101, 110, 116, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 117, 115, 116, 111, 109, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 69, 114, 114, 111, 114, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 69, 114, 114, 111, 114, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 69, 114, 114, 111, 114, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 47, 47, 32, 101, 115, 108, 105, 110, 116, 45, 100, 105, 115, 97, 98, 108, 101, 45, 110, 101, 120, 116, 45, 108, 105, 110, 101, 32, 110, 111, 45, 115, 101, 99, 114, 101, 116, 115, 47, 110, 111, 45, 115, 101, 99, 114, 101, 116, 115, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 112, 117, 116, 70, 105, 114, 101, 100, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 112, 117, 116, 70, 105, 114, 101, 100, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 112, 117, 116, 70, 105, 114, 101, 100, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 112, 117, 116, 70, 105, 114, 101, 100, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 111, 109, 109, 97, 110, 100, 115, 32, 61, 32, 123, 10, 32, 32, 32, 32, 115, 101, 116, 84, 114, 97, 110, 115, 102, 111, 114, 109, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 84, 114, 97, 110, 115, 102, 111, 114, 109, 40, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 116, 114, 97, 110, 115, 102, 111, 114, 109, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 103, 101, 116, 84, 114, 97, 110, 115, 102, 111, 114, 109, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 103, 101, 116, 84, 114, 97, 110, 115, 102, 111, 114, 109, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 103, 101, 116, 68, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 83, 116, 97, 116, 101, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 67, 111, 117, 110, 116, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 111, 112, 67, 111, 117, 110, 116, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 76, 111, 97, 100, 101, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 76, 111, 97, 100, 101, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 80, 97, 117, 115, 101, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 80, 97, 117, 115, 101, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 80, 108, 97, 121, 105, 110, 103, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 83, 116, 111, 112, 112, 101, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 83, 116, 111, 112, 112, 101, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 70, 114, 111, 122, 101, 110, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 70, 114, 111, 122, 101, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 111, 112, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 111, 100, 101, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 109, 111, 100, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 112, 101, 101, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 112, 101, 101, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 116, 97, 108, 70, 114, 97, 109, 101, 115, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 116, 111, 116, 97, 108, 70, 114, 97, 109, 101, 115, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 117, 114, 97, 116, 105, 111, 110, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 100, 117, 114, 97, 116, 105, 111, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 109, 97, 114, 107, 101, 114, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 115, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 109, 97, 114, 107, 101, 114, 115, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 99, 116, 105, 118, 101, 84, 104, 101, 109, 101, 73, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 97, 99, 116, 105, 118, 101, 84, 104, 101, 109, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 117, 116, 111, 112, 108, 97, 121, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 97, 117, 116, 111, 112, 108, 97, 121, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101, 110, 116, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 103, 109, 101, 110, 116, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 121, 111, 117, 116, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 97, 121, 111, 117, 116, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101, 110, 116, 68, 117, 114, 97, 116, 105, 111, 110, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 103, 109, 101, 110, 116, 68, 117, 114, 97, 116, 105, 111, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 82, 101, 97, 100, 121, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 82, 101, 97, 100, 121, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 110, 105, 102, 101, 115, 116, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 109, 97, 110, 105, 102, 101, 115, 116, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 116, 97, 116, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 76, 97, 121, 111, 117, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 97, 121, 111, 117, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 108, 97, 121, 111, 117, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 76, 97, 121, 111, 117, 116, 40, 108, 97, 121, 111, 117, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99, 101, 115, 115, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 114, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 114, 116, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 111, 112, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 111, 97, 100, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 111, 97, 100, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 111, 97, 100, 68, 97, 116, 97, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 111, 97, 100, 68, 97, 116, 97, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 67, 108, 105, 99, 107, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 67, 108, 105, 99, 107, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 110, 97, 109, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 110, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 118, 97, 108, 117, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 118, 97, 108, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 110, 97, 109, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 110, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 118, 97, 108, 117, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 118, 97, 108, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 67, 111, 110, 102, 105, 103, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 110, 102, 105, 103, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 99, 111, 110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 67, 111, 110, 102, 105, 103, 40, 99, 111, 110, 102, 105, 103, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 110, 97, 109, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 110, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 118, 97, 108, 117, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 118, 97, 108, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 110, 97, 109, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 110, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 110, 97, 109, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 110, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 110, 97, 109, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 110, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 70, 105, 114, 101, 69, 118, 101, 110, 116, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 110, 97, 109, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 110, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 70, 105, 114, 101, 69, 118, 101, 110, 116, 40, 110, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 83, 116, 97, 116, 117, 115, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 83, 116, 97, 116, 117, 115, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 67, 117, 114, 114, 101, 110, 116, 83, 116, 97, 116, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 67, 117, 114, 114, 101, 110, 116, 83, 116, 97, 116, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 65, 99, 116, 105, 118, 101, 73, 100, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 65, 99, 116, 105, 118, 101, 73, 100, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 118, 101, 114, 114, 105, 100, 101, 83, 116, 97, 116, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 115, 116, 97, 116, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 109, 109, 101, 100, 105, 97, 116, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 109, 109, 101, 100, 105, 97, 116, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 118, 101, 114, 114, 105, 100, 101, 83, 116, 97, 116, 101, 40, 115, 116, 97, 116, 101, 44, 32, 105, 109, 109, 101, 100, 105, 97, 116, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 99, 114, 101, 97, 116, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 110, 102, 105, 103, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 99, 111, 110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 104, 97, 115, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 97, 108, 114, 101, 97, 100, 121, 32, 101, 120, 105, 115, 116, 115, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 110, 101, 119, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 40, 99, 111, 110, 102, 105, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 61, 32, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 61, 32, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 115, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 32, 105, 110, 115, 116, 97, 110, 99, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 118, 101, 110, 116, 115, 32, 61, 32, 91, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 99, 111, 109, 112, 108, 101, 116, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 102, 114, 97, 109, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 108, 111, 97, 100, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 108, 111, 97, 100, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 114, 101, 110, 100, 101, 114, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 108, 111, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 112, 97, 117, 115, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 112, 108, 97, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 100, 101, 115, 116, 114, 111, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 102, 114, 101, 101, 122, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 117, 110, 102, 114, 101, 101, 122, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 114, 101, 110, 100, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 114, 101, 97, 100, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 114, 116, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 84, 114, 97, 110, 115, 105, 116, 105, 111, 110, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 110, 116, 101, 114, 101, 100, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 120, 105, 116, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 117, 115, 116, 111, 109, 69, 118, 101, 110, 116, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 112, 117, 116, 70, 105, 114, 101, 100, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 34, 10, 32, 32, 32, 32, 32, 32, 93, 59, 10, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 115, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 101, 118, 101, 110, 116, 44, 32, 101, 118, 101, 110, 116, 72, 97, 110, 100, 108, 101, 114, 77, 97, 112, 91, 101, 118, 101, 110, 116, 93, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 100, 101, 115, 116, 114, 111, 121, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 100, 101, 115, 116, 114, 111, 121, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 100, 101, 108, 101, 116, 101, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 102, 114, 101, 101, 122, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 110, 102, 105, 103, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 99, 111, 110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 97, 100, 40, 99, 111, 110, 102, 105, 103, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 40, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 84, 104, 101, 109, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 104, 101, 109, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 116, 104, 101, 109, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 84, 104, 101, 109, 101, 40, 116, 104, 101, 109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 84, 104, 101, 109, 101, 68, 97, 116, 97, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 104, 101, 109, 101, 68, 97, 116, 97, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 116, 104, 101, 109, 101, 68, 97, 116, 97, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 84, 104, 101, 109, 101, 68, 97, 116, 97, 40, 116, 104, 101, 109, 101, 68, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 97, 117, 115, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 112, 97, 117, 115, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 108, 97, 121, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 112, 108, 97, 121, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 114, 101, 115, 105, 122, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 61, 32, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 61, 32, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 114, 101, 115, 105, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99, 101, 115, 115, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 70, 114, 97, 109, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 102, 114, 97, 109, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 102, 114, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 70, 114, 97, 109, 101, 40, 102, 114, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 77, 111, 100, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 111, 100, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 109, 111, 100, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 77, 111, 100, 101, 40, 109, 111, 100, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 82, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 82, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 40, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 83, 101, 103, 109, 101, 110, 116, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 101, 103, 109, 101, 110, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 115, 101, 103, 109, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 83, 101, 103, 109, 101, 110, 116, 40, 115, 101, 103, 109, 101, 110, 116, 91, 48, 93, 44, 32, 115, 101, 103, 109, 101, 110, 116, 91, 49, 93, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 83, 112, 101, 101, 100, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 112, 101, 101, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 115, 112, 101, 101, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 83, 112, 101, 101, 100, 40, 115, 112, 101, 101, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 85, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 85, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 40, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 40, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 117, 114, 108, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 111, 112, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 117, 110, 102, 114, 101, 101, 122, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 117, 110, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 116, 119, 101, 101, 110, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 102, 114, 97, 109, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 102, 114, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 117, 114, 97, 116, 105, 111, 110, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 100, 117, 114, 97, 116, 105, 111, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 116, 119, 101, 101, 110, 40, 102, 114, 97, 109, 101, 44, 32, 100, 117, 114, 97, 116, 105, 111, 110, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 116, 119, 101, 101, 110, 84, 111, 77, 97, 114, 107, 101, 114, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114, 107, 101, 114, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 109, 97, 114, 107, 101, 114, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 117, 114, 97, 116, 105, 111, 110, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 100, 117, 114, 97, 116, 105, 111, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 116, 119, 101, 101, 110, 84, 111, 77, 97, 114, 107, 101, 114, 40, 109, 97, 114, 107, 101, 114, 44, 32, 100, 117, 114, 97, 116, 105, 111, 110, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 86, 105, 101, 119, 112, 111, 114, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 86, 105, 101, 119, 112, 111, 114, 116, 40, 120, 44, 32, 121, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 83, 105, 122, 101, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 104, 101, 105, 103, 104, 116, 44, 32, 119, 105, 100, 116, 104, 32, 125, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 97, 110, 105, 109, 97, 116, 105, 111, 110, 83, 105, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 101, 105, 103, 104, 116, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 119, 105, 100, 116, 104, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 77, 97, 114, 107, 101, 114, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114, 107, 101, 114, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 109, 97, 114, 107, 101, 114, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 77, 97, 114, 107, 101, 114, 40, 109, 97, 114, 107, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99, 101, 115, 115, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 76, 111, 111, 112, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 111, 112, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 108, 111, 111, 112, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 76, 111, 111, 112, 40, 108, 111, 111, 112, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99, 101, 115, 115, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 76, 111, 111, 112, 67, 111, 117, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 111, 112, 67, 111, 117, 110, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 108, 111, 111, 112, 67, 111, 117, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 76, 111, 111, 112, 67, 111, 117, 110, 116, 40, 108, 111, 111, 112, 67, 111, 117, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99, 101, 115, 115, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 101, 120, 101, 99, 117, 116, 101, 67, 111, 109, 109, 97, 110, 100, 40, 114, 112, 99, 82, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 101, 116, 104, 111, 100, 32, 61, 32, 114, 112, 99, 82, 101, 113, 117, 101, 115, 116, 46, 109, 101, 116, 104, 111, 100, 59, 10, 32, 32, 32, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111, 102, 32, 99, 111, 109, 109, 97, 110, 100, 115, 91, 109, 101, 116, 104, 111, 100, 93, 32, 61, 61, 61, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 111, 109, 109, 97, 110, 100, 115, 91, 109, 101, 116, 104, 111, 100, 93, 40, 114, 112, 99, 82, 101, 113, 117, 101, 115, 116, 41, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 77, 101, 116, 104, 111, 100, 32, 36, 123, 109, 101, 116, 104, 111, 100, 125, 32, 105, 115, 32, 110, 111, 116, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 101, 100, 32, 105, 110, 32, 99, 111, 109, 109, 97, 110, 100, 115, 46, 96, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 10, 32, 32, 115, 101, 108, 102, 46, 111, 110, 109, 101, 115, 115, 97, 103, 101, 32, 61, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 117, 108, 116, 32, 61, 32, 101, 120, 101, 99, 117, 116, 101, 67, 111, 109, 109, 97, 110, 100, 40, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 46, 105, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 46, 109, 101, 116, 104, 111, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 114, 114, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 114, 114, 111, 114, 82, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 46, 105, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 46, 109, 101, 116, 104, 111, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 114, 114, 111, 114, 58, 32, 101, 114, 114, 111, 114, 46, 109, 101, 115, 115, 97, 103, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 101, 114, 114, 111, 114, 82, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 100, 117, 109, 109, 121, 32, 61, 32, 34, 34, 59, 10, 32, 32, 118, 97, 114, 32, 100, 111, 116, 108, 111, 116, 116, 105, 101, 95, 119, 111, 114, 107, 101, 114, 95, 100, 101, 102, 97, 117, 108, 116, 32, 61, 32, 100, 117, 109, 109, 121, 59, 10, 125, 41, 40, 41, 59, 10])],{
            type: "application/javascript"
        })
          , a = URL.createObjectURL(e)
          , r = new Worker(a);
        return URL.revokeObjectURL(a),
        r
    }
}
,
a(_1, "c2"),
_1), n0 = a0, f1, s0 = (f1 = class {
    constructor() {
        m(this, "_workers", new Map),
        m(this, "_animationWorkerMap", new Map);
    }
    getWorker(e) {
        return this._workers.has(e) || this._workers.set(e, new n0),
        this._workers.get(e)
    }
    assignAnimationToWorker(e, a) {
        this._animationWorkerMap.set(e, a);
    }
    unassignAnimationFromWorker(e) {
        this._animationWorkerMap.delete(e);
    }
    sendMessage(e, a, r) {
        this.getWorker(e).postMessage(a, r || []);
    }
    terminateWorker(e) {
        let a = this._workers.get(e);
        a && (a.terminate(),
        this._workers.delete(e));
    }
}
,
a(f1, "k1"),
f1);
function K2(f, e) {
    if (f instanceof HTMLCanvasElement) {
        let {height: a, width: r} = f.getBoundingClientRect();
        if (a !== 0 && r !== 0)
            return {
                width: r * e,
                height: a * e
            }
    }
    return {
        width: f.width,
        height: f.height
    }
}
a(K2, "X2");
function Q2() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9)
}
a(Q2, "Z2");
var R, _2 = (R = class {
    constructor(e) {
        m(this, "_eventManager", new Z2),
        m(this, "_id"),
        m(this, "_worker"),
        m(this, "_canvas"),
        m(this, "_dotLottieInstanceState", {
            loopCount: 0,
            markers: [],
            autoplay: false,
            backgroundColor: "",
            currentFrame: 0,
            duration: 0,
            loop: false,
            mode: "forward",
            segment: [0, 0],
            segmentDuration: 0,
            speed: 1,
            totalFrames: 0,
            isLoaded: false,
            isPlaying: false,
            isPaused: false,
            isStopped: true,
            isFrozen: false,
            useFrameInterpolation: false,
            renderConfig: {
                devicePixelRatio: Y()
            },
            activeAnimationId: "",
            activeThemeId: "",
            layout: void 0,
            marker: void 0,
            isReady: false,
            manifest: null
        }),
        m(this, "_created", false),
        m(this, "_boundOnClick", null),
        m(this, "_boundOnPointerUp", null),
        m(this, "_boundOnPointerDown", null),
        m(this, "_boundOnPointerMove", null),
        m(this, "_boundOnPointerEnter", null),
        m(this, "_boundOnPointerLeave", null),
        this._canvas = e.canvas,
        this._id = `dotlottie-${Q2()}`;
        let a = e.workerId || "defaultWorker";
        this._worker = R._workerManager.getWorker(a),
        R._workerManager.assignAnimationToWorker(this._id, a),
        R._wasmUrl && this._sendMessage("setWasmUrl", {
            url: R._wasmUrl
        }),
        this._create({
            ...e,
            renderConfig: {
                ...e.renderConfig,
                devicePixelRatio: e.renderConfig?.devicePixelRatio || Y(),
                freezeOnOffscreen: e.renderConfig?.freezeOnOffscreen ?? true
            }
        }),
        this._worker.addEventListener("message", this._handleWorkerEvent.bind(this));
    }
    async _handleWorkerEvent(e) {
        let a = e.data;
        if (!a.id && (a.method === "onLoad" && a.result.instanceId === this._id && (await this._updateDotLottieInstanceState(),
        this._eventManager.dispatch(a.result.event),
        P && this._canvas instanceof HTMLCanvasElement && (this._dotLottieInstanceState.renderConfig.freezeOnOffscreen && (W.observe(this._canvas, this),
        s1(this._canvas) || await this.freeze()),
        this._dotLottieInstanceState.renderConfig.autoResize && z.observe(this._canvas, this))),
        a.method === "onComplete" && a.result.instanceId === this._id && (await this._updateDotLottieInstanceState(),
        this._eventManager.dispatch(a.result.event)),
        a.method === "onDestroy" && a.result.instanceId === this._id && this._eventManager.dispatch(a.result.event),
        a.method === "onUnfreeze" && a.result.instanceId === this._id && (await this._updateDotLottieInstanceState(),
        this._dotLottieInstanceState.isFrozen = false,
        this._eventManager.dispatch(a.result.event)),
        a.method === "onFrame" && a.result.instanceId === this._id && (this._dotLottieInstanceState.currentFrame = a.result.event.currentFrame,
        this._eventManager.dispatch(a.result.event)),
        a.method === "onRender" && a.result.instanceId === this._id && this._eventManager.dispatch(a.result.event),
        a.method === "onFreeze" && a.result.instanceId === this._id && (await this._updateDotLottieInstanceState(),
        this._eventManager.dispatch(a.result.event)),
        a.method === "onPause" && a.result.instanceId === this._id && (await this._updateDotLottieInstanceState(),
        this._eventManager.dispatch(a.result.event)),
        a.method === "onPlay" && a.result.instanceId === this._id && (await this._updateDotLottieInstanceState(),
        this._eventManager.dispatch(a.result.event)),
        a.method === "onStop" && a.result.instanceId === this._id && (await this._updateDotLottieInstanceState(),
        this._eventManager.dispatch(a.result.event)),
        a.method === "onLoadError" && a.result.instanceId === this._id && (await this._updateDotLottieInstanceState(),
        this._eventManager.dispatch(a.result.event)),
        a.method === "onRenderError" && a.result.instanceId === this._id && this._eventManager.dispatch(a.result.event),
        a.method === "onReady" && a.result.instanceId === this._id && (await this._updateDotLottieInstanceState(),
        this._eventManager.dispatch(a.result.event)),
        a.method === "onLoop" && a.result.instanceId === this._id && (await this._updateDotLottieInstanceState(),
        this._eventManager.dispatch(a.result.event)),
        a.method === "onStateMachineStart" && a.result.instanceId === this._id && (await this._updateDotLottieInstanceState(),
        this._setupStateMachineListeners(),
        this._eventManager.dispatch(a.result.event)),
        a.method === "onStateMachineStop" && a.result.instanceId === this._id && (await this._updateDotLottieInstanceState(),
        this._cleanupStateMachineListeners(),
        this._eventManager.dispatch(a.result.event)),
        a.method === "onStateMachineTransition" && a.result.instanceId === this._id && (await this._updateDotLottieInstanceState(),
        this._eventManager.dispatch(a.result.event)),
        a.method === "onStateMachineStateEntered" && a.result.instanceId === this._id && (await this._updateDotLottieInstanceState(),
        this._eventManager.dispatch(a.result.event)),
        a.method === "onStateMachineStateExit" && a.result.instanceId === this._id && (await this._updateDotLottieInstanceState(),
        this._eventManager.dispatch(a.result.event)),
        a.method === "onStateMachineCustomEvent" && a.result.instanceId === this._id && (await this._updateDotLottieInstanceState(),
        this._eventManager.dispatch(a.result.event)),
        a.method === "onStateMachineError" && a.result.instanceId === this._id && (await this._updateDotLottieInstanceState(),
        this._eventManager.dispatch(a.result.event)),
        a.method === "onStateMachineBooleanInputValueChange" && a.result.instanceId === this._id && (await this._updateDotLottieInstanceState(),
        this._eventManager.dispatch(a.result.event)),
        a.method === "onStateMachineNumericInputValueChange" && a.result.instanceId === this._id && (await this._updateDotLottieInstanceState(),
        this._eventManager.dispatch(a.result.event)),
        a.method === "onStateMachineStringInputValueChange" && a.result.instanceId === this._id && (await this._updateDotLottieInstanceState(),
        this._eventManager.dispatch(a.result.event)),
        a.method === "onStateMachineInputFired" && a.result.instanceId === this._id && (await this._updateDotLottieInstanceState(),
        this._eventManager.dispatch(a.result.event)),
        a.method === "onStateMachineInternalMessage" && a.result.instanceId === this._id)) {
            await this._updateDotLottieInstanceState();
            let r = a.result.event;
            r.message.startsWith("OpenUrl: ") && t3(r.message);
        }
    }
    async _create(e) {
        let a;
        this._canvas instanceof HTMLCanvasElement ? a = this._canvas.transferControlToOffscreen() : a = this._canvas;
        let {instanceId: r} = await this._sendMessage("create", {
            instanceId: this._id,
            config: {
                ...e,
                canvas: a
            },
            ...K2(this._canvas, e.renderConfig?.devicePixelRatio || Y())
        }, [a]);
        if (r !== this._id)
            throw new Error("Instance ID mismatch");
        this._created = true,
        await this._updateDotLottieInstanceState();
    }
    get loopCount() {
        return this._dotLottieInstanceState.loopCount
    }
    get isLoaded() {
        return this._dotLottieInstanceState.isLoaded
    }
    get isPlaying() {
        return this._dotLottieInstanceState.isPlaying
    }
    get isPaused() {
        return this._dotLottieInstanceState.isPaused
    }
    get isStopped() {
        return this._dotLottieInstanceState.isStopped
    }
    get currentFrame() {
        return this._dotLottieInstanceState.currentFrame
    }
    get isFrozen() {
        return this._dotLottieInstanceState.isFrozen
    }
    get segmentDuration() {
        return this._dotLottieInstanceState.segmentDuration
    }
    get totalFrames() {
        return this._dotLottieInstanceState.totalFrames
    }
    get segment() {
        return this._dotLottieInstanceState.segment
    }
    get speed() {
        return this._dotLottieInstanceState.speed
    }
    get duration() {
        return this._dotLottieInstanceState.duration
    }
    get isReady() {
        return this._dotLottieInstanceState.isReady
    }
    get mode() {
        return this._dotLottieInstanceState.mode
    }
    get canvas() {
        return this._canvas
    }
    get autoplay() {
        return this._dotLottieInstanceState.autoplay
    }
    get backgroundColor() {
        return this._dotLottieInstanceState.backgroundColor
    }
    get loop() {
        return this._dotLottieInstanceState.loop
    }
    get useFrameInterpolation() {
        return this._dotLottieInstanceState.useFrameInterpolation
    }
    get renderConfig() {
        return this._dotLottieInstanceState.renderConfig
    }
    get manifest() {
        return this._dotLottieInstanceState.manifest
    }
    get activeAnimationId() {
        return this._dotLottieInstanceState.activeAnimationId
    }
    get marker() {
        return this._dotLottieInstanceState.marker
    }
    get activeThemeId() {
        return this._dotLottieInstanceState.activeThemeId
    }
    get layout() {
        return this._dotLottieInstanceState.layout
    }
    async play() {
        this._created && (await this._sendMessage("play", {
            instanceId: this._id
        }),
        await this._updateDotLottieInstanceState(),
        P && this._canvas instanceof HTMLCanvasElement && this._dotLottieInstanceState.renderConfig.freezeOnOffscreen && !s1(this._canvas) && await this.freeze());
    }
    async pause() {
        this._created && (await this._sendMessage("pause", {
            instanceId: this._id
        }),
        await this._updateDotLottieInstanceState());
    }
    async stop() {
        this._created && (await this._sendMessage("stop", {
            instanceId: this._id
        }),
        await this._updateDotLottieInstanceState());
    }
    async setSpeed(e) {
        this._created && (await this._sendMessage("setSpeed", {
            instanceId: this._id,
            speed: e
        }),
        await this._updateDotLottieInstanceState());
    }
    async setMode(e) {
        this._created && (await this._sendMessage("setMode", {
            instanceId: this._id,
            mode: e
        }),
        await this._updateDotLottieInstanceState());
    }
    async setFrame(e) {
        this._created && (await this._sendMessage("setFrame", {
            frame: e,
            instanceId: this._id
        }),
        await this._updateDotLottieInstanceState());
    }
    async setSegment(e, a) {
        this._created && (await this._sendMessage("setSegment", {
            instanceId: this._id,
            segment: [e, a]
        }),
        await this._updateDotLottieInstanceState());
    }
    async setRenderConfig(e) {
        if (!this._created)
            return;
        let {devicePixelRatio: a, freezeOnOffscreen: r, quality: l, ...L} = e;
        await this._sendMessage("setRenderConfig", {
            instanceId: this._id,
            renderConfig: {
                ...this._dotLottieInstanceState.renderConfig,
                ...L,
                devicePixelRatio: a || Y(),
                freezeOnOffscreen: r ?? true,
                ...l !== void 0 && {
                    quality: l
                }
            }
        }),
        await this._updateDotLottieInstanceState(),
        P && this._canvas instanceof HTMLCanvasElement && (this._dotLottieInstanceState.renderConfig.autoResize ? z.observe(this._canvas, this) : z.unobserve(this._canvas),
        this._dotLottieInstanceState.renderConfig.freezeOnOffscreen ? (W.observe(this._canvas, this),
        s1(this._canvas) || await this.freeze()) : (W.unobserve(this._canvas),
        this._dotLottieInstanceState.isFrozen && await this.unfreeze()));
    }
    async setUseFrameInterpolation(e) {
        this._created && (await this._sendMessage("setUseFrameInterpolation", {
            instanceId: this._id,
            useFrameInterpolation: e
        }),
        await this._updateDotLottieInstanceState());
    }
    async setTheme(e) {
        if (!this._created)
            return false;
        let a = this._sendMessage("setTheme", {
            instanceId: this._id,
            themeId: e
        });
        return await this._updateDotLottieInstanceState(),
        a
    }
    async load(e) {
        this._created && (await this._sendMessage("load", {
            config: e,
            instanceId: this._id
        }),
        await this._updateDotLottieInstanceState());
    }
    async setLoop(e) {
        this._created && (await this._sendMessage("setLoop", {
            instanceId: this._id,
            loop: e
        }),
        await this._updateDotLottieInstanceState());
    }
    async setLoopCount(e) {
        this._created && (await this._sendMessage("setLoopCount", {
            instanceId: this._id,
            loopCount: e
        }),
        await this._updateDotLottieInstanceState());
    }
    async resize() {
        if (!this._created)
            return;
        let {height: e, width: a} = K2(this._canvas, this._dotLottieInstanceState.renderConfig.devicePixelRatio || Y());
        await this._sendMessage("resize", {
            height: e,
            instanceId: this._id,
            width: a
        }),
        await this._updateDotLottieInstanceState();
    }
    async destroy() {
        this._created && (this._created = false,
        await this._sendMessage("destroy", {
            instanceId: this._id
        }),
        this._cleanupStateMachineListeners(),
        R._workerManager.unassignAnimationFromWorker(this._id),
        this._eventManager.removeAllEventListeners(),
        P && this._canvas instanceof HTMLCanvasElement && (W.unobserve(this._canvas),
        z.unobserve(this._canvas)));
    }
    async freeze() {
        this._created && (await this._sendMessage("freeze", {
            instanceId: this._id
        }),
        await this._updateDotLottieInstanceState());
    }
    async unfreeze() {
        this._created && (await this._sendMessage("unfreeze", {
            instanceId: this._id
        }),
        await this._updateDotLottieInstanceState());
    }
    async setBackgroundColor(e) {
        this._created && (await this._sendMessage("setBackgroundColor", {
            instanceId: this._id,
            backgroundColor: e
        }),
        await this._updateDotLottieInstanceState());
    }
    async loadAnimation(e) {
        this._created && (await this._sendMessage("loadAnimation", {
            animationId: e,
            instanceId: this._id
        }),
        await this._updateDotLottieInstanceState());
    }
    async setLayout(e) {
        this._created && (await this._sendMessage("setLayout", {
            instanceId: this._id,
            layout: e
        }),
        await this._updateDotLottieInstanceState());
    }
    async _updateDotLottieInstanceState() {
        if (!this._created)
            return;
        let e = await this._sendMessage("getDotLottieInstanceState", {
            instanceId: this._id
        });
        this._dotLottieInstanceState = e.state;
    }
    markers() {
        return this._dotLottieInstanceState.markers
    }
    async setMarker(e) {
        this._created && (await this._sendMessage("setMarker", {
            instanceId: this._id,
            marker: e
        }),
        await this._updateDotLottieInstanceState());
    }
    async setThemeData(e) {
        if (!this._created)
            return false;
        let a = await this._sendMessage("setThemeData", {
            instanceId: this._id,
            themeData: e
        });
        return await this._updateDotLottieInstanceState(),
        a
    }
    async setViewport(e, a, r, l) {
        return this._created ? this._sendMessage("setViewport", {
            x: e,
            y: a,
            width: r,
            height: l,
            instanceId: this._id
        }) : false
    }
    async animationSize() {
        return this._created ? this._sendMessage("animationSize", {
            instanceId: this._id
        }) : {
            height: 0,
            width: 0
        }
    }
    async tween(e, a) {
        return this._created ? this._sendMessage("tween", {
            instanceId: this._id,
            frame: e,
            duration: a
        }) : false
    }
    async tweenToMarker(e, a) {
        return this._created ? this._sendMessage("tweenToMarker", {
            instanceId: this._id,
            marker: e,
            duration: a
        }) : false
    }
    async setTransform(e) {
        return this._created ? this._sendMessage("setTransform", {
            instanceId: this._id,
            transform: e
        }) : false
    }
    async getTransform() {
        if (this._created)
            return this._sendMessage("getTransform", {
                instanceId: this._id
            })
    }
    async _sendMessage(e, a$1, r) {
        let l = {
            id: `dotlottie-request-${Q2()}`,
            method: e,
            params: a$1
        };
        return this._worker.postMessage(l, r || []),
        new Promise( (L, N) => {
            let J = a(P1 => {
                let A = P1.data;
                A.id === l.id && (this._worker.removeEventListener("message", J),
                A.error ? N(new Error(`Failed to execute method ${e}: ${A.error}`)) : L(A.result));
            }
            , "K");
            this._worker.addEventListener("message", J);
        }
        )
    }
    addEventListener(e, a) {
        this._eventManager.addEventListener(e, a);
    }
    removeEventListener(e, a) {
        this._eventManager.removeEventListener(e, a);
    }
    static setWasmUrl(e) {
        R._wasmUrl = e;
    }
    async stateMachineLoad(e) {
        if (!this._created)
            return false;
        let a = await this._sendMessage("stateMachineLoad", {
            instanceId: this._id,
            stateMachineId: e
        });
        return await this._updateDotLottieInstanceState(),
        a
    }
    async stateMachineLoadData(e) {
        if (!this._created)
            return false;
        let a = await this._sendMessage("stateMachineLoadData", {
            instanceId: this._id,
            stateMachineData: e
        });
        return await this._updateDotLottieInstanceState(),
        a
    }
    async stateMachineStart() {
        if (!this._created)
            return false;
        let e = await this._sendMessage("stateMachineStart", {
            instanceId: this._id
        });
        return e && (this._setupStateMachineListeners(),
        await this._updateDotLottieInstanceState()),
        e
    }
    async stateMachineStop() {
        return this._created ? (this._cleanupStateMachineListeners(),
        this._sendMessage("stateMachineStop", {
            instanceId: this._id
        })) : false
    }
    async stateMachineSetNumericInput(e, a) {
        return this._created ? this._sendMessage("stateMachineSetNumericInput", {
            instanceId: this._id,
            name: e,
            value: a
        }) : false
    }
    async stateMachineSetBooleanInput(e, a) {
        return this._created ? this._sendMessage("stateMachineSetBooleanInput", {
            instanceId: this._id,
            name: e,
            value: a
        }) : false
    }
    async stateMachineSetConfig(e) {
        this._created && this._sendMessage("stateMachineSetConfig", {
            instanceId: this._id,
            config: e
        });
    }
    async stateMachineSetStringInput(e, a) {
        return this._created ? this._sendMessage("stateMachineSetStringInput", {
            instanceId: this._id,
            name: e,
            value: a
        }) : false
    }
    async stateMachineGetNumericInput(e) {
        if (this._created)
            return this._sendMessage("stateMachineGetNumericInput", {
                instanceId: this._id,
                name: e
            })
    }
    async stateMachineGetBooleanInput(e) {
        if (this._created)
            return this._sendMessage("stateMachineGetBooleanInput", {
                instanceId: this._id,
                name: e
            })
    }
    async stateMachineGetStringInput(e) {
        if (this._created)
            return this._sendMessage("stateMachineGetStringInput", {
                instanceId: this._id,
                name: e
            })
    }
    async stateMachineFireEvent(e) {
        this._created && this._sendMessage("stateMachineFireEvent", {
            instanceId: this._id,
            name: e
        });
    }
    async stateMachineGetStatus() {
        return this._created ? this._sendMessage("stateMachineGetStatus", {
            instanceId: this._id
        }) : ""
    }
    async stateMachineGetCurrentState() {
        return this._created ? this._sendMessage("stateMachineGetCurrentState", {
            instanceId: this._id
        }) : ""
    }
    async stateMachineGetActiveId() {
        return this._created ? this._sendMessage("stateMachineGetActiveId", {
            instanceId: this._id
        }) : ""
    }
    async stateMachineOverrideState(e, a=false) {
        return this._created ? this._sendMessage("stateMachineOverrideState", {
            instanceId: this._id,
            state: e,
            immediate: a
        }) : false
    }
    async stateMachineGet(e) {
        return this._created ? this._sendMessage("stateMachineGet", {
            instanceId: this._id,
            stateMachineId: e
        }) : ""
    }
    async stateMachineGetListeners() {
        return this._created ? this._sendMessage("stateMachineGetListeners", {
            instanceId: this._id
        }) : []
    }
    async stateMachinePostClickEvent(e, a) {
        if (this._created)
            return this._sendMessage("stateMachinePostClickEvent", {
                instanceId: this._id,
                x: e,
                y: a
            })
    }
    async stateMachinePostPointerUpEvent(e, a) {
        if (this._created)
            return this._sendMessage("stateMachinePostPointerUpEvent", {
                instanceId: this._id,
                x: e,
                y: a
            })
    }
    async stateMachinePostPointerDownEvent(e, a) {
        if (this._created)
            return this._sendMessage("stateMachinePostPointerDownEvent", {
                instanceId: this._id,
                x: e,
                y: a
            })
    }
    async stateMachinePostPointerMoveEvent(e, a) {
        if (this._created)
            return this._sendMessage("stateMachinePostPointerMoveEvent", {
                instanceId: this._id,
                x: e,
                y: a
            })
    }
    async stateMachinePostPointerEnterEvent(e, a) {
        if (this._created)
            return this._sendMessage("stateMachinePostPointerEnterEvent", {
                instanceId: this._id,
                x: e,
                y: a
            })
    }
    async stateMachinePostPointerExitEvent(e, a) {
        if (this._created)
            return this._sendMessage("stateMachinePostPointerExitEvent", {
                instanceId: this._id,
                x: e,
                y: a
            })
    }
    _onClick(e) {
        let a = $(e);
        a && this._sendMessage("stateMachinePostClickEvent", {
            instanceId: this._id,
            x: a.x,
            y: a.y
        });
    }
    _onPointerUp(e) {
        let a = $(e);
        a && this._sendMessage("stateMachinePostPointerUpEvent", {
            instanceId: this._id,
            x: a.x,
            y: a.y
        });
    }
    _onPointerDown(e) {
        let a = $(e);
        a && this._sendMessage("stateMachinePostPointerDownEvent", {
            instanceId: this._id,
            x: a.x,
            y: a.y
        });
    }
    _onPointerMove(e) {
        let a = $(e);
        a && this._sendMessage("stateMachinePostPointerMoveEvent", {
            instanceId: this._id,
            x: a.x,
            y: a.y
        });
    }
    _onPointerEnter(e) {
        let a = $(e);
        a && this._sendMessage("stateMachinePostPointerEnterEvent", {
            instanceId: this._id,
            x: a.x,
            y: a.y
        });
    }
    _onPointerLeave(e) {
        let a = $(e);
        a && this._sendMessage("stateMachinePostPointerExitEvent", {
            instanceId: this._id,
            x: a.x,
            y: a.y
        });
    }
    async _setupStateMachineListeners() {
        if (P && this._canvas instanceof HTMLCanvasElement && this.isLoaded) {
            let e = await this._sendMessage("stateMachineGetListeners", {
                instanceId: this._id
            });
            if (e.length === 0)
                return;
            this._cleanupStateMachineListeners(),
            e.includes("Click") && (this._boundOnClick = this._onClick.bind(this),
            this._canvas.addEventListener("click", this._boundOnClick)),
            e.includes("PointerUp") && (this._boundOnPointerUp = this._onPointerUp.bind(this),
            this._canvas.addEventListener("pointerup", this._boundOnPointerUp)),
            e.includes("PointerDown") && (this._boundOnPointerDown = this._onPointerDown.bind(this),
            this._canvas.addEventListener("pointerdown", this._boundOnPointerDown)),
            e.includes("PointerMove") && (this._boundOnPointerMove = this._onPointerMove.bind(this),
            this._canvas.addEventListener("pointermove", this._boundOnPointerMove)),
            e.includes("PointerEnter") && (this._boundOnPointerEnter = this._onPointerEnter.bind(this),
            this._canvas.addEventListener("pointerenter", this._boundOnPointerEnter)),
            e.includes("PointerExit") && (this._boundOnPointerLeave = this._onPointerLeave.bind(this),
            this._canvas.addEventListener("pointerleave", this._boundOnPointerLeave));
        }
    }
    _cleanupStateMachineListeners() {
        P && this._canvas instanceof HTMLCanvasElement && (this._boundOnClick && (this._canvas.removeEventListener("click", this._boundOnClick),
        this._boundOnClick = null),
        this._boundOnPointerUp && (this._canvas.removeEventListener("pointerup", this._boundOnPointerUp),
        this._boundOnPointerUp = null),
        this._boundOnPointerDown && (this._canvas.removeEventListener("pointerdown", this._boundOnPointerDown),
        this._boundOnPointerDown = null),
        this._boundOnPointerMove && (this._canvas.removeEventListener("pointermove", this._boundOnPointerMove),
        this._boundOnPointerMove = null),
        this._boundOnPointerEnter && (this._canvas.removeEventListener("pointerenter", this._boundOnPointerEnter),
        this._boundOnPointerEnter = null),
        this._boundOnPointerLeave && (this._canvas.removeEventListener("pointerleave", this._boundOnPointerLeave),
        this._boundOnPointerLeave = null));
    }
}
,
a(R, "V"),
R);
m(_2, "_workerManager", new s0),
m(_2, "_wasmUrl", "");
var o0 = _2;
export {r0 as a, o0 as b};
//# sourceMappingURL=chunk-O5GEFJ54.js.map
//# sourceMappingURL=chunk-O5GEFJ54.js.map
