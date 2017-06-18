var TDev;
if (!TDev) TDev = {};

TDev.precompiledScript = {
"this": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "Let\u0027s get the coin";
cs.scriptColor = "\u0023e25822";
cs.objectSingletons = {};
/* ACTION: main */
function a_FSjdEN2zEhA3aR4G(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_FSjdEN2zEhA3aR4G$0;
  s.name = "main";
  s.$board = undefined;
  s.$sprite11 = undefined;
  s.$sprite12 = undefined;
  s.$sprite = undefined;
  s.$sprite2 = undefined;
  s.$tapped = undefined;
  s.$x = undefined;
  s.$y = undefined;
  s.$sprite3 = undefined;
  s.$sprite4 = undefined;
  s.$tapped2 = undefined;
  s.$x1 = undefined;
  s.$y1 = undefined;
  s.$tapped3 = undefined;
  s.$x2 = undefined;
  s.$y2 = undefined;
  s.$sprite5 = undefined;
  s.$_body_ = undefined;
  s.$p = undefined;
  s.$_body_1 = undefined;
  s.$i = undefined;
  s.$sprite6 = undefined;
  s.$_body_2 = undefined;
  s.$sprite7 = undefined;
  s.$i1 = undefined;
  s.$sprite8 = undefined;
  s.$_body_3 = undefined;
  s.$sprite71 = undefined;
  s.$i2 = undefined;
  s.$sprite9 = undefined;
  s.$_body_4 = undefined;
  s.$sprite72 = undefined;
  s.$i3 = undefined;
  s.$sprite10 = undefined;
  s.$_body_5 = undefined;
  s.$sprite73 = undefined;
  s.$_body_6 = undefined;
  return s;
}
cs.registerAction("main", "FSjdEN2zEhA3aR4G", a_FSjdEN2zEhA3aR4G, true);

function ok1(s, a0) {
  return (a0 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok2(s, a0, a1) {
  return (a0 == undefined || a1 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok3(s, a0, a1, a2) {
  return (a0 == undefined || a1 == undefined || a2 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok4(s, a0, a1, a2, a3) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function a_FSjdEN2zEhA3aR4G$0(s) {
  (s.pc = "BGFqqqZP51EYcVG2");
  var t_libcall_0 = s.libs["ywmz2uHVSD5t3Zjh"]["start"](s);
  return s.rt.enter(t_libcall_0.invoke(t_libcall_0, a_FSjdEN2zEhA3aR4G$2));
}
cs.registerStep(a_FSjdEN2zEhA3aR4G$0, 'a_FSjdEN2zEhA3aR4G$0');

function a_FSjdEN2zEhA3aR4G$2(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  (s.$board = t_actRes_1);
  (s.pc = "xR8NNsDtYtNFJRNu");
  var t_resumeCtx_2 = s.rt.getBlockingResumeCtx(a_FSjdEN2zEhA3aR4G$3);
  (ok1(s, /* bimbim */ s.d.$X371sopyF7RQnKXg) && lib.Wall.set_background_picture(/* bimbim */ s.d.$X371sopyF7RQnKXg, t_resumeCtx_2));
  return a_FSjdEN2zEhA3aR4G$3;
}
cs.registerStep(a_FSjdEN2zEhA3aR4G$2, 'a_FSjdEN2zEhA3aR4G$2');

function a_FSjdEN2zEhA3aR4G$3(s) {
  (s.pc = "xU5732eXIZ2FnXu7");
  var t_call_3 = lib.Colors.transparent(s);
  var t_call_4 = lib.Colors.transparent(s);
  var t_call_5 = lib.Colors.transparent(s);
  var t_libcall_6 = s.libs["ywmz2uHVSD5t3Zjh"]["set hud colors"](s);
  return s.rt.enter(t_libcall_6.invoke(t_libcall_6, a_FSjdEN2zEhA3aR4G$4, t_call_3, t_call_4, t_call_5));
}
cs.registerStep(a_FSjdEN2zEhA3aR4G$3, 'a_FSjdEN2zEhA3aR4G$3');

function a_FSjdEN2zEhA3aR4G$4(s) {
  (s.pc = "FIW6VI22bFYaXx0W");
  var t_libcall_7 = s.libs["ywmz2uHVSD5t3Zjh"]["create sprite"](s);
  return s.rt.enter(t_libcall_7.invoke(t_libcall_7, a_FSjdEN2zEhA3aR4G$5, /* Let's get rich */ s.d.$jcv0Otz7eNaBqx9W));
}
cs.registerStep(a_FSjdEN2zEhA3aR4G$4, 'a_FSjdEN2zEhA3aR4G$4');

function a_FSjdEN2zEhA3aR4G$5(s) {
  var t_actRes_8 = s.rt.returnedFrom.result;
  (s.$sprite11 = t_actRes_8);
  (s.pc = "xYJMUofg83OJ22o2");
  var t_libcall_9 = s.libs["ywmz2uHVSD5t3Zjh"]["create sprite"](s);
  return s.rt.enter(t_libcall_9.invoke(t_libcall_9, a_FSjdEN2zEhA3aR4G$6, /* hahahahhaaahhaaaaa */ s.d.$xbPAzQG5HOZgoAFs));
}
cs.registerStep(a_FSjdEN2zEhA3aR4G$5, 'a_FSjdEN2zEhA3aR4G$5');

function a_FSjdEN2zEhA3aR4G$6(s) {
  var t_actRes_10 = s.rt.returnedFrom.result;
  (s.$sprite12 = t_actRes_10);
  (s.pc = "cuBHLGW30RPKQpdw");
  var t_call_11 = (ok1(s, s.$board) && s.$board.width(s));
  var t_infix_12 = (ok1(s, t_call_11) && (t_call_11 / 2));
  s.rt.logObjectMutation(s.$sprite12);
  (ok2(s, s.$sprite12, t_infix_12) && s.$sprite12.set_pos(t_infix_12, 130, s));
  (s.pc = "IaZ2FGO9b3t3BZqy");
  var t_call_13 = (ok1(s, s.$sprite12) && s.$sprite12.width(s));
  var t_infix_14 = (ok1(s, t_call_13) && (t_call_13 * 2));
  s.rt.logObjectMutation(s.$sprite12);
  (ok2(s, s.$sprite12, t_infix_14) && s.$sprite12.set_width(t_infix_14, s));
  (s.pc = "QGD1jPMdXdGXh8yp");
  var t_call_15 = (ok1(s, s.$board) && s.$board.width(s));
  var t_infix_16 = (ok1(s, t_call_15) && (t_call_15 / 2));
  s.rt.logObjectMutation(s.$sprite11);
  (ok2(s, s.$sprite11, t_infix_16) && s.$sprite11.set_pos(t_infix_16, 100, s));
  (s.pc = "BuJx8l3bHCOWw22R");
  var t_call_17 = (ok1(s, s.$sprite11) && s.$sprite11.width(s));
  var t_infix_18 = (ok1(s, t_call_17) && (t_call_17 * 4));
  s.rt.logObjectMutation(s.$sprite11);
  (ok2(s, s.$sprite11, t_infix_18) && s.$sprite11.set_width(t_infix_18, s));
  (s.pc = "DWNbdiTRfbFpG7RP");
  var t_libcall_19 = s.libs["ywmz2uHVSD5t3Zjh"]["create sprite"](s);
  return s.rt.enter(t_libcall_19.invoke(t_libcall_19, a_FSjdEN2zEhA3aR4G$7, /* playtd */ s.d.$fmUSjUtfBJJZV5Zm));
}
cs.registerStep(a_FSjdEN2zEhA3aR4G$6, 'a_FSjdEN2zEhA3aR4G$6');

function a_FSjdEN2zEhA3aR4G$7(s) {
  var t_actRes_20 = s.rt.returnedFrom.result;
  (s.$sprite = t_actRes_20);
  (s.pc = "Bnig83edcZPE8fiU");
  var t_call_21 = (ok1(s, s.$board) && s.$board.width(s));
  var t_infix_22 = (ok1(s, t_call_21) && (t_call_21 / 2));
  var t_call_23 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_24 = (ok1(s, t_call_23) && (t_call_23 / 2));
  s.rt.logObjectMutation(s.$sprite);
  (ok3(s, s.$sprite, t_infix_22, t_infix_24) && s.$sprite.set_pos(t_infix_22, t_infix_24, s));
  (s.pc = "xaeNBMyFUf2NXeOZ");
  var t_libcall_25 = s.libs["ywmz2uHVSD5t3Zjh"]["create sprite"](s);
  return s.rt.enter(t_libcall_25.invoke(t_libcall_25, a_FSjdEN2zEhA3aR4G$8, /* asddsa */ s.d.$lrOhNhLXurCslWI7));
}
cs.registerStep(a_FSjdEN2zEhA3aR4G$7, 'a_FSjdEN2zEhA3aR4G$7');

function a_FSjdEN2zEhA3aR4G$8(s) {
  var t_actRes_26 = s.rt.returnedFrom.result;
  (s.$sprite2 = t_actRes_26);
  (s.pc = "K4iCbkWkVZXdVmD9");
  var t_call_27 = (ok1(s, s.$sprite) && s.$sprite.x(s));
  var t_call_28 = (ok1(s, s.$sprite) && s.$sprite.y(s));
  var t_infix_29 = (ok1(s, t_call_28) && (t_call_28 + 100));
  s.rt.logObjectMutation(s.$sprite2);
  (ok3(s, s.$sprite2, t_call_27, t_infix_29) && s.$sprite2.set_pos(t_call_27, t_infix_29, s));
  (s.pc = "TTbxnG2owcIYVkU0");
  var t_call_30 = (ok1(s, s.$sprite2) && s.$sprite2.width(s));
  var t_infix_31 = (ok1(s, t_call_30) && (t_call_30 * 2));
  s.rt.logObjectMutation(s.$sprite2);
  (ok2(s, s.$sprite2, t_infix_31) && s.$sprite2.set_width(t_infix_31, s));
  (s.pc = "U7RmoaCWxD6LVVOv");
  var t_lmbv_32 = s.$sprite;
  var t_lmbv_33 = s.$sprite11;
  var t_lmbv_34 = s.$sprite12;
  var t_lmbv_35 = s.$sprite2;
  var t_lmbv_36 = s.$board;
  var t_lmbProxy_37 = s.libs.mkLambdaProxy;
  (s.$tapped = function(la0, la1, la2, la3) { return a_a_FSjdEN2zEhA3aR4G$9(t_lmbProxy_37(la0), la1, la2, la3, t_lmbv_32, t_lmbv_33, t_lmbv_34, t_lmbv_35, t_lmbv_36) });
  (s.pc = "xjtvr6HZdcu0enAW");
  var t_call_38 = (ok2(s, s.$sprite2, s.$tapped) && s.$sprite2.on_tap(s.$tapped, s));
  t_call_38;
  (s.pc = "bNOQop5jG25Fzsn6");
  var t_lmbv_39 = s.$sprite;
  var t_lmbv_40 = s.$sprite2;
  var t_lmbv_41 = s.$sprite11;
  var t_lmbv_42 = s.$sprite12;
  var t_lmbv_43 = s.$board;
  var t_lmbProxy_44 = s.libs.mkLambdaProxy;
  (s.$tapped3 = function(la0, la1, la2, la3) { return a_a_FSjdEN2zEhA3aR4G$10(t_lmbProxy_44(la0), la1, la2, la3, t_lmbv_39, t_lmbv_40, t_lmbv_41, t_lmbv_42, t_lmbv_43) });
  (s.pc = "x4xUc05IdQdCsudk");
  var t_call_45 = (ok2(s, s.$sprite, s.$tapped3) && s.$sprite.on_tap(s.$tapped3, s));
  t_call_45;
  (s.pc = "XGc64ZfYAorr89B2");
  var t_lmbProxy_46 = s.libs.mkLambdaProxy;
  (s.$_body_6 = function(la0, la1) { return a_a_FSjdEN2zEhA3aR4G$11(t_lmbProxy_46(la0), la1) });
  (s.pc = "vrvIqZ22LmKFWP3F");
  var t_libcall_47 = s.libs["ywmz2uHVSD5t3Zjh"]["on end"](s);
  return s.rt.enter(t_libcall_47.invoke(t_libcall_47, a_FSjdEN2zEhA3aR4G$12, s.$_body_6));
}
cs.registerStep(a_FSjdEN2zEhA3aR4G$8, 'a_FSjdEN2zEhA3aR4G$8');

function a_FSjdEN2zEhA3aR4G$12(s) {
  return s.rt.leave();
}
cs.registerStep(a_FSjdEN2zEhA3aR4G$12, 'a_FSjdEN2zEhA3aR4G$12');

/* ACTION: a_FSjdEN2zEhA3aR4G::lambda::9 */
function a_a_FSjdEN2zEhA3aR4G$9(previous, returnAddr, $x, $y, $sprite, $sprite11, $sprite12, $sprite2, $board) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_FSjdEN2zEhA3aR4G$9$0;
  s.name = "main";
  s.$x = $x;
  s.$y = $y;
  s.$sprite = $sprite;
  s.$sprite11 = $sprite11;
  s.$sprite12 = $sprite12;
  s.$sprite2 = $sprite2;
  s.$sprite3 = undefined;
  s.$board = $board;
  s.$sprite4 = undefined;
  s.$tapped2 = undefined;
  return s;
}
cs.registerLambda("a_FSjdEN2zEhA3aR4G\u003a\u003alambda\u003a\u003a9", "a_FSjdEN2zEhA3aR4G$9", a_a_FSjdEN2zEhA3aR4G$9, true);

function ok5(s, a0, a1, a2, a3, a4) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined || a4 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok6(s, a0, a1, a2, a3, a4, a5) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined || a4 == undefined || a5 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function a_a_FSjdEN2zEhA3aR4G$9$0(s) {
  (s.pc = "lvR5s4LtbgQjytHm");
  s.rt.logObjectMutation(s.$sprite);
  (ok1(s, s.$sprite) && s.$sprite.hide(s));
  (s.pc = "XnpnxcKqnvn6ULjU");
  s.rt.logObjectMutation(s.$sprite11);
  (ok1(s, s.$sprite11) && s.$sprite11.hide(s));
  (s.pc = "ZwnVFd41tw39ajpS");
  s.rt.logObjectMutation(s.$sprite12);
  (ok1(s, s.$sprite12) && s.$sprite12.hide(s));
  (s.pc = "TMZjDE2FMgxIOzSK");
  s.rt.logObjectMutation(s.$sprite2);
  (ok1(s, s.$sprite2) && s.$sprite2.hide(s));
  (s.pc = "xPL4S3kqnraKzYDu");
  var t_libcall_0 = s.libs["ywmz2uHVSD5t3Zjh"]["create sprite"](s);
  return s.rt.enter(t_libcall_0.invoke(t_libcall_0, a_a_FSjdEN2zEhA3aR4G$9$2, /* asdria */ s.d.$xfEzjZG7FDBK24Gc));
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$9$0, 'a_a_FSjdEN2zEhA3aR4G$9$0');

function a_a_FSjdEN2zEhA3aR4G$9$2(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  (s.$sprite3 = t_actRes_1);
  (s.pc = "KSIyD1jJlGr0nYNn");
  var t_call_2 = (ok1(s, s.$sprite3) && s.$sprite3.width(s));
  var t_infix_3 = (ok1(s, t_call_2) && (t_call_2 * 4));
  s.rt.logObjectMutation(s.$sprite3);
  (ok2(s, s.$sprite3, t_infix_3) && s.$sprite3.set_width(t_infix_3, s));
  (s.pc = "eVSVRcZMTBdpN48L");
  var t_call_4 = (ok1(s, s.$board) && s.$board.width(s));
  var t_infix_5 = (ok1(s, t_call_4) && (t_call_4 / 2));
  var t_call_6 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_7 = (ok1(s, t_call_6) && (t_call_6 / 2));
  s.rt.logObjectMutation(s.$sprite3);
  (ok3(s, s.$sprite3, t_infix_5, t_infix_7) && s.$sprite3.set_pos(t_infix_5, t_infix_7, s));
  (s.pc = "De9ZuJxeefcnabso");
  var t_call_8 = (ok1(s, s.$board) && s.$board.create_text(100, 40, 20, "Tap any where to close...", s));
  s.rt.markAllocated(t_call_8);
  (s.$sprite4 = t_call_8);
  (s.pc = "xfnAtaXOmlzj74Os");
  var t_call_9 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_10 = (ok1(s, t_call_9) && (t_call_9 / 2));
  var t_infix_11 = (ok1(s, t_infix_10) && (t_infix_10 + 100));
  s.rt.logObjectMutation(s.$sprite4);
  (ok2(s, s.$sprite4, t_infix_11) && s.$sprite4.set_y(t_infix_11, s));
  (s.pc = "rSdJLIh40CU1e7sp");
  var t_call_12 = (ok1(s, s.$sprite3) && s.$sprite3.x(s));
  s.rt.logObjectMutation(s.$sprite4);
  (ok2(s, s.$sprite4, t_call_12) && s.$sprite4.set_x(t_call_12, s));
  (s.pc = "cXU1Bz4h4dT4VPZZ");
  var t_lmbv_13 = s.$sprite3;
  var t_lmbv_14 = s.$sprite4;
  var t_lmbv_15 = s.$sprite2;
  var t_lmbv_16 = s.$sprite11;
  var t_lmbv_17 = s.$sprite12;
  var t_lmbv_18 = s.$sprite;
  var t_lmbProxy_19 = s.libs.mkLambdaProxy;
  (s.$tapped2 = function(la0, la1, la2, la3) { return a_a_a_FSjdEN2zEhA3aR4G$9$3(t_lmbProxy_19(la0), la1, la2, la3, t_lmbv_13, t_lmbv_14, t_lmbv_15, t_lmbv_16, t_lmbv_17, t_lmbv_18) });
  (s.pc = "xoXpWXN3C6MGnDYu");
  s.rt.logObjectMutation(s.$board);
  var t_call_20 = (ok2(s, s.$board, s.$tapped2) && s.$board.on_tap(s.$tapped2, s));
  t_call_20;
  return s.rt.leave();
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$9$2, 'a_a_FSjdEN2zEhA3aR4G$9$2');

/* ACTION: a_FSjdEN2zEhA3aR4G::lambda::10 */
function a_a_FSjdEN2zEhA3aR4G$10(previous, returnAddr, $x, $y, $sprite, $sprite2, $sprite11, $sprite12, $board) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_FSjdEN2zEhA3aR4G$10$0;
  s.name = "main";
  s.$x = $x;
  s.$y = $y;
  s.$sprite = $sprite;
  s.$sprite2 = $sprite2;
  s.$sprite5 = undefined;
  s.$sprite11 = $sprite11;
  s.$sprite12 = $sprite12;
  s.$board = $board;
  s.$_body_ = undefined;
  s.$_body_1 = undefined;
  s.$i = undefined;
  s.$sprite6 = undefined;
  s.$_body_2 = undefined;
  s.$i1 = undefined;
  s.$sprite8 = undefined;
  s.$_body_3 = undefined;
  s.$i2 = undefined;
  s.$sprite9 = undefined;
  s.$_body_4 = undefined;
  s.$i3 = undefined;
  s.$sprite10 = undefined;
  s.$_body_5 = undefined;
  return s;
}
cs.registerLambda("a_FSjdEN2zEhA3aR4G\u003a\u003alambda\u003a\u003a10", "a_FSjdEN2zEhA3aR4G$10", a_a_FSjdEN2zEhA3aR4G$10, true);

function a_a_FSjdEN2zEhA3aR4G$10$0(s) {
  (s.pc = "ZD3pTtowOpLeutTP");
  s.rt.logObjectMutation(s.$sprite);
  (ok1(s, s.$sprite) && s.$sprite.hide(s));
  (s.pc = "xXy14u6VPYGKzSnw");
  s.rt.logObjectMutation(s.$sprite);
  (ok1(s, s.$sprite) && s.$sprite.set_width(0, s));
  (s.pc = "cwlQV7p1c6QRk84H");
  s.rt.logObjectMutation(s.$sprite2);
  (ok1(s, s.$sprite2) && s.$sprite2.hide(s));
  (s.pc = "Y3CFooX2nZKxjDkX");
  s.rt.logObjectMutation(s.$sprite2);
  (ok1(s, s.$sprite2) && s.$sprite2.set_width(0, s));
  (s.pc = "QZPsyDBVuVmT2d1R");
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_a_FSjdEN2zEhA3aR4G$10$2);
  (ok1(s, /* bimbimm */ s.d.$ZWxFLValkpVbmEaU) && lib.Wall.set_background_picture(/* bimbimm */ s.d.$ZWxFLValkpVbmEaU, t_resumeCtx_0));
  return a_a_FSjdEN2zEhA3aR4G$10$2;
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$10$0, 'a_a_FSjdEN2zEhA3aR4G$10$0');

function a_a_FSjdEN2zEhA3aR4G$10$2(s) {
  (s.pc = "xtBL3Iyf9jZ2lZMN");
  var t_resumeCtx_1 = s.rt.getBlockingResumeCtx(a_a_FSjdEN2zEhA3aR4G$10$3);
  (ok1(s, /* Craziness Party */ s.d.$xd4PEHQy9kbHTudV) && /* Craziness Party */ s.d.$xd4PEHQy9kbHTudV.play(t_resumeCtx_1));
  return a_a_FSjdEN2zEhA3aR4G$10$3;
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$10$2, 'a_a_FSjdEN2zEhA3aR4G$10$2');

function a_a_FSjdEN2zEhA3aR4G$10$3(s) {
  (s.pc = "owS3u76l5zmPUP6y");
  var t_call_2 = lib.Colors.pink(s);
  var t_call_3 = lib.Colors.green(s);
  var t_call_4 = lib.Colors.orange(s);
  var t_libcall_5 = s.libs["ywmz2uHVSD5t3Zjh"]["set hud colors"](s);
  return s.rt.enter(t_libcall_5.invoke(t_libcall_5, a_a_FSjdEN2zEhA3aR4G$10$4, t_call_2, t_call_3, t_call_4));
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$10$3, 'a_a_FSjdEN2zEhA3aR4G$10$3');

function a_a_FSjdEN2zEhA3aR4G$10$4(s) {
  (s.pc = "K8HQ1Yxa7mfvA3XS");
  var t_libcall_6 = s.libs["ywmz2uHVSD5t3Zjh"]["create sprite"](s);
  return s.rt.enter(t_libcall_6.invoke(t_libcall_6, a_a_FSjdEN2zEhA3aR4G$10$5, /* HackCart */ s.d.$NUMSA7299nO1r4PH));
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$10$4, 'a_a_FSjdEN2zEhA3aR4G$10$4');

function a_a_FSjdEN2zEhA3aR4G$10$5(s) {
  var t_actRes_7 = s.rt.returnedFrom.result;
  (s.$sprite5 = t_actRes_7);
  (s.pc = "N2ijxwf6XO46ZZ9T");
  s.rt.logObjectMutation(s.$sprite11);
  (ok1(s, s.$sprite11) && s.$sprite11.hide(s));
  (s.pc = "O8V37dLjLnO5626f");
  s.rt.logObjectMutation(s.$sprite11);
  (ok1(s, s.$sprite11) && s.$sprite11.set_width(0, s));
  (s.pc = "GiI60kA8Iu2q9Kvk");
  s.rt.logObjectMutation(s.$sprite12);
  (ok1(s, s.$sprite12) && s.$sprite12.hide(s));
  (s.pc = "lLq4cfRkUD9mrWS3");
  s.rt.logObjectMutation(s.$sprite12);
  (ok1(s, s.$sprite12) && s.$sprite12.set_width(0, s));
  (s.pc = "q20mtyDhJTZw8pNi");
  var t_call_8 = (ok1(s, s.$board) && s.$board.width(s));
  var t_infix_9 = (ok1(s, t_call_8) && (t_call_8 / 2));
  var t_call_10 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_11 = (ok1(s, t_call_10) && (t_call_10 - 40));
  s.rt.logObjectMutation(s.$sprite5);
  (ok3(s, s.$sprite5, t_infix_9, t_infix_11) && s.$sprite5.set_pos(t_infix_9, t_infix_11, s));
  (s.pc = "xSNH8wVgT5UMtDEn");
  s.rt.logObjectMutation(s.$sprite5);
  (ok1(s, s.$sprite5) && s.$sprite5.set_width(150, s));
  (s.pc = "xESA31f2ZHQekawg");
  var t_lmbv_12 = s.$sprite5;
  var t_lmbv_13 = s.$board;
  var t_lmbProxy_14 = s.libs.mkLambdaProxy;
  (s.$_body_ = function(la0, la1) { return a_a_a_FSjdEN2zEhA3aR4G$10$6(t_lmbProxy_14(la0), la1, t_lmbv_12, t_lmbv_13) });
  (s.pc = "JGnTo3FgYyDGyDc9");
  var t_call_15 = (ok2(s, s.$sprite, s.$_body_) && s.$sprite.on_every_frame(s.$_body_, s));
  t_call_15;
  (s.pc = "aJF1hivMSRHhuqXw");
  var t_libcall_16 = s.libs["ywmz2uHVSD5t3Zjh"]["start countdown timer"](s);
  return s.rt.enter(t_libcall_16.invoke(t_libcall_16, a_a_FSjdEN2zEhA3aR4G$10$7, 90));
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$10$5, 'a_a_FSjdEN2zEhA3aR4G$10$5');

function a_a_FSjdEN2zEhA3aR4G$10$7(s) {
  (s.pc = "t85vjgf4jN2PIhIM");
  var t_call_17 = lib.Colors.pink(s);
  var t_call_18 = lib.Colors.green(s);
  var t_call_19 = lib.Colors.orange(s);
  var t_libcall_20 = s.libs["ywmz2uHVSD5t3Zjh"]["set hud colors"](s);
  return s.rt.enter(t_libcall_20.invoke(t_libcall_20, a_a_FSjdEN2zEhA3aR4G$10$8, t_call_17, t_call_18, t_call_19));
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$10$7, 'a_a_FSjdEN2zEhA3aR4G$10$7');

function a_a_FSjdEN2zEhA3aR4G$10$8(s) {
  (s.pc = "O9eJ6r07l12hUVZj");
  var t_lmbProxy_21 = s.libs.mkLambdaProxy;
  (s.$_body_1 = function(la0, la1) { return a_a_a_FSjdEN2zEhA3aR4G$10$9(t_lmbProxy_21(la0), la1) });
  (s.pc = "xwVsR5XECVFe6712");
  var t_call_22 = (ok2(s, s.$board, s.$_body_1) && s.$board.on_every_frame(s.$_body_1, s));
  t_call_22;
  (s.pc = "LLqFoBfkwVlQbPE5");
  s.t_bnd_23 = 10;
  (s.$i = 0);
  return a_a_FSjdEN2zEhA3aR4G$10$10;
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$10$8, 'a_a_FSjdEN2zEhA3aR4G$10$8');

function a_a_FSjdEN2zEhA3aR4G$10$10(s) {
  if ((s.$i < s.t_bnd_23)) {
  (s.pc = "VMJ9rS0x2bjAFCUb");
  var t_resumeCtx_24 = s.rt.getBlockingResumeCtx(a_a_FSjdEN2zEhA3aR4G$10$14);
  var t_call_25 = (ok2(s, s.$board, /* AnonymousCoin */ s.d.$a36Wj7Cl2kOuseIf) && s.$board.create_picture(/* AnonymousCoin */ s.d.$a36Wj7Cl2kOuseIf, t_resumeCtx_24));
  return a_a_FSjdEN2zEhA3aR4G$10$14;
  }
  (s.pc = "n6miLFfGkDFELWe4");
  s.t_bnd_38 = 5;
  (s.$i1 = 0);
  return a_a_FSjdEN2zEhA3aR4G$10$16;
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$10$10, 'a_a_FSjdEN2zEhA3aR4G$10$10');

function a_a_FSjdEN2zEhA3aR4G$10$14(s) {
  var t_pauseRes_26 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_26);
  (s.$sprite6 = t_pauseRes_26);
  (s.pc = "gjT2BwnppMQ7AA4p");
  s.rt.logObjectMutation(s.$sprite6);
  (ok1(s, s.$sprite6) && s.$sprite6.set_speed_y(100, s));
  (s.pc = "VYdsmNu4HZWbkgtO");
  var t_call_27 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_28 = (ok1(s, t_call_27) && (0 - t_call_27));
  var t_call_29 = (ok1(s, t_infix_28) && lib.Math_.random_range(t_infix_28, 0, s));
  s.rt.logObjectMutation(s.$sprite6);
  (ok2(s, s.$sprite6, t_call_29) && s.$sprite6.set_y(t_call_29, s));
  (s.pc = "ckgYPUtVLsgGaqZt");
  var t_call_30 = (ok1(s, s.$board) && s.$board.width(s));
  var t_call_31 = (ok1(s, t_call_30) && lib.Math_.random_range(0, t_call_30, s));
  s.rt.logObjectMutation(s.$sprite6);
  (ok2(s, s.$sprite6, t_call_31) && s.$sprite6.set_x(t_call_31, s));
  (s.pc = "dD8Tv8QnF8l06CRF");
  var t_call_32 = lib.Math_.random_range(50, 100, s);
  s.rt.logObjectMutation(s.$sprite6);
  (ok2(s, s.$sprite6, t_call_32) && s.$sprite6.set_width(t_call_32, s));
  (s.pc = "BjsKB4iShG57TIVX");
  var t_lmbv_33 = s.$sprite6;
  var t_lmbv_34 = s.$board;
  var t_lmbv_35 = s.$sprite5;
  var t_lmbProxy_36 = s.libs.mkLambdaProxy;
  (s.$_body_2 = function(la0, la1) { return a_a_a_FSjdEN2zEhA3aR4G$10$15(t_lmbProxy_36(la0), la1, t_lmbv_33, t_lmbv_34, t_lmbv_35) });
  (s.pc = "eFYGZ7X22XtMJTjd");
  var t_call_37 = (ok2(s, s.$sprite6, s.$_body_2) && s.$sprite6.on_every_frame(s.$_body_2, s));
  t_call_37;
  (s.$i++);
  return a_a_FSjdEN2zEhA3aR4G$10$10;
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$10$14, 'a_a_FSjdEN2zEhA3aR4G$10$14');

function a_a_FSjdEN2zEhA3aR4G$10$16(s) {
  if ((s.$i1 < s.t_bnd_38)) {
  (s.pc = "b8rrGFjo7Kw4d7o1");
  var t_resumeCtx_39 = s.rt.getBlockingResumeCtx(a_a_FSjdEN2zEhA3aR4G$10$20);
  var t_call_40 = (ok2(s, s.$board, /* epbiai */ s.d.$Gt2MXBVi4C4U73ug) && s.$board.create_picture(/* epbiai */ s.d.$Gt2MXBVi4C4U73ug, t_resumeCtx_39));
  return a_a_FSjdEN2zEhA3aR4G$10$20;
  }
  (s.pc = "LPDafPORWeuIDgjx");
  s.t_bnd_53 = 1;
  (s.$i2 = 0);
  return a_a_FSjdEN2zEhA3aR4G$10$22;
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$10$16, 'a_a_FSjdEN2zEhA3aR4G$10$16');

function a_a_FSjdEN2zEhA3aR4G$10$20(s) {
  var t_pauseRes_41 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_41);
  (s.$sprite8 = t_pauseRes_41);
  (s.pc = "U9oIDxAQSNmF7esf");
  s.rt.logObjectMutation(s.$sprite8);
  (ok1(s, s.$sprite8) && s.$sprite8.set_speed_y(50, s));
  (s.pc = "xsnfw2TJsIUotybU");
  var t_call_42 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_43 = (ok1(s, t_call_42) && (0 - t_call_42));
  var t_call_44 = (ok1(s, t_infix_43) && lib.Math_.random_range(t_infix_43, 0, s));
  s.rt.logObjectMutation(s.$sprite8);
  (ok2(s, s.$sprite8, t_call_44) && s.$sprite8.set_y(t_call_44, s));
  (s.pc = "xCiHy4I4AyKZgwPj");
  var t_call_45 = (ok1(s, s.$board) && s.$board.width(s));
  var t_call_46 = (ok1(s, t_call_45) && lib.Math_.random_range(0, t_call_45, s));
  s.rt.logObjectMutation(s.$sprite8);
  (ok2(s, s.$sprite8, t_call_46) && s.$sprite8.set_x(t_call_46, s));
  (s.pc = "Ke4bcy71WAo2DucR");
  var t_call_47 = lib.Math_.random_range(75, 125, s);
  s.rt.logObjectMutation(s.$sprite8);
  (ok2(s, s.$sprite8, t_call_47) && s.$sprite8.set_width(t_call_47, s));
  (s.pc = "tYVm52dp6cW0tusA");
  var t_lmbv_48 = s.$sprite8;
  var t_lmbv_49 = s.$board;
  var t_lmbv_50 = s.$sprite5;
  var t_lmbProxy_51 = s.libs.mkLambdaProxy;
  (s.$_body_3 = function(la0, la1) { return a_a_a_FSjdEN2zEhA3aR4G$10$21(t_lmbProxy_51(la0), la1, t_lmbv_48, t_lmbv_49, t_lmbv_50) });
  (s.pc = "xZeLTLlYAGbPiF78");
  var t_call_52 = (ok2(s, s.$sprite8, s.$_body_3) && s.$sprite8.on_every_frame(s.$_body_3, s));
  t_call_52;
  (s.$i1++);
  return a_a_FSjdEN2zEhA3aR4G$10$16;
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$10$20, 'a_a_FSjdEN2zEhA3aR4G$10$20');

function a_a_FSjdEN2zEhA3aR4G$10$22(s) {
  if ((s.$i2 < s.t_bnd_53)) {
  (s.pc = "YZV2MWZIxRwKY9Xm");
  var t_resumeCtx_54 = s.rt.getBlockingResumeCtx(a_a_FSjdEN2zEhA3aR4G$10$26);
  var t_call_55 = (ok2(s, s.$board, /* creditcard */ s.d.$RCjkMnPYgSHCKoVz) && s.$board.create_picture(/* creditcard */ s.d.$RCjkMnPYgSHCKoVz, t_resumeCtx_54));
  return a_a_FSjdEN2zEhA3aR4G$10$26;
  }
  (s.pc = "HUr42MV6TZvWhRSn");
  s.t_bnd_68 = 1;
  (s.$i3 = 0);
  return a_a_FSjdEN2zEhA3aR4G$10$28;
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$10$22, 'a_a_FSjdEN2zEhA3aR4G$10$22');

function a_a_FSjdEN2zEhA3aR4G$10$26(s) {
  var t_pauseRes_56 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_56);
  (s.$sprite9 = t_pauseRes_56);
  (s.pc = "xuR5KtWTOuf2XtPp");
  s.rt.logObjectMutation(s.$sprite9);
  (ok1(s, s.$sprite9) && s.$sprite9.set_speed_y(10, s));
  (s.pc = "AJgzZXK3rD9Tn3GL");
  var t_call_57 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_58 = (ok1(s, t_call_57) && (0 - t_call_57));
  var t_call_59 = (ok1(s, t_infix_58) && lib.Math_.random_range(t_infix_58, 0, s));
  s.rt.logObjectMutation(s.$sprite9);
  (ok2(s, s.$sprite9, t_call_59) && s.$sprite9.set_y(t_call_59, s));
  (s.pc = "KVA2JNkk83XT2iw3");
  var t_call_60 = (ok1(s, s.$board) && s.$board.width(s));
  var t_call_61 = (ok1(s, t_call_60) && lib.Math_.random_range(0, t_call_60, s));
  s.rt.logObjectMutation(s.$sprite9);
  (ok2(s, s.$sprite9, t_call_61) && s.$sprite9.set_x(t_call_61, s));
  (s.pc = "x5aG1B6gLh3S6tvv");
  var t_call_62 = lib.Math_.random_range(50, 75, s);
  s.rt.logObjectMutation(s.$sprite9);
  (ok2(s, s.$sprite9, t_call_62) && s.$sprite9.set_width(t_call_62, s));
  (s.pc = "x7hhre6puiivPiId");
  var t_lmbv_63 = s.$sprite9;
  var t_lmbv_64 = s.$board;
  var t_lmbv_65 = s.$sprite5;
  var t_lmbProxy_66 = s.libs.mkLambdaProxy;
  (s.$_body_4 = function(la0, la1) { return a_a_a_FSjdEN2zEhA3aR4G$10$27(t_lmbProxy_66(la0), la1, t_lmbv_63, t_lmbv_64, t_lmbv_65) });
  (s.pc = "uOQ4CmrtL2TT0vIo");
  var t_call_67 = (ok2(s, s.$sprite9, s.$_body_4) && s.$sprite9.on_every_frame(s.$_body_4, s));
  t_call_67;
  (s.$i2++);
  return a_a_FSjdEN2zEhA3aR4G$10$22;
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$10$26, 'a_a_FSjdEN2zEhA3aR4G$10$26');

function a_a_FSjdEN2zEhA3aR4G$10$28(s) {
  if ((s.$i3 < s.t_bnd_68)) {
  (s.pc = "MF9oC2Opd1paImcK");
  var t_resumeCtx_69 = s.rt.getBlockingResumeCtx(a_a_FSjdEN2zEhA3aR4G$10$32);
  var t_call_70 = (ok2(s, s.$board, /* stopwatch */ s.d.$bxwGT3FgZ2CMDGA6) && s.$board.create_picture(/* stopwatch */ s.d.$bxwGT3FgZ2CMDGA6, t_resumeCtx_69));
  return a_a_FSjdEN2zEhA3aR4G$10$32;
  }
  return s.rt.leave();
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$10$28, 'a_a_FSjdEN2zEhA3aR4G$10$28');

function a_a_FSjdEN2zEhA3aR4G$10$32(s) {
  var t_pauseRes_71 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_71);
  (s.$sprite10 = t_pauseRes_71);
  (s.pc = "E4y0gxihYGAQzb4p");
  s.rt.logObjectMutation(s.$sprite10);
  (ok1(s, s.$sprite10) && s.$sprite10.set_speed_y(10, s));
  (s.pc = "tKvvNso4uF8owSfX");
  var t_call_72 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_73 = (ok1(s, t_call_72) && (0 - t_call_72));
  var t_call_74 = (ok1(s, t_infix_73) && lib.Math_.random_range(t_infix_73, 0, s));
  s.rt.logObjectMutation(s.$sprite10);
  (ok2(s, s.$sprite10, t_call_74) && s.$sprite10.set_y(t_call_74, s));
  (s.pc = "uqxj9QXbTyBa0tws");
  var t_call_75 = (ok1(s, s.$board) && s.$board.width(s));
  var t_call_76 = (ok1(s, t_call_75) && lib.Math_.random_range(0, t_call_75, s));
  s.rt.logObjectMutation(s.$sprite10);
  (ok2(s, s.$sprite10, t_call_76) && s.$sprite10.set_x(t_call_76, s));
  (s.pc = "x8FmOSXr4hsfguUn");
  var t_call_77 = lib.Math_.random_range(50, 75, s);
  s.rt.logObjectMutation(s.$sprite10);
  (ok2(s, s.$sprite10, t_call_77) && s.$sprite10.set_width(t_call_77, s));
  (s.pc = "ts1D0q8Q7jkXqa0k");
  var t_lmbv_78 = s.$sprite10;
  var t_lmbv_79 = s.$board;
  var t_lmbv_80 = s.$sprite5;
  var t_lmbProxy_81 = s.libs.mkLambdaProxy;
  (s.$_body_5 = function(la0, la1) { return a_a_a_FSjdEN2zEhA3aR4G$10$33(t_lmbProxy_81(la0), la1, t_lmbv_78, t_lmbv_79, t_lmbv_80) });
  (s.pc = "NdoTR6rR5uP26AbL");
  var t_call_82 = (ok2(s, s.$sprite10, s.$_body_5) && s.$sprite10.on_every_frame(s.$_body_5, s));
  t_call_82;
  (s.$i3++);
  return a_a_FSjdEN2zEhA3aR4G$10$28;
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$10$32, 'a_a_FSjdEN2zEhA3aR4G$10$32');

