import { type FormEvent, useState } from 'react';

interface FieldOptions {
  required?: boolean;
}

interface RegisterReturnValue<T, K extends keyof T> extends FieldOptions {
  value: T[K];
  onChange: (event: { target: { value: unknown } }) => void;
}

interface ReturnValue<T> {
  getValues: () => T;
  setValue: <K extends keyof T>(key: K, value: T[K]) => void;
  reset: () => void;
  handleSubmit: (onSubmit: (values: T) => void) => (event: FormEvent) => void;
  register: <K extends keyof T>(key: K, options: FieldOptions) => RegisterReturnValue<T, K>;
}

export const useForm = <T extends Record<string, unknown>>(defaultValue: T): ReturnValue<T> => {
  const [state, setState] = useState<T>(defaultValue);
  const getValues = (): T => state;
  const getValue = <K extends keyof T>(key: K): T[K] => state[key];

  const setValue = <K extends keyof T>(key: K, value: T[K]): void => {
    setState((prevState) => ({ ...prevState, [key]: value }));
  };

  const onChange = <K extends keyof T>(key: K) => {
    return (event: { target: { value: unknown } }): void => {
      setValue(key, event.target.value as T[K]);
    };
  };
  const register = <K extends keyof T>(key: K, options: FieldOptions = {}): RegisterReturnValue<T, K> => ({
    value: getValue(key),
    onChange: onChange(key),
    ...options,
  });

  const handleSubmit = (onSubmit: (values: T) => void) => (event: FormEvent) => {
    event.preventDefault();
    onSubmit(state);
  };

  const reset = (): void => {
    setState(defaultValue);
  };

  return { getValues, setValue, reset, handleSubmit, register };
};
