const platformService = require('../services/platform.service');

module.exports = {

  sendPlatformtoGateway: (req, res) => {

    const iss = 'https://lti-1-3-platform-poc.herokuapp.com/';
    const userId = 'user-000-000-001';
    const { resLinkId } = req.params;

    const resLink = platformService.getResourceLinkbyId(resLinkId);
    const deploymentId = resLink.deployment_id;

    res.render('iframe-test', {
      iss,
      userId,
      resLinkId,
      deploymentId,
      iframeSrc: `https://lti-1-3-gateway.herokuapp.com/gateway/initiate-login?iss=${iss}&userId=${userId}&resLinkId=${resLinkId}&deploymentId=${deploymentId}`
    });
  },

  senduserData: async (req, res) => {
    // const { userId, resLinkId } = req.query;
    // const user = platformService.getUserById(userId);
    const user = {
      id: 'user-000-000-001',
      name: 'Ms Jane Marie Doe',
      given_name: 'Jane',
      family_name: 'Doe',
      middle_name: 'Marie',
      picture: 'http://picture.com/user.jpg',
      email: 'user@example.com'
    };

    const resLink = {
      title: 'Introduction Assignment',
      description: 'Assignment to introduce who you are',
      resource_link_id: 'res-000-000-001',
      deployment_id: 'a67sdfg'
    };

    const course = {
      id: 'course-000-000-001',
      label: 'CPS 435',
      title: 'CPS 435 Learning Analytics',
      resource_links: [
        {
          title: 'Introduction Assignment',
          description: 'Assignment to introduce who you are',
          resource_link_id: 'res-000-000-001',
          deployment_id: 'a67sdfg'
        }
      ]
    };

    res.json({ user, resLink, course });
  }
};
