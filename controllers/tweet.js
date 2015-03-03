TwitterClone.TweetController = Ember.ObjectController.extend({
  shown: false,
  actions: {
    toggleShown: function() {
        this.toggleProperty("shown");
          }
  }
});
