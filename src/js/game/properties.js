var npmProperties = require('../../../package.json');

module.exports =
  { title: 'codename-epic'
  , description: npmProperties.description
  , port: 3017
  , liveReloadPort: 3018
  , mute: false
  , showStats: true
  , size:
    { x: 720
    , y: 1280
    }
  //, analyticsId: 'UA-50892214-2'
  };
