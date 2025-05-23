document.addEventListener('DOMContentLoaded', () => {
    function createStar() {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      document.querySelector('.stars').appendChild(star);
    }
  
    function launchComet() {
      const comet = document.createElement('div');
      comet.classList.add('comet');
      comet.style.top = `${Math.random() * window.innerHeight}px`;
      comet.style.left = `${Math.random() * window.innerWidth / 2}px`;
      document.querySelector('.comets').appendChild(comet);
      setTimeout(() => comet.remove(), 1600);
    }
  
    for (let i = 0; i < 100; i++) {
      createStar();
    }
  
    setInterval(launchComet, 3000);
  });
  