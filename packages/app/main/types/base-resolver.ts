type QueryResolver<T> = () => T | Promise<T>;
type MutationResolver<T> = (...args: any[]) => T | Promise<T>;

export type BaseResolver<T> = {
  queries: {
    [key: string]: QueryResolver<T>;
  };
  mutations: {
    [key: string]: MutationResolver<T>;
  };
};
