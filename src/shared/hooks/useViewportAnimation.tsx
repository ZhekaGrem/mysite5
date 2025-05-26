import { useRef } from 'react';
import { useInView } from 'framer-motion';

const useViewportAnimation = (amount = 0.2) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: amount,
    once: true,
    margin: '0px 0px -100px 0px',
  });

  return { ref, isInView };
};

export default useViewportAnimation;
