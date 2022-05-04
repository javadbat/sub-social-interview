import React, { useRef } from "react";
type initValFunctionType = ()=>any;
export const useLazyRef = (initValFunc:initValFunctionType) => {
    const ref:React.MutableRefObject<any> = useRef(null);
    if (ref.current === null) {
        ref.current = initValFunc();
    }
    return ref;
};

// used by: useMobx