/* ACTION: a_FSjdEN2zEhA3aR4G::lambda::11 */
function a_a_FSjdEN2zEhA3aR4G$11(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_FSjdEN2zEhA3aR4G$11$0;
  s.name = "main";
  return s;
}
cs.registerLambda("a_FSjdEN2zEhA3aR4G\u003a\u003alambda\u003a\u003a11", "a_FSjdEN2zEhA3aR4G$11", a_a_FSjdEN2zEhA3aR4G$11, true);

function a_a_FSjdEN2zEhA3aR4G$11$0(s) {
  (s.pc = "tv22kivrltJ1Kdit");
  var t_obj_0 = s.rt.mkLibObject("ywmz2uHVSD5t3Zjh", "Splash Options");
  var t_libcall_1 = s.libs["ywmz2uHVSD5t3Zjh"]["splash"](s);
  return s.rt.enter(t_libcall_1.invoke(t_libcall_1, a_a_FSjdEN2zEhA3aR4G$11$2, "GAME OVER", t_obj_0));
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$11$0, 'a_a_FSjdEN2zEhA3aR4G$11$0');

function a_a_FSjdEN2zEhA3aR4G$11$2(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  t_actRes_2;
  (s.pc = "MRdYTPRkdAZgpbwa");
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_a_FSjdEN2zEhA3aR4G$11$3);
  (ok1(s, /* fail */ s.d.$yQjMH9MmXU86ZtXY) && /* fail */ s.d.$yQjMH9MmXU86ZtXY.play(t_resumeCtx_3));
  return a_a_FSjdEN2zEhA3aR4G$11$3;
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$11$2, 'a_a_FSjdEN2zEhA3aR4G$11$2');

function a_a_FSjdEN2zEhA3aR4G$11$3(s) {
  (s.pc = "WLuD8Dsi84NFWdR6");
  var t_resumeCtx_4 = s.rt.getBlockingResumeCtx(a_a_FSjdEN2zEhA3aR4G$11$4);
  (ok1(s, /* bimbim */ s.d.$X371sopyF7RQnKXg) && lib.Wall.set_background_picture(/* bimbim */ s.d.$X371sopyF7RQnKXg, t_resumeCtx_4));
  return a_a_FSjdEN2zEhA3aR4G$11$4;
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$11$3, 'a_a_FSjdEN2zEhA3aR4G$11$3');

function a_a_FSjdEN2zEhA3aR4G$11$4(s) {
  (s.pc = "x00b8r49crSMrh2V");
  var t_call_5 = lib.Colors.transparent(s);
  var t_call_6 = lib.Colors.transparent(s);
  var t_call_7 = lib.Colors.transparent(s);
  var t_libcall_8 = s.libs["ywmz2uHVSD5t3Zjh"]["set hud colors"](s);
  return s.rt.enter(t_libcall_8.invoke(t_libcall_8, a_a_FSjdEN2zEhA3aR4G$11$5, t_call_5, t_call_6, t_call_7));
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$11$4, 'a_a_FSjdEN2zEhA3aR4G$11$4');

function a_a_FSjdEN2zEhA3aR4G$11$5(s) {
  (s.pc = "cdtz2daN4UG2L36n");
  var t_libcall_9 = s.libs["ywmz2uHVSD5t3Zjh"]["score"](s);
  return s.rt.enter(t_libcall_9.invoke(t_libcall_9, a_a_FSjdEN2zEhA3aR4G$11$6));
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$11$5, 'a_a_FSjdEN2zEhA3aR4G$11$5');

function a_a_FSjdEN2zEhA3aR4G$11$6(s) {
  var t_actRes_10 = s.rt.returnedFrom.result;
  var t_concat_11 = lib.String_.concatAny("Your Score \u003a ", t_actRes_10);
  var t_resumeCtx_12 = s.rt.getBlockingResumeCtx(a_a_FSjdEN2zEhA3aR4G$11$7);
  (ok1(s, t_concat_11) && lib.App.restart(t_concat_11, t_resumeCtx_12));
  return a_a_FSjdEN2zEhA3aR4G$11$7;
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$11$6, 'a_a_FSjdEN2zEhA3aR4G$11$6');

function a_a_FSjdEN2zEhA3aR4G$11$7(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_FSjdEN2zEhA3aR4G$11$7, 'a_a_FSjdEN2zEhA3aR4G$11$7');

/* ACTION: a_a_FSjdEN2zEhA3aR4G$9::lambda::3 */
function a_a_a_FSjdEN2zEhA3aR4G$9$3(previous, returnAddr, $x, $y, $sprite3, $sprite4, $sprite2, $sprite11, $sprite12, $sprite) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_FSjdEN2zEhA3aR4G$9$3$0;
  s.name = "a_FSjdEN2zEhA3aR4G\u003a\u003alambda\u003a\u003a9";
  s.$x = $x;
  s.$y = $y;
  s.$sprite3 = $sprite3;
  s.$sprite4 = $sprite4;
  s.$sprite2 = $sprite2;
  s.$sprite11 = $sprite11;
  s.$sprite12 = $sprite12;
  s.$sprite = $sprite;
  return s;
}
cs.registerLambda("a_a_FSjdEN2zEhA3aR4G$9\u003a\u003alambda\u003a\u003a3", "a_a_FSjdEN2zEhA3aR4G$9$3", a_a_a_FSjdEN2zEhA3aR4G$9$3, true);

function a_a_a_FSjdEN2zEhA3aR4G$9$3$0(s) {
  (s.pc = "YioSiDOTcuZfgtPO");
  s.rt.logObjectMutation(s.$sprite3);
  (ok1(s, s.$sprite3) && s.$sprite3.hide(s));
  (s.pc = "PuTpm3QQg2brg7dN");
  s.rt.logObjectMutation(s.$sprite4);
  (ok1(s, s.$sprite4) && s.$sprite4.hide(s));
  (s.pc = "CtMb44Cbqiorsbyq");
  s.rt.logObjectMutation(s.$sprite2);
  (ok1(s, s.$sprite2) && s.$sprite2.show(s));
  (s.pc = "Q04qsfnrXXLVlTGC");
  s.rt.logObjectMutation(s.$sprite11);
  (ok1(s, s.$sprite11) && s.$sprite11.show(s));
  (s.pc = "T10mSrad1le2RivQ");
  s.rt.logObjectMutation(s.$sprite12);
  (ok1(s, s.$sprite12) && s.$sprite12.show(s));
  (s.pc = "fgHVO4UCN28WQk0b");
  s.rt.logObjectMutation(s.$sprite);
  (ok1(s, s.$sprite) && s.$sprite.show(s));
  return s.rt.leave();
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$9$3$0, 'a_a_a_FSjdEN2zEhA3aR4G$9$3$0');

/* ACTION: a_a_FSjdEN2zEhA3aR4G$10::lambda::6 */
function a_a_a_FSjdEN2zEhA3aR4G$10$6(previous, returnAddr, $sprite5, $board) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_FSjdEN2zEhA3aR4G$10$6$0;
  s.name = "a_FSjdEN2zEhA3aR4G\u003a\u003alambda\u003a\u003a10";
  s.$p = undefined;
  s.$sprite5 = $sprite5;
  s.$board = $board;
  return s;
}
cs.registerLambda("a_a_FSjdEN2zEhA3aR4G$10\u003a\u003alambda\u003a\u003a6", "a_a_FSjdEN2zEhA3aR4G$10$6", a_a_a_FSjdEN2zEhA3aR4G$10$6, true);

function a_a_a_FSjdEN2zEhA3aR4G$10$6$0(s) {
  (s.pc = "na7TOrgyoOYkhoss");
  var t_libcall_0 = s.libs["fJaZGzvxeyiP2s7w"]["current"](s);
  return s.rt.enter(t_libcall_0.invoke(t_libcall_0, a_a_a_FSjdEN2zEhA3aR4G$10$6$2));
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$6$0, 'a_a_a_FSjdEN2zEhA3aR4G$10$6$0');

function a_a_a_FSjdEN2zEhA3aR4G$10$6$2(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  (s.$p = t_actRes_1);
  (s.pc = "xjQQMUDbYLiDLXn4");
  var t_call_2 = (ok1(s, s.$p) && s.$p.x(s));
  var t_infix_3 = (ok1(s, t_call_2) && (t_call_2 * 300));
  s.rt.logObjectMutation(s.$sprite5);
  (ok2(s, s.$sprite5, t_infix_3) && s.$sprite5.set_speed_x(t_infix_3, s));
  var t_elseIf_4 = true;
  (s.pc = "pMZvA1HUZAk4gV2t");
  var t_call_5 = (ok1(s, s.$sprite5) && s.$sprite5.x(s));
  var t_infix_6 = (ok1(s, t_call_5) && (t_call_5 < 0));
  var t_lazy_7 = t_infix_6;
  if ((ok1(s, t_lazy_7) && (!t_lazy_7))) {
  var t_call_8 = (ok1(s, s.$sprite5) && s.$sprite5.x(s));
  var t_call_9 = (ok1(s, s.$board) && s.$board.width(s));
  var t_infix_10 = (ok2(s, t_call_8, t_call_9) && (t_call_8 > t_call_9));
  (t_lazy_7 = t_infix_10);
  }
  ok1(s, t_lazy_7);
  if (t_lazy_7) {
  (s.pc = "UHX1sEfKy2xX9oai");
  var t_call_11 = (ok1(s, s.$board) && s.$board.width(s));
  var t_infix_12 = (ok1(s, t_call_11) && (t_call_11 / 2));
  s.rt.logObjectMutation(s.$sprite5);
  (ok2(s, s.$sprite5, t_infix_12) && s.$sprite5.set_x(t_infix_12, s));
  (s.pc = "aiGzB3OSplyEoyWP");
  var t_libcall_13 = s.libs["ywmz2uHVSD5t3Zjh"]["remove life"](s);
  return s.rt.enter(t_libcall_13.invoke(t_libcall_13, a_a_a_FSjdEN2zEhA3aR4G$10$6$5, 1));
  } else {
  (s.pc = "GaAzS44MgHPDGnuQ");
  null;
  }
  return a_a_a_FSjdEN2zEhA3aR4G$10$6$4;
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$6$2, 'a_a_a_FSjdEN2zEhA3aR4G$10$6$2');

function a_a_a_FSjdEN2zEhA3aR4G$10$6$5(s) {
  var t_actRes_14 = s.rt.returnedFrom.result;
  t_actRes_14;
  (s.pc = "pQnNzmXxz9CzB7yU");
  var t_libcall_15 = s.libs["ORJVjHxxr9xzlRwG"]["splatter"](s);
  return s.rt.enter(t_libcall_15.invoke(t_libcall_15, a_a_a_FSjdEN2zEhA3aR4G$10$6$6, s.$sprite5, /* HackCart */ s.d.$NUMSA7299nO1r4PH));
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$6$5, 'a_a_a_FSjdEN2zEhA3aR4G$10$6$5');

function a_a_a_FSjdEN2zEhA3aR4G$10$6$4(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$6$4, 'a_a_a_FSjdEN2zEhA3aR4G$10$6$4');

function a_a_a_FSjdEN2zEhA3aR4G$10$6$6(s) {
  var t_actRes_16 = s.rt.returnedFrom.result;
  t_actRes_16;
  return a_a_a_FSjdEN2zEhA3aR4G$10$6$4;
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$6$6, 'a_a_a_FSjdEN2zEhA3aR4G$10$6$6');

/* ACTION: a_a_FSjdEN2zEhA3aR4G$10::lambda::9 */
function a_a_a_FSjdEN2zEhA3aR4G$10$9(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_FSjdEN2zEhA3aR4G$10$9$0;
  s.name = "a_FSjdEN2zEhA3aR4G\u003a\u003alambda\u003a\u003a10";
  return s;
}
cs.registerLambda("a_a_FSjdEN2zEhA3aR4G$10\u003a\u003alambda\u003a\u003a9", "a_a_FSjdEN2zEhA3aR4G$10$9", a_a_a_FSjdEN2zEhA3aR4G$10$9, true);

function a_a_a_FSjdEN2zEhA3aR4G$10$9$0(s) {
  s.t_elseIf_0 = true;
  (s.pc = "X26Z4hToAGNqXlEH");
  var t_libcall_1 = s.libs["ywmz2uHVSD5t3Zjh"]["current time"](s);
  return s.rt.enter(t_libcall_1.invoke(t_libcall_1, a_a_a_FSjdEN2zEhA3aR4G$10$9$2));
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$9$0, 'a_a_a_FSjdEN2zEhA3aR4G$10$9$0');

function a_a_a_FSjdEN2zEhA3aR4G$10$9$2(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  var t_infix_3 = (ok1(s, t_actRes_2) && (t_actRes_2 < 30));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.t_elseIf_0 = false);
  (s.pc = "CS9SLWWbx17218FW");
  var t_call_4 = lib.Colors.pink(s);
  var t_call_5 = lib.Colors.red(s);
  var t_call_6 = lib.Colors.orange(s);
  var t_libcall_7 = s.libs["ywmz2uHVSD5t3Zjh"]["set hud colors"](s);
  return s.rt.enter(t_libcall_7.invoke(t_libcall_7, a_a_a_FSjdEN2zEhA3aR4G$10$9$4, t_call_4, t_call_5, t_call_6));
  }
  return a_a_a_FSjdEN2zEhA3aR4G$10$9$3;
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$9$2, 'a_a_a_FSjdEN2zEhA3aR4G$10$9$2');

function a_a_a_FSjdEN2zEhA3aR4G$10$9$4(s) {
  return a_a_a_FSjdEN2zEhA3aR4G$10$9$3;
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$9$4, 'a_a_a_FSjdEN2zEhA3aR4G$10$9$4');

function a_a_a_FSjdEN2zEhA3aR4G$10$9$3(s) {
  if (s.t_elseIf_0) {
  (s.pc = "xklHLr2eGGhgFO8R");
  var t_libcall_8 = s.libs["ywmz2uHVSD5t3Zjh"]["current time"](s);
  return s.rt.enter(t_libcall_8.invoke(t_libcall_8, a_a_a_FSjdEN2zEhA3aR4G$10$9$5));
  }
  return a_a_a_FSjdEN2zEhA3aR4G$10$9$8;
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$9$3, 'a_a_a_FSjdEN2zEhA3aR4G$10$9$3');

function a_a_a_FSjdEN2zEhA3aR4G$10$9$5(s) {
  var t_actRes_9 = s.rt.returnedFrom.result;
  var t_infix_10 = (ok1(s, t_actRes_9) && (t_actRes_9 > 30));
  ok1(s, t_infix_10);
  if (t_infix_10) {
  (s.pc = "eOL6zULKB18zpBNo");
  var t_call_11 = lib.Colors.pink(s);
  var t_call_12 = lib.Colors.green(s);
  var t_call_13 = lib.Colors.orange(s);
  var t_libcall_14 = s.libs["ywmz2uHVSD5t3Zjh"]["set hud colors"](s);
  return s.rt.enter(t_libcall_14.invoke(t_libcall_14, a_a_a_FSjdEN2zEhA3aR4G$10$9$7, t_call_11, t_call_12, t_call_13));
  } else {
  (s.pc = "xsA1pupgSlnP2UXr");
  null;
  }
  return a_a_a_FSjdEN2zEhA3aR4G$10$9$6;
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$9$5, 'a_a_a_FSjdEN2zEhA3aR4G$10$9$5');

function a_a_a_FSjdEN2zEhA3aR4G$10$9$8(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$9$8, 'a_a_a_FSjdEN2zEhA3aR4G$10$9$8');

function a_a_a_FSjdEN2zEhA3aR4G$10$9$7(s) {
  return a_a_a_FSjdEN2zEhA3aR4G$10$9$6;
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$9$7, 'a_a_a_FSjdEN2zEhA3aR4G$10$9$7');

function a_a_a_FSjdEN2zEhA3aR4G$10$9$6(s) {
  return a_a_a_FSjdEN2zEhA3aR4G$10$9$8;
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$9$6, 'a_a_a_FSjdEN2zEhA3aR4G$10$9$6');

/* ACTION: a_a_FSjdEN2zEhA3aR4G$10::lambda::15 */
function a_a_a_FSjdEN2zEhA3aR4G$10$15(previous, returnAddr, $sprite6, $board, $sprite5) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_FSjdEN2zEhA3aR4G$10$15$0;
  s.name = "a_FSjdEN2zEhA3aR4G\u003a\u003alambda\u003a\u003a10";
  s.$sprite6 = $sprite6;
  s.$board = $board;
  s.$sprite5 = $sprite5;
  s.$sprite7 = undefined;
  return s;
}
cs.registerLambda("a_a_FSjdEN2zEhA3aR4G$10\u003a\u003alambda\u003a\u003a15", "a_a_FSjdEN2zEhA3aR4G$10$15", a_a_a_FSjdEN2zEhA3aR4G$10$15, true);

function a_a_a_FSjdEN2zEhA3aR4G$10$15$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "FliGCz7gTynd95gT");
  var t_call_1 = (ok1(s, s.$sprite6) && s.$sprite6.y(s));
  var t_call_2 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_3 = (ok2(s, t_call_1, t_call_2) && (t_call_1 > t_call_2));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "zzgGGXM4FYiIyyau");
  var t_infix_4 = (0 - 300);
  s.rt.logObjectMutation(s.$sprite6);
  (ok2(s, s.$sprite6, t_infix_4) && s.$sprite6.set_y(t_infix_4, s));
  (s.pc = "bf7n2dscsOZRjkFn");
  var t_call_5 = (ok1(s, s.$board) && s.$board.width(s));
  var t_call_6 = (ok1(s, t_call_5) && lib.Math_.random_range(0, t_call_5, s));
  s.rt.logObjectMutation(s.$sprite6);
  (ok2(s, s.$sprite6, t_call_6) && s.$sprite6.set_x(t_call_6, s));
  } else {
  (s.pc = "cphZHutdmxc7v4Ka");
  null;
  }
  var t_elseIf_7 = true;
  (s.pc = "poAEEE74bZwkzT6w");
  var t_call_8 = (ok2(s, s.$sprite6, s.$sprite5) && s.$sprite6.overlaps_with(s.$sprite5, s));
  ok1(s, t_call_8);
  if (t_call_8) {
  (s.pc = "OONmszkYuILQpbmd");
  var t_infix_9 = (0 - 300);
  s.rt.logObjectMutation(s.$sprite6);
  (ok2(s, s.$sprite6, t_infix_9) && s.$sprite6.set_y(t_infix_9, s));
  (s.pc = "dOErL6T9UBc2uNvo");
  var t_call_10 = (ok1(s, s.$board) && s.$board.width(s));
  var t_call_11 = (ok1(s, t_call_10) && lib.Math_.random_range(0, t_call_10, s));
  s.rt.logObjectMutation(s.$sprite6);
  (ok2(s, s.$sprite6, t_call_11) && s.$sprite6.set_x(t_call_11, s));
  (s.pc = "xvjc77TZab9kHIsL");
  var t_libcall_12 = s.libs["ORJVjHxxr9xzlRwG"]["splatter"](s);
  return s.rt.enter(t_libcall_12.invoke(t_libcall_12, a_a_a_FSjdEN2zEhA3aR4G$10$15$4, s.$sprite5, /* AnonymousCoin */ s.d.$a36Wj7Cl2kOuseIf));
  } else {
  (s.pc = "v07MtgvFOM2nWNMS");
  null;
  }
  return a_a_a_FSjdEN2zEhA3aR4G$10$15$3;
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$15$0, 'a_a_a_FSjdEN2zEhA3aR4G$10$15$0');

