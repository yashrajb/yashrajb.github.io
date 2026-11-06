/* Theme toggle + mobile menu, shared by every page. */
(function(){
  var d=document,r=d.documentElement;
  var tb=d.getElementById("theme"),h=d.querySelector("header.top"),g=d.getElementById("burger"),m=d.getElementById("menu");

  function paint(){
    var dark=r.getAttribute("data-theme")==="dark";
    tb.innerHTML=dark?"&#9728;":"&#9790;";
    tb.setAttribute("aria-label",dark?"Switch to light theme":"Switch to dark theme");
  }
  tb.addEventListener("click",function(){
    var n=r.getAttribute("data-theme")==="dark"?"light":"dark";
    r.setAttribute("data-theme",n);
    try{localStorage.setItem("theme",n)}catch(e){}
    paint();
  });
  paint();

  function setMenu(open){
    h.classList.toggle("open",open);
    g.setAttribute("aria-expanded",open);
    g.setAttribute("aria-label",open?"Close menu":"Open menu");
    g.innerHTML=open?"&#10005;":"&#9776;";
  }
  g.addEventListener("click",function(){setMenu(!h.classList.contains("open"))});
  m.addEventListener("click",function(e){if(e.target.tagName==="A")setMenu(false)});
  d.addEventListener("keydown",function(e){if(e.key==="Escape"&&h.classList.contains("open")){setMenu(false);g.focus()}});
  matchMedia("(min-width:821px)").addEventListener("change",function(){setMenu(false)});
})();
