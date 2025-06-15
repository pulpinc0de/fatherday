<<<<<<< HEAD
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.7 }
    });
  }, 800);
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("confetti-btn");
  if (btn) {
    btn.addEventListener("click", () => {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
    });
  }
});


=======
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.7 }
    });
  }, 800);
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("confetti-btn");
  if (btn) {
    btn.addEventListener("click", () => {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
    });
  }
});
>>>>>>> eb9a012 (confetti)
