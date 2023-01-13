export type Result<TData, TError = undefined> = { ok: true, value: TData } | { ok: false, error: TError };

export const OkResult = <TData>(data: TData): Result<TData, never> => {
    return { ok: true, value: data };
};
 
export const ErrorResult = <TError>(error: TError): Result<never, TError> => {
    return { ok: false, error };
};