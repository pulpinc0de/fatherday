window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.7 }
    });
  }, 800);
});
