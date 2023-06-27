import type { CSSProperties, DetailedHTMLProps, FC, FormHTMLAttributes, PropsWithChildren } from 'react';

const styles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  minWidth: '400px',
};

export const Form: FC<PropsWithChildren<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>>> = ({
  children,
  ...props
}) => {
  return (
    <form {...props} style={styles}>
      {children}
    </form>
  );
};
