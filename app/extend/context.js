'use strict';

module.exports = {
  validate(schema, data) {
    data = data || this.request.body;
    const { value, error } = schema.validate(data);

    if (error) {
      this.throw(422, 'Validation Failed', {
        code: 'invalid_param',
        error,
      });
    }

    return value;
  },
};
