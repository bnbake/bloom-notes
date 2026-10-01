/* =====================================================================
   bloom & bake notes: Wix custom elements
   ---------------------------------------------------------------------
   Save this file in Wix as:  public/custom-elements/bloom-notes.js
   Then add a Custom Element for each note and pick one of these tag names:
     bloom-letter   bloom-drops   bloom-deadline   bloom-crumbs   bloom-barter
   Unlike an Embed HTML box, these grow and shrink with their text.

   ✏️ TO CHANGE THE WORDS: edit the text inside each note's HTML below.
      Search for the note's name (e.g. "bloom-letter") to find it.
   ===================================================================== */

/* your fonts, added to the page once (Jnr for headings, Agner for text).
   numbers, & and £ are not in them, so they fall back to Gaegu / Delius. */
(function addFonts(){
  if (document.getElementById('bloom-fonts')) return;
  var gf=document.createElement('link'); gf.rel='stylesheet';
  gf.href='https://fonts.googleapis.com/css2?family=Delius&family=Gaegu:wght@400;700&display=swap';
  document.head.appendChild(gf);
  var st=document.createElement('style'); st.id='bloom-fonts';
  st.textContent='@font-face{font-family:"Jnr";src:url(data:font/woff2;base64,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) format("woff2");font-display:swap}'+
                 '@font-face{font-family:"Agner";src:url(data:font/woff2;base64,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) format("woff2");font-display:swap}';
  document.head.appendChild(st);
})();

/* works out what the deadline note should say from a list of pickup dates.
   each date = the saturday of a pickup weekend ("2026-10-17" or a Date).
   orders close at 9pm on the tuesday before.
   open   : before the deadline           -> "order by tuesday 13 october, 9:00 pm"
   closed : deadline passed, pickup is on -> "orders closed", sat + sun circled, "pick up 10–1"
   each entry can be a date, or {date, hours} where hours is the pickup time, e.g. "10–1"
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
    var hours=(v&&typeof v==='object'&&!(v instanceof Date))?v.hours:null;
    if(v&&typeof v==='object'&&!(v instanceof Date)) v=v.date;
    var d=toDay(v); if(!d) return;
    var day=d.getDay();
    var sat=new Date(d.getFullYear(),d.getMonth(),d.getDate()+(day===0?-1:(6-day)));
    drops.push({sat:sat,hours:hours,
      close:new Date(sat.getFullYear(),sat.getMonth(),sat.getDate()-4,21,0,0),
      end:new Date(sat.getFullYear(),sat.getMonth(),sat.getDate()+1,23,59,59)});
  });
  if(!drops.length) return null;
  drops.sort(function(a,b){return a.close-b.close});
  for(var i=0;i<drops.length;i++){
    var x=drops[i];
    if(now>=x.close && now<=x.end){
      var sun=new Date(x.sat.getFullYear(),x.sat.getMonth(),x.sat.getDate()+1);
      var days=x.sat.getMonth()===sun.getMonth()
        ? 'saturday '+x.sat.getDate()+' and sunday '+sun.getDate()+' '+MON[sun.getMonth()]
        : 'saturday '+say(x.sat).split(' ').slice(1).join(' ')+' and '+say(sun);
      return {state:'closed', pickup:days, hours:x.hours};
    }
    if(now<x.close) return {state:'open', when:say(x.close)};
  }
  return {state:'soon'};
}
/* shows the right view inside a deadline note */
function bloomShowDrop(root, dates, now){
  var r=bloomNextDrop(dates, now); if(!r) return;
  var views=root.querySelectorAll('[data-view]');
  for(var i=0;i<views.length;i++) views[i].hidden=(views[i].getAttribute('data-view')!==r.state);
  if(r.when) root.querySelector('[data-view="open"] .when').textContent=r.when;
  if(r.pickup) root.querySelector('[data-view="closed"] .when').textContent=r.pickup;
  if(r.hours) root.querySelector('[data-view="closed"] .hours').textContent=String(r.hours);
}


