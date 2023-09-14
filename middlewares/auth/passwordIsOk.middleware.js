import bcryptjs from "bcryptjs";
export const passwordIsOk = (req, res, next) => {
    const password_bs = req.user.password;
    const password_form = req.body.password;
    if(bcryptjs.compareSync(password_form, password_bs)){
        return next();
    }
    return res.status(401).json({
        success: false,
        message: "Password is not correct"
    });
}