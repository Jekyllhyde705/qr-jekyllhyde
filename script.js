document.addEventListener('DOMContentLoaded', () => {
  const saveBtn = document.getElementById('saveBtn');
  const heartsContainer = document.getElementById('hearts-container');

  saveBtn.addEventListener('click', () => {
    launchHearts(24);
    downloadVCF('contact.vcf');
  });

  function downloadVCF(filename){
    const link = document.createElement('a');
    link.href = filename;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function launchHearts(count){
    const symbols = ['❤','💚','💛','🤎','💖','💕','💗','💜','🧡'];
    for(let i=0;i<count;i++){
      const heart = document.createElement('span');
      heart.className = 'heart';
      heart.textContent = symbols[Math.floor(Math.random()*symbols.length)];
      const left = Math.random()*100;
      const delay = Math.random()*0.6;
      const duration = 1.8 + Math.random()*1.6;
      const scale = 0.6 + Math.random()*1.4;
      heart.style.left = left + 'vw';
      heart.style.bottom = '-5vh';
      heart.style.animationDelay = delay + 's';
      heart.style.animationDuration = duration + 's';
      heart.style.transform = 'scale(' + scale + ')';
      heartsContainer.appendChild(heart);
      setTimeout(()=>{
        heartsContainer.removeChild(heart);
      }, (delay+duration)*1000);
    }
  }
});