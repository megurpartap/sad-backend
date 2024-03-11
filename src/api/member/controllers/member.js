"use strict";

/**
 * member controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::member.member", ({ strapi }) => ({
  async isActiveMember(ctx) {
    console.log("inside fuunction");
    const { memberId } = ctx.params;
    console.log(memberId);
    const member = await strapi.entityService.findMany("api::member.member", {
      filters: { uid: memberId },
      populate: {
        photo: {
          fields: ["url"],
        },
      },
    });
    console.log(member);
    if (!(member.length === 1) || !member[0].isActive || member[0].isBlocked) {
      return ctx.notFound();
    }
    return ctx.send(member[0]);
  },
}));
