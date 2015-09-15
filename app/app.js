t.app = new t.libraries.App({
    title: "My App",
    subTitle: "Welcome",
    ready: function(){
        this.goTo("default");
    }
});