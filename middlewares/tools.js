var validate = require('mongoose-validator');

var toolsValidator = [{
  validator1:validate({
    validator: 'isLength',
    arguments: [3, 35],
    message: 'Tools must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator2:validate({
    validator: 'isLength',
    arguments: [3, 35],
    message: 'Tool Desciption must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator3:validate({
    validator: 'isNumeric',
    message: 'Year Acquired is invalid.',
  }),
  validator4:validate({
    validator: 'isLength',
    arguments: [3, 15],
    message: 'Proficiency Level must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator5:validate({
    validator: 'isLength',
    arguments: [3, 40],
    message: 'Attributes must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator6:validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Work Ethics must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator7:validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Work Ethics Description must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
}
]

module.exports = toolsValidator;