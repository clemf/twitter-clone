TwitterClone.TweetController = Ember.ObjectController.extend({
  actions: {
    toggleShown: function() {
        this.toggleProperty("shown");
    }
  }
});
