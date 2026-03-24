(function () {
  const dropdownButtons = document.querySelectorAll('[data-testid="dropdown-toggle"]');
  dropdownButtons.forEach((button) => {
    const targetId = button.getAttribute('aria-controls');
    const menu = targetId ? document.getElementById(targetId) : null;
    if (!menu) return;

    button.addEventListener('click', function () {
      const open = menu.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
    });

    document.addEventListener('click', function (event) {
      if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
      }
    });
  });

  const tooltipTargets = document.querySelectorAll('[data-testid="tooltip-target"]');
  tooltipTargets.forEach((target) => {
    const tooltipId = target.getAttribute('aria-describedby');
    const tip = tooltipId ? document.getElementById(tooltipId) : null;
    if (!tip) return;

    const showTip = () => tip.classList.add('visible');
    const hideTip = () => tip.classList.remove('visible');

    target.addEventListener('mouseenter', showTip);
    target.addEventListener('mouseleave', hideTip);
    target.addEventListener('focus', showTip);
    target.addEventListener('blur', hideTip);
  });

  const modal = document.querySelector('[data-testid="demo-modal"]');
  const openButton = document.querySelector('[data-testid="open-modal-button"]');
  const closeButtons = document.querySelectorAll('[data-testid="close-modal-button"]');

  if (modal && openButton) {
    openButton.addEventListener('click', function () {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    });

    closeButtons.forEach((button) => {
      button.addEventListener('click', function () {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
      });
    });

    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  }
})();
