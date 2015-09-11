t.components.abutton = t.libraries.Component.subclass({
    label: "abutton",
    icon: false,
    constructor: function($el, attr){
        this.icon = typeof attr.icon !== "undefined" ? attr.icon : false;
        this.label = typeof attr.label !== "undefined" ? attr.label : false;
        this.material = typeof attr.material !== "undefined" ? attr.material : false;
        this.likes = typeof attr.likes !== "undefined" ? attr.likes : false;
        
        if(!this.icon){
            $el.children("img.icon").remove();
        }else{
            $el.addClass("iconButton")
        }
        if(!this.label){
            $el.addClass("noLabel").children("span").remove();
        }
        if(this.material){
            var html = (this.likes?this.material+'<p>'+this.likes+'</p>':this.material)
            $el.addClass("noLabel").html(html).children("span").remove();
        }
    }
});