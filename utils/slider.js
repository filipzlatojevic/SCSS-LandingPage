const pricingContainer = document.querySelector('#pricing-container');

if (pricingContainer) {
  const singleCard = pricingContainer.querySelector('.pricing-card');
  const arrows = document.querySelectorAll('.arrow');

  let isDragStart = false,
    prevPageX,
    prevScrollLeft;
  let cardWidth = singleCard.clientWidth + 10;
  let scrollWidth = pricingContainer.scrollWidth - pricingContainer.clientWidth;

  const showHideArrows = () => {
    arrows[0].style.display = pricingContainer.scrollLeft == 0 ? 'none' : 'block';
    arrows[1].style.display = pricingContainer.scrollLeft >= scrollWidth ? 'none' : 'block';
  };

  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      pricingContainer.scrollLeft += arrow.classList.contains('prev') ? -cardWidth : cardWidth;
      setTimeout(() => showHideArrows(), 60);
    });
  });

  const dragStart = e => {
    if (e.type === 'touchstart') {
      // Touch event
      isDragStart = true;
      prevPageX = e.touches[0].pageX;
      prevScrollLeft = pricingContainer.scrollLeft;
    } else if (e.type === 'mousedown') {
      // Mouse event
      isDragStart = true;
      prevPageX = e.pageX;
      prevScrollLeft = pricingContainer.scrollLeft;
    }
  };

  const dragging = e => {
    if (!isDragStart) return;
    e.preventDefault();
    pricingContainer.classList.add('dragging');

    let positionDiff;
    if (e.type === 'touchmove') {
      positionDiff = e.touches[0].pageX - prevPageX;
    } else if (e.type === 'mousemove') {
      positionDiff = e.pageX - prevPageX;
    }

    pricingContainer.scrollLeft = prevScrollLeft - positionDiff;
    showHideArrows();
  };

  const dragStop = () => {
    isDragStart = false;
    pricingContainer.classList.remove('dragging');
  };

  pricingContainer.scrollLeft = cardWidth * 2 - cardWidth / 4;

  pricingContainer.addEventListener('touchstart', dragStart);
  pricingContainer.addEventListener('touchmove', dragging);
  pricingContainer.addEventListener('touchend', dragStop);

  pricingContainer.addEventListener('mousedown', dragStart);
  pricingContainer.addEventListener('mousemove', dragging);
  pricingContainer.addEventListener('mouseup', dragStop);
}
