var npmProperties = require('../../../package.json');

module.exports =
  { title: 'Cadoo'
  , description: npmProperties.description
  , port: 3017
  , liveReloadPort: 3018
  , mute: false
  , showStats: false
  , size:
    { x: 640
    , y: 960    
    }
  , analyticsId: 'UA-59517503-1'
  };
