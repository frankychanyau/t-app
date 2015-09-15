t.controllers.default = t.libraries.Controller.subclass({
    constructor: function(){
        var self = this;
        self.display();
    },
    display: function(){
        this.hideLoading();
        this.render("default");
    }
});