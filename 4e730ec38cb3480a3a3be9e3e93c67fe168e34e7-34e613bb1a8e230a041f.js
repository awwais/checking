(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        "8+s/": function(e, t, n) {
            "use strict";

            function r(e) {
                return e && "object" == typeof e && "default" in e ? e.default : e
            }
            var o = n("q1tI"),
                a = r(o),
                i = r(n("Gytx"));

            function c(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var u = !("undefined" == typeof window || !window.document || !window.document.createElement);
            e.exports = function(e, t, n) {
                if ("function" != typeof e) throw new Error("Expected reducePropsToState to be a function.");
                if ("function" != typeof t) throw new Error("Expected handleStateChangeOnClient to be a function.");
                if (void 0 !== n && "function" != typeof n) throw new Error("Expected mapStateOnServer to either be undefined or a function.");
                return function(r) {
                    if ("function" != typeof r) throw new Error("Expected WrappedComponent to be a React component.");
                    var s, l = [];

                    function T() {
                        s = e(l.map((function(e) {
                            return e.props
                        }))), f.canUseDOM ? t(s) : n && (s = n(s))
                    }
                    var f = function(e) {
                        var t, n;

                        function o() {
                            return e.apply(this, arguments) || this
                        }
                        n = e, (t = o).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, o.peek = function() {
                            return s
                        }, o.rewind = function() {
                            if (o.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                            var e = s;
                            return s = void 0, l = [], e
                        };
                        var c = o.prototype;
                        return c.shouldComponentUpdate = function(e) {
                            return !i(e, this.props)
                        }, c.componentWillMount = function() {
                            l.push(this), T()
                        }, c.componentDidUpdate = function() {
                            T()
                        }, c.componentWillUnmount = function() {
                            var e = l.indexOf(this);
                            l.splice(e, 1), T()
                        }, c.render = function() {
                            return a.createElement(r, this.props)
                        }, o
                    }(o.Component);
                    return c(f, "displayName", "SideEffect(" + function(e) {
                        return e.displayName || e.name || "Component"
                    }(r) + ")"), c(f, "canUseDOM", u), f
                }
            }
        },
        Bl7J: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                a = n("Wbzz"),
                i = function() {
                    return o.a.createElement("footer", {
                        className: "bg-footerGray"
                    }, o.a.createElement("nav", {
                        className: "flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm"
                    }))
                };
            var c = function() {
                var e = Object(r.useState)(!1),
                    t = (e[0], e[1], Object(a.useStaticQuery)("3649515864").site);
                return o.a.createElement("header", {
                    className: "bg-transparent"
                }, o.a.createElement("div", {
                    className: "flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8"
                }, o.a.createElement(a.Link, {
                    className: "flex items-center no-underline text-white",
                    to: "/"
                }, o.a.createElement("span", {
                    className: "font-bold text-xl tracking-tight uppercase font-noto"
                }, t.siteMetadata.title)), o.a.createElement("nav", {
                    className: "block md:block flex justify-around md:items-center w-full md:w-auto"
                }, [{
                    route: "/",
                    title: "Home"
                }, {
                    route: "/blog",
                    title: "Blog"
                }, {
                    route: "/work",
                    title: "Work"
                }, {
                    route: "/uses",
                    title: "Uses"
                }, {
                    route: "/about",
                    title: "About"
                }].map((function(e) {
                    return o.a.createElement(a.Link, {
                        className: "inline-block md:inline-block justify-between border-solid hover:border-teal-500 border-b-2 border-gray-900 text-relaxed uppercase mt-4 md:mt-0 md:ml-6 no-underline font-noto text-white",
                        key: e.title,
                        title: e.title,
                        to: e.route
                    }, e.title)
                })))))
            };
            t.a = function(e) {
                var t = e.children;
                return o.a.createElement("div", {
                    className: "flex flex-col font-sans bg-gray-900 min-h-screen text-white"
                }, o.a.createElement(c, null), o.a.createElement("main", {
                    className: "flex flex-col flex-1 max-w-4xl mx-auto px-4 py-8 md:p-8 w-full"
                }, t), o.a.createElement(i, null))
            }
        },
        Gytx: function(e, t) {
            e.exports = function(e, t, n, r) {
                var o = n ? n.call(r, e, t) : void 0;
                if (void 0 !== o) return !!o;
                if (e === t) return !0;
                if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
                var a = Object.keys(e),
                    i = Object.keys(t);
                if (a.length !== i.length) return !1;
                for (var c = Object.prototype.hasOwnProperty.bind(t), u = 0; u < a.length; u++) {
                    var s = a[u];
                    if (!c(s)) return !1;
                    var l = e[s],
                        T = t[s];
                    if (!1 === (o = n ? n.call(r, l, T, s) : void 0) || void 0 === o && l !== T) return !1
                }
                return !0
            }
        },
        TJpk: function(e, t, n) {
            t.__esModule = !0, t.Helmet = void 0;
            var r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                a = T(n("q1tI")),
                i = T(n("17x9")),
                c = T(n("8+s/")),
                u = T(n("bmMU")),
                s = n("v1p5"),
                l = n("hFT/");

            function T(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function f(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            var E, m, A, h = (0, c.default)(s.reducePropsToState, s.handleClientStateChange, s.mapStateOnServer)((function() {
                    return null
                })),
                y = (E = h, A = m = function(e) {
                    function t() {
                        return p(this, t), d(this, e.apply(this, arguments))
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.shouldComponentUpdate = function(e) {
                        return !(0, u.default)(this.props, e)
                    }, t.prototype.mapNestedChildrenToProps = function(e, t) {
                        if (!t) return null;
                        switch (e.type) {
                            case l.TAG_NAMES.SCRIPT:
                            case l.TAG_NAMES.NOSCRIPT:
                                return {
                                    innerHTML: t
                                };
                            case l.TAG_NAMES.STYLE:
                                return {
                                    cssText: t
                                }
                        }
                        throw new Error("<" + e.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
                    }, t.prototype.flattenArrayTypeChildren = function(e) {
                        var t, n = e.child,
                            o = e.arrayTypeChildren,
                            a = e.newChildProps,
                            i = e.nestedChildren;
                        return r({}, o, ((t = {})[n.type] = [].concat(o[n.type] || [], [r({}, a, this.mapNestedChildrenToProps(n, i))]), t))
                    }, t.prototype.mapObjectTypeChildren = function(e) {
                        var t, n, o = e.child,
                            a = e.newProps,
                            i = e.newChildProps,
                            c = e.nestedChildren;
                        switch (o.type) {
                            case l.TAG_NAMES.TITLE:
                                return r({}, a, ((t = {})[o.type] = c, t.titleAttributes = r({}, i), t));
                            case l.TAG_NAMES.BODY:
                                return r({}, a, {
                                    bodyAttributes: r({}, i)
                                });
                            case l.TAG_NAMES.HTML:
                                return r({}, a, {
                                    htmlAttributes: r({}, i)
                                })
                        }
                        return r({}, a, ((n = {})[o.type] = r({}, i), n))
                    }, t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
                        var n = r({}, t);
                        return Object.keys(e).forEach((function(t) {
                            var o;
                            n = r({}, n, ((o = {})[t] = e[t], o))
                        })), n
                    }, t.prototype.warnOnInvalidChildren = function(e, t) {
                        return !0
                    }, t.prototype.mapChildrenToProps = function(e, t) {
                        var n = this,
                            r = {};
                        return a.default.Children.forEach(e, (function(e) {
                            if (e && e.props) {
                                var o = e.props,
                                    a = o.children,
                                    i = f(o, ["children"]),
                                    c = (0, s.convertReactPropstoHtmlAttributes)(i);
                                switch (n.warnOnInvalidChildren(e, a), e.type) {
                                    case l.TAG_NAMES.LINK:
                                    case l.TAG_NAMES.META:
                                    case l.TAG_NAMES.NOSCRIPT:
                                    case l.TAG_NAMES.SCRIPT:
                                    case l.TAG_NAMES.STYLE:
                                        r = n.flattenArrayTypeChildren({
                                            child: e,
                                            arrayTypeChildren: r,
                                            newChildProps: c,
                                            nestedChildren: a
                                        });
                                        break;
                                    default:
                                        t = n.mapObjectTypeChildren({
                                            child: e,
                                            newProps: t,
                                            newChildProps: c,
                                            nestedChildren: a
                                        })
                                }
                            }
                        })), t = this.mapArrayTypeChildrenToProps(r, t)
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = f(e, ["children"]),
                            o = r({}, n);
                        return t && (o = this.mapChildrenToProps(t, o)), a.default.createElement(E, o)
                    }, o(t, null, [{
                        key: "canUseDOM",
                        set: function(e) {
                            E.canUseDOM = e
                        }
                    }]), t
                }(a.default.Component), m.propTypes = {
                    base: i.default.object,
                    bodyAttributes: i.default.object,
                    children: i.default.oneOfType([i.default.arrayOf(i.default.node), i.default.node]),
                    defaultTitle: i.default.string,
                    defer: i.default.bool,
                    encodeSpecialCharacters: i.default.bool,
                    htmlAttributes: i.default.object,
                    link: i.default.arrayOf(i.default.object),
                    meta: i.default.arrayOf(i.default.object),
                    noscript: i.default.arrayOf(i.default.object),
                    onChangeClientState: i.default.func,
                    script: i.default.arrayOf(i.default.object),
                    style: i.default.arrayOf(i.default.object),
                    title: i.default.string,
                    titleAttributes: i.default.object,
                    titleTemplate: i.default.string
                }, m.defaultProps = {
                    defer: !0,
                    encodeSpecialCharacters: !0
                }, m.peek = E.peek, m.rewind = function() {
                    var e = E.rewind();
                    return e || (e = (0, s.mapStateOnServer)({
                        baseTag: [],
                        bodyAttributes: {},
                        encodeSpecialCharacters: !0,
                        htmlAttributes: {},
                        linkTags: [],
                        metaTags: [],
                        noscriptTags: [],
                        scriptTags: [],
                        styleTags: [],
                        title: "",
                        titleAttributes: {}
                    })), e
                }, A);
            y.renderStatic = y.rewind, t.Helmet = y, t.default = y
        },
        bmMU: function(e, t, n) {
            "use strict";
            var r = Array.isArray,
                o = Object.keys,
                a = Object.prototype.hasOwnProperty,
                i = "undefined" != typeof Element;
            e.exports = function(e, t) {
                try {
                    return function e(t, n) {
                        if (t === n) return !0;
                        if (t && n && "object" == typeof t && "object" == typeof n) {
                            var c, u, s, l = r(t),
                                T = r(n);
                            if (l && T) {
                                if ((u = t.length) != n.length) return !1;
                                for (c = u; 0 != c--;)
                                    if (!e(t[c], n[c])) return !1;
                                return !0
                            }
                            if (l != T) return !1;
                            var f = t instanceof Date,
                                p = n instanceof Date;
                            if (f != p) return !1;
                            if (f && p) return t.getTime() == n.getTime();
                            var d = t instanceof RegExp,
                                E = n instanceof RegExp;
                            if (d != E) return !1;
                            if (d && E) return t.toString() == n.toString();
                            var m = o(t);
                            if ((u = m.length) !== o(n).length) return !1;
                            for (c = u; 0 != c--;)
                                if (!a.call(n, m[c])) return !1;
                            if (i && t instanceof Element && n instanceof Element) return t === n;
                            for (c = u; 0 != c--;)
                                if (!("_owner" === (s = m[c]) && t.$$typeof || e(t[s], n[s]))) return !1;
                            return !0
                        }
                        return t != t && n != n
                    }(e, t)
                } catch (n) {
                    if (n.message && n.message.match(/stack|recursion/i) || -2146828260 === n.number) return console.warn("Warning: react-fast-compare does not handle circular references.", n.name, n.message), !1;
                    throw n
                }
            }
        },
        "hFT/": function(e, t, n) {
            n("E9XD"), t.__esModule = !0;
            t.ATTRIBUTE_NAMES = {
                BODY: "bodyAttributes",
                HTML: "htmlAttributes",
                TITLE: "titleAttributes"
            };
            var r = t.TAG_NAMES = {
                    BASE: "base",
                    BODY: "body",
                    HEAD: "head",
                    HTML: "html",
                    LINK: "link",
                    META: "meta",
                    NOSCRIPT: "noscript",
                    SCRIPT: "script",
                    STYLE: "style",
                    TITLE: "title"
                },
                o = (t.VALID_TAG_NAMES = Object.keys(r).map((function(e) {
                    return r[e]
                })), t.TAG_PROPERTIES = {
                    CHARSET: "charset",
                    CSS_TEXT: "cssText",
                    HREF: "href",
                    HTTPEQUIV: "http-equiv",
                    INNER_HTML: "innerHTML",
                    ITEM_PROP: "itemprop",
                    NAME: "name",
                    PROPERTY: "property",
                    REL: "rel",
                    SRC: "src"
                }, t.REACT_TAG_MAP = {
                    accesskey: "accessKey",
                    charset: "charSet",
                    class: "className",
                    contenteditable: "contentEditable",
                    contextmenu: "contextMenu",
                    "http-equiv": "httpEquiv",
                    itemprop: "itemProp",
                    tabindex: "tabIndex"
                });
            t.HELMET_PROPS = {
                DEFAULT_TITLE: "defaultTitle",
                DEFER: "defer",
                ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
                ON_CHANGE_CLIENT_STATE: "onChangeClientState",
                TITLE_TEMPLATE: "titleTemplate"
            }, t.HTML_TAG_MAP = Object.keys(o).reduce((function(e, t) {
                return e[o[t]] = t, e
            }), {}), t.SELF_CLOSING_TAGS = [r.NOSCRIPT, r.SCRIPT, r.STYLE], t.HELMET_ATTRIBUTE = "data-react-helmet"
        },
        jNNy: function(e, t, n) {
            "use strict";
            var r = n("Wbzz"),
                o = n("q1tI"),
                a = n.n(o),
                i = n("TJpk"),
                c = n.n(i),
                u = n("q1An"),
                s = n.n(u);

            function l(e) {
                var t = e.description,
                    n = e.lang,
                    o = e.meta,
                    i = e.keywords,
                    u = e.title,
                    s = e.url,
                    l = e.type,
                    T = e.seoImg,
                    f = e.seoImgAlt,
                    p = e.node,
                    d = e.article,
                    E = Object(r.useStaticQuery)("2055463").site,
                    m = E.siteMetadata.description,
                    A = E.siteMetadata.title,
                    h = t || m,
                    y = s || E.siteMetadata.siteUrl,
                    S = E.siteMetadata.headline,
                    b = E.siteMetadata.author,
                    g = {
                        "@context": "http://schema.org",
                        "@type": "Person",
                        url: y,
                        sameAs: ["https://www.facebook.com/anshumanv12/", "https://twitter.com/Anshumaniac/", "https://www.linkedin.com/in/anshumanv12/"],
                        headline: S,
                        inLanguage: n,
                        mainEntityOfPage: y,
                        description: m,
                        name: A,
                        author: {
                            "@type": "Person",
                            name: b
                        },
                        copyrightHolder: {
                            "@type": "Person",
                            name: b
                        },
                        copyrightYear: "2019",
                        creator: {
                            "@type": "Person",
                            name: b
                        },
                        publisher: {
                            "@type": "Person",
                            name: b
                        },
                        datePublished: "2019-12-06T10:30:00+01:00",
                        image: {
                            "@type": "ImageObject",
                            url: "https://github.com/anshumanv.png"
                        }
                    },
                    _ = [{
                        "@type": "ListItem",
                        item: {
                            "@id": y,
                            name: "Homepage"
                        },
                        position: 1
                    }],
                    v = null;
                l && (v = {
                    "@context": "http://schema.org",
                    "@type": "Article",
                    sameAs: ["https://www.facebook.com/anshumanv12/", "https://twitter.com/Anshumaniac", "https://www.linkedin.com/in/anshumanv12/"],
                    author: {
                        "@type": "Person",
                        name: f
                    },
                    copyrightHolder: {
                        "@type": "Person",
                        name: b
                    },
                    copyrightYear: "2019",
                    creator: {
                        "@type": "Person",
                        name: b
                    },
                    publisher: {
                        "@type": "Person",
                        name: b,
                        logo: {
                            "@type": "ImageObject",
                            url: "https://github.com/anshumanv.png"
                        }
                    },
                    datePublished: p.published_on,
                    description: h,
                    headline: u,
                    inLanguage: n,
                    url: s,
                    name: u,
                    image: {
                        "@type": "ImageObject",
                        url: T
                    },
                    mainEntityOfPage: s
                }, _.push({
                    "@type": "ListItem",
                    item: {
                        "@id": s,
                        name: u
                    },
                    position: 2
                }));
                var P = {
                    "@context": "http://schema.org",
                    "@type": "BreadcrumbList",
                    description: "List",
                    name: "Breadcrumbs",
                    itemListElement: _
                };
                return a.a.createElement(c.a, {
                    htmlAttributes: {
                        lang: n
                    },
                    meta: [{
                        name: "description",
                        content: h
                    }, {
                        name: "theme-color",
                        content: "#282c35"
                    }, {
                        name: "image",
                        content: T
                    }, {
                        name: "theme-color",
                        content: "#282c35"
                    }, {
                        property: "og:title",
                        content: u
                    }, {
                        property: "og:locale",
                        content: "en"
                    }, {
                        property: "og:description",
                        content: h
                    }, {
                        property: "og:type",
                        content: "website"
                    }, {
                        property: "og:site_name",
                        content: "anshumanv.dev"
                    }, {
                        property: "og:url",
                        content: y
                    }, {
                        property: "og:image",
                        content: T
                    }, {
                        property: "og:image:alt",
                        content: f
                    }, {
                        name: "twitter:card",
                        content: "summary"
                    }, {
                        name: "twitter:creator",
                        content: E.siteMetadata.authorTwitter
                    }, {
                        name: "twitter:title",
                        content: u
                    }, {
                        name: "twitter:card",
                        content: l
                    }, {
                        name: "twitter:image",
                        content: T
                    }, {
                        name: "twitter:image:alt",
                        content: f
                    }, {
                        name: "twitter:description",
                        content: h
                    }].concat(i.length > 0 ? {
                        name: "keywords",
                        content: i.join(", ")
                    } : []).concat(o),
                    title: u,
                    titleTemplate: "%s | " + E.siteMetadata.title
                }, !d && a.a.createElement("script", {
                    type: "application/ld+json"
                }, JSON.stringify(g)), d && a.a.createElement("script", {
                    type: "application/ld+json"
                }, JSON.stringify(v)), a.a.createElement("script", {
                    type: "application/ld+json"
                }, JSON.stringify(P)))
            }
            l.defaultProps = {
                lang: "en",
                keywords: [],
                meta: [],
                seoImg: s.a,
                seoImgAlt: "Anshuman Verma",
                node: null
            };
            var T = l;
            t.a = T
        },
        q1An: function(e, t, n) {
            e.exports = n.p + "static/me-1022b06fa63e407fe6d5779dae1bb95e.png"
        },
        v1p5: function(e, t, n) {
            (function(e) {
                n("E9XD"), t.__esModule = !0, t.warn = t.requestAnimationFrame = t.reducePropsToState = t.mapStateOnServer = t.handleClientStateChange = t.convertReactPropstoHtmlAttributes = void 0;
                var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    o = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    },
                    a = u(n("q1tI")),
                    i = u(n("YVoz")),
                    c = n("hFT/");

                function u(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var s, l = function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        return !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
                    },
                    T = function(e) {
                        var t = m(e, c.TAG_NAMES.TITLE),
                            n = m(e, c.HELMET_PROPS.TITLE_TEMPLATE);
                        if (n && t) return n.replace(/%s/g, (function() {
                            return t
                        }));
                        var r = m(e, c.HELMET_PROPS.DEFAULT_TITLE);
                        return t || r || void 0
                    },
                    f = function(e) {
                        return m(e, c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function() {}
                    },
                    p = function(e, t) {
                        return t.filter((function(t) {
                            return void 0 !== t[e]
                        })).map((function(t) {
                            return t[e]
                        })).reduce((function(e, t) {
                            return o({}, e, t)
                        }), {})
                    },
                    d = function(e, t) {
                        return t.filter((function(e) {
                            return void 0 !== e[c.TAG_NAMES.BASE]
                        })).map((function(e) {
                            return e[c.TAG_NAMES.BASE]
                        })).reverse().reduce((function(t, n) {
                            if (!t.length)
                                for (var r = Object.keys(n), o = 0; o < r.length; o++) {
                                    var a = r[o].toLowerCase();
                                    if (-1 !== e.indexOf(a) && n[a]) return t.concat(n)
                                }
                            return t
                        }), [])
                    },
                    E = function(e, t, n) {
                        var o = {};
                        return n.filter((function(t) {
                            return !!Array.isArray(t[e]) || (void 0 !== t[e] && b("Helmet: " + e + ' should be of type "Array". Instead found type "' + r(t[e]) + '"'), !1)
                        })).map((function(t) {
                            return t[e]
                        })).reverse().reduce((function(e, n) {
                            var r = {};
                            n.filter((function(e) {
                                for (var n = void 0, a = Object.keys(e), i = 0; i < a.length; i++) {
                                    var u = a[i],
                                        s = u.toLowerCase(); - 1 === t.indexOf(s) || n === c.TAG_PROPERTIES.REL && "canonical" === e[n].toLowerCase() || s === c.TAG_PROPERTIES.REL && "stylesheet" === e[s].toLowerCase() || (n = s), -1 === t.indexOf(u) || u !== c.TAG_PROPERTIES.INNER_HTML && u !== c.TAG_PROPERTIES.CSS_TEXT && u !== c.TAG_PROPERTIES.ITEM_PROP || (n = u)
                                }
                                if (!n || !e[n]) return !1;
                                var l = e[n].toLowerCase();
                                return o[n] || (o[n] = {}), r[n] || (r[n] = {}), !o[n][l] && (r[n][l] = !0, !0)
                            })).reverse().forEach((function(t) {
                                return e.push(t)
                            }));
                            for (var a = Object.keys(r), u = 0; u < a.length; u++) {
                                var s = a[u],
                                    l = (0, i.default)({}, o[s], r[s]);
                                o[s] = l
                            }
                            return e
                        }), []).reverse()
                    },
                    m = function(e, t) {
                        for (var n = e.length - 1; n >= 0; n--) {
                            var r = e[n];
                            if (r.hasOwnProperty(t)) return r[t]
                        }
                        return null
                    },
                    A = (s = Date.now(), function(e) {
                        var t = Date.now();
                        t - s > 16 ? (s = t, e(t)) : setTimeout((function() {
                            A(e)
                        }), 0)
                    }),
                    h = function(e) {
                        return clearTimeout(e)
                    },
                    y = "undefined" != typeof window ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || A : e.requestAnimationFrame || A,
                    S = "undefined" != typeof window ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || h : e.cancelAnimationFrame || h,
                    b = function(e) {
                        return console && "function" == typeof console.warn && console.warn(e)
                    },
                    g = null,
                    _ = function(e, t) {
                        var n = e.baseTag,
                            r = e.bodyAttributes,
                            o = e.htmlAttributes,
                            a = e.linkTags,
                            i = e.metaTags,
                            u = e.noscriptTags,
                            s = e.onChangeClientState,
                            l = e.scriptTags,
                            T = e.styleTags,
                            f = e.title,
                            p = e.titleAttributes;
                        O(c.TAG_NAMES.BODY, r), O(c.TAG_NAMES.HTML, o), P(f, p);
                        var d = {
                                baseTag: R(c.TAG_NAMES.BASE, n),
                                linkTags: R(c.TAG_NAMES.LINK, a),
                                metaTags: R(c.TAG_NAMES.META, i),
                                noscriptTags: R(c.TAG_NAMES.NOSCRIPT, u),
                                scriptTags: R(c.TAG_NAMES.SCRIPT, l),
                                styleTags: R(c.TAG_NAMES.STYLE, T)
                            },
                            E = {},
                            m = {};
                        Object.keys(d).forEach((function(e) {
                            var t = d[e],
                                n = t.newTags,
                                r = t.oldTags;
                            n.length && (E[e] = n), r.length && (m[e] = d[e].oldTags)
                        })), t && t(), s(e, E, m)
                    },
                    v = function(e) {
                        return Array.isArray(e) ? e.join("") : e
                    },
                    P = function(e, t) {
                        void 0 !== e && document.title !== e && (document.title = v(e)), O(c.TAG_NAMES.TITLE, t)
                    },
                    O = function(e, t) {
                        var n = document.getElementsByTagName(e)[0];
                        if (n) {
                            for (var r = n.getAttribute(c.HELMET_ATTRIBUTE), o = r ? r.split(",") : [], a = [].concat(o), i = Object.keys(t), u = 0; u < i.length; u++) {
                                var s = i[u],
                                    l = t[s] || "";
                                n.getAttribute(s) !== l && n.setAttribute(s, l), -1 === o.indexOf(s) && o.push(s);
                                var T = a.indexOf(s); - 1 !== T && a.splice(T, 1)
                            }
                            for (var f = a.length - 1; f >= 0; f--) n.removeAttribute(a[f]);
                            o.length === a.length ? n.removeAttribute(c.HELMET_ATTRIBUTE) : n.getAttribute(c.HELMET_ATTRIBUTE) !== i.join(",") && n.setAttribute(c.HELMET_ATTRIBUTE, i.join(","))
                        }
                    },
                    R = function(e, t) {
                        var n = document.head || document.querySelector(c.TAG_NAMES.HEAD),
                            r = n.querySelectorAll(e + "[" + c.HELMET_ATTRIBUTE + "]"),
                            o = Array.prototype.slice.call(r),
                            a = [],
                            i = void 0;
                        return t && t.length && t.forEach((function(t) {
                            var n = document.createElement(e);
                            for (var r in t)
                                if (t.hasOwnProperty(r))
                                    if (r === c.TAG_PROPERTIES.INNER_HTML) n.innerHTML = t.innerHTML;
                                    else if (r === c.TAG_PROPERTIES.CSS_TEXT) n.styleSheet ? n.styleSheet.cssText = t.cssText : n.appendChild(document.createTextNode(t.cssText));
                            else {
                                var u = void 0 === t[r] ? "" : t[r];
                                n.setAttribute(r, u)
                            }
                            n.setAttribute(c.HELMET_ATTRIBUTE, "true"), o.some((function(e, t) {
                                return i = t, n.isEqualNode(e)
                            })) ? o.splice(i, 1) : a.push(n)
                        })), o.forEach((function(e) {
                            return e.parentNode.removeChild(e)
                        })), a.forEach((function(e) {
                            return n.appendChild(e)
                        })), {
                            oldTags: o,
                            newTags: a
                        }
                    },
                    w = function(e) {
                        return Object.keys(e).reduce((function(t, n) {
                            var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
                            return t ? t + " " + r : r
                        }), "")
                    },
                    M = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Object.keys(e).reduce((function(t, n) {
                            return t[c.REACT_TAG_MAP[n] || n] = e[n], t
                        }), t)
                    },
                    I = function(e, t, n) {
                        switch (e) {
                            case c.TAG_NAMES.TITLE:
                                return {
                                    toComponent: function() {
                                        return e = t.title, n = t.titleAttributes, (r = {
                                            key: e
                                        })[c.HELMET_ATTRIBUTE] = !0, o = M(n, r), [a.default.createElement(c.TAG_NAMES.TITLE, o, e)];
                                        var e, n, r, o
                                    },
                                    toString: function() {
                                        return function(e, t, n, r) {
                                            var o = w(n),
                                                a = v(t);
                                            return o ? "<" + e + " " + c.HELMET_ATTRIBUTE + '="true" ' + o + ">" + l(a, r) + "</" + e + ">" : "<" + e + " " + c.HELMET_ATTRIBUTE + '="true">' + l(a, r) + "</" + e + ">"
                                        }(e, t.title, t.titleAttributes, n)
                                    }
                                };
                            case c.ATTRIBUTE_NAMES.BODY:
                            case c.ATTRIBUTE_NAMES.HTML:
                                return {
                                    toComponent: function() {
                                        return M(t)
                                    },
                                    toString: function() {
                                        return w(t)
                                    }
                                };
                            default:
                                return {
                                    toComponent: function() {
                                        return function(e, t) {
                                            return t.map((function(t, n) {
                                                var r, o = ((r = {
                                                    key: n
                                                })[c.HELMET_ATTRIBUTE] = !0, r);
                                                return Object.keys(t).forEach((function(e) {
                                                    var n = c.REACT_TAG_MAP[e] || e;
                                                    if (n === c.TAG_PROPERTIES.INNER_HTML || n === c.TAG_PROPERTIES.CSS_TEXT) {
                                                        var r = t.innerHTML || t.cssText;
                                                        o.dangerouslySetInnerHTML = {
                                                            __html: r
                                                        }
                                                    } else o[n] = t[e]
                                                })), a.default.createElement(e, o)
                                            }))
                                        }(e, t)
                                    },
                                    toString: function() {
                                        return function(e, t, n) {
                                            return t.reduce((function(t, r) {
                                                var o = Object.keys(r).filter((function(e) {
                                                        return !(e === c.TAG_PROPERTIES.INNER_HTML || e === c.TAG_PROPERTIES.CSS_TEXT)
                                                    })).reduce((function(e, t) {
                                                        var o = void 0 === r[t] ? t : t + '="' + l(r[t], n) + '"';
                                                        return e ? e + " " + o : o
                                                    }), ""),
                                                    a = r.innerHTML || r.cssText || "",
                                                    i = -1 === c.SELF_CLOSING_TAGS.indexOf(e);
                                                return t + "<" + e + " " + c.HELMET_ATTRIBUTE + '="true" ' + o + (i ? "/>" : ">" + a + "</" + e + ">")
                                            }), "")
                                        }(e, t, n)
                                    }
                                }
                        }
                    };
                t.convertReactPropstoHtmlAttributes = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Object.keys(e).reduce((function(t, n) {
                        return t[c.HTML_TAG_MAP[n] || n] = e[n], t
                    }), t)
                }, t.handleClientStateChange = function(e) {
                    g && S(g), e.defer ? g = y((function() {
                        _(e, (function() {
                            g = null
                        }))
                    })) : (_(e), g = null)
                }, t.mapStateOnServer = function(e) {
                    var t = e.baseTag,
                        n = e.bodyAttributes,
                        r = e.encode,
                        o = e.htmlAttributes,
                        a = e.linkTags,
                        i = e.metaTags,
                        u = e.noscriptTags,
                        s = e.scriptTags,
                        l = e.styleTags,
                        T = e.title,
                        f = void 0 === T ? "" : T,
                        p = e.titleAttributes;
                    return {
                        base: I(c.TAG_NAMES.BASE, t, r),
                        bodyAttributes: I(c.ATTRIBUTE_NAMES.BODY, n, r),
                        htmlAttributes: I(c.ATTRIBUTE_NAMES.HTML, o, r),
                        link: I(c.TAG_NAMES.LINK, a, r),
                        meta: I(c.TAG_NAMES.META, i, r),
                        noscript: I(c.TAG_NAMES.NOSCRIPT, u, r),
                        script: I(c.TAG_NAMES.SCRIPT, s, r),
                        style: I(c.TAG_NAMES.STYLE, l, r),
                        title: I(c.TAG_NAMES.TITLE, {
                            title: f,
                            titleAttributes: p
                        }, r)
                    }
                }, t.reducePropsToState = function(e) {
                    return {
                        baseTag: d([c.TAG_PROPERTIES.HREF], e),
                        bodyAttributes: p(c.ATTRIBUTE_NAMES.BODY, e),
                        defer: m(e, c.HELMET_PROPS.DEFER),
                        encode: m(e, c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
                        htmlAttributes: p(c.ATTRIBUTE_NAMES.HTML, e),
                        linkTags: E(c.TAG_NAMES.LINK, [c.TAG_PROPERTIES.REL, c.TAG_PROPERTIES.HREF], e),
                        metaTags: E(c.TAG_NAMES.META, [c.TAG_PROPERTIES.NAME, c.TAG_PROPERTIES.CHARSET, c.TAG_PROPERTIES.HTTPEQUIV, c.TAG_PROPERTIES.PROPERTY, c.TAG_PROPERTIES.ITEM_PROP], e),
                        noscriptTags: E(c.TAG_NAMES.NOSCRIPT, [c.TAG_PROPERTIES.INNER_HTML], e),
                        onChangeClientState: f(e),
                        scriptTags: E(c.TAG_NAMES.SCRIPT, [c.TAG_PROPERTIES.SRC, c.TAG_PROPERTIES.INNER_HTML], e),
                        styleTags: E(c.TAG_NAMES.STYLE, [c.TAG_PROPERTIES.CSS_TEXT], e),
                        title: T(e),
                        titleAttributes: p(c.ATTRIBUTE_NAMES.TITLE, e)
                    }
                }, t.requestAnimationFrame = y, t.warn = b
            }).call(this, n("yLpj"))
        }
    }
]);
//# sourceMappingURL=4e730ec38cb3480a3a3be9e3e93c67fe168e34e7-34e613bb1a8e230a041f.js.map