TwitterClone.TweetController = Ember.ObjectController.extend({
  actions: {
    toggleShown: function() {
      this.toggleProperty("shown");
    },
    addComment: function() {
      this.get('comments').pushObject(this.get("comment"))
    }
  }
});
