module.exports = (req, res, next) => {
    if (req.cookies.recordarColor) {
        req.session.bgColor = req.cookies.recordarColor;
        res.locals.bgColor = req.cookies.recordarColor
    }
    next()
}
