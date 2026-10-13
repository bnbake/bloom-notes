/* =====================================================================
   bloom & bake notes: Wix custom elements
   ---------------------------------------------------------------------
   Save this file in Wix as:  public/custom-elements/bloom-notes.js
   Then add a Custom Element for each note and pick one of these tag names:
     bloom-letter   bloom-drops   bloom-deadline   bloom-crumbs   bloom-barter
   Unlike an Embed HTML box, these grow and shrink with their text.

   \u270f\ufe0f TO CHANGE THE WORDS: edit the text inside each note's HTML below.
      Search for the note's name (e.g. "bloom-letter") to find it.
   ===================================================================== */

/* your fonts, added to the page once (Jnr for headings, Agner for text).
   numbers, & and \u00a3 are not in them, so they fall back to Gaegu. */
(function addFonts(){
  if (document.getElementById('bloom-fonts')) return;
  var gf=document.createElement('link'); gf.rel='stylesheet';
  gf.href='https://fonts.googleapis.com/css2?family=Gaegu:wght@400;700&display=swap';
  document.head.appendChild(gf);
  var st=document.createElement('style'); st.id='bloom-fonts';
  st.textContent='@font-face{font-family:"Jnr";src:url(data:font/woff2;base64,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) format("woff2");font-display:swap}'+
                 '@font-face{font-family:"Agner";src:url(data:font/woff2;base64,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) format("woff2");font-display:swap}';
  document.head.appendChild(st);
})();

/* works out what the deadline note should say from a list of pickup dates.
   each date = the saturday of a pickup weekend ("2026-10-17" or a Date).
   orders close at 9pm on the tuesday before.
   open   : before the deadline           -> "october drop", "orders close tue 13 oct", "9:00 pm"
   closed : deadline passed, pickup is on -> "october drop", "oct 17 and 18", sat + sun circled, "orders closed", "pick up 10\u20131"
   each entry can be a date, or {date, hours, days}: hours is the pickup time, e.g. "10\u20131",
   days is "saturday", "sunday" or "both" (default both)
   soon   : no future pickup dates entered -> "next drop coming soon" */
function bloomNextDrop(dates, now){
  now = now || new Date();
  var MON=['january','february','march','april','may','june','july','august','september','october','november','december'];
  var DAY=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
  function toDay(v){
    if(!v) return null;
    if(typeof v==='string'){ var p=v.slice(0,10).split('-').map(Number); if(p.length<3||!p[0]) return null; return new Date(p[0],p[1]-1,p[2]); }
    var d=new Date(v); if(isNaN(d)) return null; return new Date(d.getFullYear(),d.getMonth(),d.getDate());
  }
  function say(d){ return DAY[d.getDay()]+' '+d.getDate()+' '+MON[d.getMonth()]; }
  var drops=[];
  (dates||[]).forEach(function(v){
    var obj=(v&&typeof v==='object'&&!(v instanceof Date));
    var hours=obj?v.hours:null;
    var which=String((obj&&v.days)||'both').toLowerCase();
    var sat1=which.indexOf('sun')===-1||which.indexOf('sat')!==-1||which==='both', sun1=which.indexOf('sat')===-1||which.indexOf('sun')!==-1||which==='both';
    if(v&&typeof v==='object'&&!(v instanceof Date)) v=v.date;
    var d=toDay(v); if(!d) return;
    var day=d.getDay();
    var sat=new Date(d.getFullYear(),d.getMonth(),d.getDate()+(day===0?-1:(6-day)));
    drops.push({sat:sat,hours:hours,onSat:sat1,onSun:sun1,
      close:new Date(sat.getFullYear(),sat.getMonth(),sat.getDate()-4,21,0,0),
      end:new Date(sat.getFullYear(),sat.getMonth(),sat.getDate()+1,23,59,59)});
  });
  if(!drops.length) return null;
  drops.sort(function(a,b){return a.close-b.close});
  var SHORT=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
  function weekend(x){   /* "oct 17 and 18", "oct 31 and nov 1", or one day: "oct 17" */
    var sun=new Date(x.sat.getFullYear(),x.sat.getMonth(),x.sat.getDate()+1);
    function md(d){ return SHORT[d.getMonth()]+' '+d.getDate(); }
    if(!x.onSun) return md(x.sat);
    if(!x.onSat) return md(sun);
    return x.sat.getMonth()===sun.getMonth() ? md(x.sat)+' and '+sun.getDate() : md(x.sat)+' and '+md(sun);
  }
  function pickupLine(x){   /* "pick up sat 17 or sun 18 oct", "pick up sat 17 oct", "pick up sat 31 oct or sun 1 nov" */
    var sun=new Date(x.sat.getFullYear(),x.sat.getMonth(),x.sat.getDate()+1);
    if(!x.onSun) return 'pick up sat '+x.sat.getDate()+' '+SHORT[x.sat.getMonth()];
    if(!x.onSat) return 'pick up sun '+sun.getDate()+' '+SHORT[sun.getMonth()];
    return x.sat.getMonth()===sun.getMonth()
      ? 'pick up sat '+x.sat.getDate()+' or sun '+sun.getDate()+' '+SHORT[sun.getMonth()]
      : 'pick up sat '+x.sat.getDate()+' '+SHORT[x.sat.getMonth()]+' or sun '+sun.getDate()+' '+SHORT[sun.getMonth()];
  }
  for(var i=0;i<drops.length;i++){
    var x=drops[i];
    if(now>=x.close && now<=x.end) return {state:'closed', title:MON[x.sat.getMonth()]+' drop', pickup:weekend(x), days:pickupLine(x), hours:x.hours, onSat:x.onSat, onSun:x.onSun};
    if(now<x.close) return {state:'open', title:MON[x.sat.getMonth()]+' drop', when:'tue '+x.close.getDate()+' '+SHORT[x.close.getMonth()], pickup:weekend(x), days:pickupLine(x), onSat:x.onSat, onSun:x.onSun};
  }
  return {state:'soon'};
}
/* crumbs & clippings is open wed to fri of each drop week (the days before pickup saturday).
   returns {open:true} during that window, {open:false, opens:"wed 14 oct"} before the next one,
   or null if there are no dates. */
function bloomCrumbsWindow(dates, now){
  now = now || new Date();
  var SH=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
  var next=null, any=false;
  for(var i=0;i<(dates||[]).length;i++){
    var v=dates[i]; if(v&&typeof v==='object'&&!(v instanceof Date)) v=v.date;
    var d=null;
    if(typeof v==='string'){ var p=v.slice(0,10).split('-').map(Number); if(p.length===3&&p[0]) d=new Date(p[0],p[1]-1,p[2]); }
    else if(v){ var x=new Date(v); if(!isNaN(x)) d=new Date(x.getFullYear(),x.getMonth(),x.getDate()); }
    if(!d) continue; any=true;
    var day=d.getDay(), sat=new Date(d.getFullYear(),d.getMonth(),d.getDate()+(day===0?-1:(6-day)));
    var start=new Date(sat.getFullYear(),sat.getMonth(),sat.getDate()-3,0,0,0);
    var end=new Date(sat.getFullYear(),sat.getMonth(),sat.getDate()-1,23,59,59);
    if(now>=start&&now<=end) return {open:true};
    if(start>now&&(!next||start<next)) next=start;
  }
  if(!any) return null;
  return {open:false, opens: next ? 'wed '+next.getDate()+' '+SH[next.getMonth()] : ''};
}
/* shows the right view inside a deadline note */
function bloomShowDrop(root, dates, now){
  var r=bloomNextDrop(dates, now); if(!r) return;
  var views=root.querySelectorAll('[data-view]');
  for(var i=0;i<views.length;i++) views[i].hidden=(views[i].getAttribute('data-view')!==r.state);
  /* mark the pickup day(s): squiggle in the order view, circle in the closed view */
  var marks=root.querySelectorAll('[data-mark]');
  for(var m=0;m<marks.length;m++){
    var cls=marks[m].getAttribute('data-mark');
    var sa=marks[m].querySelector('[data-day="sat"]'), su=marks[m].querySelector('[data-day="sun"]');
    if(sa) sa.classList.toggle(cls, r.onSat!==false);
    if(su) su.classList.toggle(cls, r.onSun!==false);
  }
  var set=function(sel,t){var els=root.querySelectorAll(sel);for(var k=0;k<els.length;k++)els[k].textContent=t};
  if(r.title) set('[data-view="'+r.state+'"] h2', r.title);
  if(r.when) set('[data-view="open"] .when', r.when);
  if(r.pickup) set('[data-view="'+r.state+'"] .drop-date', r.pickup);
  if(r.days) set('[data-view="'+r.state+'"] .pickup-days', r.days);
  if(r.hours) set('[data-view="closed"] .hours', String(r.hours));
}



/* one shared layout pass per frame: every note/doodle is measured first, then all are updated,
   so the page is only re-laid-out once instead of once per element (faster loading) */
/* \u270f\ufe0f collabs gallery photos, used on every page (home and about) with no page code needed.
   one photo per line:  'link | caption',   (page code can still override with the collab-photos attribute) */
var BLOOM_COLLAB_W='/v1/fit/w_900,h_900,q_80/photo.webp';   /* asks Wix for a smaller, faster copy */
var BLOOM_COLLAB_PHOTOS=[
  'https://static.wixstatic.com/media/8bf26a_35660b2a7ed94398818a65c063009630~mv2.png'+BLOOM_COLLAB_W+' | wedding florals',
  'https://static.wixstatic.com/media/8bf26a_f20047fb4bd141b7aca540e2405944ed~mv2.png'+BLOOM_COLLAB_W+' | table settings',
  'https://static.wixstatic.com/media/8bf26a_df6853437f1f4b58a3977f4ce216e963~mv2.png'+BLOOM_COLLAB_W+' | farewell party'
].join(' ; ');
try{ console.log('bloom-notes loaded (version 9 oct, with collabs gallery)'); }catch(e){}
var BLOOM_FILL={'bloom-letter':1,'bloom-drops':1,'bloom-deadline':1,'bloom-deadline-popup':1,'bloom-barter':1,'bloom-ps':1,'bloom-barter-intro':1,'bloom-good-to-know':1};
/* your logo (used as the letter's sign-off; set a "logo" attribute with an image link to swap it, or logo="off" for the written sign-off) */
var BLOOM_LOGO='data:image/webp;base64,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';
var bloomQ=[], bloomRaf=0;
function bloomSchedule(el){ if(bloomQ.indexOf(el)<0) bloomQ.push(el); if(!bloomRaf) bloomRaf=requestAnimationFrame(bloomFlush); }
function bloomFlush(){ bloomRaf=0; var q=bloomQ; bloomQ=[];
  q.forEach(function(e){ if(e._prep) e._prep(); });
  var m=q.map(function(e){ return e._measure ? e._measure() : null; });
  q.forEach(function(e,i){ if(e._apply) e._apply(m[i]); }); }
/* shared by every note:
   - an optional "tilt" attribute, e.g. -2deg or 0deg
   - tap/click a note to open it large in the middle of the screen (set popout="off" to turn this off) */
var BLOOM_X='<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4.5 4.8c3.8 3.2 7.2 6.8 11 10.6M15.3 4.4c-3.6 3.9-7 7.4-10.9 11.1" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>';
var BLOOM_POP_CSS='.wrap{display:contents}:host{pointer-events:auto!important;position:fixed!important;inset:0!important;z-index:2147483000!important;display:grid!important;place-items:center;padding:calc(env(safe-area-inset-top,0px) + 24px) 16px calc(env(safe-area-inset-bottom,0px) + 24px)!important;box-sizing:border-box}'+
 '.pop-shade{position:fixed;inset:0;background:rgba(53,38,27,.45);opacity:0;transition:opacity .3s}'+
 '.open .pop-shade{opacity:1}'+
 '.pop-card{position:relative;width:min(600px,100%);max-height:100%;overflow:auto;overscroll-behavior:contain;padding:20px 20px 4px 0;box-sizing:border-box;transform:translateY(24px) scale(.92) rotate(var(--tilt,0deg));opacity:0;transition:transform .42s cubic-bezier(.2,.9,.25,1.08),opacity .25s}'+
 '.open .pop-card{transform:none;opacity:1}'+
 '.pop-card .string{display:none}.pop-card .note{max-width:none!important;transform:none!important;cursor:default!important;font-size:19px;box-shadow:0 30px 60px -20px rgba(53,38,27,.6)}'+
 '.pop-card .note:hover{transform:none!important}'+
 '.pop-close{position:absolute;top:0;right:0;z-index:20;width:40px;height:40px;border-radius:50%;border:2px solid #35261B;background:#FBF3D3;color:#35261B;cursor:pointer;display:grid;place-items:center;padding:0}'+
 '.pop-close svg{width:16px;height:16px}'+
 '.pop-close:hover{background:#E0A274}'+
 '.pop-close:focus-visible{outline:3px solid #EC8E4C;outline-offset:2px}'+
 '@media (prefers-reduced-motion:reduce){.pop-card,.pop-shade{transition:none}}';
