"use client";

import { createContext, useContext } from "react";

interface ActiveState {
  section: number;
  step: number;
  goTo: (i: number) => void;
  advance: (dir: 1 | -1) => void;
}

const ActiveSectionContext = createContext<ActiveState>({
  section: 0,
  step: 0,
  goTo: () => {},
  advance: () => {},
});

export const useActiveSection = () => useContext(ActiveSectionContext);
export default ActiveSectionContext;
