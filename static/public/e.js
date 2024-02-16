//@preserve v4.21.0+c3d7416513d07
! function(e) {
	var t = {};

	function r(n) {
		if (t[n]) return t[n].exports;
		var i = t[n] = {
			i: n,
			l: !1,
			exports: {}
		};
		return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
	}
	r.m = e, r.c = t, r.d = function(e, t, n) {
		r.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: n
		})
	}, r.r = function(e) {
		'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: 'Module'
		}), Object.defineProperty(e, '__esModule', {
			value: !0
		})
	}, r.t = function(e, t) {
		if (1 & t && (e = r(e)), 8 & t) return e;
		if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
		var n = Object.create(null);
		if (r.r(n), Object.defineProperty(n, 'default', {
				enumerable: !0,
				value: e
			}), 2 & t && 'string' != typeof e)
			for (var i in e) r.d(n, i, function(t) {
				return e[t]
			}.bind(null, i));
		return n
	}, r.n = function(e) {
		var t = e && e.__esModule ? function t() {
			return e.default
		} : function t() {
			return e
		};
		return r.d(t, 'a', t), t
	}, r.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, r.p = "/js/", r(r.s = 14)
}([function(e, t, r) {
	"use strict";
	var n, i, o;
	Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.EventVisualizerStatus = t.PostMessageType = t.SESSION_PARAMS = t.HEAP_TRACK_CALL_MESSAGE_TYPES = t.MessageType = t.MAX_COOKIE_SIZE_FOR_LANDING_PAGE = t.ASYNC_SOURCE_LOAD_TIMEOUT_IN_MS = t.MAX_REQUEST_UNLOAD_TIMEOUT_IN_MS = t.MAX_REQUEST_TIMEOUT_IN_MS = t.MAX_REQUEST_LENGTH = t.MAX_TARGET_TEXT_LENGTH = t.MAX_SINGLE_REQUEST_VALUE_LENGTH = t.SESSION_COOKIE_EXPIRATION_IN_MS = t.USER_COOKIE_EXPIRATION_IN_MS = t.EV_CSS_FOR_JS_URL = t.EV_CSS_URL = t.EV_JS_URL = t.HEAP_WEB_APP_URI = t.EV_COOKIE_NAME = t.TRACKER_VERSION = t.MAX_ATTRIBUTE_LENGTH = t.SELECTOR_SNAPSHOT_ANCESTOR_TRAVERSAL_LIMIT = t.SELECTOR_SNAPSHOT_SIBLING_TRAVERSAL_LIMIT = t.HEAP_EV_ENV_ID = t.AUTH_TOKENS_TO_REDACT = t.REDACTED_VALUE = void 0, t.REDACTED_VALUE = 'heap_redacted', t.AUTH_TOKENS_TO_REDACT = ['id_token', 'access_token', 'refresh_token', 'auth_token'], t.HEAP_EV_ENV_ID = '3407116132', t.SELECTOR_SNAPSHOT_SIBLING_TRAVERSAL_LIMIT = 200, t.SELECTOR_SNAPSHOT_ANCESTOR_TRAVERSAL_LIMIT = 50, t.MAX_ATTRIBUTE_LENGTH = 255, t.TRACKER_VERSION = '4.0', t.EV_COOKIE_NAME = '_hp_ved', t.HEAP_WEB_APP_URI = 'https://heapanalytics.com', t.EV_JS_URL = 'https://heapanalytics.com/js/ved.js', t.EV_CSS_URL = 'https://heapanalytics.com/css/ved.css', t.EV_CSS_FOR_JS_URL = 'https://heapanalytics.com/js/ved.css', t.USER_COOKIE_EXPIRATION_IN_MS = 340776e5, t.SESSION_COOKIE_EXPIRATION_IN_MS = 18e5, t.MAX_SINGLE_REQUEST_VALUE_LENGTH = 1024, t.MAX_TARGET_TEXT_LENGTH = 64, t.MAX_REQUEST_LENGTH = 3900, t.MAX_REQUEST_TIMEOUT_IN_MS = 300, t.MAX_REQUEST_UNLOAD_TIMEOUT_IN_MS = 100, t.ASYNC_SOURCE_LOAD_TIMEOUT_IN_MS = 5e3, t.MAX_COOKIE_SIZE_FOR_LANDING_PAGE = 3500,
		function(e) {
			e.AutoTrack = "autotrack", e.Metadata = "metadata", e.SourceTrack = "sourceTrack", e.ManualTrack = "manualTrack"
		}(n = t.MessageType || (t.MessageType = {})), t.HEAP_TRACK_CALL_MESSAGE_TYPES = [n.SourceTrack, n.ManualTrack], t.SESSION_PARAMS = ['r', 'e', 'us', 'um', 'ut', 'uc', 'ua', 'ts', 'd', 'h', 't', 'q', 'g'],
		function(e) {
			e.Telemetry = "telemetry", e.StatusUpdate = "status"
		}(i = t.PostMessageType || (t.PostMessageType = {})),
		function(e) {
			e.ReceivedInitMessage = "received_init_message", e.PreFetchMetadata = "pre_fetch_metadata", e.PostFetchMetadata = "post_fetch_metadata"
		}(o = t.EventVisualizerStatus || (t.EventVisualizerStatus = {}))
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.isFunction = t.isObject = t.isObjectOrFunction = t.isNumber = t.isString = void 0;
	var n = function(e) {
		return '[object String]' === Object.prototype.toString.call(e)
	};
	t.isString = n;
	var i = function(e) {
		return '[object Number]' === Object.prototype.toString.call(e)
	};
	t.isNumber = i;
	var o = function(e) {
		var t = typeof e;
		return e && ('object' === t || 'function' === t)
	};
	t.isObjectOrFunction = o;
	var a = function(e) {
		var t;
		return 'object' === typeof e
	};
	t.isObject = a;
	var u = function(e) {
		return 'function' == typeof e
	};
	t.isFunction = u
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.requestStringBuilder = t.encodePrimitiveKeysAndValuesAsArrayOfStrings = void 0;
	var n = r(1),
		i = r(4),
		o = r(0),
		a = function(e) {
			if ((0, n.isObject)(e)) {
				var t = (0, i.getPrimitiveValuedObject)(e),
					r = {};
				Object.keys(t).forEach((function(e) {
					var i = t[e];
					(0, n.isString)(i) && '' === i || (r[e] = i)
				}));
				var o = [];
				return Object.keys(r).forEach((function(e) {
					o.push(e, t[e].toString())
				})), o
			}
			return []
		};
	t.encodePrimitiveKeysAndValuesAsArrayOfStrings = a;
	var u = function(e, t) {
		var r = '',
			n = 0,
			i = [],
			a = function(e) {
				try {
					return encodeURIComponent(e)
				} catch (r) {
					if (r instanceof URIError) return t('Error encoding value.', r), encodeURIComponent(e.slice(0, -1));
					throw t('Error encoding value (Not URIError).', r), r
				}
			},
			u = function(e) {
				return null == e || '' === e
			},
			c = function(e, t) {
				return u(t) ? '' : '&' + a(e) + '=' + a(t)
			},
			s = function(t) {
				var r, i;
				i = '';
				var o = e ? n++ : '';
				for (r in t)
					if (Object.prototype.hasOwnProperty.call(t, r)) {
						var a = t[r];
						if (Array.isArray(a))
							for (var s = a.length % 2 == 0, l = 0; l < a.length; l++) {
								var f = l % 2 == 0,
									d = l + 1 < a.length && u(a[l + 1]),
									p;
								if (s && f && d) l += 1;
								else i += c(r + o, a[l])
							} else i += c(r + o, a)
					} return i
			};
		return {
			addSingleEventProps: function(e) {
				var t = s(e);
				t.length + r.length > o.MAX_REQUEST_LENGTH && (i.push(r), r = '', n = 0, t = s(e)), r += t
			},
			build: function(e) {
				if (!e) return r.slice(1);
				i.push(r);
				for (var t = 0; t < i.length; t++) i[t] = i[t].slice(1);
				return i
			}
		}
	};
	t.requestStringBuilder = u
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.sample = void 0;
	var n = function(e, t, r) {
		Math.random() * e < 1 && t.apply(null, r)
	};
	t.sample = n
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.getPrimitiveValuedObject = void 0;
	var n = r(1),
		i = function(e) {
			var t = {},
				r;
			return Object.keys(e).filter((function(t) {
				return void 0 !== e[t] && null !== e[t] && !(0, n.isObjectOrFunction)(e[t])
			})).forEach((function(r) {
				t[r] = e[r]
			})), t
		};
	t.getPrimitiveValuedObject = i
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.generateId = t.trimLeadingZeros = t.hat = void 0;
	var n = function(e, r) {
		var n, i;
		if (r || (r = 16), void 0 === e && (e = 128), e <= 0) return '0';
		var o = Math.log(Math.pow(2, e)) / Math.log(r);
		for (n = 2; o === 1 / 0; n *= 2) o = Math.log(Math.pow(2, e / n)) / Math.log(r) * n;
		var a = o - Math.floor(o),
			u = '';
		for (n = 0; n < Math.floor(o); n++) u = (i = Math.floor(Math.random() * r).toString(r)) + u;
		if (a) {
			var c = Math.pow(r, a);
			u = (i = Math.floor(Math.random() * c).toString(r)) + u
		}
		var s = parseInt(u, r);
		return s !== 1 / 0 && s >= Math.pow(2, e) ? (0, t.hat)(e, r) : u
	};
	t.hat = n;
	var i = function(e) {
		return e.replace(/^0+/, '')
	};
	t.trimLeadingZeros = i;
	var o = function() {
		var e = (0, t.hat)(53, 10);
		return (0, t.trimLeadingZeros)(e)
	};
	t.generateId = o
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.truncateCSSClasses = t.truncateKeysToSingleCharacter = t.truncateKeysAndValuesOfObject = t.truncate = void 0;
	var n = r(1),
		i = r(4),
		o = function(e, t) {
			return n.isString(e) && n.isNumber(t) ? e.slice(0, t) : e
		};
	t.truncate = o;
	var a = function(e, r) {
		var n = {},
			o = (0, i.getPrimitiveValuedObject)(e),
			a;
		return Object.keys(o).forEach((function(i) {
			var o = (0, t.truncate)(e[i], r),
				a = (0, t.truncate)(i, r);
			n[a] = o
		})), n
	};
	t.truncateKeysAndValuesOfObject = a;
	var u = function(e, t) {
		var r = {},
			n;
		return Object.keys(e).forEach((function(n) {
			t.indexOf(n) > -1 ? r[n.charAt(0)] = e[n] : r[n] = e[n]
		})), r
	};
	t.truncateKeysToSingleCharacter = u;
	var c = function(e, t) {
		var r, n, i, o;
		return e ? e.length > t ? e.slice(0, t).split(/\s+/).slice(0, -1).join(' ').trim() : e : ''
	};
	t.truncateCSSClasses = c
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.isSupportedClient = t.isUACHClient = t.getIEVersion = t.canUseConsole = t.isIOSWebkitBrowser = t.isSafari = t.getUserAgent = t.getAppVersion = t._objectHasDefineProperty = void 0;
	var n = function() {
		return !!Object.defineProperty
	};
	t._objectHasDefineProperty = n;
	var i = function() {
		return navigator.appVersion
	};
	t.getAppVersion = i;
	var o = function() {
		return navigator.userAgent
	};
	t.getUserAgent = o;
	var a = function() {
		return (0, t.getAppVersion)().indexOf('Safari') > -1
	};
	t.isSafari = a;
	var u = function() {
		var e = (0, t.getUserAgent)(),
			r = e.match(/iPad/i) || e.match(/iPhone/i),
			n = e.match(/WebKit/i);
		return r && n && !e.match(/CriOS/i)
	};
	t.isIOSWebkitBrowser = u;
	var c = function() {
		var e = (0, t.getIEVersion)();
		return !(e && 9 === e)
	};
	t.canUseConsole = c;
	var s = function() {
		var e = (0, t.getAppVersion)(),
			r = null;
		return e && (e.indexOf('MSIE 6.') > -1 ? r = 6 : e.indexOf('MSIE 7.') > -1 ? r = 7 : e.indexOf('MSIE 8.') > -1 ? r = 8 : e.indexOf('MSIE 9.') > -1 && (r = 9)), r
	};
	t.getIEVersion = s;
	var l = function() {
		var e;
		return !!(null === (e = navigator.userAgentData) || void 0 === e ? void 0 : e.getHighEntropyValues)
	};
	t.isUACHClient = l;
	var f = function() {
		var e = (0, t.getIEVersion)();
		return !(e && e <= 8) && (0, t._objectHasDefineProperty)()
	};
	t.isSupportedClient = f
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.getSearchKeyword = t.getPreviousPageIfHostnameMatches = t.getHostname = t.getPathFromURL = t.prefixSlashIfNeeded = t.getQueryParam = t.getLocation = t.getDocumentReferrer = void 0;
	var n = r(1),
		i = function() {
			return document.referrer
		};
	t.getDocumentReferrer = i;
	var o = function() {
		return window.location
	};
	t.getLocation = o;
	var a = function(e, r) {
		r = r || (0, t.getLocation)().search, e = e.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
		var n, i = new RegExp('[\\?&]' + e + '=([^&#]*)').exec(r);
		if (null === i) return '';
		try {
			return decodeURIComponent(i[1].replace(/\+/g, ' '))
		} catch (e) {
			return ''
		}
	};
	t.getQueryParam = a;
	var u = function(e) {
		return (0, n.isString)(e) ? e.length > 0 && '/' === e[0] ? e : '/' + e : e;
		var t
	};
	t.prefixSlashIfNeeded = u;
	var c = function(e) {
		var r = document.createElement('a');
		if (r.href = e, '' === r.host) {
			var i = r.href;
			r.href = i
		}
		var o = r.pathname;
		return (0, n.isString)(o) ? (0, t.prefixSlashIfNeeded)(o) : null
	};
	t.getPathFromURL = c;
	var s = function(e) {
		if (!e) return e;
		var t, r = new RegExp('^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)').exec(e);
		return r ? r[1] : e
	};
	t.getHostname = s;
	var l = function() {
		var e = (0, t.getDocumentReferrer)(),
			r, n;
		return e && (0, t.getHostname)(e) === (0, t.getLocation)().hostname ? (0, t.getPathFromURL)(e) : null
	};
	t.getPreviousPageIfHostnameMatches = l;
	var f = function(e) {
		var r, n = (0, t.getHostname)(e);
		if (!n) return '';
		var i = e.slice(e.indexOf('?'));
		if (n.search('google.([^/?]*)$') >= 0 || n.search('bing.com$') >= 0) r = 'q';
		else {
			if (!(n.search('yahoo.com$') >= 0)) return '';
			r = 'p'
		}
		return window.decodeURIComponent((0, t.getQueryParam)(r, i))
	};
	t.getSearchKeyword = f
}, function(e, t) {
	var r = !1;
	e.exports = function(e, t) {
		var r = function(e, t, r) {
				Math.random() * e < 1 && t.apply(null, r)
			},
			n = /(.+):nth-of-type\((\d+)\)$/,
			i = /^\w+(\.[-_\w][-_\w\d]+)*(#[-_\w][-_\w\d]+)?$/;
		return {
			isHTMLElementOnIE7: function(e) {
				try {
					return 'object' == typeof e && void 0 !== e.nodeType
				} catch (e) {
					return !1
				}
			},
			isHTMLElement: function(e) {
				try {
					return 'object' == typeof Element || 'function' == typeof Element ? e instanceof Element : 'object' == typeof HTMLDocument || 'function' == typeof HTMLDocument ? e instanceof HTMLDocument : 'object' === e && 'nodeType' in e
				} catch (t) {
					return this.isHTMLElementOnIE7(e)
				}
			},
			skipToFirstSibling: function(t) {
				if (!t) return null;
				for (var r = t, n = 0; r && n < e.SELECTOR_SNAPSHOT_SIBLING_TRAVERSAL_LIMIT;) this.isHTMLElement(r) && (t = r), r = r.previousElementSibling || r.previousSibling, n += 1;
				return t
			},
			siblingsMatchingSameSelector: function(n, o) {
				var a = [];
				n = this.skipToFirstSibling(n);
				for (var u = 0, c = !i.test(o); n && u < e.SELECTOR_SNAPSHOT_SIBLING_TRAVERSAL_LIMIT;) this.isHTMLElement(n) && n.matches && n.matches(o) && (c || this.selectorFromElement(n) === o) && a.push(n), n = n.nextElementSibling || n.nextSibling, u += 1;
				return r(10, t, ['domUtil sibling traversals', u]), a
			},
			siblingsMatchingSameSelectorAsElement: function(e) {
				var t = this.selectorFromElement(e);
				return this.siblingsMatchingSameSelector(e, t)
			},
			selectorFromElement: function(e) {
				if (!e || !e.tagName) return null;
				var t = [e.tagName.toLowerCase()];
				if (e.classList.length > 0)
					for (var r = Array.from(e.classList), n = 0; n < r.length; ++n) {
						var i = r[n];
						t.push('.' + i)
					}
				return e.type && 'select' !== e.tagName.toLowerCase() && t.push('[type="' + e.type + '"]'), e.name && t.push('[name="' + e.name + '"]'), '' !== e.id && 'radio' !== e.type && 'checkbox' !== e.type && t.push('#' + e.id), t.join('')
			},
			removeIndexFromSelector: function(e) {
				return n.test(e) ? e.replace(n, '$1') : e
			},
			extractIndexFromSelector: function(e) {
				if (n.test(e)) {
					var t = e.replace(n, '$2');
					return parseInt(t)
				}
				return 1
			},
			elementText: function(e) {
				return e.innerText || e.textContent
			},
			elementValue: function(e) {
				if (!e || !e.tagName) return null;
				switch (e.tagName.toLowerCase()) {
					case 'input':
						switch (e.type) {
							case 'checkbox':
							case 'radio':
								return e.checked;
							default:
								return e.value
						}
					case 'select':
						return e.options[e.selectedIndex].text;
					default:
						return this.elementText(e)
				}
			},
			nearestElementMatching: function(n, i) {
				for (var o, a, u = i.target, c = this.removeIndexFromSelector(n), s = this.extractIndexFromSelector(n), l = 0; l < e.SELECTOR_SNAPSHOT_ANCESTOR_TRAVERSAL_LIMIT;) {
					if (a = [], null !== (o = u.querySelectorAll(c)) && o.length > 0 && (a = this.siblingsMatchingSameSelector(o[0], c)), 1 === a.length) return r(10, t, ['domUtil ancestor traversals', l]), a[0];
					if (a.length >= s) return r(10, t, ['domUtil ancestor traversals', l]), a[s - 1];
					if (null === (u = u.parentElement)) return r(10, t, ['domUtil ancestor traversals', l]), null;
					l += 1
				}
			},
			textInNearestElementMatching: function(e, t) {
				var r = this.nearestElementMatching(e, t);
				return this.elementValue(r)
			},
			findParentElement: function(e, t) {
				return e && 'BODY' !== e.tagName && 'HTML' !== e.tagName ? t(e) ? e : this.findParentElement(e.parentElement, t) : null
			}
		}
	}
}, function(e, t, r) {
	"use strict";
	var n = this && this.__assign || function() {
		return (n = Object.assign || function(e) {
			for (var t, r = 1, n = arguments.length; r < n; r++)
				for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e
		}).apply(this, arguments)
	};
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.getReplayId = t.identifyAurycSessionWithUserId = t.createAndIdentifyNewAurycSession = t.addSRParamToProps = t.getSessionReplayParams = t.getAurycParam = t.getScreenDimensions = t.getLogrocketParam = void 0;
	var i = r(8),
		o = function(e) {
			var t = function(t) {
				var r = (0, i.getPathFromURL)(t);
				if (!r) throw 'no path present on session url';
				var n = r.split('/'),
					o = n[1],
					a = n[2],
					u = n[4],
					c = n[5];
				if (!(o && a && u && c)) throw 'invalid path on session url';
				return encodeURIComponent(o + "/" + a + "/" + u + "/" + c + "/" + e)
			};
			try {
				var r = window,
					n = '';
				return r._lr_surl_cb && r._lr_surl_cb((function(e) {
					return n = e
				})), n ? "logrocket:" + t(n) : ''
			} catch (e) {
				return ''
			}
		};
	t.getLogrocketParam = o;
	var a = function() {
		try {
			var e = window;
			return e.auryc ? {
				sch: e.innerHeight || 0,
				scw: e.innerWidth || 0
			} : {}
		} catch (e) {
			return {}
		}
	};
	t.getScreenDimensions = a;
	var u = function(e) {
		try {
			var t = window,
				r = '';
			if (t.auryc) {
				var n = t.auryc.getSessionMetadata(),
					i = n.siteId,
					o = n.sessionId,
					a = n.sampled,
					u = n.isOver,
					c;
				if (a && !u) r = "auryc:" + encodeURIComponent(i + "/" + o + "/" + e)
			}
			return r
		} catch (e) {
			return ''
		}
	};
	t.getAurycParam = u;
	var c = function(e) {
		return [(0, t.getAurycParam)(e), (0, t.getLogrocketParam)(e)].filter((function(e) {
			return e
		})).join(';')
	};
	t.getSessionReplayParams = c;
	var s = function(e) {
		try {
			var r = e.ts || (new Date).getTime(),
				i = (0, t.getSessionReplayParams)(r),
				o = i ? {
					srp: i
				} : {};
			return n(n({}, e), o)
		} catch (t) {
			return e
		}
	};
	t.addSRParamToProps = s;
	var l = function(e, t) {
			void 0 === t && (t = !1);
			var r = window;
			try {
				var n = function() {
						var n, i;
						t && (null === (n = r.auryc) || void 0 === n || n.clearUserCookie(!1)), null === (i = r.auryc) || void 0 === i || i.addUserProperties({
							heap_user_id: e
						})
					},
					i = function() {
						a() && (o(), n())
					},
					o = function() {
						r.clearInterval(u)
					},
					a = function() {
						return !!(r.auryc && r.auryc.addUserProperties && r.auryc.clearUserCookie)
					};
				if (a()) return void n();
				var u = r.setInterval(i, 250);
				r.setTimeout(o, 5e3)
			} catch (e) {
				return
			}
		},
		f = function(e) {
			l(e, !0)
		};
	t.createAndIdentifyNewAurycSession = f;
	var d = function(e) {
		l(e)
	};
	t.identifyAurycSessionWithUserId = d;
	var p = function() {
		var e = window;
		if (e.auryc) {
			var t = e.auryc.getSessionMetadata(),
				r = t.replayUrl,
				n = t.siteId,
				i = t.sessionId,
				o = t.sampled,
				a = t.isOver,
				u;
			if (o && !a) return {
				aurycParams: encodeURIComponent(n + "/" + i + "/" + (new Date).getTime()),
				replayUrl: r
			}
		}
	};
	t.getReplayId = p
}, function(e, t, r) {
	"use strict";
	var n = this && this.__assign || function() {
			return (n = Object.assign || function(e) {
				for (var t, r = 1, n = arguments.length; r < n; r++)
					for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
				return e
			}).apply(this, arguments)
		},
		i = this && this.__read || function(e, t) {
			var r = "function" == typeof Symbol && e[Symbol.iterator];
			if (!r) return e;
			var n = r.call(e),
				i, o = [],
				a;
			try {
				for (;
					(void 0 === t || t-- > 0) && !(i = n.next()).done;) o.push(i.value)
			} catch (e) {
				a = {
					error: e
				}
			} finally {
				try {
					i && !i.done && (r = n.return) && r.call(n)
				} finally {
					if (a) throw a.error
				}
			}
			return o
		},
		o = this && this.__spreadArray || function(e, t, r) {
			if (r || 2 === arguments.length)
				for (var n = 0, i = t.length, o; n < i; n++) !o && n in t || (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
			return e.concat(o || Array.prototype.slice.call(t))
		},
		a = this && this.__values || function(e) {
			var t = "function" == typeof Symbol && Symbol.iterator,
				r = t && e[t],
				n = 0;
			if (r) return r.call(e);
			if (e && "number" == typeof e.length) return {
				next: function() {
					return e && n >= e.length && (e = void 0), {
						value: e && e[n++],
						done: !e
					}
				}
			};
			throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
		};
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.getNumNewUniqueKeys = t._getRedactedAndTruncatedPageTitle = t.makeHeapRedactedTitleSelector = t.isTitleRedacted = t.getSensitiveDataSafePageTitle = t._getTrimmedRedactedText = t._sortStringsByLength = t.makeHeapIgnoreSelector = t._isHeapRedactTextPresent = t.getSensitiveDataSafeTargetText = t._getRawAttributes = t._isFormInputElement = t._isSVGElement = t._isHTMLElement = t._shouldCaptureAttributes = t._escapeCSS = t.getValue = t.getClassName = t._getHeapRedactedAttributes = t._convertDecomposedHierarchyToHeapInputSyntax = t._filterRedactedAttributesFromHierarchy = t._findAttributeIndexWithName = t._getValidAttributes = t._getClassNamesForElement = t._getIdForElement = t._getTopFirstDFSDecomposedHierarchy = t.getHref = t.shouldCaptureTargetText = t.getHierarchyForElement = t.GLOBALLY_BLOCKLISTED_ATTRIBUTES = t.HEAP_REDACT_ATTRIBUTES_ATTRIBUTE_NAME = t.HEAP_REDACT_TEXT_ATTRIBUTE_NAME = void 0;
	var u = r(9),
		c = r(0),
		s = r(6),
		l = r(28),
		f = r(0),
		d = r(3),
		p = r(1),
		v, h = u(c, (function() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
		})),
		g = '****',
		_ = 1e6,
		m = 1e3,
		y = 1e5,
		E = 'heap-ignore';
	t.HEAP_REDACT_TEXT_ATTRIBUTE_NAME = 'data-heap-redact-text', t.HEAP_REDACT_ATTRIBUTES_ATTRIBUTE_NAME = 'data-heap-redact-attributes', t.GLOBALLY_BLOCKLISTED_ATTRIBUTES = ['class', 'data-com.agilebits.onepassword.initial-value', 'data-com.onepassword.iv', 'data-ember-action', 'data-initial-value', 'data-previous-value', 'data-react-checksum', 'data-reactid', 'id', 'maxlength', 'onclick', 'onsubmit', 'style'];
	var S = function(e) {
		var r = e.targetElement,
			n = e.maxAttributeLength,
			i = e.maxHierarchyLength,
			o = e.recordData,
			a = (0, t._getTopFirstDFSDecomposedHierarchy)({
				targetElement: r,
				maxAttributeLength: n
			}),
			u = (0, t._filterRedactedAttributesFromHierarchy)(a),
			c;
		return {
			hierarchyString: (0, t._convertDecomposedHierarchyToHeapInputSyntax)({
				topFirstDecomposedHierarchy: u,
				maxAttributeLength: n,
				maxHierarchyLength: i,
				recordData: o
			}),
			topFirstDecomposedHierarchy: a
		}
	};
	t.getHierarchyForElement = S;
	var w = function(e) {
		var t = e.userConfig,
			r = e.targetElement,
			n = e.type;
		return !t.disableTextCapture && 'change' !== n && !r.isContentEditable && 'textarea' !== r.tagName.toLowerCase() && (0, p.isString)(h.elementText(r))
	};
	t.shouldCaptureTargetText = w;
	var A = function(e) {
		for (var r = e.reverse(), n = -1, i = -1, o = 0; o < r.length; o++) {
			var a = r[o],
				u = (0, t._findAttributeIndexWithName)(a.attributes, 'href') > -1,
				c;
			if (-1 === n && u && (n = o), (i = a.heapRedactedAttributes.indexOf('href') > -1 ? o : -1) > -1) break
		}
		var s;
		return function() {
			if (-1 !== n) {
				if (i >= n) return "****";
				var e = r[n].attributes,
					o;
				return e[(0, t._findAttributeIndexWithName)(e, 'href')].value
			}
		}()
	};
	t.getHref = A;
	var T = function(e) {
		for (var r = e.maxAttributeLength, n, i = e.targetElement, o = []; i && 'BODY' !== i.tagName && 'HTML' !== i.tagName;) {
			var a = {
				tagName: i.tagName,
				id: (0, t._getIdForElement)(i),
				classes: (0, t._getClassNamesForElement)(i),
				attributes: (0, t._shouldCaptureAttributes)(i) ? (0, t._getValidAttributes)(i, r) : [],
				heapRedactedAttributes: (0, t._getHeapRedactedAttributes)(i)
			};
			o.push(a), i = i.parentElement
		}
		return o.reverse()
	};
	t._getTopFirstDFSDecomposedHierarchy = T;
	var b = function(e) {
		return (0, t.getValue)(e, 'id') || null
	};
	t._getIdForElement = b;
	var I = function(e) {
		return (0, t.getClassName)(e) ? (0, t.getClassName)(e).split(/\s+/) : []
	};
	t._getClassNamesForElement = I;
	var O = function(e, r) {
		return (0, t._isSVGElement)(e) ? ((0, t._getRawAttributes)(e) || []).filter((function(e) {
			return e.name.length < r && (e.name.includes('data-') || 'aria-label' === e.name)
		})) : ((0, t._getRawAttributes)(e) || []).filter((function(t) {
			return t.name.length < r && !('INPUT' === e.tagName && 'value' === t.name)
		}))
	};
	t._getValidAttributes = O;
	var C = function(e, t) {
		return e.findIndex((function(e) {
			return e.name === t
		}))
	};
	t._findAttributeIndexWithName = C;
	var N = function(e) {
		var r = o([], i(t.GLOBALLY_BLOCKLISTED_ATTRIBUTES), !1);
		return e.map((function(e) {
			var t = n({}, e);
			return r.push.apply(r, o([], i(e.heapRedactedAttributes), !1)), t.attributes = e.attributes.filter((function(e) {
				return -1 === r.indexOf(e.name)
			})), t
		}))
	};
	t._filterRedactedAttributesFromHierarchy = N;
	var P = function(e) {
		var r, n, i = e.topFirstDecomposedHierarchy,
			o = e.maxAttributeLength,
			u = e.maxHierarchyLength,
			c = e.recordData,
			s = '',
			l = !1;
		try {
			for (var f = a(i.reverse()), p = f.next(); !p.done; p = f.next()) {
				var v = p.value,
					h = '';
				h = "@" + v.tagName.toLowerCase() + ";", h += v.id ? "#" + (0, t._escapeCSS)(v.id) + ";" : '', h += v.classes.length > 0 ? "." + v.classes.map(t._escapeCSS).sort().join(';.') + ";" : '';
				var g, _ = R(v.attributes, o).map((function(e) {
					return "[" + e.name + "=" + e.value + "]"
				})).sort();
				if (h += _.length > 0 ? _.join(';') + ";" : '', (h += '|').length + s.length > u) {
					l = !0;
					break
				}
				s = h + s
			}
		} catch (e) {
			r = {
				error: e
			}
		} finally {
			try {
				p && !p.done && (n = f.return) && n.call(f)
			} finally {
				if (r) throw r.error
			}
		}
		return l && (0, d.sample)(1e3, c, ['hierarchy-truncated']), s
	};
	t._convertDecomposedHierarchyToHeapInputSyntax = P;
	var k = function(e) {
		var r = e.getAttribute(t.HEAP_REDACT_ATTRIBUTES_ATTRIBUTE_NAME);
		return r ? r.split(',') : []
	};
	t._getHeapRedactedAttributes = k;
	var R = function(e, r) {
			return e.map((function(e) {
				return {
					name: (0, t._escapeCSS)(e.name),
					value: e.value && e.value.length <= r ? (0, t._escapeCSS)(e.value) : ''
				}
			}))
		},
		M = function(e) {
			var r;
			return ((r = (0, t._isSVGElement)(e) ? e.className ? e.className.baseVal : e.getAttribute('class') : e.className) || '').trim()
		};
	t.getClassName = M;
	var L = function(e, t) {
		return 'form' === e.tagName.toLowerCase() ? e.getAttribute(t) || '' : e[t]
	};
	t.getValue = L;
	var x = function(e) {
		return e.replace(/[[\];|\n]/g, '')
	};
	t._escapeCSS = x;
	var U = function(e) {
		return (0, t._isHTMLElement)(e) || (0, t._isSVGElement)(e)
	};
	t._shouldCaptureAttributes = U;
	var j = function(e) {
		return !(0, t._isSVGElement)(e)
	};
	t._isHTMLElement = j;
	var V = function(e) {
		return 1 === e.nodeType && 'http://www.w3.org/2000/svg' === e.namespaceURI
	};
	t._isSVGElement = V;
	var H = function(e) {
		return !!e.value
	};
	t._isFormInputElement = H;
	var D = function(e) {
		for (var r = [], n = 0; n < e.attributes.length; n++) {
			var i = e.attributes[n],
				o = i.name,
				a = i.value;
			(0, t._isFormInputElement)(e) && a === e.value && 'value' !== o && (a = f.REDACTED_VALUE), r.push({
				name: o,
				value: a
			})
		}
		return r
	};
	t._getRawAttributes = D;
	var F = function(e, r, n, i) {
		if ((0, t._isHeapRedactTextPresent)(e)) return te(n, i), "****";
		var o = h.elementText(e),
			a = X(e),
			u = $(a),
			c = (0, t._getTrimmedRedactedText)(o, u, r);
		try {
			var s;
			q(o, r) !== c && (0, d.sample)(1e6, n, ['target-text-affected-by-heap-ignore', 1])
		} catch (e) {
			i('failed-to-record-heap-ignore-target-text-telemetry', e)
		}
		return c
	};
	t.getSensitiveDataSafeTargetText = F;
	var K = function(e) {
		return !!h.findParentElement(e, (function(e) {
			return e.hasAttribute(t.HEAP_REDACT_TEXT_ATTRIBUTE_NAME)
		}))
	};
	t._isHeapRedactTextPresent = K;
	var G = function() {
		return "[heap-ignore]"
	};
	t.makeHeapIgnoreSelector = G;
	var B = function() {
			return "[" + t.HEAP_REDACT_TEXT_ATTRIBUTE_NAME + "]"
		},
		X = function(e) {
			var r = (0, t.makeHeapIgnoreSelector)(),
				n = B(),
				i = Array.prototype.slice.call(e.querySelectorAll(r)),
				o = Array.prototype.slice.call(e.querySelectorAll(n));
			return i.concat(o)
		},
		$ = function(e) {
			return e.map(h.elementText)
		},
		W = function(e) {
			return e.sort((function(e, t) {
				return e.length >= t.length ? -1 : 1
			}))
		};
	t._sortStringsByLength = W;
	var q = function(e, t) {
			return e = s.truncate(e.trim(), t)
		},
		z = function(e, r, n) {
			var i = r.map((function(e) {
					return e.trim()
				})),
				o = (0, t._sortStringsByLength)(i),
				a = e;
			return o.forEach((function(e) {
				var t;
				e && (a = l.replaceAllOccurrences({
					originalText: a,
					substringToReplace: e,
					replacementText: "****"
				}))
			})), a = q(a, n)
		};
	t._getTrimmedRedactedText = z;
	var Q = function(e) {
		var r = (0, t.isTitleRedacted)(),
			n = document.title;
		return (0, t._getRedactedAndTruncatedPageTitle)(r, n, e)
	};
	t.getSensitiveDataSafePageTitle = Q;
	var J = function() {
		var e;
		return !!document.querySelector((0, t.makeHeapRedactedTitleSelector)())
	};
	t.isTitleRedacted = J;
	var Y = function() {
		return 'head title[' + t.HEAP_REDACT_TEXT_ATTRIBUTE_NAME + ']'
	};
	t.makeHeapRedactedTitleSelector = Y;
	var Z = function(e, t, r) {
		return e ? "****" : s.truncate(t, r)
	};
	t._getRedactedAndTruncatedPageTitle = Z;
	var ee = function(e, t) {
		var r = 0;
		if (!e || !t) return r;
		for (var n in e) Object.prototype.hasOwnProperty.call(t, n) || r++;
		return r
	};
	t.getNumNewUniqueKeys = ee;
	var te = function(e, t) {
		try {
			(0, d.sample)(1e5, e, ['target-text-heap-redacted', 1])
		} catch (e) {
			t('failed-to-record-target-text-heap-redacted', e)
		}
	}
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.wrapper = void 0;
	var n = r(7),
		i = r(5),
		o = r(31),
		a = r(0),
		u = r(13),
		c = '_hp2_',
		s = 3e5,
		l = function() {};
	(0, n.canUseConsole)() && (l = console.table ? console.table : console.log);
	var f = u.Logger.build({
			log: function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				var r = '[HeapJs]';
				console.log.apply(null, [r].concat(Array.prototype.slice.call(e)))
			},
			logObject: l
		}),
		d = function(e) {
			var t = e.documentAlias,
				r = e.getConfig,
				n = e.recordError,
				u = function(e) {
					return "_hp2_" + e + "." + r().appId
				},
				c = function(e) {
					return 'string' == typeof e && e.length > 0 && 0 === t.location.pathname.indexOf(e)
				},
				s = function(e, t) {
					try {
						var r = JSON.parse(e);
						return r.cookiePath = t, JSON.stringify(r)
					} catch (t) {
						return n('Error updating cookie path.', t), e
					}
				},
				l = function(e, t) {
					for (var r = new RegExp('(^|;)[ ]*' + e + '=([^;]*)', 'g'), n = [], i = r.exec(t); i;) n.push(decodeURIComponent(i[2])), i = r.exec(t);
					return n
				},
				d = function(e) {
					var t;
					try {
						var r;
						return null !== (t = JSON.parse(e).cookiePath) && void 0 !== t ? t : '/'
					} catch (e) {
						return n('Error extracting cookie path.', e), '/'
					}
				},
				p = function(e, t) {
					var r = d(t);
					return h(e, 'delete', -1, void 0, r)
				},
				v = function(e, t) {
					p(e, t), h(e, t, a.USER_COOKIE_EXPIRATION_IN_MS)
				},
				h = function(e, n, i, a, u) {
					var l, d = r().userConfig,
						p = '/',
						v;
					u ? p = u : c(null == d ? void 0 : d.cookiePath) && (p = d.cookiePath, n = s(n, p));
					var h = [];
					i && ((v = new Date).setTime(v.getTime() + i), h.push('expires=' + v.toUTCString())), (a = null != a ? a : _()) && h.push('domain=.' + a), h.push('path=' + p);
					var g = 'https:' === t.location.protocol && null !== (l = null == d ? void 0 : d.secureCookie) && void 0 !== l && l;
					g && h.push('secure');
					var m = (0, o.getOptimalSameSiteCookieValue)(g);
					m && h.push('SameSite=' + m), f.log((function() {
						var t = 'Setting cookie with name ' + e + ' to value: ';
						try {
							return [t, JSON.parse(n)]
						} catch (e) {
							return [t, n]
						}
					})), t.cookie = e + '=' + encodeURIComponent(n) + ';' + h.join(';')
				},
				g = function(e) {
					var r = l(e, t.cookie),
						n = r[0];
					if (r.length > 1 && window.heap.loaded) {
						h(e, 'delete', -1);
						var i = l(e, t.cookie),
							o = r.filter((function(e) {
								return !i.includes(e)
							}));
						o.length > 0 && (n = o[0]), n && h(e, n)
					}
					return null != n ? n : 0
				},
				_ = function() {
					var e = r().domainAlias;
					null != e || (e = t.domain);
					for (var n = '', o = 'hld' + (0, i.generateId)(), a = u(o), c = e.split('.'), s = c.length - 1; s >= 0; s--) g(a) !== o && (n = c.slice(s, c.length).join('.'), h(a, o, 3e5, n));
					h(a, o, -1, n);
					var l = !n.match(/[a-zA-Z]/),
						f = n.indexOf('.') < 0;
					return (l || f) && (n = null), n
				};
			return {
				cookiePathValid: c,
				findHighestLevelDomain: _,
				getCookie: g,
				getCookieName: u,
				resetCookie: v,
				setCookie: h
			}
		};
	t.wrapper = d
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Logger = void 0;
	var n = r(7),
		i = window,
		o = function() {
			function e(e) {
				var t = this,
					r;
				void 0 === e && (e = {
					log: function() {},
					logObject: function() {}
				}), this.shouldLog = function() {
					return t.isDebugModeEnabledForSession || !0 === i.__heap_debug
				}, this.log = function(e) {
					if (t.shouldLog()) switch (typeof e) {
						case 'function':
							try {
								var r = e(),
									n = Array.isArray(r) ? r : [r];
								t.displayer.log.apply(t, n)
							} catch (e) {
								t.displayer.log('Failed to generate message', e)
							}
							break;
						case 'string':
							t.displayer.log(e)
					}
				}, this.prettyPrintObject = function(e) {
					if (t.shouldLog()) {
						var r = {};
						switch (typeof e) {
							case 'function':
								try {
									r = e()
								} catch (e) {
									r = {
										message: 'Failed to generate object',
										error: e
									}
								}
								break;
							case 'object':
								r = e
						}
						t.displayer.logObject(r)
					}
				}, !e && (0, n.canUseConsole)() && (e = {
					log: console.log,
					logObject: console.table
				}), this.displayer = e;
				try {
					this.isDebugModeEnabledForSession = 'true' === (null === (r = window.sessionStorage) || void 0 === r ? void 0 : r.getItem('__heap_debug'))
				} catch (e) {
					this.isDebugModeEnabledForSession = !1
				}
			}
			return e.getInstance = function() {
				return e.instance || ((0, n.canUseConsole)() && console.warn("Logger wasn't created at heap.js startup. Falling back to default configuration"), e.instance = new e), e.instance
			}, e.build = function(t) {
				return e.instance || (e.instance = new e(t)), e.instance
			}, e
		}();
	t.Logger = o
}, function(e, t, r) {
	var n = !1;
	r(15);
	var i = r(16),
		o = r(19),
		a = r(20),
		u = r(21)(i),
		c = r(23)(i, xt),
		s = r(5),
		l = r(24)({
			_: i,
			recordData: Ut,
			recordError: xt,
			getContainer: Be,
			updateIdParams: lt,
			setUserIdCookie: Me,
			resetIdentity: At,
			sendRequest: Je,
			getConfig: ie
		}),
		f = r(8),
		d = r(0),
		p = r(9)(d, Ut),
		v = r(25),
		h = r(26)(ie, Ut),
		g = r(27),
		_ = r(7),
		m = r(6),
		y = r(11),
		E = r(29).wrapper(Ut, ie),
		S = r(30).wrapper(p.elementText),
		w = r(2),
		A = r(3),
		T = r(12).wrapper({
			documentAlias: document,
			getConfig: ie,
			recordError: xt
		}),
		b = r(32),
		I = r(13),
		O = r(10),
		C = r(33).wrapper({
			getConfig: ie,
			recordError: xt
		}),
		N = r(34),
		P = function() {};
	_.canUseConsole() && (P = console.table ? console.table : console.log);
	var k = I.Logger.build({
			log: function() {
				var e = '[HeapJs]';
				_.canUseConsole() && console.log.apply(null, [e].concat(Array.prototype.slice.call(arguments)))
			},
			logObject: P
		}),
		addPageviewProperties, HEAP_VERSION = {
			"installedVersion": "4.21.0+c3d7416513d07",
			"heapJsVersion": "4.21.0",
			"supportedUntil": "2024-05-16T19:41:51.226Z",
			"revisionId": "c3d7416513d07"
		},
		HEAP_EXPERIMENT = {},
		SNAPSHOT_CONFIG = {
			"pageview": {
				"/courses/*/discussion_topics/*": {
					"j": {
						"Number of Replies 2": "(function () {\n   return parseInt(document.querySelectorAll('[data-testid=\"replies-counter\"]')[0].innerHTML.toString())\n})();"
					},
					"f": {}
				},
				"/pathway/*/overview": {
					"j": {
						"Number of Students Enrolled": "parseInt(document.getElementsByClassName('edu-pathway-stats-value')[0].innerHTML);"
					},
					"f": {}
				},
				"/courses/*/settings": {
					"j": {
						"Share To Commons Button Available": "(function () {\n  return document.getElementsByClassName('icon-commons').length > 0;\n})();"
					},
					"f": {}
				}
			},
			"click": {
				".Button.Button--primary.save_rubric_button": {
					"j": {},
					"f": {}
				},
				"*div#context_external_tools_select*": {
					"j": {
						"lti_version_new": "(function() {\n  var ltiVersion = window.ENV.LAUNCH_PARAMS.lti_version;\n  // Use ltiVersion variable within the self-invoking function\n  return ltiVersion\n})();"
					},
					"f": {}
				},
				"button#add_external_video_button": {
					"j": {
						"YT vs VM": "document.querySelector('[placeholder=\"YouTube or Vimeo Link\"]').value"
					},
					"f": {}
				},
				"[aria-label=\"Choose a Quiz Engine\"] button[type=\"submit\"]": {
					"j": {
						"Quiz Engine": "(function() {\nvar selected_option\ndocument.querySelectorAll('input[type=\"radio\"][name=\"quizEngine\"]').forEach(node => {\n\tif (node.checked) {\n\t\tselected_option = node.value;\n\t}\n})\nreturn selected_option;\n})();"
					},
					"f": {}
				},
				".css-1s49t1b-view-tag": {
					"j": {},
					"f": {}
				},
				"[data-track-category=\"dashboard\"]": {
					"j": {},
					"f": {}
				},
				"[href=\"/courses/24236/assignments\"]": {
					"j": {},
					"f": {}
				},
				"[aria-label=\"Due Date Set\"]": {
					"j": {},
					"f": {}
				},
				"form#edit_assignment_form .btn-primary": {
					"j": {},
					"f": {}
				},
				".btn.btn-default.save_and_publish": {
					"j": {},
					"f": {}
				}
			}
		},
		INTEGRATIONS_STUB, registerAsyncSource, markAsyncSourceLoaded, getHeapUserConfig;
	Date.prototype.gt = Date.prototype.getTime;
	var R, M = 'https:' === document.location.protocol,
		L = Ne(document.domain, window.location.href, document.referrer),
		x = L[0],
		docReferrerUrl = L[2],
		U = Pe(),
		j = Ce('/h'),
		V = Ce('/api/add_user_properties_v3'),
		H = Ce('/api/telemetry'),
		D = 2e3,
		F, K = {},
		G = {},
		B = {},
		X = {},
		$ = {},
		W = !1,
		q = !1,
		z = (new Date).gt(),
		Q, J, Y, Z, ee = /^\d+$/,
		te = {},
		re = {
			pr: f.getPreviousPageIfHostnameMatches()
		},
		ne = i.throttle((function(e) {
			var t;
			new Image(1, 1).src = e
		}), 500);

	function ie() {
		var e = Ce('/api/identify'),
			t = Ce('/api/identify_v3'),
			r = Ce('/api/identify_v4');
		return {
			appId: R,
			domainAlias: x,
			maxAttrLength: d.MAX_ATTRIBUTE_LENGTH,
			identifyV1Url: e,
			identifyV3Url: t,
			identifyV4Url: r,
			userConfig: a.getUserDefinedConfig()
		}
	}

	function oe(e, t) {
		return e.hasAttribute ? e.hasAttribute(t) : !(!(r = e.getAttributeNode(t)) || !r.specified && !r.nodeValue);
		var r
	}

	function ae(e) {
		return e && e.form || function() {
			for (var t = e; t && (void 0 === t.tagName || 'form' !== t.tagName.toLowerCase());) t = t.parentNode;
			return t
		}()
	}

	function ue(e) {
		e.preventDefault ? e.preventDefault() : e.returnValue = !1
	}

	function ce(e) {
		return e.defaultPrevented || void 0 === e.defaultPrevented && (!1 === e.returnValue || e.getPreventDefault && e.getPreventDefault())
	}

	function se(e) {
		var t;
		return 1 === (e.which || void 0 === e.button ? e.which : 1 & e.button ? 1 : 0)
	}

	function le(e) {
		var t = e,
			r, n = (t.target || t.srcElement).getBoundingClientRect(),
			i;
		if (0 === t.screenX && 0 === t.screenY) return [0, 0];
		var o = Math.floor(t.clientX - n.left),
			a = Math.floor(t.clientY - n.top),
			u = !(void 0 === t.offsetX && void 0 === t.offsetY || 0 === t.offsetX && 0 === t.offsetY),
			c, s;
		return [u ? t.offsetX : o, u ? t.offsetY : a]
	}

	function fe(e, t, r, n) {
		document.addEventListener ? e.addEventListener(t, r, n) : document.attachEvent ? e.attachEvent('on' + t, (function() {
			var t = window.event;
			t.currentTarget = e, t.target = t.srcElement, r.call(e, t)
		})) : e['on' + t] = r
	}

	function de(e, t, r, n) {
		return e.removeEventListener ? (e.removeEventListener(t, r, n), !0) : e.detachEvent ? e.detachEvent('on' + t, r) : void(e['on' + t] == r && delete e['on' + t])
	}

	function pe() {
		var e, t;
		if (nt(), t = d.MAX_REQUEST_TIMEOUT_IN_MS - d.MAX_REQUEST_UNLOAD_TIMEOUT_IN_MS, J)
			do {
				e = new Date
			} while (e.gt() < J - t);
		setTimeout((function() {
			try {
				F && (F(), F = null)
			} catch (e) {
				xt('Error in onUnloadHandler.', e)
			}
		}), 0)
	}

	function ve(e) {
		e.origin === d.HEAP_WEB_APP_URI && 'object' == typeof e.data && 'init' === e.data.message && (e.source.postMessage({
			type: d.PostMessageType.StatusUpdate,
			value: d.EventVisualizerStatus.ReceivedInitMessage
		}, '*'), Ee(), window.heapV.source = e.source, window.heapV.uri = d.HEAP_WEB_APP_URI, window.heapV.loadArgs = e.data.args)
	}

	function he() {
		var e = Fe();
		return !(e && !i.isUndefined(e.z))
	}

	function ge() {
		var e, t;
		t = Fe(), lt(Xe()), e = c(t), i.isObject(e) && i.isObject(e.event_properties) && Je(gt(e.event_properties), Z, j, !0)
	}

	function _e() {
		if (q) return !1;
		var e;
		q = !0, window.top === window.self && T.getCookie(d.EV_COOKIE_NAME) && Ee();
		var t = i.pick(ft(), ['g', 'h', 'q', 'e']);
		return setTimeout((function() {
			try {
				W = !0, _t(t), tt.startLoop(), ct(It)
			} catch (e) {
				xt('Error triggering requests in loadHandler.', e)
			}
		}), 0), !0
	}
	getHeapUserConfig = function() {
		return a.getUserDefinedConfig()
	};
	var me = i.memoize((function(e, t) {
			return i(SNAPSHOT_CONFIG[e]).chain().pick((function(r, n) {
				switch (e) {
					case 'pageview':
						return dt(n, t);
					default:
						var i = p.removeIndexFromSelector(n);
						return u.hierarchyMatchesSelector(i)(t) > 0
				}
			})).values().value()
		}), (function(e, t) {
			return e + '.' + t
		})),
		ye = function(e, t) {
			var r;
			if (t = t || window.event, e) {
				var n = function(e) {
						return i.isString(e) ? m.truncate(i.trim(e), d.MAX_ATTRIBUTE_LENGTH) : e
					},
					a = {
						f: function(e) {
							var t = p.nearestElementMatching(e, event),
								r = S.getInputElementValue(t);
							return n(r)
						},
						t: function(e) {
							var t = p.textInNearestElementMatching(e, event);
							return n(t)
						},
						s: function(e) {
							var t = p.elementValue(i(o(e)).first());
							return n(t)
						},
						j: function(e) {
							var r, i = new Function('event', 'return ' + e).call(window, t);
							return n(i)
						}
					},
					u = i.flatten(Object.keys(a).map((function(t) {
						var r = a[t];
						return e.map((function(e) {
							return e[t]
						})).map((function(e) {
							return i(e).chain().mapValues((function(e) {
								try {
									return r(e)
								} catch (e) {
									return
								}
							})).omit(i.isUndefined).value()
						}))
					})));
				return u.unshift({}), r = i.extend.apply(null, u), k.log((function() {
					return ['Captured the following snapshot properties: ', r]
				})), r
			}
		},
		Ee = i.once((function() {
			var e, t, r;
			Ut('initiateEv', 'firstLaunch: ' + !T.getCookie(d.EV_COOKIE_NAME)), T.setCookie(d.EV_COOKIE_NAME, 'on', 18e5), r = R, heap.appid = R = d.HEAP_EV_ENV_ID, window.heapV = i.extend({}, heap), tt.clear(), It = [], r ? Z && Z.indexOf('a=' + r) > -1 && (xt('Force overwrite appId'), Z = Z.replace('a=' + r, 'a=' + R)) : xt('No appId configured, cannot overwrite for EV'), (e = document.createElement('script')).type = 'text/javascript', e.charset = 'UTF-8', e.src = d.EV_JS_URL, document.head.appendChild(e), (t = document.createElement('link')).rel = 'stylesheet', t.href = d.EV_CSS_URL, document.head.appendChild(t), (t = document.createElement('link')).rel = 'stylesheet', t.href = d.EV_CSS_FOR_JS_URL, document.head.appendChild(t), heap = i.mapValues(heap, (function(e) {
				return i.isFunction(e) ? function() {} : e
			}))
		}));

	function Se() {
		if ('interactive' === document.readyState || 'complete' === document.readyState) return _e();
		document.addEventListener ? fe(document, 'DOMContentLoaded', (function e() {
			document.removeEventListener('DOMContentLoaded', e, !1), _e()
		})) : document.attachEvent && document.attachEvent('onreadystatechange', (function e() {
			'complete' === document.readyState && (document.detachEvent('onreadystatechange', e), _e())
		})), fe(window, 'load', _e, !1)
	}

	function we(e, t) {
		var r = function(n) {
			de(window, n.type, r), n !== e || ce(n) || t(n)
		};
		fe(window, e.type, r)
	}

	function Ae(e, t) {
		var r = i.once(t);
		nt(r), ue(e), setTimeout(r, d.MAX_REQUEST_TIMEOUT_IN_MS), F = r
	}
	var Te = [];

	function be(e) {
		var t;
		if (t = (e = e || window.event).target, (!_.getIEVersion() || t === e.currentTarget) && t && t.tagName && 'click' === e.type && (mt(e), se(e))) {
			var r = t,
				n = function(e) {
					var t = e.tagName.toLowerCase(),
						r = i.isString(e.type) ? e.type.toLowerCase() : e.type;
					return null !== ae(e) && ('input' === t && i.contains(['submit', 'image'], r) || 'button' === t && !i.contains(['reset', 'button'], r))
				},
				o = p.findParentElement(r, n),
				a = null !== o,
				u = void 0 !== e.__impl4cf1e782hg__;
			a ? Te.push([e, o]) : u || e.metaKey || e.shiftKey || e.ctrlKey || e.altKey || we(e, (function() {
				for (; r && (void 0 === r.tagName || 'a' !== r.tagName.toLowerCase() || !r.href);) r = r.parentNode;
				var t = function(e) {
						return i.isString(e.animVal) ? e.animVal : e
					},
					n = function(e) {
						return oe(e, 'data-turbo-frame') || oe(e, 'data-heap-turbo')
					},
					o;
				if (function(e) {
						if ('3001039959' === R && window.webkit && window.webkit.messageHandlers) return !1;
						if (!e || !e.href) return !1;
						if (n(e)) return !1;
						var r = t(e.href),
							i = oe(e, 'download'),
							o = new RegExp('^\\s*(' + window.location.href.split(window.location.hash || '#')[0].replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&') + ')?#').test(r),
							a = /^\s*javascript:/.test(r),
							u = /^\s*(mailto|tel):/.test(r) && _.isSafari(),
							c = 'ar' === e.rel && /\.usdz/i.test(r) && _.isSafari();
						return !(e.isContentEditable || i || o || a || u || c)
					}(r)) {
					var a = t(r.href),
						u = r.target || (document.getElementsByTagName('base')[0] || {}).target;
					u && '_self' !== t(u).toLowerCase() ? u.match(/^_(parent|top)$/i) && Ae(e, (function() {
						window.open(a, u)
					})) : Ae(e, (function() {
						document.location.href = a
					}))
				}
			}))
		}
	}

	function Ie(e) {
		if (mt(e = e || window.event), !_.getIEVersion()) {
			var t = e.target,
				r = i.findLast(Te, (function(e) {
					var r;
					return ae(e[1]) === t
				}));
			if (Te = [], r) var n = r[0],
				a = r[1];
			we(e, (function() {
				var r = i(a || {}).chain().pick(['formAction', 'formEnctype', 'formMethod', 'formNoValidate', 'formTarget', 'name', 'type', 'value']).pick((function(e, t) {
						return oe(a, t)
					})).value(),
					u = (a || {}).tagName;
				'_blank' !== t.target && Ae(e, (function() {
					try {
						var e = {};
						try {
							var c = (o('input', t) || []).filter((function(e) {
									if (!e.inputmask) return !1;
									var t = e.inputmask._valueSet && e.inputmask._valueGet && e.inputmask.unmaskedvalue,
										r = e.inputmask.userOptions && e.inputmask.userOptions.removeMaskOnSubmit || e.inputmask.opts && e.inputmask.opts.removeMaskOnSubmit;
									return t && r
								})),
								s = c.map((function(e) {
									return e.inputmask._valueGet()
								}));
							c.forEach((function(e) {
								e.inputmask._valueSet(e.inputmask.unmaskedvalue())
							})), setTimeout((function() {
								c.forEach((function(e, t) {
									e.inputmask._valueSet(s[t])
								}))
							}), 0)
						} catch (e) {
							xt('Error extracting values from form submission.', e)
						}
						if (a) {
							var l = r.type,
								f = i.isString(l) ? l.toLowerCase() : l;
							if ('input' === u.toLowerCase() && 'image' === f) {
								var d = r.name,
									v = le(n),
									h = document.createElement('input');
								h.type = 'hidden', h.name = d ? d + '.x' : 'x', h.value = v[0];
								var g = document.createElement('input');
								g.type = 'hidden', g.name = d ? d + '.y' : 'y', g.value = v[1], t.appendChild(h), t.appendChild(g)
							} else {
								var _ = document.createElement('input');
								_.type = 'hidden', i.has(r, 'name') && (_.name = r.name);
								var m = r.value;
								i.isUndefined(m) || i.isNull(m) || '' === m || (_.value = r.value), t.appendChild(_)
							} ['action', 'enctype', 'method', 'noValidate', 'target'].forEach((function(n) {
								var o = 'form' + i.capitalize(n);
								i.has(r, o) && (e[n] = t[n], t[n] = r[o])
							}))
						}
						if ('dialog' === t.method) try {
							var y = function(e) {
									var t;
									return 'dialog' === e.tagName.toLowerCase()
								},
								E = p.findParentElement(t, y),
								S = n.target.value;
							E && E.close && S && E.close(S)
						} catch (e) {
							k.log('Failed to close dialog for a form submission with method=dialog')
						}
						var w = document.createElement('form');
						document.body.appendChild(w), w.submit.apply(t), document.body.removeChild(w), i.extend(t, e), _ && t.removeChild(_), h && g && (t.removeChild(h), t.removeChild(g))
					} catch (e) {
						xt('Error preventing form submission.', e)
					}
				}))
			}))
		}
	}

	function Oe(e) {
		var t = new RegExp('#.*');
		return e.replace(t, '')
	}

	function Ce(e) {
		var t, r;
		return a.getUserDefinedConfig().trackingServer + e
	}

	function Ne(e, t, r) {
		if ('translate.googleusercontent.com' === e) throw Ut('load aborted on translate.googleusercontent.com'), new Error('Heap does not work on Google Translate');
		return 'cc.bingj.com' !== e && 'webcache.googleusercontent.com' !== e && '74.6.' !== e.slice(0, 5) || (t = document.links[0].href, e = f.getHostname(t)), [e, t, r]
	}

	function Pe() {
		return window.location.pathname + window.location.hash + window.location.search
	}

	function ke(e) {
		var t = a.getUserDefinedConfig();
		try {
			var r = JSON.parse(e);
			return !r.cookiePath || r.cookiePath !== t.cookiePath
		} catch (e) {
			return xt('Error parsing cookie value.', e), !0
		}
	}

	function Re() {
		for (var e = [T.getCookieName('ses_props'), T.getCookieName('id'), T.getCookieName('props')], t = 0; t < e.length; t++) {
			var r = e[t],
				n = T.getCookie(r);
			0 !== n && ke(n) && T.resetCookie(r, n)
		}
	}

	function Me(e) {
		T.setCookie(T.getCookieName('id'), JSON.stringify(e), d.USER_COOKIE_EXPIRATION_IN_MS)
	}

	function Le() {
		var e;
		C.isHeapHandledWebview() && C.extendSessionHandler((new Date).getTime() + d.SESSION_COOKIE_EXPIRATION_IN_MS, wt()), e = T.getCookieName('ses_props'), T.setCookie(e, T.getCookie(e), d.SESSION_COOKIE_EXPIRATION_IN_MS)
	}

	function xe(e) {
		var t;
		return (document.cookie || '').length + Ue(e, 'ses_props') > d.MAX_COOKIE_SIZE_FOR_LANDING_PAGE
	}

	function Ue(e, t) {
		var r, n = (T.getCookie(T.getCookieName(t)) || '').length,
			i, o;
		return e = e || {}, JSON.stringify(e).length - n
	}

	function je(e) {
		function t(e, t) {
			return '' === t ? void 0 : t
		}
		T.setCookie(T.getCookieName('ses_props'), JSON.stringify(e, t), d.SESSION_COOKIE_EXPIRATION_IN_MS)
	}

	function Ve(e) {
		T.setCookie(T.getCookieName('props'), JSON.stringify(e), d.USER_COOKIE_EXPIRATION_IN_MS)
	}

	function He(e) {
		var t, r;
		try {
			r = T.getCookie(T.getCookieName(e)), t = JSON.parse(r)
		} catch (e) {
			xt('Error parsing cookie properties.', e)
		}
		return t || {}
	}

	function De() {
		return He('props')
	}

	function Fe() {
		return He('ses_props')
	}

	function Ke(e) {
		return ee.test(e)
	}

	function Ge(e) {
		var t, r;
		try {
			r = JSON.parse(e)
		} catch (n) {
			xt('Error parsing idCookie.', n);
			try {
				r = {
					userId: (t = e.split('.'))[0],
					pageviewId: t[1],
					sessionId: t[2],
					identity: null
				}
			} catch (e) {
				xt('Error splitting idCookie.', e), r = l.generateNewContainer(s.generateId)
			}
		}
		if (!Ke(r.userId) && !i.isNull(r.userId)) try {
			r = JSON.parse(r.userId + '.0"}')
		} catch (e) {
			xt('Error parsing container.userId', e), r = l.generateNewContainer(s.generateId)
		}
		return r.trackerVersion = d.TRACKER_VERSION, r
	}

	function Be() {
		var e, t;
		return t = (e = T.getCookie(T.getCookieName('id'))) ? Ge(e) : Y
	}

	function Xe() {
		var e, t, r;
		e = T.getCookie(T.getCookieName('id'));
		var n = C.isHeapHandledWebview(),
			i = C.getWvIdContents();
		return e ? (Q = 2, t = Ge(e), r = n ? i.userId : t.userId, t.pageviewId = s.generateId(), T.getCookie(T.getCookieName('ses_props')) || (Q = 1, t.sessionId = n ? i.sessionId : s.generateId())) : (Q = 0, t = {
			userId: r = n ? i.userId : s.generateId(),
			pageviewId: s.generateId(),
			sessionId: n ? i.sessionId : s.generateId(),
			identity: null
		}), t.trackerVersion = d.TRACKER_VERSION, Y = t, Le(), Me(t), O.identifyAurycSessionWithUserId(r), t
	}

	function $e() {
		var e = Be();
		e && null === e.userId && null != e.identity && null == e.oldIdentity && (e.oldIdentity = e.identity, Me(e), lt(e))
	}

	function We(e, t, r) {
		var n, i;
		t && (t = t ? '&' + t : '', window._hpjsonpcallback = r, i = document.head || document.getElementsByTagName('head')[0] || document.documentElement, (n = document.createElement('script')).async = 'async', n.src = e + '?' + Z + t + '&callback=_hpjsonpcallback', n.onload = n.onreadystatechange = function() {
			n.readyState && !/loaded|complete/.test(n.readyState) || (n.onload = n.onreadystatechange = null, i && n.parentNode && i.removeChild(n), n = void 0)
		}, i.insertBefore(n, i.firstChild))
	}

	function qe() {
		return HEAP_EXPERIMENT.id && HEAP_EXPERIMENT.file_type_loaded ? '&ei=' + HEAP_EXPERIMENT.id + '&et=' + HEAP_EXPERIMENT.file_type_loaded : ''
	}

	function ze() {
		return HEAP_VERSION.heapJsVersion ? '&hv=' + HEAP_VERSION.heapJsVersion : ''
	}

	function Qe() {
		function e(e) {
			var t = ['z', 't'];
			return xe(e) && (t.push('g', 'q'), Lt()), t
		}
		var t = Fe(),
			r;
		t && !i.isUndefined(t.z) && ((e(t) || []).forEach((function(e) {
			try {
				delete t[e], delete B[e]
			} catch (r) {
				t[e] = void 0
			}
		})), je(t))
	}

	function Je(e, t, r, n, i) {
		if (n && C.isHeapHandledWebview()) Qe();
		else if (e && window.heap.loaded) {
			var o = r + '?' + t + '&' + e + '&st=' + (new Date).gt() + qe(),
				a = new Image(1, 1);
			a.onload = function() {
				J = 0, n && Qe(), i && i()
			}, a.src = o, J = (new Date).gt() + d.MAX_REQUEST_TIMEOUT_IN_MS
		}
	}

	function Ye(e, t) {
		var r = C.isHeapHandledWebview(),
			n = C.getWvIdContents();
		(e.identity || e.userId) && (e.pageviewId = s.generateId(), e.sessionId = r ? n.sessionId : s.generateId(), lt(e), T.setCookie(T.getCookieName('ses_props'), {}, -1), Me(e), _t(t))
	}

	function Ze() {
		if (window.auryc) {
			var e;
			if (z + d.SESSION_COOKIE_EXPIRATION_IN_MS < (new Date).gt()) return void k.log('Session has already expired - not updating the last seen time');
			k.log('Updating last seen time for session replay event'), z = (new Date).gt()
		}
	}

	function et(e, t, r) {
		var n = T.getCookie(T.getCookieName('id'));
		if (e[0] && n) {
			var i = Ge(n),
				o = t,
				a;
			z + d.SESSION_COOKIE_EXPIRATION_IN_MS < (new Date).gt() && (Ye(i), o = Z), z = (new Date).gt(), Je(e[0], o, j, !1, r);
			for (var u = 1; u < e.length; u++) ! function(e, t) {
				setTimeout((function() {
					Je(e, o, j, !1)
				}), 10 * t)
			}(e[u], u)
		} else r()
	}
	var tt = function() {
			var e = [],
				t = !1,
				r = function() {
					o(), setTimeout((function() {
						try {
							r()
						} catch (e) {
							xt('Error flushing RequestQueue.', e)
						}
					}), 2e3)
				},
				n = function(r, n, o, a) {
					var u, s, l, f, d;
					if (a = a || function() {}, t && 0 !== e.length) {
						if (l = w.requestStringBuilder(!0, xt), u = (e || []).map((function(e) {
								return s = c(e, o, n), i.isObject(s) ? (n = s.session_properties, o = s.pageview_properties, s.event_properties) : null
							})).filter(i.isObject), k.log('--- Sending event request with the following properties ---'), k.log((function() {
								return ['Session Properties: ', n]
							})), k.log((function() {
								return ['Pageview Properties: ', o]
							})), 0 == u.length) return e = [], void a();
						u.forEach((function(e, t) {
							k.log((function() {
								return ['Event ' + t + ' properties: ', e]
							})), l.addSingleEventProps(e)
						})), f = l.build(!0), (l = w.requestStringBuilder(!1, xt)).addSingleEventProps({
							sp: w.encodePrimitiveKeysAndValuesAsArrayOfStrings(n),
							pp: w.encodePrimitiveKeysAndValuesAsArrayOfStrings(o)
						}), d = l.build(!1), et(f = f.map((function(e) {
							return d + '&' + e
						})), r, a), e = []
					} else a()
				},
				o = function(e) {
					n(Z, B, X, e)
				};
			return new function() {
				this.startLoop = function() {
					t = !0, r()
				}, this.clear = function() {
					e = []
				}, this.flush = o, this.flushWithProps = n, this.queue = function(t) {
					e.push(t)
				}
			}
		}(),
		rt = function() {
			var e = [],
				t = [],
				r = !0,
				n = function(e) {
					var t = e.target,
						r = function(e) {
							return e.getAttribute('heap-ignore')
						};
					return (!_.getIEVersion() || e.srcElement === e.currentTarget) && (!!t && (!!t.tagName && (3 !== t.nodeType && (!p.findParentElement(t, r) && ('mousedown' !== e.type && 'mousemove' !== e.type)))))
				},
				o = function(e) {
					var t, r, n, o, u, c, l, f;
					n = (e = e || window.event).target, u = y.getClassName(n), c = 'mouseup' === e.type ? 'click' : e.type, o = (l = y.getHierarchyForElement({
						targetElement: n,
						maxAttributeLength: d.MAX_ATTRIBUTE_LENGTH,
						maxHierarchyLength: d.MAX_SINGLE_REQUEST_VALUE_LENGTH,
						recordData: Ut
					})).hierarchyString, f = l.topFirstDecomposedHierarchy, t = me(c, o);
					var p = (new Date).gt();
					return r = O.addSRParamToProps({
						id: s.generateId(),
						t: m.truncate(c, d.MAX_ATTRIBUTE_LENGTH),
						n: m.truncate(n.tagName.toLowerCase(), d.MAX_ATTRIBUTE_LENGTH),
						c: m.truncateCSSClasses(u, d.MAX_ATTRIBUTE_LENGTH),
						i: m.truncate(y.getValue(n, 'id'), d.MAX_ATTRIBUTE_LENGTH),
						h: m.truncate(y.getHref(f), d.MAX_SINGLE_REQUEST_VALUE_LENGTH),
						y: o,
						k: w.encodePrimitiveKeysAndValuesAsArrayOfStrings(i.extend({}, K)),
						ts: p
					}), y.shouldCaptureTargetText({
						targetElement: n,
						type: c,
						userConfig: a.getUserDefinedConfig()
					}) && (r.x = y.getSensitiveDataSafeTargetText(n, d.MAX_TARGET_TEXT_LENGTH, Ut, xt)), N.isRageClick({
						X: e.clientX,
						Y: e.clientY
					}) && (r.rc = !0), (r = i.extend(r, O.getScreenDimensions())).k = (r.k || []).concat(w.encodePrimitiveKeysAndValuesAsArrayOfStrings(ye(t, e))), r
				},
				u = function(e) {
					return e && i.contains([0, 1], e.z)
				},
				l = function(e) {
					var t, r;
					t = O.addSRParamToProps(e.props), t = i.extend(t, $), e.type === d.MessageType.AutoTrack ? (t.k = (t.k || []).concat(w.encodePrimitiveKeysAndValuesAsArrayOfStrings(G)), t = i.extend(t, O.getScreenDimensions()), tt.queue(t)) : i.contains(d.HEAP_TRACK_CALL_MESSAGE_TYPES, e.type) ? (t.k = (t.k || []).concat(w.encodePrimitiveKeysAndValuesAsArrayOfStrings(i.extend({}, G, e.customProps))), e.type === d.MessageType.SourceTrack && (t.sprops = (t.sprops || []).concat(w.encodePrimitiveKeysAndValuesAsArrayOfStrings(e.sourceProps))), tt.queue(t)) : e.type === d.MessageType.Metadata ? (t.k = (t.k || []).concat(w.encodePrimitiveKeysAndValuesAsArrayOfStrings(i.extend({}, G))), t = i.extend(t, O.getScreenDimensions()), r = c(t), i.isObject(r) && i.isObject(r.event_properties) && Je(gt(r.event_properties), e.idParams, j, u(r.event_properties))) : tt.queue(e.props)
				},
				f = function(e) {
					var t, r;
					if (t = e || window.event, n(t)) {
						var i = {
							props: r = o(t),
							type: d.MessageType.AutoTrack
						};
						v(i)
					}
				},
				v = function(t) {
					r ? e.push(t) : (l(t), i.contains(d.HEAP_TRACK_CALL_MESSAGE_TYPES, t.type) && tt.flush())
				},
				h = function(e) {
					r = !1, g(e)
				},
				g = function(r) {
					(t || []).forEach((function(e) {
						(e.buffer || []).forEach(l), tt.flushWithProps(e.identityParams, e.sessionProps, e.pageviewProps)
					})), t = [], (e || []).forEach(l), e = [], tt.flush(r)
				},
				E = function() {
					if (0 !== e.length && Z) {
						var r = {
							buffer: e,
							identityParams: Z,
							sessionProps: B,
							pageviewProps: X
						};
						e = [], t.push(r)
					}
				};
			return new function() {
				this.queueAutotrackEvent = f, this.queueEventMessage = v, this.pushEventMessageSet = E, this.unblockQueue = h
			}
		}();

	function nt(e) {
		rt.unblockQueue(e)
	}

	function it() {
		return !i.contains(te, !1)
	}
	if (registerAsyncSource = function(e) {
			te[e] = te[e] || !1
		}, markAsyncSourceLoaded = function(e) {
			setTimeout((function() {
				te[e] = !0, it() && nt()
			}), 0)
		}, _.isUACHClient()) {
		var ot = 'uach-version',
			at, ut = function() {
				clearTimeout(at), markAsyncSourceLoaded(ot)
			};
		registerAsyncSource(ot), at = setTimeout(ut, 1e3);
		try {
			b.getHighEntropyValuesAsParams().then((function(e) {
				$ = e
			}), (function() {})).catch((function() {})).finally((function() {
				ut()
			}))
		} catch (e) {
			ut()
		}
	}

	function ct(e) {
		for (var t, r, n; e.length > 0;) t = (r = e[0])[0], n = r.slice(1), window.heap[t].apply(this, n), e.splice(0, 1)
	}
	var st = function(e) {
		var t, r;
		return t = {
			a: R,
			u: e.userId,
			v: e.pageviewId,
			s: e.sessionId,
			i: e.identity,
			if: e.identityField,
			oi: e.oldIdentity,
			b: 'web',
			tv: e.trackerVersion
		}, (r = w.requestStringBuilder(!1, xt)).addSingleEventProps(t), r.build(!1)
	};

	function lt(e) {
		return rt.pushEventMessageSet(), window.heap.userId = e.userId, window.heap.identity = e.identity, Y = e, Z = st(e)
	}

	function ft() {
		var e, t;
		return e = Oe(docReferrerUrl), t = {
			z: Q,
			g: v.redactAuthTokens(m.truncate(window.location.hash, d.MAX_SINGLE_REQUEST_VALUE_LENGTH)),
			h: m.truncate(window.location.pathname, d.MAX_SINGLE_REQUEST_VALUE_LENGTH),
			q: v.redactAuthTokens(m.truncate(window.location.search, d.MAX_SINGLE_REQUEST_VALUE_LENGTH)),
			d: m.truncate(window.location.hostname, d.MAX_SINGLE_REQUEST_VALUE_LENGTH),
			t: y.getSensitiveDataSafePageTitle(document, d.MAX_ATTRIBUTE_LENGTH),
			r: m.truncate(e, d.MAX_SINGLE_REQUEST_VALUE_LENGTH),
			e: m.truncate(f.getSearchKeyword(e), d.MAX_SINGLE_REQUEST_VALUE_LENGTH),
			us: m.truncate(f.getQueryParam('utm_source'), d.MAX_SINGLE_REQUEST_VALUE_LENGTH),
			um: m.truncate(f.getQueryParam('utm_medium'), d.MAX_SINGLE_REQUEST_VALUE_LENGTH),
			ut: m.truncate(f.getQueryParam('utm_term'), d.MAX_SINGLE_REQUEST_VALUE_LENGTH),
			uc: m.truncate(f.getQueryParam('utm_content'), d.MAX_SINGLE_REQUEST_VALUE_LENGTH),
			ua: m.truncate(f.getQueryParam('utm_campaign'), d.MAX_SINGLE_REQUEST_VALUE_LENGTH),
			k: w.encodePrimitiveKeysAndValuesAsArrayOfStrings(i.extend({}, K)),
			ts: (new Date).gt(),
			pr: re.pr
		}
	}

	function dt(e, t) {
		var r, n;
		if ('' !== e) {
			try {
				r = encodeURIComponent(t)
			} catch (e) {
				xt('Error encoding pageview path.', e)
			}
			return (n = new RegExp('^' + e.replace(/\*/g, '.*') + '$')).test(t) || n.test(r)
		}
		return !1
	}

	function pt() {
		G = {}
	}

	function vt() {
		var e, t;
		return t = window.location.pathname, e = me('pageview', t), ye(e)
	}

	function ht(e) {
		function t(e) {
			return xe(e) && (delete e.g, Lt()), e
		}
		if (null != Q && (X = i.pick(e, ['d', 'q', 'h', 'g', 't', 'ts', 'pr']), Q < 2)) {
			var r = i.extend({
				z: Q
			}, i.pick(e, d.SESSION_PARAMS));
			je(r = t(r))
		}
		B = Fe()
	}

	function gt(e) {
		var t = w.requestStringBuilder(!1, xt);
		return t.addSingleEventProps(e), t.build(!1)
	}

	function _t(e) {
		lt(Xe()), K = De(), addPageviewProperties(vt());
		var t = i.extend({}, ft(), e || {});
		ht(t), 2 === t.z && (t.sp = w.encodePrimitiveKeysAndValuesAsArrayOfStrings(B));
		var r = {
			props: t,
			type: d.MessageType.Metadata,
			idParams: Z
		};
		rt.queueEventMessage(r), A.sample(1e4, Ut, ['secure', M]);
		try {
			h.sendSampledInlineFrameTelemetry()
		} catch (e) {
			xt('Failed to record inline frame telemetry', e)
		}
		try {
			E.sendRewriteAndHeapIgnoreTelemetry()
		} catch (e) {
			xt('Failed to record sensitive data API telemetry', e)
		}
	}

	function mt(e) {
		rt.queueAutotrackEvent(e)
	}

	function yt(e) {
		if (e && 'object' == typeof e && !Array.isArray(e)) {
			K = De();
			var t = y.getNumNewUniqueKeys(e, K);
			t > 0 && Ut('eventPropertiesTelemetry - added new properties', t), i.extend(K, e), Ve(K)
		} else _.canUseConsole() && console.warn('addEventProperties was called with an invalid argument')
	}

	function Et(e) {
		K = De(), Object.prototype.hasOwnProperty.call(K, e) && Ut('eventPropertiesTelemetry - removed properties', 1), delete K[e], Ve(K)
	}

	function St() {
		var e = De(),
			t = Object.keys(e).length;
		t && Ut('eventPropertiesTelemetry - removed properties', t), Ve(K = {})
	}

	function wt() {
		var e = T.getCookie(T.getCookieName('id')),
			t;
		return e ? Ge(e).sessionId : null
	}

	function At() {
		if (!C.isHeapHandledWebview()) {
			var e = Be();
			if (l.isIdentified(e)) {
				tt.flush(), Ut('resetIdentityTelemetry - identified user');
				var t = s.generateId();
				e.userId = t, e.identity = null, e.oldIdentity = null, e.identityField = null, e.isIdentified = null, lt(e), Me(e), O.createAndIdentifyNewAurycSession(t), Ye(e, {
					z: 0
				})
			} else Ut('resetIdentityTelemetry - anonymous user')
		}
	}
	if (addPageviewProperties = function(e) {
			i.extend(G, e)
		}, window.heap || (window.heap = []), _.isSupportedClient() || (window.heap = {
			identify: function() {},
			addUserProperties: function() {},
			track: function() {},
			addEventProperties: function() {},
			removeEventProperty: function() {},
			clearEventProperties: function() {},
			resetIdentity: function() {},
			getSessionId: function() {},
			setEventProperties: function() {},
			unsetEventProperty: function() {},
			config: window.heap.config
		}), !heap.loaded && _.isSupportedClient()) {
		var Tt = a.getUserDefinedConfig();
		R = window._heapid ? heap.appid = window._heapid : heap.appid, $e(), T.cookiePathValid(Tt.cookiePath) && Re();
		var bt = heap,
			It = [],
			Ot = function(e) {
				var t, r, n, o, a;
				if (W)
					if (i.isObject(e)) {
						for (t in i.isArray(e) && Ut('addUserProperties - array props argument'), r = {}, e) i.isObject(e[t]) || i.isUndefined(e[t]) || i.isNull(e[t]) || '' === e[t] || (r['_' + t] = e[t]);
						if (n = w.requestStringBuilder(!1, xt), o = m.truncateKeysAndValuesOfObject(r, [], d.MAX_ATTRIBUTE_LENGTH), i.size(o)) {
							n.addSingleEventProps(o), a = n.build(!1);
							var u = V + '?' + Z + (a = a ? '&' + a : '') + '&st=' + (new Date).gt() + qe(),
								c;
							new Image(1, 1).src = u
						} else Ut('addUserProperties - no valid props')
					} else Ut('addUserProperties - non-object props argument');
				else It.push(['addUserProperties', e])
			},
			Ct;
		if (window.heap = {
				appid: R,
				config: Tt,
				loaded: !0,
				identify: function() {
					if (!C.isHeapHandledWebview())
						if (W) {
							var e = arguments[1],
								t = void 0,
								r = 0,
								n = arguments.length;
							Array.isArray(e) ? (r = e[0], n -= 1) : t = e;
							var i = {
								propsOrIdentity: arguments[0],
								identityField: t,
								retryCount: r,
								numArgs: n,
								getJsonp: We,
								idParams: Z,
								isIDv4Enabled: !1,
								addUserProperties: Ot
							};
							l.handleIdentify(i)
						} else {
							var o = arguments;
							It.push(['identify'].concat(Object.keys(arguments || {}).map((function(e) {
								return o[e]
							}))))
						}
				},
				addUserProperties: Ot,
				track: function(e, t, r) {
					var n = {
						recordError: xt,
						Buffer: rt,
						globalEventProperties: K
					};
					g.handleCustomTrack(n, e, t, r)
				},
				addEventProperties: yt,
				removeEventProperty: Et,
				clearEventProperties: St,
				resetIdentity: At,
				getSessionId: wt,
				version: i.extend({}, HEAP_VERSION),
				setEventProperties: yt,
				unsetEventProperty: Et,
				getReplayId: O.getReplayId
			}, ct(bt), fe(window, 'beforeunload', pe, !0), fe(window, 'message', ve, !0), ['mousemove', 'mouseup', 'mousedown', 'keydown', 'keypress', 'keyup', 'mouseenter', 'scroll', 'resize', 'dblclick', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerover', 'pointerenter', 'pointerdown', 'pointermove', 'pointerup', 'pointercancel', 'pointerout', 'pointerleave'].forEach((function(e) {
				try {
					fe(window, e, i.throttle(Ze, 3e4, {
						leading: !0,
						trailing: !1
					}), !0)
				} catch (t) {
					k.log('Adding session replay event listener failed for ' + e)
				}
			})), _.getIEVersion()) {
			var Nt = function() {
				for (var e = document.getElementsByTagName('*'), t = 0; t < e.length; t++) {
					var r = e[t];
					1 === r.nodeType && (r._hpseen || (r._hpseen = !0, fe(r, 'change', mt), fe(r, 'click', be), fe(r, 'submit', Ie)))
				}
				setTimeout((function() {
					try {
						Nt()
					} catch (e) {
						xt('Error adding IEListeners.', e)
					}
				}), 2e3)
			};
			Nt()
		} else fe(window, 'change', mt, !0), fe(window, 'click', be, !0), fe(window, 'submit', Ie, !0);
		if (window.history.pushState) {
			var Pt = function(e, t, r) {
				var n = e[t];
				e[t] = function() {
					var t = n.apply(e, arguments);
					return i.isFunction(e[r]) && e[r](), t
				}
			};
			Pt(window.history, 'pushState', 'heappushstate'), Pt(window.history, 'replaceState', 'heapreplacestate');
			var kt = function() {
				var e = Pe();
				if (U !== e) {
					re.pr = f.getPathFromURL(U), U = e, nt(), pt();
					var t = re.pr,
						r = m.truncate(window.location.pathname, d.MAX_SINGLE_REQUEST_VALUE_LENGTH),
						n = v.redactAuthTokens(m.truncate(window.location.hash, d.MAX_SINGLE_REQUEST_VALUE_LENGTH)),
						i = v.redactAuthTokens(m.truncate(window.location.search, d.MAX_SINGLE_REQUEST_VALUE_LENGTH)),
						o = m.truncate(window.location.hostname, d.MAX_SINGLE_REQUEST_VALUE_LENGTH);
					setTimeout((function() {
						Mt(), _t({
							pr: t,
							h: r,
							g: n,
							q: i,
							d: o
						})
					}), 0)
				}
			};
			history.heappushstate = history.heapreplacestate = kt, window.addEventListener('popstate', kt, !0), window.addEventListener('hashchange', kt, !0)
		}
		he() || ge(), Se()
	}

	function Rt(e) {
		var t, r, n;
		e && e.querySelectorAll && (e.querySelectorAll('a').forEach((function(e) {
			e.addEventListener('click', pe)
		})), e.querySelectorAll('form').forEach((function(e) {
			e.addEventListener('submit', pe)
		})), e.querySelectorAll('[onClick]').forEach((function(e) {
			e.addEventListener('click', pe)
		})))
	}

	function Mt() {
		INTEGRATIONS_STUB = {}
	}

	function Lt() {
		Ut('Cookie too large to store full landing page params', 1)
	}

	function xt(e, t) {
		var r = '';
		t && (t.stack ? r = (r = t.stack.length > 500 ? t.stack.substring(0, 500) : t.stack).replace(/\n/g, ' ') : t.name && (r = t.name)), Vt({
			type: 'error',
			cm: e,
			str: r
		})
	}

	function Ut(e, t) {
		Vt({
			type: 'data',
			cm: e,
			val: t || 0 === t ? t : ''
		})
	}

	function jt(e) {
		return H + "?a=" + R + '&' + e + '&st=' + (new Date).gt() + ze() + qe()
	}

	function Vt(e) {
		try {
			if (!i.isObject(e)) return;
			var t = w.requestStringBuilder(!1, xt);
			t.addSingleEventProps({
				te: w.encodePrimitiveKeysAndValuesAsArrayOfStrings(e)
			});
			var r, n = jt(t.build(!1));
			ne(n)
		} catch (e) {}
	}
	_.isIOSWebkitBrowser() && (fe(window, 'blur', pe, !0), fe(window, 'pagehide', pe, !0), Rt(document), fe(window, 'DOMNodeInserted', (function(e) {
		Rt(e.target)
	}), !1)), Mt(), it() ? nt() : setTimeout(nt, d.ASYNC_SOURCE_LOAD_TIMEOUT_IN_MS)
}, function(e, t) {
	var r = !1,
		n, i, o, a, u;
	Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || Object.defineProperty(Element.prototype, 'closest', {
		value: function(e) {
			var t = this;
			do {
				if (t.matches(e)) return t;
				t = t.parentElement || t.parentNode
			} while (null !== t && 1 === t.nodeType);
			return null
		},
		writable: !0,
		configurable: !0,
		enumerable: !0
	}), 'function' != typeof Object.assign && Object.defineProperty(Object, 'assign', {
		value: function e(t, r) {
			'use strict';
			if (null == t) throw new TypeError('Cannot convert undefined or null to object');
			for (var n = Object(t), i = 1; i < arguments.length; i++) {
				var o = arguments[i];
				if (null != o)
					for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (n[a] = o[a])
			}
			return n
		},
		writable: !0,
		configurable: !0
	}), Array.prototype.findIndex || Object.defineProperty(Array.prototype, 'findIndex', {
		value: function(e) {
			if (null == this) throw new TypeError('"this" is null or not defined');
			var t = Object(this),
				r = t.length >>> 0;
			if ('function' != typeof e) throw new TypeError('predicate must be a function');
			for (var n = arguments[1], i = 0; i < r;) {
				var o = t[i];
				if (e.call(n, o, i, t)) return i;
				i++
			}
			return -1
		},
		configurable: !0,
		writable: !0
	}), Array.from || Object.defineProperty(Array, 'from', {
		value: (n = Object.prototype.toString, i = function(e) {
			return 'function' == typeof e || '[object Function]' === n.call(e)
		}, o = function(e) {
			var t = Number(e);
			return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
		}, a = Math.pow(2, 53) - 1, u = function(e) {
			var t = o(e);
			return Math.min(Math.max(t, 0), a)
		}, function e(t) {
			var r = this,
				n = Object(t);
			if (null == t) throw new TypeError('Array.from requires an array-like object - not null or undefined');
			var o = arguments.length > 1 ? arguments[1] : void 0,
				a;
			if (void 0 !== o) {
				if (!i(o)) throw new TypeError('Array.from: when provided, the second argument must be a function');
				arguments.length > 2 && (a = arguments[2])
			}
			for (var c = u(n.length), s = i(r) ? Object(new r(c)) : new Array(c), l = 0, f; l < c;) f = n[l], s[l] = o ? void 0 === a ? o(f, l) : o.call(a, f, l) : f, l += 1;
			return s.length = c, s
		}),
		writable: !0,
		configurable: !0
	}), Array.prototype.includes || Object.defineProperty(Array.prototype, 'includes', {
		value: function(e, t) {
			if (null == this) throw new TypeError('"this" is null or not defined');
			var r = Object(this),
				n = r.length >>> 0;
			if (0 === n) return !1;
			var i = 0 | t,
				o = Math.max(i >= 0 ? i : n - Math.abs(i), 0);

			function a(e, t) {
				return e === t || 'number' == typeof e && 'number' == typeof t && isNaN(e) && isNaN(t)
			}
			for (; o < n;) {
				if (a(r[o], e)) return !0;
				o++
			}
			return !1
		},
		writable: !0,
		configurable: !0
	})
}, function(e, t, r) {
	(function(e, r) {
		(function() {
			var n, i = '3.10.1',
				o = 1,
				a = 2,
				u = 4,
				c = 8,
				s = 16,
				l = 32,
				f = 64,
				d = 128,
				p = 150,
				v = 16,
				h = 200,
				g = 1,
				_ = 2,
				m = 'Expected a function',
				y = '__lodash_placeholder__',
				E = '[object Arguments]',
				S = '[object Array]',
				w = '[object Boolean]',
				A = '[object Date]',
				T = '[object Error]',
				b = '[object Function]',
				I = '[object Map]',
				O = '[object Number]',
				C = '[object Object]',
				N = '[object RegExp]',
				P = '[object Set]',
				k = '[object String]',
				R = '[object WeakMap]',
				M = '[object ArrayBuffer]',
				L = '[object Float32Array]',
				x = '[object Float64Array]',
				U = '[object Int8Array]',
				j = '[object Int16Array]',
				V = '[object Int32Array]',
				H = '[object Uint8Array]',
				D = '[object Uint8ClampedArray]',
				F = '[object Uint16Array]',
				K = '[object Uint32Array]',
				G = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
				B = /^\w*$/,
				X = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
				$ = /\\(\\)?/g,
				W = /\w*$/,
				q = /^\[object .+?Constructor\]$/,
				z = /^\d+$/,
				Q = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'],
				J = {};
			J[L] = J[x] = J[U] = J[j] = J[V] = J[H] = J[D] = J[F] = J[K] = !0, J[E] = J[S] = J[M] = J[w] = J[A] = J[T] = J[b] = J[I] = J[O] = J[C] = J[N] = J[P] = J[k] = J[R] = !1;
			var Y = {};
			Y[E] = Y[S] = Y[M] = Y[w] = Y[A] = Y[L] = Y[x] = Y[U] = Y[j] = Y[V] = Y[O] = Y[C] = Y[N] = Y[k] = Y[H] = Y[D] = Y[F] = Y[K] = !0, Y[T] = Y[b] = Y[I] = Y[P] = Y[R] = !1;
			var Z = {
					function: !0,
					object: !0
				},
				ee = Z[typeof t] && t && !t.nodeType && t,
				te = Z[typeof e] && e && !e.nodeType && e,
				re = ee && te && 'object' == typeof r && r && r.Object && r,
				ne = Z[typeof self] && self && self.Object && self,
				ie = Z[typeof window] && window && window.Object && window,
				oe = te && te.exports === ee && ee,
				ae = re || ie !== (this && this.window) && ie || ne || this;

			function ue(e, t, r) {
				for (var n = e.length, i = r ? n : -1; r ? i-- : ++i < n;)
					if (t(e[i], i, e)) return i;
				return -1
			}

			function ce(e, t, r) {
				if (t != t) return de(e, r);
				for (var n = r - 1, i = e.length; ++n < i;)
					if (e[n] === t) return n;
				return -1
			}

			function se(e) {
				return null == e ? '' : e + ''
			}

			function le(e, t) {
				for (var r = -1, n = e.length; ++r < n && t.indexOf(e.charAt(r)) > -1;);
				return r
			}

			function fe(e, t) {
				for (var r = e.length; r-- && t.indexOf(e.charAt(r)) > -1;);
				return r
			}

			function de(e, t, r) {
				for (var n = e.length, i = t + (r ? 0 : -1); r ? i-- : ++i < n;) {
					var o = e[i];
					if (o != o) return i
				}
				return -1
			}
			var pe = function() {
				try {
					Object({
						toString: 0
					} + '')
				} catch (e) {
					return function() {
						return !1
					}
				}
				return function(e) {
					return 'function' != typeof e.toString && 'string' == typeof(e + '')
				}
			}();

			function ve(e) {
				return !!e && 'object' == typeof e
			}

			function he(e) {
				return e <= 160 && e >= 9 && e <= 13 || 32 == e || 160 == e || 5760 == e || 6158 == e || e >= 8192 && (e <= 8202 || 8232 == e || 8233 == e || 8239 == e || 8287 == e || 12288 == e || 65279 == e)
			}

			function ge(e, t) {
				for (var r = -1, n = e.length, i = -1, o = []; ++r < n;) e[r] === t && (e[r] = y, o[++i] = r);
				return o
			}

			function _e(e) {
				for (var t = -1, r = e.length; ++t < r && he(e.charCodeAt(t)););
				return t
			}

			function me(e) {
				for (var t = e.length; t-- && he(e.charCodeAt(t)););
				return t
			}
			var ye = Array.prototype,
				Ee = Error.prototype,
				Se = Object.prototype,
				we = String.prototype,
				Ae = Function.prototype.toString,
				Te = Se.hasOwnProperty,
				be = Se.toString,
				Ie = RegExp('^' + Ae.call(Te).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'),
				Oe = ae.ArrayBuffer,
				Ce = Se.propertyIsEnumerable,
				Ne = Cr(ae, 'Set'),
				Pe = ye.splice,
				ke = ae.Uint8Array,
				Re = Cr(ae, 'WeakMap'),
				Me = Math.ceil,
				Le = Cr(Object, 'create'),
				xe = Math.floor,
				Ue = Cr(Array, 'isArray'),
				je = ae.isFinite,
				Ve = Cr(Object, 'keys'),
				He = Math.max,
				De = Math.min,
				Fe = Cr(Date, 'now'),
				Ke = Number.NEGATIVE_INFINITY,
				Ge = Number.POSITIVE_INFINITY,
				Be = 4294967295,
				Xe = 4294967294,
				$e = 2147483647,
				We = 9007199254740991,
				qe = Re && new Re,
				ze = {},
				Qe = {};
			Qe[L] = ae.Float32Array, Qe[x] = ae.Float64Array, Qe[U] = ae.Int8Array, Qe[j] = ae.Int16Array, Qe[V] = ae.Int32Array, Qe[H] = ke, Qe[D] = ae.Uint8ClampedArray, Qe[F] = ae.Uint16Array, Qe[K] = ae.Uint32Array;
			var Je = {};

			function Ye(e) {
				if (ve(e) && !Pn(e) && !(e instanceof rt)) {
					if (e instanceof et) return e;
					if (Te.call(e, '__chain__') && Te.call(e, '__wrapped__')) return Qr(e)
				}
				return new et(e)
			}

			function Ze() {}

			function et(e, t, r) {
				this.__wrapped__ = e, this.__actions__ = r || [], this.__chain__ = !!t
			}
			Je[S] = Je[A] = Je[O] = {
				constructor: !0,
				toLocaleString: !0,
				toString: !0,
				valueOf: !0
			}, Je[w] = Je[k] = {
				constructor: !0,
				toString: !0,
				valueOf: !0
			}, Je[T] = Je[b] = Je[N] = {
				constructor: !0,
				toString: !0
			}, Je[C] = {
				constructor: !0
			}, gt(Q, (function(e) {
				for (var t in Je)
					if (Te.call(Je, t)) {
						var r = Je[t];
						r[e] = Te.call(r, e)
					}
			}));
			var tt = Ye.support = {};

			function rt(e) {
				this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ge, this.__views__ = []
			}

			function nt() {
				var e = new rt(this.__wrapped__);
				return e.__actions__ = ht(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = ht(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = ht(this.__views__), e
			}

			function it() {
				if (this.__filtered__) {
					var e = new rt(this);
					e.__dir__ = -1, e.__filtered__ = !0
				} else(e = this.clone()).__dir__ *= -1;
				return e
			}

			function ot() {
				var e = this.__wrapped__.value(),
					t = this.__dir__,
					r = Pn(e),
					n = t < 0,
					i = r ? e.length : 0,
					o = Nr(0, i, this.__views__),
					a = o.start,
					u = o.end,
					c = u - a,
					s = n ? u : a - 1,
					l = this.__iteratees__,
					f = l.length,
					d = 0,
					p = De(c, this.__takeCount__);
				if (!r || i < 200 || i == c && p == c) return rr(e, this.__actions__);
				var v = [];
				e: for (; c-- && d < p;) {
					for (var h = -1, g = e[s += t]; ++h < f;) {
						var _ = l[h],
							m = _.iteratee,
							y = _.type,
							E = m(g);
						if (2 == y) g = E;
						else if (!E) {
							if (1 == y) continue e;
							break e
						}
					}
					v[d++] = g
				}
				return v
			}

			function at() {
				this.__data__ = {}
			}

			function ut(e) {
				return this.has(e) && delete this.__data__[e]
			}

			function ct(e) {
				return '__proto__' == e ? void 0 : this.__data__[e]
			}

			function st(e) {
				return '__proto__' != e && Te.call(this.__data__, e)
			}

			function lt(e, t) {
				return '__proto__' != e && (this.__data__[e] = t), this
			}

			function ft(e) {
				var t = e ? e.length : 0;
				for (this.data = {
						hash: Le(null),
						set: new Ne
					}; t--;) this.push(e[t])
			}

			function dt(e, t) {
				var r = e.data,
					n;
				return ('string' == typeof t || Mn(t) ? r.set.has(t) : r.hash[t]) ? 0 : -1
			}

			function pt(e) {
				var t = this.data;
				'string' == typeof e || Mn(e) ? t.set.add(e) : t.hash[e] = !0
			}

			function vt(e, t) {
				for (var r = -1, n = e.length, i = -1, o = t.length, a = Array(n + o); ++r < n;) a[r] = e[r];
				for (; ++i < o;) a[r++] = t[i];
				return a
			}

			function ht(e, t) {
				var r = -1,
					n = e.length;
				for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
				return t
			}

			function gt(e, t) {
				for (var r = -1, n = e.length; ++r < n && !1 !== t(e[r], r, e););
				return e
			}

			function _t(e, t, r, n) {
				for (var i = -1, o = e.length, a = n, u = a; ++i < o;) {
					var c = e[i],
						s = +t(c);
					r(s, a) && (a = s, u = c)
				}
				return u
			}

			function mt(e, t) {
				for (var r = -1, n = e.length, i = -1, o = []; ++r < n;) {
					var a = e[r];
					t(a, r, e) && (o[++i] = a)
				}
				return o
			}

			function yt(e, t) {
				for (var r = -1, n = e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
				return i
			}

			function Et(e, t) {
				for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
				return e
			}

			function St(e, t, r, n) {
				var i = -1,
					o = e.length;
				for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
				return r
			}

			function wt(e, t) {
				for (var r = -1, n = e.length; ++r < n;)
					if (t(e[r], r, e)) return !0;
				return !1
			}

			function At(e, t) {
				for (var r = e.length, n = 0; r--;) n += +t(e[r]) || 0;
				return n
			}

			function Tt(e, t, r) {
				for (var n = -1, i = Fn(t), o = i.length; ++n < o;) {
					var a = i[n],
						u = e[a],
						c = r(u, t[a], a, e, t);
					((c == c ? c !== u : u == u) || void 0 === u && !(a in e)) && (e[a] = c)
				}
				return e
			}

			function bt(e, t) {
				return null == t ? e : It(t, Fn(t), e)
			}

			function It(e, t, r) {
				r || (r = {});
				for (var n = -1, i = t.length; ++n < i;) {
					var o = t[n];
					r[o] = e[o]
				}
				return r
			}

			function Ot(e, t, r) {
				var n = typeof e;
				return 'function' == n ? void 0 === t ? e : or(e, t, r) : null == e ? Yn : 'object' == n ? Wt(e) : void 0 === t ? ri(e) : qt(e, t)
			}

			function Ct(e, t, r, n, i, o, a) {
				var u;
				if (r && (u = i ? r(e, n, i) : r(e)), void 0 !== u) return u;
				if (!Mn(e)) return e;
				var c = Pn(e);
				if (c) {
					if (u = Pr(e), !t) return ht(e, u)
				} else {
					var s = be.call(e),
						l = s == b;
					if (s != C && s != E && (!l || i)) return Y[s] ? Rr(e, s, t) : i ? e : {};
					if (pe(e)) return i ? e : {};
					if (u = kr(l ? {} : e), !t) return bt(u, e)
				}
				o || (o = []), a || (a = []);
				for (var f = o.length; f--;)
					if (o[f] == e) return a[f];
				return o.push(e), a.push(u), (c ? gt : Dt)(e, (function(n, i) {
					u[i] = Ct(n, t, r, i, e, o, a)
				})), u
			}! function(e) {
				var t = function() {
						this.x = 1
					},
					r = {
						0: 1,
						length: 1
					},
					n = [];
				for (var i in t.prototype = {
						valueOf: 1,
						y: 1
					}, new t) n.push(i);
				tt.enumErrorProps = Ce.call(Ee, 'message') || Ce.call(Ee, 'name'), tt.enumPrototypes = Ce.call(t, 'prototype'), tt.nonEnumShadows = !/valueOf/.test(n), tt.spliceObjects = (Pe.call(r, 0, 1), !r[0]), tt.unindexedChars = 'x' [0] + Object('x')[0] != 'xx'
			}(1, 0);
			var Nt = function() {
				function e() {}
				return function(t) {
					if (Mn(t)) {
						e.prototype = t;
						var r = new e;
						e.prototype = void 0
					}
					return r || {}
				}
			}();

			function Pt(e, t) {
				var r = e ? e.length : 0,
					n = [];
				if (!r) return n;
				var i = -1,
					o = br(),
					a = o === ce,
					u = a && t.length >= 200 ? dr(t) : null,
					c = t.length;
				u && (o = dt, a = !1, t = u);
				e: for (; ++i < r;) {
					var s = e[i];
					if (a && s == s) {
						for (var l = c; l--;)
							if (t[l] === s) continue e;
						n.push(s)
					} else o(t, s, 0) < 0 && n.push(s)
				}
				return n
			}
			var kt = lr(Dt),
				Rt = lr(Ft, !0);

			function Mt(e, t, r, n) {
				var i = n,
					o = i;
				return kt(e, (function(e, a, u) {
					var c = +t(e, a, u);
					(r(c, i) || c === n && c === o) && (i = c, o = e)
				})), o
			}

			function Lt(e, t) {
				var r = [];
				return kt(e, (function(e, n, i) {
					t(e, n, i) && r.push(e)
				})), r
			}

			function xt(e, t, r, n) {
				var i;
				return r(e, (function(e, r, o) {
					if (t(e, r, o)) return i = n ? r : e, !1
				})), i
			}

			function Ut(e, t, r, n) {
				n || (n = []);
				for (var i = -1, o = e.length; ++i < o;) {
					var a = e[i];
					ve(a) && Mr(a) && (r || Pn(a) || Nn(a)) ? t ? Ut(a, t, r, n) : Et(n, a) : r || (n[n.length] = a)
				}
				return n
			}
			var jt = fr(),
				Vt = fr(!0);

			function Ht(e, t) {
				return jt(e, t, Kn)
			}

			function Dt(e, t) {
				return jt(e, t, Fn)
			}

			function Ft(e, t) {
				return Vt(e, t, Fn)
			}

			function Kt(e, t) {
				for (var r = -1, n = t.length, i = -1, o = []; ++r < n;) {
					var a = t[r];
					Rn(e[a]) && (o[++i] = a)
				}
				return o
			}

			function Gt(e, t, r) {
				if (null != e) {
					e = qr(e), void 0 !== r && r in e && (t = [r]);
					for (var n = 0, i = t.length; null != e && n < i;) e = qr(e)[t[n++]];
					return n && n == i ? e : void 0
				}
			}

			function Bt(e, t, r, n, i, o) {
				return e === t || (null == e || null == t || !Mn(e) && !ve(t) ? e != e && t != t : Xt(e, t, Bt, r, n, i, o))
			}

			function Xt(e, t, r, n, i, o, a) {
				var u = Pn(e),
					c = Pn(t),
					s = S,
					l = S;
				u || ((s = be.call(e)) == E ? s = C : s != C && (u = jn(e))), c || ((l = be.call(t)) == E ? l = C : l != C && (c = jn(t)));
				var f = s == C && !pe(e),
					d = l == C && !pe(t),
					p = s == l;
				if (p && !u && !f) return Er(e, t, s);
				if (!i) {
					var v = f && Te.call(e, '__wrapped__'),
						h = d && Te.call(t, '__wrapped__');
					if (v || h) return r(v ? e.value() : e, h ? t.value() : t, n, i, o, a)
				}
				if (!p) return !1;
				o || (o = []), a || (a = []);
				for (var g = o.length; g--;)
					if (o[g] == e) return a[g] == t;
				o.push(e), a.push(t);
				var _ = (u ? yr : Sr)(e, t, r, n, i, o, a);
				return o.pop(), a.pop(), _
			}

			function $t(e, t, r) {
				var n = t.length,
					i = n,
					o = !r;
				if (null == e) return !i;
				for (e = qr(e); n--;) {
					var a = t[n];
					if (o && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1
				}
				for (; ++n < i;) {
					var u = (a = t[n])[0],
						c = e[u],
						s = a[1];
					if (o && a[2]) {
						if (void 0 === c && !(u in e)) return !1
					} else {
						var l = r ? r(c, s, u) : void 0;
						if (!(void 0 === l ? Bt(s, c, r, !0) : l)) return !1
					}
				}
				return !0
			}

			function Wt(e) {
				var t = Or(e);
				if (1 == t.length && t[0][2]) {
					var r = t[0][0],
						n = t[0][1];
					return function(e) {
						return null != e && ((e = qr(e))[r] === n && (void 0 !== n || r in e))
					}
				}
				return function(e) {
					return $t(e, t)
				}
			}

			function qt(e, t) {
				var r = Pn(e),
					n = Ur(e) && Hr(t),
					i = e + '';
				return e = zr(e),
					function(o) {
						if (null == o) return !1;
						var a = i;
						if (o = qr(o), (r || !n) && !(a in o)) {
							if (null == (o = 1 == e.length ? o : Gt(o, Zt(e, 0, -1)))) return !1;
							a = nn(e), o = qr(o)
						}
						return o[a] === t ? void 0 !== t || a in o : Bt(t, o[a], void 0, !0)
					}
			}

			function zt(e) {
				return function(t) {
					return null == t ? void 0 : qr(t)[e]
				}
			}

			function Qt(e) {
				var t = e + '';
				return e = zr(e),
					function(r) {
						return Gt(r, e, t)
					}
			}

			function Jt(e, t, r, n, i) {
				return i(e, (function(e, i, o) {
					r = n ? (n = !1, e) : t(r, e, i, o)
				})), r
			}
			var Yt = qe ? function(e, t) {
				return qe.set(e, t), e
			} : Yn;

			function Zt(e, t, r) {
				var n = -1,
					i = e.length;
				(t = null == t ? 0 : +t || 0) < 0 && (t = -t > i ? 0 : i + t), (r = void 0 === r || r > i ? i : +r || 0) < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
				for (var o = Array(i); ++n < i;) o[n] = e[n + t];
				return o
			}

			function er(e, t) {
				var r = 0;
				return kt(e, (function(e, n, i) {
					r += +t(e, n, i) || 0
				})), r
			}

			function tr(e, t) {
				for (var r = -1, n = t.length, i = Array(n); ++r < n;) i[r] = e[t[r]];
				return i
			}

			function rr(e, t) {
				var r = e;
				r instanceof rt && (r = r.value());
				for (var n = -1, i = t.length; ++n < i;) {
					var o = t[n];
					r = o.func.apply(o.thisArg, Et([r], o.args))
				}
				return r
			}

			function nr(e, t, r) {
				var n = 0,
					i = e ? e.length : n;
				if ('number' == typeof t && t == t && i <= 2147483647) {
					for (; n < i;) {
						var o = n + i >>> 1,
							a = e[o];
						(r ? a <= t : a < t) && null !== a ? n = o + 1 : i = o
					}
					return i
				}
				return ir(e, t, Yn, r)
			}

			function ir(e, t, r, n) {
				t = r(t);
				for (var i = 0, o = e ? e.length : 0, a = t != t, u = null === t, c = void 0 === t; i < o;) {
					var s = xe((i + o) / 2),
						l = r(e[s]),
						f = void 0 !== l,
						d = l == l;
					if (a) var p = d || n;
					else p = u ? d && f && (n || null != l) : c ? d && (n || f) : null != l && (n ? l <= t : l < t);
					p ? i = s + 1 : o = s
				}
				return De(o, 4294967294)
			}

			function or(e, t, r) {
				if ('function' != typeof e) return Yn;
				if (void 0 === t) return e;
				switch (r) {
					case 1:
						return function(r) {
							return e.call(t, r)
						};
					case 3:
						return function(r, n, i) {
							return e.call(t, r, n, i)
						};
					case 4:
						return function(r, n, i, o) {
							return e.call(t, r, n, i, o)
						};
					case 5:
						return function(r, n, i, o, a) {
							return e.call(t, r, n, i, o, a)
						}
				}
				return function() {
					return e.apply(t, arguments)
				}
			}

			function ar(e) {
				var t = new Oe(e.byteLength),
					r;
				return new ke(t).set(new ke(e)), t
			}

			function ur(e, t, r) {
				for (var n = r.length, i = -1, o = He(e.length - n, 0), a = -1, u = t.length, c = Array(u + o); ++a < u;) c[a] = t[a];
				for (; ++i < n;) c[r[i]] = e[i];
				for (; o--;) c[a++] = e[i++];
				return c
			}

			function cr(e, t, r) {
				for (var n = -1, i = r.length, o = -1, a = He(e.length - i, 0), u = -1, c = t.length, s = Array(a + c); ++o < a;) s[o] = e[o];
				for (var l = o; ++u < c;) s[l + u] = t[u];
				for (; ++n < i;) s[l + r[n]] = e[o++];
				return s
			}

			function sr(e) {
				return In((function(t, r) {
					var n = -1,
						i = null == t ? 0 : r.length,
						o = i > 2 ? r[i - 2] : void 0,
						a = i > 2 ? r[2] : void 0,
						u = i > 1 ? r[i - 1] : void 0;
					for ('function' == typeof o ? (o = or(o, u, 5), i -= 2) : i -= (o = 'function' == typeof u ? u : void 0) ? 1 : 0, a && xr(r[0], r[1], a) && (o = i < 3 ? void 0 : o, i = 1); ++n < i;) {
						var c = r[n];
						c && e(t, c, o)
					}
					return t
				}))
			}

			function lr(e, t) {
				return function(r, n) {
					var i = r ? Ir(r) : 0;
					if (!Vr(i)) return e(r, n);
					for (var o = t ? i : -1, a = qr(r);
						(t ? o-- : ++o < i) && !1 !== n(a[o], o, a););
					return r
				}
			}

			function fr(e) {
				return function(t, r, n) {
					for (var i = qr(t), o = n(t), a = o.length, u = e ? a : -1; e ? u-- : ++u < a;) {
						var c = o[u];
						if (!1 === r(i[c], c, i)) break
					}
					return t
				}
			}

			function dr(e) {
				return Le && Ne ? new ft(e) : null
			}

			function pr(e) {
				return function() {
					var t = arguments;
					switch (t.length) {
						case 0:
							return new e;
						case 1:
							return new e(t[0]);
						case 2:
							return new e(t[0], t[1]);
						case 3:
							return new e(t[0], t[1], t[2]);
						case 4:
							return new e(t[0], t[1], t[2], t[3]);
						case 5:
							return new e(t[0], t[1], t[2], t[3], t[4]);
						case 6:
							return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
						case 7:
							return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
					}
					var r = Nt(e.prototype),
						n = e.apply(r, t);
					return Mn(n) ? n : r
				}
			}

			function vr(e, t) {
				return function(r, n, i) {
					if (i && xr(r, n, i) && (n = void 0), 1 == (n = wr(n, i, 3)).length) {
						var o = _t(r = Pn(r) ? r : Wr(r), n, e, t);
						if (!r.length || o !== t) return o
					}
					return Mt(r, n, e, t)
				}
			}

			function hr(e, t) {
				return function(r, n, i) {
					if (n = wr(n, i, 3), Pn(r)) {
						var o = ue(r, n, t);
						return o > -1 ? r[o] : void 0
					}
					return xt(r, n, e)
				}
			}

			function gr(e) {
				return function(t, r, n) {
					var i = {};
					return r = wr(r, n, 3), Dt(t, (function(t, n, o) {
						var a = r(t, n, o);
						t = e ? t : a, i[n = e ? a : n] = t
					})), i
				}
			}

			function _r(e, t) {
				return function(r, n, i, o) {
					var a = arguments.length < 3;
					return 'function' == typeof n && void 0 === o && Pn(r) ? e(r, n, i, a) : Jt(r, wr(n, o, 4), i, a, t)
				}
			}

			function mr(e, t, r, n, i, o, a, u, c, s) {
				var l = 128 & t,
					f = 1 & t,
					d = 2 & t,
					p = 8 & t,
					v = 4 & t,
					h = 16 & t,
					g = d ? void 0 : pr(e);

				function _() {
					for (var m = arguments.length, y = m, E = Array(m); y--;) E[y] = arguments[y];
					if (n && (E = ur(E, n, i)), o && (E = cr(E, o, a)), p || h) {
						var S = _.placeholder,
							w = ge(E, S);
						if ((m -= w.length) < s) {
							var A = u ? ht(u) : void 0,
								T = He(s - m, 0),
								b = p ? w : void 0,
								I = p ? void 0 : w,
								O = p ? E : void 0,
								C = p ? void 0 : E;
							t |= p ? 32 : 64, t &= ~(p ? 64 : 32), v || (t &= -4);
							var N = [e, t, r, O, b, C, I, A, c, T],
								P = mr.apply(void 0, N);
							return jr(e) && Gr(P, N), P.placeholder = S, P
						}
					}
					var k = f ? r : this,
						R = d ? k[e] : e;
					return u && (E = Kr(E, u)), l && c < E.length && (E.length = c), this && this !== ae && this instanceof _ && (R = g || pr(e)), R.apply(k, E)
				}
				return _
			}

			function yr(e, t, r, n, i, o, a) {
				var u = -1,
					c = e.length,
					s = t.length;
				if (c != s && !(i && s > c)) return !1;
				for (; ++u < c;) {
					var l = e[u],
						f = t[u],
						d = n ? n(i ? f : l, i ? l : f, u) : void 0;
					if (void 0 !== d) {
						if (d) continue;
						return !1
					}
					if (i) {
						if (!wt(t, (function(e) {
								return l === e || r(l, e, n, i, o, a)
							}))) return !1
					} else if (l !== f && !r(l, f, n, i, o, a)) return !1
				}
				return !0
			}

			function Er(e, t, r) {
				switch (r) {
					case w:
					case A:
						return +e == +t;
					case T:
						return e.name == t.name && e.message == t.message;
					case O:
						return e != +e ? t != +t : e == +t;
					case N:
					case k:
						return e == t + ''
				}
				return !1
			}

			function Sr(e, t, r, n, i, o, a) {
				var u = Fn(e),
					c = u.length,
					s, l;
				if (c != Fn(t).length && !i) return !1;
				for (var f = c; f--;) {
					var d = u[f];
					if (!(i ? d in t : Te.call(t, d))) return !1
				}
				for (var p = i; ++f < c;) {
					var v = e[d = u[f]],
						h = t[d],
						g = n ? n(i ? h : v, i ? v : h, d) : void 0;
					if (!(void 0 === g ? r(v, h, n, i, o, a) : g)) return !1;
					p || (p = 'constructor' == d)
				}
				if (!p) {
					var _ = e.constructor,
						m = t.constructor;
					if (_ != m && 'constructor' in e && 'constructor' in t && !('function' == typeof _ && _ instanceof _ && 'function' == typeof m && m instanceof m)) return !1
				}
				return !0
			}

			function wr(e, t, r) {
				var n = Ye.callback || Jn;
				return n = n === Jn ? Ot : n, r ? n(e, t, r) : n
			}
			var Ar = qe ? function(e) {
				return qe.get(e)
			} : ti;

			function Tr(e) {
				for (var t = e.name + '', r = ze[t], n = r ? r.length : 0; n--;) {
					var i = r[n],
						o = i.func;
					if (null == o || o == e) return i.name
				}
				return t
			}

			function br(e, t, r) {
				var n = Ye.indexOf || rn;
				return n = n === rn ? ce : n, e ? n(e, t, r) : n
			}
			var Ir = zt('length');

			function Or(e) {
				for (var t = $n(e), r = t.length; r--;) t[r][2] = Hr(t[r][1]);
				return t
			}

			function Cr(e, t) {
				var r = null == e ? void 0 : e[t];
				return Ln(r) ? r : void 0
			}

			function Nr(e, t, r) {
				for (var n = -1, i = r.length; ++n < i;) {
					var o = r[n],
						a = o.size;
					switch (o.type) {
						case 'drop':
							e += a;
							break;
						case 'dropRight':
							t -= a;
							break;
						case 'take':
							t = De(t, e + a);
							break;
						case 'takeRight':
							e = He(e, t - a)
					}
				}
				return {
					start: e,
					end: t
				}
			}

			function Pr(e) {
				var t = e.length,
					r = new e.constructor(t);
				return t && 'string' == typeof e[0] && Te.call(e, 'index') && (r.index = e.index, r.input = e.input), r
			}

			function kr(e) {
				var t = e.constructor;
				return 'function' == typeof t && t instanceof t || (t = Object), new t
			}

			function Rr(e, t, r) {
				var n = e.constructor;
				switch (t) {
					case M:
						return ar(e);
					case w:
					case A:
						return new n(+e);
					case L:
					case x:
					case U:
					case j:
					case V:
					case H:
					case D:
					case F:
					case K:
						n instanceof n && (n = Qe[t]);
						var i = e.buffer;
						return new n(r ? ar(i) : i, e.byteOffset, e.length);
					case O:
					case k:
						return new n(e);
					case N:
						var o = new n(e.source, W.exec(e));
						o.lastIndex = e.lastIndex
				}
				return o
			}

			function Mr(e) {
				return null != e && Vr(Ir(e))
			}

			function Lr(e, t) {
				return t = null == t ? 9007199254740991 : t, (e = 'number' == typeof e || z.test(e) ? +e : -1) > -1 && e % 1 == 0 && e < t
			}

			function xr(e, t, r) {
				if (!Mn(r)) return !1;
				var n = typeof t;
				if ('number' == n ? Mr(r) && Lr(t, r.length) : 'string' == n && t in r) {
					var i = r[t];
					return e == e ? e === i : i != i
				}
				return !1
			}

			function Ur(e, t) {
				var r = typeof e,
					n;
				return !!('string' == r && B.test(e) || 'number' == r) || !Pn(e) && (!G.test(e) || null != t && e in qr(t))
			}

			function jr(e) {
				var t = Tr(e),
					r = Ye[t];
				if ('function' != typeof r || !(t in rt.prototype)) return !1;
				if (e === r) return !0;
				var n = Ar(r);
				return !!n && e === n[0]
			}

			function Vr(e) {
				return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
			}

			function Hr(e) {
				return e == e && !Mn(e)
			}

			function Dr(e, t) {
				e = qr(e);
				for (var r = -1, n = t.length, i = {}; ++r < n;) {
					var o = t[r];
					o in e && (i[o] = e[o])
				}
				return i
			}

			function Fr(e, t) {
				var r = {};
				return Ht(e, (function(e, n, i) {
					t(e, n, i) && (r[n] = e)
				})), r
			}

			function Kr(e, t) {
				for (var r = e.length, n = De(t.length, r), i = ht(e); n--;) {
					var o = t[n];
					e[n] = Lr(o, r) ? i[o] : void 0
				}
				return e
			}
			var Gr = (Br = 0, Xr = 0, function(e, t) {
					var r = Sn(),
						n = 16 - (r - Xr);
					if (Xr = r, n > 0) {
						if (++Br >= 150) return e
					} else Br = 0;
					return Yt(e, t)
				}),
				Br, Xr;

			function $r(e) {
				for (var t = Kn(e), r = t.length, n = r && e.length, i = !!n && Vr(n) && (Pn(e) || Nn(e) || Un(e)), o = -1, a = []; ++o < r;) {
					var u = t[o];
					(i && Lr(u, n) || Te.call(e, u)) && a.push(u)
				}
				return a
			}

			function Wr(e) {
				return null == e ? [] : Mr(e) ? Ye.support.unindexedChars && Un(e) ? e.split('') : Mn(e) ? e : Object(e) : qn(e)
			}

			function qr(e) {
				if (Ye.support.unindexedChars && Un(e)) {
					for (var t = -1, r = e.length, n = Object(e); ++t < r;) n[t] = e.charAt(t);
					return n
				}
				return Mn(e) ? e : Object(e)
			}

			function zr(e) {
				if (Pn(e)) return e;
				var t = [];
				return se(e).replace(X, (function(e, r, n, i) {
					t.push(n ? i.replace($, '$1') : r || e)
				})), t
			}

			function Qr(e) {
				return e instanceof rt ? e.clone() : new et(e.__wrapped__, e.__chain__, ht(e.__actions__))
			}

			function Jr(e, t, r) {
				t = (r ? xr(e, t, r) : null == t) ? 1 : He(xe(t) || 1, 1);
				for (var n = 0, i = e ? e.length : 0, o = -1, a = Array(Me(i / t)); n < i;) a[++o] = Zt(e, n, n += t);
				return a
			}

			function Yr(e) {
				for (var t = -1, r = e ? e.length : 0, n = -1, i = []; ++t < r;) {
					var o = e[t];
					o && (i[++n] = o)
				}
				return i
			}
			var Zr = In((function(e, t) {
				return ve(e) && Mr(e) ? Pt(e, Ut(t, !1, !0)) : []
			}));

			function en(e) {
				return e ? e[0] : void 0
			}

			function tn(e, t, r) {
				var n = e ? e.length : 0;
				return r && xr(e, t, r) && (t = !1), n ? Ut(e, t) : []
			}

			function rn(e, t, r) {
				var n = e ? e.length : 0;
				if (!n) return -1;
				if ('number' == typeof r) r = r < 0 ? He(n + r, 0) : r;
				else if (r) {
					var i = nr(e, t);
					return i < n && (t == t ? t === e[i] : e[i] != e[i]) ? i : -1
				}
				return ce(e, t, r || 0)
			}

			function nn(e) {
				var t = e ? e.length : 0;
				return t ? e[t - 1] : void 0
			}

			function on(e, t) {
				var r = -1,
					n = e ? e.length : 0,
					i = {};
				for (!n || t || Pn(e[0]) || (t = []); ++r < n;) {
					var o = e[r];
					t ? i[o] = t[r] : o && (i[o[0]] = o[1])
				}
				return i
			}

			function an(e) {
				var t = Ye(e);
				return t.__chain__ = !0, t
			}

			function un(e, t, r) {
				return t.call(r, e), e
			}

			function cn(e, t, r) {
				return t.call(r, e)
			}

			function sn() {
				return an(this)
			}

			function ln() {
				return new et(this.value(), this.__chain__)
			}
			var fn = In((function(e) {
				return e = Ut(e), this.thru((function(t) {
					return vt(Pn(t) ? t : [qr(t)], e)
				}))
			}));

			function dn(e) {
				for (var t, r = this; r instanceof Ze;) {
					var n = Qr(r);
					t ? i.__wrapped__ = n : t = n;
					var i = n;
					r = r.__wrapped__
				}
				return i.__wrapped__ = e, t
			}

			function pn() {
				var e = this.__wrapped__,
					t = function(e) {
						return e.reverse()
					};
				if (e instanceof rt) {
					var r = e;
					return this.__actions__.length && (r = new rt(this)), (r = r.reverse()).__actions__.push({
						func: cn,
						args: [t],
						thisArg: void 0
					}), new et(r, this.__chain__)
				}
				return this.thru(t)
			}

			function vn() {
				return this.value() + ''
			}

			function hn() {
				return rr(this.__wrapped__, this.__actions__)
			}

			function gn(e, t, r) {
				var n;
				return (Pn(e) ? mt : Lt)(e, t = wr(t, r, 3))
			}
			var _n = hr(Rt, !0);

			function mn(e, t, r, n) {
				var i = e ? Ir(e) : 0;
				return Vr(i) || (i = (e = qn(e)).length), r = 'number' != typeof r || n && xr(t, r, n) ? 0 : r < 0 ? He(i + r, 0) : r || 0, 'string' == typeof e || !Pn(e) && Un(e) ? r <= i && e.indexOf(t, r) > -1 : !!i && br(e, t, r) > -1
			}
			var yn = _r(St, kt);

			function En(e) {
				var t = e ? Ir(e) : 0;
				return Vr(t) ? t : Fn(e).length
			}
			var Sn = Fe || function() {
				return (new Date).getTime()
			};

			function wn(e, t) {
				var r;
				if ('function' != typeof t) {
					if ('function' != typeof e) throw new TypeError(m);
					var n = e;
					e = t, t = n
				}
				return function() {
					return --e > 0 && (r = t.apply(this, arguments)), e <= 1 && (t = void 0), r
				}
			}

			function An(e, t, r) {
				var n, i, o, a, u, c, s, l = 0,
					f = !1,
					d = !0;
				if ('function' != typeof e) throw new TypeError(m);
				if (t = t < 0 ? 0 : +t || 0, !0 === r) {
					var p = !0;
					d = !1
				} else Mn(r) && (p = !!r.leading, f = 'maxWait' in r && He(+r.maxWait || 0, t), d = 'trailing' in r ? !!r.trailing : d);

				function v() {
					c && clearTimeout(c), i && clearTimeout(i), l = 0, i = c = s = void 0
				}

				function h(t, r) {
					r && clearTimeout(r), i = c = s = void 0, t && (l = Sn(), o = e.apply(u, n), c || i || (n = u = void 0))
				}

				function g() {
					var e = t - (Sn() - a);
					e <= 0 || e > t ? h(s, i) : c = setTimeout(g, e)
				}

				function _() {
					h(d, c)
				}

				function y() {
					if (n = arguments, a = Sn(), u = this, s = d && (c || !p), !1 === f) var r = p && !c;
					else {
						i || p || (l = a);
						var v = f - (a - l),
							h = v <= 0 || v > f;
						h ? (i && (i = clearTimeout(i)), l = a, o = e.apply(u, n)) : i || (i = setTimeout(_, v))
					}
					return h && c ? c = clearTimeout(c) : c || t === f || (c = setTimeout(g, t)), r && (h = !0, o = e.apply(u, n)), !h || c || i || (n = u = void 0), o
				}
				return y.cancel = v, y
			}

			function Tn(e, t) {
				if ('function' != typeof e || t && 'function' != typeof t) throw new TypeError(m);
				var r = function() {
					var n = arguments,
						i = t ? t.apply(this, n) : n[0],
						o = r.cache;
					if (o.has(i)) return o.get(i);
					var a = e.apply(this, n);
					return r.cache = o.set(i, a), a
				};
				return r.cache = new Tn.Cache, r
			}

			function bn(e) {
				return wn(2, e)
			}

			function In(e, t) {
				if ('function' != typeof e) throw new TypeError(m);
				return t = He(void 0 === t ? e.length - 1 : +t || 0, 0),
					function() {
						for (var r = arguments, n = -1, i = He(r.length - t, 0), o = Array(i); ++n < i;) o[n] = r[t + n];
						switch (t) {
							case 0:
								return e.call(this, o);
							case 1:
								return e.call(this, r[0], o);
							case 2:
								return e.call(this, r[0], r[1], o)
						}
						var a = Array(t + 1);
						for (n = -1; ++n < t;) a[n] = r[n];
						return a[t] = o, e.apply(this, a)
					}
			}

			function On(e, t, r) {
				var n = !0,
					i = !0;
				if ('function' != typeof e) throw new TypeError(m);
				return !1 === r ? n = !1 : Mn(r) && (n = 'leading' in r ? !!r.leading : n, i = 'trailing' in r ? !!r.trailing : i), An(e, t, {
					leading: n,
					maxWait: +t,
					trailing: i
				})
			}

			function Cn(e, t) {
				return e > t
			}

			function Nn(e) {
				return ve(e) && Mr(e) && Te.call(e, 'callee') && !Ce.call(e, 'callee')
			}
			var Pn = Ue || function(e) {
				return ve(e) && Vr(e.length) && be.call(e) == S
			};

			function kn(e) {
				return 'number' == typeof e && je(e)
			}

			function Rn(e) {
				return Mn(e) && be.call(e) == b
			}

			function Mn(e) {
				var t = typeof e;
				return !!e && ('object' == t || 'function' == t)
			}

			function Ln(e) {
				return null != e && (Rn(e) ? Ie.test(Ae.call(e)) : ve(e) && (pe(e) ? Ie : q).test(e))
			}

			function xn(e) {
				return null === e
			}

			function Un(e) {
				return 'string' == typeof e || ve(e) && be.call(e) == k
			}

			function jn(e) {
				return ve(e) && Vr(e.length) && !!J[be.call(e)]
			}

			function Vn(e) {
				return void 0 === e
			}
			var Hn = sr((function(e, t, r) {
				return r ? Tt(e, t, r) : bt(e, t)
			}));

			function Dn(e, t) {
				if (null == e) return !1;
				var r = Te.call(e, t);
				if (!r && !Ur(t)) {
					if (null == (e = 1 == (t = zr(t)).length ? e : Gt(e, Zt(t, 0, -1)))) return !1;
					t = nn(t), r = Te.call(e, t)
				}
				return r || Vr(e.length) && Lr(t, e.length) && (Pn(e) || Nn(e) || Un(e))
			}
			var Fn = Ve ? function(e) {
				var t = null == e ? void 0 : e.constructor;
				return 'function' == typeof t && t.prototype === e || ('function' == typeof e ? Ye.support.enumPrototypes : Mr(e)) ? $r(e) : Mn(e) ? Ve(e) : []
			} : $r;

			function Kn(e) {
				if (null == e) return [];
				Mn(e) || (e = Object(e));
				var t = e.length,
					r = Ye.support;
				t = t && Vr(t) && (Pn(e) || Nn(e) || Un(e)) && t || 0;
				for (var n = e.constructor, i = -1, o = Rn(n) && n.prototype || Se, a = o === e, u = Array(t), c = t > 0, s = r.enumErrorProps && (e === Ee || e instanceof Error), l = r.enumPrototypes && Rn(e); ++i < t;) u[i] = i + '';
				for (var f in e) l && 'prototype' == f || s && ('message' == f || 'name' == f) || c && Lr(f, t) || 'constructor' == f && (a || !Te.call(e, f)) || u.push(f);
				if (r.nonEnumShadows && e !== Se) {
					var d = e === we ? k : e === Ee ? T : be.call(e),
						p = Je[d] || Je[C];
					for (d == C && (o = Se), t = Q.length; t--;) {
						var v = p[f = Q[t]];
						a && v || !(v ? Te.call(e, f) : e[f] !== o[f]) || u.push(f)
					}
				}
				return u
			}
			var Gn = gr(!0),
				Bn = gr(),
				Xn = In((function(e, t) {
					if (null == e) return {};
					if ('function' != typeof t[0]) {
						var t = yt(Ut(t), String);
						return Dr(e, Pt(Kn(e), t))
					}
					var r = or(t[0], t[1], 3);
					return Fr(e, (function(e, t, n) {
						return !r(e, t, n)
					}))
				}));

			function $n(e) {
				e = qr(e);
				for (var t = -1, r = Fn(e), n = r.length, i = Array(n); ++t < n;) {
					var o = r[t];
					i[t] = [o, e[o]]
				}
				return i
			}
			var Wn = In((function(e, t) {
				return null == e ? {} : 'function' == typeof t[0] ? Fr(e, or(t[0], t[1], 3)) : Dr(e, Ut(t))
			}));

			function qn(e) {
				return tr(e, Fn(e))
			}

			function zn(e) {
				return (e = se(e)) && e.charAt(0).toUpperCase() + e.slice(1)
			}

			function Qn(e, t, r) {
				var n = e;
				return (e = se(e)) ? (r ? xr(n, t, r) : null == t) ? e.slice(_e(e), me(e) + 1) : (t += '', e.slice(le(e, t), fe(e, t) + 1)) : e
			}

			function Jn(e, t, r) {
				return r && xr(e, t, r) && (t = void 0), ve(e) ? Zn(e) : Ot(e, t)
			}

			function Yn(e) {
				return e
			}

			function Zn(e) {
				return Wt(Ct(e, !0))
			}

			function ei(e, t, r) {
				if (null == r) {
					var n = Mn(t),
						i = n ? Fn(t) : void 0,
						o = i && i.length ? Kt(t, i) : void 0;
					(o ? o.length : n) || (o = !1, r = t, t = e, e = this)
				}
				o || (o = Kt(t, Fn(t)));
				var a = !0,
					u = -1,
					c = Rn(e),
					s = o.length;
				!1 === r ? a = !1 : Mn(r) && 'chain' in r && (a = r.chain);
				for (; ++u < s;) {
					var l = o[u],
						f = t[l];
					e[l] = f, c && (e.prototype[l] = function(t) {
						return function() {
							var r = this.__chain__;
							if (a || r) {
								var n = e(this.__wrapped__),
									i = n.__actions__ = ht(this.__actions__);
								return i.push({
									func: t,
									args: arguments,
									thisArg: e
								}), n.__chain__ = r, n
							}
							return t.apply(e, Et([this.value()], arguments))
						}
					}(f))
				}
				return e
			}

			function ti() {}

			function ri(e) {
				return Ur(e) ? zt(e) : Qt(e)
			}
			var ni = vr(Cn, Ke),
				ii;

			function oi(e, t, r) {
				return r && xr(e, t, r) && (t = void 0), 1 == (t = wr(t, r, 3)).length ? At(Pn(e) ? e : Wr(e), t) : er(e, t)
			}
			Ye.prototype = Ze.prototype, et.prototype = Nt(Ze.prototype), et.prototype.constructor = et, rt.prototype = Nt(Ze.prototype), rt.prototype.constructor = rt, at.prototype.delete = ut, at.prototype.get = ct, at.prototype.has = st, at.prototype.set = lt, ft.prototype.push = pt, Tn.Cache = at, Ye.assign = Hn, Ye.before = wn, Ye.callback = Jn, Ye.chain = an, Ye.chunk = Jr, Ye.compact = Yr, Ye.debounce = An, Ye.difference = Zr, Ye.filter = gn, Ye.flatten = tn, Ye.keys = Fn, Ye.keysIn = Kn, Ye.mapKeys = Gn, Ye.mapValues = Bn, Ye.matches = Zn, Ye.memoize = Tn, Ye.mixin = ei, Ye.omit = Xn, Ye.once = bn, Ye.pairs = $n, Ye.pick = Wn, Ye.property = ri, Ye.restParam = In, Ye.tap = un, Ye.throttle = On, Ye.thru = cn, Ye.values = qn, Ye.zipObject = on, Ye.extend = Hn, Ye.iteratee = Jn, Ye.object = on, Ye.select = gn, ei(Ye, Ye), Ye.capitalize = zn, Ye.findLast = _n, Ye.first = en, Ye.gt = Cn, Ye.has = Dn, Ye.identity = Yn, Ye.includes = mn, Ye.indexOf = rn, Ye.isArguments = Nn, Ye.isArray = Pn, Ye.isFinite = kn, Ye.isFunction = Rn, Ye.isNative = Ln, Ye.isNull = xn, Ye.isObject = Mn, Ye.isString = Un, Ye.isTypedArray = jn, Ye.isUndefined = Vn, Ye.last = nn, Ye.max = ni, Ye.noop = ti, Ye.now = Sn, Ye.reduce = yn, Ye.size = En, Ye.sum = oi, Ye.trim = Qn, Ye.contains = mn, Ye.foldl = yn, Ye.head = en, Ye.include = mn, Ye.inject = yn, ei(Ye, (ii = {}, Dt(Ye, (function(e, t) {
				Ye.prototype[t] || (ii[t] = e)
			})), ii), !1), Ye.prototype.sample = function(e) {
				return this.__chain__ || null != e ? this.thru((function(t) {
					return sample(t, e)
				})) : sample(this.value())
			}, Ye.VERSION = i, gt(['drop', 'take'], (function(e, t) {
				rt.prototype[e] = function(r) {
					var n = this.__filtered__;
					if (n && !t) return new rt(this);
					r = null == r ? 1 : He(xe(r) || 0, 0);
					var i = this.clone();
					return n ? i.__takeCount__ = De(i.__takeCount__, r) : i.__views__.push({
						size: r,
						type: e + (i.__dir__ < 0 ? 'Right' : '')
					}), i
				}, rt.prototype[e + 'Right'] = function(t) {
					return this.reverse()[e](t).reverse()
				}
			})), gt(['filter', 'map', 'takeWhile'], (function(e, t) {
				var r = t + 1,
					n = 2 != r;
				rt.prototype[e] = function(e, t) {
					var i = this.clone();
					return i.__iteratees__.push({
						iteratee: wr(e, t, 1),
						type: r
					}), i.__filtered__ = i.__filtered__ || n, i
				}
			})), gt(['first', 'last'], (function(e, t) {
				var r = 'take' + (t ? 'Right' : '');
				rt.prototype[e] = function() {
					return this[r](1).value()[0]
				}
			})), gt(['initial', 'rest'], (function(e, t) {
				var r = 'drop' + (t ? '' : 'Right');
				rt.prototype[e] = function() {
					return this.__filtered__ ? new rt(this) : this[r](1)
				}
			})), gt(['pluck', 'where'], (function(e, t) {
				var r = t ? 'filter' : 'map',
					n = t ? Wt : ri;
				rt.prototype[e] = function(e) {
					return this[r](n(e))
				}
			})), rt.prototype.compact = function() {
				return this.filter(Yn)
			}, rt.prototype.reject = function(e, t) {
				return e = wr(e, t, 1), this.filter((function(t) {
					return !e(t)
				}))
			}, rt.prototype.slice = function(e, t) {
				e = null == e ? 0 : +e || 0;
				var r = this;
				return r.__filtered__ && (e > 0 || t < 0) ? new rt(r) : (e < 0 ? r = r.takeRight(-e) : e && (r = r.drop(e)), void 0 !== t && (r = (t = +t || 0) < 0 ? r.dropRight(-t) : r.take(t - e)), r)
			}, rt.prototype.takeRightWhile = function(e, t) {
				return this.reverse().takeWhile(e, t).reverse()
			}, rt.prototype.toArray = function() {
				return this.take(Ge)
			}, Dt(rt.prototype, (function(e, t) {
				var r = /^(?:filter|map|reject)|While$/.test(t),
					n = /^(?:first|last)$/.test(t),
					i = Ye[n ? 'take' + ('last' == t ? 'Right' : '') : t];
				i && (Ye.prototype[t] = function() {
					var t = n ? [1] : arguments,
						o = this.__chain__,
						a = this.__wrapped__,
						u = !!this.__actions__.length,
						c = a instanceof rt,
						s = t[0],
						l = c || Pn(a);
					l && r && 'function' == typeof s && 1 != s.length && (c = l = !1);
					var f = function(e) {
							return n && o ? i(e, 1)[0] : i.apply(void 0, Et([e], t))
						},
						d = {
							func: cn,
							args: [f],
							thisArg: void 0
						},
						p = c && !u;
					if (n && !o) return p ? ((a = a.clone()).__actions__.push(d), e.call(a)) : i.call(void 0, this.value())[0];
					if (!n && l) {
						a = p ? a : new rt(this);
						var v = e.apply(a, t);
						return v.__actions__.push(d), new et(v, o)
					}
					return this.thru(f)
				})
			})), gt(['join', 'pop', 'push', 'replace', 'shift', 'sort', 'splice', 'split', 'unshift'], (function(e) {
				var t = (/^(?:replace|split)$/.test(e) ? we : ye)[e],
					r = /^(?:push|sort|unshift)$/.test(e) ? 'tap' : 'thru',
					n = !tt.spliceObjects && /^(?:pop|shift|splice)$/.test(e),
					i = /^(?:join|pop|replace|shift)$/.test(e),
					o = n ? function() {
						var e = t.apply(this, arguments);
						return 0 === this.length && delete this[0], e
					} : t;
				Ye.prototype[e] = function() {
					var e = arguments;
					return i && !this.__chain__ ? o.apply(this.value(), e) : this[r]((function(t) {
						return o.apply(t, e)
					}))
				}
			})), Dt(rt.prototype, (function(e, t) {
				var r = Ye[t];
				if (r) {
					var n = r.name + '',
						i;
					(ze[n] || (ze[n] = [])).push({
						name: t,
						func: r
					})
				}
			})), ze[mr(void 0, 2).name] = [{
				name: 'wrapper',
				func: void 0
			}], rt.prototype.clone = nt, rt.prototype.reverse = it, rt.prototype.value = ot, Ye.prototype.chain = sn, Ye.prototype.commit = ln, Ye.prototype.concat = fn, Ye.prototype.plant = dn, Ye.prototype.reverse = pn, Ye.prototype.toString = vn, Ye.prototype.run = Ye.prototype.toJSON = Ye.prototype.valueOf = Ye.prototype.value = hn, Ye.prototype.collect = Ye.prototype.map, Ye.prototype.head = Ye.prototype.first, Ye.prototype.select = Ye.prototype.filter, Ye.prototype.tail = Ye.prototype.rest, ee && te && oe && ((te.exports = Ye)._ = Ye)
		}).call(this)
	}).call(this, r(17)(e), r(18))
}, function(e, t) {
	var r = !1;
	e.exports = function(e) {
		return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
			enumerable: !0,
			get: function() {
				return e.l
			}
		}), Object.defineProperty(e, "id", {
			enumerable: !0,
			get: function() {
				return e.i
			}
		}), e.webpackPolyfill = 1), e
	}
}, function(e, t) {
	var r = !1,
		n;
	n = function() {
		return this
	}();
	try {
		n = n || new Function("return this")()
	} catch (e) {
		"object" == typeof window && (n = window)
	}
	e.exports = n
}, function(e, t, r) {
	var n = !1,
		i, o, a;
	i = 'qwery', o = this, a = function() {
		var e = document,
			t = e.documentElement,
			r = 'getElementsByClassName',
			n = 'getElementsByTagName',
			i = 'querySelectorAll',
			o = 'useNativeQSA',
			a = 'tagName',
			u = 'nodeType',
			c, s = /#([\w\-]+)/,
			l = /\.[\w\-]+/g,
			f = /^#([\w\-]+)$/,
			d, p, v = /^([\w]+)?\.([\w\-]+)$/,
			h = /(^|,)\s*[>~+]/,
			g = /^\s+|\s*([,\s\+\~>]|$)\s*/g,
			_ = /[\s\>\+\~]/,
			m = /(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/,
			y = /([.*+?\^=!:${}()|\[\]\/\\])/g,
			E = /^(\*|[a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/,
			S = /\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/,
			w = /:([\w\-]+)(\(['"]?([^()]+)['"]?\))?/,
			A = new RegExp(f.source + '|' + /^([\w\-]+)$/.source + '|' + /^\.([\w\-]+)$/.source),
			T = new RegExp('(' + _.source + ')' + m.source, 'g'),
			b = new RegExp(_.source + m.source),
			I = new RegExp(E.source + '(' + S.source + ")?(" + w.source + ')?'),
			O = {
				' ': function(e) {
					return e && e !== t && e.parentNode
				},
				'>': function(e, t) {
					return e && e.parentNode == t.parentNode && e.parentNode
				},
				'~': function(e) {
					return e && e.previousSibling
				},
				'+': function(e, t, r, n) {
					return !!e && (r = j(e)) && (n = j(t)) && r == n && r
				}
			};

		function C() {
			this.c = {}
		}
		C.prototype = {
			g: function(e) {
				return this.c[e] || void 0
			},
			s: function(e, t, r) {
				return t = r ? new RegExp(t) : t, this.c[e] = t
			}
		};
		var N = new C,
			P = new C,
			k = new C,
			R = new C;

		function M(e) {
			return N.g(e) || N.s(e, '(^|\\s+)' + e + '(\\s+|$)', 1)
		}

		function L(e, t) {
			for (var r = 0, n = e.length; r < n; r++) t(e[r])
		}

		function x(e) {
			for (var t = [], r = 0, n = e.length; r < n; ++r) W(e[r]) ? t = t.concat(e[r]) : t[t.length] = e[r];
			return t
		}

		function U(e) {
			for (var t = 0, r = e.length, n = []; t < r; t++) n[t] = e[t];
			return n
		}

		function j(e) {
			for (;
				(e = e.previousSibling) && 1 != e[u];);
			return e
		}

		function V(e) {
			return e.match(I)
		}

		function H(e, t, r, n, i, o, c, f, d, p, v) {
			var h, g, _, m, y;
			if (1 !== this[u]) return !1;
			if (t && '*' !== t && this[a] && this[a].toLowerCase() !== t) return !1;
			if (r && (g = r.match(s)) && g[1] !== this.id) return !1;
			if (r && (y = r.match(l)))
				for (h = y.length; h--;)
					if (!M(y[h].slice(1)).test(this.className)) return !1;
			if (d && Q.pseudos[d] && !Q.pseudos[d](this, v)) return !1;
			if (n && !c)
				for (_ in m = this.attributes)
					if (Object.prototype.hasOwnProperty.call(m, _) && (m[_].name || _) == i) return this;
			return !(n && !F(o, Z(this, i) || '', c)) && this
		}

		function D(e) {
			return P.g(e) || P.s(e, e.replace(y, '\\$1'))
		}

		function F(e, t, r) {
			switch (e) {
				case '=':
					return t == r;
				case '^=':
					return t.match(k.g('^=' + r) || k.s('^=' + r, '^' + D(r), 1));
				case '$=':
					return t.match(k.g('$=' + r) || k.s('$=' + r, D(r) + '$', 1));
				case '*=':
					return t.match(k.g(r) || k.s(r, D(r), 1));
				case '~=':
					return t.match(k.g('~=' + r) || k.s('~=' + r, '(?:^|\\s+)' + D(r) + '(?:\\s+|$)', 1));
				case '|=':
					return t.match(k.g('|=' + r) || k.s('|=' + r, '^' + D(r) + '(-|$)', 1))
			}
			return 0
		}

		function K(e, t) {
			var r = [],
				i = [],
				o, c, s, l, d, p, v, h, g = t,
				_ = R.g(e) || R.s(e, e.split(b)),
				m = e.match(T);
			if (!_.length) return r;
			if (l = (_ = _.slice(0)).pop(), _.length && (s = _[_.length - 1].match(f)) && (g = z(t, s[1])), !g) return r;
			for (v = V(l), o = 0, c = (p = g !== t && 9 !== g[u] && m && /^[+~]$/.test(m[m.length - 1]) ? function(e) {
					for (; g = g.nextSibling;) 1 == g[u] && (!v[1] || v[1] == g[a].toLowerCase()) && (e[e.length] = g);
					return e
				}([]) : g[n](v[1] || '*')).length; o < c; o++)(h = H.apply(p[o], v)) && (r[r.length] = h);
			return _.length ? (L(r, (function(e) {
				B(e, _, m) && (i[i.length] = e)
			})), i) : r
		}

		function G(e, t, r) {
			if (X(t)) return e == t;
			if (W(t)) return !!~x(t).indexOf(e);
			for (var n = t.split(','), i, o; t = n.pop();)
				if (i = R.g(t) || R.s(t, t.split(b)), o = t.match(T), i = i.slice(0), H.apply(e, V(i.pop())) && (!i.length || B(e, i, o, r))) return !0;
			return !1
		}

		function B(e, t, r, n) {
			var i;

			function o(e, n, a) {
				for (; a = O[r[n]](a, e);)
					if (X(a) && H.apply(a, V(t[n]))) {
						if (!n) return a;
						if (i = o(a, n - 1, a)) return i
					}
			}
			return (i = o(e, t.length - 1, e)) && (!n || Y(i, n))
		}

		function X(e, t) {
			return e && 'object' == typeof e && (t = e[u]) && (1 == t || 9 == t)
		}

		function $(e) {
			var t = [],
				r, n;
			e: for (r = 0; r < e.length; ++r) {
				for (n = 0; n < t.length; ++n)
					if (t[n] == e[r]) continue e;
				t[t.length] = e[r]
			}
			return t
		}

		function W(e) {
			return 'object' == typeof e && isFinite(e.length)
		}

		function q(t) {
			return t ? 'string' == typeof t ? Q(t)[0] : !t[u] && W(t) ? t[0] : t : e
		}

		function z(e, t, r) {
			return 9 === e[u] ? e.getElementById(t) : e.ownerDocument && ((r = e.ownerDocument.getElementById(t)) && Y(r, e) && r || !Y(e, e.ownerDocument) && c('[id="' + t + '"]', e)[0])
		}

		function Q(e, t) {
			var i, o, a = q(t);
			if (!a || !e) return [];
			if (e === window || X(e)) return !t || e !== window && X(a) && Y(e, a) ? [e] : [];
			if (e && W(e)) return x(e);
			if (i = e.match(A)) {
				if (i[1]) return (o = z(a, i[1])) ? [o] : [];
				if (i[2]) return U(a[n](i[2]));
				if (ee && i[3]) return U(a[r](i[3]))
			}
			return c(e, a)
		}

		function J(e, t) {
			return function(r) {
				var n, i;
				h.test(r) ? 9 !== e[u] && ((i = n = e.getAttribute('id')) || e.setAttribute('id', i = '__qwerymeupscotty'), r = '[id="' + i + '"]' + r, t(e.parentNode || e, r, !0), n || e.removeAttribute('id')) : r.length && t(e, r, !1)
			}
		}
		var Y = 'compareDocumentPosition' in t ? function(e, t) {
				return 16 == (16 & t.compareDocumentPosition(e))
			} : 'contains' in t ? function(e, r) {
				return (r = 9 === r[u] || r == window ? t : r) !== e && r.contains(e)
			} : function(e, t) {
				for (; e = e.parentNode;)
					if (e === t) return 1;
				return 0
			},
			Z = ((oe = e.createElement('p')).innerHTML = '<a href="#x">x</a>') && '#x' != oe.firstChild.getAttribute('href') ? function(e, t) {
				return 'class' === t ? e.className : 'href' === t || 'src' === t ? e.getAttribute(t, 2) : e.getAttribute(t)
			} : function(e, t) {
				return e.getAttribute(t)
			},
			ee = !!e[r],
			te = e.querySelector && e[i],
			re = function(e, t) {
				var r = [],
					n, o;
				try {
					return 9 !== t[u] && h.test(e) ? (L(n = e.split(','), J(t, (function(e, t) {
						1 == (o = e[i](t)).length ? r[r.length] = o.item(0) : o.length && (r = r.concat(U(o)))
					}))), n.length > 1 && r.length > 1 ? $(r) : r) : U(t[i](e))
				} catch (e) {}
				return ne(e, t)
			},
			ne = function(e, t) {
				var r = [],
					i, o, a, c, s, l;
				if (o = (e = e.replace(g, '$1')).match(v)) {
					for (s = M(o[2]), i = t[n](o[1] || '*'), a = 0, c = i.length; a < c; a++) s.test(i[a].className) && (r[r.length] = i[a]);
					return r
				}
				return L(l = e.split(','), J(t, (function(e, n, i) {
					for (s = K(n, e), a = 0, c = s.length; a < c; a++)(9 === e[u] || i || Y(s[a], t)) && (r[r.length] = s[a])
				}))), l.length > 1 && r.length > 1 ? $(r) : r
			},
			ie = function(e) {
				void 0 !== e[o] && (c = e[o] && te ? re : ne)
			},
			oe;
		return ie({
			useNativeQSA: !0
		}), Q.configure = ie, Q.uniq = $, Q.is = G, Q.pseudos = {}, Q
	}, e.exports ? e.exports = a() : o[i] = a()
}, function(e, t, r) {
	"use strict";
	var n = this && this.__assign || function() {
			return (n = Object.assign || function(e) {
				for (var t, r = 1, n = arguments.length; r < n; r++)
					for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
				return e
			}).apply(this, arguments)
		},
		i;
	Object.defineProperty(t, "__esModule", {
			value: !0
		}), t._resolveClientServerDisagreement = t._getClientSideConfig = t._getServerSideConfig = t._getUserDefinedClientSidedConfig = t.getUserDefinedConfig = void 0,
		function(e) {
			e.enableSecureCookies = "secureCookie", e.disableTextCapture = "disableTextCapture"
		}(i || (i = {}));
	var o = {
			enableSecureCookies: !0,
			disableTextCapture: !0
		},
		a = n({}, (window.heap || {}).config),
		SERVER_SIDE_CONFIG = {
			"enableSecureCookies": true,
			"disableTextCapture": true,
			"replaySettings": {}
		},
		u = function() {
			var e = (0, t._getClientSideConfig)(),
				r = (0, t._getServerSideConfig)(),
				i = f({
					serverConfig: r,
					clientConfig: e
				});
			return n(n({}, e), i)
		};
	t.getUserDefinedConfig = u;
	var c = function() {
		return n({}, a)
	};
	t._getUserDefinedClientSidedConfig = c;
	var s = function() {
		return n({}, SERVER_SIDE_CONFIG)
	};
	t._getServerSideConfig = s;
	var l = function() {
		var e, r = {
				disableTextCapture: !1,
				secureCookie: !1,
				trackingServer: 'https://heapanalytics.com'
			},
			i = (0, t._getUserDefinedClientSidedConfig)(),
			o = n(n({}, r), i);
		return o.trackingServer = null !== (e = o.trackingServer) && void 0 !== e ? e : r.trackingServer, o
	};
	t._getClientSideConfig = l;
	var f = function(e) {
			var r = e.serverConfig,
				n = e.clientConfig,
				o = {};
			return Object.keys(r).forEach((function(e) {
				var a, u;
				if (e in i && i[e] in n) {
					var c = e;
					a = (0, t._resolveClientServerDisagreement)({
						serverFieldName: c,
						serverConfig: r,
						clientConfig: n
					}), o[i[c]] = a
				} else a = r[e], o[e] = a
			})), o
		},
		d = function(e) {
			var t = e.serverFieldName,
				r = e.serverConfig,
				n = e.clientConfig,
				a = i[t],
				u = r[t],
				c = n[a];
			return c === u ? c : o[t]
		};
	t._resolveClientServerDisagreement = d
}, function(e, t, r) {
	var n = !1,
		i = r(22),
		o, a, u, c;
	a = /^([^#.[].*?)?(#.+?)?((?:\..+?)*)((?:\[.*?\])*)$/, u = /\s+(?=(?:(?:[^[\]]*[[\]]){2})*[^[\]]*$)/, o = /,+(?=(?:(?:[^[\]]*[[\]]){2})*[^[\]]*$)/, c = /.*@.*;.*/, e.exports = function(e) {
		return {
			_isSubsetOfSuperset: function(t, r) {
				if (!e.isArray(t) || !e.isArray(r)) return !1;
				for (var n = 0; n < t.length; n++)
					if (!this.wildcardMatchesAny(t[n], r)) return !1;
				return !0
			},
			_cssScore: function(e) {
				return !!e.tag + !!e.id + e.classes.length + e.attrs.length
			},
			parseCss: function(t) {
				return t.indexOf('[') < 0 ? e.trim(t).split(/\s+/g) : e.compact(t.split(u).map(e.trim))
			},
			cssToObj: function(t) {
				var r, n, o, u, c, s;
				return s = (c = (null != (u = t.match(a)) ? u : []).slice(1))[0], o = c[1], n = c[2], r = c[3], {
					tag: s,
					id: o,
					classes: n = e(null != n ? n : '').split('.').compact().sort().value(),
					attrs: r = e.compact((null != r ? r : '').split('[')).sort().map((function(e) {
						return '[' + e.replace(/"/g, '')
					})).map(i.convertWildcardSelectorToWildcardText)
				}
			},
			wildcardCanShortcut: function(e, t) {
				return !e || !t || -1 === e.indexOf('*')
			},
			convertWildcardStringToRegex: function(e) {
				return new RegExp('^' + e.replace(/[-[\]{}()+?.,\\^$|#\s]/g, '\\$&').replace(/\*/g, '.*') + '$')
			},
			wildcardMatchesAny: function(t, r) {
				if (r && !e.isArray(r)) return this.wildcardMatch(t, r);
				for (var n = 0; n < r.length; n++)
					if (this.wildcardMatch(t, r[n])) return !0;
				return !1
			},
			wildcardMatch: function(e, t) {
				if (this.wildcardCanShortcut(e, t)) return e === t;
				var r = this.convertWildcardStringToRegex(e);
				return null != t.match(r)
			},
			_parsedHiers: {},
			_parsedCssParts: {},
			_singleHierarchyMatchesSelector: function(t, r) {
				var n, i, o, a, u, s, l, f, d, p, v;
				if ('*' === (t = e.trim(t.replace('**', '*')))) try {
					return c.exec(r) ? 1 : 0
				} catch (e) {
					return 0
				}
				if (!r) return 0;
				for (null == (a = this._parsedCssParts[t]) && ((a = this._parsedCssParts[t] = this.parseCss(t).map(this.cssToObj))._score = e.sum(a.map(this._cssScore)), e.size(this._parsedCssParts) > 1e4 && (this._parsedCssParts = {})), null == (s = this._parsedHiers[r]) && (s = this._parsedHiers[r] = r.split('|').map((function(e) {
						return e.split(';').join('').slice(1)
					})).map(this.cssToObj), e.size(this._parsedHiers) > 1e4 && (this._parsedHiers = {})), p = 0, f = 0, d = s.length; f < d && (u = s[f], p !== a.length); f++) v = !(o = a[p]).tag || this.wildcardMatch(o.tag, u.tag), l = !o.id || this.wildcardMatch(o.id, u.id), i = !o.classes.length || this._isSubsetOfSuperset(o.classes, u.classes), n = !o.attrs.length || this._isSubsetOfSuperset(o.attrs, u.attrs), v && l && i && n && p++;
				return p === a.length ? a._score : 0
			},
			splitComboSelector: function(e) {
				return e.split(o)
			},
			hierarchyMatchesSelector: function(t) {
				return r = this,
					function(n) {
						return t.indexOf(',') < 0 ? r._singleHierarchyMatchesSelector(t, n) : e.max(r.splitComboSelector(t).map((function(e) {
							return r._singleHierarchyMatchesSelector(e, n)
						})))
					};
				var r
			}
		}
	}
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.convertWildcardSelectorToWildcardText = t.buildAttribute = void 0;
	var n = /([\^$*]=)/,
		i = /^\[(\S+)=(.*)\]$/,
		o = /^\[([^=*]*)\]$/,
		a = function(e) {
			return o.test(e)
		},
		u = function(e) {
			return n.test(e)
		},
		c = function(e) {
			var r = n.exec(e);
			if (!r) return e;
			var i = r[0],
				o, a = new RegExp('\\[(\\S+)\\' + i + '(.*)\\]').exec(e);
			if (!a) return e;
			var u = a[1],
				c = a[2];
			switch (i) {
				case '^=':
					return (0, t.buildAttribute)(u, c + "*");
				case '$=':
					return (0, t.buildAttribute)(u, "*" + c);
				case '*=':
					return (0, t.buildAttribute)(u, "*" + c + "*");
				default:
					return e
			}
		},
		s = function(e) {
			return i.test(e)
		},
		l = function(e, t) {
			return 0 === e.length ? null : 0 === t.length ? "[" + e + "=*]" : "[" + e + "=" + t + "]"
		};
	t.buildAttribute = l;
	var f = function(e) {
		var r, n, l;
		try {
			var f = void 0;
			if (a(e)) return (f = o.exec(e)) && null !== (r = (0, t.buildAttribute)(f[1], '*')) && void 0 !== r ? r : e;
			if (u(e)) return null !== (n = c(e)) && void 0 !== n ? n : e;
			if (s(e)) return (f = i.exec(e)) && null !== (l = (0, t.buildAttribute)(f[1], f[2])) && void 0 !== l ? l : e
		} catch (t) {
			return e
		}
		return e
	};
	t.convertWildcardSelectorToWildcardText = f
}, function(e, t, r) {
	var n = !1,
		i = r(2);
	e.exports = function(e, t) {
		function r(t) {
			return e.zipObject(e.chunk(t, 2))
		}

		function n(t) {
			return t && !e.isUndefined(t.z)
		}

		function o(t) {
			return t && e.contains([0, 1], t.z)
		}
		var a = ['app_id', 'target_class', 'domain', 'search_keyword', 'hash', 'path', 'href', 'target_id', 'custom', 'target_tag', 'query', 'referrer', 'title', 'target_text', 'hierarchy', 'utm_source', 'utm_medium', 'utm_term', 'utm_campaign', 'utm_content', 'time', 'sent_time', 'previous_page', 'ubv', 'upv', 'umo', 'srp', 'scw', 'sch', 'rc'],
			u = ['a', 'c', 'd', 'e', 'g', 'h', 'h', 'i', 'k', 'n', 'q', 'r', 't', 'x', 'y', 'us', 'um', 'ut', 'ua', 'uc', 'ts', 'st', 'pr', 'ubv', 'upv', 'umo', 'srp', 'scw', 'sch', 'rc'],
			c = e.zipObject(a, u),
			s = e.zipObject(u, a),
			l = ['domain', 'hash', 'path', 'query', 'time', 'title', 'previous_page', 'sch', 'scw'],
			f = ['domain', 'hash', 'path', 'query', 'time', 'search_keyword', 'referrer', 'utm_source', 'utm_medium', 'utm_term', 'utm_campaign', 'utm_content', 'ubv', 'upv', 'umo', 'srp', 'scw', 'sch'],
			d = function(e, t) {
				return 'h' === e ? t ? 'path' : 'href' : s[e] || e
			},
			p = function(e) {
				return c[e] || e
			},
			v = function(e, t) {
				return d(t, !0)
			},
			h = function(e, t) {
				return d(t, !1)
			},
			g = function(e, t) {
				return p(t)
			},
			_ = function(t) {
				return {
					event_properties: e(t).mapKeys(v).pick(['custom', 'z']).value(),
					session_properties: e(t).mapKeys(v).pick(f).value(),
					pageview_properties: e(t).mapKeys(v).pick(l).value()
				}
			},
			m = function(t) {
				return {
					event_properties: e(t).mapKeys(v).pick(['custom', 'z']).value(),
					session_properties: e(r(t.sp)).mapKeys(v).pick(f).value(),
					pageview_properties: e(t).mapKeys(v).pick(l).value()
				}
			},
			y = function(t, r, n) {
				return {
					event_properties: e.mapKeys(t, h),
					session_properties: e(n).mapKeys(v).pick(f).value(),
					pageview_properties: e(r).mapKeys(v).pick(l).value()
				}
			},
			E = function(t) {
				var r = 0;
				return t && t.event_properties && o(t.event_properties) && (r = t.event_properties.z), {
					event_properties: e.extend({}, t.pageview_properties, t.session_properties, t.event_properties, {
						z: r
					}),
					session_properties: t.session_properties,
					pageview_properties: t.pageview_properties
				}
			},
			S = function(t) {
				var r = e.extend({}, t.pageview_properties, t.event_properties, {
					z: 2
				});
				return r.sp = i.encodePrimitiveKeysAndValuesAsArrayOfStrings(e.mapKeys(e.omit(t.session_properties, 'z'), g)), {
					event_properties: r,
					session_properties: t.session_properties,
					pageview_properties: t.pageview_properties
				}
			};
		return function(a, u, c) {
			var s, l;
			if (!(window.heap && window.heap.config && e.isFunction(window.heap.config.rewrite))) return {
				session_properties: c,
				pageview_properties: u,
				event_properties: a
			};
			try {
				return s = o(a) ? _(a) : n(a) && 2 === a.z ? m(a) : y(a, u, c), e.isArray(s.event_properties.custom) && (s.event_properties.custom = r(s.event_properties.custom)), (l = window.heap.config.rewrite(s)) && l.event_properties && e.isObject(l.event_properties.custom) && (l.event_properties.custom = i.encodePrimitiveKeysAndValuesAsArrayOfStrings(l.event_properties.custom)), n && l && l.event_properties && (l = 2 === a.z ? S(l) : E(l)), e.isObject(l) && (l.event_properties = e.mapKeys(l.event_properties, g), l.session_properties = e.mapKeys(e.omit(l.session_properties, 'z'), g), l.pageview_properties = e.mapKeys(l.pageview_properties, g)), l
			} catch (e) {
				return t('Rewrite encountered an error', e), {
					session_properties: c,
					pageview_properties: u,
					event_properties: a
				}
			}
		}
	}
}, function(e, t, r) {
	var n = !1,
		i = r(6),
		o = r(0),
		a = r(2);
	e.exports = function(e) {
		var t = e._,
			r = e.recordData,
			n = e.recordError,
			u = e.getContainer,
			c = e.updateIdParams,
			s = e.setUserIdCookie,
			l = e.resetIdentity,
			f = e.sendRequest,
			d = e.getConfig;
		return {
			BLACKLISTED_IDENTIFY_TOKENS: ['undefined', 'anonymous', 'true', 'false', 'not_authenticated', 'NaN', 'NA', 'Na', 'unique_identifier', '0', '', '""', '[object Object]', '{{ customer.email }}', '{{ email }}', /^email$/i, /^none$/i, /^unknown$/i, /^guest$/i, /^null$/i],
			isIdentified: function(e) {
				return null != e && !(null == e.identity && !e.isIdentified)
			},
			generateNewContainer: function(e) {
				var t;
				return {
					userId: e(),
					pageviewId: e(),
					sessionId: e(),
					trackerVersion: o.TRACKER_VERSION,
					identity: null
				}
			},
			validIdentifyV4Args: function(e, r) {
				var n = t.isString(e) && '' !== e || t.isFinite(e),
					i = t.isString(r) && '' !== r || null == r;
				return n && i
			},
			_setIdentity: function(e, t, r) {
				r.identity = e, r.identityField = t, r.isIdentified = 1;
				var n = c(r);
				return s(r), n
			},
			handleIdentify: function(e) {
				var i = e.propsOrIdentity,
					o = e.identityField,
					a = e.numArgs,
					u = e.getJsonp,
					c = e.idParams,
					isIDv4Enabled = e.isIDv4Enabled,
					s = e.addUserProperties,
					l = e.retryCount || 0;
				if (l > 2) n('handleIdentify retry count exceeded');
				else {
					var f = {
							identityObject: i,
							getJsonp: u
						},
						d = {
							identity: i,
							idParams: c
						},
						p = {
							identity: i,
							identityField: o,
							idParams: c
						};
					if (1 === a && t.isObject(i)) this.handleIdentifyV1(f);
					else if (1 !== a || !t.isString(i) && !t.isFinite(i) || '' === i)
						if (2 === a && this.validIdentifyV4Args(i, o)) {
							if (isIDv4Enabled) r('IDv4 called - App is whitelisted. Using IDv4'), this.handleIdentifyV4(p);
							else if (r('IDv4 called - App is not whitelisted. Using IDv3'), this.handleIdentifyV3(d), o) {
								var v = {};
								v[o] = i, s(v)
							}
						} else;
					else this.handleIdentifyV3(d, l)
				}
			},
			handleIdentifyV1: function(e) {
				var r = e.identityObject,
					o = e.getJsonp,
					l = d(),
					f = a.requestStringBuilder(!1, n);
				try {
					if (this._isIdentifyV1CallObviouslyWrong(r)) {
						var p = t.isUndefined(r.email) ? r.handle : r.email;
						return void this._handleObviouslyWrongIdentifyCall(p)
					}
				} catch (e) {
					this._recordObviouslyWrongIdentifyFailure(e)
				}
				var v = i.truncateKeysAndValuesOfObject(r, l.maxAttrLength);
				v = i.truncateKeysToSingleCharacter(v, ['handle', 'email']), f.addSingleEventProps(v);
				var h = f.build(!1),
					g = this;
				o(l.identifyV1Url, h, (function(e) {
					if (e && e.uid) {
						var t = u();
						t.userId = e.uid, c(t), s(t), g._setIdentity(null, null, t)
					}
				}))
			},
			handleIdentifyV3: function(e, t) {
				var r = e.identity,
					o = e.idParams,
					c = t || 0,
					s = d(),
					p = r + '';
				try {
					if (this._isObviouslyWrongIdentifyCall(p)) return void this._handleObviouslyWrongIdentifyCall(p)
				} catch (e) {
					this._recordObviouslyWrongIdentifyFailure(e)
				}
				var v = i.truncate(p, s.maxAttrLength),
					h = u();
				if (this.isIdentified(h) && h.identity != v && '' != v) l(), window.heap.identify(v, [c + 1]);
				else if ('' != v) {
					o = this._setIdentity(v, null, h);
					var g = a.requestStringBuilder(!1, n);
					g.addSingleEventProps({
						z: '0'
					});
					var _ = g.build(!1);
					f(_, o, s.identifyV3Url)
				}
			},
			handleIdentifyV4: function(e) {
				var t = e.identity,
					r = e.identityField,
					o = e.idParams,
					c = d(),
					s = t + '';
				try {
					if (this._isObviouslyWrongIdentifyCall(s)) return void this._handleObviouslyWrongIdentifyCall(s)
				} catch (e) {
					this._recordObviouslyWrongIdentifyFailure(e)
				}
				r = null == r ? '' : r + '';
				var l = i.truncate(s, c.maxAttrLength),
					p = i.truncate(r, c.maxAttrLength),
					v = u();
				o = this._setIdentity(l, p, v);
				var h = a.requestStringBuilder(!1, n);
				h.addSingleEventProps({
					z: '0'
				}), e = h.build(!1), f(e, o, c.identifyV4Url)
			},
			_recordObviouslyWrongIdentifyFailure: function(e) {
				n('Failed to check for obviously wrong identify call', e)
			},
			_isObviouslyWrongIdentifyCall: function(e, r) {
				var n = e + '',
					i;
				t.isUndefined(r) && (r = this.BLACKLISTED_IDENTIFY_TOKENS);
				for (var o = 0; o < r.length; o++) {
					if ((i = r[o]).constructor === RegExp && i.test(n)) return !0;
					if (i.constructor === String && i === n) return !0
				}
				return !1
			},
			_handleObviouslyWrongIdentifyCall: function(e) {
				r('Obviously wrong identify call made', {
					identityString: e
				})
			},
			_isIdentifyV1CallObviouslyWrong: function(e, r) {
				return !t.isUndefined(e.handle) && this._isObviouslyWrongIdentifyCall(e.handle, r) || !t.isUndefined(e.email) && this._isObviouslyWrongIdentifyCall(e.email, r)
			}
		}
	}
}, function(e, t, r) {
	var n = !1,
		i = r(0),
		o = i.AUTH_TOKENS_TO_REDACT.map((function(e) {
			return new RegExp(e + '(=|%3D).*?(?=%26|&|$)', 'gi')
		}));
	e.exports.redactAuthTokens = function(e) {
		if (!e) return e;
		var t = e;
		return o.forEach((function(e) {
			t = t.replace(e, (function(e) {
				var t = -1 === e.indexOf('=') ? '%3D' : '=',
					r;
				return e.split(t)[0] + t + i.REDACTED_VALUE
			}))
		})), t
	}
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = r(3);
	e.exports = function(e, t) {
		var r = function() {
				try {
					return window.self !== window.top
				} catch (e) {
					return !1
				}
			},
			i;
		return {
			sendSampledInlineFrameTelemetry: function() {
				var i = e().userConfig.secureCookie;
				r() ? (0, n.sample)(100, t, ['inline frame', i]) : (0, n.sample)(1e5, t, ['non-inline frame', i])
			}
		}
	}
}, function(e, t, r) {
	"use strict";
	var n = this && this.__assign || function() {
		return (n = Object.assign || function(e) {
			for (var t, r = 1, n = arguments.length; r < n; r++)
				for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e
		}).apply(this, arguments)
	};
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.handleCustomTrack = t._getTrackEventSource = t._isSupportedSource = t._receiveTrackState = t.CLIENT_SIDE_SOURCES = void 0;
	var i = r(5),
		o = r(1),
		a = r(4),
		u = r(2),
		c = r(0),
		s = r(10),
		l = 'appcues',
		f = 'chameleon',
		d = 'segment';
	t.CLIENT_SIDE_SOURCES = [l, f, d];
	var p = function(e, t, r) {
		var n, i;
		if (!(0, o.isString)(e)) throw i = new Error('Passed non string to custom track call');
		var u = (0, o.isObjectOrFunction)(t) ? (0, a.getPrimitiveValuedObject)(t) : {},
			i;
		if (r && !(0, o.isString)(r)) throw i = new Error('Passed non string for source to custom track call');
		return {
			validatedTrackEventName: e,
			validatedTrackEventSource: n = r,
			validatedTrackEventProps: u
		}
	};
	t._receiveTrackState = p;
	var v = function(e, t) {
			return {
				props: (0, s.addSRParamToProps)(e),
				customProps: t,
				type: c.MessageType.ManualTrack
			}
		},
		h = function(e, t, r) {
			return {
				props: Object.assign({
					source: r
				}, e),
				sourceProps: Object.assign({}, t),
				type: c.MessageType.SourceTrack
			}
		},
		g = function(e, t) {
			return {
				id: (0, i.generateId)(),
				k: (0, u.encodePrimitiveKeysAndValuesAsArrayOfStrings)(n({}, e)),
				t: t,
				ts: (new Date).getTime()
			}
		},
		_ = function(e) {
			return !!e && t.CLIENT_SIDE_SOURCES.indexOf(e) > -1
		};
	t._isSupportedSource = _;
	var m = function(e, t) {
		return -1 !== e.toLocaleLowerCase().indexOf(f) ? f : t
	};
	t._getTrackEventSource = m;
	var y = function(e, r, n, i) {
		var o = e.recordError,
			a = e.Buffer,
			u = e.globalEventProperties,
			c;
		try {
			c = (0, t._receiveTrackState)(r, n, i)
		} catch (e) {
			return void o(e.message, e)
		}
		var s = c.validatedTrackEventName,
			l = c.validatedTrackEventProps,
			f = (0, t._getTrackEventSource)(s, c.validatedTrackEventSource),
			d = g(u, s),
			p = (0, t._isSupportedSource)(f) ? h(d, l, f) : v(d, l);
		a.queueEventMessage(p)
	};
	t.handleCustomTrack = y
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.replaceAllOccurrences = t._escapeRegExp = void 0;
	var n = function(e) {
		return e.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&')
	};
	t._escapeRegExp = n;
	var i = function(e) {
		return e.originalText.replace(new RegExp((0, t._escapeRegExp)(e.substringToReplace), 'g'), e.replacementText)
	};
	t.replaceAllOccurrences = i
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.wrapper = void 0;
	var n = r(3),
		i = r(11),
		o = r(1),
		a = 1e5,
		u = function(e, t) {
			var r = function() {
					var e = (0, i.makeHeapIgnoreSelector)(),
						t;
					return !!document.querySelector(e)
				},
				a = function() {
					var e, r = t();
					return (0, o.isFunction)(null === (e = null == r ? void 0 : r.userConfig) || void 0 === e ? void 0 : e.rewrite)
				},
				u = function() {
					var e, r = t();
					return !!(null === (e = null == r ? void 0 : r.userConfig) || void 0 === e ? void 0 : e.disableTextCapture)
				},
				c = function() {
					r() && (0, n.sample)(1e5, e, ['heap-ignore-present', 1])
				},
				s = function() {
					a() && (0, n.sample)(1e5, e, ['rewrite-implemented', 1])
				},
				l = function() {
					(0, i.isTitleRedacted)() && (0, n.sample)(1e5, e, ['page-title-redacted', 1])
				},
				f = function() {
					var t = u().toString();
					(0, n.sample)(1e5, e, ['disable-text-capture', t])
				},
				d;
			return {
				sendRewriteAndHeapIgnoreTelemetry: function() {
					s(), c(), l(), f()
				}
			}
		};
	t.wrapper = u
}, function(e, t, r) {
	"use strict";
	var n = this && this.__values || function(e) {
		var t = "function" == typeof Symbol && Symbol.iterator,
			r = t && e[t],
			n = 0;
		if (r) return r.call(e);
		if (e && "number" == typeof e.length) return {
			next: function() {
				return e && n >= e.length && (e = void 0), {
					value: e && e[n++],
					done: !e
				}
			}
		};
		throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
	};
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.wrapper = t.getDocument = void 0;
	var i = function() {
		return document
	};
	t.getDocument = i;
	var o = function(e) {
		var r = function(e) {
				return e.validity.valid ? e.value : null
			},
			i = function(e) {
				var r, i, o = "input[type=checkbox][name=" + e.name + "]",
					a = (0, t.getDocument)().querySelectorAll(o),
					u = Array.from(a);
				if (u.length > 1) {
					var c = [];
					try {
						for (var s = n(u), l = s.next(); !l.done; l = s.next()) {
							var f = l.value;
							f instanceof HTMLInputElement && f.checked && c.push(f.value)
						}
					} catch (e) {
						r = {
							error: e
						}
					} finally {
						try {
							l && !l.done && (i = s.return) && i.call(s)
						} finally {
							if (r) throw r.error
						}
					}
					return c.join(',')
				}
				return e.checked ? 'true' : 'false'
			},
			o = function(e) {
				if ('' !== e.id) {
					var r = (0, t.getDocument)().querySelector("label#" + e.id),
						n = null == r ? void 0 : r.textContent;
					if (n) return n
				}
				return e.value
			},
			a = function(e) {
				for (var r = (0, t.getDocument)().querySelectorAll("input[type=radio][name=" + e.name + "]"), n = 0; n < r.length; n++) {
					var i = r[n];
					if (i.checked) return o(i)
				}
				return e.checked ? 'true' : 'false'
			},
			u = function(e) {
				var t = e.value;
				return t.length > 64 ? t.slice(0, 64) : t
			},
			c = function(e) {
				var t = e.options[e.selectedIndex],
					r;
				return t.value ? new RegExp(/^[^\w]/).test(t.value) && t.value === t.innerHTML ? null : t.value : null
			},
			s = function(e) {
				return e.value
			},
			l = function(e) {
				switch (e.tagName.toLowerCase()) {
					case 'input':
						var t = e;
						switch (t.type) {
							case 'date':
							case 'email':
								return r(t);
							case 'password':
								return '****';
							case 'checkbox':
								return i(t);
							case 'radio':
								return a(t);
							default:
								return s(t)
						}
					case 'textarea':
						var n;
						return u(e);
					case 'select':
						var o;
						return c(e);
					default:
						return 'N/A'
				}
			};
		return {
			getValidatedInputValue: r,
			getCheckboxInputValue: i,
			getRadioInputValue: a,
			getTextAreaValue: u,
			getSelectElementValue: c,
			getDefaultInputValue: s,
			getInputElementValue: l
		}
	};
	t.wrapper = o
}, function(e, t, r) {
	"use strict";
	var n;
	Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.isSameSiteNoneIncompatible = t.shouldSendSameSiteNone = t.getOptimalSameSiteCookieValue = t.getUserAgent = t.SameSiteValue = void 0,
		function(e) {
			e.None = "None", e.Lax = "Lax"
		}(n = t.SameSiteValue || (t.SameSiteValue = {}));
	var i = function() {
		return navigator.userAgent
	};
	t.getUserAgent = i;
	var o = function(e) {
		return (0, t.isSameSiteNoneIncompatible)() ? null : e ? n.None : n.Lax
	};
	t.getOptimalSameSiteCookieValue = o;
	var a = function() {
		return !(0, t.isSameSiteNoneIncompatible)()
	};
	t.shouldSendSameSiteNone = a;
	var u = function() {
		return c() || s()
	};
	t.isSameSiteNoneIncompatible = u;
	var c = function() {
			return l(12) || f(10, 14) && (d() || p())
		},
		s = function() {
			return g() ? !_(12, 13, 2) : v() && h(51) && !h(67)
		},
		l = function(e) {
			var r = /\(iP.+; CPU .*OS (\d+)[_\d]*.*\) AppleWebKit\//,
				n = (0, t.getUserAgent)().match(r),
				i;
			return !!n && parseInt(n[0], 10) === e
		},
		f = function(e, r) {
			var n = /\(Macintosh;.*Mac OS X (\d+)_(\d+)[_\d]*.*\) AppleWebKit\//,
				i = (0, t.getUserAgent)().match(n);
			if (!i) return !1;
			var o = parseInt(i[0], 10),
				a = parseInt(i[1], 10);
			return o === e && a === r
		},
		d = function() {
			var e;
			return /Version\/.* Safari/.test((0, t.getUserAgent)()) && !v()
		},
		p = function() {
			var e;
			return /^Mozilla\/[.\d]+ \(Macintosh;.*Mac OS X [_\d]+\) AppleWebKit\/[.\d]+ \(KHTML, like Gecko\)$/.test((0, t.getUserAgent)())
		},
		v = function() {
			var e;
			return /Chrom(e|ium)/.test((0, t.getUserAgent)())
		},
		h = function(e) {
			var r = /Chrom[^ /]+\/(\d+)[.\d]* /,
				n = (0, t.getUserAgent)().match(r),
				i = 0;
			return n && (i = parseInt(n[0], 10)), i >= e
		},
		g = function() {
			var e;
			return /UCBrowser\//.test((0, t.getUserAgent)())
		},
		_ = function(e, r, n) {
			var i = /UCBrowser\/(\d+)\.(\d+)\.(\d+)[.\d]* /,
				o = (0, t.getUserAgent)().match(i);
			if (!o) return !1;
			if (0 === o.length) return !1;
			var a = parseInt(o[0], 10),
				u = parseInt(o[1], 10),
				c = parseInt(o[2], 10);
			return a !== e ? a > e : u !== r ? u > r : c >= n
		}
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.getHighEntropyValuesAsParams = void 0;
	var n = function() {
		var e, t = ['fullVersionList', 'platformVersion', 'model'];
		return null === (e = navigator.userAgentData) || void 0 === e ? void 0 : e.getHighEntropyValues(t).then((function(e) {
			var t, r = e.model,
				n = e.platformVersion,
				i = '',
				o = /Chromium/.test(navigator.userAgent) ? 'Chromium' : 'Chrome';
			return null === (t = e.fullVersionList) || void 0 === t || t.forEach((function(e) {
				e.brand.indexOf(o) > -1 && (i = e.version)
			})), {
				ubv: i,
				upv: n,
				umo: r
			}
		}))
	};
	t.getHighEntropyValuesAsParams = n
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.wrapper = void 0;
	var n = r(12),
		i = function(e) {
			var t = e.getConfig,
				r = e.recordError,
				i = (0, n.wrapper)({
					documentAlias: document,
					getConfig: t,
					recordError: r
				}),
				o = function() {
					var e;
					return !!a()
				},
				a = function() {
					var e = i.getCookieName('wv_id'),
						t = i.getCookie(e);
					if (!t) return null;
					try {
						var r = JSON.parse(t);
						return u(r) ? r : null
					} catch (e) {
						return null
					}
				},
				u = function(e) {
					var t, r;
					return 'sessionId' in e && 'userId' in e && 'identity' in e && ('string' == typeof e.sessionId && !isNaN(+e.sessionId) && 'string' == typeof e.userId && !isNaN(+e.userId) && 'string' == typeof e.identity)
				},
				c;
			return {
				isHeapHandledWebview: o,
				getWvIdContents: a,
				extendSessionHandler: function(e, t) {
					var r, n, i, o, a = {
						type: 'heapjs-extend-session',
						sessionId: t,
						expirationDate: e
					};
					null === (r = window.HeapAndroidBridge) || void 0 === r || r.postMessage(JSON.stringify(a)), null === (o = null === (i = null === (n = window.webkit) || void 0 === n ? void 0 : n.messageHandlers) || void 0 === i ? void 0 : i.HeapSwiftBridge) || void 0 === o || o.postMessage(a)
				}
			}
		};
	t.wrapper = i
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.isRageClick = t.resetRageClicks = void 0;
	var n = 5,
		i = 100,
		o = 5,
		a = 3,
		u = [],
		c = function(e, t) {
			var r = u.length - 1,
				n;
			if ((u[r].time.getTime() - u[r - e + 1].time.getTime()) / 1e3 > t) return !1;
			for (var i = 0, o = r - e + 1; o < r; o++)
				for (var a = o + 1; a <= r; a++) {
					var c = Math.round(Math.sqrt(Math.pow(u[o].coordinates.X - u[a].coordinates.X, 2) + Math.pow(u[o].coordinates.Y - u[a].coordinates.Y, 2)));
					if (c > i && (i = c), c > 100) return !1
				}
			return !0
		},
		s = function() {
			u.shift()
		},
		l = function() {
			u = []
		};
	t.resetRageClicks = l;
	var f = function(e) {
		if (u.push({
				coordinates: e,
				time: new Date
			}), u.length > 5 && u.splice(0, u.length - 5), u.length >= 5) {
			var t = c(5, 3);
			return s(), t
		}
		return !1
	};
	t.isRageClick = f
}]);
