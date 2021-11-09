
import { Middleware } from "@types";


const showErrorMessage: Middleware = async (err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        errors: {
            message: err.message,
        },
    });
}
const missingCredentialsError: Middleware = async (err, req, res, next) => {
    const missingAuthByJwt = err.name === 'UnauthorizedError'
    if (missingAuthByJwt) {
        return res
            .status(err.status)
            .send({ message: err.message })
            .end();
    }
    return next(err);
}

const handlers: Middleware[] = [
    missingCredentialsError,
    showErrorMessage,
]

export default handlers