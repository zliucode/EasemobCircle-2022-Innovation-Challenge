/*! For license information please see Easemob-chat.js.LICENSE.txt */ ! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.websdk = t() : e.websdk = t()
}(this, (function () {
    return (() => {
        var __webpack_modules__ = {
                4537: e => {
                    "use strict";
                    e.exports = function (e, t) {
                        for (var r = new Array(arguments.length - 1), o = 0, n = 2, i = !0; n < arguments.length;) r[o++] = arguments[n++];
                        return new Promise((function (n, s) {
                            r[o] = function (e) {
                                if (i)
                                    if (i = !1, e) s(e);
                                    else {
                                        for (var t = new Array(arguments.length - 1), r = 0; r < t.length;) t[r++] = arguments[r];
                                        n.apply(null, t)
                                    }
                            };
                            try {
                                e.apply(t || null, r)
                            } catch (e) {
                                i && (i = !1, s(e))
                            }
                        }))
                    }
                },
                7419: (e, t) => {
                    "use strict";
                    var r = t;
                    r.length = function (e) {
                        var t = e.length;
                        if (!t) return 0;
                        for (var r = 0; --t % 4 > 1 && "=" === e.charAt(t);) ++r;
                        return Math.ceil(3 * e.length) / 4 - r
                    };
                    for (var o = new Array(64), n = new Array(123), i = 0; i < 64;) n[o[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
                    r.encode = function (e, t, r) {
                        for (var n, i = null, s = [], a = 0, c = 0; t < r;) {
                            var u = e[t++];
                            switch (c) {
                                case 0:
                                    s[a++] = o[u >> 2], n = (3 & u) << 4, c = 1;
                                    break;
                                case 1:
                                    s[a++] = o[n | u >> 4], n = (15 & u) << 2, c = 2;
                                    break;
                                case 2:
                                    s[a++] = o[n | u >> 6], s[a++] = o[63 & u], c = 0
                            }
                            a > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, s)), a = 0)
                        }
                        return c && (s[a++] = o[n], s[a++] = 61, 1 === c && (s[a++] = 61)), i ? (a && i.push(String.fromCharCode.apply(String, s.slice(0, a))), i.join("")) : String.fromCharCode.apply(String, s.slice(0, a))
                    };
                    var s = "invalid encoding";
                    r.decode = function (e, t, r) {
                        for (var o, i = r, a = 0, c = 0; c < e.length;) {
                            var u = e.charCodeAt(c++);
                            if (61 === u && a > 1) break;
                            if (void 0 === (u = n[u])) throw Error(s);
                            switch (a) {
                                case 0:
                                    o = u, a = 1;
                                    break;
                                case 1:
                                    t[r++] = o << 2 | (48 & u) >> 4, o = u, a = 2;
                                    break;
                                case 2:
                                    t[r++] = (15 & o) << 4 | (60 & u) >> 2, o = u, a = 3;
                                    break;
                                case 3:
                                    t[r++] = (3 & o) << 6 | u, a = 0
                            }
                        }
                        if (1 === a) throw Error(s);
                        return r - i
                    }, r.test = function (e) {
                        return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)
                    }
                },
                5124: e => {
                    "use strict";

                    function t(e, r) {
                        "string" == typeof e && (r = e, e = void 0);
                        var o = [];

                        function n(e) {
                            if ("string" != typeof e) {
                                var r = i();
                                if (t.verbose && console.log("codegen: " + r), r = "return " + r, e) {
                                    for (var s = Object.keys(e), a = new Array(s.length + 1), c = new Array(s.length), u = 0; u < s.length;) a[u] = s[u], c[u] = e[s[u++]];
                                    return a[u] = r, Function.apply(null, a).apply(null, c)
                                }
                                return Function(r)()
                            }
                            for (var l = new Array(arguments.length - 1), p = 0; p < l.length;) l[p] = arguments[++p];
                            if (p = 0, e = e.replace(/%([%dfijs])/g, (function (e, t) {
                                    var r = l[p++];
                                    switch (t) {
                                        case "d":
                                        case "f":
                                            return String(Number(r));
                                        case "i":
                                            return String(Math.floor(r));
                                        case "j":
                                            return JSON.stringify(r);
                                        case "s":
                                            return String(r)
                                    }
                                    return "%"
                                })), p !== l.length) throw Error("parameter count mismatch");
                            return o.push(e), n
                        }

                        function i(t) {
                            return "function " + (t || r || "") + "(" + (e && e.join(",") || "") + "){\n  " + o.join("\n  ") + "\n}"
                        }
                        return n.toString = i, n
                    }
                    e.exports = t, t.verbose = !1
                },
                9211: e => {
                    "use strict";

                    function t() {
                        this._listeners = {}
                    }
                    e.exports = t, t.prototype.on = function (e, t, r) {
                        return (this._listeners[e] || (this._listeners[e] = [])).push({
                            fn: t,
                            ctx: r || this
                        }), this
                    }, t.prototype.off = function (e, t) {
                        if (void 0 === e) this._listeners = {};
                        else if (void 0 === t) this._listeners[e] = [];
                        else
                            for (var r = this._listeners[e], o = 0; o < r.length;) r[o].fn === t ? r.splice(o, 1) : ++o;
                        return this
                    }, t.prototype.emit = function (e) {
                        var t = this._listeners[e];
                        if (t) {
                            for (var r = [], o = 1; o < arguments.length;) r.push(arguments[o++]);
                            for (o = 0; o < t.length;) t[o].fn.apply(t[o++].ctx, r)
                        }
                        return this
                    }
                },
                9054: (e, t, r) => {
                    "use strict";
                    e.exports = i;
                    var o = r(4537),
                        n = r(7199)("fs");

                    function i(e, t, r) {
                        return "function" == typeof t ? (r = t, t = {}) : t || (t = {}), r ? !t.xhr && n && n.readFile ? n.readFile(e, (function (o, n) {
                            return o && "undefined" != typeof XMLHttpRequest ? i.xhr(e, t, r) : o ? r(o) : r(null, t.binary ? n : n.toString("utf8"))
                        })) : i.xhr(e, t, r) : o(i, this, e, t)
                    }
                    i.xhr = function (e, t, r) {
                        var o = new XMLHttpRequest;
                        o.onreadystatechange = function () {
                            if (4 === o.readyState) {
                                if (0 !== o.status && 200 !== o.status) return r(Error("status " + o.status));
                                if (t.binary) {
                                    var e = o.response;
                                    if (!e) {
                                        e = [];
                                        for (var n = 0; n < o.responseText.length; ++n) e.push(255 & o.responseText.charCodeAt(n))
                                    }
                                    return r(null, "undefined" != typeof Uint8Array ? new Uint8Array(e) : e)
                                }
                                return r(null, o.responseText)
                            }
                        }, t.binary && ("overrideMimeType" in o && o.overrideMimeType("text/plain; charset=x-user-defined"), o.responseType = "arraybuffer"), o.open("GET", e), o.send()
                    }
                },
                945: e => {
                    "use strict";

                    function t(e) {
                        return "undefined" != typeof Float32Array ? function () {
                            var t = new Float32Array([-0]),
                                r = new Uint8Array(t.buffer),
                                o = 128 === r[3];

                            function n(e, o, n) {
                                t[0] = e, o[n] = r[0], o[n + 1] = r[1], o[n + 2] = r[2], o[n + 3] = r[3]
                            }

                            function i(e, o, n) {
                                t[0] = e, o[n] = r[3], o[n + 1] = r[2], o[n + 2] = r[1], o[n + 3] = r[0]
                            }

                            function s(e, o) {
                                return r[0] = e[o], r[1] = e[o + 1], r[2] = e[o + 2], r[3] = e[o + 3], t[0]
                            }

                            function a(e, o) {
                                return r[3] = e[o], r[2] = e[o + 1], r[1] = e[o + 2], r[0] = e[o + 3], t[0]
                            }
                            e.writeFloatLE = o ? n : i, e.writeFloatBE = o ? i : n, e.readFloatLE = o ? s : a, e.readFloatBE = o ? a : s
                        }() : function () {
                            function t(e, t, r, o) {
                                var n = t < 0 ? 1 : 0;
                                if (n && (t = -t), 0 === t) e(1 / t > 0 ? 0 : 2147483648, r, o);
                                else if (isNaN(t)) e(2143289344, r, o);
                                else if (t > 34028234663852886e22) e((n << 31 | 2139095040) >>> 0, r, o);
                                else if (t < 11754943508222875e-54) e((n << 31 | Math.round(t / 1401298464324817e-60)) >>> 0, r, o);
                                else {
                                    var i = Math.floor(Math.log(t) / Math.LN2);
                                    e((n << 31 | i + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -i) * 8388608)) >>> 0, r, o)
                                }
                            }

                            function s(e, t, r) {
                                var o = e(t, r),
                                    n = 2 * (o >> 31) + 1,
                                    i = o >>> 23 & 255,
                                    s = 8388607 & o;
                                return 255 === i ? s ? NaN : n * (1 / 0) : 0 === i ? 1401298464324817e-60 * n * s : n * Math.pow(2, i - 150) * (s + 8388608)
                            }
                            e.writeFloatLE = t.bind(null, r), e.writeFloatBE = t.bind(null, o), e.readFloatLE = s.bind(null, n), e.readFloatBE = s.bind(null, i)
                        }(), "undefined" != typeof Float64Array ? function () {
                            var t = new Float64Array([-0]),
                                r = new Uint8Array(t.buffer),
                                o = 128 === r[7];

                            function n(e, o, n) {
                                t[0] = e, o[n] = r[0], o[n + 1] = r[1], o[n + 2] = r[2], o[n + 3] = r[3], o[n + 4] = r[4], o[n + 5] = r[5], o[n + 6] = r[6], o[n + 7] = r[7]
                            }

                            function i(e, o, n) {
                                t[0] = e, o[n] = r[7], o[n + 1] = r[6], o[n + 2] = r[5], o[n + 3] = r[4], o[n + 4] = r[3], o[n + 5] = r[2], o[n + 6] = r[1], o[n + 7] = r[0]
                            }

                            function s(e, o) {
                                return r[0] = e[o], r[1] = e[o + 1], r[2] = e[o + 2], r[3] = e[o + 3], r[4] = e[o + 4], r[5] = e[o + 5], r[6] = e[o + 6], r[7] = e[o + 7], t[0]
                            }

                            function a(e, o) {
                                return r[7] = e[o], r[6] = e[o + 1], r[5] = e[o + 2], r[4] = e[o + 3], r[3] = e[o + 4], r[2] = e[o + 5], r[1] = e[o + 6], r[0] = e[o + 7], t[0]
                            }
                            e.writeDoubleLE = o ? n : i, e.writeDoubleBE = o ? i : n, e.readDoubleLE = o ? s : a, e.readDoubleBE = o ? a : s
                        }() : function () {
                            function t(e, t, r, o, n, i) {
                                var s = o < 0 ? 1 : 0;
                                if (s && (o = -o), 0 === o) e(0, n, i + t), e(1 / o > 0 ? 0 : 2147483648, n, i + r);
                                else if (isNaN(o)) e(0, n, i + t), e(2146959360, n, i + r);
                                else if (o > 17976931348623157e292) e(0, n, i + t), e((s << 31 | 2146435072) >>> 0, n, i + r);
                                else {
                                    var a;
                                    if (o < 22250738585072014e-324) e((a = o / 5e-324) >>> 0, n, i + t), e((s << 31 | a / 4294967296) >>> 0, n, i + r);
                                    else {
                                        var c = Math.floor(Math.log(o) / Math.LN2);
                                        1024 === c && (c = 1023), e(4503599627370496 * (a = o * Math.pow(2, -c)) >>> 0, n, i + t), e((s << 31 | c + 1023 << 20 | 1048576 * a & 1048575) >>> 0, n, i + r)
                                    }
                                }
                            }

                            function s(e, t, r, o, n) {
                                var i = e(o, n + t),
                                    s = e(o, n + r),
                                    a = 2 * (s >> 31) + 1,
                                    c = s >>> 20 & 2047,
                                    u = 4294967296 * (1048575 & s) + i;
                                return 2047 === c ? u ? NaN : a * (1 / 0) : 0 === c ? 5e-324 * a * u : a * Math.pow(2, c - 1075) * (u + 4503599627370496)
                            }
                            e.writeDoubleLE = t.bind(null, r, 0, 4), e.writeDoubleBE = t.bind(null, o, 4, 0), e.readDoubleLE = s.bind(null, n, 0, 4), e.readDoubleBE = s.bind(null, i, 4, 0)
                        }(), e
                    }

                    function r(e, t, r) {
                        t[r] = 255 & e, t[r + 1] = e >>> 8 & 255, t[r + 2] = e >>> 16 & 255, t[r + 3] = e >>> 24
                    }

                    function o(e, t, r) {
                        t[r] = e >>> 24, t[r + 1] = e >>> 16 & 255, t[r + 2] = e >>> 8 & 255, t[r + 3] = 255 & e
                    }

                    function n(e, t) {
                        return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
                    }

                    function i(e, t) {
                        return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
                    }
                    e.exports = t(t)
                },
                7199: module => {
                    "use strict";

                    function inquire(moduleName) {
                        try {
                            var mod = eval("quire".replace(/^/, "re"))(moduleName);
                            if (mod && (mod.length || Object.keys(mod).length)) return mod
                        } catch (e) {}
                        return null
                    }
                    module.exports = inquire
                },
                8626: (e, t) => {
                    "use strict";
                    var r = t,
                        o = r.isAbsolute = function (e) {
                            return /^(?:\/|\w+:)/.test(e)
                        },
                        n = r.normalize = function (e) {
                            var t = (e = e.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"),
                                r = o(e),
                                n = "";
                            r && (n = t.shift() + "/");
                            for (var i = 0; i < t.length;) ".." === t[i] ? i > 0 && ".." !== t[i - 1] ? t.splice(--i, 2) : r ? t.splice(i, 1) : ++i : "." === t[i] ? t.splice(i, 1) : ++i;
                            return n + t.join("/")
                        };
                    r.resolve = function (e, t, r) {
                        return r || (t = n(t)), o(t) ? t : (r || (e = n(e)), (e = e.replace(/(?:\/|^)[^/]+$/, "")).length ? n(e + "/" + t) : t)
                    }
                },
                6662: e => {
                    "use strict";
                    e.exports = function (e, t, r) {
                        var o = r || 8192,
                            n = o >>> 1,
                            i = null,
                            s = o;
                        return function (r) {
                            if (r < 1 || r > n) return e(r);
                            s + r > o && (i = e(o), s = 0);
                            var a = t.call(i, s, s += r);
                            return 7 & s && (s = 1 + (7 | s)), a
                        }
                    }
                },
                4997: (e, t) => {
                    "use strict";
                    var r = t;
                    r.length = function (e) {
                        for (var t = 0, r = 0, o = 0; o < e.length; ++o)(r = e.charCodeAt(o)) < 128 ? t += 1 : r < 2048 ? t += 2 : 55296 == (64512 & r) && 56320 == (64512 & e.charCodeAt(o + 1)) ? (++o, t += 4) : t += 3;
                        return t
                    }, r.read = function (e, t, r) {
                        if (r - t < 1) return "";
                        for (var o, n = null, i = [], s = 0; t < r;)(o = e[t++]) < 128 ? i[s++] = o : o > 191 && o < 224 ? i[s++] = (31 & o) << 6 | 63 & e[t++] : o > 239 && o < 365 ? (o = ((7 & o) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536, i[s++] = 55296 + (o >> 10), i[s++] = 56320 + (1023 & o)) : i[s++] = (15 & o) << 12 | (63 & e[t++]) << 6 | 63 & e[t++], s > 8191 && ((n || (n = [])).push(String.fromCharCode.apply(String, i)), s = 0);
                        return n ? (s && n.push(String.fromCharCode.apply(String, i.slice(0, s))), n.join("")) : String.fromCharCode.apply(String, i.slice(0, s))
                    }, r.write = function (e, t, r) {
                        for (var o, n, i = r, s = 0; s < e.length; ++s)(o = e.charCodeAt(s)) < 128 ? t[r++] = o : o < 2048 ? (t[r++] = o >> 6 | 192, t[r++] = 63 & o | 128) : 55296 == (64512 & o) && 56320 == (64512 & (n = e.charCodeAt(s + 1))) ? (o = 65536 + ((1023 & o) << 10) + (1023 & n), ++s, t[r++] = o >> 18 | 240, t[r++] = o >> 12 & 63 | 128, t[r++] = o >> 6 & 63 | 128, t[r++] = 63 & o | 128) : (t[r++] = o >> 12 | 224, t[r++] = o >> 6 & 63 | 128, t[r++] = 63 & o | 128);
                        return r - i
                    }
                },
                4188: (e, t, r) => {
                    var o, n, i;
                    ! function (s) {
                        "use strict";
                        if (null != t && "number" != typeof t.nodeType) e.exports = s();
                        else if (null != r.amdO) n = [], void 0 === (i = "function" == typeof (o = s) ? o.apply(t, n) : o) || (e.exports = i);
                        else {
                            var a = s(),
                                c = "undefined" != typeof self ? self : $.global;
                            "function" != typeof c.btoa && (c.btoa = a.btoa), "function" != typeof c.atob && (c.atob = a.atob)
                        }
                    }((function () {
                        "use strict";
                        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

                        function t(e) {
                            this.message = e
                        }
                        return t.prototype = new Error, t.prototype.name = "InvalidCharacterError", {
                            btoa: function (r) {
                                for (var o, n, i = String(r), s = 0, a = e, c = ""; i.charAt(0 | s) || (a = "=", s % 1); c += a.charAt(63 & o >> 8 - s % 1 * 8)) {
                                    if ((n = i.charCodeAt(s += 3 / 4)) > 255) throw new t("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                                    o = o << 8 | n
                                }
                                return c
                            },
                            atob: function (r) {
                                var o = String(r).replace(/[=]+$/, "");
                                if (o.length % 4 == 1) throw new t("'atob' failed: The string to be decoded is not correctly encoded.");
                                for (var n, i, s = 0, a = 0, c = ""; i = o.charAt(a++); ~i && (n = s % 4 ? 64 * n + i : i, s++ % 4) ? c += String.fromCharCode(255 & n >> (-2 * s & 6)) : 0) i = e.indexOf(i);
                                return c
                            }
                        }
                    }))
                },
                5717: e => {
                    "function" == typeof Object.create ? e.exports = function (e, t) {
                        t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }))
                    } : e.exports = function (e, t) {
                        if (t) {
                            e.super_ = t;
                            var r = function () {};
                            r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                        }
                    }
                },
                7522: function (e, t, r) {
                    var o;
                    e = r.nmd(e),
                        function () {
                            var n = r.amdO,
                                i = {
                                    function: !0,
                                    object: !0
                                },
                                s = i[typeof t] && t && !t.nodeType && t,
                                a = i[typeof window] && window || this,
                                c = s && i.object && e && !e.nodeType && "object" == typeof r.g && r.g;

                            function u(e, t) {
                                e || (e = a.Object()), t || (t = a.Object());
                                var r = e.Number || a.Number,
                                    o = e.String || a.String,
                                    n = e.Object || a.Object,
                                    s = e.Date || a.Date,
                                    c = e.SyntaxError || a.SyntaxError,
                                    l = e.TypeError || a.TypeError,
                                    p = e.Math || a.Math,
                                    d = e.JSON || a.JSON;
                                "object" == typeof d && d && (t.stringify = d.stringify, t.parse = d.parse);
                                var h, f = n.prototype,
                                    m = f.toString,
                                    y = f.hasOwnProperty;

                                function g(e, t) {
                                    try {
                                        e()
                                    } catch (e) {
                                        t && t()
                                    }
                                }
                                var v = new s(-0xc782b5b800cec);

                                function E(e) {
                                    if (null != E[e]) return E[e];
                                    var n;
                                    if ("bug-string-char-index" == e) n = "a" != "a" [0];
                                    else if ("json" == e) n = E("json-stringify") && E("date-serialization") && E("json-parse");
                                    else if ("date-serialization" == e) {
                                        if (n = E("json-stringify") && v) {
                                            var i = t.stringify;
                                            g((function () {
                                                n = '"-271821-04-20T00:00:00.000Z"' == i(new s(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == i(new s(864e13)) && '"-000001-01-01T00:00:00.000Z"' == i(new s(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == i(new s(-1))
                                            }))
                                        }
                                    } else {
                                        var a, c = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                        if ("json-stringify" == e) {
                                            var u = "function" == typeof (i = t.stringify);
                                            u && ((a = function () {
                                                return 1
                                            }).toJSON = a, g((function () {
                                                u = "0" === i(0) && "0" === i(new r) && '""' == i(new o) && i(m) === h && i(h) === h && i() === h && "1" === i(a) && "[1]" == i([a]) && "[null]" == i([h]) && "null" == i(null) && "[null,null,null]" == i([h, m, null]) && i({
                                                    a: [a, !0, !1, null, "\0\b\n\f\r\t"]
                                                }) == c && "1" === i(null, a) && "[\n 1,\n 2\n]" == i([1, 2], null, 1)
                                            }), (function () {
                                                u = !1
                                            }))), n = u
                                        }
                                        if ("json-parse" == e) {
                                            var l, p = t.parse;
                                            "function" == typeof p && g((function () {
                                                0 !== p("0") || p(!1) || (a = p(c), (l = 5 == a.a.length && 1 === a.a[0]) && (g((function () {
                                                    l = !p('"\t"')
                                                })), l && g((function () {
                                                    l = 1 !== p("01")
                                                })), l && g((function () {
                                                    l = 1 !== p("1.")
                                                }))))
                                            }), (function () {
                                                l = !1
                                            })), n = l
                                        }
                                    }
                                    return E[e] = !!n
                                }
                                if (g((function () {
                                        v = -109252 == v.getUTCFullYear() && 0 === v.getUTCMonth() && 1 === v.getUTCDate() && 10 == v.getUTCHours() && 37 == v.getUTCMinutes() && 6 == v.getUTCSeconds() && 708 == v.getUTCMilliseconds()
                                    })), E["bug-string-char-index"] = E["date-serialization"] = E.json = E["json-stringify"] = E["json-parse"] = null, !E("json")) {
                                    var _ = "[object Function]",
                                        T = "[object Number]",
                                        O = "[object String]",
                                        I = "[object Array]",
                                        R = E("bug-string-char-index"),
                                        S = function (e, t) {
                                            var r, o, n, s = 0;
                                            for (n in (r = function () {
                                                    this.valueOf = 0
                                                }).prototype.valueOf = 0, o = new r) y.call(o, n) && s++;
                                            return r = o = null, s ? S = function (e, t) {
                                                var r, o, n = m.call(e) == _;
                                                for (r in e) n && "prototype" == r || !y.call(e, r) || (o = "constructor" === r) || t(r);
                                                (o || y.call(e, r = "constructor")) && t(r)
                                            } : (o = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], S = function (e, t) {
                                                var r, n, s = m.call(e) == _,
                                                    a = !s && "function" != typeof e.constructor && i[typeof e.hasOwnProperty] && e.hasOwnProperty || y;
                                                for (r in e) s && "prototype" == r || !a.call(e, r) || t(r);
                                                for (n = o.length; r = o[--n];) a.call(e, r) && t(r)
                                            }), S(e, t)
                                        };
                                    if (!E("json-stringify") && !E("date-serialization")) {
                                        var N = {
                                                92: "\\\\",
                                                34: '\\"',
                                                8: "\\b",
                                                12: "\\f",
                                                10: "\\n",
                                                13: "\\r",
                                                9: "\\t"
                                            },
                                            C = function (e, t) {
                                                return ("000000" + (t || 0)).slice(-e)
                                            },
                                            A = function (e) {
                                                var t, r, o, n, i, s, a, c, u;
                                                if (v) t = function (e) {
                                                    r = e.getUTCFullYear(), o = e.getUTCMonth(), n = e.getUTCDate(), s = e.getUTCHours(), a = e.getUTCMinutes(), c = e.getUTCSeconds(), u = e.getUTCMilliseconds()
                                                };
                                                else {
                                                    var l = p.floor,
                                                        d = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                                                        h = function (e, t) {
                                                            return d[t] + 365 * (e - 1970) + l((e - 1969 + (t = +(t > 1))) / 4) - l((e - 1901 + t) / 100) + l((e - 1601 + t) / 400)
                                                        };
                                                    t = function (e) {
                                                        for (n = l(e / 864e5), r = l(n / 365.2425) + 1970 - 1; h(r + 1, 0) <= n; r++);
                                                        for (o = l((n - h(r, 0)) / 30.42); h(r, o + 1) <= n; o++);
                                                        n = 1 + n - h(r, o), s = l((i = (e % 864e5 + 864e5) % 864e5) / 36e5) % 24, a = l(i / 6e4) % 60, c = l(i / 1e3) % 60, u = i % 1e3
                                                    }
                                                }
                                                return A = function (e) {
                                                    return e > -1 / 0 && e < 1 / 0 ? (t(e), e = (r <= 0 || r >= 1e4 ? (r < 0 ? "-" : "+") + C(6, r < 0 ? -r : r) : C(4, r)) + "-" + C(2, o + 1) + "-" + C(2, n) + "T" + C(2, s) + ":" + C(2, a) + ":" + C(2, c) + "." + C(3, u) + "Z", r = o = n = s = a = c = u = null) : e = null, e
                                                }, A(e)
                                            };
                                        if (E("json-stringify") && !E("date-serialization")) {
                                            function b(e) {
                                                return A(this)
                                            }
                                            var M = t.stringify;
                                            t.stringify = function (e, t, r) {
                                                var o = s.prototype.toJSON;
                                                s.prototype.toJSON = b;
                                                var n = M(e, t, r);
                                                return s.prototype.toJSON = o, n
                                            }
                                        } else {
                                            var w = function (e) {
                                                    var t = e.charCodeAt(0);
                                                    return N[t] || "\\u00" + C(2, t.toString(16))
                                                },
                                                U = /[\x00-\x1f\x22\x5c]/g,
                                                k = function (e) {
                                                    return U.lastIndex = 0, '"' + (U.test(e) ? e.replace(U, w) : e) + '"'
                                                },
                                                P = function (e, t, r, o, n, i, a) {
                                                    var c, u, p, d, f, y, v, E, _;
                                                    if (g((function () {
                                                            c = t[e]
                                                        })), "object" == typeof c && c && (c.getUTCFullYear && "[object Date]" == m.call(c) && c.toJSON === s.prototype.toJSON ? c = A(c) : "function" == typeof c.toJSON && (c = c.toJSON(e))), r && (c = r.call(t, e, c)), c == h) return c === h ? c : "null";
                                                    switch ("object" == (u = typeof c) && (p = m.call(c)), p || u) {
                                                        case "boolean":
                                                        case "[object Boolean]":
                                                            return "" + c;
                                                        case "number":
                                                        case T:
                                                            return c > -1 / 0 && c < 1 / 0 ? "" + c : "null";
                                                        case "string":
                                                        case O:
                                                            return k("" + c)
                                                    }
                                                    if ("object" == typeof c) {
                                                        for (v = a.length; v--;)
                                                            if (a[v] === c) throw l();
                                                        if (a.push(c), d = [], E = i, i += n, p == I) {
                                                            for (y = 0, v = c.length; y < v; y++) f = P(y, c, r, o, n, i, a), d.push(f === h ? "null" : f);
                                                            _ = d.length ? n ? "[\n" + i + d.join(",\n" + i) + "\n" + E + "]" : "[" + d.join(",") + "]" : "[]"
                                                        } else S(o || c, (function (e) {
                                                            var t = P(e, c, r, o, n, i, a);
                                                            t !== h && d.push(k(e) + ":" + (n ? " " : "") + t)
                                                        })), _ = d.length ? n ? "{\n" + i + d.join(",\n" + i) + "\n" + E + "}" : "{" + d.join(",") + "}" : "{}";
                                                        return a.pop(), _
                                                    }
                                                };
                                            t.stringify = function (e, t, r) {
                                                var o, n, s, a;
                                                if (i[typeof t] && t)
                                                    if ((a = m.call(t)) == _) n = t;
                                                    else if (a == I) {
                                                    s = {};
                                                    for (var c, u = 0, l = t.length; u < l;) c = t[u++], "[object String]" != (a = m.call(c)) && "[object Number]" != a || (s[c] = 1)
                                                }
                                                if (r)
                                                    if ((a = m.call(r)) == T) {
                                                        if ((r -= r % 1) > 0)
                                                            for (r > 10 && (r = 10), o = ""; o.length < r;) o += " "
                                                    } else a == O && (o = r.length <= 10 ? r : r.slice(0, 10));
                                                return P("", ((c = {})[""] = e, c), n, s, o, "", [])
                                            }
                                        }
                                    }
                                    if (!E("json-parse")) {
                                        var x, j, L = o.fromCharCode,
                                            D = {
                                                92: "\\",
                                                34: '"',
                                                47: "/",
                                                98: "\b",
                                                116: "\t",
                                                110: "\n",
                                                102: "\f",
                                                114: "\r"
                                            },
                                            G = function () {
                                                throw x = j = null, c()
                                            },
                                            B = function () {
                                                for (var e, t, r, o, n, i = j, s = i.length; x < s;) switch (n = i.charCodeAt(x)) {
                                                    case 9:
                                                    case 10:
                                                    case 13:
                                                    case 32:
                                                        x++;
                                                        break;
                                                    case 123:
                                                    case 125:
                                                    case 91:
                                                    case 93:
                                                    case 58:
                                                    case 44:
                                                        return e = R ? i.charAt(x) : i[x], x++, e;
                                                    case 34:
                                                        for (e = "@", x++; x < s;)
                                                            if ((n = i.charCodeAt(x)) < 32) G();
                                                            else if (92 == n) switch (n = i.charCodeAt(++x)) {
                                                            case 92:
                                                            case 34:
                                                            case 47:
                                                            case 98:
                                                            case 116:
                                                            case 110:
                                                            case 102:
                                                            case 114:
                                                                e += D[n], x++;
                                                                break;
                                                            case 117:
                                                                for (t = ++x, r = x + 4; x < r; x++)(n = i.charCodeAt(x)) >= 48 && n <= 57 || n >= 97 && n <= 102 || n >= 65 && n <= 70 || G();
                                                                e += L("0x" + i.slice(t, x));
                                                                break;
                                                            default:
                                                                G()
                                                        } else {
                                                            if (34 == n) break;
                                                            for (n = i.charCodeAt(x), t = x; n >= 32 && 92 != n && 34 != n;) n = i.charCodeAt(++x);
                                                            e += i.slice(t, x)
                                                        }
                                                        if (34 == i.charCodeAt(x)) return x++, e;
                                                        G();
                                                    default:
                                                        if (t = x, 45 == n && (o = !0, n = i.charCodeAt(++x)), n >= 48 && n <= 57) {
                                                            for (48 == n && (n = i.charCodeAt(x + 1)) >= 48 && n <= 57 && G(), o = !1; x < s && (n = i.charCodeAt(x)) >= 48 && n <= 57; x++);
                                                            if (46 == i.charCodeAt(x)) {
                                                                for (r = ++x; r < s && !((n = i.charCodeAt(r)) < 48 || n > 57); r++);
                                                                r == x && G(), x = r
                                                            }
                                                            if (101 == (n = i.charCodeAt(x)) || 69 == n) {
                                                                for (43 != (n = i.charCodeAt(++x)) && 45 != n || x++, r = x; r < s && !((n = i.charCodeAt(r)) < 48 || n > 57); r++);
                                                                r == x && G(), x = r
                                                            }
                                                            return +i.slice(t, x)
                                                        }
                                                        o && G();
                                                        var a = i.slice(x, x + 4);
                                                        if ("true" == a) return x += 4, !0;
                                                        if ("fals" == a && 101 == i.charCodeAt(x + 4)) return x += 5, !1;
                                                        if ("null" == a) return x += 4, null;
                                                        G()
                                                }
                                                return "$"
                                            },
                                            H = function (e) {
                                                var t, r;
                                                if ("$" == e && G(), "string" == typeof e) {
                                                    if ("@" == (R ? e.charAt(0) : e[0])) return e.slice(1);
                                                    if ("[" == e) {
                                                        for (t = [];
                                                            "]" != (e = B());) r ? "," == e ? "]" == (e = B()) && G() : G() : r = !0, "," == e && G(), t.push(H(e));
                                                        return t
                                                    }
                                                    if ("{" == e) {
                                                        for (t = {};
                                                            "}" != (e = B());) r ? "," == e ? "}" == (e = B()) && G() : G() : r = !0, "," != e && "string" == typeof e && "@" == (R ? e.charAt(0) : e[0]) && ":" == B() || G(), t[e.slice(1)] = H(B());
                                                        return t
                                                    }
                                                    G()
                                                }
                                                return e
                                            },
                                            F = function (e, t, r) {
                                                var o = W(e, t, r);
                                                o === h ? delete e[t] : e[t] = o
                                            },
                                            W = function (e, t, r) {
                                                var o, n = e[t];
                                                if ("object" == typeof n && n)
                                                    if (m.call(n) == I)
                                                        for (o = n.length; o--;) F(m, S, n);
                                                    else S(n, (function (e) {
                                                        F(n, e, r)
                                                    }));
                                                return r.call(e, t, n)
                                            };
                                        t.parse = function (e, t) {
                                            var r, o;
                                            return x = 0, j = "" + e, r = H(B()), "$" != B() && G(), x = j = null, t && m.call(t) == _ ? W(((o = {})[""] = r, o), "", t) : r
                                        }
                                    }
                                }
                                return t.runInContext = u, t
                            }
                            if (!c || c.global !== c && c.window !== c && c.self !== c || (a = c), s && !n) u(a, s);
                            else {
                                var l = a.JSON,
                                    p = a.JSON3,
                                    d = !1,
                                    h = u(a, a.JSON3 = {
                                        noConflict: function () {
                                            return d || (d = !0, a.JSON = l, a.JSON3 = p, l = p = null), h
                                        }
                                    });
                                a.JSON = {
                                    parse: h.parse,
                                    stringify: h.stringify
                                }
                            }
                            n && (void 0 === (o = function () {
                                return h
                            }.call(t, r, t, e)) || (e.exports = o))
                        }.call(this)
                },
                3720: e => {
                    e.exports = r;
                    var t = null;
                    try {
                        t = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports
                    } catch (e) {}

                    function r(e, t, r) {
                        this.low = 0 | e, this.high = 0 | t, this.unsigned = !!r
                    }

                    function o(e) {
                        return !0 === (e && e.__isLong__)
                    }
                    r.prototype.__isLong__, Object.defineProperty(r.prototype, "__isLong__", {
                        value: !0
                    }), r.isLong = o;
                    var n = {},
                        i = {};

                    function s(e, t) {
                        var r, o, s;
                        return t ? (s = 0 <= (e >>>= 0) && e < 256) && (o = i[e]) ? o : (r = c(e, (0 | e) < 0 ? -1 : 0, !0), s && (i[e] = r), r) : (s = -128 <= (e |= 0) && e < 128) && (o = n[e]) ? o : (r = c(e, e < 0 ? -1 : 0, !1), s && (n[e] = r), r)
                    }

                    function a(e, t) {
                        if (isNaN(e)) return t ? g : y;
                        if (t) {
                            if (e < 0) return g;
                            if (e >= h) return O
                        } else {
                            if (e <= -f) return I;
                            if (e + 1 >= f) return T
                        }
                        return e < 0 ? a(-e, t).neg() : c(e % d | 0, e / d | 0, t)
                    }

                    function c(e, t, o) {
                        return new r(e, t, o)
                    }
                    r.fromInt = s, r.fromNumber = a, r.fromBits = c;
                    var u = Math.pow;

                    function l(e, t, r) {
                        if (0 === e.length) throw Error("empty string");
                        if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) return y;
                        if ("number" == typeof t ? (r = t, t = !1) : t = !!t, (r = r || 10) < 2 || 36 < r) throw RangeError("radix");
                        var o;
                        if ((o = e.indexOf("-")) > 0) throw Error("interior hyphen");
                        if (0 === o) return l(e.substring(1), t, r).neg();
                        for (var n = a(u(r, 8)), i = y, s = 0; s < e.length; s += 8) {
                            var c = Math.min(8, e.length - s),
                                p = parseInt(e.substring(s, s + c), r);
                            if (c < 8) {
                                var d = a(u(r, c));
                                i = i.mul(d).add(a(p))
                            } else i = (i = i.mul(n)).add(a(p))
                        }
                        return i.unsigned = t, i
                    }

                    function p(e, t) {
                        return "number" == typeof e ? a(e, t) : "string" == typeof e ? l(e, t) : c(e.low, e.high, "boolean" == typeof t ? t : e.unsigned)
                    }
                    r.fromString = l, r.fromValue = p;
                    var d = 4294967296,
                        h = d * d,
                        f = h / 2,
                        m = s(1 << 24),
                        y = s(0);
                    r.ZERO = y;
                    var g = s(0, !0);
                    r.UZERO = g;
                    var v = s(1);
                    r.ONE = v;
                    var E = s(1, !0);
                    r.UONE = E;
                    var _ = s(-1);
                    r.NEG_ONE = _;
                    var T = c(-1, 2147483647, !1);
                    r.MAX_VALUE = T;
                    var O = c(-1, -1, !0);
                    r.MAX_UNSIGNED_VALUE = O;
                    var I = c(0, -2147483648, !1);
                    r.MIN_VALUE = I;
                    var R = r.prototype;
                    R.toInt = function () {
                        return this.unsigned ? this.low >>> 0 : this.low
                    }, R.toNumber = function () {
                        return this.unsigned ? (this.high >>> 0) * d + (this.low >>> 0) : this.high * d + (this.low >>> 0)
                    }, R.toString = function (e) {
                        if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
                        if (this.isZero()) return "0";
                        if (this.isNegative()) {
                            if (this.eq(I)) {
                                var t = a(e),
                                    r = this.div(t),
                                    o = r.mul(t).sub(this);
                                return r.toString(e) + o.toInt().toString(e)
                            }
                            return "-" + this.neg().toString(e)
                        }
                        for (var n = a(u(e, 6), this.unsigned), i = this, s = "";;) {
                            var c = i.div(n),
                                l = (i.sub(c.mul(n)).toInt() >>> 0).toString(e);
                            if ((i = c).isZero()) return l + s;
                            for (; l.length < 6;) l = "0" + l;
                            s = "" + l + s
                        }
                    }, R.getHighBits = function () {
                        return this.high
                    }, R.getHighBitsUnsigned = function () {
                        return this.high >>> 0
                    }, R.getLowBits = function () {
                        return this.low
                    }, R.getLowBitsUnsigned = function () {
                        return this.low >>> 0
                    }, R.getNumBitsAbs = function () {
                        if (this.isNegative()) return this.eq(I) ? 64 : this.neg().getNumBitsAbs();
                        for (var e = 0 != this.high ? this.high : this.low, t = 31; t > 0 && 0 == (e & 1 << t); t--);
                        return 0 != this.high ? t + 33 : t + 1
                    }, R.isZero = function () {
                        return 0 === this.high && 0 === this.low
                    }, R.eqz = R.isZero, R.isNegative = function () {
                        return !this.unsigned && this.high < 0
                    }, R.isPositive = function () {
                        return this.unsigned || this.high >= 0
                    }, R.isOdd = function () {
                        return 1 == (1 & this.low)
                    }, R.isEven = function () {
                        return 0 == (1 & this.low)
                    }, R.equals = function (e) {
                        return o(e) || (e = p(e)), (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && this.high === e.high && this.low === e.low
                    }, R.eq = R.equals, R.notEquals = function (e) {
                        return !this.eq(e)
                    }, R.neq = R.notEquals, R.ne = R.notEquals, R.lessThan = function (e) {
                        return this.comp(e) < 0
                    }, R.lt = R.lessThan, R.lessThanOrEqual = function (e) {
                        return this.comp(e) <= 0
                    }, R.lte = R.lessThanOrEqual, R.le = R.lessThanOrEqual, R.greaterThan = function (e) {
                        return this.comp(e) > 0
                    }, R.gt = R.greaterThan, R.greaterThanOrEqual = function (e) {
                        return this.comp(e) >= 0
                    }, R.gte = R.greaterThanOrEqual, R.ge = R.greaterThanOrEqual, R.compare = function (e) {
                        if (o(e) || (e = p(e)), this.eq(e)) return 0;
                        var t = this.isNegative(),
                            r = e.isNegative();
                        return t && !r ? -1 : !t && r ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1
                    }, R.comp = R.compare, R.negate = function () {
                        return !this.unsigned && this.eq(I) ? I : this.not().add(v)
                    }, R.neg = R.negate, R.add = function (e) {
                        o(e) || (e = p(e));
                        var t = this.high >>> 16,
                            r = 65535 & this.high,
                            n = this.low >>> 16,
                            i = 65535 & this.low,
                            s = e.high >>> 16,
                            a = 65535 & e.high,
                            u = e.low >>> 16,
                            l = 0,
                            d = 0,
                            h = 0,
                            f = 0;
                        return h += (f += i + (65535 & e.low)) >>> 16, d += (h += n + u) >>> 16, l += (d += r + a) >>> 16, l += t + s, c((h &= 65535) << 16 | (f &= 65535), (l &= 65535) << 16 | (d &= 65535), this.unsigned)
                    }, R.subtract = function (e) {
                        return o(e) || (e = p(e)), this.add(e.neg())
                    }, R.sub = R.subtract, R.multiply = function (e) {
                        if (this.isZero()) return y;
                        if (o(e) || (e = p(e)), t) return c(t.mul(this.low, this.high, e.low, e.high), t.get_high(), this.unsigned);
                        if (e.isZero()) return y;
                        if (this.eq(I)) return e.isOdd() ? I : y;
                        if (e.eq(I)) return this.isOdd() ? I : y;
                        if (this.isNegative()) return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
                        if (e.isNegative()) return this.mul(e.neg()).neg();
                        if (this.lt(m) && e.lt(m)) return a(this.toNumber() * e.toNumber(), this.unsigned);
                        var r = this.high >>> 16,
                            n = 65535 & this.high,
                            i = this.low >>> 16,
                            s = 65535 & this.low,
                            u = e.high >>> 16,
                            l = 65535 & e.high,
                            d = e.low >>> 16,
                            h = 65535 & e.low,
                            f = 0,
                            g = 0,
                            v = 0,
                            E = 0;
                        return v += (E += s * h) >>> 16, g += (v += i * h) >>> 16, v &= 65535, g += (v += s * d) >>> 16, f += (g += n * h) >>> 16, g &= 65535, f += (g += i * d) >>> 16, g &= 65535, f += (g += s * l) >>> 16, f += r * h + n * d + i * l + s * u, c((v &= 65535) << 16 | (E &= 65535), (f &= 65535) << 16 | (g &= 65535), this.unsigned)
                    }, R.mul = R.multiply, R.divide = function (e) {
                        if (o(e) || (e = p(e)), e.isZero()) throw Error("division by zero");
                        var r, n, i;
                        if (t) return this.unsigned || -2147483648 !== this.high || -1 !== e.low || -1 !== e.high ? c((this.unsigned ? t.div_u : t.div_s)(this.low, this.high, e.low, e.high), t.get_high(), this.unsigned) : this;
                        if (this.isZero()) return this.unsigned ? g : y;
                        if (this.unsigned) {
                            if (e.unsigned || (e = e.toUnsigned()), e.gt(this)) return g;
                            if (e.gt(this.shru(1))) return E;
                            i = g
                        } else {
                            if (this.eq(I)) return e.eq(v) || e.eq(_) ? I : e.eq(I) ? v : (r = this.shr(1).div(e).shl(1)).eq(y) ? e.isNegative() ? v : _ : (n = this.sub(e.mul(r)), i = r.add(n.div(e)));
                            if (e.eq(I)) return this.unsigned ? g : y;
                            if (this.isNegative()) return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
                            if (e.isNegative()) return this.div(e.neg()).neg();
                            i = y
                        }
                        for (n = this; n.gte(e);) {
                            r = Math.max(1, Math.floor(n.toNumber() / e.toNumber()));
                            for (var s = Math.ceil(Math.log(r) / Math.LN2), l = s <= 48 ? 1 : u(2, s - 48), d = a(r), h = d.mul(e); h.isNegative() || h.gt(n);) h = (d = a(r -= l, this.unsigned)).mul(e);
                            d.isZero() && (d = v), i = i.add(d), n = n.sub(h)
                        }
                        return i
                    }, R.div = R.divide, R.modulo = function (e) {
                        return o(e) || (e = p(e)), t ? c((this.unsigned ? t.rem_u : t.rem_s)(this.low, this.high, e.low, e.high), t.get_high(), this.unsigned) : this.sub(this.div(e).mul(e))
                    }, R.mod = R.modulo, R.rem = R.modulo, R.not = function () {
                        return c(~this.low, ~this.high, this.unsigned)
                    }, R.and = function (e) {
                        return o(e) || (e = p(e)), c(this.low & e.low, this.high & e.high, this.unsigned)
                    }, R.or = function (e) {
                        return o(e) || (e = p(e)), c(this.low | e.low, this.high | e.high, this.unsigned)
                    }, R.xor = function (e) {
                        return o(e) || (e = p(e)), c(this.low ^ e.low, this.high ^ e.high, this.unsigned)
                    }, R.shiftLeft = function (e) {
                        return o(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? c(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : c(0, this.low << e - 32, this.unsigned)
                    }, R.shl = R.shiftLeft, R.shiftRight = function (e) {
                        return o(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? c(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : c(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned)
                    }, R.shr = R.shiftRight, R.shiftRightUnsigned = function (e) {
                        if (o(e) && (e = e.toInt()), 0 == (e &= 63)) return this;
                        var t = this.high;
                        return e < 32 ? c(this.low >>> e | t << 32 - e, t >>> e, this.unsigned) : c(32 === e ? t : t >>> e - 32, 0, this.unsigned)
                    }, R.shru = R.shiftRightUnsigned, R.shr_u = R.shiftRightUnsigned, R.toSigned = function () {
                        return this.unsigned ? c(this.low, this.high, !1) : this
                    }, R.toUnsigned = function () {
                        return this.unsigned ? this : c(this.low, this.high, !0)
                    }, R.toBytes = function (e) {
                        return e ? this.toBytesLE() : this.toBytesBE()
                    }, R.toBytesLE = function () {
                        var e = this.high,
                            t = this.low;
                        return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24]
                    }, R.toBytesBE = function () {
                        var e = this.high,
                            t = this.low;
                        return [e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t]
                    }, r.fromBytes = function (e, t, o) {
                        return o ? r.fromBytesLE(e, t) : r.fromBytesBE(e, t)
                    }, r.fromBytesLE = function (e, t) {
                        return new r(e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24, e[4] | e[5] << 8 | e[6] << 16 | e[7] << 24, t)
                    }, r.fromBytesBE = function (e, t) {
                        return new r(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7], e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], t)
                    }
                },
                3281: (e, t, r) => {
                    "use strict";
                    e.exports = r(9050)
                },
                2967: e => {
                    "use strict";
                    e.exports = o;
                    var t, r = /\/|\./;

                    function o(e, t) {
                        r.test(e) || (e = "google/protobuf/" + e + ".proto", t = {
                            nested: {
                                google: {
                                    nested: {
                                        protobuf: {
                                            nested: t
                                        }
                                    }
                                }
                            }
                        }), o[e] = t
                    }
                    o("any", {
                        Any: {
                            fields: {
                                type_url: {
                                    type: "string",
                                    id: 1
                                },
                                value: {
                                    type: "bytes",
                                    id: 2
                                }
                            }
                        }
                    }), o("duration", {
                        Duration: t = {
                            fields: {
                                seconds: {
                                    type: "int64",
                                    id: 1
                                },
                                nanos: {
                                    type: "int32",
                                    id: 2
                                }
                            }
                        }
                    }), o("timestamp", {
                        Timestamp: t
                    }), o("empty", {
                        Empty: {
                            fields: {}
                        }
                    }), o("struct", {
                        Struct: {
                            fields: {
                                fields: {
                                    keyType: "string",
                                    type: "Value",
                                    id: 1
                                }
                            }
                        },
                        Value: {
                            oneofs: {
                                kind: {
                                    oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]
                                }
                            },
                            fields: {
                                nullValue: {
                                    type: "NullValue",
                                    id: 1
                                },
                                numberValue: {
                                    type: "double",
                                    id: 2
                                },
                                stringValue: {
                                    type: "string",
                                    id: 3
                                },
                                boolValue: {
                                    type: "bool",
                                    id: 4
                                },
                                structValue: {
                                    type: "Struct",
                                    id: 5
                                },
                                listValue: {
                                    type: "ListValue",
                                    id: 6
                                }
                            }
                        },
                        NullValue: {
                            values: {
                                NULL_VALUE: 0
                            }
                        },
                        ListValue: {
                            fields: {
                                values: {
                                    rule: "repeated",
                                    type: "Value",
                                    id: 1
                                }
                            }
                        }
                    }), o("wrappers", {
                        DoubleValue: {
                            fields: {
                                value: {
                                    type: "double",
                                    id: 1
                                }
                            }
                        },
                        FloatValue: {
                            fields: {
                                value: {
                                    type: "float",
                                    id: 1
                                }
                            }
                        },
                        Int64Value: {
                            fields: {
                                value: {
                                    type: "int64",
                                    id: 1
                                }
                            }
                        },
                        UInt64Value: {
                            fields: {
                                value: {
                                    type: "uint64",
                                    id: 1
                                }
                            }
                        },
                        Int32Value: {
                            fields: {
                                value: {
                                    type: "int32",
                                    id: 1
                                }
                            }
                        },
                        UInt32Value: {
                            fields: {
                                value: {
                                    type: "uint32",
                                    id: 1
                                }
                            }
                        },
                        BoolValue: {
                            fields: {
                                value: {
                                    type: "bool",
                                    id: 1
                                }
                            }
                        },
                        StringValue: {
                            fields: {
                                value: {
                                    type: "string",
                                    id: 1
                                }
                            }
                        },
                        BytesValue: {
                            fields: {
                                value: {
                                    type: "bytes",
                                    id: 1
                                }
                            }
                        }
                    }), o("field_mask", {
                        FieldMask: {
                            fields: {
                                paths: {
                                    rule: "repeated",
                                    type: "string",
                                    id: 1
                                }
                            }
                        }
                    }), o.get = function (e) {
                        return o[e] || null
                    }
                },
                3996: (e, t, r) => {
                    "use strict";
                    var o = t,
                        n = r(7025),
                        i = r(9935);

                    function s(e, t, r, o) {
                        if (t.resolvedType)
                            if (t.resolvedType instanceof n) {
                                e("switch(d%s){", o);
                                for (var i = t.resolvedType.values, s = Object.keys(i), a = 0; a < s.length; ++a) t.repeated && i[s[a]] === t.typeDefault && e("default:"), e("case%j:", s[a])("case %i:", i[s[a]])("m%s=%j", o, i[s[a]])("break");
                                e("}")
                            } else e('if(typeof d%s!=="object")', o)("throw TypeError(%j)", t.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", o, r, o);
                        else {
                            var c = !1;
                            switch (t.type) {
                                case "double":
                                case "float":
                                    e("m%s=Number(d%s)", o, o);
                                    break;
                                case "uint32":
                                case "fixed32":
                                    e("m%s=d%s>>>0", o, o);
                                    break;
                                case "int32":
                                case "sint32":
                                case "sfixed32":
                                    e("m%s=d%s|0", o, o);
                                    break;
                                case "uint64":
                                    c = !0;
                                case "int64":
                                case "sint64":
                                case "fixed64":
                                case "sfixed64":
                                    e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", o, o, c)('else if(typeof d%s==="string")', o)("m%s=parseInt(d%s,10)", o, o)('else if(typeof d%s==="number")', o)("m%s=d%s", o, o)('else if(typeof d%s==="object")', o)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", o, o, o, c ? "true" : "");
                                    break;
                                case "bytes":
                                    e('if(typeof d%s==="string")', o)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", o, o, o)("else if(d%s.length)", o)("m%s=d%s", o, o);
                                    break;
                                case "string":
                                    e("m%s=String(d%s)", o, o);
                                    break;
                                case "bool":
                                    e("m%s=Boolean(d%s)", o, o)
                            }
                        }
                        return e
                    }

                    function a(e, t, r, o) {
                        if (t.resolvedType) t.resolvedType instanceof n ? e("d%s=o.enums===String?types[%i].values[m%s]:m%s", o, r, o, o) : e("d%s=types[%i].toObject(m%s,o)", o, r, o);
                        else {
                            var i = !1;
                            switch (t.type) {
                                case "double":
                                case "float":
                                    e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", o, o, o, o);
                                    break;
                                case "uint64":
                                    i = !0;
                                case "int64":
                                case "sint64":
                                case "fixed64":
                                case "sfixed64":
                                    e('if(typeof m%s==="number")', o)("d%s=o.longs===String?String(m%s):m%s", o, o, o)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", o, o, o, o, i ? "true" : "", o);
                                    break;
                                case "bytes":
                                    e("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", o, o, o, o, o);
                                    break;
                                default:
                                    e("d%s=m%s", o, o)
                            }
                        }
                        return e
                    }
                    o.fromObject = function (e) {
                        var t = e.fieldsArray,
                            r = i.codegen(["d"], e.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
                        if (!t.length) return r("return new this.ctor");
                        r("var m=new this.ctor");
                        for (var o = 0; o < t.length; ++o) {
                            var a = t[o].resolve(),
                                c = i.safeProp(a.name);
                            a.map ? (r("if(d%s){", c)('if(typeof d%s!=="object")', c)("throw TypeError(%j)", a.fullName + ": object expected")("m%s={}", c)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", c), s(r, a, o, c + "[ks[i]]")("}")("}")) : a.repeated ? (r("if(d%s){", c)("if(!Array.isArray(d%s))", c)("throw TypeError(%j)", a.fullName + ": array expected")("m%s=[]", c)("for(var i=0;i<d%s.length;++i){", c), s(r, a, o, c + "[i]")("}")("}")) : (a.resolvedType instanceof n || r("if(d%s!=null){", c), s(r, a, o, c), a.resolvedType instanceof n || r("}"))
                        }
                        return r("return m")
                    }, o.toObject = function (e) {
                        var t = e.fieldsArray.slice().sort(i.compareFieldsById);
                        if (!t.length) return i.codegen()("return {}");
                        for (var r = i.codegen(["m", "o"], e.name + "$toObject")("if(!o)")("o={}")("var d={}"), o = [], s = [], c = [], u = 0; u < t.length; ++u) t[u].partOf || (t[u].resolve().repeated ? o : t[u].map ? s : c).push(t[u]);
                        if (o.length) {
                            for (r("if(o.arrays||o.defaults){"), u = 0; u < o.length; ++u) r("d%s=[]", i.safeProp(o[u].name));
                            r("}")
                        }
                        if (s.length) {
                            for (r("if(o.objects||o.defaults){"), u = 0; u < s.length; ++u) r("d%s={}", i.safeProp(s[u].name));
                            r("}")
                        }
                        if (c.length) {
                            for (r("if(o.defaults){"), u = 0; u < c.length; ++u) {
                                var l = c[u],
                                    p = i.safeProp(l.name);
                                if (l.resolvedType instanceof n) r("d%s=o.enums===String?%j:%j", p, l.resolvedType.valuesById[l.typeDefault], l.typeDefault);
                                else if (l.long) r("if(util.Long){")("var n=new util.Long(%i,%i,%j)", l.typeDefault.low, l.typeDefault.high, l.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", p)("}else")("d%s=o.longs===String?%j:%i", p, l.typeDefault.toString(), l.typeDefault.toNumber());
                                else if (l.bytes) {
                                    var d = "[" + Array.prototype.slice.call(l.typeDefault).join(",") + "]";
                                    r("if(o.bytes===String)d%s=%j", p, String.fromCharCode.apply(String, l.typeDefault))("else{")("d%s=%s", p, d)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", p, p)("}")
                                } else r("d%s=%j", p, l.typeDefault)
                            }
                            r("}")
                        }
                        var h = !1;
                        for (u = 0; u < t.length; ++u) {
                            l = t[u];
                            var f = e._fieldsArray.indexOf(l);
                            p = i.safeProp(l.name), l.map ? (h || (h = !0, r("var ks2")), r("if(m%s&&(ks2=Object.keys(m%s)).length){", p, p)("d%s={}", p)("for(var j=0;j<ks2.length;++j){"), a(r, l, f, p + "[ks2[j]]")("}")) : l.repeated ? (r("if(m%s&&m%s.length){", p, p)("d%s=[]", p)("for(var j=0;j<m%s.length;++j){", p), a(r, l, f, p + "[j]")("}")) : (r("if(m%s!=null&&m.hasOwnProperty(%j)){", p, l.name), a(r, l, f, p), l.partOf && r("if(o.oneofs)")("d%s=%j", i.safeProp(l.partOf.name), l.name)), r("}")
                        }
                        return r("return d")
                    }
                },
                5305: (e, t, r) => {
                    "use strict";
                    e.exports = function (e) {
                        var t = i.codegen(["r", "l"], e.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (e.fieldsArray.filter((function (e) {
                            return e.map
                        })).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
                        e.group && t("if((t&7)===4)")("break"), t("switch(t>>>3){");
                        for (var r = 0; r < e.fieldsArray.length; ++r) {
                            var a = e._fieldsArray[r].resolve(),
                                c = a.resolvedType instanceof o ? "int32" : a.type,
                                u = "m" + i.safeProp(a.name);
                            t("case %i:", a.id), a.map ? (t("if(%s===util.emptyObject)", u)("%s={}", u)("var c2 = r.uint32()+r.pos"), void 0 !== n.defaults[a.keyType] ? t("k=%j", n.defaults[a.keyType]) : t("k=null"), void 0 !== n.defaults[c] ? t("value=%j", n.defaults[c]) : t("value=null"), t("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", a.keyType)("case 2:"), void 0 === n.basic[c] ? t("value=types[%i].decode(r,r.uint32())", r) : t("value=r.%s()", c), t("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"), void 0 !== n.long[a.keyType] ? t('%s[typeof k==="object"?util.longToHash(k):k]=value', u) : t("%s[k]=value", u)) : a.repeated ? (t("if(!(%s&&%s.length))", u, u)("%s=[]", u), void 0 !== n.packed[c] && t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", u, c)("}else"), void 0 === n.basic[c] ? t(a.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", u, r) : t("%s.push(r.%s())", u, c)) : void 0 === n.basic[c] ? t(a.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", u, r) : t("%s=r.%s()", u, c), t("break")
                        }
                        for (t("default:")("r.skipType(t&7)")("break")("}")("}"), r = 0; r < e._fieldsArray.length; ++r) {
                            var l = e._fieldsArray[r];
                            l.required && t("if(!m.hasOwnProperty(%j))", l.name)("throw util.ProtocolError(%j,{instance:m})", s(l))
                        }
                        return t("return m")
                    };
                    var o = r(7025),
                        n = r(7063),
                        i = r(9935);

                    function s(e) {
                        return "missing required '" + e.name + "'"
                    }
                },
                4928: (e, t, r) => {
                    "use strict";
                    e.exports = function (e) {
                        for (var t, r = i.codegen(["m", "w"], e.name + "$encode")("if(!w)")("w=Writer.create()"), a = e.fieldsArray.slice().sort(i.compareFieldsById), c = 0; c < a.length; ++c) {
                            var u = a[c].resolve(),
                                l = e._fieldsArray.indexOf(u),
                                p = u.resolvedType instanceof o ? "int32" : u.type,
                                d = n.basic[p];
                            t = "m" + i.safeProp(u.name), u.map ? (r("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", t, u.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (u.id << 3 | 2) >>> 0, 8 | n.mapKey[u.keyType], u.keyType), void 0 === d ? r("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", l, t) : r(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | d, p, t), r("}")("}")) : u.repeated ? (r("if(%s!=null&&%s.length){", t, t), u.packed && void 0 !== n.packed[p] ? r("w.uint32(%i).fork()", (u.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", t)("w.%s(%s[i])", p, t)("w.ldelim()") : (r("for(var i=0;i<%s.length;++i)", t), void 0 === d ? s(r, u, l, t + "[i]") : r("w.uint32(%i).%s(%s[i])", (u.id << 3 | d) >>> 0, p, t)), r("}")) : (u.optional && r("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", t, u.name), void 0 === d ? s(r, u, l, t) : r("w.uint32(%i).%s(%s)", (u.id << 3 | d) >>> 0, p, t))
                        }
                        return r("return w")
                    };
                    var o = r(7025),
                        n = r(7063),
                        i = r(9935);

                    function s(e, t, r, o) {
                        return t.resolvedType.group ? e("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", r, o, (t.id << 3 | 3) >>> 0, (t.id << 3 | 4) >>> 0) : e("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", r, o, (t.id << 3 | 2) >>> 0)
                    }
                },
                7025: (e, t, r) => {
                    "use strict";
                    e.exports = s;
                    var o = r(3243);
                    ((s.prototype = Object.create(o.prototype)).constructor = s).className = "Enum";
                    var n = r(9313),
                        i = r(9935);

                    function s(e, t, r, n, i) {
                        if (o.call(this, e, r), t && "object" != typeof t) throw TypeError("values must be an object");
                        if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = n, this.comments = i || {}, this.reserved = void 0, t)
                            for (var s = Object.keys(t), a = 0; a < s.length; ++a) "number" == typeof t[s[a]] && (this.valuesById[this.values[s[a]] = t[s[a]]] = s[a])
                    }
                    s.fromJSON = function (e, t) {
                        var r = new s(e, t.values, t.options, t.comment, t.comments);
                        return r.reserved = t.reserved, r
                    }, s.prototype.toJSON = function (e) {
                        var t = !!e && Boolean(e.keepComments);
                        return i.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", t ? this.comment : void 0, "comments", t ? this.comments : void 0])
                    }, s.prototype.add = function (e, t, r) {
                        if (!i.isString(e)) throw TypeError("name must be a string");
                        if (!i.isInteger(t)) throw TypeError("id must be an integer");
                        if (void 0 !== this.values[e]) throw Error("duplicate name '" + e + "' in " + this);
                        if (this.isReservedId(t)) throw Error("id " + t + " is reserved in " + this);
                        if (this.isReservedName(e)) throw Error("name '" + e + "' is reserved in " + this);
                        if (void 0 !== this.valuesById[t]) {
                            if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + t + " in " + this);
                            this.values[e] = t
                        } else this.valuesById[this.values[e] = t] = e;
                        return this.comments[e] = r || null, this
                    }, s.prototype.remove = function (e) {
                        if (!i.isString(e)) throw TypeError("name must be a string");
                        var t = this.values[e];
                        if (null == t) throw Error("name '" + e + "' does not exist in " + this);
                        return delete this.valuesById[t], delete this.values[e], delete this.comments[e], this
                    }, s.prototype.isReservedId = function (e) {
                        return n.isReservedId(this.reserved, e)
                    }, s.prototype.isReservedName = function (e) {
                        return n.isReservedName(this.reserved, e)
                    }
                },
                3548: (e, t, r) => {
                    "use strict";
                    e.exports = u;
                    var o = r(3243);
                    ((u.prototype = Object.create(o.prototype)).constructor = u).className = "Field";
                    var n, i = r(7025),
                        s = r(7063),
                        a = r(9935),
                        c = /^required|optional|repeated$/;

                    function u(e, t, r, n, i, u, l) {
                        if (a.isObject(n) ? (l = i, u = n, n = i = void 0) : a.isObject(i) && (l = u, u = i, i = void 0), o.call(this, e, u), !a.isInteger(t) || t < 0) throw TypeError("id must be a non-negative integer");
                        if (!a.isString(r)) throw TypeError("type must be a string");
                        if (void 0 !== n && !c.test(n = n.toString().toLowerCase())) throw TypeError("rule must be a string rule");
                        if (void 0 !== i && !a.isString(i)) throw TypeError("extend must be a string");
                        "proto3_optional" === n && (n = "optional"), this.rule = n && "optional" !== n ? n : void 0, this.type = r, this.id = t, this.extend = i || void 0, this.required = "required" === n, this.optional = !this.required, this.repeated = "repeated" === n, this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !!a.Long && void 0 !== s.long[r], this.bytes = "bytes" === r, this.resolvedType = null, this.extensionField = null, this.declaringField = null, this._packed = null, this.comment = l
                    }
                    u.fromJSON = function (e, t) {
                        return new u(e, t.id, t.type, t.rule, t.extend, t.options, t.comment)
                    }, Object.defineProperty(u.prototype, "packed", {
                        get: function () {
                            return null === this._packed && (this._packed = !1 !== this.getOption("packed")), this._packed
                        }
                    }), u.prototype.setOption = function (e, t, r) {
                        return "packed" === e && (this._packed = null), o.prototype.setOption.call(this, e, t, r)
                    }, u.prototype.toJSON = function (e) {
                        var t = !!e && Boolean(e.keepComments);
                        return a.toObject(["rule", "optional" !== this.rule && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : void 0])
                    }, u.prototype.resolve = function () {
                        if (this.resolved) return this;
                        if (void 0 === (this.typeDefault = s.defaults[this.type]) && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof n ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && null != this.options.default && (this.typeDefault = this.options.default, this.resolvedType instanceof i && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (!0 !== this.options.packed && (void 0 === this.options.packed || !this.resolvedType || this.resolvedType instanceof i) || delete this.options.packed, Object.keys(this.options).length || (this.options = void 0)), this.long) this.typeDefault = a.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0)), Object.freeze && Object.freeze(this.typeDefault);
                        else if (this.bytes && "string" == typeof this.typeDefault) {
                            var e;
                            a.base64.test(this.typeDefault) ? a.base64.decode(this.typeDefault, e = a.newBuffer(a.base64.length(this.typeDefault)), 0) : a.utf8.write(this.typeDefault, e = a.newBuffer(a.utf8.length(this.typeDefault)), 0), this.typeDefault = e
                        }
                        return this.map ? this.defaultValue = a.emptyObject : this.repeated ? this.defaultValue = a.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof n && (this.parent.ctor.prototype[this.name] = this.defaultValue), o.prototype.resolve.call(this)
                    }, u.d = function (e, t, r, o) {
                        return "function" == typeof t ? t = a.decorateType(t).name : t && "object" == typeof t && (t = a.decorateEnum(t).name),
                            function (n, i) {
                                a.decorateType(n.constructor).add(new u(i, e, t, r, {
                                    default: o
                                }))
                            }
                    }, u._configure = function (e) {
                        n = e
                    }
                },
                8836: (e, t, r) => {
                    "use strict";
                    var o = e.exports = r(9482);
                    o.build = "light", o.load = function (e, t, r) {
                        return "function" == typeof t ? (r = t, t = new o.Root) : t || (t = new o.Root), t.load(e, r)
                    }, o.loadSync = function (e, t) {
                        return t || (t = new o.Root), t.loadSync(e)
                    }, o.encoder = r(4928), o.decoder = r(5305), o.verifier = r(4497), o.converter = r(3996), o.ReflectionObject = r(3243), o.Namespace = r(9313), o.Root = r(9424), o.Enum = r(7025), o.Type = r(7645), o.Field = r(3548), o.OneOf = r(7598), o.MapField = r(6039), o.Service = r(7513), o.Method = r(4429), o.Message = r(8368), o.wrappers = r(1667), o.types = r(7063), o.util = r(9935), o.ReflectionObject._configure(o.Root), o.Namespace._configure(o.Type, o.Service, o.Enum), o.Root._configure(o.Type), o.Field._configure(o.Type)
                },
                9482: (e, t, r) => {
                    "use strict";
                    var o = t;

                    function n() {
                        o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader)
                    }
                    o.build = "minimal", o.Writer = r(1173), o.BufferWriter = r(3155), o.Reader = r(1408), o.BufferReader = r(593), o.util = r(9693), o.rpc = r(5994), o.roots = r(5054), o.configure = n, n()
                },
                9050: (e, t, r) => {
                    "use strict";
                    var o = e.exports = r(8836);
                    o.build = "full", o.tokenize = r(626), o.parse = r(2228), o.common = r(2967), o.Root._configure(o.Type, o.parse, o.common)
                },
                6039: (e, t, r) => {
                    "use strict";
                    e.exports = s;
                    var o = r(3548);
                    ((s.prototype = Object.create(o.prototype)).constructor = s).className = "MapField";
                    var n = r(7063),
                        i = r(9935);

                    function s(e, t, r, n, s, a) {
                        if (o.call(this, e, t, n, void 0, void 0, s, a), !i.isString(r)) throw TypeError("keyType must be a string");
                        this.keyType = r, this.resolvedKeyType = null, this.map = !0
                    }
                    s.fromJSON = function (e, t) {
                        return new s(e, t.id, t.keyType, t.type, t.options, t.comment)
                    }, s.prototype.toJSON = function (e) {
                        var t = !!e && Boolean(e.keepComments);
                        return i.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : void 0])
                    }, s.prototype.resolve = function () {
                        if (this.resolved) return this;
                        if (void 0 === n.mapKey[this.keyType]) throw Error("invalid key type: " + this.keyType);
                        return o.prototype.resolve.call(this)
                    }, s.d = function (e, t, r) {
                        return "function" == typeof r ? r = i.decorateType(r).name : r && "object" == typeof r && (r = i.decorateEnum(r).name),
                            function (o, n) {
                                i.decorateType(o.constructor).add(new s(n, e, t, r))
                            }
                    }
                },
                8368: (e, t, r) => {
                    "use strict";
                    e.exports = n;
                    var o = r(9693);

                    function n(e) {
                        if (e)
                            for (var t = Object.keys(e), r = 0; r < t.length; ++r) this[t[r]] = e[t[r]]
                    }
                    n.create = function (e) {
                        return this.$type.create(e)
                    }, n.encode = function (e, t) {
                        return this.$type.encode(e, t)
                    }, n.encodeDelimited = function (e, t) {
                        return this.$type.encodeDelimited(e, t)
                    }, n.decode = function (e) {
                        return this.$type.decode(e)
                    }, n.decodeDelimited = function (e) {
                        return this.$type.decodeDelimited(e)
                    }, n.verify = function (e) {
                        return this.$type.verify(e)
                    }, n.fromObject = function (e) {
                        return this.$type.fromObject(e)
                    }, n.toObject = function (e, t) {
                        return this.$type.toObject(e, t)
                    }, n.prototype.toJSON = function () {
                        return this.$type.toObject(this, o.toJSONOptions)
                    }
                },
                4429: (e, t, r) => {
                    "use strict";
                    e.exports = i;
                    var o = r(3243);
                    ((i.prototype = Object.create(o.prototype)).constructor = i).className = "Method";
                    var n = r(9935);

                    function i(e, t, r, i, s, a, c, u, l) {
                        if (n.isObject(s) ? (c = s, s = a = void 0) : n.isObject(a) && (c = a, a = void 0), void 0 !== t && !n.isString(t)) throw TypeError("type must be a string");
                        if (!n.isString(r)) throw TypeError("requestType must be a string");
                        if (!n.isString(i)) throw TypeError("responseType must be a string");
                        o.call(this, e, c), this.type = t || "rpc", this.requestType = r, this.requestStream = !!s || void 0, this.responseType = i, this.responseStream = !!a || void 0, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = u, this.parsedOptions = l
                    }
                    i.fromJSON = function (e, t) {
                        return new i(e, t.type, t.requestType, t.responseType, t.requestStream, t.responseStream, t.options, t.comment, t.parsedOptions)
                    }, i.prototype.toJSON = function (e) {
                        var t = !!e && Boolean(e.keepComments);
                        return n.toObject(["type", "rpc" !== this.type && this.type || void 0, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", t ? this.comment : void 0, "parsedOptions", this.parsedOptions])
                    }, i.prototype.resolve = function () {
                        return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), o.prototype.resolve.call(this))
                    }
                },
                9313: (e, t, r) => {
                    "use strict";
                    e.exports = p;
                    var o = r(3243);
                    ((p.prototype = Object.create(o.prototype)).constructor = p).className = "Namespace";
                    var n, i, s, a = r(3548),
                        c = r(7598),
                        u = r(9935);

                    function l(e, t) {
                        if (e && e.length) {
                            for (var r = {}, o = 0; o < e.length; ++o) r[e[o].name] = e[o].toJSON(t);
                            return r
                        }
                    }

                    function p(e, t) {
                        o.call(this, e, t), this.nested = void 0, this._nestedArray = null
                    }

                    function d(e) {
                        return e._nestedArray = null, e
                    }
                    p.fromJSON = function (e, t) {
                        return new p(e, t.options).addJSON(t.nested)
                    }, p.arrayToJSON = l, p.isReservedId = function (e, t) {
                        if (e)
                            for (var r = 0; r < e.length; ++r)
                                if ("string" != typeof e[r] && e[r][0] <= t && e[r][1] > t) return !0;
                        return !1
                    }, p.isReservedName = function (e, t) {
                        if (e)
                            for (var r = 0; r < e.length; ++r)
                                if (e[r] === t) return !0;
                        return !1
                    }, Object.defineProperty(p.prototype, "nestedArray", {
                        get: function () {
                            return this._nestedArray || (this._nestedArray = u.toArray(this.nested))
                        }
                    }), p.prototype.toJSON = function (e) {
                        return u.toObject(["options", this.options, "nested", l(this.nestedArray, e)])
                    }, p.prototype.addJSON = function (e) {
                        if (e)
                            for (var t, r = Object.keys(e), o = 0; o < r.length; ++o) t = e[r[o]], this.add((void 0 !== t.fields ? n.fromJSON : void 0 !== t.values ? s.fromJSON : void 0 !== t.methods ? i.fromJSON : void 0 !== t.id ? a.fromJSON : p.fromJSON)(r[o], t));
                        return this
                    }, p.prototype.get = function (e) {
                        return this.nested && this.nested[e] || null
                    }, p.prototype.getEnum = function (e) {
                        if (this.nested && this.nested[e] instanceof s) return this.nested[e].values;
                        throw Error("no such enum: " + e)
                    }, p.prototype.add = function (e) {
                        if (!(e instanceof a && void 0 !== e.extend || e instanceof n || e instanceof s || e instanceof i || e instanceof p || e instanceof c)) throw TypeError("object must be a valid nested object");
                        if (this.nested) {
                            var t = this.get(e.name);
                            if (t) {
                                if (!(t instanceof p && e instanceof p) || t instanceof n || t instanceof i) throw Error("duplicate name '" + e.name + "' in " + this);
                                for (var r = t.nestedArray, o = 0; o < r.length; ++o) e.add(r[o]);
                                this.remove(t), this.nested || (this.nested = {}), e.setOptions(t.options, !0)
                            }
                        } else this.nested = {};
                        return this.nested[e.name] = e, e.onAdd(this), d(this)
                    }, p.prototype.remove = function (e) {
                        if (!(e instanceof o)) throw TypeError("object must be a ReflectionObject");
                        if (e.parent !== this) throw Error(e + " is not a member of " + this);
                        return delete this.nested[e.name], Object.keys(this.nested).length || (this.nested = void 0), e.onRemove(this), d(this)
                    }, p.prototype.define = function (e, t) {
                        if (u.isString(e)) e = e.split(".");
                        else if (!Array.isArray(e)) throw TypeError("illegal path");
                        if (e && e.length && "" === e[0]) throw Error("path must be relative");
                        for (var r = this; e.length > 0;) {
                            var o = e.shift();
                            if (r.nested && r.nested[o]) {
                                if (!((r = r.nested[o]) instanceof p)) throw Error("path conflicts with non-namespace objects")
                            } else r.add(r = new p(o))
                        }
                        return t && r.addJSON(t), r
                    }, p.prototype.resolveAll = function () {
                        for (var e = this.nestedArray, t = 0; t < e.length;) e[t] instanceof p ? e[t++].resolveAll() : e[t++].resolve();
                        return this.resolve()
                    }, p.prototype.lookup = function (e, t, r) {
                        if ("boolean" == typeof t ? (r = t, t = void 0) : t && !Array.isArray(t) && (t = [t]), u.isString(e) && e.length) {
                            if ("." === e) return this.root;
                            e = e.split(".")
                        } else if (!e.length) return this;
                        if ("" === e[0]) return this.root.lookup(e.slice(1), t);
                        var o = this.get(e[0]);
                        if (o) {
                            if (1 === e.length) {
                                if (!t || t.indexOf(o.constructor) > -1) return o
                            } else if (o instanceof p && (o = o.lookup(e.slice(1), t, !0))) return o
                        } else
                            for (var n = 0; n < this.nestedArray.length; ++n)
                                if (this._nestedArray[n] instanceof p && (o = this._nestedArray[n].lookup(e, t, !0))) return o;
                        return null === this.parent || r ? null : this.parent.lookup(e, t)
                    }, p.prototype.lookupType = function (e) {
                        var t = this.lookup(e, [n]);
                        if (!t) throw Error("no such type: " + e);
                        return t
                    }, p.prototype.lookupEnum = function (e) {
                        var t = this.lookup(e, [s]);
                        if (!t) throw Error("no such Enum '" + e + "' in " + this);
                        return t
                    }, p.prototype.lookupTypeOrEnum = function (e) {
                        var t = this.lookup(e, [n, s]);
                        if (!t) throw Error("no such Type or Enum '" + e + "' in " + this);
                        return t
                    }, p.prototype.lookupService = function (e) {
                        var t = this.lookup(e, [i]);
                        if (!t) throw Error("no such Service '" + e + "' in " + this);
                        return t
                    }, p._configure = function (e, t, r) {
                        n = e, i = t, s = r
                    }
                },
                3243: (e, t, r) => {
                    "use strict";
                    e.exports = i, i.className = "ReflectionObject";
                    var o, n = r(9935);

                    function i(e, t) {
                        if (!n.isString(e)) throw TypeError("name must be a string");
                        if (t && !n.isObject(t)) throw TypeError("options must be an object");
                        this.options = t, this.parsedOptions = null, this.name = e, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null
                    }
                    Object.defineProperties(i.prototype, {
                        root: {
                            get: function () {
                                for (var e = this; null !== e.parent;) e = e.parent;
                                return e
                            }
                        },
                        fullName: {
                            get: function () {
                                for (var e = [this.name], t = this.parent; t;) e.unshift(t.name), t = t.parent;
                                return e.join(".")
                            }
                        }
                    }), i.prototype.toJSON = function () {
                        throw Error()
                    }, i.prototype.onAdd = function (e) {
                        this.parent && this.parent !== e && this.parent.remove(this), this.parent = e, this.resolved = !1;
                        var t = e.root;
                        t instanceof o && t._handleAdd(this)
                    }, i.prototype.onRemove = function (e) {
                        var t = e.root;
                        t instanceof o && t._handleRemove(this), this.parent = null, this.resolved = !1
                    }, i.prototype.resolve = function () {
                        return this.resolved || this.root instanceof o && (this.resolved = !0), this
                    }, i.prototype.getOption = function (e) {
                        if (this.options) return this.options[e]
                    }, i.prototype.setOption = function (e, t, r) {
                        return r && this.options && void 0 !== this.options[e] || ((this.options || (this.options = {}))[e] = t), this
                    }, i.prototype.setParsedOption = function (e, t, r) {
                        this.parsedOptions || (this.parsedOptions = []);
                        var o = this.parsedOptions;
                        if (r) {
                            var i = o.find((function (t) {
                                return Object.prototype.hasOwnProperty.call(t, e)
                            }));
                            if (i) {
                                var s = i[e];
                                n.setProperty(s, r, t)
                            } else(i = {})[e] = n.setProperty({}, r, t), o.push(i)
                        } else {
                            var a = {};
                            a[e] = t, o.push(a)
                        }
                        return this
                    }, i.prototype.setOptions = function (e, t) {
                        if (e)
                            for (var r = Object.keys(e), o = 0; o < r.length; ++o) this.setOption(r[o], e[r[o]], t);
                        return this
                    }, i.prototype.toString = function () {
                        var e = this.constructor.className,
                            t = this.fullName;
                        return t.length ? e + " " + t : e
                    }, i._configure = function (e) {
                        o = e
                    }
                },
                7598: (e, t, r) => {
                    "use strict";
                    e.exports = s;
                    var o = r(3243);
                    ((s.prototype = Object.create(o.prototype)).constructor = s).className = "OneOf";
                    var n = r(3548),
                        i = r(9935);

                    function s(e, t, r, n) {
                        if (Array.isArray(t) || (r = t, t = void 0), o.call(this, e, r), void 0 !== t && !Array.isArray(t)) throw TypeError("fieldNames must be an Array");
                        this.oneof = t || [], this.fieldsArray = [], this.comment = n
                    }

                    function a(e) {
                        if (e.parent)
                            for (var t = 0; t < e.fieldsArray.length; ++t) e.fieldsArray[t].parent || e.parent.add(e.fieldsArray[t])
                    }
                    s.fromJSON = function (e, t) {
                        return new s(e, t.oneof, t.options, t.comment)
                    }, s.prototype.toJSON = function (e) {
                        var t = !!e && Boolean(e.keepComments);
                        return i.toObject(["options", this.options, "oneof", this.oneof, "comment", t ? this.comment : void 0])
                    }, s.prototype.add = function (e) {
                        if (!(e instanceof n)) throw TypeError("field must be a Field");
                        return e.parent && e.parent !== this.parent && e.parent.remove(e), this.oneof.push(e.name), this.fieldsArray.push(e), e.partOf = this, a(this), this
                    }, s.prototype.remove = function (e) {
                        if (!(e instanceof n)) throw TypeError("field must be a Field");
                        var t = this.fieldsArray.indexOf(e);
                        if (t < 0) throw Error(e + " is not a member of " + this);
                        return this.fieldsArray.splice(t, 1), (t = this.oneof.indexOf(e.name)) > -1 && this.oneof.splice(t, 1), e.partOf = null, this
                    }, s.prototype.onAdd = function (e) {
                        o.prototype.onAdd.call(this, e);
                        for (var t = 0; t < this.oneof.length; ++t) {
                            var r = e.get(this.oneof[t]);
                            r && !r.partOf && (r.partOf = this, this.fieldsArray.push(r))
                        }
                        a(this)
                    }, s.prototype.onRemove = function (e) {
                        for (var t, r = 0; r < this.fieldsArray.length; ++r)(t = this.fieldsArray[r]).parent && t.parent.remove(t);
                        o.prototype.onRemove.call(this, e)
                    }, s.d = function () {
                        for (var e = new Array(arguments.length), t = 0; t < arguments.length;) e[t] = arguments[t++];
                        return function (t, r) {
                            i.decorateType(t.constructor).add(new s(r, e)), Object.defineProperty(t, r, {
                                get: i.oneOfGetter(e),
                                set: i.oneOfSetter(e)
                            })
                        }
                    }
                },
                2228: (e, t, r) => {
                    "use strict";
                    e.exports = R, R.filename = null, R.defaults = {
                        keepCase: !1
                    };
                    var o = r(626),
                        n = r(9424),
                        i = r(7645),
                        s = r(3548),
                        a = r(6039),
                        c = r(7598),
                        u = r(7025),
                        l = r(7513),
                        p = r(4429),
                        d = r(7063),
                        h = r(9935),
                        f = /^[1-9][0-9]*$/,
                        m = /^-?[1-9][0-9]*$/,
                        y = /^0[x][0-9a-fA-F]+$/,
                        g = /^-?0[x][0-9a-fA-F]+$/,
                        v = /^0[0-7]+$/,
                        E = /^-?0[0-7]+$/,
                        _ = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
                        T = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
                        O = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
                        I = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;

                    function R(e, t, r) {
                        t instanceof n || (r = t, t = new n), r || (r = R.defaults);
                        var S, N, C, A, b, M = r.preferTrailingComment || !1,
                            w = o(e, r.alternateCommentMode || !1),
                            U = w.next,
                            k = w.push,
                            P = w.peek,
                            x = w.skip,
                            j = w.cmnt,
                            L = !0,
                            D = !1,
                            G = t,
                            B = r.keepCase ? function (e) {
                                return e
                            } : h.camelCase;

                        function H(e, t, r) {
                            var o = R.filename;
                            return r || (R.filename = null), Error("illegal " + (t || "token") + " '" + e + "' (" + (o ? o + ", " : "") + "line " + w.line + ")")
                        }

                        function F() {
                            var e, t = [];
                            do {
                                if ('"' !== (e = U()) && "'" !== e) throw H(e);
                                t.push(U()), x(e), e = P()
                            } while ('"' === e || "'" === e);
                            return t.join("")
                        }

                        function W(e) {
                            var t = U();
                            switch (t) {
                                case "'":
                                case '"':
                                    return k(t), F();
                                case "true":
                                case "TRUE":
                                    return !0;
                                case "false":
                                case "FALSE":
                                    return !1
                            }
                            try {
                                return function (e, t) {
                                    var r = 1;
                                    switch ("-" === e.charAt(0) && (r = -1, e = e.substring(1)), e) {
                                        case "inf":
                                        case "INF":
                                        case "Inf":
                                            return r * (1 / 0);
                                        case "nan":
                                        case "NAN":
                                        case "Nan":
                                        case "NaN":
                                            return NaN;
                                        case "0":
                                            return 0
                                    }
                                    if (f.test(e)) return r * parseInt(e, 10);
                                    if (y.test(e)) return r * parseInt(e, 16);
                                    if (v.test(e)) return r * parseInt(e, 8);
                                    if (_.test(e)) return r * parseFloat(e);
                                    throw H(e, "number", !0)
                                }(t)
                            } catch (r) {
                                if (e && O.test(t)) return t;
                                throw H(t, "value")
                            }
                        }

                        function q(e, t) {
                            var r, o;
                            do {
                                !t || '"' !== (r = P()) && "'" !== r ? e.push([o = z(U()), x("to", !0) ? z(U()) : o]) : e.push(F())
                            } while (x(",", !0));
                            x(";")
                        }

                        function z(e, t) {
                            switch (e) {
                                case "max":
                                case "MAX":
                                case "Max":
                                    return 536870911;
                                case "0":
                                    return 0
                            }
                            if (!t && "-" === e.charAt(0)) throw H(e, "id");
                            if (m.test(e)) return parseInt(e, 10);
                            if (g.test(e)) return parseInt(e, 16);
                            if (E.test(e)) return parseInt(e, 8);
                            throw H(e, "id")
                        }

                        function K() {
                            if (void 0 !== S) throw H("package");
                            if (S = U(), !O.test(S)) throw H(S, "name");
                            G = G.define(S), x(";")
                        }

                        function J() {
                            var e, t = P();
                            switch (t) {
                                case "weak":
                                    e = C || (C = []), U();
                                    break;
                                case "public":
                                    U();
                                default:
                                    e = N || (N = [])
                            }
                            t = F(), x(";"), e.push(t)
                        }

                        function V() {
                            if (x("="), A = F(), !(D = "proto3" === A) && "proto2" !== A) throw H(A, "syntax");
                            x(";")
                        }

                        function X(e, t) {
                            switch (t) {
                                case "option":
                                    return Q(e, t), x(";"), !0;
                                case "message":
                                    return function (e, t) {
                                        if (!T.test(t = U())) throw H(t, "type name");
                                        var r = new i(t);
                                        Y(r, (function (e) {
                                            if (!X(r, e)) switch (e) {
                                                case "map":
                                                    ! function (e) {
                                                        x("<");
                                                        var t = U();
                                                        if (void 0 === d.mapKey[t]) throw H(t, "type");
                                                        x(",");
                                                        var r = U();
                                                        if (!O.test(r)) throw H(r, "type");
                                                        x(">");
                                                        var o = U();
                                                        if (!T.test(o)) throw H(o, "name");
                                                        x("=");
                                                        var n = new a(B(o), z(U()), t, r);
                                                        Y(n, (function (e) {
                                                            if ("option" !== e) throw H(e);
                                                            Q(n, e), x(";")
                                                        }), (function () {
                                                            te(n)
                                                        })), e.add(n)
                                                    }(r);
                                                    break;
                                                case "required":
                                                case "repeated":
                                                    $(r, e);
                                                    break;
                                                case "optional":
                                                    $(r, D ? "proto3_optional" : "optional");
                                                    break;
                                                case "oneof":
                                                    ! function (e, t) {
                                                        if (!T.test(t = U())) throw H(t, "name");
                                                        var r = new c(B(t));
                                                        Y(r, (function (e) {
                                                            "option" === e ? (Q(r, e), x(";")) : (k(e), $(r, "optional"))
                                                        })), e.add(r)
                                                    }(r, e);
                                                    break;
                                                case "extensions":
                                                    q(r.extensions || (r.extensions = []));
                                                    break;
                                                case "reserved":
                                                    q(r.reserved || (r.reserved = []), !0);
                                                    break;
                                                default:
                                                    if (!D || !O.test(e)) throw H(e);
                                                    k(e), $(r, "optional")
                                            }
                                        })), e.add(r)
                                    }(e, t), !0;
                                case "enum":
                                    return function (e, t) {
                                        if (!T.test(t = U())) throw H(t, "name");
                                        var r = new u(t);
                                        Y(r, (function (e) {
                                            switch (e) {
                                                case "option":
                                                    Q(r, e), x(";");
                                                    break;
                                                case "reserved":
                                                    q(r.reserved || (r.reserved = []), !0);
                                                    break;
                                                default:
                                                    ! function (e, t) {
                                                        if (!T.test(t)) throw H(t, "name");
                                                        x("=");
                                                        var r = z(U(), !0),
                                                            o = {};
                                                        Y(o, (function (e) {
                                                            if ("option" !== e) throw H(e);
                                                            Q(o, e), x(";")
                                                        }), (function () {
                                                            te(o)
                                                        })), e.add(t, r, o.comment)
                                                    }(r, e)
                                            }
                                        })), e.add(r)
                                    }(e, t), !0;
                                case "service":
                                    return function (e, t) {
                                        if (!T.test(t = U())) throw H(t, "service name");
                                        var r = new l(t);
                                        Y(r, (function (e) {
                                            if (!X(r, e)) {
                                                if ("rpc" !== e) throw H(e);
                                                ! function (e, t) {
                                                    var r = j(),
                                                        o = t;
                                                    if (!T.test(t = U())) throw H(t, "name");
                                                    var n, i, s, a, c = t;
                                                    if (x("("), x("stream", !0) && (i = !0), !O.test(t = U())) throw H(t);
                                                    if (n = t, x(")"), x("returns"), x("("), x("stream", !0) && (a = !0), !O.test(t = U())) throw H(t);
                                                    s = t, x(")");
                                                    var u = new p(c, o, n, s, i, a);
                                                    u.comment = r, Y(u, (function (e) {
                                                        if ("option" !== e) throw H(e);
                                                        Q(u, e), x(";")
                                                    })), e.add(u)
                                                }(r, e)
                                            }
                                        })), e.add(r)
                                    }(e, t), !0;
                                case "extend":
                                    return function (e, t) {
                                        if (!O.test(t = U())) throw H(t, "reference");
                                        var r = t;
                                        Y(null, (function (t) {
                                            switch (t) {
                                                case "required":
                                                case "repeated":
                                                    $(e, t, r);
                                                    break;
                                                case "optional":
                                                    $(e, D ? "proto3_optional" : "optional", r);
                                                    break;
                                                default:
                                                    if (!D || !O.test(t)) throw H(t);
                                                    k(t), $(e, "optional", r)
                                            }
                                        }))
                                    }(e, t), !0
                            }
                            return !1
                        }

                        function Y(e, t, r) {
                            var o = w.line;
                            if (e && ("string" != typeof e.comment && (e.comment = j()), e.filename = R.filename), x("{", !0)) {
                                for (var n;
                                    "}" !== (n = U());) t(n);
                                x(";", !0)
                            } else r && r(), x(";"), e && ("string" != typeof e.comment || M) && (e.comment = j(o) || e.comment)
                        }

                        function $(e, t, r) {
                            var o = U();
                            if ("group" !== o) {
                                if (!O.test(o)) throw H(o, "type");
                                var n = U();
                                if (!T.test(n)) throw H(n, "name");
                                n = B(n), x("=");
                                var a = new s(n, z(U()), o, t, r);
                                if (Y(a, (function (e) {
                                        if ("option" !== e) throw H(e);
                                        Q(a, e), x(";")
                                    }), (function () {
                                        te(a)
                                    })), "proto3_optional" === t) {
                                    var u = new c("_" + n);
                                    a.setOption("proto3_optional", !0), u.add(a), e.add(u)
                                } else e.add(a);
                                D || !a.repeated || void 0 === d.packed[o] && void 0 !== d.basic[o] || a.setOption("packed", !1, !0)
                            } else ! function (e, t) {
                                var r = U();
                                if (!T.test(r)) throw H(r, "name");
                                var o = h.lcFirst(r);
                                r === o && (r = h.ucFirst(r)), x("=");
                                var n = z(U()),
                                    a = new i(r);
                                a.group = !0;
                                var c = new s(o, n, r, t);
                                c.filename = R.filename, Y(a, (function (e) {
                                    switch (e) {
                                        case "option":
                                            Q(a, e), x(";");
                                            break;
                                        case "required":
                                        case "repeated":
                                            $(a, e);
                                            break;
                                        case "optional":
                                            $(a, D ? "proto3_optional" : "optional");
                                            break;
                                        default:
                                            throw H(e)
                                    }
                                })), e.add(a).add(c)
                            }(e, t)
                        }

                        function Q(e, t) {
                            var r = x("(", !0);
                            if (!O.test(t = U())) throw H(t, "name");
                            var o, n = t,
                                i = n;
                            r && (x(")"), i = n = "(" + n + ")", t = P(), I.test(t) && (o = t.substr(1), n += t, U())), x("="),
                                function (e, t, r, o) {
                                    e.setParsedOption && e.setParsedOption(t, r, o)
                                }(e, i, Z(e, n), o)
                        }

                        function Z(e, t) {
                            if (x("{", !0)) {
                                for (var r = {}; !x("}", !0);) {
                                    if (!T.test(b = U())) throw H(b, "name");
                                    var o, n = b;
                                    "{" === P() ? o = Z(e, t + "." + b) : (x(":"), "{" === P() ? o = Z(e, t + "." + b) : (o = W(!0), ee(e, t + "." + b, o)));
                                    var i = r[n];
                                    i && (o = [].concat(i).concat(o)), r[n] = o, x(",", !0)
                                }
                                return r
                            }
                            var s = W(!0);
                            return ee(e, t, s), s
                        }

                        function ee(e, t, r) {
                            e.setOption && e.setOption(t, r)
                        }

                        function te(e) {
                            if (x("[", !0)) {
                                do {
                                    Q(e, "option")
                                } while (x(",", !0));
                                x("]")
                            }
                            return e
                        }
                        for (; null !== (b = U());) switch (b) {
                            case "package":
                                if (!L) throw H(b);
                                K();
                                break;
                            case "import":
                                if (!L) throw H(b);
                                J();
                                break;
                            case "syntax":
                                if (!L) throw H(b);
                                V();
                                break;
                            case "option":
                                Q(G, b), x(";");
                                break;
                            default:
                                if (X(G, b)) {
                                    L = !1;
                                    continue
                                }
                                throw H(b)
                        }
                        return R.filename = null, {
                            package: S,
                            imports: N,
                            weakImports: C,
                            syntax: A,
                            root: t
                        }
                    }
                },
                1408: (e, t, r) => {
                    "use strict";
                    e.exports = c;
                    var o, n = r(9693),
                        i = n.LongBits,
                        s = n.utf8;

                    function a(e, t) {
                        return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len)
                    }

                    function c(e) {
                        this.buf = e, this.pos = 0, this.len = e.length
                    }
                    var u, l = "undefined" != typeof Uint8Array ? function (e) {
                            if (e instanceof Uint8Array || Array.isArray(e)) return new c(e);
                            throw Error("illegal buffer")
                        } : function (e) {
                            if (Array.isArray(e)) return new c(e);
                            throw Error("illegal buffer")
                        },
                        p = function () {
                            return n.Buffer ? function (e) {
                                return (c.create = function (e) {
                                    return n.Buffer.isBuffer(e) ? new o(e) : l(e)
                                })(e)
                            } : l
                        };

                    function d() {
                        var e = new i(0, 0),
                            t = 0;
                        if (!(this.len - this.pos > 4)) {
                            for (; t < 3; ++t) {
                                if (this.pos >= this.len) throw a(this);
                                if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, this.buf[this.pos++] < 128) return e
                            }
                            return e.lo = (e.lo | (127 & this.buf[this.pos++]) << 7 * t) >>> 0, e
                        }
                        for (; t < 4; ++t)
                            if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, this.buf[this.pos++] < 128) return e;
                        if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 28) >>> 0, e.hi = (e.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return e;
                        if (t = 0, this.len - this.pos > 4) {
                            for (; t < 5; ++t)
                                if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, this.buf[this.pos++] < 128) return e
                        } else
                            for (; t < 5; ++t) {
                                if (this.pos >= this.len) throw a(this);
                                if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, this.buf[this.pos++] < 128) return e
                            }
                        throw Error("invalid varint encoding")
                    }

                    function h(e, t) {
                        return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0
                    }

                    function f() {
                        if (this.pos + 8 > this.len) throw a(this, 8);
                        return new i(h(this.buf, this.pos += 4), h(this.buf, this.pos += 4))
                    }
                    c.create = p(), c.prototype._slice = n.Array.prototype.subarray || n.Array.prototype.slice, c.prototype.uint32 = (u = 4294967295, function () {
                        if (u = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return u;
                        if (u = (u | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return u;
                        if (u = (u | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return u;
                        if (u = (u | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return u;
                        if (u = (u | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return u;
                        if ((this.pos += 5) > this.len) throw this.pos = this.len, a(this, 10);
                        return u
                    }), c.prototype.int32 = function () {
                        return 0 | this.uint32()
                    }, c.prototype.sint32 = function () {
                        var e = this.uint32();
                        return e >>> 1 ^ -(1 & e) | 0
                    }, c.prototype.bool = function () {
                        return 0 !== this.uint32()
                    }, c.prototype.fixed32 = function () {
                        if (this.pos + 4 > this.len) throw a(this, 4);
                        return h(this.buf, this.pos += 4)
                    }, c.prototype.sfixed32 = function () {
                        if (this.pos + 4 > this.len) throw a(this, 4);
                        return 0 | h(this.buf, this.pos += 4)
                    }, c.prototype.float = function () {
                        if (this.pos + 4 > this.len) throw a(this, 4);
                        var e = n.float.readFloatLE(this.buf, this.pos);
                        return this.pos += 4, e
                    }, c.prototype.double = function () {
                        if (this.pos + 8 > this.len) throw a(this, 4);
                        var e = n.float.readDoubleLE(this.buf, this.pos);
                        return this.pos += 8, e
                    }, c.prototype.bytes = function () {
                        var e = this.uint32(),
                            t = this.pos,
                            r = this.pos + e;
                        if (r > this.len) throw a(this, e);
                        return this.pos += e, Array.isArray(this.buf) ? this.buf.slice(t, r) : t === r ? new this.buf.constructor(0) : this._slice.call(this.buf, t, r)
                    }, c.prototype.string = function () {
                        var e = this.bytes();
                        return s.read(e, 0, e.length)
                    }, c.prototype.skip = function (e) {
                        if ("number" == typeof e) {
                            if (this.pos + e > this.len) throw a(this, e);
                            this.pos += e
                        } else
                            do {
                                if (this.pos >= this.len) throw a(this)
                            } while (128 & this.buf[this.pos++]);
                        return this
                    }, c.prototype.skipType = function (e) {
                        switch (e) {
                            case 0:
                                this.skip();
                                break;
                            case 1:
                                this.skip(8);
                                break;
                            case 2:
                                this.skip(this.uint32());
                                break;
                            case 3:
                                for (; 4 != (e = 7 & this.uint32());) this.skipType(e);
                                break;
                            case 5:
                                this.skip(4);
                                break;
                            default:
                                throw Error("invalid wire type " + e + " at offset " + this.pos)
                        }
                        return this
                    }, c._configure = function (e) {
                        o = e, c.create = p(), o._configure();
                        var t = n.Long ? "toLong" : "toNumber";
                        n.merge(c.prototype, {
                            int64: function () {
                                return d.call(this)[t](!1)
                            },
                            uint64: function () {
                                return d.call(this)[t](!0)
                            },
                            sint64: function () {
                                return d.call(this).zzDecode()[t](!1)
                            },
                            fixed64: function () {
                                return f.call(this)[t](!0)
                            },
                            sfixed64: function () {
                                return f.call(this)[t](!1)
                            }
                        })
                    }
                },
                593: (e, t, r) => {
                    "use strict";
                    e.exports = i;
                    var o = r(1408);
                    (i.prototype = Object.create(o.prototype)).constructor = i;
                    var n = r(9693);

                    function i(e) {
                        o.call(this, e)
                    }
                    i._configure = function () {
                        n.Buffer && (i.prototype._slice = n.Buffer.prototype.slice)
                    }, i.prototype.string = function () {
                        var e = this.uint32();
                        return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len))
                    }, i._configure()
                },
                9424: (e, t, r) => {
                    "use strict";
                    e.exports = p;
                    var o = r(9313);
                    ((p.prototype = Object.create(o.prototype)).constructor = p).className = "Root";
                    var n, i, s, a = r(3548),
                        c = r(7025),
                        u = r(7598),
                        l = r(9935);

                    function p(e) {
                        o.call(this, "", e), this.deferred = [], this.files = []
                    }

                    function d() {}
                    p.fromJSON = function (e, t) {
                        return t || (t = new p), e.options && t.setOptions(e.options), t.addJSON(e.nested)
                    }, p.prototype.resolvePath = l.path.resolve, p.prototype.fetch = l.fetch, p.prototype.load = function e(t, r, o) {
                        "function" == typeof r && (o = r, r = void 0);
                        var n = this;
                        if (!o) return l.asPromise(e, n, t, r);
                        var a = o === d;

                        function c(e, t) {
                            if (o) {
                                var r = o;
                                if (o = null, a) throw e;
                                r(e, t)
                            }
                        }

                        function u(e) {
                            var t = e.lastIndexOf("google/protobuf/");
                            if (t > -1) {
                                var r = e.substring(t);
                                if (r in s) return r
                            }
                            return null
                        }

                        function p(e, t) {
                            try {
                                if (l.isString(t) && "{" === t.charAt(0) && (t = JSON.parse(t)), l.isString(t)) {
                                    i.filename = e;
                                    var o, s = i(t, n, r),
                                        p = 0;
                                    if (s.imports)
                                        for (; p < s.imports.length; ++p)(o = u(s.imports[p]) || n.resolvePath(e, s.imports[p])) && h(o);
                                    if (s.weakImports)
                                        for (p = 0; p < s.weakImports.length; ++p)(o = u(s.weakImports[p]) || n.resolvePath(e, s.weakImports[p])) && h(o, !0)
                                } else n.setOptions(t.options).addJSON(t.nested)
                            } catch (e) {
                                c(e)
                            }
                            a || f || c(null, n)
                        }

                        function h(e, t) {
                            if (!(n.files.indexOf(e) > -1))
                                if (n.files.push(e), e in s) a ? p(e, s[e]) : (++f, setTimeout((function () {
                                    --f, p(e, s[e])
                                })));
                                else if (a) {
                                var r;
                                try {
                                    r = l.fs.readFileSync(e).toString("utf8")
                                } catch (e) {
                                    return void(t || c(e))
                                }
                                p(e, r)
                            } else ++f, n.fetch(e, (function (r, i) {
                                --f, o && (r ? t ? f || c(null, n) : c(r) : p(e, i))
                            }))
                        }
                        var f = 0;
                        l.isString(t) && (t = [t]);
                        for (var m, y = 0; y < t.length; ++y)(m = n.resolvePath("", t[y])) && h(m);
                        if (a) return n;
                        f || c(null, n)
                    }, p.prototype.loadSync = function (e, t) {
                        if (!l.isNode) throw Error("not supported");
                        return this.load(e, t, d)
                    }, p.prototype.resolveAll = function () {
                        if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map((function (e) {
                            return "'extend " + e.extend + "' in " + e.parent.fullName
                        })).join(", "));
                        return o.prototype.resolveAll.call(this)
                    };
                    var h = /^[A-Z]/;

                    function f(e, t) {
                        var r = t.parent.lookup(t.extend);
                        if (r) {
                            var o = new a(t.fullName, t.id, t.type, t.rule, void 0, t.options);
                            return o.declaringField = t, t.extensionField = o, r.add(o), !0
                        }
                        return !1
                    }
                    p.prototype._handleAdd = function (e) {
                        if (e instanceof a) void 0 === e.extend || e.extensionField || f(0, e) || this.deferred.push(e);
                        else if (e instanceof c) h.test(e.name) && (e.parent[e.name] = e.values);
                        else if (!(e instanceof u)) {
                            if (e instanceof n)
                                for (var t = 0; t < this.deferred.length;) f(0, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t;
                            for (var r = 0; r < e.nestedArray.length; ++r) this._handleAdd(e._nestedArray[r]);
                            h.test(e.name) && (e.parent[e.name] = e)
                        }
                    }, p.prototype._handleRemove = function (e) {
                        if (e instanceof a) {
                            if (void 0 !== e.extend)
                                if (e.extensionField) e.extensionField.parent.remove(e.extensionField), e.extensionField = null;
                                else {
                                    var t = this.deferred.indexOf(e);
                                    t > -1 && this.deferred.splice(t, 1)
                                }
                        } else if (e instanceof c) h.test(e.name) && delete e.parent[e.name];
                        else if (e instanceof o) {
                            for (var r = 0; r < e.nestedArray.length; ++r) this._handleRemove(e._nestedArray[r]);
                            h.test(e.name) && delete e.parent[e.name]
                        }
                    }, p._configure = function (e, t, r) {
                        n = e, i = t, s = r
                    }
                },
                5054: e => {
                    "use strict";
                    e.exports = {}
                },
                5994: (e, t, r) => {
                    "use strict";
                    t.Service = r(7948)
                },
                7948: (e, t, r) => {
                    "use strict";
                    e.exports = n;
                    var o = r(9693);

                    function n(e, t, r) {
                        if ("function" != typeof e) throw TypeError("rpcImpl must be a function");
                        o.EventEmitter.call(this), this.rpcImpl = e, this.requestDelimited = Boolean(t), this.responseDelimited = Boolean(r)
                    }(n.prototype = Object.create(o.EventEmitter.prototype)).constructor = n, n.prototype.rpcCall = function e(t, r, n, i, s) {
                        if (!i) throw TypeError("request must be specified");
                        var a = this;
                        if (!s) return o.asPromise(e, a, t, r, n, i);
                        if (a.rpcImpl) try {
                            return a.rpcImpl(t, r[a.requestDelimited ? "encodeDelimited" : "encode"](i).finish(), (function (e, r) {
                                if (e) return a.emit("error", e, t), s(e);
                                if (null !== r) {
                                    if (!(r instanceof n)) try {
                                        r = n[a.responseDelimited ? "decodeDelimited" : "decode"](r)
                                    } catch (e) {
                                        return a.emit("error", e, t), s(e)
                                    }
                                    return a.emit("data", r, t), s(null, r)
                                }
                                a.end(!0)
                            }))
                        } catch (e) {
                            return a.emit("error", e, t), void setTimeout((function () {
                                s(e)
                            }), 0)
                        } else setTimeout((function () {
                            s(Error("already ended"))
                        }), 0)
                    }, n.prototype.end = function (e) {
                        return this.rpcImpl && (e || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this
                    }
                },
                7513: (e, t, r) => {
                    "use strict";
                    e.exports = a;
                    var o = r(9313);
                    ((a.prototype = Object.create(o.prototype)).constructor = a).className = "Service";
                    var n = r(4429),
                        i = r(9935),
                        s = r(5994);

                    function a(e, t) {
                        o.call(this, e, t), this.methods = {}, this._methodsArray = null
                    }

                    function c(e) {
                        return e._methodsArray = null, e
                    }
                    a.fromJSON = function (e, t) {
                        var r = new a(e, t.options);
                        if (t.methods)
                            for (var o = Object.keys(t.methods), i = 0; i < o.length; ++i) r.add(n.fromJSON(o[i], t.methods[o[i]]));
                        return t.nested && r.addJSON(t.nested), r.comment = t.comment, r
                    }, a.prototype.toJSON = function (e) {
                        var t = o.prototype.toJSON.call(this, e),
                            r = !!e && Boolean(e.keepComments);
                        return i.toObject(["options", t && t.options || void 0, "methods", o.arrayToJSON(this.methodsArray, e) || {}, "nested", t && t.nested || void 0, "comment", r ? this.comment : void 0])
                    }, Object.defineProperty(a.prototype, "methodsArray", {
                        get: function () {
                            return this._methodsArray || (this._methodsArray = i.toArray(this.methods))
                        }
                    }), a.prototype.get = function (e) {
                        return this.methods[e] || o.prototype.get.call(this, e)
                    }, a.prototype.resolveAll = function () {
                        for (var e = this.methodsArray, t = 0; t < e.length; ++t) e[t].resolve();
                        return o.prototype.resolve.call(this)
                    }, a.prototype.add = function (e) {
                        if (this.get(e.name)) throw Error("duplicate name '" + e.name + "' in " + this);
                        return e instanceof n ? (this.methods[e.name] = e, e.parent = this, c(this)) : o.prototype.add.call(this, e)
                    }, a.prototype.remove = function (e) {
                        if (e instanceof n) {
                            if (this.methods[e.name] !== e) throw Error(e + " is not a member of " + this);
                            return delete this.methods[e.name], e.parent = null, c(this)
                        }
                        return o.prototype.remove.call(this, e)
                    }, a.prototype.create = function (e, t, r) {
                        for (var o, n = new s.Service(e, t, r), a = 0; a < this.methodsArray.length; ++a) {
                            var c = i.lcFirst((o = this._methodsArray[a]).resolve().name).replace(/[^$\w_]/g, "");
                            n[c] = i.codegen(["r", "c"], i.isReserved(c) ? c + "_" : c)("return this.rpcCall(m,q,s,r,c)")({
                                m: o,
                                q: o.resolvedRequestType.ctor,
                                s: o.resolvedResponseType.ctor
                            })
                        }
                        return n
                    }
                },
                626: e => {
                    "use strict";
                    e.exports = p;
                    var t = /[\s{}=;:[\],'"()<>]/g,
                        r = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
                        o = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
                        n = /^ *[*/]+ */,
                        i = /^\s*\*?\/*/,
                        s = /\n/g,
                        a = /\s/,
                        c = /\\(.?)/g,
                        u = {
                            0: "\0",
                            r: "\r",
                            n: "\n",
                            t: "\t"
                        };

                    function l(e) {
                        return e.replace(c, (function (e, t) {
                            switch (t) {
                                case "\\":
                                case "":
                                    return t;
                                default:
                                    return u[t] || ""
                            }
                        }))
                    }

                    function p(e, c) {
                        e = e.toString();
                        var u = 0,
                            p = e.length,
                            d = 1,
                            h = null,
                            f = null,
                            m = 0,
                            y = !1,
                            g = !1,
                            v = [],
                            E = null;

                        function _(e) {
                            return Error("illegal " + e + " (line " + d + ")")
                        }

                        function T(t) {
                            return e.charAt(t)
                        }

                        function O(t, r, o) {
                            h = e.charAt(t++), m = d, y = !1, g = o;
                            var a, u = t - (c ? 2 : 3);
                            do {
                                if (--u < 0 || "\n" === (a = e.charAt(u))) {
                                    y = !0;
                                    break
                                }
                            } while (" " === a || "\t" === a);
                            for (var l = e.substring(t, r).split(s), p = 0; p < l.length; ++p) l[p] = l[p].replace(c ? i : n, "").trim();
                            f = l.join("\n").trim()
                        }

                        function I(t) {
                            var r = R(t),
                                o = e.substring(t, r);
                            return /^\s*\/{1,2}/.test(o)
                        }

                        function R(e) {
                            for (var t = e; t < p && "\n" !== T(t);) t++;
                            return t
                        }

                        function S() {
                            if (v.length > 0) return v.shift();
                            if (E) return function () {
                                var t = "'" === E ? o : r;
                                t.lastIndex = u - 1;
                                var n = t.exec(e);
                                if (!n) throw _("string");
                                return u = t.lastIndex, N(E), E = null, l(n[1])
                            }();
                            var n, i, s, h, f, m = 0 === u;
                            do {
                                if (u === p) return null;
                                for (n = !1; a.test(s = T(u));)
                                    if ("\n" === s && (m = !0, ++d), ++u === p) return null;
                                if ("/" === T(u)) {
                                    if (++u === p) throw _("comment");
                                    if ("/" === T(u))
                                        if (c) {
                                            if (h = u, f = !1, I(u)) {
                                                f = !0;
                                                do {
                                                    if ((u = R(u)) === p) break;
                                                    u++
                                                } while (I(u))
                                            } else u = Math.min(p, R(u) + 1);
                                            f && O(h, u, m), d++, n = !0
                                        } else {
                                            for (f = "/" === T(h = u + 1);
                                                "\n" !== T(++u);)
                                                if (u === p) return null;
                                            ++u, f && O(h, u - 1, m), ++d, n = !0
                                        }
                                    else {
                                        if ("*" !== (s = T(u))) return "/";
                                        h = u + 1, f = c || "*" === T(h);
                                        do {
                                            if ("\n" === s && ++d, ++u === p) throw _("comment");
                                            i = s, s = T(u)
                                        } while ("*" !== i || "/" !== s);
                                        ++u, f && O(h, u - 2, m), n = !0
                                    }
                                }
                            } while (n);
                            var y = u;
                            if (t.lastIndex = 0, !t.test(T(y++)))
                                for (; y < p && !t.test(T(y));) ++y;
                            var g = e.substring(u, u = y);
                            return '"' !== g && "'" !== g || (E = g), g
                        }

                        function N(e) {
                            v.push(e)
                        }

                        function C() {
                            if (!v.length) {
                                var e = S();
                                if (null === e) return null;
                                N(e)
                            }
                            return v[0]
                        }
                        return Object.defineProperty({
                            next: S,
                            peek: C,
                            push: N,
                            skip: function (e, t) {
                                var r = C();
                                if (r === e) return S(), !0;
                                if (!t) throw _("token '" + r + "', '" + e + "' expected");
                                return !1
                            },
                            cmnt: function (e) {
                                var t = null;
                                return void 0 === e ? m === d - 1 && (c || "*" === h || y) && (t = g ? f : null) : (m < e && C(), m !== e || y || !c && "/" !== h || (t = g ? null : f)), t
                            }
                        }, "line", {
                            get: function () {
                                return d
                            }
                        })
                    }
                    p.unescape = l
                },
                7645: (e, t, r) => {
                    "use strict";
                    e.exports = v;
                    var o = r(9313);
                    ((v.prototype = Object.create(o.prototype)).constructor = v).className = "Type";
                    var n = r(7025),
                        i = r(7598),
                        s = r(3548),
                        a = r(6039),
                        c = r(7513),
                        u = r(8368),
                        l = r(1408),
                        p = r(1173),
                        d = r(9935),
                        h = r(4928),
                        f = r(5305),
                        m = r(4497),
                        y = r(3996),
                        g = r(1667);

                    function v(e, t) {
                        o.call(this, e, t), this.fields = {}, this.oneofs = void 0, this.extensions = void 0, this.reserved = void 0, this.group = void 0, this._fieldsById = null, this._fieldsArray = null, this._oneofsArray = null, this._ctor = null
                    }

                    function E(e) {
                        return e._fieldsById = e._fieldsArray = e._oneofsArray = null, delete e.encode, delete e.decode, delete e.verify, e
                    }
                    Object.defineProperties(v.prototype, {
                        fieldsById: {
                            get: function () {
                                if (this._fieldsById) return this._fieldsById;
                                this._fieldsById = {};
                                for (var e = Object.keys(this.fields), t = 0; t < e.length; ++t) {
                                    var r = this.fields[e[t]],
                                        o = r.id;
                                    if (this._fieldsById[o]) throw Error("duplicate id " + o + " in " + this);
                                    this._fieldsById[o] = r
                                }
                                return this._fieldsById
                            }
                        },
                        fieldsArray: {
                            get: function () {
                                return this._fieldsArray || (this._fieldsArray = d.toArray(this.fields))
                            }
                        },
                        oneofsArray: {
                            get: function () {
                                return this._oneofsArray || (this._oneofsArray = d.toArray(this.oneofs))
                            }
                        },
                        ctor: {
                            get: function () {
                                return this._ctor || (this.ctor = v.generateConstructor(this)())
                            },
                            set: function (e) {
                                var t = e.prototype;
                                t instanceof u || ((e.prototype = new u).constructor = e, d.merge(e.prototype, t)), e.$type = e.prototype.$type = this, d.merge(e, u, !0), this._ctor = e;
                                for (var r = 0; r < this.fieldsArray.length; ++r) this._fieldsArray[r].resolve();
                                var o = {};
                                for (r = 0; r < this.oneofsArray.length; ++r) o[this._oneofsArray[r].resolve().name] = {
                                    get: d.oneOfGetter(this._oneofsArray[r].oneof),
                                    set: d.oneOfSetter(this._oneofsArray[r].oneof)
                                };
                                r && Object.defineProperties(e.prototype, o)
                            }
                        }
                    }), v.generateConstructor = function (e) {
                        for (var t, r = d.codegen(["p"], e.name), o = 0; o < e.fieldsArray.length; ++o)(t = e._fieldsArray[o]).map ? r("this%s={}", d.safeProp(t.name)) : t.repeated && r("this%s=[]", d.safeProp(t.name));
                        return r("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]")
                    }, v.fromJSON = function (e, t) {
                        var r = new v(e, t.options);
                        r.extensions = t.extensions, r.reserved = t.reserved;
                        for (var u = Object.keys(t.fields), l = 0; l < u.length; ++l) r.add((void 0 !== t.fields[u[l]].keyType ? a.fromJSON : s.fromJSON)(u[l], t.fields[u[l]]));
                        if (t.oneofs)
                            for (u = Object.keys(t.oneofs), l = 0; l < u.length; ++l) r.add(i.fromJSON(u[l], t.oneofs[u[l]]));
                        if (t.nested)
                            for (u = Object.keys(t.nested), l = 0; l < u.length; ++l) {
                                var p = t.nested[u[l]];
                                r.add((void 0 !== p.id ? s.fromJSON : void 0 !== p.fields ? v.fromJSON : void 0 !== p.values ? n.fromJSON : void 0 !== p.methods ? c.fromJSON : o.fromJSON)(u[l], p))
                            }
                        return t.extensions && t.extensions.length && (r.extensions = t.extensions), t.reserved && t.reserved.length && (r.reserved = t.reserved), t.group && (r.group = !0), t.comment && (r.comment = t.comment), r
                    }, v.prototype.toJSON = function (e) {
                        var t = o.prototype.toJSON.call(this, e),
                            r = !!e && Boolean(e.keepComments);
                        return d.toObject(["options", t && t.options || void 0, "oneofs", o.arrayToJSON(this.oneofsArray, e), "fields", o.arrayToJSON(this.fieldsArray.filter((function (e) {
                            return !e.declaringField
                        })), e) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : void 0, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "group", this.group || void 0, "nested", t && t.nested || void 0, "comment", r ? this.comment : void 0])
                    }, v.prototype.resolveAll = function () {
                        for (var e = this.fieldsArray, t = 0; t < e.length;) e[t++].resolve();
                        var r = this.oneofsArray;
                        for (t = 0; t < r.length;) r[t++].resolve();
                        return o.prototype.resolveAll.call(this)
                    }, v.prototype.get = function (e) {
                        return this.fields[e] || this.oneofs && this.oneofs[e] || this.nested && this.nested[e] || null
                    }, v.prototype.add = function (e) {
                        if (this.get(e.name)) throw Error("duplicate name '" + e.name + "' in " + this);
                        if (e instanceof s && void 0 === e.extend) {
                            if (this._fieldsById ? this._fieldsById[e.id] : this.fieldsById[e.id]) throw Error("duplicate id " + e.id + " in " + this);
                            if (this.isReservedId(e.id)) throw Error("id " + e.id + " is reserved in " + this);
                            if (this.isReservedName(e.name)) throw Error("name '" + e.name + "' is reserved in " + this);
                            return e.parent && e.parent.remove(e), this.fields[e.name] = e, e.message = this, e.onAdd(this), E(this)
                        }
                        return e instanceof i ? (this.oneofs || (this.oneofs = {}), this.oneofs[e.name] = e, e.onAdd(this), E(this)) : o.prototype.add.call(this, e)
                    }, v.prototype.remove = function (e) {
                        if (e instanceof s && void 0 === e.extend) {
                            if (!this.fields || this.fields[e.name] !== e) throw Error(e + " is not a member of " + this);
                            return delete this.fields[e.name], e.parent = null, e.onRemove(this), E(this)
                        }
                        if (e instanceof i) {
                            if (!this.oneofs || this.oneofs[e.name] !== e) throw Error(e + " is not a member of " + this);
                            return delete this.oneofs[e.name], e.parent = null, e.onRemove(this), E(this)
                        }
                        return o.prototype.remove.call(this, e)
                    }, v.prototype.isReservedId = function (e) {
                        return o.isReservedId(this.reserved, e)
                    }, v.prototype.isReservedName = function (e) {
                        return o.isReservedName(this.reserved, e)
                    }, v.prototype.create = function (e) {
                        return new this.ctor(e)
                    }, v.prototype.setup = function () {
                        for (var e = this.fullName, t = [], r = 0; r < this.fieldsArray.length; ++r) t.push(this._fieldsArray[r].resolve().resolvedType);
                        this.encode = h(this)({
                            Writer: p,
                            types: t,
                            util: d
                        }), this.decode = f(this)({
                            Reader: l,
                            types: t,
                            util: d
                        }), this.verify = m(this)({
                            types: t,
                            util: d
                        }), this.fromObject = y.fromObject(this)({
                            types: t,
                            util: d
                        }), this.toObject = y.toObject(this)({
                            types: t,
                            util: d
                        });
                        var o = g[e];
                        if (o) {
                            var n = Object.create(this);
                            n.fromObject = this.fromObject, this.fromObject = o.fromObject.bind(n), n.toObject = this.toObject, this.toObject = o.toObject.bind(n)
                        }
                        return this
                    }, v.prototype.encode = function (e, t) {
                        return this.setup().encode(e, t)
                    }, v.prototype.encodeDelimited = function (e, t) {
                        return this.encode(e, t && t.len ? t.fork() : t).ldelim()
                    }, v.prototype.decode = function (e, t) {
                        return this.setup().decode(e, t)
                    }, v.prototype.decodeDelimited = function (e) {
                        return e instanceof l || (e = l.create(e)), this.decode(e, e.uint32())
                    }, v.prototype.verify = function (e) {
                        return this.setup().verify(e)
                    }, v.prototype.fromObject = function (e) {
                        return this.setup().fromObject(e)
                    }, v.prototype.toObject = function (e, t) {
                        return this.setup().toObject(e, t)
                    }, v.d = function (e) {
                        return function (t) {
                            d.decorateType(t, e)
                        }
                    }
                },
                7063: (e, t, r) => {
                    "use strict";
                    var o = t,
                        n = r(9935),
                        i = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];

                    function s(e, t) {
                        var r = 0,
                            o = {};
                        for (t |= 0; r < e.length;) o[i[r + t]] = e[r++];
                        return o
                    }
                    o.basic = s([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]), o.defaults = s([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", n.emptyArray, null]), o.long = s([0, 0, 0, 1, 1], 7), o.mapKey = s([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2), o.packed = s([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0])
                },
                9935: (e, t, r) => {
                    "use strict";
                    var o, n, i = e.exports = r(9693),
                        s = r(5054);
                    i.codegen = r(5124), i.fetch = r(9054), i.path = r(8626), i.fs = i.inquire("fs"), i.toArray = function (e) {
                        if (e) {
                            for (var t = Object.keys(e), r = new Array(t.length), o = 0; o < t.length;) r[o] = e[t[o++]];
                            return r
                        }
                        return []
                    }, i.toObject = function (e) {
                        for (var t = {}, r = 0; r < e.length;) {
                            var o = e[r++],
                                n = e[r++];
                            void 0 !== n && (t[o] = n)
                        }
                        return t
                    };
                    var a = /\\/g,
                        c = /"/g;
                    i.isReserved = function (e) {
                        return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e)
                    }, i.safeProp = function (e) {
                        return !/^[$\w_]+$/.test(e) || i.isReserved(e) ? '["' + e.replace(a, "\\\\").replace(c, '\\"') + '"]' : "." + e
                    }, i.ucFirst = function (e) {
                        return e.charAt(0).toUpperCase() + e.substring(1)
                    };
                    var u = /_([a-z])/g;
                    i.camelCase = function (e) {
                        return e.substring(0, 1) + e.substring(1).replace(u, (function (e, t) {
                            return t.toUpperCase()
                        }))
                    }, i.compareFieldsById = function (e, t) {
                        return e.id - t.id
                    }, i.decorateType = function (e, t) {
                        if (e.$type) return t && e.$type.name !== t && (i.decorateRoot.remove(e.$type), e.$type.name = t, i.decorateRoot.add(e.$type)), e.$type;
                        o || (o = r(7645));
                        var n = new o(t || e.name);
                        return i.decorateRoot.add(n), n.ctor = e, Object.defineProperty(e, "$type", {
                            value: n,
                            enumerable: !1
                        }), Object.defineProperty(e.prototype, "$type", {
                            value: n,
                            enumerable: !1
                        }), n
                    };
                    var l = 0;
                    i.decorateEnum = function (e) {
                        if (e.$type) return e.$type;
                        n || (n = r(7025));
                        var t = new n("Enum" + l++, e);
                        return i.decorateRoot.add(t), Object.defineProperty(e, "$type", {
                            value: t,
                            enumerable: !1
                        }), t
                    }, i.setProperty = function (e, t, r) {
                        if ("object" != typeof e) throw TypeError("dst must be an object");
                        if (!t) throw TypeError("path must be specified");
                        return function e(t, r, o) {
                            var n = r.shift();
                            if (r.length > 0) t[n] = e(t[n] || {}, r, o);
                            else {
                                var i = t[n];
                                i && (o = [].concat(i).concat(o)), t[n] = o
                            }
                            return t
                        }(e, t = t.split("."), r)
                    }, Object.defineProperty(i, "decorateRoot", {
                        get: function () {
                            return s.decorated || (s.decorated = new(r(9424)))
                        }
                    })
                },
                1945: (e, t, r) => {
                    "use strict";
                    e.exports = n;
                    var o = r(9693);

                    function n(e, t) {
                        this.lo = e >>> 0, this.hi = t >>> 0
                    }
                    var i = n.zero = new n(0, 0);
                    i.toNumber = function () {
                        return 0
                    }, i.zzEncode = i.zzDecode = function () {
                        return this
                    }, i.length = function () {
                        return 1
                    };
                    var s = n.zeroHash = "\0\0\0\0\0\0\0\0";
                    n.fromNumber = function (e) {
                        if (0 === e) return i;
                        var t = e < 0;
                        t && (e = -e);
                        var r = e >>> 0,
                            o = (e - r) / 4294967296 >>> 0;
                        return t && (o = ~o >>> 0, r = ~r >>> 0, ++r > 4294967295 && (r = 0, ++o > 4294967295 && (o = 0))), new n(r, o)
                    }, n.from = function (e) {
                        if ("number" == typeof e) return n.fromNumber(e);
                        if (o.isString(e)) {
                            if (!o.Long) return n.fromNumber(parseInt(e, 10));
                            e = o.Long.fromString(e)
                        }
                        return e.low || e.high ? new n(e.low >>> 0, e.high >>> 0) : i
                    }, n.prototype.toNumber = function (e) {
                        if (!e && this.hi >>> 31) {
                            var t = 1 + ~this.lo >>> 0,
                                r = ~this.hi >>> 0;
                            return t || (r = r + 1 >>> 0), -(t + 4294967296 * r)
                        }
                        return this.lo + 4294967296 * this.hi
                    }, n.prototype.toLong = function (e) {
                        return o.Long ? new o.Long(0 | this.lo, 0 | this.hi, Boolean(e)) : {
                            low: 0 | this.lo,
                            high: 0 | this.hi,
                            unsigned: Boolean(e)
                        }
                    };
                    var a = String.prototype.charCodeAt;
                    n.fromHash = function (e) {
                        return e === s ? i : new n((a.call(e, 0) | a.call(e, 1) << 8 | a.call(e, 2) << 16 | a.call(e, 3) << 24) >>> 0, (a.call(e, 4) | a.call(e, 5) << 8 | a.call(e, 6) << 16 | a.call(e, 7) << 24) >>> 0)
                    }, n.prototype.toHash = function () {
                        return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
                    }, n.prototype.zzEncode = function () {
                        var e = this.hi >> 31;
                        return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0, this.lo = (this.lo << 1 ^ e) >>> 0, this
                    }, n.prototype.zzDecode = function () {
                        var e = -(1 & this.lo);
                        return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0, this.hi = (this.hi >>> 1 ^ e) >>> 0, this
                    }, n.prototype.length = function () {
                        var e = this.lo,
                            t = (this.lo >>> 28 | this.hi << 4) >>> 0,
                            r = this.hi >>> 24;
                        return 0 === r ? 0 === t ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : r < 128 ? 9 : 10
                    }
                },
                9693: function (e, t, r) {
                    "use strict";
                    var o = t;

                    function n(e, t, r) {
                        for (var o = Object.keys(t), n = 0; n < o.length; ++n) void 0 !== e[o[n]] && r || (e[o[n]] = t[o[n]]);
                        return e
                    }

                    function i(e) {
                        function t(e, r) {
                            if (!(this instanceof t)) return new t(e, r);
                            Object.defineProperty(this, "message", {
                                get: function () {
                                    return e
                                }
                            }), Error.captureStackTrace ? Error.captureStackTrace(this, t) : Object.defineProperty(this, "stack", {
                                value: (new Error).stack || ""
                            }), r && n(this, r)
                        }
                        return (t.prototype = Object.create(Error.prototype)).constructor = t, Object.defineProperty(t.prototype, "name", {
                            get: function () {
                                return e
                            }
                        }), t.prototype.toString = function () {
                            return this.name + ": " + this.message
                        }, t
                    }
                    o.asPromise = r(4537), o.base64 = r(7419), o.EventEmitter = r(9211), o.float = r(945), o.inquire = r(7199), o.utf8 = r(4997), o.pool = r(6662), o.LongBits = r(1945), o.isNode = Boolean(void 0 !== r.g && r.g && r.g.process && r.g.process.versions && r.g.process.versions.node), o.global = o.isNode && r.g || "undefined" != typeof window && window || "undefined" != typeof self && self || this, o.emptyArray = Object.freeze ? Object.freeze([]) : [], o.emptyObject = Object.freeze ? Object.freeze({}) : {}, o.isInteger = Number.isInteger || function (e) {
                        return "number" == typeof e && isFinite(e) && Math.floor(e) === e
                    }, o.isString = function (e) {
                        return "string" == typeof e || e instanceof String
                    }, o.isObject = function (e) {
                        return e && "object" == typeof e
                    }, o.isset = o.isSet = function (e, t) {
                        var r = e[t];
                        return !(null == r || !e.hasOwnProperty(t)) && ("object" != typeof r || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0)
                    }, o.Buffer = function () {
                        try {
                            var e = o.inquire("buffer").Buffer;
                            return e.prototype.utf8Write ? e : null
                        } catch (e) {
                            return null
                        }
                    }(), o._Buffer_from = null, o._Buffer_allocUnsafe = null, o.newBuffer = function (e) {
                        return "number" == typeof e ? o.Buffer ? o._Buffer_allocUnsafe(e) : new o.Array(e) : o.Buffer ? o._Buffer_from(e) : "undefined" == typeof Uint8Array ? e : new Uint8Array(e)
                    }, o.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, o.Long = o.global.dcodeIO && o.global.dcodeIO.Long || o.global.Long || o.inquire("long"), o.key2Re = /^true|false|0|1$/, o.key32Re = /^-?(?:0|[1-9][0-9]*)$/, o.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, o.longToHash = function (e) {
                        return e ? o.LongBits.from(e).toHash() : o.LongBits.zeroHash
                    }, o.longFromHash = function (e, t) {
                        var r = o.LongBits.fromHash(e);
                        return o.Long ? o.Long.fromBits(r.lo, r.hi, t) : r.toNumber(Boolean(t))
                    }, o.merge = n, o.lcFirst = function (e) {
                        return e.charAt(0).toLowerCase() + e.substring(1)
                    }, o.newError = i, o.ProtocolError = i("ProtocolError"), o.oneOfGetter = function (e) {
                        for (var t = {}, r = 0; r < e.length; ++r) t[e[r]] = 1;
                        return function () {
                            for (var e = Object.keys(this), r = e.length - 1; r > -1; --r)
                                if (1 === t[e[r]] && void 0 !== this[e[r]] && null !== this[e[r]]) return e[r]
                        }
                    }, o.oneOfSetter = function (e) {
                        return function (t) {
                            for (var r = 0; r < e.length; ++r) e[r] !== t && delete this[e[r]]
                        }
                    }, o.toJSONOptions = {
                        longs: String,
                        enums: String,
                        bytes: String,
                        json: !0
                    }, o._configure = function () {
                        var e = o.Buffer;
                        e ? (o._Buffer_from = e.from !== Uint8Array.from && e.from || function (t, r) {
                            return new e(t, r)
                        }, o._Buffer_allocUnsafe = e.allocUnsafe || function (t) {
                            return new e(t)
                        }) : o._Buffer_from = o._Buffer_allocUnsafe = null
                    }
                },
                4497: (e, t, r) => {
                    "use strict";
                    e.exports = function (e) {
                        var t = n.codegen(["m"], e.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected"),
                            r = {};
                        e.oneofsArray.length && t("var p={}");
                        for (var o = 0; o < e.fieldsArray.length; ++o) {
                            var c = e._fieldsArray[o].resolve(),
                                u = "m" + n.safeProp(c.name);
                            if (c.optional && t("if(%s!=null&&m.hasOwnProperty(%j)){", u, c.name), c.map) t("if(!util.isObject(%s))", u)("return%j", i(c, "object"))("var k=Object.keys(%s)", u)("for(var i=0;i<k.length;++i){"), a(t, c, "k[i]"), s(t, c, o, u + "[k[i]]")("}");
                            else if (c.repeated) t("if(!Array.isArray(%s))", u)("return%j", i(c, "array"))("for(var i=0;i<%s.length;++i){", u), s(t, c, o, u + "[i]")("}");
                            else {
                                if (c.partOf) {
                                    var l = n.safeProp(c.partOf.name);
                                    1 === r[c.partOf.name] && t("if(p%s===1)", l)("return%j", c.partOf.name + ": multiple values"), r[c.partOf.name] = 1, t("p%s=1", l)
                                }
                                s(t, c, o, u)
                            }
                            c.optional && t("}")
                        }
                        return t("return null")
                    };
                    var o = r(7025),
                        n = r(9935);

                    function i(e, t) {
                        return e.name + ": " + t + (e.repeated && "array" !== t ? "[]" : e.map && "object" !== t ? "{k:" + e.keyType + "}" : "") + " expected"
                    }

                    function s(e, t, r, n) {
                        if (t.resolvedType)
                            if (t.resolvedType instanceof o) {
                                e("switch(%s){", n)("default:")("return%j", i(t, "enum value"));
                                for (var s = Object.keys(t.resolvedType.values), a = 0; a < s.length; ++a) e("case %i:", t.resolvedType.values[s[a]]);
                                e("break")("}")
                            } else e("{")("var e=types[%i].verify(%s);", r, n)("if(e)")("return%j+e", t.name + ".")("}");
                        else switch (t.type) {
                            case "int32":
                            case "uint32":
                            case "sint32":
                            case "fixed32":
                            case "sfixed32":
                                e("if(!util.isInteger(%s))", n)("return%j", i(t, "integer"));
                                break;
                            case "int64":
                            case "uint64":
                            case "sint64":
                            case "fixed64":
                            case "sfixed64":
                                e("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", n, n, n, n)("return%j", i(t, "integer|Long"));
                                break;
                            case "float":
                            case "double":
                                e('if(typeof %s!=="number")', n)("return%j", i(t, "number"));
                                break;
                            case "bool":
                                e('if(typeof %s!=="boolean")', n)("return%j", i(t, "boolean"));
                                break;
                            case "string":
                                e("if(!util.isString(%s))", n)("return%j", i(t, "string"));
                                break;
                            case "bytes":
                                e('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', n, n, n)("return%j", i(t, "buffer"))
                        }
                        return e
                    }

                    function a(e, t, r) {
                        switch (t.keyType) {
                            case "int32":
                            case "uint32":
                            case "sint32":
                            case "fixed32":
                            case "sfixed32":
                                e("if(!util.key32Re.test(%s))", r)("return%j", i(t, "integer key"));
                                break;
                            case "int64":
                            case "uint64":
                            case "sint64":
                            case "fixed64":
                            case "sfixed64":
                                e("if(!util.key64Re.test(%s))", r)("return%j", i(t, "integer|Long key"));
                                break;
                            case "bool":
                                e("if(!util.key2Re.test(%s))", r)("return%j", i(t, "boolean key"))
                        }
                        return e
                    }
                },
                1667: (e, t, r) => {
                    "use strict";
                    var o = t,
                        n = r(8368);
                    o[".google.protobuf.Any"] = {
                        fromObject: function (e) {
                            if (e && e["@type"]) {
                                var t = e["@type"].substring(e["@type"].lastIndexOf("/") + 1),
                                    r = this.lookup(t);
                                if (r) {
                                    var o = "." === e["@type"].charAt(0) ? e["@type"].substr(1) : e["@type"];
                                    return -1 === o.indexOf("/") && (o = "/" + o), this.create({
                                        type_url: o,
                                        value: r.encode(r.fromObject(e)).finish()
                                    })
                                }
                            }
                            return this.fromObject(e)
                        },
                        toObject: function (e, t) {
                            var r = "",
                                o = "";
                            if (t && t.json && e.type_url && e.value) {
                                o = e.type_url.substring(e.type_url.lastIndexOf("/") + 1), r = e.type_url.substring(0, e.type_url.lastIndexOf("/") + 1);
                                var i = this.lookup(o);
                                i && (e = i.decode(e.value))
                            }
                            if (!(e instanceof this.ctor) && e instanceof n) {
                                var s = e.$type.toObject(e, t);
                                return "" === r && (r = "type.googleapis.com/"), o = r + ("." === e.$type.fullName[0] ? e.$type.fullName.substr(1) : e.$type.fullName), s["@type"] = o, s
                            }
                            return this.toObject(e, t)
                        }
                    }
                },
                1173: (e, t, r) => {
                    "use strict";
                    e.exports = p;
                    var o, n = r(9693),
                        i = n.LongBits,
                        s = n.base64,
                        a = n.utf8;

                    function c(e, t, r) {
                        this.fn = e, this.len = t, this.next = void 0, this.val = r
                    }

                    function u() {}

                    function l(e) {
                        this.head = e.head, this.tail = e.tail, this.len = e.len, this.next = e.states
                    }

                    function p() {
                        this.len = 0, this.head = new c(u, 0, 0), this.tail = this.head, this.states = null
                    }
                    var d = function () {
                        return n.Buffer ? function () {
                            return (p.create = function () {
                                return new o
                            })()
                        } : function () {
                            return new p
                        }
                    };

                    function h(e, t, r) {
                        t[r] = 255 & e
                    }

                    function f(e, t) {
                        this.len = e, this.next = void 0, this.val = t
                    }

                    function m(e, t, r) {
                        for (; e.hi;) t[r++] = 127 & e.lo | 128, e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0, e.hi >>>= 7;
                        for (; e.lo > 127;) t[r++] = 127 & e.lo | 128, e.lo = e.lo >>> 7;
                        t[r++] = e.lo
                    }

                    function y(e, t, r) {
                        t[r] = 255 & e, t[r + 1] = e >>> 8 & 255, t[r + 2] = e >>> 16 & 255, t[r + 3] = e >>> 24
                    }
                    p.create = d(), p.alloc = function (e) {
                        return new n.Array(e)
                    }, n.Array !== Array && (p.alloc = n.pool(p.alloc, n.Array.prototype.subarray)), p.prototype._push = function (e, t, r) {
                        return this.tail = this.tail.next = new c(e, t, r), this.len += t, this
                    }, f.prototype = Object.create(c.prototype), f.prototype.fn = function (e, t, r) {
                        for (; e > 127;) t[r++] = 127 & e | 128, e >>>= 7;
                        t[r] = e
                    }, p.prototype.uint32 = function (e) {
                        return this.len += (this.tail = this.tail.next = new f((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len, this
                    }, p.prototype.int32 = function (e) {
                        return e < 0 ? this._push(m, 10, i.fromNumber(e)) : this.uint32(e)
                    }, p.prototype.sint32 = function (e) {
                        return this.uint32((e << 1 ^ e >> 31) >>> 0)
                    }, p.prototype.uint64 = function (e) {
                        var t = i.from(e);
                        return this._push(m, t.length(), t)
                    }, p.prototype.int64 = p.prototype.uint64, p.prototype.sint64 = function (e) {
                        var t = i.from(e).zzEncode();
                        return this._push(m, t.length(), t)
                    }, p.prototype.bool = function (e) {
                        return this._push(h, 1, e ? 1 : 0)
                    }, p.prototype.fixed32 = function (e) {
                        return this._push(y, 4, e >>> 0)
                    }, p.prototype.sfixed32 = p.prototype.fixed32, p.prototype.fixed64 = function (e) {
                        var t = i.from(e);
                        return this._push(y, 4, t.lo)._push(y, 4, t.hi)
                    }, p.prototype.sfixed64 = p.prototype.fixed64, p.prototype.float = function (e) {
                        return this._push(n.float.writeFloatLE, 4, e)
                    }, p.prototype.double = function (e) {
                        return this._push(n.float.writeDoubleLE, 8, e)
                    };
                    var g = n.Array.prototype.set ? function (e, t, r) {
                        t.set(e, r)
                    } : function (e, t, r) {
                        for (var o = 0; o < e.length; ++o) t[r + o] = e[o]
                    };
                    p.prototype.bytes = function (e) {
                        var t = e.length >>> 0;
                        if (!t) return this._push(h, 1, 0);
                        if (n.isString(e)) {
                            var r = p.alloc(t = s.length(e));
                            s.decode(e, r, 0), e = r
                        }
                        return this.uint32(t)._push(g, t, e)
                    }, p.prototype.string = function (e) {
                        var t = a.length(e);
                        return t ? this.uint32(t)._push(a.write, t, e) : this._push(h, 1, 0)
                    }, p.prototype.fork = function () {
                        return this.states = new l(this), this.head = this.tail = new c(u, 0, 0), this.len = 0, this
                    }, p.prototype.reset = function () {
                        return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new c(u, 0, 0), this.len = 0), this
                    }, p.prototype.ldelim = function () {
                        var e = this.head,
                            t = this.tail,
                            r = this.len;
                        return this.reset().uint32(r), r && (this.tail.next = e.next, this.tail = t, this.len += r), this
                    }, p.prototype.finish = function () {
                        for (var e = this.head.next, t = this.constructor.alloc(this.len), r = 0; e;) e.fn(e.val, t, r), r += e.len, e = e.next;
                        return t
                    }, p._configure = function (e) {
                        o = e, p.create = d(), o._configure()
                    }
                },
                3155: (e, t, r) => {
                    "use strict";
                    e.exports = i;
                    var o = r(1173);
                    (i.prototype = Object.create(o.prototype)).constructor = i;
                    var n = r(9693);

                    function i() {
                        o.call(this)
                    }

                    function s(e, t, r) {
                        e.length < 40 ? n.utf8.write(e, t, r) : t.utf8Write ? t.utf8Write(e, r) : t.write(e, r)
                    }
                    i._configure = function () {
                        i.alloc = n._Buffer_allocUnsafe, i.writeBytesBuffer = n.Buffer && n.Buffer.prototype instanceof Uint8Array && "set" === n.Buffer.prototype.set.name ? function (e, t, r) {
                            t.set(e, r)
                        } : function (e, t, r) {
                            if (e.copy) e.copy(t, r, 0, e.length);
                            else
                                for (var o = 0; o < e.length;) t[r++] = e[o++]
                        }
                    }, i.prototype.bytes = function (e) {
                        n.isString(e) && (e = n._Buffer_from(e, "base64"));
                        var t = e.length >>> 0;
                        return this.uint32(t), t && this._push(i.writeBytesBuffer, t, e), this
                    }, i.prototype.string = function (e) {
                        var t = n.Buffer.byteLength(e);
                        return this.uint32(t), t && this._push(s, t, e), this
                    }, i._configure()
                },
                7129: (e, t) => {
                    "use strict";
                    var r = Object.prototype.hasOwnProperty;

                    function o(e) {
                        try {
                            return decodeURIComponent(e.replace(/\+/g, " "))
                        } catch (e) {
                            return null
                        }
                    }

                    function n(e) {
                        try {
                            return encodeURIComponent(e)
                        } catch (e) {
                            return null
                        }
                    }
                    t.stringify = function (e, t) {
                        t = t || "";
                        var o, i, s = [];
                        for (i in "string" != typeof t && (t = "?"), e)
                            if (r.call(e, i)) {
                                if ((o = e[i]) || null != o && !isNaN(o) || (o = ""), i = n(i), o = n(o), null === i || null === o) continue;
                                s.push(i + "=" + o)
                            } return s.length ? t + s.join("&") : ""
                    }, t.parse = function (e) {
                        for (var t, r = /([^=?#&]+)=?([^&]*)/g, n = {}; t = r.exec(e);) {
                            var i = o(t[1]),
                                s = o(t[2]);
                            null === i || null === s || i in n || (n[i] = s)
                        }
                        return n
                    }
                },
                7418: e => {
                    "use strict";
                    e.exports = function (e, t) {
                        if (t = t.split(":")[0], !(e = +e)) return !1;
                        switch (t) {
                            case "http":
                            case "ws":
                                return 80 !== e;
                            case "https":
                            case "wss":
                                return 443 !== e;
                            case "ftp":
                                return 21 !== e;
                            case "gopher":
                                return 70 !== e;
                            case "file":
                                return !1
                        }
                        return 0 !== e
                    }
                },
                8e3: (e, t, r) => {
                    "use strict";
                    var o = r(7581);
                    e.exports = r(3626)(o), "_sockjs_onload" in r.g && setTimeout(r.g._sockjs_onload, 1)
                },
                2530: (e, t, r) => {
                    "use strict";
                    var o = r(5717),
                        n = r(685);

                    function i() {
                        n.call(this), this.initEvent("close", !1, !1), this.wasClean = !1, this.code = 0, this.reason = ""
                    }
                    o(i, n), e.exports = i
                },
                3212: (e, t, r) => {
                    "use strict";
                    var o = r(5717),
                        n = r(3184);

                    function i() {
                        n.call(this)
                    }
                    o(i, n), i.prototype.removeAllListeners = function (e) {
                        e ? delete this._listeners[e] : this._listeners = {}
                    }, i.prototype.once = function (e, t) {
                        var r = this,
                            o = !1;
                        this.on(e, (function n() {
                            r.removeListener(e, n), o || (o = !0, t.apply(this, arguments))
                        }))
                    }, i.prototype.emit = function () {
                        var e = arguments[0],
                            t = this._listeners[e];
                        if (t) {
                            for (var r = arguments.length, o = new Array(r - 1), n = 1; n < r; n++) o[n - 1] = arguments[n];
                            for (var i = 0; i < t.length; i++) t[i].apply(this, o)
                        }
                    }, i.prototype.on = i.prototype.addListener = n.prototype.addEventListener, i.prototype.removeListener = n.prototype.removeEventListener, e.exports.v = i
                },
                685: e => {
                    "use strict";

                    function t(e) {
                        this.type = e
                    }
                    t.prototype.initEvent = function (e, t, r) {
                        return this.type = e, this.bubbles = t, this.cancelable = r, this.timeStamp = +new Date, this
                    }, t.prototype.stopPropagation = function () {}, t.prototype.preventDefault = function () {}, t.CAPTURING_PHASE = 1, t.AT_TARGET = 2, t.BUBBLING_PHASE = 3, e.exports = t
                },
                3184: e => {
                    "use strict";

                    function t() {
                        this._listeners = {}
                    }
                    t.prototype.addEventListener = function (e, t) {
                        e in this._listeners || (this._listeners[e] = []);
                        var r = this._listeners[e]; - 1 === r.indexOf(t) && (r = r.concat([t])), this._listeners[e] = r
                    }, t.prototype.removeEventListener = function (e, t) {
                        var r = this._listeners[e];
                        if (r) {
                            var o = r.indexOf(t); - 1 === o || (r.length > 1 ? this._listeners[e] = r.slice(0, o).concat(r.slice(o + 1)) : delete this._listeners[e])
                        }
                    }, t.prototype.dispatchEvent = function () {
                        var e = arguments[0],
                            t = e.type,
                            r = 1 === arguments.length ? [e] : Array.apply(null, arguments);
                        if (this["on" + t] && this["on" + t].apply(this, r), t in this._listeners)
                            for (var o = this._listeners[t], n = 0; n < o.length; n++) o[n].apply(this, r)
                    }, e.exports = t
                },
                3326: (e, t, r) => {
                    "use strict";
                    var o = r(5717),
                        n = r(685);

                    function i(e) {
                        n.call(this), this.initEvent("message", !1, !1), this.data = e
                    }
                    o(i, n), e.exports = i
                },
                691: (e, t, r) => {
                    "use strict";
                    var o = r(7522),
                        n = r(3683);

                    function i(e) {
                        this._transport = e, e.on("message", this._transportMessage.bind(this)), e.on("close", this._transportClose.bind(this))
                    }
                    i.prototype._transportClose = function (e, t) {
                        n.postMessage("c", o.stringify([e, t]))
                    }, i.prototype._transportMessage = function (e) {
                        n.postMessage("t", e)
                    }, i.prototype._send = function (e) {
                        this._transport.send(e)
                    }, i.prototype._close = function () {
                        this._transport.close(), this._transport.removeAllListeners()
                    }, e.exports = i
                },
                551: (e, t, r) => {
                    "use strict";
                    var o = r(273),
                        n = r(7705),
                        i = r(7522),
                        s = r(691),
                        a = r(6311),
                        c = r(3683),
                        u = r(7486);
                    e.exports = function (e, t) {
                        var r, l = {};
                        t.forEach((function (e) {
                            e.facadeTransport && (l[e.facadeTransport.transportName] = e.facadeTransport)
                        })), l[a.transportName] = a, e.bootstrap_iframe = function () {
                            var t;
                            c.currentWindowId = u.hash.slice(1), n.attachEvent("message", (function (n) {
                                if (n.source === parent && (void 0 === r && (r = n.origin), n.origin === r)) {
                                    var a;
                                    try {
                                        a = i.parse(n.data)
                                    } catch (e) {
                                        return void n.data
                                    }
                                    if (a.windowId === c.currentWindowId) switch (a.type) {
                                        case "s":
                                            var p;
                                            try {
                                                p = i.parse(a.data)
                                            } catch (e) {
                                                a.data;
                                                break
                                            }
                                            var d = p[0],
                                                h = p[1],
                                                f = p[2],
                                                m = p[3];
                                            if (d !== e.version) throw new Error('Incompatible SockJS! Main site uses: "' + d + '", the iframe: "' + e.version + '".');
                                            if (!o.isOriginEqual(f, u.href) || !o.isOriginEqual(m, u.href)) throw new Error("Can't connect to different domain from within an iframe. (" + u.href + ", " + f + ", " + m + ")");
                                            t = new s(new l[h](f, m));
                                            break;
                                        case "m":
                                            t._send(a.data);
                                            break;
                                        case "c":
                                            t && t._close(), t = null
                                    }
                                }
                            })), c.postMessage("s")
                        }
                    }
                },
                2550: (e, t, r) => {
                    "use strict";
                    var o = r(3212).v,
                        n = r(5717),
                        i = r(7522),
                        s = r(2217);

                    function a(e, t) {
                        o.call(this);
                        var r = this,
                            n = +new Date;
                        this.xo = new t("GET", e), this.xo.once("finish", (function (e, t) {
                            var o, a;
                            if (200 === e) {
                                if (a = +new Date - n, t) try {
                                    o = i.parse(t)
                                } catch (e) {}
                                s.isObject(o) || (o = {})
                            }
                            r.emit("finish", o, a), r.removeAllListeners()
                        }))
                    }
                    n(a, o), a.prototype.close = function () {
                        this.removeAllListeners(), this.xo.close()
                    }, e.exports = a
                },
                6311: (e, t, r) => {
                    "use strict";
                    var o = r(5717),
                        n = r(3212).v,
                        i = r(7522),
                        s = r(3515),
                        a = r(2550);

                    function c(e) {
                        var t = this;
                        n.call(this), this.ir = new a(e, s), this.ir.once("finish", (function (e, r) {
                            t.ir = null, t.emit("message", i.stringify([e, r]))
                        }))
                    }
                    o(c, n), c.transportName = "iframe-info-receiver", c.prototype.close = function () {
                        this.ir && (this.ir.close(), this.ir = null), this.removeAllListeners()
                    }, e.exports = c
                },
                3616: (e, t, r) => {
                    "use strict";
                    var o = r(3212).v,
                        n = r(5717),
                        i = r(7522),
                        s = r(7705),
                        a = r(5088),
                        c = r(6311);

                    function u(e, t) {
                        var n = this;
                        o.call(this);
                        var u = function () {
                            var r = n.ifr = new a(c.transportName, t, e);
                            r.once("message", (function (e) {
                                if (e) {
                                    var t;
                                    try {
                                        t = i.parse(e)
                                    } catch (e) {
                                        return n.emit("finish"), void n.close()
                                    }
                                    var r = t[0],
                                        o = t[1];
                                    n.emit("finish", r, o)
                                }
                                n.close()
                            })), r.once("close", (function () {
                                n.emit("finish"), n.close()
                            }))
                        };
                        r.g.document.body ? u() : s.attachEvent("load", u)
                    }
                    n(u, o), u.enabled = function () {
                        return a.enabled()
                    }, u.prototype.close = function () {
                        this.ifr && this.ifr.close(), this.removeAllListeners(), this.ifr = null
                    }, e.exports = u
                },
                5172: (e, t, r) => {
                    "use strict";
                    var o = r(3212).v,
                        n = r(5717),
                        i = r(273),
                        s = r(6073),
                        a = r(9033),
                        c = r(3515),
                        u = r(7103),
                        l = r(3616),
                        p = r(2550);

                    function d(e, t) {
                        var r = this;
                        o.call(this), setTimeout((function () {
                            r.doXhr(e, t)
                        }), 0)
                    }
                    n(d, o), d._getReceiver = function (e, t, r) {
                        return r.sameOrigin ? new p(t, c) : a.enabled ? new p(t, a) : s.enabled && r.sameScheme ? new p(t, s) : l.enabled() ? new l(e, t) : new p(t, u)
                    }, d.prototype.doXhr = function (e, t) {
                        var r = this,
                            o = i.addPath(e, "/info");
                        this.xo = d._getReceiver(e, o, t), this.timeoutRef = setTimeout((function () {
                            r._cleanup(!1), r.emit("finish")
                        }), d.timeout), this.xo.once("finish", (function (e, t) {
                            r._cleanup(!0), r.emit("finish", e, t)
                        }))
                    }, d.prototype._cleanup = function (e) {
                        clearTimeout(this.timeoutRef), this.timeoutRef = null, !e && this.xo && this.xo.close(), this.xo = null
                    }, d.prototype.close = function () {
                        this.removeAllListeners(), this._cleanup(!1)
                    }, d.timeout = 8e3, e.exports = d
                },
                7486: (e, t, r) => {
                    "use strict";
                    e.exports = r.g.location || {
                        origin: "http://localhost:80",
                        protocol: "http:",
                        host: "localhost",
                        port: 80,
                        href: "http://localhost/",
                        hash: ""
                    }
                },
                3626: (e, t, r) => {
                    "use strict";
                    r(1247);
                    var o, n = r(4564),
                        i = r(5717),
                        s = r(7522),
                        a = r(8915),
                        c = r(8028),
                        u = r(273),
                        l = r(7705),
                        p = r(5581),
                        d = r(2217),
                        h = r(8510),
                        f = r(4886),
                        m = r(685),
                        y = r(3184),
                        g = r(7486),
                        v = r(2530),
                        E = r(3326),
                        _ = r(5172);

                    function T(e, t, r) {
                        if (!(this instanceof T)) return new T(e, t, r);
                        if (arguments.length < 1) throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
                        y.call(this), this.readyState = T.CONNECTING, this.extensions = "", this.protocol = "", (r = r || {}).protocols_whitelist && f.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead."), this._transportsWhitelist = r.transports, this._transportOptions = r.transportOptions || {}, this._timeout = r.timeout || 0;
                        var o = r.sessionId || 8;
                        if ("function" == typeof o) this._generateSessionId = o;
                        else {
                            if ("number" != typeof o) throw new TypeError("If sessionId is used in the options, it needs to be a number or a function.");
                            this._generateSessionId = function () {
                                return a.string(o)
                            }
                        }
                        this._server = r.server || a.numberString(1e3);
                        var i = new n(e);
                        if (!i.host || !i.protocol) throw new SyntaxError("The URL '" + e + "' is invalid");
                        if (i.hash) throw new SyntaxError("The URL must not contain a fragment");
                        if ("http:" !== i.protocol && "https:" !== i.protocol) throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + i.protocol + "' is not allowed.");
                        var s = "https:" === i.protocol;
                        if ("https:" === g.protocol && !s && !u.isLoopbackAddr(i.hostname)) throw new Error("SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS");
                        t ? Array.isArray(t) || (t = [t]) : t = [];
                        var c = t.sort();
                        c.forEach((function (e, t) {
                            if (!e) throw new SyntaxError("The protocols entry '" + e + "' is invalid.");
                            if (t < c.length - 1 && e === c[t + 1]) throw new SyntaxError("The protocols entry '" + e + "' is duplicated.")
                        }));
                        var l = u.getOrigin(g.href);
                        this._origin = l ? l.toLowerCase() : null, i.set("pathname", i.pathname.replace(/\/+$/, "")), this.url = i.href, this.url, this._urlInfo = {
                            nullOrigin: !h.hasDomain(),
                            sameOrigin: u.isOriginEqual(this.url, g.href),
                            sameScheme: u.isSchemeEqual(this.url, g.href)
                        }, this._ir = new _(this.url, this._urlInfo), this._ir.once("finish", this._receiveInfo.bind(this))
                    }

                    function O(e) {
                        return 1e3 === e || e >= 3e3 && e <= 4999
                    }
                    i(T, y), T.prototype.close = function (e, t) {
                        if (e && !O(e)) throw new Error("InvalidAccessError: Invalid code");
                        if (t && t.length > 123) throw new SyntaxError("reason argument has an invalid length");
                        this.readyState !== T.CLOSING && this.readyState !== T.CLOSED && this._close(e || 1e3, t || "Normal closure", !0)
                    }, T.prototype.send = function (e) {
                        if ("string" != typeof e && (e = "" + e), this.readyState === T.CONNECTING) throw new Error("InvalidStateError: The connection has not been established yet");
                        this.readyState === T.OPEN && this._transport.send(c.quote(e))
                    }, T.version = r(2828), T.CONNECTING = 0, T.OPEN = 1, T.CLOSING = 2, T.CLOSED = 3, T.prototype._receiveInfo = function (e, t) {
                        if (this._ir = null, e) {
                            this._rto = this.countRTO(t), this._transUrl = e.base_url ? e.base_url : this.url, e = d.extend(e, this._urlInfo);
                            var r = o.filterToEnabled(this._transportsWhitelist, e);
                            this._transports = r.main, this._transports.length, this._connect()
                        } else this._close(1002, "Cannot connect to server")
                    }, T.prototype._connect = function () {
                        for (var e = this._transports.shift(); e; e = this._transports.shift()) {
                            if (e.transportName, e.needBody && (!r.g.document.body || void 0 !== r.g.document.readyState && "complete" !== r.g.document.readyState && "interactive" !== r.g.document.readyState)) return this._transports.unshift(e), void l.attachEvent("load", this._connect.bind(this));
                            var t = Math.max(this._timeout, this._rto * e.roundTrips || 5e3);
                            this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), t);
                            var o = u.addPath(this._transUrl, "/" + this._server + "/" + this._generateSessionId()),
                                n = this._transportOptions[e.transportName],
                                i = new e(o, this._transUrl, n);
                            return i.on("message", this._transportMessage.bind(this)), i.once("close", this._transportClose.bind(this)), i.transportName = e.transportName, void(this._transport = i)
                        }
                        this._close(2e3, "All transports failed", !1)
                    }, T.prototype._transportTimeout = function () {
                        this.readyState === T.CONNECTING && (this._transport && this._transport.close(), this._transportClose(2007, "Transport timed out"))
                    }, T.prototype._transportMessage = function (e) {
                        var t, r = this,
                            o = e.slice(0, 1),
                            n = e.slice(1);
                        switch (o) {
                            case "o":
                                return void this._open();
                            case "h":
                                return this.dispatchEvent(new m("heartbeat")), void this.transport
                        }
                        if (n) try {
                            t = s.parse(n)
                        } catch (e) {}
                        if (void 0 !== t) switch (o) {
                            case "a":
                                Array.isArray(t) && t.forEach((function (e) {
                                    r.transport, r.dispatchEvent(new E(e))
                                }));
                                break;
                            case "m":
                                this.transport, this.dispatchEvent(new E(t));
                                break;
                            case "c":
                                Array.isArray(t) && 2 === t.length && this._close(t[0], t[1], !0)
                        }
                    }, T.prototype._transportClose = function (e, t) {
                        this.transport, this._transport && (this._transport.removeAllListeners(), this._transport = null, this.transport = null), O(e) || 2e3 === e || this.readyState !== T.CONNECTING ? this._close(e, t) : this._connect()
                    }, T.prototype._open = function () {
                        this._transport && this._transport.transportName, this.readyState, this.readyState === T.CONNECTING ? (this._transportTimeoutId && (clearTimeout(this._transportTimeoutId), this._transportTimeoutId = null), this.readyState = T.OPEN, this.transport = this._transport.transportName, this.dispatchEvent(new m("open")), this.transport) : this._close(1006, "Server lost session")
                    }, T.prototype._close = function (e, t, r) {
                        this.transport, this.readyState;
                        var o = !1;
                        if (this._ir && (o = !0, this._ir.close(), this._ir = null), this._transport && (this._transport.close(), this._transport = null, this.transport = null), this.readyState === T.CLOSED) throw new Error("InvalidStateError: SockJS has already been closed");
                        this.readyState = T.CLOSING, setTimeout(function () {
                            this.readyState = T.CLOSED, o && this.dispatchEvent(new m("error"));
                            var n = new v("close");
                            n.wasClean = r || !1, n.code = e || 1e3, n.reason = t, this.dispatchEvent(n), this.onmessage = this.onclose = this.onerror = null
                        }.bind(this), 0)
                    }, T.prototype.countRTO = function (e) {
                        return e > 100 ? 4 * e : 300 + e
                    }, e.exports = function (e) {
                        return o = p(e), r(551)(T, e), T
                    }
                },
                1247: () => {
                    "use strict";
                    var e, t = Array.prototype,
                        r = Object.prototype,
                        o = Function.prototype,
                        n = String.prototype,
                        i = t.slice,
                        s = r.toString,
                        a = function (e) {
                            return "[object Function]" === r.toString.call(e)
                        },
                        c = function (e) {
                            return "[object String]" === s.call(e)
                        },
                        u = Object.defineProperty && function () {
                            try {
                                return Object.defineProperty({}, "x", {}), !0
                            } catch (e) {
                                return !1
                            }
                        }();
                    e = u ? function (e, t, r, o) {
                        !o && t in e || Object.defineProperty(e, t, {
                            configurable: !0,
                            enumerable: !1,
                            writable: !0,
                            value: r
                        })
                    } : function (e, t, r, o) {
                        !o && t in e || (e[t] = r)
                    };
                    var l = function (t, o, n) {
                            for (var i in o) r.hasOwnProperty.call(o, i) && e(t, i, o[i], n)
                        },
                        p = function (e) {
                            if (null == e) throw new TypeError("can't convert " + e + " to object");
                            return Object(e)
                        };

                    function d(e) {
                        var t = +e;
                        return t != t ? t = 0 : 0 !== t && t !== 1 / 0 && t !== -1 / 0 && (t = (t > 0 || -1) * Math.floor(Math.abs(t))), t
                    }

                    function h() {}
                    l(o, {
                        bind: function (e) {
                            var t = this;
                            if (!a(t)) throw new TypeError("Function.prototype.bind called on incompatible " + t);
                            for (var r = i.call(arguments, 1), o = function () {
                                    if (this instanceof u) {
                                        var o = t.apply(this, r.concat(i.call(arguments)));
                                        return Object(o) === o ? o : this
                                    }
                                    return t.apply(e, r.concat(i.call(arguments)))
                                }, n = Math.max(0, t.length - r.length), s = [], c = 0; c < n; c++) s.push("$" + c);
                            var u = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this, arguments); }")(o);
                            return t.prototype && (h.prototype = t.prototype, u.prototype = new h, h.prototype = null), u
                        }
                    }), l(Array, {
                        isArray: function (e) {
                            return "[object Array]" === s.call(e)
                        }
                    });
                    var f, m, y, g = Object("a"),
                        v = "a" !== g[0] || !(0 in g);
                    l(t, {
                        forEach: function (e) {
                            var t = p(this),
                                r = v && c(this) ? this.split("") : t,
                                o = arguments[1],
                                n = -1,
                                i = r.length >>> 0;
                            if (!a(e)) throw new TypeError;
                            for (; ++n < i;) n in r && e.call(o, r[n], n, t)
                        }
                    }, (f = t.forEach, m = !0, y = !0, f && (f.call("foo", (function (e, t, r) {
                        "object" != typeof r && (m = !1)
                    })), f.call([1], (function () {
                        y = "string" == typeof this
                    }), "x")), !(f && m && y)));
                    var E = Array.prototype.indexOf && -1 !== [0, 1].indexOf(1, 2);
                    l(t, {
                        indexOf: function (e) {
                            var t = v && c(this) ? this.split("") : p(this),
                                r = t.length >>> 0;
                            if (!r) return -1;
                            var o = 0;
                            for (arguments.length > 1 && (o = d(arguments[1])), o = o >= 0 ? o : Math.max(0, r + o); o < r; o++)
                                if (o in t && t[o] === e) return o;
                            return -1
                        }
                    }, E);
                    var _, T = n.split;
                    2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? (_ = void 0 === /()??/.exec("")[1], n.split = function (e, r) {
                        var o = this;
                        if (void 0 === e && 0 === r) return [];
                        if ("[object RegExp]" !== s.call(e)) return T.call(this, e, r);
                        var n, i, a, c, u = [],
                            l = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : ""),
                            p = 0;
                        for (e = new RegExp(e.source, l + "g"), o += "", _ || (n = new RegExp("^" + e.source + "$(?!\\s)", l)), r = void 0 === r ? -1 >>> 0 : r >>> 0;
                            (i = e.exec(o)) && !((a = i.index + i[0].length) > p && (u.push(o.slice(p, i.index)), !_ && i.length > 1 && i[0].replace(n, (function () {
                                for (var e = 1; e < arguments.length - 2; e++) void 0 === arguments[e] && (i[e] = void 0)
                            })), i.length > 1 && i.index < o.length && t.push.apply(u, i.slice(1)), c = i[0].length, p = a, u.length >= r));) e.lastIndex === i.index && e.lastIndex++;
                        return p === o.length ? !c && e.test("") || u.push("") : u.push(o.slice(p)), u.length > r ? u.slice(0, r) : u
                    }) : "0".split(void 0, 0).length && (n.split = function (e, t) {
                        return void 0 === e && 0 === t ? [] : T.call(this, e, t)
                    });
                    var O = n.substr;
                    l(n, {
                        substr: function (e, t) {
                            return O.call(this, e < 0 && (e = this.length + e) < 0 ? 0 : e, t)
                        }
                    }, "".substr && "b" !== "0b".substr(-1))
                },
                7581: (e, t, r) => {
                    "use strict";
                    e.exports = [r(2412), r(9842), r(4620), r(3004), r(882)(r(3004)), r(5616), r(882)(r(5616)), r(2387), r(9998), r(882)(r(2387)), r(5375)]
                },
                2940: (e, t, r) => {
                    "use strict";
                    var o = r(3212).v,
                        n = r(5717),
                        i = r(7705),
                        s = r(273),
                        a = r.g.XMLHttpRequest;

                    function c(e, t, r, n) {
                        var i = this;
                        o.call(this), setTimeout((function () {
                            i._start(e, t, r, n)
                        }), 0)
                    }
                    n(c, o), c.prototype._start = function (e, t, r, o) {
                        var n = this;
                        try {
                            this.xhr = new a
                        } catch (e) {}
                        if (!this.xhr) return this.emit("finish", 0, "no xhr support"), void this._cleanup();
                        t = s.addQuery(t, "t=" + +new Date), this.unloadRef = i.unloadAdd((function () {
                            n._cleanup(!0)
                        }));
                        try {
                            this.xhr.open(e, t, !0), this.timeout && "timeout" in this.xhr && (this.xhr.timeout = this.timeout, this.xhr.ontimeout = function () {
                                n.emit("finish", 0, ""), n._cleanup(!1)
                            })
                        } catch (e) {
                            return this.emit("finish", 0, ""), void this._cleanup(!1)
                        }
                        if (o && o.noCredentials || !c.supportsCORS || (this.xhr.withCredentials = !0), o && o.headers)
                            for (var u in o.headers) this.xhr.setRequestHeader(u, o.headers[u]);
                        this.xhr.onreadystatechange = function () {
                            if (n.xhr) {
                                var e, t, r = n.xhr;
                                switch (r.readyState, r.readyState) {
                                    case 3:
                                        try {
                                            t = r.status, e = r.responseText
                                        } catch (e) {}
                                        1223 === t && (t = 204), 200 === t && e && e.length > 0 && n.emit("chunk", t, e);
                                        break;
                                    case 4:
                                        1223 === (t = r.status) && (t = 204), 12005 !== t && 12029 !== t || (t = 0), r.responseText, n.emit("finish", t, r.responseText), n._cleanup(!1)
                                }
                            }
                        };
                        try {
                            n.xhr.send(r)
                        } catch (e) {
                            n.emit("finish", 0, ""), n._cleanup(!1)
                        }
                    }, c.prototype._cleanup = function (e) {
                        if (this.xhr) {
                            if (this.removeAllListeners(), i.unloadDel(this.unloadRef), this.xhr.onreadystatechange = function () {}, this.xhr.ontimeout && (this.xhr.ontimeout = null), e) try {
                                this.xhr.abort()
                            } catch (e) {}
                            this.unloadRef = this.xhr = null
                        }
                    }, c.prototype.close = function () {
                        this._cleanup(!0)
                    }, c.enabled = !!a;
                    var u = ["Active"].concat("Object").join("X");
                    !c.enabled && u in r.g && (a = function () {
                        try {
                            return new r.g[u]("Microsoft.XMLHTTP")
                        } catch (e) {
                            return null
                        }
                    }, c.enabled = !!new a);
                    var l = !1;
                    try {
                        l = "withCredentials" in new a
                    } catch (e) {}
                    c.supportsCORS = l, e.exports = c
                },
                3759: (e, t, r) => {
                    e.exports = r.g.EventSource
                },
                9334: (e, t, r) => {
                    "use strict";
                    var o = r.g.WebSocket || r.g.MozWebSocket;
                    e.exports = o ? function (e) {
                        return new o(e)
                    } : void 0
                },
                3004: (e, t, r) => {
                    "use strict";
                    var o = r(5717),
                        n = r(9395),
                        i = r(6709),
                        s = r(9033),
                        a = r(3759);

                    function c(e) {
                        if (!c.enabled()) throw new Error("Transport created when disabled");
                        n.call(this, e, "/eventsource", i, s)
                    }
                    o(c, n), c.enabled = function () {
                        return !!a
                    }, c.transportName = "eventsource", c.roundTrips = 2, e.exports = c
                },
                5616: (e, t, r) => {
                    "use strict";
                    var o = r(5717),
                        n = r(3608),
                        i = r(3515),
                        s = r(9395);

                    function a(e) {
                        if (!n.enabled) throw new Error("Transport created when disabled");
                        s.call(this, e, "/htmlfile", n, i)
                    }
                    o(a, s), a.enabled = function (e) {
                        return n.enabled && e.sameOrigin
                    }, a.transportName = "htmlfile", a.roundTrips = 2, e.exports = a
                },
                5088: (e, t, r) => {
                    "use strict";
                    var o = r(5717),
                        n = r(7522),
                        i = r(3212).v,
                        s = r(2828),
                        a = r(273),
                        c = r(3683),
                        u = r(7705),
                        l = r(8915);

                    function p(e, t, r) {
                        if (!p.enabled()) throw new Error("Transport created when disabled");
                        i.call(this);
                        var o = this;
                        this.origin = a.getOrigin(r), this.baseUrl = r, this.transUrl = t, this.transport = e, this.windowId = l.string(8);
                        var n = a.addPath(r, "/iframe.html") + "#" + this.windowId;
                        this.iframeObj = c.createIframe(n, (function (e) {
                            o.emit("close", 1006, "Unable to load an iframe (" + e + ")"), o.close()
                        })), this.onmessageCallback = this._message.bind(this), u.attachEvent("message", this.onmessageCallback)
                    }
                    o(p, i), p.prototype.close = function () {
                        if (this.removeAllListeners(), this.iframeObj) {
                            u.detachEvent("message", this.onmessageCallback);
                            try {
                                this.postMessage("c")
                            } catch (e) {}
                            this.iframeObj.cleanup(), this.iframeObj = null, this.onmessageCallback = this.iframeObj = null
                        }
                    }, p.prototype._message = function (e) {
                        if (e.data, !a.isOriginEqual(e.origin, this.origin)) return e.origin, void this.origin;
                        var t;
                        try {
                            t = n.parse(e.data)
                        } catch (t) {
                            return void e.data
                        }
                        if (t.windowId !== this.windowId) return t.windowId, void this.windowId;
                        switch (t.type) {
                            case "s":
                                this.iframeObj.loaded(), this.postMessage("s", n.stringify([s, this.transport, this.transUrl, this.baseUrl]));
                                break;
                            case "t":
                                this.emit("message", t.data);
                                break;
                            case "c":
                                var r;
                                try {
                                    r = n.parse(t.data)
                                } catch (e) {
                                    return void t.data
                                }
                                this.emit("close", r[0], r[1]), this.close()
                        }
                    }, p.prototype.postMessage = function (e, t) {
                        this.iframeObj.post(n.stringify({
                            windowId: this.windowId,
                            type: e,
                            data: t || ""
                        }), this.origin)
                    }, p.prototype.send = function (e) {
                        this.postMessage("m", e)
                    }, p.enabled = function () {
                        return c.iframeEnabled
                    }, p.transportName = "iframe", p.roundTrips = 2, e.exports = p
                },
                5375: (e, t, r) => {
                    "use strict";
                    var o = r(5717),
                        n = r(8347),
                        i = r(514),
                        s = r(771);

                    function a(e) {
                        if (!a.enabled()) throw new Error("Transport created when disabled");
                        n.call(this, e, "/jsonp", s, i)
                    }
                    o(a, n), a.enabled = function () {
                        return !!r.g.document
                    }, a.transportName = "jsonp-polling", a.roundTrips = 1, a.needBody = !0, e.exports = a
                },
                9395: (e, t, r) => {
                    "use strict";
                    var o = r(5717),
                        n = r(273),
                        i = r(8347);

                    function s(e, t, r, o) {
                        i.call(this, e, t, function (e) {
                            return function (t, r, o) {
                                var i = {};
                                "string" == typeof r && (i.headers = {
                                    "Content-type": "text/plain"
                                });
                                var s = n.addPath(t, "/xhr_send"),
                                    a = new e("POST", s, r, i);
                                return a.once("finish", (function (e) {
                                        if (a = null, 200 !== e && 204 !== e) return o(new Error("http status " + e));
                                        o()
                                    })),
                                    function () {
                                        a.close(), a = null;
                                        var e = new Error("Aborted");
                                        e.code = 1e3, o(e)
                                    }
                            }
                        }(o), r, o)
                    }
                    o(s, i), e.exports = s
                },
                1851: (e, t, r) => {
                    "use strict";
                    var o = r(5717),
                        n = r(3212).v;

                    function i(e, t) {
                        n.call(this), this.sendBuffer = [], this.sender = t, this.url = e
                    }
                    o(i, n), i.prototype.send = function (e) {
                        this.sendBuffer.push(e), this.sendStop || this.sendSchedule()
                    }, i.prototype.sendScheduleWait = function () {
                        var e, t = this;
                        this.sendStop = function () {
                            t.sendStop = null, clearTimeout(e)
                        }, e = setTimeout((function () {
                            t.sendStop = null, t.sendSchedule()
                        }), 25)
                    }, i.prototype.sendSchedule = function () {
                        this.sendBuffer.length;
                        var e = this;
                        if (this.sendBuffer.length > 0) {
                            var t = "[" + this.sendBuffer.join(",") + "]";
                            this.sendStop = this.sender(this.url, t, (function (t) {
                                e.sendStop = null, t ? (e.emit("close", t.code || 1006, "Sending error: " + t), e.close()) : e.sendScheduleWait()
                            })), this.sendBuffer = []
                        }
                    }, i.prototype._cleanup = function () {
                        this.removeAllListeners()
                    }, i.prototype.close = function () {
                        this._cleanup(), this.sendStop && (this.sendStop(), this.sendStop = null)
                    }, e.exports = i
                },
                882: (e, t, r) => {
                    "use strict";
                    var o = r(5717),
                        n = r(5088),
                        i = r(2217);
                    e.exports = function (e) {
                        function t(t, r) {
                            n.call(this, e.transportName, t, r)
                        }
                        return o(t, n), t.enabled = function (t, o) {
                            if (!r.g.document) return !1;
                            var s = i.extend({}, o);
                            return s.sameOrigin = !0, e.enabled(s) && n.enabled()
                        }, t.transportName = "iframe-" + e.transportName, t.needBody = !0, t.roundTrips = n.roundTrips + e.roundTrips - 1, t.facadeTransport = e, t
                    }
                },
                1265: (e, t, r) => {
                    "use strict";
                    var o = r(5717),
                        n = r(3212).v;

                    function i(e, t, r) {
                        n.call(this), this.Receiver = e, this.receiveUrl = t, this.AjaxObject = r, this._scheduleReceiver()
                    }
                    o(i, n), i.prototype._scheduleReceiver = function () {
                        var e = this,
                            t = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);
                        t.on("message", (function (t) {
                            e.emit("message", t)
                        })), t.once("close", (function (r, o) {
                            e.pollIsClosing, e.poll = t = null, e.pollIsClosing || ("network" === o ? e._scheduleReceiver() : (e.emit("close", r || 1006, o), e.removeAllListeners()))
                        }))
                    }, i.prototype.abort = function () {
                        this.removeAllListeners(), this.pollIsClosing = !0, this.poll && this.poll.abort()
                    }, e.exports = i
                },
                8347: (e, t, r) => {
                    "use strict";
                    var o = r(5717),
                        n = r(273),
                        i = r(1851),
                        s = r(1265);

                    function a(e, t, r, o, a) {
                        var c = n.addPath(e, t),
                            u = this;
                        i.call(this, e, r), this.poll = new s(o, c, a), this.poll.on("message", (function (e) {
                            u.emit("message", e)
                        })), this.poll.once("close", (function (e, t) {
                            u.poll = null, u.emit("close", e, t), u.close()
                        }))
                    }
                    o(a, i), a.prototype.close = function () {
                        i.prototype.close.call(this), this.removeAllListeners(), this.poll && (this.poll.abort(), this.poll = null)
                    }, e.exports = a
                },
                6709: (e, t, r) => {
                    "use strict";
                    var o = r(5717),
                        n = r(3212).v,
                        i = r(3759);

                    function s(e) {
                        n.call(this);
                        var t = this,
                            r = this.es = new i(e);
                        r.onmessage = function (e) {
                            e.data, t.emit("message", decodeURI(e.data))
                        }, r.onerror = function (e) {
                            r.readyState;
                            var o = 2 !== r.readyState ? "network" : "permanent";
                            t._cleanup(), t._close(o)
                        }
                    }
                    o(s, n), s.prototype.abort = function () {
                        this._cleanup(), this._close("user")
                    }, s.prototype._cleanup = function () {
                        var e = this.es;
                        e && (e.onmessage = e.onerror = null, e.close(), this.es = null)
                    }, s.prototype._close = function (e) {
                        var t = this;
                        setTimeout((function () {
                            t.emit("close", null, e), t.removeAllListeners()
                        }), 200)
                    }, e.exports = s
                },
                3608: (e, t, r) => {
                    "use strict";
                    var o = r(5717),
                        n = r(3683),
                        i = r(273),
                        s = r(3212).v,
                        a = r(8915);

                    function c(e) {
                        s.call(this);
                        var t = this;
                        n.polluteGlobalNamespace(), this.id = "a" + a.string(6), e = i.addQuery(e, "c=" + decodeURIComponent(n.WPrefix + "." + this.id)), c.htmlfileEnabled;
                        var o = c.htmlfileEnabled ? n.createHtmlfile : n.createIframe;
                        r.g[n.WPrefix][this.id] = {
                            start: function () {
                                t.iframeObj.loaded()
                            },
                            message: function (e) {
                                t.emit("message", e)
                            },
                            stop: function () {
                                t._cleanup(), t._close("network")
                            }
                        }, this.iframeObj = o(e, (function () {
                            t._cleanup(), t._close("permanent")
                        }))
                    }
                    o(c, s), c.prototype.abort = function () {
                        this._cleanup(), this._close("user")
                    }, c.prototype._cleanup = function () {
                        this.iframeObj && (this.iframeObj.cleanup(), this.iframeObj = null), delete r.g[n.WPrefix][this.id]
                    }, c.prototype._close = function (e) {
                        this.emit("close", null, e), this.removeAllListeners()
                    }, c.htmlfileEnabled = !1;
                    var u = ["Active"].concat("Object").join("X");
                    if (u in r.g) try {
                        c.htmlfileEnabled = !!new r.g[u]("htmlfile")
                    } catch (e) {}
                    c.enabled = c.htmlfileEnabled || n.iframeEnabled, e.exports = c
                },
                514: (e, t, r) => {
                    "use strict";
                    var o = r(3683),
                        n = r(8915),
                        i = r(8510),
                        s = r(273),
                        a = r(5717),
                        c = r(3212).v;

                    function u(e) {
                        var t = this;
                        c.call(this), o.polluteGlobalNamespace(), this.id = "a" + n.string(6);
                        var i = s.addQuery(e, "c=" + encodeURIComponent(o.WPrefix + "." + this.id));
                        r.g[o.WPrefix][this.id] = this._callback.bind(this), this._createScript(i), this.timeoutId = setTimeout((function () {
                            t._abort(new Error("JSONP script loaded abnormally (timeout)"))
                        }), u.timeout)
                    }
                    a(u, c), u.prototype.abort = function () {
                        if (r.g[o.WPrefix][this.id]) {
                            var e = new Error("JSONP user aborted read");
                            e.code = 1e3, this._abort(e)
                        }
                    }, u.timeout = 35e3, u.scriptErrorTimeout = 1e3, u.prototype._callback = function (e) {
                        this._cleanup(), this.aborting || (e && this.emit("message", e), this.emit("close", null, "network"), this.removeAllListeners())
                    }, u.prototype._abort = function (e) {
                        this._cleanup(), this.aborting = !0, this.emit("close", e.code, e.message), this.removeAllListeners()
                    }, u.prototype._cleanup = function () {
                        if (clearTimeout(this.timeoutId), this.script2 && (this.script2.parentNode.removeChild(this.script2), this.script2 = null), this.script) {
                            var e = this.script;
                            e.parentNode.removeChild(e), e.onreadystatechange = e.onerror = e.onload = e.onclick = null, this.script = null
                        }
                        delete r.g[o.WPrefix][this.id]
                    }, u.prototype._scriptError = function () {
                        var e = this;
                        this.errorTimer || (this.errorTimer = setTimeout((function () {
                            e.loadedOkay || e._abort(new Error("JSONP script loaded abnormally (onerror)"))
                        }), u.scriptErrorTimeout))
                    }, u.prototype._createScript = function (e) {
                        var t, o = this,
                            s = this.script = r.g.document.createElement("script");
                        if (s.id = "a" + n.string(8), s.src = e, s.type = "text/javascript", s.charset = "UTF-8", s.onerror = this._scriptError.bind(this), s.onload = function () {
                                o._abort(new Error("JSONP script loaded abnormally (onload)"))
                            }, s.onreadystatechange = function () {
                                if (s.readyState, /loaded|closed/.test(s.readyState)) {
                                    if (s && s.htmlFor && s.onclick) {
                                        o.loadedOkay = !0;
                                        try {
                                            s.onclick()
                                        } catch (e) {}
                                    }
                                    s && o._abort(new Error("JSONP script loaded abnormally (onreadystatechange)"))
                                }
                            }, void 0 === s.async && r.g.document.attachEvent)
                            if (i.isOpera())(t = this.script2 = r.g.document.createElement("script")).text = "try{var a = document.getElementById('" + s.id + "'); if(a)a.onerror();}catch(x){};", s.async = t.async = !1;
                            else {
                                try {
                                    s.htmlFor = s.id, s.event = "onclick"
                                } catch (e) {}
                                s.async = !0
                            } void 0 !== s.async && (s.async = !0);
                        var a = r.g.document.getElementsByTagName("head")[0];
                        a.insertBefore(s, a.firstChild), t && a.insertBefore(t, a.firstChild)
                    }, e.exports = u
                },
                1044: (e, t, r) => {
                    "use strict";
                    var o = r(5717),
                        n = r(3212).v;

                    function i(e, t) {
                        n.call(this);
                        var r = this;
                        this.bufferPosition = 0, this.xo = new t("POST", e, null), this.xo.on("chunk", this._chunkHandler.bind(this)), this.xo.once("finish", (function (e, t) {
                            r._chunkHandler(e, t), r.xo = null;
                            var o = 200 === e ? "network" : "permanent";
                            r.emit("close", null, o), r._cleanup()
                        }))
                    }
                    o(i, n), i.prototype._chunkHandler = function (e, t) {
                        if (200 === e && t)
                            for (var r = -1;; this.bufferPosition += r + 1) {
                                var o = t.slice(this.bufferPosition);
                                if (-1 === (r = o.indexOf("\n"))) break;
                                var n = o.slice(0, r);
                                n && this.emit("message", n)
                            }
                    }, i.prototype._cleanup = function () {
                        this.removeAllListeners()
                    }, i.prototype.abort = function () {
                        this.xo && (this.xo.close(), this.emit("close", null, "user"), this.xo = null), this._cleanup()
                    }, e.exports = i
                },
                771: (e, t, r) => {
                    "use strict";
                    var o, n, i = r(8915),
                        s = r(273);
                    e.exports = function (e, t, a) {
                        o || ((o = r.g.document.createElement("form")).style.display = "none", o.style.position = "absolute", o.method = "POST", o.enctype = "application/x-www-form-urlencoded", o.acceptCharset = "UTF-8", (n = r.g.document.createElement("textarea")).name = "d", o.appendChild(n), r.g.document.body.appendChild(o));
                        var c = "a" + i.string(8);
                        o.target = c, o.action = s.addQuery(s.addPath(e, "/jsonp_send"), "i=" + c);
                        var u = function (e) {
                            try {
                                return r.g.document.createElement('<iframe name="' + e + '">')
                            } catch (o) {
                                var t = r.g.document.createElement("iframe");
                                return t.name = e, t
                            }
                        }(c);
                        u.id = c, u.style.display = "none", o.appendChild(u);
                        try {
                            n.value = t
                        } catch (e) {}
                        o.submit();
                        var l = function (e) {
                            u.onerror && (u.onreadystatechange = u.onerror = u.onload = null, setTimeout((function () {
                                u.parentNode.removeChild(u), u = null
                            }), 500), n.value = "", a(e))
                        };
                        return u.onerror = function () {
                                l()
                            }, u.onload = function () {
                                l()
                            }, u.onreadystatechange = function (e) {
                                u.readyState, "complete" === u.readyState && l()
                            },
                            function () {
                                l(new Error("Aborted"))
                            }
                    }
                },
                6073: (e, t, r) => {
                    "use strict";
                    var o = r(3212).v,
                        n = r(5717),
                        i = r(7705),
                        s = r(8510),
                        a = r(273);

                    function c(e, t, r) {
                        var n = this;
                        o.call(this), setTimeout((function () {
                            n._start(e, t, r)
                        }), 0)
                    }
                    n(c, o), c.prototype._start = function (e, t, o) {
                        var n = this,
                            s = new r.g.XDomainRequest;
                        t = a.addQuery(t, "t=" + +new Date), s.onerror = function () {
                            n._error()
                        }, s.ontimeout = function () {
                            n._error()
                        }, s.onprogress = function () {
                            s.responseText, n.emit("chunk", 200, s.responseText)
                        }, s.onload = function () {
                            n.emit("finish", 200, s.responseText), n._cleanup(!1)
                        }, this.xdr = s, this.unloadRef = i.unloadAdd((function () {
                            n._cleanup(!0)
                        }));
                        try {
                            this.xdr.open(e, t), this.timeout && (this.xdr.timeout = this.timeout), this.xdr.send(o)
                        } catch (e) {
                            this._error()
                        }
                    }, c.prototype._error = function () {
                        this.emit("finish", 0, ""), this._cleanup(!1)
                    }, c.prototype._cleanup = function (e) {
                        if (this.xdr) {
                            if (this.removeAllListeners(), i.unloadDel(this.unloadRef), this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null, e) try {
                                this.xdr.abort()
                            } catch (e) {}
                            this.unloadRef = this.xdr = null
                        }
                    }, c.prototype.close = function () {
                        this._cleanup(!0)
                    }, c.enabled = !(!r.g.XDomainRequest || !s.hasDomain()), e.exports = c
                },
                9033: (e, t, r) => {
                    "use strict";
                    var o = r(5717),
                        n = r(2940);

                    function i(e, t, r, o) {
                        n.call(this, e, t, r, o)
                    }
                    o(i, n), i.enabled = n.enabled && n.supportsCORS, e.exports = i
                },
                7103: (e, t, r) => {
                    "use strict";
                    var o = r(3212).v;

                    function n() {
                        var e = this;
                        o.call(this), this.to = setTimeout((function () {
                            e.emit("finish", 200, "{}")
                        }), n.timeout)
                    }
                    r(5717)(n, o), n.prototype.close = function () {
                        clearTimeout(this.to)
                    }, n.timeout = 2e3, e.exports = n
                },
                3515: (e, t, r) => {
                    "use strict";
                    var o = r(5717),
                        n = r(2940);

                    function i(e, t, r) {
                        n.call(this, e, t, r, {
                            noCredentials: !0
                        })
                    }
                    o(i, n), i.enabled = n.enabled, e.exports = i
                },
                2412: (e, t, r) => {
                    "use strict";
                    var o = r(7705),
                        n = r(273),
                        i = r(5717),
                        s = r(3212).v,
                        a = r(9334);

                    function c(e, t, r) {
                        if (!c.enabled()) throw new Error("Transport created when disabled");
                        s.call(this);
                        var i = this,
                            u = n.addPath(e, "/websocket");
                        u = "https" === u.slice(0, 5) ? "wss" + u.slice(5) : "ws" + u.slice(4), this.url = u, this.ws = new a(this.url, [], r), this.ws.onmessage = function (e) {
                            e.data, i.emit("message", e.data)
                        }, this.unloadRef = o.unloadAdd((function () {
                            i.ws.close()
                        })), this.ws.onclose = function (e) {
                            e.code, e.reason, i.emit("close", e.code, e.reason), i._cleanup()
                        }, this.ws.onerror = function (e) {
                            i.emit("close", 1006, "WebSocket connection broken"), i._cleanup()
                        }
                    }
                    i(c, s), c.prototype.send = function (e) {
                        var t = "[" + e + "]";
                        this.ws.send(t)
                    }, c.prototype.close = function () {
                        var e = this.ws;
                        this._cleanup(), e && e.close()
                    }, c.prototype._cleanup = function () {
                        var e = this.ws;
                        e && (e.onmessage = e.onclose = e.onerror = null), o.unloadDel(this.unloadRef), this.unloadRef = this.ws = null, this.removeAllListeners()
                    }, c.enabled = function () {
                        return !!a
                    }, c.transportName = "websocket", c.roundTrips = 2, e.exports = c
                },
                9998: (e, t, r) => {
                    "use strict";
                    var o = r(5717),
                        n = r(9395),
                        i = r(4620),
                        s = r(1044),
                        a = r(6073);

                    function c(e) {
                        if (!a.enabled) throw new Error("Transport created when disabled");
                        n.call(this, e, "/xhr", s, a)
                    }
                    o(c, n), c.enabled = i.enabled, c.transportName = "xdr-polling", c.roundTrips = 2, e.exports = c
                },
                4620: (e, t, r) => {
                    "use strict";
                    var o = r(5717),
                        n = r(9395),
                        i = r(1044),
                        s = r(6073);

                    function a(e) {
                        if (!s.enabled) throw new Error("Transport created when disabled");
                        n.call(this, e, "/xhr_streaming", i, s)
                    }
                    o(a, n), a.enabled = function (e) {
                        return !e.cookie_needed && !e.nullOrigin && s.enabled && e.sameScheme
                    }, a.transportName = "xdr-streaming", a.roundTrips = 2, e.exports = a
                },
                2387: (e, t, r) => {
                    "use strict";
                    var o = r(5717),
                        n = r(9395),
                        i = r(1044),
                        s = r(9033),
                        a = r(3515);

                    function c(e) {
                        if (!a.enabled && !s.enabled) throw new Error("Transport created when disabled");
                        n.call(this, e, "/xhr", i, s)
                    }
                    o(c, n), c.enabled = function (e) {
                        return !e.nullOrigin && (!(!a.enabled || !e.sameOrigin) || s.enabled)
                    }, c.transportName = "xhr-polling", c.roundTrips = 2, e.exports = c
                },
                9842: (e, t, r) => {
                    "use strict";
                    var o = r(5717),
                        n = r(9395),
                        i = r(1044),
                        s = r(9033),
                        a = r(3515),
                        c = r(8510);

                    function u(e) {
                        if (!a.enabled && !s.enabled) throw new Error("Transport created when disabled");
                        n.call(this, e, "/xhr_streaming", i, s)
                    }
                    o(u, n), u.enabled = function (e) {
                        return !e.nullOrigin && !c.isOpera() && s.enabled
                    }, u.transportName = "xhr-streaming", u.roundTrips = 2, u.needBody = !!r.g.document, e.exports = u
                },
                2017: (e, t, r) => {
                    "use strict";
                    r.g.crypto && r.g.crypto.getRandomValues ? e.exports.randomBytes = function (e) {
                        var t = new Uint8Array(e);
                        return r.g.crypto.getRandomValues(t), t
                    } : e.exports.randomBytes = function (e) {
                        for (var t = new Array(e), r = 0; r < e; r++) t[r] = Math.floor(256 * Math.random());
                        return t
                    }
                },
                8510: (e, t, r) => {
                    "use strict";
                    e.exports = {
                        isOpera: function () {
                            return r.g.navigator && /opera/i.test(r.g.navigator.userAgent)
                        },
                        isKonqueror: function () {
                            return r.g.navigator && /konqueror/i.test(r.g.navigator.userAgent)
                        },
                        hasDomain: function () {
                            if (!r.g.document) return !0;
                            try {
                                return !!r.g.document.domain
                            } catch (e) {
                                return !1
                            }
                        }
                    }
                },
                8028: (e, t, r) => {
                    "use strict";
                    var o, n = r(7522),
                        i = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g;
                    e.exports = {
                        quote: function (e) {
                            var t = n.stringify(e);
                            return i.lastIndex = 0, i.test(t) ? (o || (o = function (e) {
                                var t, r = {},
                                    o = [];
                                for (t = 0; t < 65536; t++) o.push(String.fromCharCode(t));
                                return e.lastIndex = 0, o.join("").replace(e, (function (e) {
                                    return r[e] = "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4), ""
                                })), e.lastIndex = 0, r
                            }(i)), t.replace(i, (function (e) {
                                return o[e]
                            }))) : t
                        }
                    }
                },
                7705: (e, t, r) => {
                    "use strict";
                    var o = r(8915),
                        n = {},
                        i = !1,
                        s = r.g.chrome && r.g.chrome.app && r.g.chrome.app.runtime;
                    e.exports = {
                        attachEvent: function (e, t) {
                            void 0 !== r.g.addEventListener ? r.g.addEventListener(e, t, !1) : r.g.document && r.g.attachEvent && (r.g.document.attachEvent("on" + e, t), r.g.attachEvent("on" + e, t))
                        },
                        detachEvent: function (e, t) {
                            void 0 !== r.g.addEventListener ? r.g.removeEventListener(e, t, !1) : r.g.document && r.g.detachEvent && (r.g.document.detachEvent("on" + e, t), r.g.detachEvent("on" + e, t))
                        },
                        unloadAdd: function (e) {
                            if (s) return null;
                            var t = o.string(8);
                            return n[t] = e, i && setTimeout(this.triggerUnloadCallbacks, 0), t
                        },
                        unloadDel: function (e) {
                            e in n && delete n[e]
                        },
                        triggerUnloadCallbacks: function () {
                            for (var e in n) n[e](), delete n[e]
                        }
                    }, s || e.exports.attachEvent("unload", (function () {
                        i || (i = !0, e.exports.triggerUnloadCallbacks())
                    }))
                },
                3683: (e, t, r) => {
                    "use strict";
                    var o = r(7705),
                        n = r(7522),
                        i = r(8510);
                    e.exports = {
                        WPrefix: "_jp",
                        currentWindowId: null,
                        polluteGlobalNamespace: function () {
                            e.exports.WPrefix in r.g || (r.g[e.exports.WPrefix] = {})
                        },
                        postMessage: function (t, o) {
                            r.g.parent !== r.g && r.g.parent.postMessage(n.stringify({
                                windowId: e.exports.currentWindowId,
                                type: t,
                                data: o || ""
                            }), "*")
                        },
                        createIframe: function (e, t) {
                            var n, i, s = r.g.document.createElement("iframe"),
                                a = function () {
                                    clearTimeout(n);
                                    try {
                                        s.onload = null
                                    } catch (e) {}
                                    s.onerror = null
                                },
                                c = function () {
                                    s && (a(), setTimeout((function () {
                                        s && s.parentNode.removeChild(s), s = null
                                    }), 0), o.unloadDel(i))
                                },
                                u = function (e) {
                                    s && (c(), t(e))
                                };
                            return s.src = e, s.style.display = "none", s.style.position = "absolute", s.onerror = function () {
                                u("onerror")
                            }, s.onload = function () {
                                clearTimeout(n), n = setTimeout((function () {
                                    u("onload timeout")
                                }), 2e3)
                            }, r.g.document.body.appendChild(s), n = setTimeout((function () {
                                u("timeout")
                            }), 15e3), i = o.unloadAdd(c), {
                                post: function (e, t) {
                                    setTimeout((function () {
                                        try {
                                            s && s.contentWindow && s.contentWindow.postMessage(e, t)
                                        } catch (e) {}
                                    }), 0)
                                },
                                cleanup: c,
                                loaded: a
                            }
                        },
                        createHtmlfile: function (t, n) {
                            var i, s, a, c = ["Active"].concat("Object").join("X"),
                                u = new r.g[c]("htmlfile"),
                                l = function () {
                                    clearTimeout(i), a.onerror = null
                                },
                                p = function () {
                                    u && (l(), o.unloadDel(s), a.parentNode.removeChild(a), a = u = null, CollectGarbage())
                                },
                                d = function (e) {
                                    u && (p(), n(e))
                                };
                            u.open(), u.write('<html><script>document.domain="' + r.g.document.domain + '";<\/script></html>'), u.close(), u.parentWindow[e.exports.WPrefix] = r.g[e.exports.WPrefix];
                            var h = u.createElement("div");
                            return u.body.appendChild(h), a = u.createElement("iframe"), h.appendChild(a), a.src = t, a.onerror = function () {
                                d("onerror")
                            }, i = setTimeout((function () {
                                d("timeout")
                            }), 15e3), s = o.unloadAdd(p), {
                                post: function (e, t) {
                                    try {
                                        setTimeout((function () {
                                            a && a.contentWindow && a.contentWindow.postMessage(e, t)
                                        }), 0)
                                    } catch (e) {}
                                },
                                cleanup: p,
                                loaded: l
                            }
                        }
                    }, e.exports.iframeEnabled = !1, r.g.document && (e.exports.iframeEnabled = ("function" == typeof r.g.postMessage || "object" == typeof r.g.postMessage) && !i.isKonqueror())
                },
                4886: (e, t, r) => {
                    "use strict";
                    var o = {};
                    ["log", "debug", "warn"].forEach((function (e) {
                        var t;
                        try {
                            t = r.g.console && r.g.console[e] && r.g.console[e].apply
                        } catch (e) {}
                        o[e] = t ? function () {
                            return r.g.console[e].apply(r.g.console, arguments)
                        } : "log" === e ? function () {} : o.log
                    })), e.exports = o
                },
                2217: e => {
                    "use strict";
                    e.exports = {
                        isObject: function (e) {
                            var t = typeof e;
                            return "function" === t || "object" === t && !!e
                        },
                        extend: function (e) {
                            if (!this.isObject(e)) return e;
                            for (var t, r, o = 1, n = arguments.length; o < n; o++)
                                for (r in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }
                    }
                },
                8915: (e, t, r) => {
                    "use strict";
                    var o = r(2017),
                        n = "abcdefghijklmnopqrstuvwxyz012345";
                    e.exports = {
                        string: function (e) {
                            for (var t = n.length, r = o.randomBytes(e), i = [], s = 0; s < e; s++) i.push(n.substr(r[s] % t, 1));
                            return i.join("")
                        },
                        number: function (e) {
                            return Math.floor(Math.random() * e)
                        },
                        numberString: function (e) {
                            var t = ("" + (e - 1)).length;
                            return (new Array(t + 1).join("0") + this.number(e)).slice(-t)
                        }
                    }
                },
                5581: e => {
                    "use strict";
                    e.exports = function (e) {
                        return {
                            filterToEnabled: function (t, r) {
                                var o = {
                                    main: [],
                                    facade: []
                                };
                                return t ? "string" == typeof t && (t = [t]) : t = [], e.forEach((function (e) {
                                    e && ("websocket" === e.transportName && !1 === r.websocket || (t.length && -1 === t.indexOf(e.transportName) ? e.transportName : e.enabled(r) ? (e.transportName, o.main.push(e), e.facadeTransport && o.facade.push(e.facadeTransport)) : e.transportName))
                                })), o
                            }
                        }
                    }
                },
                273: (e, t, r) => {
                    "use strict";
                    var o = r(4564);
                    e.exports = {
                        getOrigin: function (e) {
                            if (!e) return null;
                            var t = new o(e);
                            if ("file:" === t.protocol) return null;
                            var r = t.port;
                            return r || (r = "https:" === t.protocol ? "443" : "80"), t.protocol + "//" + t.hostname + ":" + r
                        },
                        isOriginEqual: function (e, t) {
                            return this.getOrigin(e) === this.getOrigin(t)
                        },
                        isSchemeEqual: function (e, t) {
                            return e.split(":")[0] === t.split(":")[0]
                        },
                        addPath: function (e, t) {
                            var r = e.split("?");
                            return r[0] + t + (r[1] ? "?" + r[1] : "")
                        },
                        addQuery: function (e, t) {
                            return e + (-1 === e.indexOf("?") ? "?" + t : "&" + t)
                        },
                        isLoopbackAddr: function (e) {
                            return /^127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(e) || /^\[::1\]$/.test(e)
                        }
                    }
                },
                2828: e => {
                    e.exports = "1.5.2"
                },
                4564: (e, t, r) => {
                    "use strict";
                    var o = r(7418),
                        n = r(7129),
                        i = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                        s = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                        a = /^[a-zA-Z]:/,
                        c = new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");

                    function u(e) {
                        return (e || "").toString().replace(c, "")
                    }
                    var l = [
                            ["#", "hash"],
                            ["?", "query"],
                            function (e, t) {
                                return h(t.protocol) ? e.replace(/\\/g, "/") : e
                            },
                            ["/", "pathname"],
                            ["@", "auth", 1],
                            [NaN, "host", void 0, 1, 1],
                            [/:(\d+)$/, "port", void 0, 1],
                            [NaN, "hostname", void 0, 1, 1]
                        ],
                        p = {
                            hash: 1,
                            query: 1
                        };

                    function d(e) {
                        var t, o = ("undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self ? self : {}).location || {},
                            n = {},
                            s = typeof (e = e || o);
                        if ("blob:" === e.protocol) n = new m(unescape(e.pathname), {});
                        else if ("string" === s)
                            for (t in n = new m(e, {}), p) delete n[t];
                        else if ("object" === s) {
                            for (t in e) t in p || (n[t] = e[t]);
                            void 0 === n.slashes && (n.slashes = i.test(e.href))
                        }
                        return n
                    }

                    function h(e) {
                        return "file:" === e || "ftp:" === e || "http:" === e || "https:" === e || "ws:" === e || "wss:" === e
                    }

                    function f(e, t) {
                        e = u(e), t = t || {};
                        var r, o = s.exec(e),
                            n = o[1] ? o[1].toLowerCase() : "",
                            i = !!o[2],
                            a = !!o[3],
                            c = 0;
                        return i ? a ? (r = o[2] + o[3] + o[4], c = o[2].length + o[3].length) : (r = o[2] + o[4], c = o[2].length) : a ? (r = o[3] + o[4], c = o[3].length) : r = o[4], "file:" === n ? c >= 2 && (r = r.slice(2)) : h(n) ? r = o[4] : n ? i && (r = r.slice(2)) : c >= 2 && h(t.protocol) && (r = o[4]), {
                            protocol: n,
                            slashes: i || h(n),
                            slashesCount: c,
                            rest: r
                        }
                    }

                    function m(e, t, r) {
                        if (e = u(e), !(this instanceof m)) return new m(e, t, r);
                        var i, s, c, p, y, g, v = l.slice(),
                            E = typeof t,
                            _ = this,
                            T = 0;
                        for ("object" !== E && "string" !== E && (r = t, t = null), r && "function" != typeof r && (r = n.parse), i = !(s = f(e || "", t = d(t))).protocol && !s.slashes, _.slashes = s.slashes || i && t.slashes, _.protocol = s.protocol || t.protocol || "", e = s.rest, ("file:" === s.protocol && (2 !== s.slashesCount || a.test(e)) || !s.slashes && (s.protocol || s.slashesCount < 2 || !h(_.protocol))) && (v[3] = [/(.*)/, "pathname"]); T < v.length; T++) "function" != typeof (p = v[T]) ? (c = p[0], g = p[1], c != c ? _[g] = e : "string" == typeof c ? ~(y = e.indexOf(c)) && ("number" == typeof p[2] ? (_[g] = e.slice(0, y), e = e.slice(y + p[2])) : (_[g] = e.slice(y), e = e.slice(0, y))) : (y = c.exec(e)) && (_[g] = y[1], e = e.slice(0, y.index)), _[g] = _[g] || i && p[3] && t[g] || "", p[4] && (_[g] = _[g].toLowerCase())) : e = p(e, _);
                        r && (_.query = r(_.query)), i && t.slashes && "/" !== _.pathname.charAt(0) && ("" !== _.pathname || "" !== t.pathname) && (_.pathname = function (e, t) {
                            if ("" === e) return t;
                            for (var r = (t || "/").split("/").slice(0, -1).concat(e.split("/")), o = r.length, n = r[o - 1], i = !1, s = 0; o--;) "." === r[o] ? r.splice(o, 1) : ".." === r[o] ? (r.splice(o, 1), s++) : s && (0 === o && (i = !0), r.splice(o, 1), s--);
                            return i && r.unshift(""), "." !== n && ".." !== n || r.push(""), r.join("/")
                        }(_.pathname, t.pathname)), "/" !== _.pathname.charAt(0) && h(_.protocol) && (_.pathname = "/" + _.pathname), o(_.port, _.protocol) || (_.host = _.hostname, _.port = ""), _.username = _.password = "", _.auth && (p = _.auth.split(":"), _.username = p[0] || "", _.password = p[1] || ""), _.origin = "file:" !== _.protocol && h(_.protocol) && _.host ? _.protocol + "//" + _.host : "null", _.href = _.toString()
                    }
                    m.prototype = {
                        set: function (e, t, r) {
                            var i = this;
                            switch (e) {
                                case "query":
                                    "string" == typeof t && t.length && (t = (r || n.parse)(t)), i[e] = t;
                                    break;
                                case "port":
                                    i[e] = t, o(t, i.protocol) ? t && (i.host = i.hostname + ":" + t) : (i.host = i.hostname, i[e] = "");
                                    break;
                                case "hostname":
                                    i[e] = t, i.port && (t += ":" + i.port), i.host = t;
                                    break;
                                case "host":
                                    i[e] = t, /:\d+$/.test(t) ? (t = t.split(":"), i.port = t.pop(), i.hostname = t.join(":")) : (i.hostname = t, i.port = "");
                                    break;
                                case "protocol":
                                    i.protocol = t.toLowerCase(), i.slashes = !r;
                                    break;
                                case "pathname":
                                case "hash":
                                    if (t) {
                                        var s = "pathname" === e ? "/" : "#";
                                        i[e] = t.charAt(0) !== s ? s + t : t
                                    } else i[e] = t;
                                    break;
                                default:
                                    i[e] = t
                            }
                            for (var a = 0; a < l.length; a++) {
                                var c = l[a];
                                c[4] && (i[c[1]] = i[c[1]].toLowerCase())
                            }
                            return i.origin = "file:" !== i.protocol && h(i.protocol) && i.host ? i.protocol + "//" + i.host : "null", i.href = i.toString(), i
                        },
                        toString: function (e) {
                            e && "function" == typeof e || (e = n.stringify);
                            var t, r = this,
                                o = r.protocol;
                            o && ":" !== o.charAt(o.length - 1) && (o += ":");
                            var i = o + (r.slashes || h(r.protocol) ? "//" : "");
                            return r.username && (i += r.username, r.password && (i += ":" + r.password), i += "@"), i += r.host + r.pathname, (t = "object" == typeof r.query ? e(r.query) : r.query) && (i += "?" !== t.charAt(0) ? "?" + t : t), r.hash && (i += r.hash), i
                        }
                    }, m.extractProtocol = f, m.location = d, m.trimLeft = u, m.qs = n, e.exports = m
                }
            },
            __webpack_module_cache__ = {};

        function __webpack_require__(e) {
            var t = __webpack_module_cache__[e];
            if (void 0 !== t) return t.exports;
            var r = __webpack_module_cache__[e] = {
                id: e,
                loaded: !1,
                exports: {}
            };
            return __webpack_modules__[e].call(r.exports, r, r.exports, __webpack_require__), r.loaded = !0, r.exports
        }
        __webpack_require__.amdO = {}, __webpack_require__.n = e => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, {
                a: t
            }), t
        }, __webpack_require__.d = (e, t) => {
            for (var r in t) __webpack_require__.o(t, r) && !__webpack_require__.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, __webpack_require__.g = function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), __webpack_require__.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, __webpack_require__.nmd = e => (e.paths = [], e.children || (e.children = []), e);
        var __webpack_exports__ = {};
        return (() => {
            "use strict";
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
                default: () => ys
            });
            var e = {};
            __webpack_require__.r(e), __webpack_require__.d(e, {
                acceptContactInvite: () => qt,
                acceptInvitation: () => Wt,
                addContact: () => Bt,
                addReaction: () => er,
                addToBlackList: () => Jt,
                addUsersToBlacklist: () => Vt,
                addUsersToBlocklist: () => Xt,
                declineContactInvite: () => Kt,
                declineInvitation: () => zt,
                deleteContact: () => Ft,
                deleteConversation: () => wt,
                deleteReaction: () => tr,
                deleteSession: () => Mt,
                fetchHistoryMessages: () => Lt,
                fetchUserInfoById: () => Pt,
                getBlacklist: () => Ot,
                getBlocklist: () => It,
                getChatToken: () => jt,
                getContacts: () => St,
                getConversationlist: () => bt,
                getHistoryMessages: () => Gt,
                getReactionDetail: () => nr,
                getReactionList: () => rr,
                getReactionlist: () => or,
                getRoster: () => Rt,
                getSessionList: () => At,
                recallMessage: () => Zt,
                removeFromBlackList: () => Yt,
                removeRoster: () => Ht,
                removeUserFromBlackList: () => $t,
                removeUserFromBlocklist: () => Qt,
                reportMessage: () => ir,
                updateCurrentUserNick: () => xt,
                updateOwnUserInfo: () => Ut,
                updateUserInfo: () => kt,
                uploadPushToken: () => Ct,
                uploadToken: () => Nt
            });
            var t = {};
            __webpack_require__.r(t), __webpack_require__.d(t, {
                acceptGroupInvite: () => Lr,
                acceptGroupJoinRequest: () => kr,
                addUsersToGroupAllowlist: () => po,
                addUsersToGroupWhitelist: () => lo,
                agreeInviteIntoGroup: () => jr,
                agreeJoinGroup: () => Ur,
                blockGroup: () => cr,
                blockGroupMember: () => Qr,
                blockGroupMembers: () => eo,
                blockGroupMessages: () => ur,
                changeGroupOwner: () => mr,
                changeOwner: () => fr,
                createGroup: () => ar,
                createGroupNew: () => sr,
                deleteGroupSharedFile: () => So,
                destroyGroup: () => Nr,
                disableSendGroupMsg: () => co,
                dissolveGroup: () => Sr,
                downloadGroupSharedFile: () => Ao,
                enableSendGroupMsg: () => uo,
                fetchGroupAnnouncement: () => Oo,
                fetchGroupSharedFileList: () => No,
                getGroup: () => dr,
                getGroupAdmin: () => _r,
                getGroupAllowlist: () => go,
                getGroupBlacklist: () => so,
                getGroupBlacklistNew: () => io,
                getGroupBlocklist: () => ao,
                getGroupInfo: () => yr,
                getGroupMsgReadUser: () => To,
                getGroupMuteList: () => Xr,
                getGroupMutelist: () => Yr,
                getGroupSharedFilelist: () => Co,
                getGroupWhitelist: () => yo,
                getJoinedGroups: () => hr,
                getMuted: () => Vr,
                getPublicGroups: () => pr,
                groupBlockMulti: () => Zr,
                groupBlockSingle: () => $r,
                inviteToGroup: () => br,
                inviteUsersToGroup: () => Mr,
                isGroupWhiteUser: () => vo,
                isInGroupAllowlist: () => _o,
                isInGroupWhiteList: () => Eo,
                joinGroup: () => wr,
                leaveGroup: () => Ar,
                listGroupMember: () => vr,
                listGroupMembers: () => Er,
                listGroups: () => lr,
                modifyGroup: () => gr,
                mute: () => qr,
                muteGroupMember: () => zr,
                quitGroup: () => Cr,
                rejectGroupInvite: () => Gr,
                rejectGroupJoinRequest: () => xr,
                rejectInviteIntoGroup: () => Dr,
                rejectJoinGroup: () => Pr,
                removeAdmin: () => Ir,
                removeGroupAdmin: () => Rr,
                removeGroupAllowlistMember: () => mo,
                removeGroupBlockMulti: () => oo,
                removeGroupBlockSingle: () => to,
                removeGroupMember: () => Hr,
                removeGroupMembers: () => Wr,
                removeGroupWhitelistMember: () => fo,
                removeMultiGroupMember: () => Fr,
                removeMute: () => Kr,
                removeSingleGroupMember: () => Br,
                rmUsersFromGroupWhitelist: () => ho,
                setAdmin: () => Tr,
                setGroupAdmin: () => Or,
                unblockGroupMember: () => ro,
                unblockGroupMembers: () => no,
                unmuteGroupMember: () => Jr,
                updateGroupAnnouncement: () => Io,
                uploadGroupSharedFile: () => Ro
            });
            var r = {};
            __webpack_require__.r(r), __webpack_require__.d(r, {
                addUsersToChatRoom: () => Do,
                addUsersToChatRoomAllowlist: () => fn,
                addUsersToChatRoomWhitelist: () => hn,
                blockChatRoomMember: () => en,
                blockChatRoomMembers: () => rn,
                chatRoomBlockMulti: () => tn,
                chatRoomBlockSingle: () => Zo,
                createChatRoom: () => Mo,
                deleteChatRoomSharedFile: () => Sn,
                destroyChatRoom: () => wo,
                disableSendChatRoomMsg: () => pn,
                enableSendChatRoomMsg: () => dn,
                fetchChatRoomAnnouncement: () => On,
                fetchChatRoomSharedFileList: () => Nn,
                getChatRoomAdmin: () => qo,
                getChatRoomAllowlist: () => En,
                getChatRoomBlacklist: () => un,
                getChatRoomBlacklistNew: () => cn,
                getChatRoomBlocklist: () => ln,
                getChatRoomDetails: () => Uo,
                getChatRoomMuteList: () => $o,
                getChatRoomMuted: () => Yo,
                getChatRoomMutelist: () => Qo,
                getChatRoomSharedFilelist: () => Cn,
                getChatRoomWhitelist: () => vn,
                getChatRooms: () => bo,
                isChatRoomWhiteUser: () => _n,
                isInChatRoomAllowlist: () => Tn,
                joinChatRoom: () => Go,
                leaveChatRoom: () => Ho,
                listChatRoomMember: () => Fo,
                listChatRoomMembers: () => Wo,
                modifyChatRoom: () => ko,
                muteChatRoomMember: () => Jo,
                quitChatRoom: () => Bo,
                removeChatRoomAdmin: () => Ko,
                removeChatRoomAllowlistMember: () => gn,
                removeChatRoomBlockMulti: () => sn,
                removeChatRoomBlockSingle: () => on,
                removeChatRoomMember: () => xo,
                removeChatRoomMembers: () => Lo,
                removeChatRoomWhitelistMember: () => yn,
                removeMultiChatRoomMember: () => jo,
                removeMuteChatRoomMember: () => Vo,
                removeSingleChatRoomMember: () => Po,
                rmUsersFromChatRoomWhitelist: () => mn,
                setChatRoomAdmin: () => zo,
                unblockChatRoomMember: () => nn,
                unblockChatRoomMembers: () => an,
                unmuteChatRoomMember: () => Xo,
                updateChatRoomAnnouncement: () => In,
                uploadChatRoomSharedFile: () => Rn
            });
            var o = {};
            __webpack_require__.r(o), __webpack_require__.d(o, {
                getPresenceStatus: () => kn,
                getSubscribedPresenceList: () => wn,
                getSubscribedPresencelist: () => Un,
                publishPresence: () => An,
                subscribePresence: () => bn,
                unsubscribePresence: () => Mn
            });
            var n = {};
            __webpack_require__.r(n), __webpack_require__.d(n, {
                clearRemindTypeForConversation: () => Ln,
                getPushPerformLanguage: () => Hn,
                getSilentModeForAll: () => xn,
                getSilentModeForConversation: () => Dn,
                getSilentModeForConversations: () => Gn,
                setPushPerformLanguage: () => Bn,
                setSilentModeForAll: () => Pn,
                setSilentModeForConversation: () => jn
            });
            var i = {};
            __webpack_require__.r(i), __webpack_require__.d(i, {
                changeChatThreadName: () => Vn,
                createChatThread: () => qn,
                destroyChatThread: () => Jn,
                getChatThreadDetail: () => ei,
                getChatThreadLastMessage: () => Zn,
                getChatThreadMembers: () => Xn,
                getChatThreads: () => Qn,
                getJoinedChatThreads: () => $n,
                joinChatThread: () => zn,
                leaveChatThread: () => Kn,
                removeChatThreadMember: () => Yn
            });
            var s = {};
            __webpack_require__.r(s), __webpack_require__.d(s, {
                getSupportedLanguages: () => ti,
                translateMessage: () => ri
            });
            var a = {};
            __webpack_require__.r(a), __webpack_require__.d(a, {
                acceptServerInvite: () => Si,
                addServerTags: () => yi,
                createServer: () => li,
                destroyServer: () => pi,
                getJoinedServers: () => Ei,
                getServerDetail: () => _i,
                getServerMembers: () => Ti,
                getServerRole: () => Ci,
                getServerTags: () => bi,
                getServers: () => vi,
                inviteUserToServer: () => Ri,
                isInServer: () => Ai,
                joinServer: () => hi,
                leaveServer: () => fi,
                rejectServerInvite: () => Ni,
                removeServerAdmin: () => Ii,
                removeServerMember: () => mi,
                removeServerTags: () => gi,
                setServerAdmin: () => Oi,
                updateServer: () => di
            });
            var c = {};
            __webpack_require__.r(c), __webpack_require__.d(c, {
                acceptChannelInvite: () => Ji,
                createChannel: () => ji,
                destroyChannel: () => Li,
                getChannelDetail: () => Gi,
                getChannelMembers: () => zi,
                getChannelMutelist: () => $i,
                getPublicChannels: () => qi,
                getVisiblePrivateChannels: () => Wi,
                inviteUserToChannel: () => Ki,
                isInChannel: () => Qi,
                joinChannel: () => Bi,
                leaveChannel: () => Hi,
                muteChannelMember: () => Xi,
                rejectChannelInvite: () => Vi,
                removeChannelMember: () => Fi,
                unmuteChannelMember: () => Yi,
                updateChannel: () => Di
            });
            var u = __webpack_require__(8e3),
                l = __webpack_require__.n(u),
                p = __webpack_require__(3281),
                d = __webpack_require__.n(p),
                h = __webpack_require__(3720),
                f = __webpack_require__.n(h);
            const m = function () {
                function e(e) {
                    this.type = e.type, this.message = e.message, this.data = e.data
                }
                return e.create = function (t) {
                    return new e(t)
                }, e
            }();
            var y;
            ! function (e) {
                e[e.REQUEST_SUCCESS = 0] = "REQUEST_SUCCESS", e[e.REQUEST_TIMEOUT = -1] = "REQUEST_TIMEOUT", e[e.REQUEST_UNKNOWN = -2] = "REQUEST_UNKNOWN", e[e.REQUEST_PARAMETER_ERROR = -3] = "REQUEST_PARAMETER_ERROR", e[e.REQUEST_ABORT = -4] = "REQUEST_ABORT", e[e.WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR = 0] = "WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR", e[e.WEBIM_CONNCTION_OPEN_ERROR = 1] = "WEBIM_CONNCTION_OPEN_ERROR", e[e.WEBIM_CONNCTION_AUTH_ERROR = 2] = "WEBIM_CONNCTION_AUTH_ERROR", e[e.WEBIM_CONNCTION_OPEN_USERGRID_ERROR = 3] = "WEBIM_CONNCTION_OPEN_USERGRID_ERROR", e[e.WEBIM_CONNCTION_ATTACH_ERROR = 4] = "WEBIM_CONNCTION_ATTACH_ERROR", e[e.WEBIM_CONNCTION_ATTACH_USERGRID_ERROR = 5] = "WEBIM_CONNCTION_ATTACH_USERGRID_ERROR", e[e.WEBIM_CONNCTION_REOPEN_ERROR = 6] = "WEBIM_CONNCTION_REOPEN_ERROR", e[e.WEBIM_CONNCTION_SERVER_CLOSE_ERROR = 7] = "WEBIM_CONNCTION_SERVER_CLOSE_ERROR", e[e.WEBIM_CONNCTION_SERVER_ERROR = 8] = "WEBIM_CONNCTION_SERVER_ERROR", e[e.WEBIM_CONNCTION_IQ_ERROR = 9] = "WEBIM_CONNCTION_IQ_ERROR", e[e.WEBIM_CONNCTION_PING_ERROR = 10] = "WEBIM_CONNCTION_PING_ERROR", e[e.WEBIM_CONNCTION_NOTIFYVERSION_ERROR = 11] = "WEBIM_CONNCTION_NOTIFYVERSION_ERROR", e[e.WEBIM_CONNCTION_GETROSTER_ERROR = 12] = "WEBIM_CONNCTION_GETROSTER_ERROR", e[e.WEBIM_CONNCTION_CROSSDOMAIN_ERROR = 13] = "WEBIM_CONNCTION_CROSSDOMAIN_ERROR", e[e.WEBIM_CONNCTION_LISTENING_OUTOF_MAXRETRIES = 14] = "WEBIM_CONNCTION_LISTENING_OUTOF_MAXRETRIES", e[e.WEBIM_CONNCTION_RECEIVEMSG_CONTENTERROR = 15] = "WEBIM_CONNCTION_RECEIVEMSG_CONTENTERROR", e[e.WEBIM_CONNCTION_DISCONNECTED = 16] = "WEBIM_CONNCTION_DISCONNECTED", e[e.WEBIM_CONNCTION_AJAX_ERROR = 17] = "WEBIM_CONNCTION_AJAX_ERROR", e[e.WEBIM_CONNCTION_JOINROOM_ERROR = 18] = "WEBIM_CONNCTION_JOINROOM_ERROR", e[e.WEBIM_CONNCTION_GETROOM_ERROR = 19] = "WEBIM_CONNCTION_GETROOM_ERROR", e[e.WEBIM_CONNCTION_GETROOMINFO_ERROR = 20] = "WEBIM_CONNCTION_GETROOMINFO_ERROR", e[e.WEBIM_CONNCTION_GETROOMMEMBER_ERROR = 21] = "WEBIM_CONNCTION_GETROOMMEMBER_ERROR", e[e.WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR = 22] = "WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR", e[e.WEBIM_CONNCTION_LOAD_CHATROOM_ERROR = 23] = "WEBIM_CONNCTION_LOAD_CHATROOM_ERROR", e[e.WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR = 24] = "WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR", e[e.WEBIM_CONNCTION_JOINCHATROOM_ERROR = 25] = "WEBIM_CONNCTION_JOINCHATROOM_ERROR", e[e.WEBIM_CONNCTION_QUITCHATROOM_ERROR = 26] = "WEBIM_CONNCTION_QUITCHATROOM_ERROR", e[e.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR = 27] = "WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR", e[e.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR = 28] = "WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR", e[e.WEBIM_CONNCTION_SESSIONID_NOT_ASSIGN_ERROR = 29] = "WEBIM_CONNCTION_SESSIONID_NOT_ASSIGN_ERROR", e[e.WEBIM_CONNCTION_RID_NOT_ASSIGN_ERROR = 30] = "WEBIM_CONNCTION_RID_NOT_ASSIGN_ERROR", e[e.WEBIM_CONNCTION_CALLBACK_INNER_ERROR = 31] = "WEBIM_CONNCTION_CALLBACK_INNER_ERROR", e[e.WEBIM_CONNCTION_CLIENT_OFFLINE = 32] = "WEBIM_CONNCTION_CLIENT_OFFLINE", e[e.WEBIM_CONNCTION_CLIENT_LOGOUT = 33] = "WEBIM_CONNCTION_CLIENT_LOGOUT", e[e.WEBIM_CONNCTION_CLIENT_TOO_MUCH_ERROR = 34] = "WEBIM_CONNCTION_CLIENT_TOO_MUCH_ERROR", e[e.WEBIM_CONNECTION_ACCEPT_INVITATION_FROM_GROUP = 35] = "WEBIM_CONNECTION_ACCEPT_INVITATION_FROM_GROUP", e[e.WEBIM_CONNECTION_DECLINE_INVITATION_FROM_GROUP = 36] = "WEBIM_CONNECTION_DECLINE_INVITATION_FROM_GROUP", e[e.WEBIM_CONNECTION_ACCEPT_JOIN_GROUP = 37] = "WEBIM_CONNECTION_ACCEPT_JOIN_GROUP", e[e.WEBIM_CONNECTION_DECLINE_JOIN_GROUP = 38] = "WEBIM_CONNECTION_DECLINE_JOIN_GROUP", e[e.WEBIM_CONNECTION_CLOSED = 39] = "WEBIM_CONNECTION_CLOSED", e[e.WEBIM_CONNECTION_ERROR = 40] = "WEBIM_CONNECTION_ERROR", e[e.MAX_LIMIT = 50] = "MAX_LIMIT", e[e.MESSAGE_NOT_FOUND = 51] = "MESSAGE_NOT_FOUND", e[e.NO_PERMISSION = 52] = "NO_PERMISSION", e[e.OPERATION_UNSUPPORTED = 53] = "OPERATION_UNSUPPORTED", e[e.NOT_EXIST = 54] = "NOT_EXIST", e[e.WEBIM_UPLOADFILE_BROWSER_ERROR = 100] = "WEBIM_UPLOADFILE_BROWSER_ERROR", e[e.WEBIM_UPLOADFILE_ERROR = 101] = "WEBIM_UPLOADFILE_ERROR", e[e.WEBIM_UPLOADFILE_NO_LOGIN = 102] = "WEBIM_UPLOADFILE_NO_LOGIN", e[e.WEBIM_UPLOADFILE_NO_FILE = 103] = "WEBIM_UPLOADFILE_NO_FILE", e[e.WEBIM_DOWNLOADFILE_ERROR = 200] = "WEBIM_DOWNLOADFILE_ERROR", e[e.WEBIM_DOWNLOADFILE_NO_LOGIN = 201] = "WEBIM_DOWNLOADFILE_NO_LOGIN", e[e.WEBIM_DOWNLOADFILE_BROWSER_ERROR = 202] = "WEBIM_DOWNLOADFILE_BROWSER_ERROR", e[e.USER_NOT_FOUND = 204] = "USER_NOT_FOUND", e[e.WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE = 206] = "WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE", e[e.WEBIM_CONNCTION_USER_REMOVED = 207] = "WEBIM_CONNCTION_USER_REMOVED", e[e.WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD = 216] = "WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD", e[e.WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE = 217] = "WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE", e[e.USER_MUTED_BY_ADMIN = 219] = "USER_MUTED_BY_ADMIN", e[e.USER_NOT_FRIEND = 221] = "USER_NOT_FRIEND", e[e.WEBIM_MESSAGE_REC_TEXT = 300] = "WEBIM_MESSAGE_REC_TEXT", e[e.WEBIM_MESSAGE_REC_TEXT_ERROR = 301] = "WEBIM_MESSAGE_REC_TEXT_ERROR", e[e.WEBIM_MESSAGE_REC_EMOTION = 302] = "WEBIM_MESSAGE_REC_EMOTION", e[e.WEBIM_MESSAGE_REC_PHOTO = 303] = "WEBIM_MESSAGE_REC_PHOTO", e[e.WEBIM_MESSAGE_REC_AUDIO = 304] = "WEBIM_MESSAGE_REC_AUDIO", e[e.WEBIM_MESSAGE_REC_AUDIO_FILE = 305] = "WEBIM_MESSAGE_REC_AUDIO_FILE", e[e.WEBIM_MESSAGE_REC_VEDIO = 306] = "WEBIM_MESSAGE_REC_VEDIO", e[e.WEBIM_MESSAGE_REC_VEDIO_FILE = 307] = "WEBIM_MESSAGE_REC_VEDIO_FILE", e[e.WEBIM_MESSAGE_REC_FILE = 308] = "WEBIM_MESSAGE_REC_FILE", e[e.WEBIM_MESSAGE_SED_TEXT = 309] = "WEBIM_MESSAGE_SED_TEXT", e[e.WEBIM_MESSAGE_SED_EMOTION = 310] = "WEBIM_MESSAGE_SED_EMOTION", e[e.WEBIM_MESSAGE_SED_PHOTO = 311] = "WEBIM_MESSAGE_SED_PHOTO", e[e.WEBIM_MESSAGE_SED_AUDIO = 312] = "WEBIM_MESSAGE_SED_AUDIO", e[e.WEBIM_MESSAGE_SED_AUDIO_FILE = 313] = "WEBIM_MESSAGE_SED_AUDIO_FILE", e[e.WEBIM_MESSAGE_SED_VEDIO = 314] = "WEBIM_MESSAGE_SED_VEDIO", e[e.WEBIM_MESSAGE_SED_VEDIO_FILE = 315] = "WEBIM_MESSAGE_SED_VEDIO_FILE", e[e.WEBIM_MESSAGE_SED_FILE = 316] = "WEBIM_MESSAGE_SED_FILE", e[e.WEBIM_MESSAGE_SED_ERROR = 317] = "WEBIM_MESSAGE_SED_ERROR", e[e.STATUS_INIT = 400] = "STATUS_INIT", e[e.STATUS_DOLOGIN_USERGRID = 401] = "STATUS_DOLOGIN_USERGRID", e[e.STATUS_DOLOGIN_IM = 402] = "STATUS_DOLOGIN_IM", e[e.STATUS_OPENED = 403] = "STATUS_OPENED", e[e.STATUS_CLOSING = 404] = "STATUS_CLOSING", e[e.STATUS_CLOSED = 405] = "STATUS_CLOSED", e[e.STATUS_ERROR = 406] = "STATUS_ERROR", e[e.SERVER_BUSY = 500] = "SERVER_BUSY", e[e.MESSAGE_INCLUDE_ILLEGAL_CONTENT = 501] = "MESSAGE_INCLUDE_ILLEGAL_CONTENT", e[e.MESSAGE_EXTERNAL_LOGIC_BLOCKED = 502] = "MESSAGE_EXTERNAL_LOGIC_BLOCKED", e[e.SERVER_UNKNOWN_ERROR = 503] = "SERVER_UNKNOWN_ERROR", e[e.MESSAGE_RECALL_TIME_LIMIT = 504] = "MESSAGE_RECALL_TIME_LIMIT", e[e.SERVICE_NOT_ENABLED = 505] = "SERVICE_NOT_ENABLED", e[e.SERVICE_NOT_ALLOW_MESSAGING = 506] = "SERVICE_NOT_ALLOW_MESSAGING", e[e.SERVICE_NOT_ALLOW_MESSAGING_MUTE = 507] = "SERVICE_NOT_ALLOW_MESSAGING_MUTE", e[e.MESSAGE_MODERATION_BLOCKED = 508] = "MESSAGE_MODERATION_BLOCKED", e[e.MESSAGE_CURRENT_LIMITING = 509] = "MESSAGE_CURRENT_LIMITING", e[e.GROUP_NOT_EXIST = 605] = "GROUP_NOT_EXIST", e[e.GROUP_NOT_JOINED = 602] = "GROUP_NOT_JOINED", e[e.GROUP_MEMBERS_FULL = 606] = "GROUP_MEMBERS_FULL", e[e.PERMISSION_DENIED = 603] = "PERMISSION_DENIED", e[e.WEBIM_LOAD_MSG_ERROR = 604] = "WEBIM_LOAD_MSG_ERROR", e[e.ALREADY_JOINED = 601] = "ALREADY_JOINED", e[e.GROUP_MEMBERS_LIMIT = 607] = "GROUP_MEMBERS_LIMIT", e[e.GROUP_IS_DISABLED = 608] = "GROUP_IS_DISABLED", e[e.REST_PARAMS_STATUS = 700] = "REST_PARAMS_STATUS", e[e.CHATROOM_NOT_JOINED = 702] = "CHATROOM_NOT_JOINED", e[e.CHATROOM_MEMBERS_FULL = 704] = "CHATROOM_MEMBERS_FULL", e[e.CHATROOM_NOT_EXIST = 705] = "CHATROOM_NOT_EXIST", e[e.SDK_RUNTIME_ERROR = 999] = "SDK_RUNTIME_ERROR", e[e.PRESENCE_PARAM_EXCEED = 1100] = "PRESENCE_PARAM_EXCEED", e[e.REACTION_ALREADY_ADDED = 1101] = "REACTION_ALREADY_ADDED", e[e.REACTION_CREATING = 1102] = "REACTION_CREATING", e[e.REACTION_OPERATION_IS_ILLEGAL = 1103] = "REACTION_OPERATION_IS_ILLEGAL", e[e.TRANSLATION_NOT_VALID = 1200] = "TRANSLATION_NOT_VALID", e[e.TRANSLATION_TEXT_TOO_LONG = 1201] = "TRANSLATION_TEXT_TOO_LONG", e[e.TRANSLATION_FAILED = 1204] = "TRANSLATION_FAILED", e[e.THREAD_NOT_EXIST = 1300] = "THREAD_NOT_EXIST", e[e.THREAD_ALREADY_EXIST = 1301] = "THREAD_ALREADY_EXIST"
            }(y || (y = {}));
            var g = function () {
                return g = Object.assign || function (e) {
                    for (var t, r = 1, o = arguments.length; r < o; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }, g.apply(this, arguments)
            };
            var v, E, _, T, O, I;
            ! function (e) {
                e[e.UNKNOWOPERATION = -1] = "UNKNOWOPERATION", e[e.REST_GET_SESSION_LIST = 1] = "REST_GET_SESSION_LIST", e[e.REST_DEL_SESSION = 2] = "REST_DEL_SESSION", e[e.REST_GET_HISTORY_MESSAGE = 3] = "REST_GET_HISTORY_MESSAGE", e[e.REST_OPERATE = 10] = "REST_OPERATE", e[e.MSYNC_SENDMESSAGE = 11] = "MSYNC_SENDMESSAGE", e[e.MSYNC_RECALLMESSAGE = 12] = "MSYNC_RECALLMESSAGE", e[e.MSYNC_OPERATE = 20] = "MSYNC_OPERATE", e[e.ROSTER_ADD = 21] = "ROSTER_ADD", e[e.ROSTER_REMOVE = 22] = "ROSTER_REMOVE", e[e.ROSTER_ACCEPT = 23] = "ROSTER_ACCEPT", e[e.ROSTER_DECLINE = 24] = "ROSTER_DECLINE", e[e.ROSTER_BAN = 25] = "ROSTER_BAN", e[e.ROSTER_ALLOW = 26] = "ROSTER_ALLOW", e[e.ROSTER_BLACKLIST = 27] = "ROSTER_BLACKLIST", e[e.ROSTER_CONTACTS = 28] = "ROSTER_CONTACTS", e[e.ROSTER_OPERATE = 30] = "ROSTER_OPERATE", e[e.USER_LOGIN = 31] = "USER_LOGIN", e[e.USER_CREATE = 32] = "USER_CREATE", e[e.USER_UPDATE_USERINFO = 33] = "USER_UPDATE_USERINFO", e[e.USER_FETCH_USERINFO = 34] = "USER_FETCH_USERINFO", e[e.USER_UPDATE_NICK = 35] = "USER_UPDATE_NICK", e[e.USER_UPLOAD_PUSH_TOKEN = 36] = "USER_UPLOAD_PUSH_TOKEN", e[e.USER_OPERATE = 40] = "USER_OPERATE", e[e.GROUP_CREATEGROUP = 41] = "GROUP_CREATEGROUP", e[e.GROUP_BLOCK_MESSAGE = 42] = "GROUP_BLOCK_MESSAGE", e[e.GROUP_FETCH_PUBLICGROUPS_WITHCURSOR = 43] = "GROUP_FETCH_PUBLICGROUPS_WITHCURSOR", e[e.GROUP_FETCH_USERS_GROUP = 44] = "GROUP_FETCH_USERS_GROUP", e[e.GROUP_CHANGE_OWNER = 45] = "GROUP_CHANGE_OWNER", e[e.GROUP_FETCH_SPECIFICATION = 46] = "GROUP_FETCH_SPECIFICATION", e[e.GROUP_CHANGE_GROUPATTRIBUTE = 47] = "GROUP_CHANGE_GROUPATTRIBUTE", e[e.GROUP_FETCH_MEMEBERS = 48] = "GROUP_FETCH_MEMEBERS", e[e.GROUP_GET_ADMIN = 49] = "GROUP_GET_ADMIN", e[e.GROUP_SET_ADMIN = 50] = "GROUP_SET_ADMIN", e[e.GROUP_REMOVE_ADMIN = 51] = "GROUP_REMOVE_ADMIN", e[e.GROUP_DESTOTYGROUP = 52] = "GROUP_DESTOTYGROUP", e[e.GROUP_LEAVEGROUP = 53] = "GROUP_LEAVEGROUP", e[e.GROUP_INVITE_TO_GROUP = 54] = "GROUP_INVITE_TO_GROUP", e[e.GROUP_JOIN_PUBLICGROUP = 55] = "GROUP_JOIN_PUBLICGROUP", e[e.GROUP_ACCEPT_JOINPUBLICGROUPAPPL = 56] = "GROUP_ACCEPT_JOINPUBLICGROUPAPPL", e[e.GROUP_DECLINE_JOINPUBLICGROUPAPPL = 57] = "GROUP_DECLINE_JOINPUBLICGROUPAPPL", e[e.GROUP_ACCEPT_INVITATION = 58] = "GROUP_ACCEPT_INVITATION", e[e.GROUP_DECLINE_INVITATION = 59] = "GROUP_DECLINE_INVITATION", e[e.GROUP_REMOVE_MEMBER = 60] = "GROUP_REMOVE_MEMBER", e[e.GROUP_REMOVE_MEMBERS = 61] = "GROUP_REMOVE_MEMBERS", e[e.GROUP_MUTE_MEMBERS = 62] = "GROUP_MUTE_MEMBERS", e[e.GROUP_UNMUTE_MEMBERS = 63] = "GROUP_UNMUTE_MEMBERS", e[e.GROUP_FETCH_MUTES = 64] = "GROUP_FETCH_MUTES", e[e.GROUP_BLOCK_MEMBER = 65] = "GROUP_BLOCK_MEMBER", e[e.GROUP_BLOCK_MEMBERS = 66] = "GROUP_BLOCK_MEMBERS", e[e.GROUP_UNBLOCK_MEMBER = 67] = "GROUP_UNBLOCK_MEMBER", e[e.GROUP_UNBLOCK_MEMBERS = 68] = "GROUP_UNBLOCK_MEMBERS", e[e.GROUP_GET_BLOCK_LIST = 69] = "GROUP_GET_BLOCK_LIST", e[e.GROUP_MUTE_ALLMEMBERS = 70] = "GROUP_MUTE_ALLMEMBERS", e[e.GROUP_UNMUTE_ALLMEMBERS = 71] = "GROUP_UNMUTE_ALLMEMBERS", e[e.GROUP_ADD_WHITELIST = 72] = "GROUP_ADD_WHITELIST", e[e.GROUP_REMOVE_WHITELIST = 73] = "GROUP_REMOVE_WHITELIST", e[e.GROUP_FETCH_WHITELIST = 74] = "GROUP_FETCH_WHITELIST", e[e.GROUP_IS_IN_WHITELIST = 75] = "GROUP_IS_IN_WHITELIST", e[e.GROUP_GET_READ_USERS = 76] = "GROUP_GET_READ_USERS", e[e.GROUP_FETCH_ANNOUNCEMENT = 77] = "GROUP_FETCH_ANNOUNCEMENT", e[e.GROUP_UPDATE_ANNOUNCEMENT = 78] = "GROUP_UPDATE_ANNOUNCEMENT", e[e.GROUP_UPLOAD_SHAREDFILE = 79] = "GROUP_UPLOAD_SHAREDFILE", e[e.GROUP_DELETE_SHAREDFILE = 80] = "GROUP_DELETE_SHAREDFILE", e[e.GROUP_FETCH_SHAREDFILE = 81] = "GROUP_FETCH_SHAREDFILE", e[e.GROUP_DOWNLOAD_SHAREDFILE = 82] = "GROUP_DOWNLOAD_SHAREDFILE", e[e.GROUP_OPERATE = 100] = "GROUP_OPERATE", e[e.CHATROOM_FETCH_CHATROOMSWITHPAGE = 101] = "CHATROOM_FETCH_CHATROOMSWITHPAGE", e[e.CHATROOM_CREATECHATROOM = 102] = "CHATROOM_CREATECHATROOM", e[e.CHATROOM_DESTORYCHATROOM = 103] = "CHATROOM_DESTORYCHATROOM", e[e.CHATROOM_FETCH_SPECIFICATION = 104] = "CHATROOM_FETCH_SPECIFICATION", e[e.CHATROOM_CHANGE_ATTRIBUTE = 105] = "CHATROOM_CHANGE_ATTRIBUTE", e[e.CHATROOM_REMOVE_MEMBER = 106] = "CHATROOM_REMOVE_MEMBER", e[e.CHATROOM_REMOVE_MEMBERS = 107] = "CHATROOM_REMOVE_MEMBERS", e[e.CHATROOM_ADD_MEMBERS = 108] = "CHATROOM_ADD_MEMBERS", e[e.CHATROOM_JOINCAHTROOM = 109] = "CHATROOM_JOINCAHTROOM", e[e.CHATROOM_LEAVECAHTROOM = 110] = "CHATROOM_LEAVECAHTROOM", e[e.CHATROOM_FETCH_MEMBERS = 111] = "CHATROOM_FETCH_MEMBERS", e[e.CHATROOM_GET_ADMIN = 112] = "CHATROOM_GET_ADMIN", e[e.CHATROOM_SET_ADMIN = 113] = "CHATROOM_SET_ADMIN", e[e.CHATROOM_REMOVE_ADMIN = 114] = "CHATROOM_REMOVE_ADMIN", e[e.CHATROOM_MUTE_USER = 115] = "CHATROOM_MUTE_USER", e[e.CHATROOM_UNMUTE_USER = 116] = "CHATROOM_UNMUTE_USER", e[e.CHATROOM_FETCH_MUTES = 117] = "CHATROOM_FETCH_MUTES", e[e.CHATROOM_BLOCK_USER = 118] = "CHATROOM_BLOCK_USER", e[e.CHATROOM_BLOCK_USERS = 119] = "CHATROOM_BLOCK_USERS", e[e.CHATROOM_UNBLOCK_USER = 120] = "CHATROOM_UNBLOCK_USER", e[e.CHATROOM_UNBLOCK_USERS = 121] = "CHATROOM_UNBLOCK_USERS", e[e.CHATROOM_FETCH_BANS = 122] = "CHATROOM_FETCH_BANS", e[e.CHATROOM_MUTE_ALLMEMEBERS = 123] = "CHATROOM_MUTE_ALLMEMEBERS", e[e.CHATROOM_UNMUTE_ALLMEMEBERS = 124] = "CHATROOM_UNMUTE_ALLMEMEBERS", e[e.CHATROOM_ADD_WHITELIST = 125] = "CHATROOM_ADD_WHITELIST", e[e.CHATROOM_REMOVE_WHITELIST = 126] = "CHATROOM_REMOVE_WHITELIST", e[e.CHATROOM_FETCH_WHITELIST = 127] = "CHATROOM_FETCH_WHITELIST", e[e.CHATROOM_FETCH_MEMBERIN_WHITELIST = 128] = "CHATROOM_FETCH_MEMBERIN_WHITELIST", e[e.CHATROOM_FETCH_ANNOUNCEMENT = 129] = "CHATROOM_FETCH_ANNOUNCEMENT", e[e.CHATROOM_UPDATE_ANNOUNCEMENT = 130] = "CHATROOM_UPDATE_ANNOUNCEMENT", e[e.CHATROOM_REMOVE_SHARE_FILE = 131] = "CHATROOM_REMOVE_SHARE_FILE", e[e.CHATROOM_GET_SHARE_FILE_LIST = 132] = "CHATROOM_GET_SHARE_FILE_LIST", e[e.CHATROOM_UPLOAD_FILE = 133] = "CHATROOM_UPLOAD_FILE", e[e.CHATROOM_OPERATE = 150] = "CHATROOM_OPERATE"
            }(v || (v = {})),
            function (e) {
                e.SDK_INTERNAL = "SDK_INTERNAL", e.LOGIN = "USER_LOGIN", e.REGISTER = "USER_CREATE", e.GET_CHATROOM_LIST = "CHATROOM_FETCH_CHATROOMSWITHPAGE", e.CREATE_CHATROOM = "CHATROOM_CREATECHATROOM", e.DESTROY_CHATROOM = "CHATROOM_DESTORYCHATROOM", e.GET_CHATROOM_DETAIL = "CHATROOM_FETCH_SPECIFICATION", e.MODIFY_CHATROOM = "CHATROOM_CHANGE_ATTRIBUTE", e.REMOVE_CHATROOM_MEMBER = "CHATROOM_REMOVE_MEMBER", e.MULTI_REMOVE_CHATROOM_MEMBER = "CHATROOM_REMOVE_MEMBERS", e.ADD_USERS_TO_CHATROOM = "CHATROOM_ADD_MEMBERS", e.JOIN_CHATROOM = "CHATROOM_JOINCAHTROOM", e.QUIT_CHATROOM = "CHATROOM_LEAVECAHTROOM", e.LIST_CHATROOM_MEMBERS = "CHATROOM_FETCH_MEMBERS", e.GET_CHATROOM_ADMIN = "CHATROOM_GET_ADMIN", e.SET_CHATROOM_ADMIN = "CHATROOM_SET_ADMIN", e.REMOVE_CHATROOM_ADMIN = "CHATROOM_REMOVE_ADMIN", e.MUTE_CHATROOM_MEMBER = "CHATROOM_MUTE_USER", e.REMOVE_MUTE_CHATROOM_MEMBER = "CHATROOM_UNMUTE_USER", e.GET_MUTE_CHATROOM_MEMBERS = "CHATROOM_FETCH_MUTES", e.SET_CHATROOM_MEMBER_TO_BLACK = "CHATROOM_BLOCK_USER", e.MULTI_SET_CHATROOM_MEMBER_TO_BLACK = "CHATROOM_BLOCK_USERS", e.REMOVE_CHATROOM_MEMBER_BLACK = "CHATROOM_UNBLOCK_USER", e.MULTI_REMOVE_CHATROOM_MEMBER_BLACK = "CHATROOM_UNBLOCK_USERS", e.GET_CHATROOM_BLOCK_MEMBERS = "CHATROOM_FETCH_BANS", e.DISABLED_CHATROOM_SEND_MSG = "CHATROOM_MUTE_ALLMEMEBERS", e.ENABLE_CHATROOM_SEND_MSG = "CHATROOM_UNMUTE_ALLMEMEBERS", e.ADD_CHATROOM_WHITE_USERS = "CHATROOM_ADD_WHITELIST", e.REMOVE_CHATROOM_WHITE_USERS = "CHATROOM_REMOVE_WHITELIST", e.GET_CHATROOM_WHITE_USERS = "CHATROOM_FETCH_WHITELIST", e.CHECK_CHATROOM_WHITE_USER = "CHATROOM_FETCH_MEMBERIN_WHITELIST", e.GET_CHATROOM_ANN = "CHATROOM_FETCH_ANNOUNCEMENT", e.UPDATE_CHATROOM_ANN = "CHATROOM_UPDATE_ANNOUNCEMENT", e.DELETE_CHATROOM_FILE = "CHATROOM_REMOVE_SHARE_FILE", e.GET_CHATROOM_FILES = "CHATROOM_GET_SHARE_FILE_LIST", e.UPLOAD_CHATROOM_FILE = "CHATROOM_UPLOAD_FILE", e.CREATE_GROUP = "GROUP_CREATEGROUP", e.BLOCK_GROUP = "GROUP_BLOCK_MESSAGE", e.LIST_GROUP = "GROUP_FETCH_PUBLICGROUPS_WITHCURSOR", e.GET_USER_GROUP = "GROUP_FETCH_USERS_GROUP", e.CHANGE_OWNER = "GROUP_CHANGE_OWNER", e.GET_GROUP_INFO = "GROUP_FETCH_SPECIFICATION", e.MODIFY_GROUP = "GROUP_CHANGE_GROUPATTRIBUTE", e.LIST_GROUP_MEMBER = "GROUP_FETCH_MEMEBERS", e.GET_GROUP_ADMIN = "GROUP_GET_ADMIN", e.SET_GROUP_ADMIN = "GROUP_SET_ADMIN", e.REMOVE_GROUP_ADMIN = "GROUP_REMOVE_ADMIN", e.DISSOLVE_GROUP = "GROUP_DESTOTYGROUP", e.QUIT_GROUP = "GROUP_LEAVEGROUP", e.INVITE_TO_GROUP = "GROUP_INVITE_TO_GROUP", e.JOIN_GROUP = "GROUP_JOIN_PUBLICGROUP", e.AGREE_JOIN_GROUP = "GROUP_ACCEPT_JOINPUBLICGROUPAPPL", e.REJECT_JOIN_GROUP = "GROUP_DECLINE_JOINPUBLICGROUPAPPL", e.AGREE_INVITE_GROUP = "GROUP_ACCEPT_INVITATION", e.REJECT_INVITE_GROUP = "GROUP_DECLINE_INVITATION", e.REMOVE_GROUP_MEMBER = "GROUP_REMOVE_MEMBER", e.MULTI_REMOVE_GROUP_MEMBER = "GROUP_REMOVE_MEMBERS", e.MUTE_GROUP_MEMBER = "GROUP_MUTE_MEMBERS", e.UNMUTE_GROUP_MEMBER = "GROUP_UNMUTE_MEMBERS", e.GET_GROUP_MUTE_LIST = "GROUP_FETCH_MUTES", e.BLOCK_GROUP_MEMBER = "GROUP_BLOCK_MEMBER", e.BLOCK_GROUP_MEMBERS = "GROUP_BLOCK_MEMBERS", e.UNBLOCK_GROUP_MEMBER = "GROUP_UNBLOCK_MEMBER", e.UNBLOCK_GROUP_MEMBERS = "GROUP_UNBLOCK_MEMBERS", e.GET_GROUP_BLACK_LIST = "GROUP_GET_BLOCK_LIST", e.DISABLED_SEND_GROUP_MSG = "GROUP_MUTE_ALLMEMBERS", e.ENABLE_SEND_GROUP_MSG = "GROUP_UNMUTE_ALLMEMBERS", e.ADD_USERS_TO_GROUP_WHITE = "GROUP_ADD_WHITELIST", e.REMOVE_GROUP_WHITE_MEMBER = "GROUP_REMOVE_WHITELIST", e.GET_GROUP_WHITE_LIST = "GROUP_FETCH_WHITELIST", e.IS_IN_GROUP_WHITE_LIST = "GROUP_IS_IN_WHITELIST", e.GET_GROUP_MSG_READ_USER = "GROUP_GET_READ_USERS", e.GET_GROUP_ANN = "GROUP_FETCH_ANNOUNCEMENT", e.UPDATE_GROUP_ANN = "GROUP_UPDATE_ANNOUNCEMENT", e.UPLOAD_GROUP_FILE = "GROUP_UPLOAD_SHAREDFILE", e.DELETE_GROUP_FILE = "GROUP_DELETE_SHAREDFILE", e.GET_GROUP_FILE_LIST = "GROUP_FETCH_SHAREDFILE", e.DOWN_GROUP_FILE = "GROUP_DOWNLOAD_SHAREDFILE", e.GET_SESSION_LIST = "REST_GET_SESSION_LIST", e.DELETE_SESSION = "REST_DEL_SESSION", e.GET_HISTORY_MSG = "REST_GET_HISTORY_MESSAGE", e.UPDATE_USER_INFO = "USER_UPDATE_USERINFO", e.GET_USER_INFO = "USER_FETCH_USERINFO", e.UPDATE_USER_NICK = "USER_UPDATE_NICK", e.UPLOAD_PUSH_TOKEN = "USER_UPLOAD_PUSH_TOKEN", e.GET_BLACK_LIST = "ROSTER_BLACKLIST", e.GET_CONTACTS = "ROSTER_CONTACTS", e.add = "ROSTER_ADD", e.remove = "ROSTER_REMOVE", e.accept = "ROSTER_ACCEPT", e.decline = "ROSTER_DECLINE", e.ban = "ROSTER_BAN", e.allow = "ROSTER_ALLOW", e.SEND_MSG = "MSYNC_SENDMESSAGE", e.UPLOAD_MSG_ATTACH = "UPLOAD_MSG_ATTACH", e.SEND_RECALL_MSG = "MSYNC_RECALLMESSAGE"
            }(E || (E = {})),
            function (e) {
                e.GET_DNS = "REST_DNSLIST", e.LOGIN_BY_AGORA_TOKEN = "LOGIN_BY_AGORA_TOKEN", e.LOGIN_BY_PWD = "LOGIN_BY_PWD", e.RESISTER = "REGISTER"
            }(_ || (_ = {})),
            function (e) {
                e[e["5G"] = 7] = "5G", e[e["4G"] = 7] = "4G", e[e["3G"] = 7] = "3G", e[e["2G"] = 7] = "2G", e[e["SLOW-2G"] = 7] = "SLOW-2G", e[e.WIFI = 2] = "WIFI", e[e.LAN = 1] = "LAN", e[e.DISCONNECTED = 0] = "DISCONNECTED", e[e.NONE = 0] = "NONE", e[e.UNKNOWN = -1] = "UNKNOWN", e[e["WEBIM UNABLE TO GET"] = -2] = "WEBIM UNABLE TO GET"
            }(T || (T = {})),
            function (e) {
                e[e.success = 200] = "success", e[e.failed = 500] = "failed"
            }(O || (O = {})),
            function (e) {
                e[e.web = 0] = "web", e[e.native = 1] = "native"
            }(I || (I = {}));
            var R = {
                    biz: "",
                    debug: !1,
                    token: ""
                },
                S = "https://data-reporting.agora.io/report",
                N = "https://data-reporting.sh.agoralab.co/report",
                C = new Map,
                A = new Map,
                b = 1e3,
                M = 9675,
                w = function (e) {
                    var t = Number(v[e]);
                    return t === v.USER_LOGIN ? "MANUALLOGIN" : t === v.MSYNC_SENDMESSAGE ? "SENDMESSAGE" : t > v.UNKNOWOPERATION && t < v.REST_OPERATE ? "REST" : t > v.REST_OPERATE && t < v.MSYNC_OPERATE ? "MESSAGE" : t > v.MSYNC_OPERATE && t < v.ROSTER_OPERATE ? "ROSTER" : t > v.ROSTER_OPERATE && t < v.USER_OPERATE ? "USER" : t > v.USER_OPERATE && t < v.GROUP_OPERATE ? "GROUP" : t > v.GROUP_OPERATE && t < v.CHATROOM_OPERATE ? "CHATROOM" : "OPERATION"
                },
                U = function () {
                    return (new Date).getTime()
                },
                k = function (e) {
                    return [Q.BAIDU, Q.WX, Q.DD, Q.ZFB, Q.TT, Q.QUICK_APP, Q.UNI].includes(e.platform)
                },
                P = function () {
                    return e = 1, t = 99999, e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e)) + e;
                    var e, t
                },
                x = {},
                j = function () {
                    function e(e) {
                        this.eventQueue = [], this.stock = 1e3, this.config = e, this.governor()
                    }
                    return e.prototype.add = function (e) {
                        this.stock <= 0 ? console.warn("Event Report limit 1000 per minute") : (this.eventQueue.push(e), this.consume(), this.stock -= 1)
                    }, e.prototype.consume = function () {
                        var e = this;
                        0 !== this.eventQueue.length && (this.timer && this.eventQueue.length <= 10 && clearTimeout(this.timer), this.timer = setTimeout((function () {
                            var t, r = e.eventQueue.splice(0, 10),
                                o = r.filter((function (e) {
                                    return e.appId === r[0].appId
                                })),
                                n = r.filter((function (e) {
                                    return e.appId !== r[0].appId
                                }));
                            (t = e.eventQueue).unshift.apply(t, n), e.batchSend(o)
                        }), 1e3))
                    }, e.prototype.governor = function () {
                        var e = this,
                            t = setInterval((function () {
                                e.stock = 1e3
                            }), 6e4);
                        addEventListener("beforeunload", (function () {
                            clearInterval(t)
                        }))
                    }, e.prototype.batchSend = function (e) {
                        var t, r;
                        if (void 0 === e && (e = []), 0 !== e.length) try {
                            var o = e.map((function (e) {
                                e.biz, e.appId;
                                var t = e.eventId,
                                    r = function (e, t) {
                                        var r = {};
                                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
                                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                            var n = 0;
                                            for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]])
                                        }
                                        return r
                                    }(e, ["biz", "appId", "eventId"]);
                                return {
                                    eventId: Number(t),
                                    body: r
                                }
                            }));
                            ! function (e, t) {
                                try {
                                    var r = t.biz,
                                        o = t.appId,
                                        n = t.data,
                                        i = t.debug,
                                        s = t.onSuccess;
                                    if (!r) throw new Error("biz is not defined");
                                    x.global || (x = ae.getEnvInfo());
                                    var a = x;
                                    if (k(a)) {
                                        var c = {
                                                url: i ? N : S,
                                                data: n,
                                                method: "POST",
                                                success: function () {
                                                    null == s || s()
                                                },
                                                fail: function () {},
                                                complete: function () {}
                                            },
                                            u = {
                                                token: e,
                                                appid: null != o ? o : "",
                                                sendts: "" + Math.floor((new Date).getTime() / 1e3),
                                                biz: r,
                                                debug: "" + i
                                            };
                                        if ("zfb" === a.platform || "dd" === a.platform ? c.headers = u : c.header = u, "dd" === a.platform) return a.global.httpRequest(c);
                                        a.global.request(c)
                                    } else {
                                        var l = new XMLHttpRequest;
                                        l.onreadystatechange = function () {
                                            2 === l.readyState && (null == s || s())
                                        }, l.open("POST", i ? N : S), l.setRequestHeader("Content-Type", "application/json"), l.setRequestHeader("token", e), l.setRequestHeader("appid", null != o ? o : ""), l.setRequestHeader("sendts", "" + Math.floor((new Date).getTime() / 1e3)), l.setRequestHeader("biz", r), l.setRequestHeader("debug", "" + i), l.send(JSON.stringify(n))
                                    }
                                } catch (e) {
                                    console.error(e)
                                }
                            }(this.config.token, {
                                biz: null === (t = e[0]) || void 0 === t ? void 0 : t.biz,
                                appId: null === (r = e[0]) || void 0 === r ? void 0 : r.appId,
                                data: o,
                                debug: this.config.debug,
                                onSuccess: this.consume.bind(this)
                            })
                        } catch (e) {
                            console.error(e)
                        }
                    }, e
                }(),
                L = function () {
                    return L = Object.assign || function (e) {
                        for (var t, r = 1, o = arguments.length; r < o; r++)
                            for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e
                    }, L.apply(this, arguments)
                },
                D = new(function () {
                    function e(e) {
                        this.inited = !1, this.appId = "", this.biz = "", this.eventQueue = {}, this.config = R, e && this.init(e)
                    }
                    return e.prototype.init = function (e) {
                        var t;
                        if (void 0 === e && (e = {}), !e.biz || !e.token) throw new Error("Event Report: biz or token is not defined");
                        try {
                            this.appId = null !== (t = e.appId) && void 0 !== t ? t : "", this.biz = e.biz, this.config = L(L({}, R), e), this.eventQueue = new j(this.config), this.log(e), this.inited = !0
                        } catch (e) {
                            console.error(e)
                        }
                    }, e.prototype.send = function (e, t, r) {
                        var o;
                        if (void 0 === t && (t = {}), this.inited) {
                            var n = L(L({}, t), {
                                eventId: Number(e),
                                biz: this.biz,
                                appId: null !== (o = null == r ? void 0 : r.appId) && void 0 !== o ? o : this.appId
                            });
                            this.eventQueue.add(n), this.log(n)
                        } else console.error("Event Report: init is not called")
                    }, e.prototype.log = function (e) {
                        try {
                            if (this.config.debug) {
                                var t = e.payload,
                                    r = function (e, t) {
                                        var r = {};
                                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
                                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                            var n = 0;
                                            for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]])
                                        }
                                        return r
                                    }(e, ["payload"]);
                                console.log("%c Event Report: " + this.config.biz + " ", "background: #8A97FC; color: #fff"), console.table(r), t && (console.info("payload:"), console.table(t))
                            }
                        } catch (e) {
                            console.error(e)
                        }
                    }, e
                }()),
                G = function () {
                    return G = Object.assign || function (e) {
                        for (var t, r = 1, o = arguments.length; r < o; r++)
                            for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e
                    }, G.apply(this, arguments)
                },
                B = {
                    requestName: "",
                    subrequestid: "1",
                    requestMethod: "GET",
                    requestUrl: "",
                    requestElapse: 0,
                    code: 0,
                    codeDesc: "",
                    isLastApi: 0,
                    isSuccess: 1
                };
            const H = function () {
                function e(e) {
                    this.platform = ae.getEnvInfo(), this.isReportDt = e.isReport || !1, this.isCollectDt = !0, k(this.platform) && !this.isReportDt && (this.isCollectDt = !1), this.eventQueue = [], this.accessChannel = "direct", this.options = function (e, t) {
                        t.platform || (t = ae.getEnvInfo());
                        var r = e.org,
                            o = e.appkey,
                            n = e.deviceId,
                            i = e.sdkVersion,
                            s = (null === navigator || void 0 === navigator ? void 0 : navigator.userAgent) || t.platform + "_mini_program";
                        return {
                            org: r,
                            appkey: o,
                            deviceId: n,
                            sdkServiceId: "sid_" + ae.getUniqueId() + "_" + P(),
                            did: s,
                            sdkVersion: i,
                            os: 7,
                            sdkProduct: I.web
                        }
                    }(e, this.platform), this.sid = this.options.sdkServiceId, this.init(e)
                }
                return e.getInstance = function () {
                    return e.instance
                }, e.prototype.getServiceId = function () {
                    return this.sid || "sid_0"
                }, e.prototype.setIsReportDt = function (e) {
                    this.isReportDt = e, e && this.rptEventQueue()
                }, e.prototype.setIsCollectDt = function (e) {
                    this.isCollectDt = e, e || (this.eventQueue = [])
                }, e.prototype.rptEventQueue = function () {
                    var e = this;
                    this.eventQueue.length && this.eventQueue.forEach((function (t, r) {
                        D.send(t.eventId, t.dt), r >= e.eventQueue.length - 1 && (e.eventQueue = [])
                    }))
                }, e.prototype.init = function (t) {
                    e.instance || (e.instance = this, D.init({
                        biz: "im",
                        token: "32f24ab2ddb74f508aa9286c356cec84",
                        appId: t.appkey,
                        debug: !1
                    }), this.reportInit())
                }, e.prototype.reportInit = function () {
                    if (this.isCollectDt) {
                        var e = this.options,
                            t = e.did,
                            r = e.os,
                            o = e.sdkVersion,
                            n = e.deviceId;
                        this.reportData(9674, {
                            did: t,
                            os: r,
                            sdkVersion: o,
                            deviceId: n
                        })
                    }
                }, e.prototype.geOperateFun = function (e) {
                    var t = this;
                    if (!this.isCollectDt) return function () {};
                    var r = 1,
                        o = 0,
                        n = "",
                        i = U(),
                        s = e.uid,
                        a = e.operationName;
                    s && (this.uid = s);
                    var c = {
                        uid: this.uid,
                        operationId: "opr_" + ae.getUniqueId() + "_" + P(),
                        requestid: "req_" + ae.getUniqueId() + "_" + P(),
                        operationName: a
                    };
                    return function (e) {
                        var s, u, l, p;
                        if (e.data.isSuccess ? (o = 0, n = "") : (0 === e.data.code && (e.data.code = -1), o = null !== (s = e.data.code) && void 0 !== s ? s : o, n = null !== (u = e.data.codeDesc) && void 0 !== u ? u : n), (null === (l = e.data) || void 0 === l ? void 0 : l.accessChannel) && (t.accessChannel = null === (p = e.data) || void 0 === p ? void 0 : p.accessChannel), e.isRetry ? (r++, e.data.subrequestid = "" + r) : (c.requestid = "req_" + ae.getUniqueId() + "_" + P(), r = 1), e.data.isLastApi) {
                            var d = U();
                            e.data.requestElapse = d - i, e.data.requestMethod = "", e.data.subrequestid = "0", e.data.code = 200 === o ? 0 : o, e.data.codeDesc = n
                        } else e.data.requestName || (e.data.requestName = a);
                        e.data.requestElapse || (e.data.requestElapse = U() - i), t.reportData.call(t, M, G(G(G(G({}, B), c), e.data), {
                            accessChannel: t.accessChannel,
                            operationType: w(a)
                        })), e.isEndApi && t.reportData.call(t, M, G(G(G({}, c), B), {
                            isSuccess: e.data.isSuccess,
                            isLastApi: 1,
                            subrequestid: "0",
                            requestMethod: "",
                            code: 200 === o ? 0 : o,
                            codeDesc: n,
                            requestElapse: e.data.requestElapse,
                            accessChannel: t.accessChannel,
                            operationType: w(a)
                        }))
                    }
                }, e.prototype.reportData = function (e, t) {
                    return r = this, o = void 0, i = function () {
                        var r, o, n, i, s, a, c, u;
                        return function (e, t) {
                            var r, o, n, i, s = {
                                label: 0,
                                sent: function () {
                                    if (1 & n[0]) throw n[1];
                                    return n[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: a(0),
                                throw: a(1),
                                return: a(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                                return this
                            }), i;

                            function a(i) {
                                return function (a) {
                                    return function (i) {
                                        if (r) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (r = 1, o && (n = 2 & i[0] ? o.return : i[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, i[1])).done) return n;
                                            switch (o = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    n = i;
                                                    break;
                                                case 4:
                                                    return s.label++, {
                                                        value: i[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    s.label++, o = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((n = (n = s.trys).length > 0 && n[n.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                        s = 0;
                                                        continue
                                                    }
                                                    if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                                                        s.label = i[1];
                                                        break
                                                    }
                                                    if (6 === i[0] && s.label < n[1]) {
                                                        s.label = n[1], n = i;
                                                        break
                                                    }
                                                    if (n && s.label < n[2]) {
                                                        s.label = n[2], s.ops.push(i);
                                                        break
                                                    }
                                                    n[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, s)
                                        } catch (e) {
                                            i = [6, e], o = 0
                                        } finally {
                                            r = n = 0
                                        }
                                        if (5 & i[0]) throw i[1];
                                        return {
                                            value: i[0] ? i[1] : void 0,
                                            done: !0
                                        }
                                    }([i, a])
                                }
                            }
                        }(this, (function (l) {
                            switch (l.label) {
                                case 0:
                                    return l.trys.push([0, 3, , 4]), r = U(), o = 0, e !== M ? [3, 2] : [4, (p = this.platform, new Promise((function (e) {
                                        var t;
                                        p.platform || (p = ae.getEnvInfo());
                                        var r = "";
                                        if (p.platform === Q.WEB) {
                                            var o = navigator.connection;
                                            (null == o ? void 0 : o.type) ? (null == o || o.type, r = T.WIFI) : (null == o ? void 0 : o.effectiveType) && (r = T[o.effectiveType.toLocaleUpperCase()]), e(r)
                                        } else p.platform === Q.NODE ? (r = T.UNKNOWN, e(r)) : null === (t = p.global) || void 0 === t || t.getNetworkType({
                                            success: function (t) {
                                                r = T[t.networkType.toLocaleUpperCase()], e(r)
                                            }
                                        })
                                    })))];
                                case 1:
                                    o = l.sent(), l.label = 2;
                                case 2:
                                    return n = this.options, i = n.appkey, s = n.sdkServiceId, a = n.sdkProduct, c = G({
                                        lts: r,
                                        net: o,
                                        appkey: i,
                                        sdkServiceId: s,
                                        sdkProduct: a
                                    }, t), this.isReportDt ? D.send(e, c) : this.isCollectDt && this.eventQueue.push({
                                        eventId: e,
                                        dt: c
                                    }), [3, 4];
                                case 3:
                                    return u = l.sent(), console.warn(u), [3, 4];
                                case 4:
                                    return [2]
                            }
                            var p
                        }))
                    }, new((n = void 0) || (n = Promise))((function (e, t) {
                        function s(e) {
                            try {
                                c(i.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                c(i.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function c(t) {
                            var r;
                            t.done ? e(t.value) : (r = t.value, r instanceof n ? r : new n((function (e) {
                                e(r)
                            }))).then(s, a)
                        }
                        c((i = i.apply(r, o || [])).next())
                    }));
                    var r, o, n, i
                }, e
            }();

            function F() {
                console.log && (console.log.apply ? console.log.apply(console, Array.prototype.slice.call(arguments)) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace()
            }
            var W, q = "undefined" != typeof window && void 0 !== window.navigator && /Trident\/|MSIE /.test(window.navigator.userAgent),
                z = function (e, t, r) {
                    if (r || 2 === arguments.length)
                        for (var o, n = 0, i = t.length; n < i; n++) !o && n in t || (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
                    return e.concat(o || Array.prototype.slice.call(t))
                },
                K = function () {},
                J = {};
            ! function (e) {
                e[e.TRACE = 0] = "TRACE", e[e.DEBUG = 1] = "DEBUG", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT"
            }(W || (W = {}));
            var V = function () {
                function e(e, t, r) {
                    this.name = e || "defaultLogger", this.currentLevel = 0, this.useCookiePersist = !1, this.storageLogLevelKey = "loglevel", this.levels = W, this.logMethods = ["trace", "debug", "info", "warn", "error"], this.methodFactory = r || this.defaultMethodFactory;
                    var o = this._getPersistedLevel();
                    null == o && (o = null === t ? "WARN" : t), this.logs = [], this.config = {
                        useCache: !1,
                        maxCache: 3145728,
                        color: "",
                        background: ""
                    }, this.logBytes = 0, this.setLevel(o, !1, "")
                }
                return e.prototype.setConfig = function (e) {
                    this.config = e
                }, e.prototype.getLevel = function () {
                    return this.currentLevel
                }, e.prototype.setLevel = function (e, t, r) {
                    if ("string" == typeof e && (e = W[e]), void 0 === e && (e = 0), !("number" == typeof e && e >= 0 && e <= this.levels.SILENT)) throw Error("log.setLevel() called with invalid level: " + e);
                    if (this.currentLevel = e, !1 !== t && this._persistLevel(e), this.replaceLoggingMethods(e, r), "undefined" == typeof console && e < W.SILENT) throw Error("No console available for logging")
                }, e.prototype.setDefaultLevel = function (e) {
                    this._getPersistedLevel() || this.setLevel(e, !1, "")
                }, e.prototype.enableAll = function (e) {
                    this.setLevel(this.levels.TRACE, !0, "")
                }, e.prototype.disableAll = function (e) {
                    this.setLevel(this.levels.SILENT, !0, "")
                }, e.prototype.getLogs = function () {
                    return this.logs
                }, e.prototype.download = function () {
                    if ("undefined" != typeof window && "undefined" != typeof document) {
                        var e = this.getLogs().join("\n"),
                            t = new Blob([e], {
                                type: "text/plain;charset=UTF-8"
                            }),
                            r = window.URL.createObjectURL(t),
                            o = document.createElement("a");
                        o.style.display = "none", o.href = r, o.setAttribute("download", "sdklog"), document.body.appendChild(o), o.click()
                    }
                }, e.prototype._bindMethod = function (e, t, r) {
                    var o = this,
                        n = e[t],
                        i = this.getTime();
                    if (r) return this._cacheLog;
                    if ("function" == typeof n.bind) return function () {
                        for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                        var s = o.getTime();
                        n.call.apply(n, z([e, s + " IM SDK [" + ("log" === t ? "debug" : t) + "]: "], r, !1)), o.logsCallback && o.logsCallback({
                            time: s,
                            level: "log" === t ? "debug" : t,
                            logs: r
                        })
                    };
                    try {
                        return Function.prototype.bind.call(n, e, i + " IM SDK [" + ("log" === t ? "debug" : t) + "]: ")
                    } catch (t) {
                        return function () {
                            return Function.prototype.apply.apply(n, [e, arguments])
                        }
                    }
                }, e.prototype.getTime = function () {
                    var e = new Date;
                    return e.toTimeString().split(" ")[0] + ":" + e.getMilliseconds()
                }, e.prototype._cacheLog = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var r = (new Date).toLocaleString() + ": ",
                        o = "";
                    e.forEach((function (e) {
                        o += "object" == typeof e ? JSON.stringify(e) + " " : e + " "
                    })), this._cacheLogCall(r + o)
                }, e.prototype._cacheLogCall = function (e) {
                    var t = X(e),
                        r = this.logBytes + t,
                        o = this.config.maxCache;
                    if (!(t >= o)) {
                        if (r < o) this.logBytes += t;
                        else
                            for (var n = r - o, i = 0; i < n;) {
                                var s = this.logs.shift();
                                void 0 !== s && (i += X(s))
                            }
                        this.logs.push(e)
                    }
                }, e.prototype._getPersistedLevel = function () {
                    var e;
                    if ("undefined" == typeof window) return 5;
                    if ("undefined" === (e = window && window.localStorage && window.localStorage[this.storageLogLevelKey])) {
                        var t = window.document.cookie,
                            r = t.indexOf(encodeURIComponent(this.storageLogLevelKey)); - 1 !== r && (e = /^([^;]+)/.exec(t.slice(r))[1])
                    }
                    return e || 5
                }, e.prototype._persistLevel = function (e) {
                    var t = this.logMethods[e] || "SILENT";
                    "undefined" != typeof window && (window.localStorage && (window.localStorage[this.storageLogLevelKey] = t), this.useCookiePersist && (window.document.cookie = encodeURIComponent(this.storageLogLevelKey) + "=" + t + ";"))
                }, e.prototype.replaceLoggingMethods = function (e, t) {
                    for (var r = 0; r < this.logMethods.length; r++) {
                        var o = this.logMethods[r];
                        this[o] = r < e ? K : this.methodFactory(o, e, t)
                    }
                    this.log = this.debug
                }, e.prototype.defaultMethodFactory = function (e, t, r) {
                    return this.realMethod(e) || this.enableLoggingWhenConsoleArrives.apply(this, [e, t, r])
                }, e.prototype.realMethod = function (e) {
                    return "debug" === e && (e = "log"), "undefined" != typeof console && ("trace" === e && q ? F : void 0 !== console[e] ? this._bindMethod(console, e, this.config.useCache) : void 0 !== console.log ? this._bindMethod(console, "log", this.config.useCache) : K)
                }, e.prototype.enableLoggingWhenConsoleArrives = function (e, t, r) {
                    return function () {
                        "undefined" != typeof console && (this.replaceLoggingMethods.call(this, t, r), this[e].apply(this, arguments))
                    }.bind(this)
                }, e
            }();

            function X(e) {
                for (var t = e.length, r = 0; r < e.length; r++) e.charCodeAt(r) > 255 && t++;
                return t
            }
            var Y = new V;
            Y.getLogger = function (e) {
                if ("string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
                return this
            };
            var $ = "undefined" != typeof window ? window.log : void 0;
            Y.noConflict = function () {
                return "undefined" != typeof window && window.log === Y && (window.log = $), Y
            }, Y.getLoggers = function () {
                return J
            };
            var Q, Z = Y,
                ee = function () {
                    return ee = Object.assign || function (e) {
                        for (var t, r = 1, o = arguments.length; r < o; r++)
                            for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e
                    }, ee.apply(this, arguments)
                },
                te = function () {},
                re = {
                    "[object Boolean]": "boolean",
                    "[object Number]": "number",
                    "[object String]": "string",
                    "[object Function]": "function",
                    "[object Array]": "array",
                    "[object Date]": "date",
                    "[object RegExp]": "regexp",
                    "[object Object]": "object",
                    "[object Error]": "error",
                    "[object Symbol]": "symbol"
                };

            function oe(e) {
                return Object.prototype.toString.call(e).slice(8, -1)
            }

            function ne() {
                return "undefined" != typeof swan && ie(swan) ? {
                    platform: Q.BAIDU,
                    global: swan
                } : "undefined" != typeof tt && ie(tt) ? {
                    platform: Q.TT,
                    global: tt
                } : "undefined" != typeof dd && ie(dd) ? {
                    platform: Q.DD,
                    global: dd
                } : "undefined" != typeof my && ie(my) ? {
                    platform: Q.ZFB,
                    global: my
                } : "undefined" != typeof wx && ie(wx) ? {
                    platform: Q.WX,
                    global: wx
                } : "undefined" != typeof uni && ie(uni) ? {
                    platform: Q.UNI,
                    global: uni
                } : "undefined" != typeof window && window.WebSocket ? {
                    platform: Q.WEB,
                    global: window
                } : {
                    platform: Q.NODE,
                    global: __webpack_require__.g || {}
                }
            }

            function ie(e) {
                for (var t = ["canIUse", "getSystemInfo"], r = 0, o = t.length; r < o; r++)
                    if (!e[t[r]]) return !1;
                return !0
            }

            function se(e) {
                void 0 === e && (e = {});
                var t = e.elapse,
                    r = void 0 === t ? 0 : t,
                    o = e.httpCode,
                    n = void 0 === o ? 0 : o,
                    i = e.errDesc;
                return {
                    requestElapse: r,
                    code: n,
                    codeDesc: void 0 === i ? "" : i
                }
            }! function (e) {
                e.WEB = "web", e.WX = "wx", e.ZFB = "zfb", e.DD = "dd", e.TT = "tt", e.BAIDU = "baidu", e.QUICK_APP = "quick_app", e.UNI = "uni", e.NODE = "node"
            }(Q || (Q = {}));
            var ae = {
                    autoIncrement: 0,
                    ajaxUnconventionalErrorTimes: 0,
                    ajax: function (e, t) {
                        var r;
                        return new Promise((function (t, o) {
                            var n = e.dataType || "text",
                                i = e.success || te,
                                s = e.error || te,
                                a = new XMLHttpRequest;
                            a.ontimeout = function () {
                                o({
                                    type: y.REQUEST_TIMEOUT,
                                    message: "Request Timeout",
                                    errorType: "timeout_error",
                                    xhr: a
                                })
                            }, a.onerror = function () {
                                o({
                                    type: y.REQUEST_UNKNOWN,
                                    message: "Request Unknow Error",
                                    errorType: "onerror",
                                    xhr: a
                                })
                            }, a.onabort = function () {
                                o({
                                    type: y.REQUEST_ABORT,
                                    message: "Request Abort",
                                    errorType: "onabort",
                                    xhr: a
                                })
                            }, a.onreadystatechange = function () {
                                if (4 === a.readyState) {
                                    var e = (new Date).getTime() - r,
                                        c = a.status || 0,
                                        u = {
                                            elapse: e,
                                            httpCode: c
                                        };
                                    if (200 === c) {
                                        ae.ajaxUnconventionalErrorTimes = 0;
                                        try {
                                            switch (n) {
                                                case "text":
                                                    return i(a.responseText), void t(a.responseText);
                                                case "json":
                                                    var l = JSON.parse(a.responseText);
                                                    return l.extraInfo = u, i(l), void t(l);
                                                case "xml":
                                                    return a.responseXML && a.responseXML.documentElement ? (i(a.responseXML.documentElement), void t(a.responseXML.documentElement)) : (s({
                                                        type: y.WEBIM_CONNCTION_AJAX_ERROR,
                                                        data: a.responseText,
                                                        message: "XHR.responseXML is null or XHR.responseXML.documentElement is null"
                                                    }), void o({
                                                        type: y.WEBIM_CONNCTION_AJAX_ERROR,
                                                        data: a.responseText,
                                                        message: "XHR.responseXML is null or XHR.responseXML.documentElement is null"
                                                    }));
                                                default:
                                                    s({
                                                        type: y.WEBIM_CONNCTION_AJAX_ERROR,
                                                        data: a.responseText,
                                                        message: "Invalid dataType"
                                                    }), o({
                                                        type: y.WEBIM_CONNCTION_AJAX_ERROR,
                                                        data: a.responseText,
                                                        message: "Invalid dataType"
                                                    })
                                            }
                                            return t(a.response || a.responseText), void i(a.response || a.responseText, a)
                                        } catch (e) {
                                            o(e)
                                        }
                                        return
                                    } [400, 401, 403, 404, 429, 500, 503].includes(c) || (Z.debug("rest api request fail status:", c), ae.ajaxUnconventionalErrorTimes++),
                                        function (e, t, r, o) {
                                            var n, i, s, a, c, u, l, p, d, h, f, m, v, E, _, T, O, I, R, S, N = e.response;
                                            N && "string" == typeof N && (N = JSON.parse(N));
                                            var C = e.status,
                                                A = {
                                                    elapse: o,
                                                    httpCode: C,
                                                    errDesc: null == N ? void 0 : N.error_description
                                                };
                                            if (400 === C) {
                                                if (40002 === N.error_code) return void t({
                                                    type: y.THREAD_ALREADY_EXIST,
                                                    message: null == N ? void 0 : N.error_description
                                                });
                                                if (40009 === N.error_code) return void t({
                                                    type: y.OPERATION_UNSUPPORTED,
                                                    message: null == N ? void 0 : N.error_description
                                                });
                                                if (51e3 === N.error_code || 51001 === N.error_code || 51002 === N.error_code || 51003 === N.error_code || 51007 === N.error_code || 51008 === N.error_code || 51012 === N.error_code || 51027 === N.error_code || 51028 === N.error_code || 52001 === N.error_code || 52002 === N.error_code || 52003 === N.error_code || 52004 === N.error_code || 52005 === N.error_code) return void t({
                                                    type: y.MAX_LIMIT,
                                                    message: null == N ? void 0 : N.error_description
                                                });
                                                if (51013 === N.error_code || 52011 === N.error_code) return void t({
                                                    type: y.ALREADY_JOINED,
                                                    message: null == N ? void 0 : N.error_description
                                                });
                                                if (51015 === N.error_code) return void t({
                                                    type: y.NO_PERMISSION,
                                                    message: null == N ? void 0 : N.error_description
                                                });
                                                if (51014 === N.error_code || 51017 === N.error_code || 51018 === N.error_code || 51019 === N.error_code || 52012 === N.error_code || 52013 === N.error_code || 52014 === N.error_code || 52015 === N.error_code || 52016 === N.error_code || 52017 === N.error_code || 52018 === N.error_code || 52020 === N.error_code || 52021 === N.error_code || 52022 === N.error_code || 52023 === N.error_code || 52024 === N.error_code) return void t({
                                                    type: y.OPERATION_UNSUPPORTED,
                                                    message: null == N ? void 0 : N.error_description
                                                });
                                                if (52008 === N.error_code || 52009 === N.error_code || 52010 === N.error_code) return void t({
                                                    type: y.REQUEST_PARAMETER_ERROR,
                                                    message: null == N ? void 0 : N.error_description
                                                });
                                                if (null === (n = N.error_description) || void 0 === n ? void 0 : n.includes("are not members of this group")) return (null === (i = e.responseURL) || void 0 === i ? void 0 : i.includes("chatgroups")) ? t({
                                                    type: y.GROUP_NOT_JOINED,
                                                    data: e.response || e.responseText,
                                                    message: N.error_description,
                                                    extraInfo: A
                                                }) : t({
                                                    type: y.CHATROOM_NOT_JOINED,
                                                    data: e.response || e.responseText,
                                                    message: N.error_description,
                                                    extraInfo: A
                                                }), void r({
                                                    type: y.WEBIM_CONNCTION_AJAX_ERROR,
                                                    message: null == N ? void 0 : N.error_description,
                                                    data: e.responseText,
                                                    extraInfo: A
                                                });
                                                switch (null == N ? void 0 : N.error_description) {
                                                    case "the user is already operation this message":
                                                        t({
                                                            type: y.REACTION_ALREADY_ADDED,
                                                            message: null == N ? void 0 : N.error_description,
                                                            extraInfo: A
                                                        });
                                                        break;
                                                    case "The quantity has exceeded the limit!":
                                                        t({
                                                            type: y.MAX_LIMIT,
                                                            message: null == N ? void 0 : N.error_description,
                                                            extraInfo: A
                                                        });
                                                        break;
                                                    case "The user not in this group!":
                                                        t({
                                                            type: y.GROUP_NOT_JOINED,
                                                            message: null == N ? void 0 : N.error_description,
                                                            extraInfo: A
                                                        });
                                                        break;
                                                    case "the user operation is illegal!":
                                                        t({
                                                            type: y.REACTION_OPERATION_IS_ILLEGAL,
                                                            message: null == N ? void 0 : N.error_description,
                                                            extraInfo: A
                                                        });
                                                        break;
                                                    case "this appKey is not open reaction service!":
                                                        t({
                                                            type: y.SERVICE_NOT_ENABLED,
                                                            message: null == N ? void 0 : N.error_description
                                                        });
                                                        break;
                                                    case "this message is creating reaction, please try again.":
                                                        t({
                                                            type: y.REACTION_CREATING,
                                                            message: null == N ? void 0 : N.error_description,
                                                            extraInfo: A
                                                        });
                                                        break;
                                                    case "groupId can not be null!":
                                                        t({
                                                            type: y.GROUP_NOT_EXIST,
                                                            message: null == N ? void 0 : N.error_description
                                                        });
                                                        break;
                                                    case "The input text is too long.":
                                                        t({
                                                            type: y.TRANSLATION_TEXT_TOO_LONG,
                                                            message: null == N ? void 0 : N.error_description
                                                        });
                                                        break;
                                                    case "The target language is not valid.":
                                                        t({
                                                            type: y.TRANSLATION_NOT_VALID,
                                                            message: null == N ? void 0 : N.error_description
                                                        });
                                                        break;
                                                    case "report failed, get message by id failed":
                                                        t({
                                                            type: y.MESSAGE_NOT_FOUND,
                                                            message: null == N ? void 0 : N.error_description,
                                                            extraInfo: A
                                                        });
                                                        break;
                                                    case "ext is too big ":
                                                        t({
                                                            type: y.PRESENCE_PARAM_EXCEED,
                                                            message: null == N ? void 0 : N.error_description
                                                        });
                                                        break;
                                                    case "Request body not readable.Please check content type is correct!":
                                                        t({
                                                            type: y.REQUEST_PARAMETER_ERROR,
                                                            message: null == N ? void 0 : N.error_description
                                                        });
                                                        break;
                                                    default:
                                                        t({
                                                            type: y.WEBIM_CONNCTION_AJAX_ERROR,
                                                            message: null == N ? void 0 : N.error_description,
                                                            data: e.responseText,
                                                            extraInfo: A
                                                        }), r({
                                                            type: y.WEBIM_CONNCTION_AJAX_ERROR,
                                                            message: null == N ? void 0 : N.error_description,
                                                            data: e.responseText,
                                                            extraInfo: A
                                                        })
                                                }
                                            } else if (401 === C) 40001 === N.error_code ? t({
                                                type: y.NO_PERMISSION,
                                                message: null == N ? void 0 : N.error_description
                                            }) : (r({
                                                type: y.WEBIM_CONNCTION_AJAX_ERROR,
                                                data: e.responseText,
                                                message: e.responseText,
                                                extraInfo: A
                                            }), t({
                                                type: y.WEBIM_CONNCTION_AJAX_ERROR,
                                                data: e.responseText,
                                                message: e.responseText,
                                                extraInfo: A
                                            }));
                                            else if (403 === C) 4e4 === N.error_code ? t({
                                                type: y.SERVICE_NOT_ENABLED,
                                                message: null == N ? void 0 : N.error_description
                                            }) : 40003 === N.error_code || 40004 === N.error_code ? t({
                                                type: y.THREAD_ALREADY_EXIST,
                                                message: null == N ? void 0 : N.error_description
                                            }) : 40005 === N.error_code || 40007 === N.error_code ? t({
                                                type: y.MAX_LIMIT,
                                                message: null == N ? void 0 : N.error_description
                                            }) : 58500 === N.error_code && t({
                                                type: y.SERVICE_NOT_ENABLED,
                                                message: null == N ? void 0 : N.error_description
                                            }), "group member list is full!" === N.error_description ? (null === (s = e.responseURL) || void 0 === s ? void 0 : s.includes("chatgroups")) ? t({
                                                type: y.GROUP_MEMBERS_FULL,
                                                data: e.response || e.responseText,
                                                message: N.error_description,
                                                extraInfo: A
                                            }) : t({
                                                type: y.CHATROOM_MEMBERS_FULL,
                                                data: e.response || e.responseText,
                                                message: N.error_description,
                                                extraInfo: A
                                            }) : (null === (a = N.error_description) || void 0 === a ? void 0 : a.includes(N.error_description.includes("already in group"))) ? (null === (c = e.responseURL) || void 0 === c ? void 0 : c.includes("chatgroups")) && t({
                                                type: y.ALREADY_JOINED,
                                                data: e.response || e.responseText,
                                                message: N.error_description,
                                                extraInfo: A
                                            }) : (null === (u = N.error_description) || void 0 === u ? void 0 : u.includes("are not members of this group")) ? (null === (l = e.responseURL) || void 0 === l ? void 0 : l.includes("chatgroups")) ? t({
                                                type: y.GROUP_NOT_JOINED,
                                                data: e.response || e.responseText,
                                                message: N.error_description,
                                                extraInfo: A
                                            }) : t({
                                                type: y.CHATROOM_NOT_JOINED,
                                                data: e.response || e.responseText,
                                                message: N.error_description,
                                                extraInfo: A
                                            }) : (null === (p = N.error_description) || void 0 === p ? void 0 : p.includes("service not open!")) || (null === (d = N.error_description) || void 0 === d ? void 0 : d.includes("message report not open")) || (null === (h = N.error_description) || void 0 === h ? void 0 : h.includes("messageroaming function not open")) ? t({
                                                type: y.SERVICE_NOT_ENABLED,
                                                data: e.response || e.responseText,
                                                message: N.error_description
                                            }) : (null === (f = N.error_description) || void 0 === f ? void 0 : f.includes("members size is greater than max user size !")) ? t({
                                                type: y.GROUP_MEMBERS_LIMIT,
                                                data: e.response || e.responseText,
                                                message: N.error_description,
                                                extraInfo: A
                                            }) : (null === (m = N.error_description) || void 0 === m ? void 0 : m.includes("can not operate this group, reason: group is disabled")) ? t({
                                                type: y.GROUP_IS_DISABLED,
                                                data: e.response || e.responseText,
                                                message: N.error_description,
                                                extraInfo: A
                                            }) : t({
                                                type: y.PERMISSION_DENIED,
                                                data: e.response || e.responseText,
                                                message: "permission denied",
                                                extraInfo: g(g({}, A), {
                                                    errDesc: "permission denied"
                                                })
                                            }), r({
                                                type: y.WEBIM_CONNCTION_AJAX_ERROR,
                                                data: e.responseText,
                                                message: e.responseText,
                                                extraInfo: A
                                            });
                                            else if (404 === C) 40011 === N.error_code ? t({
                                                type: y.THREAD_NOT_EXIST,
                                                message: null == N ? void 0 : N.error_description
                                            }) : 40012 === N.error_code ? t({
                                                type: y.NO_PERMISSION,
                                                message: null == N ? void 0 : N.error_description
                                            }) : 51021 === N.error_code || 52019 === N.error_code ? t({
                                                type: y.NOT_EXIST,
                                                message: null == N ? void 0 : N.error_description
                                            }) : 51022 === N.error_code ? t({
                                                type: y.USER_NOT_FOUND,
                                                message: null == N ? void 0 : N.error_description
                                            }) : 51023 === N.error_code && t({
                                                type: y.MAX_LIMIT,
                                                message: null == N ? void 0 : N.error_description
                                            }), (null === (v = N.error_description) || void 0 === v ? void 0 : v.includes("do not find this group")) || (null === (E = N.error_description) || void 0 === E ? void 0 : E.includes("does not exist")) ? (null === (_ = e.responseURL) || void 0 === _ ? void 0 : _.includes("chatgroups")) ? t({
                                                type: y.GROUP_NOT_EXIST,
                                                data: e.response || e.responseText,
                                                message: "The chat room dose not exist.",
                                                extraInfo: g(g({}, A), {
                                                    errDesc: "The chat room dose not exist."
                                                })
                                            }) : t({
                                                type: y.CHATROOM_NOT_EXIST,
                                                data: e.response || e.responseText,
                                                message: "The chat room dose not exist.",
                                                extraInfo: g(g({}, A), {
                                                    errDesc: "The chat room dose not exist."
                                                })
                                            }) : (null === (T = N.error_description) || void 0 === T ? void 0 : T.includes("username")) && (null === (O = N.error_description) || void 0 === O ? void 0 : O.includes("doesn't exist!'")) || (null === (I = N.error_description) || void 0 === I ? void 0 : I.includes("user not found")) ? t({
                                                type: y.USER_NOT_FOUND,
                                                data: e.response || e.responseText,
                                                message: N.error_description,
                                                extraInfo: A
                                            }) : t({
                                                type: y.WEBIM_CONNCTION_AJAX_ERROR,
                                                data: e.response || e.responseText,
                                                message: e.responseText,
                                                extraInfo: A
                                            }), r({
                                                type: y.WEBIM_CONNCTION_AJAX_ERROR,
                                                data: e.response || e.responseText,
                                                message: e.responseText,
                                                extraInfo: A
                                            });
                                            else if (429 === C || 503 === C) {
                                                if (null === (R = N.error_description) || void 0 === R ? void 0 : R.includes("The request has reached the maximum limit")) return void t({
                                                    type: y.MAX_LIMIT,
                                                    message: e.responseText
                                                });
                                                t({
                                                    type: y.SERVER_BUSY,
                                                    data: e.response || e.responseText,
                                                    message: "Server is busy.",
                                                    extraInfo: g(g({}, A), {
                                                        errDesc: "Server is busy."
                                                    })
                                                }), r({
                                                    type: y.WEBIM_CONNCTION_AJAX_ERROR,
                                                    data: e.responseText,
                                                    message: "Server is busy.",
                                                    extraInfo: g(g({}, A), {
                                                        errDesc: "Server is busy."
                                                    })
                                                })
                                            } else if (500 === C) {
                                                if (40006 !== N.error_code && 40008 !== N.error_code && 40010 !== N.error_code && 59e3 !== N.error_code || t({
                                                        type: y.SERVER_UNKNOWN_ERROR,
                                                        message: null == N ? void 0 : N.error_description
                                                    }), null === (S = N.error_description) || void 0 === S ? void 0 : S.includes("translte failed!")) return void t({
                                                    type: y.TRANSLATION_FAILED,
                                                    message: e.responseText
                                                });
                                                t({
                                                    type: y.WEBIM_CONNCTION_AJAX_ERROR,
                                                    data: e.responseText,
                                                    message: "",
                                                    extraInfo: A
                                                }), r({
                                                    type: y.WEBIM_CONNCTION_AJAX_ERROR,
                                                    data: e.responseText,
                                                    message: "",
                                                    extraInfo: A
                                                })
                                            } else t({
                                                type: y.WEBIM_CONNCTION_AJAX_ERROR,
                                                data: e.responseText,
                                                message: e.responseText,
                                                extraInfo: g(g({}, A), {
                                                    errDesc: "ajax error"
                                                })
                                            }), r({
                                                type: y.WEBIM_CONNCTION_AJAX_ERROR,
                                                data: e.responseText,
                                                message: e.responseText,
                                                extraInfo: g(g({}, A), {
                                                    errDesc: "ajax error"
                                                })
                                            })
                                        }(a, o, s, e)
                                }
                                0 === a.readyState && (s({
                                    type: y.WEBIM_CONNCTION_AJAX_ERROR,
                                    data: a.responseText,
                                    message: "Request not initialized"
                                }), o({
                                    type: y.WEBIM_CONNCTION_AJAX_ERROR,
                                    data: a.responseText,
                                    message: "Request not initialized"
                                }))
                            }, e.responseType && a.responseType && (a.responseType = e.responseType), e.mimeType && a.overrideMimeType(e.mimeType);
                            var c = e.type || "POST",
                                u = e.data || null,
                                l = "";
                            if ("get" === c.toLowerCase() && u) {
                                for (var p in u) u.hasOwnProperty(p) && (l += p + "=" + u[p] + "&");
                                l = l ? l.slice(0, -1) : l, e.url += (e.url.indexOf("?") > 0 ? "&" : "?") + (l ? l + "&" : l) + "_v=" + (new Date).getTime(), u = null, l = ""
                            }
                            r = (new Date).getTime(), a.open(c, e.url);
                            var d = e.headers || {};
                            for (var h in d["Content-Type"] || (d["Content-Type"] = "application/json"), d) d.hasOwnProperty(h) && a.setRequestHeader(h, d[h]);
                            a.send(u)
                        })).then((function (r) {
                            return t && t !== E.SDK_INTERNAL && (null == H ? void 0 : H.getInstance().geOperateFun({
                                operationName: t
                            }))({
                                isEndApi: !0,
                                data: ee({
                                    isSuccess: 1,
                                    requestUrl: e.url,
                                    requestName: t,
                                    requestMethod: e.type
                                }, se(r.extraInfo))
                            }), t !== E.SDK_INTERNAL && delete r.extraInfo, "Object" === oe(r) ? ee(ee({}, r), {
                                type: y.REQUEST_SUCCESS
                            }) : {
                                data: r,
                                type: y.REQUEST_SUCCESS
                            }
                        })).catch((function (r) {
                            throw t && t !== E.SDK_INTERNAL && (null == H ? void 0 : H.getInstance().geOperateFun({
                                operationName: t
                            }))({
                                isEndApi: !0,
                                data: ee({
                                    isSuccess: 0,
                                    requestUrl: e.url,
                                    requestName: t,
                                    requestMethod: e.type
                                }, se(r.extraInfo))
                            }), t !== E.SDK_INTERNAL && delete r.extraInfo, r
                        }))
                    },
                    getUniqueId: function () {
                        this.autoIncrement ? this.autoIncrement++ : this.autoIncrement = 1;
                        var e = new Date,
                            t = new Date(2010, 1, 1);
                        return (e.getTime() - t.getTime() + this.autoIncrement).toString()
                    },
                    getFileUrl: function (e) {
                        var t = {
                                url: "",
                                filename: "",
                                filetype: "",
                                data: null
                            },
                            r = "string" == typeof e ? document.getElementById(e) : e;
                        if (window.URL.createObjectURL) {
                            if (!r.files) throw Error("this is not HTMLInputElement");
                            var o = r.files;
                            if (o.length > 0) {
                                var n = o.item(0);
                                t.data = n, t.url = window.URL.createObjectURL(n), t.filename = (null == n ? void 0 : n.name) || ""
                            }
                        } else {
                            if ("string" != typeof e) throw Error("in IE fileInputId must be string");
                            n = document.getElementById(e).value, t.url = n;
                            var i = n.lastIndexOf("/"),
                                s = n.lastIndexOf("\\"),
                                a = Math.max(i, s);
                            t.filename = a < 0 ? n : n.substring(a + 1)
                        }
                        var c = t.filename.lastIndexOf(".");
                        return -1 !== c && (t.filetype = t.filename.substring(c + 1).toLowerCase()), t
                    },
                    uploadFile: function (e, t) {
                        var r, o, n = (new Date).getTime(),
                            i = e.accessToken;
                        if (i) {
                            var s = e.appKey,
                                a = [],
                                c = "",
                                u = "";
                            if (s && (c = (a = s.split("#"))[0], u = a[1]), c || u) {
                                var l = e.apiUrl,
                                    p = e.uploadUrl || l + "/" + c + "/" + u + "/chatfiles";
                                if ((null === (o = null === (r = null == e ? void 0 : e.file) || void 0 === r ? void 0 : r.data) || void 0 === o ? void 0 : o.size) <= 0) e.onFileUploadError && e.onFileUploadError({
                                    type: y.WEBIM_UPLOADFILE_ERROR,
                                    message: "fileSize must be greater than 0"
                                });
                                else {
                                    var d = new XMLHttpRequest;
                                    d.upload && d.upload.addEventListener("progress", e.onFileUploadProgress || te, !1), d.addEventListener("abort", e.onFileUploadCanceled || te, !1), d.addEventListener("error", (function (e) {
                                        f({
                                            type: y.WEBIM_UPLOADFILE_ERROR,
                                            data: d
                                        })
                                    }), !1), d.addEventListener("load", (function (r) {
                                        try {
                                            var o = JSON.parse(d.responseText);
                                            if (400 === d.status) return f({
                                                type: y.WEBIM_UPLOADFILE_ERROR,
                                                data: o
                                            }), !1;
                                            try {
                                                ! function (r) {
                                                    var o = (new Date).getTime() - n;
                                                    t && [E.UPLOAD_MSG_ATTACH, E.UPLOAD_CHATROOM_FILE, E.UPLOAD_GROUP_FILE].includes(t) && (null == H ? void 0 : H.getInstance().geOperateFun({
                                                        operationName: t
                                                    }))({
                                                        isEndApi: !0,
                                                        data: {
                                                            isSuccess: (null == r ? void 0 : r.error) ? 0 : 1,
                                                            requestMethod: "POST",
                                                            requestName: t,
                                                            requestElapse: o,
                                                            requestUrl: p,
                                                            code: d.status,
                                                            codeDesc: (null == r ? void 0 : r.error_description) || ""
                                                        }
                                                    }), e.onFileUploadComplete && e.onFileUploadComplete(r)
                                                }(o)
                                            } catch (r) {
                                                f({
                                                    type: y.WEBIM_CONNCTION_CALLBACK_INNER_ERROR,
                                                    data: r
                                                })
                                            }
                                        } catch (r) {
                                            f({
                                                type: y.WEBIM_UPLOADFILE_ERROR,
                                                data: d.responseText
                                            })
                                        }
                                    }), !1), d.open("POST", p), d.setRequestHeader("restrict-access", "true"), d.setRequestHeader("Accept", "*/*"), d.setRequestHeader("Authorization", "Bearer " + i);
                                    var h = new FormData;
                                    h.append("file", e.file.data), d.send(h)
                                }
                            } else e.onFileUploadError && e.onFileUploadError({
                                type: y.WEBIM_UPLOADFILE_ERROR,
                                message: "AppKey illegal"
                            })
                        } else e.onFileUploadError && e.onFileUploadError({
                            type: y.WEBIM_UPLOADFILE_NO_LOGIN,
                            message: "AccessToken cannot be empty"
                        });

                        function f(r) {
                            var o = (new Date).getTime() - n;
                            t && [E.UPLOAD_MSG_ATTACH, E.UPLOAD_CHATROOM_FILE, E.UPLOAD_GROUP_FILE].includes(t) && (null == H ? void 0 : H.getInstance().geOperateFun({
                                operationName: t
                            }))({
                                isEndApi: !0,
                                data: {
                                    isSuccess: 0,
                                    requestMethod: "POST",
                                    requestName: t,
                                    requestElapse: o,
                                    requestUrl: p,
                                    code: (null == d ? void 0 : d.status) || 0,
                                    codeDesc: "upload file error"
                                }
                            }), e.onFileUploadError && e.onFileUploadError(r)
                        }
                    },
                    flow: function (e) {
                        for (var t = e.length, r = t; r--;)
                            if ("function" != typeof e[r]) throw new TypeError("Expected a function");
                        return function () {
                            for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                            for (var n = 0, i = t ? e[n].apply(this, r) : r[0]; ++n < t;) i = e[n].call(this, i);
                            return i
                        }
                    },
                    listenNetwork: function (e, t) {
                        var r = ne();
                        if (r.platform !== Q.WEB) {
                            var o = r.global,
                                n = function (r) {
                                    r.isConnected ? e() : t()
                                };
                            o.offNetworkStatusChange && o.offNetworkStatusChange(n), o.onNetworkStatusChange && o.onNetworkStatusChange(n)
                        } else window.addEventListener && (window.addEventListener("online", e), window.addEventListener("offline", t))
                    },
                    getEnvInfo: ne,
                    wxRequest: function (e, t) {
                        return new Promise((function (t, r) {
                            var o = e.success || te,
                                n = e.error || te,
                                i = e.type || "POST",
                                s = e.data || null,
                                a = "",
                                c = (new Date).getTime(),
                                u = ae.getEnvInfo();
                            if ("get" === i.toLowerCase() && s) {
                                for (var l in s) s.hasOwnProperty(l) && (a += l + "=" + s[l] + "&");
                                a = a ? a.slice(0, -1) : a, e.url += (e.url.indexOf("?") > 0 ? "&" : "?") + (a ? a + "&" : a) + "_v=" + (new Date).getTime(), s = null, a = ""
                            }
                            var p = {
                                url: e.url,
                                data: e.data,
                                method: i,
                                headers: {},
                                success: function (e) {
                                    var i, s, a, u, l, p = {
                                        elapse: (new Date).getTime() - c,
                                        httpCode: Number((null === (i = e.statusCode) || void 0 === i ? void 0 : i.toString()) || (null === (s = e.status) || void 0 === s ? void 0 : s.toString())),
                                        errDesc: (null === (a = null == e ? void 0 : e.data) || void 0 === a ? void 0 : a.error_description) || ""
                                    };
                                    if ("200" === (null === (u = e.statusCode) || void 0 === u ? void 0 : u.toString()) || "200" === (null === (l = e.status) || void 0 === l ? void 0 : l.toString())) {
                                        e.data.extraInfo = p;
                                        var d = e.data;
                                        o(d), t(d)
                                    } else e.extraInfo = p, n(d = e), r(d)
                                },
                                complete: function () {},
                                fail: function (e) {
                                    n(e), r(e)
                                }
                            };
                            if ("zfb" === u.platform || "dd" === u.platform ? p.headers = e.headers : p.header = e.headers, "dd" === u.platform) return dd.httpRequest(p);
                            u.global.request(p)
                        })).then((function (r) {
                            return t && t !== E.SDK_INTERNAL && (null == H ? void 0 : H.getInstance().geOperateFun({
                                operationName: t
                            }))({
                                isEndApi: !0,
                                data: ee({
                                    isSuccess: 1,
                                    requestUrl: e.url,
                                    requestName: t,
                                    requestMethod: e.type
                                }, se(r.extraInfo))
                            }), t !== E.SDK_INTERNAL && delete r.extraInfo, "Object" === oe(r) ? ee(ee({}, r), {
                                type: y.REQUEST_SUCCESS
                            }) : {
                                data: r,
                                type: y.REQUEST_SUCCESS
                            }
                        })).catch((function (r) {
                            throw t && t !== E.SDK_INTERNAL && (null == H ? void 0 : H.getInstance().geOperateFun({
                                operationName: t
                            }))({
                                isEndApi: !0,
                                data: ee({
                                    isSuccess: 0,
                                    requestUrl: e.url,
                                    requestName: t,
                                    requestMethod: e.type
                                }, se(r.extraInfo))
                            }), t !== E.SDK_INTERNAL && delete r.extraInfo, r
                        }))
                    },
                    parseDownloadResponse: function (e) {
                        if (!window || !window.URL) throw Error("parseDownloadResponse can be used in broswer only");
                        return e && e.type && "application/json" === e.type || 0 > Object.prototype.toString.call(e).indexOf("Blob") ? this.url + "?token=" : window.URL.createObjectURL(e)
                    },
                    download: function (e, t) {
                        e.onFileDownloadComplete = e.onFileDownloadComplete || te, e.onFileDownloadError = e.onFileDownloadError || te;
                        var r = (new Date).getTime(),
                            o = new XMLHttpRequest;
                        o.addEventListener("load", (function (n) {
                            var i = (new Date).getTime() - r;
                            t && t === E.DOWN_GROUP_FILE && (null == H ? void 0 : H.getInstance().geOperateFun({
                                operationName: t
                            }))({
                                isEndApi: !0,
                                data: {
                                    isSuccess: 200 === o.status ? 1 : 0,
                                    requestMethod: "POST",
                                    requestName: t,
                                    requestElapse: i,
                                    requestUrl: null == e ? void 0 : e.url,
                                    code: o.status,
                                    codeDesc: 200 === o.status ? "" : "download file error"
                                }
                            }), e.onFileDownloadComplete && e.onFileDownloadComplete(o.response)
                        }), !1), o.addEventListener("error", (function (n) {
                            var i = (new Date).getTime() - r;
                            t && t === E.DOWN_GROUP_FILE && (null == H ? void 0 : H.getInstance().geOperateFun({
                                operationName: t
                            }))({
                                isEndApi: !0,
                                data: {
                                    isSuccess: 0,
                                    requestMethod: "POST",
                                    requestName: t,
                                    requestElapse: i,
                                    requestUrl: null == e ? void 0 : e.url,
                                    code: (null == o ? void 0 : o.status) || 0,
                                    codeDesc: "download file error"
                                }
                            }), e.onFileDownloadError && e.onFileDownloadError({
                                type: y.WEBIM_DOWNLOADFILE_ERROR,
                                id: e.id,
                                xhr: o
                            })
                        }), !1);
                        var n = e.method || "GET",
                            i = e.responseType || "blob",
                            s = e.mimeType || "text/plain; charset=x-user-defined";
                        o.open(n, e.url), "undefined" != typeof Blob ? o.responseType = i : o.overrideMimeType(s);
                        var a = {
                                "X-Requested-With": "XMLHttpRequest",
                                Accept: "application/octet-stream",
                                "share-secret": e.secret,
                                Authorization: "Bearer " + this.context.accessToken
                            },
                            c = e.headers || {};
                        for (var u in c) a[u] = c[u];
                        for (var u in a) a[u] && o.setRequestHeader(u, a[u]);
                        o.send(null)
                    },
                    parseNotify: function (e) {
                        for (var t = "", r = 0; r < e.length; r++) t += "%" + e[r].toString(16);
                        return JSON.parse(decodeURIComponent(t))
                    },
                    getExtraData: se,
                    checkDataType: function (e) {
                        e.forEach((function (e) {
                            for (var t = 0, r = Object.entries(e); t < r.length; t++) {
                                var o = r[t],
                                    n = o[0],
                                    i = o[1];
                                if ("type" !== n && "required" !== n) {
                                    if (e.required && !i) throw Error("Invalid parameter " + n);
                                    if (void 0 !== i && (null === (s = i) ? s + "" : "object" == typeof s ? re[Object.prototype.toString.call(s)] || "object" : typeof s) !== e.type) throw Error("Invalid parameter " + n)
                                }
                            }
                            var s
                        }))
                    }
                },
                ce = __webpack_require__(4188),
                ue = __webpack_require__.n(ce),
                le = function () {
                    return le = Object.assign || function (e) {
                        for (var t, r = 1, o = arguments.length; r < o; r++)
                            for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e
                    }, le.apply(this, arguments)
                };

            function pe(e) {
                var t, r;
                if (!e || "{}" === JSON.stringify(e)) return {};
                var o = e.id,
                    n = e.payload,
                    i = e.timestamp,
                    s = e.to,
                    a = n.bodies && n.bodies.length > 0 ? n.bodies[0] : {},
                    c = {},
                    u = {},
                    l = n.type ? n.type : s.indexOf("@conference.easemob.com") > -1 ? "groupChat" : "singleChat";
                switch (a.type) {
                    case "txt":
                        c = {
                            id: o,
                            type: "txt",
                            chatType: l,
                            msg: a.msg || "",
                            to: n.to || "",
                            from: n.from,
                            time: i,
                            ext: n.ext
                        };
                        break;
                    case "img":
                        c = {
                            id: o,
                            type: "img",
                            chatType: l,
                            to: n.to,
                            from: n.from,
                            time: i,
                            ext: n.ext,
                            width: (null === (t = a.size) || void 0 === t ? void 0 : t.width) || 0,
                            height: (null === (r = a.size) || void 0 === r ? void 0 : r.height) || 0,
                            secret: a.secret || "",
                            url: (null == a ? void 0 : a.url) || "",
                            file: {}
                        };
                        break;
                    case "video":
                        c = {
                            id: o,
                            type: "video",
                            chatType: l,
                            from: n.from,
                            to: n.to,
                            url: (null == a ? void 0 : a.url) || "",
                            secret: a.secret || "",
                            filename: a.filename,
                            length: a.length || 0,
                            file: {},
                            file_length: a.fileLength || 0,
                            filetype: n.ext.file_type || "",
                            ext: n.ext,
                            time: i
                        };
                        break;
                    case "loc":
                        c = {
                            id: o,
                            type: "loc",
                            chatType: l,
                            from: n.from,
                            to: n.to,
                            buildingName: a.buildingName || "",
                            addr: a.addr,
                            lat: a.lat,
                            lng: a.lng,
                            ext: n.ext,
                            time: i
                        };
                        break;
                    case "audio":
                        c = {
                            id: o,
                            type: "audio",
                            chatType: l,
                            from: n.from,
                            to: n.to,
                            secret: a.secret || "",
                            ext: n.ext,
                            time: i,
                            url: (null == a ? void 0 : a.url) || "",
                            file: {},
                            filename: a.filename,
                            length: n.ext.duration || 0,
                            file_length: a.fileLength || 0,
                            filetype: n.ext.file_type || ""
                        };
                        break;
                    case "file":
                        c = {
                            id: o,
                            type: "file",
                            chatType: l,
                            from: n.from,
                            to: n.to,
                            ext: n.ext,
                            time: i,
                            url: (null == a ? void 0 : a.url) || "",
                            secret: a.secret || "",
                            file: {},
                            filename: a.filename || "",
                            length: a.length || 0,
                            file_length: a.file_length || 0,
                            filetype: n.ext.file_type || ""
                        };
                        break;
                    case "cmd":
                        c = {
                            id: o,
                            type: "cmd",
                            chatType: l,
                            from: n.from,
                            to: n.to,
                            ext: n.ext,
                            time: i,
                            action: a.action || ""
                        };
                        break;
                    case "custom":
                        c = {
                            id: o,
                            type: "custom",
                            chatType: l,
                            from: n.from,
                            to: n.to,
                            ext: n.ext,
                            time: i,
                            customEvent: a.customEvent || ""
                        };
                        break;
                    default:
                        Z.error("unexpected message: " + e)
                }
                if (n.msgConfig && (u.msgConfig = n.msgConfig), null == n ? void 0 : n.meta) {
                    var p = n.meta;
                    p.thread && (u.chatThread = {
                        messageId: p.thread.msg_parent_id,
                        parentId: p.thread.muc_parent_id,
                        chatThreadName: p.thread.thread_name
                    }), p.reactions && (u.reactions = p.reactions), p.translations && (u.translations = p.translations)
                }
                return le(le({}, c), u)
            }
            var de = function () {
                    function e(e) {
                        var t = e.id;
                        this.id = t, this.type = e.type
                    }
                    return e.prototype.set = function (e) {
                        this.body = {
                            id: this.id,
                            ackId: e.id,
                            type: "read",
                            to: e.to,
                            from: e.from || "",
                            chatType: e.chatType
                        }
                    }, e.create = function (e) {
                        return {
                            id: ae.getUniqueId(),
                            chatType: e.chatType,
                            ackId: e.id,
                            type: "read",
                            to: e.to,
                            from: e.from || "",
                            ackContent: e.ackContent,
                            isChatThread: e.isChatThread
                        }
                    }, e
                }(),
                he = function () {
                    function e(e) {
                        this.id = e.id, this.type = e.type
                    }
                    return e.prototype.set = function (e) {
                        this.body = {
                            id: this.id,
                            ackId: e.ackId,
                            type: "delivery",
                            to: e.to,
                            from: e.from || ""
                        }
                    }, e.create = function (e) {
                        return {
                            id: ae.getUniqueId(),
                            ackId: e.ackId,
                            type: "delivery",
                            to: e.to,
                            from: e.from || "",
                            isChatThread: e.isChatThread
                        }
                    }, e
                }(),
                fe = function () {
                    function e(e) {
                        var t = e.type,
                            r = e.id;
                        this.id = r, this.type = t
                    }
                    return e.prototype.set = function (e) {
                        this.body = {
                            id: this.id,
                            chatType: e.chatType || "singleChat",
                            type: "channel",
                            to: e.to,
                            from: e.from || "",
                            time: Date.now()
                        }
                    }, e.prototype.setChatType = function (e) {
                        return !!this.body && (this.body.chatType = e, !0)
                    }, e.prototype.setGroup = function (e) {
                        return !!this.body && (this.body.group = e, !0)
                    }, e.create = function (e) {
                        return {
                            id: ae.getUniqueId(),
                            type: "channel",
                            chatType: e.chatType || "singleChat",
                            to: e.to,
                            from: e.from || "",
                            time: Date.now(),
                            isChatThread: e.isChatThread
                        }
                    }, e
                }(),
                me = function () {
                    function e(e) {
                        var t = e.type,
                            r = e.id || ae.getUniqueId();
                        this.id = r, this.type = t, this.value = ""
                    }
                    return e.prototype.set = function (e) {
                        this.body = {
                            id: this.id,
                            chatType: e.chatType || "singleChat",
                            type: "txt",
                            to: e.to,
                            msg: e.msg,
                            from: e.from,
                            roomType: e.roomType,
                            success: e.success,
                            fail: e.fail,
                            ext: e.ext,
                            time: Date.now()
                        }, this.value = e.msg
                    }, e.prototype.setChatType = function (e) {
                        return !!this.body && (this.body.chatType = e, !0)
                    }, e.prototype.setGroup = function (e) {
                        return !!this.body && (this.body.group = e, !0)
                    }, e.create = function (e) {
                        var t, r;
                        return (null === (t = e.msgConfig) || void 0 === t ? void 0 : t.languages) && Array.isArray(null === (r = e.msgConfig) || void 0 === r ? void 0 : r.languages), {
                            type: "txt",
                            id: ae.getUniqueId(),
                            msg: e.msg,
                            to: e.to,
                            from: e.from || "",
                            chatType: e.chatType,
                            ext: e.ext,
                            time: Date.now(),
                            msgConfig: e.msgConfig,
                            isChatThread: e.isChatThread
                        }
                    }, e
                }(),
                ye = function () {
                    function e(e) {
                        var t = e.type,
                            r = e.id;
                        this.id = r || ae.getUniqueId(), this.type = t
                    }
                    return e.prototype.set = function (e) {
                        this.body = {
                            id: this.id,
                            chatType: e.chatType || "singleChat",
                            type: "cmd",
                            to: e.to,
                            action: e.action,
                            from: e.from,
                            roomType: e.roomType,
                            success: e.success,
                            fail: e.fail,
                            ext: e.ext,
                            time: Date.now()
                        }
                    }, e.prototype.setChatType = function (e) {
                        return !!this.body && (this.body.chatType = e, !0)
                    }, e.prototype.setGroup = function (e) {
                        return !!this.body && (this.body.group = e, !0)
                    }, e.create = function (e) {
                        return {
                            id: ae.getUniqueId(),
                            type: "cmd",
                            to: e.to,
                            from: e.from || "",
                            chatType: e.chatType || "singleChat",
                            action: e.action,
                            time: Date.now(),
                            msgConfig: e.msgConfig,
                            isChatThread: e.isChatThread
                        }
                    }, e
                }(),
                ge = function () {
                    function e(e) {
                        var t = e.type,
                            r = e.id || ae.getUniqueId();
                        this.id = r, this.type = t
                    }
                    return e.prototype.set = function (e) {
                        this.body = {
                            id: this.id,
                            chatType: e.chatType || "singleChat",
                            type: "custom",
                            to: e.to,
                            customEvent: e.customEvent,
                            customExts: e.customExts,
                            from: e.from,
                            roomType: e.roomType,
                            success: e.success,
                            fail: e.fail,
                            ext: e.ext,
                            time: Date.now()
                        }
                    }, e.prototype.setChatType = function (e) {
                        return !!this.body && (this.body.chatType = e, !0)
                    }, e.prototype.setGroup = function (e) {
                        return !!this.body && (this.body.group = e, !0)
                    }, e.create = function (e) {
                        return {
                            id: ae.getUniqueId(),
                            chatType: e.chatType || "singleChat",
                            type: "custom",
                            to: e.to,
                            customEvent: e.customEvent,
                            customExts: e.customExts,
                            from: e.from || "",
                            ext: e.ext,
                            time: Date.now(),
                            msgConfig: e.msgConfig,
                            isChatThread: e.isChatThread
                        }
                    }, e
                }(),
                ve = function () {
                    function e(e) {
                        var t = e.type,
                            r = e.id;
                        this.id = r || ae.getUniqueId(), this.type = t
                    }
                    return e.prototype.set = function (e) {
                        this.body = {
                            id: this.id,
                            chatType: e.chatType || "singleChat",
                            type: "loc",
                            to: e.to,
                            addr: e.addr,
                            buildingName: e.buildingName,
                            lat: e.lat,
                            lng: e.lng,
                            from: e.from,
                            roomType: e.roomType,
                            success: e.success,
                            fail: e.fail,
                            ext: e.ext,
                            time: Date.now()
                        }
                    }, e.prototype.setChatType = function (e) {
                        return !!this.body && (this.body.chatType = e, !0)
                    }, e.prototype.setGroup = function (e) {
                        return !!this.body && (this.body.group = e, !0)
                    }, e.create = function (e) {
                        return {
                            id: ae.getUniqueId(),
                            chatType: e.chatType || "singleChat",
                            type: "loc",
                            to: e.to,
                            addr: e.addr,
                            buildingName: e.buildingName,
                            lat: e.lat,
                            lng: e.lng,
                            from: e.from || "",
                            ext: e.ext,
                            time: Date.now(),
                            msgConfig: e.msgConfig,
                            isChatThread: e.isChatThread
                        }
                    }, e
                }(),
                Ee = function () {
                    function e(e) {
                        var t = e.type,
                            r = e.id || ae.getUniqueId();
                        this.id = r, this.type = t
                    }
                    return e.prototype.set = function (e) {
                        e.file = e.file || e.fileInputId && ae.getFileUrl(e.fileInputId), this.body = {
                            id: this.id,
                            chatType: e.chatType || "singleChat",
                            type: "img",
                            file: e.file,
                            width: e.width,
                            height: e.height,
                            to: e.to,
                            from: e.from || "",
                            roomType: e.roomType,
                            success: e.success,
                            fail: e.fail,
                            ext: e.ext,
                            time: Date.now(),
                            onFileUploadError: e.onFileUploadError,
                            onFileUploadComplete: e.onFileUploadComplete,
                            onFileUploadProgress: e.onFileUploadProgress,
                            body: e.body
                        }
                    }, e.prototype.setChatType = function (e) {
                        return !!this.body && (this.body.chatType = e, !0)
                    }, e.prototype.setGroup = function (e) {
                        return !!this.body && (this.body.group = e, !0)
                    }, e.create = function (e) {
                        return {
                            id: ae.getUniqueId(),
                            chatType: e.chatType,
                            type: "img",
                            url: e.url,
                            width: e.width,
                            height: e.height,
                            file: e.file,
                            to: e.to,
                            from: e.from || "",
                            ext: e.ext,
                            time: Date.now(),
                            msgConfig: e.msgConfig,
                            onFileUploadError: e.onFileUploadError,
                            onFileUploadComplete: e.onFileUploadComplete,
                            onFileUploadProgress: e.onFileUploadProgress,
                            isChatThread: e.isChatThread
                        }
                    }, e
                }(),
                _e = function () {
                    function e(e) {
                        var t = e.type,
                            r = e.id || ae.getUniqueId();
                        this.id = r, this.type = t
                    }
                    return e.prototype.set = function (e) {
                        e.file = e.file || e.fileInputId && ae.getFileUrl(e.fileInputId), this.body = {
                            id: this.id,
                            chatType: e.chatType || "singleChat",
                            type: "audio",
                            file: e.file,
                            filename: e.filename,
                            length: e.length,
                            file_length: e.file_length,
                            fileInputId: e.fileInputId,
                            to: e.to,
                            from: e.from,
                            roomType: e.roomType,
                            success: e.success,
                            fail: e.fail,
                            ext: e.ext,
                            time: Date.now(),
                            onFileUploadError: e.onFileUploadError,
                            onFileUploadComplete: e.onFileUploadComplete,
                            onFileUploadProgress: e.onFileUploadProgress,
                            body: e.body
                        }
                    }, e.prototype.setChatType = function (e) {
                        return !!this.body && (this.body.chatType = e, !0)
                    }, e.prototype.setGroup = function (e) {
                        return !!this.body && (this.body.group = e, !0)
                    }, e.create = function (e) {
                        return {
                            id: ae.getUniqueId(),
                            chatType: e.chatType,
                            type: "audio",
                            filename: e.filename,
                            length: e.length,
                            file: e.file,
                            to: e.to,
                            from: e.from || "",
                            ext: e.ext,
                            time: Date.now(),
                            onFileUploadError: e.onFileUploadError,
                            onFileUploadComplete: e.onFileUploadComplete,
                            onFileUploadProgress: e.onFileUploadProgress,
                            body: e.body,
                            file_length: e.file_length,
                            msgConfig: e.msgConfig,
                            isChatThread: e.isChatThread
                        }
                    }, e
                }(),
                Te = function () {
                    function e(e) {
                        var t = e.type,
                            r = e.id;
                        this.id = r, this.type = t
                    }
                    return e.prototype.set = function (e) {
                        e.file = e.file || e.fileInputId && ae.getFileUrl(e.fileInputId), this.body = {
                            id: this.id,
                            chatType: e.chatType || "singleChat",
                            type: "video",
                            file: e.file,
                            filename: e.filename,
                            length: e.length,
                            file_length: e.file_length,
                            fileInputId: e.fileInputId,
                            to: e.to,
                            from: e.from,
                            roomType: e.roomType,
                            success: e.success,
                            fail: e.fail,
                            ext: e.ext,
                            time: Date.now(),
                            apiUrl: e.apiUrl,
                            onFileUploadError: e.onFileUploadError,
                            onFileUploadComplete: e.onFileUploadComplete,
                            onFileUploadProgress: e.onFileUploadProgress,
                            body: e.body
                        }
                    }, e.prototype.setChatType = function (e) {
                        return !!this.body && (this.body.chatType = e, !0)
                    }, e.prototype.setGroup = function (e) {
                        return !!this.body && (this.body.group = e, !0)
                    }, e.create = function (e) {
                        return {
                            id: ae.getUniqueId(),
                            chatType: e.chatType || "singleChat",
                            type: "video",
                            file: e.file,
                            filename: e.filename,
                            length: e.length,
                            file_length: e.file_length,
                            fileInputId: e.fileInputId,
                            to: e.to,
                            from: e.from || "",
                            ext: e.ext,
                            time: Date.now(),
                            onFileUploadError: e.onFileUploadError,
                            onFileUploadComplete: e.onFileUploadComplete,
                            onFileUploadProgress: e.onFileUploadProgress,
                            body: e.body,
                            msgConfig: e.msgConfig,
                            isChatThread: e.isChatThread
                        }
                    }, e
                }(),
                Oe = function () {
                    function e(e) {
                        var t = e.type,
                            r = e.id;
                        this.id = r, this.type = t
                    }
                    return e.prototype.set = function (e) {
                        e.file = e.file || e.fileInputId && ae.getFileUrl(e.fileInputId), this.body = {
                            id: this.id,
                            chatType: e.chatType || "singleChat",
                            type: "file",
                            file: e.file,
                            filename: e.filename,
                            fileInputId: e.fileInputId,
                            to: e.to,
                            from: e.from,
                            roomType: e.roomType,
                            success: e.success,
                            fail: e.fail,
                            ext: e.ext,
                            time: Date.now(),
                            onFileUploadError: e.onFileUploadError,
                            onFileUploadComplete: e.onFileUploadComplete,
                            onFileUploadProgress: e.onFileUploadProgress,
                            body: e.body
                        }
                    }, e.prototype.setChatType = function (e) {
                        return !!this.body && (this.body.chatType = e, !0)
                    }, e.prototype.setGroup = function (e) {
                        return !!this.body && (this.body.group = e, !0)
                    }, e.create = function (e) {
                        return {
                            id: ae.getUniqueId(),
                            chatType: e.chatType || "singleChat",
                            type: "file",
                            file: e.file,
                            filename: e.filename,
                            fileInputId: e.fileInputId,
                            to: e.to,
                            from: e.from || "",
                            ext: e.ext,
                            onFileUploadError: e.onFileUploadError,
                            onFileUploadComplete: e.onFileUploadComplete,
                            onFileUploadProgress: e.onFileUploadProgress,
                            body: e.body,
                            time: Date.now(),
                            msgConfig: e.msgConfig,
                            isChatThread: e.isChatThread
                        }
                    }, e
                }(),
                Ie = function () {
                    function e(t, r) {
                        return this.type = t, this.id = r || ae.getUniqueId(), e.createOldMsg({
                            type: t,
                            id: this.id
                        })
                    }
                    return e.createOldMsg = function (e) {
                        switch (e.type) {
                            case "read":
                                return new de({
                                    type: "read",
                                    id: e.id
                                });
                            case "delivery":
                                return new he({
                                    type: "delivery",
                                    id: e.id
                                });
                            case "channel":
                                return new fe({
                                    type: "channel",
                                    id: e.id
                                });
                            case "txt":
                                return new me({
                                    type: "txt",
                                    id: e.id
                                });
                            case "cmd":
                                return new ye({
                                    type: "cmd",
                                    id: e.id
                                });
                            case "custom":
                                return new ge({
                                    type: "custom",
                                    id: e.id
                                });
                            case "loc":
                                return new ve({
                                    type: "loc",
                                    id: e.id
                                });
                            case "img":
                                return new Ee({
                                    type: "img",
                                    id: e.id
                                });
                            case "audio":
                                return new _e({
                                    type: "audio",
                                    id: e.id
                                });
                            case "video":
                                return new Te({
                                    type: "video",
                                    id: e.id
                                });
                            case "file":
                                return new Oe({
                                    type: "file",
                                    id: e.id
                                })
                        }
                    }, e.create = function (e) {
                        return "txt" !== (t = e).type || "version" in t ? function (e) {
                            return "img" === e.type && !("version" in e)
                        }(e) ? Ee.create(e) : function (e) {
                            return "cmd" === e.type && !("version" in e)
                        }(e) ? ye.create(e) : function (e) {
                            return "file" === e.type && !("version" in e)
                        }(e) ? Oe.create(e) : function (e) {
                            return "audio" === e.type && !("version" in e)
                        }(e) ? _e.create(e) : function (e) {
                            return "video" === e.type && !("version" in e)
                        }(e) ? Te.create(e) : function (e) {
                            return "custom" === e.type && !("version" in e)
                        }(e) ? ge.create(e) : function (e) {
                            return "loc" === e.type && !("version" in e)
                        }(e) ? ve.create(e) : function (e) {
                            return "channel" === e.type && !("version" in e)
                        }(e) ? fe.create(e) : function (e) {
                            return "delivery" === e.type && !("version" in e)
                        }(e) ? he.create(e) : function (e) {
                            return "read" === e.type && !("version" in e)
                        }(e) ? de.create(e) : {} : me.create(e);
                        var t
                    }, e.prototype.set = function (e) {}, e
                }(),
                Re = {
                    0: "TEXT",
                    1: "IMAGE",
                    2: "VIDEO",
                    3: "LOCATION",
                    4: "VOICE",
                    5: "FILE",
                    6: "COMMAND",
                    7: "CUSTOM"
                };

            function Se(e) {
                for (var t = {}, r = 0; r < e.length; r++)
                    if (8 === e[r].type) t[e[r].key] = JSON.parse(e[r].stringValue);
                    else if (7 === e[r].type) t[e[r].key] = e[r].stringValue;
                else if (6 === e[r].type) t[e[r].key] = e[r].doubleValue;
                else if (5 === e[r].type) t[e[r].key] = e[r].floatValue;
                else if (1 === e[r].type) {
                    var o = e[r].varintValue,
                        n = new(f())(o.low, o.high, o.unsigned).toString();
                    t[e[r].key] = 0 !== Number(n)
                } else 2 !== e[r].type && 3 !== e[r].type && 4 !== e[r].type || (o = e[r].varintValue, n = new(f())(o.low, o.high, o.unsigned).toString(), t[e[r].key] = Number(n));
                return t
            }

            function Ne(e, t, r) {
                if (this.delivery && e !== t) {
                    var o = this.getUniqueId(),
                        n = new Ie("delivery", o);
                    n.set({
                        ackId: r,
                        to: e
                    }), Z.debug("send delivery ack"), this.send(n.body)
                }
            }
            const Ce = function (e, t, r, o) {
                    var n, i, s, a, c, u, l, p = new(f())(e.timestamp.low, e.timestamp.high, e.timestamp.unsigned).toString(),
                        d = this.root.lookup("easemob.pb.MessageBody").decode(e.payload),
                        h = 1;
                    if (e.meta && e.meta.length) switch (ae.parseNotify(e.meta).is_online) {
                        case 0:
                            h = 0;
                            break;
                        case 1:
                            h = 1;
                            break;
                        default:
                            h = 2
                    } else h = 3;
                    var m, y = new(f())(e.id.low, e.id.high, e.id.unsigned).toString(),
                        g = d.ackMessageId ? new(f())(d.ackMessageId.low, d.ackMessageId.high, d.ackMessageId.unsigned).toString() : "",
                        v = "",
                        E = d.from && d.from.name,
                        _ = d.to && d.to.name;
                    switch (Z.debug("thirdMessage:", d), d.type) {
                        case 1:
                            v = "chat", "agoraToken" === this.grantType && (v = "singleChat"), this.delivery && Ne.call(this, E, _, y);
                            break;
                        case 2:
                            v = "groupchat", "agoraToken" === this.grantType && (v = "groupChat");
                            break;
                        case 3:
                            v = "chatroom", "agoraToken" === this.grantType && (v = "chatRoom"), h = 1;
                            break;
                        case 4:
                            v = "read_ack";
                            var T = void 0;
                            return d.ext[0] && JSON.parse(d.ext[0].stringValue) ? (T = {
                                id: y,
                                type: "read",
                                from: E,
                                to: _,
                                mid: g,
                                groupReadCount: d.ext[0] && JSON.parse(d.ext[0].stringValue),
                                ackContent: d.ackContent,
                                onlineState: h
                            }, this.onReadMessage && this.onReadMessage(T), void(null === (n = this.eventHandler) || void 0 === n || n.dispatch("onReadMessage", T))) : (T = {
                                id: y,
                                type: "read",
                                from: E,
                                to: _,
                                mid: g,
                                onlineState: h
                            }, this.onReadMessage && this.onReadMessage(T), void(null === (i = this.eventHandler) || void 0 === i || i.dispatch("onReadMessage", T)));
                        case 5:
                            v = "deliver_ack", this.onDeliveredMessage && this.onDeliveredMessage({
                                id: y,
                                type: "delivery",
                                from: E,
                                to: _,
                                mid: g,
                                onlineState: h
                            });
                            var O = {
                                id: y,
                                type: "delivery",
                                from: E,
                                to: _,
                                mid: g,
                                onlineState: h
                            };
                            return void(null === (s = this.eventHandler) || void 0 === s || s.dispatch("onDeliveredMessage", O));
                        case 6:
                            v = "recall";
                            var I = {
                                id: y,
                                from: E || "admin",
                                to: _,
                                mid: g,
                                onlineState: h
                            };
                            return this.onRecallMessage && this.onRecallMessage(I), void(null === (a = this.eventHandler) || void 0 === a || a.dispatch("onRecallMessage", I));
                        case 7:
                            this.onChannelMessage && this.onChannelMessage({
                                id: y,
                                type: "channel",
                                chatType: "singleChat",
                                from: E,
                                to: _,
                                time: Number(p),
                                onlineState: h
                            });
                            var R = {
                                id: y,
                                type: "channel",
                                chatType: "singleChat",
                                from: E,
                                to: _,
                                time: Number(p),
                                onlineState: h
                            };
                            return void(null === (c = this.eventHandler) || void 0 === c || c.dispatch("onChannelMessage", R));
                        default:
                            return void Z.error("unexpected message type: " + d.type)
                    }
                    "chat" === v.toLowerCase() || "singleChat" === v ? m = "singleChat" : "groupchat" === v.toLowerCase() || "groupChat" === v ? m = "groupChat" : (m = "chatRoom", h = 1);
                    for (var S = 0; S < d.contents.length; S++) {
                        var N = {},
                            C = {},
                            A = t.errorCode > 0,
                            b = t.errorCode,
                            M = t.reason,
                            w = d.contents[S],
                            U = {},
                            k = [],
                            P = [],
                            x = null,
                            j = null,
                            L = void 0;
                        if (d.ext && (U = Se(d.ext)), d.meta && "string" == typeof d.meta) {
                            var D = JSON.parse(d.meta);
                            D.reaction && (k = D.reaction).forEach((function (e) {
                                e.isAddedBySelf = e.state, delete e.state
                            })), D.translations && (P = D.translations), D.thread && "{}" !== JSON.stringify(D.thread) && (x = {
                                messageId: D.thread.msg_parent_id,
                                parentId: D.thread.muc_parent_id,
                                chatThreadName: D.thread.thread_name
                            }), D.thread_overview && "{}" !== JSON.stringify(D.thread_overview) && (j = {
                                id: D.thread_overview.id,
                                parentId: D.thread_overview.muc_parent_id,
                                name: D.thread_overview.name,
                                lastMessage: pe(D.thread_overview.last_message),
                                createTimestamp: D.thread_overview.create_timestamp,
                                updateTimestamp: D.thread_overview.update_timestamp,
                                messageCount: D.thread_overview.message_count
                            })
                        }
                        switch (w.type) {
                            case 0:
                                !(N = {
                                    id: y,
                                    type: v,
                                    contentsType: Re[w.type],
                                    from: E,
                                    to: _,
                                    data: w.text,
                                    ext: U,
                                    sourceMsg: w.text,
                                    time: p,
                                    msgConfig: d.msgConfig,
                                    onlineState: h
                                }).msgConfig && delete d.msgConfig, N.error = A, N.errorText = M, N.errorCode = b, !r && this.onTextMessage && this.onTextMessage(N);
                                var G = {
                                    id: y,
                                    type: "txt",
                                    chatType: m,
                                    msg: w.text,
                                    to: _,
                                    from: E,
                                    ext: U,
                                    time: Number(p),
                                    onlineState: h
                                };
                                N.msgConfig && (G.msgConfig = N.msgConfig), k.length > 0 && (G.reactions = k), x && (G.chatThread = x), j && (G.chatThreadOverview = j), P.length > 0 && (G.translations = P), C = G, !r && this.eventHandler && this.eventHandler.dispatch("onTextMessage", G);
                                break;
                            case 1:
                                var B = (null === (u = null == w ? void 0 : w.size) || void 0 === u ? void 0 : u.width) || 0,
                                    H = (null === (l = null == w ? void 0 : w.size) || void 0 === l ? void 0 : l.height) || 0;
                                L = this.useOwnUploadFun ? w.remotePath : (w.remotePath && this.apiUrl + w.remotePath.substr(w.remotePath.indexOf("/", 9))) + "?em-redirect=true", w.secretKey && !this.useOwnUploadFun && (L = L + "&share-secret=" + w.secretKey), !(N = {
                                    id: y,
                                    type: v,
                                    contentsType: Re[w.type],
                                    from: E,
                                    to: _,
                                    url: L,
                                    secret: w.secretKey,
                                    filename: w.displayName,
                                    thumb: this.useOwnUploadFun ? "" : L + "&thumbnail=true",
                                    thumb_secret: w.secretKey,
                                    file_length: w.fileLength || "",
                                    width: B,
                                    height: H,
                                    filetype: w.filetype || "",
                                    accessToken: this.token,
                                    ext: U,
                                    time: p,
                                    msgConfig: d.msgConfig,
                                    onlineState: h
                                }).delay && delete N.delay, !N.msgConfig && delete d.msgConfig, N.error = A, N.errorText = M, N.errorCode = b, !r && this.onPictureMessage && this.onPictureMessage(N);
                                var F = {
                                    id: y,
                                    type: "img",
                                    chatType: m,
                                    from: E,
                                    to: _,
                                    url: L || "",
                                    file: {},
                                    width: B,
                                    height: H,
                                    secret: w.secretKey || "",
                                    thumb: this.useOwnUploadFun ? "" : L + "&thumbnail=true",
                                    thumb_secret: w.secretKey,
                                    ext: U,
                                    time: Number(p),
                                    onlineState: h
                                };
                                N.msgConfig && (F.msgConfig = N.msgConfig), k.length > 0 && (F.reactions = k), x && (F.chatThread = x), j && (F.chatThreadOverview = j), C = F, !r && this.eventHandler && this.eventHandler.dispatch("onImageMessage", F);
                                break;
                            case 2:
                                L = this.useOwnUploadFun ? w.remotePath : (w.remotePath && this.apiUrl + w.remotePath.substr(w.remotePath.indexOf("/", 9))) + "?em-redirect=true", w.secretKey && !this.useOwnUploadFun && (L = L + "&share-secret=" + w.secretKey), !(N = {
                                    id: y,
                                    type: v,
                                    contentsType: Re[w.type],
                                    from: E,
                                    to: _,
                                    url: L,
                                    secret: w.secretKey,
                                    filename: w.displayName,
                                    length: w.duration || "",
                                    file_length: w.fileLength || "",
                                    filetype: w.filetype || "",
                                    accessToken: this.token || "",
                                    ext: U,
                                    time: p,
                                    msgConfig: d.msgConfig,
                                    onlineState: h
                                }).delay && delete N.delay, !N.msgConfig && delete d.msgConfig, N.error = A, N.errorText = M, N.errorCode = b, !r && this.onVideoMessage && this.onVideoMessage(N);
                                var W = {
                                    id: y,
                                    type: "video",
                                    chatType: m,
                                    from: E,
                                    to: _,
                                    url: L,
                                    secret: w.secretKey,
                                    filename: w.displayName,
                                    length: w.duration || 0,
                                    file: {},
                                    file_length: w.fileLength || 0,
                                    filetype: w.filetype || "",
                                    accessToken: this.token || "",
                                    ext: U,
                                    time: Number(p),
                                    onlineState: h
                                };
                                N.msgConfig && (W.msgConfig = N.msgConfig), k.length > 0 && (W.reactions = k), x && (W.chatThread = x), j && (W.chatThreadOverview = j), C = W, !r && this.eventHandler && this.eventHandler.dispatch("onVideoMessage", W);
                                break;
                            case 3:
                                !(N = {
                                    id: y,
                                    type: v,
                                    contentsType: Re[w.type],
                                    from: E,
                                    to: _,
                                    addr: w.address,
                                    buildingName: w.buildingName,
                                    lat: w.latitude,
                                    lng: w.longitude,
                                    ext: U,
                                    time: p,
                                    msgConfig: d.msgConfig,
                                    onlineState: h
                                }).delay && delete N.delay, !N.msgConfig && delete d.msgConfig, N.error = A, N.errorText = M, N.errorCode = b, !r && this.onLocationMessage && this.onLocationMessage(N);
                                var q = {
                                    id: y,
                                    type: "loc",
                                    chatType: m,
                                    from: E,
                                    to: _,
                                    buildingName: w.buildingName,
                                    addr: w.address,
                                    lat: w.latitude,
                                    lng: w.longitude,
                                    ext: U,
                                    time: Number(p),
                                    onlineState: h
                                };
                                N.msgConfig && (q.msgConfig = N.msgConfig), k.length > 0 && (q.reactions = k), x && (q.chatThread = x), j && (q.chatThreadOverview = j), C = q, !r && this.eventHandler && this.eventHandler.dispatch("onLocationMessage", q);
                                break;
                            case 4:
                                L = this.useOwnUploadFun ? w.remotePath : (w.remotePath && this.apiUrl + w.remotePath.substr(w.remotePath.indexOf("/", 9))) + "?em-redirect=true", w.secretKey && !this.useOwnUploadFun && (L = L + "&share-secret=" + w.secretKey), !(N = {
                                    id: y,
                                    type: v,
                                    contentsType: Re[w.type],
                                    from: E,
                                    to: _,
                                    url: L,
                                    secret: w.secretKey,
                                    filename: w.displayName,
                                    file_length: w.fileLength || "",
                                    accessToken: this.token || "",
                                    ext: U,
                                    length: w.duration,
                                    time: p,
                                    msgConfig: d.msgConfig,
                                    onlineState: h
                                }).delay && delete N.delay, !N.msgConfig && delete d.msgConfig, N.error = A, N.errorText = M, N.errorCode = b, !r && this.onAudioMessage && this.onAudioMessage(N);
                                var z = {
                                    id: y,
                                    type: "audio",
                                    chatType: m,
                                    from: E,
                                    to: _,
                                    url: L,
                                    secret: w.secretKey,
                                    file: {},
                                    filename: w.displayName,
                                    length: w.duration || 0,
                                    file_length: w.fileLength || 0,
                                    filetype: w.filetype || "",
                                    accessToken: this.token || "",
                                    ext: U,
                                    time: Number(p),
                                    onlineState: h
                                };
                                N.msgConfig && (z.msgConfig = N.msgConfig), k.length > 0 && (z.reactions = k), x && (z.chatThread = x), j && (z.chatThreadOverview = j), C = z, !r && this.eventHandler && this.eventHandler.dispatch("onAudioMessage", z);
                                break;
                            case 5:
                                L = this.useOwnUploadFun ? w.remotePath : (w.remotePath && this.apiUrl + w.remotePath.substr(w.remotePath.indexOf("/", 9))) + "?em-redirect=true", w.secretKey && !this.useOwnUploadFun && (L = L + "&share-secret=" + w.secretKey), !(N = {
                                    id: y,
                                    type: v,
                                    contentsType: Re[w.type],
                                    from: E,
                                    to: _,
                                    url: L,
                                    secret: w.secretKey,
                                    filename: w.displayName,
                                    file_length: w.fileLength,
                                    accessToken: this.token || "",
                                    ext: U,
                                    time: p,
                                    msgConfig: d.msgConfig,
                                    onlineState: h
                                }).delay && delete N.delay, !N.msgConfig && delete d.msgConfig, N.error = A, N.errorText = M, N.errorCode = b, !r && this.onFileMessage && this.onFileMessage(N);
                                var K = {
                                    id: y,
                                    type: "file",
                                    chatType: m,
                                    from: E,
                                    to: _,
                                    url: L,
                                    secret: w.secretKey,
                                    file: {},
                                    filename: w.displayName,
                                    length: w.duration || 0,
                                    file_length: w.fileLength || 0,
                                    filetype: w.filetype || "",
                                    accessToken: this.token || "",
                                    ext: U,
                                    time: Number(p),
                                    onlineState: h
                                };
                                N.msgConfig && (K.msgConfig = N.msgConfig), k.length > 0 && (K.reactions = k), x && (K.chatThread = x), j && (K.chatThreadOverview = j), C = K, !r && this.eventHandler && this.eventHandler.dispatch("onFileMessage", K);
                                break;
                            case 6:
                                !(N = {
                                    id: y,
                                    type: v,
                                    contentsType: Re[w.type],
                                    from: E,
                                    to: _,
                                    action: w.action,
                                    ext: U,
                                    time: p,
                                    msgConfig: d.msgConfig,
                                    onlineState: h
                                }).msgConfig && delete d.msgConfig, N.error = A, N.errorText = M, N.errorCode = b, !r && this.onCmdMessage && this.onCmdMessage(N);
                                var J = {
                                    id: y,
                                    type: "cmd",
                                    chatType: m,
                                    from: E,
                                    to: _,
                                    action: w.action,
                                    ext: U,
                                    time: Number(p),
                                    onlineState: h
                                };
                                N.msgConfig && (J.msgConfig = N.msgConfig), k.length > 0 && (J.reactions = k), x && (J.chatThread = x), j && (J.chatThreadOverview = j), C = J, !r && this.eventHandler && this.eventHandler.dispatch("onCmdMessage", J);
                                break;
                            case 7:
                                var V = {},
                                    X = {};
                                d.contents[0].customExts && (V = Se(d.contents[0].customExts)), d.contents[0].params && (X = Se(d.contents[0].params)), N = {
                                    id: y,
                                    type: v,
                                    contentsType: Re[w.type],
                                    from: E,
                                    to: _,
                                    customEvent: w.customEvent,
                                    params: X,
                                    customExts: V,
                                    ext: U,
                                    time: p,
                                    onlineState: h
                                }, !r && this.onCustomMessage && this.onCustomMessage(N);
                                var Y = {
                                    id: y,
                                    type: "custom",
                                    chatType: m,
                                    from: E,
                                    to: _,
                                    customEvent: w.customEvent,
                                    params: X,
                                    customExts: V,
                                    ext: U,
                                    time: Number(p),
                                    onlineState: h
                                };
                                N.msgConfig && (Y.msgConfig = N.msgConfig), k.length > 0 && (Y.reactions = k), x && (Y.chatThread = x), j && (Y.chatThreadOverview = j), C = Y, !r && this.eventHandler && this.eventHandler.dispatch("onCustomMessage", Y);
                                break;
                            default:
                                Z.error("Unknow message type, message:", w)
                        }
                        return o ? C : N
                    }
                },
                Ae = function (e) {
                    var t, r = this.root.lookup("easemob.pb.MUCBody").decode(e.payload),
                        o = r.operation,
                        n = 1 === (null === (t = null == r ? void 0 : r.eventInfo) || void 0 === t ? void 0 : t.eventType),
                        i = this.context,
                        s = i.userId,
                        a = i.jid,
                        c = r.from.name === s && a.clientResource !== r.from.clientResource;
                    Z.debug("onMucMessage", r),
                        function (e) {
                            var t, o, i, a, u, l, p = this;
                            return r.isThread ? (i = {
                                id: r.mucId.name,
                                name: r.mucName,
                                operation: "",
                                parentId: r.mucParentId.name,
                                operator: r.from.name,
                                userName: r.to.length ? r.to[0].name : ""
                            }, u = {
                                chatThreadId: r.mucId.name,
                                chatThreadName: r.mucName,
                                operation: "",
                                parentId: r.mucParentId.name
                            }) : n ? a = {
                                operation: "",
                                id: r.mucId.name,
                                name: r.mucName,
                                operator: r.from.name,
                                to: r.to.length ? r.to[0].name : "",
                                serverInfo: {
                                    id: JSON.parse(null === (t = null == r ? void 0 : r.eventInfo) || void 0 === t ? void 0 : t.ext).server_id || ""
                                }
                            } : (o = {
                                type: "",
                                owner: r.from.name,
                                gid: r.mucId.name,
                                from: r.from.name,
                                fromJid: r.from,
                                to: r.to.length ? r.to[0].name : "",
                                toJid: r.to,
                                chatroom: r.isChatroom,
                                status: r.status
                            }, l = {
                                operation: "",
                                id: r.mucId.name,
                                from: r.from.name,
                                to: r.to.length ? r.to[0].name : ""
                            }), ({
                                42: function () {},
                                41: function () {},
                                40: function () {},
                                39: function () {},
                                38: function () {
                                    var e;
                                    u.operation = "chatThreadNameUpdate", null === (e = p.eventHandler) || void 0 === e || e.dispatch("onMultiDeviceEvent", u)
                                },
                                37: function () {
                                    var e;
                                    i.operation = "userRemove", null === (e = p.eventHandler) || void 0 === e || e.dispatch("onChatThreadChange", i)
                                },
                                36: function () {
                                    var e;
                                    u.operation = "chatThreadLeave", null === (e = p.eventHandler) || void 0 === e || e.dispatch("onMultiDeviceEvent", u)
                                },
                                35: function () {
                                    var e;
                                    u.operation = "chatThreadJoin", null === (e = p.eventHandler) || void 0 === e || e.dispatch("onMultiDeviceEvent", u)
                                },
                                34: function () {
                                    var e;
                                    u.operation = "chatThreadDestroy", null === (e = p.eventHandler) || void 0 === e || e.dispatch("onMultiDeviceEvent", u)
                                },
                                33: function () {
                                    var e;
                                    u.operation = "chatThreadCreate", null === (e = p.eventHandler) || void 0 === e || e.dispatch("onMultiDeviceEvent", u)
                                },
                                32: function () {
                                    var e, t, n, i;
                                    o.type = r.isChatroom ? "rmChatRoomMute" : "rmGroupMute", p.onPresence && p.onPresence(o), r.isChatroom ? null === (e = p.eventHandler) || void 0 === e || e.dispatch("onChatroomChange", o) : null === (t = p.eventHandler) || void 0 === t || t.dispatch("onGroupChange", o), l.operation = "unmuteAllMembers", r.isChatroom ? null === (n = p.eventHandler) || void 0 === n || n.dispatch("onChatroomEvent", l) : null === (i = p.eventHandler) || void 0 === i || i.dispatch("onGroupEvent", l)
                                },
                                31: function () {
                                    var e, t, n, i;
                                    o.type = r.isChatroom ? "muteChatRoom" : "muteGroup", p.onPresence && p.onPresence(o), r.isChatroom ? null === (e = p.eventHandler) || void 0 === e || e.dispatch("onChatroomChange", o) : null === (t = p.eventHandler) || void 0 === t || t.dispatch("onGroupChange", o), l.operation = "muteAllMembers", r.isChatroom ? null === (n = p.eventHandler) || void 0 === n || n.dispatch("onChatroomEvent", l) : null === (i = p.eventHandler) || void 0 === i || i.dispatch("onGroupEvent", l)
                                },
                                30: function () {
                                    var e, t, n, i;
                                    o.type = r.isChatroom ? "rmUserFromChatRoomWhiteList" : "rmUserFromGroupWhiteList", p.onPresence && p.onPresence(o), r.isChatroom ? null === (e = p.eventHandler) || void 0 === e || e.dispatch("onChatroomChange", o) : null === (t = p.eventHandler) || void 0 === t || t.dispatch("onGroupChange", o), l.operation = "removeAllowlistMember", r.isChatroom ? null === (n = p.eventHandler) || void 0 === n || n.dispatch("onChatroomEvent", l) : null === (i = p.eventHandler) || void 0 === i || i.dispatch("onGroupEvent", l)
                                },
                                29: function () {
                                    var e, t, n, i;
                                    o.type = r.isChatroom ? "addUserToChatRoomWhiteList" : "addUserToGroupWhiteList", p.onPresence && p.onPresence(o), r.isChatroom ? null === (e = p.eventHandler) || void 0 === e || e.dispatch("onChatroomChange", o) : null === (t = p.eventHandler) || void 0 === t || t.dispatch("onGroupChange", o), l.operation = "addUserToAllowlist", r.isChatroom ? null === (n = p.eventHandler) || void 0 === n || n.dispatch("onChatroomEvent", l) : null === (i = p.eventHandler) || void 0 === i || i.dispatch("onGroupEvent", l)
                                },
                                28: function () {
                                    var e, t, n, i;
                                    o.type = "deleteFile", p.onPresence && p.onPresence(o), r.isChatroom ? null === (e = p.eventHandler) || void 0 === e || e.dispatch("onChatroomChange", o) : null === (t = p.eventHandler) || void 0 === t || t.dispatch("onGroupChange", o), l.operation = "deleteFile", r.isChatroom ? null === (n = p.eventHandler) || void 0 === n || n.dispatch("onChatroomEvent", l) : null === (i = p.eventHandler) || void 0 === i || i.dispatch("onGroupEvent", l)
                                },
                                27: function () {
                                    var e, t, n, i;
                                    o.type = "uploadFile", p.onPresence && p.onPresence(o), r.isChatroom ? null === (e = p.eventHandler) || void 0 === e || e.dispatch("onChatroomChange", o) : null === (t = p.eventHandler) || void 0 === t || t.dispatch("onGroupChange", o), l.operation = "uploadFile", r.isChatroom ? null === (n = p.eventHandler) || void 0 === n || n.dispatch("onChatroomEvent", l) : null === (i = p.eventHandler) || void 0 === i || i.dispatch("onGroupEvent", l)
                                },
                                26: function () {
                                    var e, t, n, i;
                                    o.type = "deleteAnnouncement", p.onPresence && p.onPresence(o), r.isChatroom ? null === (e = p.eventHandler) || void 0 === e || e.dispatch("onChatroomChange", o) : null === (t = p.eventHandler) || void 0 === t || t.dispatch("onGroupChange", o), l.operation = "deleteAnnouncement", r.isChatroom ? null === (n = p.eventHandler) || void 0 === n || n.dispatch("onChatroomEvent", l) : null === (i = p.eventHandler) || void 0 === i || i.dispatch("onGroupEvent", l)
                                },
                                25: function () {
                                    var e, t, n, i;
                                    o.type = "updateAnnouncement", p.onPresence && p.onPresence(o), r.isChatroom ? null === (e = p.eventHandler) || void 0 === e || e.dispatch("onChatroomChange", o) : null === (t = p.eventHandler) || void 0 === t || t.dispatch("onGroupChange", o), l.operation = "updateAnnouncement", r.isChatroom ? null === (n = p.eventHandler) || void 0 === n || n.dispatch("onChatroomEvent", l) : null === (i = p.eventHandler) || void 0 === i || i.dispatch("onGroupEvent", l)
                                },
                                24: function () {
                                    var e, t, i, s, u, d;
                                    n ? c ? (a.operation = "channelUnMuteMember", null === (e = p.eventHandler) || void 0 === e || e.dispatch("onMultiDeviceEvent", a)) : (a.operation = "unmuteMember", null === (t = p.eventHandler) || void 0 === t || t.dispatch("onChannelEvent", a)) : (o.type = "removeMute", p.onPresence && p.onPresence(o), r.isChatroom ? null === (i = p.eventHandler) || void 0 === i || i.dispatch("onChatroomChange", o) : null === (s = p.eventHandler) || void 0 === s || s.dispatch("onGroupChange", o), l.operation = "unmuteMember", r.isChatroom ? null === (u = p.eventHandler) || void 0 === u || u.dispatch("onChatroomEvent", l) : null === (d = p.eventHandler) || void 0 === d || d.dispatch("onGroupEvent", l))
                                },
                                23: function () {
                                    var e, t, i, s, u, d;
                                    n ? c ? (a.operation = "channelMuteMember", null === (e = p.eventHandler) || void 0 === e || e.dispatch("onMultiDeviceEvent", a)) : (a.operation = "muteMember", null === (t = p.eventHandler) || void 0 === t || t.dispatch("onChannelEvent", a)) : (o.type = "addMute", p.onPresence && p.onPresence(o), r.isChatroom ? null === (i = p.eventHandler) || void 0 === i || i.dispatch("onChatroomChange", o) : null === (s = p.eventHandler) || void 0 === s || s.dispatch("onGroupChange", o), l.operation = "muteMember", r.isChatroom ? null === (u = p.eventHandler) || void 0 === u || u.dispatch("onChatroomEvent", l) : null === (d = p.eventHandler) || void 0 === d || d.dispatch("onGroupEvent", l))
                                },
                                22: function () {
                                    var e, t, n, i;
                                    o.type = "removeAdmin", p.onPresence && p.onPresence(o), r.isChatroom ? null === (e = p.eventHandler) || void 0 === e || e.dispatch("onChatroomChange", o) : null === (t = p.eventHandler) || void 0 === t || t.dispatch("onGroupChange", o), l.operation = "removeAdmin", r.isChatroom ? null === (n = p.eventHandler) || void 0 === n || n.dispatch("onChatroomEvent", l) : null === (i = p.eventHandler) || void 0 === i || i.dispatch("onGroupEvent", l)
                                },
                                21: function () {
                                    var e, t, n, i;
                                    o.type = "addAdmin", p.onPresence && p.onPresence(o), r.isChatroom ? null === (e = p.eventHandler) || void 0 === e || e.dispatch("onChatroomChange", o) : null === (t = p.eventHandler) || void 0 === t || t.dispatch("onGroupChange", o), l.operation = "setAdmin", r.isChatroom ? null === (n = p.eventHandler) || void 0 === n || n.dispatch("onChatroomEvent", l) : null === (i = p.eventHandler) || void 0 === i || i.dispatch("onGroupEvent", l)
                                },
                                20: function () {
                                    var e, t, n, i;
                                    o.type = "changeOwner", p.onPresence && p.onPresence(o), r.isChatroom ? null === (e = p.eventHandler) || void 0 === e || e.dispatch("onChatroomChange", o) : null === (t = p.eventHandler) || void 0 === t || t.dispatch("onGroupChange", o), l.operation = "changeOwner", r.isChatroom ? null === (n = p.eventHandler) || void 0 === n || n.dispatch("onChatroomEvent", l) : null === (i = p.eventHandler) || void 0 === i || i.dispatch("onGroupEvent", l)
                                },
                                19: function () {
                                    var e, t, i, s, c;
                                    if (n) return a.operation = "directJoined", void(null === (e = p.eventHandler) || void 0 === e || e.dispatch("onChannelEvent", a));
                                    o.type = "direct_joined", o.groupName = r.mucName, p.onPresence && p.onPresence(o), r.isChatroom ? null === (t = p.eventHandler) || void 0 === t || t.dispatch("onChatroomChange", o) : null === (i = p.eventHandler) || void 0 === i || i.dispatch("onGroupChange", o), l.operation = "directJoined", l.name = r.mucName, r.isChatroom ? null === (s = p.eventHandler) || void 0 === s || s.dispatch("onChatroomEvent", l) : null === (c = p.eventHandler) || void 0 === c || c.dispatch("onGroupEvent", l)
                                },
                                18: function () {
                                    var e, t, i, s, c;
                                    if (n) return a.operation = "memberAbsence", void(null === (e = p.eventHandler) || void 0 === e || e.dispatch("onChannelEvent", a));
                                    o.type = r.isChatroom ? "leaveChatRoom" : "leaveGroup", p.onPresence && p.onPresence(o), r.isChatroom ? null === (t = p.eventHandler) || void 0 === t || t.dispatch("onChatroomChange", o) : null === (i = p.eventHandler) || void 0 === i || i.dispatch("onGroupChange", o), l.operation = "memberAbsence", r.isChatroom ? null === (s = p.eventHandler) || void 0 === s || s.dispatch("onChatroomEvent", l) : null === (c = p.eventHandler) || void 0 === c || c.dispatch("onGroupEvent", l)
                                },
                                17: function () {
                                    var e, t, i, s, c;
                                    if (n) return a.operation = "memberPresence", void(null === (e = p.eventHandler) || void 0 === e || e.dispatch("onChannelEvent", a));
                                    o.type = r.isChatroom ? "memberJoinChatRoomSuccess" : "memberJoinPublicGroupSuccess", p.onPresence && p.onPresence(o), r.isChatroom ? null === (t = p.eventHandler) || void 0 === t || t.dispatch("onChatroomChange", o) : null === (i = p.eventHandler) || void 0 === i || i.dispatch("onGroupChange", o), l.operation = "memberPresence", r.isChatroom ? null === (s = p.eventHandler) || void 0 === s || s.dispatch("onChatroomEvent", l) : null === (c = p.eventHandler) || void 0 === c || c.dispatch("onGroupEvent", l)
                                },
                                16: function () {
                                    var e, t;
                                    o.type = "unblock", p.onPresence && p.onPresence(o), r.isChatroom ? null === (e = p.eventHandler) || void 0 === e || e.dispatch("onChatroomChange", o) : null === (t = p.eventHandler) || void 0 === t || t.dispatch("onGroupChange", o)
                                },
                                15: function () {
                                    var e, t;
                                    o.type = "block", p.onPresence && p.onPresence(o), r.isChatroom ? null === (e = p.eventHandler) || void 0 === e || e.dispatch("onChatroomChange", o) : null === (t = p.eventHandler) || void 0 === t || t.dispatch("onGroupChange", o)
                                },
                                14: function () {
                                    var e, t, i, s, u, d, h;
                                    if (n) {
                                        var f = JSON.parse(null === (e = null == r ? void 0 : r.eventInfo) || void 0 === e ? void 0 : e.ext),
                                            m = f.channel_name,
                                            y = f.channel_desc;
                                        return a.name = m, a.description = y, void(c ? (a.operation = "channelUpdate", null === (t = p.eventHandler) || void 0 === t || t.dispatch("onMultiDeviceEvent", a)) : (a.operation = "update", null === (i = p.eventHandler) || void 0 === i || i.dispatch("onChannelEvent", a)))
                                    }
                                    o.type = "update", p.onPresence && p.onPresence(o), r.isChatroom ? null === (s = p.eventHandler) || void 0 === s || s.dispatch("onChatroomChange", o) : null === (u = p.eventHandler) || void 0 === u || u.dispatch("onGroupChange", o), l.operation = "updateInfo", r.isChatroom ? null === (d = p.eventHandler) || void 0 === d || d.dispatch("onChatroomEvent", l) : null === (h = p.eventHandler) || void 0 === h || h.dispatch("onGroupEvent", l)
                                },
                                13: function () {
                                    var e, t, n, i;
                                    o.type = "allow", o.reason = r.reason, p.onPresence && p.onPresence(o), r.isChatroom ? null === (e = p.eventHandler) || void 0 === e || e.dispatch("onChatroomChange", o) : null === (t = p.eventHandler) || void 0 === t || t.dispatch("onGroupChange", o), l.operation = "unblockMember", r.isChatroom ? null === (n = p.eventHandler) || void 0 === n || n.dispatch("onChatroomEvent", l) : null === (i = p.eventHandler) || void 0 === i || i.dispatch("onGroupEvent", l)
                                },
                                12: function () {
                                    var e, t;
                                    o.type = "ban", p.onPresence && p.onPresence(o), r.isChatroom ? null === (e = p.eventHandler) || void 0 === e || e.dispatch("onChatroomChange", o) : null === (t = p.eventHandler) || void 0 === t || t.dispatch("onGroupChange", o)
                                },
                                11: function () {
                                    var e, t;
                                    o.type = "getBlackList", p.onPresence && p.onPresence(o), r.isChatroom ? null === (e = p.eventHandler) || void 0 === e || e.dispatch("onChatroomChange", o) : null === (t = p.eventHandler) || void 0 === t || t.dispatch("onGroupChange", o)
                                },
                                10: function () {
                                    var e, t, i, s, u, d;
                                    n ? c ? (a.operation = "channelRemoveMember", null === (e = p.eventHandler) || void 0 === e || e.dispatch("onMultiDeviceEvent", a)) : (a.operation = "removed", null === (t = p.eventHandler) || void 0 === t || t.dispatch("onChannelEvent", a)) : (o.type = "removedFromGroup", o.kicked = o.to, p.onPresence && p.onPresence(o), r.isChatroom ? null === (i = p.eventHandler) || void 0 === i || i.dispatch("onChatroomChange", o) : null === (s = p.eventHandler) || void 0 === s || s.dispatch("onGroupChange", o), l.operation = "removeMember", r.isChatroom ? null === (u = p.eventHandler) || void 0 === u || u.dispatch("onChatroomEvent", l) : null === (d = p.eventHandler) || void 0 === d || d.dispatch("onGroupEvent", l))
                                },
                                9: function () {
                                    var e, t, i, s, u, d;
                                    n ? c ? (a.operation = "channelRejectInvite", null === (e = p.eventHandler) || void 0 === e || e.dispatch("onMultiDeviceEvent", a)) : (a.operation = "rejectInvite", null === (t = p.eventHandler) || void 0 === t || t.dispatch("onChannelEvent", a)) : (o.type = "invite_decline", o.kicked = o.to, p.onPresence && p.onPresence(o), r.isChatroom ? null === (i = p.eventHandler) || void 0 === i || i.dispatch("onChatroomChange", o) : null === (s = p.eventHandler) || void 0 === s || s.dispatch("onGroupChange", o), l.operation = "rejectInvite", r.isChatroom ? null === (u = p.eventHandler) || void 0 === u || u.dispatch("onChatroomEvent", l) : null === (d = p.eventHandler) || void 0 === d || d.dispatch("onGroupEvent", l))
                                },
                                8: function () {
                                    var e, t, i, s, u, d;
                                    n ? c ? (a.operation = "channelAcceptInvite", null === (e = p.eventHandler) || void 0 === e || e.dispatch("onMultiDeviceEvent", a)) : (a.operation = "acceptInvite", null === (t = p.eventHandler) || void 0 === t || t.dispatch("onChannelEvent", a)) : (o.type = "invite_accept", o.kicked = o.to, p.onPresence && p.onPresence(o), r.isChatroom ? null === (i = p.eventHandler) || void 0 === i || i.dispatch("onChatroomChange", o) : null === (s = p.eventHandler) || void 0 === s || s.dispatch("onGroupChange", o), l.operation = "acceptInvite", r.isChatroom ? null === (u = p.eventHandler) || void 0 === u || u.dispatch("onChatroomEvent", l) : null === (d = p.eventHandler) || void 0 === d || d.dispatch("onGroupEvent", l))
                                },
                                7: function () {
                                    var e, t, i, s, u, d, h;
                                    if (n) {
                                        var f = JSON.parse(null === (e = null == r ? void 0 : r.eventInfo) || void 0 === e ? void 0 : e.ext),
                                            m = f.server_name,
                                            y = f.server_icon,
                                            g = f.server_id,
                                            v = f.server_desc;
                                        return a.inviteMessage = r.reason, a.serverInfo = {
                                            name: m,
                                            id: g,
                                            icon: y,
                                            description: v
                                        }, void(c ? (a.operation = "channelInviteUser", null === (t = p.eventHandler) || void 0 === t || t.dispatch("onMultiDeviceEvent", a)) : (a.operation = "inviteToJoin", null === (i = p.eventHandler) || void 0 === i || i.dispatch("onChannelEvent", a)))
                                    }
                                    o.type = "invite", o.kicked = o.to, o.groupName = r.mucName, p.onPresence && p.onPresence(o), r.isChatroom ? null === (s = p.eventHandler) || void 0 === s || s.dispatch("onChatroomChange", o) : null === (u = p.eventHandler) || void 0 === u || u.dispatch("onGroupChange", o), l.operation = "inviteToJoin", l.name = r.mucName, r.isChatroom ? null === (d = p.eventHandler) || void 0 === d || d.dispatch("onChatroomEvent", l) : null === (h = p.eventHandler) || void 0 === h || h.dispatch("onGroupEvent", l)
                                },
                                6: function () {
                                    var e, t;
                                    o.type = "joinPublicGroupDeclined", p.onPresence && p.onPresence(o), r.isChatroom ? null === (e = p.eventHandler) || void 0 === e || e.dispatch("onChatroomChange", o) : null === (t = p.eventHandler) || void 0 === t || t.dispatch("onGroupChange", o)
                                },
                                5: function () {
                                    var e, t, i, u, d;
                                    n && c ? (null == r ? void 0 : r.to.length) > 0 && r.to[0].name === s && (a.operation = "channelJoin", null === (e = p.eventHandler) || void 0 === e || e.dispatch("onMultiDeviceEvent", a)) : (o.type = "joinPublicGroupSuccess", p.onPresence && p.onPresence(o), r.isChatroom ? null === (t = p.eventHandler) || void 0 === t || t.dispatch("onChatroomChange", o) : null === (i = p.eventHandler) || void 0 === i || i.dispatch("onGroupChange", o), l.operation = "acceptRequest", r.isChatroom ? null === (u = p.eventHandler) || void 0 === u || u.dispatch("onChatroomEvent", l) : null === (d = p.eventHandler) || void 0 === d || d.dispatch("onGroupEvent", l))
                                },
                                4: function () {
                                    var e, t, n, i;
                                    o.type = "joinGroupNotifications", o.reason = r.reason, p.onPresence && p.onPresence(o), r.isChatroom ? null === (e = p.eventHandler) || void 0 === e || e.dispatch("onChatroomChange", o) : null === (t = p.eventHandler) || void 0 === t || t.dispatch("onGroupChange", o), l.operation = "requestToJoin", r.isChatroom ? null === (n = p.eventHandler) || void 0 === n || n.dispatch("onChatroomEvent", l) : null === (i = p.eventHandler) || void 0 === i || i.dispatch("onGroupEvent", l)
                                },
                                3: function () {
                                    var e, t, i;
                                    if (n && c) return a.operation = "channelLeave", void(null === (e = p.eventHandler) || void 0 === e || e.dispatch("onMultiDeviceEvent", a));
                                    o.type = "leave", p.onPresence && p.onPresence(o), r.isChatroom ? null === (t = p.eventHandler) || void 0 === t || t.dispatch("onChatroomChange", o) : null === (i = p.eventHandler) || void 0 === i || i.dispatch("onGroupChange", o)
                                },
                                2: function () {
                                    var e, t;
                                    o.type = "join", p.onPresence && p.onPresence(o), r.isChatroom ? null === (e = p.eventHandler) || void 0 === e || e.dispatch("onChatroomChange", o) : null === (t = p.eventHandler) || void 0 === t || t.dispatch("onGroupChange", o)
                                },
                                1: function () {
                                    var e, t, i, s, u, d;
                                    n ? c ? (a.operation = "channelDestroy", null === (e = p.eventHandler) || void 0 === e || e.dispatch("onMultiDeviceEvent", a)) : (a.operation = "destroy", null === (t = p.eventHandler) || void 0 === t || t.dispatch("onChannelEvent", a)) : (o.type = "deleteGroupChat", p.onPresence && p.onPresence(o), r.isChatroom ? null === (i = p.eventHandler) || void 0 === i || i.dispatch("onChatroomChange", o) : null === (s = p.eventHandler) || void 0 === s || s.dispatch("onGroupChange", o), l.operation = "destroy", r.isChatroom ? null === (u = p.eventHandler) || void 0 === u || u.dispatch("onChatroomEvent", l) : null === (d = p.eventHandler) || void 0 === d || d.dispatch("onGroupEvent", l))
                                },
                                0: function () {
                                    var e, t;
                                    n && (c ? (a.operation = "channelCreate", null === (e = p.eventHandler) || void 0 === e || e.dispatch("onMultiDeviceEvent", a)) : (a.operation = "create", null === (t = p.eventHandler) || void 0 === t || t.dispatch("onChannelEvent", a)))
                                }
                            } [e] || function () {
                                console.error("No match operation " + e)
                            })()
                        }.call(this, o)
                };
            var be;
            ! function (e) {
                e[e.Add = 2] = "Add", e[e.Remove = 3] = "Remove", e[e.Accept = 4] = "Accept", e[e.Decline = 5] = "Decline", e[e.Ban = 6] = "Ban", e[e.Allow = 7] = "Allow"
            }(be || (be = {}));
            const Me = {
                    operatRoster: function (e, t) {
                        var r = [],
                            o = this.root.lookup("easemob.pb.RosterBody"),
                            n = o.decode(r);
                        switch (t) {
                            case "add":
                                n.operation = be.Add;
                                break;
                            case "remove":
                                n.operation = be.Remove;
                                break;
                            case "accept":
                                n.operation = be.Accept;
                                break;
                            case "decline":
                                n.operation = be.Decline;
                                break;
                            case "ban":
                                n.operation = be.Ban;
                                break;
                            case "allow":
                                n.operation = be.Allow;
                                break;
                            default:
                                Z.error("operatRoster:", t)
                        }
                        n.from = this.context.jid;
                        var i = [];
                        if ("string" == typeof e.to) i.push({
                            appKey: this.appKey || this.context.appKey,
                            name: e.to,
                            domain: "easemob.com"
                        });
                        else if (e.to instanceof Array)
                            for (var s = 0; s < e.to.length; s++) i.push({
                                appKey: this.appKey,
                                name: e.to[s],
                                domain: "easemob.com"
                            });
                        n.to = i, n.reason = e.message || "", n = o.encode(n).finish();
                        var a = this.root.lookup("easemob.pb.Meta").decode(r);
                        a.id = e.id || this.getUniqueId();
                        var c = null == H ? void 0 : H.getInstance().geOperateFun({
                            operationName: E[t]
                        });
                        C.size <= b && C.set(a.id, {
                            rpt: c,
                            requestName: E[t]
                        }), a.from = this.context.jid, a.to = {
                            domain: "@easemob.com"
                        }, a.ns = 3, a.payload = n;
                        var u = this.root.lookup("easemob.pb.CommSyncUL"),
                            l = u.decode(r);
                        l.meta = a, l = u.encode(l).finish();
                        var p = this.root.lookup("easemob.pb.MSync"),
                            d = p.decode(r);
                        d.version = this.version, d.encryptType = [0], d.command = 0, d.guid = this.jid, d.payload = l, d = p.encode(d).finish();
                        var h = this.mSync.base64transform(d);
                        this.sock.send(h)
                    },
                    handleRosterMsg: function (e) {
                        var t, r, o, n, i, s, a = this.root.lookup("easemob.pb.RosterBody").decode(e.payload),
                            c = {
                                type: "",
                                to: a.to[0].name,
                                from: a.from.name,
                                status: a.reason
                            };
                        switch (a.operation) {
                            case 2:
                                c.type = "subscribe", this.onContactInvited && this.onContactInvited(c), null === (t = this.eventHandler) || void 0 === t || t.dispatch("onContactInvited", c);
                                break;
                            case 3:
                                c.type = "unsubscribed", this.onContactDeleted && this.onContactDeleted(c), null === (r = this.eventHandler) || void 0 === r || r.dispatch("onContactDeleted", c);
                                break;
                            case 4:
                                c.type = "subscribed", this.onContactAdded && this.onContactAdded(c), null === (o = this.eventHandler) || void 0 === o || o.dispatch("onContactAdded", c);
                                break;
                            case 5:
                                c.type = "unsubscribed", this.onContactRefuse && this.onContactRefuse(c), null === (n = this.eventHandler) || void 0 === n || n.dispatch("onContactRefuse", c);
                                break;
                            case 6:
                            case 7:
                                this.getBlacklist();
                                break;
                            case 8:
                                c.type = "subscribed", this.onContactAgreed && this.onContactAgreed(c), null === (i = this.eventHandler) || void 0 === i || i.dispatch("onContactAgreed", c);
                                break;
                            case 9:
                                c.type = "unsubscribed", this.onContactRefuse && this.onContactRefuse(c), null === (s = this.eventHandler) || void 0 === s || s.dispatch("onContactRefuse", c);
                                break;
                            default:
                                Z.error("handleRosterMsg:", a)
                        }
                        this.onPresence && c.type && this.onPresence(c)
                    }
                },
                we = function (e) {
                    var t, r, o, n, i, s, a = this.root.lookup("easemob.pb.StatisticsBody").decode(e.payload);
                    switch (a.operation) {
                        case 0:
                            this.onStatisticMessage && this.onStatisticMessage(a), null === (t = this.eventHandler) || void 0 === t || t.dispatch("onStatisticMessage", a);
                            break;
                        case 1:
                            s = m.create({
                                type: y.WEBIM_CONNCTION_USER_REMOVED,
                                message: "user has been removed"
                            }), this.logOut = !0, this.onError && this.onError(s), null === (r = this.eventHandler) || void 0 === r || r.dispatch("onError", s);
                            break;
                        case 2:
                            s = m.create({
                                type: y.WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE,
                                message: "the user is already logged on another device"
                            }), this.logOut = !0, this.onError && this.onError(s), null === (o = this.eventHandler) || void 0 === o || o.dispatch("onError", s);
                            break;
                        case 3:
                            s = m.create({
                                type: y.WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD,
                                message: "the user was kicked by changing password"
                            }), this.logOut = !0, this.onError && this.onError(s), null === (n = this.eventHandler) || void 0 === n || n.dispatch("onError", s);
                            break;
                        case 4:
                            s = m.create({
                                type: y.WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE,
                                message: "the user was kicked by other device"
                            }), this.logOut = !0, this.onError && this.onError(s), null === (i = this.eventHandler) || void 0 === i || i.dispatch("onError", s);
                            break;
                        default:
                            Z.error("handleStatisticsMsg:", a)
                    }
                };

            function Ue(e) {
                var t, r = [],
                    o = [];
                e.data && e.data.values && e.data.values.forEach((function (e) {
                    Object.entries(e.status).forEach((function (e) {
                        o.push({
                            device: e[0],
                            status: Number(e[1])
                        })
                    })), r.push({
                        userId: e.uid,
                        lastTime: Number(e.last_time),
                        expire: Number(e.expiry),
                        ext: e.ext,
                        statusDetails: o
                    })
                })), this.onPresenceStatusChange && this.onPresenceStatusChange(r), null === (t = this.eventHandler) || void 0 === t || t.dispatch("onPresenceStatusChange", r)
            }

            function ke(e) {
                var t = this;
                e.data.forEach((function (e) {
                    var r, o = {
                        from: e.from,
                        to: e.to,
                        chatType: "chat" === e.channel_type ? "singleChat" : "groupChat",
                        messageId: e.messageId,
                        reactions: e.reactions,
                        ts: e.ts
                    };
                    null === (r = t.eventHandler) || void 0 === r || r.dispatch("onReactionChange", o)
                }))
            }

            function Pe(e) {
                var t, r, o, n;
                if (e.data) {
                    var i = e.data,
                        s = {
                            id: i.id || "",
                            name: i.name || "",
                            parentId: i.muc_parent_id || "",
                            messageId: i.msg_parent_id || "",
                            timestamp: i.timestamp || 0,
                            operator: i.from || "",
                            operation: ""
                        };
                    switch (i.operation) {
                        case "create":
                            s.operation = "create", s.createTimestamp = s.timestamp, s.messageCount = 0, null === (t = this.eventHandler) || void 0 === t || t.dispatch("onChatThreadChange", s);
                            break;
                        case "update_msg":
                            s.operation = "update", s.messageCount = i.message_count, i.last_message && "{}" !== JSON.stringify(i.last_message) ? s.lastMessage = pe(i.last_message) : "{}" === JSON.stringify(i.last_message) && (s.lastMessage = {}), null === (r = this.eventHandler) || void 0 === r || r.dispatch("onChatThreadChange", s);
                            break;
                        case "update":
                            s.operation = "update", s.messageCount = i.message_count, null === (o = this.eventHandler) || void 0 === o || o.dispatch("onChatThreadChange", s);
                            break;
                        case "delete":
                            s.operation = "destroy", null === (n = this.eventHandler) || void 0 === n || n.dispatch("onChatThreadChange", s)
                    }
                }
            }

            function xe(e) {
                var t, r;
                if (console.log(e), e.data) {
                    var o = e.data || {},
                        n = {
                            serverId: o.id || "",
                            operation: "",
                            timestamp: o.ts || 0,
                            operator: o.from || ""
                        },
                        i = n;
                    switch (o.op) {
                        case "create_server":
                            n.operator === this.user && ((i = n).operation = "serverCreate");
                            break;
                        case "update_server":
                            n.operation = "update", o.name && (n.name = o.name), o.desc && (n.description = o.desc), o.custom && (n.ext = o.custom), o.url && (n.icon = o.url), n.operator === this.user && ((i = n).operation = "serverUpdate");
                            break;
                        case "delete_server":
                            n.operation = "destroy", n.operator === this.user && (i.operation = "serverDestroy");
                            break;
                        case "join_server":
                            n.operation = "memberPresence", n.operator === this.user && (i.operation = "serverJoin");
                            break;
                        case "quit_server":
                            n.operation = "memberAbsence", n.operator === this.user && (i.operation = "serverLeave");
                            break;
                        case "invite_join_server":
                            n.operation = "inviteToJoin", o.name && (n.name = o.name), o.desc && (n.description = o.desc), o.custom && (n.ext = o.custom), o.icon && (n.icon = o.icon), n.operator === this.user && (i.operation = "serverInviteUser", i.userIds = [o.user_id]);
                            break;
                        case "invite_join_server_accept":
                            n.operation = "acceptInvite", n.operator === this.user && (i.operation = "serverAcceptInvite");
                            break;
                        case "invite_join_server_refuse":
                            n.operation = "refuseInvite", n.operator === this.user && (i.operation = "serverRefuseInvite");
                            break;
                        case "remove_server_member":
                            n.operation = "removed", n.userId = o.user_id, n.operator === this.user && (i.operation = "serverRemoveMember");
                            break;
                        case "change_user_role":
                            n.operation = "updateRole", n.role = 0 === o.role_id ? "owner" : 1 === o.role_id ? "moderator" : "user", n.userId = o.user_id, n.operator === this.user && (i.operation = "serverSetRole");
                            break;
                        default:
                            Z.error("unexpected server notify operation: " + o.op)
                    } ["create_server", "update_server", "delete_server", "join_server", "quit_server", "remove_server_member", "invite_join_server", "invite_join_server_accept", "invite_join_server_refuse", "change_user_role"].includes(o.op) && n.operator === this.user ? null === (t = this.eventHandler) || void 0 === t || t.dispatch("onMultiDeviceEvent", i) : null === (r = this.eventHandler) || void 0 === r || r.dispatch("onServerEvent", n)
                } else Z.error("unexpected server notify data: " + e)
            }
            const je = function (e) {
                var t = ae.parseNotify(e.payload);
                switch (t.type) {
                    case "presence":
                        Ue.call(this, t);
                        break;
                    case "reaction":
                        ke.call(this, t);
                        break;
                    case "thread":
                        Pe.call(this, t);
                        break;
                    case "circle":
                        xe.call(this, t);
                        break;
                    default:
                        Z.error("unexpected notify type: " + t.type)
                }
            };
            var Le = function () {
                return Le = Object.assign || function (e) {
                    for (var t, r = 1, o = arguments.length; r < o; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }, Le.apply(this, arguments)
            };

            function De() {
                var e = "webim",
                    t = "",
                    r = "",
                    o = [],
                    n = (new Date).valueOf();
                "webim" === this.deviceId ? (r = "random_" + n.toString(), e = this.deviceId + "_" + r, t = this.deviceId) : e = t = r = "webim_" + this.deviceId, this.context.jid && (this.context.jid.clientResource = e);
                var i = this.root.lookup("easemob.pb.Provision"),
                    s = i.decode(o);
                s.compressType = this.compressType, s.encryptType = this.encryptType, s.osType = this.osType, s.version = this.version, s.deviceName = t, s.resource = e, s.deviceUuid = r, s.auth = "$t$" + this.token, s.actionVersion = "v2.0", s = i.encode(s).finish();
                var a = this.root.lookup("easemob.pb.MSync"),
                    c = a.decode(o);
                return c.version = this.version, c.guid = this.context.jid, c.auth = "$t$" + this.token, c.command = 3, c.deviceId = t, c.serviceId = null == H ? void 0 : H.getInstance().getServiceId(), c.encryptType = this.encryptType, c.payload = s, a.encode(c).finish()
            }

            function Ge(e, t) {
                var r = this,
                    o = ae.getEnvInfo();
                if ("web" === o.platform || "zfb" === o.platform || "dd" === o.platform) {
                    for (var n = "", i = 0; i < e.length; i++) n += String.fromCharCode(e[i]);
                    return n = ue().btoa(n), "web" === o.platform ? n : {
                        data: n,
                        isBuffer: !1,
                        complete: function () {},
                        fail: function (e) {
                            "sendSocketMessage:fail taskID not exist" !== e.errMsg && "SocketTast.send:fail SocketTask.readyState is not OPEN" !== e.errMsg || (Z.debug("发送失败重联"), r.reconnect()), t && r._msgHash && r._msgHash[t] && r._msgHash[t].fail({
                                id: t
                            })
                        }
                    }
                }
                var s = e;
                return {
                    data: s.buffer.slice(s.byteOffset, s.byteOffset + s.byteLength),
                    fail: function (e) {
                        "sendSocketMessage:fail taskID not exist" !== e.errMsg && "SocketTast.send:fail SocketTask.readyState is not OPEN" !== e.errMsg || r.reconnect(), t && r._msgHash && r._msgHash[t] && r._msgHash[t].fail({
                            id: t
                        })
                    }
                }
            }

            function Be(e, t) {
                switch (e.ns) {
                    case 0:
                        we.call(this, e);
                        break;
                    case 1:
                        Ce.call(this, e, t);
                        break;
                    case 2:
                        Ae.call(this, e);
                        break;
                    case 3:
                        Me.handleRosterMsg.call(this, e);
                        break;
                    case 4:
                        this.registerConfrIQHandler && this.registerConfrIQHandler(e, t, this);
                        break;
                    case 5:
                        je.call(this, e);
                        break;
                    default:
                        Z.error("distributeMeta", e)
                }
            }

            function He(e, t) {
                for (var r = function (r) {
                        var n = new(f())(e[r].id.low, e[r].id.high, e[r].id.unsigned).toString();
                        if (o._load_msg_cache.some((function (e) {
                                return e.msgId === n
                            }))) return "continue";
                        var i = e[r].from.name,
                            s = e[r].to ? e[r].to.name : "",
                            a = !!e[r].to && -1 !== e[r].to.domain.indexOf("conference");
                        o._load_msg_cache.length <= os.max_cache_length || o._load_msg_cache.shift(), o._load_msg_cache.push({
                            msgId: n,
                            from: i,
                            to: s,
                            isGroup: a
                        }), Be.call(o, e[r], t)
                    }, o = this, n = 0; n < e.length; n++) r(n)
            }

            function Fe(e) {
                var t = this.root.lookup("easemob.pb.CommUnreadDL");
                if (t = t.decode(e.payload), "agoraToken" === this.grantType) {
                    var r = new(f())(t.timestamp.low, t.timestamp.high, t.timestamp.unsigned).toString();
                    this.compareTokenExpireTime(Number(r), this.expirationTime)
                }
                if (0 === t.unread.length) Ye.call(this);
                else
                    for (var o = 0; o < t.unread.length; o++) ze.call(this, t.unread[o].queue)
            }

            function We() {
                var e = [],
                    t = this.root.lookup("easemob.pb.StatisticsBody"),
                    r = t.decode(e);
                r.operation = 0, r = t.encode(r).finish();
                var o = this.root.lookup("easemob.pb.Meta").decode(e);
                o.id = (new Date).valueOf(), o.ns = 0, o.payload = r;
                var n = this.root.lookup("easemob.pb.CommSyncUL"),
                    i = n.decode(e);
                i.meta = o, i = n.encode(i).finish();
                var s = this.root.lookup("easemob.pb.MSync"),
                    a = s.decode(e);
                return a.version = this.version, a.encryptType = [0], a.command = 0, a.payload = i, s.encode(a).finish()
            }

            function qe(e) {
                var t = [],
                    r = this.root.lookup("easemob.pb.CommSyncUL"),
                    o = r.decode(t);
                o.queue = e, o = r.encode(o).finish();
                var n = this.root.lookup("easemob.pb.MSync"),
                    i = n.decode(t);
                return i.version = this.version, i.encryptType = this.encryptType, i.command = 0, i.payload = o, n.encode(i).finish()
            }

            function ze(e) {
                Z.debug("sendBackqueue");
                var t = qe.call(this, e);
                pt.call(this, t)
            }

            function Ke(e, t) {
                var r = [],
                    o = this.root.lookup("easemob.pb.CommSyncUL"),
                    n = o.decode(r);
                n.queue = t, n.key = new(f())(e.low, e.high, e.unsigned).toString(), n = o.encode(n).finish();
                var i = this.root.lookup("easemob.pb.MSync"),
                    s = i.decode(r);
                return s.version = this.version, s.encryptType = this.encryptType, s.command = 0, s.payload = n, i.encode(s).finish()
            }

            function Je(e, t) {
                Z.debug("sendLastSession");
                var r = Ke.call(this, e, t);
                pt.call(this, r)
            }

            function Ve(e) {
                var t, r = this.root.lookup("easemob.pb.Provision").decode(e.payload);
                if (this.context.jid && (this.context.jid.clientResource = r.resource), this.clientResource = r.resource, 0 === r.status.errorCode) {
                    if (this.onOpened && this.onOpened(), null === (t = this.eventHandler) || void 0 === t || t.dispatch("onConnected"), "agoraToken" === this.grantType) {
                        var o = Date.now();
                        this.expiresIn = this.expirationTime - o, this.tokenExpireTimeCountDown(this.expiresIn)
                    }
                    Xe.call(this), Qe.call(this), $e.call(this), Ye.call(this)
                } else this.onError && this.onError({
                    type: y.WEBIM_CONNECTION_ERROR,
                    message: "provision error",
                    data: r
                })
            }

            function Xe() {
                if (this.unSendMsgArr.length > 0) {
                    for (var e = 0; e < this.unSendMsgArr.length; e++) {
                        var t = this.unSendMsgArr[e];
                        lt.call(this, t)
                    }
                    this.unSendMsgArr = []
                }
            }

            function Ye() {
                var e = We.call(this);
                pt.call(this, e)
            }

            function $e() {
                var e = et.call(this);
                pt.call(this, e)
            }

            function Qe() {
                var e = this;
                Ze.call(this), this.heartBeatID = setInterval((function () {
                    $e.call(e)
                }), this.heartBeatWait)
            }

            function Ze() {
                clearInterval(this.heartBeatID)
            }

            function et() {
                var e = this.root.lookup("easemob.pb.MSync"),
                    t = e.decode([]);
                return t.version = this.version, t.encryptType = this.encryptType, t.command = 1, e.encode(t).finish()
            }

            function rt(e, t) {
                return e.some((function (e) {
                    return e.name === t.name
                }))
            }

            function ot(e) {
                var t = this,
                    r = this.root.lookup("easemob.pb.CommNotice").decode(e.payload);
                rt(this._queues, r.queue) || this.clientResource === r.queue.clientResource && r.queue.name === this.context.userId || (this._queues.push(r.queue), this.qTimer && clearTimeout(this.qTimer), this.qTimer = setTimeout((function () {
                    var e = r.queue;
                    rt(t._queues, e) && (ze.call(t, r.queue), Z.debug("⬇q:", e))
                }), 1e4), 1 === this._queues.length && ze.call(this, r.queue))
            }

            function nt(e) {
                var t = ae.getEnvInfo();
                if ("web" === t.platform || "zfb" === t.platform || "dd" === t.platform) {
                    for (var r = ue().atob(e.data), o = [], n = 0, i = r.length; n < i; ++n) o.push(r.charCodeAt(n));
                    return this.root.lookup("easemob.pb.MSync").decode(o)
                }
                return this.root.lookup("easemob.pb.MSync").decode(e.data)
            }

            function it(e) {
                switch (e.command) {
                    case 0:
                        st.call(this, e);
                        break;
                    case 1:
                        Fe.call(this, e);
                        break;
                    case 2:
                        ot.call(this, e);
                        break;
                    case 3:
                        Ve.call(this, e)
                }
            }

            function st(e) {
                var t, r, o, n, i, s, a = this.root.lookup("easemob.pb.CommSyncDL");
                a = a.decode(e.payload);
                var c = new(f())(a.serverId.low, a.serverId.high, a.serverId.unsigned).toString(),
                    u = new(f())(a.metaId.low, a.metaId.high, a.metaId.unsigned).toString();
                if (0 !== a.metas.length) try {
                    He.call(this, a.metas, a.status)
                } catch (e) {
                    this.onError && this.onError({
                        type: y.WEBIM_LOAD_MSG_ERROR,
                        message: "decode message error",
                        data: e
                    })
                } finally {
                    if (a.isLast) {
                        var l = -1;
                        (h = this._queues.some((function (e, t) {
                            return e.name === a.name && (l = t, !0)
                        }))) && l > 0 && this._queues.splice(l, 1), this._queues.length > 0 && (ze.call(this, this._queues[0]), this.qTimer && clearTimeout(this.qTimer))
                    } else Je.call(this, a.nextKey, a.queue)
                } else if (a.isLast) {
                    var p = -1;
                    (h = this._queues.some((function (e, t) {
                        return e.name === a.queue.name && (p = t, !0)
                    }))) && this._queues.splice(p, 1), this._queues.length > 0 && (ze.call(this, this._queues[0]), this.qTimer && clearTimeout(this.qTimer))
                } else if (a.status && 0 === a.status.errorCode) {
                    var d = -1,
                        h = this._queues.some((function (e, t) {
                            var r;
                            return e.name === (null === (r = a.queue) || void 0 === r ? void 0 : r.name) && (d = t, !0)
                        }));
                    if (h && this._queues.splice(d, 1), this._queues.length > 0 && (ze.call(this, this._queues[0]), this.qTimer && clearTimeout(this.qTimer)), (E = C.get(u)) && ((0, E.rpt)({
                            isEndApi: !0,
                            data: {
                                isSuccess: 1,
                                requestName: E.requestName,
                                requestMethod: "WEBSOCKET",
                                requestUrl: this.url,
                                code: O.success
                            }
                        }), C.delete(u)), this._msgHash[u]) {
                        A.has(u) && (A.get(u).rpt({
                            isEndApi: !0,
                            data: {
                                isSuccess: 1,
                                requestMethod: "WEBSOCKET",
                                requestUrl: this.url,
                                code: O.success,
                                msgId: c
                            }
                        }), A.delete(u));
                        try {
                            (null === (t = this._msgHash[u]) || void 0 === t ? void 0 : t.resolve) instanceof Function && this._msgHash[u].resolve({
                                localMsgId: u,
                                serverMsgId: c
                            }), (null === (r = this._msgHash[u]) || void 0 === r ? void 0 : r.success) instanceof Function && this._msgHash[u].success(u, c)
                        } catch (e) {
                            this.onError && this.onError({
                                type: y.WEBIM_CONNCTION_CALLBACK_INNER_ERROR,
                                message: "when executing success function error",
                                data: e
                            })
                        }
                        this.onReceivedMessage && this.onReceivedMessage({
                            id: u,
                            mid: c,
                            to: this._msgHash[u].to,
                            time: 0
                        }), null === (o = this.eventHandler) || void 0 === o || o.dispatch("onReceivedMessage", {
                            id: u,
                            mid: c,
                            to: this._msgHash[u].to
                        }), delete this._msgHash[u]
                    }
                } else if (a.status && 15 === a.status.errorCode)(null === (n = this._msgHash[u]) || void 0 === n ? void 0 : n.fail) instanceof Function && this._msgHash[u].fail({
                    type: y.SERVICE_NOT_ALLOW_MESSAGING_MUTE,
                    reason: "you were muted"
                }), this._msgHash[u].reject instanceof Function && this._msgHash[u].reject({
                    type: y.SERVICE_NOT_ALLOW_MESSAGING_MUTE,
                    reason: "you were muted"
                });
                else if (a.status && 1 === a.status.errorCode) {
                    var g = void 0;
                    switch (a.status.reason) {
                        case "blocked":
                            g = y.PERMISSION_DENIED;
                            break;
                        case "group not found":
                            g = y.GROUP_NOT_EXIST;
                            break;
                        case "not in group or chatroom":
                            g = y.GROUP_NOT_JOINED;
                            break;
                        case "exceed recall time limit":
                            g = y.MESSAGE_RECALL_TIME_LIMIT;
                            break;
                        case "message recall disabled":
                            g = y.SERVICE_NOT_ENABLED;
                            break;
                        case "not in group or chatroom white list":
                            g = y.SERVICE_NOT_ALLOW_MESSAGING;
                            break;
                        case "nonroster":
                            g = y.USER_NOT_FRIEND, a.status.reason = "not contact";
                            break;
                        case "group is disabled":
                            g = y.GROUP_IS_DISABLED, a.status.reason = "group is disabled";
                            break;
                        default:
                            g = a.status.reason.includes("moderation") ? y.MESSAGE_MODERATION_BLOCKED : y.SERVER_UNKNOWN_ERROR
                    }
                    if (this._msgHash[u]) {
                        var v = m.create({
                            type: g,
                            message: a.status.reason || "",
                            data: {
                                id: u,
                                mid: c
                            }
                        });
                        this._msgHash[u].reject instanceof Function && this._msgHash[u].reject(v), this._msgHash[u].fail instanceof Function && this._msgHash[u].fail({
                            type: g,
                            reason: a.status.reason ? a.status.reason : "",
                            data: {
                                id: u,
                                mid: c
                            }
                        })
                    }
                } else if (a.status && 7 === a.status.errorCode) "sensitive words" === a.status.reason && this._msgHash[u] ? (v = m.create({
                    type: y.MESSAGE_INCLUDE_ILLEGAL_CONTENT,
                    message: "sensitive words",
                    data: {
                        id: u,
                        mid: c
                    }
                }), this._msgHash[u].reject instanceof Function && this._msgHash[u].reject(v), this._msgHash[u].fail instanceof Function && this._msgHash[u].fail({
                    type: y.MESSAGE_INCLUDE_ILLEGAL_CONTENT,
                    data: {
                        id: u,
                        mid: c,
                        reason: "sensitive words"
                    }
                })) : "blocked by mod_antispam" === a.status.reason && this._msgHash[u] ? (v = m.create({
                    type: y.MESSAGE_INCLUDE_ILLEGAL_CONTENT,
                    message: "blocked by mod_antispam",
                    data: {
                        id: u,
                        mid: c
                    }
                }), this._msgHash[u].reject instanceof Function && this._msgHash[u].reject(v), this._msgHash[u].fail instanceof Function && this._msgHash[u].fail({
                    type: y.MESSAGE_INCLUDE_ILLEGAL_CONTENT,
                    data: {
                        id: u,
                        mid: c,
                        reason: "blocked by mod_antispam"
                    }
                })) : "user is mute" === a.status.reason && this._msgHash[u] ? (v = m.create({
                    type: y.USER_MUTED_BY_ADMIN,
                    message: "user is mute",
                    data: {
                        id: u,
                        mid: c
                    }
                }), this._msgHash[u].reject instanceof Function && this._msgHash[u].reject(v), this._msgHash[u].fail instanceof Function && this._msgHash[u].fail(v)) : "traffic limit" === a.status.reason && this._msgHash[u] && (v = m.create({
                    type: y.MESSAGE_CURRENT_LIMITING,
                    message: "traffic limit",
                    data: {
                        id: u,
                        mid: c
                    }
                }), this._msgHash[u].reject instanceof Function && this._msgHash[u].reject(v), this._msgHash[u].fail instanceof Function && this._msgHash[u].fail(v));
                else if (a.status && 19 === a.status.errorCode) this._msgHash[u] && (A.has(u) && (A.get(u).rpt({
                    isEndApi: !0,
                    data: {
                        isSuccess: 0,
                        requestMethod: "WEBSOCKET",
                        requestUrl: this.url,
                        code: y.MESSAGE_EXTERNAL_LOGIC_BLOCKED,
                        codeDesc: a.status.reason || "",
                        msgId: c
                    }
                }), A.delete(u)), v = m.create({
                    type: y.MESSAGE_EXTERNAL_LOGIC_BLOCKED,
                    message: a.status.reason || "",
                    data: {
                        id: u,
                        mid: c
                    }
                }), this._msgHash[u].reject instanceof Function && this._msgHash[u].reject(v), this._msgHash[u].fail instanceof Function && this._msgHash[u].fail({
                    type: y.MESSAGE_EXTERNAL_LOGIC_BLOCKED,
                    data: {
                        id: u,
                        mid: c,
                        reason: a.status.reason
                    }
                }));
                else if (this._msgHash[u]) {
                    A.has(u) && (A.get(u).rpt({
                        isEndApi: !0,
                        data: {
                            isSuccess: 0,
                            requestMethod: "WEBSOCKET",
                            requestUrl: this.url,
                            code: y.WEBIM_LOAD_MSG_ERROR,
                            codeDesc: (null === (i = a.status) || void 0 === i ? void 0 : i.reason) || "",
                            msgId: c
                        }
                    }), A.delete(u));
                    try {
                        v = m.create({
                            type: y.WEBIM_LOAD_MSG_ERROR,
                            message: (null === (s = a.status) || void 0 === s ? void 0 : s.reason) || "",
                            data: {
                                id: u,
                                mid: c,
                                reason: a.status && a.status.reason
                            }
                        }), this._msgHash[u].reject instanceof Function && this._msgHash[u].reject(v), this._msgHash[u].fail instanceof Function && this._msgHash[u].fail({
                            type: y.WEBIM_LOAD_MSG_ERROR,
                            data: {
                                errorCode: a.status && a.status.errorCode,
                                reason: a.status && a.status.reason
                            }
                        })
                    } catch (e) {
                        this.onError && this.onError({
                            type: y.WEBIM_CONNCTION_CALLBACK_INNER_ERROR,
                            message: "when executing fail function error",
                            data: e
                        })
                    }
                    delete this._msgHash[u]
                } else {
                    var E;
                    A.has(u) && (A.get(u).rpt({
                        isEndApi: !0,
                        data: {
                            isSuccess: 0,
                            requestMethod: "WEBSOCKET",
                            requestUrl: this.url,
                            code: y.WEBIM_CONNCTION_CALLBACK_INNER_ERROR,
                            codeDesc: "on message error",
                            msgId: c
                        }
                    }), A.delete(u)), (E = C.get(u)) && ((0, E.rpt)({
                        isEndApi: !0,
                        data: {
                            isSuccess: 0,
                            requestName: E.requestName,
                            requestMethod: "WEBSOCKET",
                            requestUrl: this.url,
                            code: O.failed,
                            codeDesc: "on message error"
                        }
                    }), C.delete(u)), this.onError && this.onError({
                        type: y.WEBIM_CONNCTION_CALLBACK_INNER_ERROR,
                        message: "on message error"
                    })
                }
            }

            function at(e) {
                var t = [],
                    r = this.root.lookup("easemob.pb.KeyValue"),
                    o = [];
                for (var n in e) {
                    var i = r.decode(t);
                    i.key = n, "object" == typeof e[n] ? (i.type = 8, i.stringValue = JSON.stringify(e[n])) : "string" == typeof e[n] ? (i.type = 7, i.stringValue = e[n]) : "boolean" == typeof e[n] ? (i.type = 1, i.varintValue = !0 === e[n] ? 1 : 0) : Number.isInteger(e[n]) ? (i.type = 2, i.varintValue = e[n]) : (i.type = 6, i.doubleValue = e[n]), o.push(i)
                }
                return o
            }

            function ct(e) {
                var t, r, o = [];
                if (this.root) {
                    var n, i = this.root.lookup("easemob.pb.MessageBody.Content").decode(o);
                    switch (n = !e.group && "groupchat" !== (null === (t = null == e ? void 0 : e.chatType) || void 0 === t ? void 0 : t.toLowerCase()) || e.roomType ? e.group && e.roomType || "chatroom" === (null === (r = null == e ? void 0 : e.chatType) || void 0 === r ? void 0 : r.toLowerCase()) ? "chatRoom" : "singleChat" : "groupChat", e.type) {
                        case "txt":
                            i.type = 0, i.text = e.msg;
                            break;
                        case "img":
                            i.type = 1, e.body ? (i.displayName = e.body.filename, i.remotePath = e.body.url, i.secretKey = e.body.secret, i.fileLength = e.body.file_length, i.size = e.body.size, i.thumbnailDisplayName = e.body.filename) : e.file ? (i.displayName = e.file.filename, i.remotePath = e.file.url, i.secretKey = e.file.secret, i.fileLength = e.file.file_length, i.size = e.file.size, i.thumbnailDisplayName = e.file.filename) : (i.displayName = e.filename, i.remotePath = e.url, i.secretKey = e.secret, i.fileLength = e.file_length, i.size = e.size, i.thumbnailDisplayName = e.filename);
                            break;
                        case "video":
                            i.type = 2, i.displayName = e.body.filename, i.remotePath = e.body.url, i.secretKey = e.body.secret, i.fileLength = e.body.file_length, i.duration = e.body.length, i.thumbnailDisplayName = e.body.filename;
                            break;
                        case "loc":
                            i.type = 3, i.latitude = e.lat, i.longitude = e.lng, i.address = e.addr, i.buildingName = e.buildingName, i.latitude = e.lat;
                            break;
                        case "audio":
                            i.type = 4, i.displayName = e.body.filename, i.remotePath = e.body.url, i.secretKey = e.body.secret, i.fileLength = e.body.file_length, i.duration = e.body.length, i.thumbnailDisplayName = e.body.filename;
                            break;
                        case "file":
                            i.type = 5, i.displayName = e.body.filename, i.remotePath = e.body.url, i.secretKey = e.body.secret, i.fileLength = e.body.file_length, i.size = e.body.size, i.thumbnailDisplayName = e.body.filename;
                            break;
                        case "cmd":
                            i.type = 6, i.action = e.action;
                            break;
                        case "custom":
                            i.type = 7, i.customEvent = e.customEvent, i.customExts = at.call(this, e.customExts)
                    }
                    var s = [];
                    e.ext && (s = at.call(this, e.ext));
                    var a = this.root.lookup("easemob.pb.MessageBody"),
                        c = a.decode(o);
                    c.from = {
                        name: this.context.jid.name
                    }, c.to = {
                        name: e.to
                    }, "channel" === e.type ? c.type = 7 : "recall" === e.type ? (c.type = 6, c.ackMessageId = e.ackId) : "delivery" === e.type ? (c.type = 5, c.ackMessageId = e.ackId) : "read" === e.type ? (c.type = 4, c.ackMessageId = e.ackId, "groupChat" === n && (c.msgConfig = {
                        allowGroupAck: !0
                    }, c.ackContent = e.ackContent)) : "chatRoom" === n ? c.type = 3 : "groupChat" === n ? (c.type = 2, e.msgConfig && (c.msgConfig = {
                        allowGroupAck: !0
                    })) : "singleChat" === n && (c.type = 1), c.contents = [i], c.ext = s;
                    var u = function (e) {
                        var t = {};
                        return "translations" in e && (t.translations = e.translations), "isChatThread" in e && e.isChatThread && (t.thread = {}), Object.keys(t).length > 0 ? JSON.stringify(t) : ""
                    }(e);
                    u && (c.meta = u), c = a.encode(c).finish();
                    var l = this.root.lookup("easemob.pb.Meta").decode(o);
                    l.id = e.id;
                    var p = "easemob.com";
                    "chatRoom" !== n && "groupChat" !== n || (p = "conference.easemob.com"), l.to = {
                        appKey: this.appKey,
                        name: e.to,
                        domain: p
                    }, l.ns = 1, l.payload = c;
                    var d = this.root.lookup("easemob.pb.CommSyncUL"),
                        h = d.decode(o);
                    h.meta = l, h = d.encode(h).finish();
                    var f = this.root.lookup("easemob.pb.MSync"),
                        m = f.decode(o);
                    return m.version = this.version, m.encryptType = this.encryptType, m.command = 0, m.payload = h, f.encode(m).finish()
                }
                e.fail && e.fail({
                    type: y.WEBIM_CONNCTION_CLIENT_OFFLINE,
                    message: "Not logged in"
                })
            }

            function ut(e) {
                var t = this;
                if (!e.file) return e;
                var r = Le({}, e);
                return r.accessToken = this.token, r.appKey = this.appKey, r.apiUrl = this.apiUrl, r.body && r.body.url ? ct.call(this, r) : new Promise((function (o, n) {
                    var i = r.onFileUploadComplete;
                    r.onFileUploadComplete = function (o) {
                        var n;
                        if (o.entities[0]["file-metadata"]) {
                            var s = o.entities[0]["file-metadata"]["content-length"];
                            r.file_length = s, r.filetype = o.entities[0]["file-metadata"]["content-type"], s > 204800 && (r.thumbnail = !0)
                        }
                        r.body = {
                            type: r.type || "file",
                            secret: o.entities[0]["share-secret"],
                            filename: r.file.filename || r.filename,
                            url: (t.isHttpDNS ? t.apiUrl + o.uri.substr(o.uri.indexOf("/", 9)) : o.uri) + "/" + o.entities[0].uuid,
                            length: r.length || 0,
                            filetype: r.filetype || r.file.filetype,
                            file_length: (null === (n = null == r ? void 0 : r.ext) || void 0 === n ? void 0 : n.file_length) || 0,
                            size: {
                                width: r.width || 0,
                                height: r.height || 0
                            }
                        }, r.file.url = o.uri, e.secret = o.entities[0]["share-secret"];
                        var a = (t.isHttpDNS ? t.apiUrl + o.uri.substr(o.uri.indexOf("/", 9)) : o.uri) + "/" + o.entities[0].uuid;
                        e.url = a, o.url = a, "img" === r.type && (e.thumb = a + "?thumbnail=true", o.thumb = a + "?thumbnail=true"), i instanceof Function && i(o, r.id);
                        var c = ct.call(t, r);
                        A.size <= b && A.set(r.id, {
                            rpt: null == H ? void 0 : H.getInstance().geOperateFun({
                                operationName: E.SEND_MSG
                            })
                        }), pt.call(t, c)
                    }, ae.uploadFile.call(t, r, E.UPLOAD_MSG_ATTACH)
                }))
            }

            function lt(e) {
                var t = this;
                return new Promise((function (r, o) {
                    var n, i;
                    if (t.logOut) return o({
                        type: y.WEBIM_CONNECTION_CLOSED,
                        message: "not login"
                    });
                    var s = "file" === e.type || "img" === e.type || "audio" === e.type || "video" === e.type,
                        a = "delivery" === e.type || "read" === e.type || "channel" === e.type;
                    if (e.id && ((!s && !a || s && t.useOwnUploadFun) && A.size <= b && A.set(e.id, {
                            rpt: null == H ? void 0 : H.getInstance().geOperateFun({
                                operationName: "recall" === e.type ? E.SEND_RECALL_MSG : E.SEND_MSG
                            })
                        }), t._msgHash[e.id] = Le(Le({}, e), {
                            resolve: r,
                            reject: o
                        })), s && e.file) return ut.call(t, e);
                    if ("txt" === e.type && (null === (n = e.msgConfig) || void 0 === n ? void 0 : n.languages) && Array.isArray(null === (i = e.msgConfig) || void 0 === i ? void 0 : i.languages) && e.msgConfig.languages.length > 0) t.translateMessage({
                        text: e.msg,
                        languages: e.msgConfig.languages
                    }).then((function (r) {
                        var o, n = null === (o = r.data[0]) || void 0 === o ? void 0 : o.translations;
                        n = n.map((function (e) {
                            return {
                                code: e.to,
                                text: e.text
                            }
                        })), e.translations = n;
                        var i = ct.call(t, e);
                        pt.call(t, i, e.id)
                    })).catch((function (e) {
                        o(e)
                    }));
                    else {
                        var c = ct.call(t, e);
                        pt.call(t, c, e.id)
                    }
                }))
            }

            function pt(e, t) {
                if (!this.isOpened()) return this.unSendMsgArr.push(e), !this.logOut && this.autoReconnectNumTotal < this.autoReconnectNumMax && (this.autoReconnectNumTotal <= this.socketHost.length && this.isHttpDNS || !this.isHttpDNS) && (Z.debug("need to reconnect", this.autoReconnectNumTotal, this.autoReconnectNumMax), this.offLineSendConnecting = !0, this.reconnect()), void(this.onError && this.onError({
                    type: y.WEBIM_CONNCTION_DISCONNECTED,
                    message: "websocket has been disconnected"
                }));
                var r = Ge.call(this, e, t);
                this.sock.send(r)
            }
            const dt = function (e, t) {
                return e.send = lt, e.sendMsg = lt, {
                    generateProvision: De.bind(e),
                    base64transform: Ge.bind(e),
                    distributeMeta: Be.bind(e),
                    decodeMeta: He.bind(e),
                    decodeUnreadDL: Fe.bind(e),
                    _rebuild: We.bind(e),
                    _lastsession: Ke.bind(e),
                    receiveProvision: Ve.bind(e),
                    isInQueue: rt.bind(e),
                    decodeNotice: ot.bind(e),
                    decodeMSync: nt.bind(e),
                    distributeMSync: it.bind(e),
                    encodeChatMsg: ct.bind(e),
                    upLoadFile: ut.bind(e),
                    send: lt.bind(e),
                    stopHeartBeat: Ze.bind(e)
                }
            };
            var ht = function () {
                    function e(e, t, r) {
                        this.handlerData = {}, this.handlerData = {}, e.addEventHandler = this.addEventHandler.bind(this), e.removeEventHandler = this.removeEventHandler.bind(this)
                    }
                    return e.prototype.addEventHandler = function (e, t) {
                        this.handlerData[e] = t
                    }, e.prototype.removeEventHandler = function (e) {
                        delete this.handlerData[e]
                    }, e.prototype.dispatch = function (e, t) {
                        for (var r in Z.debug("dispatch event: " + e, t || ""), this.handlerData) {
                            var o = this.handlerData[r][e];
                            o && o(t)
                        }
                    }, e
                }(),
                ft = function () {};

            function mt(e) {
                this.onOpened = e.onOpened || ft, this.onPresence = e.onPresence || ft, this.onTextMessage = e.onTextMessage || ft, this.onPictureMessage = e.onPictureMessage || ft, this.onAudioMessage = e.onAudioMessage || ft, this.onVideoMessage = e.onVideoMessage || ft, this.onFileMessage = e.onFileMessage || ft, this.onLocationMessage = e.onLocationMessage || ft, this.onCmdMessage = e.onCmdMessage || ft, this.onCustomMessage = e.onCustomMessage || ft, this.onReceivedMessage = e.onReceivedMessage || ft, this.onDeliveredMessage = e.onDeliveredMessage || ft, this.onReadMessage = e.onReadMessage || ft, this.onRecallMessage = e.onRecallMessage || ft, this.onChannelMessage = e.onChannelMessage || ft, this.onError = e.onError || ft, this.onOffline = e.onOffline || ft, this.onOnline = e.onOnline || ft, this.onStatisticMessage = e.onStatisticMessage || ft, this.onContactInvited = e.onContactInvited || ft, this.onContactAgreed = e.onContactAgreed || ft, this.onContactRefuse = e.onContactRefuse || ft, this.onContactDeleted = e.onContactDeleted || ft, this.onContactAdded = e.onContactAdded || ft, this.onTokenWillExpire = e.onTokenWillExpire || ft, this.onTokenExpired = e.onTokenExpired || ft, this.onClosed = e.onClosed || ft, this.onPresenceStatusChange = e.onPresenceStatusChange || ft
            }

            function yt() {
                var e = this.context.appName,
                    t = this.context.orgName;
                return !(!e || !t) || (this.onError && this.onError({
                    type: y.WEBIM_CONNCTION_AUTH_ERROR,
                    message: "appName or orgName is illegal"
                }), !1)
            }

            function gt() {
                var e;
                if (!this.context.accessToken) {
                    var t = m.create({
                        type: y.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR,
                        message: "token not assign error"
                    });
                    return this.onError && this.onError(t), null === (e = this.eventHandler) || void 0 === e || e.dispatch("onError", t), !1
                }
                return !0
            }

            function vt() {
                return gt.call(this) && yt.call(this)
            }
            var Et = function () {
                    return Et = Object.assign || function (e) {
                        for (var t, r = 1, o = arguments.length; r < o; r++)
                            for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e
                    }, Et.apply(this, arguments)
                },
                _t = function (e, t, r, o) {
                    return new(r || (r = Promise))((function (n, i) {
                        function s(e) {
                            try {
                                c(o.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            try {
                                c(o.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                                e(t)
                            }))).then(s, a)
                        }
                        c((o = o.apply(e, t || [])).next())
                    }))
                },
                Tt = function (e, t) {
                    var r, o, n, i, s = {
                        label: 0,
                        sent: function () {
                            if (1 & n[0]) throw n[1];
                            return n[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                        return this
                    }), i;

                    function a(i) {
                        return function (a) {
                            return function (i) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (r = 1, o && (n = 2 & i[0] ? o.return : i[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, i[1])).done) return n;
                                    switch (o = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            n = i;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!((n = (n = s.trys).length > 0 && n[n.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < n[1]) {
                                                s.label = n[1], n = i;
                                                break
                                            }
                                            if (n && s.label < n[2]) {
                                                s.label = n[2], s.ops.push(i);
                                                break
                                            }
                                            n[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e], o = 0
                                } finally {
                                    r = n = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                };

            function Ot(e) {
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = {
                        url: this.apiUrl + "/" + o + "/" + n + "/users/" + this.user + "/blocks/users",
                        dataType: "json",
                        type: "GET",
                        headers: {
                            Authorization: "Bearer " + i
                        },
                        success: function (t) {
                            var r = {};
                            t.data.forEach((function (e) {
                                r[e] = {
                                    name: e
                                }
                            })), "function" == typeof (null == e ? void 0 : e.success) && e.success(t)
                        },
                        error: function (t) {
                            "function" == typeof (null == e ? void 0 : e.error) && e.error(t)
                        }
                    };
                return Z.debug("Call getBlocklist"), ae.ajax(s, E.GET_BLACK_LIST)
            }
            var It = Ot,
                Rt = St;

            function St(e) {
                var t = this;
                if (!vt.call(this)) {
                    var r = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(r)
                }
                var o = this.context,
                    n = o.orgName,
                    i = o.appName,
                    s = o.accessToken,
                    a = {
                        url: this.apiUrl + "/" + n + "/" + i + "/users/" + this.user + "/contacts/users",
                        dataType: "json",
                        type: "GET",
                        headers: {
                            Authorization: "Bearer " + s
                        },
                        success: function (r) {
                            var o = [];
                            r.data.forEach((function (e) {
                                o.push({
                                    name: e,
                                    subscription: "both",
                                    jid: t.context.jid
                                })
                            })), "function" == typeof (null == e ? void 0 : e.success) && e.success(o)
                        },
                        error: function (t) {
                            "function" == typeof (null == e ? void 0 : e.error) && e.error(t)
                        }
                    };
                return Z.debug("Call getContacts"), ae.ajax(a, E.GET_CONTACTS)
            }

            function Nt(e) {
                if ("string" != typeof e.deviceId || "" === e.deviceId) throw Error('Invalid parameter: "deviceId"');
                if ("string" != typeof e.deviceToken || "" === e.deviceToken) throw Error('Invalid parameter: "deviceToken"');
                if ("string" != typeof e.notifierName || "" === e.notifierName) throw Error('Invalid parameter: "notifierName"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = {
                        url: this.apiUrl + "/" + o + "/" + n + "/users/" + this.user,
                        type: "PUT",
                        data: JSON.stringify({
                            device_id: e.deviceId,
                            device_token: e.deviceToken,
                            notifier_name: e.notifierName
                        }),
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call uploadPushToken", e), ae.ajax(s, E.UPLOAD_PUSH_TOKEN)
            }
            var Ct = Nt;

            function At(e) {
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = {
                        url: this.apiUrl + "/" + o + "/" + n + "/users/" + this.user + "/user_channels",
                        type: "GET",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e && (null == e ? void 0 : e.success),
                        error: e && (null == e ? void 0 : e.error)
                    };
                return Z.debug("Call getSessionList"), ae.ajax(s, E.GET_SESSION_LIST)
            }

            function bt(e) {
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = {
                        url: this.apiUrl + "/" + o + "/" + n + "/users/" + this.user + "/user_channels",
                        type: "GET",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e && (null == e ? void 0 : e.success),
                        error: e && (null == e ? void 0 : e.error)
                    };
                return Z.debug("Call getConversationlist"), ae.ajax(s, E.GET_SESSION_LIST).then((function (e) {
                    return function (e) {
                        var t = e.data.channel_infos;
                        return null == t || t.forEach((function (e) {
                            e.meta && "{}" !== JSON.stringify(e.meta) ? (e.meta.payload = JSON.parse(e.meta.payload), e.lastMessage = pe(e.meta)) : e.lastMessage = e.meta, delete e.meta
                        })), e
                    }(e)
                }))
            }

            function Mt(e) {
                if (e && "string" != typeof e.channel) throw Error("Invalid parameter channel: " + e.channel);
                if (e && "singleChat" !== e.chatType && "groupChat" !== e.chatType) throw Error("Invalid parameter chatType: " + e.chatType);
                if (e && "boolean" != typeof e.deleteRoam) throw Error("Invalid parameter deleteRoam: " + e.deleteRoam);
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r, o = this.context,
                    n = o.orgName,
                    i = o.appName,
                    s = o.accessToken;
                r = "singleChat" === e.chatType ? "chat" : "groupChat";
                var a = {
                    url: this.apiUrl + "/" + n + "/" + i + "/users/" + this.user + "/user_channel",
                    dataType: "json",
                    type: "DELETE",
                    data: JSON.stringify({
                        channel: e.channel,
                        type: r,
                        delete_roam: e.deleteRoam
                    }),
                    headers: {
                        Authorization: "Bearer " + s,
                        "Content-Type": "application/json"
                    },
                    success: e.success,
                    error: e.error
                };
                return Z.debug("Call deleteSession", e), ae.ajax(a, E.DELETE_SESSION)
            }
            var wt = Mt;

            function Ut(e, t) {
                if (!vt.call(this)) {
                    var r = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(r)
                }
                var o = this.context,
                    n = o.orgName,
                    i = o.appName,
                    s = o.accessToken,
                    a = ["nickname", "avatarurl", "mail", "phone", "gender", "sign", "birth", "ext"],
                    c = {};
                if ("undefined" != typeof wx || "undefined" != typeof qq)
                    if ("string" == typeof e && void 0 !== t) {
                        if (!a.includes(e)) throw new Error("illegal key, only these keys: nickname, avatarurl, mail, phone, gender, sign, birth, ext are allowed");
                        c[e] = t
                    } else {
                        if ("[object Object]" !== Object.prototype.toString.call(e)) throw new Error("illegal params");
                        a.forEach((function (t) {
                            a.includes(t) && void 0 !== e[t] && (c[t] = e[t])
                        }))
                    }
                else if ("string" == typeof e) {
                    if (!a.includes(e)) throw new Error("illegal key, only these keys: nickname, avatarurl, mail, phone, gender, sign, birth, ext are allowed");
                    c = e + "=" + t
                } else {
                    if ("[object Object]" !== Object.prototype.toString.call(e)) throw new Error("illegal params");
                    var u = [];
                    a.forEach((function (t) {
                        if (a.includes(t) && void 0 !== e[t]) {
                            var r = encodeURIComponent(t),
                                o = encodeURIComponent(e[t]);
                            u.push(r + "=" + o)
                        }
                    })), c = u.join("&")
                }
                var l = {
                    url: this.apiUrl + "/" + n + "/" + i + "/metadata/user/" + this.user,
                    type: "PUT",
                    data: c,
                    dataType: "json",
                    headers: {
                        Authorization: "Bearer " + s,
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                };
                return Z.debug("Call updateOwnUserInfo", e), ae.ajax(l, E.UPDATE_USER_INFO)
            }
            var kt = Ut;

            function Pt(e, t) {
                if (!vt.call(this)) {
                    var r = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(r)
                }
                var o, n = this.context,
                    i = n.orgName,
                    s = n.appName,
                    a = n.accessToken,
                    c = [];
                if ("string" == typeof e) c = [e];
                else {
                    if ("[object Array]" !== Object.prototype.toString.call(e)) throw new Error("illegal params");
                    c = e
                }
                o = "string" == typeof t ? [t] : t && "[object Array]" === Object.prototype.toString.call(t) ? t : ["nickname", "avatarurl", "mail", "phone", "gender", "sign", "birth", "ext"];
                var u = {
                    url: this.apiUrl + "/" + i + "/" + s + "/metadata/user/get",
                    type: "POST",
                    data: JSON.stringify({
                        targets: c,
                        properties: o
                    }),
                    dataType: "json",
                    headers: {
                        Authorization: "Bearer " + a,
                        "Content-Type": "application/json"
                    }
                };
                return Z.debug("Call fetchUserInfoById", e), ae.ajax(u, E.GET_USER_INFO)
            }

            function xt(e) {
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = {
                        url: this.apiUrl + "/" + o + "/" + n + "/users/" + this.user,
                        type: "PUT",
                        dataType: "json",
                        data: JSON.stringify({
                            nickname: e
                        }),
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        }
                    };
                return Z.debug("Call updateCurrentUserNick", e), ae.ajax(s)
            }

            function jt(e) {
                if ("string" != typeof e || "" === e) throw Error('Invalid parameter: "agoraToken"');
                var t = this.context,
                    r = t.orgName,
                    o = t.appName,
                    n = {
                        url: this.apiUrl + "/" + r + "/" + o + "/token",
                        dataType: "json",
                        type: "POST",
                        data: JSON.stringify({
                            grant_type: "agora"
                        }),
                        headers: {
                            Authorization: "Bearer " + e,
                            "Content-Type": "application/json"
                        }
                    };
                return Z.debug("Call getChatToken", e), ae.ajax(n, E.SDK_INTERNAL)
            }

            function Lt(e) {
                var t = this;
                return new Promise((function (r, o) {
                    if (!e.queue) throw Error('Invalid parameter: "specified"');
                    if (!vt.call(t)) {
                        var n = m.create({
                            type: y.REST_PARAMS_STATUS,
                            message: "appkey or token error"
                        });
                        return Promise.reject(n)
                    }(function e(t) {
                        var n = this,
                            i = t.count || 20;
                        Dt.call(this, {
                            count: i,
                            isGroup: !!t.isGroup,
                            queue: t.queue,
                            start: t.start,
                            format: t.format,
                            success: function (o) {
                                if (o.msgs.length >= i || o.is_last) {
                                    var s = o.msgs.splice(0, i).reverse();
                                    t.success && t.success(s), r(s)
                                } else e.call(n, Et(Et({}, t), {
                                    start: null
                                }))
                            },
                            fail: function (e) {
                                o(e), t.fail && t.fail(e)
                            }
                        })
                    }).call(t, e), Z.debug("Call fetchHistoryMessages", e)
                }))
            }

            function Dt(e) {
                var t = this,
                    r = e.queue,
                    o = this.mr_cache[r] || (this.mr_cache[r] = {
                        msgs: []
                    }),
                    n = this.context.userId,
                    i = e.start || -1,
                    s = e.count || 20;
                if (o.msgs.length >= s || o.is_last) "function" == typeof e.success && e.success(o);
                else {
                    o && o.next_key && (i = o.next_key), e.start && (i = e.start);
                    var a = {
                            queue: r + (e.isGroup ? "@conference.easemob.com" : "@easemob.com"),
                            start: i,
                            end: -1
                        },
                        c = this.context,
                        u = c.orgName,
                        l = c.appName,
                        p = function (r) {
                            if (r.error && r.error_description) {
                                var o = m.create({
                                    type: y.WEBIM_CONNCTION_LOAD_CHATROOM_ERROR,
                                    message: "fetch history messages error",
                                    data: r
                                });
                                t.onError && t.onError(o)
                            }
                            "function" == typeof e.fail && e.fail(p)
                        },
                        d = {
                            url: this.apiUrl + "/" + u + "/" + l + "/users/" + n + "/messageroaming",
                            dataType: "json",
                            type: "POST",
                            headers: {
                                Authorization: "Bearer " + this.token,
                                "Content-Type": "application/json"
                            },
                            data: JSON.stringify(a),
                            success: function (r) {
                                var n = null == r ? void 0 : r.data;
                                if (!r.data.msgs) return "function" == typeof e.success && e.success(o), o.is_last = !0, void(o.next_key = "");
                                var i = n.msgs,
                                    s = i.length;
                                o.is_last = n.is_last, o.next_key = n.next_key;
                                for (var a = function (r) {
                                        for (var o = [], n = 0, i = (r = ue().atob(r)).length; n < i; ++n) o.push(r.charCodeAt(n));
                                        var s = t.context.root.lookup("easemob.pb.Meta");
                                        if (1 === (s = s.decode(o)).ns) return Ce.call(t, s, {
                                            errorCode: 0,
                                            reason: ""
                                        }, !0, e.format)
                                    }, c = 0; c < s; c++) {
                                    var u = a(i[c].msg);
                                    u && o.msgs.push(u)
                                }
                                "function" == typeof e.success && e.success(o)
                            },
                            error: p
                        };
                    ae.ajax(d, E.GET_HISTORY_MSG)
                }
            }

            function Gt(e) {
                var t = this;
                return new Promise((function (r, o) {
                    if ("string" != typeof e.targetId || "" === e.targetId) throw Error('"Invalid parameter": "targetId"');
                    if (!vt.call(t)) return o(m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    }));
                    var n = t.context,
                        i = n.orgName,
                        s = n.appName,
                        a = n.userId,
                        c = "groupChat" === e.chatType || "chatRoom" === e.chatType ? "@conference.easemob.com" : "@easemob.com",
                        u = {
                            queue: e.targetId + c,
                            start: e.cursor || -1,
                            pull_number: e.pageSize || 20,
                            isGroup: "groupChat" === e.chatType || "chatRoom" === e.chatType || !1,
                            is_positive: "down" === e.searchDirection,
                            end: -1
                        },
                        l = {
                            url: t.apiUrl + "/" + i + "/" + s + "/users/" + a + "/messageroaming",
                            dataType: "json",
                            type: "POST",
                            headers: {
                                Authorization: "Bearer " + t.token,
                                "Content-Type": "application/json"
                            },
                            data: JSON.stringify(u),
                            success: function (e) {
                                for (var o = null == e ? void 0 : e.data, n = o.msgs || [], i = function (e) {
                                        for (var r = [], o = 0, n = (e = ue().atob(e)).length; o < n; ++o) r.push(e.charCodeAt(o));
                                        var i = t.context.root.lookup("easemob.pb.Meta");
                                        if (1 === (i = i.decode(r)).ns) return Ce.call(t, i, {
                                            errorCode: 0,
                                            reason: ""
                                        }, !0, !0)
                                    }, s = [], a = 0; a < n.length; a++) {
                                    var c = i(n[a].msg);
                                    c && s.push(c)
                                }
                                o.msgs = s;
                                var u = {
                                    cursor: o.next_key,
                                    messages: s
                                };
                                r(u)
                            },
                            error: e.fail
                        };
                    ae.ajax(l), Z.debug("Call getHistoryMessages", e)
                }))
            }

            function Bt(e, t) {
                var r = {
                    id: this.getUniqueId(),
                    to: e,
                    message: t
                };
                Me.operatRoster.call(this, r, "add"), Z.debug("Call addContact", r)
            }
            var Ht = Ft;

            function Ft(e) {
                var t = {
                    id: this.getUniqueId(),
                    to: e
                };
                Me.operatRoster.call(this, t, "remove"), Z.debug("Call deleteContact", t)
            }

            function Wt(e) {
                var t = {
                    id: this.getUniqueId(),
                    to: e
                };
                Me.operatRoster.call(this, t, "accept"), Z.debug("Call acceptInvitation", t)
            }
            var qt = Wt;

            function zt(e) {
                var t = {
                    id: this.getUniqueId(),
                    to: e
                };
                Me.operatRoster.call(this, t, "decline"), Z.debug("Call declineContactInvite", t)
            }
            var Kt = zt;

            function Jt(e) {
                Me.operatRoster.call(this, {
                    to: e.name
                }, "ban"), Z.debug("Call addUsersToBlocklist", e)
            }
            var Vt = Jt,
                Xt = Jt;

            function Yt(e) {
                Me.operatRoster.call(this, {
                    to: e.name
                }, "allow"), Z.debug("Call removeUserFromBlocklist", e)
            }
            var $t = Yt,
                Qt = Yt;

            function Zt(e) {
                var t = this.getUniqueId(),
                    r = {
                        id: t,
                        to: e.to
                    };
                this._msgHash[t] = Et({}, r);
                var o = "";
                void 0 !== e.chatType ? o = e.chatType : void 0 !== e.type && (o = "chat" === e.type ? "singleChat" : e.type);
                var n = {
                    id: t,
                    type: "recall",
                    chatType: o,
                    ackId: e.mid,
                    to: e.to,
                    isChatThread: e.isChatThread || !1,
                    success: e.success,
                    fail: e.fail
                };
                return Z.debug("Call recallMessage", e), this.mSync.send(n, this)
            }

            function er(e) {
                return _t(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s, a, c, u;
                    return Tt(this, (function (l) {
                        switch (l.label) {
                            case 0:
                                if ("string" != typeof e.messageId || !e.messageId) throw Error("Invalid parameter messageId: " + e.messageId);
                                if ("string" != typeof e.reaction || !e.reaction) throw Error("Invalid parameter reaction: " + e.reaction);
                                return vt.call(this) ? (r = this.context, o = r.orgName, n = r.appName, i = r.accessToken, s = e.reaction, a = e.messageId, c = {
                                    msgId: a,
                                    message: s
                                }, u = {
                                    url: this.apiUrl + "/" + o + "/" + n + "/reaction/user/" + this.user,
                                    type: "POST",
                                    data: JSON.stringify(c),
                                    dataType: "json",
                                    headers: {
                                        Authorization: "Bearer " + i,
                                        "Content-Type": "application/json"
                                    }
                                }, [4, ae.ajax(u)]) : (t = m.create({
                                    type: y.REST_PARAMS_STATUS,
                                    message: "appkey or token error"
                                }), [2, Promise.reject(t)]);
                            case 1:
                                return l.sent(), [2]
                        }
                    }))
                }))
            }

            function tr(e) {
                return _t(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s, a, c;
                    return Tt(this, (function (u) {
                        switch (u.label) {
                            case 0:
                                if ("string" != typeof e.reaction || !e.reaction) throw Error("Invalid parameter reactionId: " + e.reaction);
                                return vt.call(this) ? (r = this.context, o = r.orgName, n = r.appName, i = r.accessToken, s = e.messageId, a = e.reaction, c = {
                                    url: this.apiUrl + "/" + o + "/" + n + "/reaction/user/" + this.user + "?msgId=" + s + "&message=" + a,
                                    type: "DELETE",
                                    dataType: "json",
                                    headers: {
                                        Authorization: "Bearer " + i,
                                        "Content-Type": "application/json"
                                    }
                                }, [4, ae.ajax(c)]) : (t = m.create({
                                    type: y.REST_PARAMS_STATUS,
                                    message: "appkey or token error"
                                }), [2, Promise.reject(t)]);
                            case 1:
                                return u.sent(), [2]
                        }
                    }))
                }))
            }

            function rr(e) {
                if ("string" != typeof e.chatType || !e.chatType) throw Error("Invalid parameter chatType: " + e.chatType);
                if (!e.messageId) throw Error("Invalid parameter messageId: " + e.messageId);
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = e.chatType,
                    a = e.messageId,
                    c = {
                        msgIdList: "string" == typeof a ? [a] : a,
                        msgType: "singleChat" === s ? "chat" : "groupchat",
                        groupId: e.groupId || null
                    },
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/reaction/user/" + this.user,
                        type: "GET",
                        data: c,
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        }
                    };
                return ae.ajax(u).then((function (e) {
                    var t = e.data;
                    return null == t || t.forEach((function (e) {
                        null == e || e.reactionList.forEach((function (e) {
                            e.isAddedBySelf = e.state, delete e.state, delete e.reactionId
                        }))
                    })), e
                }))
            }
            var or = rr;

            function nr(e) {
                if ("string" != typeof e.reaction || !e.reaction) throw Error("Invalid parameter reaction: " + e.reaction);
                if ("string" != typeof e.messageId || !e.messageId) throw Error("Invalid parameter messageId: " + e.messageId);
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = e.cursor,
                    a = e.pageSize,
                    c = {
                        msgId: e.messageId,
                        message: e.reaction,
                        currentPage: s || null,
                        pageSize: a || 20
                    },
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/reaction/user/" + this.user + "/detail",
                        type: "GET",
                        data: c,
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        }
                    };
                return ae.ajax(u).then((function (e) {
                    return e.data.isAddedBySelf = e.data.state, delete e.data.state, delete e.data.reactionId, e
                }))
            }

            function ir(e) {
                return _t(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s, a, c, u, l, p;
                    return Tt(this, (function (d) {
                        switch (d.label) {
                            case 0:
                                if ("string" != typeof e.reportType || !e.reportType) throw Error("Invalid parameter reportType: " + e.reportType);
                                if ("string" != typeof e.messageId || !e.messageId) throw Error("Invalid parameter messageId: " + e.messageId);
                                if ("string" != typeof e.reportReason || !e.reportReason) throw Error("Invalid parameter messageId: " + e.reportReason);
                                return vt.call(this) ? (r = this.context, o = r.orgName, n = r.appName, i = r.accessToken, s = e.reportType, a = e.reportReason, c = e.messageId, u = {
                                    username: this.user,
                                    reportType: s,
                                    reportReason: a
                                }, l = this.apiUrl + "/" + o + "/" + n + "/user/" + this.user + "/moderation/report/message/" + c, p = {
                                    url: l,
                                    type: "POST",
                                    data: JSON.stringify(u),
                                    dataType: "json",
                                    headers: {
                                        Authorization: "Bearer " + i,
                                        "Content-Type": "application/json"
                                    }
                                }, [4, ae.ajax(p)]) : (t = m.create({
                                    type: y.REST_PARAMS_STATUS,
                                    message: "appkey or token error"
                                }), [2, Promise.reject(t)]);
                            case 1:
                                return d.sent(), [2]
                        }
                    }))
                }))
            }

            function sr(e) {
                if (!e || !e.data) throw Error("Invalid parameter");
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups?resource=" + s.clientResource,
                        dataType: "json",
                        type: "POST",
                        data: JSON.stringify({
                            owner: this.user,
                            groupname: e.data.groupname,
                            desc: e.data.desc,
                            members: e.data.members,
                            public: e.data.public,
                            approval: e.data.approval,
                            allowinvites: e.data.allowinvites,
                            invite_need_confirm: e.data.inviteNeedConfirm,
                            maxusers: e.data.maxusers
                        }),
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: function (t) {
                            e.success && e.success(t)
                        },
                        error: e.error
                    };
                return Z.debug("Call createGroup:", e), ae.ajax(a, E.CREATE_GROUP)
            }
            var ar = sr;

            function cr(e) {
                var t;
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error("Invalid parameter");
                if (!vt.call(this)) {
                    var r = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(r)
                }
                var o = this.context,
                    n = o.orgName,
                    i = o.appName,
                    s = o.accessToken,
                    a = o.jid,
                    c = {
                        entities: [(t = {}, t["notification_ignore_" + e.groupId] = !0, t)]
                    },
                    u = {
                        type: "PUT",
                        url: this.apiUrl + "/" + n + "/" + i + "/users/" + this.user + "?resource=" + a.clientResource,
                        data: JSON.stringify(c),
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + s,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call blockGroupMessages", e), ae.ajax(u, E.BLOCK_GROUP)
            }
            var ur = cr;

            function lr(e) {
                if ("number" != typeof e.limit) throw Error("Invalid parameter");
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = {
                        limit: e.limit,
                        cursor: e.cursor
                    };
                e.cursor || delete s.cursor;
                var a = {
                    url: this.apiUrl + "/" + o + "/" + n + "/publicchatgroups",
                    type: "GET",
                    dataType: "json",
                    data: s,
                    headers: {
                        Authorization: "Bearer " + i,
                        "Content-Type": "application/json"
                    },
                    success: e.success,
                    error: e.error
                };
                return Z.debug("Call listGroups", e), ae.ajax(a, E.LIST_GROUP)
            }
            var pr = lr;

            function dr(e) {
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = {
                        url: this.apiUrl + "/" + o + "/" + n + "/users/" + this.user + "/joined_chatgroups",
                        dataType: "json",
                        type: "GET",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e && (null == e ? void 0 : e.success),
                        error: e && (null == e ? void 0 : e.error)
                    };
                return Z.debug("Call getJoinedGroups", e), ae.ajax(s, E.GET_USER_GROUP)
            }

            function hr(e) {
                if ("number" != typeof e.pageNum || "number" != typeof e.pageSize) throw Error('Invalid parameter: "pageNum or pageSize"');
                if (e.pageNum < 0 || e.pageSize < 0) throw Error('"pageNum" should >= 0 and "pageSize" should >= 0');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = e.needAffiliations || e.needRole ? "/chatgroups/user/" + this.user + "?pagenum=" + e.pageNum + "&pagesize=" + e.pageSize + "&needAffiliations=" + e.needAffiliations + "&needRole=" + e.needRole : "/users/" + this.user + "/joined_chatgroups?pagenum=" + e.pageNum + "&pagesize=" + e.pageSize,
                    a = {
                        url: this.apiUrl + "/" + o + "/" + n + s,
                        dataType: "json",
                        type: "GET",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e && (null == e ? void 0 : e.success),
                        error: e && (null == e ? void 0 : e.error)
                    };
                return Z.debug("Call getGroup", e), ae.ajax(a, E.GET_USER_GROUP).then((function (e) {
                    var t = e.uri,
                        r = e.entities,
                        o = [];
                    return t.includes("joined_chatgroups") || (r.forEach((function (e) {
                        var t = {
                            affiliationsCount: e.affiliations_count,
                            groupName: e.name,
                            groupId: e.groupId,
                            role: e.permission,
                            disabled: e.disabled,
                            approval: e.membersonly,
                            allowInvites: e.allowinvites,
                            description: e.description,
                            maxUsers: e.maxusers,
                            public: e.public
                        };
                        o.push(t)
                    })), e.entities = o), e
                }))
            }

            function fr(e) {
                if ("string" != typeof e.groupId || "string" != typeof e.newOwner) throw Error("Invalid parameter");
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = {
                        newowner: e.newOwner
                    },
                    o = this.context,
                    n = o.orgName,
                    i = o.appName,
                    s = o.accessToken,
                    a = o.jid,
                    c = {
                        url: this.apiUrl + "/" + n + "/" + i + "/chatgroups/" + e.groupId + "?resource=" + a.clientResource,
                        type: "PUT",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + s,
                            "Content-Type": "application/json"
                        },
                        data: JSON.stringify(r),
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call changeOwner", e), ae.ajax(c, E.CHANGE_OWNER)
            }
            var mr = fr;

            function yr(e) {
                if ("string" != typeof e.groupId && !Array.isArray(e.groupId)) throw Error('Invalid parameter: "groupId"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + e.groupId + "?joined_time=true",
                        type: "GET",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call getGroupInfo", e), ae.ajax(s, E.GET_GROUP_INFO)
            }

            function gr(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error("Invalid parameter");
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.groupId,
                    c = {
                        groupname: e.groupName,
                        description: e.description
                    },
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + a + "?resource=" + s.clientResource,
                        type: "PUT",
                        data: JSON.stringify(c),
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call modifyGroup", e), ae.ajax(u, E.MODIFY_GROUP)
            }

            function vr(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if (isNaN(e.pageNum) || e.pageNum <= 0) throw Error('The parameter "pageNum" should be a positive number');
                if (isNaN(e.pageSize) || e.pageSize <= 0) throw Error('The parameter "pageSize" should be a positive number');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = {
                        pagenum: e.pageNum,
                        pagesize: e.pageSize
                    },
                    o = this.context,
                    n = o.orgName,
                    i = o.appName,
                    s = o.accessToken,
                    a = {
                        url: this.apiUrl + "/" + n + "/" + i + "/chatgroups/" + e.groupId + "/users",
                        dataType: "json",
                        type: "GET",
                        data: r,
                        headers: {
                            Authorization: "Bearer " + s,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call listGroupMember", e), ae.ajax(a, E.LIST_GROUP_MEMBER)
            }
            var Er = vr;

            function _r(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = e.groupId,
                    a = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + s + "/admin",
                        dataType: "json",
                        type: "GET",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call getGroupAdmin", e), ae.ajax(a, E.GET_GROUP_ADMIN)
            }

            function Tr(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if ("string" != typeof e.username || "" === e.username) throw Error('Invalid parameter: "username"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.groupId,
                    c = {
                        newadmin: e.username
                    },
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + a + "/admin?resource=" + s.clientResource,
                        type: "POST",
                        dataType: "json",
                        data: JSON.stringify(c),
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call setGroupAdmin", e), ae.ajax(u, E.SET_GROUP_ADMIN)
            }
            var Or = Tr;

            function Ir(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if ("string" != typeof e.username || "" === e.username) throw Error('Invalid parameter: "username"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.groupId,
                    c = e.username,
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + a + "/admin/" + c + "?resource=" + s.clientResource,
                        type: "DELETE",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call removeAdmin", e), ae.ajax(u, E.REMOVE_GROUP_ADMIN)
            }
            var Rr = Ir;

            function Sr(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.groupId,
                    c = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + a + "?version=v3&resource=" + s.clientResource,
                        type: "DELETE",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call destroyGroup", e), ae.ajax(c, E.DISSOLVE_GROUP)
            }
            var Nr = Sr;

            function Cr(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.groupId,
                    c = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + a + "/quit?resource=" + s.clientResource,
                        type: "DELETE",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call quitGroup", e), ae.ajax(c, E.QUIT_GROUP)
            }
            var Ar = Cr;

            function br(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if (!Array.isArray(e.users)) throw Error('Invalid parameter: "users"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = e.groupId,
                    o = {
                        usernames: e.users
                    },
                    n = this.context,
                    i = n.orgName,
                    s = n.appName,
                    a = n.accessToken,
                    c = n.jid,
                    u = {
                        url: this.apiUrl + "/" + i + "/" + s + "/chatgroups/" + r + "/invite?resource=" + c.clientResource,
                        type: "POST",
                        data: JSON.stringify(o),
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + a,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call inviteUsersToGroup", e), ae.ajax(u, E.INVITE_TO_GROUP)
            }
            var Mr = br;

            function wr(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + e.groupId + "/apply?resource=" + s.clientResource,
                        type: "POST",
                        dataType: "json",
                        data: JSON.stringify({
                            message: e.message || ""
                        }),
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call joinGroup", e), ae.ajax(a, E.JOIN_GROUP)
            }

            function Ur(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if ("string" != typeof e.applicant || "" === e.applicant) throw Error('Invalid parameter: "applicant"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.groupId,
                    c = {
                        applicant: e.applicant,
                        verifyResult: !0,
                        reason: "no clue"
                    },
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + a + "/apply_verify?resource=" + s.clientResource,
                        type: "POST",
                        dataType: "json",
                        data: JSON.stringify(c),
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call agreeJoinGroup", e), ae.ajax(u, E.AGREE_JOIN_GROUP)
            }
            var kr = Ur;

            function Pr(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if ("string" != typeof e.applicant || "" === e.applicant) throw Error('Invalid parameter: "applicant"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.groupId,
                    c = {
                        applicant: e.applicant,
                        verifyResult: !1,
                        reason: e.reason || ""
                    },
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + a + "/apply_verify?resource=" + s.clientResource,
                        type: "POST",
                        dataType: "json",
                        data: JSON.stringify(c),
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call rejectGroupJoinRequest", e), ae.ajax(u, E.REJECT_JOIN_GROUP)
            }
            var xr = Pr;

            function jr(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if ("string" != typeof e.invitee || "" === e.invitee) throw Error('Invalid parameter: "invitee"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.groupId,
                    c = {
                        invitee: e.invitee,
                        verifyResult: !0
                    },
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + a + "/invite_verify?resource=" + s.clientResource,
                        type: "POST",
                        dataType: "json",
                        data: JSON.stringify(c),
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call acceptGroupInvite", e), ae.ajax(u, E.AGREE_INVITE_GROUP)
            }
            var Lr = jr;

            function Dr(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if ("string" != typeof e.invitee || "" === e.invitee) throw Error('Invalid parameter: "invitee"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.groupId,
                    c = {
                        invitee: e.invitee,
                        verifyResult: !1
                    },
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + a + "/invite_verify?resource=" + s.clientResource,
                        type: "POST",
                        dataType: "json",
                        data: JSON.stringify(c),
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call rejectGroupInvite", e), ae.ajax(u, E.REJECT_INVITE_GROUP)
            }
            var Gr = Dr;

            function Br(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if ("string" != typeof e.username || "" === e.username) throw Error('Invalid parameter: "username"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = e.groupId,
                    o = e.username,
                    n = this.context,
                    i = n.orgName,
                    s = n.appName,
                    a = n.accessToken,
                    c = n.jid,
                    u = {
                        url: this.apiUrl + "/" + i + "/" + s + "/chatgroups/" + r + "/users/" + o + "?resource=" + c.clientResource,
                        type: "DELETE",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + a,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call removeGroupMember", e), ae.ajax(u, E.REMOVE_GROUP_MEMBER)
            }
            var Hr = Br;

            function Fr(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if (!Array.isArray(e.users)) throw Error('Invalid parameter: "users"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.groupId,
                    c = e.users.join(","),
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + a + "/users/" + c + "?resource=" + s.clientResource,
                        type: "DELETE",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call removeGroupMembers", e), ae.ajax(u, E.MULTI_REMOVE_GROUP_MEMBER)
            }
            var Wr = Fr;

            function qr(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if ("string" != typeof e.username || "" === e.username) throw Error('Invalid parameter: "username"');
                if ("number" != typeof e.muteDuration) throw Error('Invalid parameter: "muteDuration"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.groupId,
                    c = {
                        usernames: [e.username],
                        mute_duration: e.muteDuration
                    },
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + a + "/mute?resource=" + s.clientResource,
                        dataType: "json",
                        type: "POST",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        data: JSON.stringify(c),
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call muteGroupMember", e), ae.ajax(u, E.MUTE_GROUP_MEMBER)
            }
            var zr = qr;

            function Kr(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if ("string" != typeof e.username || "" === e.username) throw Error('Invalid parameter: "username"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.groupId,
                    c = e.username,
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + a + "/mute/" + c + "?resource=" + s.clientResource,
                        dataType: "json",
                        type: "DELETE",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call unmuteGroupMember", e), ae.ajax(u, E.UNMUTE_GROUP_MEMBER)
            }
            var Jr = Kr;

            function Vr(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = e.groupId,
                    a = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + s + "/mute",
                        dataType: "json",
                        type: "GET",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call getGroupMuteList", e), ae.ajax(a, E.GET_GROUP_MUTE_LIST)
            }
            var Xr = Vr,
                Yr = Vr;

            function $r(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if ("string" != typeof e.username || "" === e.username) throw Error('Invalid parameter: "username"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.groupId,
                    c = e.username,
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + a + "/blocks/users/" + c + "?resource=" + s.clientResource,
                        type: "POST",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call blockGroupMember", e), ae.ajax(u, E.BLOCK_GROUP_MEMBER)
            }
            var Qr = $r;

            function Zr(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if (!Array.isArray(e.usernames)) throw Error('Invalid parameter: "usernames"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.groupId,
                    c = {
                        usernames: e.usernames
                    },
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + a + "/blocks/users?resource=" + s.clientResource,
                        data: JSON.stringify(c),
                        type: "POST",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call blockGroupMembers", e), ae.ajax(u, E.BLOCK_GROUP_MEMBERS)
            }
            var eo = Zr;

            function to(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if ("string" != typeof e.username || "" === e.username) throw Error('Invalid parameter: "username"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.groupId,
                    c = e.username,
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + a + "/blocks/users/" + c + "?resource=" + s.clientResource,
                        type: "DELETE",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call unblockGroupMember", e), ae.ajax(u, E.UNBLOCK_GROUP_MEMBER)
            }
            var ro = to;

            function oo(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if (!Array.isArray(e.usernames)) throw Error('Invalid parameter: "usernames"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.groupId,
                    c = e.usernames.join(","),
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + a + "/blocks/users/" + c + "?resource=" + s.clientResource,
                        type: "DELETE",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call unblockGroupMembers", e), ae.ajax(u, E.UNBLOCK_GROUP_MEMBERS)
            }
            var no = oo;

            function io(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = e.groupId,
                    a = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + s + "/blocks/users",
                        type: "GET",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call getGroupBlacklist", e), ae.ajax(a, E.GET_GROUP_BLACK_LIST)
            }
            var so = io,
                ao = io;

            function co(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.groupId,
                    c = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + a + "/ban?resource=" + s.clientResource,
                        type: "POST",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call disableSendGroupMsg", e), ae.ajax(c, E.DISABLED_SEND_GROUP_MSG)
            }

            function uo(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.groupId,
                    c = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + a + "/ban?resource=" + s.clientResource,
                        type: "DELETE",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call enableSendGroupMsg", e), ae.ajax(c, E.ENABLE_SEND_GROUP_MSG)
            }

            function lo(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if (!Array.isArray(e.users)) throw Error('Invalid parameter: "users"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.groupId,
                    c = {
                        usernames: e.users
                    },
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + a + "/white/users?resource=" + s.clientResource,
                        type: "POST",
                        data: JSON.stringify(c),
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call addUsersToGroupWhitelist", e), ae.ajax(u, E.ADD_USERS_TO_GROUP_WHITE)
            }
            var po = lo;

            function ho(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if ("string" != typeof e.userName || "" === e.userName) throw Error('Invalid parameter: "userName"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.groupId,
                    c = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + a + "/white/users/" + e.userName + "?resource=" + s.clientResource,
                        type: "DELETE",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call removeGroupAllowlistMember", e), ae.ajax(c, E.REMOVE_GROUP_WHITE_MEMBER)
            }
            var fo = ho,
                mo = ho;

            function yo(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = e.groupId,
                    a = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + s + "/white/users",
                        type: "GET",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call getGroupAllowlist", e), ae.ajax(a, E.GET_GROUP_WHITE_LIST)
            }
            var go = yo;

            function vo(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if ("string" != typeof e.userName || "" === e.userName) throw Error('Invalid parameter: "userName"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = e.groupId,
                    a = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + s + "/white/users/" + e.userName,
                        type: "GET",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call isInGroupAllowlist", e), ae.ajax(a, E.IS_IN_GROUP_WHITE_LIST)
            }
            var Eo = vo,
                _o = vo;

            function To(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if ("string" != typeof e.msgId || "" === e.msgId) throw Error('Invalid parameter: "msgId"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + e.groupId + "/acks/" + e.msgId,
                        dataType: "json",
                        type: "GET",
                        data: {
                            limit: 500,
                            key: void 0
                        },
                        headers: {
                            Authorization: "Bearer " + i
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call getGroupMsgReadUser", e), ae.ajax(s, E.GET_GROUP_MSG_READ_USER)
            }

            function Oo(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = e.groupId,
                    a = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + s + "/announcement",
                        type: "GET",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call fetchGroupAnnouncement", e), ae.ajax(a, E.GET_GROUP_ANN)
            }

            function Io(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if ("string" != typeof e.announcement) throw Error('Invalid parameter: "announcement"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.groupId,
                    c = {
                        announcement: e.announcement
                    },
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + a + "/announcement?resource=" + s.clientResource,
                        type: "POST",
                        dataType: "json",
                        data: JSON.stringify(c),
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call updateGroupAnnouncement", e), ae.ajax(u, E.UPDATE_GROUP_ANN)
            }

            function Ro(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if ("object" != typeof e.file) throw Error('Invalid parameter: "file"');
                if (vt.call(this)) {
                    var t = this.context,
                        r = t.orgName,
                        o = t.appName,
                        n = t.accessToken,
                        i = t.jid,
                        s = e.groupId;
                    ae.uploadFile({
                        uploadUrl: this.apiUrl + "/" + r + "/" + o + "/chatgroups/" + s + "/share_files?resource=" + i.clientResource,
                        onFileUploadProgress: e.onFileUploadProgress,
                        onFileUploadComplete: e.onFileUploadComplete,
                        onFileUploadError: e.onFileUploadError,
                        onFileUploadCanceled: e.onFileUploadCanceled,
                        accessToken: n,
                        apiUrl: this.apiUrl,
                        file: e.file,
                        appKey: this.context.appKey
                    }, E.UPLOAD_GROUP_FILE), Z.debug("Call uploadGroupSharedFile", e)
                }
            }

            function So(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if ("string" != typeof e.fileId || "" === e.fileId) throw Error('Invalid parameter: "file"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.groupId,
                    c = e.fileId,
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + a + "/share_files/" + c + "?resource=" + s.clientResource,
                        type: "DELETE",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call deleteGroupSharedFile", e), ae.ajax(u, E.DELETE_GROUP_FILE)
            }

            function No(e) {
                if ("string" != typeof e.groupId || "" === e.groupId) throw Error('Invalid parameter: "groupId"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = e.pageNum || 1,
                    a = e.pageSize || 10,
                    c = e.groupId,
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatgroups/" + c + "/share_files?pagenum=" + s + "&pagesize=" + a,
                        type: "GET",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call getGroupSharedFilelist", e), ae.ajax(u, E.GET_GROUP_FILE_LIST)
            }
            var Co = No;

            function Ao(e) {
                var t = this.context,
                    r = t.orgName,
                    o = t.appName,
                    n = t.accessToken,
                    i = this.apiUrl,
                    s = e.groupId,
                    a = e.fileId;
                ae.download.call(this, {
                    url: i + "/" + r + "/" + o + "/chatgroups/" + s + "/share_files/" + a,
                    onFileDownloadComplete: e.onFileDownloadComplete,
                    onFileDownloadError: e.onFileDownloadError,
                    accessToken: n,
                    id: a,
                    secret: e.secret
                }, E.DOWN_GROUP_FILE), Z.debug("Call downloadGroupSharedFile", e)
            }

            function bo(e) {
                var t = this;
                if ("number" != typeof e.pagenum || "number" != typeof e.pagesize) throw Error("Invalid parameter");
                if (!vt.call(this)) {
                    var r = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(r)
                }
                var o = {
                        pagenum: e.pagenum || 1,
                        pagesize: e.pagesize || 20
                    },
                    n = this.context,
                    i = n.orgName,
                    s = n.appName,
                    a = n.accessToken,
                    c = {
                        url: this.apiUrl + "/" + i + "/" + s + "/chatrooms",
                        dataType: "json",
                        type: "GET",
                        headers: {
                            Authorization: "Bearer " + a
                        },
                        data: o,
                        success: function (t) {
                            "function" == typeof e.success && e.success(t)
                        },
                        error: function (r) {
                            r.error && r.error_description && t.onError && t.onError({
                                type: y.WEBIM_CONNCTION_LOAD_CHATROOM_ERROR,
                                message: r.error_description,
                                data: r
                            }), "function" == typeof e.error && e.error(r)
                        }
                    };
                return Z.debug("Call getChatRooms", e), ae.ajax(c, E.GET_CHATROOM_LIST)
            }

            function Mo(e) {
                if ("string" != typeof e.name) throw Error("Invalid parameter");
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = {
                        name: e.name,
                        description: e.description,
                        maxusers: e.maxusers,
                        owner: this.user,
                        members: e.members
                    },
                    o = this.context,
                    n = o.orgName,
                    i = o.appName,
                    s = (o.accessToken, o.jid),
                    a = {
                        url: this.apiUrl + "/" + n + "/" + i + "/chatrooms?resource=" + s.clientResource,
                        dataType: "json",
                        type: "POST",
                        data: JSON.stringify(r),
                        headers: {
                            Authorization: "Bearer " + e.token || 0,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call createChatRoom", e), ae.ajax(a, E.CREATE_CHATROOM)
            }

            function wo(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId) throw Error("Invalid parameter");
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = (r.accessToken, r.jid),
                    s = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + e.chatRoomId + "?resource=" + i.clientResource,
                        dataType: "json",
                        type: "DELETE",
                        headers: {
                            Authorization: "Bearer " + e.token || 0
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call destroyChatRoom", e), ae.ajax(s, E.DESTROY_CHATROOM)
            }

            function Uo(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId) throw Error("Invalid parameter");
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + e.chatRoomId,
                        dataType: "json",
                        type: "GET",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call getChatRoomDetails", e), ae.ajax(s, E.GET_CHATROOM_DETAIL)
            }

            function ko(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId) throw Error("Invalid parameter");
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.chatRoomId,
                    c = {
                        groupname: e.chatRoomName,
                        description: e.description,
                        maxusers: e.maxusers
                    },
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + a + "?resource=" + s.clientResource,
                        type: "PUT",
                        data: JSON.stringify(c),
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call modifyChatRoom", e), ae.ajax(u, E.MODIFY_CHATROOM)
            }

            function Po(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId || "string" != typeof e.username) throw Error("Invalid parameter");
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.chatRoomId,
                    c = e.username,
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + a + "/users/" + c + "?resource=" + s.clientResource,
                        type: "DELETE",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call removeChatRoomMember", e), ae.ajax(u, E.REMOVE_CHATROOM_MEMBER)
            }
            var xo = Po;

            function jo(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId || !Array.isArray(e.users)) throw Error("Invalid parameter");
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = e.chatRoomId,
                    o = e.users.join(","),
                    n = this.context,
                    i = n.orgName,
                    s = n.appName,
                    a = n.accessToken,
                    c = n.jid,
                    u = {
                        url: this.apiUrl + "/" + i + "/" + s + "/chatrooms/" + r + "/users/" + o + "?resource=" + c.clientResource,
                        type: "DELETE",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + a,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call removeChatRoomMembers", e), ae.ajax(u, E.MULTI_REMOVE_CHATROOM_MEMBER)
            }
            var Lo = jo;

            function Do(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId || !Array.isArray(e.users)) throw Error("Invalid parameter");
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = e.chatRoomId,
                    o = {
                        usernames: e.users
                    },
                    n = this.context,
                    i = n.orgName,
                    s = n.appName,
                    a = n.accessToken,
                    c = n.jid,
                    u = {
                        url: this.apiUrl + "/" + i + "/" + s + "/chatrooms/" + r + "/users?resource=" + c.clientResource,
                        type: "POST",
                        data: JSON.stringify(o),
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + a,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call addUsersToChatRoom", e), ae.ajax(u, E.ADD_USERS_TO_CHATROOM)
            }

            function Go(e) {
                if ("string" != typeof e.roomId || "" === e.roomId) throw Error("Invalid parameter");
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + e.roomId + "/apply?resource=" + s.clientResource,
                        dataType: "json",
                        type: "POST",
                        data: JSON.stringify({
                            message: e.message || ""
                        }),
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call joinChatRoom", e), ae.ajax(a, E.JOIN_CHATROOM)
            }

            function Bo(e) {
                var t = this;
                if ("string" != typeof e.roomId || "" === e.roomId) throw Error("Invalid parameter");
                if (!vt.call(this)) {
                    var r = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(r)
                }
                var o = this.context,
                    n = o.orgName,
                    i = o.appName,
                    s = o.accessToken,
                    a = o.jid,
                    c = {
                        url: this.apiUrl + "/" + n + "/" + i + "/chatrooms/" + e.roomId + "/quit?resource=" + a.clientResource,
                        dataType: "json",
                        type: "DELETE",
                        headers: {
                            Authorization: "Bearer " + s
                        },
                        success: function (r) {
                            t._load_msg_cache = t._load_msg_cache.filter((function (t) {
                                return (!t.isGroup || t.to !== e.roomId) && t
                            })), "function" == typeof e.success && e.success(r)
                        },
                        error: e.error
                    };
                return Z.debug("Call leaveChatRoom", e), ae.ajax(c, E.QUIT_CHATROOM)
            }
            var Ho = Bo;

            function Fo(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId) throw Error('Invalid parameter: "chatRoomId"');
                if (isNaN(e.pageNum) || e.pageNum <= 0) throw Error('The parameter "pageNum" should be a positive number');
                if (isNaN(e.pageSize) || e.pageSize <= 0) throw Error('The parameter "pageSize" should be a positive number');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = {
                        pagenum: e.pageNum,
                        pagesize: e.pageSize
                    },
                    o = this.context,
                    n = o.orgName,
                    i = o.appName,
                    s = o.accessToken,
                    a = {
                        url: this.apiUrl + "/" + n + "/" + i + "/chatrooms/" + e.chatRoomId + "/users",
                        dataType: "json",
                        type: "GET",
                        data: r,
                        headers: {
                            Authorization: "Bearer " + s,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call listChatRoomMembers", e), ae.ajax(a, E.LIST_CHATROOM_MEMBERS)
            }
            var Wo = Fo;

            function qo(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId) throw Error('Invalid parameter: "chatRoomId"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = e.chatRoomId,
                    a = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + s + "/admin",
                        dataType: "json",
                        type: "GET",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call getChatRoomAdmin", e), ae.ajax(a, E.GET_CHATROOM_ADMIN)
            }

            function zo(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId) throw Error('Invalid parameter: "chatRoomId"');
                if ("string" != typeof e.username || "" === e.username) throw Error('Invalid parameter: "username"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.chatRoomId,
                    c = {
                        newadmin: e.username
                    },
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + a + "/admin?resource=" + s.clientResource,
                        type: "POST",
                        dataType: "json",
                        data: JSON.stringify(c),
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call setChatRoomAdmin", e), ae.ajax(u, E.SET_CHATROOM_ADMIN)
            }

            function Ko(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId) throw Error('Invalid parameter: "chatRoomId"');
                if ("string" != typeof e.username || "" === e.username) throw Error('Invalid parameter: "username"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.chatRoomId,
                    c = e.username,
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + a + "/admin/" + c + "?resource=" + s.clientResource,
                        type: "DELETE",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call removeChatRoomAdmin", e), ae.ajax(u, E.REMOVE_CHATROOM_ADMIN)
            }

            function Jo(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId) throw Error('Invalid parameter: "groupId"');
                if ("string" != typeof e.username || "" === e.username) throw Error('Invalid parameter: "username"');
                if ("number" != typeof e.muteDuration) throw Error('Invalid parameter: "muteDuration"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.chatRoomId,
                    c = {
                        usernames: [e.username],
                        mute_duration: e.muteDuration
                    },
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + a + "/mute?resource=" + s.clientResource,
                        dataType: "json",
                        type: "POST",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        data: JSON.stringify(c),
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call muteChatRoomMember", e), ae.ajax(u, E.MUTE_CHATROOM_MEMBER)
            }

            function Vo(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId) throw Error('Invalid parameter: "chatRoomId"');
                if ("string" != typeof e.username || "" === e.username) throw Error('Invalid parameter: "username"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.chatRoomId,
                    c = e.username,
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + a + "/mute/" + c + "?resource=" + s.clientResource,
                        dataType: "json",
                        type: "DELETE",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call unmuteChatRoomMember", e), ae.ajax(u, E.REMOVE_MUTE_CHATROOM_MEMBER)
            }
            var Xo = Vo;

            function Yo(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId) throw Error('Invalid parameter: "chatRoomId"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = e.chatRoomId,
                    a = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + s + "/mute",
                        dataType: "json",
                        type: "GET",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call getChatRoomMutelist", e), ae.ajax(a, E.GET_MUTE_CHATROOM_MEMBERS)
            }
            var $o = Yo,
                Qo = Yo;

            function Zo(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId) throw Error('Invalid parameter: "chatRoomId"');
                if ("string" != typeof e.username || "" === e.username) throw Error('Invalid parameter: "username"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.chatRoomId,
                    c = e.username,
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + a + "/blocks/users/" + c + "?resource=" + s.clientResource,
                        type: "POST",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call blockChatRoomMember", e), ae.ajax(u, E.SET_CHATROOM_MEMBER_TO_BLACK)
            }
            var en = Zo;

            function tn(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId) throw Error('Invalid parameter: "chatRoomId"');
                if (!Array.isArray(e.usernames)) throw Error('Invalid parameter: "usernames"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.chatRoomId,
                    c = {
                        usernames: e.usernames
                    },
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + a + "/blocks/users?resource=" + s.clientResource,
                        data: JSON.stringify(c),
                        type: "POST",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Chat blockChatRoomMembers:", u), ae.ajax(u, E.MULTI_SET_CHATROOM_MEMBER_TO_BLACK)
            }
            var rn = tn;

            function on(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId) throw Error('Invalid parameter: "chatRoomId"');
                if ("string" != typeof e.username || "" === e.username) throw Error('Invalid parameter: "username"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.chatRoomId,
                    c = e.username,
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + a + "/blocks/users/" + c + "?resource=" + s.clientResource,
                        type: "DELETE",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call unblockChatRoomMember", e), ae.ajax(u, E.REMOVE_CHATROOM_MEMBER_BLACK)
            }
            var nn = on;

            function sn(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId) throw Error('Invalid parameter: "chatRoomId"');
                if (!Array.isArray(e.usernames)) throw Error('Invalid parameter: "usernames"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.chatRoomId,
                    c = e.usernames.join(","),
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + a + "/blocks/users/" + c + "?resource=" + s.clientResource,
                        type: "DELETE",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call unblockChatRoomMembers", e), ae.ajax(u, E.MULTI_REMOVE_CHATROOM_MEMBER_BLACK)
            }
            var an = sn;

            function cn(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId) throw Error('Invalid parameter: "chatRoomId"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = e.chatRoomId,
                    a = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + s + "/blocks/users",
                        type: "GET",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call getChatRoomBlocklist", e), ae.ajax(a, E.GET_CHATROOM_BLOCK_MEMBERS)
            }
            var un = cn,
                ln = cn;

            function pn(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId) throw Error('Invalid parameter: "chatRoomId"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.chatRoomId,
                    c = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + a + "/ban?resource=" + s.clientResource,
                        type: "POST",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call disableSendChatRoomMsg", e), ae.ajax(c, E.DISABLED_CHATROOM_SEND_MSG)
            }

            function dn(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId) throw Error('Invalid parameter: "chatRoomId"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.chatRoomId,
                    c = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + a + "/ban?resource=" + s.clientResource,
                        type: "DELETE",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call enableSendChatRoomMsg", e), ae.ajax(c, E.ENABLE_CHATROOM_SEND_MSG)
            }

            function hn(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId) throw Error('Invalid parameter: "chatRoomId"');
                if (!Array.isArray(e.users)) throw Error('Invalid parameter: "users"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.chatRoomId,
                    c = {
                        usernames: e.users
                    },
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + a + "/white/users?resource=" + s.clientResource,
                        type: "POST",
                        data: JSON.stringify(c),
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call addUsersToChatRoomWhitelist", e), ae.ajax(u, E.ADD_USERS_TO_CHATROOM)
            }
            var fn = hn;

            function mn(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId) throw Error('Invalid parameter: "chatRoomId"');
                if ("string" != typeof e.userName || "" === e.userName) throw Error('Invalid parameter: "userName"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.chatRoomId,
                    c = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + a + "/white/users/" + e.userName + "?resource=" + s.clientResource,
                        type: "DELETE",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call removeChatRoomAllowlistMember", e), ae.ajax(c, E.REMOVE_CHATROOM_WHITE_USERS)
            }
            var yn = mn,
                gn = mn;

            function vn(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId) throw Error('Invalid parameter: "chatRoomId"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = e.chatRoomId,
                    a = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + s + "/white/users",
                        type: "GET",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call getChatRoomAllowlist", e), ae.ajax(a, E.GET_CHATROOM_WHITE_USERS)
            }
            var En = vn;

            function _n(e) {
                if ("string" != typeof e.chatRoomId || "" === e.chatRoomId) throw Error('Invalid parameter: "chatRoomId"');
                if ("string" != typeof e.userName || "" === e.userName) throw Error('Invalid parameter: "userName"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = e.chatRoomId,
                    a = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + s + "/white/users/" + e.userName,
                        type: "GET",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call isInChatRoomAllowlist", e), ae.ajax(a, E.CHECK_CHATROOM_WHITE_USER)
            }
            var Tn = _n;

            function On(e) {
                if ("string" != typeof e.roomId || "" === e.roomId) throw Error('Invalid parameter: "roomId"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = e.roomId,
                    a = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + s + "/announcement",
                        type: "GET",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call fetchChatRoomAnnouncement", e), ae.ajax(a, E.GET_CHATROOM_ANN)
            }

            function In(e) {
                if ("string" != typeof e.roomId || "" === e.roomId) throw Error('Invalid parameter: "roomId"');
                if ("string" != typeof e.announcement) throw Error('Invalid parameter: "announcement"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.roomId,
                    c = {
                        announcement: e.announcement
                    },
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + a + "/announcement?resource=" + s.clientResource,
                        type: "POST",
                        dataType: "json",
                        data: JSON.stringify(c),
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call updateChatRoomAnnouncement:", e), ae.ajax(u, E.UPDATE_CHATROOM_ANN)
            }

            function Rn(e) {
                if ("string" != typeof e.roomId || "" === e.roomId) throw Error('Invalid parameter: "roomId"');
                if ("object" != typeof e.file) throw Error('Invalid parameter: "file"');
                if (vt.call(this)) {
                    var t = this.context,
                        r = t.orgName,
                        o = t.appName,
                        n = t.accessToken,
                        i = t.jid,
                        s = e.roomId;
                    ae.uploadFile({
                        uploadUrl: this.apiUrl + "/" + r + "/" + o + "/chatrooms/" + s + "/share_files?resource=" + i.clientResource,
                        onFileUploadProgress: e.onFileUploadProgress,
                        onFileUploadComplete: e.onFileUploadComplete,
                        onFileUploadError: e.onFileUploadError,
                        onFileUploadCanceled: e.onFileUploadCanceled,
                        accessToken: n,
                        apiUrl: this.apiUrl,
                        file: e.file,
                        appKey: this.context.appKey
                    }, E.UPLOAD_CHATROOM_FILE), Z.debug("Call uploadChatRoomSharedFile", e)
                }
            }

            function Sn(e) {
                if ("string" != typeof e.roomId || "" === e.roomId) throw Error('Invalid parameter: "roomId"');
                if ("string" != typeof e.fileId || "" === e.fileId) throw Error('Invalid parameter: "fileId"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = e.roomId,
                    c = e.fileId,
                    u = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + a + "/share_files/" + c + "?resource=" + s.clientResource,
                        type: "DELETE",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call deleteChatRoomSharedFile", e), ae.ajax(u, E.DELETE_CHATROOM_FILE)
            }

            function Nn(e) {
                if ("string" != typeof e.roomId || "" === e.roomId) throw Error('Invalid parameter: "roomId"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = e.roomId,
                    a = {
                        url: this.apiUrl + "/" + o + "/" + n + "/chatrooms/" + s + "/share_files",
                        type: "GET",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json",
                            accept: "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call fetchChatRoomSharedFileList", e), ae.ajax(a, E.GET_CHATROOM_FILES)
            }
            var Cn = Nn;

            function An(e) {
                if ("string" != typeof e.description) throw Error('Invalid parameter: "description"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.accessToken,
                    n = r.orgName,
                    i = r.appName,
                    s = r.userId,
                    a = this.context.jid.clientResource,
                    c = {
                        ext: e.description
                    },
                    u = {
                        url: this.apiUrl + "/" + n + "/" + i + "/users/" + s + "/presence/" + a + "/1",
                        type: "POST",
                        dataType: "json",
                        data: JSON.stringify(c),
                        headers: {
                            Authorization: "Bearer " + o,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call publishPresence:", e), ae.ajax(u)
            }

            function bn(e) {
                if (!Array.isArray(e.usernames)) throw Error('Invalid parameter: "usernames"');
                if (!e.usernames.length) throw Error('"usernames" can not be empty');
                if ("number" != typeof e.expiry) throw Error('Invalid parameter: "expiry"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.userId,
                    s = r.accessToken,
                    a = {
                        usernames: e.usernames
                    },
                    c = {
                        url: this.apiUrl + "/" + o + "/" + n + "/users/" + i + "/presence/" + e.expiry,
                        type: "POST",
                        dataType: "json",
                        data: JSON.stringify(a),
                        headers: {
                            Authorization: "Bearer " + s,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call subscribePresence:", e), ae.ajax(c)
            }

            function Mn(e) {
                if (!Array.isArray(e.usernames)) throw Error('Invalid parameter: "usernames"');
                if (!e.usernames.length) throw Error('"usernames" can not be empty');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.userId,
                    s = r.accessToken,
                    a = (e.usernames, {
                        url: this.apiUrl + "/" + o + "/" + n + "/users/" + i + "/presence",
                        type: "DELETE",
                        dataType: "json",
                        data: JSON.stringify(e.usernames),
                        headers: {
                            Authorization: "Bearer " + s,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    });
                return Z.debug("Call unsubscribePresence:", e), ae.ajax(a)
            }

            function wn(e) {
                if ("number" != typeof e.pageNum || "number" != typeof e.pageSize) throw Error('Invalid parameter: "pageNum or pageSize"');
                if (e.pageNum < 0 || e.pageSize < 0) throw Error('"pageNum" should >= 0 and "pageSize" should >= 0');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.userId,
                    s = r.accessToken,
                    a = {
                        url: this.apiUrl + "/" + o + "/" + n + "/users/" + i + "/presence/sublist?pageNum=" + e.pageNum + "&pageSize=" + e.pageSize,
                        type: "GET",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + s,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call getSubscribedPresenceList:", e), ae.ajax(a)
            }
            var Un = wn;

            function kn(e) {
                if (!Array.isArray(e.usernames)) throw Error('Invalid parameter: "usernames"');
                if (!e.usernames.length) throw Error('"usernames" can not be empty');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = {
                        usernames: e.usernames
                    },
                    o = this.context,
                    n = o.orgName,
                    i = o.appName,
                    s = o.userId,
                    a = o.accessToken,
                    c = {
                        url: this.apiUrl + "/" + n + "/" + i + "/users/" + s + "/presence",
                        type: "POST",
                        dataType: "json",
                        data: JSON.stringify(r),
                        headers: {
                            Authorization: "Bearer " + a,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call getPresenceStatus:", e), ae.ajax(c)
            }

            function Pn(e) {
                if (!(e.options instanceof Object)) throw Error('Invalid parameter: "options"');
                var t = e.options.paramType;
                if ("number" != typeof t || t < 0 || t > 2) throw Error('Invalid parameter: "options of paramType"');
                if (0 === t) {
                    if ("string" != typeof e.options.remindType) throw Error('Invalid parameter: "options of remindType"')
                } else if (1 === t) {
                    if ("number" != typeof e.options.duration) throw Error('Invalid parameter: "options of duration"')
                } else if (2 === t) {
                    var r = e.options,
                        o = r.startTime,
                        n = r.endTime;
                    if (!(o instanceof Object && Object.keys(o).length)) throw Error('Invalid parameter: "options of startTime"');
                    if (!o.hours || "number" != typeof o.hours || !o.minutes || "number" != typeof o.minutes) throw Error('Invalid parameter: "options of startTime of hours or minutes"');
                    if (!(n instanceof Object && Object.keys(n).length)) throw Error('Invalid parameter: "options of endTime"');
                    if (!n.hours || "number" != typeof n.hours || !n.minutes || "number" != typeof n.minutes) throw Error('Invalid parameter: "options of endTime of hours or minutes"')
                }
                if (!vt.call(this)) {
                    var i = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(i)
                }
                var s = this.context,
                    a = s.accessToken,
                    c = s.orgName,
                    u = s.appName,
                    l = s.userId,
                    p = {};
                switch (t) {
                    case 0:
                        p = {
                            type: e.options.remindType
                        };
                        break;
                    case 1:
                        p = {
                            ignoreDuration: e.options.duration
                        };
                        break;
                    case 2:
                        var d = e.options;
                        o = d.startTime, n = d.endTime, p = {
                            ignoreInterval: o.hours + ":" + o.minutes + "-" + n.hours + ":" + n.minutes
                        }
                }
                var h = {
                    url: this.apiUrl + "/" + c + "/" + u + "/users/" + l + "/notification/user/" + l,
                    type: "PUT",
                    dataType: "json",
                    data: JSON.stringify(p),
                    headers: {
                        Authorization: "Bearer " + a,
                        "Content-Type": "application/json"
                    },
                    success: e.success,
                    error: e.error
                };
                return Z.debug("Call setSilentModeForAll:", e), ae.ajax(h)
            }

            function xn(e) {
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.accessToken,
                    n = r.orgName,
                    i = r.appName,
                    s = r.userId,
                    a = {
                        url: this.apiUrl + "/" + n + "/" + i + "/users/" + s + "/notification/user/" + s,
                        type: "GET",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + o,
                            "Content-Type": "application/json"
                        },
                        success: null == e ? void 0 : e.success,
                        error: null == e ? void 0 : e.error
                    };
                return Z.debug("Call getSilentModeForAll:", e), ae.ajax(a)
            }

            function jn(e) {
                if ("string" != typeof e.conversationId || !e.conversationId) throw Error('Invalid parameter: "conversationId"');
                if ("string" != typeof e.type || !e.type) throw Error('Invalid parameter: "type"');
                if (!(e.options instanceof Object)) throw Error('Invalid parameter: "options"');
                var t = e.options.paramType;
                if ("number" != typeof t || t < 0 || t > 2) throw Error('Invalid parameter: "options of paramType"');
                if (0 === t) {
                    if ("string" != typeof e.options.remindType) throw Error('Invalid parameter: "options of remindType"')
                } else if (1 === t) {
                    if ("number" != typeof e.options.duration) throw Error('Invalid parameter: "options of duration"')
                } else if (2 === t) {
                    var r = e.options,
                        o = r.startTime,
                        n = r.endTime;
                    if (!(o instanceof Object && Object.keys(o).length)) throw Error('Invalid parameter: "options of startTime"');
                    if (!o.hours || "number" != typeof o.hours || !o.minutes || "number" != typeof o.minutes) throw Error('Invalid parameter: "options of startTime of hours or minutes"');
                    if (!(n instanceof Object && Object.keys(n).length)) throw Error('Invalid parameter: "options of endTime"');
                    if (!n.hours || "number" != typeof n.hours || !n.minutes || "number" != typeof n.minutes) throw Error('Invalid parameter: "options of endTime of hours or minutes"')
                }
                if (!vt.call(this)) {
                    var i = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(i)
                }
                var s = this.context,
                    a = s.accessToken,
                    c = s.orgName,
                    u = s.appName,
                    l = s.userId,
                    p = "chatgroup",
                    d = {};
                switch (t) {
                    case 0:
                        d = {
                            type: e.options.remindType
                        };
                        break;
                    case 1:
                        d = {
                            ignoreDuration: e.options.duration
                        };
                        break;
                    case 2:
                        var h = e.options;
                        o = h.startTime, n = h.endTime, d = {
                            ignoreInterval: o.hours + ":" + o.minutes + "-" + n.hours + ":" + n.minutes
                        }
                }
                "singleChat" === e.type && (p = "user");
                var f = {
                    url: this.apiUrl + "/" + c + "/" + u + "/users/" + l + "/notification/" + p + "/" + e.conversationId,
                    type: "PUT",
                    dataType: "json",
                    data: JSON.stringify(d),
                    headers: {
                        Authorization: "Bearer " + a,
                        "Content-Type": "application/json"
                    },
                    success: e.success,
                    error: e.error
                };
                return Z.debug("Call setSilentModeForConversation:", e), ae.ajax(f)
            }

            function Ln(e) {
                if ("string" != typeof e.conversationId || !e.conversationId) throw Error('Invalid parameter: "conversationId"');
                if ("string" != typeof e.type || !e.type) throw Error('Invalid parameter: "type"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.accessToken,
                    n = r.orgName,
                    i = r.appName,
                    s = r.userId,
                    a = "chatgroup";
                "singleChat" === e.type && (a = "user");
                var c = {
                    url: this.apiUrl + "/" + n + "/" + i + "/users/" + s + "/notification/" + a + "/" + e.conversationId,
                    type: "PUT",
                    dataType: "json",
                    data: JSON.stringify({
                        type: "DEFAULT"
                    }),
                    headers: {
                        Authorization: "Bearer " + o,
                        "Content-Type": "application/json"
                    },
                    success: e.success,
                    error: e.error
                };
                return Z.debug("Call clearRemindTypeForConversation:", e), ae.ajax(c)
            }

            function Dn(e) {
                if ("string" != typeof e.conversationId || !e.conversationId) throw Error('Invalid parameter: "conversationId"');
                if ("string" != typeof e.type || !e.type) throw Error('Invalid parameter: "type"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.accessToken,
                    n = r.orgName,
                    i = r.appName,
                    s = r.userId,
                    a = "chatgroup";
                "singleChat" === e.type && (a = "user");
                var c = {
                    url: this.apiUrl + "/" + n + "/" + i + "/users/" + s + "/notification/" + a + "/" + e.conversationId,
                    type: "GET",
                    dataType: "json",
                    headers: {
                        Authorization: "Bearer " + o,
                        "Content-Type": "application/json"
                    },
                    success: e.success,
                    error: e.error
                };
                return Z.debug("Call getSilentModeForConversation:", e), ae.ajax(c)
            }

            function Gn(e) {
                if (!Array.isArray(e.conversationList)) throw Error('Invalid parameter: "conversationList"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.accessToken,
                    n = r.orgName,
                    i = r.appName,
                    s = r.userId,
                    a = [],
                    c = [];
                e.conversationList.forEach((function (e) {
                    "singleChat" === e.type ? a.push(e.id) : c.push(e.id)
                }));
                var u = a.length ? a.join(",") : "",
                    l = c.length ? c.join(",") : "",
                    p = {
                        url: this.apiUrl + "/" + n + "/" + i + "/users/" + s + "/notification?user=" + u + "&group=" + l,
                        type: "GET",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + o,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call getSilentModeForConversations:", e), ae.ajax(p)
            }

            function Bn(e) {
                if ("string" != typeof e.language || !e.language) throw Error('Invalid parameter: "language"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = {
                        translationLanguage: e.language
                    },
                    o = this.context,
                    n = o.accessToken,
                    i = o.orgName,
                    s = o.appName,
                    a = o.userId,
                    c = {
                        url: this.apiUrl + "/" + i + "/" + s + "/users/" + a + "/notification/language",
                        type: "PUT",
                        dataType: "json",
                        data: JSON.stringify(r),
                        headers: {
                            Authorization: "Bearer " + n,
                            "Content-Type": "application/json"
                        },
                        success: e.success,
                        error: e.error
                    };
                return Z.debug("Call setPushPerformLanguage:", e), ae.ajax(c)
            }

            function Hn(e) {
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.accessToken,
                    n = r.orgName,
                    i = r.appName,
                    s = r.userId,
                    a = {
                        url: this.apiUrl + "/" + n + "/" + i + "/users/" + s + "/notification/language",
                        type: "GET",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + o,
                            "Content-Type": "application/json"
                        },
                        success: null == e ? void 0 : e.success,
                        error: null == e ? void 0 : e.error
                    };
                return Z.debug("Call getPushPerformLanguage:", e), ae.ajax(a)
            }
            var Fn = function (e, t, r, o) {
                    return new(r || (r = Promise))((function (n, i) {
                        function s(e) {
                            try {
                                c(o.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            try {
                                c(o.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                                e(t)
                            }))).then(s, a)
                        }
                        c((o = o.apply(e, t || [])).next())
                    }))
                },
                Wn = function (e, t) {
                    var r, o, n, i, s = {
                        label: 0,
                        sent: function () {
                            if (1 & n[0]) throw n[1];
                            return n[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                        return this
                    }), i;

                    function a(i) {
                        return function (a) {
                            return function (i) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (r = 1, o && (n = 2 & i[0] ? o.return : i[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, i[1])).done) return n;
                                    switch (o = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            n = i;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!((n = (n = s.trys).length > 0 && n[n.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < n[1]) {
                                                s.label = n[1], n = i;
                                                break
                                            }
                                            if (n && s.label < n[2]) {
                                                s.label = n[2], s.ops.push(i);
                                                break
                                            }
                                            n[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e], o = 0
                                } finally {
                                    r = n = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                };

            function qn(e) {
                if ("string" != typeof e.name || "" === e.name) throw Error("Invalid parameter name: " + e.name);
                if ("string" != typeof e.messageId || "" === e.messageId) throw Error("Invalid parameter messageId: " + e.messageId);
                if ("string" != typeof e.parentId || "" === e.parentId) throw Error("Invalid parameter parentId: " + e.parentId);
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = {
                        name: e.name,
                        msg_id: e.messageId,
                        group_id: e.parentId,
                        owner: this.user
                    },
                    c = {
                        url: this.apiUrl + "/" + o + "/" + n + "/thread?resource=" + s.clientResource,
                        type: "POST",
                        dataType: "json",
                        data: JSON.stringify(a),
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        }
                    };
                return ae.ajax(c).then((function (e) {
                    var t = e.data.thread_id;
                    return e.data = {
                        chatThreadId: t
                    }, e
                }))
            }

            function zn(e) {
                if ("string" != typeof e.chatThreadId || "" === e.chatThreadId) throw Error("Invalid parameter chatThreadId: " + e.chatThreadId);
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = {
                        url: this.apiUrl + "/" + o + "/" + n + "/thread/" + e.chatThreadId + "/user/" + this.user + "/join?resource=" + s.clientResource,
                        type: "POST",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        }
                    };
                return ae.ajax(a).then((function (e) {
                    var t = e.data.detail;
                    return t.messageId = t.msgId, t.parentId = t.groupId, delete t.msgId, delete t.groupId, e
                }))
            }

            function Kn(e) {
                return Fn(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s, a;
                    return Wn(this, (function (c) {
                        switch (c.label) {
                            case 0:
                                if ("string" != typeof e.chatThreadId || "" === e.chatThreadId) throw Error("Invalid parameter chatThreadId: " + e.chatThreadId);
                                return vt.call(this) ? (r = this.context, o = r.orgName, n = r.appName, i = r.accessToken, s = r.jid, a = {
                                    url: this.apiUrl + "/" + o + "/" + n + "/thread/" + e.chatThreadId + "/user/" + this.user + "/quit?resource=" + s.clientResource,
                                    type: "DELETE",
                                    dataType: "json",
                                    headers: {
                                        Authorization: "Bearer " + i,
                                        "Content-Type": "application/json"
                                    }
                                }, [4, ae.ajax(a)]) : (t = m.create({
                                    type: y.REST_PARAMS_STATUS,
                                    message: "appkey or token error"
                                }), [2, Promise.reject(t)]);
                            case 1:
                                return c.sent(), [2]
                        }
                    }))
                }))
            }

            function Jn(e) {
                return Fn(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s, a;
                    return Wn(this, (function (c) {
                        switch (c.label) {
                            case 0:
                                if ("string" != typeof e.chatThreadId || "" === e.chatThreadId) throw Error("Invalid parameter chatThreadId: " + e.chatThreadId);
                                return vt.call(this) ? (r = this.context, o = r.orgName, n = r.appName, i = r.accessToken, s = r.jid, a = {
                                    url: this.apiUrl + "/" + o + "/" + n + "/thread/" + e.chatThreadId + "?resource=" + s.clientResource,
                                    type: "DELETE",
                                    dataType: "json",
                                    headers: {
                                        Authorization: "Bearer " + i,
                                        "Content-Type": "application/json"
                                    }
                                }, [4, ae.ajax(a)]) : (t = m.create({
                                    type: y.REST_PARAMS_STATUS,
                                    message: "appkey or token error"
                                }), [2, Promise.reject(t)]);
                            case 1:
                                return c.sent(), [2]
                        }
                    }))
                }))
            }

            function Vn(e) {
                if ("string" != typeof e.chatThreadId || "" === e.chatThreadId) throw Error("Invalid parameter chatThreadId: " + e.chatThreadId);
                if ("string" != typeof e.name || "" === e.name) throw Error("Invalid parameter name: " + e.name);
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = {
                        name: e.name
                    },
                    c = {
                        url: this.apiUrl + "/" + o + "/" + n + "/thread/" + e.chatThreadId + "?resource=" + s.clientResource,
                        type: "PUT",
                        dataType: "json",
                        data: JSON.stringify(a),
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        }
                    };
                return ae.ajax(c)
            }

            function Xn(e) {
                if ("string" != typeof e.chatThreadId || "" === e.chatThreadId) throw Error("Invalid parameter chatThreadId: " + e.chatThreadId);
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = {
                        limit: e.pageSize || 20,
                        cursor: e.cursor || ""
                    },
                    a = {
                        url: this.apiUrl + "/" + o + "/" + n + "/thread/" + e.chatThreadId + "/users",
                        type: "GET",
                        dataType: "json",
                        data: s,
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        }
                    };
                return ae.ajax(a)
            }

            function Yn(e) {
                if ("string" != typeof e.chatThreadId || "" === e.chatThreadId) throw Error("Invalid parameter chatThreadId: " + e.chatThreadId);
                if ("string" != typeof e.username || "" === e.username) throw Error("Invalid parameter username: " + e.username);
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = r.jid,
                    a = {
                        url: this.apiUrl + "/" + o + "/" + n + "/thread/" + e.chatThreadId + "/users/" + e.username + "?resource=" + s.clientResource,
                        type: "DELETE",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        }
                    };
                return ae.ajax(a)
            }

            function $n(e) {
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = {
                        limit: e.pageSize || 20,
                        cursor: e.cursor || ""
                    },
                    a = {
                        url: e.parentId ? this.apiUrl + "/" + o + "/" + n + "/threads/chatgroups/" + e.parentId + "/user/" + this.user : this.apiUrl + "/" + o + "/" + n + "/threads/user/" + this.user,
                        type: "GET",
                        dataType: "json",
                        data: s,
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        }
                    };
                return ae.ajax(a).then((function (e) {
                    var t = e.entities;
                    return null == t || t.forEach((function (e) {
                        e.parentId = e.groupId, e.messageId = e.msgId, delete e.groupId, delete e.msgId
                    })), e
                }))
            }

            function Qn(e) {
                if ("string" != typeof e.parentId || "" === e.parentId) throw Error("Invalid parameter parentId: " + e.parentId);
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = {
                        cursor: e.cursor || "",
                        limit: e.pageSize || 20
                    },
                    a = {
                        url: this.apiUrl + "/" + o + "/" + n + "/threads/chatgroups/" + e.parentId,
                        type: "GET",
                        dataType: "json",
                        data: s,
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        }
                    };
                return ae.ajax(a).then((function (e) {
                    var t = e.entities;
                    return null == t || t.forEach((function (e) {
                        e.parentId = e.groupId, e.messageId = e.msgId, delete e.groupId, delete e.msgId
                    })), e
                }))
            }

            function Zn(e) {
                if (!Array.isArray(e.chatThreadIds)) throw Error("Invalid parameter chatThreadIds: " + e.chatThreadIds);
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = {
                        threadIds: e.chatThreadIds
                    },
                    a = {
                        url: this.apiUrl + "/" + o + "/" + n + "/thread/message",
                        type: "POST",
                        dataType: "json",
                        data: JSON.stringify(s),
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        }
                    };
                return ae.ajax(a).then((function (e) {
                    return function (e) {
                        var t = e.entities;
                        return null == t || t.forEach((function (e) {
                            e.chatThreadId = e.thread_id, e.last_message && "{}" !== JSON.stringify(e.last_message) ? e.lastMessage = pe(e.last_message) : e.lastMessage = e.last_message, delete e.thread_id, delete e.last_message
                        })), e
                    }(e)
                }))
            }

            function ei(e) {
                if ("string" != typeof e.chatThreadId || "" === e.chatThreadId) throw Error("Invalid parameter chatThreadId: " + e.chatThreadId);
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = {
                        url: this.apiUrl + "/" + o + "/" + n + "/thread/" + e.chatThreadId,
                        type: "GET",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + i,
                            "Content-Type": "application/json"
                        }
                    };
                return ae.ajax(s).then((function (e) {
                    return e.data.affiliationsCount = e.data.affiliations_count, e.data.messageId = e.data.msgId, e.data.parentId = e.data.groupId, delete e.data.affiliations_count, delete e.data.msgId, delete e.data.groupId, e
                }))
            }

            function ti() {
                if (!vt.call(this)) {
                    var e = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(e)
                }
                var t = this.context,
                    r = t.orgName,
                    o = t.appName,
                    n = t.accessToken,
                    i = {
                        url: this.apiUrl + "/" + r + "/" + o + "/users/" + this.user + "/translate/support/language",
                        dataType: "json",
                        type: "GET",
                        headers: {
                            Authorization: "Bearer " + n
                        }
                    };
                return Z.debug("Call getSupportedLanguages"), ae.ajax(i)
            }

            function ri(e) {
                if ("string" != typeof e.text || "" === e.text) throw Error('Invalid parameter: "text"');
                if (!Array.isArray(e.languages)) throw Error('Invalid parameter: "language"');
                if (!vt.call(this)) {
                    var t = m.create({
                        type: y.REST_PARAMS_STATUS,
                        message: "appkey or token error"
                    });
                    return Promise.reject(t)
                }
                var r = this.context,
                    o = r.orgName,
                    n = r.appName,
                    i = r.accessToken,
                    s = this.apiUrl + "/" + o + "/" + n + "/users/" + this.user + "/translate",
                    a = {
                        text: e.text,
                        to: e.languages
                    },
                    c = {
                        url: s,
                        dataType: "json",
                        type: "POST",
                        data: JSON.stringify(a),
                        headers: {
                            Authorization: "Bearer " + i
                        }
                    };
                return Z.debug("Call translateMessage"), ae.ajax(c)
            }
            var oi, ni = function (e, t, r, o) {
                    return new(r || (r = Promise))((function (n, i) {
                        function s(e) {
                            try {
                                c(o.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            try {
                                c(o.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                                e(t)
                            }))).then(s, a)
                        }
                        c((o = o.apply(e, t || [])).next())
                    }))
                },
                ii = function (e, t) {
                    var r, o, n, i, s = {
                        label: 0,
                        sent: function () {
                            if (1 & n[0]) throw n[1];
                            return n[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                        return this
                    }), i;

                    function a(i) {
                        return function (a) {
                            return function (i) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (r = 1, o && (n = 2 & i[0] ? o.return : i[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, i[1])).done) return n;
                                    switch (o = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            n = i;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!((n = (n = s.trys).length > 0 && n[n.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < n[1]) {
                                                s.label = n[1], n = i;
                                                break
                                            }
                                            if (n && s.label < n[2]) {
                                                s.label = n[2], s.ops.push(i);
                                                break
                                            }
                                            n[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e], o = 0
                                } finally {
                                    r = n = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                },
                si = m.create({
                    type: y.REST_PARAMS_STATUS,
                    message: "appkey or token error"
                }),
                ai = m.create({
                    type: y.REQUEST_UNKNOWN,
                    message: "Request Unknow Error"
                });

            function ci(e) {
                var t = [];
                e.tags && e.tags.forEach((function (e) {
                    t.push({
                        tagId: e.server_tag_id,
                        tagName: e.tag_name
                    })
                }));
                var r = {
                    id: e.server_id,
                    defaultChannelId: e.default_channel_id,
                    ext: e.custom,
                    created: e.created,
                    description: e.description,
                    icon: e.icon_url,
                    name: e.name,
                    owner: e.owner
                };
                return e.tags && (r.tags = t), r
            }

            function ui(e) {
                try {
                    if (Array.isArray(e.servers)) {
                        var t = e.servers,
                            r = e.type,
                            o = e.cursor,
                            n = [];
                        t.forEach((function (e) {
                            n.push(ci(e))
                        }));
                        var i = {
                            list: n
                        };
                        return o && (i.cursor = o), {
                            type: r,
                            data: i
                        }
                    }
                    return {
                        type: e.type,
                        data: ci(e.server)
                    }
                } catch (t) {
                    return Z.error("unexpected server data: " + e), ai
                }
            }

            function li(e) {
                if ("string" != typeof e.name || "" === e.name) throw Error("Invalid parameter name: " + e.name);
                if (!vt.call(this)) return Promise.reject(si);
                var t = this.context,
                    r = t.orgName,
                    o = t.appName,
                    n = t.accessToken,
                    i = t.jid,
                    s = {
                        owner: this.user,
                        name: e.name
                    };
                e.icon && (s.icon_url = e.icon), e.description && (s.description = e.description), e.ext && (s.custom = e.ext);
                var a = {
                    url: this.apiUrl + "/" + r + "/" + o + "/circle/server?resource=" + i.clientResource,
                    type: "POST",
                    dataType: "json",
                    data: JSON.stringify(s),
                    headers: {
                        Authorization: "Bearer " + n,
                        "Content-Type": "application/json"
                    }
                };
                return ae.ajax(a).then((function (t) {
                    try {
                        var r = {
                            id: t.server_id,
                            defaultChannelId: t.default_channel_id,
                            tags: [],
                            name: s.name,
                            owner: s.owner
                        };
                        return e.icon && (r.icon = e.icon), e.description && (r.description = e.description), e.ext && (r.ext = e.ext), {
                            type: t.type,
                            data: r
                        }
                    } catch (e) {
                        return Z.error("unexpected server data: " + t), ai
                    }
                }))
            }

            function pi(e) {
                return ni(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s;
                    return ii(this, (function (a) {
                        switch (a.label) {
                            case 0:
                                if ("string" != typeof e.serverId || "" === e.serverId) throw Error("Invalid parameter serverId: " + e.serverId);
                                return vt.call(this) ? (t = this.context, r = t.orgName, o = t.appName, n = t.accessToken, i = t.jid, s = {
                                    url: this.apiUrl + "/" + r + "/" + o + "/circle/server/" + e.serverId + "?resource=" + i.clientResource,
                                    type: "DELETE",
                                    dataType: "json",
                                    headers: {
                                        Authorization: "Bearer " + n,
                                        "Content-Type": "application/json"
                                    }
                                }, [4, ae.ajax(s)]) : [2, Promise.reject(si)];
                            case 1:
                                return a.sent(), [2]
                        }
                    }))
                }))
            }

            function di(e) {
                return ni(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s, a;
                    return ii(this, (function (c) {
                        switch (c.label) {
                            case 0:
                                if ("string" != typeof e.serverId || "" === e.serverId) throw Error("Invalid parameter serverId: " + e.serverId);
                                return vt.call(this) ? (t = this.context, r = t.orgName, o = t.appName, n = t.accessToken, i = t.jid, s = {}, e.name && (s.name = e.name), e.icon && (s.icon_url = e.icon), e.description && (s.description = e.description), e.ext && (s.custom = e.ext), a = {
                                    url: this.apiUrl + "/" + r + "/" + o + "/circle/server/" + e.serverId + "?resource=" + i.clientResource,
                                    type: "PUT",
                                    dataType: "json",
                                    data: JSON.stringify(s),
                                    headers: {
                                        Authorization: "Bearer " + n,
                                        "Content-Type": "application/json"
                                    }
                                }, [4, ae.ajax(a)]) : [2, Promise.reject(si)];
                            case 1:
                                return [2, ui(c.sent())]
                        }
                    }))
                }))
            }

            function hi(e) {
                return ni(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s;
                    return ii(this, (function (a) {
                        switch (a.label) {
                            case 0:
                                if ("string" != typeof e.serverId || "" === e.serverId) throw Error("Invalid parameter serverId: " + e.serverId);
                                return vt.call(this) ? (t = this.context, r = t.orgName, o = t.appName, n = t.accessToken, i = t.jid, s = {
                                    url: this.apiUrl + "/" + r + "/" + o + "/circle/server/" + e.serverId + "/join?userId=" + this.user + "&resource=" + i.clientResource,
                                    type: "POST",
                                    dataType: "json",
                                    headers: {
                                        Authorization: "Bearer " + n,
                                        "Content-Type": "application/json"
                                    }
                                }, [4, ae.ajax(s)]) : [2, Promise.reject(si)];
                            case 1:
                                return [2, ui(a.sent())]
                        }
                    }))
                }))
            }

            function fi(e) {
                return ni(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s;
                    return ii(this, (function (a) {
                        switch (a.label) {
                            case 0:
                                if ("string" != typeof e.serverId || "" === e.serverId) throw Error("Invalid parameter serverId: " + e.serverId);
                                return vt.call(this) ? (t = this.context, r = t.orgName, o = t.appName, n = t.accessToken, i = t.jid, s = {
                                    url: this.apiUrl + "/" + r + "/" + o + "/circle/server/" + e.serverId + "/quit?resource=" + i.clientResource,
                                    type: "POST",
                                    dataType: "json",
                                    headers: {
                                        Authorization: "Bearer " + n,
                                        "Content-Type": "application/json"
                                    }
                                }, [4, ae.ajax(s)]) : [2, Promise.reject(si)];
                            case 1:
                                return a.sent(), [2]
                        }
                    }))
                }))
            }

            function mi(e) {
                return ni(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s;
                    return ii(this, (function (a) {
                        switch (a.label) {
                            case 0:
                                if ("string" != typeof e.serverId || "" === e.serverId) throw Error("Invalid parameter serverId: " + e.serverId);
                                if ("string" != typeof e.userId || "" === e.userId) throw Error("Invalid parameter userId: " + e.userId);
                                return vt.call(this) ? (t = this.context, r = t.orgName, o = t.appName, n = t.accessToken, i = t.jid, s = {
                                    url: this.apiUrl + "/" + r + "/" + o + "/circle/server/" + e.serverId + "/user/remove?userId=" + e.userId + "&resource=" + i.clientResource,
                                    type: "POST",
                                    dataType: "json",
                                    headers: {
                                        Authorization: "Bearer " + n,
                                        "Content-Type": "application/json"
                                    }
                                }, [4, ae.ajax(s)]) : [2, Promise.reject(si)];
                            case 1:
                                return a.sent(), [2]
                        }
                    }))
                }))
            }

            function yi(e) {
                return ni(this, void 0, void 0, (function () {
                    var t, r, o, n, i;
                    return ii(this, (function (s) {
                        if ("string" != typeof e.serverId || "" === e.serverId) throw Error("Invalid parameter name: " + e.serverId);
                        if (!Array.isArray(e.tags)) throw Error("Invalid parameter tags: " + e.tags);
                        return vt.call(this) ? (t = this.context, r = t.orgName, o = t.appName, n = t.accessToken, i = {
                            url: this.apiUrl + "/" + r + "/" + o + "/circle/server/" + e.serverId + "/tag/add",
                            type: "POST",
                            dataType: "json",
                            data: JSON.stringify({
                                tags: e.tags
                            }),
                            headers: {
                                Authorization: "Bearer " + n,
                                "Content-Type": "application/json"
                            }
                        }, [2, ae.ajax(i).then((function (e) {
                            try {
                                var t = [];
                                return e.tags && e.tags.length > 0 && e.tags.forEach((function (e) {
                                    t.push({
                                        tagId: e.server_tag_id,
                                        tagName: e.tag_name
                                    })
                                })), {
                                    type: e.type,
                                    data: {
                                        tags: t
                                    }
                                }
                            } catch (t) {
                                return Z.error("unexpected server data: " + e), ai
                            }
                        }))]) : [2, Promise.reject(si)]
                    }))
                }))
            }

            function gi(e) {
                return ni(this, void 0, void 0, (function () {
                    var t, r, o, n, i;
                    return ii(this, (function (s) {
                        switch (s.label) {
                            case 0:
                                if ("string" != typeof e.serverId || "" === e.serverId) throw Error("Invalid parameter name: " + e.serverId);
                                if (!Array.isArray(e.tagIds)) throw Error("Invalid parameter tagIds: " + e.tagIds);
                                return vt.call(this) ? (t = this.context, r = t.orgName, o = t.appName, n = t.accessToken, i = {
                                    url: this.apiUrl + "/" + r + "/" + o + "/circle/server/" + e.serverId + "/tag/remove",
                                    type: "POST",
                                    dataType: "json",
                                    data: JSON.stringify({
                                        tagIds: e.tagIds
                                    }),
                                    headers: {
                                        Authorization: "Bearer " + n,
                                        "Content-Type": "application/json"
                                    }
                                }, [4, ae.ajax(i)]) : [2, Promise.reject(si)];
                            case 1:
                                return s.sent(), [2]
                        }
                    }))
                }))
            }

            function vi(e) {
                return ni(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s, a;
                    return ii(this, (function (c) {
                        switch (c.label) {
                            case 0:
                                if ("string" != typeof e.keyword || "" === e.keyword) throw Error("Invalid parameter name: " + e.keyword);
                                return vt.call(this) ? (t = this.context, r = t.orgName, o = t.appName, n = t.accessToken, i = (null == e ? void 0 : e.pageSize) ? e.pageSize : 20, s = (null == e ? void 0 : e.cursor) ? e.cursor : "", a = {
                                    url: this.apiUrl + "/" + r + "/" + o + "/circle/server/search?name=" + e.keyword + "&limit=" + i + "&cursor=" + s,
                                    type: "GET",
                                    dataType: "json",
                                    headers: {
                                        Authorization: "Bearer " + n,
                                        "Content-Type": "application/json"
                                    }
                                }, [4, ae.ajax(a)]) : [2, Promise.reject(si)];
                            case 1:
                                return [2, ui(c.sent())]
                        }
                    }))
                }))
            }

            function Ei(e) {
                if (!vt.call(this)) return Promise.reject(si);
                var t = this.context,
                    r = t.orgName,
                    o = t.appName,
                    n = t.accessToken,
                    i = (null == e ? void 0 : e.pageSize) ? e.pageSize : 20,
                    s = (null == e ? void 0 : e.cursor) ? e.cursor : "",
                    a = {
                        url: this.apiUrl + "/" + r + "/" + o + "/circle/server/list?userId=" + this.user + "&limit=" + i + "&cursor=" + s,
                        type: "GET",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + n,
                            "Content-Type": "application/json"
                        }
                    };
                return ae.ajax(a).then((function (e) {
                    return ui(e)
                }))
            }

            function _i(e) {
                if ("string" != typeof e.serverId || "" === e.serverId) throw Error("Invalid parameter serverId: " + e.serverId);
                if (!vt.call(this)) return Promise.reject(si);
                var t = this.context,
                    r = t.orgName,
                    o = t.appName,
                    n = t.accessToken,
                    i = {
                        url: this.apiUrl + "/" + r + "/" + o + "/circle/server/" + e.serverId + "/by-id",
                        type: "GET",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + n,
                            "Content-Type": "application/json"
                        }
                    };
                return ae.ajax(i).then((function (e) {
                    return ui(e)
                }))
            }

            function Ti(e) {
                if ("string" != typeof e.serverId || "" === e.serverId) throw Error("Invalid parameter serverId: " + e.serverId);
                if (!vt.call(this)) return Promise.reject(si);
                var t = this.context,
                    r = t.orgName,
                    o = t.appName,
                    n = t.accessToken,
                    i = (null == e ? void 0 : e.pageSize) ? e.pageSize : 20,
                    s = (null == e ? void 0 : e.cursor) ? e.cursor : "",
                    a = {
                        url: this.apiUrl + "/" + r + "/" + o + "/circle/server/" + e.serverId + "/users?limit=" + i + "&cursor=" + s,
                        type: "GET",
                        dataType: "json",
                        headers: {
                            Authorization: "Bearer " + n,
                            "Content-Type": "application/json"
                        }
                    };
                return ae.ajax(a).then((function (e) {
                    try {
                        var t = [];
                        return e.users && e.users.forEach((function (e) {
                            t.push({
                                userId: e.user_id,
                                role: 0 === e.role ? "owner" : 1 === e.role ? "moderator" : "user"
                            })
                        })), {
                            type: e.type,
                            data: {
                                list: t,
                                cursor: (null == e ? void 0 : e.cursor) || ""
                            }
                        }
                    } catch (t) {
                        return Z.error("unexpected server data: " + e), ai
                    }
                }))
            }

            function Oi(e) {
                return ni(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s;
                    return ii(this, (function (a) {
                        switch (a.label) {
                            case 0:
                                if ("string" != typeof e.serverId || "" === e.serverId) throw Error("Invalid parameter serverId: " + e.serverId);
                                if ("string" != typeof e.userId || "" === e.userId) throw Error("Invalid parameter userId: " + e.userId);
                                return vt.call(this) ? (t = this.context, r = t.orgName, o = t.appName, n = t.accessToken, i = t.jid, s = {
                                    url: this.apiUrl + "/" + r + "/" + o + "/circle/server/" + e.serverId + "/user/role?userId=" + e.userId + "&role=1&resource=" + i.clientResource,
                                    type: "PUT",
                                    dataType: "json",
                                    headers: {
                                        Authorization: "Bearer " + n,
                                        "Content-Type": "application/json"
                                    }
                                }, [4, ae.ajax(s)]) : [2, Promise.reject(si)];
                            case 1:
                                return a.sent(), [2]
                        }
                    }))
                }))
            }

            function Ii(e) {
                return ni(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s;
                    return ii(this, (function (a) {
                        switch (a.label) {
                            case 0:
                                if ("string" != typeof e.serverId || "" === e.serverId) throw Error("Invalid parameter serverId: " + e.serverId);
                                if ("string" != typeof e.userId || "" === e.userId) throw Error("Invalid parameter userId: " + e.userId);
                                return vt.call(this) ? (t = this.context, r = t.orgName, o = t.appName, n = t.accessToken, i = t.jid, s = {
                                    url: this.apiUrl + "/" + r + "/" + o + "/circle/server/" + e.serverId + "/user/role?userId=" + e.userId + "&role=2&resource=" + i.clientResource,
                                    type: "PUT",
                                    dataType: "json",
                                    headers: {
                                        Authorization: "Bearer " + n,
                                        "Content-Type": "application/json"
                                    }
                                }, [4, ae.ajax(s)]) : [2, Promise.reject(si)];
                            case 1:
                                return a.sent(), [2]
                        }
                    }))
                }))
            }

            function Ri(e) {
                return ni(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s;
                    return ii(this, (function (a) {
                        switch (a.label) {
                            case 0:
                                if ("string" != typeof e.serverId || "" === e.serverId) throw Error("Invalid parameter serverId: " + e.serverId);
                                if ("string" != typeof e.userId || "" === e.userId) throw Error("Invalid parameter userId: " + e.userId);
                                return vt.call(this) ? (t = this.context, r = t.orgName, o = t.appName, n = t.accessToken, i = t.jid, s = {
                                    url: this.apiUrl + "/" + r + "/" + o + "/circle/server/" + e.serverId + "/invite/join?userId=" + e.userId + "&welcome=" + e.message + "&resource=" + i.clientResource,
                                    type: "POST",
                                    dataType: "json",
                                    headers: {
                                        Authorization: "Bearer " + n,
                                        "Content-Type": "application/json"
                                    }
                                }, [4, ae.ajax(s)]) : [2, Promise.reject(si)];
                            case 1:
                                return a.sent(), [2]
                        }
                    }))
                }))
            }

            function Si(e) {
                return ni(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s;
                    return ii(this, (function (a) {
                        switch (a.label) {
                            case 0:
                                if ("string" != typeof e.serverId || "" === e.serverId) throw Error("Invalid parameter serverId: " + e.serverId);
                                return vt.call(this) ? (t = this.context, r = t.orgName, o = t.appName, n = t.accessToken, i = t.jid, s = {
                                    url: this.apiUrl + "/" + r + "/" + o + "/circle/server/" + e.serverId + "/accept/invite?inviter=" + e.inviter + "&resource=" + i.clientResource,
                                    type: "POST",
                                    dataType: "json",
                                    headers: {
                                        Authorization: "Bearer " + n,
                                        "Content-Type": "application/json"
                                    }
                                }, [4, ae.ajax(s)]) : [2, Promise.reject(si)];
                            case 1:
                                return [2, ui(a.sent())]
                        }
                    }))
                }))
            }

            function Ni(e) {
                return ni(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s;
                    return ii(this, (function (a) {
                        switch (a.label) {
                            case 0:
                                if ("string" != typeof e.serverId || "" === e.serverId) throw Error("Invalid parameter serverId: " + e.serverId);
                                return vt.call(this) ? (t = this.context, r = t.orgName, o = t.appName, n = t.accessToken, i = t.jid, s = {
                                    url: this.apiUrl + "/" + r + "/" + o + "/circle/server/" + e.serverId + "/decline/invite?inviter=" + e.inviter + "&resource=" + i.clientResource,
                                    type: "POST",
                                    dataType: "json",
                                    headers: {
                                        Authorization: "Bearer " + n,
                                        "Content-Type": "application/json"
                                    }
                                }, [4, ae.ajax(s)]) : [2, Promise.reject(si)];
                            case 1:
                                return a.sent(), [2]
                        }
                    }))
                }))
            }

            function Ci(e) {
                return ni(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s, a, c;
                    return ii(this, (function (u) {
                        switch (u.label) {
                            case 0:
                                if ("string" != typeof e.serverId || "" === e.serverId) throw Error("Invalid parameter serverId: " + e.serverId);
                                return vt.call(this) ? (t = this.context, r = t.orgName, o = t.appName, n = t.accessToken, i = {
                                    url: this.apiUrl + "/" + r + "/" + o + "/circle/server/" + e.serverId + "/user/role?userId=" + this.user,
                                    type: "GET",
                                    dataType: "json",
                                    headers: {
                                        Authorization: "Bearer " + n,
                                        "Content-Type": "application/json"
                                    }
                                }, [4, ae.ajax(i)]) : [2, Promise.reject(si)];
                            case 1:
                                return s = u.sent(), a = s.type, c = s.role, [2, {
                                    type: a,
                                    data: {
                                        role: 0 === c ? "owner" : 1 === c ? "moderator" : "user"
                                    }
                                }]
                        }
                    }))
                }))
            }

            function Ai(e) {
                return ni(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s, a, c;
                    return ii(this, (function (u) {
                        switch (u.label) {
                            case 0:
                                if ("string" != typeof e.serverId || "" === e.serverId) throw Error("Invalid parameter serverId: " + e.serverId);
                                return vt.call(this) ? (t = this.context, r = t.orgName, o = t.appName, n = t.accessToken, i = {
                                    url: this.apiUrl + "/" + r + "/" + o + "/circle/server/" + e.serverId + "/user/" + this.user,
                                    type: "GET",
                                    dataType: "json",
                                    headers: {
                                        Authorization: "Bearer " + n,
                                        "Content-Type": "application/json"
                                    }
                                }, [4, ae.ajax(i)]) : [2, Promise.reject(si)];
                            case 1:
                                return s = u.sent(), a = s.type, c = s.result, [2, {
                                    type: a,
                                    data: {
                                        result: c
                                    }
                                }]
                        }
                    }))
                }))
            }

            function bi(e) {
                return ni(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s, a, c, u;
                    return ii(this, (function (l) {
                        switch (l.label) {
                            case 0:
                                if ("string" != typeof e.serverId || "" === e.serverId) throw Error("Invalid parameter serverId: " + e.serverId);
                                return vt.call(this) ? (t = this.context, r = t.orgName, o = t.appName, n = t.accessToken, i = {
                                    url: this.apiUrl + "/" + r + "/" + o + "/circle/server/" + e.serverId + "/tag",
                                    type: "GET",
                                    dataType: "json",
                                    headers: {
                                        Authorization: "Bearer " + n,
                                        "Content-Type": "application/json"
                                    }
                                }, [4, ae.ajax(i)]) : [2, Promise.reject(si)];
                            case 1:
                                return s = l.sent(), a = s.type, c = s.tags, u = [], c && c.forEach((function (e) {
                                    u.push({
                                        tagId: e.server_tag_id,
                                        tagName: e.tag_name
                                    })
                                })), [2, {
                                    type: a,
                                    data: {
                                        tags: u
                                    }
                                }]
                        }
                    }))
                }))
            }! function (e) {
                e[e.RANK_2000 = 0] = "RANK_2000", e[e.RANK_20000 = 1] = "RANK_20000", e[e.RANK_100000 = 2] = "RANK_100000"
            }(oi || (oi = {}));
            var Mi = function (e, t, r, o) {
                    return new(r || (r = Promise))((function (n, i) {
                        function s(e) {
                            try {
                                c(o.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            try {
                                c(o.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                                e(t)
                            }))).then(s, a)
                        }
                        c((o = o.apply(e, t || [])).next())
                    }))
                },
                wi = function (e, t) {
                    var r, o, n, i, s = {
                        label: 0,
                        sent: function () {
                            if (1 & n[0]) throw n[1];
                            return n[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                        return this
                    }), i;

                    function a(i) {
                        return function (a) {
                            return function (i) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (r = 1, o && (n = 2 & i[0] ? o.return : i[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, i[1])).done) return n;
                                    switch (o = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            n = i;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!((n = (n = s.trys).length > 0 && n[n.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < n[1]) {
                                                s.label = n[1], n = i;
                                                break
                                            }
                                            if (n && s.label < n[2]) {
                                                s.label = n[2], s.ops.push(i);
                                                break
                                            }
                                            n[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e], o = 0
                                } finally {
                                    r = n = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                },
                Ui = m.create({
                    type: y.REST_PARAMS_STATUS,
                    message: "appkey or token error"
                }),
                ki = m.create({
                    type: y.REQUEST_UNKNOWN,
                    message: "Request Unknow Error"
                }),
                Pi = function (e) {
                    try {
                        var t = e.channel_id,
                            r = e.created,
                            o = e.custom,
                            n = e.default_channel,
                            i = e.description,
                            s = e.invite_mode,
                            a = e.type,
                            c = e.name;
                        return {
                            serverId: e.server_id,
                            channelId: t,
                            name: c,
                            description: i,
                            created: r,
                            defaultChannel: n,
                            ext: o,
                            isPublic: !a,
                            inviteNeedConfirm: !!s,
                            rank: e.rank
                        }
                    } catch (t) {
                        throw Z.error("unexpected channel data: " + e), ki
                    }
                },
                xi = function (e) {
                    var t = e.url,
                        r = void 0 === t ? "" : t,
                        o = e.type,
                        n = void 0 === o ? "POST" : o,
                        i = e.dataType,
                        s = void 0 === i ? "json" : i,
                        a = e.data,
                        c = void 0 === a ? "" : a,
                        u = e.token,
                        l = void 0 === u ? "" : u;
                    return {
                        url: r,
                        type: n,
                        dataType: s,
                        data: c ? JSON.stringify(c) : null,
                        headers: {
                            Authorization: "Bearer " + l,
                            "Content-Type": "application/json"
                        }
                    }
                };

            function ji(e) {
                if (!vt.call(this)) return Promise.reject(Ui);
                var t = e.serverId,
                    r = e.isPublic,
                    o = void 0 === r || r,
                    n = e.name,
                    i = e.description,
                    s = e.ext,
                    a = e.rank,
                    c = void 0 === a ? oi.RANK_2000 : a;
                ae.checkDataType([{
                    serverId: t,
                    name: n,
                    required: !0,
                    type: "string"
                }, {
                    isPublic: o,
                    required: !1,
                    type: "boolean"
                }, {
                    description: i,
                    ext: s,
                    required: !1,
                    type: "string"
                }]);
                var u = this.context,
                    l = u.orgName,
                    p = u.appName,
                    d = u.accessToken,
                    h = u.jid,
                    f = {
                        server_id: t,
                        owner: this.user,
                        rank: c,
                        name: n,
                        type: o ? 0 : 1,
                        description: i,
                        invite_mode: 1,
                        custom: s
                    },
                    m = this.apiUrl + "/" + l + "/" + p + "/circle/channel?resource=" + h.clientResource,
                    y = xi({
                        url: m,
                        data: f,
                        token: d,
                        type: "POST"
                    });
                return Z.debug("Call createChannel", "params", e), ae.ajax(y).then((function (e) {
                    return {
                        data: {
                            serverId: t,
                            channelId: e.channel_id,
                            name: n,
                            description: i || "",
                            defaultChannel: 0,
                            ext: s || "",
                            isPublic: o,
                            inviteNeedConfirm: !0,
                            rank: c
                        },
                        type: e.type
                    }
                }))
            }

            function Li(e) {
                return Mi(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s, a, c, u;
                    return wi(this, (function (l) {
                        switch (l.label) {
                            case 0:
                                return t = e.serverId, r = e.channelId, ae.checkDataType([{
                                    serverId: t,
                                    channelId: r,
                                    required: !0,
                                    type: "string"
                                }]), vt.call(this) ? (o = this.context, n = o.orgName, i = o.appName, s = o.accessToken, a = o.jid, c = this.apiUrl + "/" + n + "/" + i + "/circle/channel/" + r + "?serverId=" + t + "&resource=" + a.clientResource, u = xi({
                                    url: c,
                                    token: s,
                                    type: "DELETE"
                                }), Z.debug("Call destroyChannel", e), [4, ae.ajax(u)]) : [2, Promise.reject(Ui)];
                            case 1:
                                return l.sent(), [2]
                        }
                    }))
                }))
            }

            function Di(e) {
                return Mi(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s, a, c, u, l, p, d, h;
                    return wi(this, (function (f) {
                        return t = e.serverId, r = e.channelId, o = e.name, n = e.description, i = e.ext, s = e.rank, ae.checkDataType([{
                            serverId: t,
                            channelId: r,
                            required: !0,
                            type: "string"
                        }, {
                            name: o,
                            description: n,
                            ext: i,
                            type: "string"
                        }]), vt.call(this) ? (a = this.context, c = a.orgName, u = a.appName, l = a.accessToken, p = a.jid, d = this.apiUrl + "/" + c + "/" + u + "/circle/channel/" + r + "?serverId=" + t + "&resource=" + p.clientResource, h = xi({
                            url: d,
                            token: l,
                            data: {
                                name: o,
                                description: n,
                                custom: i,
                                rank: s
                            },
                            type: "PUT"
                        }), Z.debug("Call updateChannel", e), [2, ae.ajax(h).then((function (e) {
                            return {
                                data: Pi(e.channel),
                                type: e.type
                            }
                        }))]) : [2, Promise.reject(Ui)]
                    }))
                }))
            }

            function Gi(e) {
                var t = e.serverId,
                    r = e.channelId;
                if (ae.checkDataType([{
                        serverId: t,
                        channelId: r,
                        required: !0,
                        type: "string"
                    }]), !vt.call(this)) return Promise.reject(Ui);
                var o = this.context,
                    n = o.orgName,
                    i = o.appName,
                    s = o.accessToken,
                    a = this.apiUrl + "/" + n + "/" + i + "/circle/channel/" + r + "?serverId=" + t,
                    c = xi({
                        url: a,
                        token: s,
                        type: "GET"
                    });
                return Z.debug("Call getChannelDetail", e), ae.ajax(c).then((function (e) {
                    return {
                        data: Pi(e.channel),
                        type: e.type
                    }
                }))
            }

            function Bi(e) {
                return Mi(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s, a, c, u;
                    return wi(this, (function (l) {
                        return t = e.channelId, r = e.serverId, ae.checkDataType([{
                            serverId: r,
                            channelId: t,
                            required: !0,
                            type: "string"
                        }]), vt.call(this) ? (o = this.context, n = o.orgName, i = o.appName, s = o.accessToken, a = o.jid, c = this.apiUrl + "/" + n + "/" + i + "/circle/channel/" + t + "/join?userId=" + this.user + "&serverId=" + r + "&resource=" + a.clientResource, u = xi({
                            url: c,
                            token: s,
                            type: "POST"
                        }), Z.debug("Call joinChannel", e), [2, ae.ajax(u).then((function (e) {
                            return {
                                data: Pi(e.channel),
                                type: e.type
                            }
                        }))]) : [2, Promise.reject(Ui)]
                    }))
                }))
            }

            function Hi(e) {
                return Mi(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s, a, c, u;
                    return wi(this, (function (l) {
                        switch (l.label) {
                            case 0:
                                return t = e.channelId, r = e.serverId, ae.checkDataType([{
                                    serverId: r,
                                    channelId: t,
                                    required: !0,
                                    type: "string"
                                }]), vt.call(this) ? (o = this.context, n = o.orgName, i = o.appName, s = o.accessToken, a = o.jid, c = this.apiUrl + "/" + n + "/" + i + "/circle/channel/" + t + "/user/quit?userId=" + this.user + "&serverId=" + r + "&resource=" + a.clientResource, u = xi({
                                    url: c,
                                    token: s,
                                    type: "POST"
                                }), Z.debug("Call leaveChannel", e), [4, ae.ajax(u)]) : [2, Promise.reject(Ui)];
                            case 1:
                                return l.sent(), [2]
                        }
                    }))
                }))
            }

            function Fi(e) {
                return Mi(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s, a, c, u, l;
                    return wi(this, (function (p) {
                        switch (p.label) {
                            case 0:
                                return t = e.channelId, r = e.serverId, o = e.userId, ae.checkDataType([{
                                    serverId: r,
                                    channelId: t,
                                    userId: o,
                                    required: !0,
                                    type: "string"
                                }]), vt.call(this) ? (n = this.context, i = n.orgName, s = n.appName, a = n.accessToken, c = n.jid, u = this.apiUrl + "/" + i + "/" + s + "/circle/channel/" + t + "/user/remove?userId=" + o + "&serverId=" + r + "&resource=" + c.clientResource, l = xi({
                                    url: u,
                                    token: a,
                                    type: "POST"
                                }), Z.debug("Call removeChannelMember", e), [4, ae.ajax(l)]) : [2, Promise.reject(Ui)];
                            case 1:
                                return p.sent(), [2]
                        }
                    }))
                }))
            }

            function Wi(e) {
                var t = e.serverId,
                    r = e.pageSize,
                    o = void 0 === r ? 20 : r,
                    n = e.cursor,
                    i = void 0 === n ? "" : n;
                if (ae.checkDataType([{
                        serverId: t,
                        required: !0,
                        type: "string"
                    }, {
                        cursor: i,
                        type: "string"
                    }, {
                        pageSize: o,
                        type: "number"
                    }]), !vt.call(this)) return Promise.reject(Ui);
                var s = this.context,
                    a = s.orgName,
                    c = s.appName,
                    u = s.accessToken,
                    l = this.apiUrl + "/" + a + "/" + c + "/circle/channel/private?userId=" + this.user + "&serverId=" + t + "&limit=" + o + "&cursor=" + i,
                    p = xi({
                        url: l,
                        token: u,
                        type: "GET"
                    });
                return Z.debug("Call getVisiblePrivateChannels", e), ae.ajax(p).then((function (e) {
                    var t = {
                        list: e.channels.map((function (e) {
                            return Pi(e)
                        }))
                    };
                    return e.cursor && (t.cursor = e.cursor), {
                        data: t,
                        type: e.type
                    }
                }))
            }

            function qi(e) {
                var t = e.serverId,
                    r = e.pageSize,
                    o = void 0 === r ? 20 : r,
                    n = e.cursor,
                    i = void 0 === n ? "" : n;
                if (ae.checkDataType([{
                        serverId: t,
                        required: !0,
                        type: "string"
                    }, {
                        cursor: i,
                        type: "string"
                    }, {
                        pageSize: o,
                        required: !1,
                        type: "number"
                    }]), !vt.call(this)) return Promise.reject(Ui);
                var s = this.context,
                    a = s.orgName,
                    c = s.appName,
                    u = s.accessToken,
                    l = this.apiUrl + "/" + a + "/" + c + "/circle/channel/public?serverId=" + t + "&limit=" + o + "&cursor=" + i,
                    p = xi({
                        url: l,
                        token: u,
                        type: "GET"
                    });
                return Z.debug("Call getPublicChannels", e), ae.ajax(p).then((function (e) {
                    var t = {
                        list: e.channels.map((function (e) {
                            return Pi(e)
                        }))
                    };
                    return e.cursor && (t.cursor = e.cursor), {
                        data: t,
                        type: e.type
                    }
                }))
            }

            function zi(e) {
                var t = e.serverId,
                    r = e.channelId,
                    o = e.pageSize,
                    n = void 0 === o ? 20 : o,
                    i = e.cursor,
                    s = void 0 === i ? "" : i;
                if (ae.checkDataType([{
                        serverId: t,
                        channelId: r,
                        required: !0,
                        type: "string"
                    }, {
                        cursor: s,
                        type: "string"
                    }, {
                        pageSize: n,
                        required: !1,
                        type: "number"
                    }]), !vt.call(this)) return Promise.reject(Ui);
                var a = this.context,
                    c = a.orgName,
                    u = a.appName,
                    l = a.accessToken,
                    p = this.apiUrl + "/" + c + "/" + u + "/circle/channel/" + r + "/users?serverId=" + t + "&limit=" + n + "&cursor=" + s,
                    d = xi({
                        url: p,
                        token: l,
                        type: "GET"
                    });
                return Z.debug("Call getChannelMembers", e), ae.ajax(d).then((function (e) {
                    var t = {
                        list: e.users.map((function (e) {
                            return {
                                role: 0 === e.role ? "owner" : 1 === e.role ? "moderator" : "user",
                                userId: e.user_id
                            }
                        }))
                    };
                    return e.cursor && (t.cursor = e.cursor), {
                        data: t,
                        type: e.type
                    }
                }))
            }

            function Ki(e) {
                return Mi(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s, a, c, u, l, p, d;
                    return wi(this, (function (h) {
                        switch (h.label) {
                            case 0:
                                return t = e.serverId, r = e.channelId, o = e.userId, n = e.inviteMessage, i = void 0 === n ? "" : n, ae.checkDataType([{
                                    serverId: t,
                                    channelId: r,
                                    userId: o,
                                    required: !0,
                                    type: "string"
                                }]), vt.call(this) ? (s = this.context, a = s.orgName, c = s.appName, u = s.accessToken, l = s.jid, p = this.apiUrl + "/" + a + "/" + c + "/circle/channel/" + r + "/invite/join?serverId=" + t + "&userId=" + o + "&welcome=" + i + "&resource=" + l.clientResource, d = xi({
                                    url: p,
                                    token: u,
                                    type: "POST"
                                }), Z.debug("Call inviteUserToChannel", e), [4, ae.ajax(d)]) : [2, Promise.reject(Ui)];
                            case 1:
                                return h.sent(), [2]
                        }
                    }))
                }))
            }

            function Ji(e) {
                return Mi(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s, a, c, u;
                    return wi(this, (function (l) {
                        return t = e.serverId, r = e.channelId, ae.checkDataType([{
                            serverId: t,
                            channelId: r,
                            required: !0,
                            type: "string"
                        }]), vt.call(this) ? (o = this.context, n = o.orgName, i = o.appName, s = o.accessToken, a = o.jid, c = this.apiUrl + "/" + n + "/" + i + "/circle/channel/" + r + "/accept/invite?inviter=" + e.inviter + "&serverId=" + t + "&resource=" + a.clientResource, u = xi({
                            url: c,
                            token: s,
                            type: "POST"
                        }), Z.debug("Call acceptChannelInvite", e), [2, ae.ajax(u).then((function (e) {
                            return {
                                data: Pi(e.channel),
                                type: e.type
                            }
                        }))]) : [2, Promise.reject(Ui)]
                    }))
                }))
            }

            function Vi(e) {
                return Mi(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s, a, c, u;
                    return wi(this, (function (l) {
                        switch (l.label) {
                            case 0:
                                return t = e.serverId, r = e.channelId, ae.checkDataType([{
                                    serverId: t,
                                    channelId: r,
                                    required: !0,
                                    type: "string"
                                }]), vt.call(this) ? (o = this.context, n = o.orgName, i = o.appName, s = o.accessToken, a = o.jid, c = this.apiUrl + "/" + n + "/" + i + "/circle/channel/" + r + "/decline/invite?inviter=" + e.inviter + "&serverId=" + t + "&resource=" + a.clientResource, u = xi({
                                    url: c,
                                    token: s,
                                    type: "POST"
                                }), Z.debug("Call rejectChannelInvite", e), [4, ae.ajax(u)]) : [2, Promise.reject(Ui)];
                            case 1:
                                return l.sent(), [2]
                        }
                    }))
                }))
            }

            function Xi(e) {
                return Mi(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s, a, c, u, l, p;
                    return wi(this, (function (d) {
                        switch (d.label) {
                            case 0:
                                return t = e.serverId, r = e.channelId, o = e.userId, n = e.duration, ae.checkDataType([{
                                    serverId: t,
                                    channelId: r,
                                    userId: o,
                                    required: !0,
                                    type: "string"
                                }, {
                                    duration: n,
                                    required: !0,
                                    type: "number"
                                }]), vt.call(this) ? (i = this.context, s = i.orgName, a = i.appName, c = i.accessToken, u = i.jid, l = this.apiUrl + "/" + s + "/" + a + "/circle/channel/" + r + "/user/mute?resource=" + u.clientResource, p = xi({
                                    url: l,
                                    data: {
                                        server_id: t,
                                        user_id: o,
                                        duration: n
                                    },
                                    token: c,
                                    type: "POST"
                                }), Z.debug("Call muteChannelMember", e), [4, ae.ajax(p)]) : [2, Promise.reject(Ui)];
                            case 1:
                                return d.sent(), [2]
                        }
                    }))
                }))
            }

            function Yi(e) {
                return Mi(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s, a, c, u, l;
                    return wi(this, (function (p) {
                        switch (p.label) {
                            case 0:
                                return t = e.serverId, r = e.channelId, o = e.userId, ae.checkDataType([{
                                    serverId: t,
                                    channelId: r,
                                    userId: o,
                                    required: !0,
                                    type: "string"
                                }]), vt.call(this) ? (n = this.context, i = n.orgName, s = n.appName, a = n.accessToken, c = n.jid, u = this.apiUrl + "/" + i + "/" + s + "/circle/channel/" + r + "/user/mute?serverId=" + t + "&userId=" + o + "&resource=" + c.clientResource, l = xi({
                                    url: u,
                                    token: a,
                                    type: "DELETE"
                                }), Z.debug("Call unmuteChannelMember", e), [4, ae.ajax(l)]) : [2, Promise.reject(Ui)];
                            case 1:
                                return p.sent(), [2]
                        }
                    }))
                }))
            }

            function $i(e) {
                var t = e.channelId,
                    r = e.serverId;
                if (ae.checkDataType([{
                        channelId: t,
                        required: !0,
                        type: "string"
                    }]), !vt.call(this)) return Promise.reject(Ui);
                var o = this.context,
                    n = o.orgName,
                    i = o.appName,
                    s = o.accessToken,
                    a = this.apiUrl + "/" + n + "/" + i + "/circle/channel/" + t + "/user/mute/list?serverId=" + r,
                    c = xi({
                        url: a,
                        token: s,
                        type: "GET"
                    });
                return Z.debug("Call getChannelMutelist", e), ae.ajax(c).then((function (e) {
                    return {
                        data: {
                            list: e.mute_users.map((function (e) {
                                return {
                                    expire: e.expire,
                                    userId: e.user
                                }
                            }))
                        },
                        type: e.type
                    }
                }))
            }

            function Qi(e) {
                return Mi(this, void 0, void 0, (function () {
                    var t, r, o, n, i, s, a, c;
                    return wi(this, (function (u) {
                        return t = e.channelId, r = e.serverId, ae.checkDataType([{
                            serverId: r,
                            channelId: t,
                            required: !0,
                            type: "string"
                        }]), vt.call(this) ? (o = this.context, n = o.orgName, i = o.appName, s = o.accessToken, a = this.apiUrl + "/" + n + "/" + i + "/circle/channel/" + t + "/user/" + this.user + "?serverId=" + r, c = xi({
                            url: a,
                            token: s,
                            type: "GET"
                        }), Z.debug("Call isInChannel", e), [2, ae.ajax(c).then((function (e) {
                            return {
                                data: {
                                    result: e.result
                                },
                                type: e.type
                            }
                        }))]) : [2, Promise.reject(Ui)]
                    }))
                }))
            }
            var Zi = function () {
                    return Zi = Object.assign || function (e) {
                        for (var t, r = 1, o = arguments.length; r < o; r++)
                            for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e
                    }, Zi.apply(this, arguments)
                },
                es = ae.getEnvInfo(),
                ts = "web" === es.platform,
                rs = function () {},
                os = function () {
                    function u(l) {
                        var p;
                        this.isDebug = l.isDebug || !1, this.isReport = !1, this.isHttpDNS = void 0 === l.isHttpDNS ? ts : l.isHttpDNS, this.heartBeatWait = l.heartBeatWait || 3e4, this.autoReconnectNumMax = l.autoReconnectNumMax || 5, this.refreshDNSIntervals = this.autoReconnectNumMax < 5 ? this.autoReconnectNumMax : 5, this.delivery = l.delivery || !1, this.dnsArr = ["https://rs.easemob.com", "https://rs.chat.agora.io", "http://59.110.89.59", "http://39.97.193.190", "http://39.97.193.187"], this.dnsIndex = 0, this.dnsTotal = this.dnsArr.length, this.restHosts = [], this.restTotal = 0, this.restIndex = 0, this.hostIndex = 0, this.socketHost = [], this.hostTotal = 0, this.times = 1, this.autoReconnectNumTotal = 0, this.domain = "easemob.com", this.appKey = l.appKey, this.appName = "", this.orgName = "", this.token = "", this.grantType = "", this.apiUrl = l.apiUrl || "", this.url = l.url || "", this.https = l.https || "undefined" != typeof window && "https:" === (null === (p = window.location) || void 0 === p ? void 0 : p.protocol), this.version = "4.1.0", this.deviceId = l.deviceId || "webim", this.osType = 16, this.useOwnUploadFun = l.useOwnUploadFun || !1, this.compressType = [0], this.encryptType = [0], this.clientResource = "", this.expiresIn = 0, this.expirationTime = 0, this.logOut = !0, this.context = {
                            jid: {
                                appKey: "",
                                clientResource: "",
                                domain: "easemob.com",
                                name: ""
                            },
                            userId: "",
                            appKey: "",
                            status: 0,
                            restTokenData: "",
                            appName: "",
                            orgName: "",
                            root: {},
                            accessToken: ""
                        }, this._msgHash = {}, this._msgPromiseHash = {}, this._queues = [], this._load_msg_cache = [], this.unSendMsgArr = [], this.mr_cache = {};
                        var d = this.appKey.split("#");
                        if (2 !== d.length && d[0] && d[1]) throw Error("Illegal appkey: " + this.appKey);
                        this.orgName = d[0], this.appName = d[1], this.listen = mt.bind(this), this.mSync = this.usePlugin(dt), this.eventHandler = this.usePlugin(ht), Object.assign(u.prototype, e), Object.assign(u.prototype, t), Object.assign(u.prototype, r), Object.assign(u.prototype, o), Object.assign(u.prototype, n), Object.assign(u.prototype, i), Object.assign(u.prototype, s), Object.assign(u.prototype, a), Object.assign(u.prototype, c), new H({
                            appkey: this.appKey,
                            org: this.orgName,
                            sdkVersion: this.version,
                            deviceId: this.deviceId,
                            isReport: this.isReport
                        });
                        var h = 0,
                            f = this;
                        Object.defineProperty(ae, "ajaxUnconventionalErrorTimes", {
                            set: function (e) {
                                0 !== e && (Z.debug("rest api request fail times: " + e), (h = e) % 5 == 0 && this.isHttpDNS && (Z.debug("refresh dns config when rest request fail."), ps.call(f, "refresh", {}, {})))
                            },
                            get: function () {
                                return h
                            }
                        })
                    }
                    return u.prototype.usePlugin = function (e, t) {
                        if (!t) return new e(this);
                        this[t] = new e(this)
                    }, u.prototype.listen = function (e) {}, u.prototype.addEventHandler = function (e, t) {}, u.prototype.removeEventHandler = function (e) {}, u.prototype.registerUser = function (e) {
                        var t = this;
                        return new Promise((function (r, o) {
                            var n, i = null === (n = H.getInstance()) || void 0 === n ? void 0 : n.geOperateFun({
                                uid: e.username,
                                operationName: E.REGISTER
                            });
                            if (t.isHttpDNS) {
                                t.dnsIndex = 0;
                                var s = Zi(Zi({}, e), {
                                    user: e.username,
                                    pwd: e.password,
                                    promise: {
                                        resolve: r,
                                        reject: o
                                    }
                                });
                                ps.call(t, "signup", s, {
                                    rpt: i
                                })
                            } else s = Zi(Zi({}, e), {
                                promise: {
                                    resolve: r,
                                    reject: o
                                }
                            }), ns.call(t, s, {
                                rpt: i
                            })
                        }))
                    }, u.prototype.open = function (e) {
                        var t = this;
                        return Z.debug("open"), new Promise((function (r, o) {
                            if (us.call(t, e)) {
                                e.accessToken && (t.token = e.accessToken);
                                var n = Zi(Zi({}, e), {
                                        promise: {
                                            resolve: r,
                                            reject: o
                                        }
                                    }),
                                    i = H.getInstance().geOperateFun({
                                        uid: e.user,
                                        operationName: E.LOGIN
                                    });
                                t.isHttpDNS ? ps.call(t, "login", n, {
                                    rpt: i
                                }) : is.call(t, n, {
                                    rpt: i
                                })
                            }
                        }))
                    }, u.prototype.isOpened = function () {
                        return this.sock && 1 === this.sock.readyState || !1
                    }, u.prototype.close = function () {
                        this.logOut = !0, this.context.status = y.STATUS_CLOSING, this.sock && this.sock.close(), this.stopHeartBeat(), this.context.status = y.STATUS_CLOSED, this._load_msg_cache = [], this.unSendMsgArr = [], this._queues = [], this._msgHash = {}, this.mr_cache = {}
                    }, u.prototype.stopHeartBeat = function () {
                        clearInterval(this.heartBeatID)
                    }, u.prototype._checkOpenParams = function (e) {
                        return us.call(this, e)
                    }, u.prototype.clear = function () {
                        this.restTotal = 0, this.restIndex = 0, this.hostIndex = 0, this.hostTotal = 0
                    }, u.prototype.heartBeat = function () {}, u.prototype.renewToken = function (e) {
                        var t = this;
                        return this.isOpened() ? this.getChatToken(e).then((function (e) {
                            var r = Date.now();
                            return t.expirationTime = e.expire_timestamp, t.expiresIn = e.expire_timestamp - r, t.token = e.access_token, t.context.accessToken = e.access_token, t.clearTokenTimeout(), t.tokenExpireTimeCountDown(t.expiresIn), {
                                status: !0,
                                token: e.access_token,
                                expire: e.expire_timestamp
                            }
                        })) : Promise.reject({
                            status: !1
                        })
                    }, u.prototype.clearTokenTimeout = function () {
                        Z.debug("clearTokenTimeout"), this.tokenWillExpireTimer && clearTimeout(this.tokenWillExpireTimer), this.tokenExpiredTimer && clearTimeout(this.tokenExpiredTimer)
                    }, u.prototype.tokenExpireTimeCountDown = function (e) {
                        var t = this;
                        this.tokenWillExpireTimer = setTimeout((function () {
                            var e;
                            t.onTokenWillExpire && t.onTokenWillExpire(), null === (e = t.eventHandler) || void 0 === e || e.dispatch("onTokenWillExpire"), Z.info("onTokenWillExpire")
                        }), e / 2), this.tokenExpiredTimer = setTimeout((function () {
                            var e;
                            Z.info("onTokenExpired"), t.onTokenExpired && t.onTokenExpired(), null === (e = t.eventHandler) || void 0 === e || e.dispatch("onTokenExpired"), t.close()
                        }), e)
                    }, u.prototype.compareTokenExpireTime = function (e, t) {
                        var r, o = Number(t) - Number(e);
                        Z.debug("compareTokenExpireTime", o), o <= this.expiresIn / 2 && o > 0 ? (this.onTokenWillExpire && this.onTokenWillExpire(), null === (r = this.eventHandler) || void 0 === r || r.dispatch("onTokenWillExpire"), Z.info("onTokenWillExpire")) : o <= 0 && (this.closeByTokenExpired(), Z.info("closeByTokenExpired"))
                    }, u.prototype.closeByTokenExpired = function () {
                        var e;
                        Z.info("closed By TokenExpired"), this.onTokenExpired && this.onTokenExpired(), null === (e = this.eventHandler) || void 0 === e || e.dispatch("onTokenExpired"), this.close()
                    }, u.prototype.reconnect = function () {
                        var e = this;
                        Z.info("reconnect: time", this.times), Z.info("reconnect sock.readyState: ", this.sock.readyState), 0 !== this.sock.readyState && 1 !== this.sock.readyState && (this.isHttpDNS && (this.hostIndex, this.socketHost.length), this.hostIndex++, this.hostIndex >= this.socketHost.length - 1 && (this.hostIndex = this.socketHost.length - 1), setTimeout((function () {
                            Z.info("login sock.readyState: ", e.sock.readyState), 1 !== e.sock.readyState && (e.sock.close(), cs.call(e, {
                                access_token: e.context.accessToken
                            }), e.autoReconnectInterval += e.times * e.times, e.times++)
                        }), 500 * this.times), this.autoReconnectNumTotal++)
                    }, u.prototype.send = function (e) {
                        return Promise.resolve(null)
                    }, u.max_cache_length = 100, u._getSock = function () {}, u
                }();

            function ns(e, t) {
                var r = this,
                    o = t.rpt,
                    n = t.isRetry,
                    i = e.promise,
                    s = this.apiUrl + "/" + this.orgName + "/" + this.appName + "/users",
                    a = {
                        requestName: _.RESISTER,
                        requestUrl: s
                    },
                    c = e.error || rs;
                if (!this.orgName && !this.appName) {
                    var u = m.create({
                        type: y.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR,
                        message: "signup error"
                    });
                    c(u)
                }
                var l = {
                    headers: {
                        "Content-type": "application/json"
                    },
                    url: s,
                    dataType: "json",
                    data: JSON.stringify({
                        username: e.username,
                        password: e.password,
                        nickname: e.nickname || ""
                    }),
                    success: function (t) {
                        e.success && e.success(t);
                        var r = Zi(Zi({}, t), {
                            type: y.REQUEST_SUCCESS
                        });
                        i.resolve && i.resolve(r);
                        var s = t.extraInfo,
                            c = s.httpCode,
                            u = s.elapse;
                        o({
                            isEndApi: !0,
                            isRetry: n,
                            data: Zi(Zi({}, {
                                requestElapse: u,
                                isSuccess: 1,
                                code: c
                            }), a)
                        })
                    },
                    error: function (t) {
                        var s = t.extraInfo,
                            u = s.elapse,
                            l = s.httpCode,
                            p = s.errDesc;
                        return o({
                            isRetry: n,
                            data: Zi(Zi({}, {
                                requestElapse: u,
                                isSuccess: 0,
                                code: l,
                                codeDesc: p
                            }), a)
                        }), r.isHttpDNS && r.restIndex + 1 < r.restTotal ? (r.restIndex++, ds.call(r), ns.call(r, e, {
                            rpt: o,
                            isRetry: n
                        }), Promise.reject(t)) : (o({
                            data: {
                                isLastApi: 1,
                                isSuccess: 0
                            }
                        }), r.clear(), i.reject && i.reject(t), c(t))
                    }
                };
                return ae.ajax(l).catch((function (e) {
                    i.reject && i.reject(e)
                }))
            }

            function is(e, t) {
                var r = this;
                if (us.call(this, e) && !this.isOpened()) {
                    var o = t.rpt,
                        n = t.isRetry;
                    ls.call(this, e), this.user = e.user;
                    var i = e.promise,
                        s = this.context.appName,
                        a = this.context.orgName,
                        c = this.apiUrl + "/" + a + "/" + s + "/token";
                    if (e.agoraToken) this.grantType = "agoraToken", this.getChatToken(e.agoraToken).then((function (t) {
                        Z.info("getChatToken result:", t), r.expirationTime = t.expire_timestamp, r.token = t.access_token, r.context.accessToken = t.access_token, r.context.restTokenData = t.access_token;
                        var n = t.extraInfo,
                            s = n.httpCode,
                            a = n.elapse;
                        i.resolve({
                            accessToken: t.access_token,
                            expireTimestamp: t.expire_timestamp
                        });
                        var u = {
                            requestName: _.LOGIN_BY_AGORA_TOKEN,
                            requestUrl: c,
                            requestElapse: a,
                            isSuccess: 1,
                            code: s
                        };
                        o({
                            data: u
                        }), cs.call(r, Zi(Zi({}, e), {
                            access_token: t.access_token
                        }), o)
                    })).catch((function (e) {
                        var t, n = m.create({
                            type: y.WEBIM_CONNCTION_GETROSTER_ERROR,
                            message: "get chat token fail",
                            data: e
                        });
                        i.reject(n), r.onError && r.onError(n), null === (t = r.eventHandler) || void 0 === t || t.dispatch("onError", n);
                        var s = e.extraInfo,
                            a = s.elapse,
                            u = s.httpCode,
                            l = s.errDesc,
                            p = {
                                requestName: _.LOGIN_BY_AGORA_TOKEN,
                                requestUrl: c,
                                requestElapse: a,
                                isSuccess: 0,
                                code: u,
                                codeDesc: l
                            };
                        o({
                            data: p
                        }), o({
                            data: {
                                isLastApi: 1,
                                isSuccess: 0
                            }
                        })
                    }));
                    else if (e.accessToken) this.grantType = "accessToken", this.token = e.accessToken, this.context.accessToken = e.accessToken, this.context.restTokenData = e.accessToken, i.resolve({
                        accessToken: e.accessToken
                    }), cs.call(this, e, o);
                    else {
                        this.grantType = "password";
                        var u = {
                                grant_type: "password",
                                username: e.user,
                                password: e.pwd,
                                timestamp: +new Date
                            },
                            l = JSON.stringify(u),
                            p = {
                                headers: {
                                    "Content-type": "application/json"
                                },
                                url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/token",
                                dataType: "json",
                                data: l,
                                success: function (t) {
                                    "function" == typeof e.success && e.success(t), r.token = t.access_token, r.context.restTokenData = t.access_token, r.context.accessToken = t.access_token, i.resolve({
                                        accessToken: t.access_token,
                                        duration: t.expires_in
                                    });
                                    var s = t.extraInfo,
                                        a = s.httpCode,
                                        u = s.elapse,
                                        l = {
                                            requestName: _.LOGIN_BY_PWD,
                                            requestElapse: u,
                                            requestUrl: c,
                                            isSuccess: 1,
                                            code: a
                                        };
                                    o({
                                        isRetry: n,
                                        data: l
                                    }), cs.call(r, t, o)
                                } || rs,
                                error: function (t) {
                                    var s, a = t.extraInfo,
                                        u = a.elapse,
                                        l = a.httpCode,
                                        p = a.errDesc,
                                        d = {
                                            requestName: _.LOGIN_BY_PWD,
                                            requestElapse: u,
                                            requestUrl: c,
                                            isSuccess: 0,
                                            code: l,
                                            codeDesc: p
                                        };
                                    if (o({
                                            isRetry: n,
                                            data: d
                                        }), r.isHttpDNS && r.restIndex + 1 < r.restTotal) return r.restIndex++, ds.call(r), void is.call(r, e, {
                                        rpt: o,
                                        isRetry: !0
                                    });
                                    o({
                                        data: {
                                            isLastApi: 1,
                                            isSuccess: 0
                                        }
                                    }), r.clear(), t.error && t.error_description ? (s = m.create({
                                        type: y.WEBIM_CONNCTION_OPEN_USERGRID_ERROR,
                                        message: t.error_description,
                                        data: t
                                    }), r.onError && r.onError(s)) : (s = m.create({
                                        type: y.WEBIM_CONNCTION_OPEN_ERROR,
                                        message: t.error_description,
                                        data: t
                                    }), r.onError && r.onError(s)), "function" == typeof e.error && e.error(s), i.reject(s)
                                } || rs,
                                version: "4.0.8"
                            };
                        ae.ajax(p).catch((function (e) {
                            console.warn(e)
                        }))
                    }
                    ae.listenNetwork(ss.bind(this), as.bind(this))
                }
            }

            function ss() {
                var e;
                Z.debug("online"), this.onOnline && this.onOnline(), null === (e = this.eventHandler) || void 0 === e || e.dispatch("onOnline"), this.sock && 1 !== this.sock.readyState && (Z.debug("sock.readyState:", this.sock.readyState), this.reconnect())
            }

            function as() {
                var e;
                Z.debug("offline"), this.onOffline && this.onOffline(), null === (e = this.eventHandler) || void 0 === e || e.dispatch("onOffline")
            }

            function cs(e, t) {
                var r = this,
                    o = this._getSock();
                this.sock = o;
                var n = function () {
                        var e;
                        Z.debug("websockt onOpen"), r.logOut = !1, t && t({
                            data: {
                                isLastApi: 1,
                                isSuccess: 1,
                                accessChannel: null === (e = r.socketHost[r.hostIndex]) || void 0 === e ? void 0 : e.channel
                            }
                        }), "zfb" !== es.platform && "dd" !== es.platform || (r.sock.readyState = 1);
                        var n = ae.flow([r.mSync.generateProvision, r.mSync.base64transform])();
                        try {
                            o.send(n)
                        } catch (e) {
                            var i = m.create({
                                type: y.SDK_RUNTIME_ERROR,
                                message: "send message error",
                                data: e
                            });
                            r.onError && r.onError(i)
                        }
                    },
                    i = function () {
                        var e, t;
                        if (Z.debug("websocket onClose"), "zfb" !== es.platform && "dd" !== es.platform || (r.sock.readyState = 3), !r.logOut && r.autoReconnectNumTotal < r.autoReconnectNumMax) {
                            r.reconnect();
                            var o = {
                                type: y.WEBIM_CONNCTION_DISCONNECTED,
                                message: "websocket has been disconnected"
                            };
                            r.onError && r.onError(o), r.autoReconnectNumTotal % r.refreshDNSIntervals == 0 && "web" === es.platform && r.isHttpDNS && (Z.debug("refresh dns config when websocket close"), ps.call(r, "refresh", {}, {}))
                        } else r.logOut ? (r.clear(), r.onClosed && r.onClosed(), null === (e = r.eventHandler) || void 0 === e || e.dispatch("onDisconnected"), r.mSync.stopHeartBeat(), r.autoReconnectInterval = 0, r.times = 1, r.autoReconnectNumTotal = 0, r.hostIndex = 0) : (o = {
                            type: y.WEBIM_CONNCTION_DISCONNECTED,
                            message: "websocket has been disconnected"
                        }, r.onError && r.onError(o), r.onClosed && r.onClosed(), null === (t = r.eventHandler) || void 0 === t || t.dispatch("onDisconnected"), r.mSync.stopHeartBeat(), Z.debug("reconnect fail"), r.autoReconnectInterval = 0, r.times = 1, r.autoReconnectNumTotal = 0, r.hostIndex = 0)
                    },
                    s = function (e) {
                        var t = r.mSync,
                            o = t.decodeMSync,
                            n = t.distributeMSync;
                        ae.flow([o, n])(e)
                    };
                "web" === es.platform ? (o.onopen = n, o.onclose = i, o.onmessage = s) : (o.onOpen(n), o.onMessage(s), o.onClose(i), o.onError((function (e) {
                    var o;
                    Z.debug("mini program sock on error", e), r.onError && r.onError({
                        type: y.WEBIM_CONNECTION_ERROR,
                        message: "on socket error",
                        data: e
                    }), !r.logOut && r.autoReconnectNumTotal < r.autoReconnectNumMax && (Z.debug("sock.onError reconnect", r.autoReconnectNumTotal, r.autoReconnectNumMax), r.reconnect(), r.autoReconnectNumTotal % r.refreshDNSIntervals == 0 && "web" === es.platform && r.isHttpDNS && (Z.debug("refresh dns config when websocket error"), ps.call(r, "refresh", {}, {}))), t && t({
                        data: {
                            isLastApi: 1,
                            isSuccess: 0,
                            accessChannel: null === (o = r.socketHost[r.hostIndex]) || void 0 === o ? void 0 : o.channel
                        }
                    })
                })))
            }

            function us(e) {
                if ("" === e.user) {
                    var t = m.create({
                        type: y.WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR,
                        message: "the user cannot be empty"
                    });
                    return this.onError && this.onError(t), !1
                }
                var r = this.appKey.split("#");
                return !(2 !== r.length || !r[0] || !r[1]) || (t = m.create({
                    type: y.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR,
                    message: "the appKey is illegal"
                }), this.onError && this.onError(t), !1)
            }

            function ls(e) {
                this.context.jid = {
                    appKey: this.appKey,
                    name: e.user,
                    domain: this.domain,
                    clientResource: this.clientResource
                };
                var t = this.appKey.split("#"),
                    r = t[0],
                    o = t[1];
                this.context.root = this.root, this.context.userId = e.user, this.context.appKey = this.appKey, this.context.appName = o, this.context.orgName = r
            }

            function ps(e, t, r) {
                var o = this,
                    n = r.rpt,
                    i = r.isRetry,
                    s = this.dnsArr[this.dnsIndex] + "/easemob/server.json",
                    a = {
                        url: s,
                        dataType: "json",
                        type: "GET",
                        data: {
                            app_key: encodeURIComponent(this.appKey)
                        },
                        success: function (r) {
                            var a = r.extraInfo,
                                c = a.elapse,
                                u = a.httpCode,
                                l = {
                                    requestUrl: s,
                                    requestName: _.GET_DNS,
                                    requestElapse: c,
                                    isSuccess: 1,
                                    code: u
                                };
                            "true" === (null == r ? void 0 : r.enableDataReport) ? (null == H || H.getInstance().setIsCollectDt(!0), null == H || H.getInstance().setIsReportDt(!0)) : (null == H || H.getInstance().setIsReportDt(!1), null == H || H.getInstance().setIsCollectDt(!1)), n && n({
                                isRetry: i,
                                data: l
                            });
                            var p = r.rest.hosts,
                                d = o.https ? "https" : "http";
                            if (Z.info("httpType: " + d), !p) return Promise.reject(!1);
                            for (var h = p.filter((function (e) {
                                    if (e.protocol === d) return e
                                })), f = 0; f < h.length; f++)
                                if (h[f].protocol === d) {
                                    var m = h[f];
                                    h.splice(f, 1), h.unshift(m)
                                } o.restHosts = h, o.restTotal = h.length;
                            var y = r["msync-ws"].hosts;
                            if (!y) return Promise.reject(!1);
                            var g = y.filter((function (e) {
                                return e.protocol === d && e
                            }));
                            o.socketHost = g, o.hostTotal = g.length, ds.call(o), "refresh" !== e && ("login" === e ? is.call(o, t, {
                                rpt: n
                            }) : ns.call(o, t, {
                                rpt: n
                            }))
                        } || rs,
                        error: function (r) {
                            var a = r.extraInfo,
                                c = a.elapse,
                                u = a.httpCode,
                                l = a.errDesc,
                                p = {
                                    requestUrl: s,
                                    requestName: _.GET_DNS,
                                    isSuccess: 0,
                                    code: u,
                                    codeDesc: l,
                                    requestElapse: c
                                };
                            n && n({
                                isRetry: i,
                                data: p
                            }), Z.debug("getHttpDNS fail: " + o.dnsIndex), o.dnsIndex++, o.dnsIndex < o.dnsTotal && ps.call(o, e, t, {
                                rpt: n,
                                isRetry: !0
                            })
                        } || rs
                    };
                return ae.ajax(a).catch((function (e) {
                    console.warn(e)
                }))
            }

            function ds() {
                var e, t;
                if (this.restIndex > this.restTotal) return Z.debug("restIndex > restTotal"), "";
                var r = "",
                    o = this.restHosts[this.restIndex],
                    n = o.domain,
                    i = o.ip,
                    s = o.port,
                    a = this.https ? "https:" : "http:";
                return i && "undefined" != typeof window && "http:" === (null === (e = null === window || void 0 === window ? void 0 : window.location) || void 0 === e ? void 0 : e.protocol) ? r = a + "//" + i + ":" + s : (r = a + "//" + n, s && "80" !== s && "443" !== s && (r += ":" + s), "undefined" == typeof window || window.location || (r = "https://" + n), "undefined" != typeof window && window.location && "file:" === (null === (t = window.location) || void 0 === t ? void 0 : t.protocol) && (r = "https://" + n)), "undefined" == typeof window && (r = a + "//" + n), this.apiUrl = r, r
            }
            d().util.Long = f(), d().configure();
            var hs = d().Root.fromJSON({
                nested: {
                    easemob: {
                        nested: {
                            pb: {
                                nested: {
                                    MessageBody: {
                                        fields: {
                                            type: {
                                                type: "Type",
                                                id: 1
                                            },
                                            from: {
                                                type: "JID",
                                                id: 2
                                            },
                                            to: {
                                                type: "JID",
                                                id: 3
                                            },
                                            contents: {
                                                rule: "repeated",
                                                type: "Content",
                                                id: 4
                                            },
                                            ext: {
                                                rule: "repeated",
                                                type: "KeyValue",
                                                id: 5
                                            },
                                            ackMessageId: {
                                                type: "uint64",
                                                id: 6
                                            },
                                            msgConfig: {
                                                type: "MessageConfig",
                                                id: 7
                                            },
                                            ackContent: {
                                                type: "string",
                                                id: 8
                                            },
                                            meta: {
                                                type: "string",
                                                id: 9
                                            }
                                        },
                                        nested: {
                                            Content: {
                                                fields: {
                                                    type: {
                                                        type: "Type",
                                                        id: 1
                                                    },
                                                    text: {
                                                        type: "string",
                                                        id: 2
                                                    },
                                                    latitude: {
                                                        type: "double",
                                                        id: 3
                                                    },
                                                    longitude: {
                                                        type: "double",
                                                        id: 4
                                                    },
                                                    address: {
                                                        type: "string",
                                                        id: 5
                                                    },
                                                    displayName: {
                                                        type: "string",
                                                        id: 6
                                                    },
                                                    remotePath: {
                                                        type: "string",
                                                        id: 7
                                                    },
                                                    secretKey: {
                                                        type: "string",
                                                        id: 8
                                                    },
                                                    fileLength: {
                                                        type: "int32",
                                                        id: 9
                                                    },
                                                    action: {
                                                        type: "string",
                                                        id: 10
                                                    },
                                                    params: {
                                                        rule: "repeated",
                                                        type: "KeyValue",
                                                        id: 11
                                                    },
                                                    duration: {
                                                        type: "int32",
                                                        id: 12
                                                    },
                                                    size: {
                                                        type: "Size",
                                                        id: 13
                                                    },
                                                    thumbnailRemotePath: {
                                                        type: "string",
                                                        id: 14
                                                    },
                                                    thumbnailSecretKey: {
                                                        type: "string",
                                                        id: 15
                                                    },
                                                    thumbnailDisplayName: {
                                                        type: "string",
                                                        id: 16
                                                    },
                                                    thumbnailFileLength: {
                                                        type: "int32",
                                                        id: 17
                                                    },
                                                    thumbnailSize: {
                                                        type: "Size",
                                                        id: 18
                                                    },
                                                    customEvent: {
                                                        type: "string",
                                                        id: 19
                                                    },
                                                    customExts: {
                                                        rule: "repeated",
                                                        type: "KeyValue",
                                                        id: 20
                                                    },
                                                    buildingName: {
                                                        type: "string",
                                                        id: 21
                                                    }
                                                },
                                                nested: {
                                                    Type: {
                                                        values: {
                                                            TEXT: 0,
                                                            IMAGE: 1,
                                                            VIDEO: 2,
                                                            LOCATION: 3,
                                                            VOICE: 4,
                                                            FILE: 5,
                                                            COMMAND: 6,
                                                            CUSTOM: 7
                                                        }
                                                    },
                                                    Size: {
                                                        fields: {
                                                            width: {
                                                                type: "double",
                                                                id: 1
                                                            },
                                                            height: {
                                                                type: "double",
                                                                id: 2
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            Type: {
                                                values: {
                                                    NORMAL: 0,
                                                    CHAT: 1,
                                                    GROUPCHAT: 2,
                                                    CHATROOM: 3,
                                                    READ_ACK: 4,
                                                    DELIVER_ACK: 5,
                                                    RECALL: 6,
                                                    CHANNEL_ACK: 7
                                                }
                                            },
                                            MessageConfig: {
                                                fields: {
                                                    allowGroupAck: {
                                                        type: "bool",
                                                        id: 1
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    KeyValue: {
                                        oneofs: {
                                            value: {
                                                oneof: ["varintValue", "floatValue", "doubleValue", "stringValue"]
                                            }
                                        },
                                        fields: {
                                            key: {
                                                type: "string",
                                                id: 1
                                            },
                                            type: {
                                                type: "ValueType",
                                                id: 2
                                            },
                                            varintValue: {
                                                type: "int64",
                                                id: 3
                                            },
                                            floatValue: {
                                                type: "float",
                                                id: 4
                                            },
                                            doubleValue: {
                                                type: "double",
                                                id: 5
                                            },
                                            stringValue: {
                                                type: "string",
                                                id: 6
                                            }
                                        },
                                        nested: {
                                            ValueType: {
                                                values: {
                                                    BOOL: 1,
                                                    INT: 2,
                                                    UINT: 3,
                                                    LLINT: 4,
                                                    FLOAT: 5,
                                                    DOUBLE: 6,
                                                    STRING: 7,
                                                    JSON_STRING: 8
                                                }
                                            }
                                        }
                                    },
                                    JID: {
                                        fields: {
                                            appKey: {
                                                type: "string",
                                                id: 1
                                            },
                                            name: {
                                                type: "string",
                                                id: 2
                                            },
                                            domain: {
                                                type: "string",
                                                id: 3
                                            },
                                            clientResource: {
                                                type: "string",
                                                id: 4
                                            }
                                        }
                                    },
                                    ConferenceBody: {
                                        fields: {
                                            sessionId: {
                                                type: "string",
                                                id: 1
                                            },
                                            operation: {
                                                type: "Operation",
                                                id: 2
                                            },
                                            conferenceId: {
                                                type: "string",
                                                id: 3
                                            },
                                            type: {
                                                type: "Type",
                                                id: 4
                                            },
                                            content: {
                                                type: "string",
                                                id: 5
                                            },
                                            network: {
                                                type: "string",
                                                id: 6
                                            },
                                            version: {
                                                type: "string",
                                                id: 7
                                            },
                                            identity: {
                                                type: "Identity",
                                                id: 8
                                            },
                                            duration: {
                                                type: "string",
                                                id: 9
                                            },
                                            peerName: {
                                                type: "string",
                                                id: 10
                                            },
                                            endReason: {
                                                type: "EndReason",
                                                id: 11
                                            },
                                            status: {
                                                type: "Status",
                                                id: 12
                                            },
                                            isDirect: {
                                                type: "bool",
                                                id: 13
                                            },
                                            controlType: {
                                                type: "StreamControlType",
                                                id: 14
                                            },
                                            routeFlag: {
                                                type: "int32",
                                                id: 15
                                            },
                                            routeKey: {
                                                type: "string",
                                                id: 16
                                            }
                                        },
                                        nested: {
                                            Status: {
                                                fields: {
                                                    errorCode: {
                                                        type: "int32",
                                                        id: 1
                                                    }
                                                }
                                            },
                                            Operation: {
                                                values: {
                                                    JOIN: 0,
                                                    INITIATE: 1,
                                                    ACCEPT_INITIATE: 2,
                                                    ANSWER: 3,
                                                    TERMINATE: 4,
                                                    REMOVE: 5,
                                                    STREAM_CONTROL: 6,
                                                    MEDIA_REQUEST: 7
                                                }
                                            },
                                            Type: {
                                                values: {
                                                    VOICE: 0,
                                                    VIDEO: 1
                                                }
                                            },
                                            Identity: {
                                                values: {
                                                    CALLER: 0,
                                                    CALLEE: 1
                                                }
                                            },
                                            EndReason: {
                                                values: {
                                                    HANGUP: 0,
                                                    NORESPONSE: 1,
                                                    REJECT: 2,
                                                    BUSY: 3,
                                                    FAIL: 4,
                                                    UNSUPPORTED: 5,
                                                    OFFLINE: 6
                                                }
                                            },
                                            StreamControlType: {
                                                values: {
                                                    PAUSE_VOICE: 0,
                                                    RESUME_VOICE: 1,
                                                    PAUSE_VIDEO: 2,
                                                    RESUME_VIDEO: 3
                                                }
                                            }
                                        }
                                    },
                                    MSync: {
                                        fields: {
                                            version: {
                                                type: "Version",
                                                id: 1,
                                                options: {
                                                    default: "MSYNC_V1"
                                                }
                                            },
                                            guid: {
                                                type: "JID",
                                                id: 2
                                            },
                                            auth: {
                                                type: "string",
                                                id: 3
                                            },
                                            compressAlgorimth: {
                                                type: "uint32",
                                                id: 4
                                            },
                                            crypto: {
                                                type: "uint32",
                                                id: 5
                                            },
                                            userAgent: {
                                                type: "string",
                                                id: 6
                                            },
                                            pov: {
                                                type: "uint64",
                                                id: 7
                                            },
                                            command: {
                                                type: "Command",
                                                id: 8
                                            },
                                            deviceId: {
                                                type: "uint32",
                                                id: 10
                                            },
                                            encryptType: {
                                                rule: "repeated",
                                                type: "EncryptType",
                                                id: 11,
                                                options: {
                                                    packed: !1
                                                }
                                            },
                                            encryptKey: {
                                                type: "string",
                                                id: 12
                                            },
                                            payload: {
                                                type: "bytes",
                                                id: 9
                                            }
                                        },
                                        nested: {
                                            Version: {
                                                values: {
                                                    MSYNC_V1: 0,
                                                    MSYNC_V2: 1
                                                }
                                            },
                                            Command: {
                                                values: {
                                                    SYNC: 0,
                                                    UNREAD: 1,
                                                    NOTICE: 2,
                                                    PROVISION: 3
                                                }
                                            }
                                        }
                                    },
                                    EncryptType: {
                                        values: {
                                            ENCRYPT_NONE: 0,
                                            ENCRYPT_AES_128_CBC: 1,
                                            ENCRYPT_AES_256_CBC: 2
                                        }
                                    },
                                    CommSyncUL: {
                                        fields: {
                                            meta: {
                                                type: "Meta",
                                                id: 1
                                            },
                                            key: {
                                                type: "uint64",
                                                id: 2
                                            },
                                            queue: {
                                                type: "JID",
                                                id: 3
                                            },
                                            isRoam: {
                                                type: "bool",
                                                id: 4
                                            },
                                            lastFullRoamKey: {
                                                type: "uint64",
                                                id: 5
                                            }
                                        }
                                    },
                                    CommSyncDL: {
                                        fields: {
                                            status: {
                                                type: "Status",
                                                id: 1
                                            },
                                            metaId: {
                                                type: "uint64",
                                                id: 2
                                            },
                                            serverId: {
                                                type: "uint64",
                                                id: 3
                                            },
                                            metas: {
                                                rule: "repeated",
                                                type: "Meta",
                                                id: 4
                                            },
                                            nextKey: {
                                                type: "uint64",
                                                id: 5
                                            },
                                            queue: {
                                                type: "JID",
                                                id: 6
                                            },
                                            isLast: {
                                                type: "bool",
                                                id: 7
                                            },
                                            timestamp: {
                                                type: "uint64",
                                                id: 8
                                            },
                                            isRoam: {
                                                type: "bool",
                                                id: 9
                                            }
                                        }
                                    },
                                    CommNotice: {
                                        fields: {
                                            queue: {
                                                type: "JID",
                                                id: 1
                                            }
                                        }
                                    },
                                    CommUnreadUL: {
                                        fields: {}
                                    },
                                    CommUnreadDL: {
                                        fields: {
                                            status: {
                                                type: "Status",
                                                id: 1
                                            },
                                            unread: {
                                                rule: "repeated",
                                                type: "MetaQueue",
                                                id: 2
                                            },
                                            timestamp: {
                                                type: "uint64",
                                                id: 3
                                            }
                                        }
                                    },
                                    MetaQueue: {
                                        fields: {
                                            queue: {
                                                type: "JID",
                                                id: 1
                                            },
                                            n: {
                                                type: "uint32",
                                                id: 2
                                            }
                                        }
                                    },
                                    Meta: {
                                        fields: {
                                            id: {
                                                type: "uint64",
                                                id: 1
                                            },
                                            from: {
                                                type: "JID",
                                                id: 2
                                            },
                                            to: {
                                                type: "JID",
                                                id: 3
                                            },
                                            timestamp: {
                                                type: "uint64",
                                                id: 4
                                            },
                                            ns: {
                                                type: "NameSpace",
                                                id: 5
                                            },
                                            payload: {
                                                type: "bytes",
                                                id: 6
                                            },
                                            routetype: {
                                                type: "RouteType",
                                                id: 7
                                            },
                                            ext: {
                                                type: "KeyValue",
                                                id: 8
                                            },
                                            meta: {
                                                type: "bytes",
                                                id: 9
                                            }
                                        },
                                        nested: {
                                            NameSpace: {
                                                values: {
                                                    STATISTIC: 0,
                                                    CHAT: 1,
                                                    MUC: 2,
                                                    ROSTER: 3,
                                                    CONFERENCE: 4,
                                                    NOTIFY: 5,
                                                    QUERY: 6
                                                }
                                            },
                                            RouteType: {
                                                values: {
                                                    ROUTE_ALL: 0,
                                                    ROUTE_ONLINE: 1
                                                }
                                            }
                                        }
                                    },
                                    Status: {
                                        fields: {
                                            errorCode: {
                                                type: "ErrorCode",
                                                id: 1
                                            },
                                            reason: {
                                                type: "string",
                                                id: 2
                                            },
                                            redirectInfo: {
                                                rule: "repeated",
                                                type: "RedirectInfo",
                                                id: 3
                                            }
                                        },
                                        nested: {
                                            ErrorCode: {
                                                values: {
                                                    OK: 0,
                                                    FAIL: 1,
                                                    UNAUTHORIZED: 2,
                                                    MISSING_PARAMETER: 3,
                                                    WRONG_PARAMETER: 4,
                                                    REDIRECT: 5,
                                                    TOKEN_EXPIRED: 6,
                                                    PERMISSION_DENIED: 7,
                                                    NO_ROUTE: 8,
                                                    UNKNOWN_COMMAND: 9,
                                                    PB_PARSER_ERROR: 10,
                                                    BIND_ANOTHER_DEVICE: 11,
                                                    IM_FORBIDDEN: 12,
                                                    TOO_MANY_DEVICES: 13,
                                                    PLATFORM_LIMIT: 14,
                                                    USER_MUTED: 15,
                                                    ENCRYPT_DISABLE: 16,
                                                    ENCRYPT_ENABLE: 17,
                                                    DECRYPT_FAILURE: 18,
                                                    PERMISSION_DENIED_EXTERNAL: 19
                                                }
                                            }
                                        }
                                    },
                                    RedirectInfo: {
                                        fields: {
                                            host: {
                                                type: "string",
                                                id: 1
                                            },
                                            port: {
                                                type: "uint32",
                                                id: 2
                                            }
                                        }
                                    },
                                    Provision: {
                                        fields: {
                                            osType: {
                                                type: "OsType",
                                                id: 1
                                            },
                                            version: {
                                                type: "string",
                                                id: 2
                                            },
                                            networkType: {
                                                type: "NetworkType",
                                                id: 3
                                            },
                                            appSign: {
                                                type: "string",
                                                id: 4
                                            },
                                            compressType: {
                                                rule: "repeated",
                                                type: "CompressType",
                                                id: 5,
                                                options: {
                                                    packed: !1
                                                }
                                            },
                                            encryptType: {
                                                rule: "repeated",
                                                type: "EncryptType",
                                                id: 6,
                                                options: {
                                                    packed: !1
                                                }
                                            },
                                            encryptKey: {
                                                type: "string",
                                                id: 7
                                            },
                                            status: {
                                                type: "Status",
                                                id: 8
                                            },
                                            deviceUuid: {
                                                type: "string",
                                                id: 9
                                            },
                                            isManualLogin: {
                                                type: "bool",
                                                id: 10
                                            },
                                            password: {
                                                type: "string",
                                                id: 11
                                            },
                                            deviceName: {
                                                type: "string",
                                                id: 12
                                            },
                                            resource: {
                                                type: "string",
                                                id: 13
                                            },
                                            auth: {
                                                type: "string",
                                                id: 14
                                            },
                                            serviceId: {
                                                type: "string",
                                                id: 16
                                            },
                                            actionVersion: {
                                                type: "string",
                                                id: 17
                                            }
                                        },
                                        nested: {
                                            OsType: {
                                                values: {
                                                    OS_IOS: 0,
                                                    OS_ANDROID: 1,
                                                    OS_LINUX: 2,
                                                    OS_OSX: 3,
                                                    OS_WIN: 4,
                                                    OS_OTHER: 16
                                                }
                                            },
                                            NetworkType: {
                                                values: {
                                                    NETWORK_NONE: 0,
                                                    NETWORK_WIFI: 1,
                                                    NETWORK_4G: 2,
                                                    NETWORK_3G: 3,
                                                    NETWORK_2G: 4,
                                                    NETWORK_WIRE: 5
                                                }
                                            },
                                            CompressType: {
                                                values: {
                                                    COMPRESS_NONE: 0,
                                                    COMPRESS_ZLIB: 1
                                                }
                                            }
                                        }
                                    },
                                    MUCBody: {
                                        fields: {
                                            mucId: {
                                                type: "JID",
                                                id: 1
                                            },
                                            operation: {
                                                type: "Operation",
                                                id: 2
                                            },
                                            from: {
                                                type: "JID",
                                                id: 3
                                            },
                                            to: {
                                                rule: "repeated",
                                                type: "JID",
                                                id: 4
                                            },
                                            setting: {
                                                type: "Setting",
                                                id: 5
                                            },
                                            reason: {
                                                type: "string",
                                                id: 6
                                            },
                                            isChatroom: {
                                                type: "bool",
                                                id: 7
                                            },
                                            status: {
                                                type: "Status",
                                                id: 8
                                            },
                                            isThread: {
                                                type: "bool",
                                                id: 9
                                            },
                                            mucParentId: {
                                                type: "JID",
                                                id: 10
                                            },
                                            mucName: {
                                                type: "string",
                                                id: 11
                                            },
                                            eventInfo: {
                                                type: "EventInfo",
                                                id: 12
                                            }
                                        },
                                        nested: {
                                            Operation: {
                                                values: {
                                                    CREATE: 0,
                                                    DESTROY: 1,
                                                    JOIN: 2,
                                                    LEAVE: 3,
                                                    APPLY: 4,
                                                    APPLY_ACCEPT: 5,
                                                    APPLY_DECLINE: 6,
                                                    INVITE: 7,
                                                    INVITE_ACCEPT: 8,
                                                    INVITE_DECLINE: 9,
                                                    KICK: 10,
                                                    GET_BLACKLIST: 11,
                                                    BAN: 12,
                                                    ALLOW: 13,
                                                    UPDATE: 14,
                                                    BLOCK: 15,
                                                    UNBLOCK: 16,
                                                    PRESENCE: 17,
                                                    ABSENCE: 18,
                                                    DIRECT_JOINED: 19,
                                                    ASSIGN_OWNER: 20,
                                                    ADD_ADMIN: 21,
                                                    REMOVE_ADMIN: 22,
                                                    ADD_MUTE: 23,
                                                    REMOVE_MUTE: 24,
                                                    UPDATE_ANNOUNCEMENT: 25,
                                                    DELETE_ANNOUNCEMENT: 26,
                                                    UPLOAD_FILE: 27,
                                                    DELETE_FILE: 28,
                                                    ADD_USER_WHITE_LIST: 29,
                                                    REMOVE_USER_WHITE_LIST: 30,
                                                    BAN_GROUP: 31,
                                                    REMOVE_BAN_GROUP: 32,
                                                    THREAD_CREATE: 33,
                                                    THREAD_DESTROY: 34,
                                                    THREAD_JOIN: 35,
                                                    THREAD_LEAVE: 36,
                                                    THREAD_KICK: 37,
                                                    THREAD_UPDATE: 38,
                                                    THREAD_PRESENCE: 39,
                                                    THREAD_ABSENCE: 40,
                                                    DISABLE_GROUP: 41,
                                                    ABLE_GROUP: 42
                                                }
                                            },
                                            Setting: {
                                                fields: {
                                                    name: {
                                                        type: "string",
                                                        id: 1
                                                    },
                                                    desc: {
                                                        type: "string",
                                                        id: 2
                                                    },
                                                    type: {
                                                        type: "Type",
                                                        id: 3
                                                    },
                                                    maxUsers: {
                                                        type: "int32",
                                                        id: 4
                                                    },
                                                    owner: {
                                                        type: "string",
                                                        id: 5
                                                    }
                                                },
                                                nested: {
                                                    Type: {
                                                        values: {
                                                            PRIVATE_OWNER_INVITE: 0,
                                                            PRIVATE_MEMBER_INVITE: 1,
                                                            PUBLIC_JOIN_APPROVAL: 2,
                                                            PUBLIC_JOIN_OPEN: 3,
                                                            PUBLIC_ANONYMOUS: 4
                                                        }
                                                    }
                                                }
                                            },
                                            Status: {
                                                fields: {
                                                    errorCode: {
                                                        type: "ErrorCode",
                                                        id: 1
                                                    },
                                                    description: {
                                                        type: "string",
                                                        id: 2
                                                    }
                                                },
                                                nested: {
                                                    ErrorCode: {
                                                        values: {
                                                            OK: 0,
                                                            PERMISSION_DENIED: 1,
                                                            WRONG_PARAMETER: 2,
                                                            MUC_NOT_EXIST: 3,
                                                            USER_NOT_EXIST: 4,
                                                            UNKNOWN: 5
                                                        }
                                                    }
                                                }
                                            },
                                            EventInfo: {
                                                fields: {
                                                    eventType: {
                                                        type: "EventType",
                                                        id: 1,
                                                        options: {
                                                            default: "EVENT_NONE"
                                                        }
                                                    },
                                                    ext: {
                                                        type: "string",
                                                        id: 2
                                                    }
                                                },
                                                nested: {
                                                    EventType: {
                                                        values: {
                                                            EVENT_NONE: 0,
                                                            CIRCLE_CHANNEL: 1
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    RosterBody: {
                                        fields: {
                                            operation: {
                                                type: "Operation",
                                                id: 1
                                            },
                                            status: {
                                                type: "Status",
                                                id: 2
                                            },
                                            from: {
                                                type: "JID",
                                                id: 3
                                            },
                                            to: {
                                                rule: "repeated",
                                                type: "JID",
                                                id: 4
                                            },
                                            reason: {
                                                type: "string",
                                                id: 5
                                            },
                                            rosterVer: {
                                                type: "string",
                                                id: 6
                                            },
                                            biDirection: {
                                                type: "bool",
                                                id: 7
                                            }
                                        },
                                        nested: {
                                            Operation: {
                                                values: {
                                                    GET_ROSTER: 0,
                                                    GET_BLACKLIST: 1,
                                                    ADD: 2,
                                                    REMOVE: 3,
                                                    ACCEPT: 4,
                                                    DECLINE: 5,
                                                    BAN: 6,
                                                    ALLOW: 7,
                                                    REMOTE_ACCEPT: 8,
                                                    REMOTE_DECLINE: 9
                                                }
                                            },
                                            Status: {
                                                fields: {
                                                    errorCode: {
                                                        type: "ErrorCode",
                                                        id: 1
                                                    },
                                                    description: {
                                                        type: "string",
                                                        id: 2
                                                    }
                                                },
                                                nested: {
                                                    ErrorCode: {
                                                        values: {
                                                            OK: 0,
                                                            USER_NOT_EXIST: 1,
                                                            USER_ALREADY_FRIEND: 2,
                                                            USER_ALREADY_BLACKLIST: 3
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    StatisticsBody: {
                                        fields: {
                                            operation: {
                                                type: "Operation",
                                                id: 1
                                            },
                                            os: {
                                                type: "OsType",
                                                id: 2
                                            },
                                            version: {
                                                type: "string",
                                                id: 3
                                            },
                                            network: {
                                                type: "NetworkType",
                                                id: 4
                                            },
                                            imTime: {
                                                type: "uint32",
                                                id: 5
                                            },
                                            chatTime: {
                                                type: "uint32",
                                                id: 6
                                            },
                                            location: {
                                                type: "string",
                                                id: 7
                                            }
                                        },
                                        nested: {
                                            Operation: {
                                                values: {
                                                    INFORMATION: 0,
                                                    USER_REMOVED: 1,
                                                    USER_LOGIN_ANOTHER_DEVICE: 2,
                                                    USER_KICKED_BY_CHANGE_PASSWORD: 3,
                                                    USER_KICKED_BY_OTHER_DEVICE: 4
                                                }
                                            },
                                            OsType: {
                                                values: {
                                                    OS_IOS: 0,
                                                    OS_ANDROID: 1,
                                                    OS_LINUX: 2,
                                                    OS_OSX: 3,
                                                    OS_WIN: 4,
                                                    OS_OTHER: 16
                                                }
                                            },
                                            NetworkType: {
                                                values: {
                                                    NETWORK_NONE: 0,
                                                    NETWORK_WIFI: 1,
                                                    NETWORK_4G: 2,
                                                    NETWORK_3G: 3,
                                                    NETWORK_2G: 4,
                                                    NETWORK_WIRE: 5
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
            os.prototype.root = hs;
            var fs = Z.getLogger("IM-SDK-LOG");
            fs.setConfig({
                useCache: !1,
                maxCache: 3145728
            }), fs.enableAll(), os.prototype._getSock = function () {
                if (this.isHttpDNS) {
                    var e = this.socketHost[this.hostIndex];
                    if (!e) throw this.autoReconnectInterval = 0, this.times = 1, this.autoReconnectNumTotal = 0, this.hostIndex = 0, this.onClosed && this.onClosed(), new Error("No connected domain name when get websocket.");
                    var t = e.domain,
                        r = e.ip,
                        o = "",
                        n = e.port;
                    o = t || r, n && "80" !== n && "443" !== n && (o += ":" + n), o && (this.url = "//" + o + "/ws");
                    var i = this.https ? "https:" : "http:";
                    this.url = i + this.url
                }
                return new(l())(this.url)
            }, os.prototype.getUniqueId = ae.getUniqueId;
            var ms = {
                connection: os,
                message: Ie,
                utils: ae,
                logger: fs,
                statusCode: y
            };
            "undefined" != typeof window && (window.WebIM = ms);
            const ys = ms
        })(), __webpack_exports__
    })()
}));