class HttpError extends Error{
  constructor(code, message) {
    super(message);       // Add a 'message' property
    this.code = code;     // Add a 'error code' property
  }
}

module.exports = HttpError;