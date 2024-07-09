const httpStatus = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
};

interface CustomError extends Error {
    statusCode?: number;
}

export const createError = (
    statusCodeKey: keyof typeof httpStatus,
    error: string,
    data?: object | null
): never => {
    const statusCode = httpStatus[statusCodeKey];
    const err: CustomError = new Error(error ? error : 'An unexpected error occurred') as CustomError;
    err.statusCode = statusCode;
    if (data) {
        Object.assign(err, data);
    }
    throw err;
};

export { httpStatus };
