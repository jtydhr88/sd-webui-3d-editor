"use strict";(self.webpackChunksd_webui_3d_editor=self.webpackChunksd_webui_3d_editor||[]).push([[703],{6703:function(e,a,t){t.r(a),t.d(a,{GeometryParametersPanel:function(){return s}});var d=t(9477),n=t(49),r=t(7703);function s(e,a){var t=e.strings,s=new n.po,g=a.geometry.parameters,i=new n.Bb,u=new n.KP(g.radius).onChange(l);i.add(new n.sm(t.getKey("sidebar/geometry/capsule_geometry/radius")).setWidth("90px")),i.add(u),s.add(i);var o=new n.Bb,w=new n.KP(g.height).onChange(l);o.add(new n.sm(t.getKey("sidebar/geometry/capsule_geometry/length")).setWidth("90px")),o.add(w),s.add(o);var m=new n.Bb,p=new n.KP(g.capSegments).onChange(l);m.add(new n.sm(t.getKey("sidebar/geometry/capsule_geometry/capseg")).setWidth("90px")),m.add(p),s.add(m);var c=new n.Bb,h=new n.sN(g.radialSegments).setRange(1,1/0).onChange(l);function l(){e.execute(new r.H(e,a,new d.BVQ(u.getValue(),w.getValue(),p.getValue(),h.getValue())))}return c.add(new n.sm(t.getKey("sidebar/geometry/capsule_geometry/radialseg")).setWidth("90px")),c.add(h),s.add(c),s}}}]);