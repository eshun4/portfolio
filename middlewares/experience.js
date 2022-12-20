var validate = require('mongoose-validator');

var experienceValidator = [{
  validator1:validate({
    validator: 'isLength',
    arguments: [3, 35],
    message: 'Company must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator2:validate({
    validator: 'isLength',
    arguments: [3, 35],
    message: 'Job Title must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator3:validate({
    validator: 'isDate',
    message: 'Start Date is invalid.',
  }),
  validator4:validate({
    validator: 'isDate',
    message: 'End Date is invalid.',
  }),
  validator5:validate({
    validator: 'isBoolean',
    arguments: [3, 40],
    message: 'Status is invalid.',
  }),
  validator6:validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Location must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator7:validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Job Requirements must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator8:validate({
    validator: 'isLength',
    arguments: [3, 25],
    message: 'Type must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
}
]

module.exports = experienceValidator;