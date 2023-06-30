"use strict";(self.webpackChunksd_webui_3d_editor=self.webpackChunksd_webui_3d_editor||[]).push([[349],{1349:function(e,t,r){r.r(t),r.d(t,{PLYLoader:function(){return a}});var n=r(9477);const s=new n.Ilk;class a extends n.aNw{constructor(e){super(e),this.propertyNameMapping={},this.customPropertyMapping={}}load(e,t,r,s){const a=this,o=new n.hH6(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,(function(r){try{t(a.parse(r))}catch(t){s?s(t):console.error(t),a.manager.itemError(e)}}),r,s)}setPropertyNameMapping(e){this.propertyNameMapping=e}setCustomPropertyNameMapping(e){this.customPropertyMapping=e}parse(e){function t(e){let t="",r=0;const n=/^ply([\s\S]*)end_header(\r\n|\r|\n)/.exec(e);null!==n&&(t=n[1],r=new Blob([n[0]]).size);const s={comments:[],elements:[],headerLength:r,objInfo:""},a=t.split(/\r\n|\r|\n/);let o;function i(e,t){const r={type:e[0]};return"list"===r.type?(r.name=e[3],r.countType=e[1],r.itemType=e[2]):r.name=e[1],r.name in t&&(r.name=t[r.name]),r}for(let e=0;e<a.length;e++){let t=a[e];if(t=t.trim(),""===t)continue;const r=t.split(/\s+/),n=r.shift();switch(t=r.join(" "),n){case"format":s.format=r[0],s.version=r[1];break;case"comment":s.comments.push(t);break;case"element":void 0!==o&&s.elements.push(o),o={},o.name=r[0],o.count=parseInt(r[1]),o.properties=[];break;case"property":o.properties.push(i(r,m.propertyNameMapping));break;case"obj_info":s.objInfo=t;break;default:console.log("unhandled",n,r)}}return void 0!==o&&s.elements.push(o),s}function r(e,t){switch(t){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(e);case"float":case"double":case"float32":case"float64":return parseFloat(e)}}function a(e,t){const n={};for(let s=0;s<e.length;s++){if(t.empty())return null;if("list"===e[s].type){const a=[],o=r(t.next(),e[s].countType);for(let n=0;n<o;n++){if(t.empty())return null;a.push(r(t.next(),e[s].itemType))}n[e[s].name]=a}else n[e[s].name]=r(t.next(),e[s].type)}return n}function i(){const e={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[],faceVertexColors:[]};for(const t of Object.keys(m.customPropertyMapping))e[t]=[];return e}function c(e){const t=e.map((e=>e.name));function r(e){for(let r=0,n=e.length;r<n;r++){const n=e[r];if(t.includes(n))return n}return null}return{attrX:r(["x","px","posx"])||"x",attrY:r(["y","py","posy"])||"y",attrZ:r(["z","pz","posz"])||"z",attrNX:r(["nx","normalx"]),attrNY:r(["ny","normaly"]),attrNZ:r(["nz","normalz"]),attrS:r(["s","u","texture_u","tx"]),attrT:r(["t","v","texture_v","ty"]),attrR:r(["red","diffuse_red","r","diffuse_r"]),attrG:r(["green","diffuse_green","g","diffuse_g"]),attrB:r(["blue","diffuse_blue","b","diffuse_b"])}}function u(e,t){const r=i();let n,s;n=null!==(s=/end_header\s+(\S[\s\S]*\S|\S)\s*$/.exec(e))?s[1].split(/\s+/):[];const u=new o(n);e:for(let e=0;e<t.elements.length;e++){const n=t.elements[e],s=c(n.properties);for(let e=0;e<n.count;e++){const e=a(n.properties,u);if(!e)break e;p(r,n.name,e,s)}}return l(r)}function l(e){let t=new n.u9r;e.indices.length>0&&t.setIndex(e.indices),t.setAttribute("position",new n.a$l(e.vertices,3)),e.normals.length>0&&t.setAttribute("normal",new n.a$l(e.normals,3)),e.uvs.length>0&&t.setAttribute("uv",new n.a$l(e.uvs,2)),(e.faceVertexUvs.length>0||e.faceVertexColors.length>0)&&(t=t.toNonIndexed(),e.faceVertexUvs.length>0&&t.setAttribute("uv",new n.a$l(e.faceVertexUvs,2)),e.faceVertexColors.length>0&&t.setAttribute("color",new n.a$l(e.faceVertexColors,3)));for(const r of Object.keys(m.customPropertyMapping))e[r].length>0&&t.setAttribute(r,new n.a$l(e[r],m.customPropertyMapping[r].length));return t.computeBoundingSphere(),t}function p(e,t,r,n){if("vertex"===t){e.vertices.push(r[n.attrX],r[n.attrY],r[n.attrZ]),null!==n.attrNX&&null!==n.attrNY&&null!==n.attrNZ&&e.normals.push(r[n.attrNX],r[n.attrNY],r[n.attrNZ]),null!==n.attrS&&null!==n.attrT&&e.uvs.push(r[n.attrS],r[n.attrT]),null!==n.attrR&&null!==n.attrG&&null!==n.attrB&&(s.setRGB(r[n.attrR]/255,r[n.attrG]/255,r[n.attrB]/255).convertSRGBToLinear(),e.colors.push(s.r,s.g,s.b));for(const t of Object.keys(m.customPropertyMapping))for(const n of m.customPropertyMapping[t])e[t].push(r[n])}else if("face"===t){const t=r.vertex_indices||r.vertex_index,a=r.texcoord;3===t.length?(e.indices.push(t[0],t[1],t[2]),a&&6===a.length&&(e.faceVertexUvs.push(a[0],a[1]),e.faceVertexUvs.push(a[2],a[3]),e.faceVertexUvs.push(a[4],a[5]))):4===t.length&&(e.indices.push(t[0],t[1],t[3]),e.indices.push(t[1],t[2],t[3])),null!==n.attrR&&null!==n.attrG&&null!==n.attrB&&(s.setRGB(r[n.attrR]/255,r[n.attrG]/255,r[n.attrB]/255).convertSRGBToLinear(),e.faceVertexColors.push(s.r,s.g,s.b),e.faceVertexColors.push(s.r,s.g,s.b),e.faceVertexColors.push(s.r,s.g,s.b))}}function f(e,t){const r={};let n=0;for(let s=0;s<t.length;s++){const a=t[s],o=a.valueReader;if("list"===a.type){const t=[],s=a.countReader.read(e+n);n+=a.countReader.size;for(let r=0;r<s;r++)t.push(o.read(e+n)),n+=o.size;r[a.name]=t}else r[a.name]=o.read(e+n),n+=o.size}return[r,n]}function h(e,t,r){function n(e,t,r){switch(t){case"int8":case"char":return{read:t=>e.getInt8(t),size:1};case"uint8":case"uchar":return{read:t=>e.getUint8(t),size:1};case"int16":case"short":return{read:t=>e.getInt16(t,r),size:2};case"uint16":case"ushort":return{read:t=>e.getUint16(t,r),size:2};case"int32":case"int":return{read:t=>e.getInt32(t,r),size:4};case"uint32":case"uint":return{read:t=>e.getUint32(t,r),size:4};case"float32":case"float":return{read:t=>e.getFloat32(t,r),size:4};case"float64":case"double":return{read:t=>e.getFloat64(t,r),size:8}}}for(let s=0,a=e.length;s<a;s++){const a=e[s];"list"===a.type?(a.countReader=n(t,a.countType,r),a.valueReader=n(t,a.itemType,r)):a.valueReader=n(t,a.type,r)}}let d;const m=this;if(e instanceof ArrayBuffer){const r=new Uint8Array(e),n=function(e){let t=0,r=!0,n="";const s=[];do{const a=String.fromCharCode(e[t++]);"\n"!==a&&"\r"!==a?n+=a:("end_header"===n&&(r=!1),""!==n&&(s.push(n),n=""))}while(r&&t<e.length);return s.join("\r")+"\r"}(r),s=t(n);d="ascii"===s.format?u((new TextDecoder).decode(r),s):function(e,t){const r=i(),n="binary_little_endian"===t.format,s=new DataView(e,t.headerLength);let a,o=0;for(let e=0;e<t.elements.length;e++){const i=t.elements[e],u=i.properties,l=c(u);h(u,s,n);for(let e=0;e<i.count;e++){a=f(o,u),o+=a[1];const e=a[0];p(r,i.name,e,l)}}return l(r)}(e,s)}else d=u(e,t(e));return d}}class o{constructor(e){this.arr=e,this.i=0}empty(){return this.i>=this.arr.length}next(){return this.arr[this.i++]}}}}]);