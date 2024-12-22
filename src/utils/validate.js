function validateLink(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

module.exports = { validateLink };