/* ===================== bloom-letter ===================== */
class BloomLetter extends HTMLElement {
  connectedCallback(){
    if(this.shadowRoot) return;
    var root=this.attachShadow({mode:'open'});
    root.innerHTML = `<style>:host{
  /* ---- fonts ---- */
  --f-display:"Jnr","Gaegu",cursive;       /* headings */
  --f-body:"Agner","Delius",sans-serif;       /* paragraphs */
  --f-script:"Jnr","Gaegu",cursive;         /* little handwritten bits */
  /* ---- colours (matched to bloomandbake.co) ---- */
  --paper:#FFFDF6; --sticky:#FDE9B8; --kraft:#E9D3AE; --cream:#FEFCEC;
  --apricot:#E0A274; --tangerine:#EC8E4C; --cocoa:#35261B; --walnut:#8A5A34; --rule:#EADFC4;
  /* ---- this note's tilt: try anything from -3deg to 3deg ---- */
  --tilt:-1.2deg;
}
*{box-sizing:border-box}
:host{display:block;background:transparent;container-type:inline-size}
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
.sign strong{display:block;font-family:var(--f-display);font-weight:400;color:var(--apricot);font-size:32px}</style>
<article class="note">
  <!-- ✏️ edit the text below -->
  <p class="date">a note from the kitchen</p>
  <p class="dear">dear neighbour,</p>
  <p>thank you for finding your way to our little corner in peckham. once a month we bake a small batch of good things and cut whatever's blooming, and we'd love for some of it to end up on your table.</p>
  <p>order by tuesday night, collect at the weekend, and if you'd rather swap than pay, we're always up for a barter.</p>
  <div class="sign">see you soon,<strong>the bloom &amp; bake crew</strong></div>
</article>
`;
  }
}
if(!customElements.get('bloom-letter')) customElements.define('bloom-letter', BloomLetter);

/* ===================== bloom-drops ===================== */
class BloomDrops extends HTMLElement {
  connectedCallback(){
    if(this.shadowRoot) return;
    var root=this.attachShadow({mode:'open'});
    root.innerHTML = `<style>:host{
  /* ---- fonts ---- */
  --f-display:"Jnr","Gaegu",cursive;       /* headings */
  --f-body:"Agner","Delius",sans-serif;       /* paragraphs */
  --f-script:"Jnr","Gaegu",cursive;         /* little handwritten bits */
  /* ---- colours (matched to bloomandbake.co) ---- */
  --paper:#FFFDF6; --sticky:#FDE9B8; --kraft:#E9D3AE; --cream:#FEFCEC;
  --apricot:#E0A274; --tangerine:#EC8E4C; --cocoa:#35261B; --walnut:#8A5A34; --rule:#EADFC4;
  /* ---- this note's tilt: try anything from -3deg to 3deg ---- */
  --tilt:1.6deg;
}
*{box-sizing:border-box}
:host{display:block;background:transparent;container-type:inline-size}
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
.footer{margin:18px 0 0;font-family:var(--f-display);font-size:19px;color:var(--walnut)}</style>
<article class="note">
  <span class="tape" aria-hidden="true"></span>
  <h2>monthly drops</h2>
  <!-- ✏️ edit the text below -->
  <p class="lede">our classics, flowers included, are always on the menu. each month we bake a few specials to go alongside them.</p>
  <div class="half classics">
    <h3>the classics <small>always here</small></h3>
    <!-- ✏️ one line per classic -->
    <ul class="items">
      <li>seasonal flowers</li>
      <li>pound cake</li>
      <li>carrot cake</li>
      <li>shortbread</li>
    </ul>
  </div>
  <div class="half extras" id="specials-box">
    <h3>this month's specials</h3>
    <!-- ✏️ change these each month (or connect them to your Wix CMS, see the note at the bottom) -->
    <ul class="items" id="specials">
      <li><svg class="star" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1.8l2.3 5.4 5.9.5-4.5 3.9 1.4 5.8L10 14.3l-5.1 3.1 1.4-5.8L1.8 7.7l5.9-.5z" fill="none" stroke="#EC8E4C" stroke-width="1.6" stroke-linejoin="round"/></svg>pear and ginger galette</li>
      <li><svg class="star" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1.8l2.3 5.4 5.9.5-4.5 3.9 1.4 5.8L10 14.3l-5.1 3.1 1.4-5.8L1.8 7.7l5.9-.5z" fill="none" stroke="#EC8E4C" stroke-width="1.6" stroke-linejoin="round"/></svg>fig and honey tart</li>
      <li><svg class="star" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1.8l2.3 5.4 5.9.5-4.5 3.9 1.4 5.8L10 14.3l-5.1 3.1 1.4-5.8L1.8 7.7l5.9-.5z" fill="none" stroke="#EC8E4C" stroke-width="1.6" stroke-linejoin="round"/></svg>spiced apple scones</li>
    </ul>
  </div>
</article>
`; this.applySpecials();
  }
  static get observedAttributes(){ return ['specials']; }
  attributeChangedCallback(){ this.applySpecials(); }
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
    if(typeof d.heading==='string'&&d.heading){ this.shadowRoot.querySelector('#specials-box h3').textContent=d.heading; }
  }
}
if(!customElements.get('bloom-drops')) customElements.define('bloom-drops', BloomDrops);

