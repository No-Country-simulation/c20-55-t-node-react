export const trimStrings = (req, res, next) => {
    if (req.body && typeof req.body === "object") {
        req.body = Object.fromEntries(
            Object.entries(req.body).map(([key, value]) => [
                key,
                typeof value === "string" ? value.trim() : value
            ])
        );
    }

    next();
};
