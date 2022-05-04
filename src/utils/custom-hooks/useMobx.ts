import { useLazyRef } from "./useLazyRef";

interface ClassWithConstructor<T>{
    new (name:string):T ;
}
type fnArgs<U,T extends ClassWithConstructor<U>> = ConstructorParameters<T> extends any[] ? ConstructorParameters<T> : never;
type UseMobxType = <U,T extends ClassWithConstructor<U>,>(Store: new(...args: fnArgs<U,T>) => U, initializers:fnArgs<U,T>) => U;
export const useMobx:UseMobxType = (Store, initializers) => {
    const vm = useLazyRef(() => new Store(...initializers));
    return vm.current;
};
//usage in react component
