export const navigationVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
      dumping: 40,
    },
  },
};

export const socialLinksVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5
    },
  },
};

export const sectionListVariants = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
      },
    }),
    hidden: {
      opacity: 0,
      x: -100,
    },
  };

  export const testimonialsVariants = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 1,
      },
    }),
    hidden: {
      opacity: 0,
      x: -100,
    },
  };