export type Brand<K, T> = K & { __brand: T };

export const newBrand = <K, T>(value: K): Brand<K, T> => {
  return value as Brand<K, T>;
};
