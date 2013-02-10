define(['models/task'], function(Task) {
  var Task = Backbone.Collection.extend({
    model: Task,
    url: 'tasks'
  });

  return Task;
});