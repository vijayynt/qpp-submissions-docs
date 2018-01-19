import Introduction from './web-interface-api/introduction';
import BeneficiaryGuide from './tutorials/web-interface-api/beneficiary-guide';
import SubmissionGuide from './tutorials/web-interface-api/submission-guide';
import ClinicGuide from './tutorials/web-interface-api/clinic-guide';
import ProviderGuide from './tutorials/web-interface-api/provider-guide';
import OrganizationGuide from './tutorials/web-interface-api/organization-guide';
import ActivityGuide from './tutorials/web-interface-api/activity-guide';
import ExampleDocs from './api-reference/example-docs';
import TermsOfService from './terms-of-service';

const topicsPaths = [
  {
    path: '/webinterface',
    exact: true,
    linkText: 'Introduction',
    component: Introduction
  },
  {
    path: 'https://qpp-submissions-sandbox.navapbc.com',
    exact: false,
    linkText: 'Interactive Docs',
    external: true
  }
];

const guidesPaths = [
  {
    path: '/webinterface/beneficiary-guide',
    exact: false,
    linkText: 'Beneficiary API Guide',
    component: BeneficiaryGuide
  },
  {
    path: '/webinterface/submission-guide',
    exact: false,
    linkText: 'Submission API Guide',
    component: SubmissionGuide
  },
  {
    path: '/webinterface/clinic-guide',
    exact: false,
    linkText: 'Clinic API Guide',
    component: ClinicGuide
  },
  {
    path: '/webinterface/provider-guide',
    exact: false,
    linkText: 'Provider API Guide',
    component: ProviderGuide
  },
  {
    path: '/webinterface/organization-guide',
    exact: false,
    linkText: 'Organization API Guide',
    component: OrganizationGuide
  },
  {
    path: '/webinterface/activity-guide',
    exact: false,
    linkText: 'Activity API Guide',
    component: ActivityGuide
  }
];

const referencePaths = [

];

const samplePaths = [

];

const supportPaths = [
  {
    path: 'https://groups.google.com/forum/#!forum/qpp-apis',
    exact: false,
    linkText: 'Google Group',
    external: true
  },
  {
    path: '/terms-of-service',
    exact: false,
    linkText: 'Terms of Service',
    component: TermsOfService
  }
];

const allPaths = [
  {
    groupTitle: 'TOPICS',
    paths: topicsPaths
  },
  {
    groupTitle: 'GUIDES',
    paths: guidesPaths
  },
  {
    groupTitle: 'REFERENCES',
    paths: referencePaths
  },
  {
    groupTitle: 'SAMPLES',
    paths: samplePaths
  },
  {
    groupTitle: 'SUPPORT',
    paths: supportPaths
  }
];

allPaths.mergedRoutes = allPaths.reduce((result, routesGroup) => {
  return result.concat(routesGroup.paths);
}, []);

export default allPaths;
