"use strict";(self.webpackChunksd_webui_3d_editor=self.webpackChunksd_webui_3d_editor||[]).push([[858],{9858:function(e,t,r){r.r(t),r.d(t,{Rhino3dmLoader:function(){return o}});var s=r(9477);const a=new WeakMap;class o extends s.aNw{constructor(e){super(e),this.libraryPath="",this.libraryPending=null,this.libraryBinary=null,this.libraryConfig={},this.url="",this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.workerConfig={},this.materials=[],this.warnings=[]}setLibraryPath(e){return this.libraryPath=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,r,o){const n=new s.hH6(this.manager);n.setPath(this.path),n.setResponseType("arraybuffer"),n.setRequestHeader(this.requestHeader),this.url=e,n.load(e,(r=>{if(a.has(r))return a.get(r).promise.then(t).catch(o);this.decodeObjects(r,e).then((e=>{e.userData.warnings=this.warnings,t(e)})).catch((e=>o(e)))}),r,o)}debug(){console.log("Task load: ",this.workerPool.map((e=>e._taskLoad)))}decodeObjects(e,t){let r,s;const o=e.byteLength,n=this._getWorker(o).then((t=>(r=t,s=this.workerNextTaskID++,new Promise(((t,a)=>{r._callbacks[s]={resolve:t,reject:a},r.postMessage({type:"decode",id:s,buffer:e},[e])}))))).then((e=>this._createGeometry(e.data))).catch((e=>{throw e}));return n.catch((()=>!0)).then((()=>{r&&s&&this._releaseTask(r,s)})),a.set(e,{url:t,promise:n}),n}parse(e,t,r){this.decodeObjects(e,"").then((e=>{e.userData.warnings=this.warnings,t(e)})).catch((e=>r(e)))}_compareMaterials(e){const t={};t.name=e.name,t.color={},t.color.r=e.color.r,t.color.g=e.color.g,t.color.b=e.color.b,t.type=e.type;const r=JSON.stringify(t);for(let e=0;e<this.materials.length;e++){const t=this.materials[e],s={};if(s.name=t.name,s.color={},s.color.r=t.color.r,s.color.g=t.color.g,s.color.b=t.color.b,s.type=t.type,JSON.stringify(s)===r)return t}return this.materials.push(e),e}_createMaterial(e){if(void 0===e)return new s.Wid({color:new s.Ilk(1,1,1),metalness:.8,name:"default",side:s.ehD});const t=e.diffuseColor,r=new s.Ilk(t.r/255,t.g/255,t.b/255);0===t.r&&0===t.g&&0===t.b&&(r.r=1,r.g=1,r.b=1);const a=new s.Wid({color:r,name:e.name,side:s.ehD,transparent:e.transparency>0,opacity:1-e.transparency}),o=new s.dpR;for(let t=0;t<e.textures.length;t++){const r=e.textures[t];if(null!==r.image){const e=o.load(r.image);switch(r.type){case"Diffuse":a.map=e;break;case"Bump":a.bumpMap=e;break;case"Transparency":a.alphaMap=e,a.transparent=!0;break;case"Emap":a.envMap=e}e.wrapS=0===r.wrapU?s.rpg:s.uWy,e.wrapT=0===r.wrapV?s.rpg:s.uWy,e.repeat.set(r.repeat[0],r.repeat[1])}}return a}_createGeometry(e){const t=new s.Tme,r=[],a=[],o=[];t.userData.layers=e.layers,t.userData.groups=e.groups,t.userData.settings=e.settings,t.userData.objectType="File3dm",t.userData.materials=null,t.name=this.url;let n=e.objects;const i=e.materials;for(let s=0;s<n.length;s++){const c=n[s],l=c.attributes;switch(c.objectType){case"InstanceDefinition":a.push(c);break;case"InstanceReference":o.push(c);break;default:let s;if(l.materialIndex>=0){const e=i[l.materialIndex];let t=this._createMaterial(e);t=this._compareMaterials(t),s=this._createObject(c,t)}else{const e=this._createMaterial();s=this._createObject(c,e)}if(void 0===s)continue;const n=e.layers[l.layerIndex];s.visible=!n||e.layers[l.layerIndex].visible,l.isInstanceDefinitionObject?r.push(s):t.add(s)}}for(let e=0;e<a.length;e++){const i=a[e];n=[];for(let e=0;e<i.attributes.objectIds.length;e++){const t=i.attributes.objectIds[e];for(let e=0;e<r.length;e++)t===r[e].userData.attributes.id&&n.push(r[e])}for(let e=0;e<o.length;e++){const r=o[e];if(r.geometry.parentIdefId===i.attributes.id){const e=new s.Tme,a=r.geometry.xform.array,o=new s.yGw;o.set(...a),e.applyMatrix4(o);for(let t=0;t<n.length;t++)e.add(n[t].clone(!0));t.add(e)}}}return t.userData.materials=this.materials,t}_createObject(e,t){const r=new s.s4_,a=e.attributes;let o,n,i,c;switch(e.objectType){case"Point":case"PointSet":o=r.parse(e.geometry),o.attributes.hasOwnProperty("color")?n=new s.UY4({vertexColors:!0,sizeAttenuation:!1,size:2}):(i=a.drawColor,c=new s.Ilk(i.r/255,i.g/255,i.b/255),n=new s.UY4({color:c,sizeAttenuation:!1,size:2})),n=this._compareMaterials(n);const l=new s.woe(o,n);return l.userData.attributes=a,l.userData.objectType=e.objectType,a.name&&(l.name=a.name),l;case"Mesh":case"Extrusion":case"SubD":case"Brep":if(null===e.geometry)return;o=r.parse(e.geometry),o.attributes.hasOwnProperty("color")&&(t.vertexColors=!0),null===t&&(t=this._createMaterial(),t=this._compareMaterials(t));const u=new s.Kj0(o,t);return u.castShadow=a.castsShadows,u.receiveShadow=a.receivesShadows,u.userData.attributes=a,u.userData.objectType=e.objectType,a.name&&(u.name=a.name),u;case"Curve":o=r.parse(e.geometry),i=a.drawColor,c=new s.Ilk(i.r/255,i.g/255,i.b/255),n=new s.nls({color:c}),n=this._compareMaterials(n);const p=new s.x12(o,n);return p.userData.attributes=a,p.userData.objectType=e.objectType,a.name&&(p.name=a.name),p;case"TextDot":o=e.geometry;const h=document.createElement("canvas").getContext("2d"),d=`${o.fontHeight}px ${o.fontFace}`;h.font=d;const y=h.measureText(o.text).width+10,g=o.fontHeight+10,m=window.devicePixelRatio;h.canvas.width=y*m,h.canvas.height=g*m,h.canvas.style.width=y+"px",h.canvas.style.height=g+"px",h.setTransform(m,0,0,m,0,0),h.font=d,h.textBaseline="middle",h.textAlign="center",c=a.drawColor,h.fillStyle=`rgba(${c.r},${c.g},${c.b},${c.a})`,h.fillRect(0,0,y,g),h.fillStyle="white",h.fillText(o.text,y/2,g/2);const b=new s.ROQ(h.canvas);b.minFilter=s.wem,b.wrapS=s.uWy,b.wrapT=s.uWy,n=new s.xeV({map:b,depthTest:!1});const f=new s.jyi(n);return f.position.set(o.point[0],o.point[1],o.point[2]),f.scale.set(y/10,g/10,1),f.userData.attributes=a,f.userData.objectType=e.objectType,a.name&&(f.name=a.name),f;case"Light":let w;switch(o=e.geometry,o.lightStyle.name){case"LightStyle_WorldPoint":w=new s.cek,w.castShadow=a.castsShadows,w.position.set(o.location[0],o.location[1],o.location[2]),w.shadow.normalBias=.1;break;case"LightStyle_WorldSpot":w=new s.PMe,w.castShadow=a.castsShadows,w.position.set(o.location[0],o.location[1],o.location[2]),w.target.position.set(o.direction[0],o.direction[1],o.direction[2]),w.angle=o.spotAngleRadians,w.shadow.normalBias=.1;break;case"LightStyle_WorldRectangular":w=new s.T_f;const e=Math.abs(o.width[2]),t=Math.abs(o.length[0]);w.position.set(o.location[0]-t/2,o.location[1],o.location[2]-e/2),w.height=t,w.width=e,w.lookAt(o.direction[0],o.direction[1],o.direction[2]);break;case"LightStyle_WorldDirectional":w=new s.Ox3,w.castShadow=a.castsShadows,w.position.set(o.location[0],o.location[1],o.location[2]),w.target.position.set(o.direction[0],o.direction[1],o.direction[2]),w.shadow.normalBias=.1}return w&&(w.intensity=o.intensity,i=o.diffuse,c=new s.Ilk(i.r/255,i.g/255,i.b/255),w.color=c,w.userData.attributes=a,w.userData.objectType=e.objectType),w}}_initLibrary(){if(!this.libraryPending){const e=new s.hH6(this.manager);e.setPath(this.libraryPath);const t=new Promise(((t,r)=>{e.load("rhino3dm.js",t,void 0,r)})),r=new s.hH6(this.manager);r.setPath(this.libraryPath),r.setResponseType("arraybuffer");const a=new Promise(((e,t)=>{r.load("rhino3dm.wasm",e,void 0,t)}));this.libraryPending=Promise.all([t,a]).then((([e,t])=>{this.libraryConfig.wasmBinary=t;const r=n.toString(),s=["/* rhino3dm.js */",e,"/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join("\n");this.workerSourceURL=URL.createObjectURL(new Blob([s]))}))}return this.libraryPending}_getWorker(e){return this._initLibrary().then((()=>{if(this.workerPool.length<this.workerLimit){const e=new Worker(this.workerSourceURL);e._callbacks={},e._taskCosts={},e._taskLoad=0,e.postMessage({type:"init",libraryConfig:this.libraryConfig}),e.onmessage=t=>{const r=t.data;switch(r.type){case"warning":this.warnings.push(r.data),console.warn(r.data);break;case"decode":e._callbacks[r.id].resolve(r);break;case"error":e._callbacks[r.id].reject(r);break;default:console.error('THREE.Rhino3dmLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(e)}else this.workerPool.sort((function(e,t){return e._taskLoad>t._taskLoad?-1:1}));const t=this.workerPool[this.workerPool.length-1];return t._taskLoad+=e,t}))}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function n(){let e,t,r,s;function a(e,t){const a=e.geometry(),i=e.attributes();let c,l,u,p,h,d=a.objectType;switch(d){case r.ObjectType.Curve:const e=n(a,100);u={},l={},p={},u.itemSize=3,u.type="Float32Array",u.array=[];for(let t=0;t<e.length;t++)u.array.push(e[t][0]),u.array.push(e[t][1]),u.array.push(e[t][2]);l.position=u,p.attributes=l,c={data:p};break;case r.ObjectType.Point:const y=a.location;u={};const g={};l={},p={},u.itemSize=3,u.type="Float32Array",u.array=[y[0],y[1],y[2]];const m=i.drawColor(t);g.itemSize=3,g.type="Float32Array",g.array=[m.r/255,m.g/255,m.b/255],l.position=u,l.color=g,p.attributes=l,c={data:p};break;case r.ObjectType.PointSet:case r.ObjectType.Mesh:c=a.toThreejsJSON();break;case r.ObjectType.Brep:const b=a.faces();h=new r.Mesh;for(let e=0;e<b.count;e++){const t=b.get(e),s=t.getMesh(r.MeshType.Any);s&&(h.append(s),s.delete()),t.delete()}h.faces().count>0&&(h.compact(),c=h.toThreejsJSON(),b.delete()),h.delete();break;case r.ObjectType.Extrusion:h=a.getMesh(r.MeshType.Any),h&&(c=h.toThreejsJSON(),h.delete());break;case r.ObjectType.TextDot:c=o(a);break;case r.ObjectType.Light:c=o(a),"LightStyle_WorldLinear"===c.lightStyle.name&&self.postMessage({type:"warning",id:s,data:{message:`THREE.3DMLoader: No conversion exists for ${d.constructor.name} ${c.lightStyle.name}`,type:"no conversion",guid:i.id}});break;case r.ObjectType.InstanceReference:c=o(a),c.xform=o(a.xform),c.xform.array=a.xform.toFloatArray(!0);break;case r.ObjectType.SubD:a.subdivide(3),h=r.Mesh.createFromSubDControlNet(a),h&&(c=h.toThreejsJSON(),h.delete());break;default:self.postMessage({type:"warning",id:s,data:{message:`THREE.3DMLoader: Conversion not implemented for ${d.constructor.name}`,type:"not implemented",guid:i.id}})}if(c)return l=o(i),l.geometry=o(a),i.groupCount>0&&(l.groupIds=i.getGroupList()),i.userStringCount>0&&(l.userStrings=i.getUserStrings()),a.userStringCount>0&&(l.geometry.userStrings=a.getUserStrings()),l.drawColor=i.drawColor(t),d=d.constructor.name,d=d.substring(11,d.length),{geometry:c,attributes:l,objectType:d};self.postMessage({type:"warning",id:s,data:{message:`THREE.3DMLoader: ${d.constructor.name} has no associated mesh geometry.`,type:"missing mesh",guid:i.id}})}function o(e){const t={};for(const r in e){const s=e[r];"function"!=typeof s&&("object"==typeof s&&null!==s&&s.hasOwnProperty("constructor")?t[r]={name:s.constructor.name,value:s.value}:t[r]=s)}return t}function n(e,t){let s=t,a=[];const o=[];if(e instanceof r.LineCurve)return[e.pointAtStart,e.pointAtEnd];if(e instanceof r.PolylineCurve){s=e.pointCount;for(let t=0;t<s;t++)a.push(e.point(t));return a}if(e instanceof r.PolyCurve){const t=e.segmentCount;for(let r=0;r<t;r++){const t=e.segmentCurve(r),o=n(t,s);a=a.concat(o),t.delete()}return a}if(e instanceof r.ArcCurve&&(s=Math.floor(e.angleDegrees/5),s=s<2?2:s),e instanceof r.NurbsCurve&&1===e.degree){const t=e.tryGetPolyline();for(let e=0;e<t.count;e++)a.push(t.get(e));return t.delete(),a}const i=e.domain,c=s-1;for(let t=0;t<s;t++){const r=i[0]+t/c*(i[1]-i[0]);if(r===i[0]||r===i[1]){o.push(r);continue}const s=e.tangentAt(r),a=e.tangentAt(o.slice(-1)[0]),n=s[0]*s[0]+s[1]*s[1]+s[2]*s[2],l=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],u=Math.sqrt(n*l);let p;if(0===u)p=Math.PI/2;else{const e=(s.x*a.x+s.y*a.y+s.z*a.z)/u;p=Math.acos(Math.max(-1,Math.min(1,e)))}p<.1||o.push(r)}return a=o.map((t=>e.pointAt(t))),a}onmessage=function(n){const i=n.data;switch(i.type){case"init":t=i.libraryConfig;const n=t.wasmBinary;let c;e=new Promise((function(e){c={wasmBinary:n,onRuntimeInitialized:e},rhino3dm(c)})).then((()=>{r=c}));break;case"decode":s=i.id;const l=i.buffer;e.then((()=>{try{const e=function(e,t){const r=new Uint8Array(t),n=e.File3dm.fromByteArray(r),i=[],c=[],l=[],u=[],p=[],h=[],d=[],y=n.objects(),g=y.count;for(let e=0;e<g;e++){const t=y.get(e),r=a(t,n);t.delete(),r&&i.push(r)}for(let e=0;e<n.instanceDefinitions().count();e++){const t=n.instanceDefinitions().get(e),r=o(t);r.objectIds=t.getObjectIds(),i.push({geometry:null,attributes:r,objectType:"InstanceDefinition"})}const m=[e.TextureType.Diffuse,e.TextureType.Bump,e.TextureType.Transparency,e.TextureType.Opacity,e.TextureType.Emap],b=[e.TextureType.PBR_BaseColor,e.TextureType.PBR_Subsurface,e.TextureType.PBR_SubsurfaceScattering,e.TextureType.PBR_SubsurfaceScatteringRadius,e.TextureType.PBR_Metallic,e.TextureType.PBR_Specular,e.TextureType.PBR_SpecularTint,e.TextureType.PBR_Roughness,e.TextureType.PBR_Anisotropic,e.TextureType.PBR_Anisotropic_Rotation,e.TextureType.PBR_Sheen,e.TextureType.PBR_SheenTint,e.TextureType.PBR_Clearcoat,e.TextureType.PBR_ClearcoatBump,e.TextureType.PBR_ClearcoatRoughness,e.TextureType.PBR_OpacityIor,e.TextureType.PBR_OpacityRoughness,e.TextureType.PBR_Emission,e.TextureType.PBR_AmbientOcclusion,e.TextureType.PBR_Displacement];for(let e=0;e<n.materials().count();e++){const t=n.materials().get(e),r=t.physicallyBased();let a=o(t);const i=[];for(let e=0;e<m.length;e++){const r=t.getTexture(m[e]);if(r){let t=m[e].constructor.name;t=t.substring(12,t.length);const a={type:t},o=n.getEmbeddedFileAsBase64(r.fileName);a.wrapU=r.wrapU,a.wrapV=r.wrapV,a.wrapW=r.wrapW;const c=r.uvwTransform.toFloatArray(!0);a.repeat=[c[0],c[5]],o?a.image="data:image/png;base64,"+o:(self.postMessage({type:"warning",id:s,data:{message:`THREE.3DMLoader: Image for ${t} texture not embedded in file.`,type:"missing resource"}}),a.image=null),i.push(a),r.delete()}}if(a.textures=i,r.supported){for(let e=0;e<b.length;e++){const r=t.getTexture(b[e]);if(r){const t=n.getEmbeddedFileAsBase64(r.fileName);let s=b[e].constructor.name;s=s.substring(12,s.length);const a={type:s,image:"data:image/png;base64,"+t};i.push(a),r.delete()}}const e=o(t.physicallyBased());a=Object.assign(e,a)}c.push(a),t.delete(),r.delete()}for(let e=0;e<n.layers().count();e++){const t=n.layers().get(e),r=o(t);l.push(r),t.delete()}for(let e=0;e<n.views().count();e++){const t=n.views().get(e),r=o(t);u.push(r),t.delete()}for(let e=0;e<n.namedViews().count();e++){const t=n.namedViews().get(e),r=o(t);p.push(r),t.delete()}for(let e=0;e<n.groups().count();e++){const t=n.groups().get(e),r=o(t);h.push(r),t.delete()}const f=o(n.settings()),w=n.strings().count();for(let e=0;e<w;e++)d.push(n.strings().get(e));return n.delete(),{objects:i,materials:c,layers:l,views:u,namedViews:p,groups:h,strings:d,settings:f}}(r,l);self.postMessage({type:"decode",id:i.id,data:e})}catch(e){self.postMessage({type:"error",id:i.id,error:e})}}))}}}}}]);