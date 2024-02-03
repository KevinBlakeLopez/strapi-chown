'use strict';

/**
 * price-tier service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::price-tier.price-tier');
