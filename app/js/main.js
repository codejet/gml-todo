requirejs.config({
  baseUrl: 'js',

  paths: {
    text: 'lib/text'
  },

  shim: {
    'lib/lodash-min': {
      exports: '_'
    },
    'lib/backbone-min': {
      deps: ['lib/lodash-min']
    , exports: 'Backbone'
    },
    'app': {
      deps: ['lib/lodash-min', 'lib/backbone-min', 'lib/jquery.sortable']
    }
  }
});

require(['app'],

function(App) {
  window.bTask = new App();
});