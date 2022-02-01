const {check} = require('express-validator')

module.exports = [
    check('name')
    .notEmpty().withMessage('Se debe completar este campo'),

    check('colors')
    .notEmpty().withMessage('Se debe seleccionar un color'),

    check('email')
    .notEmpty().withMessage('Se debe completar este campo').bail()
    .isEmail().withMessage('Se debe ingresar un email valido'),

    check('edad')
    .notEmpty().withMessage('Se debe completar este campo').bail()
    .isInt().withMessage('Se debe ingresar un valor numerico')
]