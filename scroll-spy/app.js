function scrollSpy () {
  const sections = document.querySelectorAll('section[data-scroll]');
  
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      const ref = document.querySelector(`a[data-scroll][href="#${id}"]`);
      
      if (entry.isIntersecting) {
        ref.classList.add('active');
      } else {
        ref.classList.remove('active');
      }
    });
  };
  
  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.5
  });
  
  sections.forEach((section) => {
    observer.observe(section);
  });
};

scrollSpy();


