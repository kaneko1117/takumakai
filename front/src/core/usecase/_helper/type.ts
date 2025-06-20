export type ObjectsKeyExtract<T extends object, K extends keyof T> = {
  [P in Extract<keyof T, K>]: T[P];
};
