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

/* \u270f\ufe0f SOFT LAUNCH: while this is on, the site talks about "our first drop", orders for the first drop
   close on the WEDNESDAY before pickup (instead of tuesday), and the letter gets a p.s.
   it switches itself off after the 'until' date. to end it early, set until to ''. */
var BLOOM_LAUNCH={ until:'2026-10-25', closeDay:'wednesday' };
function bloomLaunchEnd(){ if(!BLOOM_LAUNCH||!BLOOM_LAUNCH.until) return null; var p=String(BLOOM_LAUNCH.until).split('-').map(Number); return p.length===3?new Date(p[0],p[1]-1,p[2],23,59,59):null; }
function bloomLaunchOn(now){ var e=bloomLaunchEnd(); return !!e && (now||new Date())<=e; }
function bloomLaunchDrop(sat){ var e=bloomLaunchEnd(); return !!e && sat<=e; }
/* "today", "tomorrow", "this wednesday", "next wednesday", or "wednesday 4 nov" for further out */
function bloomRelDay(day, now){
  now=now||new Date(); var DN=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'], MN=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
  var a=new Date(now.getFullYear(),now.getMonth(),now.getDate()), b=new Date(day.getFullYear(),day.getMonth(),day.getDate()), diff=Math.round((b-a)/864e5);
  if(diff===0) return 'today'; if(diff===1) return 'tomorrow';
  var wk=function(x){ var m=new Date(x); m.setDate(m.getDate()-((m.getDay()+6)%7)); return m.getTime(); };
  if(diff>0&&wk(b)===wk(a)) return 'this '+DN[b.getDay()];
  if(diff>0&&wk(b)-wk(a)===7*864e5) return 'next '+DN[b.getDay()];
  return DN[b.getDay()]+' '+b.getDate()+' '+MN[b.getMonth()];
}
/* the soft launch pickup saturday and order deadline (from the 'until' date) */
function bloomLaunchDates(){ var e=bloomLaunchEnd(); if(!e) return null; var sat=new Date(e.getFullYear(),e.getMonth(),e.getDate()-((e.getDay()+1)%7)); var close=new Date(sat.getFullYear(),sat.getMonth(),sat.getDate()-bloomLaunchBack()); return {sat:sat, close:close}; }
function bloomLaunchBack(){ var i=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'].indexOf(String(BLOOM_LAUNCH&&BLOOM_LAUNCH.closeDay||'tuesday').toLowerCase()); return i<0?4:(6-i); }   /* days before saturday */
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
      first:bloomLaunchDrop(sat),
      close:new Date(sat.getFullYear(),sat.getMonth(),sat.getDate()-(bloomLaunchDrop(sat)?bloomLaunchBack():4),21,0,0),
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
    var ttl=MON[x.sat.getMonth()]+(x.first?' soft launch':' drop');
    if(now>=x.close && now<=x.end) return {state:'closed', title:ttl, pickup:weekend(x), days:pickupLine(x), hours:x.hours, onSat:x.onSat, onSun:x.onSun};
    if(now<x.close) return {state:'open', closeIdx:(x.close.getDay()+6)%7, title:ttl, when:['sun','mon','tue','wed','thu','fri','sat'][x.close.getDay()]+' '+x.close.getDate()+' '+SHORT[x.close.getMonth()], pickup:weekend(x), days:pickupLine(x), onSat:x.onSat, onSun:x.onSun};
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
    /* crumbs open the day after orders close */
    var back=bloomLaunchDrop(sat)?bloomLaunchBack():4;
    var start=new Date(sat.getFullYear(),sat.getMonth(),sat.getDate()-back+1,0,0,0);
    var end=new Date(sat.getFullYear(),sat.getMonth(),sat.getDate()-1,23,59,59);
    if(now>=start&&now<=end) return {open:true};
    if(start>now&&(!next||start<next)) next=start;
  }
  if(!any) return null;
  return {open:false, opens: next ? ['sun','mon','tue','wed','thu','fri','sat'][next.getDay()]+' '+next.getDate()+' '+SH[next.getMonth()] : ''};
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
  /* circle the day orders close (tuesday, or wednesday for the first drop) */
  if(r.closeIdx!=null){ var wk=root.querySelector('[data-view="open"] .week'); if(wk){ var ds=wk.children; for(var q=0;q<ds.length;q++) ds[q].classList.toggle('tue',q===r.closeIdx); } }
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
  'https://static.wixstatic.com/media/8bf26a_df6853437f1f4b58a3977f4ce216e963~mv2.png'+BLOOM_COLLAB_W+' | farewell party',
  'https://static.wixstatic.com/media/8bf26a_9862a10094b54326b7672b5471fa489e~mv2.jpg'+BLOOM_COLLAB_W+' | birthday party'
].join(' ; ');
try{ console.log('bloom-notes loaded (version 14 oct, soft launch)'); }catch(e){}
var BLOOM_FILL={'bloom-letter':1,'bloom-drops':1,'bloom-deadline':1,'bloom-deadline-popup':1,'bloom-barter':1,'bloom-ps':1,'bloom-barter-intro':1,'bloom-good-to-know':1};
/* your logo (used as the letter's sign-off; set a "logo" attribute with an image link to swap it, or logo="off" for the written sign-off) */
var BLOOM_LOGO='data:image/webp;base64,UklGRqhIAABXRUJQVlA4WAoAAAAQAAAABwIAbAAAQUxQSIEwAAAB/yckSPD/eGtEpO4TkCRJchRFRgIruvn/g7sHzT2i/xPA++v30BfwZaab0+7q32PS5D4P3LnTwQQ3BRJo0uJd3KY3kJyWJmxPAnpLFxYBZWk3QwGVNkkAVVY92CvMLp5OyGEdgzKhCQjtE4oUBTgdnJKE7WCdlLHJvAMo65U1ecC7fhTf723hDfv/dVL6/7s9Hs/nzDYLy9LdSDeCiYCNvtW3b7EV7O4O7MJERRQTC1sBEXmjSIiKilIW3QLSsTszr9fjwszOzO4b5eB9KSImAMAnxPg/QOGTEbj/B3B8Zufh/g/A82hic2PR/wcYavY8bt+f0i0MdzVF9/kJeSvM7sX/Lcg+DRzvWvhHVORvwLFvU/iSRMvepns+oSbIPoyQGaFwDLLHkgoc189436ns9YiTf2rGr8s9/SSoYlJlBCSF445RxavPxu/tKP/cTWM/YR0bmFYtNDPNjkATklU6zMlhxGt7P9Q/IB/5Z4Yyh1heV6RqFSEZodkQrfXSF61RcIwdilx3z96O4z8bbTj+H5qxEOhVpRx3rD4JTUeIvjEUlwVl3JldbsChtPo26rn6PNzezgQLfxD5hwYrcXQlrEKekVbeSVwayoH3f3guLiPH0ROocydKlHvuIJcb+6N7N8KM0JbnIv/MjHW7PW2joVQdR5+EfUh6/Z+osaSZaBqS6r0Bknezw8HU5njuaoWAyl6L4H4z21D0z23DJmhYnyqEyqww1gZNp82nnPMOLg0UhMafqnBdgdL7m3dw6P25IOzV5heAev6hG7vXk8hpXqU8Q8xuxVcEuZ+WMu4QXEXFCI5zHiTC9SUcM3bFSeJpdCcqIi9eh9t7KYQwsQcR/VvB8ScBraqUUHeLfY2k4Rh9iPQZi6ZwHLOxF+p4+jg8t+Q1+W/xOzVxDDwf73jg2U/RvRQhJw8SwR5kDyzOe+9dtoS1GK2p0srntqMxWpHn4iuEp/uoS1KePHFMDRU+aorIMF4b0OwZnOPqg4gyfPCQJ/B7KZATMRK2x1C63YjuScQpqVWzA2sQWmBVyXOb2Sn4ipROzyGdH8IDQtEoLr8e6ozzkHdjn/Fcc6I4kcdLhAtG8HN3dK8lVyDi9hSiMnu9IHsOAeocefubY584EFyW1gJNCaqSY4DZyHQg8n4JPH4pIggtXnO1Psyl71gctW8aeTzPlaI0Gw7dJ7mjpqPstXogv3BP4bjeVhTuQQR/wrvbzZ5+bPzmz5qi2fkTR/1ipAopjXbYDyKAqAKOj44VOq+6BofS+U0YdTjnPEOE5u+85To8hnNy9qVaNK0zn52O23txQF4xskcQcpeFG0r3DM47F9EGM8zWvd0NqDZ+zQFoFow/UUrqVylEF9rOxijJDhFd/wIRueGW23FK7zeRsx+XO+8gh267hnLbaeIcz3fn5cvp+W1E2Ks1v+coXG6b6uwJREk5xf4aXAQ+Qpv3rLyxaDbWhxq4xlVKiMwO7d/iHZePPwTn6PbtazWUE0+65ywi9A2xWe2tzlpyGBor9u/XR6n7KUM+htfOxu3FBEhIdfaYyh5RoPeDb4449TLbeQg4ddJvl806o4ZINrZsI6RlVRLJ/28iZqOJekY/+PkDRDjiyRNOweU/UXdaLcf+oEvyq1dbTw5j3qPbGNTJhQ/W+72utJvslb3YEIyayB5Cwex/T6j7kaVMDCUqoEy2z6JkefMWjE5UYaW+7UrYpvaou+ghmfcS2unjug8T4boDL3gOeoBPbO4rG3H8dIxccYl4ZdzhHx8Pr52E25sJAOqwpxRBJBOV7ImoZEWldIE9efRB544zO1o8SeMSt1Ig2TCJbUToQFB1UJlkO233B7dVp+H3+fl/PEDRjLyHWyHNnpGFLaRrgLCsl2yE1nPyeL49jqYzRt6H9HnfeVKK7pWUhRi19xzgI0haQtadA1CXDT6yw0g+ecvyHCfgucxWNEW8ZoawBmhVzaQKuVaLE4nEQWeOP5kXr6LW+tP5uM+g24gyquGtI+kYx1jWItyEXP0cdV9V8XLRjjfVM7YNqR3I3kgsgVAb23NEc8mwQfXsiILUaVkDLCNHP3uEHOe8o9P2x/AgUmO2bR0s4DJTViNWqzVVCGgTj9tl1H/lobZfFtB5fb0hT+R+les4cVjR7/mNExjLwy07YOIAOf5OvPL1rgbCade3GNYBRYSabdj7NOIxoM6eQ4jmp+Wk846fC0SyAH1Hzd8VX/fBwUgmXt7bnK8KEKGPHYgDiPR7y5be0ACRTGAlBHRFq4xy2id3bzN7wcFlr886Txj8efGXfHQWLn+8vDMkYhhramzfzX6zc7hnIBHa2IVEit5+bsb9r6IObvjgnobI3gaUlwG19hgIUoCkoYy3baVoRqJF75jZejOzPmQa4YdReFJGuHBLdVEQoMVIi1+HSEZLAfanygrFk857bmtgv+Ej9PhjpYvw+JW39Tl8NhGGn3DQV7KbkHWHb4eHR5L7ajGekb8S4abyD6u1+pAotb94Nf+Fdnslu4GSiMmewRCqkabSLWEv4sjYc6uV2xvFN4blCdZk4Ki+5nKpgAhvfosqiHPQYpK9pk4yWYYTumtQVZDIC8q3FrfzIJdaix4k6t4++xoWDhDp8SFzu230xo7oAqK/HSb7P40jf31/kdb2Gjx2r6PHr5fQ9ztR9j7LdiOUFLGnNChGKnK8arFOWRCpuT4WLMiDMy0WjKgfahrK6UvsLCoS5xa8DV4A9fCI3Y/LZHWZCG0amlYVx3nPM87iidWvNiRC/V87ibR58fmcc6fjZHL94Q9sLjCNr1/MgGU53HSu5Mi5U/D88iFSuLAdgzYdBf+9CrfnEcD+zkyCXUC1akhVE+e9k8zCEKpTsUqjbeEnODL2XGkxO4ZIhMctUXylpeF4zOyNUpEKUOpsf78AnALO8aq1xaUl/LkGwtxOVBnUzbj4cYuFR107/2rgwPeJMsj+rUv6Cbfc1v7bWoXUqbtoA6PHIG+2wPPxQOWB2S7CTR9y4tYD0aOW5IrsSVTECA1AVMK/K4StQKQWVdw5UrqMgnh6ntvN+mVD9IfQvhdFtXht1M4qSkgqxx32bl/Sd3QPFp+WT0onpeXPSiQtNLYIC+mCqzJC3f9uCOM2kKZjvugKd11CDp8s4PyZVG8yMzLj8EIK66/ZrEuOo/V7OGn/oTBgXrG6Wkuqn7Jzf3KiKwfj2HMqIcnqSBiA6t/WFggoRaqSA/IOHHp2H0EzSSSgpCKR/CXhdFEydnQJ4nYtHjzDJV63D5rCcZBdASpp4ei9xtY/d0iBAMpXm8Gn5ViAQQekyqBEVlvMTnHwrzn3Oaa0Etco0Vt/P/T6Oh8cePMBpQTVtsa6rC3m4vskl4fPpfaMNkR56fRjdvWmgCen4thzSkijPu0aldYqjlAWS6yY+jm4vy8z6lQlUTh07E4zsx+Ow2VSnmSpPOeaHY3PzHOzxcLuOHDSH6wfkkJl4US8I1NH9Ru/X/dlV1Hw8qTdWxORNIRfQWhBVfa8Z2V2KRFP8ZifDm70nI/w2GRO/+KMh09+oS1tiEeMYybAm0egpV9U58UBRBm4/Ko/uwMHWmNkD0L3O/oVkXb5213QvyXYBFCPdEWd98457yQrCsd8b3NvG3TKmNBsGC4dS1GT1KLR+eEMVTJXPjdbV4SA0nh3RNpjSY7e1k89mSsgpHT0Myu/DpGKYDkqNChAqpB/23bbMIng4JS1D512Eb7oj878NHR432l1t3ZjVwCHXSilUwuKuO9Zbj+fqNaYb0saU/yftzate/1Sj/xPiDrvfarAUvU9KkJgYTRFEKp5i12Lk7+vuhWJ86TrNDNH6RhbexLJg3bE7RxcGihlUIKlcFxl1h+XmVC4xmwWAgjFW4VahEme+8sKkSwgXhBJQvjXbcPtPZxUoGxFhMLiqgRfWrlNBEU8dWf+MHV/GDKWI3/pdswLJ33Skx0bE6X1mnPyK7WaFq6te+zDRDyv2SfUfOqXr27tXtr4kmdyFFAvVUicF9J3KaIRC5wEbuoYarfo1o3AWTy0O3F/S3+lsiTxBjQ/9urhr4x9+d4Ta4PLROn8m71fgnrno5xrwaZ6omnADqguYZJK7fU2AUfmSscwYe/iUhQE4LEkx5QFCFkWKhSgU+xeXAVGGQKRnCokBdd2IhKWv5qLAw932x+FIh93ZdqN/S59fnILVz6fnmuEF645iodemFvLh8oP3Jd799KXOpPy2TPxjqqsGiSgRv369WsUV8+XcOdPH+wUgd8JnGD8+upLDwL7T7GEeRLDDg3c39FGRKiFgjqIHDZ8oVW84fl2aHoqLVfbU+ABJMKU0Mbg0hC2QY0cBPCMtlinrAgtJcFqhOT8fNiGJgnzp+Cyla7zudxsjUkzYYCPUGWd9R6eg+hW+7YhHlQ5auck5KDn6LW0z8njdroG7C4cNI38STd0qrawR6JWAL/xe4cf328N6lUi7tL7neAOu6YhUiWUgJLjDu7VqrZS8aKHLXDfbnAGsD1Q770TeMkCRHhQbU8jXivN2JQKcdDoxnlmZVPuu/Tyh/+7zQKz3dfiJA3xOt2exikpHYdYEHbBVURS9UIAx6GBjcCRlWYYa0kWahUHrKxo3tTsOJceqLa3p9IJk9RVHZPfFhsBn920e3t/nIBnv9VvwUN9GT/i4NFNV3VC2wz93HVe9ix3TH64EfDntjW95x0NTgE8w86n+NqJb054AV8Z6iWFhPR8+PlrqTiMO8TxUeH6zyUEoREaJBKAl8i8MMCFvQ8K3R4GkMqCLSiUFCo0fWyj2eTBtUnZbPhuKzd7CJ+G5x57DydUqPJdaG+nI2wlzK+BIOTOs2XVVbMBjRH+TKF00ARzSOn48g8kG6CanlAtPi0dIUkzEhHBMEOcSy+U1WcUmvEhDZ+L3wYOPKXz36PJE7RfM/CDLqu7Qq2Va+ucaQN0SdkAhE0rcnqE1fFKSsdT9S+Z/mhbbr0zhahggGChpZNm0+uH1MGENcs37ygsLWnqQ5Ew2PLKaASEjvmhkNpzrAGhDWXPKlJ8RgOkkowtcaBmKXm3bzSb2B9Q771X6L3EEjG7BFeB41L7qVCUij1DLChvjlYAWwkiNRFc8JjZsTiyadRGWIeRfDAunEqY5HkiqIlmIjQavT84p5JObvzldFKnJ+odZkbFmhYmv28RmByFA3/9tAYeHDnfvM0FJ/PhU2OP2t1WdkXf6FPwuvU+1oYg7A5G9Fy6G0/qCId+/e6zTaD7LyUiqmFIug5JpfQYUSSCp/OhYjGJvfHG91sBIi2vG2IIZ3xZpoaG7bqFQsWi81yIk2NLA9mTKGNsSU2Rytq6Gwlz2vaeY/bjsSBOSKkRGi+3RGJ3O9EUjmNs63440hSK1oR2Cz6tkFrgEkeE9iyeLNVAWZ8kQWQgbsF8SeEYZKfhM0H9Y/ZRFwDnnSSpNraz07FMxDkA36hF23r1axXl/TjzjaMRScM5LAb8hMtBH1gwEFUU+e+TjC5ut/Kq4kYt7Lh1WzqyPmy98A7yyN3ZtPHEciqO0GLdF/sDrRYfSkSBkrYdm9aupjvXLft+/i5wKTwP2Cs4T04pgfLDiDkgImYGl40IRcgVAZMrSdtzByES1BiArwoiVcSxv8WtA1o5sGs7JrxRbttuz0Md6UbYvzyI2zhSiXxtQ/Ck7XjSwp+dpLEFaIgL67xoc/OdZKsaLr4NQDmkdVxeDxzJQtG2ueIkE+CwOfblhc1IFud9hDvjNdOJJcAqUgFcxwvH/EaFZmZPolKBBAmLFqHsOBqco++c+8GjwrQrOz7FJ+/N7drq4JEl/25/jN124gjpQGkBv0+Fdt1RQB0HfX825NJnzWAcNDv8+F41qXjZF2+DS3VVPNERjgxDFTYvxFtoJKsmzhgTKBi48MSeoUvH0c0cmB2HqzzxoFpFXjdbEEEqq2wLCCU2vgM4MozwiMWDsBcOEPJtKp4MZP8wDDqiqYzNQCOw1xpsaYeSrSKkbFcSdjm66WUJUuB42C4mkpnCgaPX2qpPh/WrQfLRsRdxaeyOATgEnIXkHP7sgtDMiIcmqAaJeMJexEsK4awJ347LQSm3mceAkvfqF01xouoXnPTkabVXBGXRcXUb9z06jM1Ydf7zbS6tx4+r0F23NBJBHVwzuTXeMWT1scCgj3fmQyJQDUNRnMA3/VDAcYTZozT/SxHqOywgzUj8tnsCBDAdRUi6QmSRhKj0K0IqS4FC0EzEey+ZCLW2BPYonso1sS2Y2V+XgBcyVS39y2L2SgW5c3qKZiD4382uxaeCzQjNXOyewzkJT3YFVwCxGIYLuh2dcMM3qKVSmu3a3peoZoITiAx8eqFZOPethx+eaNZbKjJiiVTOKbR94KRWEJqjwsCp8yHLcUmOU+//8MaHQ4wdY+bEfx6aDwxddCH4Q/t/e0rdGTdH2hPFhOTAbVzSy24Fisb1QNVBl6kfFJJL5PnvW5Jz2jdmligPzCwwsyCwIB7Q6wAElHk7OIk7S+IWlHfBkbZ4pllAEl+aSwvHTEI0rNsdV0lK7g0/LvukE1qRKjiSJQ11aI6caXE7GFdJqG2FQL7EK1l0PAsMKgmE5FzSFREBz1dwGGFF20jYjwwyuxdP1nNyIB4zCfyP072dm29CRd3itvFgUO8kLXAeoO7xzy4ygFVzLawARMCIagQOHLvbSLlp8/ZNfy3b0OywNg4wsSk4wPPKxNFTvwoJWQxNLv9s+qM9oPnsTxsTO6PRL7Uv6RoRMAFMQjUh8QgDjix9eiBRhWZPrBsK0GrKMzkM/tEsSAQJs6nXHNz+0Ft+MgvMzELJB5C1v9LkggEWxm0UngwdPRKSBD+RoWc6AiH98JWjNJ5tZvZXWzSFOlBHyal3D4kiFUhACLxntjgHqSQNq3c2EZo6ISsyABeUHISmQFKJ8wogLspM6JwfSgpjW9xs4wV/2Vj1UglRsNBEeJdEq16hUqHn8vAhK7u7BYCTtECcF4BWBw0+JPL7bq1IyI0AFEC/8WahsWXWd/N+Xb85QXLOpWFgYH5+jgo4Dj+jPvU9wuI8gKbXfvTWkDyu/fWqB7v2a1huCTI0k9EfmU3oAdBx1BYLb73y0ZfGbt0+5t15ZonAEmaTDialO26GJczQgAWAs1kkRtYTC3e3FM0ExzgNAGUjlp4yO1RDOAStFJV6v5ttXx23r10KB03awJVrzGxKrkiSQO83f/rs1OobQxuBp5K9PdMgVKVxEZINoWSzhnYQkkIAxCnJ1arlAW4BVr8tWsHW3RaahV+AauWImjC3zNifdD2v7+Z8s+1THjiqGmh6yeo8vMTMvr8hpFktDwzf7TOzhNnXL49fS0oVgcASioAxFA8oI2Y22aUGy/NxJHe7+6MR7Vq8POzVd3uURciiBWsfy4W6F860si+eufmy884++4SebRp/arHAgoStPRPUO3Ue5EmLG5jb9LkYfImoELexODKToxCSHRkKv68QQ+lcE6kEcX6a2dKOLXeFdgQOHL3e3pIYeZeZWcyG4pPgoJM7H2G2IAjtMFwlea46LaZASRs0GwiLMelEmAIQB9Q/9sHJv/y5+o9vnmjMip0iHZAUsGNnkpV9fAz4LAnRCIgLCHc4miDpCIt/Eo5fbGa2/M4cXEaAaCQ2j+XpCHUlFOWeMgvLbdVgQNXMMJLFMxAg1EV5IoC7YcTkO0KBddWRBt0LAQrPHDfl6lNabsojq/H4EDpeMvanGcN6F5Fm/vYgSCTM3m2AOlKKVz6wBBDqiA0uZPZuZxDYseIzE3KWaQghJUh6aPkCDAmr98dVguNWS6xsgSyw8C48jqtilhyP3fNAWfARLkUDH7CsLGGBLctDKsdx+GPxqCChH4jLimMF0NCFkspB0X8+2G5mZYGZ2fqrti2HjlRcttXiNu3aOWYTO6CSFaM8BlGoE3VEsXSUOuGL5HHZf0buNLOZTYio895rWhDYJtaRptCaEKGLJeI2vQHiAiNtl2h6SKhgdgYewD12XC0JhS11XKTbC2+8cG7XYqDTez4Hy05os8dNePC4OgDqvXfO+SiDLDCzX84AT5qq1ZeFAqFbfL8Yq3/HMNtUgmSGZyIhQH0y9fyMQcit+OypNN6RiPXByxyzYUQ8j1hgv4WJmF0Ef9h3CAgxEvxUeqPF4vYinkpVqfunRCbuhJCL8VnxbESokUtKceRd8btZ+Tun7VerydGvbDazb2uF7IelMAk2W5ldhV5dZtuvA80GbNoEhS16FsFajHQdA+w8vL/L0+7dR8bbir6kVk0LPBuxiqALyWEY2LdFeDIXO6vIhCCciiaF+b/eIkB5PZLbDL7ipisuOKHZAXkY2bXA3m1Zh7QVLt8ej2187hDwjrQdA0NTEE6JqbNfCAltAkpWJqFJtbLwEwLCBDR7jqfN7iNKtfVmZ5PL/Razc662MpuJz//d5oB4yoEaZQ8Vrbe4/aeyHC8bM45fRQiPZ20nEPUpRDhmntnme5uTusmIMNaxFjSWIAVK0m0+wqFrzN7Kx2XBNL6R0H8hLJ5Nhp7brQs0vFVyOKsWI63sqia9z7pmcHNw6Rh12EiagfZAAA2CdfVxZCOsdjGKhfH9UHC2i2YghAtfu/XSUw9pngPRlkPmJhCyZWVlNmdAYVG1mm16dSxQ56n2ppnZonMP6tEUJC0cE8QgIef/IMJiwOw6fDaU73aoQVg9I+V306TV+Ui2hFqbwqWFGpEjLUx0UC60chvKRxazI5CC1fYNEmE3GnZpQBnjLdzVCMWpZk1pHQ+Dm+MrMeFzNEs5QDxIUnSEmX3aGtSrqHMw3uIm1C9GUsAG222PE/G0mmM2qyE+Mw1rNzaRokWvT0MsPcekHXnCkWegeTfnuOjXVuH7TXFphLRjE1aBWsP9UICEnYAnm6bbXiRAAn8sigYFZzx3ZygQjLn3kRGvj5s4ddakRzrd+hEh2Q93vfBdDWmcu7507ZQfgZqzrNwmDX50wszFu6c3Fk1LZAoG0BigHFB+xLKBMCtRHsTsSXwGwqrNYqjV64BmyzPU7Fq85wuz+VEGBnE7m6LlZnNUqbnRJpLDpRaL2zAikr/E7HsRp1Si5wyzRd/I2qQWOaFkw1ETk80OMPKakWAYeCW1d622O6B63QqEP4G6hAnPxo1Qvz4Za9h1cl0LGV4AjvSFyOYpRLmiG3Q+jwjNFn/04bg15aNesm1H4itQaVC+qRipiN65gQCBjceT3VDeSDgQBhJqOPTXIdOe0xCsGSkPPvGO6V3ao1SilQ8buQsXJIDatQ/o962VhYtrAETbPjfXiaSDrSdlzaQCMC1blCXPU2ZmSzuLZgB/rcIgkB5IthzvhlsbSA4XWHk4go5/Jew6tFuYsAuJ0GCLvagMsYTZjgYS5Swrsxc0BwZMekAlaydZOCdha0FoWI+sCA2BlWiAi+cT2ApUSdNxkYYSuorgT4QGhCSMHeuhpD4maYnkfNwJNZaSK2SotLVb8HJ3oXDOgXjpextw4E3Qcdnuw4lICs9VNhMhzf4YgMa7issWvy2UEKVLtTAcNOyyw95UDKynj3rnNLZl1rsPf4tVBjG3eKt3hfn529aXuFVbLRHYv4gCtH3jI1HSNXYgSZKUC/DXxiwJjU44tn/vQoRMHSuSoDHZFmSOTXWOk2KJhPVsuDy0EeRypQXrq4ujwWa7mRstEf5pk/GStygst8tg//FmmwtEsiPUWGXT4BdEwmirrAiFtRGbh4YSW0gonoiQtmOqC4yGaSkNIyZgEv+TsKA5oaRF0Yab5hJSVzyZek63vtDgDhx3VcdzywGay5VNXC69LTwJcQJOi5fZg/gKJOEPRoFAPkPJtoY/ESJW2hKG3PcxNAQj0cpFnBPWxW3tRqFyd+d98NbijTRs1r1Ps1qJzUHC5gD1Bz02b9UzOSJpCY6Um5I8GNvKqVwhY6mobiX4BfYxcnWQiNvyQxebvYvzvBfaPXihxnq74EELbOjb9nRE5W0rC8L993s9YbbtKBxZdtz810SYGXcW0i4rSlczxwzMMQ+hCxk7rk9ISFNSG6tQatdBAFM2YNI6YpIGbOz50A8YDcjGyLIC4fChUP82lNyHokrTx0WVM077xW5ScApvWKITWhGtW6cQThSXNWEpQCjN0UeueuzwevWT1jiSC3Nr1Z/5SmCVYsww3b5t6eK5i3YWNrjHgtCWvjxh2uzv3xpSQua1sKTlSRGAeJA18c45IZsrAIRSLEsIsxObn5xmZpbYsNlsXESU/KW2sZYoovMT68xi5zPRXqbwPTMLy7/caWb/7YKQdfH1lglLFmHQiWx6uZJ4zta5EH66xYf980PJBP/9BA1phVWwLnBhQbMUIPxlQps6SDqo+wVogmYkLJxGlCsPgKPPIkKfi4hy4/F4qfcgDX6zrwflQ5NXzZ5BqVA50CUA05X5SNYgngQ1cF8f42594xicsmvyG089/cpbE67vX2/pQsLKMEnstyhaUrd1s6aFsnPNkxaE4YaHutarDuAkozYAjnkYBEles1aJa5OgiDBbnocsedd195mZPe9EhNpbdx6NguMGM/uhL/pOsO6m78y+GGbJ004AR6WKuWA+JnQiyILyJaFMxiWY7hOtjwwcmTq69QwdrQkr2LyNgFYVGKzdqrRoQ6BpEPyKo0UOkoFQEtxChEdqwvWd8FzcHqn+Rq44rhqotPrNbNHHk3eYvZWnUpFxCMkBH+OpxLqpyjBdfOUhNxcbAR8edszhfTsVc/oNHz62wKwyQl3RhAojjZu8YgkLd9tnPXDeCZkG7I8Qypr5hBBPKohWNWM9CkIhli2R6h9v3/Ddw21xo9d9fwEiIHRsiQCIO+OOEzw53Gqh2bIz4IKt2z8+DESpTBFDWIAprUpNMlJpH7MIo3Dx3ih3u5BMlabj6uNokG+SBJu2YLQk3eXroGEfMS8VhCwOvTVqh2bgONx6QL1HkOj9Uci/Wj1Db8BLzecjEuFxSzn9dBAqlDD3QBRQPsRlL6AXAmoLCIX6z76PCPwbQAff9dipmw67isqRZeev+SMBzodByEMWT9gtD5TZXYiQqdK8C47QvtzpDBIg1CiqarAZASh0SJaSG9UFHBSBCKmVdFWkwe/h4rtLUU+jFiCOqjgfEStug2bkedFiubO3a4J/+7L2N4Y+E5WCH+oHCiXVSWmS+BNog6XBmqXEpX87cKmMletJuPPFZ+C5f0tEOOoa6HwjEXoOwuu7jYlw5RlEpFninL4X3nxmexAhtUi0fAihQqirviHMmsrQhBpB+FtUHGcMurdaruG313WRaKTgoI71Ww3+cEt5aNkzsx2fvjPrg6u7CMn1wNhyc/0XbRSaSeiWDCeBt9OPChxQBlBYF6laxjbEEAqjZF8E8IooOFKrUqH3TkCo0bkQHCiooyqG/GbOAjojmRhPxn3cjsALX+H5AsvAdNca4hbEAmuLJKGsBppLkIZDHrXAtt8QQTUJYYaV26QXJJGeMu0TcrjpSDh3EBFOrS/0fw4v1d7MF8eHX5JSHBVKWG5TxqsBIdN2+US2Qj//QwnRuF1ClOs+rtdomEmo36gCuR2uGDXq9rP6jLUge4nwvas+uff481//dcEnw4ceUvtXgEZseqHMLsZnok/95QzskUgIsBUk0MZVDXaUkZxfWAmgQkqhEgVwAqBK1TSW/QnQjUxDP/c7De1DVMhdht+2jDADsZVYyt8bkFpYhdCoOlIRKpy5yQL78QRQJ+B5wmJh7DIh0z+HiOeF+vBAIyg4E8cL/Yhy8ZVEpbPtpxHvvZJutNeF+agDE3sWI/v/Jdm+jnj2/xyeIuHNRhFpe85TbzxxRhOgZMWfYSXYnJpcNPrypq7FKbc9O/Kuw02Vfo8uMov/B5de6DZMkBAN2p9krgKMtlXNKE9VUAOphKopKlRt0x0LCYVuEqRnwheI/dVQVKi1EXbvJH0TVkFgp5w38qg8CFPAUoQaDdJCHK0nWWj2+UGAV0fPMIzL6EUuTMvLq+OQRq9A6ePi6Hog0uxDVcl7t0QcX72NI9N+Y547jJShu3+mC7Kkjk0BBqxtQpQLZ7lqh+JwYa/R48fefFABIPSdffTXlshWYJ+P3XgenPDyZ8MOqCYw0VDrfZ777J7uCJl+DSBcJEYqATpgVQviMUDCSK3/uf9BZTamtG1gmhb8iiRKTsAh1PoLIpEMYBti3Ef6lhRow/TAw5WbLGH2YX8Ficpki2v5KCwdDy/aYE69D464lgiDagi3X0QO595CDgeGjUQz2kEiCJMCN2eYC8mqemgiChB2QUWqvzxpB6aBjmt6RGOAHMi7bWvbUz+5msCyEriNT9Djy8k9oe+bu2zrL7OvUSWw0c0AIW01NoUYEnZvFSpgrEER2hFWtVg5BkYJf6sKGLMQCfK6IOkYG+JitMeDULQaq1YbSW8zAsd6572TdJbjjIxQoflrZqHZnDu7AQcHgeiC35EKnKPgVUtsqX//YLi1P1J0PFI4voZo5P264vjhORwZj/AJR+o7ArEsiHOw3wQleftOHMmNpxuCvARojocGp88ODu4xig8/SmAZmcD0I4ry4fRvnqkNtYd8bVf1HU3gGNpccpV0xScoNgUo7IiQYl0gKK1KTKpYkCBlbeTvJDlk1jZnRp+0IpTFFBrgSZb5xH1X0YrEgwnWugNK2sbqLRgNhIwdHPiJJSe+uKhLi5UBsD6CeeecB46eZ0EiXPNNbdVXakG37nDqg0Q55V6iDIjXFs1Ia8wkqKCBKekKiIgHmg3fbiGBZ+UWHECEc8PAB9FlS6JRD7Qbfs+Da3vyn8L3Lztuzk6zdEJTwVauy0VQJXL7TzdEgaNePCUaIFb8ZhSvFYh6aNjPAaFSjdTGX1sxsRrNqWphmGSU8DeqnNMDNV0/zUKhN2EF6ojFBQSTJMd7GKeYVaBKsYD4pjgy3bQSo6uFGaEOeo9eaynLzRSo24GA5AM+NovFzVZvLKLtGBzHFcOr7XHurcbimPsUjoytv3+cIEntvjYxFUllFkIIRA98dptZPHTE5m4mpdJzd6imXAVQOuTDz04+7JeDicg398i2OseGGGAgmMCu2M6V/V54nQg4aDX599MduD8aOxdo0HtCGxDvnfMeKL6sP6EFyqYNSEWbVmMEtESrWpAEhX8jIrqupSjKq2JKx+qhJImHIS6MsBUjpecKnB3dPtQk8XAvhGzfScbmwj9QDikNJSNQhRpH3jfp9/U7dm1YAmZ0vu3GEw8/efj3ZrG42crL8p5a0ejch0WKj0M6vUCEYx8kyiCrI5oFNNiIAYS65ooPjIolP79GvWbdj2gFMfUWvNYBNEmldKkFYbldjLQ6f+yM146h7x9dyXHfv8rwe7lu9Zz4zjARgUDlx89//qLTnY+ez8TbiQAerrc5J+QA522wIAxs9+t9STakx6kDsfKEmX3SmjQd71rcoBlVW8zNbY2DMCfx96E0sTeIiGh0jpXFrR0K6qHlB4Zs/5WKleblYdzGE3GiHppOtPLQfmqHzwjHHRZP2Gn4LIA6gEhpo4Y1on2e7kDMOVKaYL9cXwLcteGvI/E9e8KdxxLh5Zbi+O1pHFl1tMQigAk///jH9px8fLW6tWuX5hZEgEQQFba83AuckIJ3rSxhtu6uNyZ88cKppXDSTy3I5f3vKZlTP29Jh5fv+XRJgd/lN21tPqv4wFk6cP9J0cKVF+EBVXqstAlXFECLD8wSgZnNvm/woXkNu/UFys1s2xsHg6XhuTtMqlPl/Ip6gOdP/j4dfUK7GXGOLpvN1lYTdQq17t1sxtezEKsAx5sWS9i1JBdevcFiFjxWgCObx1gQD9/GZQXEeSV18RODc6l4xYx/RcGJ49gt4/M4uZbUGB119H+IKINipaLZIfSNiHsBMyXDeEgO8NPbb4JTUjp6mZltuuH3HSe1FoC7xtchh4d2lnLOe9z4Rp0rBnz1cKtJnX7u98aBXWDKid1bPnMKR9hpRAA8NWfMHfnd9aUw+E8LrDxhZgZgQk7s22ubgChpOo6zeBhYVUM45phuLaqVfbtBEn8jB4YJezQXInR8/Kle6oE29680s6Xv/EraKo3XW3nCHunVuMMti8zMJvQGJav1dljCFkeQ7CSLqAouoOXBnesV+O1/rl/6y4Jd4ATwNJ2x9IqhcN41RBjdWjzzHsGT7TA3ONoCFQhDDAwT1ClA+Y+TJs42nFKh0nHmj+9fXKPXTw1AoeeXIx053G794O2B0d9b9Sm5750LJ08dFt8am3FDMVe/V//KTp8Jn20/mQiAI/rFc63fnP94BwrG2kZLmSTrZ09pCzhH2iLF68xy+A2rWilrlib4O1VaWRCzH4+PUmGt/4zdbmZzrypGLC2UA9aZBRbuCMws9tEAcEJWlemJ3fHN9dDsVSgSkq5zQkoHV+/eejovlKocNlzy9ehdNUSzhu164FpH5rtWLV74w+xFgA/IvMn0ZuTCUVPsATTK9fYwTi/hzrcoOPCBd49NBMW+rGhxWT9pvqTWp4Uf9NPBHwy/Ag+gRH5+kLZPzBk3uOar75w38beNW9duW7d47px1AF7J1HHsynVznp4gQVVzkgAE+/tA5UGzMrOFL1xx+gknDBk2br2Z/fnuiR40JEOl0ei/LHnLzDs6gCpZdpxhZhsLkUoDVcwQAQuNilUoHWW/jq8H9xcDP92Hp1K7ndW/XrVIPBaLx7du2rx5w6rVy9euCQBxoRnpi4iv+Vlncmj8/lK7lqjjVpub40SptbaN8OSZ37QtjFTXvNnb/ngMvj/yyaH9x1L0fb3Xr8cDKAUrL4G8/4x575trwJXWqy4kqyrZFIpr/gXG/6AIAX+noly8xtJf+frg2oAXMleofeg5Q8/u1wBQR/aFc54dNQjhf9hB+1e22pLpi6++5KLH1lVTqRQNkJKSnPKysvLymFGhKmFINh1vDAbOW3rzf28lB0bGd/fD4Xj2A6Tks4N/L4z1kK3Vl/PxAs+w1/abyqxWjLqX3+7AC+BotamLB1wRXkkWFQuDkOwqqAT8I1ZKr5m8ardZsHv9t2OuPqAYcE7IqjpSi1f28OKg/mVTN5abBbuG4qhc1QQViwpgZkaWHee+AvUmft/k2tfIpfCrBWM/wKFSb0dnkaFvnjAfam/blic6ZfEA2W8x7za5/mEO/M03Ce9FBfAM/U6cdyAgIkIYGpUoEvJP2QGFzXsd2KV5DZKdE7IvznvvlEp33rv/MVAHRGs1qVWcj1DpggAGGJUtblw9hix/hL4/Rh3dVn3VfHk7UTyPTcUz69r73oMr3jp4ClEe+wBmHdTruuqz83TeUZxhT4ACnglD8CDsdYpXKnTeCf8YxSsphT2o0GBst0+n9YJPDiY6LD6Cx9/GoVKv/BCRpnbYxIth+IgOs3C03NJMbhvNlbxxsox8SZhgE3NwoNJxuhP2UkWdUxX+cYqoiLBHkfxpcy8GV2Npn2uW/HEk1Ze0EsXz8c9EuGdn5x/bwVs3NZ8Djmmj2G92tJ4//h2O+M1L90nf/FoXD8pHB6F7KXvRQrUo4iT6wOzPz1bc+R/j8BxnJ+EK5gw/fIZXvjqj5q+5eDkxVovPDkKKvi7JWd1HeOK0xzf2xIuXO+7A7+tJdlQc5b2TxTkabV6W4zh34uGDn8cxv7//ow4q0a3PcPVwcnnpHKY+hTb7kYs3nQU5cvlL+4JESHaoE6KTSnFUm73jbiLM/M8RQ6+AwuVt+aU76nk2Xrvu5IiTU9/m1rXO8cyzdP1mRAOYdce+oLSFhq+7CNG5r3zXXqTXr3n/vv4IaLmiJnNOxjkOtdG8eTDUna49rT/a8M/mcP6oO96ZXCyyj6nOKKg3b+RxU4nw1gOcOawFHP6rMvcWvFB3m7U6bgQRJnTNjU0hwoev4qBJW/Y5q7x1wSXrnubTC9E66xoVXzosV7l4Bqx6ByfkTZ7zY3Riocpjl7HIjkQOideTCCCyz4lOc789mga/lQoPTKHBvTeQwxOvU2/jN4qIjOu7+dzbz4DTnpfpj/9cDbfuZjyi7KN2F3yMFmw4WpqMOYccPhkm5z4zqTXqeL/TATuGjoEu45iWd/3nyGs/o+ybViTKuKHC9YuF1j8ehuenk3mv5ftn4hzPn8h9v01rL3Umtv7U8/YnnFJegOybAqFoYRPJ3XQR9NrZBAqXN27/McOfx3ueOEUZZY/iJzzwOBEmfzCovGTflWPAbLhuU67jyA050GE5Hx4vg+YinofOIiJT4g15q/x4IsL9v9+Dsq/ac8+bWmP3heRwylw8Z3xyyiSkZG1botx3DhEpXvkiD4Q1EYHq7MN2TLiTMYtUPReMI4fbvvi8mXim30IuDwzGOTpujF4+GwVxyD4s4dfBR1kfHBSsQmgb64V6uWo+nicOx+GZcMnNN+ABhH1aC1fYDTggsoa4thqER6i9u5cwuj2K097hb6UiSfu0lfPnnYMDkPUETVbiAMfrU8h5OQ9AuOpclH3jSnJ8M3Raoh5QrR8/te89OAABYV+44kgVg44/4wCU/osm1BNJwin70o2EQqsfkCSE/OoI++bLItQv+ENIrSDso99eUw9YHvgKEGHfvDLwQV48AlfRPnuh+bgOU3KEff8qM4OT8f8H4PjXSJT/ExT2wQIAVlA4IAAYAAAwVQCdASoIAm0APp1GnEmlpD+hKjfre/ATiWxu2SIT/4isZWGd/4fsprset/tfo5WP/af2zzMdaPVHmu9G+fT+9+oP9QewH/augL+7/qA/az1iv+z6m/7n6gH9O/4XreeoZ/jf+57BX7F+nh+8HwVf3D/vfvT8Bf7b////1e4B/7vUA/8HqAdjr/gu4D/g2qY5Ngk69DQdFH8655O+S+k/+D2AP0R6q/+x4r/0D86vgB/m35q9nv92///7jX7O//UG1zqq2iJl890/HXqPWBBJ8RG7LEJwSaGFLd7PxeW3Hqu3HQTmkdJN0OAZcK2f/VduN8xymM+UF72bugAZiMKFdtXIYYHk73x6rtx6rHEZLL9MdoVm4vCjno9TL4wZDeKx/EFNWO0CfzOAa6Ugn8xQmNh6+ipc4ulvY+5fpqrAGFpE2j63TJARJGPm9VEDU/uQM4Oo2xqm9+QmF7smWm2Pi7ML0DMPXqffL8yN5EPq7DP//gxdN7TpezxrJPSrEOcg1f1cTb76C3vONq2t/O8sPHAStDD89LPw6EciiCROlDB3bknITVmaYlOmFTzfp6yHSqJzL0Pk+teAi2byaEP9HgF2pngE0x24Ns7aRH7annYJKfN4uGEOU6mhhrUvYLVzF2lYQ4cWTkMAnl75WgC/lbqSd1ceGl+fALOTTUZJrSeYIXrw2vMLYNTjTNSz7DwOLrVKXEXaujRlmlMxm/Ue654Hg+q6tt9Vd8d21jbwg5Dyqk721+fh3nvrcF/Zk5ljl8nIKsyL9fHKHfp30NKDZ5XZj8e2HKtpOg4QDQwgvZsrXUkRitUjfu9OwgVZYiMPGvEahV0C2T/0u9s4xiGYkzG64UIBXLA7M9xaFsPI7WtUj4h3XM4LWrHdUX33ViWnQ6xVkqxVkqxVkqxVu+7ceigA+f6ROFHtpjAXqBfV+f/wBUNJy9QAVUEm8KzOmqAbHBosKbkyUIce6dsTmwk1ZaOVZMKhzxrp2W042uGKpJ05PQt2zpf49FEcuZN89IL5OaRjaOpnjxH92cj1n9LEMlynKeprqgO4N1owVic5yAPewyMEqDqLNV2a18WGMRdnKO8porDob6rn8RU3KCs1wzwdlbJu636BFDbItGxk5mpdx9T6QU8BgF7s7yEcwVpWAm4pgtB9qo8UF9Urd3zW/E7PY0NkSNDCB9UjSKxKlA17Z+5iWVaXBgG0C/Gg2dY21wtNNDvZoAAYj0vfwgV19p5BBhlJKcodXWbhIaRAMnAJGtVxLWmqhDc3nku4DMh/ykS2rgw+WRYRTk4ABmXmFb0w1m9UaIwT1PD0e5oLiPsRzRNbsj05WsKjfue5LIFN4GgpNqrjotHdnvq/yUNiEK5pg86JhoGKQHrqT2sNjD+4cVCOG2pylXpipfyY3HN4IPgyf9xxb3JNRDVOFgHGiIO7GjhhN56JEm8D+pKsnvmeD0dbuDSgp9wK034aU/UMtrRWMWX7IeDJp+LQ0ALA8nRRxhkiv/EWXqiII7yEvr4aPf3l6rrkE0QnK4uOfzR8+2i6KtPsDfYcjAZEtR7CWQyrieJOWUNJyVsrJIpjK2xMNfUEyLgt7nvazZfIUtpZk2ASK3U1eczjatLD/VEy5SZXhLG61UUtkklLPabvBraFHhRdHLhSkMyIfntov4ZGhb7lmc0hko5gC5zAmFzNl4ZRToft9+bn7qwA+rzaSBQ6sqCEv2Nr9Dw2r89Ny8+1c2fIfpLzy7DGwfCSOVTkPwK4n6Zi20skzzbQPvdXU603FBwAAN3Rb2l2w4WGSxfC26wturfTfPt0aeOUR73LAcaOfbHVwGQfA+/D3ubfgQu3maDmtsIm4hKFSXqyoO8tiEfbntaPxm5lV/kV2DDhMEqPvJS3SofdonkAZXGgzX0+5tlwwH593P2x//5Gn/z3d//N55f1oPrEkpgSLcPQC3sKGXrcoEeBkIRTQF1agY20atqN1w9hEm8ZMVyYAelgYjbpVPcOOYjeOPVyfZcKsWBI1ijDXlvj9K4JX6w0TdJTPCrbFT8V1z1TcET/baUGyYlh4SoQ5Hy8VbgCFtZAM1jvNg9N8pu2evuDu+uwl8jTWQHjGWNyGhXelYp/S68E9oKm0CaEBF6DX0qYDDlASswnfGEL7vzSgLwDQ8JsLnVCBOFM27OM+GaFXArbGXFuaQd/E0/a6X9ENq3PwR+gjZa5LivjIWnZFSuTcgHETJf0I9P/mwRJFpcqMcfX9NlDuj4h2/r3MnZbf/n3v2f/8IgZ6stUuqzmUVVOiyIfsAXbKccuQAbkIW2e+myfETuUAVLoEDH8xVcag44LKpJkWpEGSd3v5mJxy8jdGc9FclC3z7T87JoaJPVtSDDTE0g9baZ78fZ+TIgZsRMoprOfXac1bluUznutOgsqcZTAxEw1k7LyjcYpBUZZPZbkE9+gOY0hmJtPm8GFe13z00zsLp31ppTaV/bI1C/4IbgBUdtATq4wiANNC8eVhdXJbnEokNRCDl6+rWY5vl17L9VwMd1iGvcIJwSUhimC5K1B/38YCJ0Vrl0lRMVIcLSio1ABtnDMYpRZLorwJ5sA6i1gC/phYBGXBEYur6IYsC3nvimw1gP1gGKh2hkDP3oUrkvMLsHQjZ4TbQBWWXMBCznEdrMmZEli5vWk6aZSnnU2sCvkGd8i+5xfoLdAMXrG9EHJ5aix2zFIOQh46y9fK59Vd3HrBc1zMnMMcvL0kkccBWzvcSwdSoAF/pJmFezPgvg1X+IKdNxaoxPZiHCrLJD409Nwx9IPSnAODKHc/ZiqyNlrAOC9qzzPTumUFO3bKCXwDDNrZZA4KdWf4vn3uiv3NrvNarucbYIIjG5b1DZWil2sDj/xzdM0rhqQB1haC2ldCXk04pHPYML0T+MHHyWXu0chzK6kg/fPoi5K0nxoix+TxI8OLNFNSdQKdJE5JWRtqr5/qCy11/2mDo/L0c4GhkfpAXIsbjQxsEtJr2zUaidHgpI5cktLXQCHFMEUGbKJIxVQToWcKepR+kZ/s92AqLsaWtNF+0h6DHAD8y78KtD1nNXyyPKckDGX/Sz9TIlcINPGaIWjzS/GG5YqFhzYErrrzrHVKf2RRIptq7WU0zjmQshTUSaVjvrFbYMEqmKFUwkPoFCTdkV21p+8wtNU93jjH8sgXbGk1zyNTnXlX8qYH/riWNO0cqk85X8c8o+rf44vLRUnMKDNY4GZzuxVU5iqjne+HIBAo5IniGG8SnEssnI/kfQr7ZO7IxMGDJjOtweCtkfVArzJ+ds5ap2NkXuStBo0/176zQkSeNf+IJmQHYXn+VxPyG0Nz5TVZcZXO+tl59AL4NdsbZz2cToR/WAwe2SojqL+UzRkNHYABrcpsBANNe7ynJM09FKF30I1AYlnqTK45YV/K1ZuJ1mtQSX2zgpNtDBT6TGx4u7GHZZ7sZQE7Ofqs1kwNm5+P8F/9m0gyQwWkdMwF499KREjP0P5wJBTUD9OVHy/iT0OOL+gPjpN7hylgEyd9fy2uZ8vC2HuSxQDVhn0oPL1hnK+9K/stEDOahovgGNTSDuMwMh+UpsAfYAWn07ktKKzHKhfFRcLMKxiTbtmmJWhF8+LzwDGOOdPMIxNdvejApVKQUrlNCeCLIVnY3222E+snmPHHa5bIdf9u4Yaw9JNwTzPiATaMXeTbaGnf81a4aAemVvZ5xXWqPF6pmkvFaP7tXp4g0Q1rC35kh36oXmCo/894ditpgCUvn0ZSwrjAS2mFnWd+pt6H6WBBUST3Gy/k8RbSbOewSgzbl0q/PWvTd9a90PCILfTN1faqulgrk1daa4VPf9FW+MjLH4CV/12hwpADY9L+3IQXzu/3r7iBEAoY0nskP8Lz2YaUdW1XYpnAP+r/Y+UcKFsMOgbec0CZlS7JICxZ5K1Zm7woN0KVrvgEOsk0Wql4pkhrMw7Zev3/ce/Q8SB1i51BH6kILdPjmzJ1oHoajEGWEvT+xXlKoZo62BK/lqP5TFjaepggxpwgworpaeevKIaZbRavrAyB+LtD631u31LMY1X68q6Aaz+ZN/6Ry2rv7TRQzNT8IgE4/E5URf+Zm4im4qpId3qRl5fd/xlPPjtH34dbCQmucKTcoenLln560Zc2MVSpFGqUoD4dC/JOSe6qNws5EMy9UbQmUJ6fd/v5x+sJaYoTagfbkyKknGVqbQDxTNBvaOXq877+hs5byHxvIjIcoZ3ph1809fmZ6ogYiM3IG1acN/uFYUOtcyRwf5YsUs8aP4os2ks2FkQEadvlxsRfWUoiYr4xhMHh4MquMyvStjAwhDMTRCloMujT3w6Z35KzuNS1V/jXG9fQ3mfGgGyleTFJdTSfmQS3+3khFvLTFRFC3sPOUw5l7LtUnpJn4lbE5rlXhpEXeAgEhY/gXPpnSg46I7qbfHpTRx8yCvb0ZzBW22dc/6EE1oB99jAcyZthaNIS496NTyxU80IE3HVmNRIxkT0as5yKXJBTAqcvdeoN9lPWchZPSsuesa10Wrs0U58R9bpdJbAQYeu2xjg0IetXpKagcoFoHbhpLVV2zLrRl9wHJjZdaQTMSyE7yM1TabOXmB5goUiVHWXA7usbs/hTv8WnYTP1FQc1agpQUxbb1MM0/TMdWooVzZGZJfQLLa6+nCrgL5IfwuF0+PsDIK2pOUKVkZ++MhzqldPnnAWx3f62154KoJ1vfWMbLxtZGL1viSxW0HXZ2l57Cbn5KVmfJ7T9Cn6uCxz8kypGjs4/ftnK8qXjFeIxYBIbFn4g+pO32Z9FlKoNfunsc3ev20do+8LJCIQzFHTQraddATuilcLQMCzGG87uxMYpnM5eytW8mS9MIZF8LSFHnxdKa3UcOZ04dPcYd45LwaBSepTcU5OJXsSvkwOtgN5ZWGE1m8zi5LkzgzUPAkZKP+498P+yDvzVkH53SVnGuFXJ8N3aNdfI2sRTlOELCo+qgWlqrIzRhnts9VyjSEgGR8q9O8SKL19er8HjGjOIQzYoyHtMF0saUQsn7dhOazHx6itRnJxp/lcKGX0AEAsPLAqnUCnU9HP1jusrlJbHQOpyn3c09umZ0RMCJLjnUEBVRVWxrtAZjV/49yyrQUu74eu6OnPw/pUcWtSXsL0UUdPHyVkWjNwc78Yedm/ZEFhvIjSIoLmwMPSSYjEwYnY1rbHoaCaVO2UWRmdjDnuCYJfbCn4fDJcbUlIAckI0rpwV+0uvVqlaeSrxwbwaD2zSYn5E7gI2n6Y6NCOPHgSxH7IUH4OIN39X0W4x15mmy8xjBR4zyKx2BEklYNuObSv4pj5okAwVWlTtgq9+pdX8kFqDfquanwkvdkiYgCD4rKDAkZTSz+D5kZlWOgHAAfGC1ouxs9hwrSq1CiuJpQggk2yzZxbwEqBokooLO3yExaXglPbwQKoOcyzP6o9CEU2oaZSzukJ0mNyGfmVBpB7eSJ19tY8LdSBSBV5eeIvETJO7DA7RyTvApriZRBNmVcXmIXKkGZumXKzvbEdrqoSeEKCOMzW6dy77LLO0mj35q3MVFHlZ11YRPUSPHYSkeqrMg73h1LstedrklmmWCBNuKSA8R9PeYRnuHI4ltGTdolDp0I9ivg1XQHjzOEJ1gmPHTt9JH42y8yv6eGpF3/I/O2OdhIvB1WYOCZinX/amjGR606iwUrKdmdsK9w1sfUjAOnnZWAE/kguLrXRb3eYK2itquoKt+tb/2Bb8iUVEttGiW+WOUNrZ0oJHhPTP1CkKNWgCLy7X2jcP+X+yCAqwzyqczRovA+sA5rLesYA1HGusRjqgfMVcVTZG0jwGfOhQ5Hg1BRTks8ANYg4Xys9WVL3a4m9/5U3fn/aodzvf0loSxEM8ItlLEuHyvu8aBXREpKTfXMzg3JKn6hAGquuv7oB5bKRDvHy0rpZIppY15s4MJS420YQVFgdnsi1Y3BjZXt1hhAaGHSluMjBtar3/82Kv6FtSVxm7iDTEg+zawJxqUbnoO1iO/rKauoHqZUs6xlm7s2AG1rfVFLUAGCB/uHKM7+6lL7GXcL8Wa2OpSIguF3jeYQXBKy1PO+EizFo2VDuenvj49bBy4SJX7G7MY/8w7+31dgt54KJoUw+D9/DIJhhqLXJaNGuz7v++csQAHL5DhT+vvrXGoW8dgj+rL99ibqdhH+ANhysFbujR0/hYJq4DutjvEMW1eu7jPB09Up+2D8fteOx5/AjwMDKSSEs00xunQhXTGySk2WlxWpHYt6nzV/Koyp2ruj3tHB2T5bPpocKQGLcu29Eh5q2JH+oqrHZv8QmqK4l9PcL1Ya/bpsA3YlQVD5HYNui0x5g5USqhKES5i+MzGEDGVYKxJNkJpWQjuPEQD9Jg2431jLyXRmK3HL8LH4do2mWJz0JD51dDDGGZVtc7tpIvmTsDfhUERskvRMsOUGq7KTynIpmdmynZ/vwac6Pyc5XsArzE7gwSmrUmHCvZ/SQMjtabdSrNq4WGE/pYaNPflYET6Oj/Ex4JrxGab6u16OC6N2YERSZ3AeP9Ww/iAO5A4rDP4YGxqUCuiO7pHZP0AUmuwBySFDyhnx5QaS7RMYZMPuqrkQuOhnNzG4aim0Os49pirs8E5hHGwkHj8QfclDuYmmqWY0LFsMMMEgAs7JOnLVpJBrnu/xQpUFp1vN+mAwRfZqnv3NrKJzsWQWkREScAIUxU2yRSOXGAvy3Iw8FafGh5Fh9NWPQQtbmjg3bbCt7IRfad1aM5v0z+00C9fok7wI9hP8bWYsgMk/tm5bxZav4oull8AOWYnC6NQDKDtFbBmj4HY22yvbYbyDJJpdLmQt1+V8EKmfAhIoz+tjMEDhSIUecz/P6iI7EeJyLGYHmc7ewiOJJerfe01pEdPgKp5TXH9P3pgWBX2Se6Un3i7fI0fm2C1jZ07CibiyTUjTznAXwe4Q+4+TIXZeoJp+GwDoRO4WIHOPU2uNmiV90OOLK9+fvGHsVYiRflgtJzEKM2+U6MbLU1m1Myvv9UftK4kEZSUSwnGXzosGB/DWlqe+3c1C0oHDeOsz7J8T8z6tLOqYdxZGvqqEbHSSylaXD6fAAcBFPJ1QOueqt683xPfY3aulzwLcxge329xouBDyHuv4t7dWuV+DVPuFLpqC2Mk4oD7Ka7x4qHw82q2ilEZLDSw55/7b17WbrR/hS+P8/og+O4hpznS2EJ0RgKPkFpGB2vyjZCYW7BU19AShklGwWU+cK+6Lz+twU4DMlYCzkEYjV4F7VXSrSM4B+m30pNYGx9xWQt1lgRHKklG+QupkE9V5h0j5V/AIxhGQr62Rsm6R2vpvLuJ7lsqaqpaN5xzJpU7UFGgxHBc2RgveOBS7BCPrxT9k0oPGJL3MGyRyOlqzZsW6l/6prGP1ICDQgZf0bp7VEUWVKJ1XIeyGQNngB653XoqKrsR2NvBGUIf0MoFiXfgrSMe4Kwn+FfCMob3EOqodFC+o7LtQLWDje8vF/4zLIttLoccHjVeSHDNlUsxYsUr6r+eU4jtFlPH9kuOwHfmD/AJ8422Lf0B47CfA8gD26Fkqs1BBAfaFuAYIzaFoapDtRNaTlrDZ8eu6WvduP2VvDMcyFahBb66h00lwPRh46SgnAmMK9WpxrZgQCsBRF9KAjDRgwbg0d0QNrVYhDRGCqzBLHdmfPTksvI3vwWEbWHPjreV6PECdd8aMd/PEZBVan5eImSzyDv9tvLrgSNtn4pQr4WnV4nO67zvQXqt6W8y+uJOfLnKbgvlgbZxgbAszYh11AFGVRcuR5AWkxHLz7pxm+NgSzL6U8BoAh6sFU9tBaF3hm2A2KKlGsGZslcqJwbN9j2NKY0/+IcoOmUQvzV1V2wAAAAAAAymH//sHmHTcs2VOe8fsmY9y2jMPQ8RONOpD3tfC71Otoz3/zVK0MglO/NAcAvkY5544sZAYYSddJKYw302jhUHXZQ8XwTxFdleynIcIh1EhZ6/I9uqEkAhobTAAqLYnbN5D7DNPIlTlu405wb9lM8wcvwAKjRf0g4s+tyD/o0wPOWqHYdIYcjVjeAcRUmxwNR3PgBsZ20CEdC8VKXSjR0C9U41/YiG9kh6AUr0lJgAId6nPIJxLzAkF+Wd3+BfmLTJIgv26pVvZLaJ1Iy+kylMgOIPLviYuV0xvIM9J7/7qktJgf6Pt1wxM4DGdNivyQAAAAAAAAAAAAAAA=';
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
.launch-ps{font-family:var(--f-body);color:var(--walnut);font-size:15px;margin-top:var(--line) !important}
[hidden]{display:none!important}
.tape-lilac{background:rgba(167,139,214,.5);left:auto;right:44px;margin-left:0;transform:rotate(5deg)}</style>
<article class="note">
  <span class="tape tape-lilac" aria-hidden="true"></span>
  <!-- \u270f\ufe0f edit the text below -->
  <p class="date">a note from us</p>
  <p class="dear">dear neighbour,</p>
  <p>thank you for finding your way to our little corner in peckham. once a month we bake a small batch of good things and cut whatever's blooming, and we'd love for some of it to end up on your table.</p>
  <p id="orders-para">orders close the tuesday before each drop weekend, collect on saturday or sunday, and if you'd rather swap than pay, we're always up for a barter.</p>
  <div class="sign">see you soon,<img class="sig-logo" id="sig-logo" alt="bloom and bake" hidden><strong id="sig-text">the bloom &amp; bake crew</strong></div>
  <p class="launch-ps" id="launch-ps" hidden></p>
