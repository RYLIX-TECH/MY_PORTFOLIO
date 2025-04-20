export const isMobileDevice = () => {
    if (typeof window === 'undefined') return false;
    return (
      /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth < 800
    );
  };
  
  export const sanitizeInput = (input) =>
    input.replace(/[<>]/g, "").replace(/javascript:/gi, "").trim();

  const LoadingSpinner = () => (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Loading amazing content...</p>
    </div>
  );
  export default LoadingSpinner;

