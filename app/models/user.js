t.collections.user = t.libraries.Collection.subclass({
    constructor: t.libraries.Collection.prototype.constructor,
    adapter: function(){
        return new t.libraries.Adapters.socket("user");
    },
    auth: false,
    init: function(){
        if(!t.app.isCordova) {
            facebookConnectPlugin.browserInit("514351958714103");
        }
    },
    connect: function(onComplete){
        var self = this;
        facebookConnectPlugin.login(["email", "public_profile", "user_friends"], function(auth){
            if(auth.status === "connected"){
                this.auth = auth;
                self.callback("auth", onComplete, auth);
            }else{
                self.callback("auth", onComplete);
            }
        }, function(e){
            self.callback("auth", onComplete);
        });
    },
    checkConnection: function(onComplete){
        var self = this;
        facebookConnectPlugin.getLoginStatus(function(auth){
            if(auth.status === "connected"){
                this.auth = auth;
                self.callback("checkAuth", onComplete, auth);
            }else{
                self.callback("checkAuth", onComplete);
            }
        }, function(){
            self.callback("checkAuth", onComplete);
        });
    },
    login: function(auth, callback){
        var self = this;
        this.query("login", auth, function(response){
            response.user = self.create(response.user)
            self.callback("login", callback, response);
        })
    }
});

t.models.user = t.libraries.Model.subclass({
    constructor: t.libraries.Model.prototype.constructor
});