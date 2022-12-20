var validate = require('mongoose-validator');

var projectsValidator = [{
  validator1:validate({
    validator: 'isLength',
    arguments: [3, 35],
    message: 'Project Name must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator2:validate({
    validator: 'isDate',
    message: 'Start Date is invalid.',
  }),
  validator3:validate({
    validator: 'isDate',
    message: 'End Date cannot be empty.',
  }),
  validator4:validate({
    validator: 'isLength',
    arguments: [3, 35],
    message: 'Requirements must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator5:validate({
    validator: 'isLength',
    arguments: [3, 40],
    message: 'Results must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator6:validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Accomplishments must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator7:validate({
    validator: 'isLength',
    arguments: [3, 30],
    message: 'Tools must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
}
]

module.exports = projectsValidator;