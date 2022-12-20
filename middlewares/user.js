var validate = require('mongoose-validator');


var usernameValidator = [{
  validator1:validate({
    validator: 'isLength',
    arguments: [3, 30],
    message: 'First Name must be between {ARGS[0]} and {ARGS[1]}',
  }),
  validator2:validate({
    validator: 'isLength',
    arguments: [3, 30],
    message: 'Last Name must be between {ARGS[0]} and {ARGS[1]}',
  }),
  validator3:validate({
    validator: 'isEmail',
    message: 'Email is Invalid.',
  }),
}
]

module.exports = usernameValidator;