class BloomNote extends HTMLElement {
  applyTilt(){
    var t=this.getAttribute('tilt')||this.getAttribute('data-tilt');
    if(t===null||t==='') return;
    t=String(t).trim(); if(/^-?[0-9]+([.][0-9]+)?$/.test(t)) t+='deg';
    this.style.setProperty('--tilt', t);
    var n=this.shadowRoot&&this.shadowRoot.querySelector('.note'); if(n) n.style.setProperty('--tilt', t);
    this._tilt=t;
    if(this._relayout) bloomSchedule(this);
  }
  /* keeps the element's box snug: padding grows just enough for the tilt, tape, strings and shadow,
     and is re-measured whenever the box is resized or the content changes */
  initFit(){
    var self=this; if(this._fitOn||(this.getAttribute('fit')||'').toLowerCase()==='off') return; this._fitOn=true;
    var run=function(){ bloomSchedule(self); };
    if('ResizeObserver' in window){ this._fitRO=new ResizeObserver(run); this._fitRO.observe(this);
      var main=this.shadowRoot&&this.shadowRoot.querySelector('.note,.banner-wrap'); if(main) this._fitRO.observe(main); }
    if(document.fonts&&document.fonts.ready) document.fonts.ready.then(run);
    setTimeout(run,60); setTimeout(run,600);
    this.initFill();
  }
  fitBox(){ bloomSchedule(this); }
  /* scale a fixed-design note (e.g. the crumbs tag) to the width of its Wix box */
  initScale(){
    var self=this; if(this._scaleOn) return; this._scaleOn=true;
    var go=function(){ var w=self.getBoundingClientRect().width; if(!w) return;
      var z0=parseFloat(self.style.getPropertyValue('--z'))||1, z=(w-52)/300;
      var b=self._boxRoom(go), zh=Infinity; if(b&&b.fixed&&b.content>0){ zh=z0*b.avail/b.content*0.98; z=Math.min(z,zh); }   /* corner drag: fit the height too */
      z=Math.max(0.25,Math.min(1.4,z)); z=Math.round(z*100)/100;
      if(String(z)!==self.style.getPropertyValue('--z')){ if(b&&z<z0&&z<=zh+0.01) self._shrinkAvail=b.avail; self.style.setProperty('--z',z); self._fitN=0; bloomSchedule(self); } };
    if('ResizeObserver' in window){ var ro=new ResizeObserver(function(){ requestAnimationFrame(go); }); ro.observe(this); if(this.parentElement) ro.observe(this.parentElement); }
    go(); setTimeout(go,400);
  }
  /* text wraps with the width; the paper stretches to fill the box height;
     if the box is shorter than the text, the text shrinks a little so nothing gets cut off */
  initFill(){
    var self=this; if(this._fillOn||!BLOOM_FILL[this.tagName.toLowerCase()]||(this.getAttribute('fill')||'').toLowerCase()==='off') return;
    var r=this.shadowRoot, main=r&&Array.prototype.filter.call(r.children,function(c){ return c.matches&&c.matches('.note,.banner-wrap'); })[0]; if(!main) return;
    this._fillOn=true; this._fillMain=main;
    r.querySelector('style').textContent+=':host(:not([data-bloom-pop])) > .note,:host(:not([data-bloom-pop])) > .banner-wrap{zoom:var(--fz,1)}';
    var kick=function(){ var b=self.getBoundingClientRect(), k=Math.round(b.width)+'x'+Math.round(b.height), w=Math.round(b.width); if(w!==self._fillW){ self._fillW=w; self._fillAuto=false; } if(k!==self._fillKey){ self._fillKey=k; self._fillN=0; } bloomSchedule(self); };
    if('ResizeObserver' in window){ var fro=new ResizeObserver(function(){ requestAnimationFrame(kick); }); fro.observe(this); if(this.parentElement) fro.observe(this.parentElement); }
    if('MutationObserver' in window) new MutationObserver(function(){ self._fillN=0; bloomSchedule(self); }).observe(main,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['hidden']});
    if(document.fonts&&document.fonts.ready) document.fonts.ready.then(kick);
    kick();
  }
  /* how tall the note really is vs. how much room the Wix box gives it
     (the box can be the element itself or the wrapper Wix puts around it) */
  _boxRoom(again){
    var r=this.shadowRoot, m=r&&Array.prototype.filter.call(r.children,function(c){ return c.matches&&c.matches('.note,.banner-wrap'); })[0];
    if(!m) return null;
    var hb=this.getBoundingClientRect(); if(!hb.height) return null;
    /* the note's own bottom edge, ignoring the tilt (a tilted card's corners poke out a little) */
    var q=m.getBoundingClientRect(), tr=getComputedStyle(m).transform, sn=0, cs=1;
    if(tr&&tr!=='none'){ var mm=tr.match(/matrix\(([^)]+)\)/); if(mm){ var v=mm[1].split(',').map(parseFloat), s=Math.hypot(v[0],v[1])||1; cs=Math.abs(v[0]/s); sn=Math.abs(v[1]/s); } }
    var lh=(cs*cs-sn*sn)>0.5?(q.height*cs-q.width*sn)/(cs*cs-sn*sn):q.height;
    var pb=parseFloat(getComputedStyle(this).paddingBottom)||0, content=(q.top+q.height/2-hb.top)+lh/2+pb;
    var p=this.parentElement, ph=p?p.clientHeight:0, avail=ph||hb.height;
    /* the box has a height of its own only if it stays different from the note for a moment
       (a box that grows with its content catches up straight away) */
    var mis=(ph&&Math.abs(ph-hb.height)>4)||Math.abs(hb.height-content)>4, now=Date.now(), self=this;
    /* we shrank the note and the box shrank with it: the box follows its content after all */
    if(this._shrinkAvail&&avail<this._shrinkAvail-2){ this._boxFixed=false; this._mmT=0; this._autoUntil=now+2000; }
    this._shrinkAvail=0;
    if(now<(this._autoUntil||0)) mis=false;
    if(mis){ if(!this._mmT) this._mmT=now; if(now-this._mmT>300) this._boxFixed=true;
      else { clearTimeout(this._mmTo); this._mmTo=setTimeout(function(){ if(again) again(); },360); } }
    else { this._mmT=0; }
    return {content:content, avail:avail, fixed:!!this._boxFixed};
  }
  _fillMeasure(){
    /* text wraps with the width; if the box is set shorter than the note, the text shrinks to fit */
    if(!this._fillMain) return null; var self=this, b=this._boxRoom(function(){ self._fillN=0; bloomSchedule(self); }); if(!b||!b.avail) return null;
    return {ratio:b.content/b.avail, avail:b.avail, fixed:b.fixed};
  }
  _fillApply(f){
    if(!f) return; var ratio=f.ratio, z=parseFloat(this.style.getPropertyValue('--fz'))||1, nz=z;
    if(!f.fixed){ if(z!==1){ this.style.removeProperty('--fz'); bloomSchedule(this); } return; }
    /* if shrinking the text made the box shorter too, the box grows with its content: no shrinking needed */
    if(ratio>1.03) nz=z*Math.max(0.8,Math.sqrt(1/ratio)*0.99);
    else if(ratio<0.9&&z<1) nz=Math.min(1,z*Math.min(1.15,Math.sqrt(0.97/ratio)));
    nz=Math.round(Math.max(0.4,nz)*100)/100;
    if(Math.abs(nz-z)>=0.01&&(this._fillN=(this._fillN||0)+1)<=10){ if(nz<z) this._shrinkAvail=f.avail; this.style.setProperty('--fz',nz); bloomSchedule(this); }
  }
  _measure(){ return {fit:this._fitMeasure(), fill:this._fillOn?this._fillMeasure():null}; }
  _apply(m){ if(!m) return; this._fitApply(m.fit); if(this._fillOn) this._fillApply(m.fill); }
  _fitMeasure(){
    if(!this._fitOn) return null;
    var r=this.shadowRoot; if(!r) return null;
    var parts=r.querySelectorAll('.note,.banner-wrap,.note *,.banner-wrap *'); if(!parts.length) return null;
    var hb=this.getBoundingClientRect(), cs=getComputedStyle(this);
    var P={l:parseFloat(cs.paddingLeft)||0,t:parseFloat(cs.paddingTop)||0,r:parseFloat(cs.paddingRight)||0,b:parseFloat(cs.paddingBottom)||0};
    var box={l:hb.left+P.l,t:hb.top+P.t,r:hb.right-P.r,b:hb.bottom-P.b};
    var U={l:Infinity,t:Infinity,r:-Infinity,b:-Infinity};
    for(var i=0;i<parts.length;i++){ var e=parts[i]; if(e.closest&&e.closest('[hidden]')) continue; var q=e.getBoundingClientRect(); if(!q.width&&!q.height) continue;
      if(q.left<U.l)U.l=q.left; if(q.top<U.t)U.t=q.top; if(q.right>U.r)U.r=q.right; if(q.bottom>U.b)U.b=q.bottom; }
    if(U.l===Infinity) return null;
    /* room for the soft shadow and the little lift on hover */
    /* just enough room for the tilt, tape and string, plus a hair for the shadow: no extra space around the note */
    var need={l:Math.max(0,box.l-U.l)+2, t:Math.max(0,box.t-U.t)+2, r:Math.max(0,U.r-box.r)+2, b:Math.max(0,U.b-box.b)+4};
    if(this._fillOn){ /* box height is set by Wix: bottom room only for the tilt, never for the text */
      var tl=String(this._tilt||getComputedStyle(this._fillMain).getPropertyValue('--tilt')||'0'), dg=parseFloat(tl)||0; if(/rad/.test(tl)) dg=dg*180/Math.PI; if(/turn/.test(tl)) dg=dg*360;
      need.b=Math.abs(Math.sin(dg*Math.PI/180))*hb.width/2+4; }
    var changed=false;
    ['l','t','r','b'].forEach(function(k){ need[k]=Math.ceil(need[k]); if(Math.abs(need[k]-P[k])>1) changed=true; });
    return changed ? need : null;
  }
  _fitApply(need){
    if(!need) return;
    this._fitN=(this._fitN||0)+1; if(this._fitN>6) return;
    this.style.setProperty('padding-left',need.l+'px','important'); this.style.setProperty('padding-right',need.r+'px','important');
    this.style.setProperty('padding-top',need.t+'px','important'); this.style.setProperty('padding-bottom',need.b+'px','important');
    var self=this; clearTimeout(this._fitReset); this._fitReset=setTimeout(function(){ self._fitN=0; },800);
  }
  initPop(){
    if((this.getAttribute('popout')||'').toLowerCase()==='off') return;   /* e.g. inside a Wix lightbox */
    var self=this, notes=this.shadowRoot?this.shadowRoot.querySelectorAll('.note'):[];
    Array.prototype.forEach.call(notes,function(note){
      if(note._bloomPop) return; note._bloomPop=true;
      note.style.cursor='pointer'; note.setAttribute('tabindex','0'); note.setAttribute('role','button');
      note.addEventListener('click',function(e){ if(e.target.closest('a,button')) return; self.openPop(note); });
      note.addEventListener('keydown',function(e){ if(e.target!==note) return; if(e.key==='Enter'||e.key===' '){ e.preventDefault(); self.openPop(note); } });
    });
  }
  openPop(src){
    if((this.getAttribute('popout')||'').toLowerCase()==='off'||this._pop) return;
    var self=this; src=src||this.shadowRoot.querySelector('.note'); var css=this.shadowRoot.querySelector('style').textContent;
    var host=document.createElement('div'); host.setAttribute('data-bloom-pop','');
    var tilt=this._tilt||getComputedStyle(src).getPropertyValue('--tilt'); if(tilt) host.style.setProperty('--tilt',tilt);
    var r=host.attachShadow({mode:'open'});
    var clone=src.cloneNode(true); clone.removeAttribute('tabindex'); clone.removeAttribute('role'); clone.style.cursor='';
    r.innerHTML='<style>'+css+BLOOM_POP_CSS+'</style><div class="wrap"><div class="pop-shade"></div><div class="pop-card" role="dialog" aria-modal="true"><button class="pop-close" type="button" aria-label="close">'+BLOOM_X+'</button></div></div>';
    r.querySelector('.pop-card').appendChild(clone);
    /* the page underneath stays exactly where it is: no scroll locking (which makes Wix jump to the top);
       scrolling is just blocked over the shade, and the spot is restored on close */
    var wrap=r.querySelector('.wrap'), card=r.querySelector('.pop-card'), sx=window.scrollX, sy=window.scrollY;
    var saved=[], n=this; while(n){ if(n.nodeType===1&&(n.scrollTop||n.scrollLeft)) saved.push([n,n.scrollTop,n.scrollLeft]); n=n.parentNode||n.host; }
    var se=document.scrollingElement||document.documentElement; saved.push([se,se.scrollTop,se.scrollLeft]);
    function keep(){ saved.forEach(function(s){ if(Math.abs(s[0].scrollTop-s[1])>1) s[0].scrollTop=s[1]; if(Math.abs(s[0].scrollLeft-s[2])>1) s[0].scrollLeft=s[2]; }); if(Math.abs(window.scrollY-sy)>1) window.scrollTo(sx,sy); }
    function block(e){ var inCard=e.composedPath&&e.composedPath().indexOf(card)>=0; if(inCard&&card.scrollHeight>card.clientHeight+1){
        var dy=e.deltaY||0, top=card.scrollTop<=0, end=card.scrollTop+card.clientHeight>=card.scrollHeight-1;
        if(e.type!=='wheel'||!((dy<0&&top)||(dy>0&&end))) return; }
      e.preventDefault(); }
    host.addEventListener('wheel',block,{passive:false}); host.addEventListener('touchmove',block,{passive:false});
    function close(){
      wrap.classList.remove('open');
      document.removeEventListener('keydown',onKey);
      setTimeout(function(){ host.remove(); self._pop=null; try{src.focus({preventScroll:true})}catch(e){}
        keep(); requestAnimationFrame(keep); }, 280);
    }
    function onKey(e){ if(e.key==='Escape') close(); }
    r.querySelector('.pop-shade').addEventListener('click',close);
    r.querySelector('.pop-close').addEventListener('click',close);
    document.addEventListener('keydown',onKey);
    document.body.appendChild(host);
    this._pop=host;
    keep(); requestAnimationFrame(function(){ keep(); requestAnimationFrame(function(){ keep(); wrap.classList.add('open'); }); }); setTimeout(keep,350);
    try{ r.querySelector('.pop-close').focus({preventScroll:true}); }catch(e){}
  }
}

