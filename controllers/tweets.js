TwitterClone.TweetsController = Ember.ArrayController.extend({
  sortAscending: false,
  sortProperties: ['timeStamp'],
  itemController: "tweet",

  actions: {
    addTweet: function() {
      tweets.addObject({
        id: tweets.length + 1,
        author: this.get("author"),
        text: this.get("text"),
        timeStamp: new Date,
        shown: false
      });
      this.set("text", "");
      this.set("author", "");
    },
  }
});
