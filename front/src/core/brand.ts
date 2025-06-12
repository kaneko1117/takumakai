export type Brand<K, T> = K & { __brand: T };

export const newBrand = <K, T>(value: K): Brand<K, T> => {
  if (value === null || value === undefined) {
    throw new Error("Value cannot be null or undefined");
  }
  return value as Brand<K, T>;
};
