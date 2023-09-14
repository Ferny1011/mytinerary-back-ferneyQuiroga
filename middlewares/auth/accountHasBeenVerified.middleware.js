export const accountHasBeenVerified = (req, res, next) => {
    if (req.user.verified) {
        return next();
    }
    return res.status(401).json({
        success: false,
        message: "Account has not been verified"
    });
}