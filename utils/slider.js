const pricingContainer = document.querySelector('#pricing-container');

if (pricingContainer) {
  let isDragStart = false,
    prevPageX,
    prevScrollLeft;

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

    let positionDiff;
    if (e.type === 'touchmove') {
      // Touch event
      positionDiff = e.touches[0].pageX - prevPageX;
    } else if (e.type === 'mousemove') {
      // Mouse event
      positionDiff = e.pageX - prevPageX;
    }

    pricingContainer.scrollLeft = prevScrollLeft - positionDiff;
  };

  const dragStop = () => {
    isDragStart = false;
  };

  let containerHalf = (pricingContainer.scrollWidth - pricingContainer.clientWidth) / 2;
  pricingContainer.scrollLeft = containerHalf + containerHalf / 2;

  pricingContainer.addEventListener('touchstart', dragStart);
  pricingContainer.addEventListener('touchmove', dragging);
  pricingContainer.addEventListener('touchend', dragStop);

  pricingContainer.addEventListener('mousedown', dragStart);
  pricingContainer.addEventListener('mousemove', dragging);
  pricingContainer.addEventListener('mouseup', dragStop);
}
