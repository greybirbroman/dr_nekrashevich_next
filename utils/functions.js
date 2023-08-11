const preventHashLink = (href) => {
    const isAnchorLink = href.startsWith('#');
  
    if (isAnchorLink) {
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  export default preventHashLink;