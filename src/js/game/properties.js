var npmProperties = require('../../../package.json');

module.exports =
  { title: 'codename-epic'
  , description: npmProperties.description
  , port: 3017
  , liveReloadPort: 3018
  , mute: false
  , showStats: true
  , size:
    { x: 640
    , y: 920
    }
  //, analyticsId: 'UA-50892214-2'
  };
