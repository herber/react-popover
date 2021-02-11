import { createPortal } from 'react-dom';

export let RenderToBody = ({ children }: { children: React.ReactElement }) => {
  if (typeof window == 'undefined') return null;
  return createPortal(children, document.body);
};
