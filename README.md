# express-responses
Reusable response helpers for Express APIs with integrated logging support — standardize your JSON/text replies and HTTP error handling with one module.

---

# @ashkiani/express-responses

Reusable HTTP response helpers for Express APIs — with optional structured logging.

This utility standardizes how your Express app sends JSON, text, and error responses. It also supports logging response details (e.g., status codes and payloads) when a log object is available.

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

2. Use it in your route handlers:

```js
app.get("/api/example", async (req, res) => {
    const logEntry = {
        requestId: "abc123",
        timestamp: new Date()
    };

    try {
        await resUtils.sendJsonResponse(res, 200, { message: "Success!" }, logEntry);
    } catch (err) {
        await resUtils.send500InternalError(res, logEntry);
    }

    // Optional: Save logEntry to DB
});
```

---

## 📘 API Reference

### `sendTextResponse(res, statusCode, message, logEntry?)`

Sends plain text and, if a `logEntry` object is provided, logs the response.

### `sendJsonResponse(res, statusCode, jsonObj, logEntry?)`

Sends JSON and logs it if a `logEntry` object is present.

### `send204NoContent(res, logEntry?)`

Sends a 204 No Content response.

---

### Predefined Error Responses

These are convenience wrappers for common error statuses:

| Function                      | Description                 |
| ----------------------------- | --------------------------- |
| `send400BadReq()`             | Bad Request (400)           |
| `send401UnAuth()`             | Unauthorized (401)          |
| `send500InternalError()`      | Internal Server Error (500) |
| `send503ServiceUnavailable()` | Service Unavailable (503)   |

Each function accepts `(res, logEntry?)` and safely logs the response if `logEntry` is provided.

---

## 💡 Notes

* Logging is **optional**. If `logEntry` is omitted, the function still works without throwing errors.
* These helpers work well with any logging system — just ensure your `logEntry` object includes a `response` field if you want to store response details.
* Compatible with [@ashkiani/mongo-logger](https://www.npmjs.com/package/@ashkiani/mongo-logger) for full request-response auditing.

---

## 📄 License

MIT © Siavash Ashkiani

---