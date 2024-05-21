
interface CustomError extends Error {
    statusCode?: number;
}

export const createError = (statusCode: number = 500, error: string, data?: object | null) => {
    const err: CustomError = new Error(error ? error : 'An unexpected error occured') as CustomError;
    err.statusCode = statusCode;
    if (data) {
        Object.assign(err, data);
    }
    throw err;
};