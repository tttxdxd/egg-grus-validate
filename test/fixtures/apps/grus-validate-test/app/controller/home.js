'use strict';

const Controller = require('egg').Controller;
const Joi = require('@hapi/joi');

const testValidator = Joi.object({
  a: Joi.number().required(),
  b: Joi.string().required(),
});

class HomeController extends Controller {
  async index() {
    const params = this.ctx.validate(testValidator, this.ctx.query);


    this.ctx.body = 'hi, ' + this.app.plugins.validate.name + ' params = ' + JSON.stringify(params);
  }
}

module.exports = HomeController;
