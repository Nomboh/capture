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
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },

  exit: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const titleAnimation = {
  hidden: {
    y: 200,
  },

  show: {
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const photoAnimation = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export const lineAnimation = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: { duration: 1, staggerChildren: 0.25 },
  },
};

export const slider = {
  hidden: {
    x: "-130%",
    skew: "45deg",
  },

  show: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 0.75 },
  },
};

export const sliderContainer = {
  hidden: {
    opacity: 1,
  },

  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const scrollAnim = {
  hidden: {
    scale: 1.2,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },

  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
