"use client";

import { createContext, useContext } from "react";

type ScrollOptions = {
  allowDuringAnimation?: boolean;
  duration?: number;
  skipThrottle?: boolean;
};

interface ActiveState {
  section: number;
  step: number;
  goTo: (i: number, options?: ScrollOptions) => boolean;
  advance: (dir: 1 | -1, options?: ScrollOptions) => boolean;
}

const ActiveSectionContext = createContext<ActiveState>({
  section: 0,
  step: 0,
  goTo: () => false,
  advance: () => false,
});

export const useActiveSection = () => useContext(ActiveSectionContext);
export default ActiveSectionContext;
