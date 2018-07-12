const environment = process.env.NODE_ENV;
let url;

if (environment === 'sandbox') {
  url = 'https://okapi-sandbox.frontside.io';
} else {
  url = 'https://okapi.frontside.io';
}

module.exports = {
  okapi: { url, tenant: 'fs' },
  config: {
    hasAllPerms: true,
    logCategories: ''
  },
  modules: {
    '@folio/eholdings': {},
    '@folio/frontside-demo': {}
  },
  branding: {
    logo: {
      src: './tenant-assets/frontside-logo.svg',
      alt: 'Frontside'
    },
    favicon: {
      src: './tenant-assets/frontside-favicon.svg',
    }
  }
};
