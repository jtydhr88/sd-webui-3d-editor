"use strict";(self.webpackChunksd_webui_3d_editor=self.webpackChunksd_webui_3d_editor||[]).push([[893],{1893:function(e,t,a){a.r(t),a.d(t,{GeometryParametersPanel:function(){return s}});var d=a(9477),r=a(49),n=a(7703);function s(e,t){var a=e.strings,s=new r.po,g=t.geometry.parameters,u=new r.Bb,o=new r.KP(g.radius).onChange(_);u.add(new r.sm(a.getKey("sidebar/geometry/torus_geometry/radius")).setWidth("90px")),u.add(o),s.add(u);var i=new r.Bb,m=new r.KP(g.tube).onChange(_);i.add(new r.sm(a.getKey("sidebar/geometry/torus_geometry/tube")).setWidth("90px")),i.add(m),s.add(i);var w=new r.Bb,b=new r.sN(g.radialSegments).setRange(1,1/0).onChange(_);w.add(new r.sm(a.getKey("sidebar/geometry/torus_geometry/radialsegments")).setWidth("90px")),w.add(b),s.add(w);var y=new r.Bb,h=new r.sN(g.tubularSegments).setRange(1,1/0).onChange(_);y.add(new r.sm(a.getKey("sidebar/geometry/torus_geometry/tubularsegments")).setWidth("90px")),y.add(h),s.add(y);var l=new r.Bb,p=new r.KP(g.arc*d.M8C.RAD2DEG).setStep(10).onChange(_);function _(){e.execute(new n.H(e,t,new d.XvJ(o.getValue(),m.getValue(),b.getValue(),h.getValue(),p.getValue()*d.M8C.DEG2RAD)))}return l.add(new r.sm(a.getKey("sidebar/geometry/torus_geometry/arc")).setWidth("90px")),l.add(p),s.add(l),s}}}]);