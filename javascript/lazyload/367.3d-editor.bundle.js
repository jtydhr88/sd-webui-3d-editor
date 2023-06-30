"use strict";(self.webpackChunksd_webui_3d_editor=self.webpackChunksd_webui_3d_editor||[]).push([[367],{1367:function(t,e,n){n.r(e),n.d(e,{SVGLoader:function(){return i}});var r=n(9477);const o=r.KI_;class i extends r.aNw{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,o){const i=this,s=new r.hH6(i.manager);s.setPath(i.path),s.setRequestHeader(i.requestHeader),s.setWithCredentials(i.withCredentials),s.load(t,(function(n){try{e(i.parse(n))}catch(e){o?o(e):console.error(e),i.manager.itemError(t)}}),n,o)}parse(t){const e=this;function n(t,e,n,r,o,s,a,c){if(0==e||0==n)return void t.lineTo(c.x,c.y);r=r*Math.PI/180,e=Math.abs(e),n=Math.abs(n);const l=(a.x-c.x)/2,u=(a.y-c.y)/2,y=Math.cos(r)*l+Math.sin(r)*u,f=-Math.sin(r)*l+Math.cos(r)*u;let h=e*e,p=n*n;const d=y*y,x=f*f,b=d/h+x/p;if(b>1){const t=Math.sqrt(b);h=(e*=t)*e,p=(n*=t)*n}const g=h*x+p*d,m=(h*p-g)/g;let M=Math.sqrt(Math.max(0,m));o===s&&(M=-M);const k=M*e*f/n,w=-M*n*y/e,A=Math.cos(r)*k-Math.sin(r)*w+(a.x+c.x)/2,v=Math.sin(r)*k+Math.cos(r)*w+(a.y+c.y)/2,T=i(1,0,(y-k)/e,(f-w)/n),P=i((y-k)/e,(f-w)/n,(-y-k)/e,(-f-w)/n)%(2*Math.PI);t.currentPath.absellipse(A,v,e,n,T,T+P,0===s,r)}function i(t,e,n,r){const o=t*n+e*r,i=Math.sqrt(t*t+e*e)*Math.sqrt(n*n+r*r);let s=Math.acos(Math.max(-1,Math.min(1,o/i)));return t*r-e*n<0&&(s=-s),s}function s(t,e){e=Object.assign({},e);let n={};if(t.hasAttribute("class")){const e=t.getAttribute("class").split(/\s/).filter(Boolean).map((t=>t.trim()));for(let t=0;t<e.length;t++)n=Object.assign(n,b["."+e[t]])}function r(r,o,i){void 0===i&&(i=function(t){return t.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),t}),t.hasAttribute(r)&&(e[o]=i(t.getAttribute(r))),n[r]&&(e[o]=i(n[r])),t.style&&""!==t.style[r]&&(e[o]=i(t.style[r]))}function o(t){return Math.max(0,Math.min(1,y(t)))}function i(t){return Math.max(0,y(t))}return t.hasAttribute("id")&&(n=Object.assign(n,b["#"+t.getAttribute("id")])),r("fill","fill"),r("fill-opacity","fillOpacity",o),r("fill-rule","fillRule"),r("opacity","opacity",o),r("stroke","stroke"),r("stroke-opacity","strokeOpacity",o),r("stroke-width","strokeWidth",i),r("stroke-linejoin","strokeLineJoin"),r("stroke-linecap","strokeLineCap"),r("stroke-miterlimit","strokeMiterLimit",i),r("visibility","visibility"),e}function a(t,e){return t-(e-t)}function c(t,e,n){if("string"!=typeof t)throw new TypeError("Invalid input: "+typeof t);const r={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/};let o=0,i=!0,s="",a="";const c=[];function l(t,e,n){const r=new SyntaxError('Unexpected character "'+t+'" at index '+e+".");throw r.partial=n,r}function u(){""!==s&&(""===a?c.push(Number(s)):c.push(Number(s)*Math.pow(10,Number(a)))),s="",a=""}let y;const f=t.length;for(let h=0;h<f;h++)if(y=t[h],Array.isArray(e)&&e.includes(c.length%n)&&r.FLAGS.test(y))o=1,s=y,u();else{if(0===o){if(r.WHITESPACE.test(y))continue;if(r.DIGIT.test(y)||r.SIGN.test(y)){o=1,s=y;continue}if(r.POINT.test(y)){o=2,s=y;continue}r.COMMA.test(y)&&(i&&l(y,h,c),i=!0)}if(1===o){if(r.DIGIT.test(y)){s+=y;continue}if(r.POINT.test(y)){s+=y,o=2;continue}if(r.EXP.test(y)){o=3;continue}r.SIGN.test(y)&&1===s.length&&r.SIGN.test(s[0])&&l(y,h,c)}if(2===o){if(r.DIGIT.test(y)){s+=y;continue}if(r.EXP.test(y)){o=3;continue}r.POINT.test(y)&&"."===s[s.length-1]&&l(y,h,c)}if(3===o){if(r.DIGIT.test(y)){a+=y;continue}if(r.SIGN.test(y)){if(""===a){a+=y;continue}1===a.length&&r.SIGN.test(a)&&l(y,h,c)}}r.WHITESPACE.test(y)?(u(),o=0,i=!1):r.COMMA.test(y)?(u(),o=0,i=!0):r.SIGN.test(y)?(u(),o=1,s=y):r.POINT.test(y)?(u(),o=2,s=y):l(y,h,c)}return u(),c}const l=["mm","cm","in","pt","pc","px"],u={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:12,pc:1,px:-1},px:{px:1}};function y(t){let n,r="px";if("string"==typeof t||t instanceof String)for(let e=0,n=l.length;e<n;e++){const n=l[e];if(t.endsWith(n)){r=n,t=t.substring(0,t.length-n.length);break}}return"px"===r&&"px"!==e.defaultUnit?n=u.in[e.defaultUnit]/e.defaultDPI:(n=u[r][e.defaultUnit],n<0&&(n=u[r].in*e.defaultDPI)),n*parseFloat(t)}function f(t){const e=t.elements;return e[0]*e[4]-e[1]*e[3]<0}function h(t){const e=t.elements,n=e[0]*e[3]+e[1]*e[4];if(0===n)return!1;const r=p(t),o=d(t);return Math.abs(n/(r*o))>Number.EPSILON}function p(t){const e=t.elements;return Math.sqrt(e[0]*e[0]+e[1]*e[1])}function d(t){const e=t.elements;return Math.sqrt(e[3]*e[3]+e[4]*e[4])}const x=[],b={},g=[],m=new r.Vkp,M=new r.Vkp,k=new r.Vkp,w=new r.Vkp,A=new r.FM8,v=new r.Pa4,T=new r.Vkp,P=(new DOMParser).parseFromString(t,"image/svg+xml");return function t(e,i){if(1!==e.nodeType)return;const l=function(t){if(!(t.hasAttribute("transform")||"use"===t.nodeName&&(t.hasAttribute("x")||t.hasAttribute("y"))))return null;const e=function(t){const e=new r.Vkp,n=m;if("use"===t.nodeName&&(t.hasAttribute("x")||t.hasAttribute("y"))){const n=y(t.getAttribute("x")),r=y(t.getAttribute("y"));e.translate(n,r)}if(t.hasAttribute("transform")){const r=t.getAttribute("transform").split(")");for(let t=r.length-1;t>=0;t--){const o=r[t].trim();if(""===o)continue;const i=o.indexOf("("),s=o.length;if(i>0&&i<s){const t=o.slice(0,i),e=c(o.slice(i+1));switch(n.identity(),t){case"translate":if(e.length>=1){const t=e[0];let r=0;e.length>=2&&(r=e[1]),n.translate(t,r)}break;case"rotate":if(e.length>=1){let t=0,r=0,o=0;t=e[0]*Math.PI/180,e.length>=3&&(r=e[1],o=e[2]),M.makeTranslation(-r,-o),k.makeRotation(t),w.multiplyMatrices(k,M),M.makeTranslation(r,o),n.multiplyMatrices(M,w)}break;case"scale":if(e.length>=1){const t=e[0];let r=t;e.length>=2&&(r=e[1]),n.scale(t,r)}break;case"skewX":1===e.length&&n.set(1,Math.tan(e[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":1===e.length&&n.set(1,0,0,Math.tan(e[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":6===e.length&&n.set(e[0],e[2],e[4],e[1],e[3],e[5],0,0,1)}}e.premultiply(n)}}return e}(t);return g.length>0&&e.premultiply(g[g.length-1]),T.copy(e),g.push(e),e}(e);let u=!1,P=null;switch(e.nodeName){case"svg":case"g":i=s(e,i);break;case"style":!function(t){if(t.sheet&&t.sheet.cssRules&&t.sheet.cssRules.length)for(let e=0;e<t.sheet.cssRules.length;e++){const n=t.sheet.cssRules[e];if(1!==n.type)continue;const r=n.selectorText.split(/,/gm).filter(Boolean).map((t=>t.trim()));for(let t=0;t<r.length;t++){const e=Object.fromEntries(Object.entries(n.style).filter((([,t])=>""!==t)));b[r[t]]=Object.assign(b[r[t]]||{},e)}}}(e);break;case"path":i=s(e,i),e.hasAttribute("d")&&(P=function(t){const e=new r.T_1,o=new r.FM8,i=new r.FM8,s=new r.FM8;let l=!0,u=!1;const y=t.getAttribute("d");if(""===y||"none"===y)return null;const f=y.match(/[a-df-z][^a-df-z]*/gi);for(let t=0,r=f.length;t<r;t++){const r=f[t],y=r.charAt(0),h=r.slice(1).trim();let p;switch(!0===l&&(u=!0,l=!1),y){case"M":p=c(h);for(let t=0,n=p.length;t<n;t+=2)o.x=p[t+0],o.y=p[t+1],i.x=o.x,i.y=o.y,0===t?e.moveTo(o.x,o.y):e.lineTo(o.x,o.y),0===t&&s.copy(o);break;case"H":p=c(h);for(let t=0,n=p.length;t<n;t++)o.x=p[t],i.x=o.x,i.y=o.y,e.lineTo(o.x,o.y),0===t&&!0===u&&s.copy(o);break;case"V":p=c(h);for(let t=0,n=p.length;t<n;t++)o.y=p[t],i.x=o.x,i.y=o.y,e.lineTo(o.x,o.y),0===t&&!0===u&&s.copy(o);break;case"L":p=c(h);for(let t=0,n=p.length;t<n;t+=2)o.x=p[t+0],o.y=p[t+1],i.x=o.x,i.y=o.y,e.lineTo(o.x,o.y),0===t&&!0===u&&s.copy(o);break;case"C":p=c(h);for(let t=0,n=p.length;t<n;t+=6)e.bezierCurveTo(p[t+0],p[t+1],p[t+2],p[t+3],p[t+4],p[t+5]),i.x=p[t+2],i.y=p[t+3],o.x=p[t+4],o.y=p[t+5],0===t&&!0===u&&s.copy(o);break;case"S":p=c(h);for(let t=0,n=p.length;t<n;t+=4)e.bezierCurveTo(a(o.x,i.x),a(o.y,i.y),p[t+0],p[t+1],p[t+2],p[t+3]),i.x=p[t+0],i.y=p[t+1],o.x=p[t+2],o.y=p[t+3],0===t&&!0===u&&s.copy(o);break;case"Q":p=c(h);for(let t=0,n=p.length;t<n;t+=4)e.quadraticCurveTo(p[t+0],p[t+1],p[t+2],p[t+3]),i.x=p[t+0],i.y=p[t+1],o.x=p[t+2],o.y=p[t+3],0===t&&!0===u&&s.copy(o);break;case"T":p=c(h);for(let t=0,n=p.length;t<n;t+=2){const n=a(o.x,i.x),r=a(o.y,i.y);e.quadraticCurveTo(n,r,p[t+0],p[t+1]),i.x=n,i.y=r,o.x=p[t+0],o.y=p[t+1],0===t&&!0===u&&s.copy(o)}break;case"A":p=c(h,[3,4],7);for(let t=0,r=p.length;t<r;t+=7){if(p[t+5]==o.x&&p[t+6]==o.y)continue;const r=o.clone();o.x=p[t+5],o.y=p[t+6],i.x=o.x,i.y=o.y,n(e,p[t],p[t+1],p[t+2],p[t+3],p[t+4],r,o),0===t&&!0===u&&s.copy(o)}break;case"m":p=c(h);for(let t=0,n=p.length;t<n;t+=2)o.x+=p[t+0],o.y+=p[t+1],i.x=o.x,i.y=o.y,0===t?e.moveTo(o.x,o.y):e.lineTo(o.x,o.y),0===t&&s.copy(o);break;case"h":p=c(h);for(let t=0,n=p.length;t<n;t++)o.x+=p[t],i.x=o.x,i.y=o.y,e.lineTo(o.x,o.y),0===t&&!0===u&&s.copy(o);break;case"v":p=c(h);for(let t=0,n=p.length;t<n;t++)o.y+=p[t],i.x=o.x,i.y=o.y,e.lineTo(o.x,o.y),0===t&&!0===u&&s.copy(o);break;case"l":p=c(h);for(let t=0,n=p.length;t<n;t+=2)o.x+=p[t+0],o.y+=p[t+1],i.x=o.x,i.y=o.y,e.lineTo(o.x,o.y),0===t&&!0===u&&s.copy(o);break;case"c":p=c(h);for(let t=0,n=p.length;t<n;t+=6)e.bezierCurveTo(o.x+p[t+0],o.y+p[t+1],o.x+p[t+2],o.y+p[t+3],o.x+p[t+4],o.y+p[t+5]),i.x=o.x+p[t+2],i.y=o.y+p[t+3],o.x+=p[t+4],o.y+=p[t+5],0===t&&!0===u&&s.copy(o);break;case"s":p=c(h);for(let t=0,n=p.length;t<n;t+=4)e.bezierCurveTo(a(o.x,i.x),a(o.y,i.y),o.x+p[t+0],o.y+p[t+1],o.x+p[t+2],o.y+p[t+3]),i.x=o.x+p[t+0],i.y=o.y+p[t+1],o.x+=p[t+2],o.y+=p[t+3],0===t&&!0===u&&s.copy(o);break;case"q":p=c(h);for(let t=0,n=p.length;t<n;t+=4)e.quadraticCurveTo(o.x+p[t+0],o.y+p[t+1],o.x+p[t+2],o.y+p[t+3]),i.x=o.x+p[t+0],i.y=o.y+p[t+1],o.x+=p[t+2],o.y+=p[t+3],0===t&&!0===u&&s.copy(o);break;case"t":p=c(h);for(let t=0,n=p.length;t<n;t+=2){const n=a(o.x,i.x),r=a(o.y,i.y);e.quadraticCurveTo(n,r,o.x+p[t+0],o.y+p[t+1]),i.x=n,i.y=r,o.x=o.x+p[t+0],o.y=o.y+p[t+1],0===t&&!0===u&&s.copy(o)}break;case"a":p=c(h,[3,4],7);for(let t=0,r=p.length;t<r;t+=7){if(0==p[t+5]&&0==p[t+6])continue;const r=o.clone();o.x+=p[t+5],o.y+=p[t+6],i.x=o.x,i.y=o.y,n(e,p[t],p[t+1],p[t+2],p[t+3],p[t+4],r,o),0===t&&!0===u&&s.copy(o)}break;case"Z":case"z":e.currentPath.autoClose=!0,e.currentPath.curves.length>0&&(o.copy(s),e.currentPath.currentPoint.copy(o),l=!0);break;default:console.warn(r)}u=!1}return e}(e));break;case"rect":i=s(e,i),P=function(t){const e=y(t.getAttribute("x")||0),n=y(t.getAttribute("y")||0),o=y(t.getAttribute("rx")||t.getAttribute("ry")||0),i=y(t.getAttribute("ry")||t.getAttribute("rx")||0),s=y(t.getAttribute("width")),a=y(t.getAttribute("height")),c=.448084975506,l=new r.T_1;return l.moveTo(e+o,n),l.lineTo(e+s-o,n),(0!==o||0!==i)&&l.bezierCurveTo(e+s-o*c,n,e+s,n+i*c,e+s,n+i),l.lineTo(e+s,n+a-i),(0!==o||0!==i)&&l.bezierCurveTo(e+s,n+a-i*c,e+s-o*c,n+a,e+s-o,n+a),l.lineTo(e+o,n+a),(0!==o||0!==i)&&l.bezierCurveTo(e+o*c,n+a,e,n+a-i*c,e,n+a-i),l.lineTo(e,n+i),(0!==o||0!==i)&&l.bezierCurveTo(e,n+i*c,e+o*c,n,e+o,n),l}(e);break;case"polygon":i=s(e,i),P=function(t){const e=new r.T_1;let n=0;return t.getAttribute("points").replace(/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,(function(t,r,o){const i=y(r),s=y(o);0===n?e.moveTo(i,s):e.lineTo(i,s),n++})),e.currentPath.autoClose=!0,e}(e);break;case"polyline":i=s(e,i),P=function(t){const e=new r.T_1;let n=0;return t.getAttribute("points").replace(/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,(function(t,r,o){const i=y(r),s=y(o);0===n?e.moveTo(i,s):e.lineTo(i,s),n++})),e.currentPath.autoClose=!1,e}(e);break;case"circle":i=s(e,i),P=function(t){const e=y(t.getAttribute("cx")||0),n=y(t.getAttribute("cy")||0),o=y(t.getAttribute("r")||0),i=new r.y$t;i.absarc(e,n,o,0,2*Math.PI);const s=new r.T_1;return s.subPaths.push(i),s}(e);break;case"ellipse":i=s(e,i),P=function(t){const e=y(t.getAttribute("cx")||0),n=y(t.getAttribute("cy")||0),o=y(t.getAttribute("rx")||0),i=y(t.getAttribute("ry")||0),s=new r.y$t;s.absellipse(e,n,o,i,0,2*Math.PI);const a=new r.T_1;return a.subPaths.push(s),a}(e);break;case"line":i=s(e,i),P=function(t){const e=y(t.getAttribute("x1")||0),n=y(t.getAttribute("y1")||0),o=y(t.getAttribute("x2")||0),i=y(t.getAttribute("y2")||0),s=new r.T_1;return s.moveTo(e,n),s.lineTo(o,i),s.currentPath.autoClose=!1,s}(e);break;case"defs":u=!0;break;case"use":i=s(e,i);const o=(e.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),l=e.viewportElement.getElementById(o);l?t(l,i):console.warn("SVGLoader: 'use node' references non-existent node id: "+o)}P&&(void 0!==i.fill&&"none"!==i.fill&&P.color.setStyle(i.fill,o),function(t,e){function n(t){v.set(t.x,t.y,1).applyMatrix3(e),t.set(v.x,v.y)}function o(t){const n=t.xRadius,o=t.yRadius,i=Math.cos(t.aRotation),s=Math.sin(t.aRotation),a=new r.Pa4(n*i,n*s,0),c=new r.Pa4(-o*s,o*i,0),l=a.applyMatrix3(e),u=c.applyMatrix3(e),y=m.set(l.x,u.x,0,l.y,u.y,0,0,0,1),h=M.copy(y).invert(),p=k.copy(h).transpose().multiply(h).elements,d=function(t,e,n){let r,o,i,s,a;const c=t+n,l=t-n,u=Math.sqrt(l*l+4*e*e);return c>0?(r=.5*(c+u),a=1/r,o=t*a*n-e*a*e):c<0?o=.5*(c-u):(r=.5*u,o=-.5*u),i=l>0?l+u:l-u,Math.abs(i)>2*Math.abs(e)?(a=-2*e/i,s=1/Math.sqrt(1+a*a),i=a*s):0===Math.abs(e)?(i=1,s=0):(a=-.5*i/e,i=1/Math.sqrt(1+a*a),s=a*i),l>0&&(a=i,i=-s,s=a),{rt1:r,rt2:o,cs:i,sn:s}}(p[0],p[1],p[4]),x=Math.sqrt(d.rt1),b=Math.sqrt(d.rt2);if(t.xRadius=1/x,t.yRadius=1/b,t.aRotation=Math.atan2(d.sn,d.cs),!((t.aEndAngle-t.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const n=M.set(x,0,0,0,b,0,0,0,1),o=k.set(d.cs,d.sn,0,-d.sn,d.cs,0,0,0,1),i=n.multiply(o).multiply(y),s=t=>{const{x:e,y:n}=new r.Pa4(Math.cos(t),Math.sin(t),0).applyMatrix3(i);return Math.atan2(n,e)};t.aStartAngle=s(t.aStartAngle),t.aEndAngle=s(t.aEndAngle),f(e)&&(t.aClockwise=!t.aClockwise)}}function i(t){const n=p(e),r=d(e);t.xRadius*=n,t.yRadius*=r;const o=n>Number.EPSILON?Math.atan2(e.elements[1],e.elements[0]):Math.atan2(-e.elements[3],e.elements[4]);t.aRotation+=o,f(e)&&(t.aStartAngle*=-1,t.aEndAngle*=-1,t.aClockwise=!t.aClockwise)}const s=t.subPaths;for(let t=0,r=s.length;t<r;t++){const r=s[t].curves;for(let t=0;t<r.length;t++){const s=r[t];s.isLineCurve?(n(s.v1),n(s.v2)):s.isCubicBezierCurve?(n(s.v0),n(s.v1),n(s.v2),n(s.v3)):s.isQuadraticBezierCurve?(n(s.v0),n(s.v1),n(s.v2)):s.isEllipseCurve&&(A.set(s.aX,s.aY),n(A),s.aX=A.x,s.aY=A.y,h(e)?o(s):i(s))}}}(P,T),x.push(P),P.userData={node:e,style:i});const C=e.childNodes;for(let e=0;e<C.length;e++){const n=C[e];u&&"style"!==n.nodeName&&"defs"!==n.nodeName||t(n,i)}l&&(g.pop(),g.length>0?T.copy(g[g.length-1]):T.identity())}(P.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:x,xml:P.documentElement}}static createShapes(t){const e=999999999,n={loc:0,t:0};function o(t,e,r,o){const s=t.x,a=e.x,c=r.x,l=o.x,u=t.y,y=e.y,f=r.y,h=o.y,p=(l-c)*(u-f)-(h-f)*(s-c),d=(h-f)*(a-s)-(l-c)*(y-u),x=p/d,b=((a-s)*(u-f)-(y-u)*(s-c))/d;if(0===d&&0!==p||x<=0||x>=1||b<0||b>1)return null;if(0===p&&0===d){for(let c=0;c<2;c++){if(i(0===c?r:o,t,e),0==n.loc){const t=0===c?r:o;return{x:t.x,y:t.y,t:n.t}}if(2==n.loc)return{x:+(s+n.t*(a-s)).toPrecision(10),y:+(u+n.t*(y-u)).toPrecision(10),t:n.t}}return null}for(let s=0;s<2;s++)if(i(0===s?r:o,t,e),0==n.loc){const t=0===s?r:o;return{x:t.x,y:t.y,t:n.t}}return{x:+(s+x*(a-s)).toPrecision(10),y:+(u+x*(y-u)).toPrecision(10),t:x}}function i(t,e,r){const o=r.x-e.x,i=r.y-e.y,s=t.x-e.x,a=t.y-e.y,c=o*a-s*i;if(t.x===e.x&&t.y===e.y)return n.loc=0,void(n.t=0);if(t.x===r.x&&t.y===r.y)return n.loc=1,void(n.t=1);if(c<-Number.EPSILON)return void(n.loc=3);if(c>Number.EPSILON)return void(n.loc=4);if(o*s<0||i*a<0)return void(n.loc=5);if(Math.sqrt(o*o+i*i)<Math.sqrt(s*s+a*a))return void(n.loc=6);let l;l=0!==o?s/o:a/i,n.loc=2,n.t=l}let s=e,a=-999999999,c=t.subPaths.map((t=>{const n=t.getPoints();let o=-999999999,i=e,c=-999999999,l=e;for(let t=0;t<n.length;t++){const e=n[t];e.y>o&&(o=e.y),e.y<i&&(i=e.y),e.x>c&&(c=e.x),e.x<l&&(l=e.x)}return a<=c&&(a=c+1),s>=l&&(s=l-1),{curves:t.curves,points:n,isCW:r.iDF.isClockWise(n),identifier:-1,boundingBox:new r.TUj(new r.FM8(l,i),new r.FM8(c,o))}}));c=c.filter((t=>t.points.length>1));for(let t=0;t<c.length;t++)c[t].identifier=t;const l=c.map((e=>function(t,e,n,i,s){null!=s&&""!==s||(s="nonzero");const a=new r.FM8;t.boundingBox.getCenter(a);const c=function(t,e,n){const i=new r.FM8;e.getCenter(i);const s=[];return n.forEach((e=>{e.boundingBox.containsPoint(i)&&function(t,e){const n=[],i=[];for(let s=1;s<t.length;s++){const a=t[s-1],c=t[s];for(let t=1;t<e.length;t++){const s=o(a,c,e[t-1],e[t]);null!==s&&void 0===n.find((t=>t.t<=s.t+Number.EPSILON&&t.t>=s.t-Number.EPSILON))&&(n.push(s),i.push(new r.FM8(s.x,s.y)))}}return i}(t,e.points).forEach((t=>{s.push({identifier:e.identifier,isCW:e.isCW,point:t})}))})),s.sort(((t,e)=>t.point.x-e.point.x)),s}([new r.FM8(n,a.y),new r.FM8(i,a.y)],t.boundingBox,e);c.sort(((t,e)=>t.point.x-e.point.x));const l=[],u=[];c.forEach((e=>{e.identifier===t.identifier?l.push(e):u.push(e)}));const y=l[0].point.x,f=[];let h=0;for(;h<u.length&&u[h].point.x<y;)f.length>0&&f[f.length-1]===u[h].identifier?f.pop():f.push(u[h].identifier),h++;if(f.push(t.identifier),"evenodd"===s){const e=f.length%2==0,n=f[f.length-2];return{identifier:t.identifier,isHole:e,for:n}}if("nonzero"===s){let n=!0,r=null,o=null;for(let t=0;t<f.length;t++){const i=f[t];n?(o=e[i].isCW,n=!1,r=i):o!==e[i].isCW&&(o=e[i].isCW,n=!0)}return{identifier:t.identifier,isHole:n,for:r}}console.warn('fill-rule: "'+s+'" is currently not implemented.')}(e,c,s,a,t.userData?t.userData.style.fillRule:void 0))),u=[];return c.forEach((t=>{if(!l[t.identifier].isHole){const e=new r.bnF;e.curves=t.curves,l.filter((e=>e.isHole&&e.for===t.identifier)).forEach((t=>{const n=c[t.identifier],o=new r.y$t;o.curves=n.curves,e.holes.push(o)})),u.push(e)}})),u}static getStrokeStyle(t,e,n,r,o){return{strokeColor:e=void 0!==e?e:"#000",strokeWidth:t=void 0!==t?t:1,strokeLineJoin:n=void 0!==n?n:"miter",strokeLineCap:r=void 0!==r?r:"butt",strokeMiterLimit:o=void 0!==o?o:4}}static pointsToStroke(t,e,n,o){const s=[],a=[],c=[];if(0===i.pointsToStrokeWithBuffers(t,e,n,o,s,a,c))return null;const l=new r.u9r;return l.setAttribute("position",new r.a$l(s,3)),l.setAttribute("normal",new r.a$l(a,3)),l.setAttribute("uv",new r.a$l(c,2)),l}static pointsToStrokeWithBuffers(t,e,n,o,i,s,a,c){const l=new r.FM8,u=new r.FM8,y=new r.FM8,f=new r.FM8,h=new r.FM8,p=new r.FM8,d=new r.FM8,x=new r.FM8,b=new r.FM8,g=new r.FM8,m=new r.FM8,M=new r.FM8,k=new r.FM8,w=new r.FM8,A=new r.FM8,v=new r.FM8,T=new r.FM8;n=void 0!==n?n:12,o=void 0!==o?o:.001,c=void 0!==c?c:0;const P=(t=function(t){let e=!1;for(let n=1,r=t.length-1;n<r;n++)if(t[n].distanceTo(t[n+1])<o){e=!0;break}if(!e)return t;const n=[];n.push(t[0]);for(let e=1,r=t.length-1;e<r;e++)t[e].distanceTo(t[e+1])>=o&&n.push(t[e]);return n.push(t[t.length-1]),n}(t)).length;if(P<2)return 0;const C=t[0].equals(t[P-1]);let S,I,N=t[0];const E=e.strokeWidth/2,F=1/(P-1);let L,O,V,q,R=0,z=!1,W=0,G=3*c,_=2*c;D(t[0],t[1],l).multiplyScalar(E),x.copy(t[0]).sub(l),b.copy(t[0]).add(l),g.copy(x),m.copy(b);for(let n=1;n<P;n++){S=t[n],I=n===P-1?C?t[1]:void 0:t[n+1];const r=l;if(D(N,S,r),y.copy(r).multiplyScalar(E),M.copy(S).sub(y),k.copy(S).add(y),L=R+F,O=!1,void 0!==I){D(S,I,u),y.copy(u).multiplyScalar(E),w.copy(S).sub(y),A.copy(S).add(y),V=!0,y.subVectors(I,N),r.dot(y)<0&&(V=!1),1===n&&(z=V),y.subVectors(I,S),y.normalize();const t=Math.abs(r.dot(y));if(t>Number.EPSILON){const n=E/t;y.multiplyScalar(-n),f.subVectors(S,N),h.copy(f).setLength(n).add(y),v.copy(h).negate();const r=h.length(),o=f.length();f.divideScalar(o),p.subVectors(I,S);const i=p.length();switch(p.divideScalar(i),f.dot(v)<o&&p.dot(v)<i&&(O=!0),T.copy(h).add(S),v.add(S),q=!1,O?V?(A.copy(v),k.copy(v)):(w.copy(v),M.copy(v)):j(),e.strokeLineJoin){case"bevel":U(V,O,L);break;case"round":X(V,O),V?H(S,M,w,L,0):H(S,A,k,L,1);break;default:const t=E*e.strokeMiterLimit/r;if(t<1){if("miter-clip"!==e.strokeLineJoin){U(V,O,L);break}X(V,O),V?(p.subVectors(T,M).multiplyScalar(t).add(M),d.subVectors(T,w).multiplyScalar(t).add(w),B(M,L,0),B(p,L,0),B(S,L,.5),B(S,L,.5),B(p,L,0),B(d,L,0),B(S,L,.5),B(d,L,0),B(w,L,0)):(p.subVectors(T,k).multiplyScalar(t).add(k),d.subVectors(T,A).multiplyScalar(t).add(A),B(k,L,1),B(p,L,1),B(S,L,.5),B(S,L,.5),B(p,L,1),B(d,L,1),B(S,L,.5),B(d,L,1),B(A,L,1))}else O?(V?(B(b,R,1),B(x,R,0),B(T,L,0),B(b,R,1),B(T,L,0),B(v,L,1)):(B(b,R,1),B(x,R,0),B(T,L,1),B(x,R,0),B(v,L,0),B(T,L,1)),V?w.copy(T):A.copy(T)):V?(B(M,L,0),B(T,L,0),B(S,L,.5),B(S,L,.5),B(T,L,0),B(w,L,0)):(B(k,L,1),B(T,L,1),B(S,L,.5),B(S,L,.5),B(T,L,1),B(A,L,1)),q=!0}}else j()}else j();C||n!==P-1||$(t[0],g,m,V,!0,R),R=L,N=S,x.copy(w),b.copy(A)}if(C){if(O&&i){let t=T,e=v;z!==V&&(t=v,e=T),V?(q||z)&&(e.toArray(i,0),e.toArray(i,9),q&&t.toArray(i,3)):!q&&z||(e.toArray(i,3),e.toArray(i,9),q&&t.toArray(i,0))}}else $(S,M,k,V,!1,L);return W;function D(t,e,n){return n.subVectors(e,t),n.set(-n.y,n.x).normalize()}function B(t,e,n){i&&(i[G]=t.x,i[G+1]=t.y,i[G+2]=0,s&&(s[G]=0,s[G+1]=0,s[G+2]=1),G+=3,a&&(a[_]=e,a[_+1]=n,_+=2)),W+=3}function H(t,e,r,o,i){l.copy(e).sub(t).normalize(),u.copy(r).sub(t).normalize();let s=Math.PI;const a=l.dot(u);Math.abs(a)<1&&(s=Math.abs(Math.acos(a))),s/=n,y.copy(e);for(let e=0,r=n-1;e<r;e++)f.copy(y).rotateAround(t,s),B(y,o,i),B(f,o,i),B(t,o,.5),y.copy(f);B(f,o,i),B(r,o,i),B(t,o,.5)}function j(){B(b,R,1),B(x,R,0),B(M,L,0),B(b,R,1),B(M,L,1),B(k,L,0)}function U(t,e,n){e?t?(B(b,R,1),B(x,R,0),B(M,L,0),B(b,R,1),B(M,L,0),B(v,L,1),B(M,n,0),B(w,n,0),B(v,n,.5)):(B(b,R,1),B(x,R,0),B(k,L,1),B(x,R,0),B(v,L,0),B(k,L,1),B(k,n,1),B(A,n,0),B(v,n,.5)):t?(B(M,n,0),B(w,n,0),B(S,n,.5)):(B(k,n,1),B(A,n,0),B(S,n,.5))}function X(t,e){e&&(t?(B(b,R,1),B(x,R,0),B(M,L,0),B(b,R,1),B(M,L,0),B(v,L,1),B(M,R,0),B(S,L,.5),B(v,L,1),B(S,L,.5),B(w,R,0),B(v,L,1)):(B(b,R,1),B(x,R,0),B(k,L,1),B(x,R,0),B(v,L,0),B(k,L,1),B(k,R,1),B(v,L,0),B(S,L,.5),B(S,L,.5),B(v,L,0),B(A,R,1)))}function $(t,n,r,o,s,a){switch(e.strokeLineCap){case"round":s?H(t,r,n,a,.5):H(t,n,r,a,.5);break;case"square":if(s)l.subVectors(n,t),u.set(l.y,-l.x),y.addVectors(l,u).add(t),f.subVectors(u,l).add(t),o?(y.toArray(i,3),f.toArray(i,0),f.toArray(i,9)):(y.toArray(i,3),y.toArray(i,9),f.toArray(i,0));else{l.subVectors(r,t),u.set(l.y,-l.x),y.addVectors(l,u).add(t),f.subVectors(u,l).add(t);const e=i.length;o?(y.toArray(i,e-3),f.toArray(i,e-6),f.toArray(i,e-12)):(y.toArray(i,e-6),f.toArray(i,e-3),f.toArray(i,e-12))}}}}}}}]);