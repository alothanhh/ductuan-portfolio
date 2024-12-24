import { em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const useWindowSize = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return { isMobile };
};

export default useWindowSize;