function a_a_a_FSjdEN2zEhA3aR4G$10$15$4(s) {
  var t_actRes_13 = s.rt.returnedFrom.result;
  t_actRes_13;
  (s.pc = "d15tjXoGg6QBf2Sq");
  var t_call_14 = (ok1(s, s.$sprite6) && s.$sprite6.width(s));
  var t_libcall_15 = s.libs["ywmz2uHVSD5t3Zjh"]["add score"](s);
  return s.rt.enter(t_libcall_15.invoke(t_libcall_15, a_a_a_FSjdEN2zEhA3aR4G$10$15$5, t_call_14));
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$15$4, 'a_a_a_FSjdEN2zEhA3aR4G$10$15$4');

function a_a_a_FSjdEN2zEhA3aR4G$10$15$3(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$15$3, 'a_a_a_FSjdEN2zEhA3aR4G$10$15$3');

function a_a_a_FSjdEN2zEhA3aR4G$10$15$5(s) {
  (s.pc = "FsbGdZq0AHYUVydM");
  var t_call_16 = (ok1(s, s.$sprite6) && s.$sprite6.width(s));
  var t_concat_17 = lib.String_.concatAny("\u002b", t_call_16);
  var t_call_18 = (ok2(s, s.$board, t_concat_17) && s.$board.create_text(100, 40, 30, t_concat_17, s));
  s.rt.markAllocated(t_call_18);
  (s.$sprite7 = t_call_18);
  (s.pc = "xCCuC1ReU4MW7H5u");
  var t_call_19 = lib.Colors.green(s);
  s.rt.logObjectMutation(s.$sprite7);
  (ok2(s, s.$sprite7, t_call_19) && s.$sprite7.set_color(t_call_19, s));
  (s.pc = "XSo8HFnZBMmBkrDx");
  var t_call_20 = (ok1(s, s.$sprite7) && s.$sprite7.create_animation(s));
  s.rt.logObjectMutation(t_call_20);
  (ok1(s, t_call_20) && t_call_20.fade_out(2, "cubic", s));
  (s.pc = "C3hPoD8B6L0PgsWw");
  var t_call_21 = (ok1(s, s.$sprite5) && s.$sprite5.x(s));
  s.rt.logObjectMutation(s.$sprite7);
  (ok2(s, s.$sprite7, t_call_21) && s.$sprite7.set_x(t_call_21, s));
  (s.pc = "gIqX54yd7ZdrBBRF");
  var t_call_22 = (ok1(s, s.$sprite5) && s.$sprite5.x(s));
  var t_call_23 = (ok1(s, s.$sprite5) && s.$sprite5.y(s));
  var t_infix_24 = (ok1(s, t_call_23) && (t_call_23 - 100));
  s.rt.logObjectMutation(s.$sprite7);
  (ok3(s, s.$sprite7, t_call_22, t_infix_24) && s.$sprite7.set_pos(t_call_22, t_infix_24, s));
  (s.pc = "QJnqqiGXChvIJjfA");
  var t_infix_25 = (0 - 300);
  s.rt.logObjectMutation(s.$sprite7);
  (ok2(s, s.$sprite7, t_infix_25) && s.$sprite7.set_speed_y(t_infix_25, s));
  return a_a_a_FSjdEN2zEhA3aR4G$10$15$3;
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$15$5, 'a_a_a_FSjdEN2zEhA3aR4G$10$15$5');

/* ACTION: a_a_FSjdEN2zEhA3aR4G$10::lambda::21 */
function a_a_a_FSjdEN2zEhA3aR4G$10$21(previous, returnAddr, $sprite8, $board, $sprite5) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_FSjdEN2zEhA3aR4G$10$21$0;
  s.name = "a_FSjdEN2zEhA3aR4G\u003a\u003alambda\u003a\u003a10";
  s.$sprite8 = $sprite8;
  s.$board = $board;
  s.$sprite5 = $sprite5;
  s.$sprite7 = undefined;
  return s;
}
cs.registerLambda("a_a_FSjdEN2zEhA3aR4G$10\u003a\u003alambda\u003a\u003a21", "a_a_FSjdEN2zEhA3aR4G$10$21", a_a_a_FSjdEN2zEhA3aR4G$10$21, true);

function a_a_a_FSjdEN2zEhA3aR4G$10$21$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "XsV8BbGgru9nRa8c");
  var t_call_1 = (ok1(s, s.$sprite8) && s.$sprite8.y(s));
  var t_call_2 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_3 = (ok2(s, t_call_1, t_call_2) && (t_call_1 > t_call_2));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "BsR7faGn0IWbQH0j");
  var t_infix_4 = (0 - 300);
  s.rt.logObjectMutation(s.$sprite8);
  (ok2(s, s.$sprite8, t_infix_4) && s.$sprite8.set_y(t_infix_4, s));
  (s.pc = "M4hA9DQfXKzecXkl");
  var t_call_5 = (ok1(s, s.$board) && s.$board.width(s));
  var t_call_6 = (ok1(s, t_call_5) && lib.Math_.random_range(0, t_call_5, s));
  s.rt.logObjectMutation(s.$sprite8);
  (ok2(s, s.$sprite8, t_call_6) && s.$sprite8.set_x(t_call_6, s));
  } else {
  (s.pc = "gIZjMrxgxkGJ1NTp");
  null;
  }
  var t_elseIf_7 = true;
  (s.pc = "lhAUiFqJ4GVSsrS2");
  var t_call_8 = (ok2(s, s.$sprite8, s.$sprite5) && s.$sprite8.overlaps_with(s.$sprite5, s));
  ok1(s, t_call_8);
  if (t_call_8) {
  (s.pc = "qb9qc4t4IxUnpTcP");
  var t_infix_9 = (0 - 300);
  s.rt.logObjectMutation(s.$sprite8);
  (ok2(s, s.$sprite8, t_infix_9) && s.$sprite8.set_y(t_infix_9, s));
  (s.pc = "FDoex5aPejY2W6Vc");
  var t_call_10 = (ok1(s, s.$board) && s.$board.width(s));
  var t_call_11 = (ok1(s, t_call_10) && lib.Math_.random_range(0, t_call_10, s));
  s.rt.logObjectMutation(s.$sprite8);
  (ok2(s, s.$sprite8, t_call_11) && s.$sprite8.set_x(t_call_11, s));
  (s.pc = "x9gvxtrOJTYyVRwt");
  var t_libcall_12 = s.libs["ORJVjHxxr9xzlRwG"]["splatter"](s);
  return s.rt.enter(t_libcall_12.invoke(t_libcall_12, a_a_a_FSjdEN2zEhA3aR4G$10$21$4, s.$sprite5, /* epbiai */ s.d.$Gt2MXBVi4C4U73ug));
  } else {
  (s.pc = "n2yoZIqT5eR5NCol");
  null;
  }
  return a_a_a_FSjdEN2zEhA3aR4G$10$21$3;
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$21$0, 'a_a_a_FSjdEN2zEhA3aR4G$10$21$0');

function a_a_a_FSjdEN2zEhA3aR4G$10$21$4(s) {
  var t_actRes_13 = s.rt.returnedFrom.result;
  t_actRes_13;
  (s.pc = "AY94WTFZh4Bl5oaC");
  var t_libcall_14 = s.libs["ywmz2uHVSD5t3Zjh"]["remove life"](s);
  return s.rt.enter(t_libcall_14.invoke(t_libcall_14, a_a_a_FSjdEN2zEhA3aR4G$10$21$5, 1));
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$21$4, 'a_a_a_FSjdEN2zEhA3aR4G$10$21$4');

function a_a_a_FSjdEN2zEhA3aR4G$10$21$3(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$21$3, 'a_a_a_FSjdEN2zEhA3aR4G$10$21$3');

function a_a_a_FSjdEN2zEhA3aR4G$10$21$5(s) {
  var t_actRes_15 = s.rt.returnedFrom.result;
  t_actRes_15;
  (s.pc = "nlSbPJJWNTlKF9Ap");
  var t_call_16 = (ok1(s, s.$board) && s.$board.create_text(100, 40, 30, "Ohh nooo....!!!!!", s));
  s.rt.markAllocated(t_call_16);
  (s.$sprite7 = t_call_16);
  (s.pc = "kZPfGiwE4zvRkWst");
  var t_call_17 = lib.Colors.red(s);
  s.rt.logObjectMutation(s.$sprite7);
  (ok2(s, s.$sprite7, t_call_17) && s.$sprite7.set_color(t_call_17, s));
  (s.pc = "l2GRnAogSoNSpYMP");
  var t_call_18 = (ok1(s, s.$sprite7) && s.$sprite7.create_animation(s));
  s.rt.logObjectMutation(t_call_18);
  (ok1(s, t_call_18) && t_call_18.fade_out(2, "cubic", s));
  (s.pc = "WGtB3xFCzYSydtyE");
  var t_call_19 = (ok1(s, s.$sprite5) && s.$sprite5.x(s));
  s.rt.logObjectMutation(s.$sprite7);
  (ok2(s, s.$sprite7, t_call_19) && s.$sprite7.set_x(t_call_19, s));
  (s.pc = "z83qbGlLnFOuDCUV");
  var t_call_20 = (ok1(s, s.$sprite5) && s.$sprite5.x(s));
  var t_call_21 = (ok1(s, s.$sprite5) && s.$sprite5.y(s));
  var t_infix_22 = (ok1(s, t_call_21) && (t_call_21 - 100));
  s.rt.logObjectMutation(s.$sprite7);
  (ok3(s, s.$sprite7, t_call_20, t_infix_22) && s.$sprite7.set_pos(t_call_20, t_infix_22, s));
  (s.pc = "eS7FSDf9Dkw5WszG");
  var t_infix_23 = (0 - 300);
  s.rt.logObjectMutation(s.$sprite7);
  (ok2(s, s.$sprite7, t_infix_23) && s.$sprite7.set_speed_y(t_infix_23, s));
  return a_a_a_FSjdEN2zEhA3aR4G$10$21$3;
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$21$5, 'a_a_a_FSjdEN2zEhA3aR4G$10$21$5');

/* ACTION: a_a_FSjdEN2zEhA3aR4G$10::lambda::27 */
function a_a_a_FSjdEN2zEhA3aR4G$10$27(previous, returnAddr, $sprite9, $board, $sprite5) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_FSjdEN2zEhA3aR4G$10$27$0;
  s.name = "a_FSjdEN2zEhA3aR4G\u003a\u003alambda\u003a\u003a10";
  s.$sprite9 = $sprite9;
  s.$board = $board;
  s.$sprite5 = $sprite5;
  s.$sprite7 = undefined;
  return s;
}
cs.registerLambda("a_a_FSjdEN2zEhA3aR4G$10\u003a\u003alambda\u003a\u003a27", "a_a_FSjdEN2zEhA3aR4G$10$27", a_a_a_FSjdEN2zEhA3aR4G$10$27, true);

function a_a_a_FSjdEN2zEhA3aR4G$10$27$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "d0pidf2TYMS7UFF4");
  var t_call_1 = (ok1(s, s.$sprite9) && s.$sprite9.y(s));
  var t_call_2 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_3 = (ok2(s, t_call_1, t_call_2) && (t_call_1 > t_call_2));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "r8A6PoG9rMMHfcDE");
  var t_infix_4 = (0 - 300);
  s.rt.logObjectMutation(s.$sprite9);
  (ok2(s, s.$sprite9, t_infix_4) && s.$sprite9.set_y(t_infix_4, s));
  (s.pc = "xjQorp2RuUKivTmq");
  var t_call_5 = (ok1(s, s.$board) && s.$board.width(s));
  var t_call_6 = (ok1(s, t_call_5) && lib.Math_.random_range(0, t_call_5, s));
  s.rt.logObjectMutation(s.$sprite9);
  (ok2(s, s.$sprite9, t_call_6) && s.$sprite9.set_x(t_call_6, s));
  } else {
  (s.pc = "xK9gPPeQq1jzaYdC");
  null;
  }
  var t_elseIf_7 = true;
  (s.pc = "HDTRlH2Qv2IGtbu7");
  var t_call_8 = (ok2(s, s.$sprite9, s.$sprite5) && s.$sprite9.overlaps_with(s.$sprite5, s));
  ok1(s, t_call_8);
  if (t_call_8) {
  (s.pc = "xJW28Yft9tkzcLq3");
  var t_infix_9 = (0 - 300);
  s.rt.logObjectMutation(s.$sprite9);
  (ok2(s, s.$sprite9, t_infix_9) && s.$sprite9.set_y(t_infix_9, s));
  (s.pc = "SUj22HzCoMCwcLHQ");
  var t_call_10 = (ok1(s, s.$board) && s.$board.width(s));
  var t_call_11 = (ok1(s, t_call_10) && lib.Math_.random_range(0, t_call_10, s));
  s.rt.logObjectMutation(s.$sprite9);
  (ok2(s, s.$sprite9, t_call_11) && s.$sprite9.set_x(t_call_11, s));
  (s.pc = "RhXQxNXYg7pkQs3x");
  var t_libcall_12 = s.libs["ORJVjHxxr9xzlRwG"]["splatter"](s);
  return s.rt.enter(t_libcall_12.invoke(t_libcall_12, a_a_a_FSjdEN2zEhA3aR4G$10$27$4, s.$sprite5, /* creditcard */ s.d.$RCjkMnPYgSHCKoVz));
  } else {
  (s.pc = "cvyV4uOGH1ODOEc4");
  null;
  }
  return a_a_a_FSjdEN2zEhA3aR4G$10$27$3;
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$27$0, 'a_a_a_FSjdEN2zEhA3aR4G$10$27$0');

function a_a_a_FSjdEN2zEhA3aR4G$10$27$4(s) {
  var t_actRes_13 = s.rt.returnedFrom.result;
  t_actRes_13;
  (s.pc = "x12P2WtJ8jIJWmMG");
  var t_libcall_14 = s.libs["ywmz2uHVSD5t3Zjh"]["add life"](s);
  return s.rt.enter(t_libcall_14.invoke(t_libcall_14, a_a_a_FSjdEN2zEhA3aR4G$10$27$5, 1));
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$27$4, 'a_a_a_FSjdEN2zEhA3aR4G$10$27$4');

function a_a_a_FSjdEN2zEhA3aR4G$10$27$3(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$27$3, 'a_a_a_FSjdEN2zEhA3aR4G$10$27$3');

function a_a_a_FSjdEN2zEhA3aR4G$10$27$5(s) {
  var t_actRes_15 = s.rt.returnedFrom.result;
  t_actRes_15;
  (s.pc = "s5rSmyeAJYu8LvBU");
  var t_call_16 = (ok1(s, s.$board) && s.$board.create_text(100, 40, 30, "Ohh Thankss...!!!", s));
  s.rt.markAllocated(t_call_16);
  (s.$sprite7 = t_call_16);
  (s.pc = "xFO88NdmJmdqj846");
  var t_call_17 = lib.Colors.pink(s);
  s.rt.logObjectMutation(s.$sprite7);
  (ok2(s, s.$sprite7, t_call_17) && s.$sprite7.set_color(t_call_17, s));
  (s.pc = "cyN2MvHa8CaDu9v1");
  var t_call_18 = (ok1(s, s.$sprite7) && s.$sprite7.create_animation(s));
  s.rt.logObjectMutation(t_call_18);
  (ok1(s, t_call_18) && t_call_18.fade_out(2, "cubic", s));
  (s.pc = "PnbtEJEjm8qobYkN");
  var t_call_19 = (ok1(s, s.$sprite5) && s.$sprite5.x(s));
  s.rt.logObjectMutation(s.$sprite7);
  (ok2(s, s.$sprite7, t_call_19) && s.$sprite7.set_x(t_call_19, s));
  (s.pc = "H8CR4G5IjaMYi9A3");
  var t_call_20 = (ok1(s, s.$sprite5) && s.$sprite5.x(s));
  var t_call_21 = (ok1(s, s.$sprite5) && s.$sprite5.y(s));
  var t_infix_22 = (ok1(s, t_call_21) && (t_call_21 - 100));
  s.rt.logObjectMutation(s.$sprite7);
  (ok3(s, s.$sprite7, t_call_20, t_infix_22) && s.$sprite7.set_pos(t_call_20, t_infix_22, s));
  (s.pc = "snesOF9QAKEgOsPS");
  var t_infix_23 = (0 - 300);
  s.rt.logObjectMutation(s.$sprite7);
  (ok2(s, s.$sprite7, t_infix_23) && s.$sprite7.set_speed_y(t_infix_23, s));
  return a_a_a_FSjdEN2zEhA3aR4G$10$27$3;
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$27$5, 'a_a_a_FSjdEN2zEhA3aR4G$10$27$5');

/* ACTION: a_a_FSjdEN2zEhA3aR4G$10::lambda::33 */
function a_a_a_FSjdEN2zEhA3aR4G$10$33(previous, returnAddr, $sprite10, $board, $sprite5) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_FSjdEN2zEhA3aR4G$10$33$0;
  s.name = "a_FSjdEN2zEhA3aR4G\u003a\u003alambda\u003a\u003a10";
  s.$sprite10 = $sprite10;
  s.$board = $board;
  s.$sprite5 = $sprite5;
  s.$sprite7 = undefined;
  return s;
}
cs.registerLambda("a_a_FSjdEN2zEhA3aR4G$10\u003a\u003alambda\u003a\u003a33", "a_a_FSjdEN2zEhA3aR4G$10$33", a_a_a_FSjdEN2zEhA3aR4G$10$33, true);

function a_a_a_FSjdEN2zEhA3aR4G$10$33$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "bcaWYeGnaZKhInxZ");
  var t_call_1 = (ok1(s, s.$sprite10) && s.$sprite10.y(s));
  var t_call_2 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_3 = (ok2(s, t_call_1, t_call_2) && (t_call_1 > t_call_2));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "gXd1GEewVW5YoOJ4");
  var t_infix_4 = (0 - 300);
  s.rt.logObjectMutation(s.$sprite10);
  (ok2(s, s.$sprite10, t_infix_4) && s.$sprite10.set_y(t_infix_4, s));
  (s.pc = "xPrRyohoWE0udlq3");
  var t_call_5 = (ok1(s, s.$board) && s.$board.width(s));
  var t_call_6 = (ok1(s, t_call_5) && lib.Math_.random_range(0, t_call_5, s));
  s.rt.logObjectMutation(s.$sprite10);
  (ok2(s, s.$sprite10, t_call_6) && s.$sprite10.set_x(t_call_6, s));
  } else {
  (s.pc = "ecUKU3L1RsPSmLgT");
  null;
  }
  var t_elseIf_7 = true;
  (s.pc = "D7pHLGLP5OTtPUKI");
  var t_call_8 = (ok2(s, s.$sprite10, s.$sprite5) && s.$sprite10.overlaps_with(s.$sprite5, s));
  ok1(s, t_call_8);
  if (t_call_8) {
  (s.pc = "bS825uQvTvfFP4Q4");
  var t_infix_9 = (0 - 300);
  s.rt.logObjectMutation(s.$sprite10);
  (ok2(s, s.$sprite10, t_infix_9) && s.$sprite10.set_y(t_infix_9, s));
  (s.pc = "ABC2rOeQBnH7RLUD");
  var t_call_10 = (ok1(s, s.$board) && s.$board.width(s));
  var t_call_11 = (ok1(s, t_call_10) && lib.Math_.random_range(0, t_call_10, s));
  s.rt.logObjectMutation(s.$sprite10);
  (ok2(s, s.$sprite10, t_call_11) && s.$sprite10.set_x(t_call_11, s));
  (s.pc = "Huz27thVw0IsbAFo");
  var t_libcall_12 = s.libs["ORJVjHxxr9xzlRwG"]["splatter"](s);
  return s.rt.enter(t_libcall_12.invoke(t_libcall_12, a_a_a_FSjdEN2zEhA3aR4G$10$33$4, s.$sprite5, /* stopwatch */ s.d.$bxwGT3FgZ2CMDGA6));
  } else {
  (s.pc = "xPnyHEWP91Pt4yxF");
  null;
  }
  return a_a_a_FSjdEN2zEhA3aR4G$10$33$3;
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$33$0, 'a_a_a_FSjdEN2zEhA3aR4G$10$33$0');

function a_a_a_FSjdEN2zEhA3aR4G$10$33$4(s) {
  var t_actRes_13 = s.rt.returnedFrom.result;
  t_actRes_13;
  (s.pc = "TCGPNS0J3PSz2LRm");
  var t_libcall_14 = s.libs["ywmz2uHVSD5t3Zjh"]["current time"](s);
  return s.rt.enter(t_libcall_14.invoke(t_libcall_14, a_a_a_FSjdEN2zEhA3aR4G$10$33$5));
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$33$4, 'a_a_a_FSjdEN2zEhA3aR4G$10$33$4');

function a_a_a_FSjdEN2zEhA3aR4G$10$33$3(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$33$3, 'a_a_a_FSjdEN2zEhA3aR4G$10$33$3');

function a_a_a_FSjdEN2zEhA3aR4G$10$33$5(s) {
  var t_actRes_15 = s.rt.returnedFrom.result;
  var t_infix_16 = (ok1(s, t_actRes_15) && (t_actRes_15 + 30));
  var t_libcall_17 = s.libs["ywmz2uHVSD5t3Zjh"]["start countdown timer"](s);
  return s.rt.enter(t_libcall_17.invoke(t_libcall_17, a_a_a_FSjdEN2zEhA3aR4G$10$33$6, t_infix_16));
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$33$5, 'a_a_a_FSjdEN2zEhA3aR4G$10$33$5');

function a_a_a_FSjdEN2zEhA3aR4G$10$33$6(s) {
  (s.pc = "xGmsSl7CWicuRHQ2");
  var t_call_18 = (ok1(s, s.$board) && s.$board.create_text(100, 40, 30, "\u002b30s", s));
  s.rt.markAllocated(t_call_18);
  (s.$sprite7 = t_call_18);
  (s.pc = "xLbVC4WivT8cKTP8");
  var t_call_19 = lib.Colors.green(s);
  s.rt.logObjectMutation(s.$sprite7);
  (ok2(s, s.$sprite7, t_call_19) && s.$sprite7.set_color(t_call_19, s));
  (s.pc = "lri7Cwp8X7QQWTzM");
  var t_call_20 = (ok1(s, s.$sprite7) && s.$sprite7.create_animation(s));
  s.rt.logObjectMutation(t_call_20);
  (ok1(s, t_call_20) && t_call_20.fade_out(2, "cubic", s));
  (s.pc = "xURhoarctdsNhBVK");
  var t_call_21 = (ok1(s, s.$sprite5) && s.$sprite5.x(s));
  s.rt.logObjectMutation(s.$sprite7);
  (ok2(s, s.$sprite7, t_call_21) && s.$sprite7.set_x(t_call_21, s));
  (s.pc = "R4rN2hiN9kxrVhXR");
  var t_call_22 = (ok1(s, s.$sprite5) && s.$sprite5.x(s));
  var t_call_23 = (ok1(s, s.$sprite5) && s.$sprite5.y(s));
  var t_infix_24 = (ok1(s, t_call_23) && (t_call_23 - 100));
  s.rt.logObjectMutation(s.$sprite7);
  (ok3(s, s.$sprite7, t_call_22, t_infix_24) && s.$sprite7.set_pos(t_call_22, t_infix_24, s));
  (s.pc = "bs74gMJKmKbHs932");
  var t_infix_25 = (0 - 300);
  s.rt.logObjectMutation(s.$sprite7);
  (ok2(s, s.$sprite7, t_infix_25) && s.$sprite7.set_speed_y(t_infix_25, s));
  return a_a_a_FSjdEN2zEhA3aR4G$10$33$3;
}
cs.registerStep(a_a_a_FSjdEN2zEhA3aR4G$10$33$6, 'a_a_a_FSjdEN2zEhA3aR4G$10$33$6');

cs.registerArtResource("Picture", "$NUMSA7299nO1r4PH", ".\u002fart\u002fl0_NUMSA7299nO1r4PH");
cs.registerArtResource("Picture", "$a36Wj7Cl2kOuseIf", ".\u002fart\u002fl0_a36Wj7Cl2kOuseIf");
cs.registerArtResource("Picture", "$Gt2MXBVi4C4U73ug", ".\u002fart\u002fl0_Gt2MXBVi4C4U73ug");
cs.registerArtResource("Picture", "$RCjkMnPYgSHCKoVz", ".\u002fart\u002fl0_RCjkMnPYgSHCKoVz");
cs.registerArtResource("Picture", "$bxwGT3FgZ2CMDGA6", ".\u002fart\u002fl0_bxwGT3FgZ2CMDGA6");
cs.registerArtResource("Picture", "$fmUSjUtfBJJZV5Zm", ".\u002fart\u002fl0_fmUSjUtfBJJZV5Zm");
cs.registerArtResource("Picture", "$jcv0Otz7eNaBqx9W", ".\u002fart\u002fl0_jcv0Otz7eNaBqx9W");
cs.registerArtResource("Picture", "$xbPAzQG5HOZgoAFs", ".\u002fart\u002fl0_xbPAzQG5HOZgoAFs");
cs.registerArtResource("Picture", "$X371sopyF7RQnKXg", ".\u002fart\u002fl0_X371sopyF7RQnKXg");
cs.registerArtResource("Sound", "$xd4PEHQy9kbHTudV", ".\u002fart\u002fl0_xd4PEHQy9kbHTudV");
cs.registerArtResource("Picture", "$ZWxFLValkpVbmEaU", ".\u002fart\u002fl0_ZWxFLValkpVbmEaU");
cs.registerArtResource("Picture", "$xfEzjZG7FDBK24Gc", ".\u002fart\u002fl0_xfEzjZG7FDBK24Gc");
cs.registerArtResource("Picture", "$lrOhNhLXurCslWI7", ".\u002fart\u002fl0_lrOhNhLXurCslWI7");
cs.registerArtResource("Sound", "$yQjMH9MmXU86ZtXY", ".\u002fart\u002fl0_yQjMH9MmXU86ZtXY");
(function () {
  var lib, bnd, resolve;
  var bnds = cs.libBindings = {};
  lib = libs["this"] = {};
  bnd = bnds["this"] = libs;
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "this");
    lib["main"] = cs.mkLibProxyFactory(bnd, "this", "main");
  lib = libs["ywmz2uHVSD5t3Zjh"] = {};
  bnd = bnds["ywmz2uHVSD5t3Zjh"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "ywmz2uHVSD5t3Zjh");
    lib["start countdown timer"] = cs.mkLibProxyFactory(bnd, "ywmz2uHVSD5t3Zjh", "start countdown timer");
    lib["score"] = cs.mkLibProxyFactory(bnd, "ywmz2uHVSD5t3Zjh", "score");
    lib["current time"] = cs.mkLibProxyFactory(bnd, "ywmz2uHVSD5t3Zjh", "current time");
    lib["add score"] = cs.mkLibProxyFactory(bnd, "ywmz2uHVSD5t3Zjh", "add score");
    lib["add life"] = cs.mkLibProxyFactory(bnd, "ywmz2uHVSD5t3Zjh", "add life");
    lib["remove life"] = cs.mkLibProxyFactory(bnd, "ywmz2uHVSD5t3Zjh", "remove life");
    lib["start"] = cs.mkLibProxyFactory(bnd, "ywmz2uHVSD5t3Zjh", "start");
    lib["board"] = cs.mkLibProxyFactory(bnd, "ywmz2uHVSD5t3Zjh", "board");
    lib["on end"] = cs.mkLibProxyFactory(bnd, "ywmz2uHVSD5t3Zjh", "on end");
    lib["set hud colors"] = cs.mkLibProxyFactory(bnd, "ywmz2uHVSD5t3Zjh", "set hud colors");
    lib["bounce on sides"] = cs.mkLibProxyFactory(bnd, "ywmz2uHVSD5t3Zjh", "bounce on sides");
    lib["create sprite"] = cs.mkLibProxyFactory(bnd, "ywmz2uHVSD5t3Zjh", "create sprite");
    lib["splash"] = cs.mkLibProxyFactory(bnd, "ywmz2uHVSD5t3Zjh", "splash");
  lib = libs["fJaZGzvxeyiP2s7w"] = {};
  bnd = bnds["fJaZGzvxeyiP2s7w"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "fJaZGzvxeyiP2s7w");
    lib["current"] = cs.mkLibProxyFactory(bnd, "fJaZGzvxeyiP2s7w", "current");
  lib = libs["ORJVjHxxr9xzlRwG"] = {};
  bnd = bnds["ORJVjHxxr9xzlRwG"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "ORJVjHxxr9xzlRwG");
    lib["splatter"] = cs.mkLibProxyFactory(bnd, "ORJVjHxxr9xzlRwG", "splatter");
  bnd = bnds["ywmz2uHVSD5t3Zjh"];
  bnd["this$lib"] = "ywmz2uHVSD5t3Zjh";
  bnd = bnds["fJaZGzvxeyiP2s7w"];
  bnd["this$lib"] = "fJaZGzvxeyiP2s7w";
    resolve = bnd["k4esRNhmmMLxrqp8"] = {};
    bnd["k4esRNhmmMLxrqp8" + "$lib"] = "ywmz2uHVSD5t3Zjh";
      resolve["board"] = libs["ywmz2uHVSD5t3Zjh"]["board"];
      resolve["start"] = libs["ywmz2uHVSD5t3Zjh"]["start"];
  bnd = bnds["ORJVjHxxr9xzlRwG"];
  bnd["this$lib"] = "ORJVjHxxr9xzlRwG";
    resolve = bnd["xdHh3GbzZt7wBK4e"] = {};
    bnd["xdHh3GbzZt7wBK4e" + "$lib"] = "ywmz2uHVSD5t3Zjh";
      resolve["add score"] = libs["ywmz2uHVSD5t3Zjh"]["add score"];
      resolve["board"] = libs["ywmz2uHVSD5t3Zjh"]["board"];
      resolve["bounce on sides"] = libs["ywmz2uHVSD5t3Zjh"]["bounce on sides"];
      resolve["start"] = libs["ywmz2uHVSD5t3Zjh"]["start"];
}());
cs.startFn = function(rt) {
lib.App.rt_start(rt);
lib.Media.rt_start(rt);
lib.Player.rt_start(rt);
lib.Senses.rt_start(rt);
lib.Time.rt_start(rt);
lib.Web.rt_start(rt);
};

