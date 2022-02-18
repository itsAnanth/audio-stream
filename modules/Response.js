class Response {
    static error(message) {
        return JSON.stringify({ success: false, message: message });
    }

    static success(message) {
        return JSON.stringify({ success: true, message: message });
    }
}

export default Response;