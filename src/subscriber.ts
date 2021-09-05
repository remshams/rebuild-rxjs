export type Subscriber<Value> = {
  next: (value: Value) => void;
  complete: () => void;
};
