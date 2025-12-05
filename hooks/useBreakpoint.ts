// src/ui/useBreakpoint.ts
import { useWindowDimensions } from "react-native";

export type Breakpoint = "sm" | "md" | "lg" | "xl";

const BP = {
  sm: 0,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export function useBreakpoint() {
  const { width } = useWindowDimensions();

  const bp: Breakpoint =
    width >= BP.xl ? "xl" :
      width >= BP.lg ? "lg" :
        width >= BP.md ? "md" : "sm";

  return { width, bp, isSm: bp === "sm", isMd: bp === "md", isLg: bp === "lg", isXl: bp === "xl" };
}