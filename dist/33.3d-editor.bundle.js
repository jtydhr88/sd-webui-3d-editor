"use strict";(self.webpackChunksd_webui_3d_editor=self.webpackChunksd_webui_3d_editor||[]).push([[33],{3033:function(t,e,n){n.r(e),n.d(e,{VOXData3DTexture:function(){return i},VOXLoader:function(){return s},VOXMesh:function(){return o}});var r=n(9477);class s extends r.aNw{load(t,e,n,s){const o=this,i=new r.hH6(o.manager);i.setPath(o.path),i.setResponseType("arraybuffer"),i.setRequestHeader(o.requestHeader),i.load(t,(function(n){try{e(o.parse(n))}catch(e){s?s(e):console.error(e),o.manager.itemError(t)}}),n,s)}parse(t){const e=new DataView(t),n=e.getUint32(0,!0),r=e.getUint32(4,!0);if(542658390!==n||150!==r)return void console.error("Not a valid VOX file");const s=[0,4294967295,4291624959,4288282623,4284940287,4281597951,4278255615,4294954239,4291611903,4288269567,4284927231,4281584895,4278242559,4294941183,4291598847,4288256511,4284914175,4281571839,4278229503,4294928127,4291585791,4288243455,4284901119,4281558783,4278216447,4294915071,4291572735,4288230399,4284888063,4281545727,4278203391,4294902015,4291559679,4288217343,4284875007,4281532671,4278190335,4294967244,4291624908,4288282572,4284940236,4281597900,4278255564,4294954188,4291611852,4288269516,4284927180,4281584844,4278242508,4294941132,4291598796,4288256460,4284914124,4281571788,4278229452,4294928076,4291585740,4288243404,4284901068,4281558732,4278216396,4294915020,4291572684,4288230348,4284888012,4281545676,4278203340,4294901964,4291559628,4288217292,4284874956,4281532620,4278190284,4294967193,4291624857,4288282521,4284940185,4281597849,4278255513,4294954137,4291611801,4288269465,4284927129,4281584793,4278242457,4294941081,4291598745,4288256409,4284914073,4281571737,4278229401,4294928025,4291585689,4288243353,4284901017,4281558681,4278216345,4294914969,4291572633,4288230297,4284887961,4281545625,4278203289,4294901913,4291559577,4288217241,4284874905,4281532569,4278190233,4294967142,4291624806,4288282470,4284940134,4281597798,4278255462,4294954086,4291611750,4288269414,4284927078,4281584742,4278242406,4294941030,4291598694,4288256358,4284914022,4281571686,4278229350,4294927974,4291585638,4288243302,4284900966,4281558630,4278216294,4294914918,4291572582,4288230246,4284887910,4281545574,4278203238,4294901862,4291559526,4288217190,4284874854,4281532518,4278190182,4294967091,4291624755,4288282419,4284940083,4281597747,4278255411,4294954035,4291611699,4288269363,4284927027,4281584691,4278242355,4294940979,4291598643,4288256307,4284913971,4281571635,4278229299,4294927923,4291585587,4288243251,4284900915,4281558579,4278216243,4294914867,4291572531,4288230195,4284887859,4281545523,4278203187,4294901811,4291559475,4288217139,4284874803,4281532467,4278190131,4294967040,4291624704,4288282368,4284940032,4281597696,4278255360,4294953984,4291611648,4288269312,4284926976,4281584640,4278242304,4294940928,4291598592,4288256256,4284913920,4281571584,4278229248,4294927872,4291585536,4288243200,4284900864,4281558528,4278216192,4294914816,4291572480,4288230144,4284887808,4281545472,4278203136,4294901760,4291559424,4288217088,4284874752,4281532416,4278190318,4278190301,4278190267,4278190250,4278190216,4278190199,4278190165,4278190148,4278190114,4278190097,4278251008,4278246656,4278237952,4278233600,4278224896,4278220544,4278211840,4278207488,4278198784,4278194432,4293787648,4292673536,4290445312,4289331200,4287102976,4285988864,4283760640,4282646528,4280418304,4279304192,4293848814,4292730333,4290493371,4289374890,4287137928,4286019447,4283782485,4282664004,4280427042,4279308561];let o,i=8;const a=[];for(;i<e.byteLength;){let n="";for(let t=0;t<4;t++)n+=String.fromCharCode(e.getUint8(i++));const r=e.getUint32(i,!0);if(i+=4,i+=4,"SIZE"===n){const t=e.getUint32(i,!0);i+=4;const n=e.getUint32(i,!0);i+=4;const c=e.getUint32(i,!0);i+=4,o={palette:s,size:{x:t,y:n,z:c}},a.push(o),i+=r-12}else if("XYZI"===n){const n=e.getUint32(i,!0);i+=4,o.data=new Uint8Array(t,i,4*n),i+=4*n}else if("RGBA"===n){const t=[0];for(let n=0;n<256;n++)t[n+1]=e.getUint32(i,!0),i+=4;o.palette=t}else i+=r}return a}}class o extends r.Kj0{constructor(t){const e=t.data,n=t.size,s=t.palette,o=[],i=[],a=[0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1],c=[1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0],l=[0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1],u=[0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0],d=[0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0],f=[0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1],h=new r.Ilk;function p(t,e,s,a,c,l,u){e-=n.x/2,s-=n.z/2,a+=n.y/2;for(let n=0;n<18;n+=3)h.setRGB(c,l,u,r.KI_),o.push(t[n+0]+e,t[n+1]+s,t[n+2]+a),i.push(h.r,h.g,h.b)}const g=n.x,w=n.x*n.y,x=new Uint8Array(n.x*n.y*n.z);for(let t=0;t<e.length;t+=4)x[e[t+0]+e[t+1]*g+e[t+2]*w]=255;let y=!1;for(let t=0;t<e.length;t+=4){const r=e[t+0],o=e[t+1],i=e[t+2],h=s[e[t+3]],U=(h>>0&255)/255,m=(h>>8&255)/255,b=(h>>16&255)/255;(U>0||m>0||b>0)&&(y=!0);const z=r+o*g+i*w;0!==x[z+1]&&r!==n.x-1||p(c,r,i,-o,U,m,b),0!==x[z-1]&&0!==r||p(a,r,i,-o,U,m,b),0!==x[z+g]&&o!==n.y-1||p(u,r,i,-o,U,m,b),0!==x[z-g]&&0!==o||p(l,r,i,-o,U,m,b),0!==x[z+w]&&i!==n.z-1||p(f,r,i,-o,U,m,b),0!==x[z-w]&&0!==i||p(d,r,i,-o,U,m,b)}const U=new r.u9r;U.setAttribute("position",new r.a$l(o,3)),U.computeVertexNormals();const m=new r.Wid;y&&(U.setAttribute("color",new r.a$l(i,3)),m.vertexColors=!0),super(U,m)}}class i extends r.JUT{constructor(t){const e=t.data,n=t.size,s=n.x,o=n.x*n.y,i=new Uint8Array(n.x*n.y*n.z);for(let t=0;t<e.length;t+=4)i[e[t+0]+e[t+1]*s+e[t+2]*o]=255;super(i,n.x,n.y,n.z),this.format=r.hEm,this.minFilter=r.TyD,this.magFilter=r.wem,this.unpackAlignment=1,this.needsUpdate=!0}}}}]);