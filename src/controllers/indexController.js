const { validationResult } = require('express-validator');

module.exports = {

    index: function (req, res, next) {
        res.render('index');
    },

    processIndex: (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            const { name, colors, email, edad } = req.body

            req.session.bgColor = colors
            res.locals.bgColor = colors
            req.session.userName = name

            if (req.body.recordarColor !== undefined) {
                res.cookie('recordarColor', colors, {maxAge: 60*1000})
            }

            res.render('index', { name, colors, email, edad })

        } else {
            res.render('index', { errors: errors.mapped(), old: req.body })
        }
    },

    user: (req, res, next) => {
        res.locals.bgColor = req.session.bgColor
        res.render('user', {userName: req.session.userName})
    },

    destroy: (req, res) => {
        req.session.destroy();
        res.cookie('recordadColor', null, {maxAge: -1})
        res.redirect('/')
    }

}