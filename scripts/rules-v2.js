/* ===== SECTION: rules-v2.js ===== */
/* M.Claude.3.3.30 · Luật rèn luyện v2 (chốt 15/11/2026, mục 10 tài liệu "Shin routine — Logic rèn luyện").
   Một nơi duy nhất tính: Lửa, ngày nghỉ, số ngày/lần của thẻ, bậc thẻ, thẻ duy trì.
   - Lửa: ngày có ghi đúng ngày ≥1 thẻ (kể cả "Chưa làm") +1; trọn mọi thẻ đang rèn +2.
     Thẻ khi gặp dịp ghi "Không gặp dịp" vẫn tính là trọn. Thẻ duy trì không tính vào "trọn".
     Ngày ghi bù không cộng Lửa (vẫn tính như ngày chưa ghi). Lửa không reset, thấp nhất là 0.
   - Ngày nghỉ: trong 7 ngày được nghỉ 1 ngày (không trừ Lửa, thẻ hằng ngày vẫn được tính ngày đó).
     Lỡ thêm ngày nào khi chưa qua 7 ngày kể từ ngày nghỉ: Lửa −1, thẻ không tính ngày đó.
   - Bậc: thẻ hằng ngày 7 · 14 · 21 ngày có làm (Đã làm/Một phần, cộng ngày nghỉ);
     thẻ khi gặp dịp 3 · 6 · 9 lần. Tự lên bậc, không ai xác nhận. Bậc không tự hạ.
   - Thẻ duy trì: 7 ngày chưa làm → Shin nhắc ('fade'); 14 ngày → mạng nhện ('web'). Cả thẻ khi gặp dịp.
   Dữ liệu thêm (không đổi 3 khóa lưu trữ): S.r2 {v,migrated}, S.r2act {ngày:[thẻ đang rèn]}. */
var R2C=null, R2_QUEUE=[], R2_FLUSH_T=null, R2_NOTICE=null;

