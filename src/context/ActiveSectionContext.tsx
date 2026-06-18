"use client";

import { createContext, useContext } from "react";

interface ActiveState {
  activeId: string;
  scrollTo: (id: string) => void;
}

const ActiveSectionContext = createContext<ActiveState>({
  activeId: "hero",
  scrollTo: () => {},
});

export const useActiveSection = () => useContext(ActiveSectionContext);
export default ActiveSectionContext;
