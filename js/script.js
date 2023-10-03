document.addEventListener("DOMContentLoaded", () => {
  const ACTIVE_CLASS = 'active';
  const ALT_ACTIVE_CLASS = 'active-alt';

  window.addEventListener("click", (e) => {
    if (e.target.closest(".btn")) {
      document.querySelectorAll(".btn").forEach((btn) => {
        if (btn !== e.target.closest(".btn")) {
          btn.classList.remove(ACTIVE_CLASS, ALT_ACTIVE_CLASS);
        }
      });


      e.target.closest(".btn").classList.toggle(ACTIVE_CLASS);

      if (window.innerWidth - e.clientX <= e.target.closest('.btn').querySelector('.btn__content').getBoundingClientRect().width) {
        e.target.closest(".btn").classList.remove(ACTIVE_CLASS);
        e.target.closest(".btn").classList.toggle(ALT_ACTIVE_CLASS);
      }

    } else {
      document
        .querySelectorAll(".btn")
        .forEach((btn) => btn.classList.remove(ACTIVE_CLASS, ALT_ACTIVE_CLASS));
    }
  });
});
