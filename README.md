# express-responses
Reusable response helpers for Express APIs with integrated logging support — standardize your JSON/text replies and HTTP error handling with one module.

---

# @ashkiani/express-responses

Standardized HTTP response helpers for Express-based APIs with integrated logging.

This utility offers reusable response functions for common HTTP scenarios (e.g. 400, 401, 500) and ensures each response is logged with consistent structure. Useful in API services that include request/response auditing.

---

## 📦 Installation

```bash
npm install @ashkiani/express-responses
```

---

## 🛠 Usage

1. Import the module:

```js
const resUtils = require('@ashkiani/express-responses');
```

2. Use inside your Express routes along with your logger:

```js
app.get("/example", async (req, res) => {
    const logEntry = {
        requestId: 'abc123',
        timestamp: new Date(),
        response: {}
    };

    try {
        // Do something...

        await resUtils.sendJsonResponse(res, 200, { message: "Success" }, logEntry);

    } catch (err) {
        await resUtils.send500InternalError(res, logEntry);
    }

    // Optional: Save logEntry to DB
});
```

---

## 📘 API

### `sendTextResponse(res, code, message, logEntry)`

Sends a plain text response and appends response details to the `logEntry`.

### `sendJsonResponse(res, code, jsonObj, logEntry)`

Sends a JSON response with the given status code and attaches log metadata.

### `send204NoContent(res, logEntry)`

Sends a 204 No Content response and updates the log.

### Predefined Error Responses:

* `send400BadReq(res, logEntry)` – Bad Request
* `send401UnAuth(res, logEntry)` – Unauthorized
* `send500InternalError(res, logEntry)` – Internal Server Error
* `send503ServiceUnavailable(res, logEntry)` – Service Unavailable

---

## 💡 Notes

* All functions expect a `logEntry` object. You can structure this object as needed, but it should at least contain a `response` field to be updated.
* Designed to be used alongside a centralized logger (e.g. [@ashkiani/mongo-logger](https://www.npmjs.com/package/@ashkiani/mongo-logger)).
* Helps standardize API responses and reduce duplication across services.

---

## 📄 License

MIT © Siavash Ashkiani

---
