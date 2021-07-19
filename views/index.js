let framework = require('../framework'),
html = framework.html,
assets = "https://getbootstrap.com";
module.exports = html.compile({
    "acn//html": {
        tag: "html",
        inline: {lang: "en"},
        content: {
            "acn//head": {
                tag: "head",
                content: {
                    "acn//meta1": html.void({tag:"meta",inline:{charset:"utf-8"}}),
                    "acn//meta2": html.void({tag:"meta",inline:{name:"viewport", content:"width=device-width, initial-scale=1, shrink-to-fit=no"}}),
                    "acn//meta3": html.void({tag:"meta",inline:{name:"description", content:""}}),
                    "acn//meta4": html.void({tag:"meta",inline:{name:"author", content:""}}),
                    "acn//link1": html.link("icon", assets+"/docs/4.0/assets/img/favicons/favicon.ico"),
                    "acn//title": {tag:"title",content:{"acn//content":"Cover Template for Bootstrap"}},
                    "acn//link2": html.link("canonical", assets+"/docs/4.0/assets/img/favicons/favicon.ico"),
                    "acn//link3": html.style("https://getbootstrap.com/docs/4.0/dist/css/bootstrap.min.css"),
                    "acn//link4": html.style("https://getbootstrap.com/docs/4.0/examples/cover/cover.css")
                }
            },
            "acn//body": {
                tag: "body",
                class: ["text-center"],
                content: {
                    
                }
            }
        }
    }
});