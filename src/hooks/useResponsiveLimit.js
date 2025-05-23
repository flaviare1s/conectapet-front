import { useEffect, useState } from "react";

export const useResponsiveLimit = () => {
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    const updateLimit = () => {
      const isMobile = window.innerWidth < 768;
      setLimit(isMobile ? 5 : 12);
    };

    updateLimit();
    window.addEventListener("resize", updateLimit);

    return () => window.removeEventListener("resize", updateLimit);
  }, []);

  return limit;
};
