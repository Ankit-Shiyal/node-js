

class HttpError extends Error{
    constructor(message, statusCode){
        super(message)
        statusCode = statusCode
    }
}
export default HttpError