cs.stopFn = function(rt) {
lib.App.rt_stop(rt);
lib.Media.rt_stop(rt);
lib.Player.rt_stop(rt);
lib.Senses.rt_stop(rt);
lib.Time.rt_stop(rt);
lib.Web.rt_stop(rt);
};

cs._compilerVersion = '1';
cs._initGlobals = function(d,rt) {

};

cs._initGlobals2 = function(d) {
};

cs._resetGlobals = function(d) {
  d.$NUMSA7299nO1r4PH = undefined;
  d.$a36Wj7Cl2kOuseIf = undefined;
  d.$Gt2MXBVi4C4U73ug = undefined;
  d.$RCjkMnPYgSHCKoVz = undefined;
  d.$bxwGT3FgZ2CMDGA6 = undefined;
  d.$fmUSjUtfBJJZV5Zm = undefined;
  d.$jcv0Otz7eNaBqx9W = undefined;
  d.$xbPAzQG5HOZgoAFs = undefined;
  d.$X371sopyF7RQnKXg = undefined;
  d.$xd4PEHQy9kbHTudV = undefined;
  d.$ZWxFLValkpVbmEaU = undefined;
  d.$xfEzjZG7FDBK24Gc = undefined;
  d.$lrOhNhLXurCslWI7 = undefined;
  d.$yQjMH9MmXU86ZtXY = undefined;
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "main";
cs.authorId = "zchpa";
cs.scriptGuid = "4407827f-990a-40fe-0ad5-5ef176591377";
}),

// **************************************************************
"ywmz2uHVSD5t3Zjh": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "game";
cs.scriptColor = "\u00239955bb";
cs.objectSingletons = {};
/* ACTION: initialize */
function a_Ayu95FKZqA9xPdjQXSANLGvP(previous, returnAddr, $width, $height) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_Ayu95FKZqA9xPdjQXSANLGvP$0;
  s.name = "initialize";
  s.$width = $width;
  s.$height = $height;
  s.$ratio = undefined;
  s.$y = undefined;
  return s;
}
cs.registerAction("initialize", "Ayu95FKZqA9xPdjQXSANLGvP", a_Ayu95FKZqA9xPdjQXSANLGvP, true);

function ok1(s, a0) {
  return (a0 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok2(s, a0, a1) {
  return (a0 == undefined || a1 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok3(s, a0, a1, a2) {
  return (a0 == undefined || a1 == undefined || a2 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok4(s, a0, a1, a2, a3) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function a_Ayu95FKZqA9xPdjQXSANLGvP$0(s) {
  (s.pc = "Clk2zqeLTyzvKFNp");
  var t_call_0 = lib.Wall.width(s);
  var t_call_1 = lib.Wall.height(s);
  var t_infix_2 = (ok2(s, t_call_0, t_call_1) && (t_call_0 / t_call_1));
  (s.$ratio = t_infix_2);
  var t_elseIf_3 = true;
  (s.pc = "lHC24tGRfxpXZxgk");
  var t_infix_4 = (ok1(s, s.$width) && (s.$width < 0));
  var t_lazy_5 = t_infix_4;
  if ((ok1(s, t_lazy_5) && t_lazy_5)) {
  var t_infix_6 = (ok1(s, s.$height) && (s.$height < 0));
  (t_lazy_5 = t_infix_6);
  }
  ok1(s, t_lazy_5);
  if (t_lazy_5) {
  var t_elseIf_7 = true;
  (s.pc = "xZ5BAygKRsMnteqb");
  var t_infix_8 = (ok1(s, s.$ratio) && (s.$ratio < 1));
  ok1(s, t_infix_8);
  if (t_infix_8) {
  (s.pc = "Ye23loceGoB42QXd");
  var t_infix_9 = (ok1(s, s.$ratio) && (800 * s.$ratio));
  (s.$width = t_infix_9);
  (s.pc = "XOxgQshg475aS5Hk");
  (s.$height = 800);
  } else {
  (s.pc = "JqNvfilYjyb1v6dO");
  (s.$width = 800);
  (s.pc = "sEmxz8ZVPjbzQaT5");
  var t_infix_10 = (ok1(s, s.$ratio) && (800 / s.$ratio));
  (s.$height = t_infix_10);
  }
  } else {
  (s.pc = "rDMgAb5XMif1oeBq");
  null;
  }
  var t_elseIf_11 = true;
  (s.pc = "jhe41v4xeIFpAnXk");
  var t_infix_12 = (ok2(s, s.$width, s.$height) && (s.$width < s.$height));
  ok1(s, t_infix_12);
  if (t_infix_12) {
  var t_elseIf_13 = true;
  (s.pc = "Qe4DsmxnWXWundDd");
  var t_infix_14 = (ok1(s, s.$width) && (s.$width < 0));
  ok1(s, t_infix_14);
  if (t_infix_14) {
  var t_elseIf_15 = true;
  (s.pc = "mo0yRpxiwtI2oz42");
  var t_infix_16 = (ok1(s, s.$ratio) && (s.$ratio < 1));
  ok1(s, t_infix_16);
  if (t_infix_16) {
  (s.pc = "sLJ2pYjNI9NO4jGv");
  var t_infix_17 = (ok1(s, s.$ratio) && (1 / s.$ratio));
  (s.$ratio = t_infix_17);
  } else {
  (s.pc = "bmEG64FBClPvx2l2");
  null;
  }
  (s.pc = "lohlOvEl2FCCHlN8");
  var t_infix_18 = (ok2(s, s.$height, s.$ratio) && (s.$height * s.$ratio));
  (s.$width = t_infix_18);
  } else {
  (s.pc = "ImhRZvc6fHUqnuJ2");
  null;
  }
  (s.pc = "xZv5qx7QK0pfbIwx");
  var t_call_19 = (ok2(s, s.$width, s.$height) && lib.Media.create_portrait_board(s.$width, s.$height, s));
  s.rt.markAllocated(t_call_19);
  (/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS = t_call_19);
  s.rt.logDataWrite();
  } else {
  var t_elseIf_20 = true;
  (s.pc = "mbaxWZ8Upqc4dY2m");
  var t_infix_21 = (ok1(s, s.$height) && (s.$height < 0));
  ok1(s, t_infix_21);
  if (t_infix_21) {
  var t_elseIf_22 = true;
  (s.pc = "urxU2iGbiBiGNGbM");
  var t_infix_23 = (ok1(s, s.$ratio) && (s.$ratio < 1));
  ok1(s, t_infix_23);
  if (t_infix_23) {
  (s.pc = "xzVsM6nAQXKxe7pq");
  var t_infix_24 = (ok1(s, s.$ratio) && (1 / s.$ratio));
  (s.$ratio = t_infix_24);
  } else {
  (s.pc = "MxwEWf4q6uzK4tAi");
  null;
  }
  (s.pc = "Y2iBY1rS8V2IYESl");
  var t_infix_25 = (ok2(s, s.$width, s.$ratio) && (s.$width / s.$ratio));
  (s.$height = t_infix_25);
  } else {
  (s.pc = "bTATRVSUeo4CEjHh");
  null;
  }
  (s.pc = "IisORl3LBXmnPKgW");
  var t_call_26 = (ok2(s, s.$width, s.$height) && lib.Media.create_landscape_board(s.$width, s.$height, s));
  s.rt.markAllocated(t_call_26);
  (/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS = t_call_26);
  s.rt.logDataWrite();
  }
  (s.pc = "cpH4M20Y66Y5LRJs");
  (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m = 0);
  s.rt.logDataWrite();
  (s.pc = "ekMv5bgzPxBK4CW4");
  (/* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV = 3);
  s.rt.logDataWrite();
  (s.pc = "jbZnUix7Lx1Q7ZDV");
  var t_call_27 = lib.Invalid.datetime(s);
  (/* _start time */ s.d.$TzLNjDeJYpMRpdgNFuqgE2PY = t_call_27);
  s.rt.logDataWrite();
  (s.pc = "w1UaCIU8Ev4ebPlb");
  var t_call_28 = lib.Invalid.sprite(s);
  (/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X = t_call_28);
  s.rt.logDataWrite();
  (s.pc = "JOr3eMPViQ4dHWhw");
  var t_call_29 = lib.Invalid.sprite(s);
  (/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6 = t_call_29);
  s.rt.logDataWrite();
  (s.pc = "my4nhbFyphwdVePb");
  var t_call_30 = lib.Invalid.sprite(s);
  (/* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls = t_call_30);
  s.rt.logDataWrite();
  (s.pc = "jLtQyZzuywVmboyz");
  var t_infix_31 = (0 - 1);
  (/* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY = t_infix_31);
  s.rt.logDataWrite();
  (s.pc = "ZZUqmmdXH7QdhMrH");
  var t_call_32 = lib.String_.split("---\u003b\u2764\u003b\u2764\u2764\u003b\u2764\u2764\u2764", "\u003b", s);
  s.rt.markAllocated(t_call_32);
  (/* _hearts */ s.d.$emzufgdY6lsG2RaaCYaxwN8m = t_call_32);
  s.rt.logDataWrite();
  (s.pc = "xKSYee6TFDQOfML9");
  return s.rt.enter(a_UMupj4ChNfQ8E2uvW694p1tX(s, a_Ayu95FKZqA9xPdjQXSANLGvP$10));
}
cs.registerStep(a_Ayu95FKZqA9xPdjQXSANLGvP$0, 'a_Ayu95FKZqA9xPdjQXSANLGvP$0');

function a_Ayu95FKZqA9xPdjQXSANLGvP$10(s) {
  var t_actRes_33 = s.rt.returnedFrom.result;
  (/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6 = t_actRes_33);
  s.rt.logDataWrite();
  (s.pc = "Yyg0CzGMYWO9TQ47");
  var t_call_34 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.width(s));
  var t_infix_35 = (ok1(s, t_call_34) && (t_call_34 - 132));
  s.rt.logObjectMutation(/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6);
  (ok2(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6, t_infix_35) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.set_pos(t_infix_35, 20, s));
  (s.pc = "CtaIZxAjWA3KSV2x");
  var t_call_36 = lib.Colors.orange(s);
  s.rt.logObjectMutation(/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6);
  (ok2(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6, t_call_36) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.set_color(t_call_36, s));
  (s.pc = "kTjf5SscJwSXMOxR");
  return s.rt.enter(a_UMupj4ChNfQ8E2uvW694p1tX(s, a_Ayu95FKZqA9xPdjQXSANLGvP$11));
}
cs.registerStep(a_Ayu95FKZqA9xPdjQXSANLGvP$10, 'a_Ayu95FKZqA9xPdjQXSANLGvP$10');

function a_Ayu95FKZqA9xPdjQXSANLGvP$11(s) {
  var t_actRes_37 = s.rt.returnedFrom.result;
  (/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X = t_actRes_37);
  s.rt.logDataWrite();
  (s.pc = "lD26N7zVYcw4OA2B");
  var t_call_38 = lib.Colors.red(s);
  s.rt.logObjectMutation(/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X);
  (ok2(s, /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X, t_call_38) && /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X.set_color(t_call_38, s));
  (s.pc = "ShXHDkMQszri4hgi");
  s.rt.logObjectMutation(/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X);
  (ok1(s, /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X) && /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X.set_pos(84, 20, s));
  (s.pc = "DF79Mzy4RLJvr5lu");
  return s.rt.enter(a_UMupj4ChNfQ8E2uvW694p1tX(s, a_Ayu95FKZqA9xPdjQXSANLGvP$12));
}
cs.registerStep(a_Ayu95FKZqA9xPdjQXSANLGvP$11, 'a_Ayu95FKZqA9xPdjQXSANLGvP$11');

function a_Ayu95FKZqA9xPdjQXSANLGvP$12(s) {
  var t_actRes_39 = s.rt.returnedFrom.result;
  (/* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls = t_actRes_39);
  s.rt.logDataWrite();
  (s.pc = "flUJeGo9oH4ZKL7k");
  var t_call_40 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.width(s));
  var t_infix_41 = (ok1(s, t_call_40) && (t_call_40 / 2));
  s.rt.logObjectMutation(/* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls);
  (ok2(s, /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls, t_infix_41) && /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls.set_pos(t_infix_41, 20, s));
  var t_elseIf_42 = true;
  (s.pc = "nvzUAhKiUrDNx9ua");
  var t_call_43 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.width(s));
  var t_call_44 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.height(s));
  var t_infix_45 = (ok2(s, t_call_43, t_call_44) && (t_call_43 < t_call_44));
  ok1(s, t_infix_45);
  if (t_infix_45) {
  (s.pc = "tprbh6Qbs4RtbWGE");
  var t_call_46 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.height(s));
  var t_infix_47 = (ok1(s, t_call_46) && (t_call_46 / 10.5));
  s.rt.logObjectMutation(/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6);
  (ok2(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6, t_infix_47) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.set_y(t_infix_47, s));
  (s.pc = "vo1skKgdHy2wqGAI");
  var t_call_48 = (ok1(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.y(s));
  (s.$y = t_call_48);
  (s.pc = "xIiwhrp5beNVxp0W");
  var t_call_49 = (ok1(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.y(s));
  s.rt.logObjectMutation(/* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls);
  (ok2(s, /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls, t_call_49) && /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls.set_y(t_call_49, s));
  (s.pc = "xRtkSt16gx2kVUQE");
  s.rt.logObjectMutation(/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X);
  (ok2(s, /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X, s.$y) && /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X.set_y(s.$y, s));
  (s.pc = "xVMKJwJbqH32RaBs");
  var t_call_50 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.width(s));
  var t_infix_51 = (ok1(s, t_call_50) && (t_call_50 - 64));
  s.rt.logObjectMutation(/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6);
  (ok2(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6, t_infix_51) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.set_x(t_infix_51, s));
  (s.pc = "sftDMBB4Rc62DLVK");
  s.rt.logObjectMutation(/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X);
  (ok1(s, /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X) && /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X.set_x(64, s));
  } else {
  (s.pc = "cHVFuQ4F02fCxxlM");
  null;
  }
  (s.pc = "lVFXy8tvC2YO5VaY");
  return s.rt.enter(a_oKY8zayGQ3QsufrQiKXXS9sh(s, a_Ayu95FKZqA9xPdjQXSANLGvP$14, 0));
}
cs.registerStep(a_Ayu95FKZqA9xPdjQXSANLGvP$12, 'a_Ayu95FKZqA9xPdjQXSANLGvP$12');

function a_Ayu95FKZqA9xPdjQXSANLGvP$14(s) {
  (s.pc = "u1GLYt6g45euiwLd");
  return s.rt.enter(a_l4svuo4DZFDcDqJbGklzHLTi(s, a_Ayu95FKZqA9xPdjQXSANLGvP$15, 3));
}
cs.registerStep(a_Ayu95FKZqA9xPdjQXSANLGvP$14, 'a_Ayu95FKZqA9xPdjQXSANLGvP$14');

function a_Ayu95FKZqA9xPdjQXSANLGvP$15(s) {
  var t_actRes_52 = s.rt.returnedFrom.result;
  t_actRes_52;
  return s.rt.leave();
}
cs.registerStep(a_Ayu95FKZqA9xPdjQXSANLGvP$15, 'a_Ayu95FKZqA9xPdjQXSANLGvP$15');

/* ACTION: set score */
function a_oKY8zayGQ3QsufrQiKXXS9sh(previous, returnAddr, $value) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_oKY8zayGQ3QsufrQiKXXS9sh$0;
  s.name = "set score";
  s.$value = $value;
  s.$anim = undefined;
  return s;
}
cs.registerAction("set score", "oKY8zayGQ3QsufrQiKXXS9sh", a_oKY8zayGQ3QsufrQiKXXS9sh, false);

function ok5(s, a0, a1, a2, a3, a4) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined || a4 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok6(s, a0, a1, a2, a3, a4, a5) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined || a4 == undefined || a5 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function a_oKY8zayGQ3QsufrQiKXXS9sh$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_oKY8zayGQ3QsufrQiKXXS9sh$4, lib.RTValue.mkPicker(lib.Number_.picker(), 0, "value", "$value"));
  return a_oKY8zayGQ3QsufrQiKXXS9sh$4;
  }
  return a_oKY8zayGQ3QsufrQiKXXS9sh$3;
}
cs.registerStep(a_oKY8zayGQ3QsufrQiKXXS9sh$0, 'a_oKY8zayGQ3QsufrQiKXXS9sh$0');

function a_oKY8zayGQ3QsufrQiKXXS9sh$4(s) {
  return a_oKY8zayGQ3QsufrQiKXXS9sh$3;
}
cs.registerStep(a_oKY8zayGQ3QsufrQiKXXS9sh$4, 'a_oKY8zayGQ3QsufrQiKXXS9sh$4');

function a_oKY8zayGQ3QsufrQiKXXS9sh$3(s) {
  (s.pc = "jia5eGpMgyK70yu7");
  var t_call_0 = (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && lib.Math_.ceiling(/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m, s));
  var t_call_1 = (ok1(s, t_call_0) && lib.Number_.to_string(t_call_0, s));
  s.rt.logObjectMutation(/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6);
  (ok2(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6, t_call_1) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.set_text(t_call_1, s));
  (s.pc = "xQiqEsIGlVBWEId8");
  (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m = s.$value);
  s.rt.logDataWrite();
  var t_elseIf_2 = true;
  (s.pc = "xolTOrWos40PlDsI");
  var t_infix_3 = (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m < 0));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "x6X2fk4vDwHtW7kW");
  s.rt.logObjectMutation(/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6);
  (ok1(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.hide(s));
  } else {
  (s.pc = "jdbScDz352fC51ZD");
  s.rt.logObjectMutation(/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6);
  (ok1(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.show(s));
  (s.pc = "xK4S7FrNcjoVbrXT");
  var t_call_4 = (ok1(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.create_animation(s));
  (s.$anim = t_call_4);
  (s.pc = "xvRwFDBdhXE6rfYC");
  var t_call_5 = (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && lib.Math_.ceiling(/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m, s));
  var t_call_6 = (ok1(s, t_call_5) && lib.Number_.to_string(t_call_5, s));
  (ok2(s, s.$anim, t_call_6) && s.$anim.text(1, "cubic", "inout", t_call_6, s));
  }
  return s.rt.leave();
}
cs.registerStep(a_oKY8zayGQ3QsufrQiKXXS9sh$3, 'a_oKY8zayGQ3QsufrQiKXXS9sh$3');

/* ACTION: set life */
function a_l4svuo4DZFDcDqJbGklzHLTi(previous, returnAddr, $value) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_l4svuo4DZFDcDqJbGklzHLTi$0;
  s.name = "set life";
  s.$value = $value;
  return s;
}
cs.registerAction("set life", "l4svuo4DZFDcDqJbGklzHLTi", a_l4svuo4DZFDcDqJbGklzHLTi, true);

function a_l4svuo4DZFDcDqJbGklzHLTi$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_l4svuo4DZFDcDqJbGklzHLTi$6, lib.RTValue.mkPicker(lib.Number_.picker(), 0, "value", "$value"));
  return a_l4svuo4DZFDcDqJbGklzHLTi$6;
  }
  return a_l4svuo4DZFDcDqJbGklzHLTi$5;
}
cs.registerStep(a_l4svuo4DZFDcDqJbGklzHLTi$0, 'a_l4svuo4DZFDcDqJbGklzHLTi$0');

function a_l4svuo4DZFDcDqJbGklzHLTi$6(s) {
  return a_l4svuo4DZFDcDqJbGklzHLTi$5;
}
cs.registerStep(a_l4svuo4DZFDcDqJbGklzHLTi$6, 'a_l4svuo4DZFDcDqJbGklzHLTi$6');

function a_l4svuo4DZFDcDqJbGklzHLTi$5(s) {
  (s.pc = "HrH1awtB4sa44j1P");
  var t_call_0 = (ok1(s, s.$value) && lib.Math_.max(0, s.$value, s));
  (/* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV = t_call_0);
  s.rt.logDataWrite();
  var t_elseIf_1 = true;
  (s.pc = "KKSJ0NQA0LL2KCCt");
  var t_infix_2 = (ok1(s, /* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV) && (/* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV <= 0));
  ok1(s, t_infix_2);
  if (t_infix_2) {
  (s.pc = "UPv3xvSjaIsOHLKO");
  return s.rt.enter(a_gswamj84uYSwqLED2VvLdKi6(s, a_l4svuo4DZFDcDqJbGklzHLTi$3));
  } else {
  (s.pc = "EoZpEj9UC9ISrtEo");
  null;
  }
  return a_l4svuo4DZFDcDqJbGklzHLTi$2;
}
cs.registerStep(a_l4svuo4DZFDcDqJbGklzHLTi$5, 'a_l4svuo4DZFDcDqJbGklzHLTi$5');

function a_l4svuo4DZFDcDqJbGklzHLTi$3(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  (s.pc = "O8ZDpX4rPiqIH7PJ");
  return s.rt.enter(a_a14qLDjp7EtajVvdEd1rS18X(s, a_l4svuo4DZFDcDqJbGklzHLTi$4));
}
cs.registerStep(a_l4svuo4DZFDcDqJbGklzHLTi$3, 'a_l4svuo4DZFDcDqJbGklzHLTi$3');

function a_l4svuo4DZFDcDqJbGklzHLTi$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_l4svuo4DZFDcDqJbGklzHLTi$2, 'a_l4svuo4DZFDcDqJbGklzHLTi$2');

function a_l4svuo4DZFDcDqJbGklzHLTi$4(s) {
  var t_actRes_4 = s.rt.returnedFrom.result;
  t_actRes_4;
  return a_l4svuo4DZFDcDqJbGklzHLTi$2;
}
cs.registerStep(a_l4svuo4DZFDcDqJbGklzHLTi$4, 'a_l4svuo4DZFDcDqJbGklzHLTi$4');

/* ACTION: start countdown timer */
function a_uCawjS8UtYJd1W4TZkrVvAE7(previous, returnAddr, $seconds) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_uCawjS8UtYJd1W4TZkrVvAE7$0;
  s.name = "start countdown timer";
  s.$seconds = $seconds;
  return s;
}
cs.registerAction("start countdown timer", "uCawjS8UtYJd1W4TZkrVvAE7", a_uCawjS8UtYJd1W4TZkrVvAE7, false);

function a_uCawjS8UtYJd1W4TZkrVvAE7$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_uCawjS8UtYJd1W4TZkrVvAE7$3, lib.RTValue.mkPicker(lib.Number_.picker(), 0, "seconds", "$seconds"));
  return a_uCawjS8UtYJd1W4TZkrVvAE7$3;
  }
  return a_uCawjS8UtYJd1W4TZkrVvAE7$2;
}
cs.registerStep(a_uCawjS8UtYJd1W4TZkrVvAE7$0, 'a_uCawjS8UtYJd1W4TZkrVvAE7$0');

function a_uCawjS8UtYJd1W4TZkrVvAE7$3(s) {
  return a_uCawjS8UtYJd1W4TZkrVvAE7$2;
}
cs.registerStep(a_uCawjS8UtYJd1W4TZkrVvAE7$3, 'a_uCawjS8UtYJd1W4TZkrVvAE7$3');

function a_uCawjS8UtYJd1W4TZkrVvAE7$2(s) {
  (s.pc = "xrYxMpoChJ3q8C4C");
  var t_call_0 = lib.Time.now(s);
  (/* _start time */ s.d.$TzLNjDeJYpMRpdgNFuqgE2PY = t_call_0);
  s.rt.logDataWrite();
  (s.pc = "xpOkBULYOyu5K6ol");
  (/* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY = s.$seconds);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_uCawjS8UtYJd1W4TZkrVvAE7$2, 'a_uCawjS8UtYJd1W4TZkrVvAE7$2');

/* ACTION: score */
function a_xleVEbMbZTbU7BJfeUMUPpMk(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xleVEbMbZTbU7BJfeUMUPpMk$0;
  s.name = "score";
  s.result = undefined;
  return s;
}
cs.registerAction("score", "xleVEbMbZTbU7BJfeUMUPpMk", a_xleVEbMbZTbU7BJfeUMUPpMk, false);

function a_xleVEbMbZTbU7BJfeUMUPpMk$0(s) {
  (s.pc = "eM5HsVUk3W4Wjmar");
  (s.result = /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m);
  if (s.previous.needsPicker) {
  s.rt.displayResult("r", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_xleVEbMbZTbU7BJfeUMUPpMk$0, 'a_xleVEbMbZTbU7BJfeUMUPpMk$0');

/* ACTION: evolve */
function a_gswamj84uYSwqLED2VvLdKi6(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gswamj84uYSwqLED2VvLdKi6$0;
  s.name = "evolve";
  return s;
}
cs.registerAction("evolve", "gswamj84uYSwqLED2VvLdKi6", a_gswamj84uYSwqLED2VvLdKi6, true);

function a_gswamj84uYSwqLED2VvLdKi6$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "V02U4MCe9H2MP9DW");
  var t_call_1 = lib.Boolean_.not((/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS == undefined), s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.pc = "xtVboJorI0AoA2Ll");
  s.rt.logObjectMutation(/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.evolve(s));
  var t_elseIf_2 = true;
  (s.pc = "ZyuqlVaK8jZ4RcTi");
  var t_infix_3 = (ok1(s, /* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV) && (/* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV >= 0));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "Zzh3zjzuxyYn2f3X");
  return s.rt.enter(a_XjXM7AL67NDGlzsZgg9s44uq(s, a_gswamj84uYSwqLED2VvLdKi6$4));
  } else {
  (s.pc = "k9jfrGc2kT1qzpRP");
  null;
  }
  return a_gswamj84uYSwqLED2VvLdKi6$3;
  } else {
  (s.pc = "nTQYF6nOZPoiWaWO");
  null;
  }
  return a_gswamj84uYSwqLED2VvLdKi6$2;
}
cs.registerStep(a_gswamj84uYSwqLED2VvLdKi6$0, 'a_gswamj84uYSwqLED2VvLdKi6$0');

function a_gswamj84uYSwqLED2VvLdKi6$4(s) {
  return a_gswamj84uYSwqLED2VvLdKi6$3;
}
cs.registerStep(a_gswamj84uYSwqLED2VvLdKi6$4, 'a_gswamj84uYSwqLED2VvLdKi6$4');

function a_gswamj84uYSwqLED2VvLdKi6$3(s) {
  var t_elseIf_4 = true;
  (s.pc = "fr31zBhiCvv05kR8");
  var t_call_5 = lib.Boolean_.not((/* _start time */ s.d.$TzLNjDeJYpMRpdgNFuqgE2PY == undefined), s);
  ok1(s, t_call_5);
  if (t_call_5) {
  (s.pc = "Im49UQ654OeS2n44");
  return s.rt.enter(a_PojbQsm32lz5k054APQR8Jb1(s, a_gswamj84uYSwqLED2VvLdKi6$6));
  } else {
  (s.pc = "x2zQr2tlAKu17wPk");
  null;
  }
  return a_gswamj84uYSwqLED2VvLdKi6$5;
}
cs.registerStep(a_gswamj84uYSwqLED2VvLdKi6$3, 'a_gswamj84uYSwqLED2VvLdKi6$3');

function a_gswamj84uYSwqLED2VvLdKi6$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_gswamj84uYSwqLED2VvLdKi6$2, 'a_gswamj84uYSwqLED2VvLdKi6$2');

function a_gswamj84uYSwqLED2VvLdKi6$6(s) {
  var t_actRes_6 = s.rt.returnedFrom.result;
  t_actRes_6;
  return a_gswamj84uYSwqLED2VvLdKi6$5;
}
cs.registerStep(a_gswamj84uYSwqLED2VvLdKi6$6, 'a_gswamj84uYSwqLED2VvLdKi6$6');

function a_gswamj84uYSwqLED2VvLdKi6$5(s) {
  return a_gswamj84uYSwqLED2VvLdKi6$2;
}
cs.registerStep(a_gswamj84uYSwqLED2VvLdKi6$5, 'a_gswamj84uYSwqLED2VvLdKi6$5');

/* ACTION: create text */
function a_UMupj4ChNfQ8E2uvW694p1tX(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_UMupj4ChNfQ8E2uvW694p1tX$0;
  s.name = "create text";
  s.result = undefined;
  return s;
}
cs.registerAction("create text", "UMupj4ChNfQ8E2uvW694p1tX", a_UMupj4ChNfQ8E2uvW694p1tX, false);

function a_UMupj4ChNfQ8E2uvW694p1tX$0(s) {
  (s.pc = "r2pD3YM0AhwqdeoJ");
  var t_call_0 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.create_text(100, 20, 28, "", s));
  s.rt.markAllocated(t_call_0);
  (s.result = t_call_0);
  (s.pc = "DfUPvQHARvqZmkPa");
  s.rt.logObjectMutation(s.result);
  (ok1(s, s.result) && s.result.set_z_index(1000, s));
  (s.pc = "xvp7IxArcVElQk4H");
  s.rt.logObjectMutation(s.result);
  (ok1(s, s.result) && s.result.set_friction(1, s));
  (s.pc = "Sh16Yvgqws3F2ttd");
  var t_call_1 = lib.Colors.foreground(s);
  s.rt.logObjectMutation(s.result);
  (ok2(s, s.result, t_call_1) && s.result.set_color(t_call_1, s));
  return s.rt.leave();
}
cs.registerStep(a_UMupj4ChNfQ8E2uvW694p1tX$0, 'a_UMupj4ChNfQ8E2uvW694p1tX$0');

