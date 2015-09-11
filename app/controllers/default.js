t.controllers.default = t.libraries.Controller.subclass({
    users: {},
    constructor: function(){
        var self = this;
        
        this.users = t.collections.user;
        
        this.users.init();

        this.users.checkConnection(function(auth){
            if(auth){
                self.users.login(auth, function(response){
                    if(response){
                        self.login(response.token);
                    }else{
                        self.display();
                    }
                })
            }else{
                self.display();
            }
        })
    },
    display: function(){
        this.hideLoading();
        this.render("default", ["abutton"], function(){
            var $view = this.$view;
            
            $view.find("#asydeLogo").velocity({translateZ: 0 }, 0);
            $view.find("#welcomeMessage").css({ opacity: 0 });
            $view.find("#fbButton").css({ opacity: 0, width: 62 }).children("span").css({ opacity: 0 });
            $view.show();
            setTimeout(function(){
                $view.find("#asydeLogo").velocity({ translateY: "-300%" }, 1000);
                $view.find("#welcomeMessage").velocity({ opacity: 1 }, { duration: 1000, delay: 1100 });
                $view.find("#fbButton").velocity({ opacity: 1, width: "60%" }, { duration: 800, delay: 1200 }).children("span").velocity({ opacity: 1 }, { duration: 800, delay: 2200 });
            }, 500)
        });
    },
    getStarted: function(e, self){
        self.showLoading();
        $el = $(this);
        $el.children("span").velocity("reverse");
        $el.velocity({ width: 62 }, { delay: 600 });
        
        setTimeout(function(){
            self.users.connect(function(auth){
                if(auth){
                    self.users.login(auth, function(response){
                        if(response){
                            self.login(response.token);
                        }else{
                            self.display();
                        }
                    })
                }else{
                    $el.velocity("reverse");
                    $el.children("span").velocity({ opacity: 1 }, { duration: 800, delay: 600 });
                    self.hideLoading();
                }
            })
        }, 2000);

        
        return false;
    },
    login: function(token){
        var self = this;
        t.app.token = token;
        self.goTo("dashboard");
    }
});