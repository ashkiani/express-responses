//Siavash 4/30/2024: Added this module to support common responses

async function sendTextResponse(resObj, resCode, resMsg, logEntry) {
    resObj.status(resCode).send(resMsg);
    if (logEntry) {
        logEntry.response = { status: resCode, data: resMsg };
    }
}

async function sendJsonResponse(resObj, resCode, resJson, logEntry) {
    resObj.status(resCode).json(resJson);
    if (logEntry) {
        logEntry.response = { status: resCode, data: resJson };
    }
}

async function send204NoContent(resObj, logEntry) {
    resObj.sendStatus(204);
    if (logEntry) {
        logEntry.response = { status: 204 };
    }
}

async function send400BadReq(resObj, logEntry) {
    sendTextResponse(resObj, 400, 'The request could not be understood by the server.', logEntry);
}

async function send401UnAuth(resObj, logEntry) {
    sendTextResponse(resObj, 401, 'Unauthorized', logEntry);
}

async function send500InternalError(resObj, logEntry) {
    sendTextResponse(resObj, 500, 'An error occurred. Please try again later.', logEntry);
}

async function send503ServiceUnavailable(resObj, logEntry) {
    sendTextResponse(resObj, 503, 'Service Unavailable', logEntry);
}


module.exports = {
    sendTextResponse,
    sendJsonResponse,
    send204NoContent,
    send400BadReq,
    send401UnAuth,
    send500InternalError,
    send503ServiceUnavailable
};