/* ACTION: evolve life */
function a_XjXM7AL67NDGlzsZgg9s44uq(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_XjXM7AL67NDGlzsZgg9s44uq$0;
  s.name = "evolve life";
  s.$l = undefined;
  s.$s = undefined;
  return s;
}
cs.registerAction("evolve life", "XjXM7AL67NDGlzsZgg9s44uq", a_XjXM7AL67NDGlzsZgg9s44uq, false);

function a_XjXM7AL67NDGlzsZgg9s44uq$0(s) {
  (s.pc = "x69dm0I2qdoTbeEa");
  var t_call_0 = (ok1(s, /* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV) && lib.Math_.ceiling(/* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV, s));
  (s.$l = t_call_0);
  (s.pc = "MkDJrwcWdlaEAj5i");
  var t_call_1 = (ok1(s, s.$l) && lib.Number_.to_string(s.$l, s));
  var t_concat_2 = lib.String_.concatAny("\u2764 ", t_call_1);
  (s.$s = t_concat_2);
  var t_elseIf_3 = true;
  (s.pc = "NnjfQ48F1IZTeEU4");
  var t_call_4 = (ok1(s, /* _hearts */ s.d.$emzufgdY6lsG2RaaCYaxwN8m) && /* _hearts */ s.d.$emzufgdY6lsG2RaaCYaxwN8m.count(s));
  var t_infix_5 = (ok2(s, s.$l, t_call_4) && (s.$l < t_call_4));
  ok1(s, t_infix_5);
  if (t_infix_5) {
  (s.pc = "xUcDUL43eSf74Few");
  var t_call_6 = (ok2(s, /* _hearts */ s.d.$emzufgdY6lsG2RaaCYaxwN8m, s.$l) && /* _hearts */ s.d.$emzufgdY6lsG2RaaCYaxwN8m.at(s.$l, s));
  (s.$s = t_call_6);
  } else {
  (s.pc = "u2jYuWfc2wiuj4kD");
  null;
  }
  (s.pc = "Bv24Vr22toZdfAsj");
  s.rt.logObjectMutation(/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X);
  (ok2(s, /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X, s.$s) && /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X.set_text(s.$s, s));
  return s.rt.leave();
}
cs.registerStep(a_XjXM7AL67NDGlzsZgg9s44uq$0, 'a_XjXM7AL67NDGlzsZgg9s44uq$0');

/* ACTION: evolve timer */
function a_PojbQsm32lz5k054APQR8Jb1(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_PojbQsm32lz5k054APQR8Jb1$0;
  s.name = "evolve timer";
  s.$elapsed = undefined;
  return s;
}
cs.registerAction("evolve timer", "PojbQsm32lz5k054APQR8Jb1", a_PojbQsm32lz5k054APQR8Jb1, true);

function a_PojbQsm32lz5k054APQR8Jb1$0(s) {
  (s.pc = "tSYdAJQ9rmGX28Ph");
  return s.rt.enter(a_q4EB482ElguyYpuPEwTgQQ4e(s, a_PojbQsm32lz5k054APQR8Jb1$2));
}
cs.registerStep(a_PojbQsm32lz5k054APQR8Jb1$0, 'a_PojbQsm32lz5k054APQR8Jb1$0');

function a_PojbQsm32lz5k054APQR8Jb1$2(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  (s.$elapsed = t_actRes_0);
  (s.pc = "zaYbaDOnN52N0y3T");
  var t_call_1 = (ok1(s, s.$elapsed) && lib.Math_.round_with_precision(s.$elapsed, 1, s));
  var t_call_2 = (ok1(s, t_call_1) && lib.Number_.to_string(t_call_1, s));
  s.rt.logObjectMutation(/* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls);
  (ok2(s, /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls, t_call_2) && /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls.set_text(t_call_2, s));
  var t_elseIf_3 = true;
  (s.pc = "x5HB6TM2gE95ePes");
  var t_infix_4 = (ok1(s, /* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY) && (/* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY > 0));
  var t_lazy_5 = t_infix_4;
  if ((ok1(s, t_lazy_5) && t_lazy_5)) {
  var t_infix_6 = (ok1(s, s.$elapsed) && (s.$elapsed === 0));
  (t_lazy_5 = t_infix_6);
  }
  ok1(s, t_lazy_5);
  if (t_lazy_5) {
  (s.pc = "M7CIY2SvsjyqZLbG");
  return s.rt.enter(a_a14qLDjp7EtajVvdEd1rS18X(s, a_PojbQsm32lz5k054APQR8Jb1$5));
  } else {
  (s.pc = "qw3awHOUvOVS4jzn");
  null;
  }
  return a_PojbQsm32lz5k054APQR8Jb1$4;
}
cs.registerStep(a_PojbQsm32lz5k054APQR8Jb1$2, 'a_PojbQsm32lz5k054APQR8Jb1$2');

function a_PojbQsm32lz5k054APQR8Jb1$5(s) {
  var t_actRes_7 = s.rt.returnedFrom.result;
  t_actRes_7;
  return a_PojbQsm32lz5k054APQR8Jb1$4;
}
cs.registerStep(a_PojbQsm32lz5k054APQR8Jb1$5, 'a_PojbQsm32lz5k054APQR8Jb1$5');

function a_PojbQsm32lz5k054APQR8Jb1$4(s) {
  return s.rt.leave();
}
cs.registerStep(a_PojbQsm32lz5k054APQR8Jb1$4, 'a_PojbQsm32lz5k054APQR8Jb1$4');

/* ACTION: current time */
function a_q4EB482ElguyYpuPEwTgQQ4e(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_q4EB482ElguyYpuPEwTgQQ4e$0;
  s.name = "current time";
  s.result = undefined;
  return s;
}
cs.registerAction("current time", "q4EB482ElguyYpuPEwTgQQ4e", a_q4EB482ElguyYpuPEwTgQQ4e, false);

function a_q4EB482ElguyYpuPEwTgQQ4e$0(s) {
  (s.pc = "C4ggpXXT0fM11xJ2");
  var t_call_0 = lib.Time.now(s);
  var t_call_1 = (ok2(s, t_call_0, /* _start time */ s.d.$TzLNjDeJYpMRpdgNFuqgE2PY) && t_call_0.subtract(/* _start time */ s.d.$TzLNjDeJYpMRpdgNFuqgE2PY, s));
  (s.result = t_call_1);
  var t_elseIf_2 = true;
  (s.pc = "hAkzFccDnEQ4eexF");
  var t_infix_3 = (ok1(s, /* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY) && (/* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY > 0));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "xlavYFgnlGubTeEu");
  var t_infix_4 = (ok2(s, /* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY, s.result) && (/* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY - s.result));
  var t_call_5 = (ok1(s, t_infix_4) && lib.Math_.max(0, t_infix_4, s));
  (s.result = t_call_5);
  } else {
  (s.pc = "oIoGUHlIgEnHOpTo");
  null;
  }
  if (s.previous.needsPicker) {
  s.rt.displayResult("seconds", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_q4EB482ElguyYpuPEwTgQQ4e$0, 'a_q4EB482ElguyYpuPEwTgQQ4e$0');

/* ACTION: add score */
function a_xINhkUFpWzhMPF0ROZX4TSm4(previous, returnAddr, $value) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xINhkUFpWzhMPF0ROZX4TSm4$0;
  s.name = "add score";
  s.$value = $value;
  s.$sprite = undefined;
  s.$anim = undefined;
  return s;
}
cs.registerAction("add score", "xINhkUFpWzhMPF0ROZX4TSm4", a_xINhkUFpWzhMPF0ROZX4TSm4, false);

function a_xINhkUFpWzhMPF0ROZX4TSm4$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_xINhkUFpWzhMPF0ROZX4TSm4$7, lib.RTValue.mkPicker(lib.Number_.picker(), 0, "value", "$value"));
  return a_xINhkUFpWzhMPF0ROZX4TSm4$7;
  }
  return a_xINhkUFpWzhMPF0ROZX4TSm4$6;
}
cs.registerStep(a_xINhkUFpWzhMPF0ROZX4TSm4$0, 'a_xINhkUFpWzhMPF0ROZX4TSm4$0');

function a_xINhkUFpWzhMPF0ROZX4TSm4$7(s) {
  return a_xINhkUFpWzhMPF0ROZX4TSm4$6;
}
cs.registerStep(a_xINhkUFpWzhMPF0ROZX4TSm4$7, 'a_xINhkUFpWzhMPF0ROZX4TSm4$7');

function a_xINhkUFpWzhMPF0ROZX4TSm4$6(s) {
  var t_elseIf_0 = true;
  (s.pc = "VurwTOF3FLa4ejcU");
  var t_infix_1 = (ok1(s, s.$value) && (s.$value > 0));
  ok1(s, t_infix_1);
  if (t_infix_1) {
  (s.pc = "dvQS5eDbxUvHojRk");
  var t_infix_2 = (ok2(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m, s.$value) && (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m + s.$value));
  return s.rt.enter(a_oKY8zayGQ3QsufrQiKXXS9sh(s, a_xINhkUFpWzhMPF0ROZX4TSm4$3, t_infix_2));
  } else {
  (s.pc = "r4IonSek1xKg0wN3");
  null;
  }
  return a_xINhkUFpWzhMPF0ROZX4TSm4$2;
}
cs.registerStep(a_xINhkUFpWzhMPF0ROZX4TSm4$6, 'a_xINhkUFpWzhMPF0ROZX4TSm4$6');

function a_xINhkUFpWzhMPF0ROZX4TSm4$3(s) {
  var t_elseIf_3 = true;
  (s.pc = "sfOOtfKb4Xf1BwcX");
  var t_infix_4 = (ok1(s, s.$value) && (s.$value > 1));
  ok1(s, t_infix_4);
  if (t_infix_4) {
  (s.pc = "l3wCIj7Pgnwwaxa6");
  return s.rt.enter(a_UMupj4ChNfQ8E2uvW694p1tX(s, a_xINhkUFpWzhMPF0ROZX4TSm4$5));
  } else {
  (s.pc = "Hxivbiiv7TXIcWQ0");
  null;
  }
  return a_xINhkUFpWzhMPF0ROZX4TSm4$4;
}
cs.registerStep(a_xINhkUFpWzhMPF0ROZX4TSm4$3, 'a_xINhkUFpWzhMPF0ROZX4TSm4$3');

function a_xINhkUFpWzhMPF0ROZX4TSm4$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_xINhkUFpWzhMPF0ROZX4TSm4$2, 'a_xINhkUFpWzhMPF0ROZX4TSm4$2');

function a_xINhkUFpWzhMPF0ROZX4TSm4$5(s) {
  var t_actRes_5 = s.rt.returnedFrom.result;
  (s.$sprite = t_actRes_5);
  (s.pc = "SpicJAYTeJmiPCCz");
  var t_call_6 = (ok1(s, s.$value) && lib.Math_.ceiling(s.$value, s));
  var t_call_7 = (ok1(s, t_call_6) && lib.Number_.to_string(t_call_6, s));
  s.rt.logObjectMutation(s.$sprite);
  (ok2(s, s.$sprite, t_call_7) && s.$sprite.set_text(t_call_7, s));
  (s.pc = "jsbm2wkw4a611R5L");
  var t_call_8 = (ok1(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.x(s));
  var t_call_9 = (ok1(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.y(s));
  s.rt.logObjectMutation(s.$sprite);
  (ok3(s, s.$sprite, t_call_8, t_call_9) && s.$sprite.set_pos(t_call_8, t_call_9, s));
  (s.pc = "xoIUTQpKKecgzCBQ");
  var t_call_10 = (ok1(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.color(s));
  s.rt.logObjectMutation(s.$sprite);
  (ok2(s, s.$sprite, t_call_10) && s.$sprite.set_color(t_call_10, s));
  (s.pc = "A2Yn5zDjzdNo1bNy");
  var t_call_11 = (ok1(s, s.$sprite) && s.$sprite.create_animation(s));
  (s.$anim = t_call_11);
  (s.pc = "QTO5DnOJkIqirrb8");
  s.rt.logObjectMutation(s.$anim);
  (ok1(s, s.$anim) && s.$anim.puff_out(0.5, "cubic", 1.5, s));
  (s.pc = "A4CmMqj3KJAY3UGU");
  s.rt.logObjectMutation(s.$anim);
  (ok1(s, s.$anim) && s.$anim.delete_(s));
  return a_xINhkUFpWzhMPF0ROZX4TSm4$4;
}
cs.registerStep(a_xINhkUFpWzhMPF0ROZX4TSm4$5, 'a_xINhkUFpWzhMPF0ROZX4TSm4$5');

function a_xINhkUFpWzhMPF0ROZX4TSm4$4(s) {
  return a_xINhkUFpWzhMPF0ROZX4TSm4$2;
}
cs.registerStep(a_xINhkUFpWzhMPF0ROZX4TSm4$4, 'a_xINhkUFpWzhMPF0ROZX4TSm4$4');

/* ACTION: add life */
function a_l0buJlsN2iCiTbJPwUwTGWmO(previous, returnAddr, $value) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_l0buJlsN2iCiTbJPwUwTGWmO$0;
  s.name = "add life";
  s.$value = $value;
  return s;
}
cs.registerAction("add life", "l0buJlsN2iCiTbJPwUwTGWmO", a_l0buJlsN2iCiTbJPwUwTGWmO, true);

function a_l0buJlsN2iCiTbJPwUwTGWmO$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_l0buJlsN2iCiTbJPwUwTGWmO$4, lib.RTValue.mkPicker(lib.Number_.picker(), 0, "value", "$value"));
  return a_l0buJlsN2iCiTbJPwUwTGWmO$4;
  }
  return a_l0buJlsN2iCiTbJPwUwTGWmO$3;
}
cs.registerStep(a_l0buJlsN2iCiTbJPwUwTGWmO$0, 'a_l0buJlsN2iCiTbJPwUwTGWmO$0');

function a_l0buJlsN2iCiTbJPwUwTGWmO$4(s) {
  return a_l0buJlsN2iCiTbJPwUwTGWmO$3;
}
cs.registerStep(a_l0buJlsN2iCiTbJPwUwTGWmO$4, 'a_l0buJlsN2iCiTbJPwUwTGWmO$4');

function a_l0buJlsN2iCiTbJPwUwTGWmO$3(s) {
  (s.pc = "t429gQZTs2Mi64fg");
  var t_infix_0 = (ok2(s, /* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV, s.$value) && (/* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV + s.$value));
  return s.rt.enter(a_l4svuo4DZFDcDqJbGklzHLTi(s, a_l0buJlsN2iCiTbJPwUwTGWmO$2, t_infix_0));
}
cs.registerStep(a_l0buJlsN2iCiTbJPwUwTGWmO$3, 'a_l0buJlsN2iCiTbJPwUwTGWmO$3');

function a_l0buJlsN2iCiTbJPwUwTGWmO$2(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  t_actRes_1;
  return s.rt.leave();
}
cs.registerStep(a_l0buJlsN2iCiTbJPwUwTGWmO$2, 'a_l0buJlsN2iCiTbJPwUwTGWmO$2');

/* ACTION: remove life */
function a_qoY1RsaFEb0jJJuZq8SkbAp3(previous, returnAddr, $value) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_qoY1RsaFEb0jJJuZq8SkbAp3$0;
  s.name = "remove life";
  s.$value = $value;
  return s;
}
cs.registerAction("remove life", "qoY1RsaFEb0jJJuZq8SkbAp3", a_qoY1RsaFEb0jJJuZq8SkbAp3, true);

function a_qoY1RsaFEb0jJJuZq8SkbAp3$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_qoY1RsaFEb0jJJuZq8SkbAp3$4, lib.RTValue.mkPicker(lib.Number_.picker(), 0, "value", "$value"));
  return a_qoY1RsaFEb0jJJuZq8SkbAp3$4;
  }
  return a_qoY1RsaFEb0jJJuZq8SkbAp3$3;
}
cs.registerStep(a_qoY1RsaFEb0jJJuZq8SkbAp3$0, 'a_qoY1RsaFEb0jJJuZq8SkbAp3$0');

function a_qoY1RsaFEb0jJJuZq8SkbAp3$4(s) {
  return a_qoY1RsaFEb0jJJuZq8SkbAp3$3;
}
cs.registerStep(a_qoY1RsaFEb0jJJuZq8SkbAp3$4, 'a_qoY1RsaFEb0jJJuZq8SkbAp3$4');

function a_qoY1RsaFEb0jJJuZq8SkbAp3$3(s) {
  (s.pc = "YQ51m4VCvuQWTj3G");
  var t_infix_0 = (ok2(s, /* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV, s.$value) && (/* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV - s.$value));
  return s.rt.enter(a_l4svuo4DZFDcDqJbGklzHLTi(s, a_qoY1RsaFEb0jJJuZq8SkbAp3$2, t_infix_0));
}
cs.registerStep(a_qoY1RsaFEb0jJJuZq8SkbAp3$3, 'a_qoY1RsaFEb0jJJuZq8SkbAp3$3');

function a_qoY1RsaFEb0jJJuZq8SkbAp3$2(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  t_actRes_1;
  return s.rt.leave();
}
cs.registerStep(a_qoY1RsaFEb0jJJuZq8SkbAp3$2, 'a_qoY1RsaFEb0jJJuZq8SkbAp3$2');

/* ACTION: end */
function a_a14qLDjp7EtajVvdEd1rS18X(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a14qLDjp7EtajVvdEd1rS18X$0;
  s.name = "end";
  return s;
}
cs.registerAction("end", "a14qLDjp7EtajVvdEd1rS18X", a_a14qLDjp7EtajVvdEd1rS18X, true);

function a_a14qLDjp7EtajVvdEd1rS18X$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "GEyVdP7gHEhMYuLh");
  var t_call_1 = lib.Boolean_.not((/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS == undefined), s);
  ok1(s, t_call_1);
  if (t_call_1) {
  var t_elseIf_2 = true;
  (s.pc = "PNm4kHsAAvLeTCPN");
  var t_call_3 = lib.Boolean_.not((/* _end event */ s.d.$Eu2dngMaA73jYqD6d0u8iCju == undefined), s);
  ok1(s, t_call_3);
  if (t_call_3) {
  (s.pc = "OmNZGM9KWiapFko7");
  return s.rt.enter((ok1(s, /* _end event */ s.d.$Eu2dngMaA73jYqD6d0u8iCju) && /* _end event */ s.d.$Eu2dngMaA73jYqD6d0u8iCju(s, a_a14qLDjp7EtajVvdEd1rS18X$4)));
  } else {
  var t_elseIf_4 = true;
  (s.pc = "oCdsISU82CsuPzFb");
  var t_infix_5 = (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m > 0));
  ok1(s, t_infix_5);
  if (t_infix_5) {
  (s.pc = "ckNPHuv2TzqnX5lX");
  s.rt.logObjectMutation(null);
  var t_resumeCtx_6 = s.rt.getAwaitResumeCtx(a_a14qLDjp7EtajVvdEd1rS18X$7);
  (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && lib.Bazaar.post_leaderboard_score(/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m, t_resumeCtx_6));
  return a_a14qLDjp7EtajVvdEd1rS18X$7;
  } else {
  (s.pc = "n8p8q9As2BDFx9Yp");
  null;
  }
  return a_a14qLDjp7EtajVvdEd1rS18X$6;
  }
  return a_a14qLDjp7EtajVvdEd1rS18X$3;
  } else {
  (s.pc = "H46mchIVaa2RJui7");
  null;
  }
  return a_a14qLDjp7EtajVvdEd1rS18X$2;
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$0, 'a_a14qLDjp7EtajVvdEd1rS18X$0');

function a_a14qLDjp7EtajVvdEd1rS18X$4(s) {
  (s.pc = "xKYF8z0LLaVOQks4");
  return s.rt.enter(a_Kv3t1TJgZdpYJpx9reGXtTW2(s, a_a14qLDjp7EtajVvdEd1rS18X$5));
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$4, 'a_a14qLDjp7EtajVvdEd1rS18X$4');

function a_a14qLDjp7EtajVvdEd1rS18X$7(s) {
  return a_a14qLDjp7EtajVvdEd1rS18X$6;
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$7, 'a_a14qLDjp7EtajVvdEd1rS18X$7');

function a_a14qLDjp7EtajVvdEd1rS18X$6(s) {
  (s.pc = "WX2o7oS0pkjUgsJI");
  return s.rt.enter(a_joFUGC04wxnpsBuC02e32Cvy(s, a_a14qLDjp7EtajVvdEd1rS18X$8));
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$6, 'a_a14qLDjp7EtajVvdEd1rS18X$6');

function a_a14qLDjp7EtajVvdEd1rS18X$3(s) {
  return a_a14qLDjp7EtajVvdEd1rS18X$2;
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$3, 'a_a14qLDjp7EtajVvdEd1rS18X$3');

function a_a14qLDjp7EtajVvdEd1rS18X$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$2, 'a_a14qLDjp7EtajVvdEd1rS18X$2');

function a_a14qLDjp7EtajVvdEd1rS18X$5(s) {
  return a_a14qLDjp7EtajVvdEd1rS18X$3;
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$5, 'a_a14qLDjp7EtajVvdEd1rS18X$5');

function a_a14qLDjp7EtajVvdEd1rS18X$8(s) {
  var t_actRes_7 = s.rt.returnedFrom.result;
  t_actRes_7;
  var t_elseIf_8 = true;
  (s.pc = "ovm0Qx6hi7RraNH6");
  var t_call_9 = lib.App.script_id(s);
  var t_call_10 = lib.Boolean_.not((t_call_9 == undefined), s);
  ok1(s, t_call_10);
  if (t_call_10) {
  (s.pc = "ixtnMJPUsyivodZ2");
  var t_resumeCtx_11 = s.rt.getBlockingResumeCtx(a_a14qLDjp7EtajVvdEd1rS18X$10);
  lib.App.restart("", t_resumeCtx_11);
  return a_a14qLDjp7EtajVvdEd1rS18X$10;
  } else {
  (s.pc = "r29oNrz6JhN2qzFi");
  null;
  }
  return a_a14qLDjp7EtajVvdEd1rS18X$9;
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$8, 'a_a14qLDjp7EtajVvdEd1rS18X$8');

function a_a14qLDjp7EtajVvdEd1rS18X$10(s) {
  return a_a14qLDjp7EtajVvdEd1rS18X$9;
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$10, 'a_a14qLDjp7EtajVvdEd1rS18X$10');

function a_a14qLDjp7EtajVvdEd1rS18X$9(s) {
  return a_a14qLDjp7EtajVvdEd1rS18X$3;
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$9, 'a_a14qLDjp7EtajVvdEd1rS18X$9');

/* ACTION: start */
function a_rUM4WD97vl3DCMmQPvBzb6jc(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_rUM4WD97vl3DCMmQPvBzb6jc$0;
  s.name = "start";
  s.result = undefined;
  return s;
}
cs.registerAction("start", "rUM4WD97vl3DCMmQPvBzb6jc", a_rUM4WD97vl3DCMmQPvBzb6jc, true);

function a_rUM4WD97vl3DCMmQPvBzb6jc$0(s) {
  (s.pc = "itfyVKsFJ72c4STK");
  var t_infix_0 = (0 - 1);
  var t_infix_1 = (0 - 1);
  return s.rt.enter(a_XQPjg13t37zIEtpt44U6ff92(s, a_rUM4WD97vl3DCMmQPvBzb6jc$2, t_infix_0, t_infix_1));
}
cs.registerStep(a_rUM4WD97vl3DCMmQPvBzb6jc$0, 'a_rUM4WD97vl3DCMmQPvBzb6jc$0');

