// src/shared/ui/TestError.tsx
import { FC } from 'react';
import styles from './nonexistent.module.css'; // File doesn't exist - will fail at build time

// This type error is obvious and would be caught during development
// const broken: string = 123;

// More subtle error that might pass development checks
interface Props {
  requiredProp: string;
}

export const TestError: FC<Props> = (props) => {
  // No default prop value, but no error handling for missing prop
  // This might work in dev but fail in strict build
  return <div className={styles.container}>Length: {props.requiredProp.length}</div>;
};

// Usage elsewhere will cause build errors when the component is used without props
// But the file itself might pass TypeScript checks during development
