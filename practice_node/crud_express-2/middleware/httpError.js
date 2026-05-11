
class httpError extends Error{
    constructor(message, statusCode){
        super(message)
        statusCode=statusCode
    }
}

export default httpError