"use strict";(self.webpackChunksd_webui_3d_editor=self.webpackChunksd_webui_3d_editor||[]).push([[670],{9670:function(e,t,a){a.r(t),a.d(t,{GeometryParametersPanel:function(){return s}});var n=a(9477),d=a(49),r=a(7703);function s(e,t){var a=e.strings,s=e.signals,i=new d.po,o=t.geometry.parameters,u=new d.Bb,g=new d.KP(o.radius).onChange(h);u.add(new d.sm(a.getKey("sidebar/geometry/icosahedron_geometry/radius")).setWidth("90px")),u.add(g),i.add(u);var c=new d.Bb,w=new d.sN(o.detail).setRange(0,1/0).onChange(h);function h(){e.execute(new r.H(e,t,new n.cJO(g.getValue(),w.getValue()))),s.objectChanged.dispatch(t)}return c.add(new d.sm(a.getKey("sidebar/geometry/icosahedron_geometry/detail")).setWidth("90px")),c.add(w),i.add(c),i}}}]);