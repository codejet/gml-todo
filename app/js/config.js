define([], function() {
  var config = {
    apiKey: 'AIzaSyCQeRm6npmnmuQlEaLI7ESdkAncE77eSHk',    
    scopes: 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile',
    clientId: '677014185305.apps.googleusercontent.com'
  };

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  return config;
});
