module.exports = {
  routes: [
    {
      method: "GET",
      path: "/member/:memberId/isActiveMember",
      handler: "member.isActiveMember",
    },
  ],
};
