'use strict';

/**
 * Character.js controller
 *
 * @description: A set of functions called "actions" for managing `Character`.
 */

module.exports = {

  /**
   * Retrieve character records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.character.search(ctx.query);
    } else {
      return strapi.services.character.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a character record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.character.fetch(ctx.params);
  },

  /**
   * Count character records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.character.count(ctx.query);
  },

  /**
   * Create a/an character record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.character.add(ctx.request.body);
  },

  /**
   * Update a/an character record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.character.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an character record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.character.remove(ctx.params);
  }
};
