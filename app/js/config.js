define([], function() {
  var config = {
    apiKey: 'AIzaSyDCvmLZaDn5vr34wg2-1YmXC9l6CiqatsU',
    scopes: 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile',
    clientId: '137781853545.apps.googleusercontent.com'
  };
  
  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };
  
  return config;
});