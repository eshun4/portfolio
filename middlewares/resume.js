var validate = require('mongoose-validator');

var resumeValidator = [{
  validator1:validate({
    validator: 'isLength',
    arguments: [3, 35],
    message: 'Name must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator2:validate({
    validator: 'isLength',
    arguments: [3, 35],
    message: 'Phone Desciption must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator3:validate({
    validator: 'isEmail',
    message: 'Email Acquired is invalid.',
  }),
  validator4:validate({
    validator: 'isLength',
    arguments: [3, 60],
    message: 'LinkedIn must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator5:validate({
    validator: 'isLength',
    arguments: [3, 40],
    message: 'Education must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator6:validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Tools must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator7:validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Work Experience must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
}
]

module.exports = resumeValidator;