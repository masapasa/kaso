var ProofSpace = (function (e) {
    "use strict";
    "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
            ? global
            : "undefined" != typeof self && self;
    function t(e, t) {
        return e((t = { exports: {} }), t.exports), t.exports;
    }
    function n(e) {
        return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                      return typeof e;
                  }
                : function (e) {
                      return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                  })(e);
    }
    var i = function (e, t) {
        return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                    e.__proto__ = t;
                }) ||
            function (e, t) {
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
    };
    var r = function () {
        return (r =
            Object.assign ||
            function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n]))
                        Object.prototype.hasOwnProperty.call(t, r) &&
                            (e[r] = t[r]);
                return e;
            }).apply(this, arguments);
    };
    var o = Object.create
        ? function (e, t, n, i) {
              void 0 === i && (i = n);
              var r = Object.getOwnPropertyDescriptor(t, n);
              (r &&
                  !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                  (r = {
                      enumerable: !0,
                      get: function () {
                          return t[n];
                      },
                  }),
                  Object.defineProperty(e, i, r);
          }
        : function (e, t, n, i) {
              void 0 === i && (i = n), (e[i] = t[n]);
          };
    function a(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            i = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
            return {
                next: function () {
                    return (
                        e && i >= e.length && (e = void 0),
                        { value: e && e[i++], done: !e }
                    );
                },
            };
        throw new TypeError(
            t ? "Object is not iterable." : "Symbol.iterator is not defined.",
        );
    }
    function s(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var i,
            r,
            o = n.call(e),
            a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; )
                a.push(i.value);
        } catch (e) {
            r = { error: e };
        } finally {
            try {
                i && !i.done && (n = o.return) && n.call(o);
            } finally {
                if (r) throw r.error;
            }
        }
        return a;
    }
    function T(e) {
        return this instanceof T ? ((this.v = e), this) : new T(e);
    }
    var l = Object.create
        ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
              e.default = t;
          };
    var c =
        "function" == typeof SuppressedError
            ? SuppressedError
            : function (e, t, n) {
                  var i = new Error(n);
                  return (
                      (i.name = "SuppressedError"),
                      (i.error = e),
                      (i.suppressed = t),
                      i
                  );
              };
    var S,
        u,
        b,
        h = {
            __extends: function (e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Class extends value " +
                            String(t) +
                            " is not a constructor or null",
                    );
                function n() {
                    this.constructor = e;
                }
                i(e, t),
                    (e.prototype =
                        null === t
                            ? Object.create(t)
                            : ((n.prototype = t.prototype), new n()));
            },
            __assign: r,
            __rest: function (e, t) {
                var n = {};
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) &&
                        t.indexOf(i) < 0 &&
                        (n[i] = e[i]);
                if (
                    null != e &&
                    "function" == typeof Object.getOwnPropertySymbols
                ) {
                    var r = 0;
                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                        t.indexOf(i[r]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(
                                e,
                                i[r],
                            ) &&
                            (n[i[r]] = e[i[r]]);
                }
                return n;
            },
            __decorate: function (e, t, i, r) {
                var o,
                    a = arguments.length,
                    s =
                        a < 3
                            ? t
                            : null === r
                              ? (r = Object.getOwnPropertyDescriptor(t, i))
                              : r;
                if (
                    "object" ===
                        ("undefined" == typeof Reflect
                            ? "undefined"
                            : n(Reflect)) &&
                    "function" == typeof Reflect.decorate
                )
                    s = Reflect.decorate(e, t, i, r);
                else
                    for (var T = e.length - 1; T >= 0; T--)
                        (o = e[T]) &&
                            (s =
                                (a < 3 ? o(s) : a > 3 ? o(t, i, s) : o(t, i)) ||
                                s);
                return a > 3 && s && Object.defineProperty(t, i, s), s;
            },
            __param: function (e, t) {
                return function (n, i) {
                    t(n, i, e);
                };
            },
            __metadata: function (e, t) {
                if (
                    "object" ===
                        ("undefined" == typeof Reflect
                            ? "undefined"
                            : n(Reflect)) &&
                    "function" == typeof Reflect.metadata
                )
                    return Reflect.metadata(e, t);
            },
            __awaiter: function (e, t, n, i) {
                return new (n || (n = Promise))(function (r, o) {
                    function a(e) {
                        try {
                            T(i.next(e));
                        } catch (e) {
                            o(e);
                        }
                    }
                    function s(e) {
                        try {
                            T(i.throw(e));
                        } catch (e) {
                            o(e);
                        }
                    }
                    function T(e) {
                        var t;
                        e.done
                            ? r(e.value)
                            : ((t = e.value),
                              t instanceof n
                                  ? t
                                  : new n(function (e) {
                                        e(t);
                                    })).then(a, s);
                    }
                    T((i = i.apply(e, t || [])).next());
                });
            },
            __generator: function (e, t) {
                var n,
                    i,
                    r,
                    o,
                    a = {
                        label: 0,
                        sent: function () {
                            if (1 & r[0]) throw r[1];
                            return r[1];
                        },
                        trys: [],
                        ops: [],
                    };
                return (
                    (o = { next: s(0), throw: s(1), return: s(2) }),
                    "function" == typeof Symbol &&
                        (o[Symbol.iterator] = function () {
                            return this;
                        }),
                    o
                );
                function s(s) {
                    return function (T) {
                        return (function (s) {
                            if (n)
                                throw new TypeError(
                                    "Generator is already executing.",
                                );
                            for (; o && ((o = 0), s[0] && (a = 0)), a; )
                                try {
                                    if (
                                        ((n = 1),
                                        i &&
                                            (r =
                                                2 & s[0]
                                                    ? i.return
                                                    : s[0]
                                                      ? i.throw ||
                                                        ((r = i.return) &&
                                                            r.call(i),
                                                        0)
                                                      : i.next) &&
                                            !(r = r.call(i, s[1])).done)
                                    )
                                        return r;
                                    switch (
                                        ((i = 0),
                                        r && (s = [2 & s[0], r.value]),
                                        s[0])
                                    ) {
                                        case 0:
                                        case 1:
                                            r = s;
                                            break;
                                        case 4:
                                            return (
                                                a.label++,
                                                { value: s[1], done: !1 }
                                            );
                                        case 5:
                                            a.label++, (i = s[1]), (s = [0]);
                                            continue;
                                        case 7:
                                            (s = a.ops.pop()), a.trys.pop();
                                            continue;
                                        default:
                                            if (
                                                !((r = a.trys),
                                                (r =
                                                    r.length > 0 &&
                                                    r[r.length - 1]) ||
                                                    (6 !== s[0] && 2 !== s[0]))
                                            ) {
                                                a = 0;
                                                continue;
                                            }
                                            if (
                                                3 === s[0] &&
                                                (!r ||
                                                    (s[1] > r[0] &&
                                                        s[1] < r[3]))
                                            ) {
                                                a.label = s[1];
                                                break;
                                            }
                                            if (6 === s[0] && a.label < r[1]) {
                                                (a.label = r[1]), (r = s);
                                                break;
                                            }
                                            if (r && a.label < r[2]) {
                                                (a.label = r[2]), a.ops.push(s);
                                                break;
                                            }
                                            r[2] && a.ops.pop(), a.trys.pop();
                                            continue;
                                    }
                                    s = t.call(e, a);
                                } catch (e) {
                                    (s = [6, e]), (i = 0);
                                } finally {
                                    n = r = 0;
                                }
                            if (5 & s[0]) throw s[1];
                            return { value: s[0] ? s[1] : void 0, done: !0 };
                        })([s, T]);
                    };
                }
            },
            __createBinding: o,
            __exportStar: function (e, t) {
                for (var n in e)
                    "default" === n ||
                        Object.prototype.hasOwnProperty.call(t, n) ||
                        o(t, e, n);
            },
            __values: a,
            __read: s,
            __spread: function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e = e.concat(s(arguments[t]));
                return e;
            },
            __spreadArrays: function () {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                    e += arguments[t].length;
                var i = Array(e),
                    r = 0;
                for (t = 0; t < n; t++)
                    for (
                        var o = arguments[t], a = 0, s = o.length;
                        a < s;
                        a++, r++
                    )
                        i[r] = o[a];
                return i;
            },
            __spreadArray: function (e, t, n) {
                if (n || 2 === arguments.length)
                    for (var i, r = 0, o = t.length; r < o; r++)
                        (!i && r in t) ||
                            (i || (i = Array.prototype.slice.call(t, 0, r)),
                            (i[r] = t[r]));
                return e.concat(i || Array.prototype.slice.call(t));
            },
            __await: T,
            __asyncGenerator: function (e, t, n) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var i,
                    r = n.apply(e, t || []),
                    o = [];
                return (
                    (i = {}),
                    a("next"),
                    a("throw"),
                    a("return"),
                    (i[Symbol.asyncIterator] = function () {
                        return this;
                    }),
                    i
                );
                function a(e) {
                    r[e] &&
                        (i[e] = function (t) {
                            return new Promise(function (n, i) {
                                o.push([e, t, n, i]) > 1 || s(e, t);
                            });
                        });
                }
                function s(e, t) {
                    try {
                        (n = r[e](t)).value instanceof T
                            ? Promise.resolve(n.value.v).then(l, c)
                            : S(o[0][2], n);
                    } catch (e) {
                        S(o[0][3], e);
                    }
                    var n;
                }
                function l(e) {
                    s("next", e);
                }
                function c(e) {
                    s("throw", e);
                }
                function S(e, t) {
                    e(t), o.shift(), o.length && s(o[0][0], o[0][1]);
                }
            },
            __asyncDelegator: function (e) {
                var t, n;
                return (
                    (t = {}),
                    i("next"),
                    i("throw", function (e) {
                        throw e;
                    }),
                    i("return"),
                    (t[Symbol.iterator] = function () {
                        return this;
                    }),
                    t
                );
                function i(i, r) {
                    t[i] = e[i]
                        ? function (t) {
                              return (n = !n)
                                  ? { value: T(e[i](t)), done: !1 }
                                  : r
                                    ? r(t)
                                    : t;
                          }
                        : r;
                }
            },
            __asyncValues: function (e) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var t,
                    n = e[Symbol.asyncIterator];
                return n
                    ? n.call(e)
                    : ((e = a(e)),
                      (t = {}),
                      i("next"),
                      i("throw"),
                      i("return"),
                      (t[Symbol.asyncIterator] = function () {
                          return this;
                      }),
                      t);
                function i(n) {
                    t[n] =
                        e[n] &&
                        function (t) {
                            return new Promise(function (i, r) {
                                (function (e, t, n, i) {
                                    Promise.resolve(i).then(function (t) {
                                        e({ value: t, done: n });
                                    }, t);
                                })(i, r, (t = e[n](t)).done, t.value);
                            });
                        };
                }
            },
            __makeTemplateObject: function (e, t) {
                return (
                    Object.defineProperty
                        ? Object.defineProperty(e, "raw", { value: t })
                        : (e.raw = t),
                    e
                );
            },
            __importStar: function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n &&
                            Object.prototype.hasOwnProperty.call(e, n) &&
                            o(t, e, n);
                return l(t, e), t;
            },
            __importDefault: function (e) {
                return e && e.__esModule ? e : { default: e };
            },
            __classPrivateFieldGet: function (e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError(
                        "Private accessor was defined without a getter",
                    );
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError(
                        "Cannot read private member from an object whose class did not declare it",
                    );
                return "m" === n
                    ? i
                    : "a" === n
                      ? i.call(e)
                      : i
                        ? i.value
                        : t.get(e);
            },
            __classPrivateFieldSet: function (e, t, n, i, r) {
                if ("m" === i)
                    throw new TypeError("Private method is not writable");
                if ("a" === i && !r)
                    throw new TypeError(
                        "Private accessor was defined without a setter",
                    );
                if ("function" == typeof t ? e !== t || !r : !t.has(e))
                    throw new TypeError(
                        "Cannot write private member to an object whose class did not declare it",
                    );
                return (
                    "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n),
                    n
                );
            },
            __classPrivateFieldIn: function (e, t) {
                if (null === t || ("object" !== n(t) && "function" != typeof t))
                    throw new TypeError(
                        "Cannot use 'in' operator on non-object",
                    );
                return "function" == typeof e ? t === e : e.has(t);
            },
            __addDisposableResource: function (e, t, i) {
                if (null != t) {
                    if ("object" !== n(t))
                        throw new TypeError("Object expected.");
                    var r;
                    if (i) {
                        if (!Symbol.asyncDispose)
                            throw new TypeError(
                                "Symbol.asyncDispose is not defined.",
                            );
                        r = t[Symbol.asyncDispose];
                    }
                    if (void 0 === r) {
                        if (!Symbol.dispose)
                            throw new TypeError(
                                "Symbol.dispose is not defined.",
                            );
                        r = t[Symbol.dispose];
                    }
                    if ("function" != typeof r)
                        throw new TypeError("Object not disposable.");
                    e.stack.push({ value: t, dispose: r, async: i });
                } else i && e.stack.push({ async: !0 });
                return t;
            },
            __disposeResources: function (e) {
                function t(t) {
                    (e.error = e.hasError
                        ? new c(
                              t,
                              e.error,
                              "An error was suppressed during disposal.",
                          )
                        : t),
                        (e.hasError = !0);
                }
                return (function n() {
                    for (; e.stack.length; ) {
                        var i = e.stack.pop();
                        try {
                            var r = i.dispose && i.dispose.call(i.value);
                            if (i.async)
                                return Promise.resolve(r).then(n, function (e) {
                                    return t(e), n();
                                });
                        } catch (e) {
                            t(e);
                        }
                    }
                    if (e.hasError) throw e.error;
                })();
            },
        },
        d = t(function (e, t) {
            e.exports = (function () {
                var e = function () {},
                    t = Object.prototype.hasOwnProperty,
                    n = Array.prototype.slice;
                function i(e, i, r) {
                    for (
                        var o, a, s = 0, T = (r = n.call(arguments, 2)).length;
                        s < T;
                        s++
                    )
                        for (o in (a = r[s]))
                            (e && !t.call(a, o)) || (i[o] = a[o]);
                }
                var r = function (t, n, r, o) {
                    var a = this;
                    return (
                        "string" != typeof t &&
                            ((o = r), (r = n), (n = t), (t = null)),
                        "function" != typeof n &&
                            ((o = r),
                            (r = n),
                            (n = function () {
                                return a.apply(this, arguments);
                            })),
                        i(!1, n, a, o),
                        (n.prototype = (function (t, n) {
                            var r;
                            return (
                                "function" == typeof Object.create
                                    ? (r = Object.create(t))
                                    : ((e.prototype = t),
                                      (r = new e()),
                                      (e.prototype = null)),
                                n && i(!0, r, n),
                                r
                            );
                        })(a.prototype, r)),
                        (n.prototype.constructor = n),
                        (n.class_ = t || a.class_),
                        (n.super_ = a),
                        n
                    );
                };
                function o() {}
                (o.class_ = "Nevis"), (o.super_ = Object), (o.extend = r);
                var a = o,
                    s = a.extend(
                        function (e, t, n) {
                            (this.qrious = e),
                                (this.element = t),
                                (this.element.qrious = e),
                                (this.enabled = Boolean(n));
                        },
                        {
                            draw: function (e) {},
                            getElement: function () {
                                return (
                                    this.enabled ||
                                        ((this.enabled = !0), this.render()),
                                    this.element
                                );
                            },
                            getModuleSize: function (e) {
                                var t = this.qrious,
                                    n = t.padding || 0,
                                    i = Math.floor((t.size - 2 * n) / e.width);
                                return Math.max(1, i);
                            },
                            getOffset: function (e) {
                                var t = this.qrious,
                                    n = t.padding;
                                if (null != n) return n;
                                var i = this.getModuleSize(e),
                                    r = Math.floor((t.size - i * e.width) / 2);
                                return Math.max(0, r);
                            },
                            render: function (e) {
                                this.enabled &&
                                    (this.resize(), this.reset(), this.draw(e));
                            },
                            reset: function () {},
                            resize: function () {},
                        },
                    ),
                    T = s.extend({
                        draw: function (e) {
                            var t,
                                n,
                                i = this.qrious,
                                r = this.getModuleSize(e),
                                o = this.getOffset(e),
                                a = this.element.getContext("2d");
                            for (
                                a.fillStyle = i.foreground,
                                    a.globalAlpha = i.foregroundAlpha,
                                    t = 0;
                                t < e.width;
                                t++
                            )
                                for (n = 0; n < e.width; n++)
                                    e.buffer[n * e.width + t] &&
                                        a.fillRect(r * t + o, r * n + o, r, r);
                        },
                        reset: function () {
                            var e = this.qrious,
                                t = this.element.getContext("2d"),
                                n = e.size;
                            (t.lineWidth = 1),
                                t.clearRect(0, 0, n, n),
                                (t.fillStyle = e.background),
                                (t.globalAlpha = e.backgroundAlpha),
                                t.fillRect(0, 0, n, n);
                        },
                        resize: function () {
                            var e = this.element;
                            e.width = e.height = this.qrious.size;
                        },
                    }),
                    l = a.extend(null, {
                        BLOCK: [
                            0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26,
                            28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24, 26, 26,
                            28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26,
                            28, 28,
                        ],
                    }),
                    c = a.extend(null, {
                        BLOCKS: [
                            1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9,
                            17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0,
                            16, 28, 1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2,
                            0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26,
                            4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15,
                            18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0,
                            19, 24, 4, 0, 15, 28, 2, 0, 78, 20, 4, 0, 31, 18, 2,
                            4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38, 22,
                            4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30, 3, 2, 36,
                            22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1,
                            43, 26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1,
                            4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2, 92, 24,
                            6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28, 4, 0, 107,
                            26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22, 3, 1,
                            115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24,
                            5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12,
                            24, 5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3,
                            13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22,
                            28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43, 26, 17,
                            1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44,
                            26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3,
                            13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28, 4, 4,
                            116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16,
                            30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34,
                            0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24,
                            30, 16, 14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28,
                            11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13,
                            47, 28, 7, 22, 24, 30, 22, 13, 15, 30, 10, 2, 114,
                            28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8,
                            4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28,
                            15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24,
                            30, 11, 31, 15, 30, 7, 7, 116, 30, 21, 7, 45, 28, 1,
                            37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10,
                            47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13, 3, 115,
                            30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30,
                            17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24, 30, 19,
                            35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19,
                            24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14, 23, 46,
                            28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30,
                            12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6,
                            14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64,
                            15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24,
                            30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46, 28,
                            48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40,
                            7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30, 19, 6,
                            118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15,
                            30,
                        ],
                        FINAL_FORMAT: [
                            30660, 29427, 32170, 30877, 26159, 25368, 27713,
                            26998, 21522, 20773, 24188, 23371, 17913, 16590,
                            20375, 19104, 13663, 12392, 16177, 14854, 9396,
                            8579, 11994, 11245, 5769, 5054, 7399, 6608, 1890,
                            597, 3340, 2107,
                        ],
                        LEVELS: { L: 1, M: 2, Q: 3, H: 4 },
                    }),
                    S = a.extend(null, {
                        EXPONENT: [
                            1, 2, 4, 8, 16, 32, 64, 128, 29, 58, 116, 232, 205,
                            135, 19, 38, 76, 152, 45, 90, 180, 117, 234, 201,
                            143, 3, 6, 12, 24, 48, 96, 192, 157, 39, 78, 156,
                            37, 74, 148, 53, 106, 212, 181, 119, 238, 193, 159,
                            35, 70, 140, 5, 10, 20, 40, 80, 160, 93, 186, 105,
                            210, 185, 111, 222, 161, 95, 190, 97, 194, 153, 47,
                            94, 188, 101, 202, 137, 15, 30, 60, 120, 240, 253,
                            231, 211, 187, 107, 214, 177, 127, 254, 225, 223,
                            163, 91, 182, 113, 226, 217, 175, 67, 134, 17, 34,
                            68, 136, 13, 26, 52, 104, 208, 189, 103, 206, 129,
                            31, 62, 124, 248, 237, 199, 147, 59, 118, 236, 197,
                            151, 51, 102, 204, 133, 23, 46, 92, 184, 109, 218,
                            169, 79, 158, 33, 66, 132, 21, 42, 84, 168, 77, 154,
                            41, 82, 164, 85, 170, 73, 146, 57, 114, 228, 213,
                            183, 115, 230, 209, 191, 99, 198, 145, 63, 126, 252,
                            229, 215, 179, 123, 246, 241, 255, 227, 219, 171,
                            75, 150, 49, 98, 196, 149, 55, 110, 220, 165, 87,
                            174, 65, 130, 25, 50, 100, 200, 141, 7, 14, 28, 56,
                            112, 224, 221, 167, 83, 166, 81, 162, 89, 178, 121,
                            242, 249, 239, 195, 155, 43, 86, 172, 69, 138, 9,
                            18, 36, 72, 144, 61, 122, 244, 245, 247, 243, 251,
                            235, 203, 139, 11, 22, 44, 88, 176, 125, 250, 233,
                            207, 131, 27, 54, 108, 216, 173, 71, 142, 0,
                        ],
                        LOG: [
                            255, 0, 1, 25, 2, 50, 26, 198, 3, 223, 51, 238, 27,
                            104, 199, 75, 4, 100, 224, 14, 52, 141, 239, 129,
                            28, 193, 105, 248, 200, 8, 76, 113, 5, 138, 101, 47,
                            225, 36, 15, 33, 53, 147, 142, 218, 240, 18, 130,
                            69, 29, 181, 194, 125, 106, 39, 249, 185, 201, 154,
                            9, 120, 77, 228, 114, 166, 6, 191, 139, 98, 102,
                            221, 48, 253, 226, 152, 37, 179, 16, 145, 34, 136,
                            54, 208, 148, 206, 143, 150, 219, 189, 241, 210, 19,
                            92, 131, 56, 70, 64, 30, 66, 182, 163, 195, 72, 126,
                            110, 107, 58, 40, 84, 250, 133, 186, 61, 202, 94,
                            155, 159, 10, 21, 121, 43, 78, 212, 229, 172, 115,
                            243, 167, 87, 7, 112, 192, 247, 140, 128, 99, 13,
                            103, 74, 222, 237, 49, 197, 254, 24, 227, 165, 153,
                            119, 38, 184, 180, 124, 17, 68, 146, 217, 35, 32,
                            137, 46, 55, 63, 209, 91, 149, 188, 207, 205, 144,
                            135, 151, 178, 220, 252, 190, 97, 242, 86, 211, 171,
                            20, 42, 93, 158, 132, 60, 57, 83, 71, 109, 65, 162,
                            31, 45, 67, 216, 183, 123, 164, 118, 196, 23, 73,
                            236, 127, 12, 111, 246, 108, 161, 59, 82, 41, 157,
                            85, 170, 251, 96, 134, 177, 187, 204, 62, 90, 203,
                            89, 95, 176, 156, 169, 160, 81, 11, 245, 22, 235,
                            122, 117, 44, 215, 79, 174, 213, 233, 230, 231, 173,
                            232, 116, 214, 244, 234, 168, 80, 88, 175,
                        ],
                    }),
                    u = a.extend(null, {
                        BLOCK: [
                            3220, 1468, 2713, 1235, 3062, 1890, 2119, 1549,
                            2344, 2936, 1117, 2583, 1330, 2470, 1667, 2249,
                            2028, 3780, 481, 4011, 142, 3098, 831, 3445, 592,
                            2517, 1776, 2234, 1951, 2827, 1070, 2660, 1345,
                            3177,
                        ],
                    }),
                    b = a.extend(
                        function (e) {
                            var t,
                                n,
                                i,
                                r,
                                o,
                                a = e.value.length;
                            for (
                                this._badness = [],
                                    this._level = c.LEVELS[e.level],
                                    this._polynomial = [],
                                    this._value = e.value,
                                    this._version = 0,
                                    this._stringBuffer = [];
                                this._version < 40 &&
                                (this._version++,
                                (i =
                                    4 * (this._level - 1) +
                                    16 * (this._version - 1)),
                                (r = c.BLOCKS[i++]),
                                (o = c.BLOCKS[i++]),
                                (t = c.BLOCKS[i++]),
                                (n = c.BLOCKS[i]),
                                !(
                                    a <=
                                    (i =
                                        t * (r + o) +
                                        o -
                                        3 +
                                        (this._version <= 9))
                                ));

                            );
                            (this._dataBlock = t),
                                (this._eccBlock = n),
                                (this._neccBlock1 = r),
                                (this._neccBlock2 = o);
                            var s = (this.width = 17 + 4 * this._version);
                            (this.buffer = b._createArray(s * s)),
                                (this._ecc = b._createArray(
                                    t + (t + n) * (r + o) + o,
                                )),
                                (this._mask = b._createArray(
                                    (s * (s + 1) + 1) / 2,
                                )),
                                this._insertFinders(),
                                this._insertAlignments(),
                                (this.buffer[8 + s * (s - 8)] = 1),
                                this._insertTimingGap(),
                                this._reverseMask(),
                                this._insertTimingRowAndColumn(),
                                this._insertVersion(),
                                this._syncMask(),
                                this._convertBitStream(a),
                                this._calculatePolynomial(),
                                this._appendEccToData(),
                                this._interleaveBlocks(),
                                this._pack(),
                                this._finish();
                        },
                        {
                            _addAlignment: function (e, t) {
                                var n,
                                    i = this.buffer,
                                    r = this.width;
                                for (i[e + r * t] = 1, n = -2; n < 2; n++)
                                    (i[e + n + r * (t - 2)] = 1),
                                        (i[e - 2 + r * (t + n + 1)] = 1),
                                        (i[e + 2 + r * (t + n)] = 1),
                                        (i[e + n + 1 + r * (t + 2)] = 1);
                                for (n = 0; n < 2; n++)
                                    this._setMask(e - 1, t + n),
                                        this._setMask(e + 1, t - n),
                                        this._setMask(e - n, t - 1),
                                        this._setMask(e + n, t + 1);
                            },
                            _appendData: function (e, t, n, i) {
                                var r,
                                    o,
                                    a,
                                    s = this._polynomial,
                                    T = this._stringBuffer;
                                for (o = 0; o < i; o++) T[n + o] = 0;
                                for (o = 0; o < t; o++) {
                                    if (255 !== (r = S.LOG[T[e + o] ^ T[n]]))
                                        for (a = 1; a < i; a++)
                                            T[n + a - 1] =
                                                T[n + a] ^
                                                S.EXPONENT[
                                                    b._modN(r + s[i - a])
                                                ];
                                    else
                                        for (a = n; a < n + i; a++)
                                            T[a] = T[a + 1];
                                    T[n + i - 1] =
                                        255 === r
                                            ? 0
                                            : S.EXPONENT[b._modN(r + s[0])];
                                }
                            },
                            _appendEccToData: function () {
                                var e,
                                    t = 0,
                                    n = this._dataBlock,
                                    i = this._calculateMaxLength(),
                                    r = this._eccBlock;
                                for (e = 0; e < this._neccBlock1; e++)
                                    this._appendData(t, n, i, r),
                                        (t += n),
                                        (i += r);
                                for (e = 0; e < this._neccBlock2; e++)
                                    this._appendData(t, n + 1, i, r),
                                        (t += n + 1),
                                        (i += r);
                            },
                            _applyMask: function (e) {
                                var t,
                                    n,
                                    i,
                                    r,
                                    o = this.buffer,
                                    a = this.width;
                                switch (e) {
                                    case 0:
                                        for (r = 0; r < a; r++)
                                            for (i = 0; i < a; i++)
                                                (i + r) & 1 ||
                                                    this._isMasked(i, r) ||
                                                    (o[i + r * a] ^= 1);
                                        break;
                                    case 1:
                                        for (r = 0; r < a; r++)
                                            for (i = 0; i < a; i++)
                                                1 & r ||
                                                    this._isMasked(i, r) ||
                                                    (o[i + r * a] ^= 1);
                                        break;
                                    case 2:
                                        for (r = 0; r < a; r++)
                                            for (t = 0, i = 0; i < a; i++, t++)
                                                3 === t && (t = 0),
                                                    t ||
                                                        this._isMasked(i, r) ||
                                                        (o[i + r * a] ^= 1);
                                        break;
                                    case 3:
                                        for (n = 0, r = 0; r < a; r++, n++)
                                            for (
                                                3 === n && (n = 0),
                                                    t = n,
                                                    i = 0;
                                                i < a;
                                                i++, t++
                                            )
                                                3 === t && (t = 0),
                                                    t ||
                                                        this._isMasked(i, r) ||
                                                        (o[i + r * a] ^= 1);
                                        break;
                                    case 4:
                                        for (r = 0; r < a; r++)
                                            for (
                                                t = 0, n = (r >> 1) & 1, i = 0;
                                                i < a;
                                                i++, t++
                                            )
                                                3 === t && ((t = 0), (n = !n)),
                                                    n ||
                                                        this._isMasked(i, r) ||
                                                        (o[i + r * a] ^= 1);
                                        break;
                                    case 5:
                                        for (n = 0, r = 0; r < a; r++, n++)
                                            for (
                                                3 === n && (n = 0),
                                                    t = 0,
                                                    i = 0;
                                                i < a;
                                                i++, t++
                                            )
                                                3 === t && (t = 0),
                                                    (i & r & 1) + !(!t | !n) ||
                                                        this._isMasked(i, r) ||
                                                        (o[i + r * a] ^= 1);
                                        break;
                                    case 6:
                                        for (n = 0, r = 0; r < a; r++, n++)
                                            for (
                                                3 === n && (n = 0),
                                                    t = 0,
                                                    i = 0;
                                                i < a;
                                                i++, t++
                                            )
                                                3 === t && (t = 0),
                                                    ((i & r & 1) +
                                                        (t && t === n)) &
                                                        1 ||
                                                        this._isMasked(i, r) ||
                                                        (o[i + r * a] ^= 1);
                                        break;
                                    case 7:
                                        for (n = 0, r = 0; r < a; r++, n++)
                                            for (
                                                3 === n && (n = 0),
                                                    t = 0,
                                                    i = 0;
                                                i < a;
                                                i++, t++
                                            )
                                                3 === t && (t = 0),
                                                    ((t && t === n) +
                                                        ((i + r) & 1)) &
                                                        1 ||
                                                        this._isMasked(i, r) ||
                                                        (o[i + r * a] ^= 1);
                                }
                            },
                            _calculateMaxLength: function () {
                                return (
                                    this._dataBlock *
                                        (this._neccBlock1 + this._neccBlock2) +
                                    this._neccBlock2
                                );
                            },
                            _calculatePolynomial: function () {
                                var e,
                                    t,
                                    n = this._eccBlock,
                                    i = this._polynomial;
                                for (i[0] = 1, e = 0; e < n; e++) {
                                    for (i[e + 1] = 1, t = e; t > 0; t--)
                                        i[t] = i[t]
                                            ? i[t - 1] ^
                                              S.EXPONENT[
                                                  b._modN(S.LOG[i[t]] + e)
                                              ]
                                            : i[t - 1];
                                    i[0] = S.EXPONENT[b._modN(S.LOG[i[0]] + e)];
                                }
                                for (e = 0; e <= n; e++) i[e] = S.LOG[i[e]];
                            },
                            _checkBadness: function () {
                                var e,
                                    t,
                                    n,
                                    i,
                                    r,
                                    o = 0,
                                    a = this._badness,
                                    s = this.buffer,
                                    T = this.width;
                                for (r = 0; r < T - 1; r++)
                                    for (i = 0; i < T - 1; i++)
                                        ((s[i + T * r] &&
                                            s[i + 1 + T * r] &&
                                            s[i + T * (r + 1)] &&
                                            s[i + 1 + T * (r + 1)]) ||
                                            !(
                                                s[i + T * r] ||
                                                s[i + 1 + T * r] ||
                                                s[i + T * (r + 1)] ||
                                                s[i + 1 + T * (r + 1)]
                                            )) &&
                                            (o += b.N2);
                                var l = 0;
                                for (r = 0; r < T; r++) {
                                    for (
                                        n = 0, a[0] = 0, e = 0, i = 0;
                                        i < T;
                                        i++
                                    )
                                        e === (t = s[i + T * r])
                                            ? a[n]++
                                            : (a[++n] = 1),
                                            (l += (e = t) ? 1 : -1);
                                    o += this._getBadness(n);
                                }
                                l < 0 && (l = -l);
                                var c = 0,
                                    S = l;
                                for (S += S << 2, S <<= 1; S > T * T; )
                                    (S -= T * T), c++;
                                for (o += c * b.N4, i = 0; i < T; i++) {
                                    for (
                                        n = 0, a[0] = 0, e = 0, r = 0;
                                        r < T;
                                        r++
                                    )
                                        e === (t = s[i + T * r])
                                            ? a[n]++
                                            : (a[++n] = 1),
                                            (e = t);
                                    o += this._getBadness(n);
                                }
                                return o;
                            },
                            _convertBitStream: function (e) {
                                var t,
                                    n,
                                    i = this._ecc,
                                    r = this._version;
                                for (n = 0; n < e; n++)
                                    i[n] = this._value.charCodeAt(n);
                                var o = (this._stringBuffer = i.slice()),
                                    a = this._calculateMaxLength();
                                e >= a - 2 && ((e = a - 2), r > 9 && e--);
                                var s = e;
                                if (r > 9) {
                                    for (o[s + 2] = 0, o[s + 3] = 0; s--; )
                                        (t = o[s]),
                                            (o[s + 3] |= 255 & (t << 4)),
                                            (o[s + 2] = t >> 4);
                                    (o[2] |= 255 & (e << 4)),
                                        (o[1] = e >> 4),
                                        (o[0] = 64 | (e >> 12));
                                } else {
                                    for (o[s + 1] = 0, o[s + 2] = 0; s--; )
                                        (t = o[s]),
                                            (o[s + 2] |= 255 & (t << 4)),
                                            (o[s + 1] = t >> 4);
                                    (o[1] |= 255 & (e << 4)),
                                        (o[0] = 64 | (e >> 4));
                                }
                                for (s = e + 3 - (r < 10); s < a; )
                                    (o[s++] = 236), (o[s++] = 17);
                            },
                            _getBadness: function (e) {
                                var t,
                                    n = 0,
                                    i = this._badness;
                                for (t = 0; t <= e; t++)
                                    i[t] >= 5 && (n += b.N1 + i[t] - 5);
                                for (t = 3; t < e - 1; t += 2)
                                    i[t - 2] === i[t + 2] &&
                                        i[t + 2] === i[t - 1] &&
                                        i[t - 1] === i[t + 1] &&
                                        3 * i[t - 1] === i[t] &&
                                        (0 === i[t - 3] ||
                                            t + 3 > e ||
                                            3 * i[t - 3] >= 4 * i[t] ||
                                            3 * i[t + 3] >= 4 * i[t]) &&
                                        (n += b.N3);
                                return n;
                            },
                            _finish: function () {
                                var e, t;
                                this._stringBuffer = this.buffer.slice();
                                var n = 0,
                                    i = 3e4;
                                for (
                                    t = 0;
                                    t < 8 &&
                                    (this._applyMask(t),
                                    (e = this._checkBadness()) < i &&
                                        ((i = e), (n = t)),
                                    7 !== n);
                                    t++
                                )
                                    this.buffer = this._stringBuffer.slice();
                                n !== t && this._applyMask(n),
                                    (i =
                                        c.FINAL_FORMAT[
                                            n + ((this._level - 1) << 3)
                                        ]);
                                var r = this.buffer,
                                    o = this.width;
                                for (t = 0; t < 8; t++, i >>= 1)
                                    1 & i &&
                                        ((r[o - 1 - t + 8 * o] = 1),
                                        t < 6
                                            ? (r[8 + o * t] = 1)
                                            : (r[8 + o * (t + 1)] = 1));
                                for (t = 0; t < 7; t++, i >>= 1)
                                    1 & i &&
                                        ((r[8 + o * (o - 7 + t)] = 1),
                                        t
                                            ? (r[6 - t + 8 * o] = 1)
                                            : (r[7 + 8 * o] = 1));
                            },
                            _interleaveBlocks: function () {
                                var e,
                                    t,
                                    n = this._dataBlock,
                                    i = this._ecc,
                                    r = this._eccBlock,
                                    o = 0,
                                    a = this._calculateMaxLength(),
                                    s = this._neccBlock1,
                                    T = this._neccBlock2,
                                    l = this._stringBuffer;
                                for (e = 0; e < n; e++) {
                                    for (t = 0; t < s; t++)
                                        i[o++] = l[e + t * n];
                                    for (t = 0; t < T; t++)
                                        i[o++] = l[s * n + e + t * (n + 1)];
                                }
                                for (t = 0; t < T; t++)
                                    i[o++] = l[s * n + e + t * (n + 1)];
                                for (e = 0; e < r; e++)
                                    for (t = 0; t < s + T; t++)
                                        i[o++] = l[a + e + t * r];
                                this._stringBuffer = i;
                            },
                            _insertAlignments: function () {
                                var e,
                                    t,
                                    n,
                                    i = this._version,
                                    r = this.width;
                                if (i > 1)
                                    for (e = l.BLOCK[i], n = r - 7; ; ) {
                                        for (
                                            t = r - 7;
                                            t > e - 3 &&
                                            (this._addAlignment(t, n),
                                            !(t < e));

                                        )
                                            t -= e;
                                        if (n <= e + 9) break;
                                        (n -= e),
                                            this._addAlignment(6, n),
                                            this._addAlignment(n, 6);
                                    }
                            },
                            _insertFinders: function () {
                                var e,
                                    t,
                                    n,
                                    i,
                                    r = this.buffer,
                                    o = this.width;
                                for (e = 0; e < 3; e++) {
                                    for (
                                        t = 0,
                                            i = 0,
                                            1 === e && (t = o - 7),
                                            2 === e && (i = o - 7),
                                            r[i + 3 + o * (t + 3)] = 1,
                                            n = 0;
                                        n < 6;
                                        n++
                                    )
                                        (r[i + n + o * t] = 1),
                                            (r[i + o * (t + n + 1)] = 1),
                                            (r[i + 6 + o * (t + n)] = 1),
                                            (r[i + n + 1 + o * (t + 6)] = 1);
                                    for (n = 1; n < 5; n++)
                                        this._setMask(i + n, t + 1),
                                            this._setMask(i + 1, t + n + 1),
                                            this._setMask(i + 5, t + n),
                                            this._setMask(i + n + 1, t + 5);
                                    for (n = 2; n < 4; n++)
                                        (r[i + n + o * (t + 2)] = 1),
                                            (r[i + 2 + o * (t + n + 1)] = 1),
                                            (r[i + 4 + o * (t + n)] = 1),
                                            (r[i + n + 1 + o * (t + 4)] = 1);
                                }
                            },
                            _insertTimingGap: function () {
                                var e,
                                    t,
                                    n = this.width;
                                for (t = 0; t < 7; t++)
                                    this._setMask(7, t),
                                        this._setMask(n - 8, t),
                                        this._setMask(7, t + n - 7);
                                for (e = 0; e < 8; e++)
                                    this._setMask(e, 7),
                                        this._setMask(e + n - 8, 7),
                                        this._setMask(e, n - 8);
                            },
                            _insertTimingRowAndColumn: function () {
                                var e,
                                    t = this.buffer,
                                    n = this.width;
                                for (e = 0; e < n - 14; e++)
                                    1 & e
                                        ? (this._setMask(8 + e, 6),
                                          this._setMask(6, 8 + e))
                                        : ((t[8 + e + 6 * n] = 1),
                                          (t[6 + n * (8 + e)] = 1));
                            },
                            _insertVersion: function () {
                                var e,
                                    t,
                                    n,
                                    i,
                                    r = this.buffer,
                                    o = this._version,
                                    a = this.width;
                                if (o > 6)
                                    for (
                                        e = u.BLOCK[o - 7], t = 17, n = 0;
                                        n < 6;
                                        n++
                                    )
                                        for (i = 0; i < 3; i++, t--)
                                            1 &
                                            (t > 11 ? o >> (t - 12) : e >> t)
                                                ? ((r[
                                                      5 -
                                                          n +
                                                          a * (2 - i + a - 11)
                                                  ] = 1),
                                                  (r[
                                                      2 -
                                                          i +
                                                          a -
                                                          11 +
                                                          a * (5 - n)
                                                  ] = 1))
                                                : (this._setMask(
                                                      5 - n,
                                                      2 - i + a - 11,
                                                  ),
                                                  this._setMask(
                                                      2 - i + a - 11,
                                                      5 - n,
                                                  ));
                            },
                            _isMasked: function (e, t) {
                                var n = b._getMaskBit(e, t);
                                return 1 === this._mask[n];
                            },
                            _pack: function () {
                                var e,
                                    t,
                                    n,
                                    i = 1,
                                    r = 1,
                                    o = this.width,
                                    a = o - 1,
                                    s = o - 1,
                                    T =
                                        (this._dataBlock + this._eccBlock) *
                                            (this._neccBlock1 +
                                                this._neccBlock2) +
                                        this._neccBlock2;
                                for (t = 0; t < T; t++)
                                    for (
                                        e = this._stringBuffer[t], n = 0;
                                        n < 8;
                                        n++, e <<= 1
                                    ) {
                                        128 & e && (this.buffer[a + o * s] = 1);
                                        do {
                                            r
                                                ? a--
                                                : (a++,
                                                  i
                                                      ? 0 !== s
                                                          ? s--
                                                          : ((i = !i),
                                                            6 == (a -= 2) &&
                                                                (a--, (s = 9)))
                                                      : s !== o - 1
                                                        ? s++
                                                        : ((i = !i),
                                                          6 == (a -= 2) &&
                                                              (a--, (s -= 8)))),
                                                (r = !r);
                                        } while (this._isMasked(a, s));
                                    }
                            },
                            _reverseMask: function () {
                                var e,
                                    t,
                                    n = this.width;
                                for (e = 0; e < 9; e++) this._setMask(e, 8);
                                for (e = 0; e < 8; e++)
                                    this._setMask(e + n - 8, 8),
                                        this._setMask(8, e);
                                for (t = 0; t < 7; t++)
                                    this._setMask(8, t + n - 7);
                            },
                            _setMask: function (e, t) {
                                var n = b._getMaskBit(e, t);
                                this._mask[n] = 1;
                            },
                            _syncMask: function () {
                                var e,
                                    t,
                                    n = this.width;
                                for (t = 0; t < n; t++)
                                    for (e = 0; e <= t; e++)
                                        this.buffer[e + n * t] &&
                                            this._setMask(e, t);
                            },
                        },
                        {
                            _createArray: function (e) {
                                var t,
                                    n = [];
                                for (t = 0; t < e; t++) n[t] = 0;
                                return n;
                            },
                            _getMaskBit: function (e, t) {
                                var n;
                                return (
                                    e > t && ((n = e), (e = t), (t = n)),
                                    (n = t),
                                    (n += t * t),
                                    (n >>= 1),
                                    (n += e)
                                );
                            },
                            _modN: function (e) {
                                for (; e >= 255; )
                                    e = ((e -= 255) >> 8) + (255 & e);
                                return e;
                            },
                            N1: 3,
                            N2: 3,
                            N3: 40,
                            N4: 10,
                        },
                    ),
                    h = b,
                    d = s.extend({
                        draw: function () {
                            this.element.src = this.qrious.toDataURL();
                        },
                        reset: function () {
                            this.element.src = "";
                        },
                        resize: function () {
                            var e = this.element;
                            e.width = e.height = this.qrious.size;
                        },
                    }),
                    f = a.extend(
                        function (e, t, n, i) {
                            (this.name = e),
                                (this.modifiable = Boolean(t)),
                                (this.defaultValue = n),
                                (this._valueTransformer = i);
                        },
                        {
                            transform: function (e) {
                                var t = this._valueTransformer;
                                return "function" == typeof t ? t(e, this) : e;
                            },
                        },
                    ),
                    M = a.extend(null, {
                        abs: function (e) {
                            return null != e ? Math.abs(e) : null;
                        },
                        hasOwn: function (e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t);
                        },
                        noop: function () {},
                        toUpperCase: function (e) {
                            return null != e ? e.toUpperCase() : null;
                        },
                    }),
                    P = a.extend(
                        function (e) {
                            (this.options = {}),
                                e.forEach(function (e) {
                                    this.options[e.name] = e;
                                }, this);
                        },
                        {
                            exists: function (e) {
                                return null != this.options[e];
                            },
                            get: function (e, t) {
                                return P._get(this.options[e], t);
                            },
                            getAll: function (e) {
                                var t,
                                    n = this.options,
                                    i = {};
                                for (t in n)
                                    M.hasOwn(n, t) && (i[t] = P._get(n[t], e));
                                return i;
                            },
                            init: function (e, t, n) {
                                var i, r;
                                for (i in ("function" != typeof n &&
                                    (n = M.noop),
                                this.options))
                                    M.hasOwn(this.options, i) &&
                                        ((r = this.options[i]),
                                        P._set(r, r.defaultValue, t),
                                        P._createAccessor(r, t, n));
                                this._setAll(e, t, !0);
                            },
                            set: function (e, t, n) {
                                return this._set(e, t, n);
                            },
                            setAll: function (e, t) {
                                return this._setAll(e, t);
                            },
                            _set: function (e, t, n, i) {
                                var r = this.options[e];
                                if (!r) throw new Error("Invalid option: " + e);
                                if (!r.modifiable && !i)
                                    throw new Error(
                                        "Option cannot be modified: " + e,
                                    );
                                return P._set(r, t, n);
                            },
                            _setAll: function (e, t, n) {
                                if (!e) return !1;
                                var i,
                                    r = !1;
                                for (i in e)
                                    M.hasOwn(e, i) &&
                                        this._set(i, e[i], t, n) &&
                                        (r = !0);
                                return r;
                            },
                        },
                        {
                            _createAccessor: function (e, t, n) {
                                var i = {
                                    get: function () {
                                        return P._get(e, t);
                                    },
                                };
                                e.modifiable &&
                                    (i.set = function (i) {
                                        P._set(e, i, t) && n(i, e);
                                    }),
                                    Object.defineProperty(t, e.name, i);
                            },
                            _get: function (e, t) {
                                return t["_" + e.name];
                            },
                            _set: function (e, t, n) {
                                var i = "_" + e.name,
                                    r = n[i],
                                    o = e.transform(
                                        null != t ? t : e.defaultValue,
                                    );
                                return (n[i] = o), o !== r;
                            },
                        },
                    ),
                    A = P,
                    G = a.extend(
                        function () {
                            this._services = {};
                        },
                        {
                            getService: function (e) {
                                var t = this._services[e];
                                if (!t)
                                    throw new Error(
                                        "Service is not being managed with name: " +
                                            e,
                                    );
                                return t;
                            },
                            setService: function (e, t) {
                                if (this._services[e])
                                    throw new Error(
                                        "Service is already managed with name: " +
                                            e,
                                    );
                                t && (this._services[e] = t);
                            },
                        },
                    ),
                    p = new A([
                        new f("background", !0, "white"),
                        new f("backgroundAlpha", !0, 1, M.abs),
                        new f("element"),
                        new f("foreground", !0, "black"),
                        new f("foregroundAlpha", !0, 1, M.abs),
                        new f("level", !0, "L", M.toUpperCase),
                        new f("mime", !0, "image/png"),
                        new f("padding", !0, null, M.abs),
                        new f("size", !0, 100, M.abs),
                        new f("value", !0, ""),
                    ]),
                    B = new G(),
                    C = a.extend(
                        function (e) {
                            p.init(e, this, this.update.bind(this));
                            var t = p.get("element", this),
                                n = B.getService("element"),
                                i = t && n.isCanvas(t) ? t : n.createCanvas(),
                                r = t && n.isImage(t) ? t : n.createImage();
                            (this._canvasRenderer = new T(this, i, !0)),
                                (this._imageRenderer = new d(this, r, r === t)),
                                this.update();
                        },
                        {
                            get: function () {
                                return p.getAll(this);
                            },
                            set: function (e) {
                                p.setAll(e, this) && this.update();
                            },
                            toDataURL: function (e) {
                                return this.canvas.toDataURL(e || this.mime);
                            },
                            update: function () {
                                var e = new h({
                                    level: this.level,
                                    value: this.value,
                                });
                                this._canvasRenderer.render(e),
                                    this._imageRenderer.render(e);
                            },
                        },
                        {
                            use: function (e) {
                                B.setService(e.getName(), e);
                            },
                        },
                    );
                Object.defineProperties(C.prototype, {
                    canvas: {
                        get: function () {
                            return this._canvasRenderer.getElement();
                        },
                    },
                    image: {
                        get: function () {
                            return this._imageRenderer.getElement();
                        },
                    },
                });
                var H = C,
                    E = a
                        .extend({ getName: function () {} })
                        .extend({
                            createCanvas: function () {},
                            createImage: function () {},
                            getName: function () {
                                return "element";
                            },
                            isCanvas: function (e) {},
                            isImage: function (e) {},
                        })
                        .extend({
                            createCanvas: function () {
                                return document.createElement("canvas");
                            },
                            createImage: function () {
                                return document.createElement("img");
                            },
                            isCanvas: function (e) {
                                return e instanceof HTMLCanvasElement;
                            },
                            isImage: function (e) {
                                return e instanceof HTMLImageElement;
                            },
                        });
                return H.use(new E()), H;
            })();
        }),
        f = t(function (e) {
            (function (t) {
                if (e.exports)
                    return function (t) {
                        e.exports = t();
                    };
                if ("undefined" != typeof window)
                    return function (e) {
                        window.MobileDetect = e();
                    };
                throw new Error("unknown environment");
            })()(function () {
                var e,
                    t = {
                        mobileDetectRules: {
                            phones: {
                                iPhone: "\\biPhone\\b|\\biPod\\b",
                                BlackBerry:
                                    "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
                                Pixel: "; \\bPixel\\b",
                                HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
                                Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 5X|Nexus 6",
                                Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                                Motorola:
                                    "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
                                Samsung:
                                    "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F|SM-G610F|SM-G981B|SM-G892A|SM-A530F",
                                LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
                                Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533|SOV34|601SO|F8332",
                                Asus: "Asus.*Galaxy|PadFone.*Mobile",
                                Xiaomi: "^(?!.*\\bx11\\b).*xiaomi.*$|POCOPHONE F1|MI 8|Redmi Note 9S|Redmi Note 5A Prime|N2G47H|M2001J2G|M2001J2I|M1805E10A|M2004J11G|M1902F1G|M2002J9G|M2004J19G|M2003J6A1G",
                                NokiaLumia: "Lumia [0-9]{3,4}",
                                Micromax:
                                    "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                                Palm: "PalmSource|Palm",
                                Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                                Pantech:
                                    "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                                Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                                Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                                iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                                SimValley:
                                    "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                                Wolfgang:
                                    "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                                Alcatel: "Alcatel",
                                Nintendo: "Nintendo (3DS|Switch)",
                                Amoi: "Amoi",
                                INQ: "INQ",
                                OnePlus: "ONEPLUS",
                                GenericPhone:
                                    "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser",
                            },
                            tablets: {
                                iPad: "iPad|iPad.*Mobile",
                                NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                                GoogleTablet: "Android.*Pixel C",
                                SamsungTablet:
                                    "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V|SM-P610|SM-T290|SM-T515|SM-T590|SM-T595|SM-T725|SM-T817P|SM-P585N0|SM-T395|SM-T295|SM-T865|SM-P610N|SM-P615|SM-T970|SM-T380|SM-T5950|SM-T905|SM-T231|SM-T500|SM-T860",
                                Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
                                SurfaceTablet:
                                    "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                                HPTablet:
                                    "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                                AsusTablet:
                                    "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
                                BlackBerryTablet: "PlayBook|RIM Tablet",
                                HTCtablet:
                                    "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                                MotorolaTablet:
                                    "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                                NookTablet:
                                    "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                                AcerTablet:
                                    "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30|A3-A40",
                                ToshibaTablet:
                                    "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                                LGTablet:
                                    "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                                FujitsuTablet:
                                    "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                                PrestigioTablet:
                                    "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                                LenovoTablet:
                                    "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X|TB-X704F|TB-X104F|TB3-X70F|TB-X705F|TB-8504F|TB3-X70L|TB3-710F|TB-X704L",
                                DellTablet:
                                    "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                                YarvikTablet:
                                    "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                                MedionTablet:
                                    "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                                ArnovaTablet:
                                    "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                                IntensoTablet:
                                    "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                                IRUTablet: "M702pro",
                                MegafonTablet:
                                    "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                                EbodaTablet:
                                    "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                                AllViewTablet:
                                    "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                                ArchosTablet:
                                    "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                                AinolTablet:
                                    "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                                NokiaLumiaTablet: "Lumia 2520",
                                SonyTablet:
                                    "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
                                PhilipsTablet:
                                    "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                                CubeTablet:
                                    "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                                CobyTablet:
                                    "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                                MIDTablet:
                                    "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                                MSITablet:
                                    "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                                SMiTTablet:
                                    "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                                RockChipTablet:
                                    "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                                FlyTablet: "IQ310|Fly Vision",
                                bqTablet:
                                    "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
                                HuaweiTablet:
                                    "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
                                NecTablet: "\\bN-06D|\\bN-08D",
                                PantechTablet: "Pantech.*P4100",
                                BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                                VersusTablet:
                                    "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                                ZyncTablet:
                                    "z1000|Z99 2G|z930|z990|z909|Z919|z900",
                                PositivoTablet:
                                    "TB07STA|TB10STA|TB07FTA|TB10FTA",
                                NabiTablet: "Android.*\\bNabi",
                                KoboTablet:
                                    "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                                DanewTablet:
                                    "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                                TexetTablet:
                                    "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                                PlaystationTablet:
                                    "Playstation.*(Portable|Vita)",
                                TrekstorTablet:
                                    "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                                PyleAudioTablet:
                                    "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                                AdvanTablet:
                                    "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                                DanyTechTablet:
                                    "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                                GalapadTablet:
                                    "Android [0-9.]+; [a-z-]+; \\bG1\\b",
                                MicromaxTablet:
                                    "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                                KarbonnTablet:
                                    "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                                AllFineTablet:
                                    "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                                PROSCANTablet:
                                    "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                                YONESTablet:
                                    "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                                ChangJiaTablet:
                                    "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                                GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                                PointOfViewTablet:
                                    "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                                OvermaxTablet:
                                    "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
                                HCLTablet:
                                    "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                                DPSTablet: "DPS Dream 9|DPS Dual 7",
                                VistureTablet:
                                    "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                                CrestaTablet:
                                    "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                                MediatekTablet:
                                    "\\bMT8125|MT8389|MT8135|MT8377\\b",
                                ConcordeTablet:
                                    "Concorde([ ]+)?Tab|ConCorde ReadMan",
                                GoCleverTablet:
                                    "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                                ModecomTablet:
                                    "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                                VoninoTablet:
                                    "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                                ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                                StorexTablet:
                                    "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                                VodafoneTablet:
                                    "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
                                EssentielBTablet:
                                    "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                                RossMoorTablet:
                                    "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                                iMobileTablet: "i-mobile i-note",
                                TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                                AudioSonicTablet:
                                    "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                                AMPETablet: "Android.* A78 ",
                                SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                                TecnoTablet: "TECNO P9|TECNO DP8D",
                                JXDTablet:
                                    "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                                iJoyTablet:
                                    "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                                FX2Tablet: "FX2 PAD7|FX2 PAD10",
                                XoroTablet:
                                    "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                                ViewsonicTablet:
                                    "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                                VerizonTablet:
                                    "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
                                OdysTablet:
                                    "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                                CaptivaTablet: "CAPTIVA PAD",
                                IconbitTablet:
                                    "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                                TeclastTablet:
                                    "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                                OndaTablet:
                                    "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
                                JaytechTablet: "TPC-PA762",
                                BlaupunktTablet:
                                    "Endeavour 800NG|Endeavour 1010",
                                DigmaTablet:
                                    "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                                EvolioTablet:
                                    "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                                LavaTablet:
                                    "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                                AocTablet:
                                    "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                                MpmanTablet:
                                    "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                                CelkonTablet:
                                    "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                                WolderTablet:
                                    "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                                MediacomTablet:
                                    "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
                                MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                                NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                                NexoTablet:
                                    "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                                LeaderTablet:
                                    "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                                UbislateTablet: "UbiSlate[\\s]?7C",
                                PocketBookTablet: "Pocketbook",
                                KocasoTablet: "\\b(TB-1207)\\b",
                                HisenseTablet: "\\b(F5281|E2371)\\b",
                                Hudl: "Hudl HT7S3|Hudl 2",
                                TelstraTablet: "T-Hub2",
                                GenericTablet:
                                    "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107",
                            },
                            oss: {
                                AndroidOS: "Android",
                                BlackBerryOS:
                                    "blackberry|\\bBB10\\b|rim tablet os",
                                PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                                SymbianOS:
                                    "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                                WindowsMobileOS:
                                    "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
                                WindowsPhoneOS:
                                    "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                                iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
                                iPadOS: "CPU OS 13",
                                SailfishOS: "Sailfish",
                                MeeGoOS: "MeeGo",
                                MaemoOS: "Maemo",
                                JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                                webOS: "webOS|hpwOS",
                                badaOS: "\\bBada\\b",
                                BREWOS: "BREW",
                            },
                            uas: {
                                Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                                Dolfin: "\\bDolfin\\b",
                                Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
                                Skyfire: "Skyfire",
                                Edge: "\\bEdgiOS\\b|Mobile Safari/[.0-9]* Edge",
                                IE: "IEMobile|MSIEMobile",
                                Firefox:
                                    "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                                Bolt: "bolt",
                                TeaShark: "teashark",
                                Blazer: "Blazer",
                                Safari: "Version((?!\\bEdgiOS\\b).)*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                                WeChat: "\\bMicroMessenger\\b",
                                UCBrowser: "UC.*Browser|UCWEB",
                                baiduboxapp: "baiduboxapp",
                                baidubrowser: "baidubrowser",
                                DiigoBrowser: "DiigoBrowser",
                                Mercury: "\\bMercury\\b",
                                ObigoBrowser: "Obigo",
                                NetFront: "NF-Browser",
                                GenericBrowser:
                                    "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                                PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon",
                            },
                            props: {
                                Mobile: "Mobile/[VER]",
                                Build: "Build/[VER]",
                                Version: "Version/[VER]",
                                VendorID: "VendorID/[VER]",
                                iPad: "iPad.*CPU[a-z ]+[VER]",
                                iPhone: "iPhone.*CPU[a-z ]+[VER]",
                                iPod: "iPod.*CPU[a-z ]+[VER]",
                                Kindle: "Kindle/[VER]",
                                Chrome: [
                                    "Chrome/[VER]",
                                    "CriOS/[VER]",
                                    "CrMo/[VER]",
                                ],
                                Coast: ["Coast/[VER]"],
                                Dolfin: "Dolfin/[VER]",
                                Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
                                Fennec: "Fennec/[VER]",
                                Edge: "Edge/[VER]",
                                IE: [
                                    "IEMobile/[VER];",
                                    "IEMobile [VER]",
                                    "MSIE [VER];",
                                    "Trident/[0-9.]+;.*rv:[VER]",
                                ],
                                NetFront: "NetFront/[VER]",
                                NokiaBrowser: "NokiaBrowser/[VER]",
                                Opera: [
                                    " OPR/[VER]",
                                    "Opera Mini/[VER]",
                                    "Version/[VER]",
                                ],
                                "Opera Mini": "Opera Mini/[VER]",
                                "Opera Mobi": "Version/[VER]",
                                UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
                                MQQBrowser: "MQQBrowser/[VER]",
                                MicroMessenger: "MicroMessenger/[VER]",
                                baiduboxapp: "baiduboxapp/[VER]",
                                baidubrowser: "baidubrowser/[VER]",
                                SamsungBrowser: "SamsungBrowser/[VER]",
                                Iron: "Iron/[VER]",
                                Safari: ["Version/[VER]", "Safari/[VER]"],
                                Skyfire: "Skyfire/[VER]",
                                Tizen: "Tizen/[VER]",
                                Webkit: "webkit[ /][VER]",
                                PaleMoon: "PaleMoon/[VER]",
                                SailfishBrowser: "SailfishBrowser/[VER]",
                                Gecko: "Gecko/[VER]",
                                Trident: "Trident/[VER]",
                                Presto: "Presto/[VER]",
                                Goanna: "Goanna/[VER]",
                                iOS: " \\bi?OS\\b [VER][ ;]{1}",
                                Android: "Android [VER]",
                                Sailfish: "Sailfish [VER]",
                                BlackBerry: [
                                    "BlackBerry[\\w]+/[VER]",
                                    "BlackBerry.*Version/[VER]",
                                    "Version/[VER]",
                                ],
                                BREW: "BREW [VER]",
                                Java: "Java/[VER]",
                                "Windows Phone OS": [
                                    "Windows Phone OS [VER]",
                                    "Windows Phone [VER]",
                                ],
                                "Windows Phone": "Windows Phone [VER]",
                                "Windows CE": "Windows CE/[VER]",
                                "Windows NT": "Windows NT [VER]",
                                Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                                webOS: ["webOS/[VER]", "hpwOS/[VER];"],
                            },
                            utils: {
                                Bot: "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp|AspiegelBot",
                                MobileBot:
                                    "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                                DesktopMode: "WPDesktop",
                                TV: "SonyDTV|HbbTV",
                                WebKit: "(webkit)[ /]([\\w.]+)",
                                Console:
                                    "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
                                Watch: "SM-V700",
                            },
                        },
                        detectMobileBrowsers: {
                            fullPattern:
                                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                            shortPattern:
                                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                            tabletPattern: /android|ipad|playbook|silk/i,
                        },
                    },
                    n = Object.prototype.hasOwnProperty;
                function i(e, t) {
                    return (
                        null != e &&
                        null != t &&
                        e.toLowerCase() === t.toLowerCase()
                    );
                }
                function r(e, t) {
                    var n,
                        i,
                        r = e.length;
                    if (!r || !t) return !1;
                    for (n = t.toLowerCase(), i = 0; i < r; ++i)
                        if (n === e[i].toLowerCase()) return !0;
                    return !1;
                }
                function o(e) {
                    for (var t in e)
                        n.call(e, t) && (e[t] = new RegExp(e[t], "i"));
                }
                function a(e, t) {
                    (this.ua = (function (e) {
                        return (e || "").substr(0, 500);
                    })(e)),
                        (this._cache = {}),
                        (this.maxPhoneWidth = t || 600);
                }
                return (
                    (t.FALLBACK_PHONE = "UnknownPhone"),
                    (t.FALLBACK_TABLET = "UnknownTablet"),
                    (t.FALLBACK_MOBILE = "UnknownMobile"),
                    (e =
                        "isArray" in Array
                            ? Array.isArray
                            : function (e) {
                                  return (
                                      "[object Array]" ===
                                      Object.prototype.toString.call(e)
                                  );
                              }),
                    (function () {
                        var i,
                            r,
                            a,
                            s,
                            T,
                            l,
                            c = t.mobileDetectRules;
                        for (i in c.props)
                            if (n.call(c.props, i)) {
                                for (
                                    r = c.props[i],
                                        e(r) || (r = [r]),
                                        T = r.length,
                                        s = 0;
                                    s < T;
                                    ++s
                                )
                                    (l = (a = r[s]).indexOf("[VER]")) >= 0 &&
                                        (a =
                                            a.substring(0, l) +
                                            "([\\w._\\+]+)" +
                                            a.substring(l + 5)),
                                        (r[s] = new RegExp(a, "i"));
                                c.props[i] = r;
                            }
                        o(c.oss),
                            o(c.phones),
                            o(c.tablets),
                            o(c.uas),
                            o(c.utils),
                            (c.oss0 = {
                                WindowsPhoneOS: c.oss.WindowsPhoneOS,
                                WindowsMobileOS: c.oss.WindowsMobileOS,
                            });
                    })(),
                    (t.findMatch = function (e, t) {
                        for (var i in e)
                            if (n.call(e, i) && e[i].test(t)) return i;
                        return null;
                    }),
                    (t.findMatches = function (e, t) {
                        var i = [];
                        for (var r in e)
                            n.call(e, r) && e[r].test(t) && i.push(r);
                        return i;
                    }),
                    (t.getVersionStr = function (e, i) {
                        var r,
                            o,
                            a,
                            s,
                            T = t.mobileDetectRules.props;
                        if (n.call(T, e))
                            for (a = (r = T[e]).length, o = 0; o < a; ++o)
                                if (null !== (s = r[o].exec(i))) return s[1];
                        return null;
                    }),
                    (t.getVersion = function (e, n) {
                        var i = t.getVersionStr(e, n);
                        return i ? t.prepareVersionNo(i) : NaN;
                    }),
                    (t.prepareVersionNo = function (e) {
                        var t;
                        return (
                            1 === (t = e.split(/[a-z._ \/\-]/i)).length &&
                                (e = t[0]),
                            t.length > 1 &&
                                ((e = t[0] + "."),
                                t.shift(),
                                (e += t.join(""))),
                            Number(e)
                        );
                    }),
                    (t.isMobileFallback = function (e) {
                        return (
                            t.detectMobileBrowsers.fullPattern.test(e) ||
                            t.detectMobileBrowsers.shortPattern.test(
                                e.substr(0, 4),
                            )
                        );
                    }),
                    (t.isTabletFallback = function (e) {
                        return t.detectMobileBrowsers.tabletPattern.test(e);
                    }),
                    (t.prepareDetectionCache = function (e, n, i) {
                        if (
                            /*!mobile-detect v1.4.5 2021-03-13*/
                            /*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
                            void 0 === e.mobile
                        ) {
                            var r, o, s;
                            if (
                                (o = t.findMatch(
                                    t.mobileDetectRules.tablets,
                                    n,
                                ))
                            )
                                return (
                                    (e.mobile = e.tablet = o),
                                    void (e.phone = null)
                                );
                            if (
                                (r = t.findMatch(t.mobileDetectRules.phones, n))
                            )
                                return (
                                    (e.mobile = e.phone = r),
                                    void (e.tablet = null)
                                );
                            t.isMobileFallback(n)
                                ? void 0 === (s = a.isPhoneSized(i))
                                    ? ((e.mobile = t.FALLBACK_MOBILE),
                                      (e.tablet = e.phone = null))
                                    : s
                                      ? ((e.mobile = e.phone =
                                            t.FALLBACK_PHONE),
                                        (e.tablet = null))
                                      : ((e.mobile = e.tablet =
                                            t.FALLBACK_TABLET),
                                        (e.phone = null))
                                : t.isTabletFallback(n)
                                  ? ((e.mobile = e.tablet = t.FALLBACK_TABLET),
                                    (e.phone = null))
                                  : (e.mobile = e.tablet = e.phone = null);
                        }
                    }),
                    (t.mobileGrade = function (e) {
                        var t = null !== e.mobile();
                        return (e.os("iOS") && e.version("iPad") >= 4.3) ||
                            (e.os("iOS") && e.version("iPhone") >= 3.1) ||
                            (e.os("iOS") && e.version("iPod") >= 3.1) ||
                            (e.version("Android") > 2.1 && e.is("Webkit")) ||
                            e.version("Windows Phone OS") >= 7 ||
                            (e.is("BlackBerry") &&
                                e.version("BlackBerry") >= 6) ||
                            e.match("Playbook.*Tablet") ||
                            (e.version("webOS") >= 1.4 &&
                                e.match("Palm|Pre|Pixi")) ||
                            e.match("hp.*TouchPad") ||
                            (e.is("Firefox") && e.version("Firefox") >= 12) ||
                            (e.is("Chrome") &&
                                e.is("AndroidOS") &&
                                e.version("Android") >= 4) ||
                            (e.is("Skyfire") &&
                                e.version("Skyfire") >= 4.1 &&
                                e.is("AndroidOS") &&
                                e.version("Android") >= 2.3) ||
                            (e.is("Opera") &&
                                e.version("Opera Mobi") > 11 &&
                                e.is("AndroidOS")) ||
                            e.is("MeeGoOS") ||
                            e.is("Tizen") ||
                            (e.is("Dolfin") && e.version("Bada") >= 2) ||
                            ((e.is("UC Browser") || e.is("Dolfin")) &&
                                e.version("Android") >= 2.3) ||
                            e.match("Kindle Fire") ||
                            (e.is("Kindle") && e.version("Kindle") >= 3) ||
                            (e.is("AndroidOS") && e.is("NookTablet")) ||
                            (e.version("Chrome") >= 11 && !t) ||
                            (e.version("Safari") >= 5 && !t) ||
                            (e.version("Firefox") >= 4 && !t) ||
                            (e.version("MSIE") >= 7 && !t) ||
                            (e.version("Opera") >= 10 && !t)
                            ? "A"
                            : (e.os("iOS") && e.version("iPad") < 4.3) ||
                                (e.os("iOS") && e.version("iPhone") < 3.1) ||
                                (e.os("iOS") && e.version("iPod") < 3.1) ||
                                (e.is("Blackberry") &&
                                    e.version("BlackBerry") >= 5 &&
                                    e.version("BlackBerry") < 6) ||
                                (e.version("Opera Mini") >= 5 &&
                                    e.version("Opera Mini") <= 6.5 &&
                                    (e.version("Android") >= 2.3 ||
                                        e.is("iOS"))) ||
                                e.match(
                                    "NokiaN8|NokiaC7|N97.*Series60|Symbian/3",
                                ) ||
                                (e.version("Opera Mobi") >= 11 &&
                                    e.is("SymbianOS"))
                              ? "B"
                              : (e.version("BlackBerry") < 5 ||
                                    e.match("MSIEMobile|Windows CE.*Mobile") ||
                                    e.version("Windows Mobile"),
                                "C");
                    }),
                    (t.detectOS = function (e) {
                        return (
                            t.findMatch(t.mobileDetectRules.oss0, e) ||
                            t.findMatch(t.mobileDetectRules.oss, e)
                        );
                    }),
                    (t.getDeviceSmallerSide = function () {
                        return window.screen.width < window.screen.height
                            ? window.screen.width
                            : window.screen.height;
                    }),
                    (a.prototype = {
                        constructor: a,
                        mobile: function () {
                            return (
                                t.prepareDetectionCache(
                                    this._cache,
                                    this.ua,
                                    this.maxPhoneWidth,
                                ),
                                this._cache.mobile
                            );
                        },
                        phone: function () {
                            return (
                                t.prepareDetectionCache(
                                    this._cache,
                                    this.ua,
                                    this.maxPhoneWidth,
                                ),
                                this._cache.phone
                            );
                        },
                        tablet: function () {
                            return (
                                t.prepareDetectionCache(
                                    this._cache,
                                    this.ua,
                                    this.maxPhoneWidth,
                                ),
                                this._cache.tablet
                            );
                        },
                        userAgent: function () {
                            return (
                                void 0 === this._cache.userAgent &&
                                    (this._cache.userAgent = t.findMatch(
                                        t.mobileDetectRules.uas,
                                        this.ua,
                                    )),
                                this._cache.userAgent
                            );
                        },
                        userAgents: function () {
                            return (
                                void 0 === this._cache.userAgents &&
                                    (this._cache.userAgents = t.findMatches(
                                        t.mobileDetectRules.uas,
                                        this.ua,
                                    )),
                                this._cache.userAgents
                            );
                        },
                        os: function () {
                            return (
                                void 0 === this._cache.os &&
                                    (this._cache.os = t.detectOS(this.ua)),
                                this._cache.os
                            );
                        },
                        version: function (e) {
                            return t.getVersion(e, this.ua);
                        },
                        versionStr: function (e) {
                            return t.getVersionStr(e, this.ua);
                        },
                        is: function (e) {
                            return (
                                r(this.userAgents(), e) ||
                                i(e, this.os()) ||
                                i(e, this.phone()) ||
                                i(e, this.tablet()) ||
                                r(
                                    t.findMatches(
                                        t.mobileDetectRules.utils,
                                        this.ua,
                                    ),
                                    e,
                                )
                            );
                        },
                        match: function (e) {
                            return (
                                e instanceof RegExp || (e = new RegExp(e, "i")),
                                e.test(this.ua)
                            );
                        },
                        isPhoneSized: function (e) {
                            return a.isPhoneSized(e || this.maxPhoneWidth);
                        },
                        mobileGrade: function () {
                            return (
                                void 0 === this._cache.grade &&
                                    (this._cache.grade = t.mobileGrade(this)),
                                this._cache.grade
                            );
                        },
                    }),
                    "undefined" != typeof window && window.screen
                        ? (a.isPhoneSized = function (e) {
                              return e < 0
                                  ? void 0
                                  : t.getDeviceSmallerSide() <= e;
                          })
                        : (a.isPhoneSized = function () {}),
                    (a._impl = t),
                    (a.version = "1.4.5 2021-03-13"),
                    a
                );
            });
        }),
        M = "function" == typeof atob,
        P = "function" == typeof btoa,
        A = "function" == typeof Buffer,
        G = "function" == typeof TextDecoder ? new TextDecoder() : void 0,
        p = "function" == typeof TextEncoder ? new TextEncoder() : void 0,
        B = Array.prototype.slice.call(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        ),
        C =
            ((S = {}),
            B.forEach(function (e, t) {
                return (S[e] = t);
            }),
            S),
        H =
            /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
        E = String.fromCharCode.bind(String),
        v =
            "function" == typeof Uint8Array.from
                ? Uint8Array.from.bind(Uint8Array)
                : function (e) {
                      return new Uint8Array(Array.prototype.slice.call(e, 0));
                  },
        m = function (e) {
            return e.replace(/=/g, "").replace(/[+\/]/g, function (e) {
                return "+" == e ? "-" : "_";
            });
        },
        I = function (e) {
            return e.replace(/[^A-Za-z0-9\+\/]/g, "");
        },
        w = function (e) {
            for (
                var t, n, i, r, o = "", a = e.length % 3, s = 0;
                s < e.length;

            ) {
                if (
                    (n = e.charCodeAt(s++)) > 255 ||
                    (i = e.charCodeAt(s++)) > 255 ||
                    (r = e.charCodeAt(s++)) > 255
                )
                    throw new TypeError("invalid character found");
                o +=
                    B[((t = (n << 16) | (i << 8) | r) >> 18) & 63] +
                    B[(t >> 12) & 63] +
                    B[(t >> 6) & 63] +
                    B[63 & t];
            }
            return a ? o.slice(0, a - 3) + "===".substring(a) : o;
        },
        _ = P
            ? function (e) {
                  return btoa(e);
              }
            : A
              ? function (e) {
                    return Buffer.from(e, "binary").toString("base64");
                }
              : w,
        y = A
            ? function (e) {
                  return Buffer.from(e).toString("base64");
              }
            : function (e) {
                  for (var t = [], n = 0, i = e.length; n < i; n += 4096)
                      t.push(E.apply(null, e.subarray(n, n + 4096)));
                  return _(t.join(""));
              },
        g = function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return t ? m(y(e)) : y(e);
        },
        D = function (e) {
            if (e.length < 2)
                return (t = e.charCodeAt(0)) < 128
                    ? e
                    : t < 2048
                      ? E(192 | (t >>> 6)) + E(128 | (63 & t))
                      : E(224 | ((t >>> 12) & 15)) +
                        E(128 | ((t >>> 6) & 63)) +
                        E(128 | (63 & t));
            var t =
                65536 +
                1024 * (e.charCodeAt(0) - 55296) +
                (e.charCodeAt(1) - 56320);
            return (
                E(240 | ((t >>> 18) & 7)) +
                E(128 | ((t >>> 12) & 63)) +
                E(128 | ((t >>> 6) & 63)) +
                E(128 | (63 & t))
            );
        },
        O = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
        L = function (e) {
            return e.replace(O, D);
        },
        V = A
            ? function (e) {
                  return Buffer.from(e, "utf8").toString("base64");
              }
            : p
              ? function (e) {
                    return y(p.encode(e));
                }
              : function (e) {
                    return _(L(e));
                },
        N = function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return t ? m(V(e)) : V(e);
        },
        R = function (e) {
            return N(e, !0);
        },
        k =
            /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
        x = function (e) {
            switch (e.length) {
                case 4:
                    var t =
                        (((7 & e.charCodeAt(0)) << 18) |
                            ((63 & e.charCodeAt(1)) << 12) |
                            ((63 & e.charCodeAt(2)) << 6) |
                            (63 & e.charCodeAt(3))) -
                        65536;
                    return E(55296 + (t >>> 10)) + E(56320 + (1023 & t));
                case 3:
                    return E(
                        ((15 & e.charCodeAt(0)) << 12) |
                            ((63 & e.charCodeAt(1)) << 6) |
                            (63 & e.charCodeAt(2)),
                    );
                default:
                    return E(
                        ((31 & e.charCodeAt(0)) << 6) | (63 & e.charCodeAt(1)),
                    );
            }
        },
        X = function (e) {
            return e.replace(k, x);
        },
        F = function (e) {
            if (((e = e.replace(/\s+/g, "")), !H.test(e)))
                throw new TypeError("malformed base64.");
            e += "==".slice(2 - (3 & e.length));
            for (var t, n, i, r = "", o = 0; o < e.length; )
                (t =
                    (C[e.charAt(o++)] << 18) |
                    (C[e.charAt(o++)] << 12) |
                    ((n = C[e.charAt(o++)]) << 6) |
                    (i = C[e.charAt(o++)])),
                    (r +=
                        64 === n
                            ? E((t >> 16) & 255)
                            : 64 === i
                              ? E((t >> 16) & 255, (t >> 8) & 255)
                              : E((t >> 16) & 255, (t >> 8) & 255, 255 & t));
            return r;
        },
        U = M
            ? function (e) {
                  return atob(I(e));
              }
            : A
              ? function (e) {
                    return Buffer.from(e, "base64").toString("binary");
                }
              : F,
        W = A
            ? function (e) {
                  return v(Buffer.from(e, "base64"));
              }
            : function (e) {
                  return v(
                      U(e)
                          .split("")
                          .map(function (e) {
                              return e.charCodeAt(0);
                          }),
                  );
              },
        K = function (e) {
            return W(z(e));
        },
        Q = A
            ? function (e) {
                  return Buffer.from(e, "base64").toString("utf8");
              }
            : G
              ? function (e) {
                    return G.decode(W(e));
                }
              : function (e) {
                    return X(U(e));
                },
        z = function (e) {
            return I(
                e.replace(/[-_]/g, function (e) {
                    return "-" == e ? "+" : "/";
                }),
            );
        },
        j = function (e) {
            return Q(z(e));
        },
        Y = function (e) {
            if ("string" != typeof e) return !1;
            var t = e.replace(/\s+/g, "").replace(/={0,2}$/, "");
            return !/[^\s0-9a-zA-Z\+/]/.test(t) || !/[^\s0-9a-zA-Z\-_]/.test(t);
        },
        q = function (e) {
            return { value: e, enumerable: !1, writable: !0, configurable: !0 };
        },
        Z = function () {
            var e = function (e, t) {
                return Object.defineProperty(String.prototype, e, q(t));
            };
            e("fromBase64", function () {
                return j(this);
            }),
                e("toBase64", function (e) {
                    return N(this, e);
                }),
                e("toBase64URI", function () {
                    return N(this, !0);
                }),
                e("toBase64URL", function () {
                    return N(this, !0);
                }),
                e("toUint8Array", function () {
                    return K(this);
                });
        },
        J = function () {
            var e = function (e, t) {
                return Object.defineProperty(Uint8Array.prototype, e, q(t));
            };
            e("toBase64", function (e) {
                return g(this, e);
            }),
                e("toBase64URI", function () {
                    return g(this, !0);
                }),
                e("toBase64URL", function () {
                    return g(this, !0);
                });
        },
        $ = function () {
            Z(), J();
        },
        ee = {
            version: "3.7.5",
            VERSION: "3.7.5",
            atob: U,
            atobPolyfill: F,
            btoa: _,
            btoaPolyfill: w,
            fromBase64: j,
            toBase64: N,
            encode: N,
            encodeURI: R,
            encodeURL: R,
            utob: L,
            btou: X,
            decode: j,
            isValid: Y,
            fromUint8Array: g,
            toUint8Array: K,
            extendString: Z,
            extendUint8Array: J,
            extendBuiltins: $,
        },
        te =
            ((u = Object.freeze({
                __proto__: null,
                version: "3.7.5",
                VERSION: "3.7.5",
                atob: U,
                atobPolyfill: F,
                btoa: _,
                btoaPolyfill: w,
                fromBase64: j,
                toBase64: N,
                utob: L,
                encode: N,
                encodeURI: R,
                encodeURL: R,
                btou: X,
                decode: j,
                isValid: Y,
                fromUint8Array: g,
                toUint8Array: K,
                extendString: Z,
                extendUint8Array: J,
                extendBuiltins: $,
                Base64: ee,
            })) &&
                u.default) ||
            u,
        ne = t(function (e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.WebLinker =
                    t.PSWebLink =
                    t.isAndroid =
                    t.isMobile =
                    t.ENV =
                    t.wait =
                    t.qrTest =
                        void 0);
            var n,
                i = h.__importDefault(d),
                r = h.__importDefault(f);
            function o(e, t, i) {
                return h.__awaiter(this, void 0, void 0, function () {
                    var r, o, a, s, T;
                    return h.__generator(this, function (l) {
                        switch (l.label) {
                            case 0:
                                return (
                                    (r = { credentials: "include" }),
                                    t === n.POST || t === n.PUT
                                        ? ((r.method = t),
                                          (r.body = i),
                                          (r.headers = {
                                              "Content-type":
                                                  "application/x-www-form-urlencoded; charset=UTF-8",
                                          }))
                                        : (r.cache = "no-store"),
                                    [4, fetch(e, r)]
                                );
                            case 1:
                                return (o = l.sent()).ok
                                    ? [3, 3]
                                    : [4, o.text()];
                            case 2:
                                throw ((a = l.sent()), JSON.parse(a));
                            case 3:
                                (s = {}), (l.label = 4);
                            case 4:
                                return l.trys.push([4, 6, , 7]), [4, o.json()];
                            case 5:
                                return (s = l.sent()), [3, 7];
                            case 6:
                                return (
                                    (T = l.sent()),
                                    console.log("Can't parse json:", T),
                                    [3, 7]
                                );
                            case 7:
                                return [2, s];
                        }
                    });
                });
            }
            (t.qrTest = function (e, t) {
                return new i.default({ element: e, value: t, size: 200 });
            }),
                (function (e) {
                    (e.GET = "GET"), (e.POST = "POST"), (e.PUT = "PUT");
                })(n || (n = {})),
                (t.wait = function (e) {
                    return h.__awaiter(void 0, void 0, void 0, function () {
                        return h.__generator(this, function (t) {
                            return [
                                2,
                                new Promise(function (t) {
                                    setTimeout(t, e);
                                }),
                            ];
                        });
                    });
                });
            var a = (function () {
                    function e() {}
                    return (
                        (e.prototype.init = function (e) {
                            this.cfg = e;
                        }),
                        (e.prototype.requestAuthorization = function (e, t) {
                            return h.__awaiter(
                                this,
                                void 0,
                                void 0,
                                function () {
                                    var i;
                                    return h.__generator(this, function (r) {
                                        switch (r.label) {
                                            case 0:
                                                return (
                                                    this.assertCfg(),
                                                    (i = [
                                                        "client_id=" +
                                                            encodeURI(e),
                                                    ]),
                                                    t && i.push("scope=" + t),
                                                    [
                                                        4,
                                                        o(
                                                            this.cfg
                                                                .requestAuthorizationUri,
                                                            n.POST,
                                                            i.join("&"),
                                                        ),
                                                    ]
                                                );
                                            case 1:
                                                return [2, r.sent()];
                                        }
                                    });
                                },
                            );
                        }),
                        (e.prototype.requestToken = function (e, t) {
                            return h.__awaiter(
                                this,
                                void 0,
                                void 0,
                                function () {
                                    var i;
                                    return h.__generator(this, function (r) {
                                        switch (r.label) {
                                            case 0:
                                                return (
                                                    this.assertCfg(),
                                                    (i = encodeURI(
                                                        "urn:ietf:params:oauth:grant-type:device_code",
                                                    )),
                                                    [
                                                        4,
                                                        o(
                                                            this.cfg
                                                                .requestTokenUri,
                                                            n.POST,
                                                            "client_id=" +
                                                                encodeURI(t) +
                                                                "&device_code=" +
                                                                encodeURI(e) +
                                                                "&grant_type=" +
                                                                i,
                                                        ),
                                                    ]
                                                );
                                            case 1:
                                                return [2, r.sent()];
                                        }
                                    });
                                },
                            );
                        }),
                        (e.prototype.assertCfg = function () {
                            if (!this.cfg)
                                throw new Error("Api is not initialized");
                        }),
                        e
                    );
                })(),
                s = (function () {
                    function e(e, t) {
                        void 0 === t && (t = new Date().getTime()),
                            (this.expiresIn = e),
                            (this.startTs = t);
                    }
                    return (
                        (e.prototype.isExpired = function () {
                            return (
                                new Date().getTime() - this.startTs >=
                                this.expiresIn
                            );
                        }),
                        (e.prototype.leftTimeStr = function () {
                            var e = Math.ceil(
                                    (this.expiresIn -
                                        (new Date().getTime() - this.startTs)) /
                                        1e3,
                                ),
                                t = Math.floor(e / 60);
                            e %= 60;
                            var n = Math.floor(t / 60);
                            t %= 60;
                            var i = [];
                            return (
                                n > 0 && i.push(n < 10 ? "0" + n : "" + n),
                                i.push(t < 10 ? "0" + t : "" + t),
                                i.push(e < 10 ? "0" + e : "" + e),
                                i.join(":")
                            );
                        }),
                        e
                    );
                })(),
                T = (function () {
                    function e() {
                        var e, t;
                        (this.api = new a()),
                            (this.userCodeHandler = function (e) {}),
                            (this.timerHandler = function (e) {}),
                            (this.clientId =
                                ((e = 8),
                                (t = h.__spread(
                                    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                                    "abcdefghijklmnopwrstuvwxyz",
                                    "0123456789",
                                )),
                                h
                                    .__spread(Array(e))
                                    .map(function (e) {
                                        return t[
                                            (Math.random() * t.length) | 0
                                        ];
                                    })
                                    .join(""))),
                            (this.pollingInterval = 5);
                    }
                    return (
                        (e.prototype.onUserCodeReceived = function (e) {
                            this.userCodeHandler = e;
                        }),
                        (e.prototype.onTimerUpdate = function (e) {
                            this.timerHandler = e;
                        }),
                        (e.prototype.start = function (e) {
                            return h.__awaiter(
                                this,
                                void 0,
                                void 0,
                                function () {
                                    var t,
                                        n,
                                        i = this;
                                    return h.__generator(this, function (r) {
                                        switch (r.label) {
                                            case 0:
                                                return (
                                                    this.stopTimer(),
                                                    this.setConfig(e),
                                                    this.api.init({
                                                        requestAuthorizationUri:
                                                            this
                                                                .authServiceUrl +
                                                            "/device_authorization",
                                                        requestTokenUri:
                                                            this
                                                                .authServiceUrl +
                                                            "/token",
                                                    }),
                                                    [
                                                        4,
                                                        this.api.requestAuthorization(
                                                            this.clientId,
                                                            e.scope,
                                                        ),
                                                    ]
                                                );
                                            case 1:
                                                return (
                                                    (t = r.sent()),
                                                    this.userCodeHandler(
                                                        t.user_code,
                                                    ),
                                                    (this.timeWatcher = new s(
                                                        1e3 * t.expires_in,
                                                    )),
                                                    (this.timer = setInterval(
                                                        function () {
                                                            return i.updateTimer();
                                                        },
                                                        1e3,
                                                    )),
                                                    t.interval &&
                                                        (this.pollingInterval =
                                                            t.interval),
                                                    [4, this.getToken(t)]
                                                );
                                            case 2:
                                                return (
                                                    (n = r.sent()),
                                                    e.log(
                                                        "Token received! " +
                                                            n.access_token,
                                                    ),
                                                    [2, n]
                                                );
                                        }
                                    });
                                },
                            );
                        }),
                        (e.prototype.setConfig = function (e) {
                            (this.clientId = e.clientId),
                                (this.authServiceUrl = e.authServiceUrl);
                        }),
                        (e.prototype.getToken = function (e) {
                            return h.__awaiter(
                                this,
                                void 0,
                                void 0,
                                function () {
                                    var t, n, i, r;
                                    return h.__generator(this, function (o) {
                                        switch (o.label) {
                                            case 0:
                                                (n = !1),
                                                    (i = e.initial_interval
                                                        ? 1e3 *
                                                          e.initial_interval
                                                        : 1e4),
                                                    (o.label = 1);
                                            case 1:
                                                return (
                                                    o.trys.push([1, 3, , 4]),
                                                    [
                                                        4,
                                                        this.tryToGetToken(
                                                            e.device_code,
                                                            i,
                                                        ),
                                                    ]
                                                );
                                            case 2:
                                                return (t = o.sent()), [3, 4];
                                            case 3:
                                                if (
                                                    "expired_token" ===
                                                    (r = o.sent()).error
                                                )
                                                    throw (
                                                        ((n = !0),
                                                        this.stopTimer(),
                                                        r)
                                                    );
                                                if ("slow_down" === r.error)
                                                    this.pollingInterval += 5;
                                                else if (
                                                    "authorization_pending" !==
                                                    r.error
                                                )
                                                    throw (this.stopTimer(), r);
                                                return [3, 4];
                                            case 4:
                                                (i =
                                                    1e3 * this.pollingInterval),
                                                    (o.label = 5);
                                            case 5:
                                                if (!t || n) return [3, 1];
                                                o.label = 6;
                                            case 6:
                                                return this.stopTimer(), [2, t];
                                        }
                                    });
                                },
                            );
                        }),
                        (e.prototype.tryToGetToken = function (e, n) {
                            return h.__awaiter(
                                this,
                                void 0,
                                void 0,
                                function () {
                                    return h.__generator(this, function (i) {
                                        switch (i.label) {
                                            case 0:
                                                return [4, t.wait(n)];
                                            case 1:
                                                return (
                                                    i.sent(),
                                                    [
                                                        4,
                                                        this.api.requestToken(
                                                            e,
                                                            this.clientId,
                                                        ),
                                                    ]
                                                );
                                            case 2:
                                                return [2, i.sent()];
                                        }
                                    });
                                },
                            );
                        }),
                        (e.prototype.stopTimer = function () {
                            this.timer && clearInterval(this.timer);
                        }),
                        (e.prototype.updateTimer = function () {
                            this.timerHandler(this.timeWatcher.leftTimeStr()),
                                this.timeWatcher.isExpired() &&
                                    this.stopTimer();
                        }),
                        e
                    );
                })(),
                l = (function () {
                    function e() {}
                    return (
                        (e.prototype.init = function (e) {
                            this.cfg = e;
                        }),
                        (e.prototype.getInstances = function () {
                            return h.__awaiter(
                                this,
                                void 0,
                                void 0,
                                function () {
                                    return h.__generator(this, function (e) {
                                        switch (e.label) {
                                            case 0:
                                                return (
                                                    this.assertCfg(),
                                                    [
                                                        4,
                                                        o(
                                                            this.cfg
                                                                .requestInstancesUri,
                                                            n.GET,
                                                        ),
                                                    ]
                                                );
                                            case 1:
                                                return [2, e.sent()];
                                        }
                                    });
                                },
                            );
                        }),
                        (e.prototype.assertCfg = function () {
                            if (!this.cfg)
                                throw new Error("Api is not initialized");
                        }),
                        e
                    );
                })(),
                c = "https://platform.proofspace.id/",
                S = "https://test.proofspace.id/",
                u = "https://test.proofspace.id/",
                b = {
                    containerURIPrefix: c + "service-dashboard-backend/",
                    SSIAuthenticationCredDefId:
                        "GbzPqgnU4XsMs7xg9mYJW8:3:CL:77:tag",
                    authServiceUrl: c + "oauth/",
                    nativeURIPrefix: c + "native/execute/",
                },
                M = h.__assign(h.__assign({}, b), {
                    authServiceUrl: c + "oauth2/",
                    nativeURIPrefix:
                        "https://app.platform.proofspace.id/native/execute/",
                }),
                P = {
                    containerURIPrefix: S + "service-dashboard-backend/",
                    SSIAuthenticationCredDefId:
                        "Wv5tREzxvixFw9MpUxcu1J:3:CL:509:tag",
                    authServiceUrl: S + "oauth/",
                    nativeURIPrefix: S + "native/execute/",
                },
                A = h.__assign(h.__assign({}, P), {
                    authServiceUrl: S + "oauth2/",
                    nativeURIPrefix:
                        "https://app.test.proofspace.id/native/execute/",
                }),
                G = {
                    containerURIPrefix: u + "service-dashboard-backend/",
                    SSIAuthenticationCredDefId:
                        "Wv5tREzxvixFw9MpUxcu1J:3:CL:509:tag",
                    authServiceUrl: u + "oauth/",
                    nativeURIPrefix: u + "native/execute/",
                },
                p = h.__assign(h.__assign({}, G), {
                    authServiceUrl: u + "oauth2/",
                    nativeURIPrefix:
                        "https://app.stage.proofspace.id/native/execute/",
                });
            function B(e) {
                return "/" !== e[e.length - 1] ? e + "/" : e;
            }
            t.ENV = { PROD: M, STAGE: p, TEST: A };
            var C = function (e, t) {
                    t && t.class
                        ? e.setAttribute("class", t.class)
                        : e.removeAttribute("class"),
                        t && t.style
                            ? e.setAttribute("style", t.style)
                            : e.removeAttribute("style");
                },
                H = "display: none;",
                E = (function () {
                    function e() {
                        this.watchers = [];
                    }
                    return (
                        (e.instance = function () {
                            return this.inst || (this.inst = new this());
                        }),
                        (e.prototype.handleOpen = function (e) {
                            this.watchers.forEach(function (t) {
                                t !== e && t.close();
                            });
                        }),
                        (e.prototype.register = function (e) {
                            this.watchers.indexOf(e) < 0 &&
                                this.watchers.push(e);
                        }),
                        (e.prototype.unregister = function (e) {
                            var t = this.watchers.indexOf(e);
                            t >= 0 && this.watchers.splice(t, 1);
                        }),
                        e
                    );
                })(),
                v = (function () {
                    function e(e, t, n) {
                        var i = this;
                        (this.btn = e),
                            (this.popOver = t),
                            (this.openedStyle = n),
                            (this.opened = !1),
                            (this.onBtnClick = function (e) {
                                i.opened ||
                                    (e.stopPropagation(),
                                    (i.opened = !0),
                                    C(i.popOver, i.openedStyle),
                                    document.addEventListener(
                                        "click",
                                        i.onDocumentClick,
                                    ),
                                    E.instance().handleOpen(i),
                                    void 0 !== i.handler && i.handler());
                            }),
                            (this.onDocumentClick = function (e) {
                                i.opened
                                    ? i.popOver.contains(e.target) || i.close()
                                    : document.removeEventListener(
                                          "click",
                                          i.onDocumentClick,
                                      );
                            }),
                            C(this.popOver, { style: H }),
                            this.btn.addEventListener("click", this.onBtnClick),
                            E.instance().register(this);
                    }
                    return (
                        (e.prototype.destroy = function () {
                            document.removeEventListener(
                                "click",
                                this.onDocumentClick,
                            ),
                                this.btn.removeEventListener(
                                    "click",
                                    this.onBtnClick,
                                ),
                                E.instance().unregister(this);
                        }),
                        (e.prototype.onOpen = function (e) {
                            this.handler = e;
                        }),
                        (e.prototype.close = function () {
                            document.removeEventListener(
                                "click",
                                this.onDocumentClick,
                            ),
                                this.opened &&
                                    ((this.opened = !1),
                                    C(this.popOver, { style: H }));
                        }),
                        e
                    );
                })();
            (t.isMobile = function () {
                var e = new r.default(window.navigator.userAgent);
                return new Set(["AndroidOS", "iOS", "iPadOS"]).has(e.os());
            }),
                (t.isAndroid = function () {
                    return (
                        "AndroidOS" ===
                        new r.default(window.navigator.userAgent).os()
                    );
                });
            var m = (function () {
                function e() {
                    (this.api = new l()),
                        (this.ssiOauth = new T()),
                        (this.env = M),
                        (this.log = function (e) {
                            return console.log(e);
                        });
                }
                return (
                    (e.prototype.stop = function () {
                        this.popOverWatcher && this.popOverWatcher.destroy();
                    }),
                    (e.prototype.startWithSSIOAuth = function (e, t, n) {
                        return h.__awaiter(this, void 0, void 0, function () {
                            var i,
                                r = this;
                            return h.__generator(this, function (o) {
                                return (
                                    void 0 !== (i = h.__assign({}, t)).log &&
                                        (this.log = i.log),
                                    (i.popOverMode = !1),
                                    this.prepareElements(e, i),
                                    this.ssiOauth.onTimerUpdate(function (e) {
                                        return r.updateTimer(e);
                                    }),
                                    this.ssiOauth.onUserCodeReceived(
                                        function (e) {
                                            return h.__awaiter(
                                                r,
                                                void 0,
                                                void 0,
                                                function () {
                                                    var t;
                                                    return h.__generator(
                                                        this,
                                                        function (r) {
                                                            switch (r.label) {
                                                                case 0:
                                                                    return (
                                                                        this.log(
                                                                            "SSI OAuth user code received " +
                                                                                e,
                                                                        ),
                                                                        (t =
                                                                            n ||
                                                                            []).push(
                                                                            {
                                                                                credentialId:
                                                                                    this
                                                                                        .env
                                                                                        .SSIAuthenticationCredDefId,
                                                                                attributes:
                                                                                    [
                                                                                        {
                                                                                            name: "OAuth User Code",
                                                                                            value: e,
                                                                                        },
                                                                                    ],
                                                                            },
                                                                        ),
                                                                        [
                                                                            4,
                                                                            this.initElement(
                                                                                i,
                                                                                t,
                                                                                !1 !==
                                                                                    i.returnToBrowser
                                                                                    ? window
                                                                                          .location
                                                                                          .href
                                                                                    : void 0,
                                                                            ),
                                                                        ]
                                                                    );
                                                                case 1:
                                                                    return (
                                                                        r.sent(),
                                                                        [2]
                                                                    );
                                                            }
                                                        },
                                                    );
                                                },
                                            );
                                        },
                                    ),
                                    [
                                        2,
                                        this.ssiOauth.start({
                                            clientId: i.clientId,
                                            authServiceUrl:
                                                this.env.authServiceUrl,
                                            log: this.log,
                                        }),
                                    ]
                                );
                            });
                        });
                    }),
                    (e.prototype.start = function (e, n, i) {
                        return h.__awaiter(this, void 0, void 0, function () {
                            var r,
                                o,
                                a = this;
                            return h.__generator(this, function (s) {
                                switch (s.label) {
                                    case 0:
                                        return (
                                            void 0 !== n.log &&
                                                (this.log = n.log),
                                            (T = e),
                                            (l = n.qr),
                                            (c = {
                                                style:
                                                    "position: absolute; z-index: 100; left: 0px; top: " +
                                                    T.offsetHeight +
                                                    "px;",
                                            }),
                                            l &&
                                                l.style &&
                                                (c.style =
                                                    "" + c.style + l.style),
                                            l && l.class && (c.class = l.class),
                                            (r = c),
                                            this.prepareElements(e, n),
                                            n.popOverMode
                                                ? [3, 2]
                                                : [
                                                      4,
                                                      this.initElement(
                                                          n,
                                                          i || [],
                                                          n.returnToBrowser
                                                              ? window.location
                                                                    .href
                                                              : void 0,
                                                      ),
                                                  ]
                                        );
                                    case 1:
                                        return s.sent(), [3, 3];
                                    case 2:
                                        t.isMobile()
                                            ? ((o = function () {
                                                  return window.open(
                                                      a.getURI(
                                                          n,
                                                          i || [],
                                                          n.returnToBrowser
                                                              ? window.location
                                                                    .href
                                                              : void 0,
                                                      ),
                                                      n.button &&
                                                          n.button.target
                                                          ? n.button.target
                                                          : "_self",
                                                  );
                                              }),
                                              e.addEventListener("click", o))
                                            : ((this.popOverWatcher = new v(
                                                  e,
                                                  this.qrElement,
                                                  r,
                                              )),
                                              this.popOverWatcher.onOpen(
                                                  function () {
                                                      return a.initElement(
                                                          n,
                                                          i || [],
                                                          n.returnToBrowser
                                                              ? window.location
                                                                    .href
                                                              : void 0,
                                                      );
                                                  },
                                              )),
                                            (s.label = 3);
                                    case 3:
                                        return [2];
                                }
                                var T, l, c;
                            });
                        });
                    }),
                    (e.prototype.prepareElements = function (e, t) {
                        t.popOverMode || (e.innerHTML = ""),
                            this.setConfig(t),
                            this.api.init({
                                requestInstancesUri:
                                    "" +
                                    B(this.env.containerURIPrefix) +
                                    t.serviceDid +
                                    "/info/action-instances/" +
                                    t.interactionId,
                            }),
                            (this.qrElement = document.createElement("div")),
                            t.popOverMode ||
                                this.qrElement.setAttribute("style", H),
                            (this.canvasElement =
                                document.createElement("canvas")),
                            this.qrElement.appendChild(this.canvasElement),
                            (this.buttonElement =
                                document.createElement("button")),
                            this.buttonElement.setAttribute("style", H),
                            (this.timerElement = document.createElement("div")),
                            C(this.timerElement, t.timer),
                            this.qr && (this.qr = void 0),
                            e.appendChild(this.qrElement),
                            t.popOverMode ||
                                (e.appendChild(this.buttonElement),
                                e.appendChild(this.timerElement));
                    }),
                    (e.prototype.setConfig = function (e) {
                        e.size && (this.size = e.size),
                            e.env && (this.env = e.env);
                    }),
                    (e.prototype.initElement = function (e, n, i) {
                        return h.__awaiter(this, void 0, void 0, function () {
                            var r,
                                o = this;
                            return h.__generator(this, function (a) {
                                switch (a.label) {
                                    case 0:
                                        return t.isMobile()
                                            ? ((r = function () {
                                                  o.buttonElement.setAttribute(
                                                      "disabled",
                                                      "disabled",
                                                  ),
                                                      o.buttonElement.removeEventListener(
                                                          "click",
                                                          r,
                                                      ),
                                                      o.switchButtonToLoadingState(
                                                          e,
                                                      ),
                                                      window.open(
                                                          o.getURI(
                                                              e,
                                                              n || [],
                                                              i,
                                                          ),
                                                          e.button &&
                                                              e.button.target
                                                              ? e.button.target
                                                              : "_self",
                                                      );
                                              }),
                                              this.initButton(e),
                                              this.buttonElement.addEventListener(
                                                  "click",
                                                  r,
                                              ),
                                              [3, 3])
                                            : [3, 1];
                                    case 1:
                                        return (
                                            e.popOverMode ||
                                                C(this.qrElement, e.qr),
                                            [
                                                4,
                                                this.drawQrCode(
                                                    this.getURI(e, n),
                                                ),
                                            ]
                                        );
                                    case 2:
                                        a.sent(), (a.label = 3);
                                    case 3:
                                        return [2];
                                }
                            });
                        });
                    }),
                    (e.prototype.switchButtonToLoadingState = function (e) {
                        var t = e.loadingButton,
                            n = e.loadingText;
                        (this.buttonElement.innerHTML = ""),
                            t && C(this.buttonElement, t);
                        var i = document.createElement("span");
                        C(i, n),
                            (i.innerHTML =
                                n && n.text
                                    ? n.text
                                    : "Waiting for interaction..."),
                            this.buttonElement.appendChild(i);
                    }),
                    (e.prototype.initButton = function (e) {
                        var t = e.button;
                        if ((C(this.buttonElement, t), t && t.icon)) {
                            var n = document.createElement("div");
                            C(n, t.iconStyle);
                            var i = document.createElement("img");
                            i.setAttribute("src", t.icon),
                                n.appendChild(i),
                                this.buttonElement.appendChild(n);
                        }
                        var r = document.createElement("span");
                        t && C(r, t.textStyle),
                            (r.innerHTML =
                                t && t.text ? t.text : "Start interaction"),
                            this.buttonElement.appendChild(r);
                    }),
                    (e.prototype.getURI = function (e, n, i) {
                        var r = {
                            id: e.instanceId,
                            actionId: e.interactionId,
                            serviceDid: e.serviceDid,
                            preparedCredentials: n,
                        };
                        t.isMobile() &&
                            i &&
                            ((r.callback = this.prepareCallBack(i)),
                            this.log("Prepared callback " + r.callback)),
                            this.log("JSON is " + JSON.stringify(r));
                        var o = te.Base64.encode(
                            JSON.stringify(r),
                            !e.useBase64Unsafe,
                        );
                        return "" + B(this.env.nativeURIPrefix) + o;
                    }),
                    (e.prototype.prepareCallBack = function (e) {
                        return (
                            this.log("Source callback " + e),
                            (/Chrome/.test(navigator.userAgent) &&
                                /Google Inc/.test(navigator.vendor)) ||
                            navigator.userAgent.indexOf("CriOS") >= 0
                                ? (this.log("Chrome detected"),
                                  "googlechrome://")
                                : "/" === e.slice(-1)
                                  ? e.substr(0, e.length - 1)
                                  : e
                        );
                    }),
                    (e.prototype.drawQrCode = function (e) {
                        return h.__awaiter(this, void 0, void 0, function () {
                            var n;
                            return h.__generator(this, function (r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, t.wait(10)];
                                    case 1:
                                        return (
                                            r.sent(),
                                            (n = {
                                                element: this.canvasElement,
                                                value: e,
                                            }),
                                            this.size && (n.size = this.size),
                                            (this.qr = new i.default(n)),
                                            [2]
                                        );
                                }
                            });
                        });
                    }),
                    (e.prototype.updateTimer = function (e) {
                        this.timerElement && (this.timerElement.innerHTML = e);
                    }),
                    e
                );
            })();
            (t.PSWebLink = m), (t.WebLinker = new m());
        }),
        ie =
            (b = ne) &&
            b.__esModule &&
            Object.prototype.hasOwnProperty.call(b, "default")
                ? b.default
                : b,
        re = ne.WebLinker,
        oe = ne.PSWebLink,
        ae = ne.isAndroid,
        se = ne.isMobile,
        Te = ne.ENV,
        le = ne.wait,
        ce = ne.qrTest;
    return (
        (e.ENV = Te),
        (e.PSWebLink = oe),
        (e.WebLinker = re),
        (e.default = ie),
        (e.isAndroid = ae),
        (e.isMobile = se),
        (e.qrTest = ce),
        (e.wait = le),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        e
    );
})({});
