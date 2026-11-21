const launchBtn=document.getElementById('launchBtn');
const fullscreenBtn=document.getElementById('fullscreenBtn');
const statusText=document.getElementById('statusText');

launchBtn.addEventListener('click',()=>{
  statusText.textContent='Abrindo Eaglercraft...';
  window.location.href='game/index.html';
});

fullscreenBtn.addEventListener('click',async()=>{
  try{
    if(!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  }catch(error){statusText.textContent='Tela cheia não disponível neste navegador.';}
});
