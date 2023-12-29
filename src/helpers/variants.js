const variants = {
  open: {
    right: "50%",
    width: 500,
    height: 70,
    opacity: 1,
    transition: {
      right: {
        ease: "easeInOut",
        duration: 0.5,
      },
      width: {
        delay: 0.5,
        duration: 0.3,
      },
      height: {
        delay: 0.5,
        duration: 0.3,
      },
      opacity: {
        duration: 0.1,
      },
    },
  },
  close: {
    right: "0%",
    width: 30,
    height: 30,
    opacity: 0,
    transition: {
      right: {
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.3,
      },
      width: {
        delay: 0,
        duration: 0.3,
      },
      height: {
        delay: 0,
        duration: 0.3,
      },
      opacity: {
        duration: 0.1,
        delay: 0.7,
      },
    },
  },
};

export { variants };
