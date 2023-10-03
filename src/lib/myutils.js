export function letChain (p, f=(_p)=>_p) {
    if (p===null || p==undefined) return null;
    return f(p);
}