/* ===================== bloom-letter ===================== */
class BloomLetter extends BloomNote {
  static get observedAttributes(){ return ['tilt']; }
  attributeChangedCallback(){ this.applyTilt(); }
  connectedCallback(){
    if(this.shadowRoot) return;
    var root=this.attachShadow({mode:'open'});
    root.innerHTML = `<style>:host{
  /* ---- fonts ---- */
  --f-display:"Jnr","Gaegu",cursive;       /* headings */
  --f-body:"Agner","Gaegu",cursive;       /* paragraphs */
  --f-script:"Jnr","Gaegu",cursive;         /* little handwritten bits */
  /* ---- colours (matched to bloomandbake.co) ---- */
  --paper:#FFFDF6; --sticky:#FDE9B8; --kraft:#E9D3AE; --cream:#FEFCEC;
  --apricot:#E0A274; --tangerine:#EC8E4C; --cocoa:#35261B; --walnut:#8A5A34; --rule:#EADFC4;
  /* ---- this note's tilt: try anything from -3deg to 3deg ---- */
  --tilt:-1.2deg;
}
*{box-sizing:border-box}
:host{display:block;box-sizing:border-box;background:transparent;container-type:inline-size;pointer-events:none}.note{pointer-events:auto}
:host{padding:28px 22px;font-family:var(--f-body);font-size:18px;line-height:1.75;letter-spacing:.03em;color:var(--cocoa)}
.note{position:relative;background:var(--paper);padding:28px 28px 30px;border-radius:2px;
  box-shadow:0 1px 0 rgba(53,38,27,.06),0 10px 22px -12px rgba(53,38,27,.35);
  transform:rotate(var(--tilt));transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s}
.note:hover{transform:rotate(calc(var(--tilt) * .3)) translateY(-5px);box-shadow:0 20px 34px -16px rgba(53,38,27,.45)}
h2{font-family:var(--f-display);font-weight:400;font-size:clamp(28px,6cqi,36px);line-height:1.05;margin:0 0 10px;text-wrap:balance}
p{margin:0 0 12px} p:last-child{margin-bottom:0}
.small{font-size:13px;color:var(--walnut)}
.tape{position:absolute;top:-12px;left:50%;width:96px;height:26px;margin-left:-48px;background:rgba(236,142,76,.28);transform:rotate(-3deg)}
@media (prefers-reduced-motion:reduce){.note{transition:none}.note:hover{transform:rotate(var(--tilt))}}

/* ---- lined paper: every line of text sits on a rule at any width ----
   --line is the gap between rules. All text uses it as its line height,
   and every gap is a whole number of lines, so nothing drifts off the rules. */
:host{--line:34px; --rule-lift:9px}   /* rule-lift nudges rules up to sit under the letters */
.note{padding:var(--line) 28px var(--line) 48px;
  background-image:linear-gradient(transparent calc(var(--line) - 1.5px),var(--rule) calc(var(--line) - 1.5px));
  background-size:100% var(--line);background-position:0 calc(var(--rule-lift) * -1);background-origin:padding-box}
.note::before{content:"";position:absolute;top:0;bottom:0;left:30px;border-left:1.5px solid rgba(236,142,76,.45)}
.note *{line-height:var(--line)}
.note p,.note div{margin:0}
.note p + p{margin-top:var(--line)}          /* one blank line between paragraphs */
.date{font-family:var(--f-script);color:var(--walnut);font-size:20px}
.dear{font-family:var(--f-display);font-size:30px}
.date + .dear,.dear + p{margin-top:0 !important}
.sign{font-family:var(--f-script);font-size:22px;color:var(--walnut);margin-top:var(--line) !important}
.sign strong{display:block;font-family:var(--f-display);font-weight:400;color:var(--apricot);font-size:32px}
.sig-logo{display:block;width:min(260px,70%);height:auto;margin-top:8px}
[hidden]{display:none!important}
.tape-lilac{background:rgba(167,139,214,.5);left:auto;right:44px;margin-left:0;transform:rotate(5deg)}</style>
<article class="note">
  <span class="tape tape-lilac" aria-hidden="true"></span>
  <!-- \u270f\ufe0f edit the text below -->
  <p class="date">a note from the kitchen</p>
  <p class="dear">dear neighbour,</p>
  <p>thank you for finding your way to our little corner in peckham. once a month we bake a small batch of good things and cut whatever's blooming, and we'd love for some of it to end up on your table.</p>
  <p>orders close the tuesday before each drop weekend, collect on saturday or sunday, and if you'd rather swap than pay, we're always up for a barter.</p>
  <div class="sign">see you soon,<img class="sig-logo" id="sig-logo" alt="bloom and bake" hidden><strong id="sig-text">the bloom &amp; bake crew</strong></div>
</article>
`; this.applyTilt(); this.initPop(); this.initFit(); var me=this; setTimeout(function(){me.applyTilt()},300); this.applyLogo();
  }
  static get observedAttributes(){ return ['tilt','data-tilt','logo']; }
  attributeChangedCallback(n){ if(n==='tilt'||n==='data-tilt'){ this.applyTilt(); return; } this.applyLogo(); }
  applyLogo(){ var r=this.shadowRoot; if(!r) return; var im=r.getElementById('sig-logo'), tx=r.getElementById('sig-text'); if(!im) return;
    var v=(this.getAttribute('logo')||'').trim(); if(v.toLowerCase()==='off'){ im.hidden=true; tx.hidden=false; return; }
    im.src=v||BLOOM_LOGO; im.hidden=false; tx.hidden=true; }
}
if(!customElements.get('bloom-letter')) customElements.define('bloom-letter', BloomLetter);

/* ===================== bloom-drops ===================== */
class BloomDrops extends BloomNote {
  connectedCallback(){
    if(this.shadowRoot) return;
    var root=this.attachShadow({mode:'open'});
    root.innerHTML = `<style>:host{
  /* ---- fonts ---- */
  --f-display:"Jnr","Gaegu",cursive;       /* headings */
  --f-body:"Agner","Gaegu",cursive;       /* paragraphs */
  --f-script:"Jnr","Gaegu",cursive;         /* little handwritten bits */
  /* ---- colours (matched to bloomandbake.co) ---- */
  --paper:#FFFDF6; --sticky:#FDE9B8; --kraft:#E9D3AE; --cream:#FEFCEC;
  --apricot:#E0A274; --tangerine:#EC8E4C; --cocoa:#35261B; --walnut:#8A5A34; --rule:#EADFC4;
  /* ---- this note's tilt: try anything from -3deg to 3deg ---- */
  --tilt:1.6deg;
}
*{box-sizing:border-box}
:host{display:block;box-sizing:border-box;background:transparent;container-type:inline-size;pointer-events:none}.note{pointer-events:auto}
:host{padding:28px 22px;font-family:var(--f-body);font-size:18px;line-height:1.75;letter-spacing:.03em;color:var(--cocoa)}
.note{position:relative;background:var(--paper);padding:28px 28px 30px;border-radius:2px;
  box-shadow:0 1px 0 rgba(53,38,27,.06),0 10px 22px -12px rgba(53,38,27,.35);
  transform:rotate(var(--tilt));transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s}
.note:hover{transform:rotate(calc(var(--tilt) * .3)) translateY(-5px);box-shadow:0 20px 34px -16px rgba(53,38,27,.45)}
h2{font-family:var(--f-display);font-weight:400;font-size:clamp(28px,6cqi,36px);line-height:1.05;margin:0 0 10px;text-wrap:balance}
p{margin:0 0 12px} p:last-child{margin-bottom:0}
.small{font-size:13px;color:var(--walnut)}
.tape{position:absolute;top:-12px;left:50%;width:96px;height:26px;margin-left:-48px;background:rgba(236,142,76,.28);transform:rotate(-3deg)}
@media (prefers-reduced-motion:reduce){.note{transition:none}.note:hover{transform:rotate(var(--tilt))}}

.note{background-image:linear-gradient(var(--tangerine),var(--tangerine));background-size:100% 3px;background-repeat:no-repeat;background-position:0 74px}
h2{margin-bottom:22px}
.lede{margin:0 0 18px}
.half + .half{margin-top:18px;padding-top:16px;border-top:1.5px dashed var(--kraft)}
.half h3{font-family:var(--f-display);font-weight:400;font-size:26px;line-height:1.1;margin:0 0 6px;display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 10px}
.half h3 small{font-family:var(--f-display);font-size:17px;color:var(--walnut)}
.items{list-style:none;margin:0;padding:0;display:grid;gap:2px}
.extras h3{color:var(--tangerine)}
.extras .items li{font-family:var(--f-body);font-size:inherit;color:var(--cocoa);display:flex;gap:8px;align-items:flex-start;line-height:1.45;padding-block:2px}
.star{width:17px;height:17px;flex:none;margin-top:.3em}
.footer{margin:18px 0 0;font-family:var(--f-display);font-size:19px;color:var(--walnut)}
#specials-box{padding-top:4px}
.classics-line{margin:12px 0 0 !important;padding-top:10px;border-top:1.5px dashed var(--kraft);font-family:var(--f-body);font-size:14px;line-height:1.5;color:var(--walnut)}</style>
<article class="note">
  <span class="tape" aria-hidden="true"></span>
  <h2 id="specials-heading">this month's specials</h2>
  <!-- \u270f\ufe0f edit the text below -->
  <div class="half extras" id="specials-box">
    <!-- \u270f\ufe0f change these each month (or connect them to your Wix CMS, see the note at the bottom) -->
    <ul class="items" id="specials">
      <li><svg class="star" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1.8l2.3 5.4 5.9.5-4.5 3.9 1.4 5.8L10 14.3l-5.1 3.1 1.4-5.8L1.8 7.7l5.9-.5z" fill="none" stroke="#EC8E4C" stroke-width="1.6" stroke-linejoin="round"/></svg>pear and ginger galette</li>
      <li><svg class="star" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1.8l2.3 5.4 5.9.5-4.5 3.9 1.4 5.8L10 14.3l-5.1 3.1 1.4-5.8L1.8 7.7l5.9-.5z" fill="none" stroke="#EC8E4C" stroke-width="1.6" stroke-linejoin="round"/></svg>fig and honey tart</li>
      <li><svg class="star" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1.8l2.3 5.4 5.9.5-4.5 3.9 1.4 5.8L10 14.3l-5.1 3.1 1.4-5.8L1.8 7.7l5.9-.5z" fill="none" stroke="#EC8E4C" stroke-width="1.6" stroke-linejoin="round"/></svg>spiced apple scones</li>
    </ul>
    <!-- \u270f\ufe0f the one line about the classics -->
    <p class="classics-line">plus our classics, flowers included, every drop</p>
  </div>
</article>
`; this.applyTilt(); this.initPop(); this.initFit(); var me=this; setTimeout(function(){me.applyTilt()},300); this.applySpecials();
  }
  static get observedAttributes(){ return ['tilt','data-tilt','specials']; }
  attributeChangedCallback(n){ if(n==='tilt'||n==='data-tilt'){ this.applyTilt(); return; } this.applySpecials(); }
  /* page code can send {heading, items} as JSON in the "specials" attribute */
  applySpecials(){
    var raw=this.getAttribute('specials'); if(!raw||!this.shadowRoot) return;
    try{ var d=JSON.parse(raw); }catch(e){ return; }
    var list=this.shadowRoot.getElementById('specials'); if(!list) return;
    if(Array.isArray(d.items)&&d.items.length){
      var star=list.querySelector('svg').outerHTML;
      list.innerHTML='';
      d.items.forEach(function(t){ var li=document.createElement('li'); li.innerHTML=star; li.appendChild(document.createTextNode(String(t))); list.appendChild(li); });
    }
    if(typeof d.heading==='string'&&d.heading){ this.shadowRoot.getElementById('specials-heading').textContent=d.heading; }
  }
}
if(!customElements.get('bloom-drops')) customElements.define('bloom-drops', BloomDrops);