/* ===================== bloom-deadline ===================== */
class BloomDeadline extends HTMLElement {
  connectedCallback(){
    if(this.shadowRoot) return;
    var root=this.attachShadow({mode:'open'});
    root.innerHTML = `<style>:host{
  /* ---- fonts ---- */
  --f-display:"Jnr","Gaegu",cursive;       /* headings */
  --f-body:"Agner","Delius",sans-serif;       /* paragraphs */
  --f-script:"Jnr","Gaegu",cursive;         /* little handwritten bits */
  /* ---- colours (matched to bloomandbake.co) ---- */
  --paper:#FFFDF6; --sticky:#FDE9B8; --kraft:#E9D3AE; --cream:#FEFCEC;
  --apricot:#E0A274; --tangerine:#EC8E4C; --cocoa:#35261B; --walnut:#8A5A34; --rule:#EADFC4;
  /* ---- this note's tilt: try anything from -3deg to 3deg ---- */
  --tilt:2.4deg;
}
*{box-sizing:border-box}
:host{display:block;background:transparent;container-type:inline-size}
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
.week .wed{color:var(--walnut);text-decoration:underline wavy var(--apricot) 1.5px;text-underline-offset:5px}
.clock{font-family:var(--f-display);font-size:48px;line-height:1;color:var(--tangerine);margin:8px 0 4px}
.when{font-family:var(--f-display);font-size:28px;line-height:1.2;margin:14px 0 0;text-wrap:balance}
.clock{margin-top:2px!important}
.pickup{font-size:15px;color:var(--walnut);margin-top:6px}
.lead{margin:12px 0 0}
[data-view="closed"] .when{margin-top:14px}
[data-view="closed"] .small{margin-top:10px}
[hidden]{display:none!important}</style>
<article class="note">
  <!-- ✏️ edit the text below. the dates fill in from your Wix CMS "Drops" collection -->
  <div data-view="open">
    <h2>order by tuesday at nine pm</h2>
    <div class="week" aria-hidden="true"><span>m</span><span class="tue">t</span><span class="wed">w</span><span>t</span><span>f</span><span>s</span><span>s</span></div>
    <p class="when">tuesday 13 october</p>
    <p class="clock">9:00 pm</p>
  </div>
  <div data-view="closed" hidden>
    <h2>orders closed</h2>
    <div class="week" aria-hidden="true"><span>m</span><span>t</span><span>w</span><span>t</span><span>f</span><span class="circ">s</span><span class="circ">s</span></div>
    <p class="when">saturday 17 and sunday 18 october</p>
    <p class="clock">pick up <span class="hours">10–1</span></p>
  </div>
  <div data-view="soon" hidden>
    <h2>next drop coming soon</h2>
    <p class="lead">we're planning the next menu. the order date will be up here shortly.</p>
  </div>
</article>
`; this.applyDrops();
  }
  static get observedAttributes(){ return ['drops']; }
  attributeChangedCallback(){ this.applyDrops(); }
  /* page code can send pickup dates as JSON in the "drops" attribute */
  applyDrops(){
    var raw=this.getAttribute('drops'); if(!raw||!this.shadowRoot) return;
    try{ var dates=JSON.parse(raw); }catch(e){ return; }
    bloomShowDrop(this.shadowRoot, dates);
  }
}
if(!customElements.get('bloom-deadline')) customElements.define('bloom-deadline', BloomDeadline);

