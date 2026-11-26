import { useBreakpoint } from '../shared/hooks/useBreakpoint';

/**
 * Bootstrap 5 breakpoints (min widths, px). App-specific — intentionally kept
 * in the app, not in the generic react-hooks-kit submodule.
 */
export const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

/**
 * App-level responsive helper: wraps the generic `useBreakpoint` with this
 * app's Bootstrap breakpoints and exposes the named flags the UI uses.
 *
 * @returns {Object} Width, current breakpoint name, and Bootstrap-style flags.
 */
export const useResponsive = () => {
  const { width, breakpoint, up, down, only } = useBreakpoint(BREAKPOINTS);

  return {
    width,
    breakpoint,

    // Exact breakpoint band
    isXs: only('xs'),
    isSm: only('sm'),
    isMd: only('md'),
    isLg: only('lg'),
    isXl: only('xl'),
    isXxl: only('xxl'),

    // Common groupings
    isMobile: down('md'),
    isTablet: only('md'),
    isDesktop: up('lg'),

    // Min-width (like @media (min-width))
    isSmUp: up('sm'),
    isMdUp: up('md'),
    isLgUp: up('lg'),
    isXlUp: up('xl'),

    // Max-width (like @media (max-width))
    isSmDown: down('md'),
    isMdDown: down('lg'),
    isLgDown: down('xl'),
  };
};

export default useResponsive;