function r2OnTime(d,id){
  var r=((S.review16||{})[d]||{})[id];
  if(r&&isFinite(r.createdAt))return dk(new Date(r.createdAt))===d;
  return !((S.bf||{})[d]||{})[id];
}
/* Thẻ đang rèn lúc này: trên tay, không tạm dừng, chưa Thành nếp. */
function r2TrainingNow(){return slotIds().filter(function(id){var u=H(id);return HMAP[id]&&u.status!=='pause'&&!u.master;}).sort();}
function r2LastMark(id){var last='';Object.keys(S.log||{}).forEach(function(d){if(S.log[d][id]&&d>last)last=d;});return last;}
/* Lưu ảnh chụp "thẻ đang rèn" theo ngày, chỉ khi có thay đổi. Ngày không mở app giữ nguyên tập thẻ của lần mở trước. */
function r2Snapshot(){
  if(!S||!S.habits)return;S.r2act=S.r2act||{};var t=dk(),cur=r2TrainingNow(),keys=Object.keys(S.r2act).filter(function(k){return k<=t;}).sort(),last=keys.length?S.r2act[keys[keys.length-1]]:null;
  if(!last||last.join('|')!==cur.join('|'))S.r2act[t]=cur;
}
function r2Calc(){
  if(R2C)return R2C;
  var t=dk(),snapKeys=Object.keys(S.r2act||{}).sort(),ids=Object.keys(S.habits||{}).filter(function(id){return HMAP[id]&&S.habits[id]&&validDate32(S.habits[id].since);}),first=null,lastMark={},tmemo={};
  ids.forEach(function(id){var s=H(id).since;if(!first||s<first)first=s;lastMark[id]=r2LastMark(id);});
  function inferred(d){return ids.filter(function(id){var u=H(id);if(d<u.since||(u.master&&u.master<d))return false;var live=S.slots.indexOf(id)>=0&&u.status!=='pause'&&u.status!=='keep';return live||(lastMark[id]&&d<=lastMark[id]);});}
  function trainingOn(d){
    if(tmemo[d])return tmemo[d];var list;
    if(d===t)list=r2TrainingNow();
    else{var k=null;for(var i=snapKeys.length-1;i>=0;i--){if(snapKeys[i]<=d){k=snapKeys[i];break;}}
      list=k?(S.r2act[k]||[]).filter(function(id){var u=H(id);return u&&HMAP[id]&&d>=u.since&&!(u.master&&u.master<d);}):inferred(d);}
    return (tmemo[d]=list);
  }
  var begin=first?(first>S.created?first:S.created):t,fire=0,free={},miss={},gain={},rec={},lastFree=null,guard=0;
  for(var d=begin;d<=t&&guard++<4000;d=addD(d,1)){
    var T=trainingOn(d),log=S.log[d]||{},has=false;
    for(var id in log){if(log[id]&&r2OnTime(d,id)){has=true;break;}}
    if(has){var full=T.length>0&&T.every(function(x){var m=log[x];return isDip(x)?(m==='y'||m==='x'):m==='y';});gain[d]=full?2:1;fire+=gain[d];rec[d]=true;}
    else if(d<t&&T.length){
      if(!lastFree||diffD(lastFree,d)>=7){free[d]=true;lastFree=d;gain[d]=0;}
      else{miss[d]=true;gain[d]=fire>0?-1:0;fire=Math.max(0,fire-1);}
    }
  }
  return (R2C={fire:fire,free:free,miss:miss,gain:gain,rec:rec,begin:begin,trainingOn:trainingOn,lastFree:lastFree,cnt:{}});
}
function r2Fire(){return S?r2Calc().fire:0;}
/* Số ngày (thẻ hằng ngày) hoặc số lần (thẻ khi gặp dịp) đã làm, kèm ngày chạm mỗi mốc bậc. */
function r2Info(id){
  var C=r2Calc();if(C.cnt[id])return C.cnt[id];
  var u=H(id),t=dk(),n=0,at={},dip=isDip(id),need=dip?LV_NEED_D:LV_NEED;
  if(!u)return {n:0,at:at};
  var days={};Object.keys(S.log||{}).forEach(function(d){var m=S.log[d][id];if(d<=t&&(m==='y'||m==='p'))days[d]=1;});
  if(!dip)Object.keys(C.free).forEach(function(d){if(d>=u.since&&!(S.log[d]||{})[id]&&C.trainingOn(d).indexOf(id)>=0)days[d]=1;});
  Object.keys(days).sort().forEach(function(d){n++;for(var k=1;k<=3;k++){if(n===need[k])at[k]=d;}});
  return (C.cnt[id]={n:n,at:at});
}
function r2Count(id){return r2Info(id).n;}
function r2LevelFor(id,n){return n>=needFor(id,2)?3:n>=needFor(id,1)?2:1;}
/* Đưa bậc thẻ khớp số ngày/lần. Trả danh sách thẻ vừa lên bậc hoặc vừa Thành nếp. */
function r2Sync(){
  var ups=[];if(!S||!S.habits)return ups;
  Object.keys(S.habits).forEach(function(id){
    var u=H(id);if(!HMAP[id]||!u)return;var info=r2Info(id),lv=r2LevelFor(id,info.n),old=u.lv||1;
    if(lv>old){u.lv=lv;u.lvSince=info.at[lv-1]||dk();ups.push({id:id,lv:lv,from:old});}
    if((u.lv||1)>=3&&info.n>=needFor(id,3)&&!u.master){u.master=info.at[3]||dk();ups.push({id:id,master:true});}
  });
  if(ups.length)R2C=null;return ups;
}
/* Thẻ duy trì: số ngày kể từ lần làm gần nhất (hoặc từ ngày Thành nếp nếu chưa làm lại). */
function r2LastDone(id){var u=H(id),last='';Object.keys(S.log||{}).forEach(function(d){var m=S.log[d][id];if(d<=dk()&&(m==='y'||m==='p')&&d>last)last=d;});if(u&&u.master&&u.master>last)last=u.master;return last;}
function r2IdleDays(id){var last=r2LastDone(id);return last?diffD(last,dk()):0;}
function r2KeepState(id){var n=r2IdleDays(id);return n>=14?'web':n>=7?'fade':'live';}
/* Cho đợt 2: Lửa tuần và số ngày có ghi trong tuần (T2–CN). */
function r2Week(ws){var C=r2Calc(),fire=0,days=0;for(var i=0;i<7;i++){var d=addD(ws,i);if(C.gain[d])fire+=C.gain[d];if(C.rec[d])days++;}return {fire:fire,days:days};}
function r2RecordedDays(){return Object.keys(r2Calc().rec).length;}

/* ---------- Mừng lên bậc: lần lượt từng thẻ, chờ đóng popup đang mở ---------- */
function r2Queue(ups){ups.forEach(function(a){R2_QUEUE.push(a);});clearTimeout(R2_FLUSH_T);R2_FLUSH_T=setTimeout(r2Flush,700);}
function r2Flush(){
  if(!R2_QUEUE.length||OV||(typeof NBOPEN!=='undefined'&&NBOPEN))return;
  var a=R2_QUEUE.shift();if(!H(a.id)){r2Flush();return;}
  if(a.master){masterShow(a.id);return;}
  fanfare();bigStamp(a.lv===3?'t':'f');
  if(a.lv===2){showTreeAward(a.id,a.stamp);return;}
  toast('Thẻ '+esc(sname(a.id))+' lên bậc '+LV_NAME[a.lv]+'!',4500);setTimeout(r2Flush,1600);
}
var r2CloseOv=closeOv;
closeOv=function(){var out=r2CloseOv.apply(this,arguments);if(R2_QUEUE.length){clearTimeout(R2_FLUSH_T);R2_FLUSH_T=setTimeout(r2Flush,420);}return out;};