/* ===================== bloom-deadline ===================== */
class BloomDeadline extends BloomNote {
  connectedCallback(){
    if(this.shadowRoot) return;
    var root=this.attachShadow({mode:'open'});
    root.innerHTML = `<style>:host{
  /* ---- fonts ---- */
  --f-display:"Jnr","Gaegu",cursive;       /* headings */
  --f-body:"Agner","Gaegu",cursive;       /* paragraphs */
  --f-script:"Jnr","Gaegu",cursive;         /* little handwritten bits */
  /* ---- colours (matched to bloomandbake.co) ---- */
  --paper:#FFFDF6; --sticky:#FDE9B8; --kraft:#E9D3AE; --cream:#FEFCEC;
  --apricot:#E0A274; --tangerine:#EC8E4C; --cocoa:#35261B; --walnut:#8A5A34; --rule:#EADFC4;
  /* ---- this note's tilt: try anything from -3deg to 3deg ---- */
  --tilt:2.4deg;
}
*{box-sizing:border-box}
:host{display:block;box-sizing:border-box;background:transparent;container-type:inline-size;pointer-events:none}.note{pointer-events:auto}
:host{padding:28px 22px;font-family:var(--f-body);font-size:18px;line-height:1.75;letter-spacing:.03em;color:var(--cocoa)}
.note{position:relative;background:var(--paper);padding:28px 28px 30px;border-radius:2px;
  box-shadow:0 1px 0 rgba(53,38,27,.06),0 10px 22px -12px rgba(53,38,27,.35);
  transform:rotate(var(--tilt));transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s}
.note:hover{transform:rotate(calc(var(--tilt) * .3)) translateY(-5px);box-shadow:0 20px 34px -16px rgba(53,38,27,.45)}
h2{font-family:var(--f-display);font-weight:400;font-size:clamp(28px,6cqi,36px);line-height:1.05;margin:0 0 10px;text-wrap:balance}
p{margin:0 0 12px} p:last-child{margin-bottom:0}
.small{font-size:13px;color:var(--walnut)}
.tape{position:absolute;top:-12px;left:50%;width:96px;height:26px;margin-left:-48px;background:rgba(236,142,76,.28);transform:rotate(-3deg)}
@media (prefers-reduced-motion:reduce){.note{transition:none}.note:hover{transform:rotate(var(--tilt))}}

.note{background:var(--sticky);padding-bottom:22px}
.week{display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin:14px 0 4px;text-align:center;font-family:var(--f-script);font-size:18px}
.week .tue,.week .circ{position:relative;font-weight:700}
.week .tue::after,.week .circ::after{content:"";position:absolute;inset:-6px -4px;border:2px solid var(--tangerine);border-radius:50% 45% 55% 48%;transform:rotate(-8deg)}
.week .squig{color:var(--walnut);text-decoration:underline wavy var(--tangerine) 1.5px;text-underline-offset:5px}
.clock{font-family:var(--f-display);font-size:48px;line-height:1;color:var(--tangerine);margin:8px 0 4px}
.when{font-family:var(--f-display);font-size:28px;line-height:1.2;margin:14px 0 0;text-wrap:balance}
.clock{margin-top:2px!important}
.pickup{font-size:15px;color:var(--walnut);margin-top:6px}
.lead{margin:12px 0 0}

[data-view="closed"] .small{margin-top:10px}
[hidden]{display:none!important}
.drop-date{font-family:var(--f-body);font-size:22px;line-height:1.3;letter-spacing:.04em;margin:2px 0 4px!important;text-wrap:balance}
.pickup-days{font-family:var(--f-body);font-size:18px;color:var(--walnut);margin:8px 0 2px!important}
.week-q{margin-top:26px!important}
.week .q{position:relative}
.week .q::before{content:"?";position:absolute;left:50%;top:-1.35em;font-family:var(--f-script);font-size:20px;font-weight:700;color:var(--tangerine);transform:translateX(-50%) rotate(12deg)}
.week .q:nth-child(6)::before{transform:translateX(-50%) rotate(-10deg)}
.label{font-family:var(--f-display);font-size:24px;line-height:1.2;margin:12px 0 0!important}
.label .when{font:inherit;margin:0;white-space:nowrap}
.stamp-closed{display:inline-block;font-family:var(--f-display);font-size:24px;line-height:1.2;color:var(--tangerine);border:2px solid var(--tangerine);border-radius:10px 14px 9px 13px;padding:2px 12px;margin:14px 0 4px!important;transform:rotate(-3deg)}
.shop-link{display:inline-flex;align-items:center;gap:8px;max-width:100%;box-sizing:border-box;margin-top:16px;font-family:var(--f-body);font-size:15px;line-height:1.3;color:var(--cocoa);text-decoration:none;background:var(--cream);border:2px solid var(--cocoa);border-radius:4px 7px 5px 6px;padding:7px 14px;transform:rotate(-1.5deg);transition:background .2s}
.shop-link .t{min-width:0}
.shop-link .arrow{display:block;width:26px;height:13px;flex:0 0 26px;transition:transform .2s}
.shop-link:hover{background:var(--apricot)}
.shop-link:hover .arrow{transform:translateX(3px)}
.shop-link:focus-visible{outline:3px solid var(--tangerine);outline-offset:3px}</style>
<article class="note">
  <!-- \u270f\ufe0f edit the text below. the dates fill in from your Wix CMS "Drops" collection -->
  <div data-view="open">
    <h2>october drop</h2>
    <div class="week" data-mark="squig" aria-hidden="true"><span>m</span><span class="tue">t</span><span>w</span><span>t</span><span>f</span><span class="squig" data-day="sat">s</span><span class="squig" data-day="sun">s</span></div>
    <p class="label">orders close <span class="when">tue 13 oct</span></p>
    <p class="clock">9:00 pm</p>
    <p class="pickup-days">pick up sat 17 or sun 18 oct</p>
    <!-- \u270f\ufe0f point this at your shop page -->
    <a class="shop-link order-link" href="https://www.bloomandbake.co/category/all-products" target="_top"><span class="t">order now</span><svg class="arrow" viewBox="0 0 28 14" aria-hidden="true"><path d="M1.5 7.6c6-.9 14-.5 22.5-.4M18.5 2.2c2 1.8 4.2 3.4 6.4 5-2.3 1.3-4.6 2.9-6.6 4.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
  </div>
  <div data-view="closed" hidden>
    <h2>october drop</h2>
    <div class="week" data-mark="circ" aria-hidden="true"><span>m</span><span>t</span><span>w</span><span>t</span><span>f</span><span class="circ" data-day="sat">s</span><span class="circ" data-day="sun">s</span></div>
    <p class="stamp-closed">orders closed</p>
    <p class="pickup-days">pick up sat 17 or sun 18 oct</p>
  </div>
  <div data-view="soon" hidden>
    <h2>next drop coming soon</h2>
    <div class="week week-q" aria-hidden="true"><span>m</span><span class="q">t</span><span>w</span><span>t</span><span>f</span><span class="q">s</span><span class="q">s</span></div>
    <p class="lead">we're planning the next menu. the order date will be up here shortly.</p>
  </div>
</article>
`; this.applyTilt(); this.initPop(); this.initFit(); var me=this; setTimeout(function(){me.applyTilt()},300); this.applyDrops(); this.applyLink();
  }
  static get observedAttributes(){ return ['tilt','data-tilt','drops','now','link']; }
  attributeChangedCallback(n){ if(n==='tilt'||n==='data-tilt'){ this.applyTilt(); return; } this.applyDrops(); this.applyLink(); }
  applyLink(){ var u=this.getAttribute('link'); var a=this.shadowRoot&&this.shadowRoot.querySelector('.order-link'); if(u&&a) a.href=u; }
  /* page code can send pickup dates as JSON in the "drops" attribute */
  applyDrops(){
    var raw=this.getAttribute('drops'); if(!raw||!this.shadowRoot) return;
    try{ var dates=JSON.parse(raw); }catch(e){ return; }
    var n=this.getAttribute('now');   /* optional, for previewing a state */
    bloomShowDrop(this.shadowRoot, dates, n?new Date(n):undefined);
  }
}
if(!customElements.get('bloom-deadline')) customElements.define('bloom-deadline', BloomDeadline);

/* bloom-deadline-popup: same card for a Wix lightbox, no tap-to-expand (the lightbox has its own close) */
class BloomDeadlinePopup extends BloomDeadline { connectedCallback(){ this.setAttribute('popout','off'); super.connectedCallback(); } }
if(!customElements.get('bloom-deadline-popup')) customElements.define('bloom-deadline-popup', BloomDeadlinePopup);

/* ===================== bloom-crumbs ===================== */
class BloomCrumbs extends BloomNote {
  connectedCallback(){
    if(this.shadowRoot) return;
    var root=this.attachShadow({mode:'open'});
    root.innerHTML = `<style>:host{
  /* ---- fonts ---- */
  --f-display:"Jnr","Gaegu",cursive;       /* headings */
  --f-body:"Agner","Gaegu",cursive;       /* paragraphs */
  --f-script:"Jnr","Gaegu",cursive;         /* little handwritten bits */
  /* ---- colours (matched to bloomandbake.co) ---- */
  --paper:#FFFDF6; --sticky:#FDE9B8; --kraft:#E9D3AE; --cream:#FEFCEC;
  --apricot:#E0A274; --tangerine:#EC8E4C; --cocoa:#35261B; --walnut:#8A5A34; --rule:#EADFC4;
  /* ---- this note's tilt: try anything from -3deg to 3deg ---- */
  --tilt:-3deg;
}
*{box-sizing:border-box}
:host{display:block;box-sizing:border-box;background:transparent;container-type:inline-size;pointer-events:none}.note{pointer-events:auto}
:host{padding:28px 22px;font-family:var(--f-body);font-size:18px;line-height:1.75;letter-spacing:.03em;color:var(--cocoa)}
.note{position:relative;background:var(--paper);padding:28px 28px 30px;border-radius:2px;
  box-shadow:0 1px 0 rgba(53,38,27,.06),0 10px 22px -12px rgba(53,38,27,.35);
  transform:rotate(var(--tilt));transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s}
.note:hover{transform:rotate(calc(var(--tilt) * .3)) translateY(-5px);box-shadow:0 20px 34px -16px rgba(53,38,27,.45)}
h2{font-family:var(--f-display);font-weight:400;font-size:clamp(28px,6cqi,36px);line-height:1.05;margin:0 0 10px;text-wrap:balance}
p{margin:0 0 12px} p:last-child{margin-bottom:0}
.small{font-size:13px;color:var(--walnut)}
.tape{position:absolute;top:-12px;left:50%;width:96px;height:26px;margin-left:-48px;background:rgba(236,142,76,.28);transform:rotate(-3deg)}
@media (prefers-reduced-motion:reduce){.note{transition:none}.note:hover{transform:rotate(var(--tilt))}}

:host{padding:66px 26px 34px}
.note{background:transparent;isolation:isolate;padding-top:46px;padding-bottom:20px;box-shadow:none;filter:drop-shadow(0 8px 10px rgba(53,38,27,.22))}
.note:hover{box-shadow:none}
.note::after{content:"";position:absolute;inset:0;z-index:-1;background:var(--kraft);border-radius:6px;clip-path:polygon(18% 0,82% 0,100% 12%,100% 100%,0 100%,0 12%)}
.string{position:absolute;top:-50px;left:50%;width:130px;height:78px;margin-left:-30px;pointer-events:none}
/* the whole tag scales with the box width (corner resizer), text and string included */
.note{width:300px;margin:0 auto;zoom:var(--z,1)}
.pop-card .note{zoom:1.15}
.crumbs-when{font:400 20px/1.2 var(--f-display);color:var(--walnut);margin-top:10px!important}
[hidden]{display:none!important}
.note::before{content:"";position:absolute;top:16px;left:50%;width:14px;height:14px;margin-left:-7px;border-radius:50%;background:var(--cream);box-shadow:inset 0 1px 2px rgba(53,38,27,.35)}
.shop-link{display:inline-flex;align-items:center;gap:8px;max-width:100%;box-sizing:border-box;margin-top:4px;font-family:var(--f-body);font-size:15px;line-height:1.3;color:var(--cocoa);text-decoration:none;background:var(--cream);border:2px solid var(--cocoa);border-radius:4px 7px 5px 6px;padding:7px 12px;transform:rotate(-1.5deg);transition:background .2s,transform .2s}
.shop-link .t{min-width:0}
.shop-link .arrow{display:block;width:26px;height:13px;flex:0 0 26px;transition:transform .2s}
.shop-link:hover{background:var(--apricot)}
.shop-link:hover .arrow{transform:translateX(3px)}
.shop-link:focus-visible{outline:3px solid var(--tangerine);outline-offset:3px}</style>
<article class="note">
  <svg class="string" viewBox="0 0 130 78" aria-hidden="true"><path d="M30 73c-9-9-12-21-4-30M30 73c8-10 9-22 1-30M28 43c6-6 14-8 22-12 16-8 24-22 44-25 12-2 22 1 32 4" fill="none" stroke="#A9875F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="28.5" cy="42.5" r="2.6" fill="#A9875F"/></svg>
  <!-- \u270f\ufe0f edit the text below -->
  <h2>crumbs &amp; clippings</h2>
  <p>missed it? whatever is spare, bakes and flower clippings, drops wednesday.</p>
  <!-- \u270f\ufe0f point this at your store menu page -->
  <p id="crumbs-btn" hidden><a class="shop-link" href="https://www.bloomandbake.co/category/all-products" target="_top"><span class="t">first come, first served</span><svg class="arrow" viewBox="0 0 28 14" aria-hidden="true"><path d="M1.5 7.6c6-.9 14-.5 22.5-.4M18.5 2.2c2 1.8 4.2 3.4 6.4 5-2.3 1.3-4.6 2.9-6.6 4.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a></p>
  <p class="crumbs-when" id="crumbs-when" hidden>opens wed</p>
</article>
`; this.applyTilt(); this.initPop(); this.initFit(); var me=this; setTimeout(function(){me.applyTilt()},300); this.applyLink(); this.applyCrumbs(); this.initScale();
  }
  static get observedAttributes(){ return ['tilt','data-tilt','link','drops','now']; }
  attributeChangedCallback(n){ if(n==='tilt'||n==='data-tilt'){ this.applyTilt(); return; } this.applyLink(); this.applyCrumbs(); }
  applyLink(){ var u=this.getAttribute('link'); var a=this.shadowRoot&&this.shadowRoot.querySelector('.shop-link'); if(u&&a) a.href=u; }
  /* page code sends the drop dates; the button only shows wed to fri of drop week */
  applyCrumbs(){
    var r=this.shadowRoot; if(!r) return;
    var btn=r.getElementById('crumbs-btn'), when=r.getElementById('crumbs-when');
    var raw=this.getAttribute('drops'); var dates=null; try{ dates=raw?JSON.parse(raw):null; }catch(e){}
    var n=this.getAttribute('now'); var w=dates?bloomCrumbsWindow(dates, n?new Date(n):undefined):null;
    if(!w){ btn.hidden=true; when.hidden=true; return; }
    btn.hidden=!w.open;
    if(!w.open&&w.opens){ when.textContent='opens '+w.opens; when.hidden=false; } else when.hidden=true;
  }
}
if(!customElements.get('bloom-crumbs')) customElements.define('bloom-crumbs', BloomCrumbs);

