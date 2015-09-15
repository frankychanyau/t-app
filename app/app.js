t.app = new t.libraries.App({
    title: "My App",
    subTitle: "Welcome",
    constructor: function(){
        this.statusBar();
    },
    ready: function(){
        this.goTo("default");
    },
    statusBar: function(){
        if(this.isCordova){
            StatusBar.overlaysWebView(true);
            StatusBar.styleLightContent();
        }
    }
});