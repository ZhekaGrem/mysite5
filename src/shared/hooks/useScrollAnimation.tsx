import { useRef } from 'react';
import { useInView } from 'framer-motion';
const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.2,
    once: false,
  });

  return { ref, isInView };
};

export default useScrollAnimation;
