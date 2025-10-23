document.getElementById('toggleSidebar').addEventListener('click', () => {
  document.getElementById('sidebar').classList.add('show');
});

  document.getElementById('closeSidebar').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('show');
});

function goTopage2(){
  document.body.classList.add("fade-out");
  setTimeout(()=>window.loccation = "index.html", 500);
}

window.addEventListener("load", () => document.body.classList.add("loaded"));
