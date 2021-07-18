let framework = require('../framework'),
html = framework.html,
assets = "https://getbootstrap.com",
widgets = {
    hello: (id, lang, textcolor)=>{
        let widgetTemplate = {};
        widgetTemplate[`widget-${id}`] = {
            style: `color: ${textcolor};`,
            content: {
                "acn": framework.languages.get(lang, "general.helloworld")
            }
        }
        return html.compile(widgetTemplate);
    },
    selectlang: ()=>{
        return html.compile({
            "acn":{
                class: ["widget"],
                content: {
                    "english": {tag: "a", class: ["btn", "btn-lg", "btn-secondary"], style: "margin: 10px;", inline: {href: "/example2?lang=english"}, content: {"acn": "English"}},
                    "polish": {tag: "a", class: ["btn", "btn-lg", "btn-secondary"], style: "margin: 10px;", inline: {href: "/example2?lang=polish"}, content: {"acn": "Polish"}}
                }
            }
        });
    }
},
site = (lang, top, bottom) => {
    return html.compile({
        "acn//html": {
            tag: "html",
            inline: {lang: lang||"en"},
            content: {
                "acn//head": {
                    tag: "head",
                    content: {
                        "acn//meta1": html.void({tag:"meta",inline:{charset:"utf-8"}}),
                        "acn//meta2": html.void({tag:"meta",inline:{name:"viewport", content:"width=device-width, initial-scale=1, shrink-to-fit=no"}}),
                        "acn//title": {tag:"title",content:{"acn//content":"Framework example"}},
                        "acn//link2": html.link("canonical", assets+"/docs/4.0/assets/img/favicons/favicon.ico"),
                        "acn//link3": html.style("https://getbootstrap.com/docs/4.0/dist/css/bootstrap.min.css"),
                        "acn//link4": html.style("https://getbootstrap.com/docs/4.0/examples/cover/cover.css")
                    }
                },
                "acn//body": {
                    tag: "body",
                    class: ["text-center"],
                    content: {
                        "acn//div1": {
                            class: ["cover-container", "d-flex", "h-100", "p-3", "mx-auto", "flex-column"],
                            content: {
                                "acn//header": {
                                    tag: "header",
                                    class: ["masthead", "mb-auto"],
                                    content: {
                                        "acn": {
                                            class: ["inner"],
                                            content: {
                                                "acn//h3": {tag:"h3", class:["masthead-brand"],content:{"acn":"Raptor"}},
                                                "acn//nav": {
                                                    tag: "nav",
                                                    class: ["nav", "nav-masthead", "justify-content-center"],
                                                    content: {
                                                        "acn//a1": {tag: "a", class: ["nav-link", "active"], inline:{href:"/example2"}, content:{"acn":"Reset"}}
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                "acn//main": {
                                    class: ["inner", "cover"], inline:{role:"main"}, content:{
                                        "acn//h1":{tag:"h1", class:["cover-heading"], content:{"acn":top}},
                                        "acn//p1":{tag:"p", class:["lead"], content:{"acn": bottom}},
                                    }
                                },
                                "acn//footer": {
                                    tag: "footer",
                                    class: ["mastfoot", "mt-auto"],
                                    content: {"acn":{class:["inner"], content:{"acn":{tag:"p",content:{"acn":'<p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>'}}}}}
                                },
                                "acn//scripts": html.scriptLoader([
                                    ["https://code.jquery.com/jquery-3.2.1.slim.min.js", "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"],
                                    "https://getbootstrap.com/docs/4.0/assets/js/vendor/popper.min.js",
                                    "https://getbootstrap.com/docs/4.0/dist/js/bootstrap.min.js"
                                ]) + html.compile({"acn":{tag:"script",content:{"acn":`window.jQuery || document.write('<script src="https://getbootstrap.com/docs/4.0/assets/js/vendor/jquery-slim.min.js"><\\/script>')`}}})
                            }
                        }
                    }
                }
            }
        }
    })
},
render = (properties) => {
    if(!properties.lang) return site(false, "Select your language:", "<br><br>"+widgets.selectlang())
    return site(false, widgets.hello(properties.lang, properties.lang, "white"), "<br>You can also select other language:<br>" + widgets.selectlang())
}
module.exports = render;