"use strict";(self.webpackChunksd_webui_3d_editor=self.webpackChunksd_webui_3d_editor||[]).push([[178],{9179:function(e,t,a){a.r(t),a.d(t,{GeometryParametersPanel:function(){return s}});var n=a(9477),d=a(49),r=a(7703);function s(e,t){var a=e.strings,s=new d.po,g=t.geometry.parameters,i=new d.Bb,o=new d.KP(g.radius).onChange(b);i.add(new d.sm(a.getKey("sidebar/geometry/circle_geometry/radius")).setWidth("90px")),i.add(o),s.add(i);var u=new d.Bb,w=new d.sN(g.segments).setRange(3,1/0).onChange(b);u.add(new d.sm(a.getKey("sidebar/geometry/circle_geometry/segments")).setWidth("90px")),u.add(w),s.add(u);var m=new d.Bb,h=new d.KP(g.thetaStart*n.M8C.RAD2DEG).setStep(10).onChange(b);m.add(new d.sm(a.getKey("sidebar/geometry/circle_geometry/thetastart")).setWidth("90px")),m.add(h),s.add(m);var c=new d.Bb,y=new d.KP(g.thetaLength*n.M8C.RAD2DEG).setStep(10).onChange(b);function b(){e.execute(new r.H(e,t,new n.zf8(o.getValue(),w.getValue(),h.getValue()*n.M8C.DEG2RAD,y.getValue()*n.M8C.DEG2RAD)))}return c.add(new d.sm(a.getKey("sidebar/geometry/circle_geometry/thetalength")).setWidth("90px")),c.add(y),s.add(c),s}}}]);