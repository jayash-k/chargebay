export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1.1, transition: { duration: 0.6 } },
};

export const slideIn = (direction) => {
  const directions = {
    left: { x: -50 },
    right: { x: 50 },
    up: { y: 70 },
    down: { y: -70 },
  };

  return {
    hidden: { opacity: 0, ...directions[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1.5, ease: 'easeOut' },
    },
  };
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

export const rotateIn = {
  hidden: { opacity: 0, rotate: -180 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const flyIn = (direction = 'up', length = 50) => {
  const directions = {
    left: { x: -length },
    right: { x: length },
    up: { y: -length },
    down: { y: length },
  };

  return {
    hidden: { opacity: 0, ...directions[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };
};

export const flyOut = (direction = 'down', length = 50) => {
  const directions = {
    left: { x: -length },
    right: { x: length },
    up: { y: -length },
    down: { y: length },
  };

  return {
    visible: { opacity: 1 },
    hidden: {
      opacity: 0,
      ...directions[direction],
      transition: { duration: 1, ease: 'easeOut' },
    },
  };
};

export const morph = {
  hidden: { opacity: 0, scale: 0.8, borderRadius: '50%' },
  visible: {
    opacity: 1,
    scale: 1,
    borderRadius: '0%',
    transition: { duration: 1, ease: 'easeOut' },
  },
};

export const appearDisappear = (delayTime = 1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: delayTime, ease: 'easeOut' },
  },
});