/* ---------- Gắn vào luồng lưu, ghi nhận, hoàn tác, mở app ---------- */
var r2Save=save;
save=function(now){if(S&&!SAVE_BLOCK){R2C=null;r2Snapshot();}return r2Save(now);};

var r2WriteRecord=writeRecord;
writeRecord=function(id,d,m,note,why){
  var u=H(id),before=u?{lv:u.lv,lvSince:u.lvSince,master:u.master}:null,treeHad=!!(S.treeCards||{})[id],stamps=Object.keys(S.stampLetters||{});
  var out=r2WriteRecord(id,d,m,note,why);if(!out)return out;
  R2C=null;var ups=r2Sync();out.r2={before:before,treeHad:treeHad,stamps:stamps,ups:ups};
  if(ups.length){save(true);var fresh=Object.keys(S.stampLetters||{}).filter(function(k){return stamps.indexOf(k)<0;});ups.forEach(function(a){if(a.lv===2&&fresh.length)a.stamp=+fresh[0];});r2Queue(ups);}
  return out;
};
var r2Undo=undoRecord29;
undoRecord29=function(token){
  var old=RECORD_UNDO,ok=old&&String(old.token)===String(token)&&RECORD_VERSIONS[old.day+'|'+old.id]===old.token;r2Undo(token);
  if(!ok||!old.r2||!old.r2.ups||!old.r2.ups.length)return;
  var u=H(old.id),b=old.r2.before;if(u&&b){u.lv=b.lv;u.lvSince=b.lvSince;if(b.master===undefined)delete u.master;else u.master=b.master;}
  if(!old.r2.treeHad&&S.treeCards)delete S.treeCards[old.id];
  Object.keys(S.stampLetters||{}).forEach(function(k){if(old.r2.stamps.indexOf(k)<0&&!S.stampLetters[k].letter)delete S.stampLetters[k];});
  R2_QUEUE=R2_QUEUE.filter(function(a){return a.id!==old.id;});R2C=null;save(true);refreshAll();
};

/* Lần mở đầu tiên ở v2: tính lại bậc theo mốc mới, Lửa tính từ lịch sử; Shin báo thẻ nào đã lên bậc. */
function r2Migrate(){
  if(!S||LOAD_ISSUE32)return;var first=!S.r2;R2C=null;var ups=r2Sync();
  if(first){S.r2={v:2,migrated:dk()};if(ups.length&&!DEMO)R2_NOTICE=ups;} /* Demo mới dựng: chỉnh bậc lặng lẽ */
  else if(ups.length)r2Queue(ups);
}
function r2Notice(){
  var ups=R2_NOTICE;R2_NOTICE=null;if(!ups||!ups.length)return;if(OV){R2_NOTICE=ups;setTimeout(r2Notice,1200);return;}
  var by={};ups.forEach(function(a){var r=by[a.id]=by[a.id]||{id:a.id};if(a.master)r.master=true;if(a.lv)r.lv=Math.max(r.lv||0,a.lv);});
  var rows=Object.keys(by).map(function(id){var r=by[id],u=H(id);return '<li><b>'+esc(sname(id))+'</b> · '+(r.master?'Thành nếp':LV_NAME[u.lv])+' <small>('+r2Count(id)+' '+unitOf(id)+')</small></li>';}).join('');
  openMini('<h2 style="margin:4px 0 8px">Thẻ của bạn đã lên bậc</h2>'+say('shin','proud','Cách tính mới: thẻ tự lên bậc theo số ngày đã làm, không cần ai xác nhận.')+'<ul style="margin:12px 0;padding-left:20px;line-height:1.8">'+rows+'</ul><button class="btn btn--wide" data-act="close">Tiếp tục</button>');
  fanfare();
}
var r2Load=load;
load=function(){var out=r2Load.apply(this,arguments);r2Migrate();return out;};
var r2ApplyRestore=applyRestore32;
applyRestore32=function(){var out=r2ApplyRestore.apply(this,arguments);if(S){r2Migrate();save(true);render();if(R2_NOTICE)setTimeout(r2Notice,500);}return out;};
/* Ngày đổi khi app vẫn mở: ngày nghỉ hôm qua có thể cộng ngày cho thẻ. */
var R2_DAY=dk();
document.addEventListener('visibilitychange',function(){if(document.hidden||!S||SAVE_BLOCK)return;if(R2_DAY!==dk()){R2_DAY=dk();R2C=null;var ups=r2Sync();if(ups.length){save(true);r2Queue(ups);}refreshAll();}});