/* ===================== bloom-crumbs ===================== */
class BloomCrumbs extends HTMLElement {
  connectedCallback(){
    if(this.shadowRoot) return;
    var root=this.attachShadow({mode:'open'});
    root.innerHTML = `<style>:host{
  /* ---- fonts ---- */
  --f-display:"Jnr","Gaegu",cursive;       /* headings */
  --f-body:"Agner","Delius",sans-serif;       /* paragraphs */
  --f-script:"Jnr","Gaegu",cursive;         /* little handwritten bits */
  /* ---- colours (matched to bloomandbake.co) ---- */
  --paper:#FFFDF6; --sticky:#FDE9B8; --kraft:#E9D3AE; --cream:#FEFCEC;
  --apricot:#E0A274; --tangerine:#EC8E4C; --cocoa:#35261B; --walnut:#8A5A34; --rule:#EADFC4;
  /* ---- this note's tilt: try anything from -3deg to 3deg ---- */
  --tilt:-3deg;
}
*{box-sizing:border-box}
:host{display:block;background:transparent;container-type:inline-size}
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

:host{padding:34px 26px}
.note{background:var(--kraft);border-radius:6px;clip-path:polygon(18% 0,82% 0,100% 12%,100% 100%,0 100%,0 12%);padding-top:46px;box-shadow:none;filter:drop-shadow(0 8px 10px rgba(53,38,27,.22))}
.note:hover{box-shadow:none}
.note::before{content:"";position:absolute;top:16px;left:50%;width:14px;height:14px;margin-left:-7px;border-radius:50%;background:var(--cream);box-shadow:inset 0 1px 2px rgba(53,38,27,.35)}</style>
<article class="note">
  <!-- ✏️ edit the text below -->
  <h2>crumbs &amp; clippings</h2>
  <p>missed it? whatever is spare, bakes and flower clippings, drops wednesday.</p>
  <p class="small">first come, first served.</p>
</article>
`;
  }
}
if(!customElements.get('bloom-crumbs')) customElements.define('bloom-crumbs', BloomCrumbs);

/* ===================== bloom-barter ===================== */
class BloomBarter extends HTMLElement {
  connectedCallback(){
    if(this.shadowRoot) return;
    var root=this.attachShadow({mode:'open'});
    root.innerHTML = `<style>:host{
  /* ---- fonts ---- */
  --f-display:"Jnr","Gaegu",cursive;       /* headings */
  --f-body:"Agner","Delius",sans-serif;       /* paragraphs */
  --f-script:"Jnr","Gaegu",cursive;         /* little handwritten bits */
  /* ---- colours (matched to bloomandbake.co) ---- */
  --paper:#FFFDF6; --sticky:#FDE9B8; --kraft:#E9D3AE; --cream:#FEFCEC;
  --apricot:#E0A274; --tangerine:#EC8E4C; --cocoa:#35261B; --walnut:#8A5A34; --rule:#EADFC4;
  /* ---- this note's tilt: try anything from -3deg to 3deg ---- */
  --tilt:1deg;
}
*{box-sizing:border-box}
:host{display:block;background:transparent;container-type:inline-size}
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
.body{min-width:0}
.stamp{width:84px;height:100px;background:var(--cream);border:3px dotted var(--apricot);display:grid;place-items:center;transform:rotate(4deg)}
.stamp svg{width:58px;height:58px}
.address{max-width:96px;font-family:var(--f-script);font-size:18px;line-height:1.5;color:var(--walnut);margin-top:12px}
.trades{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0 0;padding:0;list-style:none}
.trades li{white-space:nowrap;font-family:var(--f-script);font-size:18px;border:1.5px solid var(--walnut);border-radius:999px;padding:0 10px;line-height:1.5}
.btn{display:inline-block;margin-top:16px;font-family:var(--f-body);font-size:15px;letter-spacing:.06em;color:var(--cocoa);text-decoration:none;border:2px solid var(--cocoa);padding:8px 22px;background:var(--cream)}
.btn:hover{background:var(--apricot)}
@container (max-width:420px){.note{grid-template-columns:minmax(0,1fr)}.side{position:absolute;top:-16px;right:12px}.stamp{width:62px;height:74px}.stamp svg{width:40px;height:40px}.address{display:none}.body{padding-right:52px}</style>
<article class="note">
  <div class="body">
    <!-- ✏️ edit the text below -->
    <h2>propose a barter</h2>
    <p>got something good to swap? tell us what you'd trade for a box of bakes or a bunch of flowers.</p>
    <ul class="trades"><li>eggs</li><li>jam</li><li>honey</li><li>garden herbs</li><li>a hand-knit scarf</li></ul>
    <!-- ✏️ point this at your barter page -->
    <a class="btn" href="https://www.bloomandbake.co/propose-a-barter" target="_top">write to us</a>
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
`;
  }
}
if(!customElements.get('bloom-barter')) customElements.define('bloom-barter', BloomBarter);
