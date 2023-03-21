import React from "react";

const useIntersectionObserver = ({
  target,
  onIntersect,
  threshold = 0.1,
  rootMargin = "0px",
}: {
  target: any;
  onIntersect: any;
  threshold?: any;
  rootMargin?: any;
}) => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin,
      threshold,
    });
    const current = target.current;
    observer.observe(current);
    return () => {
      observer.unobserve(current);
    };
  });
};

export default useIntersectionObserver;
