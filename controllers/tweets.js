TwitterClone.TweetsController = Ember.ArrayController.extend({
  actions: {
    addTweet: function() {
      tweets.addObject({
        id: tweets.length + 1,
        author: this.get("author"),
        text: this.get("text"),
        timeStamp: new Date
      });
      this.set("tweet", "");
      this.set("author", "");
    }
  }
});
