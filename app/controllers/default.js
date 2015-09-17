t.controllers.default = t.libraries.Controller.subclass({
    constructor: function(){
        var self = this;
    },
    index: function(request){
        this.hideLoading();
        this.render("default");
    },
    two: function(request){
        this.hideLoading();
        this.render("default");
    }
});
t.controllers.test = t.libraries.Controller.subclass({
    index: function(request){
        this.hideLoading();
        this.render("test");
    }
});