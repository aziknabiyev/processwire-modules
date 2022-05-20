var w, k, E, S, T, A, I, H, F, W, B, R, U, V, Y, J, Z, ee, te, ne, se, ae;

function C() {
	var e = .01 * window.innerHeight;
	document.documentElement.style.setProperty("--vh", e + "px")
}! function(e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (e.document) return t(e);
		throw new Error("jQuery requires a window with a document")
	} : t(e)
}("undefined" != typeof window ? window : this, function(C, B) {
	"use strict";

	function y(e) {
		return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
	}

	function g(e) {
		return null != e && e === e.window
	}
	var a = [],
		$ = Object.getPrototypeOf,
		f = a.slice,
		R = a.flat ? function(e) {
			return a.flat.call(e)
		} : function(e) {
			return a.concat.apply([], e)
		},
		U = a.push,
		V = a.indexOf,
		Y = {},
		J = Y.toString,
		Z = Y.hasOwnProperty,
		ee = Z.toString,
		te = ee.call(Object),
		m = {},
		k = C.document,
		ne = {
			type: !0,
			src: !0,
			nonce: !0,
			noModule: !0
		};

	function X(e, t, n) {
		var i, o, r = (n = n || k).createElement("script");
		if (r.text = e, t)
			for (i in ne)(o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
		n.head.appendChild(r).parentNode.removeChild(r)
	}

	function p(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Y[J.call(e)] || "object" : typeof e
	}
	var x = "3.6.0",
		E = function(e, t) {
			return new E.fn.init(e, t)
		};

	function Q(e) {
		var t = !!e && "length" in e && e.length,
			n = p(e);
		return !y(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
	}

	function i(e, t, n) {
		for (var i = [], o = void 0 !== n;
			(e = e[t]) && 9 !== e.nodeType;)
			if (1 === e.nodeType) {
				if (o && E(e).is(n)) break;
				i.push(e)
			} return i
	}

	function G(e, t) {
		for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
		return n
	}
	E.fn = E.prototype = {
		jquery: x,
		constructor: E,
		length: 0,
		toArray: function() {
			return f.call(this)
		},
		get: function(e) {
			return null == e ? f.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack: function(e) {
			return (e = E.merge(this.constructor(), e)).prevObject = this, e
		},
		each: function(e) {
			return E.each(this, e)
		},
		map: function(n) {
			return this.pushStack(E.map(this, function(e, t) {
				return n.call(e, t, e)
			}))
		},
		slice: function() {
			return this.pushStack(f.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		even: function() {
			return this.pushStack(E.grep(this, function(e, t) {
				return (t + 1) % 2
			}))
		},
		odd: function() {
			return this.pushStack(E.grep(this, function(e, t) {
				return t % 2
			}))
		},
		eq: function(e) {
			var t = this.length,
				e = +e + (e < 0 ? t : 0);
			return this.pushStack(0 <= e && e < t ? [this[e]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: U,
		sort: a.sort,
		splice: a.splice
	}, E.extend = E.fn.extend = function() {
		var e, t, n, i, o, r = arguments[0] || {},
			s = 1,
			a = arguments.length,
			l = !1;
		for ("boolean" == typeof r && (l = r, r = arguments[s] || {}, s++), "object" == typeof r || y(r) || (r = {}), s === a && (r = this, s--); s < a; s++)
			if (null != (e = arguments[s]))
				for (t in e) n = e[t], "__proto__" !== t && r !== n && (l && n && (E.isPlainObject(n) || (i = Array.isArray(n))) ? (o = r[t], o = i && !Array.isArray(o) ? [] : i || E.isPlainObject(o) ? o : {}, i = !1, r[t] = E.extend(l, o, n)) : void 0 !== n && (r[t] = n));
		return r
	}, E.extend({
		expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isPlainObject: function(e) {
			return !(!e || "[object Object]" !== J.call(e) || (e = $(e)) && ("function" != typeof(e = Z.call(e, "constructor") && e.constructor) || ee.call(e) !== te))
		},
		isEmptyObject: function(e) {
			for (var t in e) return !1;
			return !0
		},
		globalEval: function(e, t, n) {
			X(e, {
				nonce: t && t.nonce
			}, n)
		},
		each: function(e, t) {
			var n, i = 0;
			if (Q(e))
				for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
			else
				for (i in e)
					if (!1 === t.call(e[i], i, e[i])) break;
			return e
		},
		makeArray: function(e, t) {
			return t = t || [], null != e && (Q(Object(e)) ? E.merge(t, "string" == typeof e ? [e] : e) : U.call(t, e)), t
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : V.call(t, e, n)
		},
		merge: function(e, t) {
			for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
			return e.length = o, e
		},
		grep: function(e, t, n) {
			for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) != s && i.push(e[o]);
			return i
		},
		map: function(e, t, n) {
			var i, o, r = 0,
				s = [];
			if (Q(e))
				for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
			else
				for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
			return R(s)
		},
		guid: 1,
		support: m
	}), "function" == typeof Symbol && (E.fn[Symbol.iterator] = a[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
		Y["[object " + t + "]"] = t.toLowerCase()
	});
	var x = function(H) {
			function d(e, t) {
				return e = "0x" + e.slice(1) - 65536, t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
			}

			function O(e, t) {
				return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			}

			function M() {
				C()
			}
			var t, f, x, r, F, h, W, B, w, l, c, C, k, n, E, p, i, o, g, S = "sizzle" + +new Date,
				u = H.document,
				T = 0,
				$ = 0,
				R = L(),
				U = L(),
				X = L(),
				m = L(),
				V = function(e, t) {
					return e === t && (c = !0), 0
				},
				Q = {}.hasOwnProperty,
				s = [],
				G = s.pop,
				Y = s.push,
				D = s.push,
				K = s.slice,
				y = function(e, t) {
					for (var n = 0, i = e.length; n < i; n++)
						if (e[n] === t) return n;
					return -1
				},
				J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				a = "[\\x20\\t\\r\\n\\f]",
				v = "(?:\\\\[\\da-fA-F]{1,6}" + a + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
				Z = "\\[" + a + "*(" + v + ")(?:" + a + "*([*^$|!~]?=)" + a + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + v + "))|)" + a + "*\\]",
				ee = ":(" + v + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + Z + ")*)|.*)\\)|)",
				te = new RegExp(a + "+", "g"),
				b = new RegExp("^" + a + "+|((?:^|[^\\\\])(?:\\\\.)*)" + a + "+$", "g"),
				ne = new RegExp("^" + a + "*," + a + "*"),
				ie = new RegExp("^" + a + "*([>+~]|" + a + ")" + a + "*"),
				oe = new RegExp(a + "|>"),
				re = new RegExp(ee),
				se = new RegExp("^" + v + "$"),
				A = {
					ID: new RegExp("^#(" + v + ")"),
					CLASS: new RegExp("^\\.(" + v + ")"),
					TAG: new RegExp("^(" + v + "|[*])"),
					ATTR: new RegExp("^" + Z),
					PSEUDO: new RegExp("^" + ee),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + a + "*(even|odd|(([+-]|)(\\d*)n|)" + a + "*(?:([+-]|)" + a + "*(\\d+)|))" + a + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + J + ")$", "i"),
					needsContext: new RegExp("^" + a + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + a + "*((?:-\\d)?\\d*)" + a + "*\\)|)(?=[^-]|$)", "i")
				},
				ae = /HTML$/i,
				le = /^(?:input|select|textarea|button)$/i,
				ce = /^h\d$/i,
				j = /^[^{]+\{\s*\[native \w/,
				ue = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				de = /[+~]/,
				I = new RegExp("\\\\[\\da-fA-F]{1,6}" + a + "?|\\\\([^\\r\\n\\f])", "g"),
				fe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
				Ce = ye(function(e) {
					return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
				}, {
					dir: "parentNode",
					next: "legend"
				});
			try {
				D.apply(s = K.call(u.childNodes), u.childNodes), s[u.childNodes.length].nodeType
			} catch (t) {
				D = {
					apply: s.length ? function(e, t) {
						Y.apply(e, K.call(t))
					} : function(e, t) {
						for (var n = e.length, i = 0; e[n++] = t[i++];);
						e.length = n - 1
					}
				}
			}

			function _(e, t, n, i) {
				var o, r, s, a, l, c, u = t && t.ownerDocument,
					d = t ? t.nodeType : 9;
				if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
				if (!i && (C(t), t = t || k, E)) {
					if (11 !== d && (a = ue.exec(e)))
						if (o = a[1]) {
							if (9 === d) {
								if (!(c = t.getElementById(o))) return n;
								if (c.id === o) return n.push(c), n
							} else if (u && (c = u.getElementById(o)) && g(t, c) && c.id === o) return n.push(c), n
						} else {
							if (a[2]) return D.apply(n, t.getElementsByTagName(e)), n;
							if ((o = a[3]) && f.getElementsByClassName && t.getElementsByClassName) return D.apply(n, t.getElementsByClassName(o)), n
						} if (f.qsa && !m[e + " "] && (!p || !p.test(e)) && (1 !== d || "object" !== t.nodeName.toLowerCase())) {
						if (c = e, u = t, 1 === d && (oe.test(e) || ie.test(e))) {
							for ((u = de.test(e) && me(t.parentNode) || t) === t && f.scope || ((s = t.getAttribute("id")) ? s = s.replace(fe, O) : t.setAttribute("id", s = S)), r = (l = h(e)).length; r--;) l[r] = (s ? "#" + s : ":scope") + " " + z(l[r]);
							c = l.join(",")
						}
						try {
							return D.apply(n, u.querySelectorAll(c)), n
						} catch (t) {
							m(e, !0)
						} finally {
							s === S && t.removeAttribute("id")
						}
					}
				}
				return B(e.replace(b, "$1"), t, n, i)
			}

			function L() {
				var i = [];
				return function e(t, n) {
					return i.push(t + " ") > x.cacheLength && delete e[i.shift()], e[t + " "] = n
				}
			}

			function N(e) {
				return e[S] = !0, e
			}

			function P(e) {
				var t = k.createElement("fieldset");
				try {
					return !!e(t)
				} catch (e) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t)
				}
			}

			function he(e, t) {
				for (var n = e.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = t
			}

			function pe(e, t) {
				var n = t && e,
					i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
				if (i) return i;
				if (n)
					for (; n = n.nextSibling;)
						if (n === t) return -1;
				return e ? 1 : -1
			}

			function ge(t) {
				return function(e) {
					return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Ce(e) === t : e.disabled === t : "label" in e && e.disabled === t
				}
			}

			function q(s) {
				return N(function(r) {
					return r = +r, N(function(e, t) {
						for (var n, i = s([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
					})
				})
			}

			function me(e) {
				return e && void 0 !== e.getElementsByTagName && e
			}
			for (t in f = _.support = {}, F = _.isXML = function(e) {
					var t = e && e.namespaceURI,
						e = e && (e.ownerDocument || e).documentElement;
					return !ae.test(t || e && e.nodeName || "HTML")
				}, C = _.setDocument = function(e) {
					var e;
					return (e = e ? e.ownerDocument || e : u) != k && 9 === e.nodeType && e.documentElement && (n = (k = e).documentElement, E = !F(k), u != k && (e = k.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", M, !1) : e.attachEvent && e.attachEvent("onunload", M)), f.scope = P(function(e) {
						return n.appendChild(e).appendChild(k.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
					}), f.attributes = P(function(e) {
						return e.className = "i", !e.getAttribute("className")
					}), f.getElementsByTagName = P(function(e) {
						return e.appendChild(k.createComment("")), !e.getElementsByTagName("*").length
					}), f.getElementsByClassName = j.test(k.getElementsByClassName), f.getById = P(function(e) {
						return n.appendChild(e).id = S, !k.getElementsByName || !k.getElementsByName(S).length
					}), f.getById ? (x.filter.ID = function(e) {
						var t = e.replace(I, d);
						return function(e) {
							return e.getAttribute("id") === t
						}
					}, x.find.ID = function(e, t) {
						if (void 0 !== t.getElementById && E) return (t = t.getElementById(e)) ? [t] : []
					}) : (x.filter.ID = function(e) {
						var t = e.replace(I, d);
						return function(e) {
							return (e = void 0 !== e.getAttributeNode && e.getAttributeNode("id")) && e.value === t
						}
					}, x.find.ID = function(e, t) {
						if (void 0 !== t.getElementById && E) {
							var n, i, o, r = t.getElementById(e);
							if (r) {
								if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
								for (o = t.getElementsByName(e), i = 0; r = o[i++];)
									if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
							}
							return []
						}
					}), x.find.TAG = f.getElementsByTagName ? function(e, t) {
						return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
					} : function(e, t) {
						var n, i = [],
							o = 0,
							r = t.getElementsByTagName(e);
						if ("*" !== e) return r;
						for (; n = r[o++];) 1 === n.nodeType && i.push(n);
						return i
					}, x.find.CLASS = f.getElementsByClassName && function(e, t) {
						if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e)
					}, i = [], p = [], (f.qsa = j.test(k.querySelectorAll)) && (P(function(e) {
						var t;
						n.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && p.push("[*^$]=" + a + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || p.push("\\[" + a + "*(?:value|" + J + ")"), e.querySelectorAll("[id~=" + S + "-]").length || p.push("~="), (t = k.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || p.push("\\[" + a + "*name" + a + "*=" + a + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || p.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || p.push(".#.+[+~]"), e.querySelectorAll("\\\f"), p.push("[\\r\\n\\f]")
					}), P(function(e) {
						e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
						var t = k.createElement("input");
						t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && p.push("name" + a + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && p.push(":enabled", ":disabled"), n.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), p.push(",.*:")
					})), (f.matchesSelector = j.test(o = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.msMatchesSelector)) && P(function(e) {
						f.disconnectedMatch = o.call(e, "*"), o.call(e, "[s!='']:x"), i.push("!=", ee)
					}), p = p.length && new RegExp(p.join("|")), i = i.length && new RegExp(i.join("|")), e = j.test(n.compareDocumentPosition), g = e || j.test(n.contains) ? function(e, t) {
						var n = 9 === e.nodeType ? e.documentElement : e,
							t;
						return e === (t = t && t.parentNode) || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
					} : function(e, t) {
						if (t)
							for (; t = t.parentNode;)
								if (t === e) return !0;
						return !1
					}, V = e ? function(e, t) {
						return e === t ? (c = !0, 0) : !e.compareDocumentPosition - !t.compareDocumentPosition || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e == k || e.ownerDocument == u && g(u, e) ? -1 : t == k || t.ownerDocument == u && g(u, t) ? 1 : l ? y(l, e) - y(l, t) : 0 : 4 & n ? -1 : 1);
						var n
					} : function(e, t) {
						if (e === t) return c = !0, 0;
						var n, i = 0,
							o = e.parentNode,
							r = t.parentNode,
							s = [e],
							a = [t];
						if (!o || !r) return e == k ? -1 : t == k ? 1 : o ? -1 : r ? 1 : l ? y(l, e) - y(l, t) : 0;
						if (o === r) return pe(e, t);
						for (n = e; n = n.parentNode;) s.unshift(n);
						for (n = t; n = n.parentNode;) a.unshift(n);
						for (; s[i] === a[i];) i++;
						return i ? pe(s[i], a[i]) : s[i] == u ? -1 : a[i] == u ? 1 : 0
					}), k
				}, _.matches = function(e, t) {
					return _(e, null, null, t)
				}, _.matchesSelector = function(e, t) {
					if (C(e), f.matchesSelector && E && !m[t + " "] && (!i || !i.test(t)) && (!p || !p.test(t))) try {
						var n = o.call(e, t);
						if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
					} catch (e) {
						m(t, !0)
					}
					return 0 < _(t, k, null, [e]).length
				}, _.contains = function(e, t) {
					return (e.ownerDocument || e) != k && C(e), g(e, t)
				}, _.attr = function(e, t) {
					(e.ownerDocument || e) != k && C(e);
					var n = x.attrHandle[t.toLowerCase()],
						n;
					return void 0 !== (n = n && Q.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0) ? n : f.attributes || !E ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
				}, _.escape = function(e) {
					return (e + "").replace(fe, O)
				}, _.error = function(e) {
					throw new Error("Syntax error, unrecognized expression: " + e)
				}, _.uniqueSort = function(e) {
					var t, n = [],
						i = 0,
						o = 0;
					if (c = !f.detectDuplicates, l = !f.sortStable && e.slice(0), e.sort(V), c) {
						for (; t = e[o++];) t === e[o] && (i = n.push(o));
						for (; i--;) e.splice(n[i], 1)
					}
					return l = null, e
				}, r = _.getText = function(e) {
					var t, n = "",
						i = 0,
						o = e.nodeType;
					if (o) {
						if (1 === o || 9 === o || 11 === o) {
							if ("string" == typeof e.textContent) return e.textContent;
							for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
						} else if (3 === o || 4 === o) return e.nodeValue
					} else
						for (; t = e[i++];) n += r(t);
					return n
				}, (x = _.selectors = {
					cacheLength: 50,
					createPseudo: N,
					match: A,
					attrHandle: {},
					find: {},
					relative: {
						">": {
							dir: "parentNode",
							first: !0
						},
						" ": {
							dir: "parentNode"
						},
						"+": {
							dir: "previousSibling",
							first: !0
						},
						"~": {
							dir: "previousSibling"
						}
					},
					preFilter: {
						ATTR: function(e) {
							return e[1] = e[1].replace(I, d), e[3] = (e[3] || e[4] || e[5] || "").replace(I, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
						},
						CHILD: function(e) {
							return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || _.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && _.error(e[0]), e
						},
						PSEUDO: function(e) {
							var t, n = !e[6] && e[2];
							return A.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && re.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
						}
					},
					filter: {
						TAG: function(e) {
							var t = e.replace(I, d).toLowerCase();
							return "*" === e ? function() {
								return !0
							} : function(e) {
								return e.nodeName && e.nodeName.toLowerCase() === t
							}
						},
						CLASS: function(e) {
							var t = R[e + " "];
							return t || (t = new RegExp("(^|" + a + ")" + e + "(" + a + "|$)")) && R(e, function(e) {
								return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
							})
						},
						ATTR: function(t, n, i) {
							return function(e) {
								return null == (e = _.attr(e, t)) ? "!=" === n : !n || (e += "", "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e.replace(te, " ") + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"))
							}
						},
						CHILD: function(p, e, t, g, m) {
							var v = "nth" !== p.slice(0, 3),
								y = "last" !== p.slice(-4),
								b = "of-type" === e;
							return 1 === g && 0 === m ? function(e) {
								return !!e.parentNode
							} : function(e, t, n) {
								var i, o, r, s, a, l, c = v != y ? "nextSibling" : "previousSibling",
									u = e.parentNode,
									d = b && e.nodeName.toLowerCase(),
									f = !n && !b,
									h = !1;
								if (u) {
									if (v) {
										for (; c;) {
											for (s = e; s = s[c];)
												if (b ? s.nodeName.toLowerCase() === d : 1 === s.nodeType) return !1;
											l = c = "only" === p && !l && "nextSibling"
										}
										return !0
									}
									if (l = [y ? u.firstChild : u.lastChild], y && f) {
										for (h = (a = (i = (o = (r = (s = u)[S] || (s[S] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] || [])[0] === T && i[1]) && i[2], s = a && u.childNodes[a]; s = ++a && s && s[c] || (h = a = 0) || l.pop();)
											if (1 === s.nodeType && ++h && s === e) {
												o[p] = [T, a, h];
												break
											}
									} else if (!1 === (h = f ? a = (i = (o = (r = (s = e)[S] || (s[S] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] || [])[0] === T && i[1] : h))
										for (;
											(s = ++a && s && s[c] || (h = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++h || (f && ((o = (r = s[S] || (s[S] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] = [T, h]), s !== e)););
									return (h -= m) === g || h % g == 0 && 0 <= h / g
								}
							}
						},
						PSEUDO: function(e, r) {
							var t, s = x.pseudos[e] || x.setFilters[e.toLowerCase()] || _.error("unsupported pseudo: " + e);
							return s[S] ? s(r) : 1 < s.length ? (t = [e, e, "", r], x.setFilters.hasOwnProperty(e.toLowerCase()) ? N(function(e, t) {
								for (var n, i = s(e, r), o = i.length; o--;) e[n = y(e, i[o])] = !(t[n] = i[o])
							}) : function(e) {
								return s(e, 0, t)
							}) : s
						}
					},
					pseudos: {
						not: N(function(e) {
							var i = [],
								o = [],
								a = W(e.replace(b, "$1"));
							return a[S] ? N(function(e, t, n, i) {
								for (var o, r = a(e, null, i, []), s = e.length; s--;)(o = r[s]) && (e[s] = !(t[s] = o))
							}) : function(e, t, n) {
								return i[0] = e, a(i, null, n, o), i[0] = null, !o.pop()
							}
						}),
						has: N(function(t) {
							return function(e) {
								return 0 < _(t, e).length
							}
						}),
						contains: N(function(t) {
							return t = t.replace(I, d),
								function(e) {
									return -1 < (e.textContent || r(e)).indexOf(t)
								}
						}),
						lang: N(function(n) {
							return se.test(n || "") || _.error("unsupported lang: " + n), n = n.replace(I, d).toLowerCase(),
								function(e) {
									var t;
									do {
										if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
									} while ((e = e.parentNode) && 1 === e.nodeType);
									return !1
								}
						}),
						target: function(e) {
							var t = H.location && H.location.hash;
							return t && t.slice(1) === e.id
						},
						root: function(e) {
							return e === n
						},
						focus: function(e) {
							return e === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
						},
						enabled: ge(!1),
						disabled: ge(!0),
						checked: function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && !!e.checked || "option" === t && !!e.selected
						},
						selected: function(e) {
							return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
						},
						empty: function(e) {
							for (e = e.firstChild; e; e = e.nextSibling)
								if (e.nodeType < 6) return !1;
							return !0
						},
						parent: function(e) {
							return !x.pseudos.empty(e)
						},
						header: function(e) {
							return ce.test(e.nodeName)
						},
						input: function(e) {
							return le.test(e.nodeName)
						},
						button: function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && "button" === e.type || "button" === t
						},
						text: function(e) {
							return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
						},
						first: q(function() {
							return [0]
						}),
						last: q(function(e, t) {
							return [t - 1]
						}),
						eq: q(function(e, t, n) {
							return [n < 0 ? n + t : n]
						}),
						even: q(function(e, t) {
							for (var n = 0; n < t; n += 2) e.push(n);
							return e
						}),
						odd: q(function(e, t) {
							for (var n = 1; n < t; n += 2) e.push(n);
							return e
						}),
						lt: q(function(e, t, n) {
							for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
							return e
						}),
						gt: q(function(e, t, n) {
							for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
							return e
						})
					}
				}).pseudos.nth = x.pseudos.eq, {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) x.pseudos[t] = function(t) {
				return function(e) {
					return "input" === e.nodeName.toLowerCase() && e.type === t
				}
			}(t);
			for (t in {
					submit: !0,
					reset: !0
				}) x.pseudos[t] = function(n) {
				return function(e) {
					var t = e.nodeName.toLowerCase();
					return ("input" === t || "button" === t) && e.type === n
				}
			}(t);

			function ve() {}

			function z(e) {
				for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
				return i
			}

			function ye(s, e, t) {
				var a = e.dir,
					l = e.next,
					c = l || a,
					u = t && "parentNode" === c,
					d = $++;
				return e.first ? function(e, t, n) {
					for (; e = e[a];)
						if (1 === e.nodeType || u) return s(e, t, n);
					return !1
				} : function(e, t, n) {
					var i, o, r = [T, d];
					if (n) {
						for (; e = e[a];)
							if ((1 === e.nodeType || u) && s(e, t, n)) return !0
					} else
						for (; e = e[a];)
							if (1 === e.nodeType || u)
								if (o = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[a] || e;
								else {
									if ((i = o[c]) && i[0] === T && i[1] === d) return r[2] = i[2];
									if ((o[c] = r)[2] = s(e, t, n)) return !0
								} return !1
				}
			}

			function be(o) {
				return 1 < o.length ? function(e, t, n) {
					for (var i = o.length; i--;)
						if (!o[i](e, t, n)) return !1;
					return !0
				} : o[0]
			}

			function xe(e, t, n, i, o) {
				for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++) !(r = e[a]) || n && !n(r, i, o) || (s.push(r), c && t.push(a));
				return s
			}

			function we(e) {
				for (var i, t, n, o = e.length, r = x.relative[e[0].type], s = r || x.relative[" "], a = r ? 1 : 0, l = ye(function(e) {
						return e === i
					}, s, !0), c = ye(function(e) {
						return -1 < y(i, e)
					}, s, !0), u = [function(e, t, n) {
						return e = !r && (n || t !== w) || ((i = t).nodeType ? l : c)(e, t, n), i = null, e
					}]; a < o; a++)
					if (t = x.relative[e[a].type]) u = [ye(be(u), t)];
					else {
						if ((t = x.filter[e[a].type].apply(null, e[a].matches))[S]) {
							for (n = ++a; n < o && !x.relative[e[n].type]; n++);
							return function e(h, p, g, m, v, t) {
								return m && !m[S] && (m = e(m)), v && !v[S] && (v = e(v, t)), N(function(e, t, n, i) {
									var o, r, s, a = [],
										l = [],
										c = t.length,
										u = e || function(e, t, n) {
											for (var i = 0, o = t.length; i < o; i++) _(e, t[i], n);
											return n
										}(p || "*", n.nodeType ? [n] : n, []),
										d = !h || !e && p ? u : xe(u, a, h, n, i),
										f = g ? v || (e ? h : c || m) ? [] : t : d;
									if (g && g(d, f, n, i), m)
										for (o = xe(f, l), m(o, [], n, i), r = o.length; r--;)(s = o[r]) && (f[l[r]] = !(d[l[r]] = s));
									if (e) {
										if (v || h) {
											if (v) {
												for (o = [], r = f.length; r--;)(s = f[r]) && o.push(d[r] = s);
												v(null, f = [], o, i)
											}
											for (r = f.length; r--;)(s = f[r]) && -1 < (o = v ? y(e, s) : a[r]) && (e[o] = !(t[o] = s))
										}
									} else f = xe(f === t ? f.splice(c, f.length) : f), v ? v(null, t, f, i) : D.apply(t, f)
								})
							}(1 < a && be(u), 1 < a && z(e.slice(0, a - 1).concat({
								value: " " === e[a - 2].type ? "*" : ""
							})).replace(b, "$1"), t, a < n && we(e.slice(a, n)), n < o && we(e = e.slice(n)), n < o && z(e))
						}
						u.push(t)
					} return be(u)
			}
			return ve.prototype = x.filters = x.pseudos, x.setFilters = new ve, h = _.tokenize = function(e, t) {
				var n, i, o, r, s, a, l, c = U[e + " "];
				if (c) return t ? 0 : c.slice(0);
				for (s = e, a = [], l = x.preFilter; s;) {
					for (r in n && !(i = ne.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = ie.exec(s)) && (n = i.shift(), o.push({
							value: n,
							type: i[0].replace(b, " ")
						}), s = s.slice(n.length)), x.filter) !(i = A[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
						value: n,
						type: r,
						matches: i
					}), s = s.slice(n.length));
					if (!n) break
				}
				return t ? s.length : s ? _.error(e) : U(e, a).slice(0)
			}, W = _.compile = function(e, t) {
				var n, m, v, y, b, i, o = [],
					r = [],
					s = X[e + " "];
				if (!s) {
					for (n = (t = t || h(e)).length; n--;)((s = we(t[n]))[S] ? o : r).push(s);
					(s = X(e, (y = 0 < (v = o).length, b = 0 < (m = r).length, i = function(e, t, n, i, o) {
						var r, s, a, l = 0,
							c = "0",
							u = e && [],
							d = [],
							f = w,
							h = e || b && x.find.TAG("*", o),
							p = T += null == f ? 1 : Math.random() || .1,
							g = h.length;
						for (o && (w = t == k || t || o); c !== g && null != (r = h[c]); c++) {
							if (b && r) {
								for (s = 0, t || r.ownerDocument == k || (C(r), n = !E); a = m[s++];)
									if (a(r, t || k, n)) {
										i.push(r);
										break
									} o && (T = p)
							}
							y && ((r = !a && r) && l--, e && u.push(r))
						}
						if (l += c, y && c !== l) {
							for (s = 0; a = v[s++];) a(u, d, t, n);
							if (e) {
								if (0 < l)
									for (; c--;) u[c] || d[c] || (d[c] = G.call(i));
								d = xe(d)
							}
							D.apply(i, d), o && !e && 0 < d.length && 1 < l + v.length && _.uniqueSort(i)
						}
						return o && (T = p, w = f), u
					}, y ? N(i) : i))).selector = e
				}
				return s
			}, B = _.select = function(e, t, n, i) {
				var o, r, s, a, l, c = "function" == typeof e && e,
					u = !i && h(e = c.selector || e);
				if (n = n || [], 1 === u.length) {
					if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === t.nodeType && E && x.relative[r[1].type]) {
						if (!(t = (x.find.ID(s.matches[0].replace(I, d), t) || [])[0])) return n;
						c && (t = t.parentNode), e = e.slice(r.shift().value.length)
					}
					for (o = A.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !x.relative[a = s.type]);)
						if ((l = x.find[a]) && (i = l(s.matches[0].replace(I, d), de.test(r[0].type) && me(t.parentNode) || t))) {
							if (r.splice(o, 1), e = i.length && z(r)) break;
							return D.apply(n, i), n
						}
				}
				return (c || W(e, u))(i, t, !E, n, !t || de.test(e) && me(t.parentNode) || t), n
			}, f.sortStable = S.split("").sort(V).join("") === S, f.detectDuplicates = !!c, C(), f.sortDetached = P(function(e) {
				return 1 & e.compareDocumentPosition(k.createElement("fieldset"))
			}), P(function(e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || he("type|href|height|width", function(e, t, n) {
				if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), f.attributes && P(function(e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || he("value", function(e, t, n) {
				if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
			}), P(function(e) {
				return null == e.getAttribute("disabled")
			}) || he(J, function(e, t, n) {
				if (!n) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
			}), _
		}(C),
		se = (E.find = x, E.expr = x.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = x.uniqueSort, E.text = x.getText, E.isXMLDoc = x.isXML, E.contains = x.contains, E.escapeSelector = x.escape, E.expr.match.needsContext);

	function l(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}
	var ae = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function K(e, n, i) {
		return y(n) ? E.grep(e, function(e, t) {
			return !!n.call(e, t, e) !== i
		}) : n.nodeType ? E.grep(e, function(e) {
			return e === n !== i
		}) : "string" != typeof n ? E.grep(e, function(e) {
			return -1 < V.call(n, e) !== i
		}) : E.filter(n, e, i)
	}
	E.filter = function(e, t, n) {
		var i = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? E.find.matchesSelector(i, e) ? [i] : [] : E.find.matches(e, E.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, E.fn.extend({
		find: function(e) {
			var t, n, i = this.length,
				o = this;
			if ("string" != typeof e) return this.pushStack(E(e).filter(function() {
				for (t = 0; t < i; t++)
					if (E.contains(o[t], this)) return !0
			}));
			for (n = this.pushStack([]), t = 0; t < i; t++) E.find(e, o[t], n);
			return 1 < i ? E.uniqueSort(n) : n
		},
		filter: function(e) {
			return this.pushStack(K(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(K(this, e || [], !0))
		},
		is: function(e) {
			return !!K(this, "string" == typeof e && se.test(e) ? E(e) : e || [], !1).length
		}
	});
	var ce, ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
		he = ((E.fn.init = function(e, t, n) {
			if (!e) return this;
			if (n = n || ce, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this);
			if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : ue.exec(e)) || !i[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
			if (i[1]) {
				if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : k, !0)), ae.test(i[1]) && E.isPlainObject(t))
					for (var i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
				return this
			}
			return (n = k.getElementById(i[2])) && (this[0] = n, this.length = 1), this
		}).prototype = E.fn, ce = E(k), /^(?:parents|prev(?:Until|All))/),
		pe = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function ie(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}
	E.fn.extend({
		has: function(e) {
			var t = E(e, this),
				n = t.length;
			return this.filter(function() {
				for (var e = 0; e < n; e++)
					if (E.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			var n, i = 0,
				o = this.length,
				r = [],
				s = "string" != typeof e && E(e);
			if (!se.test(e))
				for (; i < o; i++)
					for (n = this[i]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
							r.push(n);
							break
						} return this.pushStack(1 < r.length ? E.uniqueSort(r) : r)
		},
		index: function(e) {
			return e ? "string" == typeof e ? V.call(E(e), this[0]) : V.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), E.each({
		parent: function(e) {
			return (e = e.parentNode) && 11 !== e.nodeType ? e : null
		},
		parents: function(e) {
			return i(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return i(e, "parentNode", n)
		},
		next: function(e) {
			return ie(e, "nextSibling")
		},
		prev: function(e) {
			return ie(e, "previousSibling")
		},
		nextAll: function(e) {
			return i(e, "nextSibling")
		},
		prevAll: function(e) {
			return i(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return i(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return i(e, "previousSibling", n)
		},
		siblings: function(e) {
			return G((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return G(e.firstChild)
		},
		contents: function(e) {
			return null != e.contentDocument && $(e.contentDocument) ? e.contentDocument : (l(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
		}
	}, function(i, o) {
		E.fn[i] = function(e, t) {
			var n = E.map(this, o, e);
			return (t = "Until" !== i.slice(-5) ? e : t) && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (pe[i] || E.uniqueSort(n), he.test(i) && n.reverse()), this.pushStack(n)
		}
	});
	var S = /[^\x20\t\r\n\f]+/g;

	function u(e) {
		return e
	}

	function oe(e) {
		throw e
	}

	function re(e, t, n, i) {
		var o;
		try {
			e && y(o = e.promise) ? o.call(e).done(t).fail(n) : e && y(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
		} catch (e) {
			n.apply(void 0, [e])
		}
	}
	E.Callbacks = function(i) {
		var e, r;

		function o() {
			for (l = l || i.once, a = s = !0; u.length; d = -1)
				for (t = u.shift(); ++d < c.length;) !1 === c[d].apply(t[0], t[1]) && i.stopOnFalse && (d = c.length, t = !1);
			i.memory || (t = !1), s = !1, l && (c = t ? [] : "")
		}
		i = "string" == typeof i ? (e = i, r = {}, E.each(e.match(S) || [], function(e, t) {
			r[t] = !0
		}), r) : E.extend({}, i);
		var s, t, a, l, c = [],
			u = [],
			d = -1,
			f = {
				add: function() {
					return c && (t && !s && (d = c.length - 1, u.push(t)), function n(e) {
						E.each(e, function(e, t) {
							y(t) ? i.unique && f.has(t) || c.push(t) : t && t.length && "string" !== p(t) && n(t)
						})
					}(arguments), t && !s && o()), this
				},
				remove: function() {
					return E.each(arguments, function(e, t) {
						for (var n; - 1 < (n = E.inArray(t, c, n));) c.splice(n, 1), n <= d && d--
					}), this
				},
				has: function(e) {
					return e ? -1 < E.inArray(e, c) : 0 < c.length
				},
				empty: function() {
					return c = c && [], this
				},
				disable: function() {
					return l = u = [], c = t = "", this
				},
				disabled: function() {
					return !c
				},
				lock: function() {
					return l = u = [], t || s || (c = t = ""), this
				},
				locked: function() {
					return !!l
				},
				fireWith: function(e, t) {
					return l || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), s || o()), this
				},
				fire: function() {
					return f.fireWith(this, arguments), this
				},
				fired: function() {
					return !!a
				}
			};
		return f
	}, E.extend({
		Deferred: function(e) {
			var r = [
					["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
					["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
				],
				o = "pending",
				s = {
					state: function() {
						return o
					},
					always: function() {
						return a.done(arguments).fail(arguments), this
					},
					catch: function(e) {
						return s.then(null, e)
					},
					pipe: function() {
						var o = arguments;
						return E.Deferred(function(i) {
							E.each(r, function(e, t) {
								var n = y(o[t[4]]) && o[t[4]];
								a[t[1]](function() {
									var e = n && n.apply(this, arguments);
									e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
								})
							}), o = null
						}).promise()
					},
					then: function(t, n, i) {
						var l = 0;

						function c(o, r, s, a) {
							return function() {
								function e() {
									var e, t;
									if (!(o < l)) {
										if ((e = s.apply(n, i)) === r.promise()) throw new TypeError("Thenable self-resolution");
										y(t = e && ("object" == typeof e || "function" == typeof e) && e.then) ? a ? t.call(e, c(l, r, u, a), c(l, r, oe, a)) : (l++, t.call(e, c(l, r, u, a), c(l, r, oe, a), c(l, r, u, r.notifyWith))) : (s !== u && (n = void 0, i = [e]), (a || r.resolveWith)(n, i))
									}
								}
								var n = this,
									i = arguments,
									t = a ? e : function() {
										try {
											e()
										} catch (e) {
											E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), l <= o + 1 && (s !== oe && (n = void 0, i = [e]), r.rejectWith(n, i))
										}
									};
								o ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), C.setTimeout(t))
							}
						}
						return E.Deferred(function(e) {
							r[0][3].add(c(0, e, y(i) ? i : u, e.notifyWith)), r[1][3].add(c(0, e, y(t) ? t : u)), r[2][3].add(c(0, e, y(n) ? n : oe))
						}).promise()
					},
					promise: function(e) {
						return null != e ? E.extend(e, s) : s
					}
				},
				a = {};
			return E.each(r, function(e, t) {
				var n = t[2],
					i = t[5];
				s[t[1]] = n.add, i && n.add(function() {
					o = i
				}, r[3 - e][2].disable, r[3 - e][3].disable, r[0][2].lock, r[0][3].lock), n.add(t[3].fire), a[t[0]] = function() {
					return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
				}, a[t[0] + "With"] = n.fireWith
			}), s.promise(a), e && e.call(a, a), a
		},
		when: function(e) {
			function t(t) {
				return function(e) {
					o[t] = this, r[t] = 1 < arguments.length ? f.call(arguments) : e, --n || s.resolveWith(o, r)
				}
			}
			var n = arguments.length,
				i = n,
				o = Array(i),
				r = f.call(arguments),
				s = E.Deferred();
			if (n <= 1 && (re(e, s.done(t(i)).resolve, s.reject, !n), "pending" === s.state() || y(r[i] && r[i].then))) return s.then();
			for (; i--;) re(r[i], t(i), s.reject);
			return s.promise()
		}
	});
	var ve = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
		ye = (E.Deferred.exceptionHook = function(e, t) {
			C.console && C.console.warn && e && ve.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
		}, E.readyException = function(e) {
			C.setTimeout(function() {
				throw e
			})
		}, E.Deferred());

	function le() {
		k.removeEventListener("DOMContentLoaded", le), C.removeEventListener("load", le), E.ready()
	}

	function d(e, t, n, i, o, r, s) {
		var a = 0,
			l = e.length,
			c = null == n;
		if ("object" === p(n))
			for (a in o = !0, n) d(e, t, a, n[a], !0, r, s);
		else if (void 0 !== i && (o = !0, y(i) || (s = !0), t = c ? s ? (t.call(e, i), null) : (c = t, function(e, t, n) {
				return c.call(E(e), n)
			}) : t))
			for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
		return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
	}
	E.fn.ready = function(e) {
		return ye.then(e).catch(function(e) {
			E.readyException(e)
		}), this
	}, E.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(e) {
			(!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || ye.resolveWith(k, [E])
		}
	}), E.ready.then = ye.then, "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? C.setTimeout(E.ready) : (k.addEventListener("DOMContentLoaded", le), C.addEventListener("load", le));
	var xe = /^-ms-/,
		we = /-([a-z])/g;

	function de(e, t) {
		return t.toUpperCase()
	}

	function b(e) {
		return e.replace(xe, "ms-").replace(we, de)
	}

	function v(e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	}

	function fe() {
		this.expando = E.expando + fe.uid++
	}
	fe.uid = 1, fe.prototype = {
		cache: function(e) {
			var t = e[this.expando];
			return t || (t = {}, v(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function(e, t, n) {
			var i, o = this.cache(e);
			if ("string" == typeof t) o[b(t)] = n;
			else
				for (i in t) o[b(i)] = t[i];
			return o
		},
		get: function(e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][b(t)]
		},
		access: function(e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, i = e[this.expando];
			if (void 0 !== i) {
				if (void 0 !== t) {
					n = (t = Array.isArray(t) ? t.map(b) : (t = b(t)) in i ? [t] : t.match(S) || []).length;
					for (; n--;) delete i[t[n]]
				}
				void 0 !== t && !E.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function(e) {
			return void 0 !== (e = e[this.expando]) && !E.isEmptyObject(e)
		}
	};
	var T = new fe,
		A = new fe,
		Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Ee = /[A-Z]/g;

	function ge(e, t, n) {
		var i, o;
		if (void 0 === n && 1 === e.nodeType)
			if (i = "data-" + t.replace(Ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
				try {
					n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : Ce.test(o) ? JSON.parse(o) : o)
				} catch (e) {}
				A.set(e, t, n)
			} else n = void 0;
		return n
	}

	function me(e, t) {
		return "none" === (e = t || e).style.display || "" === e.style.display && I(e) && "none" === E.css(e, "display")
	}
	E.extend({
		hasData: function(e) {
			return A.hasData(e) || T.hasData(e)
		},
		data: function(e, t, n) {
			return A.access(e, t, n)
		},
		removeData: function(e, t) {
			A.remove(e, t)
		},
		_data: function(e, t, n) {
			return T.access(e, t, n)
		},
		_removeData: function(e, t) {
			T.remove(e, t)
		}
	}), E.fn.extend({
		data: function(n, e) {
			var t, i, o, r = this[0],
				s = r && r.attributes;
			if (void 0 !== n) return "object" == typeof n ? this.each(function() {
				A.set(this, n)
			}) : d(this, function(e) {
				var t;
				if (r && void 0 === e) return void 0 !== (t = A.get(r, n)) || void 0 !== (t = ge(r, n)) ? t : void 0;
				this.each(function() {
					A.set(this, n, e)
				})
			}, null, e, 1 < arguments.length, null, !0);
			if (this.length && (o = A.get(r), 1 === r.nodeType && !T.get(r, "hasDataAttrs"))) {
				for (t = s.length; t--;) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = b(i.slice(5)), ge(r, i, o[i]));
				T.set(r, "hasDataAttrs", !0)
			}
			return o
		},
		removeData: function(e) {
			return this.each(function() {
				A.remove(this, e)
			})
		}
	}), E.extend({
		queue: function(e, t, n) {
			var i;
			if (e) return i = T.get(e, t = (t || "fx") + "queue"), n && (!i || Array.isArray(n) ? i = T.access(e, t, E.makeArray(n)) : i.push(n)), i || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = E.queue(e, t),
				i = n.length,
				o = n.shift(),
				r = E._queueHooks(e, t);
			"inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function() {
				E.dequeue(e, t)
			}, r)), !i && r && r.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return T.get(e, n) || T.access(e, n, {
				empty: E.Callbacks("once memory").add(function() {
					T.remove(e, [t + "queue", n])
				})
			})
		}
	}), E.fn.extend({
		queue: function(t, n) {
			var e = 2;
			return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
				var e = E.queue(this, t, n);
				E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				E.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			function n() {
				--o || r.resolveWith(s, [s])
			}
			var i, o = 1,
				r = E.Deferred(),
				s = this,
				a = this.length;
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = T.get(s[a], e + "queueHooks")) && i.empty && (o++, i.empty.add(n));
			return n(), r.promise(t)
		}
	});
	var x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Se = new RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"),
		L = ["Top", "Right", "Bottom", "Left"],
		N = k.documentElement,
		I = function(e) {
			return E.contains(e.ownerDocument, e)
		},
		De = {
			composed: !0
		};

	function be(e, t, n, i) {
		var o, r, s = 20,
			a = i ? function() {
				return i.cur()
			} : function() {
				return E.css(e, t, "")
			},
			l = a(),
			c = n && n[3] || (E.cssNumber[t] ? "" : "px"),
			u = e.nodeType && (E.cssNumber[t] || "px" !== c && +l) && Se.exec(E.css(e, t));
		if (u && u[3] !== c) {
			for (c = c || u[3], u = (l /= 2) || 1; s--;) E.style(e, t, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
			E.style(e, t, (u *= 2) + c), n = n || []
		}
		return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
	}
	N.getRootNode && (I = function(e) {
		return E.contains(e.ownerDocument, e) || e.getRootNode(De) === e.ownerDocument
	});
	var Le = {};

	function D(e, t) {
		for (var n, i, o, r, s, a, l = [], c = 0, u = e.length; c < u; c++)(i = e[c]).style && (n = i.style.display, t ? ("none" === n && (l[c] = T.get(i, "display") || null, l[c] || (i.style.display = "")), "" === i.style.display && me(i) && (l[c] = (a = r = o = void 0, r = i.ownerDocument, s = i.nodeName, (a = Le[s]) || (o = r.body.appendChild(r.createElement(s)), a = E.css(o, "display"), o.parentNode.removeChild(o), Le[s] = a = "none" === a ? "block" : a)))) : "none" !== n && (l[c] = "none", T.set(i, "display", n)));
		for (c = 0; c < u; c++) null != l[c] && (e[c].style.display = l[c]);
		return e
	}
	E.fn.extend({
		show: function() {
			return D(this, !0)
		},
		hide: function() {
			return D(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				me(this) ? E(this).show() : E(this).hide()
			})
		}
	});
	var Pe = /^(?:checkbox|radio)$/i,
		Ne = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
		We = /^$|^module$|\/(?:java|ecma)script/i,
		O = k.createDocumentFragment().appendChild(k.createElement("div")),
		M = ((W = k.createElement("input")).setAttribute("type", "radio"), W.setAttribute("checked", "checked"), W.setAttribute("name", "t"), O.appendChild(W), m.checkClone = O.cloneNode(!0).cloneNode(!0).lastChild.checked, O.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!O.cloneNode(!0).lastChild.defaultValue, O.innerHTML = "<option></option>", m.option = !!O.lastChild, {
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		});

	function j(e, t) {
		var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
		return void 0 === t || t && l(e, t) ? E.merge([e], n) : n
	}

	function ke(e, t) {
		for (var n = 0, i = e.length; n < i; n++) T.set(e[n], "globalEval", !t || T.get(t[n], "globalEval"))
	}
	M.tbody = M.tfoot = M.colgroup = M.caption = M.thead, M.th = M.td, m.option || (M.optgroup = M.option = [1, "<select multiple='multiple'>", "</select>"]);
	var Be = /<|&#?\w+;/;

	function Te(e, t, n, i, o) {
		for (var r, s, a, l, c, u = t.createDocumentFragment(), d = [], f = 0, h = e.length; f < h; f++)
			if ((r = e[f]) || 0 === r)
				if ("object" === p(r)) E.merge(d, r.nodeType ? [r] : r);
				else if (Be.test(r)) {
			for (s = s || u.appendChild(t.createElement("div")), a = (Ne.exec(r) || ["", ""])[1].toLowerCase(), a = M[a] || M._default, s.innerHTML = a[1] + E.htmlPrefilter(r) + a[2], c = a[0]; c--;) s = s.lastChild;
			E.merge(d, s.childNodes), (s = u.firstChild).textContent = ""
		} else d.push(t.createTextNode(r));
		for (u.textContent = "", f = 0; r = d[f++];)
			if (i && -1 < E.inArray(r, i)) o && o.push(r);
			else if (l = I(r), s = j(u.appendChild(r), "script"), l && ke(s), n)
			for (c = 0; r = s[c++];) We.test(r.type || "") && n.push(r);
		return u
	}
	var $e = /^([^.]*)(?:\.(.+)|)/;

	function s() {
		return !0
	}

	function h() {
		return !1
	}

	function Ae(e, t) {
		return e === function() {
			try {
				return k.activeElement
			} catch (e) {}
		}() == ("focus" === t)
	}

	function je(e, t, n, i, o, r) {
		var s, a;
		if ("object" == typeof t) {
			for (a in "string" != typeof n && (i = i || n, n = void 0), t) je(e, a, n, i, t[a], r);
			return e
		}
		if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = h;
		else if (!o) return e;
		return 1 === r && (s = o, (o = function(e) {
			return E().off(e), s.apply(this, arguments)
		}).guid = s.guid || (s.guid = E.guid++)), e.each(function() {
			E.event.add(this, t, o, i, n)
		})
	}

	function _e(e, o, r) {
		r ? (T.set(e, o, !1), E.event.add(e, o, {
			namespace: !1,
			handler: function(e) {
				var t, n, i = T.get(this, o);
				if (1 & e.isTrigger && this[o]) {
					if (i.length)(E.event.special[o] || {}).delegateType && e.stopPropagation();
					else if (i = f.call(arguments), T.set(this, o, i), t = r(this, o), this[o](), i !== (n = T.get(this, o)) || t ? T.set(this, o, !1) : n = {}, i !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
				} else i.length && (T.set(this, o, {
					value: E.event.trigger(E.extend(i[0], E.Event.prototype), i.slice(1), this)
				}), e.stopImmediatePropagation())
			}
		})) : void 0 === T.get(e, o) && E.event.add(e, o, s)
	}
	E.event = {
		global: {},
		add: function(t, e, n, i, o) {
			var r, s, a, l, c, u, d, f, h, p = T.get(t);
			if (v(t))
				for (n.handler && (n = (r = n).handler, o = r.selector), o && E.find.matchesSelector(N, o), n.guid || (n.guid = E.guid++), (a = p.events) || (a = p.events = Object.create(null)), (s = p.handle) || (s = p.handle = function(e) {
						return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
					}), l = (e = (e || "").match(S) || [""]).length; l--;) d = h = (f = $e.exec(e[l]) || [])[1], f = (f[2] || "").split(".").sort(), d && (c = E.event.special[d] || {}, d = (o ? c.delegateType : c.bindType) || d, c = E.event.special[d] || {}, h = E.extend({
					type: d,
					origType: h,
					data: i,
					handler: n,
					guid: n.guid,
					selector: o,
					needsContext: o && E.expr.match.needsContext.test(o),
					namespace: f.join(".")
				}, r), (u = a[d]) || ((u = a[d] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, i, f, s) || t.addEventListener && t.addEventListener(d, s)), c.add && (c.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)), o ? u.splice(u.delegateCount++, 0, h) : u.push(h), E.event.global[d] = !0)
		},
		remove: function(e, t, n, i, o) {
			var r, s, a, l, c, u, d, f, h, p, g, m = T.hasData(e) && T.get(e);
			if (m && (l = m.events)) {
				for (c = (t = (t || "").match(S) || [""]).length; c--;)
					if (h = g = (a = $e.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
						for (d = E.event.special[h] || {}, f = l[h = (i ? d.delegateType : d.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = f.length; r--;) u = f[r], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(r, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
						s && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || E.removeEvent(e, h, m.handle), delete l[h])
					} else
						for (h in l) E.event.remove(e, h + t[c], n, i, !0);
				E.isEmptyObject(l) && T.remove(e, "handle events")
			}
		},
		dispatch: function(e) {
			var t, n, i, o, r, s = new Array(arguments.length),
				a = E.event.fix(e),
				e = (T.get(this, "events") || Object.create(null))[a.type] || [],
				l = E.event.special[a.type] || {};
			for (s[0] = a, t = 1; t < arguments.length; t++) s[t] = arguments[t];
			if (a.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, a)) {
				for (r = E.event.handlers.call(this, a, e), t = 0;
					(i = r[t++]) && !a.isPropagationStopped();)
					for (a.currentTarget = i.elem, n = 0;
						(o = i.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (o = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (a.result = o) && (a.preventDefault(), a.stopPropagation()));
				return l.postDispatch && l.postDispatch.call(this, a), a.result
			}
		},
		handlers: function(e, t) {
			var n, i, o, r, s, a = [],
				l = t.delegateCount,
				c = e.target;
			if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
				for (; c !== this; c = c.parentNode || this)
					if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
						for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? -1 < E(o, this).index(c) : E.find(o, this, null, [c]).length), s[o] && r.push(i);
						r.length && a.push({
							elem: c,
							handlers: r
						})
					} return c = this, l < t.length && a.push({
				elem: c,
				handlers: t.slice(l)
			}), a
		},
		addProp: function(t, e) {
			Object.defineProperty(E.Event.prototype, t, {
				enumerable: !0,
				configurable: !0,
				get: y(e) ? function() {
					if (this.originalEvent) return e(this.originalEvent)
				} : function() {
					if (this.originalEvent) return this.originalEvent[t]
				},
				set: function(e) {
					Object.defineProperty(this, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: e
					})
				}
			})
		},
		fix: function(e) {
			return e[E.expando] ? e : new E.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			click: {
				setup: function(e) {
					return Pe.test((e = this || e).type) && e.click && l(e, "input") && _e(e, "click", s), !1
				},
				trigger: function(e) {
					return Pe.test((e = this || e).type) && e.click && l(e, "input") && _e(e, "click"), !0
				},
				_default: function(e) {
					return e = e.target, Pe.test(e.type) && e.click && l(e, "input") && T.get(e, "click") || l(e, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, E.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, E.Event = function(e, t) {
		if (!(this instanceof E.Event)) return new E.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? s : h, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
	}, E.Event.prototype = {
		constructor: E.Event,
		isDefaultPrevented: h,
		isPropagationStopped: h,
		isImmediatePropagationStopped: h,
		isSimulated: !1,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = s, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = s, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = s, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, E.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		char: !0,
		code: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: !0
	}, E.event.addProp), E.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		E.event.special[e] = {
			setup: function() {
				return _e(this, e, Ae), !1
			},
			trigger: function() {
				return _e(this, e), !0
			},
			_default: function() {
				return !0
			},
			delegateType: t
		}
	}), E.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, o) {
		E.event.special[e] = {
			delegateType: o,
			bindType: o,
			handle: function(e) {
				var t, n = e.relatedTarget,
					i = e.handleObj;
				return n && (n === this || E.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
			}
		}
	}), E.fn.extend({
		on: function(e, t, n, i) {
			return je(this, e, t, n, i)
		},
		one: function(e, t, n, i) {
			return je(this, e, t, n, i, 1)
		},
		off: function(e, t, n) {
			var i, o;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, E(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = h), this.each(function() {
				E.event.remove(this, e, n, t)
			});
			for (o in e) this.off(o, t, e[o]);
			return this
		}
	});
	var Re = /<script|<style|<link/i,
		Ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function qe(e, t) {
		return l(e, "table") && l(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
	}

	function ze(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function Ie(e) {
		return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
	}

	function Oe(e, t) {
		var n, i, o, r;
		if (1 === t.nodeType) {
			if (T.hasData(e) && (r = T.get(e).events))
				for (o in T.remove(t, "handle events"), r)
					for (n = 0, i = r[o].length; n < i; n++) E.event.add(t, o, r[o][n]);
			A.hasData(e) && (e = A.access(e), e = E.extend({}, e), A.set(t, e))
		}
	}

	function _(n, i, o, r) {
		i = R(i);
		var e, t, s, a, l, c, u = 0,
			d = n.length,
			f = d - 1,
			h = i[0],
			p = y(h);
		if (p || 1 < d && "string" == typeof h && !m.checkClone && Ue.test(h)) return n.each(function(e) {
			var t = n.eq(e);
			p && (i[0] = h.call(this, e, t.html())), _(t, i, o, r)
		});
		if (d && (t = (e = Te(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === e.childNodes.length && (e = t), t || r)) {
			for (a = (s = E.map(j(e, "script"), ze)).length; u < d; u++) l = e, u !== f && (l = E.clone(l, !0, !0), a && E.merge(s, j(l, "script"))), o.call(n[u], l, u);
			if (a)
				for (c = s[s.length - 1].ownerDocument, E.map(s, Ie), u = 0; u < a; u++) l = s[u], We.test(l.type || "") && !T.access(l, "globalEval") && E.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? E._evalUrl && !l.noModule && E._evalUrl(l.src, {
					nonce: l.nonce || l.getAttribute("nonce")
				}, c) : X(l.textContent.replace(Xe, ""), l, c))
		}
		return n
	}

	function Me(e, t, n) {
		for (var i, o = t ? E.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || E.cleanData(j(i)), i.parentNode && (n && I(i) && ke(j(i, "script")), i.parentNode.removeChild(i));
		return e
	}

	function He(e) {
		var t = e.ownerDocument.defaultView;
		return (t = t && t.opener ? t : C).getComputedStyle(e)
	}

	function Fe(e, t, n) {
		var i, o = {};
		for (i in t) o[i] = e.style[i], e.style[i] = t[i];
		for (i in n = n.call(e), t) e.style[i] = o[i];
		return n
	}
	E.extend({
		htmlPrefilter: function(e) {
			return e
		},
		clone: function(e, t, n) {
			var i, o, r, s, a, l, c, u = e.cloneNode(!0),
				d = I(e);
			if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
				for (s = j(u), i = 0, o = (r = j(e)).length; i < o; i++) a = r[i], "input" === (c = (l = s[i]).nodeName.toLowerCase()) && Pe.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
			if (t)
				if (n)
					for (r = r || j(e), s = s || j(u), i = 0, o = r.length; i < o; i++) Oe(r[i], s[i]);
				else Oe(e, u);
			return 0 < (s = j(u, "script")).length && ke(s, !d && j(e, "script")), u
		},
		cleanData: function(e) {
			for (var t, n, i, o = E.event.special, r = 0; void 0 !== (n = e[r]); r++)
				if (v(n)) {
					if (t = n[T.expando]) {
						if (t.events)
							for (i in t.events) o[i] ? E.event.remove(n, i) : E.removeEvent(n, i, t.handle);
						n[T.expando] = void 0
					}
					n[A.expando] && (n[A.expando] = void 0)
				}
		}
	}), E.fn.extend({
		detach: function(e) {
			return Me(this, e, !0)
		},
		remove: function(e) {
			return Me(this, e)
		},
		text: function(e) {
			return d(this, function(e) {
				return void 0 === e ? E.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return _(this, arguments, function(e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
			})
		},
		prepend: function() {
			return _(this, arguments, function(e) {
				var t;
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = qe(this, e)).insertBefore(e, t.firstChild)
			})
		},
		before: function() {
			return _(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return _(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(j(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return E.clone(this, e, t)
			})
		},
		html: function(e) {
			return d(this, function(e) {
				var t = this[0] || {},
					n = 0,
					i = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !Re.test(e) && !M[(Ne.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = E.htmlPrefilter(e);
					try {
						for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(j(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var n = [];
			return _(this, arguments, function(e) {
				var t = this.parentNode;
				E.inArray(this, n) < 0 && (E.cleanData(j(this)), t && t.replaceChild(e, this))
			}, n)
		}
	}), E.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, s) {
		E.fn[e] = function(e) {
			for (var t, n = [], i = E(e), o = i.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0), E(i[r])[s](t), U.apply(n, t.get());
			return this.pushStack(n)
		}
	});
	var Ve, Qe, Ge, et, tt, nt, ot, H, rt = new RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"),
		st = new RegExp(L.join("|"), "i");

	function Ye(e, t, n) {
		var i, o, r = e.style;
		return (n = n || He(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || I(e) || (o = E.style(e, t)), !m.pixelBoxStyles() && rt.test(o) && st.test(t) && (e = r.width, t = r.minWidth, i = r.maxWidth, r.minWidth = r.maxWidth = r.width = o, o = n.width, r.width = e, r.minWidth = t, r.maxWidth = i)), void 0 !== o ? o + "" : o
	}

	function Je(e, t) {
		return {
			get: function() {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	}

	function Ke() {
		var e;
		H && (ot.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", H.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", N.appendChild(ot).appendChild(H), e = C.getComputedStyle(H), Ve = "1%" !== e.top, nt = 12 === Ze(e.marginLeft), H.style.right = "60%", et = 36 === Ze(e.right), Qe = 36 === Ze(e.width), H.style.position = "absolute", Ge = 12 === Ze(H.offsetWidth / 3), N.removeChild(ot), H = null)
	}

	function Ze(e) {
		return Math.round(parseFloat(e))
	}
	ot = k.createElement("div"), (H = k.createElement("div")).style && (H.style.backgroundClip = "content-box", H.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === H.style.backgroundClip, E.extend(m, {
		boxSizingReliable: function() {
			return Ke(), Qe
		},
		pixelBoxStyles: function() {
			return Ke(), et
		},
		pixelPosition: function() {
			return Ke(), Ve
		},
		reliableMarginLeft: function() {
			return Ke(), nt
		},
		scrollboxSize: function() {
			return Ke(), Ge
		},
		reliableTrDimensions: function() {
			var e, t, n;
			return null == tt && (e = k.createElement("table"), t = k.createElement("tr"), n = k.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", N.appendChild(e).appendChild(t).appendChild(n), n = C.getComputedStyle(t), tt = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight, N.removeChild(e)), tt
		}
	}));
	var at = ["Webkit", "Moz", "ms"],
		dt = k.createElement("div").style,
		ft = {};

	function it(e) {
		return E.cssProps[e] || ft[e] || (e in dt ? e : ft[e] = function(e) {
			for (var t = e[0].toUpperCase() + e.slice(1), n = at.length; n--;)
				if ((e = at[n] + t) in dt) return e
		}(e) || e)
	}
	var ht = /^(none|table(?!-c[ea]).+)/,
		yt = /^--/,
		bt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		xt = {
			letterSpacing: "0",
			fontWeight: "400"
		};

	function lt(e, t, n) {
		var i = Se.exec(t);
		return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
	}

	function ct(e, t, n, i, o, r) {
		var s = "width" === t ? 1 : 0,
			a = 0,
			l = 0;
		if (n === (i ? "border" : "content")) return 0;
		for (; s < 4; s += 2) "margin" === n && (l += E.css(e, n + L[s], !0, o)), i ? ("content" === n && (l -= E.css(e, "padding" + L[s], !0, o)), "margin" !== n && (l -= E.css(e, "border" + L[s] + "Width", !0, o))) : (l += E.css(e, "padding" + L[s], !0, o), "padding" !== n ? l += E.css(e, "border" + L[s] + "Width", !0, o) : a += E.css(e, "border" + L[s] + "Width", !0, o));
		return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), l
	}

	function ut(e, t, n) {
		var i = He(e),
			o = (!m.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, i),
			r = o,
			s = Ye(e, t, i),
			a = "offset" + t[0].toUpperCase() + t.slice(1);
		if (rt.test(s)) {
			if (!n) return s;
			s = "auto"
		}
		return (!m.boxSizingReliable() && o || !m.reliableTrDimensions() && l(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === E.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === E.css(e, "boxSizing", !1, i), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + ct(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
	}

	function r(e, t, n, i, o) {
		return new r.prototype.init(e, t, n, i, o)
	}
	E.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) return "" === (t = Ye(e, "opacity")) ? "1" : t
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			gridArea: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnStart: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowStart: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {},
		style: function(e, t, n, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, r, s, a = b(t),
					l = yt.test(t),
					c = e.style;
				if (l || (t = it(a)), s = E.cssHooks[t] || E.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
				"string" == (r = typeof n) && (o = Se.exec(n)) && o[1] && (n = be(e, t, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (E.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
			}
		},
		css: function(e, t, n, i) {
			var o, r = b(t);
			return yt.test(t) || (t = it(r)), "normal" === (o = void 0 === (o = (r = E.cssHooks[t] || E.cssHooks[r]) && "get" in r ? r.get(e, !0, n) : o) ? Ye(e, t, i) : o) && t in xt && (o = xt[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
		}
	}), E.each(["height", "width"], function(e, s) {
		E.cssHooks[s] = {
			get: function(e, t, n) {
				if (t) return !ht.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ut(e, s, n) : Fe(e, bt, function() {
					return ut(e, s, n)
				})
			},
			set: function(e, t, n) {
				var i = He(e),
					o = !m.scrollboxSize() && "absolute" === i.position,
					r = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i),
					n = n ? ct(e, s, n, r, i) : 0;
				return r && o && (n -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(i[s]) - ct(e, s, "border", !1, i) - .5)), n && (r = Se.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t, t = E.css(e, s)), lt(0, t, n)
			}
		}
	}), E.cssHooks.marginLeft = Je(m.reliableMarginLeft, function(e, t) {
		if (t) return (parseFloat(Ye(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, {
			marginLeft: 0
		}, function() {
			return e.getBoundingClientRect().left
		})) + "px"
	}), E.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(o, r) {
		E.cssHooks[o + r] = {
			expand: function(e) {
				for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + L[t] + r] = i[t] || i[t - 2] || i[0];
				return n
			}
		}, "margin" !== o && (E.cssHooks[o + r].set = lt)
	}), E.fn.extend({
		css: function(e, t) {
			return d(this, function(e, t, n) {
				var i, o, r = {},
					s = 0;
				if (Array.isArray(t)) {
					for (i = He(e), o = t.length; s < o; s++) r[t[s]] = E.css(e, t[s], !1, i);
					return r
				}
				return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
			}, e, t, 1 < arguments.length)
		}
	}), ((E.Tween = r).prototype = {
		constructor: r,
		init: function(e, t, n, i, o, r) {
			this.elem = e, this.prop = n, this.easing = o || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (E.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = r.propHooks[this.prop];
			return (e && e.get ? e : r.propHooks._default).get(this)
		},
		run: function(e) {
			var t, n = r.propHooks[this.prop];
			return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : r.propHooks._default).set(this), this
		}
	}).init.prototype = r.prototype, (r.propHooks = {
		_default: {
			get: function(e) {
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = E.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
			},
			set: function(e) {
				E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[it(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}).scrollTop = r.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, E.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, E.fx = r.prototype.init, E.fx.step = {};
	var F, wt, W, kt = /^(?:toggle|show|hide)$/,
		St = /queueHooks$/;

	function pt() {
		wt && (!1 === k.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(pt) : C.setTimeout(pt, E.fx.interval), E.fx.tick())
	}

	function gt() {
		return C.setTimeout(function() {
			F = void 0
		}), F = Date.now()
	}

	function mt(e, t) {
		var n, i = 0,
			o = {
				height: e
			};
		for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = L[i])] = o["padding" + n] = e;
		return t && (o.opacity = o.width = e), o
	}

	function vt(e, t, n) {
		for (var i, o = (P.tweeners[t] || []).concat(P.tweeners["*"]), r = 0, s = o.length; r < s; r++)
			if (i = o[r].call(n, t, e)) return i
	}

	function P(o, e, t) {
		var n, r, i, s, a, l, c, u = 0,
			d = P.prefilters.length,
			f = E.Deferred().always(function() {
				delete h.elem
			}),
			h = function() {
				if (r) return !1;
				for (var e = F || gt(), e, t = 1 - ((e = Math.max(0, p.startTime + p.duration - e)) / p.duration || 0), n = 0, i = p.tweens.length; n < i; n++) p.tweens[n].run(t);
				return f.notifyWith(o, [p, t, e]), t < 1 && i ? e : (i || f.notifyWith(o, [p, 1, 0]), f.resolveWith(o, [p]), !1)
			},
			p = f.promise({
				elem: o,
				props: E.extend({}, e),
				opts: E.extend(!0, {
					specialEasing: {},
					easing: E.easing._default
				}, t),
				originalProperties: e,
				originalOptions: t,
				startTime: F || gt(),
				duration: t.duration,
				tweens: [],
				createTween: function(e, t) {
					return t = E.Tween(o, p.opts, e, t, p.opts.specialEasing[e] || p.opts.easing), p.tweens.push(t), t
				},
				stop: function(e) {
					var t = 0,
						n = e ? p.tweens.length : 0;
					if (r) return this;
					for (r = !0; t < n; t++) p.tweens[t].run(1);
					return e ? (f.notifyWith(o, [p, 1, 0]), f.resolveWith(o, [p, e])) : f.rejectWith(o, [p, e]), this
				}
			}),
			g = p.props,
			m = g,
			v = p.opts.specialEasing;
		for (i in m)
			if (a = v[s = b(i)], l = m[i], Array.isArray(l) && (a = l[1], l = m[i] = l[0]), i !== s && (m[s] = l, delete m[i]), (c = E.cssHooks[s]) && "expand" in c)
				for (i in l = c.expand(l), delete m[s], l) i in m || (m[i] = l[i], v[i] = a);
			else v[s] = a;
		for (; u < d; u++)
			if (n = P.prefilters[u].call(p, o, g, p.opts)) return y(n.stop) && (E._queueHooks(p.elem, p.opts.queue).stop = n.stop.bind(n)), n;
		return E.map(g, vt, p), y(p.opts.start) && p.opts.start.call(o, p), p.progress(p.opts.progress).done(p.opts.done, p.opts.complete).fail(p.opts.fail).always(p.opts.always), E.fx.timer(E.extend(h, {
			elem: o,
			anim: p,
			queue: p.opts.queue
		})), p
	}
	E.Animation = E.extend(P, {
		tweeners: {
			"*": [function(e, t) {
				var n = this.createTween(e, t);
				return be(n.elem, e, Se.exec(t), n), n
			}]
		},
		tweener: function(e, t) {
			for (var n, i = 0, o = (e = y(e) ? (t = e, ["*"]) : e.match(S)).length; i < o; i++) n = e[i], P.tweeners[n] = P.tweeners[n] || [], P.tweeners[n].unshift(t)
		},
		prefilters: [function(e, t, n) {
			var i, o, r, s, a, l, c, u = "width" in t || "height" in t,
				d = this,
				f = {},
				h = e.style,
				p = e.nodeType && me(e),
				g = T.get(e, "fxshow");
			for (i in n.queue || (null == (s = E._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
					s.unqueued || a()
				}), s.unqueued++, d.always(function() {
					d.always(function() {
						s.unqueued--, E.queue(e, "fx").length || s.empty.fire()
					})
				})), t)
				if (o = t[i], kt.test(o)) {
					if (delete t[i], r = r || "toggle" === o, o === (p ? "hide" : "show")) {
						if ("show" !== o || !g || void 0 === g[i]) continue;
						p = !0
					}
					f[i] = g && g[i] || E.style(e, i)
				} if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(f))
				for (i in u && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = g && g.display) && (c = T.get(e, "display")), "none" === (u = E.css(e, "display")) && (c ? u = c : (D([e], !0), c = e.style.display || c, u = E.css(e, "display"), D([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === E.css(e, "float") && (l || (d.done(function() {
						h.display = c
					}), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
						h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
					})), l = !1, f) l || (g ? "hidden" in g && (p = g.hidden) : g = T.access(e, "fxshow", {
					display: c
				}), r && (g.hidden = !p), p && D([e], !0), d.done(function() {
					for (i in p || D([e]), T.remove(e, "fxshow"), f) E.style(e, i, f[i])
				})), l = vt(p ? g[i] : 0, i, d), i in g || (g[i] = l.start, p && (l.end = l.start, l.start = 0))
		}],
		prefilter: function(e, t) {
			t ? P.prefilters.unshift(e) : P.prefilters.push(e)
		}
	}), E.speed = function(e, t, n) {
		var i = e && "object" == typeof e ? E.extend({}, e) : {
			complete: n || !n && t || y(e) && e,
			duration: e,
			easing: n && t || t && !y(t) && t
		};
		return E.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in E.fx.speeds ? i.duration = E.fx.speeds[i.duration] : i.duration = E.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
			y(i.old) && i.old.call(this), i.queue && E.dequeue(this, i.queue)
		}, i
	}, E.fn.extend({
		fadeTo: function(e, t, n, i) {
			return this.filter(me).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, i)
		},
		animate: function(t, e, n, i) {
			function o() {
				var e = P(this, E.extend({}, t), s);
				(r || T.get(this, "finish")) && e.stop(!0)
			}
			var r = E.isEmptyObject(t),
				s = E.speed(e, n, i);
			return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
		},
		stop: function(o, e, r) {
			function s(e) {
				var t = e.stop;
				delete e.stop, t(r)
			}
			return "string" != typeof o && (r = e, e = o, o = void 0), e && this.queue(o || "fx", []), this.each(function() {
				var e = !0,
					t = null != o && o + "queueHooks",
					n = E.timers,
					i = T.get(this);
				if (t) i[t] && i[t].stop && s(i[t]);
				else
					for (t in i) i[t] && i[t].stop && St.test(t) && s(i[t]);
				for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
				!e && r || E.dequeue(this, o)
			})
		},
		finish: function(s) {
			return !1 !== s && (s = s || "fx"), this.each(function() {
				var e, t = T.get(this),
					n = t[s + "queue"],
					i = t[s + "queueHooks"],
					o = E.timers,
					r = n ? n.length : 0;
				for (t.finish = !0, E.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
				for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
				delete t.finish
			})
		}
	}), E.each(["toggle", "show", "hide"], function(e, i) {
		var o = E.fn[i];
		E.fn[i] = function(e, t, n) {
			return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(mt(i, !0), e, t, n)
		}
	}), E.each({
		slideDown: mt("show"),
		slideUp: mt("hide"),
		slideToggle: mt("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, i) {
		E.fn[e] = function(e, t, n) {
			return this.animate(i, e, t, n)
		}
	}), E.timers = [], E.fx.tick = function() {
		var e, t = 0,
			n = E.timers;
		for (F = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
		n.length || E.fx.stop(), F = void 0
	}, E.fx.timer = function(e) {
		E.timers.push(e), E.fx.start()
	}, E.fx.interval = 13, E.fx.start = function() {
		wt || (wt = !0, pt())
	}, E.fx.stop = function() {
		wt = null
	}, E.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, E.fn.delay = function(i, e) {
		return i = E.fx && E.fx.speeds[i] || i, this.queue(e = e || "fx", function(e, t) {
			var n = C.setTimeout(e, i);
			t.stop = function() {
				C.clearTimeout(n)
			}
		})
	}, W = k.createElement("input"), O = k.createElement("select").appendChild(k.createElement("option")), W.type = "checkbox", m.checkOn = "" !== W.value, m.optSelected = O.selected, (W = k.createElement("input")).value = "t", W.type = "radio", m.radioValue = "t" === W.value;
	var Tt, Dt = E.expr.attrHandle,
		At = (E.fn.extend({
			attr: function(e, t) {
				return d(this, E.attr, e, t, 1 < arguments.length)
			},
			removeAttr: function(e) {
				return this.each(function() {
					E.removeAttr(this, e)
				})
			}
		}), E.extend({
			attr: function(e, t, n) {
				var i, o, r = e.nodeType;
				if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === r && E.isXMLDoc(e) || (o = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? Tt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) || null != (i = E.find.attr(e, t)) ? i : void 0)
			},
			attrHooks: {
				type: {
					set: function(e, t) {
						var n;
						if (!m.radioValue && "radio" === t && l(e, "input")) return n = e.value, e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			},
			removeAttr: function(e, t) {
				var n, i = 0,
					o = t && t.match(S);
				if (o && 1 === e.nodeType)
					for (; n = o[i++];) e.removeAttribute(n)
			}
		}), Tt = {
			set: function(e, t, n) {
				return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
			}
		}, E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
			var s = Dt[t] || E.find.attr;
			Dt[t] = function(e, t, n) {
				var i, o, r = t.toLowerCase();
				return n || (o = Dt[r], Dt[r] = i, i = null != s(e, t, n) ? r : null, Dt[r] = o), i
			}
		}), /^(?:input|select|textarea|button)$/i),
		jt = /^(?:a|area)$/i;

	function q(e) {
		return (e.match(S) || []).join(" ")
	}

	function z(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function Ct(e) {
		return Array.isArray(e) ? e : "string" == typeof e && e.match(S) || []
	}

	function Et(e) {
		e.stopPropagation()
	}
	E.fn.extend({
		prop: function(e, t) {
			return d(this, E.prop, e, t, 1 < arguments.length)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[E.propFix[e] || e]
			})
		}
	}), E.extend({
		prop: function(e, t, n) {
			var i, o, r = e.nodeType;
			if (3 !== r && 8 !== r && 2 !== r) return 1 === r && E.isXMLDoc(e) || (t = E.propFix[t] || t, o = E.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = E.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : At.test(e.nodeName) || jt.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			for: "htmlFor",
			class: "className"
		}
	}), m.optSelected || (E.propHooks.selected = {
		get: function(e) {
			return (e = e.parentNode) && e.parentNode && e.parentNode.selectedIndex, null
		},
		set: function(e) {
			(e = e.parentNode) && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
		}
	}), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		E.propFix[this.toLowerCase()] = this
	}), E.fn.extend({
		addClass: function(t) {
			var e, n, i, o, r, s, a = 0;
			if (y(t)) return this.each(function(e) {
				E(this).addClass(t.call(this, e, z(this)))
			});
			if ((e = Ct(t)).length)
				for (; n = this[a++];)
					if (s = z(n), i = 1 === n.nodeType && " " + q(s) + " ") {
						for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
						s !== (s = q(i)) && n.setAttribute("class", s)
					} return this
		},
		removeClass: function(t) {
			var e, n, i, o, r, s, a = 0;
			if (y(t)) return this.each(function(e) {
				E(this).removeClass(t.call(this, e, z(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ((e = Ct(t)).length)
				for (; n = this[a++];)
					if (s = z(n), i = 1 === n.nodeType && " " + q(s) + " ") {
						for (r = 0; o = e[r++];)
							for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
						s !== (s = q(i)) && n.setAttribute("class", s)
					} return this
		},
		toggleClass: function(o, t) {
			var r = typeof o,
				s = "string" == r || Array.isArray(o);
			return "boolean" == typeof t && s ? t ? this.addClass(o) : this.removeClass(o) : y(o) ? this.each(function(e) {
				E(this).toggleClass(o.call(this, e, z(this), t), t)
			}) : this.each(function() {
				var e, t, n, i;
				if (s)
					for (t = 0, n = E(this), i = Ct(o); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
				else void 0 !== o && "boolean" != r || ((e = z(this)) && T.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== o && T.get(this, "__className__") || ""))
			})
		},
		hasClass: function(e) {
			for (var t, n = 0, i = " " + e + " "; t = this[n++];)
				if (1 === t.nodeType && -1 < (" " + q(z(t)) + " ").indexOf(i)) return !0;
			return !1
		}
	});
	var _t = /\r/g,
		Lt = (E.fn.extend({
			val: function(t) {
				var n, e, i, o = this[0];
				return arguments.length ? (i = y(t), this.each(function(e) {
					1 === this.nodeType && (null == (e = i ? t.call(this, e, E(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = E.map(e, function(e) {
						return null == e ? "" : e + ""
					})), (n = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
				})) : o ? (n = E.valHooks[o.type] || E.valHooks[o.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(o, "value")) ? e : "string" == typeof(e = o.value) ? e.replace(_t, "") : null == e ? "" : e : void 0
			}
		}), E.extend({
			valHooks: {
				option: {
					get: function(e) {
						var t = E.find.attr(e, "value");
						return null != t ? t : q(E.text(e))
					}
				},
				select: {
					get: function(e) {
						for (var t, n = e.options, i = e.selectedIndex, o = "select-one" === e.type, r = o ? null : [], s = o ? i + 1 : n.length, a = i < 0 ? s : o ? i : 0; a < s; a++)
							if (((t = n[a]).selected || a === i) && !t.disabled && (!t.parentNode.disabled || !l(t.parentNode, "optgroup"))) {
								if (t = E(t).val(), o) return t;
								r.push(t)
							} return r
					},
					set: function(e, t) {
						for (var n, i, o = e.options, r = E.makeArray(t), s = o.length; s--;)((i = o[s]).selected = -1 < E.inArray(E.valHooks.option.get(i), r)) && (n = !0);
						return n || (e.selectedIndex = -1), r
					}
				}
			}
		}), E.each(["radio", "checkbox"], function() {
			E.valHooks[this] = {
				set: function(e, t) {
					if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t)
				}
			}, m.checkOn || (E.valHooks[this].get = function(e) {
				return null === e.getAttribute("value") ? "on" : e.value
			})
		}), m.focusin = "onfocusin" in C, /^(?:focusinfocus|focusoutblur)$/),
		Pt = (E.extend(E.event, {
			trigger: function(e, t, n, i) {
				var o, r, s, a, l, c, u, d = [n || k],
					f = Z.call(e, "type") ? e.type : e,
					h = Z.call(e, "namespace") ? e.namespace.split(".") : [],
					p = u = r = n = n || k;
				if (3 !== n.nodeType && 8 !== n.nodeType && !Lt.test(f + E.event.triggered) && (-1 < f.indexOf(".") && (f = (h = f.split(".")).shift(), h.sort()), a = f.indexOf(":") < 0 && "on" + f, (e = e[E.expando] ? e : new E.Event(f, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[f] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
					if (!i && !c.noBubble && !g(n)) {
						for (s = c.delegateType || f, Lt.test(s + f) || (p = p.parentNode); p; p = p.parentNode) d.push(p), r = p;
						r === (n.ownerDocument || k) && d.push(r.defaultView || r.parentWindow || C)
					}
					for (o = 0;
						(p = d[o++]) && !e.isPropagationStopped();) u = p, e.type = 1 < o ? s : c.bindType || f, (l = (T.get(p, "events") || Object.create(null))[e.type] && T.get(p, "handle")) && l.apply(p, t), (l = a && p[a]) && l.apply && v(p) && (e.result = l.apply(p, t), !1 === e.result && e.preventDefault());
					return e.type = f, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !v(n) || a && y(n[f]) && !g(n) && ((r = n[a]) && (n[a] = null), E.event.triggered = f, e.isPropagationStopped() && u.addEventListener(f, Et), n[f](), e.isPropagationStopped() && u.removeEventListener(f, Et), E.event.triggered = void 0, r && (n[a] = r)), e.result
				}
			},
			simulate: function(e, t, n) {
				n = E.extend(new E.Event, n, {
					type: e,
					isSimulated: !0
				}), E.event.trigger(n, null, t)
			}
		}), E.fn.extend({
			trigger: function(e, t) {
				return this.each(function() {
					E.event.trigger(e, t, this)
				})
			},
			triggerHandler: function(e, t) {
				var n = this[0];
				if (n) return E.event.trigger(e, t, n, !0)
			}
		}), m.focusin || E.each({
			focus: "focusin",
			blur: "focusout"
		}, function(n, i) {
			function o(e) {
				E.event.simulate(i, e.target, E.event.fix(e))
			}
			E.event.special[i] = {
				setup: function() {
					var e = this.ownerDocument || this.document || this,
						t = T.access(e, i);
					t || e.addEventListener(n, o, !0), T.access(e, i, (t || 0) + 1)
				},
				teardown: function() {
					var e = this.ownerDocument || this.document || this,
						t = T.access(e, i) - 1;
					t ? T.access(e, i, t) : (e.removeEventListener(n, o, !0), T.remove(e, i))
				}
			}
		}), C.location),
		Nt = {
			guid: Date.now()
		},
		qt = /\?/,
		zt = (E.parseXML = function(e) {
			var t, n;
			if (!e || "string" != typeof e) return null;
			try {
				t = (new C.DOMParser).parseFromString(e, "text/xml")
			} catch (e) {}
			return n = t && t.getElementsByTagName("parsererror")[0], t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, function(e) {
				return e.textContent
			}).join("\n") : e)), t
		}, /\[\]$/),
		It = /\r?\n/g,
		Ot = /^(?:submit|button|image|reset|file)$/i,
		Mt = /^(?:input|select|textarea|keygen)/i,
		Ht = (E.param = function(e, t) {
			function n(e, t) {
				t = y(t) ? t() : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
			}
			var i, o = [];
			if (null == e) return "";
			if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function() {
				n(this.name, this.value)
			});
			else
				for (i in e) ! function n(i, e, o, r) {
					if (Array.isArray(e)) E.each(e, function(e, t) {
						o || zt.test(i) ? r(i, t) : n(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, o, r)
					});
					else if (o || "object" !== p(e)) r(i, e);
					else
						for (var t in e) n(i + "[" + t + "]", e[t], o, r)
				}(i, e[i], t, n);
			return o.join("&")
		}, E.fn.extend({
			serialize: function() {
				return E.param(this.serializeArray())
			},
			serializeArray: function() {
				return this.map(function() {
					var e = E.prop(this, "elements");
					return e ? E.makeArray(e) : this
				}).filter(function() {
					var e = this.type;
					return this.name && !E(this).is(":disabled") && Mt.test(this.nodeName) && !Ot.test(e) && (this.checked || !Pe.test(e))
				}).map(function(e, t) {
					var n = E(this).val();
					return null == n ? null : Array.isArray(n) ? E.map(n, function(e) {
						return {
							name: t.name,
							value: e.replace(It, "\r\n")
						}
					}) : {
						name: t.name,
						value: n.replace(It, "\r\n")
					}
				}).get()
			}
		}), /%20/g),
		Ft = /#.*$/,
		Wt = /([?&])_=[^&]*/,
		$t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Xt = /^(?:GET|HEAD)$/,
		Vt = /^\/\//,
		Qt = {},
		Gt = {},
		Yt = "*/".concat("*"),
		Kt = k.createElement("a");

	function Bt(r) {
		return function(e, t) {
			"string" != typeof e && (t = e, e = "*");
			var n, i = 0,
				o = e.toLowerCase().match(S) || [];
			if (y(t))
				for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
		}
	}

	function Rt(t, i, o, r) {
		var s = {},
			a = t === Gt;

		function l(e) {
			var n;
			return s[e] = !0, E.each(t[e] || [], function(e, t) {
				return "string" != typeof(t = t(i, o, r)) || a || s[t] ? a ? !(n = t) : void 0 : (i.dataTypes.unshift(t), l(t), !1)
			}), n
		}
		return l(i.dataTypes[0]) || !s["*"] && l("*")
	}

	function Ut(e, t) {
		var n, i, o = E.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((o[n] ? e : i = i || {})[n] = t[n]);
		return i && E.extend(!0, e, i), e
	}
	Kt.href = Pt.href, E.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Pt.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Pt.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Yt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": E.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? Ut(Ut(e, E.ajaxSettings), t) : Ut(E.ajaxSettings, e)
		},
		ajaxPrefilter: Bt(Qt),
		ajaxTransport: Bt(Gt),
		ajax: function(e, t) {
			"object" == typeof e && (t = e, e = void 0);
			var l, c, u, n, d, f, h, i, o, p = E.ajaxSetup({}, t = t || {}),
				g = p.context || p,
				m = p.context && (g.nodeType || g.jquery) ? E(g) : E.event,
				v = E.Deferred(),
				y = E.Callbacks("once memory"),
				b = p.statusCode || {},
				r = {},
				s = {},
				a = "canceled",
				x = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (f) {
							if (!n)
								for (n = {}; t = $t.exec(u);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
							t = n[e.toLowerCase() + " "]
						}
						return null == t ? null : t.join(", ")
					},
					getAllResponseHeaders: function() {
						return f ? u : null
					},
					setRequestHeader: function(e, t) {
						return null == f && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, r[e] = t), this
					},
					overrideMimeType: function(e) {
						return null == f && (p.mimeType = e), this
					},
					statusCode: function(e) {
						if (e)
							if (f) x.always(e[x.status]);
							else
								for (var t in e) b[t] = [b[t], e[t]];
						return this
					},
					abort: function(e) {
						return e = e || a, l && l.abort(e), w(0, e), this
					}
				};
			if (v.promise(x), p.url = ((e || p.url || Pt.href) + "").replace(Vt, Pt.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(S) || [""], null == p.crossDomain) {
				o = k.createElement("a");
				try {
					o.href = p.url, o.href = o.href, p.crossDomain = Kt.protocol + "//" + Kt.host != o.protocol + "//" + o.host
				} catch (e) {
					p.crossDomain = !0
				}
			}
			if (p.data && p.processData && "string" != typeof p.data && (p.data = E.param(p.data, p.traditional)), Rt(Qt, p, t, x), f) return x;
			for (i in (h = E.event && p.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Xt.test(p.type), c = p.url.replace(Ft, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ht, "+")) : (o = p.url.slice(c.length), p.data && (p.processData || "string" == typeof p.data) && (c += (qt.test(c) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (c = c.replace(Wt, "$1"), o = (qt.test(c) ? "&" : "?") + "_=" + Nt.guid++ + o), p.url = c + o), p.ifModified && (E.lastModified[c] && x.setRequestHeader("If-Modified-Since", E.lastModified[c]), E.etag[c] && x.setRequestHeader("If-None-Match", E.etag[c])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Yt + "; q=0.01" : "") : p.accepts["*"]), p.headers) x.setRequestHeader(i, p.headers[i]);
			if (p.beforeSend && (!1 === p.beforeSend.call(g, x, p) || f)) return x.abort();
			if (a = "abort", y.add(p.complete), x.done(p.success), x.fail(p.error), l = Rt(Gt, p, t, x)) {
				if (x.readyState = 1, h && m.trigger("ajaxSend", [x, p]), f) return x;
				p.async && 0 < p.timeout && (d = C.setTimeout(function() {
					x.abort("timeout")
				}, p.timeout));
				try {
					f = !1, l.send(r, w)
				} catch (e) {
					if (f) throw e;
					w(-1, e)
				}
			} else w(-1, "No Transport");

			function w(e, t, n, i) {
				var o, r, s, a = t;
				f || (f = !0, d && C.clearTimeout(d), l = void 0, u = i || "", x.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
					for (var i, o, r, s, a = e.contents, l = e.dataTypes;
						"*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
					if (i)
						for (o in a)
							if (a[o] && a[o].test(i)) {
								l.unshift(o);
								break
							} if (l[0] in n) r = l[0];
					else {
						for (o in n) {
							if (!l[0] || e.converters[o + " " + l[0]]) {
								r = o;
								break
							}
							s = s || o
						}
						r = r || s
					}
					if (r) return r !== l[0] && l.unshift(r), n[r]
				}(p, x, n)), !i && -1 < E.inArray("script", p.dataTypes) && E.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function() {}), s = function(e, t, n, i) {
					var o, r, s, a, l, c = {},
						u = e.dataTypes.slice();
					if (u[1])
						for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
					for (r = u.shift(); r;)
						if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
							if ("*" === r) r = l;
							else if ("*" !== l && l !== r) {
						if (!(s = c[l + " " + r] || c["* " + r]))
							for (o in c)
								if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
									!0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
									break
								} if (!0 !== s)
							if (s && e.throws) t = s(t);
							else try {
								t = s(t)
							} catch (e) {
								return {
									state: "parsererror",
									error: s ? e : "No conversion from " + l + " to " + r
								}
							}
					}
					return {
						state: "success",
						data: t
					}
				}(p, s, x, i), i ? (p.ifModified && ((n = x.getResponseHeader("Last-Modified")) && (E.lastModified[c] = n), (n = x.getResponseHeader("etag")) && (E.etag[c] = n)), 204 === e || "HEAD" === p.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = s.state, o = s.data, i = !(r = s.error))) : (r = a, !e && a || (a = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || a) + "", i ? v.resolveWith(g, [o, a, x]) : v.rejectWith(g, [x, a, r]), x.statusCode(b), b = void 0, h && m.trigger(i ? "ajaxSuccess" : "ajaxError", [x, p, i ? o : r]), y.fireWith(g, [x, a]), h && (m.trigger("ajaxComplete", [x, p]), --E.active || E.event.trigger("ajaxStop")))
			}
			return x
		},
		getJSON: function(e, t, n) {
			return E.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return E.get(e, void 0, t, "script")
		}
	}), E.each(["get", "post"], function(e, o) {
		E[o] = function(e, t, n, i) {
			return y(t) && (i = i || n, n = t, t = void 0), E.ajax(E.extend({
				url: e,
				type: o,
				dataType: i,
				data: t,
				success: n
			}, E.isPlainObject(e) && e))
		}
	}), E.ajaxPrefilter(function(e) {
		for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
	}), E._evalUrl = function(e, t, n) {
		return E.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			converters: {
				"text script": function() {}
			},
			dataFilter: function(e) {
				E.globalEval(e, t, n)
			}
		})
	}, E.fn.extend({
		wrapAll: function(e) {
			return this[0] && (y(e) && (e = e.call(this[0])), e = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this
		},
		wrapInner: function(n) {
			return y(n) ? this.each(function(e) {
				E(this).wrapInner(n.call(this, e))
			}) : this.each(function() {
				var e = E(this),
					t = e.contents();
				t.length ? t.wrapAll(n) : e.append(n)
			})
		},
		wrap: function(t) {
			var n = y(t);
			return this.each(function(e) {
				E(this).wrapAll(n ? t.call(this, e) : t)
			})
		},
		unwrap: function(e) {
			return this.parent(e).not("body").each(function() {
				E(this).replaceWith(this.childNodes)
			}), this
		}
	}), E.expr.pseudos.hidden = function(e) {
		return !E.expr.pseudos.visible(e)
	}, E.expr.pseudos.visible = function(e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, E.ajaxSettings.xhr = function() {
		try {
			return new C.XMLHttpRequest
		} catch (e) {}
	};
	var Jt = {
			0: 200,
			1223: 204
		},
		Zt = E.ajaxSettings.xhr(),
		en = (m.cors = !!Zt && "withCredentials" in Zt, m.ajax = Zt = !!Zt, E.ajaxTransport(function(o) {
			var r, s;
			if (m.cors || Zt && !o.crossDomain) return {
				send: function(e, t) {
					var n, i = o.xhr();
					if (i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
						for (n in o.xhrFields) i[n] = o.xhrFields[n];
					for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
					r = function(e) {
						return function() {
							r && (r = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Jt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
								binary: i.response
							} : {
								text: i.responseText
							}, i.getAllResponseHeaders()))
						}
					}, i.onload = r(), s = i.onerror = i.ontimeout = r("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
						4 === i.readyState && C.setTimeout(function() {
							r && s()
						})
					}, r = r("abort");
					try {
						i.send(o.hasContent && o.data || null)
					} catch (e) {
						if (r) throw e
					}
				},
				abort: function() {
					r && r()
				}
			}
		}), E.ajaxPrefilter(function(e) {
			e.crossDomain && (e.contents.script = !1)
		}), E.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /\b(?:java|ecma)script\b/
			},
			converters: {
				"text script": function(e) {
					return E.globalEval(e), e
				}
			}
		}), E.ajaxPrefilter("script", function(e) {
			void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
		}), E.ajaxTransport("script", function(n) {
			var i, o;
			if (n.crossDomain || n.scriptAttrs) return {
				send: function(e, t) {
					i = E("<script>").attr(n.scriptAttrs || {}).prop({
						charset: n.scriptCharset,
						src: n.url
					}).on("load error", o = function(e) {
						i.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
					}), k.head.appendChild(i[0])
				},
				abort: function() {
					o && o()
				}
			}
		}), []),
		tn = /(=)\?(?=&|$)|\?\?/,
		nn = (E.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var e = en.pop() || E.expando + "_" + Nt.guid++;
				return this[e] = !0, e
			}
		}), E.ajaxPrefilter("json jsonp", function(e, t, n) {
			var i, o, r, s = !1 !== e.jsonp && (tn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(e.data) && "data");
			if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(tn, "$1" + i) : !1 !== e.jsonp && (e.url += (qt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
				return r || E.error(i + " was not called"), r[0]
			}, e.dataTypes[0] = "json", o = C[i], C[i] = function() {
				r = arguments
			}, n.always(function() {
				void 0 === o ? E(C).removeProp(i) : C[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, en.push(i)), r && y(o) && o(r[0]), r = o = void 0
			}), "script"
		}), m.createHTMLDocument = ((x = k.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === x.childNodes.length), E.parseHTML = function(e, t, n) {
			return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((i = (t = k.implementation.createHTMLDocument("")).createElement("base")).href = k.location.href, t.head.appendChild(i)) : t = k), i = !n && [], (n = ae.exec(e)) ? [t.createElement(n[1])] : (n = Te([e], t, i), i && i.length && E(i).remove(), E.merge([], n.childNodes)));
			var i
		}, E.fn.load = function(e, t, n) {
			var i, o, r, s = this,
				a = e.indexOf(" ");
			return -1 < a && (i = q(e.slice(a)), e = e.slice(0, a)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && E.ajax({
				url: e,
				type: o || "GET",
				dataType: "html",
				data: t
			}).done(function(e) {
				r = arguments, s.html(i ? E("<div>").append(E.parseHTML(e)).find(i) : e)
			}).always(n && function(e, t) {
				s.each(function() {
					n.apply(this, r || [e.responseText, t, e])
				})
			}), this
		}, E.expr.pseudos.animated = function(t) {
			return E.grep(E.timers, function(e) {
				return t === e.elem
			}).length
		}, E.offset = {
			setOffset: function(e, t, n) {
				var i, o, r, s, a = E.css(e, "position"),
					l = E(e),
					c = {};
				"static" === a && (e.style.position = "relative"), r = l.offset(), i = E.css(e, "top"), s = E.css(e, "left"), a = ("absolute" === a || "fixed" === a) && -1 < (i + s).indexOf("auto") ? (o = (a = l.position()).top, a.left) : (o = parseFloat(i) || 0, parseFloat(s) || 0), null != (t = y(t) ? t.call(e, n, E.extend({}, r)) : t).top && (c.top = t.top - r.top + o), null != t.left && (c.left = t.left - r.left + a), "using" in t ? t.using.call(e, c) : l.css(c)
			}
		}, E.fn.extend({
			offset: function(t) {
				if (arguments.length) return void 0 === t ? this : this.each(function(e) {
					E.offset.setOffset(this, t, e)
				});
				var e, n = this[0];
				return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, {
					top: e.top + n.pageYOffset,
					left: e.left + n.pageXOffset
				}) : {
					top: 0,
					left: 0
				} : void 0
			},
			position: function() {
				if (this[0]) {
					var e, t, n, i = this[0],
						o = {
							top: 0,
							left: 0
						};
					if ("fixed" === E.css(i, "position")) t = i.getBoundingClientRect();
					else {
						for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position");) e = e.parentNode;
						e && e !== i && 1 === e.nodeType && ((o = E(e).offset()).top += E.css(e, "borderTopWidth", !0), o.left += E.css(e, "borderLeftWidth", !0))
					}
					return {
						top: t.top - o.top - E.css(i, "marginTop", !0),
						left: t.left - o.left - E.css(i, "marginLeft", !0)
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for (var e = this.offsetParent; e && "static" === E.css(e, "position");) e = e.offsetParent;
					return e || N
				})
			}
		}), E.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(t, o) {
			var r = "pageYOffset" === o;
			E.fn[t] = function(e) {
				return d(this, function(e, t, n) {
					var i;
					if (g(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[o] : e[t];
					i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : e[t] = n
				}, t, e, arguments.length)
			}
		}), E.each(["top", "left"], function(e, n) {
			E.cssHooks[n] = Je(m.pixelPosition, function(e, t) {
				if (t) return t = Ye(e, n), rt.test(t) ? E(e).position()[n] + "px" : t
			})
		}), E.each({
			Height: "height",
			Width: "width"
		}, function(s, a) {
			E.each({
				padding: "inner" + s,
				content: a,
				"": "outer" + s
			}, function(i, r) {
				E.fn[r] = function(e, t) {
					var n = arguments.length && (i || "boolean" != typeof e),
						o = i || (!0 === e || !0 === t ? "margin" : "border");
					return d(this, function(e, t, n) {
						var i;
						return g(e) ? 0 === r.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? E.css(e, t, o) : E.style(e, t, n, o)
					}, a, n ? e : void 0, n)
				}
			})
		}), E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
			E.fn[t] = function(e) {
				return this.on(t, e)
			}
		}), E.fn.extend({
			bind: function(e, t, n) {
				return this.on(e, null, t, n)
			},
			unbind: function(e, t) {
				return this.off(e, null, t)
			},
			delegate: function(e, t, n, i) {
				return this.on(t, e, n, i)
			},
			undelegate: function(e, t, n) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
			},
			hover: function(e, t) {
				return this.mouseenter(e).mouseleave(t || e)
			}
		}), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
			E.fn[n] = function(e, t) {
				return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
			}
		}), /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g),
		on = (E.proxy = function(e, t) {
			var n, i;
			if ("string" == typeof t && (i = e[t], t = e, e = i), y(e)) return n = f.call(arguments, 2), (i = function() {
				return e.apply(t || this, n.concat(f.call(arguments)))
			}).guid = e.guid = e.guid || E.guid++, i
		}, E.holdReady = function(e) {
			e ? E.readyWait++ : E.ready(!0)
		}, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = l, E.isFunction = y, E.isWindow = g, E.camelCase = b, E.type = p, E.now = Date.now, E.isNumeric = function(e) {
			var t = E.type(e);
			return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
		}, E.trim = function(e) {
			return null == e ? "" : (e + "").replace(nn, "")
		}, "function" == typeof define && define.amd && define("jquery", [], function() {
			return E
		}), C.jQuery),
		rn = C.$;
	return E.noConflict = function(e) {
		return C.$ === E && (C.$ = rn), e && C.jQuery === E && (C.jQuery = on), E
	}, void 0 === B && (C.jQuery = C.$ = E), E
}), ae = this, se = function() {
		return i = [function(e, t, n) {
			"use strict";

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function o() {
				p = (0, h.default)(), y()
			}
			var r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n, i = arguments[t];
						for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				},
				s = (i(n(1)), n(6)),
				a = i(s),
				l = i(n(7)),
				c = i(n(8)),
				u = i(n(9)),
				d = i(n(10)),
				f = i(n(11)),
				h = i(n(14)),
				p = [],
				g = !1,
				m = document.all && !window.atob,
				v = {
					offset: 120,
					delay: 0,
					easing: "ease",
					duration: 400,
					disable: !1,
					once: !1,
					startEvent: "DOMContentLoaded",
					throttleDelay: 99,
					debounceDelay: 50,
					disableMutationObserver: !1
				},
				y = function() {
					if (g = !!(0 < arguments.length && void 0 !== arguments[0] && arguments[0]) || g) return p = (0, f.default)(p, v), (0, d.default)(p, v.once), p
				};
			e.exports = {
				init: function(e) {
					return v = r(v, e), p = (0, h.default)(), !0 === (e = v.disable) || "mobile" === e && u.default.mobile() || "phone" === e && u.default.phone() || "tablet" === e && u.default.tablet() || "function" == typeof e && !0 === e() || m ? void p.forEach(function(e, t) {
						e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
					}) : (document.querySelector("body").setAttribute("data-aos-easing", v.easing), document.querySelector("body").setAttribute("data-aos-duration", v.duration), document.querySelector("body").setAttribute("data-aos-delay", v.delay), "DOMContentLoaded" === v.startEvent && -1 < ["complete", "interactive"].indexOf(document.readyState) ? y(!0) : ("load" === v.startEvent ? window : document).addEventListener(v.startEvent, function() {
						y(!0)
					}), window.addEventListener("resize", (0, l.default)(y, v.debounceDelay, !0)), window.addEventListener("orientationchange", (0, l.default)(y, v.debounceDelay, !0)), window.addEventListener("scroll", (0, a.default)(function() {
						(0, d.default)(p, v.once)
					}, v.throttleDelay)), v.disableMutationObserver || (0, c.default)("[data-aos]", o), p)
				},
				refresh: y,
				refreshHard: o
			}
		}, function(e, t) {}, , , , , function(v, e) {
			! function(e) {
				"use strict";

				function r(i, n, e) {
					function o(e) {
						var t = l,
							n = c;
						return l = c = void 0, p = e, d = i.apply(n, t)
					}

					function r(e) {
						var t = e - h;
						return void 0 === h || n <= t || t < 0 || m && u <= e - p
					}

					function s() {
						var e, t = k();
						return r(t) ? a(t) : void(f = setTimeout(s, (e = n - (t - h), m ? C(e, u - (t - p)) : e)))
					}

					function a(e) {
						return f = void 0, v && l ? o(e) : (l = c = void 0, d)
					}

					function t() {
						var e = k(),
							t = r(e);
						if (l = arguments, c = this, h = e, t) {
							if (void 0 === f) return p = e = h, f = setTimeout(s, n), g ? o(e) : d;
							if (m) return f = setTimeout(s, n), o(h)
						}
						return void 0 === f && (f = setTimeout(s, n)), d
					}
					var l, c, u, d, f, h, p = 0,
						g = !1,
						m = !1,
						v = !0;
					if ("function" != typeof i) throw new TypeError(x);
					return n = b(n) || 0, y(e) && (g = !!e.leading, m = "maxWait" in e, u = m ? w(b(e.maxWait) || 0, n) : u, v = "trailing" in e ? !!e.trailing : v), t.cancel = function() {
						void 0 !== f && clearTimeout(f), l = h = c = f = void(p = 0)
					}, t.flush = function() {
						return void 0 === f ? d : a(k())
					}, t
				}

				function y(e) {
					var t = void 0 === e ? "undefined" : i(e);
					return e && ("object" == t || "function" == t)
				}

				function n(e) {
					return "symbol" == (void 0 === e ? "undefined" : i(e)) || e && "object" == (void 0 === e ? "undefined" : i(e)) && "[object Symbol]" == m.call(e);
					var t
				}

				function b(e) {
					if ("number" == typeof e) return e;
					if (n(e)) return l;
					if ("string" != typeof(e = y(e) ? y(t = "function" == typeof e.valueOf ? e.valueOf() : e) ? t + "" : t : e)) return 0 === e ? e : +e;
					e = e.replace(c, "");
					var t = d.test(e);
					return t || f.test(e) ? h(e.slice(2), t ? 2 : 8) : u.test(e) ? l : +e
				}
				var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					x = "Expected a function",
					l = NaN,
					c = /^\s+|\s+$/g,
					u = /^[-+]0x[0-9a-f]+$/i,
					d = /^0b[01]+$/i,
					f = /^0o[0-7]+$/i,
					h = parseInt,
					e = "object" == (void 0 === e ? "undefined" : i(e)) && e && e.Object === Object && e,
					p = "object" == ("undefined" == typeof self ? "undefined" : i(self)) && self && self.Object === Object && self,
					g = e || p || Function("return this")(),
					m = Object.prototype.toString,
					w = Math.max,
					C = Math.min,
					k = function() {
						return g.Date.now()
					};
				v.exports = function(e, t, n) {
					var i = !0,
						o = !0;
					if ("function" != typeof e) throw new TypeError(x);
					return y(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), r(e, t, {
						leading: i,
						maxWait: t,
						trailing: o
					})
				}
			}.call(e, function() {
				return this
			}())
		}, function(k, e) {
			! function(e) {
				"use strict";

				function y(e) {
					var t = void 0 === e ? "undefined" : i(e);
					return e && ("object" == t || "function" == t)
				}

				function n(e) {
					return "symbol" == (void 0 === e ? "undefined" : i(e)) || e && "object" == (void 0 === e ? "undefined" : i(e)) && v.call(e) == c;
					var t
				}

				function b(e) {
					if ("number" == typeof e) return e;
					if (n(e)) return l;
					if ("string" != typeof(e = y(e) ? y(t = "function" == typeof e.valueOf ? e.valueOf() : e) ? t + "" : t : e)) return 0 === e ? e : +e;
					e = e.replace(u, "");
					var t = f.test(e);
					return t || h.test(e) ? p(e.slice(2), t ? 2 : 8) : d.test(e) ? l : +e
				}

				function x() {
					return m.Date.now()
				}
				var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					l = NaN,
					c = "[object Symbol]",
					u = /^\s+|\s+$/g,
					d = /^[-+]0x[0-9a-f]+$/i,
					f = /^0b[01]+$/i,
					h = /^0o[0-7]+$/i,
					p = parseInt,
					e = "object" == (void 0 === e ? "undefined" : i(e)) && e && e.Object === Object && e,
					g = "object" == ("undefined" == typeof self ? "undefined" : i(self)) && self && self.Object === Object && self,
					m = e || g || Function("return this")(),
					v = Object.prototype.toString,
					w = Math.max,
					C = Math.min;
				k.exports = function(i, n, e) {
					function o(e) {
						var t = l,
							n = c;
						return l = c = void 0, p = e, d = i.apply(n, t)
					}

					function r(e) {
						var t = e - h;
						return void 0 === h || n <= t || t < 0 || m && u <= e - p
					}

					function s() {
						var e, t = x();
						return r(t) ? a(t) : void(f = setTimeout(s, (e = n - (t - h), m ? C(e, u - (t - p)) : e)))
					}

					function a(e) {
						return f = void 0, v && l ? o(e) : (l = c = void 0, d)
					}

					function t() {
						var e = x(),
							t = r(e);
						if (l = arguments, c = this, h = e, t) {
							if (void 0 === f) return p = e = h, f = setTimeout(s, n), g ? o(e) : d;
							if (m) return f = setTimeout(s, n), o(h)
						}
						return void 0 === f && (f = setTimeout(s, n)), d
					}
					var l, c, u, d, f, h, p = 0,
						g = !1,
						m = !1,
						v = !0;
					if ("function" != typeof i) throw new TypeError("Expected a function");
					return n = b(n) || 0, y(e) && (g = !!e.leading, m = "maxWait" in e, u = m ? w(b(e.maxWait) || 0, n) : u, v = "trailing" in e ? !!e.trailing : v), t.cancel = function() {
						void 0 !== f && clearTimeout(f), l = h = c = f = void(p = 0)
					}, t.flush = function() {
						return void 0 === f ? d : a(x())
					}, t
				}
			}.call(e, function() {
				return this
			}())
		}, function(e, t) {
			"use strict";

			function i(e) {
				e && e.forEach(function(e) {
					var t = Array.prototype.slice.call(e.addedNodes),
						e = Array.prototype.slice.call(e.removedNodes);
					t.concat(e).filter(function(e) {
						return e.hasAttribute && e.hasAttribute("data-aos")
					}).length && s()
				})
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var o = window.document,
				r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
				s = function() {};
			t.default = function(e, t) {
				var n = new r(i);
				s = t, n.observe(o.documentElement, {
					childList: !0,
					subtree: !0,
					removedNodes: !0
				})
			}
		}, function(e, t) {
			"use strict";

			function n() {
				return navigator.userAgent || navigator.vendor || window.opera || ""
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
				o = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
				r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
				s = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
				a = (c((u = l).prototype, d = [{
					key: "phone",
					value: function() {
						var e = n();
						return !(!i.test(e) && !o.test(e.substr(0, 4)))
					}
				}, {
					key: "mobile",
					value: function() {
						var e = n();
						return !(!r.test(e) && !s.test(e.substr(0, 4)))
					}
				}, {
					key: "tablet",
					value: function() {
						return this.mobile() && !this.phone()
					}
				}]), l),
				u, d, f;

			function l() {
				if (!(this instanceof l)) throw new TypeError("Cannot call a class as a function")
			}

			function c(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			t.default = new a
		}, function(e, t) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = function(e, r) {
				var s = window.pageYOffset,
					a = window.innerHeight;
				e.forEach(function(e, t) {
					var n, i, o, n = a + s,
						i = r,
						o = e.node.getAttribute("data-aos-once");
					n > e.position ? e.node.classList.add("aos-animate") : void 0 === o || "false" !== o && (i || "true" === o) || e.node.classList.remove("aos-animate")
				})
				
				if ($(".banner__scroll").length) { $(".banner__scroll, .banner__bottom-text").addClass("aos-animate")}

			}
		}, function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, i = (n = n(12)) && n.__esModule ? n : {
				default: n
			};
			t.default = function(e, n) {
				return e.forEach(function(e, t) {
					e.node.classList.add("aos-init"), e.position = (0, i.default)(e.node, n.offset)
				}), e
			}
		}, function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = (n = n(13)) && n.__esModule ? n : {
				default: n
			};
			t.default = function(e, t) {
				var n = 0,
					i = 0,
					o = window.innerHeight,
					r = {
						offset: e.getAttribute("data-aos-offset"),
						anchor: e.getAttribute("data-aos-anchor"),
						anchorPlacement: e.getAttribute("data-aos-anchor-placement")
					};
				switch (r.offset && !isNaN(r.offset) && (i = parseInt(r.offset)), r.anchor && document.querySelectorAll(r.anchor) && (e = document.querySelectorAll(r.anchor)[0]), n = (0, s.default)(e).top, r.anchorPlacement) {
					case "top-bottom":
						break;
					case "center-bottom":
						n += e.offsetHeight / 2;
						break;
					case "bottom-bottom":
						n += e.offsetHeight;
						break;
					case "top-center":
						n += o / 2;
						break;
					case "bottom-center":
						n += o / 2 + e.offsetHeight;
						break;
					case "center-center":
						n += o / 2 + e.offsetHeight / 2;
						break;
					case "top-top":
						n += o;
						break;
					case "bottom-top":
						n += e.offsetHeight + o;
						break;
					case "center-top":
						n += e.offsetHeight / 2 + o
				}
				return n + (r.anchorPlacement || r.offset || isNaN(t) ? i : t)
			}
		}, function(e, t) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = function(e) {
				for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
				return {
					top: n,
					left: t
				}
			}
		}, function(e, t) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = function(e) {
				return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function(e) {
					return {
						node: e
					}
				})
			}
		}], o = {}, n.m = i, n.c = o, n.p = "dist/", n(0);

		function n(e) {
			if (o[e]) return o[e].exports;
			var t = o[e] = {
				exports: {},
				id: e,
				loaded: !1
			};
			return i[e].call(t.exports, t, t.exports, n), t.loaded = !0, t.exports
		}
		var i, o
	}, "object" == typeof exports && "object" == typeof module ? module.exports = se() : "function" == typeof define && define.amd ? define([], se) : "object" == typeof exports ? exports.AOS = se() : ae.AOS = se(), ee = window, te = function(e, t) {
		"use strict";
		var n = Array.prototype.slice,
			i = e.console,
			d = void 0 === i ? function() {} : function(e) {
				i.error(e)
			};

		function o(l, c, u) {
			(u = u || t || e.jQuery) && (c.prototype.option || (c.prototype.option = function(e) {
				u.isPlainObject(e) && (this.options = u.extend(!0, this.options, e))
			}), u.fn[l] = function(e) {
				return "string" == typeof e ? (t = this, o = e, r = n.call(arguments, 1), a = "$()." + l + '("' + o + '")', t.each(function(e, t) {
					var n, t;
					(t = u.data(t, l)) ? (n = t[o]) && "_" != o.charAt(0) ? (n = n.apply(t, r), s = void 0 === s ? n : s) : d(a + " is not a valid method"): d(l + " not initialized. Cannot call methods, i.e. " + a)
				}), void 0 !== s ? s : t) : (i = e, this.each(function(e, t) {
					var n = u.data(t, l);
					n ? (n.option(i), n._init()) : (n = new c(t, i), u.data(t, l, n))
				}), this);
				var i, t, o, r, s, a
			}, r(u))
		}

		function r(e) {
			e && !e.bridget && (e.bridget = o)
		}
		return r(t || e.jQuery), o
	}, "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(e) {
		return te(ee, e)
	}) : "object" == typeof module && module.exports ? module.exports = te(ee, require("jquery")) : ee.jQueryBridget = te(ee, ee.jQuery), ae = "undefined" != typeof window ? window : this, se = function() {
		function e() {}
		var t = e.prototype;
		return t.on = function(e, t) {
			var n;
			if (e && t) return -1 == (n = (n = this._events = this._events || {})[e] = n[e] || []).indexOf(t) && n.push(t), this
		}, t.once = function(e, t) {
			var n;
			if (e && t) return this.on(e, t), ((n = this._onceEvents = this._onceEvents || {})[e] = n[e] || {})[t] = !0, this
		}, t.off = function(e, t) {
			if ((e = this._events && this._events[e]) && e.length) return -1 != (t = e.indexOf(t)) && e.splice(t, 1), this
		}, t.emitEvent = function(e, t) {
			var n = this._events && this._events[e];
			if (n && n.length) {
				n = n.slice(0), t = t || [];
				for (var i = this._onceEvents && this._onceEvents[e], o = 0; o < n.length; o++) {
					var r = n[o];
					i && i[r] && (this.off(e, r), delete i[r]), r.apply(this, t)
				}
				return this
			}
		}, t.allOff = function() {
			delete this._events, delete this._onceEvents
		}, e
	}, "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", se) : "object" == typeof module && module.exports ? module.exports = se() : ae.EvEmitter = se(), ae = window, se = function() {
		"use strict";

		function m(e) {
			var t = parseFloat(e);
			return -1 == e.indexOf("%") && !isNaN(t) && t
		}
		var t = "undefined" == typeof console ? function() {} : function(e) {},
			g = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
			v = g.length;

		function b(e) {
			return (e = getComputedStyle(e)) || t("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
		}
		var y, x = !1;

		function C(e) {
			if (x || (x = !0, (u = document.createElement("div")).style.width = "200px", u.style.padding = "1px 2px 3px 4px", u.style.borderStyle = "solid", u.style.borderWidth = "1px 2px 3px 4px", u.style.boxSizing = "border-box", (c = document.body || document.documentElement).appendChild(u), r = b(u), y = 200 == Math.round(m(r.width)), C.isBoxSizeOuter = y, c.removeChild(u)), (e = "string" == typeof e ? document.querySelector(e) : e) && "object" == typeof e && e.nodeType) {
				var t = b(e);
				if ("none" == t.display) {
					for (var n = {
							width: 0,
							height: 0,
							innerWidth: 0,
							innerHeight: 0,
							outerWidth: 0,
							outerHeight: 0
						}, i = 0; i < v; i++) n[g[i]] = 0;
					return n
				}
				var o = {};
				o.width = e.offsetWidth, o.height = e.offsetHeight;
				for (var r = o.isBorderBox = "border-box" == t.boxSizing, s = 0; s < v; s++) {
					var a = g[s],
						l = t[a],
						l = parseFloat(l);
					o[a] = isNaN(l) ? 0 : l
				}
				var c = o.paddingLeft + o.paddingRight,
					u = o.paddingTop + o.paddingBottom,
					e = o.marginLeft + o.marginRight,
					d = o.marginTop + o.marginBottom,
					f = o.borderLeftWidth + o.borderRightWidth,
					h = o.borderTopWidth + o.borderBottomWidth,
					r = r && y,
					p = m(t.width),
					p;
				return !1 !== p && (o.width = p + (r ? 0 : c + f)), !1 !== (p = m(t.height)) && (o.height = p + (r ? 0 : u + h)), o.innerWidth = o.width - (c + f), o.innerHeight = o.height - (u + h), o.outerWidth = o.width + e, o.outerHeight = o.height + d, o
			}
			var u, c, r
		}
		return C
	}, "function" == typeof define && define.amd ? define("get-size/get-size", se) : "object" == typeof module && module.exports ? module.exports = se() : ae.getSize = se(),
	function(e, t) {
		"use strict";
		"function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
	}(window, function() {
		"use strict";
		var n = function() {
			var e = window.Element.prototype;
			if (e.matches) return "matches";
			if (e.matchesSelector) return "matchesSelector";
			for (var t = ["webkit", "moz", "ms", "o"], n = 0; n < t.length; n++) {
				var i = t[n] + "MatchesSelector";
				if (e[i]) return i
			}
		}();
		return function(e, t) {
			return e[n](t)
		}
	}), J = window, Z = function(n, r) {
		var l = {
				extend: function(e, t) {
					for (var n in t) e[n] = t[n];
					return e
				},
				modulo: function(e, t) {
					return (e % t + t) % t
				}
			},
			t = Array.prototype.slice,
			c = (l.makeArray = function(e) {
				return Array.isArray(e) ? e : null == e ? [] : "object" == typeof e && "number" == typeof e.length ? t.call(e) : [e]
			}, l.removeFrom = function(e, t) {
				-1 != (t = e.indexOf(t)) && e.splice(t, 1)
			}, l.getParent = function(e, t) {
				for (; e.parentNode && e != document.body;)
					if (e = e.parentNode, r(e, t)) return e
			}, l.getQueryElement = function(e) {
				return "string" == typeof e ? document.querySelector(e) : e
			}, l.handleEvent = function(e) {
				var t = "on" + e.type;
				this[t] && this[t](e)
			}, l.filterFindElements = function(e, i) {
				e = l.makeArray(e);
				var o = [];
				return e.forEach(function(e) {
					if (e instanceof HTMLElement)
						if (i) {
							r(e, i) && o.push(e);
							for (var t = e.querySelectorAll(i), n = 0; n < t.length; n++) o.push(t[n])
						} else o.push(e)
				}), o
			}, l.debounceMethod = function(e, t, i) {
				i = i || 100;
				var o = e.prototype[t],
					r = t + "Timeout";
				e.prototype[t] = function() {
					var e = this[r],
						t = (clearTimeout(e), arguments),
						n = this;
					this[r] = setTimeout(function() {
						o.apply(n, t), delete n[r]
					}, i)
				}
			}, l.docReady = function(e) {
				var t = document.readyState;
				"complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
			}, l.toDashed = function(e) {
				return e.replace(/(.)([A-Z])/g, function(e, t, n) {
					return t + "-" + n
				}).toLowerCase()
			}, n.console);
		return l.htmlInit = function(s, a) {
			l.docReady(function() {
				var e, i = "data-" + (e = l.toDashed(a)),
					t = document.querySelectorAll("[" + i + "]"),
					e = document.querySelectorAll(".js-" + e),
					t = l.makeArray(t).concat(l.makeArray(e)),
					o = i + "-options",
					r = n.jQuery;
				t.forEach(function(e) {
					var t, n = e.getAttribute(i) || e.getAttribute(o);
					try {
						t = n && JSON.parse(n)
					} catch (t) {
						return void(c && c.error("Error parsing " + i + " on " + e.className + ": " + t))
					}
					n = new s(e, t), r && r.data(e, a, n)
				})
			})
		}, l
	}, "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(e) {
		return Z(J, e)
	}) : "object" == typeof module && module.exports ? module.exports = Z(J, require("desandro-matches-selector")) : J.fizzyUIUtils = Z(J, J.matchesSelector), ae = window, Y = function(e, t) {
		function n(e, t) {
			this.element = e, this.parent = t, this.create()
		}
		var i = n.prototype;
		return i.create = function() {
			this.element.style.position = "absolute", this.element.setAttribute("aria-hidden", "true"), this.x = 0, this.shift = 0
		}, i.destroy = function() {
			this.unselect(), this.element.style.position = "";
			var e = this.parent.originSide;
			this.element.style[e] = ""
		}, i.getSize = function() {
			this.size = t(this.element)
		}, i.setPosition = function(e) {
			this.x = e, this.updateTarget(), this.renderPosition(e)
		}, i.updateTarget = i.setDefaultTarget = function() {
			var e = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
			this.target = this.x + this.size[e] + this.size.width * this.parent.cellAlign
		}, i.renderPosition = function(e) {
			var t = this.parent.originSide;
			this.element.style[t] = this.parent.getPositionValue(e)
		}, i.select = function() {
			this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden")
		}, i.unselect = function() {
			this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true")
		}, i.wrapShift = function(e) {
			this.shift = e, this.renderPosition(this.x + this.parent.slideableWidth * e)
		}, i.remove = function() {
			this.element.parentNode.removeChild(this.element)
		}, n
	}, "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(e) {
		return Y(0, e)
	}) : "object" == typeof module && module.exports ? module.exports = Y(0, require("get-size")) : (ae.Flickity = ae.Flickity || {}, ae.Flickity.Cell = Y(0, ae.getSize)), se = window, ae = function() {
		"use strict";

		function e(e) {
			this.parent = e, this.isOriginLeft = "left" == e.originSide, this.cells = [], this.outerWidth = 0, this.height = 0
		}
		var t = e.prototype;
		return t.addCell = function(e) {
			var t;
			this.cells.push(e), this.outerWidth += e.size.outerWidth, this.height = Math.max(e.size.outerHeight, this.height), 1 == this.cells.length && (this.x = e.x, t = this.isOriginLeft ? "marginLeft" : "marginRight", this.firstMargin = e.size[t])
		}, t.updateTarget = function() {
			var e = this.isOriginLeft ? "marginRight" : "marginLeft",
				t, t = (t = this.getLastCell()) ? t.size[e] : 0,
				e = this.outerWidth - (this.firstMargin + t);
			this.target = this.x + this.firstMargin + e * this.parent.cellAlign
		}, t.getLastCell = function() {
			return this.cells[this.cells.length - 1]
		}, t.select = function() {
			this.cells.forEach(function(e) {
				e.select()
			})
		}, t.unselect = function() {
			this.cells.forEach(function(e) {
				e.unselect()
			})
		}, t.getCellElements = function() {
			return this.cells.map(function(e) {
				return e.element
			})
		}, e
	}, "function" == typeof define && define.amd ? define("flickity/js/slide", ae) : "object" == typeof module && module.exports ? module.exports = ae() : (se.Flickity = se.Flickity || {}, se.Flickity.Slide = ae()), se = window, V = function(e, t) {
		return {
			startAnimation: function() {
				this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
			},
			animate: function() {
				this.applyDragForce(), this.applySelectedAttraction();
				var e, t = this.x;
				this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating && (e = this, requestAnimationFrame(function() {
					e.animate()
				}))
			},
			positionSlider: function() {
				var e = this.x;
				this.options.wrapAround && 1 < this.cells.length && (e = t.modulo(e, this.slideableWidth), e -= this.slideableWidth, this.shiftWrapCells(e)), this.setTranslateX(e, this.isAnimating), this.dispatchScrollEvent()
			},
			setTranslateX: function(e, t) {
				e += this.cursorPosition, e = this.options.rightToLeft ? -e : e, e = this.getPositionValue(e), this.slider.style.transform = t ? "translate3d(" + e + ",0,0)" : "translateX(" + e + ")"
			},
			dispatchScrollEvent: function() {
				var e, t = this.slides[0];
				t && (e = (t = -this.x - t.target) / this.slidesWidth, this.dispatchEvent("scroll", null, [e, t]))
			},
			positionSliderAtSelected: function() {
				this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
			},
			getPositionValue: function(e) {
				return this.options.percentPosition ? .01 * Math.round(e / this.size.innerWidth * 1e4) + "%" : Math.round(e) + "px"
			},
			settle: function(e) {
				this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * e) || this.restingFrames++, 2 < this.restingFrames && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]))
			},
			shiftWrapCells: function(e) {
				var t = this.cursorPosition + e,
					t = (this._shiftCells(this.beforeShiftCells, t, -1), this.size.innerWidth - (e + this.slideableWidth + this.cursorPosition));
				this._shiftCells(this.afterShiftCells, t, 1)
			},
			_shiftCells: function(e, t, n) {
				for (var i = 0; i < e.length; i++) {
					var o = e[i];
					o.wrapShift(0 < t ? n : 0), t -= o.size.outerWidth
				}
			},
			_unshiftCells: function(e) {
				if (e && e.length)
					for (var t = 0; t < e.length; t++) e[t].wrapShift(0)
			},
			integratePhysics: function() {
				this.x += this.velocity, this.velocity *= this.getFrictionFactor()
			},
			applyForce: function(e) {
				this.velocity += e
			},
			getFrictionFactor: function() {
				return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
			},
			getRestingPosition: function() {
				return this.x + this.velocity / (1 - this.getFrictionFactor())
			},
			applyDragForce: function() {
				var e;
				this.isDraggable && this.isPointerDown && (e = this.dragX - this.x - this.velocity, this.applyForce(e))
			},
			applySelectedAttraction: function() {
				var e;
				this.isDraggable && this.isPointerDown || this.isFreeScrolling || !this.slides.length || (e = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction, this.applyForce(e))
			}
		}
	}, "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function(e) {
		return V(0, e)
	}) : "object" == typeof module && module.exports ? module.exports = V(0, require("fizzy-ui-utils")) : (se.Flickity = se.Flickity || {}, se.Flickity.animatePrototype = V(0, se.fizzyUIUtils)), R = window, U = function(i, e, t, s, n, a, o) {
		var r = i.jQuery,
			l = i.getComputedStyle,
			c = i.console;

		function u(e, t) {
			for (e = s.makeArray(e); e.length;) t.appendChild(e.shift())
		}
		var d = 0,
			f = {};

		function h(e, t) {
			var n, i = s.getQueryElement(e);
			if (i) {
				if (this.element = i, this.element.flickityGUID) return (n = f[this.element.flickityGUID]).option(t), n;
				r && (this.$element = r(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(t), this._create()
			} else c && c.error("Bad element for Flickity: " + (i || e))
		}
		h.defaults = {
			accessibility: !0,
			cellAlign: "center",
			freeScrollFriction: .075,
			friction: .28,
			namespaceJQueryEvents: !0,
			percentPosition: !0,
			resize: !0,
			selectedAttraction: .025,
			setGallerySize: !0
		}, h.createMethods = [];
		var p = h.prototype,
			g = (s.extend(p, e.prototype), p._create = function() {
				var e, t = this.guid = ++d;
				for (e in this.element.flickityGUID = t, (f[t] = this).selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && i.addEventListener("resize", this), this.options.on) {
					var n = this.options.on[e];
					this.on(e, n)
				}
				h.createMethods.forEach(function(e) {
					this[e]()
				}, this), this.options.watchCSS ? this.watchCSS() : this.activate()
			}, p.option = function(e) {
				s.extend(this.options, e)
			}, p.activate = function() {
				this.isActive || (this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), u(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready"))
			}, p._createSlider = function() {
				var e = document.createElement("div");
				e.className = "flickity-slider", e.style[this.originSide] = 0, this.slider = e
			}, p._filterFindCellElements = function(e) {
				return s.filterFindElements(e, this.options.cellSelector)
			}, p.reloadCells = function() {
				this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
			}, p._makeCells = function(e) {
				return this._filterFindCellElements(e).map(function(e) {
					return new n(e, this)
				}, this)
			}, p.getLastCell = function() {
				return this.cells[this.cells.length - 1]
			}, p.getLastSlide = function() {
				return this.slides[this.slides.length - 1]
			}, p.positionCells = function() {
				this._sizeCells(this.cells), this._positionCells(0)
			}, p._positionCells = function(e) {
				this.maxCellHeight = (e = e || 0) && this.maxCellHeight || 0;
				var t, n = 0;
				0 < e && (n = (t = this.cells[e - 1]).x + t.size.outerWidth);
				for (var i = this.cells.length, o = e; o < i; o++) {
					var r = this.cells[o];
					r.setPosition(n), n += r.size.outerWidth, this.maxCellHeight = Math.max(r.size.outerHeight, this.maxCellHeight)
				}
				this.slideableWidth = n, this.updateSlides(), this._containSlides(), this.slidesWidth = i ? this.getLastSlide().target - this.slides[0].target : 0
			}, p._sizeCells = function(e) {
				e.forEach(function(e) {
					e.getSize()
				})
			}, p.updateSlides = function() {
				var i, o, r;
				this.slides = [], this.cells.length && (i = new a(this), this.slides.push(i), o = "left" == this.originSide ? "marginRight" : "marginLeft", r = this._getCanCellFit(), this.cells.forEach(function(e, t) {
					var n;
					i.cells.length && (n = i.outerWidth - i.firstMargin + (e.size.outerWidth - e.size[o]), r.call(this, t, n) || (i.updateTarget(), i = new a(this), this.slides.push(i))), i.addCell(e)
				}, this), i.updateTarget(), this.updateSelectedSlide())
			}, p._getCanCellFit = function() {
				var t, e = this.options.groupCells;
				if (!e) return function() {
					return !1
				};
				if ("number" == typeof e) return t = parseInt(e, 10),
					function(e) {
						return e % t != 0
					};
				var e, n = (e = "string" == typeof e && e.match(/^(\d+)%$/)) ? parseInt(e[1], 10) / 100 : 1;
				return function(e, t) {
					return t <= (this.size.innerWidth + 1) * n
				}
			}, p._init = p.reposition = function() {
				this.positionCells(), this.positionSliderAtSelected()
			}, p.getSize = function() {
				this.size = t(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
			}, {
				center: {
					left: .5,
					right: .5
				},
				left: {
					left: 0,
					right: 1
				},
				right: {
					right: 0,
					left: 1
				}
			});
		return p.setCellAlign = function() {
			var e = g[this.options.cellAlign];
			this.cellAlign = e ? e[this.originSide] : this.options.cellAlign
		}, p.setGallerySize = function() {
			var e;
			this.options.setGallerySize && (e = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight, this.viewport.style.height = e + "px")
		}, p._getWrapShiftCells = function() {
			var e, t;
			this.options.wrapAround && (this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells), e = this.cursorPosition, t = this.cells.length - 1, this.beforeShiftCells = this._getGapCells(e, t, -1), e = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(e, 0, 1))
		}, p._getGapCells = function(e, t, n) {
			for (var i = []; 0 < e;) {
				var o = this.cells[t];
				if (!o) break;
				i.push(o), t += n, e -= o.size.outerWidth
			}
			return i
		}, p._containSlides = function() {
			var e, t, n, i, o, r;
			this.options.contain && !this.options.wrapAround && this.cells.length && (e = (t = this.options.rightToLeft) ? "marginRight" : "marginLeft", t = t ? "marginLeft" : "marginRight", n = this.slideableWidth - this.getLastCell().size[t], i = n < this.size.innerWidth, o = this.cursorPosition + this.cells[0].size[e], r = n - this.size.innerWidth * (1 - this.cellAlign), this.slides.forEach(function(e) {
				i ? e.target = n * this.cellAlign : (e.target = Math.max(e.target, o), e.target = Math.min(e.target, r))
			}, this))
		}, p.dispatchEvent = function(e, t, n) {
			var i = t ? [t].concat(n) : n;
			this.emitEvent(e, i), r && this.$element && (i = e += this.options.namespaceJQueryEvents ? ".flickity" : "", t && ((t = r.Event(t)).type = e, i = t), this.$element.trigger(i, n))
		}, p.select = function(e, t, n) {
			this.isActive && (e = parseInt(e, 10), this._wrapSelect(e), (this.options.wrapAround || t) && (e = s.modulo(e, this.slides.length)), this.slides[e]) && (t = this.selectedIndex, this.selectedIndex = e, this.updateSelectedSlide(), n ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [e]), e != t && this.dispatchEvent("change", null, [e]), this.dispatchEvent("cellSelect"))
		}, p._wrapSelect = function(e) {
			var t = this.slides.length;
			if (!(this.options.wrapAround && 1 < t)) return e;
			var n = s.modulo(e, t),
				i = Math.abs(n - this.selectedIndex),
				o = Math.abs(n + t - this.selectedIndex),
				n = Math.abs(n - t - this.selectedIndex);
			!this.isDragSelect && o < i ? e += t : !this.isDragSelect && n < i && (e -= t), e < 0 ? this.x -= this.slideableWidth : t <= e && (this.x += this.slideableWidth)
		}, p.previous = function(e, t) {
			this.select(this.selectedIndex - 1, e, t)
		}, p.next = function(e, t) {
			this.select(this.selectedIndex + 1, e, t)
		}, p.updateSelectedSlide = function() {
			var e = this.slides[this.selectedIndex];
			e && (this.unselectSelectedSlide(), (this.selectedSlide = e).select(), this.selectedCells = e.cells, this.selectedElements = e.getCellElements(), this.selectedCell = e.cells[0], this.selectedElement = this.selectedElements[0])
		}, p.unselectSelectedSlide = function() {
			this.selectedSlide && this.selectedSlide.unselect()
		}, p.selectInitialIndex = function() {
			var e, t = this.options.initialIndex;
			this.isInitActivated ? this.select(this.selectedIndex, !1, !0) : t && "string" == typeof t && this.queryCell(t) ? this.selectCell(t, !1, !0) : (e = 0, t && this.slides[t] && (e = t), this.select(e, !1, !0))
		}, p.selectCell = function(e, t, n) {
			var e;
			(e = this.queryCell(e)) && (e = this.getCellSlideIndex(e), this.select(e, t, n))
		}, p.getCellSlideIndex = function(e) {
			for (var t = 0; t < this.slides.length; t++)
				if (-1 != this.slides[t].cells.indexOf(e)) return t
		}, p.getCell = function(e) {
			for (var t = 0; t < this.cells.length; t++) {
				var n = this.cells[t];
				if (n.element == e) return n
			}
		}, p.getCells = function(e) {
			e = s.makeArray(e);
			var t = [];
			return e.forEach(function(e) {
				(e = this.getCell(e)) && t.push(e)
			}, this), t
		}, p.getCellElements = function() {
			return this.cells.map(function(e) {
				return e.element
			})
		}, p.getParentCell = function(e) {
			return this.getCell(e) || (e = s.getParent(e, ".flickity-slider > *"), this.getCell(e))
		}, p.getAdjacentCellElements = function(e, t) {
			if (!e) return this.selectedSlide.getCellElements();
			t = void 0 === t ? this.selectedIndex : t;
			var n = this.slides.length;
			if (n <= 1 + 2 * e) return this.getCellElements();
			for (var i = [], o = t - e; o <= t + e; o++) {
				var r = this.options.wrapAround ? s.modulo(o, n) : o,
					r;
				(r = this.slides[r]) && (i = i.concat(r.getCellElements()))
			}
			return i
		}, p.queryCell = function(e) {
			if ("number" == typeof e) return this.cells[e];
			if ("string" == typeof e) {
				if (e.match(/^[#\.]?[\d\/]/)) return;
				e = this.element.querySelector(e)
			}
			return this.getCell(e)
		}, p.uiChange = function() {
			this.emitEvent("uiChange")
		}, p.childUIPointerDown = function(e) {
			"touchstart" != e.type && e.preventDefault(), this.focus()
		}, p.onresize = function() {
			this.watchCSS(), this.resize()
		}, s.debounceMethod(h, "onresize", 150), p.resize = function() {
			var e;
			this.isActive && (this.getSize(), this.options.wrapAround && (this.x = s.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize"), e = this.selectedElements && this.selectedElements[0], this.selectCell(e, !1, !0))
		}, p.watchCSS = function() {
			this.options.watchCSS && (-1 != l(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
		}, p.onkeydown = function(e) {
			var t = document.activeElement && document.activeElement != this.element;
			this.options.accessibility && !t && (t = h.keyboardHandlers[e.keyCode]) && t.call(this)
		}, h.keyboardHandlers = {
			37: function() {
				var e = this.options.rightToLeft ? "next" : "previous";
				this.uiChange(), this[e]()
			},
			39: function() {
				var e = this.options.rightToLeft ? "previous" : "next";
				this.uiChange(), this[e]()
			}
		}, p.focus = function() {
			var e = i.pageYOffset;
			this.element.focus({
				preventScroll: !0
			}), i.pageYOffset != e && i.scrollTo(i.pageXOffset, e)
		}, p.deactivate = function() {
			this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach(function(e) {
				e.destroy()
			}), this.element.removeChild(this.viewport), u(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
		}, p.destroy = function() {
			this.deactivate(), i.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), r && this.$element && r.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete f[this.guid]
		}, s.extend(p, o), h.data = function(e) {
			return (e = (e = s.getQueryElement(e)) && e.flickityGUID) && f[e]
		}, s.htmlInit(h, "flickity"), r && r.bridget && r.bridget("flickity", h), h.setJQuery = function(e) {
			r = e
		}, h.Cell = n, h.Slide = a, h
	}, "function" == typeof define && define.amd ? define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function(e, t, n, i, o, r) {
		return U(R, e, t, n, i, o, r)
	}) : "object" == typeof module && module.exports ? module.exports = U(R, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate")) : (ae = R.Flickity, R.Flickity = U(R, R.EvEmitter, R.getSize, R.fizzyUIUtils, ae.Cell, ae.Slide, ae.animatePrototype)), W = window, B = function(i, e) {
		function t() {}
		var e, n = ((e = t.prototype = Object.create(e.prototype)).bindStartEvent = function(e) {
			this._bindStartEvent(e, !0)
		}, e.unbindStartEvent = function(e) {
			this._bindStartEvent(e, !1)
		}, e._bindStartEvent = function(e, t) {
			var t = void 0 === t || t ? "addEventListener" : "removeEventListener",
				n = "mousedown";
			i.PointerEvent ? n = "pointerdown" : "ontouchstart" in i && (n = "touchstart"), e[t](n, this)
		}, e.handleEvent = function(e) {
			var t = "on" + e.type;
			this[t] && this[t](e)
		}, e.getTouch = function(e) {
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				if (n.identifier == this.pointerIdentifier) return n
			}
		}, e.onmousedown = function(e) {
			var t = e.button;
			t && 0 !== t && 1 !== t || this._pointerDown(e, e)
		}, e.ontouchstart = function(e) {
			this._pointerDown(e, e.changedTouches[0])
		}, e.onpointerdown = function(e) {
			this._pointerDown(e, e)
		}, e._pointerDown = function(e, t) {
			e.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== t.pointerId ? t.pointerId : t.identifier, this.pointerDown(e, t))
		}, e.pointerDown = function(e, t) {
			this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t])
		}, {
			mousedown: ["mousemove", "mouseup"],
			touchstart: ["touchmove", "touchend", "touchcancel"],
			pointerdown: ["pointermove", "pointerup", "pointercancel"]
		});
		return e._bindPostStartEvents = function(e) {
			e && ((e = n[e.type]).forEach(function(e) {
				i.addEventListener(e, this)
			}, this), this._boundPointerEvents = e)
		}, e._unbindPostStartEvents = function() {
			this._boundPointerEvents && (this._boundPointerEvents.forEach(function(e) {
				i.removeEventListener(e, this)
			}, this), delete this._boundPointerEvents)
		}, e.onmousemove = function(e) {
			this._pointerMove(e, e)
		}, e.onpointermove = function(e) {
			e.pointerId == this.pointerIdentifier && this._pointerMove(e, e)
		}, e.ontouchmove = function(e) {
			var t = this.getTouch(e.changedTouches);
			t && this._pointerMove(e, t)
		}, e._pointerMove = function(e, t) {
			this.pointerMove(e, t)
		}, e.pointerMove = function(e, t) {
			this.emitEvent("pointerMove", [e, t])
		}, e.onmouseup = function(e) {
			this._pointerUp(e, e)
		}, e.onpointerup = function(e) {
			e.pointerId == this.pointerIdentifier && this._pointerUp(e, e)
		}, e.ontouchend = function(e) {
			var t = this.getTouch(e.changedTouches);
			t && this._pointerUp(e, t)
		}, e._pointerUp = function(e, t) {
			this._pointerDone(), this.pointerUp(e, t)
		}, e.pointerUp = function(e, t) {
			this.emitEvent("pointerUp", [e, t])
		}, e._pointerDone = function() {
			this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone()
		}, e._pointerReset = function() {
			this.isPointerDown = !1, delete this.pointerIdentifier
		}, e.pointerDone = function() {}, e.onpointercancel = function(e) {
			e.pointerId == this.pointerIdentifier && this._pointerCancel(e, e)
		}, e.ontouchcancel = function(e) {
			var t = this.getTouch(e.changedTouches);
			t && this._pointerCancel(e, t)
		}, e._pointerCancel = function(e, t) {
			this._pointerDone(), this.pointerCancel(e, t)
		}, e.pointerCancel = function(e, t) {
			this.emitEvent("pointerCancel", [e, t])
		}, t.getPointerPoint = function(e) {
			return {
				x: e.pageX,
				y: e.pageY
			}
		}, t
	}, "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function(e) {
		return B(W, e)
	}) : "object" == typeof module && module.exports ? module.exports = B(W, require("ev-emitter")) : W.Unipointer = B(W, W.EvEmitter), H = window, F = function(r, e) {
		function t() {}
		var n = t.prototype = Object.create(e.prototype),
			i = (n.bindHandles = function() {
				this._bindHandles(!0)
			}, n.unbindHandles = function() {
				this._bindHandles(!1)
			}, n._bindHandles = function(e) {
				for (var t = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener", n = e ? this._touchActionValue : "", i = 0; i < this.handles.length; i++) {
					var o = this.handles[i];
					this._bindStartEvent(o, e), o[t]("click", this), r.PointerEvent && (o.style.touchAction = n)
				}
			}, n._touchActionValue = "none", n.pointerDown = function(e, t) {
				this.okayPointerDown(e) && (this.pointerDownPointer = t, e.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t]))
			}, {
				TEXTAREA: !0,
				INPUT: !0,
				SELECT: !0,
				OPTION: !0
			}),
			o = {
				radio: !0,
				checkbox: !0,
				button: !0,
				submit: !0,
				image: !0,
				file: !0
			};
		return n.okayPointerDown = function(e) {
			var t = i[e.target.nodeName],
				e = o[e.target.type],
				t;
			return (t = !t || e) || this._pointerReset(), t
		}, n.pointerDownBlur = function() {
			var e = document.activeElement;
			e && e.blur && e != document.body && e.blur()
		}, n.pointerMove = function(e, t) {
			var n = this._dragPointerMove(e, t);
			this.emitEvent("pointerMove", [e, t, n]), this._dragMove(e, t, n)
		}, n._dragPointerMove = function(e, t) {
			var n = {
				x: t.pageX - this.pointerDownPointer.pageX,
				y: t.pageY - this.pointerDownPointer.pageY
			};
			return !this.isDragging && this.hasDragStarted(n) && this._dragStart(e, t), n
		}, n.hasDragStarted = function(e) {
			return 3 < Math.abs(e.x) || 3 < Math.abs(e.y)
		}, n.pointerUp = function(e, t) {
			this.emitEvent("pointerUp", [e, t]), this._dragPointerUp(e, t)
		}, n._dragPointerUp = function(e, t) {
			this.isDragging ? this._dragEnd(e, t) : this._staticClick(e, t)
		}, n._dragStart = function(e, t) {
			this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(e, t)
		}, n.dragStart = function(e, t) {
			this.emitEvent("dragStart", [e, t])
		}, n._dragMove = function(e, t, n) {
			this.isDragging && this.dragMove(e, t, n)
		}, n.dragMove = function(e, t, n) {
			e.preventDefault(), this.emitEvent("dragMove", [e, t, n])
		}, n._dragEnd = function(e, t) {
			this.isDragging = !1, setTimeout(function() {
				delete this.isPreventingClicks
			}.bind(this)), this.dragEnd(e, t)
		}, n.dragEnd = function(e, t) {
			this.emitEvent("dragEnd", [e, t])
		}, n.onclick = function(e) {
			this.isPreventingClicks && e.preventDefault()
		}, n._staticClick = function(e, t) {
			this.isIgnoringMouseUp && "mouseup" == e.type || (this.staticClick(e, t), "mouseup" != e.type && (this.isIgnoringMouseUp = !0, setTimeout(function() {
				delete this.isIgnoringMouseUp
			}.bind(this), 400)))
		}, n.staticClick = function(e, t) {
			this.emitEvent("staticClick", [e, t])
		}, t.getPointerPoint = e.getPointerPoint, t
	}, "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function(e) {
		return F(H, e)
	}) : "object" == typeof module && module.exports ? module.exports = F(H, require("unipointer")) : H.Unidragger = F(H, H.Unipointer), A = window, I = function(n, e, t, r) {
		r.extend(e.defaults, {
			draggable: ">1",
			dragThreshold: 3
		}), e.createMethods.push("_createDrag");
		var i = e.prototype,
			o = (r.extend(i, t.prototype), i._touchActionValue = "pan-y", "createTouch" in document),
			s = !1,
			a = (i._createDrag = function() {
				this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), o && !s && (n.addEventListener("touchmove", function() {}), s = !0)
			}, i.onActivateDrag = function() {
				this.handles = [this.viewport], this.bindHandles(), this.updateDraggable()
			}, i.onDeactivateDrag = function() {
				this.unbindHandles(), this.element.classList.remove("is-draggable")
			}, i.updateDraggable = function() {
				">1" == this.options.draggable ? this.isDraggable = 1 < this.slides.length : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
			}, i.bindDrag = function() {
				this.options.draggable = !0, this.updateDraggable()
			}, i.unbindDrag = function() {
				this.options.draggable = !1, this.updateDraggable()
			}, i._uiChangeDrag = function() {
				delete this.isFreeScrolling
			}, i.pointerDown = function(e, t) {
				this.isDraggable ? this.okayPointerDown(e) && (this._pointerDownPreventDefault(e), this.pointerDownFocus(e), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = l(), n.addEventListener("scroll", this), this._pointerDownDefault(e, t)) : this._pointerDownDefault(e, t)
			}, i._pointerDownDefault = function(e, t) {
				this.pointerDownPointer = {
					pageX: t.pageX,
					pageY: t.pageY
				}, this._bindPostStartEvents(e), this.dispatchEvent("pointerDown", e, [t])
			}, {
				INPUT: !0,
				TEXTAREA: !0,
				SELECT: !0
			});

		function l() {
			return {
				x: n.pageXOffset,
				y: n.pageYOffset
			}
		}
		return i.pointerDownFocus = function(e) {
			a[e.target.nodeName] || this.focus()
		}, i._pointerDownPreventDefault = function(e) {
			var t = "touchstart" == e.type,
				n = "touch" == e.pointerType,
				i = a[e.target.nodeName];
			t || n || i || e.preventDefault()
		}, i.hasDragStarted = function(e) {
			return Math.abs(e.x) > this.options.dragThreshold
		}, i.pointerUp = function(e, t) {
			delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", e, [t]), this._dragPointerUp(e, t)
		}, i.pointerDone = function() {
			n.removeEventListener("scroll", this), delete this.pointerDownScroll
		}, i.dragStart = function(e, t) {
			this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), n.removeEventListener("scroll", this), this.dispatchEvent("dragStart", e, [t]))
		}, i.pointerMove = function(e, t) {
			var n = this._dragPointerMove(e, t);
			this.dispatchEvent("pointerMove", e, [t, n]), this._dragMove(e, t, n)
		}, i.dragMove = function(e, t, n) {
			var i, o;
			this.isDraggable && (e.preventDefault(), this.previousDragX = this.dragX, i = this.options.rightToLeft ? -1 : 1, this.options.wrapAround && (n.x = n.x % this.slideableWidth), i = this.dragStartPosition + n.x * i, !this.options.wrapAround && this.slides.length && (i = (i = (o = Math.max(-this.slides[0].target, this.dragStartPosition)) < i ? .5 * (i + o) : i) < (o = Math.min(-this.getLastSlide().target, this.dragStartPosition)) ? .5 * (i + o) : i), this.dragX = i, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", e, [t, n]))
		}, i.dragEnd = function(e, t) {
			var n, i;
			this.isDraggable && (this.options.freeScroll && (this.isFreeScrolling = !0), n = this.dragEndRestingSelect(), this.options.freeScroll && !this.options.wrapAround ? (i = this.getRestingPosition(), this.isFreeScrolling = -i > this.slides[0].target && -i < this.getLastSlide().target) : this.options.freeScroll || n != this.selectedIndex || (n += this.dragEndBoostSelect()), delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(n), delete this.isDragSelect, this.dispatchEvent("dragEnd", e, [t]))
		}, i.dragEndRestingSelect = function() {
			var e = this.getRestingPosition(),
				t = Math.abs(this.getSlideDistance(-e, this.selectedIndex)),
				n = this._getClosestResting(e, t, 1),
				e = this._getClosestResting(e, t, -1);
			return (n.distance < e.distance ? n : e).index
		}, i._getClosestResting = function(e, t, n) {
			for (var i = this.selectedIndex, o = 1 / 0, r = this.options.contain && !this.options.wrapAround ? function(e, t) {
					return e <= t
				} : function(e, t) {
					return e < t
				}; r(t, o) && (o = t, null !== (t = this.getSlideDistance(-e, i += n)));) t = Math.abs(t);
			return {
				distance: o,
				index: i - n
			}
		}, i.getSlideDistance = function(e, t) {
			var n = this.slides.length,
				i = this.options.wrapAround && 1 < n,
				o = i ? r.modulo(t, n) : t,
				o;
			return (o = this.slides[o]) ? (i = i ? this.slideableWidth * Math.floor(t / n) : 0, e - (o.target + i)) : null
		}, i.dragEndBoostSelect = function() {
			if (void 0 === this.previousDragX || !this.dragMoveTime || 100 < new Date - this.dragMoveTime) return 0;
			var e = this.getSlideDistance(-this.dragX, this.selectedIndex),
				t = this.previousDragX - this.dragX;
			return 0 < e && 0 < t ? 1 : e < 0 && t < 0 ? -1 : 0
		}, i.staticClick = function(e, t) {
			var n, i = (n = this.getParentCell(e.target)) && n.element,
				n = n && this.cells.indexOf(n);
			this.dispatchEvent("staticClick", e, [t, i, n])
		}, i.onscroll = function() {
			var e = l(),
				t = this.pointerDownScroll.x - e.x,
				e = this.pointerDownScroll.y - e.y;
			(3 < Math.abs(t) || 3 < Math.abs(e)) && this._pointerDone()
		}, e
	}, "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(e, t, n) {
		return I(A, e, t, n)
	}) : "object" == typeof module && module.exports ? module.exports = I(A, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : A.Flickity = I(A, A.Flickity, A.Unidragger, A.fizzyUIUtils), se = window, T = function(e, t, n, i) {
		"use strict";
		var o = "http://www.w3.org/2000/svg";

		function r(e, t) {
			this.direction = e, this.parent = t, this._create()
		}
		return (r.prototype = Object.create(n.prototype))._create = function() {
			this.isEnabled = !0, this.isPrevious = -1 == this.direction;
			var e = this.parent.options.rightToLeft ? 1 : -1;
			this.isLeft = this.direction == e;
			var e, t = ((e = this.element = document.createElement("button")).className = "flickity-button flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next"), this.createSVG());
			e.appendChild(t), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
		}, r.prototype.activate = function() {
			this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element)
		}, r.prototype.deactivate = function() {
			this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this)
		}, r.prototype.createSVG = function() {
			var e = document.createElementNS(o, "svg"),
				t = (e.setAttribute("class", "flickity-button-icon"), e.setAttribute("viewBox", "0 0 100 100"), document.createElementNS(o, "path")),
				n = "string" != typeof(n = this.parent.options.arrowShape) ? "M " + n.x0 + ",50 L " + n.x1 + "," + (n.y1 + 50) + " L " + n.x2 + "," + (n.y2 + 50) + " L " + n.x3 + ",50  L " + n.x2 + "," + (50 - n.y2) + " L " + n.x1 + "," + (50 - n.y1) + " Z" : n;
			return t.setAttribute("d", n), t.setAttribute("class", "arrow"), this.isLeft || t.setAttribute("transform", "translate(100, 100) rotate(180) "), e.appendChild(t), e
		}, r.prototype.handleEvent = i.handleEvent, r.prototype.onclick = function() {
			var e;
			this.isEnabled && (this.parent.uiChange(), e = this.isPrevious ? "previous" : "next", this.parent[e]())
		}, r.prototype.enable = function() {
			this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
		}, r.prototype.disable = function() {
			this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
		}, r.prototype.update = function() {
			var e = this.parent.slides;
			this.parent.options.wrapAround && 1 < e.length ? this.enable() : (e = e.length ? e.length - 1 : 0, e = this.isPrevious ? 0 : e, this[this.parent.selectedIndex == e ? "disable" : "enable"]())
		}, r.prototype.destroy = function() {
			this.deactivate(), this.allOff()
		}, i.extend(t.defaults, {
			prevNextButtons: !0,
			arrowShape: {
				x0: 10,
				x1: 60,
				y1: 50,
				x2: 70,
				y2: 40,
				x3: 30
			}
		}), t.createMethods.push("_createPrevNextButtons"), (n = t.prototype)._createPrevNextButtons = function() {
			this.options.prevNextButtons && (this.prevButton = new r(-1, this), this.nextButton = new r(1, this), this.on("activate", this.activatePrevNextButtons))
		}, n.activatePrevNextButtons = function() {
			this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
		}, n.deactivatePrevNextButtons = function() {
			this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
		}, t.PrevNextButton = r, t
	}, "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function(e, t, n) {
		return T(0, e, t, n)
	}) : "object" == typeof module && module.exports ? module.exports = T(0, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : T(0, se.Flickity, se.Unipointer, se.fizzyUIUtils), ae = window, S = function(e, t, n, i) {
		function o(e) {
			this.parent = e, this._create()
		}
		return (o.prototype = Object.create(n.prototype))._create = function() {
			this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.handleClick = this.onClick.bind(this), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
		}, o.prototype.activate = function() {
			this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder)
		}, o.prototype.deactivate = function() {
			this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder)
		}, o.prototype.setDots = function() {
			var e = this.parent.slides.length - this.dots.length;
			0 < e ? this.addDots(e) : e < 0 && this.removeDots(-e)
		}, o.prototype.addDots = function(e) {
			for (var t = document.createDocumentFragment(), n = [], i = this.dots.length, o = i + e, r = i; r < o; r++) {
				var s = document.createElement("li");
				s.className = "dot", s.setAttribute("aria-label", "Page dot " + (r + 1)), t.appendChild(s), n.push(s)
			}
			this.holder.appendChild(t), this.dots = this.dots.concat(n)
		}, o.prototype.removeDots = function(e) {
			this.dots.splice(this.dots.length - e, e).forEach(function(e) {
				this.holder.removeChild(e)
			}, this)
		}, o.prototype.updateSelected = function() {
			this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"))
		}, o.prototype.onTap = o.prototype.onClick = function(e) {
			var e;
			"LI" == (e = e.target).nodeName && (this.parent.uiChange(), e = this.dots.indexOf(e), this.parent.select(e))
		}, o.prototype.destroy = function() {
			this.deactivate(), this.allOff()
		}, t.PageDots = o, i.extend(t.defaults, {
			pageDots: !0
		}), t.createMethods.push("_createPageDots"), (n = t.prototype)._createPageDots = function() {
			this.options.pageDots && (this.pageDots = new o(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
		}, n.activatePageDots = function() {
			this.pageDots.activate()
		}, n.updateSelectedPageDots = function() {
			this.pageDots.updateSelected()
		}, n.updatePageDots = function() {
			this.pageDots.setDots()
		}, n.deactivatePageDots = function() {
			this.pageDots.deactivate()
		}, t.PageDots = o, t
	}, "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function(e, t, n) {
		return S(0, e, t, n)
	}) : "object" == typeof module && module.exports ? module.exports = S(0, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : S(0, ae.Flickity, ae.Unipointer, ae.fizzyUIUtils), se = window, ae = function(e, t, n) {
		function i(e) {
			this.parent = e, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this)
		}
		return (i.prototype = Object.create(e.prototype)).play = function() {
			"playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()))
		}, i.prototype.tick = function() {
			var e, t;
			"playing" == this.state && (e = "number" == typeof(e = this.parent.options.autoPlay) ? e : 3e3, (t = this).clear(), this.timeout = setTimeout(function() {
				t.parent.next(!0), t.tick()
			}, e))
		}, i.prototype.stop = function() {
			this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange)
		}, i.prototype.clear = function() {
			clearTimeout(this.timeout)
		}, i.prototype.pause = function() {
			"playing" == this.state && (this.state = "paused", this.clear())
		}, i.prototype.unpause = function() {
			"paused" == this.state && this.play()
		}, i.prototype.visibilityChange = function() {
			this[document.hidden ? "pause" : "unpause"]()
		}, i.prototype.visibilityPlay = function() {
			this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay)
		}, t.extend(n.defaults, {
			pauseAutoPlayOnHover: !0
		}), n.createMethods.push("_createPlayer"), (e = n.prototype)._createPlayer = function() {
			this.player = new i(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
		}, e.activatePlayer = function() {
			this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
		}, e.playPlayer = function() {
			this.player.play()
		}, e.stopPlayer = function() {
			this.player.stop()
		}, e.pausePlayer = function() {
			this.player.pause()
		}, e.unpausePlayer = function() {
			this.player.unpause()
		}, e.deactivatePlayer = function() {
			this.player.stop(), this.element.removeEventListener("mouseenter", this)
		}, e.onmouseenter = function() {
			this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
		}, e.onmouseleave = function() {
			this.player.unpause(), this.element.removeEventListener("mouseleave", this)
		}, n.Player = i, n
	}, "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], ae) : "object" == typeof module && module.exports ? module.exports = ae(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : ae(se.EvEmitter, se.fizzyUIUtils, se.Flickity), ae = window, E = function(e, t, i) {
		var n = t.prototype;
		return n.insert = function(e, t) {
			var n, i, o, r, s, e;
			(e = this._makeCells(e)) && e.length && (n = this.cells.length, t = void 0 === t ? n : t, r = e, s = document.createDocumentFragment(), r.forEach(function(e) {
				s.appendChild(e.element)
			}), r = s, (i = t == n) ? this.slider.appendChild(r) : (o = this.cells[t].element, this.slider.insertBefore(r, o)), 0 === t ? this.cells = e.concat(this.cells) : i ? this.cells = this.cells.concat(e) : (r = this.cells.splice(t, n - t), this.cells = this.cells.concat(e).concat(r)), this._sizeCells(e), this.cellChange(t, !0))
		}, n.append = function(e) {
			this.insert(e, this.cells.length)
		}, n.prepend = function(e) {
			this.insert(e, 0)
		}, n.remove = function(e) {
			var n, e;
			(e = this.getCells(e)) && e.length && (n = this.cells.length - 1, e.forEach(function(e) {
				e.remove();
				var t = this.cells.indexOf(e);
				n = Math.min(t, n), i.removeFrom(this.cells, e)
			}, this), this.cellChange(n, !0))
		}, n.cellSizeChange = function(e) {
			var e;
			(e = this.getCell(e)) && (e.getSize(), e = this.cells.indexOf(e), this.cellChange(e))
		}, n.cellChange = function(e, t) {
			var n = this.selectedElement,
				n;
			this._positionCells(e), this._getWrapShiftCells(), this.setGallerySize(), (n = this.getCell(n)) && (this.selectedIndex = this.getCellSlideIndex(n)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [e]), this.select(this.selectedIndex), t && this.positionSliderAtSelected()
		}, t
	}, "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(e, t) {
		return E(0, e, t)
	}) : "object" == typeof module && module.exports ? module.exports = E(0, require("./flickity"), require("fizzy-ui-utils")) : E(0, ae.Flickity, ae.fizzyUIUtils), se = window, k = function(e, t, o) {
		"use strict";
		t.createMethods.push("_createLazyload");
		var n = t.prototype;

		function i(e, t) {
			this.img = e, this.flickity = t, this.load()
		}
		return n._createLazyload = function() {
			this.on("select", this.lazyLoad)
		}, n.lazyLoad = function() {
			var t, e = this.options.lazyLoad;
			e && (e = this.getAdjacentCellElements("number" == typeof e ? e : 0), t = [], e.forEach(function(e) {
				e = function(e) {
					if ("IMG" == e.nodeName) {
						var t = e.getAttribute("data-flickity-lazyload"),
							n = e.getAttribute("data-flickity-lazyload-src"),
							i = e.getAttribute("data-flickity-lazyload-srcset");
						if (t || n || i) return [e]
					}
					return t = e.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]"), o.makeArray(t)
				}(e), t = t.concat(e)
			}), t.forEach(function(e) {
				new i(e, this)
			}, this))
		}, i.prototype.handleEvent = o.handleEvent, i.prototype.load = function() {
			this.img.addEventListener("load", this), this.img.addEventListener("error", this);
			var e = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
				t = this.img.getAttribute("data-flickity-lazyload-srcset");
			this.img.src = e, t && this.img.setAttribute("srcset", t), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset")
		}, i.prototype.onload = function(e) {
			this.complete(e, "flickity-lazyloaded")
		}, i.prototype.onerror = function(e) {
			this.complete(e, "flickity-lazyerror")
		}, i.prototype.complete = function(e, t) {
			this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
			var n, n = (n = this.flickity.getParentCell(this.img)) && n.element;
			this.flickity.cellSizeChange(n), this.img.classList.add(t), this.flickity.dispatchEvent("lazyLoad", e, n)
		}, t.LazyLoader = i, t
	}, "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function(e, t) {
		return k(0, e, t)
	}) : "object" == typeof module && module.exports ? module.exports = k(0, require("./flickity"), require("fizzy-ui-utils")) : k(0, se.Flickity, se.fizzyUIUtils), window, ae = function(e) {
		return e
	}, "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], ae) : "object" == typeof module && module.exports && (module.exports = ae(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload"))), se = window, ae = function(n, i) {
		n.createMethods.push("_createAsNavFor");
		var e = n.prototype;
		return e._createAsNavFor = function() {
			this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
			var e, t = this.options.asNavFor;
			t && (e = this, setTimeout(function() {
				e.setNavCompanion(t)
			}))
		}, e.setNavCompanion = function(e) {
			var t, e;
			e = i.getQueryElement(e), (e = n.data(e)) && e != this && (this.navCompanion = e, (t = this).onNavCompanionSelect = function() {
				t.navCompanionSelect()
			}, e.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0))
		}, e.navCompanionSelect = function(e) {
			var t, n, i = this.navCompanion && this.navCompanion.selectedCells;
			i && (t = i[0], i = (t = this.navCompanion.cells.indexOf(t)) + i.length - 1, n = Math.floor((i - t) * (n = this.navCompanion.cellAlign) + t), this.selectCell(n, !1, e), this.removeNavSelectedElements(), n >= this.cells.length || (e = this.cells.slice(t, 1 + i), this.navSelectedElements = e.map(function(e) {
				return e.element
			}), this.changeNavSelectedClass("add")))
		}, e.changeNavSelectedClass = function(t) {
			this.navSelectedElements.forEach(function(e) {
				e.classList[t]("is-nav-selected")
			})
		}, e.activateAsNavFor = function() {
			this.navCompanionSelect(!0)
		}, e.removeNavSelectedElements = function() {
			this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements)
		}, e.onNavStaticClick = function(e, t, n, i) {
			"number" == typeof i && this.navCompanion.selectCell(i)
		}, e.deactivateAsNavFor = function() {
			this.removeNavSelectedElements()
		}, e.destroyAsNavFor = function() {
			this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
		}, n
	}, "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], ae) : "object" == typeof module && module.exports ? module.exports = ae(require("flickity"), require("fizzy-ui-utils")) : se.Flickity = ae(se.Flickity, se.fizzyUIUtils),
	function(t, n) {
		"use strict";
		"function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function(e) {
			return n(t, e)
		}) : "object" == typeof module && module.exports ? module.exports = n(t, require("ev-emitter")) : t.imagesLoaded = n(t, t.EvEmitter)
	}("undefined" != typeof window ? window : this, function(t, e) {
		var r = t.jQuery,
			s = t.console;

		function a(e, t) {
			for (var n in t) e[n] = t[n];
			return e
		}
		var l = Array.prototype.slice;

		function c(e, t, n) {
			if (!(this instanceof c)) return new c(e, t, n);
			var i, o = e;
			(o = "string" == typeof e ? document.querySelectorAll(e) : o) ? (this.elements = (i = o, Array.isArray(i) ? i : "object" == typeof i && "number" == typeof i.length ? l.call(i) : [i]), this.options = a({}, this.options), "function" == typeof t ? n = t : a(this.options, t), n && this.on("always", n), this.getImages(), r && (this.jqDeferred = new r.Deferred), setTimeout(this.check.bind(this))) : s.error("Bad element for imagesLoaded " + (o || e))
		}(c.prototype = Object.create(e.prototype)).options = {}, c.prototype.getImages = function() {
			this.images = [], this.elements.forEach(this.addElementImages, this)
		}, c.prototype.addElementImages = function(e) {
			"IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
			var t = e.nodeType;
			if (t && u[t]) {
				for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
					var o = n[i];
					this.addImage(o)
				}
				if ("string" == typeof this.options.background)
					for (var r = e.querySelectorAll(this.options.background), i = 0; i < r.length; i++) {
						var s = r[i];
						this.addElementBackgroundImages(s)
					}
			}
		};
		var u = {
			1: !0,
			9: !0,
			11: !0
		};

		function n(e) {
			this.img = e
		}

		function i(e, t) {
			this.url = e, this.element = t, this.img = new Image
		}
		return c.prototype.addElementBackgroundImages = function(e) {
			var t = getComputedStyle(e);
			if (t)
				for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
					var o = i && i[2];
					o && this.addBackground(o, e), i = n.exec(t.backgroundImage)
				}
		}, c.prototype.addImage = function(e) {
			e = new n(e), this.images.push(e)
		}, c.prototype.addBackground = function(e, t) {
			e = new i(e, t), this.images.push(e)
		}, c.prototype.check = function() {
			var i = this;

			function t(e, t, n) {
				setTimeout(function() {
					i.progress(e, t, n)
				})
			}
			this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function(e) {
				e.once("progress", t), e.check()
			}) : this.complete()
		}, c.prototype.progress = function(e, t, n) {
			this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && s && s.log("progress: " + n, e, t)
		}, c.prototype.complete = function() {
			var e = this.hasAnyBroken ? "fail" : "done";
			this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred && (e = this.hasAnyBroken ? "reject" : "resolve", this.jqDeferred[e](this))
		}, (n.prototype = Object.create(e.prototype)).check = function() {
			this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
		}, n.prototype.getIsImageComplete = function() {
			return this.img.complete && this.img.naturalWidth
		}, n.prototype.confirm = function(e, t) {
			this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
		}, n.prototype.handleEvent = function(e) {
			var t = "on" + e.type;
			this[t] && this[t](e)
		}, n.prototype.onload = function() {
			this.confirm(!0, "onload"), this.unbindEvents()
		}, n.prototype.onerror = function() {
			this.confirm(!1, "onerror"), this.unbindEvents()
		}, n.prototype.unbindEvents = function() {
			this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
		}, (i.prototype = Object.create(n.prototype)).check = function() {
			this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
		}, i.prototype.unbindEvents = function() {
			this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
		}, i.prototype.confirm = function(e, t) {
			this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
		}, (c.makeJQueryPlugin = function(e) {
			(e = e || t.jQuery) && ((r = e).fn.imagesLoaded = function(e, t) {
				return new c(this, e, t).jqDeferred.promise(r(this))
			})
		})(), c
	}), ae = window, w = function(e, t, i) {
		"use strict";
		t.createMethods.push("_createImagesLoaded");
		var n = t.prototype;
		return n._createImagesLoaded = function() {
			this.on("activate", this.imagesLoaded)
		}, n.imagesLoaded = function() {
			var n;
			this.options.imagesLoaded && i((n = this).slider).on("progress", function(e, t) {
				t = n.getParentCell(t.img), n.cellSizeChange(t && t.element), n.options.freeScroll || n.positionSliderAtSelected()
			})
		}, t
	}, "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(e, t) {
		return w(0, e, t)
	}) : "object" == typeof module && module.exports ? module.exports = w(0, require("flickity"), require("imagesloaded")) : ae.Flickity = w(0, ae.Flickity, ae.imagesLoaded),
	function i(o, r, s) {
		function a(t, e) {
			if (!r[t]) {
				if (!o[t]) {
					var n = "function" == typeof require && require;
					if (!e && n) return n(t, !0);
					if (l) return l(t, !0);
					throw (e = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND", e
				}
				n = r[t] = {
					exports: {}
				}, o[t][0].call(n.exports, function(e) {
					return a(o[t][1][e] || e)
				}, n, n.exports, i, o, r, s)
			}
			return r[t].exports
		}
		for (var l = "function" == typeof require && require, e = 0; e < s.length; e++) a(s[e]);
		return a
	}({
		1: [function(e, t, n) {
			try {
				var i = new window.CustomEvent("test");
				if (i.preventDefault(), !0 !== i.defaultPrevented) throw new Error("Could not prevent default")
			} catch (e) {
				function o(e, t) {
					var n, i;
					return t = t || {
						bubbles: !1,
						cancelable: !1,
						detail: void 0
					}, (n = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i = n.preventDefault, n.preventDefault = function() {
						i.call(this);
						try {
							Object.defineProperty(this, "defaultPrevented", {
								get: function() {
									return !0
								}
							})
						} catch (e) {
							this.defaultPrevented = !0
						}
					}, n
				}
				o.prototype = window.Event.prototype, window.CustomEvent = o
			}
		}, {}],
		2: [function(e, t, n) {
			"use strict";

			function i(e, t) {
				if (null == e) throw new TypeError("Cannot convert first argument to object");
				for (var n = Object(e), i = 1; i < arguments.length; i++) {
					var o = arguments[i];
					if (null != o)
						for (var r = Object.keys(Object(o)), s = 0, a = r.length; s < a; s++) {
							var l = r[s],
								c = Object.getOwnPropertyDescriptor(o, l);
							void 0 !== c && c.enumerable && (n[l] = o[l])
						}
				}
				return n
			}
			t.exports = {
				assign: i,
				polyfill: function() {
					Object.assign || Object.defineProperty(Object, "assign", {
						enumerable: !1,
						configurable: !0,
						writable: !0,
						value: i
					})
				}
			}
		}, {}],
		3: [function(e, t, n) {
			"use strict";

			function i(e) {
				e.fn.modalVideo = function(e) {
					return "strings" != typeof e && new o(this, e), this
				}
			}
			var o = e("../index");
			"function" == typeof define && define.amd ? define(["jquery"], i) : void 0 !== (e = window.jQuery || window.$) && i(e), t.exports = i
		}, {
			"../index": 5
		}],
		4: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			});
			var i = function(e, t, n) {
				return t && o(e.prototype, t), n && o(e, n), e
			};

			function o(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			e("custom-event-polyfill");
			var d = e("../lib/util"),
				r = e("es6-object-assign").assign,
				f = {
					channel: "youtube",
					facebook: {},
					youtube: {
						autoplay: 1,
						cc_load_policy: 1,
						color: null,
						controls: 1,
						disablekb: 0,
						enablejsapi: 0,
						end: null,
						fs: 1,
						h1: null,
						iv_load_policy: 1,
						list: null,
						listType: null,
						loop: 0,
						modestbranding: null,
						origin: null,
						playlist: null,
						playsinline: null,
						rel: 0,
						showinfo: 1,
						start: 0,
						wmode: "transparent",
						theme: "dark",
						nocookie: !1
					},
					ratio: "16:9",
					vimeo: {
						api: !1,
						autopause: !0,
						autoplay: !0,
						byline: !0,
						callback: null,
						color: null,
						height: null,
						loop: !1,
						maxheight: null,
						maxwidth: null,
						player_id: null,
						portrait: !0,
						title: !0,
						width: null,
						xhtml: !1
					},
					allowFullScreen: !0,
					animationSpeed: 300,
					classNames: {
						modalVideo: "modal-video",
						modalVideoClose: "modal-video-close",
						modalVideoBody: "modal-video-body",
						modalVideoInner: "modal-video-inner",
						modalVideoIframeWrap: "modal-video-movie-wrap",
						modalVideoCloseBtn: "modal-video-close-btn"
					},
					aria: {
						openMessage: "You just openned the modal video",
						dismissBtnMessage: "Close the modal by clicking here"
					}
				},
				e = (i(h, [{
					key: "getPadding",
					value: function(e) {
						var e = e.split(":"),
							t = Number(e[0]);
						return 100 * Number(e[1]) / t + "%"
					}
				}, {
					key: "getQueryString",
					value: function(t) {
						var n = "";
						return Object.keys(t).forEach(function(e) {
							n += e + "=" + t[e] + "&"
						}), n.substr(0, n.length - 1)
					}
				}, {
					key: "getVideoUrl",
					value: function(e, t, n) {
						return "youtube" === t ? this.getYoutubeUrl(e.youtube, n) : "vimeo" === t ? this.getVimeoUrl(e.vimeo, n) : "facebook" === t ? this.getFacebookUrl(e.facebook, n) : ""
					}
				}, {
					key: "getVimeoUrl",
					value: function(e, t) {
						return "//player.vimeo.com/video/" + t + "?" + this.getQueryString(e)
					}
				}, {
					key: "getYoutubeUrl",
					value: function(e, t) {
						var n = this.getQueryString(e);
						return !0 === e.nocookie ? "//www.youtube-nocookie.com/embed/" + t + "?" + n : "//www.youtube.com/embed/" + t + "?" + n
					}
				}, {
					key: "getFacebookUrl",
					value: function(e, t) {
						return "//www.facebook.com/v2.10/plugins/video.php?href=https://www.facebook.com/facebook/videos/" + t + "&" + this.getQueryString(e)
					}
				}, {
					key: "getHtml",
					value: function(e, t, n) {
						var i = this.getPadding(e.ratio),
							o = e.classNames;
						return '\n      <div class="' + o.modalVideo + '" tabindex="-1" role="dialog" aria-label="' + e.aria.openMessage + '" id="' + n + '">\n        <div class="' + o.modalVideoBody + '">\n          <div class="' + o.modalVideoInner + '">\n            <div class="' + o.modalVideoIframeWrap + '" style="padding-bottom:' + i + '">\n              <button class="' + o.modalVideoCloseBtn + ' js-modal-video-dismiss-btn" aria-label="' + e.aria.dismissBtnMessage + "\"></button>\n              <iframe width='460' height='230' src=\"" + t + "\" frameborder='0' allowfullscreen=" + e.allowFullScreen + ' tabindex="-1"/>\n            </div>\n          </div>\n        </div>\n      </div>\n    '
					}
				}]), h);

			function h(e, t) {
				var s = this;
				if (!(this instanceof h)) throw new TypeError("Cannot call a class as a function");
				var a = r({}, f, t),
					t = "string" == typeof e ? document.querySelectorAll(e) : e,
					l = document.querySelector("body"),
					c = a.classNames,
					u = a.animationSpeed;
				[].forEach.call(t, function(r) {
					r.addEventListener("click", function(e) {
						"A" === r.tagName && e.preventDefault();
						var e = r.dataset.videoId,
							t = r.dataset.channel || a.channel,
							n = (0, d.getUniqId)(),
							t = r.dataset.videoUrl || s.getVideoUrl(a, t, e),
							e = s.getHtml(a, t, n),
							i = ((0, d.append)(l, e), document.getElementById(n)),
							o = i.querySelector(".js-modal-video-dismiss-btn");
						i.focus(), i.addEventListener("click", function() {
							(0, d.addClass)(i, c.modalVideoClose), setTimeout(function() {
								(0, d.remove)(i), r.focus()
							}, u)
						}), i.addEventListener("keydown", function(e) {
							9 === e.which && (e.preventDefault(), document.activeElement === i ? o.focus() : (i.setAttribute("aria-label", ""), i.focus()))
						}), o.addEventListener("click", function() {
							(0, d.triggerEvent)(i, "click")
						})
					})
				})
			}
			n.default = e, t.exports = n.default
		}, {
			"../lib/util": 6,
			"custom-event-polyfill": 1,
			"es6-object-assign": 2
		}],
		5: [function(e, t, n) {
			"use strict";
			t.exports = e("./core/")
		}, {
			"./core/": 4
		}],
		6: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.append = function(e, t) {
				var n = document.createElement("div");
				for (n.innerHTML = t; 0 < n.children.length;) e.appendChild(n.children[0])
			}, n.getUniqId = function() {
				return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()
			}, n.remove = function(e) {
				e && e.parentNode && e.parentNode.removeChild(e)
			}, n.addClass = function(e, t) {
				e.classList ? e.classList.add(t) : e.className += " " + t
			}, n.triggerEvent = function(e, t, n) {
				var i = void 0;
				window.CustomEvent ? i = new CustomEvent(t, {
					cancelable: !0
				}) : (i = document.createEvent("CustomEvent")).initCustomEvent(t, !1, !1, n), e.dispatchEvent(i)
			}
		}, {}]
	}, {}, [3]), (ne = jQuery).fn.viewbox = function(d) {
		function t() {
			m && (g.fadeOut(d.closeDuration, function() {
				g.detach()
			}), m = !1)
		}

		function n(e) {
			return g.find(".viewbox-" + e)
		}

		function i(e, t) {
			n(e).html(t)
		}

		function o() {
			var t = -1;
			return p && s.each(function(e) {
				return p.is(this) ? (t = e, !1) : void 0
			}), t
		}

		function r() {
			var e;
			s.length <= 1 || ((e = o() + 1) >= s.length && (e = 0), s.eq(e).click())
		}

		function f(e) {
			return e.get(0).complete
		}

		function h(e) {
			e ? a.appendTo(n("body")) : a.detach()
		}

		function e(e) {
			var t = ne('<div class="viewbox-button-default viewbox-button-' + e + '"></div>');
			return t.appendTo(g).get(0).insertAdjacentHTML("afterbegin", '<svg><use xlink:href="#viewbox-' + e + '-icon"/></svg>'), t
		}
		void 0 === d && (d = {}), d = ne.extend({
			template: '<div class="viewbox-container"><div class="viewbox-body"><div class="viewbox-header"></div><div class="viewbox-content"></div><div class="viewbox-footer"></div></div></div>',
			loader: '<div class="loader"><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></div>',
			setTitle: !0,
			margin: 20,
			resizeDuration: 300,
			openDuration: 200,
			closeDuration: 200,
			closeButton: !0,
			navButtons: !0,
			closeOnSideClick: !0,
			nextOnContentClick: !0
		}, d);
		var p, s = ne(this),
			g = ne(d.template),
			a = ne(d.loader),
			m = !1,
			v = !1;
		return ne("body").get(0).insertAdjacentHTML("afterbegin", '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="viewbox-sprite" style="display:none"><symbol id="viewbox-close-icon" viewBox="0 0 50 50"><path d="M37.304 11.282l1.414 1.414-26.022 26.02-1.414-1.413z"/><path d="M12.696 11.282l26.022 26.02-1.414 1.415-26.022-26.02z"/></symbol><symbol id="viewbox-prev-icon" viewBox="0 0 50 50"><path d="M27.3 34.7L17.6 25l9.7-9.7 1.4 1.4-8.3 8.3 8.3 8.3z"/></symbol><symbol id="viewbox-next-icon" viewBox="0 0 50 50"><path d="M22.7 34.7l-1.4-1.4 8.3-8.3-8.3-8.3 1.4-1.4 9.7 9.7z"/></symbol></svg>'), s.click(function() {
			var s, a, l, c, u, e;
			if (!v) return $e = ne(this), i("header", d.setTitle && $e.attr("title") ? $e.attr("title") : ""), $e.attr("href").match(/(png|jpg|jpeg|gif)$/i) && (s = ne('<img class="viewbox-image" alt="">').attr("src", $e.attr("href")), p = $e, i("content", ""), m || (ne("body").append(g), g.fadeIn(d.openDuration), m = !0), (e = n("body")).css({
				"margin-left": -e.width() / 2,
				"margin-top": -e.height() / 2
			}), f(s) || h(!0), a = n("body"), l = 0, c = n("content"), u = window.setInterval(function() {
				var e, t, n, i, o, r;
				!f(s) && l < 1e3 ? l++ : (window.clearInterval(u), h(!1), ne("body").append(s), e = a.width() - c.width() + 2 * d.margin, t = a.height() - c.height() + 2 * d.margin, n = ne(window).width() - e, i = ne(window).height() - t, o = s.width(), r = s.height(), s.detach(), n < o && (r = r * n / o, o = n), i < r && (o = o * i / r, r = i), v = !0, a.animate({
					"margin-left": -(o + e) / 2 + d.margin,
					"margin-top": -(r + t) / 2 + d.margin
				}, d.resizeDuration), c.animate({
					width: o,
					height: r
				}, d.resizeDuration, function() {
					c.append(s), v = !1
				}))
			}, f(s) ? 0 : 200)), !1
		}), n("body").click(function(e) {
			e.stopPropagation(), d.nextOnContentClick && r()
		}), d.closeButton && e("close").click(function(e) {
			e.stopPropagation(), t()
		}), d.navButtons && 1 < s.length && (e("next").click(function(e) {
			e.stopPropagation(), r()
		}), e("prev").click(function(e) {
			e.stopPropagation(), s.length <= 1 || ((e = o() - 1) < 0 && (e = s.length - 1), s.eq(e).click())
		})), d.closeOnSideClick && g.click(t), this
	}, $(".tab__links__item").click(function(e) {
		e.preventDefault();
		let t = $(this);
		var n = t.data("tab");
		let i = $(".tab__content__item");
		$(".tab__links__item").not(t).removeClass("active"), t.addClass("active");
		for (let e = 0; e < i.length; e++) n == i.eq(e).data("tab") ? (i.not(i.eq(e)).removeClass("active"), i.eq(e).addClass("active")) : "all" == n && i.addClass("active")
	}), window.addEventListener("resize", C), C(), $(".popup__close, .popup__blur").click(function() {
		$(".popup").removeClass("open")
	}), $(".header__burger").click(function() {
		$(this).toggleClass("active");
		let e = $(".header");
		$(".burger-nav").toggleClass("open"), e.toggleClass("open"), e.hasClass("fixed") ? e.removeClass("fixed") : setTimeout(function() {
			e.addClass("fixed")
		}, 300)
	}), $(".request-form__blur,.burger-nav__blur,.burger-nav__close").click(function(e) {
		e.preventDefault(), $(".burger-nav").removeClass("open"), $(".request-form").removeClass("open")
	}), $(".contact__btn, .contact-section__text .btn").click(function() {
		$(".request-form").toggleClass("open");
		return false;
	}), $(".faq__title").click(function(e) {
		e.preventDefault();
		let t = $(this);
		$(".faq__title").not(t).removeClass("faq__title--active").next().slideUp("fast"), t.toggleClass("faq__title--active").next().stop(!0, !0).slideToggle("fast")
	}), $(".banner__hover").mouseover(function() {
		let e = $(this);
		var t = e.data("url");
		let n = $(".banner__img img");
		n.attr("src", t), $(".banner__img").addClass("show")
	}), $(".banner__hover").mouseleave(function() {
		$(".banner__img").removeClass("show")
	}), $(".scroll_to").click(function() {
		var _this = $(this),
		_this_anchor = _this.data("anchor");
		$("body, html").animate({
        scrollTop: $("*[data-appoint='"+_this_anchor+"']").offset().top
    }, 200);
		console.log(_this_anchor);
		return false;
	}), document.getElementById("map") && (ae = {
		zoom: 15,
		center: se = {
			lat: 40.36732999957743,
			lng: 49.83569448599041
		},
		disableDefaultUI: !0,
		icon: "https://universal.jis.az/site/templates/images/svg-icons/pin.svg",
		styles: [{
			elementType: "geometry",
			stylers: [{
				color: "#f5f5f5"
			}]
		}, {
			elementType: "labels.icon",
			stylers: [{
				visibility: "off"
			}]
		}, {
			elementType: "labels.text.fill",
			stylers: [{
				color: "#616161"
			}]
		}, {
			elementType: "labels.text.stroke",
			stylers: [{
				color: "#f5f5f5"
			}]
		}, {
			featureType: "administrative.land_parcel",
			elementType: "labels.text.fill",
			stylers: [{
				color: "#bdbdbd"
			}]
		}, {
			featureType: "poi",
			elementType: "geometry",
			stylers: [{
				color: "#eeeeee"
			}]
		}, {
			featureType: "poi",
			elementType: "labels.text.fill",
			stylers: [{
				color: "#757575"
			}]
		}, {
			featureType: "poi.park",
			elementType: "geometry",
			stylers: [{
				color: "#e5e5e5"
			}]
		}, {
			featureType: "poi.park",
			elementType: "labels.text.fill",
			stylers: [{
				color: "#9e9e9e"
			}]
		}, {
			featureType: "road",
			elementType: "geometry",
			stylers: [{
				color: "#ffffff"
			}]
		}, {
			featureType: "road.arterial",
			elementType: "labels.text.fill",
			stylers: [{
				color: "#757575"
			}]
		}, {
			featureType: "road.highway",
			elementType: "geometry",
			stylers: [{
				color: "#dadada"
			}]
		}, {
			featureType: "road.highway",
			elementType: "labels.text.fill",
			stylers: [{
				color: "#616161"
			}]
		}, {
			featureType: "road.local",
			elementType: "labels.text.fill",
			stylers: [{
				color: "#9e9e9e"
			}]
		}, {
			featureType: "transit.line",
			elementType: "geometry",
			stylers: [{
				color: "#e5e5e5"
			}]
		}, {
			featureType: "transit.station",
			elementType: "geometry",
			stylers: [{
				color: "#eeeeee"
			}]
		}, {
			featureType: "water",
			elementType: "geometry",
			stylers: [{
				color: "#c9c9c9"
			}]
		}, {
			featureType: "water",
			elementType: "labels.text.fill",
			stylers: [{
				color: "#9e9e9e"
			}]
		}]
	}, ae = new google.maps.Map(document.getElementById("map"), ae), new google.maps.Marker({
		position: se,
		map: ae,
		icon: "https://universal.jis.az/site/templates/images/svg-icons/pin.svg"
	})), $(".tab-item").mouseover(function() {
		let e = $(this);
		var t = e.data("tab");
		let n = $(".tab-content__item");
		let _link = e.attr("href");

		$(".services__desc .btn").attr("href", _link);
		e.addClass("active"), $(".tab-item").not(this).removeClass("active");
		for (let e = 0; e <= n.length; e++) t == n.eq(e).data("tab") ? n.eq(e).addClass("active") : n.eq(e).removeClass("active")
	}), $(".tab-item").click(function() {
		return false;
	}), setInterval(function() {
		var e = $(".partners__item.active").removeClass("active").next();
		(e.length ? $(e) : $(".partners__item:first-child")).addClass("active")
	}, 3e3), $description = $(".location__map__title"), $(".hovered").hover(function() {
		let e = $(this);
		var t = e.data("name"),
			n = e.data("flag");
		$description.addClass("show"), $description.find("span").text(t), $description.find("img").attr("src", n)
	}, function() {
		$description.removeClass("show")
	}), $(document).on("mousemove", function(e) {
		$description.css({
			left: e.pageX,
			top: e.pageY - 70
		})
	});


	if ($(".carousel").length) {

		var ce = $(".carousel").flickity({
				pageDots: !1
			}),
			ue = $(".carousel-nav"),
			Ce = ue.find(".carousel-cell"),
			Ee = (ue.on("click", ".carousel-cell", function(e) {
				e = $(e.currentTarget).index(), ce.flickity("select", e)
			}), ce.data("flickity")),
			Se = (ue.position().top, Ce.height()),
			De = ue.height();
		ce.on("select.flickity", function() {
			ue.find(".is-nav-selected").removeClass("is-nav-selected");
			var e = Ce.eq(Ee.selectedIndex).addClass("is-nav-selected").position().top + ue.scrollTop() - (De + Se) / 2;
			ue.animate({
				scrollTop: e
			})
		});

	}


setTimeout(function(){
	$(".request-form__blur,.burger-nav__blur,.burger-nav__close").click(function(e) {
		e.preventDefault(), $(".burger-nav").removeClass("open"), $(".request-form").removeClass("open")
	})
}, 1200);
