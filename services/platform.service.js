const platform = require('../docs/platform');

module.exports = {
  getCourseByResLinkId(resLinkId) {
    return platform.sample_contexts.courses
      .find((course) => course.resource_links
        .find((resourceLink) => resourceLink.resource_link_id === resLinkId));
  },

  // Redundant function in /oidc
  getResourceLinkbyId(resLinkId) {
    const course = this.getCourseByResLinkId(resLinkId);
    if (!course) return null;

    return course.resource_links
      .find((resourceLink) => resourceLink.resource_link_id === resLinkId);
  }
};