/* ===================== bloom-barter ===================== */
class BloomBarter extends BloomNote {
  connectedCallback(){
    if(this.shadowRoot) return;
    var root=this.attachShadow({mode:'open'});
    root.innerHTML = `<style>:host{
  /* ---- fonts ---- */
  --f-display:"Jnr","Gaegu",cursive;       /* headings */
  --f-body:"Agner","Gaegu",cursive;       /* paragraphs */
  --f-script:"Jnr","Gaegu",cursive;         /* little handwritten bits */
  /* ---- colours (matched to bloomandbake.co) ---- */
  --paper:#FFFDF6; --sticky:#FDE9B8; --kraft:#E9D3AE; --cream:#FEFCEC;
  --apricot:#E0A274; --tangerine:#EC8E4C; --cocoa:#35261B; --walnut:#8A5A34; --rule:#EADFC4;
  /* ---- this note's tilt: try anything from -3deg to 3deg ---- */
  --tilt:1deg;
}
*{box-sizing:border-box}
:host{display:block;box-sizing:border-box;background:transparent;container-type:inline-size;pointer-events:none}.note{pointer-events:auto}
:host{padding:28px 22px;font-family:var(--f-body);font-size:18px;line-height:1.75;letter-spacing:.03em;color:var(--cocoa)}
.note{position:relative;background:var(--paper);padding:28px 28px 30px;border-radius:2px;
  box-shadow:0 1px 0 rgba(53,38,27,.06),0 10px 22px -12px rgba(53,38,27,.35);
  transform:rotate(var(--tilt));transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s}
.note:hover{transform:rotate(calc(var(--tilt) * .3)) translateY(-5px);box-shadow:0 20px 34px -16px rgba(53,38,27,.45)}
h2{font-family:var(--f-display);font-weight:400;font-size:clamp(28px,6cqi,36px);line-height:1.05;margin:0 0 10px;text-wrap:balance}
p{margin:0 0 12px} p:last-child{margin-bottom:0}
.small{font-size:13px;color:var(--walnut)}
.tape{position:absolute;top:-12px;left:50%;width:96px;height:26px;margin-left:-48px;background:rgba(236,142,76,.28);transform:rotate(-3deg)}
@media (prefers-reduced-motion:reduce){.note{transition:none}.note:hover{transform:rotate(var(--tilt))}}

.note{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:0 18px}
.tape-l,.tape-r{top:6px;width:84px;height:24px;margin-left:0}
.tape-l{left:-22px;transform:rotate(-36deg)}
.tape-r{left:auto;right:-22px;transform:rotate(36deg)}
.body{min-width:0}
.stamp{width:84px;height:100px;background:var(--cream);border:3px dotted var(--apricot);display:grid;place-items:center;transform:rotate(4deg)}
.stamp svg{width:58px;height:58px}
.side{display:flex;flex-direction:column;justify-content:space-between;gap:20px;border-left:1.5px solid var(--rule);padding-left:16px}
.address{max-width:96px;font-family:var(--f-script);font-size:18px;line-height:1.4;color:var(--walnut);margin:0!important;width:88px;overflow-wrap:break-word}
.trades{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0 0;padding:0;list-style:none}
.trades li{white-space:nowrap;font-family:var(--f-script);font-size:18px;border:1.5px solid var(--walnut);border-radius:999px;padding:0 10px;line-height:1.5}
.shop-link{display:inline-flex;align-items:center;gap:8px;max-width:100%;box-sizing:border-box;margin-top:16px;font-family:var(--f-body);font-size:15px;line-height:1.3;color:var(--cocoa);text-decoration:none;background:var(--cream);border:2px solid var(--cocoa);border-radius:4px 7px 5px 6px;padding:7px 12px;transform:rotate(-1.5deg);transition:background .2s}
.shop-link .t{min-width:0}
.shop-link .arrow{display:block;width:26px;height:13px;flex:0 0 26px;transition:transform .2s}
.shop-link:hover{background:var(--apricot)}
.shop-link:hover .arrow{transform:translateX(3px)}
.shop-link:focus-visible{outline:3px solid var(--tangerine);outline-offset:3px}
@container (max-width:420px){.note{grid-template-columns:minmax(0,1fr)}.side{position:absolute;top:-16px;right:12px;border-left:none;padding-left:0}.stamp{width:62px;height:74px}.stamp svg{width:40px;height:40px}.address{display:none}.body{padding-right:52px}}</style>
<article class="note">
  <span class="tape tape-l" aria-hidden="true"></span><span class="tape tape-r" aria-hidden="true"></span>
  <div class="body">
    <!-- \u270f\ufe0f edit the text below -->
    <h2>fancy a swap?</h2>
    <p>we are open to barters and will select a few each month.</p>
    <ul class="trades"><li>handmade ceramics</li><li>a vinyl</li><li>help on drop day</li></ul>
    <!-- \u270f\ufe0f point this at your barter page -->
    <a class="shop-link" href="https://www.bloomandbake.co/proposeabarter" target="_top"><span class="t">find out more here</span><svg class="arrow" viewBox="0 0 28 14" aria-hidden="true"><path d="M1.5 7.6c6-.9 14-.5 22.5-.4M18.5 2.2c2 1.8 4.2 3.4 6.4 5-2.3 1.3-4.6 2.9-6.6 4.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
  </div>
  <div class="side">
    <div class="stamp" aria-hidden="true">
      <svg viewBox="0 0 60 60"><g fill="#E0A274">
        <ellipse cx="30" cy="14" rx="7" ry="11"/><ellipse cx="30" cy="46" rx="7" ry="11"/>
        <ellipse cx="14" cy="30" rx="11" ry="7"/><ellipse cx="46" cy="30" rx="11" ry="7"/>
        <ellipse cx="19" cy="19" rx="7" ry="10" transform="rotate(-45 19 19)"/><ellipse cx="41" cy="41" rx="7" ry="10" transform="rotate(-45 41 41)"/>
        <ellipse cx="41" cy="19" rx="7" ry="10" transform="rotate(45 41 19)"/><ellipse cx="19" cy="41" rx="7" ry="10" transform="rotate(45 19 41)"/>
      </g><circle cx="30" cy="30" r="7" fill="#EC8E4C"/></svg>
    </div>
    <p class="address">to: the kitchen table, peckham</p>
  </div>
</article>
`; this.applyTilt(); this.initPop(); this.initFit(); var me=this; setTimeout(function(){me.applyTilt()},300); this.applyLink();
  }
  static get observedAttributes(){ return ['tilt','data-tilt','link']; }
  attributeChangedCallback(n){ if(n==='tilt'||n==='data-tilt'){ this.applyTilt(); return; } this.applyLink(); }
  /* optional: set a "link" attribute to change where the button goes */
  applyLink(){ var u=this.getAttribute('link'); var a=this.shadowRoot&&this.shadowRoot.querySelector('.shop-link'); if(u&&a) a.href=u; }
}
if(!customElements.get('bloom-barter')) customElements.define('bloom-barter', BloomBarter);

/* ===================== bloom-polaroid ===================== */
class BloomPolaroid extends BloomNote {
  connectedCallback(){
    if(this.shadowRoot) return;
    var root=this.attachShadow({mode:'open'});
    root.innerHTML = `<style>:host{
  /* ---- fonts ---- */
  --f-display:"Jnr","Gaegu",cursive;       /* headings */
  --f-body:"Agner","Gaegu",cursive;       /* paragraphs */
  --f-script:"Jnr","Gaegu",cursive;         /* little handwritten bits */
  /* ---- colours (matched to bloomandbake.co) ---- */
  --paper:#FFFDF6; --sticky:#FDE9B8; --kraft:#E9D3AE; --cream:#FEFCEC;
  --apricot:#E0A274; --tangerine:#EC8E4C; --cocoa:#35261B; --walnut:#8A5A34; --rule:#EADFC4;
  /* ---- this note's tilt: try anything from -3deg to 3deg ---- */
  --tilt:-2deg;
}
*{box-sizing:border-box}
:host{display:block;box-sizing:border-box;background:transparent;container-type:inline-size;pointer-events:none}.note{pointer-events:auto}
:host{padding:28px 22px;font-family:var(--f-body);font-size:18px;line-height:1.75;letter-spacing:.03em;color:var(--cocoa)}
.note{position:relative;background:var(--paper);padding:28px 28px 30px;border-radius:2px;
  box-shadow:0 1px 0 rgba(53,38,27,.06),0 10px 22px -12px rgba(53,38,27,.35);
  transform:rotate(var(--tilt));transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s}
.note:hover{transform:rotate(calc(var(--tilt) * .3)) translateY(-5px);box-shadow:0 20px 34px -16px rgba(53,38,27,.45)}
h2{font-family:var(--f-display);font-weight:400;font-size:clamp(28px,6cqi,36px);line-height:1.05;margin:0 0 10px;text-wrap:balance}
p{margin:0 0 12px} p:last-child{margin-bottom:0}
.small{font-size:13px;color:var(--walnut)}
.tape{position:absolute;top:-12px;left:50%;width:96px;height:26px;margin-left:-48px;background:rgba(236,142,76,.28);transform:rotate(-3deg)}
@media (prefers-reduced-motion:reduce){.note{transition:none}.note:hover{transform:rotate(var(--tilt))}}
:host{--lilac:rgba(167,139,214,.5);--tapec:rgba(236,142,76,.28)}
[hidden]{display:none!important}
.tape.lilac{background:var(--lilac)}
h2{font-size:28px!important;line-height:1.1}

.note.polaroid{background:#fff;padding:4.4% 4.4% 5.6%;text-align:center;width:100%;box-sizing:border-box;margin:0 auto}
.polaroid .cap{height:84px;display:flex;flex-direction:column;justify-content:center;overflow:hidden}
.polaroid img,.polaroid .ph{display:block;width:100%;aspect-ratio:1/1;object-fit:cover}
.polaroid .ph{background:var(--cream);border:2px dashed var(--rule);display:grid;place-items:center;font-size:14px;color:var(--walnut);padding:20px;box-sizing:border-box}
.polaroid .name{font:400 34px/1 var(--f-display);margin:0 0 4px!important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.polaroid .role{font-size:16px;line-height:1.3;color:var(--walnut);margin:0!important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
</style>
<figure class="note polaroid" style="margin:0 auto">
  <span class="tape" id="tape" aria-hidden="true"></span>
  <img id="photo" alt="" hidden>
  <div class="ph" id="ph">add your photo link in the "photo" attribute</div>
  <div class="cap">
    <p class="name" id="name">name</p>
    <p class="role" id="role">what you make</p>
  </div>
</figure>
`; this.applyTilt(); this.initPop(); this.initFit(); var me=this; setTimeout(function(){me.applyTilt()},300); this.applyPhoto();
  }
  static get observedAttributes(){ return ['tilt','data-tilt','photo','name','role','tape','alt']; }
  attributeChangedCallback(n){ if(n==='tilt'||n==='data-tilt'){ this.applyTilt(); return; } this.applyPhoto(); }
  applyPhoto(){
    var r=this.shadowRoot; if(!r) return;
    var u=this.getAttribute('photo'), img=r.getElementById('photo'), ph=r.getElementById('ph');
    if(u&&img){ img.src=u; img.hidden=false; if(ph) ph.hidden=true; }
    var alt=this.getAttribute('alt'); if(alt!==null&&img) img.alt=alt;
    var set=function(id,a,el){ var v=this.getAttribute(a); if(v!==null&&(el=r.getElementById(id))) el.textContent=v; }.bind(this);
    set('name','name'); set('role','role'); set('caption','caption');
    var tape=r.getElementById('tape'), tc=(this.getAttribute('tape')||'').toLowerCase();
    if(tape&&tc) tape.classList.toggle('lilac', tc==='lilac'||tc==='purple');
  }
}
if(!customElements.get('bloom-polaroid')) customElements.define('bloom-polaroid', BloomPolaroid);

