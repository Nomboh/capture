export const animatePages = {
  hidden: {
    opacity: 0,
    y: 300,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },

  exit: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 1,
    },
  },
};
