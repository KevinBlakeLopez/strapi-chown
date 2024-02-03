'use strict';

/**
 * lead-time service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lead-time.lead-time');
