import React, { useEffect, useRef, useState } from 'react';
import {
  fadeIn,
  slideIn,
  scaleIn,
  rotateIn,
  flyIn,
  flyOut,
  morph,
  appearDisappear,
} from './Animations';

const AnimatedSection = ({
  children,
  animation = 'fadeIn',
  direction = 'up',
  length = 50,
  delay = 0,
  delayTime = 1,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
  const currentSection = sectionRef.current; // Copy the ref value to a local variable

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.1 }
  );

  if (currentSection) {
    observer.observe(currentSection);
  }

  return () => {
    if (currentSection) {
      observer.unobserve(currentSection); // Use the local variable in cleanup
    }
  };
}, []);

  const getAnimation = () => {
    switch (animation) {
      case 'fadeIn':
        return fadeIn;
      case 'slideIn':
        return slideIn(direction);
      case 'scaleIn':
        return scaleIn;
      case 'rotateIn':
        return rotateIn;
      case 'flyIn':
        return flyIn(direction, length);
      case 'flyOut':
        return flyOut(direction, length);
      case 'morph':
        return morph;
      case 'appearDisappear':
        return appearDisappear(delayTime);
      default:
        return fadeIn;
    }
  };

  const animationStyles = getAnimation();

  const duration = animationStyles.visible?.transition?.duration || 0.5; // Default to 0.5 if undefined

  return (
    <div
      ref={sectionRef}
      className={`animated-section ${className}`}
      style={{
        opacity: isVisible ? animationStyles.visible.opacity : animationStyles.hidden.opacity,
        transform: `
          translate(
            ${isVisible ? 0 : (animationStyles.hidden.x || 0)}px,
            ${isVisible ? 0 : (animationStyles.hidden.y || 0)}px
          )
          scale(${isVisible ? (animationStyles.visible.scale || 1) : (animationStyles.hidden.scale || 1)})
          rotate(${isVisible ? (animationStyles.visible.rotate || 0) : (animationStyles.hidden.rotate || 0)}deg)
        `,
        transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