/* ===================== bloom-about ===================== */
class BloomAbout extends BloomNote {
  connectedCallback(){
    if(this.shadowRoot) return;
    var root=this.attachShadow({mode:'open'});
    root.innerHTML = `<style>:host{
  /* ---- fonts ---- */
  --f-display:"Jnr","Gaegu",cursive;       /* headings */
  --f-body:"Agner","Gaegu",cursive;       /* paragraphs */
  --f-script:"Jnr","Gaegu",cursive;         /* little handwritten bits */
  /* ---- colours (matched to bloomandbake.co) ---- */
  --paper:#FFFDF6; --sticky:#FDE9B8; --kraft:#E9D3AE; --cream:#FEFCEC;
  --apricot:#E0A274; --tangerine:#EC8E4C; --cocoa:#35261B; --walnut:#8A5A34; --rule:#EADFC4;
  /* ---- this note's tilt: try anything from -3deg to 3deg ---- */
  --tilt:0deg;
}
*{box-sizing:border-box}
:host{display:block;box-sizing:border-box;background:transparent;container-type:inline-size;pointer-events:none}.note{pointer-events:auto}
:host{padding:28px 22px;font-family:var(--f-body);font-size:18px;line-height:1.75;letter-spacing:.03em;color:var(--cocoa)}
.note{position:relative;background:var(--paper);padding:28px 28px 30px;border-radius:2px;
  box-shadow:0 1px 0 rgba(53,38,27,.06),0 10px 22px -12px rgba(53,38,27,.35);
  transform:rotate(var(--tilt));transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s}
.note:hover{transform:rotate(calc(var(--tilt) * .3)) translateY(-5px);box-shadow:0 20px 34px -16px rgba(53,38,27,.45)}
h2{font-family:var(--f-display);font-weight:400;font-size:clamp(28px,6cqi,36px);line-height:1.05;margin:0 0 10px;text-wrap:balance}
p{margin:0 0 12px} p:last-child{margin-bottom:0}
.small{font-size:13px;color:var(--walnut)}
.tape{position:absolute;top:-12px;left:50%;width:96px;height:26px;margin-left:-48px;background:rgba(236,142,76,.28);transform:rotate(-3deg)}
@media (prefers-reduced-motion:reduce){.note{transition:none}.note:hover{transform:rotate(var(--tilt))}}
:host{--lilac:rgba(167,139,214,.5);--tapec:rgba(236,142,76,.28)}
[hidden]{display:none!important}
.tape.lilac{background:var(--lilac)}
h2{font-size:28px!important;line-height:1.1}
.dots{margin:0;padding:0;list-style:none;font-size:16px}
.dots li{padding-left:16px;position:relative;margin-bottom:4px}
.dots li::before{content:"";position:absolute;left:2px;top:.75em;width:6px;height:6px;border-radius:50%;background:var(--tangerine)}
.pill-link{display:inline-flex;align-items:center;gap:8px;max-width:100%;box-sizing:border-box;font-family:var(--f-body);font-size:15px;line-height:1.3;color:var(--cocoa);text-decoration:none;background:var(--paper);border:2px solid var(--cocoa);border-radius:4px 7px 5px 6px;padding:6px 12px;transform:rotate(-1.5deg)}
.pill-link span{min-width:0}
.pill-link svg{display:block;width:24px;height:12px;flex:0 0 24px;transition:transform .2s}
.pill-link:hover{background:var(--apricot)}
.pill-link:hover svg{transform:translateX(3px)}
.pill-link:focus-visible{outline:3px solid var(--tangerine);outline-offset:3px}

.postits{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:30px 28px;align-items:stretch}
.note.postit{background:var(--pi);padding:22px 22px 26px;border-radius:1px 1px 3px 14px/1px 1px 3px 6px;box-shadow:0 1px 0 rgba(53,38,27,.05),6px 12px 18px -14px rgba(53,38,27,.45)}
.postit h2{margin-bottom:8px!important}
.postit p{font-size:16px}
.postit .dots{margin-bottom:12px}
.gallery{display:none}
.pop-card .gallery{display:block;margin-top:18px}
.pop-card .see-work{display:none!important}
.see-work{margin-top:4px}
.g-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px 18px;margin:6px 0 18px}
.g-item{position:relative;margin:0;background:#fff;padding:8px 8px 10px;box-shadow:0 10px 18px -12px rgba(53,38,27,.5);transform:rotate(var(--gt,-1.5deg))}
.g-item:nth-child(even){--gt:1.8deg}
.g-item img{display:block;width:100%;aspect-ratio:1/1;object-fit:cover;background:var(--cream)}
.g-item figcaption{font:400 16px/1.25 var(--f-display);color:var(--walnut);text-align:center;margin-top:7px}
.g-item .tape{width:60px;height:20px;margin-left:-30px;top:-10px}
.g-grid:has(.g-item:only-child){grid-template-columns:minmax(0,1fr)}
@container (max-width:480px){.g-grid{grid-template-columns:minmax(0,1fr)}}
@container (max-width:760px){.postits{grid-template-columns:repeat(2,minmax(0,1fr))}}
@container (max-width:480px){.postits{grid-template-columns:minmax(0,1fr)}}
</style>
<div class="postits">
  <!-- \u270f\ufe0f edit the text below. change a note's colour with --pi -->
  <article class="note postit" style="--pi:#FDE9B8;--tilt:-1deg">
    <h2>who</h2>
    <p>junior is a singer songwriter from hackney. aigner is a multidisciplinary artist from brooklyn, cosplaying as a tech bro.</p>
  </article>
  <article class="note postit" style="--pi:#FAD9C4;--tilt:.8deg">
    <h2>what</h2>
    <p>a monthly drop of baked goods and floral arrangements. all made from scratch, with care.</p>
  </article>
  <article class="note postit" style="--pi:#E7DDF4;--tilt:-.6deg">
    <h2>why</h2>
    <p>we love the simple things. for us, a little treat or a bunch of flowers can turn a day around. aigner is always baking. junior is always arranging flowers.</p>
    <p>bloom and bake came about naturally, out of things we already love.</p>
  </article>
  <article class="note postit" style="--pi:#DFE8D2;--tilt:1deg">
    <h2>where &amp; when</h2>
    <p>peckham rye.</p>
    <p>once a month. weekend pickup, order by the thursday before.</p>
  </article>
  <article class="note postit" style="--pi:#F7DCDD;--tilt:-.8deg">
    <h2>barters</h2>
    <p>we don't want price to be a barrier, so we're always open to trading. some ideas:</p>
    <ul class="dots"><li>a pottery or ceramics lesson</li><li>handmade plates, vases, mugs (anything for the table)</li><li>kitchen time</li></ul>
    <a class="pill-link" href="https://www.bloomandbake.co/proposeabarter" target="_top"><span>how barters work</span><svg viewBox="0 0 28 14" aria-hidden="true"><path d="M1.5 7.6c6-.9 14-.5 22.5-.4M18.5 2.2c2 1.8 4.2 3.4 6.4 5-2.3 1.3-4.6 2.9-6.6 4.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
  </article>
  <article class="note postit" id="collabs" style="--pi:#FDE9B8;--tilt:.6deg">
    <h2>collabs</h2>
    <p>we love a creative project. we've made bouquets and bakes for celebrations and events. check out our most recent work: the florals for a wedding in chicago.</p>
    <p>got something in mind? let's make something together.</p>
    <span class="pill-link see-work" id="see-work" hidden><span>see our work</span><svg viewBox="0 0 28 14" aria-hidden="true"><path d="M1.5 7.6c6-.9 14-.5 22.5-.4M18.5 2.2c2 1.8 4.2 3.4 6.4 5-2.3 1.3-4.6 2.9-6.6 4.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
    <div class="gallery" id="gallery">
      <div class="g-grid" id="g-grid"></div>
      <a class="pill-link" id="collab-link" href="#" target="_top" hidden><span>plan a collab</span><svg viewBox="0 0 28 14" aria-hidden="true"><path d="M1.5 7.6c6-.9 14-.5 22.5-.4M18.5 2.2c2 1.8 4.2 3.4 6.4 5-2.3 1.3-4.6 2.9-6.6 4.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
    </div>
  </article>
</div>
`; this.applyTilt(); this.initPop(); this.initFit(); var me=this; setTimeout(function(){me.applyTilt()},300); this.applyLink();
  }
  static get observedAttributes(){ return ['tilt','data-tilt','link','collab-link','collab-photos','collab-photo']; }
  attributeChangedCallback(n){ if(n==='tilt'||n==='data-tilt'){ this.applyTilt(); return; } this.applyLink(); }
  /* link: barters button   collab-link: where 'plan a collab' goes (hidden until set)
     collab-photos: photos for the collabs gallery, as  url | caption ; url | caption  (caption optional) */
  applyLink(){ var r=this.shadowRoot; if(!r) return; var u=this.getAttribute('link'), a=r.querySelector('.postit:not(#collabs) .pill-link'); if(u&&a) a.href=u;
    var cl=this.getAttribute('collab-link'), ca=r.getElementById('collab-link'); if(ca){ if(cl){ ca.href=cl; ca.hidden=false; } else ca.hidden=true; }
    var raw=this.getAttribute('collab-photos')||this.getAttribute('collab-photo')||BLOOM_COLLAB_PHOTOS, items=[];
    try{ var j=JSON.parse(raw); if(Array.isArray(j)) items=j.map(function(x){ return typeof x==='string'?{src:x}:{src:x.src||x.url||x.photo,cap:x.caption||x.cap||''}; }); }catch(err){
      raw.split(/[;\n]+/).forEach(function(s){ s=s.trim(); if(!s) return; var p=s.split('|'); items.push({src:p[0].trim(),cap:(p[1]||'').trim()}); }); }
    items=items.filter(function(x){ return x&&x.src; });
    var g=r.getElementById('g-grid'), see=r.getElementById('see-work'); if(!g) return; g.innerHTML='';
    items.forEach(function(x){ var f=document.createElement('figure'); f.className='g-item'; var t=document.createElement('span'); t.className='tape'+(g.children.length%2?' lilac':''); var im=document.createElement('img'); im.src=x.src; im.alt=x.cap||'our work'; im.loading='lazy'; f.appendChild(t); f.appendChild(im); if(x.cap){ var c=document.createElement('figcaption'); c.textContent=x.cap; f.appendChild(c); } g.appendChild(f); });
    if(see) see.hidden=!items.length; }
}
if(!customElements.get('bloom-about')) customElements.define('bloom-about', BloomAbout);

/* ===================== bloom-ps ===================== */
class BloomPs extends BloomNote {
  connectedCallback(){
    if(this.shadowRoot) return;
    var root=this.attachShadow({mode:'open'});
    root.innerHTML = `<style>:host{
  /* ---- fonts ---- */
  --f-display:"Jnr","Gaegu",cursive;       /* headings */
  --f-body:"Agner","Gaegu",cursive;       /* paragraphs */
  --f-script:"Jnr","Gaegu",cursive;         /* little handwritten bits */
  /* ---- colours (matched to bloomandbake.co) ---- */
  --paper:#FFFDF6; --sticky:#FDE9B8; --kraft:#E9D3AE; --cream:#FEFCEC;
  --apricot:#E0A274; --tangerine:#EC8E4C; --cocoa:#35261B; --walnut:#8A5A34; --rule:#EADFC4;
  /* ---- this note's tilt: try anything from -3deg to 3deg ---- */
  --tilt:-.6deg;
}
*{box-sizing:border-box}
:host{display:block;box-sizing:border-box;background:transparent;container-type:inline-size;pointer-events:none}.note{pointer-events:auto}
:host{padding:28px 22px;font-family:var(--f-body);font-size:18px;line-height:1.75;letter-spacing:.03em;color:var(--cocoa)}
.note{position:relative;background:var(--paper);padding:28px 28px 30px;border-radius:2px;
  box-shadow:0 1px 0 rgba(53,38,27,.06),0 10px 22px -12px rgba(53,38,27,.35);
  transform:rotate(var(--tilt));transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s}
.note:hover{transform:rotate(calc(var(--tilt) * .3)) translateY(-5px);box-shadow:0 20px 34px -16px rgba(53,38,27,.45)}
h2{font-family:var(--f-display);font-weight:400;font-size:clamp(28px,6cqi,36px);line-height:1.05;margin:0 0 10px;text-wrap:balance}
p{margin:0 0 12px} p:last-child{margin-bottom:0}
.small{font-size:13px;color:var(--walnut)}
.tape{position:absolute;top:-12px;left:50%;width:96px;height:26px;margin-left:-48px;background:rgba(236,142,76,.28);transform:rotate(-3deg)}
@media (prefers-reduced-motion:reduce){.note{transition:none}.note:hover{transform:rotate(var(--tilt))}}
:host{--lilac:rgba(167,139,214,.5);--tapec:rgba(236,142,76,.28)}
[hidden]{display:none!important}
.tape.lilac{background:var(--lilac)}
h2{font-size:28px!important;line-height:1.1}
.banner-wrap{position:relative;margin:0 auto;transform:rotate(var(--tilt));filter:drop-shadow(0 8px 10px rgba(53,38,27,.18))}
.banner-wrap .corner-tl,.banner-wrap .corner-tr{top:2px;width:86px;height:24px;margin-left:0}
.banner-wrap .corner-tl{left:-20px;transform:rotate(-34deg)}
.banner-wrap .corner-tr{left:auto;right:-20px;transform:rotate(34deg)}
.banner{position:relative;background:var(--paper);padding:24px clamp(30px,6cqi,72px);clip-path:polygon(0 6%,3% 0,97% 4%,100% 0,99% 52%,100% 100%,96% 94%,4% 100%,0 96%,1% 48%)}
.banner p{font-family:var(--f-body);font-size:clamp(16px,2.2cqi,20px);line-height:1.6;margin:0;text-align:center}
.banner .sub{margin-top:8px!important;font-size:clamp(14px,1.9cqi,17px);color:var(--walnut)}
.ps-mark{font-family:var(--f-display);font-size:1.4em;color:var(--tangerine);margin-right:6px}
</style>
<aside class="banner-wrap">
  <div class="banner">
    <!-- \u270f\ufe0f edit the text below -->
    <p><span class="ps-mark">p.s.</span> eventually we'd love a dedicated space. part art space, part flower shop, part cafe. that's what we're building towards.</p>
  </div>
  <span class="tape corner-tl" aria-hidden="true"></span>
  <span class="tape lilac corner-tr" aria-hidden="true"></span>
</aside>
`; this.applyTilt(); this.initPop(); this.initFit(); var me=this; setTimeout(function(){me.applyTilt()},300);
  }
}
if(!customElements.get('bloom-ps')) customElements.define('bloom-ps', BloomPs);

/* ===================== bloom-barter-intro ===================== */
class BloomBarterIntro extends BloomNote {
  connectedCallback(){
    if(this.shadowRoot) return;
    var root=this.attachShadow({mode:'open'});
    root.innerHTML = `<style>:host{
  /* ---- fonts ---- */
  --f-display:"Jnr","Gaegu",cursive;       /* headings */
  --f-body:"Agner","Gaegu",cursive;       /* paragraphs */
  --f-script:"Jnr","Gaegu",cursive;         /* little handwritten bits */
  /* ---- colours (matched to bloomandbake.co) ---- */
  --paper:#FFFDF6; --sticky:#FDE9B8; --kraft:#E9D3AE; --cream:#FEFCEC;
  --apricot:#E0A274; --tangerine:#EC8E4C; --cocoa:#35261B; --walnut:#8A5A34; --rule:#EADFC4;
  /* ---- this note's tilt: try anything from -3deg to 3deg ---- */
  --tilt:.5deg;
}
*{box-sizing:border-box}
:host{display:block;box-sizing:border-box;background:transparent;container-type:inline-size;pointer-events:none}.note{pointer-events:auto}
:host{padding:28px 22px;font-family:var(--f-body);font-size:18px;line-height:1.75;letter-spacing:.03em;color:var(--cocoa)}
.note{position:relative;background:var(--paper);padding:28px 28px 30px;border-radius:2px;
  box-shadow:0 1px 0 rgba(53,38,27,.06),0 10px 22px -12px rgba(53,38,27,.35);
  transform:rotate(var(--tilt));transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s}
.note:hover{transform:rotate(calc(var(--tilt) * .3)) translateY(-5px);box-shadow:0 20px 34px -16px rgba(53,38,27,.45)}
h2{font-family:var(--f-display);font-weight:400;font-size:clamp(28px,6cqi,36px);line-height:1.05;margin:0 0 10px;text-wrap:balance}
p{margin:0 0 12px} p:last-child{margin-bottom:0}
.small{font-size:13px;color:var(--walnut)}
.tape{position:absolute;top:-12px;left:50%;width:96px;height:26px;margin-left:-48px;background:rgba(236,142,76,.28);transform:rotate(-3deg)}
@media (prefers-reduced-motion:reduce){.note{transition:none}.note:hover{transform:rotate(var(--tilt))}}
:host{--lilac:rgba(167,139,214,.5);--tapec:rgba(236,142,76,.28)}
[hidden]{display:none!important}
.tape.lilac{background:var(--lilac)}
h2{font-size:28px!important;line-height:1.1}
.banner-wrap{position:relative;margin:0 auto;transform:rotate(var(--tilt));filter:drop-shadow(0 8px 10px rgba(53,38,27,.18))}
.banner-wrap .corner-tl,.banner-wrap .corner-tr{top:2px;width:86px;height:24px;margin-left:0}
.banner-wrap .corner-tl{left:-20px;transform:rotate(-34deg)}
.banner-wrap .corner-tr{left:auto;right:-20px;transform:rotate(34deg)}
.banner{position:relative;background:var(--paper);padding:24px clamp(30px,6cqi,72px);clip-path:polygon(0 6%,3% 0,97% 4%,100% 0,99% 52%,100% 100%,96% 94%,4% 100%,0 96%,1% 48%)}
.banner p{font-family:var(--f-body);font-size:clamp(16px,2.2cqi,20px);line-height:1.6;margin:0;text-align:center}
.banner .sub{margin-top:8px!important;font-size:clamp(14px,1.9cqi,17px);color:var(--walnut)}
.ps-mark{font-family:var(--f-display);font-size:1.4em;color:var(--tangerine);margin-right:6px}
</style>
<aside class="banner-wrap">
  <div class="banner">
    <!-- \u270f\ufe0f edit the text below -->
    <p>we don't want price to be a barrier. if you've got something to trade, we're listening. we especially love handmade goods, a lesson and art.</p>
    <p class="sub">we're always open to ideas, so don't be shy! here's roughly how we're thinking about it.</p>
  </div>
  <span class="tape corner-tl" aria-hidden="true"></span>
  <span class="tape lilac corner-tr" aria-hidden="true"></span>
</aside>
`; this.applyTilt(); this.initPop(); this.initFit(); var me=this; setTimeout(function(){me.applyTilt()},300);
  }
}
if(!customElements.get('bloom-barter-intro')) customElements.define('bloom-barter-intro', BloomBarterIntro);

