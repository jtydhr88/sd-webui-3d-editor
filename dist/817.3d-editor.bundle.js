"use strict";(self.webpackChunksd_webui_3d_editor=self.webpackChunksd_webui_3d_editor||[]).push([[817],{5817:function(e,t,o){o.r(t),o.d(t,{DRACOExporter:function(){return n}});var r=o(9477);class n{parse(e,t={}){if(t=Object.assign({decodeSpeed:5,encodeSpeed:5,encoderMethod:n.MESH_EDGEBREAKER_ENCODING,quantization:[16,8,8,8,8],exportUvs:!0,exportNormals:!0,exportColor:!1},t),void 0===DracoEncoderModule)throw new Error("THREE.DRACOExporter: required the draco_encoder to work.");const o=e.geometry,r=DracoEncoderModule(),d=new r.Encoder;let c,u;if(!0===e.isMesh){c=new r.MeshBuilder,u=new r.Mesh;const e=o.getAttribute("position");c.AddFloatAttributeToMesh(u,r.POSITION,e.count,e.itemSize,e.array);const n=o.getIndex();if(null!==n)c.AddFacesToMesh(u,n.count/3,n.array);else{const t=new(e.count>65535?Uint32Array:Uint16Array)(e.count);for(let e=0;e<t.length;e++)t[e]=e;c.AddFacesToMesh(u,e.count,t)}if(!0===t.exportNormals){const e=o.getAttribute("normal");void 0!==e&&c.AddFloatAttributeToMesh(u,r.NORMAL,e.count,e.itemSize,e.array)}if(!0===t.exportUvs){const e=o.getAttribute("uv");void 0!==e&&c.AddFloatAttributeToMesh(u,r.TEX_COORD,e.count,e.itemSize,e.array)}if(!0===t.exportColor){const e=o.getAttribute("color");if(void 0!==e){const t=i(e);c.AddFloatAttributeToMesh(u,r.COLOR,e.count,e.itemSize,t)}}}else{if(!0!==e.isPoints)throw new Error("DRACOExporter: Unsupported object type.");{c=new r.PointCloudBuilder,u=new r.PointCloud;const e=o.getAttribute("position");if(c.AddFloatAttribute(u,r.POSITION,e.count,e.itemSize,e.array),!0===t.exportColor){const e=o.getAttribute("color");if(void 0!==e){const t=i(e);c.AddFloatAttribute(u,r.COLOR,e.count,e.itemSize,t)}}}}const s=new r.DracoInt8Array,a=void 0!==t.encodeSpeed?t.encodeSpeed:5,A=void 0!==t.decodeSpeed?t.decodeSpeed:5;if(d.SetSpeedOptions(a,A),void 0!==t.encoderMethod&&d.SetEncodingMethod(t.encoderMethod),void 0!==t.quantization)for(let e=0;e<5;e++)void 0!==t.quantization[e]&&d.SetAttributeQuantization(e,t.quantization[e]);let l;if(l=!0===e.isMesh?d.EncodeMeshToDracoBuffer(u,s):d.EncodePointCloudToDracoBuffer(u,!0,s),r.destroy(u),0===l)throw new Error("THREE.DRACOExporter: Draco encoding failed.");const E=new Int8Array(new ArrayBuffer(l));for(let e=0;e<l;e++)E[e]=s.GetValue(e);return r.destroy(s),r.destroy(d),r.destroy(c),E}}function i(e){const t=new r.Ilk,o=e.count,n=e.itemSize,i=new Float32Array(o*n);for(let r=0,d=o;r<d;r++)t.fromBufferAttribute(e,r).convertLinearToSRGB(),i[r*n]=t.r,i[r*n+1]=t.g,i[r*n+2]=t.b,4===n&&(i[r*n+3]=e.getW(r));return i}n.MESH_EDGEBREAKER_ENCODING=1,n.MESH_SEQUENTIAL_ENCODING=0,n.POINT_CLOUD=0,n.TRIANGULAR_MESH=1,n.INVALID=-1,n.POSITION=0,n.NORMAL=1,n.COLOR=2,n.TEX_COORD=3,n.GENERIC=4}}]);