</article>
`; this.applyTilt(); this.initPop(); this.initFit(); var me=this; setTimeout(function(){me.applyTilt()},300); this.applyLogo();
  }
  static get observedAttributes(){ return ['tilt','data-tilt','logo','launch','launch-text']; }
  attributeChangedCallback(n){ if(n==='tilt'||n==='data-tilt'){ this.applyTilt(); return; } this.applyLogo(); }
  applyLogo(){ var r=this.shadowRoot; if(!r) return; var im=r.getElementById('sig-logo'), tx=r.getElementById('sig-text'); if(!im) return;
    var v=(this.getAttribute('logo')||'').trim(); if(v.toLowerCase()==='off'){ im.hidden=true; tx.hidden=false; this.applyLaunch(); return; }
    im.src=v||BLOOM_LOGO; im.hidden=false; tx.hidden=true; this.applyLaunch(); }
  /* launch="on" adds a p.s. under the sign-off; launch-text changes what it says */
  applyLaunch(){ var r=this.shadowRoot, ps=r&&r.getElementById('launch-ps'); if(!ps) return;
    var la=(this.getAttribute('launch')||'').toLowerCase(), on=la?/^(on|yes|true)$/.test(la):bloomLaunchOn(); ps.hidden=!(la&&on&&this.getAttribute('launch-text'));
    var op=r.getElementById('orders-para'); if(op){ if(!this._opText) this._opText=op.textContent;
      var ld=bloomLaunchDates(), cl=ld?bloomRelDay(ld.close):'the wednesday before', pu=ld?bloomRelDay(ld.sat):'on the saturday';
      op.textContent=on?"our very first drop is on its way, and thank you for being one of the first. "+(ld&&new Date()>new Date(ld.close.getFullYear(),ld.close.getMonth(),ld.close.getDate(),21)?"orders are closed now":"orders close "+cl)+", pick up "+pu+", and if you'd rather swap than pay, we're always up for a barter.":this._opText; }
    ps.textContent='p.s. '+(this.getAttribute('launch-text')||"we're brand new and still finding our feet. thank you for being one of the first.").replace(/^p\.?s\.?\s*/i,''); }
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
    <p class="classics-line" id="classics-line">plus our classics, flowers included, every drop</p>
  </div>
</article>
`; this.applyTilt(); this.initPop(); this.initFit(); var me=this; setTimeout(function(){me.applyTilt()},300); this.applySpecials();
  }
  static get observedAttributes(){ return ['tilt','data-tilt','specials']; }
  attributeChangedCallback(n){ if(n==='tilt'||n==='data-tilt'){ this.applyTilt(); return; } this.applySpecials(); }
  /* page code can send {heading, items} as JSON in the "specials" attribute */
  applySpecials(){
    var cl=this.shadowRoot&&this.shadowRoot.getElementById('classics-line'); if(cl&&bloomLaunchOn()) cl.textContent='our very first drop, plus the classics, flowers included';
    var sh=this.shadowRoot&&this.shadowRoot.getElementById('specials-heading'); if(sh&&bloomLaunchOn()&&/this month's specials/i.test(sh.textContent)){ var le=bloomLaunchEnd(); sh.textContent=['january','february','march','april','may','june','july','august','september','october','november','december'][le.getMonth()]+' soft launch'; }
    var raw=this.getAttribute('specials'); if(!raw||!this.shadowRoot) return;
    try{ var d=JSON.parse(raw); }catch(e){ return; }
    var list=this.shadowRoot.getElementById('specials'); if(!list) return;
    if(Array.isArray(d.items)&&d.items.length){
      var star=list.querySelector('svg').outerHTML;
      list.innerHTML='';
      d.items.forEach(function(t){ var li=document.createElement('li'); li.innerHTML=star; li.appendChild(document.createTextNode(String(t))); list.appendChild(li); });
    }
    if(typeof d.heading==='string'&&d.heading){ this.shadowRoot.getElementById('specials-heading').textContent=bloomLaunchOn()?d.heading.replace(/^(\w+)'s specials$/i,'$1 soft launch'):d.heading; }
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

/* ===================== soft launch notes =====================
   bloom-launch-note   a little sticky note:  psst, we're soft launching
                       first-drop = e.g. "sat 24 oct"   (shows "first drop: sat 24 oct")
                       text = your own message (optional)    color = yellow | pink | lilac | kraft
   bloom-launch-stamp  a round ink stamp to overlap the letter's corner
                       top / middle / bottom = the three lines of the stamp
   bloom-launch-tape   a strip of washi tape with handwriting
                       text = what it says (default: soft launch!)   color = lilac | orange | green
   all three take tilt, like the other notes */
var BLOOM_LAUNCH_CSS=':host{display:block;box-sizing:border-box;pointer-events:none;'
  +'--f-display:"Jnr","Gaegu",cursive;--f-body:"Agner","Gaegu",cursive;'
  +'--paper:#FFFDF6;--sticky:#FDE9B8;--kraft:#E9D3AE;--cream:#FEFCEC;--tangerine:#EC8E4C;--cocoa:#35261B;--walnut:#8A5A34}'
  +'*{box-sizing:border-box}[hidden]{display:none!important}.note{pointer-events:auto;position:relative;transform:rotate(var(--tilt,0deg))}';
function bloomLaunchEsc(s){ return String(s).replace(/[&<>"]/g,function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }

class BloomLaunchNote extends BloomNote {
  connectedCallback(){
    if(this.shadowRoot) return;
    var r=this.attachShadow({mode:'open'});
    r.innerHTML='<style>'+BLOOM_LAUNCH_CSS
      +':host{padding:20px 14px;--tilt:-2.5deg}'
      +'.note{background:var(--bg,var(--sticky));padding:26px 24px 22px;box-shadow:0 1px 0 rgba(53,38,27,.06),0 12px 22px -12px rgba(53,38,27,.35);color:var(--cocoa)}'
      +'.tape{position:absolute;top:-12px;left:50%;width:84px;height:24px;margin-left:-42px;background:rgba(167,139,214,.5);transform:rotate(4deg)}'
      +'.psst{margin:0;font:400 18px/1.1 var(--f-display);color:var(--walnut)}'
      +'h2{margin:2px 0 10px;font:400 clamp(26px,9cqi,34px)/1.05 var(--f-display);text-wrap:balance}'
      +'p.msg{margin:0;font:400 16px/1.65 var(--f-body);letter-spacing:.03em}'
      +'.first{display:inline-block;margin-top:14px;padding:4px 12px;border:2px solid var(--tangerine);border-radius:10px 14px 9px 13px;color:var(--tangerine);font:400 19px/1.25 var(--f-display);transform:rotate(-2deg);white-space:nowrap;max-width:100%}'
      +':host{container-type:inline-size}</style>'
      +'<article class="note"><span class="tape" aria-hidden="true"></span><p class="psst">psst&hellip;</p><h2>we\'re soft launching</h2>'
      +'<p class="msg" id="msg"></p><span class="first" id="first" hidden></span></article>';
    this.applyTilt(); this.initPop(); this.initFit(); this.apply();
  }
  static get observedAttributes(){ return ['tilt','data-tilt','tilt','data-tilt','text','first-drop','color']; }
  attributeChangedCallback(n){ if(n==='tilt'||n==='data-tilt'){ this.applyTilt(); return; } this.apply(); }
  apply(){
    var r=this.shadowRoot; if(!r) return;
    r.getElementById('msg').textContent=this.getAttribute('text')||"we're brand new and still finding our feet, so thank you for being one of the first to stop by. tell us what you think!";
    var f=this.getAttribute('first-drop'), fe=r.getElementById('first'); if(f){ fe.textContent='first drop: '+f; fe.hidden=false; } else fe.hidden=true;
    var c={yellow:'#FDE9B8',pink:'#F9D9CF',lilac:'#E6DCF5',kraft:'#E9D3AE'}[(this.getAttribute('color')||'').toLowerCase()];
    if(c) this.style.setProperty('--bg',c); else this.style.removeProperty('--bg');
  }
}
if(!customElements.get('bloom-launch-note')) customElements.define('bloom-launch-note', BloomLaunchNote);

class BloomLaunchStamp extends BloomNote {
  connectedCallback(){
    if(this.shadowRoot) return;
    this.setAttribute('popout','off');
    var r=this.attachShadow({mode:'open'});
    r.innerHTML='<style>'+BLOOM_LAUNCH_CSS
      +':host{padding:6px;--tilt:-12deg;max-width:100%}'
      +'.note{width:100%;max-width:220px;aspect-ratio:1;margin:0 auto;border-radius:50%;border:3px solid var(--tangerine);display:grid;place-items:center;text-align:center;color:var(--tangerine);'
      +'background:radial-gradient(circle,transparent 0 60%,rgba(236,142,76,.06) 61%);opacity:.92;mix-blend-mode:multiply;container-type:inline-size}'
      +'.note::before{content:"";position:absolute;inset:7%;border-radius:50%;border:1.5px dashed var(--tangerine);opacity:.7}'
      +'.in{display:grid;gap:3px;padding:0 16%;justify-items:center}'
      +'.s{font:400 9cqi/1 var(--f-display);letter-spacing:.04em;white-space:nowrap}.big{font:400 17cqi/.95 var(--f-display)}'
      +'.star{font-size:9cqi;line-height:1}</style>'
      +'<div class="note" role="img"><div class="in"><span class="s" id="t1"></span><span class="star" aria-hidden="true">&#10047;</span><span class="big" id="t2"></span><span class="s" id="t3"></span></div></div>';
    this.applyTilt(); this.initFit(); this.apply();
  }
  static get observedAttributes(){ return ['tilt','data-tilt','tilt','data-tilt','top','middle','bottom']; }
  attributeChangedCallback(n){ if(n==='tilt'||n==='data-tilt'){ this.applyTilt(); return; } this.apply(); }
  apply(){
    var r=this.shadowRoot; if(!r) return;
    var a=this.getAttribute('top')||'peckham', b=this.getAttribute('middle')||'just opened', c=this.getAttribute('bottom')||'soft launch';
    r.getElementById('t1').textContent=a; r.getElementById('t2').textContent=b; r.getElementById('t3').textContent=c;
    r.querySelector('.note').setAttribute('aria-label',a+', '+b+', '+c);
  }
}
if(!customElements.get('bloom-launch-stamp')) customElements.define('bloom-launch-stamp', BloomLaunchStamp);

class BloomLaunchTape extends BloomNote {
  connectedCallback(){
    if(this.shadowRoot) return;
    this.setAttribute('popout','off');
    var r=this.attachShadow({mode:'open'});
    r.innerHTML='<style>'+BLOOM_LAUNCH_CSS
      +':host{padding:6px 4px;--tilt:-3deg;text-align:center}'
      +'.note{display:inline-block;max-width:100%;padding:8px 26px;background:var(--tp,rgba(167,139,214,.5));color:var(--ink,#4E3B73);font:400 26px/1.15 var(--f-display);'
      +'clip-path:polygon(0 8%,3% 0,97% 4%,100% 0,99% 92%,96% 100%,2% 96%,0 100%)}</style>'
      +'<span class="note" id="t"></span>';
    this.applyTilt(); this.initFit(); this.apply();
  }
  static get observedAttributes(){ return ['tilt','data-tilt','tilt','data-tilt','text','color']; }
  attributeChangedCallback(n){ if(n==='tilt'||n==='data-tilt'){ this.applyTilt(); return; } this.apply(); }
  apply(){
    var r=this.shadowRoot; if(!r) return;
    r.getElementById('t').textContent=this.getAttribute('text')||'soft launch!';
    var c={lilac:['rgba(167,139,214,.5)','#4E3B73'],orange:['rgba(236,142,76,.32)','#7A3E14'],green:['rgba(150,180,130,.45)','#34502A']}[(this.getAttribute('color')||'lilac').toLowerCase()]||['rgba(167,139,214,.5)','#4E3B73'];
    this.style.setProperty('--tp',c[0]); this.style.setProperty('--ink',c[1]);
  }
}
if(!customElements.get('bloom-launch-tape')) customElements.define('bloom-launch-tape', BloomLaunchTape);

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
  <p id="crumbs-text">missed it? whatever is spare, bakes and flower clippings, drops wednesday.</p>
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
    var ct=r.getElementById('crumbs-text'); if(ct&&bloomLaunchOn()) ct.textContent='missed the first drop? whatever is spare, bakes and flower clippings, drops thursday.';
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
