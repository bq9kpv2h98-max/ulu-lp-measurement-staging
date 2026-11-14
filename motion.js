// Motion: restrained Blur Fade / scroll reveal, adapted for this static site.
if (typeof window !== 'undefined' && 'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        currentObserver.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });
  document.querySelectorAll('.story-content, .story-image, .section-head, .scene, .feature-wrap, .point, .pricebox, .about, .step, .faq details, .cta h2').forEach(element => observer.observe(element));
}
