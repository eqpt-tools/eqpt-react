(global.webpackChunk_N_E=global.webpackChunk_N_E||[]).push([[218],{3268:(e,t)=>{"use strict";function o(e,t,o,l){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=o,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},422:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(5296).Z,r=o(5708).Z,n=l(o(2735)),u=o(6968),a=o(8685),f=o(6515),c=o(4308),i=o(1017),s=o(8227),d=o(3268),p=o(8624);let h=new Set;function v(e,t,o,l){if(u.isLocalURL(t)){if(!l.bypassPrefetchedCheck){let r=void 0!==l.locale?l.locale:"locale"in e?e.locale:void 0,n=t+"%"+o+"%"+r;if(h.has(n))return;h.add(n)}Promise.resolve(e.prefetch(t,o,l)).catch(e=>{})}}function y(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function b(e,t,o,l,r,a,f,c,i,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(y(e)||!u.isLocalURL(o)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](o,l,{shallow:a,locale:c,scroll:f}):t[r?"replace":"push"](l||o,{forceOptimisticNavigation:!s})};i?n.default.startTransition(h):h()}function g(e){return"string"==typeof e?e:a.formatUrl(e)}let _=n.default.forwardRef(function(e,t){let o,l;let{href:a,as:h,children:y,prefetch:_,passHref:m,replace:C,shallow:M,scroll:j,locale:k,onClick:E,onMouseEnter:O,onTouchStart:P,legacyBehavior:x=!1}=e,L=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=y,x&&("string"==typeof o||"number"==typeof o)&&(o=n.default.createElement("a",null,o));let w=!1!==_,S=n.default.useContext(c.RouterContext),I=n.default.useContext(i.AppRouterContext),R=null!=S?S:I,T=!S,{href:D,as:K}=n.default.useMemo(()=>{if(!S){let e=g(a);return{href:e,as:h?g(h):e}}let[t,o]=u.resolveHref(S,a,!0);return{href:t,as:h?u.resolveHref(S,h):o||t}},[S,a,h]),N=n.default.useRef(D),U=n.default.useRef(K);x&&(l=n.default.Children.only(o));let H=x?l&&"object"==typeof l&&l.ref:t,[A,B,Z]=s.useIntersection({rootMargin:"200px"}),q=n.default.useCallback(e=>{(U.current!==K||N.current!==D)&&(Z(),U.current=K,N.current=D),A(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[K,H,D,Z,A]);n.default.useEffect(()=>{R&&B&&w&&v(R,D,K,{locale:k})},[K,D,B,k,w,null==S?void 0:S.locale,R]);let z={ref:q,onClick(e){x||"function"!=typeof E||E(e),x&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),R&&!e.defaultPrevented&&b(e,R,D,K,C,M,j,k,T,w)},onMouseEnter(e){x||"function"!=typeof O||O(e),x&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),R&&(w||!T)&&v(R,D,K,{locale:k,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){x||"function"!=typeof P||P(e),x&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),R&&(w||!T)&&v(R,D,K,{locale:k,priority:!0,bypassPrefetchedCheck:!0})}};if(!x||m||"a"===l.type&&!("href"in l.props)){let F=void 0!==k?k:null==S?void 0:S.locale,G=(null==S?void 0:S.isLocaleDomain)&&d.getDomainLocale(K,F,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);z.href=G||p.addBasePath(f.addLocale(K,F,null==S?void 0:S.defaultLocale))}return x?n.default.cloneElement(l,z):n.default.createElement("a",Object.assign({},L,z),o)});var m=_;t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8227:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=i;var l=o(2735),r=o(2041);let n="function"==typeof IntersectionObserver,u=new Map,a=[];function f(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},l=a.find(e=>e.root===o.root&&e.margin===o.margin);if(l&&(t=u.get(l)))return t;let r=new Map,n=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:n,elements:r},a.push(o),u.set(o,t),t}function c(e,t,o){let{id:l,observer:r,elements:n}=f(o);return n.set(e,t),r.observe(e),function(){if(n.delete(e),r.unobserve(e),0===n.size){r.disconnect(),u.delete(l);let t=a.findIndex(e=>e.root===l.root&&e.margin===l.margin);t>-1&&a.splice(t,1)}}}function i(e){let{rootRef:t,rootMargin:o,disabled:u}=e,a=u||!n,[f,i]=l.useState(!1),[s,d]=l.useState(null);l.useEffect(()=>{if(n){if(!a&&!f&&s&&s.tagName){let e=c(s,e=>e&&i(e),{root:null==t?void 0:t.current,rootMargin:o});return e}}else if(!f){let l=r.requestIdleCallback(()=>i(!0));return()=>r.cancelIdleCallback(l)}},[s,a,o,t,f]);let p=l.useCallback(()=>{i(!1)},[]);return[d,f,p]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9218:(e,t,o)=>{e.exports=o(422)}}]);