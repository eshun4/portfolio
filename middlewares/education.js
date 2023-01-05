var validate = require('mongoose-validator');


var educationValidator = [{
  validator1:validate({
    validator: 'isLength',
    arguments: [3, 65],
    message: 'Name of School must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator2:validate({
    validator: 'isNumeric',
    message: 'Start Year is invalid.',
  }),
  validator3:validate({
    validator: 'isEmpty',
    message: 'End Year cannot be empty.',
  }),
  validator4:validate({
    validator: 'isEmpty',
    message: 'Course cannot be empty.',
  }),
  validator5:validate({
    validator: 'isLength',
    arguments: [3, 300],
    message: 'Accomplishments must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator6:validate({
    validator: 'isLength',
    arguments: [3, 500],
    message: 'Course description must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator7:validate({
    validator: 'isLength',
    arguments: [3, 300],
    message: 'Talents must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator8:validate({
    validator: 'isLength',
    arguments: [3, 300],
    message: 'Favorite subjects must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator9:validate({
    validator: 'isLength',
    arguments: [3, 200],
    message: 'School Clubs must be between {ARGS[0]} and {ARGS[1]} characters.',
  }),
  validator10:validate({
    validator: 'isBoolean',
    message: 'Graduated must should be either true/false.',
  }),
  validator11:validate({
    validator: 'isFloat',
    message: 'G.P.A must be a decimal.',
  }),
}
]

module.exports = educationValidator;