function a_rUM4WD97vl3DCMmQPvBzb6jc$2(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  (s.result = t_actRes_2);
  if (s.previous.needsPicker) {
  s.rt.displayResult("board", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_rUM4WD97vl3DCMmQPvBzb6jc$2, 'a_rUM4WD97vl3DCMmQPvBzb6jc$2');

/* ACTION: game over */
function a_joFUGC04wxnpsBuC02e32Cvy(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_joFUGC04wxnpsBuC02e32Cvy$0;
  s.name = "game over";
  s.$message = undefined;
  s.$text = undefined;
  s.$i = undefined;
  return s;
}
cs.registerAction("game over", "joFUGC04wxnpsBuC02e32Cvy", a_joFUGC04wxnpsBuC02e32Cvy, true);

function a_joFUGC04wxnpsBuC02e32Cvy$0(s) {
  (s.pc = "bR2JRRWa79KdtZFj");
  (s.$message = "game over");
  (s.pc = "M2lvKKOoUSyjBCSv");
  var t_call_0 = (ok2(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS, s.$message) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.create_text(200, 40, 40, s.$message, s));
  s.rt.markAllocated(t_call_0);
  (s.$text = t_call_0);
  (s.pc = "JMxAY8MaxP9BJkYm");
  s.rt.logObjectMutation(s.$text);
  (ok1(s, s.$text) && s.$text.set_opacity(0, s));
  (s.pc = "G0kMTi3FwR2Te2TL");
  var t_infix_1 = (720 / 5);
  s.t_bnd_2 = t_infix_1;
  (s.$i = 0);
  return a_joFUGC04wxnpsBuC02e32Cvy$2;
}
cs.registerStep(a_joFUGC04wxnpsBuC02e32Cvy$0, 'a_joFUGC04wxnpsBuC02e32Cvy$0');

function a_joFUGC04wxnpsBuC02e32Cvy$2(s) {
  if ((s.$i < s.t_bnd_2)) {
  (s.pc = "x8gGwdunz5TOunUX");
  var t_call_3 = (ok1(s, s.$text) && s.$text.opacity(s));
  var t_infix_4 = (ok1(s, t_call_3) && (t_call_3 + 0.05));
  s.rt.logObjectMutation(s.$text);
  (ok2(s, s.$text, t_infix_4) && s.$text.set_opacity(t_infix_4, s));
  (s.pc = "UZreYUZJfIfRGKib");
  var t_call_5 = lib.Colors.random(s);
  s.rt.logObjectMutation(s.$text);
  (ok2(s, s.$text, t_call_5) && s.$text.set_color(t_call_5, s));
  (s.pc = "ceUd1V8yfqAFQqBu");
  var t_call_6 = (ok1(s, s.$text) && s.$text.angle(s));
  var t_infix_7 = (ok1(s, t_call_6) && (t_call_6 + 5));
  s.rt.logObjectMutation(s.$text);
  (ok2(s, s.$text, t_infix_7) && s.$text.set_angle(t_infix_7, s));
  (s.pc = "x92Ig40jCZ7U1SyU");
  s.rt.logObjectMutation(/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.update_on_wall(s));
  (s.pc = "tZWU4KGKKBKVwDn8");
  var t_resumeCtx_8 = s.rt.getAwaitResumeCtx(a_joFUGC04wxnpsBuC02e32Cvy$6);
  lib.Time.sleep(0.02, t_resumeCtx_8);
  return a_joFUGC04wxnpsBuC02e32Cvy$6;
  }
  (s.pc = "TU2xkLuKEQOh3DbW");
  var t_resumeCtx_9 = s.rt.getAwaitResumeCtx(a_joFUGC04wxnpsBuC02e32Cvy$7);
  lib.Time.sleep(2, t_resumeCtx_9);
  return a_joFUGC04wxnpsBuC02e32Cvy$7;
}
cs.registerStep(a_joFUGC04wxnpsBuC02e32Cvy$2, 'a_joFUGC04wxnpsBuC02e32Cvy$2');

function a_joFUGC04wxnpsBuC02e32Cvy$6(s) {
  (s.$i++);
  return a_joFUGC04wxnpsBuC02e32Cvy$2;
}
cs.registerStep(a_joFUGC04wxnpsBuC02e32Cvy$6, 'a_joFUGC04wxnpsBuC02e32Cvy$6');

function a_joFUGC04wxnpsBuC02e32Cvy$7(s) {
  (s.pc = "cMsaragG8BtT1kXr");
  s.rt.logObjectMutation(s.$text);
  (ok1(s, s.$text) && s.$text.delete_(s));
  (s.pc = "vXI7tWrlPSWirI47");
  var t_resumeCtx_10 = s.rt.getBlockingResumeCtx(a_joFUGC04wxnpsBuC02e32Cvy$8);
  lib.App.stop(t_resumeCtx_10);
  return a_joFUGC04wxnpsBuC02e32Cvy$8;
}
cs.registerStep(a_joFUGC04wxnpsBuC02e32Cvy$7, 'a_joFUGC04wxnpsBuC02e32Cvy$7');

function a_joFUGC04wxnpsBuC02e32Cvy$8(s) {
  (s.pc = "uRIMBM6HQm2N2Nxd");
  s.rt.logObjectMutation(/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.update_on_wall(s));
  return s.rt.leave();
}
cs.registerStep(a_joFUGC04wxnpsBuC02e32Cvy$8, 'a_joFUGC04wxnpsBuC02e32Cvy$8');

/* ACTION: reset */
function a_Kv3t1TJgZdpYJpx9reGXtTW2(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_Kv3t1TJgZdpYJpx9reGXtTW2$0;
  s.name = "reset";
  return s;
}
cs.registerAction("reset", "Kv3t1TJgZdpYJpx9reGXtTW2", a_Kv3t1TJgZdpYJpx9reGXtTW2, false);

function a_Kv3t1TJgZdpYJpx9reGXtTW2$0(s) {
  (s.pc = "xLdUoT2qnoqxmytB");
  return s.rt.enter(a_xpQAnETcU9aowS6g7p1qZZbf(s, a_Kv3t1TJgZdpYJpx9reGXtTW2$2));
}
cs.registerStep(a_Kv3t1TJgZdpYJpx9reGXtTW2$0, 'a_Kv3t1TJgZdpYJpx9reGXtTW2$0');

function a_Kv3t1TJgZdpYJpx9reGXtTW2$2(s) {
  (s.pc = "JuuhG6ReNJxwspTc");
  var t_call_0 = lib.Invalid.action(s);
  (/* _end event */ s.d.$Eu2dngMaA73jYqD6d0u8iCju = t_call_0);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_Kv3t1TJgZdpYJpx9reGXtTW2$2, 'a_Kv3t1TJgZdpYJpx9reGXtTW2$2');

/* ACTION: start with fixed size */
function a_XQPjg13t37zIEtpt44U6ff92(previous, returnAddr, $width, $height) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_XQPjg13t37zIEtpt44U6ff92$0;
  s.name = "start with fixed size";
  s.$width = $width;
  s.$height = $height;
  s.result = undefined;
  s.$perform = undefined;
  return s;
}
cs.registerAction("start with fixed size", "XQPjg13t37zIEtpt44U6ff92", a_XQPjg13t37zIEtpt44U6ff92, true);

function a_XQPjg13t37zIEtpt44U6ff92$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_XQPjg13t37zIEtpt44U6ff92$6, lib.RTValue.mkPicker(lib.Number_.picker(), 0, "width", "$width"), lib.RTValue.mkPicker(lib.Number_.picker(), 0, "height", "$height"));
  return a_XQPjg13t37zIEtpt44U6ff92$6;
  }
  return a_XQPjg13t37zIEtpt44U6ff92$5;
}
cs.registerStep(a_XQPjg13t37zIEtpt44U6ff92$0, 'a_XQPjg13t37zIEtpt44U6ff92$0');

function a_XQPjg13t37zIEtpt44U6ff92$6(s) {
  return a_XQPjg13t37zIEtpt44U6ff92$5;
}
cs.registerStep(a_XQPjg13t37zIEtpt44U6ff92$6, 'a_XQPjg13t37zIEtpt44U6ff92$6');

function a_XQPjg13t37zIEtpt44U6ff92$5(s) {
  (s.pc = "xnuJIIH3pQuwhAsw");
  return s.rt.enter(a_xpQAnETcU9aowS6g7p1qZZbf(s, a_XQPjg13t37zIEtpt44U6ff92$2));
}
cs.registerStep(a_XQPjg13t37zIEtpt44U6ff92$5, 'a_XQPjg13t37zIEtpt44U6ff92$5');

function a_XQPjg13t37zIEtpt44U6ff92$2(s) {
  (s.pc = "xUWsaURY4G0KHWcS");
  return s.rt.enter(a_Ayu95FKZqA9xPdjQXSANLGvP(s, a_XQPjg13t37zIEtpt44U6ff92$3, s.$width, s.$height));
}
cs.registerStep(a_XQPjg13t37zIEtpt44U6ff92$2, 'a_XQPjg13t37zIEtpt44U6ff92$2');

function a_XQPjg13t37zIEtpt44U6ff92$3(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "NGgspE16GddTzQpD");
  var t_lmbProxy_1 = s.libs.mkLambdaProxy;
  (s.$perform = function(la0, la1) { return a_a_XQPjg13t37zIEtpt44U6ff92$4(t_lmbProxy_1(la0), la1) });
  (s.pc = "CctsikpPaxGUdxUU");
  var t_call_2 = (ok2(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS, s.$perform) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.add_on_every_frame(s.$perform, s));
  t_call_2;
  (s.pc = "nggfDbuDWSW8HkO7");
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.post_to_wall(s));
  (s.pc = "qe89fHKQxAlM428p");
  (s.result = /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
  (s.pc = "rmmerjSOecJSwDqC");
  lib.App.log("game\u003a end initialize", s);
  if (s.previous.needsPicker) {
  s.rt.displayResult("board", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_XQPjg13t37zIEtpt44U6ff92$3, 'a_XQPjg13t37zIEtpt44U6ff92$3');

/* ACTION: a_XQPjg13t37zIEtpt44U6ff92::lambda::4 */
function a_a_XQPjg13t37zIEtpt44U6ff92$4(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_XQPjg13t37zIEtpt44U6ff92$4$0;
  s.name = "start with fixed size";
  return s;
}
cs.registerLambda("a_XQPjg13t37zIEtpt44U6ff92\u003a\u003alambda\u003a\u003a4", "a_XQPjg13t37zIEtpt44U6ff92$4", a_a_XQPjg13t37zIEtpt44U6ff92$4, true);

function a_a_XQPjg13t37zIEtpt44U6ff92$4$0(s) {
  (s.pc = "iAVXIMARzmZHG9C4");
  return s.rt.enter(a_gswamj84uYSwqLED2VvLdKi6(s, a_a_XQPjg13t37zIEtpt44U6ff92$4$2));
}
cs.registerStep(a_a_XQPjg13t37zIEtpt44U6ff92$4$0, 'a_a_XQPjg13t37zIEtpt44U6ff92$4$0');

function a_a_XQPjg13t37zIEtpt44U6ff92$4$2(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  var t_elseIf_1 = true;
  (s.pc = "xp5Ar4dvRYXdJEWH");
  var t_call_2 = lib.Boolean_.not((/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS == undefined), s);
  ok1(s, t_call_2);
  if (t_call_2) {
  (s.pc = "KatnpCQDlegi4a82");
  s.rt.logObjectMutation(/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.update_on_wall(s));
  } else {
  (s.pc = "APpJXRDDiYobMru2");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_a_XQPjg13t37zIEtpt44U6ff92$4$2, 'a_a_XQPjg13t37zIEtpt44U6ff92$4$2');

/* ACTION: board */
function a_y5RrO2ILX7gVIvFQMpo6XjGo(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_y5RrO2ILX7gVIvFQMpo6XjGo$0;
  s.name = "board";
  s.result = undefined;
  return s;
}
cs.registerAction("board", "y5RrO2ILX7gVIvFQMpo6XjGo", a_y5RrO2ILX7gVIvFQMpo6XjGo, false);

function a_y5RrO2ILX7gVIvFQMpo6XjGo$0(s) {
  (s.pc = "nXVJcphXOyIll9oE");
  (s.result = /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
  if (s.previous.needsPicker) {
  s.rt.displayResult("board", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_y5RrO2ILX7gVIvFQMpo6XjGo$0, 'a_y5RrO2ILX7gVIvFQMpo6XjGo$0');

/* ACTION: on end */
function a_xTv6Ulq3EWIRTV6f6oXlbDh9(previous, returnAddr, $body) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xTv6Ulq3EWIRTV6f6oXlbDh9$0;
  s.name = "on end";
  s.$body = $body;
  return s;
}
cs.registerAction("on end", "xTv6Ulq3EWIRTV6f6oXlbDh9", a_xTv6Ulq3EWIRTV6f6oXlbDh9, false);

function a_xTv6Ulq3EWIRTV6f6oXlbDh9$0(s) {
  (s.pc = "AYzAMJdPbb22r3I4");
  (/* _end event */ s.d.$Eu2dngMaA73jYqD6d0u8iCju = s.$body);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_xTv6Ulq3EWIRTV6f6oXlbDh9$0, 'a_xTv6Ulq3EWIRTV6f6oXlbDh9$0');

/* ACTION: clear board */
function a_xpQAnETcU9aowS6g7p1qZZbf(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xpQAnETcU9aowS6g7p1qZZbf$0;
  s.name = "clear board";
  return s;
}
cs.registerAction("clear board", "xpQAnETcU9aowS6g7p1qZZbf", a_xpQAnETcU9aowS6g7p1qZZbf, false);

function a_xpQAnETcU9aowS6g7p1qZZbf$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "otzjU0KwlOeyFv7W");
  var t_call_1 = lib.Boolean_.not((/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS == undefined), s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.pc = "xb2iFSOWUmUxd3BO");
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.clear_every_frame_timers(s));
  } else {
  (s.pc = "rdFtn24tDsSj4aJu");
  null;
  }
  (s.pc = "znTtVcKS99o5PuwK");
  var t_call_2 = lib.Invalid.board(s);
  (/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS = t_call_2);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_xpQAnETcU9aowS6g7p1qZZbf$0, 'a_xpQAnETcU9aowS6g7p1qZZbf$0');

/* ACTION: set hud colors */
function a_OMEJVlEdU2VpPg82GXpsMZTs(previous, returnAddr, $life, $timer, $score) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_OMEJVlEdU2VpPg82GXpsMZTs$0;
  s.name = "set hud colors";
  s.$life = $life;
  s.$timer = $timer;
  s.$score = $score;
  return s;
}
cs.registerAction("set hud colors", "OMEJVlEdU2VpPg82GXpsMZTs", a_OMEJVlEdU2VpPg82GXpsMZTs, false);

function a_OMEJVlEdU2VpPg82GXpsMZTs$0(s) {
  (s.pc = "xdJOASojRtIrV28p");
  s.rt.logObjectMutation(/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X);
  (ok2(s, /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X, s.$life) && /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X.set_color(s.$life, s));
  (s.pc = "YSRB5T5tGLdTpN6M");
  s.rt.logObjectMutation(/* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls);
  (ok2(s, /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls, s.$timer) && /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls.set_color(s.$timer, s));
  (s.pc = "NRXdOMJdrV4Ktx6J");
  s.rt.logObjectMutation(/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6);
  (ok2(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6, s.$score) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.set_color(s.$score, s));
  (s.pc = "N8WL5zaLyqFuS7r6");
  s.rt.logObjectMutation(/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.update_on_wall(s));
  return s.rt.leave();
}
cs.registerStep(a_OMEJVlEdU2VpPg82GXpsMZTs$0, 'a_OMEJVlEdU2VpPg82GXpsMZTs$0');

/* ACTION: bounce on sides */
function a_x7LNZH9OJJV4MHMQ(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_x7LNZH9OJJV4MHMQ$0;
  s.name = "bounce on sides";
  return s;
}
cs.registerAction("bounce on sides", "x7LNZH9OJJV4MHMQ", a_x7LNZH9OJJV4MHMQ, false);

function a_x7LNZH9OJJV4MHMQ$0(s) {
  (s.pc = "xa1tv4gUnH7S5toZ");
  s.rt.logObjectMutation(/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.create_boundary(0, s));
  return s.rt.leave();
}
cs.registerStep(a_x7LNZH9OJJV4MHMQ$0, 'a_x7LNZH9OJJV4MHMQ$0');

/* ACTION: create sprite */
function a_xi31jXN7f2tym77g(previous, returnAddr, $pic) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xi31jXN7f2tym77g$0;
  s.name = "create sprite";
  s.$pic = $pic;
  s.result = undefined;
  return s;
}
cs.registerAction("create sprite", "xi31jXN7f2tym77g", a_xi31jXN7f2tym77g, false);

function a_xi31jXN7f2tym77g$0(s) {
  (s.pc = "PvmYHlhdUQ7SCbU9");
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_xi31jXN7f2tym77g$2);
  var t_call_1 = (ok2(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS, s.$pic) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.create_picture(s.$pic, t_resumeCtx_0));
  return a_xi31jXN7f2tym77g$2;
}
cs.registerStep(a_xi31jXN7f2tym77g$0, 'a_xi31jXN7f2tym77g$0');

function a_xi31jXN7f2tym77g$2(s) {
  var t_pauseRes_2 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_2);
  (s.result = t_pauseRes_2);
  (s.pc = "foFswt2QK0q4XHqB");
  s.rt.logObjectMutation(s.result);
  (ok1(s, s.result) && s.result.set_width(100, s));
  return s.rt.leave();
}
cs.registerStep(a_xi31jXN7f2tym77g$2, 'a_xi31jXN7f2tym77g$2');

/* ACTION: splash */
function a_x7Vz1ZmH6VcaJlua(previous, returnAddr, $message, $options_) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_x7Vz1ZmH6VcaJlua$0;
  s.name = "splash";
  s.$message = $message;
  s.$options_ = $options_;
  s.$back = undefined;
  s.$text = undefined;
  s.$text_anim = undefined;
  s.$anim2 = undefined;
  return s;
}
cs.registerAction("splash", "x7Vz1ZmH6VcaJlua", a_x7Vz1ZmH6VcaJlua, true);

function a_x7Vz1ZmH6VcaJlua$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "xucGFQ2aCONYJsj4");
  if (s.$options_) {
  var t_recOp_1 = s.$options_[("$seconds")];
  }
  var t_infix_2 = (ok1(s, t_recOp_1) && (t_recOp_1 < 0.5));
  ok1(s, t_infix_2);
  if (t_infix_2) {
  (s.pc = "Gl9svYaw9KPAtSD4");
  if (s.$options_) {
  s.$options_.perform_set("$seconds", 0.5, s);
  }
  } else {
  (s.pc = "v82DXFcK07jhtOAM");
  null;
  }
  var t_elseIf_3 = true;
  (s.pc = "xpgOw6sO8dWNOiDI");
  if (s.$options_) {
  var t_recOp_4 = s.$options_[("$foreground color")];
  }
  true;
  if ((t_recOp_4 == undefined)) {
  (s.pc = "bj1pifyWf1UD3vf6");
  var t_call_5 = lib.Colors.white(s);
  if (s.$options_) {
  s.$options_.perform_set("$foreground color", t_call_5, s);
  }
  } else {
  (s.pc = "ubAkvR24ZP4wi0Nf");
  null;
  }
  var t_elseIf_6 = true;
  (s.pc = "YlwAvzjiiCuLvRbQ");
  if (s.$options_) {
  var t_recOp_7 = s.$options_[("$background color")];
  }
  true;
  if ((t_recOp_7 == undefined)) {
  (s.pc = "xhto7QFnl6G4cIiu");
  var t_call_8 = lib.Colors.random(s);
  var t_call_9 = (ok1(s, t_call_8) && t_call_8.darken(0.5, s));
  if (s.$options_) {
  s.$options_.perform_set("$background color", t_call_9, s);
  }
  } else {
  (s.pc = "BmPm4maUtaZFXth1");
  null;
  }
  (s.pc = "D2gJ2aRY7G1Wgqwj");
  var t_call_10 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.width(s));
  var t_call_11 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.height(s));
  var t_call_12 = (ok3(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS, t_call_10, t_call_11) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.create_rectangle(t_call_10, t_call_11, s));
  s.rt.markAllocated(t_call_12);
  (s.$back = t_call_12);
  (s.pc = "xQBmIbQZArDQK1DL");
  if (s.$options_) {
  var t_recOp_13 = s.$options_[("$background color")];
  }
  s.rt.logObjectMutation(s.$back);
  (ok2(s, s.$back, t_recOp_13) && s.$back.set_color(t_recOp_13, s));
  (s.pc = "utiWa6diuPaMt7qw");
  s.rt.logObjectMutation(s.$back);
  (ok1(s, s.$back) && s.$back.set_z_index(1000, s));
  (s.pc = "xzEFpi614YiD4AOU");
  var t_call_14 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.width(s));
  var t_call_15 = (ok3(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS, t_call_14, s.$message) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.create_text(t_call_14, 2, 60, s.$message, s));
  s.rt.markAllocated(t_call_15);
  (s.$text = t_call_15);
  (s.pc = "sgtqZkFVB2yypxiX");
  s.rt.logObjectMutation(s.$text);
  (ok1(s, s.$text) && s.$text.fit_text(s));
  (s.pc = "N9uLwv3sSMul5KTd");
  return a_x7Vz1ZmH6VcaJlua$12;
}
cs.registerStep(a_x7Vz1ZmH6VcaJlua$0, 'a_x7Vz1ZmH6VcaJlua$0');

function a_x7Vz1ZmH6VcaJlua$12(s) {
  var t_call_16 = (ok1(s, s.$text) && s.$text.width(s));
  var t_call_17 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.width(s));
  var t_infix_18 = (ok1(s, t_call_17) && (t_call_17 * 0.8));
  var t_infix_19 = (ok2(s, t_call_16, t_infix_18) && (t_call_16 > t_infix_18));
  if (t_infix_19) {
  (s.pc = "GdP3sZefFfld8d63");
  var t_call_20 = (ok1(s, s.$text) && s.$text.font_size(s));
  var t_infix_21 = (ok1(s, t_call_20) && (t_call_20 * 0.8));
  s.rt.logObjectMutation(s.$text);
  (ok2(s, s.$text, t_infix_21) && s.$text.set_font_size(t_infix_21, s));
  (s.pc = "QtElLFuIFqofqV4L");
  s.rt.logObjectMutation(s.$text);
  (ok1(s, s.$text) && s.$text.fit_text(s));
  return a_x7Vz1ZmH6VcaJlua$12;
  }
  (s.pc = "xa0j4MSSRICa1yCV");
  if (s.$options_) {
  var t_recOp_22 = s.$options_[("$foreground color")];
  }
  s.rt.logObjectMutation(s.$text);
  (ok2(s, s.$text, t_recOp_22) && s.$text.set_color(t_recOp_22, s));
  (s.pc = "x2deRPjfZc5imD1G");
  s.rt.logObjectMutation(s.$text);
  (ok1(s, s.$text) && s.$text.set_z_index(1000, s));
  (s.pc = "KQFtfPZJutultOrV");
  var t_call_23 = (ok1(s, s.$text) && s.$text.create_animation(s));
  (s.$text_anim = t_call_23);
  (s.pc = "mqUe7l7KIaVRCE9J");
  if (s.$options_) {
  var t_recOp_24 = s.$options_[("$seconds")];
  }
  s.rt.logObjectMutation(s.$text_anim);
  (ok2(s, s.$text_anim, t_recOp_24) && s.$text_anim.sleep(t_recOp_24, s));
  (s.pc = "nXXLe2bQSf5s97tR");
  s.rt.logObjectMutation(s.$text_anim);
  (ok1(s, s.$text_anim) && s.$text_anim.puff_out(0.9, "cubic", 1.5, s));
  (s.pc = "xmMpx7kl2Z6wGX5k");
  s.rt.logObjectMutation(s.$text_anim);
  (ok1(s, s.$text_anim) && s.$text_anim.delete_(s));
  (s.pc = "sclwDHGL3pYC7I8g");
  var t_call_25 = (ok1(s, s.$back) && s.$back.create_animation(s));
  (s.$anim2 = t_call_25);
  (s.pc = "xC2LFDuonXynWnZs");
  if (s.$options_) {
  var t_recOp_26 = s.$options_[("$seconds")];
  }
  var t_infix_27 = (ok1(s, t_recOp_26) && (t_recOp_26 + 0.7));
  s.rt.logObjectMutation(s.$anim2);
  (ok2(s, s.$anim2, t_infix_27) && s.$anim2.sleep(t_infix_27, s));
  (s.pc = "IwAHdtxZYXAd7Ixk");
  s.rt.logObjectMutation(s.$anim2);
  (ok1(s, s.$anim2) && s.$anim2.fade_out(0.2, "cubic", s));
  (s.pc = "vb92LcxyqpOkvWXT");
  s.rt.logObjectMutation(s.$anim2);
  (ok1(s, s.$anim2) && s.$anim2.delete_(s));
  (s.pc = "UZh2uFuZx5M69gXr");
  var t_resumeCtx_28 = s.rt.getAwaitResumeCtx(a_x7Vz1ZmH6VcaJlua$18);
  (ok1(s, s.$anim2) && s.$anim2.wait(t_resumeCtx_28));
  return a_x7Vz1ZmH6VcaJlua$18;
}
cs.registerStep(a_x7Vz1ZmH6VcaJlua$12, 'a_x7Vz1ZmH6VcaJlua$12');

function a_x7Vz1ZmH6VcaJlua$18(s) {
  return s.rt.leave();
}
cs.registerStep(a_x7Vz1ZmH6VcaJlua$18, 'a_x7Vz1ZmH6VcaJlua$18');


//Ent_BVGhpbmca
function Ent_BVGhpbmca(p) {
  this.parent = p;
}
Ent_BVGhpbmca.prototype = new lib.ObjectEntry();
Ent_BVGhpbmca.prototype.keys = [];
Ent_BVGhpbmca.prototype.values = ["$seconds", "$foreground color", "$background color"];
Ent_BVGhpbmca.prototype.fields = ["$seconds", "$foreground color", "$background color"];
Ent_BVGhpbmca.prototype["$seconds_realname"] = "seconds";
Ent_BVGhpbmca.prototype["$foreground color_realname"] = "foreground color";
Ent_BVGhpbmca.prototype["$background color_realname"] = "background color";
Ent_BVGhpbmca.prototype["$seconds"] = 0;
//Tbl_BVGhpbmca
function Tbl_BVGhpbmca(l) {
  this.libName = l;
  this.initParent();
}
Tbl_BVGhpbmca.prototype = new lib.ObjectSingleton();
Tbl_BVGhpbmca.prototype.entryCtor = Ent_BVGhpbmca;
cs.objectSingletons["Splash Options"] = function(d) { return d.$BVGhpbmca };
Tbl_BVGhpbmca.prototype.selfCtor = Tbl_BVGhpbmca;
Tbl_BVGhpbmca.prototype.stableName = "BVGhpbmca";
Tbl_BVGhpbmca.prototype.entryKindName = "Splash Options";

// jsonimport
Ent_BVGhpbmca.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
  this.perform_set("$seconds", ctx.importNumber(json, "seconds"), s);
  this.perform_set("$foreground color", ctx.importColor(json, "foreground color"), s);
  this.perform_set("$background color", ctx.importColor(json, "background color"), s);
}
cs.registerGlobal("$BVGhpbmca");
cs.startFn = function(rt) {
lib.App.rt_start(rt);
lib.Media.rt_start(rt);
lib.Player.rt_start(rt);
lib.Senses.rt_start(rt);
lib.Time.rt_start(rt);
lib.Web.rt_start(rt);
};

cs.stopFn = function(rt) {
lib.App.rt_stop(rt);
lib.Media.rt_stop(rt);
lib.Player.rt_stop(rt);
lib.Senses.rt_stop(rt);
lib.Time.rt_stop(rt);
lib.Web.rt_stop(rt);
};

cs._compilerVersion = '1';
cs._initGlobals = function(d,rt) {
  if(!d.hasOwnProperty("$xubkD4SENn7AllzejMhYSTOV")) d.$xubkD4SENn7AllzejMhYSTOV = 0;
  if(!d.hasOwnProperty("$lp3pSLpGr7O3RGbDzuSQiJ5m")) d.$lp3pSLpGr7O3RGbDzuSQiJ5m = 0;
  if(!d.hasOwnProperty("$TzLNjDeJYpMRpdgNFuqgE2PY")) d.$TzLNjDeJYpMRpdgNFuqgE2PY = lib.DateTime.defaultValue;
  if(!d.hasOwnProperty("$x4cIV8c7P0QJsADCfcHm2ApY")) d.$x4cIV8c7P0QJsADCfcHm2ApY = 0;
  if(!d.hasOwnProperty("$BVGhpbmca") || !d["$BVGhpbmca"]) d.$BVGhpbmca = new Tbl_BVGhpbmca(d.libName);

};

cs._initGlobals2 = function(d) {
d.$BVGhpbmca.name = "Splash Options";};

cs._resetGlobals = function(d) {
  d.$xW5SJ4MKJ44wSSDVuZgZG3iS = undefined;
  d.$xubkD4SENn7AllzejMhYSTOV = 0;
  d.$lp3pSLpGr7O3RGbDzuSQiJ5m = 0;
  d.$TzLNjDeJYpMRpdgNFuqgE2PY = lib.DateTime.defaultValue;
  d.$pHEIAaLyqWXgpyUd6dIeYp2X = undefined;
  d.$AejJAmPMk38UG2URZk5hXYh6 = undefined;
  d.$x2fjfvNmVawvnAWKndzdfxls = undefined;
  d.$x4cIV8c7P0QJsADCfcHm2ApY = 0;
  d.$emzufgdY6lsG2RaaCYaxwN8m = undefined;
  d.$Eu2dngMaA73jYqD6d0u8iCju = undefined;
  d.$BVGhpbmca = undefined;
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "set score";
cs.authorId = "zchpa";
cs.scriptGuid = "4407827f-990a-40fe-0ad5-5ef176591377";
}),

// **************************************************************
"fJaZGzvxeyiP2s7w": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "gamepad";
cs.scriptColor = "\u00239955bb";
cs.objectSingletons = {};
/* ACTION: current */
function a_qDcj96avRPrOW0HP9ddHIGDX(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_qDcj96avRPrOW0HP9ddHIGDX$0;
  s.name = "current";
  s.result = undefined;
  s.$now = undefined;
  s.$dt = undefined;
  s.$vector = undefined;
  s.$any_gamepad = undefined;
  s.$gamepad = undefined;
  return s;
}
cs.registerAction("current", "qDcj96avRPrOW0HP9ddHIGDX", a_qDcj96avRPrOW0HP9ddHIGDX, false);

