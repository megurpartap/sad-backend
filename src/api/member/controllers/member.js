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
    const member = await strapi.entityService.findOne(
      "api::member.member",
      memberId,
      {
        populate: {
          photo: {
            fields: ["url"],
          },
        },
      }
    );
    console.log(member);
    if (!member || !member.isActive || member.isBlocked) {
      return ctx.notFound();
    }
    return ctx.send(member);
  },
}));
