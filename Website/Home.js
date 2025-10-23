document.getElementById('toggleSidebar').addEventListener('click', () => {
  document.getElementById('sidebar').classList.add('show');
});

  document.getElementById('closeSidebar').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('show');
});

function goTopage2(){
  document.body.classList.add("fade-out");
  setTimeout(()=>window.loccation = "index.html", 500);
  setTimeout(()=>window.loccation = "Profile.html", 500);
  setTimeout(()=>window.loccation = "Services.html", 500);
  setTimeout(()=>window.loccation = "About.html", 500);
}

window.addEventListener("load", () => document.body.classList.add("loaded"));

(function loadLocalGSAP(){
  var script = document.createElement('script');
  script.src = "../lib/gsap.min.js";
  script.onload = function(){ console.log("Loaded local gsap.min.js"); };
  script.onerror = function(){ console.log("gsap not found locally — fallback will run"); };
  document.head.appendChild(script);
})();