/* ===================== bloom-tiers ===================== */
class BloomTiers extends BloomNote {
  connectedCallback(){
    if(this.shadowRoot) return;
    var root=this.attachShadow({mode:'open'});
    root.innerHTML = `<style>:host{
  /* ---- fonts ---- */
  --f-display:"Jnr","Gaegu",cursive;       /* headings */
  --f-body:"Agner","Gaegu",cursive;       /* paragraphs */
  --f-script:"Jnr","Gaegu",cursive;         /* little handwritten bits */
  /* ---- colours (matched to bloomandbake.co) ---- */
  --paper:#FFFDF6; --sticky:#FDE9B8; --kraft:#E9D3AE; --cream:#FEFCEC;
  --apricot:#E0A274; --tangerine:#EC8E4C; --cocoa:#35261B; --walnut:#8A5A34; --rule:#EADFC4;
  /* ---- this note's tilt: try anything from -3deg to 3deg ---- */
  --tilt:0deg;
}
*{box-sizing:border-box}
:host{display:block;box-sizing:border-box;background:transparent;container-type:inline-size;pointer-events:none}.note{pointer-events:auto}
:host{padding:28px 22px;font-family:var(--f-body);font-size:18px;line-height:1.75;letter-spacing:.03em;color:var(--cocoa)}
.note{position:relative;background:var(--paper);padding:28px 28px 30px;border-radius:2px;
  box-shadow:0 1px 0 rgba(53,38,27,.06),0 10px 22px -12px rgba(53,38,27,.35);
  transform:rotate(var(--tilt));transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s}
.note:hover{transform:rotate(calc(var(--tilt) * .3)) translateY(-5px);box-shadow:0 20px 34px -16px rgba(53,38,27,.45)}
h2{font-family:var(--f-display);font-weight:400;font-size:clamp(28px,6cqi,36px);line-height:1.05;margin:0 0 10px;text-wrap:balance}
p{margin:0 0 12px} p:last-child{margin-bottom:0}
.small{font-size:13px;color:var(--walnut)}
.tape{position:absolute;top:-12px;left:50%;width:96px;height:26px;margin-left:-48px;background:rgba(236,142,76,.28);transform:rotate(-3deg)}
@media (prefers-reduced-motion:reduce){.note{transition:none}.note:hover{transform:rotate(var(--tilt))}}
:host{--lilac:rgba(167,139,214,.5);--tapec:rgba(236,142,76,.28)}
[hidden]{display:none!important}
.tape.lilac{background:var(--lilac)}
h2{font-size:28px!important;line-height:1.1}

:host{padding-top:70px!important}
.tiers{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:64px 26px;align-items:start}
.note.tag{background:transparent;isolation:isolate;padding:46px 22px 22px;box-shadow:none;filter:drop-shadow(0 8px 10px rgba(53,38,27,.22))}
.note.tag:hover{box-shadow:none}
.tag::after{content:"";position:absolute;inset:0;z-index:-1;background:var(--kraft);border-radius:6px;clip-path:polygon(18% 0,82% 0,100% 10%,100% 100%,0 100%,0 10%)}
.tag::before{content:"";position:absolute;top:16px;left:50%;width:14px;height:14px;margin-left:-7px;border-radius:50%;background:var(--cream);box-shadow:inset 0 1px 2px rgba(53,38,27,.35)}
.string{position:absolute;top:-50px;left:50%;width:130px;height:78px;margin-left:-30px;pointer-events:none}
.tag h2{text-align:center}
.gets-line{font-size:16px;text-align:center;margin:0 0 4px!important;text-wrap:balance}
.label{font:400 19px/1.2 var(--f-display);color:var(--walnut);margin:16px 0 4px!important}
.swaps{margin:0;padding:0;list-style:none;font-family:var(--f-body);font-size:15px;line-height:1.5}
.swaps li{padding:6px 0 6px 18px;position:relative;border-top:1.5px dashed rgba(138,90,52,.3)}
.swaps li:first-child{border-top:none}
.swaps li::before{content:"";position:absolute;left:2px;top:14px;width:7px;height:7px;border-radius:50%;background:var(--tangerine)}
@container (max-width:760px){.tiers{grid-template-columns:minmax(0,1fr)}.note.tag{max-width:440px;width:100%;margin:0 auto}}
</style>
<div class="tiers">
  <!-- \u270f\ufe0f edit the text below -->
  <article class="note tag" style="--tilt:-2deg">
    <svg class="string" viewBox="0 0 130 78" aria-hidden="true"><path d="M30 73c-9-9-12-21-4-30M30 73c8-10 9-22 1-30M28 43c6-6 14-8 22-12 16-8 24-22 44-25 12-2 22 1 32 4" fill="none" stroke="#A9875F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="28.5" cy="42.5" r="2.6" fill="#A9875F"/></svg>
    <h2>for a single item</h2>
    <p class="gets-line">a slice, a cinnamon roll, a box of shortbread or a small bouquet</p>
    <p class="label">swap ideas</p>
    <ul class="swaps"><li>something small and handmade, like a mug</li><li>a record or cd you're willing to part with (we love jazz, r&amp;b, soul)</li><li>a short intro lesson in something you know</li></ul>
  </article>
  <article class="note tag" style="--tilt:1.2deg">
    <svg class="string" viewBox="0 0 130 78" aria-hidden="true"><path d="M30 73c-9-9-12-21-4-30M30 73c8-10 9-22 1-30M28 43c6-6 14-8 22-12 16-8 24-22 44-25 12-2 22 1 32 4" fill="none" stroke="#A9875F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="28.5" cy="42.5" r="2.6" fill="#A9875F"/></svg>
    <h2>for a package</h2>
    <p class="gets-line">sweet thing, sunday morning or real love</p>
    <p class="label">swap ideas</p>
    <ul class="swaps"><li>a proper lesson: pilates, training, pottery, swimming, gardening</li><li>a nice vase</li><li>help with social media content</li></ul>
  </article>
  <article class="note tag" style="--tilt:-1deg">
    <svg class="string" viewBox="0 0 130 78" aria-hidden="true"><path d="M30 73c-9-9-12-21-4-30M30 73c8-10 9-22 1-30M28 43c6-6 14-8 22-12 16-8 24-22 44-25 12-2 22 1 32 4" fill="none" stroke="#A9875F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="28.5" cy="42.5" r="2.6" fill="#A9875F"/></svg>
    <h2>for something bigger</h2>
    <p class="gets-line">a whole cake, a whole quiche, a loaf or flowers for an event</p>
    <p class="label">swap ideas</p>
    <ul class="swaps"><li>2\u20133 lessons of something you're good at</li><li>studio space or time</li><li>artwork</li></ul>
  </article>
</div>
`; this.applyTilt(); this.initPop(); this.initFit(); var me=this; setTimeout(function(){me.applyTilt()},300);
  }
}
if(!customElements.get('bloom-tiers')) customElements.define('bloom-tiers', BloomTiers);

/* ===================== bloom-howto ===================== */
class BloomHowto extends BloomNote {
  connectedCallback(){
    if(this.shadowRoot) return;
    var root=this.attachShadow({mode:'open'});
    root.innerHTML = `<style>:host{
  /* ---- fonts ---- */
  --f-display:"Jnr","Gaegu",cursive;       /* headings */
  --f-body:"Agner","Gaegu",cursive;       /* paragraphs */
  --f-script:"Jnr","Gaegu",cursive;         /* little handwritten bits */
  /* ---- colours (matched to bloomandbake.co) ---- */
  --paper:#FFFDF6; --sticky:#FDE9B8; --kraft:#E9D3AE; --cream:#FEFCEC;
  --apricot:#E0A274; --tangerine:#EC8E4C; --cocoa:#35261B; --walnut:#8A5A34; --rule:#EADFC4;
  /* ---- this note's tilt: try anything from -3deg to 3deg ---- */
  --tilt:-.6deg;
}
*{box-sizing:border-box}
:host{display:block;box-sizing:border-box;background:transparent;container-type:inline-size;pointer-events:none}.note{pointer-events:auto}
:host{padding:28px 22px;font-family:var(--f-body);font-size:18px;line-height:1.75;letter-spacing:.03em;color:var(--cocoa)}
.note{position:relative;background:var(--paper);padding:28px 28px 30px;border-radius:2px;
  box-shadow:0 1px 0 rgba(53,38,27,.06),0 10px 22px -12px rgba(53,38,27,.35);
  transform:rotate(var(--tilt));transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s}
.note:hover{transform:rotate(calc(var(--tilt) * .3)) translateY(-5px);box-shadow:0 20px 34px -16px rgba(53,38,27,.45)}
h2{font-family:var(--f-display);font-weight:400;font-size:clamp(28px,6cqi,36px);line-height:1.05;margin:0 0 10px;text-wrap:balance}
p{margin:0 0 12px} p:last-child{margin-bottom:0}
.small{font-size:13px;color:var(--walnut)}
.tape{position:absolute;top:-12px;left:50%;width:96px;height:26px;margin-left:-48px;background:rgba(236,142,76,.28);transform:rotate(-3deg)}
@media (prefers-reduced-motion:reduce){.note{transition:none}.note:hover{transform:rotate(var(--tilt))}}
:host{--lilac:rgba(167,139,214,.5);--tapec:rgba(236,142,76,.28)}
[hidden]{display:none!important}
.tape.lilac{background:var(--lilac)}
h2{font-size:28px!important;line-height:1.1}

.howto{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,.9fr);gap:36px;align-items:start}
.note.recipe{padding:24px 28px 30px;background-image:linear-gradient(var(--tangerine),var(--tangerine)),linear-gradient(transparent 31px,var(--rule) 31px);background-size:100% 2px,100% 32px;background-repeat:no-repeat,repeat;background-position:0 74px,0 84px}
.recipe h2{margin-bottom:26px!important}
.steps{margin:0;padding:0;list-style:none;counter-reset:s}
.steps li{counter-increment:s;display:grid;grid-template-columns:30px minmax(0,1fr);line-height:32px;font-family:var(--f-body);font-size:16px}
.steps li::before{content:counter(s);font:700 17px/32px var(--f-body);color:var(--tangerine)}
.note.shot{background:#fff;padding:10px 10px 14px;margin:10px auto 0;max-width:360px;width:100%}
.shot img,.shot .ph{display:block;width:100%;height:auto}
.shot .ph{aspect-ratio:3/2;background:var(--cream);border:2px dashed var(--rule);display:grid;place-items:center;font-size:14px;color:var(--walnut);padding:16px;box-sizing:border-box;text-align:center}
.shot figcaption{font:400 17px/1.2 var(--f-display);color:var(--walnut);margin-top:8px;text-align:center}
@container (max-width:700px){.howto{grid-template-columns:minmax(0,1fr)}}
</style>
<div class="howto">
  <!-- \u270f\ufe0f edit the text below -->
  <article class="note recipe">
    <span class="tape" aria-hidden="true"></span>
    <h2>how it works</h2>
    <ol class="steps">
      <li><span>add your items to your cart as normal</span></li>
      <li><span>view cart and select "propose a barter"</span></li>
      <li><span>write in what you'd like to trade</span></li>
      <li><span>go to checkout, pick your delivery day and select "manual payment"</span></li>
      <li><span>place your order before the cutoff</span></li>
      <li><span>we'll review and get back to you with confirmation</span></li>
    </ol>
  </article>
  <figure class="note shot" style="--tilt:2.2deg">
    <span class="tape lilac" aria-hidden="true"></span>
    <img id="photo" alt="your cart, showing the box to write in your proposed trade" hidden>
    <div class="ph" id="ph">add your screenshot link in the "photo" attribute</div>
    <figcaption id="caption">write your trade here</figcaption>
  </figure>
</div>
`; this.applyTilt(); this.initPop(); this.initFit(); var me=this; setTimeout(function(){me.applyTilt()},300); this.applyPhoto();
  }
  static get observedAttributes(){ return ['tilt','data-tilt','photo','caption','alt']; }
  attributeChangedCallback(n){ if(n==='tilt'||n==='data-tilt'){ this.applyTilt(); return; } this.applyPhoto(); }
  applyPhoto(){
    var r=this.shadowRoot; if(!r) return;
    var u=this.getAttribute('photo'), img=r.getElementById('photo'), ph=r.getElementById('ph');
    if(u&&img){ img.src=u; img.hidden=false; if(ph) ph.hidden=true; }
    var alt=this.getAttribute('alt'); if(alt!==null&&img) img.alt=alt;
    var set=function(id,a,el){ var v=this.getAttribute(a); if(v!==null&&(el=r.getElementById(id))) el.textContent=v; }.bind(this);
    set('name','name'); set('role','role'); set('caption','caption');
    var tape=r.getElementById('tape'), tc=(this.getAttribute('tape')||'').toLowerCase();
    if(tape&&tc) tape.classList.toggle('lilac', tc==='lilac'||tc==='purple');
  }
}
if(!customElements.get('bloom-howto')) customElements.define('bloom-howto', BloomHowto);

