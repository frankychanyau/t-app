t.components.appButton = t.libraries.Component.subclass({
    label: "appButton",
    icon: false,
    constructor: function($el, attr){
        this.attr = attr;
        this.href = typeof attr.href !== "undefined" ? attr.href : "#";
        this.icon = typeof attr.icon !== "undefined" ? attr.icon : false;
        this.label = typeof attr.label !== "undefined" ? attr.label : false;
        this.material = typeof attr.material !== "undefined" ? attr.material : false;
        this.likes = typeof attr.likes !== "undefined" ? attr.likes : false;
        
        if(!this.icon){
            $el.find("img.icon").remove();
        }else{
            $el.addClass("iconButton")
        }
        if(!this.label){
            $el.addClass("noLabel").find("span").remove();
        }
        if(this.material){
            var html = (this.likes?this.material+'<p>'+this.likes+'</p>':this.material)
            $el.addClass("noLabel").html(html).find("span").remove();
        }
    },
    onClick: function(e, self){
        e.stopPropagation();
        var el = this;
        var event = typeof self.attr['t-on-click'] !== "undefined" ? self.attr['t-on-click'] : false;
        if(event){
            t.app.controller[event].apply(el, [e, t.app.controller]);
            return false;
        }
    }
});