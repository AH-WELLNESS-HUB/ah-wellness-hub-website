// Central export for all custom hooks
// Generic, reusable hooks come from the shared react-hooks-kit submodule
// (src/shared/hooks); app-specific hooks (useCRUD, useSettings) stay local.
export { useForm } from '../shared/hooks/useForm';
export { useModal } from '../shared/hooks/useModal';
export { useResponsive, useMediaQuery, BREAKPOINTS } from '../shared/hooks/useResponsive';
export { useCRUD } from './useCRUD';
export { useSettings } from './useSettings';