function ok1(s, a0) {
  return (a0 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok2(s, a0, a1) {
  return (a0 == undefined || a1 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok3(s, a0, a1, a2) {
  return (a0 == undefined || a1 == undefined || a2 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok4(s, a0, a1, a2, a3) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function a_qDcj96avRPrOW0HP9ddHIGDX$0(s) {
  (s.pc = "K24bzS6d5dLCg70O");
  return s.rt.enter(a_O5jlHid249RIgTQx4Il4dMsQ(s, a_qDcj96avRPrOW0HP9ddHIGDX$2));
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$0, 'a_qDcj96avRPrOW0HP9ddHIGDX$0');

function a_qDcj96avRPrOW0HP9ddHIGDX$2(s) {
  (s.pc = "xAMQZhHolKwnH85G");
  var t_call_0 = lib.Time.now(s);
  (s.$now = t_call_0);
  (s.pc = "NKbyhJdf10449w1j");
  return s.rt.enter(a_AKyPSHgYSnMUTq5QWdoGYf4b(s, a_qDcj96avRPrOW0HP9ddHIGDX$3, s.$now));
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$2, 'a_qDcj96avRPrOW0HP9ddHIGDX$2');

function a_qDcj96avRPrOW0HP9ddHIGDX$3(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  (s.$dt = t_actRes_1);
  (s.pc = "tvuqtvwZjf2WTFdV");
  var t_call_2 = (ok1(s, /* Vector */ s.d.$BdGhpbmca) && /* Vector */ s.d.$BdGhpbmca.create(s));
  s.rt.markAllocated(t_call_2);
  (s.$vector = t_call_2);
  (s.pc = "SgjdVJE0JKpuCIDH");
  (s.$any_gamepad = false);
  (s.pc = "UCUZ4M8UBYsds6Bk");
  var t_call_3 = lib.Senses.gamepads(s);
  s.t_collArr_4 = (ok1(s, t_call_3) && t_call_3.get_enumerator());
  s.t_idx_5 = 0;
  return a_qDcj96avRPrOW0HP9ddHIGDX$5;
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$3, 'a_qDcj96avRPrOW0HP9ddHIGDX$3');

function a_qDcj96avRPrOW0HP9ddHIGDX$5(s) {
  if ((s.t_idx_5 < (s.t_collArr_4.length))) {
  (s.$gamepad = s.t_collArr_4[(s.t_idx_5)]);
  (s.t_idx_5++);
  var t_call_6 = (ok1(s, s.$gamepad) && s.$gamepad.is_connected(s));
  if (t_call_6) {
  (s.pc = "xlXsKI4PRPX0iBSR");
  return s.rt.enter(a_qDlKG3i3k2K4V8WDC0PeMN11(s, a_qDcj96avRPrOW0HP9ddHIGDX$8, s.$dt, s.$vector, s.$gamepad));
  }
  return a_qDcj96avRPrOW0HP9ddHIGDX$7;
  }
  var t_elseIf_7 = true;
  (s.pc = "xBZ8zCuwMS8krcBu");
  var t_call_8 = (ok1(s, s.$any_gamepad) && lib.Boolean_.not(s.$any_gamepad, s));
  ok1(s, t_call_8);
  if (t_call_8) {
  (s.pc = "CyCCbKxg4vqTMewD");
  return s.rt.enter(a_l4qZbEXuo0rCJ9p2l2546YMX(s, a_qDcj96avRPrOW0HP9ddHIGDX$10, s.$dt, s.$vector));
  } else {
  (s.pc = "GwzIQ7JJvLnYfbdL");
  null;
  }
  return a_qDcj96avRPrOW0HP9ddHIGDX$9;
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$5, 'a_qDcj96avRPrOW0HP9ddHIGDX$5');

function a_qDcj96avRPrOW0HP9ddHIGDX$8(s) {
  (s.pc = "DyNM0jOUPeDyS6fX");
  (s.$any_gamepad = true);
  return a_qDcj96avRPrOW0HP9ddHIGDX$7;
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$8, 'a_qDcj96avRPrOW0HP9ddHIGDX$8');

function a_qDcj96avRPrOW0HP9ddHIGDX$7(s) {
  return a_qDcj96avRPrOW0HP9ddHIGDX$5;
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$7, 'a_qDcj96avRPrOW0HP9ddHIGDX$7');

function a_qDcj96avRPrOW0HP9ddHIGDX$10(s) {
  return a_qDcj96avRPrOW0HP9ddHIGDX$9;
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$10, 'a_qDcj96avRPrOW0HP9ddHIGDX$10');

function a_qDcj96avRPrOW0HP9ddHIGDX$9(s) {
  s.t_elseIf_9 = true;
  (s.pc = "cwR4Eid54DDf549Z");
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  var t_recOp_10 = /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ[("$_accelerometer")];
  }
  ok1(s, t_recOp_10);
  if (t_recOp_10) {
  (s.t_elseIf_9 = false);
  (s.pc = "kp59r5CUOcmqTupl");
  return s.rt.enter(a_NARYT4r1qcmrRmDNdAjtkOcD(s, a_qDcj96avRPrOW0HP9ddHIGDX$13, s.$dt, s.$vector));
  }
  return a_qDcj96avRPrOW0HP9ddHIGDX$12;
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$9, 'a_qDcj96avRPrOW0HP9ddHIGDX$9');

function a_qDcj96avRPrOW0HP9ddHIGDX$13(s) {
  return a_qDcj96avRPrOW0HP9ddHIGDX$12;
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$13, 'a_qDcj96avRPrOW0HP9ddHIGDX$13');

function a_qDcj96avRPrOW0HP9ddHIGDX$12(s) {
  if (s.t_elseIf_9) {
  (s.pc = "B9H3ZCbj5SQ03j7I");
  var t_libcall_11 = s.libs["k4esRNhmmMLxrqp8"]["board"](s);
  return s.rt.enter(t_libcall_11.invoke(t_libcall_11, a_qDcj96avRPrOW0HP9ddHIGDX$14));
  }
  return a_qDcj96avRPrOW0HP9ddHIGDX$17;
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$12, 'a_qDcj96avRPrOW0HP9ddHIGDX$12');

function a_qDcj96avRPrOW0HP9ddHIGDX$14(s) {
  var t_actRes_12 = s.rt.returnedFrom.result;
  var t_call_13 = (ok1(s, t_actRes_12) && t_actRes_12.touched(s));
  ok1(s, t_call_13);
  if (t_call_13) {
  (s.pc = "PGgITIMyD77HqtMV");
  return s.rt.enter(a_uYKZvu9VJlQJWlN4YZ8bPdOY(s, a_qDcj96avRPrOW0HP9ddHIGDX$16, s.$dt, s.$vector));
  } else {
  (s.pc = "F4BLYaSMBKIGWdmo");
  null;
  }
  return a_qDcj96avRPrOW0HP9ddHIGDX$15;
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$14, 'a_qDcj96avRPrOW0HP9ddHIGDX$14');

function a_qDcj96avRPrOW0HP9ddHIGDX$17(s) {
  (s.pc = "jFEB3QBWrx0td7Uf");
  if (s.$vector) {
  var t_recOp_14 = s.$vector[("$x")];
  }
  if (s.$vector) {
  var t_recOp_15 = s.$vector[("$y")];
  }
  if (s.$vector) {
  var t_recOp_16 = s.$vector[("$z")];
  }
  var t_call_17 = (ok3(s, t_recOp_14, t_recOp_15, t_recOp_16) && lib.Math_.create_vector3(t_recOp_14, t_recOp_15, t_recOp_16, s));
  (/* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1 = t_call_17);
  s.rt.logDataWrite();
  (s.pc = "n6WZh7F4fYEQIvv1");
  (/* _current time */ s.d.$k7HatejkjqfIA242SSMpitAK = s.$now);
  s.rt.logDataWrite();
  (s.pc = "oDUWcYIBCj2AGWFI");
  (s.result = /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1);
  if (s.previous.needsPicker) {
  s.rt.displayResult("p", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$17, 'a_qDcj96avRPrOW0HP9ddHIGDX$17');

function a_qDcj96avRPrOW0HP9ddHIGDX$16(s) {
  return a_qDcj96avRPrOW0HP9ddHIGDX$15;
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$16, 'a_qDcj96avRPrOW0HP9ddHIGDX$16');

function a_qDcj96avRPrOW0HP9ddHIGDX$15(s) {
  return a_qDcj96avRPrOW0HP9ddHIGDX$17;
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$15, 'a_qDcj96avRPrOW0HP9ddHIGDX$15');

/* ACTION: compute touch */
function a_uYKZvu9VJlQJWlN4YZ8bPdOY(previous, returnAddr, $dt, $vector) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_uYKZvu9VJlQJWlN4YZ8bPdOY$0;
  s.name = "compute touch";
  s.$dt = $dt;
  s.$vector = $vector;
  s.$board = undefined;
  s.$dist = undefined;
  s.$r = undefined;
  s.$m = undefined;
  s.$p = undefined;
  return s;
}
cs.registerAction("compute touch", "uYKZvu9VJlQJWlN4YZ8bPdOY", a_uYKZvu9VJlQJWlN4YZ8bPdOY, false);

function a_uYKZvu9VJlQJWlN4YZ8bPdOY$0(s) {
  (s.pc = "Yc6Ljy2Kf77vAJE1");
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  var t_recOp_0 = /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ[("$_accelerometer")];
  }
  var t_call_1 = (ok1(s, t_recOp_0) && lib.Boolean_.not(t_recOp_0, s));
  (ok1(s, t_call_1) && lib.Contract.assert(t_call_1, "", s));
  (s.pc = "aeff4ISwAiII2RYg");
  var t_libcall_2 = s.libs["k4esRNhmmMLxrqp8"]["board"](s);
  return s.rt.enter(t_libcall_2.invoke(t_libcall_2, a_uYKZvu9VJlQJWlN4YZ8bPdOY$3));
}
cs.registerStep(a_uYKZvu9VJlQJWlN4YZ8bPdOY$0, 'a_uYKZvu9VJlQJWlN4YZ8bPdOY$0');

function a_uYKZvu9VJlQJWlN4YZ8bPdOY$3(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  (s.$board = t_actRes_3);
  (s.pc = "yo6SJ6XLPigLcePS");
  var t_call_4 = (ok1(s, s.$board) && s.$board.touch_current(s));
  var t_call_5 = (ok1(s, s.$board) && s.$board.touch_start(s));
  var t_call_6 = (ok2(s, t_call_4, t_call_5) && t_call_4.subtract(t_call_5, s));
  (s.$dist = t_call_6);
  (s.pc = "nd4lO2qkviheKQQJ");
  var t_call_7 = (ok1(s, s.$board) && s.$board.width(s));
  var t_call_8 = (ok1(s, s.$board) && s.$board.height(s));
  var t_call_9 = (ok2(s, t_call_7, t_call_8) && lib.Math_.min(t_call_7, t_call_8, s));
  var t_infix_10 = (ok1(s, t_call_9) && (t_call_9 * 0.3));
  (s.$r = t_infix_10);
  (s.pc = "xTZ3w0K2Vk4SDgG5");
  var t_call_11 = (ok1(s, s.$dist) && s.$dist.x(s));
  var t_call_12 = (ok1(s, t_call_11) && lib.Math_.abs(t_call_11, s));
  var t_call_13 = (ok1(s, s.$dist) && s.$dist.y(s));
  var t_call_14 = (ok1(s, t_call_13) && lib.Math_.abs(t_call_13, s));
  var t_call_15 = (ok2(s, t_call_12, t_call_14) && lib.Math_.max(t_call_12, t_call_14, s));
  var t_call_16 = (ok2(s, s.$r, t_call_15) && lib.Math_.max(s.$r, t_call_15, s));
  (s.$m = t_call_16);
  (s.pc = "x5FkjD7QKOi14bXx");
  var t_infix_17 = (ok1(s, s.$m) && (1 / s.$m));
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  var t_recOp_18 = /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ[("$_keyboard factor")];
  }
  var t_infix_19 = (ok2(s, t_infix_17, t_recOp_18) && (t_infix_17 * t_recOp_18));
  var t_call_20 = (ok2(s, s.$dist, t_infix_19) && s.$dist.scale(t_infix_19, s));
  (s.$p = t_call_20);
  (s.pc = "ar97E48abhnLItBH");
  var t_infix_21 = (0 - 1);
  if (s.$vector) {
  var t_recOp_22 = s.$vector[("$x")];
  }
  var t_call_23 = (ok1(s, s.$p) && s.$p.x(s));
  var t_infix_24 = (ok2(s, t_recOp_22, t_call_23) && (t_recOp_22 + t_call_23));
  var t_call_25 = (ok2(s, t_infix_21, t_infix_24) && lib.Math_.clamp(t_infix_21, 1, t_infix_24, s));
  if (s.$vector) {
  s.$vector.perform_set("$x", t_call_25, s);
  }
  (s.pc = "xWe42O1gJ8jTOtYh");
  var t_infix_26 = (0 - 1);
  if (s.$vector) {
  var t_recOp_27 = s.$vector[("$y")];
  }
  var t_call_28 = (ok1(s, s.$p) && s.$p.y(s));
  var t_infix_29 = (ok2(s, t_recOp_27, t_call_28) && (t_recOp_27 + t_call_28));
  var t_call_30 = (ok2(s, t_infix_26, t_infix_29) && lib.Math_.clamp(t_infix_26, 1, t_infix_29, s));
  if (s.$vector) {
  s.$vector.perform_set("$y", t_call_30, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_uYKZvu9VJlQJWlN4YZ8bPdOY$3, 'a_uYKZvu9VJlQJWlN4YZ8bPdOY$3');

/* ACTION: compute keyboard */
function a_l4qZbEXuo0rCJ9p2l2546YMX(previous, returnAddr, $seconds, $vector) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_l4qZbEXuo0rCJ9p2l2546YMX$0;
  s.name = "compute keyboard";
  s.$seconds = $seconds;
  s.$vector = $vector;
  s.$ramp = undefined;
  s.$deramp = undefined;
  s.$settings = undefined;
  s.$f = undefined;
  s.$click = undefined;
  return s;
}
cs.registerAction("compute keyboard", "l4qZbEXuo0rCJ9p2l2546YMX", a_l4qZbEXuo0rCJ9p2l2546YMX, false);

function a_l4qZbEXuo0rCJ9p2l2546YMX$0(s) {
  (s.pc = "xQvrhXDEZNLchRD1");
  (s.$ramp = 0.4);
  (s.pc = "WqLlvN4eJaGlJC0G");
  (s.$deramp = 0.9);
  (s.pc = "GWAdBf4KVYtidymi");
  (s.$settings = /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ);
  (s.pc = "gOqhTN0E7f2RegEc");
  if (s.$settings) {
  var t_recOp_0 = s.$settings[("$_keyboard factor")];
  }
  (s.$f = t_recOp_0);
  var t_elseIf_1 = true;
  (s.pc = "aAkuAGlBzQhKJw20");
  var t_call_2 = lib.Boolean_.not((/* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1 == undefined), s);
  var t_lazy_3 = t_call_2;
  if ((ok1(s, t_lazy_3) && t_lazy_3)) {
  var t_infix_4 = (ok1(s, s.$seconds) && (s.$seconds > 0));
  (t_lazy_3 = t_infix_4);
  }
  ok1(s, t_lazy_3);
  if (t_lazy_3) {
  (s.pc = "N0Bkg1ID2lRgdDtf");
  var t_call_5 = (ok1(s, /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1) && /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1.x(s));
  if (s.$vector) {
  s.$vector.perform_set("$x", t_call_5, s);
  }
  (s.pc = "lvUYGko8mZzeHc6V");
  var t_call_6 = (ok1(s, /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1) && /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1.y(s));
  if (s.$vector) {
  s.$vector.perform_set("$y", t_call_6, s);
  }
  (s.pc = "UQqL226sbMoeuKuS");
  var t_call_7 = (ok1(s, /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1) && /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1.z(s));
  if (s.$vector) {
  s.$vector.perform_set("$z", t_call_7, s);
  }
  } else {
  (s.pc = "adBhFab5gJ5lNbw3");
  null;
  }
  var t_elseIf_8 = true;
  (s.pc = "j5LDrMTjvgNlPcNv");
  if (s.$settings) {
  var t_recOp_9 = s.$settings[("$_left key")];
  }
  var t_call_10 = (ok1(s, t_recOp_9) && lib.Senses.is_key_pressed(t_recOp_9, s));
  ok1(s, t_call_10);
  if (t_call_10) {
  (t_elseIf_8 = false);
  (s.pc = "xn9Er5aq2bDVJi2I");
  var t_infix_11 = (0 - 1);
  if (s.$vector) {
  var t_recOp_12 = s.$vector[("$x")];
  }
  var t_infix_13 = (ok2(s, s.$seconds, s.$ramp) && (s.$seconds / s.$ramp));
  var t_infix_14 = (ok2(s, t_recOp_12, t_infix_13) && (t_recOp_12 - t_infix_13));
  var t_infix_15 = (ok2(s, t_infix_14, s.$f) && (t_infix_14 * s.$f));
  var t_call_16 = (ok2(s, t_infix_11, t_infix_15) && lib.Math_.clamp(t_infix_11, 0, t_infix_15, s));
  if (s.$vector) {
  s.$vector.perform_set("$x", t_call_16, s);
  }
  }
  if (t_elseIf_8) {
  (s.pc = "Kl0ql42NLDKUGvRF");
  if (s.$settings) {
  var t_recOp_17 = s.$settings[("$_right key")];
  }
  var t_call_18 = (ok1(s, t_recOp_17) && lib.Senses.is_key_pressed(t_recOp_17, s));
  ok1(s, t_call_18);
  if (t_call_18) {
  (s.pc = "Sqqq3YnIb2PBOqBS");
  if (s.$vector) {
  var t_recOp_19 = s.$vector[("$x")];
  }
  var t_infix_20 = (ok2(s, s.$seconds, s.$ramp) && (s.$seconds / s.$ramp));
  var t_infix_21 = (ok2(s, t_recOp_19, t_infix_20) && (t_recOp_19 + t_infix_20));
  var t_infix_22 = (ok2(s, t_infix_21, s.$f) && (t_infix_21 * s.$f));
  var t_call_23 = (ok1(s, t_infix_22) && lib.Math_.clamp(0, 1, t_infix_22, s));
  if (s.$vector) {
  s.$vector.perform_set("$x", t_call_23, s);
  }
  } else {
  (s.pc = "HayKmkb4wsCPhWA7");
  if (s.$vector) {
  var t_recOp_24 = s.$vector[("$x")];
  }
  var t_infix_25 = (ok2(s, t_recOp_24, s.$deramp) && (t_recOp_24 * s.$deramp));
  var t_infix_26 = (ok2(s, t_infix_25, s.$f) && (t_infix_25 * s.$f));
  if (s.$vector) {
  s.$vector.perform_set("$x", t_infix_26, s);
  }
  var t_elseIf_27 = true;
  (s.pc = "pXLE351So9iM8EYM");
  if (s.$vector) {
  var t_recOp_28 = s.$vector[("$x")];
  }
  var t_call_29 = (ok1(s, t_recOp_28) && lib.Math_.abs(t_recOp_28, s));
  var t_infix_30 = (ok1(s, t_call_29) && (t_call_29 < 0.05));
  ok1(s, t_infix_30);
  if (t_infix_30) {
  (s.pc = "UKGenIUclEZAJnZ9");
  if (s.$vector) {
  s.$vector.perform_set("$x", 0, s);
  }
  } else {
  (s.pc = "Y47J4ghrNmIaH3E2");
  null;
  }
  }
  }
  var t_elseIf_31 = true;
  (s.pc = "xCOScmqJMBvGOFsF");
  if (s.$settings) {
  var t_recOp_32 = s.$settings[("$_down key")];
  }
  var t_call_33 = (ok1(s, t_recOp_32) && lib.Senses.is_key_pressed(t_recOp_32, s));
  ok1(s, t_call_33);
  if (t_call_33) {
  (t_elseIf_31 = false);
  (s.pc = "mymWVgslyKEmFBDi");
  if (s.$vector) {
  var t_recOp_34 = s.$vector[("$y")];
  }
  var t_infix_35 = (ok2(s, s.$seconds, s.$ramp) && (s.$seconds / s.$ramp));
  var t_infix_36 = (ok2(s, t_recOp_34, t_infix_35) && (t_recOp_34 + t_infix_35));
  var t_infix_37 = (ok2(s, t_infix_36, s.$f) && (t_infix_36 * s.$f));
  var t_call_38 = (ok1(s, t_infix_37) && lib.Math_.clamp(0, 1, t_infix_37, s));
  if (s.$vector) {
  s.$vector.perform_set("$y", t_call_38, s);
  }
  }
  if (t_elseIf_31) {
  (s.pc = "ANgXb90ciinu1c08");
  if (s.$settings) {
  var t_recOp_39 = s.$settings[("$_up key")];
  }
  var t_call_40 = (ok1(s, t_recOp_39) && lib.Senses.is_key_pressed(t_recOp_39, s));
  ok1(s, t_call_40);
  if (t_call_40) {
  (s.pc = "wzqzC3IBiGt83wCI");
  var t_infix_41 = (0 - 1);
  if (s.$vector) {
  var t_recOp_42 = s.$vector[("$y")];
  }
  var t_infix_43 = (ok2(s, s.$seconds, s.$ramp) && (s.$seconds / s.$ramp));
  var t_infix_44 = (ok2(s, t_recOp_42, t_infix_43) && (t_recOp_42 - t_infix_43));
  var t_infix_45 = (ok2(s, t_infix_44, s.$f) && (t_infix_44 * s.$f));
  var t_call_46 = (ok2(s, t_infix_41, t_infix_45) && lib.Math_.clamp(t_infix_41, 0, t_infix_45, s));
  if (s.$vector) {
  s.$vector.perform_set("$y", t_call_46, s);
  }
  } else {
  (s.pc = "H5PDO9dmid1b4OG6");
  if (s.$vector) {
  var t_recOp_47 = s.$vector[("$y")];
  }
  var t_infix_48 = (ok2(s, t_recOp_47, s.$deramp) && (t_recOp_47 * s.$deramp));
  var t_infix_49 = (ok2(s, t_infix_48, s.$f) && (t_infix_48 * s.$f));
  if (s.$vector) {
  s.$vector.perform_set("$y", t_infix_49, s);
  }
  var t_elseIf_50 = true;
  (s.pc = "oVbCQ74UwHpbDU3m");
  if (s.$vector) {
  var t_recOp_51 = s.$vector[("$y")];
  }
  var t_call_52 = (ok1(s, t_recOp_51) && lib.Math_.abs(t_recOp_51, s));
  var t_infix_53 = (ok1(s, t_call_52) && (t_call_52 < 0.05));
  ok1(s, t_infix_53);
  if (t_infix_53) {
  (s.pc = "rdxiuAjRrQaBVDgJ");
  if (s.$vector) {
  s.$vector.perform_set("$y", 0, s);
  }
  } else {
  (s.pc = "x4maknZfK7HZl294");
  null;
  }
  }
  }
  (s.pc = "P7vuxXV4hIsABGid");
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  var t_recOp_54 = /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ[("$_accelerometer")];
  }
  s.t_lazy_55 = t_recOp_54;
  if ((ok1(s, s.t_lazy_55) && s.t_lazy_55)) {
  var t_libcall_56 = s.libs["k4esRNhmmMLxrqp8"]["board"](s);
  return s.rt.enter(t_libcall_56.invoke(t_libcall_56, a_l4qZbEXuo0rCJ9p2l2546YMX$38));
  }
  return a_l4qZbEXuo0rCJ9p2l2546YMX$37;
}
cs.registerStep(a_l4qZbEXuo0rCJ9p2l2546YMX$0, 'a_l4qZbEXuo0rCJ9p2l2546YMX$0');

function a_l4qZbEXuo0rCJ9p2l2546YMX$38(s) {
  var t_actRes_57 = s.rt.returnedFrom.result;
  var t_call_58 = (ok1(s, t_actRes_57) && t_actRes_57.touched(s));
  (s.t_lazy_55 = t_call_58);
  return a_l4qZbEXuo0rCJ9p2l2546YMX$37;
}
cs.registerStep(a_l4qZbEXuo0rCJ9p2l2546YMX$38, 'a_l4qZbEXuo0rCJ9p2l2546YMX$38');

function a_l4qZbEXuo0rCJ9p2l2546YMX$37(s) {
  (s.$click = s.t_lazy_55);
  var t_elseIf_59 = true;
  (s.pc = "NJia5AtUzVRAue2I");
  if (s.$settings) {
  var t_recOp_60 = s.$settings[("$_button key")];
  }
  var t_call_61 = (ok1(s, t_recOp_60) && lib.Senses.is_key_pressed(t_recOp_60, s));
  var t_lazy_62 = t_call_61;
  if ((ok1(s, t_lazy_62) && (!t_lazy_62))) {
  (t_lazy_62 = s.$click);
  }
  ok1(s, t_lazy_62);
  if (t_lazy_62) {
  (s.pc = "jDP8eblTFKDgs0P4");
  if (s.$vector) {
  var t_recOp_63 = s.$vector[("$z")];
  }
  var t_infix_64 = (ok2(s, s.$seconds, s.$ramp) && (s.$seconds / s.$ramp));
  var t_infix_65 = (ok2(s, t_recOp_63, t_infix_64) && (t_recOp_63 + t_infix_64));
  var t_infix_66 = (ok2(s, t_infix_65, s.$f) && (t_infix_65 * s.$f));
  var t_call_67 = (ok1(s, t_infix_66) && lib.Math_.clamp(0, 1, t_infix_66, s));
  if (s.$vector) {
  s.$vector.perform_set("$z", t_call_67, s);
  }
  } else {
  (s.pc = "bfu4Xe5wPIFVYSU0");
  if (s.$vector) {
  var t_recOp_68 = s.$vector[("$z")];
  }
  var t_infix_69 = (ok2(s, t_recOp_68, s.$deramp) && (t_recOp_68 * s.$deramp));
  var t_infix_70 = (ok2(s, t_infix_69, s.$f) && (t_infix_69 * s.$f));
  if (s.$vector) {
  s.$vector.perform_set("$z", t_infix_70, s);
  }
  var t_elseIf_71 = true;
  (s.pc = "kctdFFz43brt9U5o");
  if (s.$vector) {
  var t_recOp_72 = s.$vector[("$z")];
  }
  var t_infix_73 = (ok1(s, t_recOp_72) && (t_recOp_72 < 0.05));
  ok1(s, t_infix_73);
  if (t_infix_73) {
  (s.pc = "Y8kiexxwCtaTI1EQ");
  if (s.$vector) {
  s.$vector.perform_set("$z", 0, s);
  }
  } else {
  (s.pc = "aFhkuS4Ef7SXVRLi");
  null;
  }
  }
  return s.rt.leave();
}
cs.registerStep(a_l4qZbEXuo0rCJ9p2l2546YMX$37, 'a_l4qZbEXuo0rCJ9p2l2546YMX$37');

/* ACTION: check last current */
function a_AKyPSHgYSnMUTq5QWdoGYf4b(previous, returnAddr, $now) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_AKyPSHgYSnMUTq5QWdoGYf4b$0;
  s.name = "check last current";
  s.$now = $now;
  s.result = undefined;
  return s;
}
cs.registerAction("check last current", "AKyPSHgYSnMUTq5QWdoGYf4b", a_AKyPSHgYSnMUTq5QWdoGYf4b, false);

function a_AKyPSHgYSnMUTq5QWdoGYf4b$0(s) {
  (s.pc = "ObcOFDPPp9WxhSt2");
  (s.result = 0);
  var t_elseIf_0 = true;
  (s.pc = "Kb72ZpRTA3m4Kp8U");
  var t_call_1 = lib.Boolean_.not((/* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1 == undefined), s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.pc = "x8ik4sk6ewFwAcfS");
  var t_call_2 = (ok2(s, s.$now, /* _current time */ s.d.$k7HatejkjqfIA242SSMpitAK) && s.$now.subtract(/* _current time */ s.d.$k7HatejkjqfIA242SSMpitAK, s));
  (s.result = t_call_2);
  var t_elseIf_3 = true;
  (s.pc = "Ew4zlsnuP3h4JSI9");
  var t_infix_4 = (ok1(s, s.result) && (s.result > 1));
  ok1(s, t_infix_4);
  if (t_infix_4) {
  (s.pc = "EXRHRdWwI0F4HPp8");
  var t_call_5 = lib.Invalid.vector3(s);
  (/* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1 = t_call_5);
  s.rt.logDataWrite();
  (s.pc = "SquuGsAcxSF7COR1");
  (s.result = 0);
  } else {
  (s.pc = "t4G2e29LHBlJ6Ggk");
  null;
  }
  } else {
  (s.pc = "egCLsxVIrp4NkT29");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_AKyPSHgYSnMUTq5QWdoGYf4b$0, 'a_AKyPSHgYSnMUTq5QWdoGYf4b$0');

/* ACTION: compute accelerometer */
function a_NARYT4r1qcmrRmDNdAjtkOcD(previous, returnAddr, $dt, $vector) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_NARYT4r1qcmrRmDNdAjtkOcD$0;
  s.name = "compute accelerometer";
  s.$dt = $dt;
  s.$vector = $vector;
  s.$p = undefined;
  s.$x = undefined;
  return s;
}
cs.registerAction("compute accelerometer", "NARYT4r1qcmrRmDNdAjtkOcD", a_NARYT4r1qcmrRmDNdAjtkOcD, false);

function a_NARYT4r1qcmrRmDNdAjtkOcD$0(s) {
  (s.pc = "CdB24VEl10I21wlN");
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_NARYT4r1qcmrRmDNdAjtkOcD$2);
  var t_call_1 = lib.Senses.acceleration_quick(t_resumeCtx_0);
  return a_NARYT4r1qcmrRmDNdAjtkOcD$2;
}
cs.registerStep(a_NARYT4r1qcmrRmDNdAjtkOcD$0, 'a_NARYT4r1qcmrRmDNdAjtkOcD$0');

function a_NARYT4r1qcmrRmDNdAjtkOcD$2(s) {
  var t_pauseRes_2 = s.pauseValue;
  (s.$p = t_pauseRes_2);
  (s.pc = "JHkzPnuUlv7pCGrG");
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  var t_recOp_3 = /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ[("$_accelerometer factor")];
  }
  (s.$x = t_recOp_3);
  (s.pc = "YunhQWUn2P4CqgQO");
  var t_infix_4 = (0 - 1);
  if (s.$vector) {
  var t_recOp_5 = s.$vector[("$x")];
  }
  var t_call_6 = (ok1(s, s.$p) && s.$p.x(s));
  var t_infix_7 = (ok2(s, t_call_6, s.$x) && (t_call_6 * s.$x));
  var t_infix_8 = (ok2(s, t_recOp_5, t_infix_7) && (t_recOp_5 + t_infix_7));
  var t_call_9 = (ok2(s, t_infix_4, t_infix_8) && lib.Math_.clamp(t_infix_4, 1, t_infix_8, s));
  if (s.$vector) {
  s.$vector.perform_set("$x", t_call_9, s);
  }
  (s.pc = "Eb4F6YvngxPCmqxQ");
  var t_infix_10 = (0 - 1);
  if (s.$vector) {
  var t_recOp_11 = s.$vector[("$y")];
  }
  var t_call_12 = (ok1(s, s.$p) && s.$p.y(s));
  var t_infix_13 = (ok2(s, t_call_12, s.$x) && (t_call_12 * s.$x));
  var t_infix_14 = (ok2(s, t_recOp_11, t_infix_13) && (t_recOp_11 + t_infix_13));
  var t_call_15 = (ok2(s, t_infix_10, t_infix_14) && lib.Math_.clamp(t_infix_10, 1, t_infix_14, s));
  if (s.$vector) {
  s.$vector.perform_set("$y", t_call_15, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_NARYT4r1qcmrRmDNdAjtkOcD$2, 'a_NARYT4r1qcmrRmDNdAjtkOcD$2');


//Ent_BdGhpbmca
function Ent_BdGhpbmca(p) {
  this.parent = p;
}
Ent_BdGhpbmca.prototype = new lib.ObjectEntry();
Ent_BdGhpbmca.prototype.keys = [];
Ent_BdGhpbmca.prototype.values = ["$x", "$y", "$z"];
Ent_BdGhpbmca.prototype.fields = ["$x", "$y", "$z"];
Ent_BdGhpbmca.prototype["$x_realname"] = "x";
Ent_BdGhpbmca.prototype["$y_realname"] = "y";
Ent_BdGhpbmca.prototype["$z_realname"] = "z";
Ent_BdGhpbmca.prototype["$x"] = 0;
Ent_BdGhpbmca.prototype["$y"] = 0;
Ent_BdGhpbmca.prototype["$z"] = 0;
//Tbl_BdGhpbmca
function Tbl_BdGhpbmca(l) {
  this.libName = l;
  this.initParent();
}
Tbl_BdGhpbmca.prototype = new lib.ObjectSingleton();
Tbl_BdGhpbmca.prototype.entryCtor = Ent_BdGhpbmca;
cs.objectSingletons["Vector"] = function(d) { return d.$BdGhpbmca };
Tbl_BdGhpbmca.prototype.selfCtor = Tbl_BdGhpbmca;
Tbl_BdGhpbmca.prototype.stableName = "BdGhpbmca";
Tbl_BdGhpbmca.prototype.entryKindName = "Vector";

// jsonimport
Ent_BdGhpbmca.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
  this.perform_set("$x", ctx.importNumber(json, "x"), s);
  this.perform_set("$y", ctx.importNumber(json, "y"), s);
  this.perform_set("$z", ctx.importNumber(json, "z"), s);
}
cs.registerGlobal("$BdGhpbmca");
/* ACTION: initialize */
function a_O5jlHid249RIgTQx4Il4dMsQ(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_O5jlHid249RIgTQx4Il4dMsQ$0;
  s.name = "initialize";
  return s;
}
cs.registerAction("initialize", "O5jlHid249RIgTQx4Il4dMsQ", a_O5jlHid249RIgTQx4Il4dMsQ, false);

function a_O5jlHid249RIgTQx4Il4dMsQ$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "BY1a8ZelCHXrWspS");
  true;
  if ((/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ == undefined)) {
  (s.pc = "xG5gN3ayZLIr97Kv");
  var t_call_1 = (ok1(s, /* Settings */ s.d.$EBTBDXQl4wWAeztoI6v6uXr7) && /* Settings */ s.d.$EBTBDXQl4wWAeztoI6v6uXr7.create(s));
  s.rt.markAllocated(t_call_1);
  (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ = t_call_1);
  s.rt.logDataWrite();
  (s.pc = "xg65D2HGMuN6YvRl");
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ.perform_set("$_left key", "left", s);
  }
  (s.pc = "Qvua74YQy1S3NWOW");
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ.perform_set("$_right key", "right", s);
  }
  (s.pc = "UtF8HSgpBFH4GOCh");
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ.perform_set("$_up key", "up", s);
  }
  (s.pc = "x8LXxXent3EQ3HSb");
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ.perform_set("$_down key", "down", s);
  }
  (s.pc = "eHrpy4kjLd3kKU7H");
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ.perform_set("$_button key", "space", s);
  }
  (s.pc = "JrohHVSmIOHoTJfg");
  var t_call_2 = lib.Senses.has_accelerometer(s);
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ.perform_set("$_accelerometer", t_call_2, s);
  }
  (s.pc = "QLmAnO22zSclfJLh");
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ.perform_set("$_accelerometer factor", 2.5, s);
  }
  (s.pc = "FoOj1D7azTBsWmAS");
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ.perform_set("$_keyboard factor", 1, s);
  }
  (s.pc = "gE4FhHuKQInXChc6");
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ.perform_set("$_touch factor", 1, s);
  }
  (s.pc = "x4HLjy5jtRlZw5QK");
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ.perform_set("$_gamepad factor", 1, s);
  }
  } else {
  (s.pc = "sM7eCCJGXT452Uz9");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_O5jlHid249RIgTQx4Il4dMsQ$0, 'a_O5jlHid249RIgTQx4Il4dMsQ$0');


