import { useCallback, useRef } from "react";

// Reusable Logic for infinite scrolling

const useInterSectional = (loading, more, page) => {
  const observer = useRef();
  const lastfriendElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && more) {
          page((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, more]
  );
  return lastfriendElementRef;
};

export default useInterSectional;
