"use strict";(self.webpackChunksd_webui_3d_editor=self.webpackChunksd_webui_3d_editor||[]).push([[150],{5150:function(e,t,n){n.r(t),n.d(t,{GeometryParametersPanel:function(){return d}});var r=n(9477),s=n(49),a=n(7703);function d(e,t){var n=e.strings,d=new s.po,u=t.geometry.parameters,i=new s.Bb,o=new s.sN(u.curveSegments||12).onChange((function(){e.execute(new a.H(e,t,new r.oa8(u.shapes,o.getValue())))})).setRange(1,1/0);i.add(new s.sm(n.getKey("sidebar/geometry/shape_geometry/curveSegments")).setWidth("90px")),i.add(o),d.add(i);var g=new s.y3(n.getKey("sidebar/geometry/shape_geometry/extrude")).onClick((function(){e.execute(new a.H(e,t,new r.O7d(u.shapes,{curveSegments:o.getValue()})))})).setWidth("90px").setMarginLeft("90px");return d.add(g),d}}}]);