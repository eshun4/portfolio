var validate = require('mongoose-validator');

var projectsValidator = [{
  validator1:validate({
    validator: 'isLength',
    arguments: [3, 500],
    message: 'Project Name must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator2:validate({
    validator: 'isLength',
    arguments: [3, 500],
    message: 'Start Date must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator3:validate({
    validator: 'isLength',
    arguments: [3, 500],
    message: 'Start Date must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator4:validate({
    validator: 'isLength',
    arguments: [3, 500],
    message: 'Requirements must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator5:validate({
    validator: 'isLength',
    arguments: [3, 500],
    message: 'Results must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator6:validate({
    validator: 'isLength',
    arguments: [3, 500],
    message: 'Accomplishments must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator7:validate({
    validator: 'isLength',
    arguments: [3, 500],
    message: 'Tools must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
}
]

module.exports = projectsValidator;