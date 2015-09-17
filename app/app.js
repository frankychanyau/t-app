t.app = new t.libraries.App({
    title: "My App",
    subTitle: "Welcome",
    routes: {
        "/": "default",
        "/index/two": "default.two",
        "/test": "test.index"
    }
});