//Ent_EBTBDXQl4wWAeztoI6v6uXr7
function Ent_EBTBDXQl4wWAeztoI6v6uXr7(p) {
  this.parent = p;
}
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype = new lib.ObjectEntry();
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype.keys = [];
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype.values = ["$_accelerometer", "$_accelerometer factor", "$_keyboard factor", "$_touch factor", "$_gamepad factor", "$_button key", "$_left key", "$_right key", "$_up key", "$_down key"];
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype.fields = ["$_accelerometer", "$_accelerometer factor", "$_keyboard factor", "$_touch factor", "$_gamepad factor", "$_button key", "$_left key", "$_right key", "$_up key", "$_down key"];
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_accelerometer_realname"] = "_accelerometer";
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_accelerometer factor_realname"] = "_accelerometer factor";
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_keyboard factor_realname"] = "_keyboard factor";
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_touch factor_realname"] = "_touch factor";
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_gamepad factor_realname"] = "_gamepad factor";
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_button key_realname"] = "_button key";
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_left key_realname"] = "_left key";
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_right key_realname"] = "_right key";
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_up key_realname"] = "_up key";
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_down key_realname"] = "_down key";
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_accelerometer"] = false;
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_accelerometer factor"] = 0;
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_keyboard factor"] = 0;
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_touch factor"] = 0;
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_gamepad factor"] = 0;
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_button key"] = "";
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_left key"] = "";
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_right key"] = "";
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_up key"] = "";
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_down key"] = "";
//Tbl_EBTBDXQl4wWAeztoI6v6uXr7
function Tbl_EBTBDXQl4wWAeztoI6v6uXr7(l) {
  this.libName = l;
  this.initParent();
}
Tbl_EBTBDXQl4wWAeztoI6v6uXr7.prototype = new lib.ObjectSingleton();
Tbl_EBTBDXQl4wWAeztoI6v6uXr7.prototype.entryCtor = Ent_EBTBDXQl4wWAeztoI6v6uXr7;
cs.objectSingletons["Settings"] = function(d) { return d.$EBTBDXQl4wWAeztoI6v6uXr7 };
Tbl_EBTBDXQl4wWAeztoI6v6uXr7.prototype.selfCtor = Tbl_EBTBDXQl4wWAeztoI6v6uXr7;
Tbl_EBTBDXQl4wWAeztoI6v6uXr7.prototype.stableName = "EBTBDXQl4wWAeztoI6v6uXr7";
Tbl_EBTBDXQl4wWAeztoI6v6uXr7.prototype.entryKindName = "Settings";

// jsonimport
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
  this.perform_set("$_accelerometer", ctx.importBoolean(json, "_accelerometer"), s);
  this.perform_set("$_accelerometer factor", ctx.importNumber(json, "_accelerometer factor"), s);
  this.perform_set("$_keyboard factor", ctx.importNumber(json, "_keyboard factor"), s);
  this.perform_set("$_touch factor", ctx.importNumber(json, "_touch factor"), s);
  this.perform_set("$_gamepad factor", ctx.importNumber(json, "_gamepad factor"), s);
  this.perform_set("$_button key", ctx.importString(json, "_button key"), s);
  this.perform_set("$_left key", ctx.importString(json, "_left key"), s);
  this.perform_set("$_right key", ctx.importString(json, "_right key"), s);
  this.perform_set("$_up key", ctx.importString(json, "_up key"), s);
  this.perform_set("$_down key", ctx.importString(json, "_down key"), s);
}
cs.registerGlobal("$EBTBDXQl4wWAeztoI6v6uXr7");
/* ACTION: compute gamepad */
function a_qDlKG3i3k2K4V8WDC0PeMN11(previous, returnAddr, $seconds, $vector, $gp) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_qDlKG3i3k2K4V8WDC0PeMN11$0;
  s.name = "compute gamepad";
  s.$seconds = $seconds;
  s.$vector = $vector;
  s.$gp = $gp;
  s.$ramp = undefined;
  s.$deramp = undefined;
  s.$f = undefined;
  s.$p = undefined;
  return s;
}
cs.registerAction("compute gamepad", "qDlKG3i3k2K4V8WDC0PeMN11", a_qDlKG3i3k2K4V8WDC0PeMN11, false);

function a_qDlKG3i3k2K4V8WDC0PeMN11$0(s) {
  (s.pc = "J7ujsf4vd2ZdQS4j");
  (s.$ramp = 0.4);
  (s.pc = "aIps1tsTQVIXzE48");
  (s.$deramp = 0.9);
  (s.pc = "Np91rQPyO6dT6h0r");
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  var t_recOp_0 = /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ[("$_keyboard factor")];
  }
  (s.$f = t_recOp_0);
  var t_elseIf_1 = true;
  (s.pc = "SOG2l2YssSdmyfJ6");
  var t_call_2 = lib.Boolean_.not((/* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1 == undefined), s);
  var t_lazy_3 = t_call_2;
  if ((ok1(s, t_lazy_3) && t_lazy_3)) {
  var t_infix_4 = (ok1(s, s.$seconds) && (s.$seconds > 0));
  (t_lazy_3 = t_infix_4);
  }
  ok1(s, t_lazy_3);
  if (t_lazy_3) {
  (s.pc = "TYEiJepb5OzRK4Ue");
  var t_call_5 = (ok1(s, /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1) && /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1.x(s));
  if (s.$vector) {
  s.$vector.perform_set("$x", t_call_5, s);
  }
  (s.pc = "SrTapAnFDCPENlkk");
  var t_call_6 = (ok1(s, /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1) && /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1.y(s));
  if (s.$vector) {
  s.$vector.perform_set("$y", t_call_6, s);
  }
  (s.pc = "Q3jerK4ei022TcO4");
  var t_call_7 = (ok1(s, /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1) && /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1.z(s));
  if (s.$vector) {
  s.$vector.perform_set("$z", t_call_7, s);
  }
  } else {
  (s.pc = "Fg69UE7capGnCIHX");
  null;
  }
  (s.pc = "x41OxuSqcvPpFBvT");
  var t_call_8 = (ok1(s, s.$gp) && s.$gp.axes("left stick", s));
  (s.$p = t_call_8);
  var t_elseIf_9 = true;
  (s.pc = "af6ujQZDY57S69tr");
  var t_call_10 = (ok1(s, s.$p) && s.$p.x(s));
  var t_call_11 = (ok1(s, t_call_10) && lib.Math_.abs(t_call_10, s));
  var t_infix_12 = (ok1(s, t_call_11) && (t_call_11 > 0.07));
  ok1(s, t_infix_12);
  if (t_infix_12) {
  (t_elseIf_9 = false);
  (s.pc = "NLqjhSODtwJdvmKn");
  var t_call_13 = (ok1(s, s.$p) && s.$p.x(s));
  if (s.$vector) {
  s.$vector.perform_set("$x", t_call_13, s);
  }
  }
  if (t_elseIf_9) {
  (s.pc = "xH41FZCtrksP73Im");
  var t_call_14 = (ok1(s, s.$gp) && s.$gp.is_button_pressed("left", s));
  ok1(s, t_call_14);
  if (t_call_14) {
  (t_elseIf_9 = false);
  (s.pc = "ULPRruprvYXYBBBV");
  var t_infix_15 = (0 - 1);
  if (s.$vector) {
  var t_recOp_16 = s.$vector[("$x")];
  }
  var t_infix_17 = (ok2(s, s.$seconds, s.$ramp) && (s.$seconds / s.$ramp));
  var t_infix_18 = (ok2(s, t_recOp_16, t_infix_17) && (t_recOp_16 - t_infix_17));
  var t_infix_19 = (ok2(s, t_infix_18, s.$f) && (t_infix_18 * s.$f));
  var t_call_20 = (ok2(s, t_infix_15, t_infix_19) && lib.Math_.clamp(t_infix_15, 0, t_infix_19, s));
  if (s.$vector) {
  s.$vector.perform_set("$x", t_call_20, s);
  }
  }
  }
  if (t_elseIf_9) {
  (s.pc = "kJfsCJRarGkYDJo5");
  var t_call_21 = (ok1(s, s.$gp) && s.$gp.is_button_pressed("right", s));
  ok1(s, t_call_21);
  if (t_call_21) {
  (s.pc = "HPux3qopIyjD40mF");
  if (s.$vector) {
  var t_recOp_22 = s.$vector[("$x")];
  }
  var t_infix_23 = (ok2(s, s.$seconds, s.$ramp) && (s.$seconds / s.$ramp));
  var t_infix_24 = (ok2(s, t_recOp_22, t_infix_23) && (t_recOp_22 + t_infix_23));
  var t_infix_25 = (ok2(s, t_infix_24, s.$f) && (t_infix_24 * s.$f));
  var t_call_26 = (ok1(s, t_infix_25) && lib.Math_.clamp(0, 1, t_infix_25, s));
  if (s.$vector) {
  s.$vector.perform_set("$x", t_call_26, s);
  }
  } else {
  (s.pc = "jzdCQpkG1NhYRxJK");
  if (s.$vector) {
  var t_recOp_27 = s.$vector[("$x")];
  }
  var t_infix_28 = (ok2(s, t_recOp_27, s.$deramp) && (t_recOp_27 * s.$deramp));
  var t_infix_29 = (ok2(s, t_infix_28, s.$f) && (t_infix_28 * s.$f));
  if (s.$vector) {
  s.$vector.perform_set("$x", t_infix_29, s);
  }
  var t_elseIf_30 = true;
  (s.pc = "xfezCQnnAlipaL2h");
  if (s.$vector) {
  var t_recOp_31 = s.$vector[("$x")];
  }
  var t_call_32 = (ok1(s, t_recOp_31) && lib.Math_.abs(t_recOp_31, s));
  var t_infix_33 = (ok1(s, t_call_32) && (t_call_32 < 0.05));
  ok1(s, t_infix_33);
  if (t_infix_33) {
  (s.pc = "L2AiamuB1W6laju5");
  if (s.$vector) {
  s.$vector.perform_set("$x", 0, s);
  }
  } else {
  (s.pc = "YqZlodBMFE2uPqOy");
  null;
  }
  }
  }
  var t_elseIf_34 = true;
  (s.pc = "syDnE1OdmuOcz7JJ");
  var t_call_35 = (ok1(s, s.$p) && s.$p.y(s));
  var t_call_36 = (ok1(s, t_call_35) && lib.Math_.abs(t_call_35, s));
  var t_infix_37 = (ok1(s, t_call_36) && (t_call_36 > 0.07));
  ok1(s, t_infix_37);
  if (t_infix_37) {
  (t_elseIf_34 = false);
  (s.pc = "BJOkzjS2t6qrFqOs");
  var t_call_38 = (ok1(s, s.$p) && s.$p.y(s));
  if (s.$vector) {
  s.$vector.perform_set("$y", t_call_38, s);
  }
  }
  if (t_elseIf_34) {
  (s.pc = "xvn3AVRyEYWu4vmX");
  var t_call_39 = (ok1(s, s.$gp) && s.$gp.is_button_pressed("down", s));
  ok1(s, t_call_39);
  if (t_call_39) {
  (t_elseIf_34 = false);
  (s.pc = "EcM7LTmETJGKXq7k");
  if (s.$vector) {
  var t_recOp_40 = s.$vector[("$y")];
  }
  var t_infix_41 = (ok2(s, s.$seconds, s.$ramp) && (s.$seconds / s.$ramp));
  var t_infix_42 = (ok2(s, t_recOp_40, t_infix_41) && (t_recOp_40 + t_infix_41));
  var t_infix_43 = (ok2(s, t_infix_42, s.$f) && (t_infix_42 * s.$f));
  var t_call_44 = (ok1(s, t_infix_43) && lib.Math_.clamp(0, 1, t_infix_43, s));
  if (s.$vector) {
  s.$vector.perform_set("$y", t_call_44, s);
  }
  }
  }
  if (t_elseIf_34) {
  (s.pc = "thLr6SB1G4GOz9KA");
  var t_call_45 = (ok1(s, s.$gp) && s.$gp.is_button_pressed("up", s));
  ok1(s, t_call_45);
  if (t_call_45) {
  (s.pc = "sfKxmyqJIrEyAIEI");
  var t_infix_46 = (0 - 1);
  if (s.$vector) {
  var t_recOp_47 = s.$vector[("$y")];
  }
  var t_infix_48 = (ok2(s, s.$seconds, s.$ramp) && (s.$seconds / s.$ramp));
  var t_infix_49 = (ok2(s, t_recOp_47, t_infix_48) && (t_recOp_47 - t_infix_48));
  var t_infix_50 = (ok2(s, t_infix_49, s.$f) && (t_infix_49 * s.$f));
  var t_call_51 = (ok2(s, t_infix_46, t_infix_50) && lib.Math_.clamp(t_infix_46, 0, t_infix_50, s));
  if (s.$vector) {
  s.$vector.perform_set("$y", t_call_51, s);
  }
  } else {
  (s.pc = "x0qsG75vhyV1OTI3");
  if (s.$vector) {
  var t_recOp_52 = s.$vector[("$y")];
  }
  var t_infix_53 = (ok2(s, t_recOp_52, s.$deramp) && (t_recOp_52 * s.$deramp));
  var t_infix_54 = (ok2(s, t_infix_53, s.$f) && (t_infix_53 * s.$f));
  if (s.$vector) {
  s.$vector.perform_set("$y", t_infix_54, s);
  }
  var t_elseIf_55 = true;
  (s.pc = "xED8wNfNIawJhHlB");
  if (s.$vector) {
  var t_recOp_56 = s.$vector[("$y")];
  }
  var t_call_57 = (ok1(s, t_recOp_56) && lib.Math_.abs(t_recOp_56, s));
  var t_infix_58 = (ok1(s, t_call_57) && (t_call_57 < 0.05));
  ok1(s, t_infix_58);
  if (t_infix_58) {
  (s.pc = "ud5B1uYehyoXkvFL");
  if (s.$vector) {
  s.$vector.perform_set("$y", 0, s);
  }
  } else {
  (s.pc = "A3tUyRP6EIGbITZv");
  null;
  }
  }
  }
  var t_elseIf_59 = true;
  (s.pc = "Gp6XE26xRnkZH1UF");
  var t_call_60 = (ok1(s, s.$gp) && s.$gp.is_button_pressed("x", s));
  var t_lazy_61 = t_call_60;
  if ((ok1(s, t_lazy_61) && (!t_lazy_61))) {
  var t_call_62 = (ok1(s, s.$gp) && s.$gp.is_button_pressed("a", s));
  (t_lazy_61 = t_call_62);
  }
  var t_lazy_63 = t_lazy_61;
  if ((ok1(s, t_lazy_63) && (!t_lazy_63))) {
  var t_call_64 = (ok1(s, s.$gp) && s.$gp.is_button_pressed("left trigger", s));
  (t_lazy_63 = t_call_64);
  }
  var t_lazy_65 = t_lazy_63;
  if ((ok1(s, t_lazy_65) && (!t_lazy_65))) {
  var t_call_66 = (ok1(s, s.$gp) && s.$gp.is_button_pressed("right trigger", s));
  (t_lazy_65 = t_call_66);
  }
  ok1(s, t_lazy_65);
  if (t_lazy_65) {
  (s.pc = "xY1aCbyRrl4WRQzr");
  if (s.$vector) {
  var t_recOp_67 = s.$vector[("$z")];
  }
  var t_infix_68 = (ok2(s, s.$seconds, s.$ramp) && (s.$seconds / s.$ramp));
  var t_infix_69 = (ok2(s, t_recOp_67, t_infix_68) && (t_recOp_67 + t_infix_68));
  var t_infix_70 = (ok2(s, t_infix_69, s.$f) && (t_infix_69 * s.$f));
  var t_call_71 = (ok1(s, t_infix_70) && lib.Math_.clamp(0, 1, t_infix_70, s));
  if (s.$vector) {
  s.$vector.perform_set("$z", t_call_71, s);
  }
  } else {
  (s.pc = "rlwfZwqD5NQN3FYU");
  if (s.$vector) {
  var t_recOp_72 = s.$vector[("$z")];
  }
  var t_infix_73 = (ok2(s, t_recOp_72, s.$deramp) && (t_recOp_72 * s.$deramp));
  var t_infix_74 = (ok2(s, t_infix_73, s.$f) && (t_infix_73 * s.$f));
  if (s.$vector) {
  s.$vector.perform_set("$z", t_infix_74, s);
  }
  var t_elseIf_75 = true;
  (s.pc = "xqZ0ek76dg18mmKi");
  if (s.$vector) {
  var t_recOp_76 = s.$vector[("$z")];
  }
  var t_infix_77 = (ok1(s, t_recOp_76) && (t_recOp_76 < 0.05));
  ok1(s, t_infix_77);
  if (t_infix_77) {
  (s.pc = "xM1wils39LR2R2r1");
  if (s.$vector) {
  s.$vector.perform_set("$z", 0, s);
  }
  } else {
  (s.pc = "xtlCQlqAUn849DBv");
  null;
  }
  }
  return s.rt.leave();
}
cs.registerStep(a_qDlKG3i3k2K4V8WDC0PeMN11$0, 'a_qDlKG3i3k2K4V8WDC0PeMN11$0');

cs.startFn = function(rt) {
lib.App.rt_start(rt);
lib.Media.rt_start(rt);
lib.Player.rt_start(rt);
lib.Senses.rt_start(rt);
lib.Time.rt_start(rt);
lib.Web.rt_start(rt);
};

cs.stopFn = function(rt) {
lib.App.rt_stop(rt);
lib.Media.rt_stop(rt);
lib.Player.rt_stop(rt);
lib.Senses.rt_stop(rt);
lib.Time.rt_stop(rt);
lib.Web.rt_stop(rt);
};

cs._compilerVersion = '1';
cs._initGlobals = function(d,rt) {
  if(!d.hasOwnProperty("$k7HatejkjqfIA242SSMpitAK")) d.$k7HatejkjqfIA242SSMpitAK = lib.DateTime.defaultValue;
  if(!d.hasOwnProperty("$BdGhpbmca") || !d["$BdGhpbmca"]) d.$BdGhpbmca = new Tbl_BdGhpbmca(d.libName);
  if(!d.hasOwnProperty("$EBTBDXQl4wWAeztoI6v6uXr7") || !d["$EBTBDXQl4wWAeztoI6v6uXr7"]) d.$EBTBDXQl4wWAeztoI6v6uXr7 = new Tbl_EBTBDXQl4wWAeztoI6v6uXr7(d.libName);

};

cs._initGlobals2 = function(d) {
d.$BdGhpbmca.name = "Vector";d.$EBTBDXQl4wWAeztoI6v6uXr7.name = "Settings";};

cs._resetGlobals = function(d) {
  d.$LJp5GBFLELwUrK3r6yVHOfL1 = undefined;
  d.$k7HatejkjqfIA242SSMpitAK = lib.DateTime.defaultValue;
  d.$BdGhpbmca = undefined;
  d.$EBTBDXQl4wWAeztoI6v6uXr7 = undefined;
  d.$wzrHF0ZiaaIPCBlykVeDL7ZQ = undefined;
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "current";
cs.authorId = "zchpa";
cs.scriptGuid = "4407827f-990a-40fe-0ad5-5ef176591377";
}),

// **************************************************************
"ORJVjHxxr9xzlRwG": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "game animations";
cs.scriptColor = "\u00239955bb";
cs.objectSingletons = {};
/* ACTION: splatter */
function a_IgJeOaT4qD6XCDWM(previous, returnAddr, $sprite, $splatter) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_IgJeOaT4qD6XCDWM$0;
  s.name = "splatter";
  s.$sprite = $sprite;
  s.$splatter = $splatter;
  s.$sp = undefined;
  s.$anim = undefined;
  return s;
}
cs.registerAction("splatter", "IgJeOaT4qD6XCDWM", a_IgJeOaT4qD6XCDWM, true);

function ok1(s, a0) {
  return (a0 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok2(s, a0, a1) {
  return (a0 == undefined || a1 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok3(s, a0, a1, a2) {
  return (a0 == undefined || a1 == undefined || a2 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok4(s, a0, a1, a2, a3) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok5(s, a0, a1, a2, a3, a4) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined || a4 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function a_IgJeOaT4qD6XCDWM$0(s) {
  (s.pc = "X64Ps5YYS1av5MpI");
  var t_libcall_0 = s.libs["xdHh3GbzZt7wBK4e"]["board"](s);
  return s.rt.enter(t_libcall_0.invoke(t_libcall_0, a_IgJeOaT4qD6XCDWM$2));
}
cs.registerStep(a_IgJeOaT4qD6XCDWM$0, 'a_IgJeOaT4qD6XCDWM$0');

function a_IgJeOaT4qD6XCDWM$2(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  var t_resumeCtx_2 = s.rt.getBlockingResumeCtx(a_IgJeOaT4qD6XCDWM$3);
  var t_call_3 = (ok2(s, t_actRes_1, s.$splatter) && t_actRes_1.create_picture(s.$splatter, t_resumeCtx_2));
  return a_IgJeOaT4qD6XCDWM$3;
}
cs.registerStep(a_IgJeOaT4qD6XCDWM$2, 'a_IgJeOaT4qD6XCDWM$2');

function a_IgJeOaT4qD6XCDWM$3(s) {
  var t_pauseRes_4 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_4);
  (s.$sp = t_pauseRes_4);
  (s.pc = "ODXoYXN95HMQR2Cl");
  var t_call_5 = (ok1(s, s.$sprite) && s.$sprite.x(s));
  var t_call_6 = (ok1(s, s.$sprite) && s.$sprite.y(s));
  s.rt.logObjectMutation(s.$sp);
  (ok3(s, s.$sp, t_call_5, t_call_6) && s.$sp.set_pos(t_call_5, t_call_6, s));
  (s.pc = "u9qh43UUwoK0FZl0");
  var t_call_7 = (ok1(s, s.$sprite) && s.$sprite.width(s));
  s.rt.logObjectMutation(s.$sp);
  (ok2(s, s.$sp, t_call_7) && s.$sp.set_width(t_call_7, s));
  (s.pc = "x2LYMGKCfJ1oW8qz");
  var t_call_8 = (ok1(s, s.$sprite) && s.$sprite.speed_x(s));
  var t_infix_9 = (ok1(s, t_call_8) && (t_call_8 / 5));
  var t_call_10 = (ok1(s, s.$sprite) && s.$sprite.speed_y(s));
  var t_infix_11 = (ok1(s, t_call_10) && (t_call_10 / 5));
  s.rt.logObjectMutation(s.$sp);
  (ok3(s, s.$sp, t_infix_9, t_infix_11) && s.$sp.set_speed(t_infix_9, t_infix_11, s));
  (s.pc = "uAJdLNuxiNbu2T4D");
  s.rt.logObjectMutation(s.$sp);
  (ok1(s, s.$sp) && s.$sp.set_friction(0.05, s));
  (s.pc = "xkBOKjaSeL4oRcyl");
  var t_call_12 = (ok1(s, s.$sprite) && s.$sprite.z_index(s));
  var t_infix_13 = (ok1(s, t_call_12) && (t_call_12 - 1));
  s.rt.logObjectMutation(s.$sp);
  (ok2(s, s.$sp, t_infix_13) && s.$sp.set_z_index(t_infix_13, s));
  (s.pc = "F7VCHbHecTaVIjT4");
  var t_call_14 = (ok1(s, s.$sp) && s.$sp.create_animation(s));
  (s.$anim = t_call_14);
  (s.pc = "IUYXcNBxhS2fVVRG");
  s.rt.logObjectMutation(s.$anim);
  (ok1(s, s.$anim) && s.$anim.puff_out(0.6, "cubic", 1.2, s));
  (s.pc = "bx6onFKBhqu1SI15");
  s.rt.logObjectMutation(s.$anim);
  (ok1(s, s.$anim) && s.$anim.delete_(s));
  return s.rt.leave();
}
cs.registerStep(a_IgJeOaT4qD6XCDWM$3, 'a_IgJeOaT4qD6XCDWM$3');

cs.startFn = function(rt) {
lib.App.rt_start(rt);
lib.Media.rt_start(rt);
lib.Player.rt_start(rt);
lib.Senses.rt_start(rt);
lib.Time.rt_start(rt);
lib.Web.rt_start(rt);
};

cs.stopFn = function(rt) {
lib.App.rt_stop(rt);
lib.Media.rt_stop(rt);
lib.Player.rt_stop(rt);
lib.Senses.rt_stop(rt);
lib.Time.rt_stop(rt);
lib.Web.rt_stop(rt);
};

cs._compilerVersion = '1';
cs._initGlobals = function(d,rt) {

};

cs._initGlobals2 = function(d) {
};

cs._resetGlobals = function(d) {
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.authorId = "zchpa";
cs.scriptGuid = "4407827f-990a-40fe-0ad5-5ef176591377";
})}
