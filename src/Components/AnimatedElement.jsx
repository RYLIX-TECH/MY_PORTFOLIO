import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useAnimationVariants } from '../utils/animations';

const AnimatedElement = memo(({ 
  children, 
  type = 'fadeInUp',
  className,
  style,
  whileHover,
  ...props 
}) => {
  const variants = useAnimationVariants(type);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
      style={style}
      whileHover={whileHover}
      {...props}
    >
      {children}
    </motion.div>
  );
});

AnimatedElement.displayName = 'AnimatedElement';

export default AnimatedElement; 