import { useCallback } from "react";

const useLogOut = () => {
  return useCallback(() => {
    localStorage.clear();
    window.location.reload();
  }, []);
};

export default useLogOut;
