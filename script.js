const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('mouseenter', () => {
    items.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.style = 'opacity: 0.5';
        
      }
      if (otherItem == item) {
        otherItem.style = 'opacity: 1';
      }
    });
  });
  
  item.addEventListener('mouseleave', () => {
    items.forEach(otherItem => {
      otherItem.style = 'opacity: 1';
    });
  });
});