/* ===================== bloom-good-to-know ===================== */
class BloomGoodToKnow extends BloomNote {
  connectedCallback(){
    if(this.shadowRoot) return;
    var root=this.attachShadow({mode:'open'});
    root.innerHTML = `<style>:host{
  /* ---- fonts ---- */
  --f-display:"Jnr","Gaegu",cursive;       /* headings */
  --f-body:"Agner","Gaegu",cursive;       /* paragraphs */
  --f-script:"Jnr","Gaegu",cursive;         /* little handwritten bits */
  /* ---- colours (matched to bloomandbake.co) ---- */
  --paper:#FFFDF6; --sticky:#FDE9B8; --kraft:#E9D3AE; --cream:#FEFCEC;
  --apricot:#E0A274; --tangerine:#EC8E4C; --cocoa:#35261B; --walnut:#8A5A34; --rule:#EADFC4;
  /* ---- this note's tilt: try anything from -3deg to 3deg ---- */
  --tilt:1deg;
}
*{box-sizing:border-box}
:host{display:block;box-sizing:border-box;background:transparent;container-type:inline-size;pointer-events:none}.note{pointer-events:auto}
:host{padding:28px 22px;font-family:var(--f-body);font-size:18px;line-height:1.75;letter-spacing:.03em;color:var(--cocoa)}
.note{position:relative;background:var(--paper);padding:28px 28px 30px;border-radius:2px;
  box-shadow:0 1px 0 rgba(53,38,27,.06),0 10px 22px -12px rgba(53,38,27,.35);
  transform:rotate(var(--tilt));transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s}
.note:hover{transform:rotate(calc(var(--tilt) * .3)) translateY(-5px);box-shadow:0 20px 34px -16px rgba(53,38,27,.45)}
h2{font-family:var(--f-display);font-weight:400;font-size:clamp(28px,6cqi,36px);line-height:1.05;margin:0 0 10px;text-wrap:balance}
p{margin:0 0 12px} p:last-child{margin-bottom:0}
.small{font-size:13px;color:var(--walnut)}
.tape{position:absolute;top:-12px;left:50%;width:96px;height:26px;margin-left:-48px;background:rgba(236,142,76,.28);transform:rotate(-3deg)}
@media (prefers-reduced-motion:reduce){.note{transition:none}.note:hover{transform:rotate(var(--tilt))}}
:host{--lilac:rgba(167,139,214,.5);--tapec:rgba(236,142,76,.28)}
[hidden]{display:none!important}
.tape.lilac{background:var(--lilac)}
h2{font-size:28px!important;line-height:1.1}
.dots{margin:0;padding:0;list-style:none;font-size:16px}
.dots li{padding-left:16px;position:relative;margin-bottom:4px}
.dots li::before{content:"";position:absolute;left:2px;top:.75em;width:6px;height:6px;border-radius:50%;background:var(--tangerine)}

.note.sticky{background:var(--sticky);margin:0 auto}
.sticky h2{margin-bottom:10px!important}
</style>
<article class="note sticky">
  <!-- \u270f\ufe0f edit the text below -->
  <h2>good to know</h2>
  <ul class="dots">
    <li>your order isn't confirmed until we've agreed to a trade</li>
    <li>we can't say yes to everything, but we'll always try to work with you</li>
    <li>item trades are swapped at pickup unless we've agreed otherwise. for lessons or services, we'll sort the timing between us</li>
    <li>we're also open to trades for a multi-month subscription!</li>
  </ul>
</article>
`; this.applyTilt(); this.initPop(); this.initFit(); var me=this; setTimeout(function(){me.applyTilt()},300);
  }
}
if(!customElements.get('bloom-good-to-know')) customElements.define('bloom-good-to-know', BloomGoodToKnow);

/* ===================== bloom-doodle ===================== */
class BloomDoodle extends BloomNote {
  connectedCallback(){
    if(this.shadowRoot) return;
    var root=this.attachShadow({mode:'open'});
    root.innerHTML = `<style>:host{
  /* ---- fonts ---- */
  --f-display:"Jnr","Gaegu",cursive;       /* headings */
  --f-body:"Agner","Gaegu",cursive;       /* paragraphs */
  --f-script:"Jnr","Gaegu",cursive;         /* little handwritten bits */
  /* ---- colours (matched to bloomandbake.co) ---- */
  --paper:#FFFDF6; --sticky:#FDE9B8; --kraft:#E9D3AE; --cream:#FEFCEC;
  --apricot:#E0A274; --tangerine:#EC8E4C; --cocoa:#35261B; --walnut:#8A5A34; --rule:#EADFC4;
  /* ---- this note's tilt: try anything from -3deg to 3deg ---- */
  --tilt:0deg;
}
*{box-sizing:border-box}
:host{display:block;box-sizing:border-box;background:transparent;container-type:inline-size;pointer-events:none}.note{pointer-events:auto}
:host{padding:28px 22px;font-family:var(--f-body);font-size:18px;line-height:1.75;letter-spacing:.03em;color:var(--cocoa)}
.note{position:relative;background:var(--paper);padding:28px 28px 30px;border-radius:2px;
  box-shadow:0 1px 0 rgba(53,38,27,.06),0 10px 22px -12px rgba(53,38,27,.35);
  transform:rotate(var(--tilt));transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s}
.note:hover{transform:rotate(calc(var(--tilt) * .3)) translateY(-5px);box-shadow:0 20px 34px -16px rgba(53,38,27,.45)}
h2{font-family:var(--f-display);font-weight:400;font-size:clamp(28px,6cqi,36px);line-height:1.05;margin:0 0 10px;text-wrap:balance}
p{margin:0 0 12px} p:last-child{margin-bottom:0}
.small{font-size:13px;color:var(--walnut)}
.tape{position:absolute;top:-12px;left:50%;width:96px;height:26px;margin-left:-48px;background:rgba(236,142,76,.28);transform:rotate(-3deg)}
@media (prefers-reduced-motion:reduce){.note{transition:none}.note:hover{transform:rotate(var(--tilt))}}

:host{padding:0!important;color:#9A7BD1;line-height:0;position:relative;min-height:8px;overflow:visible}
svg{position:absolute;left:50%;top:50%;display:block;overflow:visible;transform-origin:50% 50%}
path{fill:none;stroke:currentColor;stroke-width:var(--w,3);stroke-linecap:round;stroke-linejoin:round;vector-effect:non-scaling-stroke}
.draw path{stroke-dasharray:var(--len);stroke-dashoffset:var(--len)}
.draw.go path{transition:stroke-dashoffset 1.4s cubic-bezier(.4,.1,.2,1);stroke-dashoffset:0}
@media (prefers-reduced-motion:reduce){.draw path{stroke-dasharray:none;stroke-dashoffset:0}}
</style>
<svg id="svg" viewBox="0 0 220 50" aria-hidden="true"><path id="p" d="M6 26c13-19 24-19 36 0s24 19 36 0 24-19 36 0 24 19 36 0 24-19 36 0 22 17 34 2"/></svg>
`; this.applyTilt(); this.initPop(); this.initFit(); var me=this; setTimeout(function(){me.applyTilt()},300); this.applyDoodle();
  }
  static get observedAttributes(){ return ['tilt','data-tilt','shape','color','weight','animate','size','wave']; }
  attributeChangedCallback(n){ if(n==='tilt'||n==='data-tilt'){ this.applyTilt(); return; } this.applyDoodle(); }
  /* shape: squiggle, underline, loops, circle, star, sparkle, swirl, heart, arrow, flower, zigzag, bracket
     color: any colour (default purple)   weight: line thickness (default 3)   animate: "draw"   tilt: degrees
     dividers (squiggle, zigzag, loops, underline) stretch to the box width and repeat the pattern;
     size: their height in px   wave: px per wave.
     the drawing always shrinks to fit inside its box, even when tilted, so nothing gets cut off. */
  applyDoodle(){
    var r=this.shadowRoot; if(!r) return;
    var D={"squiggle": ["0 0 220 50", "M6 26c13-19 24-19 36 0s24 19 36 0 24-19 36 0 24 19 36 0 24-19 36 0 22 17 34 2"], "underline": ["0 0 220 50", "M8 22c52-7 118-10 204-4M24 36c48-5 104-6 170-2"], "loops": ["0 0 240 70", "M6 46c18 2 30-6 36-18 5-10-4-18-11-10-8 9 3 26 21 26s30-12 36-24c5-10-4-18-11-10-8 9 3 26 21 26s30-12 36-24c5-10-4-18-11-10-8 9 3 26 21 26s26-8 36-14"], "circle": ["0 0 200 120", "M118 14C72 6 18 22 12 58c-6 34 40 52 92 50 52-2 88-22 84-52-4-30-46-44-92-40-26 2-44 8-56 16"], "star": ["0 0 100 100", "M50 8c3 14 6 26 12 32 8 3 20 4 32 6-10 8-20 14-24 22 0 10 4 20 6 26-10-6-18-12-26-12s-18 6-28 12c3-8 7-17 7-26-5-8-15-14-25-22 12-2 24-3 32-6 7-6 10-18 14-32z"], "sparkle": ["0 0 100 100", "M44 10c2 18 6 28 26 32-20 4-24 14-26 34-2-20-6-30-26-34 20-4 24-14 26-32zM78 62c1 8 3 12 12 14-9 2-11 6-12 14-1-8-3-12-12-14 9-2 11-6 12-14zM20 78a2.5 2.5 0 1 0 .1 0"], "swirl": ["0 0 100 100", "M52 50c-2-6 6-10 10-4 6 8-4 18-14 16-14-3-16-22-6-30 14-12 36-4 38 16 3 22-18 36-38 32-26-5-34-34-20-52"], "heart": ["0 0 110 100", "M55 88C30 70 10 54 10 34 10 18 22 10 34 12c10 2 16 10 21 20 5-11 12-19 23-20 13-1 23 9 22 24-2 22-22 36-45 52"], "arrow": ["0 0 200 80", "M10 58c26-30 66-44 110-40 22 2 40 8 58 20M160 18c8 6 14 14 20 22-10 2-20 4-28 8"], "flower": ["0 0 100 100", "M50 46c-6-14-4-30 0-36 6 6 8 22 0 36zM54 50c14-6 30-4 36 0-6 6-22 8-36 0zM50 54c6 14 4 30 0 36-6-6-8-22 0-36zM46 50c-14 6-30 4-36 0 6-6 22-8 36 0zM50 50a4 4 0 1 0 .1 0"], "zigzag": ["0 0 220 50", "M6 34l18-16 18 16 18-16 18 16 18-16 18 16 18-16 18 16 18-16 18 16 18-16"], "bracket": ["0 0 60 160", "M44 8c-14 2-20 8-20 22v28c0 10-6 18-16 22 10 4 16 12 16 22v28c0 14 6 20 20 22"]};
    var self=this, s=(this.getAttribute('shape')||'squiggle').toLowerCase().trim(); if(!D[s]) s='squiggle';
    var svg=r.getElementById('svg'), p=r.getElementById('p');
    var DIV={squiggle:1,zigzag:1,loops:1,underline:1}[s];
    var c=(this.getAttribute('color')||'').toLowerCase();
    this.style.color = !c ? '' : c==='orange'?'#EC8E4C' : (c==='purple'||c==='lilac')?'#9A7BD1' : c==='brown'?'#8A5A34' : this.getAttribute('color');
    var w=this.getAttribute('weight'); svg.style.setProperty('--w', w?String(parseFloat(w)||3):'3');
    function divPath(L,H){
      var wave=parseFloat(self.getAttribute('wave'))||(s==='loops'?34:(s==='zigzag'?28:40));
      var pad=3, mid=H/2, a=Math.max(2,H/2-pad), x=pad, out='';
      if(s==='squiggle'){ out='M'+x+' '+mid+'q'+(wave/4)+' '+(-a)+' '+(wave/2)+' 0'; x+=wave/2; while(x+wave/2<=L-pad){ out+='t'+(wave/2)+' 0'; x+=wave/2; } }
      else if(s==='zigzag'){ out='M'+x+' '+(mid+a); var up=true; while(x+wave/2<=L-pad){ x+=wave/2; out+='L'+x+' '+(up?mid-a:mid+a); up=!up; } }
      else if(s==='loops'){ var R=wave/(2*Math.PI), Dd=Math.min(a,R*1.9), pts=[], tt=0, x0=pad+Dd;
        while(true){ var px=x0+R*tt-Dd*Math.sin(tt); if(px>L-pad-Dd) break; pts.push(px.toFixed(1)+' '+(mid-Dd*Math.cos(tt)).toFixed(1)); tt+=0.18; }
        out='M'+pts.join('L'); }
      else { var y1=H*0.38, y2=H*0.72; out='M'+pad+' '+y1+'C'+(L*0.3)+' '+(y1-2)+' '+(L*0.7)+' '+(y1-3)+' '+(L-pad)+' '+(y1+1)+'M'+(L*0.08)+' '+y2+'C'+(L*0.35)+' '+(y2-2)+' '+(L*0.65)+' '+(y2-2)+' '+(L*0.9)+' '+y2; }
      return out;
    }
    function layout(b){
      var deg=parseFloat(self._tilt||self.getAttribute('tilt')||0)||0, th=deg*Math.PI/180, cs=Math.abs(Math.cos(th)), sn=Math.abs(Math.sin(th));
      var BW=Math.max(20,b.width), BH=b.height, auto=true;   /* height always follows the drawing, so the Wix box can hug it */
      var vw,vh;
      if(DIV){
        var H=parseFloat(self.getAttribute('size'))||(auto||BH>400 ? (s==='loops'?36:22) : null);
        if(!H){ /* band height from the box: solve so the tilted band fits */ H=Math.max(10,Math.min(BH,(s==='loops'?60:40))); if(sn>0.01) H=Math.min(H,(s==='loops'?36:22)); }
        var L = sn<0.01 ? BW : Math.min((BW-H*sn)/cs, auto ? Infinity : (BH-H*cs)/sn);
        L=Math.max(30,Math.floor(L));
        vw=L; vh=H; svg.setAttribute('viewBox','0 0 '+L+' '+H); p.setAttribute('d',divPath(L,H));
        if(auto) self.style.height=Math.ceil(L*sn+H*cs+6)+'px';
      } else {
        var v=D[s][0].split(' ').map(Number); vw=v[2]; vh=v[3]; svg.setAttribute('viewBox',D[s][0]); p.setAttribute('d',D[s][1]);
        var rr=vw/vh, h0 = auto ? BW/(rr*cs+sn) : Math.min(BW/(rr*cs+sn), BH/(rr*sn+cs));
        h0=Math.max(4,h0*0.96); vh=h0; vw=h0*rr;
        if(auto) self.style.height=Math.ceil(vw*sn+vh*cs+4)+'px';
      }
      svg.style.width=vw+'px'; svg.style.height=vh+'px';
      svg.style.transform='translate(-50%,-50%) rotate('+deg+'deg)';
    }
    this._relayout=layout; this._prep=function(){ self.style.height=''; }; this._measure=function(){ return self.getBoundingClientRect(); }; this._apply=function(b){ layout(b); }; bloomSchedule(this);
    if(!this._ro&&'ResizeObserver' in window){ var last=''; this._ro=new ResizeObserver(function(en){ var b=en[0].contentRect, k=Math.round(b.width)+'x'+(self.style.height?'a':Math.round(b.height)); if(k!==last){ last=k; bloomSchedule(self); } }); this._ro.observe(this); }
    if((this.getAttribute('animate')||'').toLowerCase()==='draw' && !this._drawn){
      this._drawn=true; var len=Math.ceil(p.getTotalLength?p.getTotalLength():600)+10;
      svg.style.setProperty('--len',len); svg.classList.add('draw');
      var go=function(){ requestAnimationFrame(function(){ svg.classList.add('go'); }); };
      if('IntersectionObserver' in window){ var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ go(); io.disconnect(); } }); },{threshold:.4}); io.observe(this); } else go();
    }
  }
}
if(!customElements.get('bloom-doodle')) customElements.define('bloom-doodle', BloomDoodle);
