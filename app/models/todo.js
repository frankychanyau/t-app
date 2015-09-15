t.collections.todo = t.libraries.Collection.subclass({
    constructor: t.libraries.Collection.prototype.constructor,
    adapter: function(){
        return new t.libraries.Adapters.jsonFile("app/data/todos.json");
    },
    init: function(){
        console.log("ready");
    }
});

t.models.todo = t.libraries.Model.subclass({
    constructor: t.libraries.Model.prototype.constructor
});