import { ReactNode } from "react";

import ScrollProvider from "@/contexts/ScrollContext";

import ToastProvider from "./toast.provider";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ScrollProvider>
      <ToastProvider>{children}</ToastProvider>
    </ScrollProvider>
  );
};

export default AppProvider;
