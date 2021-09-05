import { Subscriber } from './subscriber';

export type Observable<Value> = {
  subscribe: (subscriber: Subscriber<Value>) => void;
};

export const createObservable = <Value>(
  onSubscribe: (subscriber: Subscriber<Value>) => void
) => {};
