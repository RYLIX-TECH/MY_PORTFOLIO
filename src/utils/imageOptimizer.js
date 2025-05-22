/**
 * Image optimization utility
 * 
 * This utility helps with lazy loading and optimizing images
 */

// Create an intersection observer for lazy loading
export const setupImageLazyLoading = () => {
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '200px 0px', // Start loading when image is 200px from viewport
    });
    
    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }
};

// Initialize lazy loading when DOM is loaded
if (typeof window !== 'undefined') {
  if (document.readyState === 'complete') {
    setupImageLazyLoading();
  } else {
    window.addEventListener('load', setupImageLazyLoading);
  }
}