TwitterClone = Ember.Application.create();

TwitterClone.TextField = Ember.TextField.extend({

    attributeBindings:  ['required'],

    required:           null
});
