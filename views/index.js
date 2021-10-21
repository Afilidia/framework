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
                    "acn//link1": html.link("icon", "https://www.freeiconspng.com/uploads/developer-services-icon-21.png"),
                    "acn//title": {tag:"title",content:{"acn//content":"Frontent toolkit tester"}},
                    "acn//link2": html.link("canonical", assets+"/docs/4.0/assets/img/favicons/favicon.ico"),
                    "acn//link3": html.style("https://getbootstrap.com/docs/4.0/dist/css/bootstrap.min.css"),
                    "acn//link4": html.style("https://getbootstrap.com/docs/4.0/examples/cover/cover.css"),
                    "interactive": html.interactivesCore()
                }
            },
            "acn//body": {
                tag: "body",
                content: {
                    "curtain": new html.InteractiveComponent({"curtain": {style: framework.css.stringify({"":{fontSize: '8vw', backgroundColor:'#fff', textAlign:'center', color: '#000',width:'100vw',height:'100vh',position:'absolute',zIndex:'1000',margin:0,top:0,left:0,textShadow:'2px 2px #000'}}).replace("{","").replace("}","").trim()}}).get(),
                    "container": new html.InteractiveComponent({"interactive-widget": {style: framework.css.stringify({"":{zIndex:'100'}}).replace("{","").replace("}","").trim(),content:{"hello": {content: {"acn": framework.languages.get("english", "general.helloworld")}}}}}).get(),
                    "underline": new html.InteractiveComponent({"underline": {style: framework.css.stringify({"":{zIndex:'80',backgroundColor:'#fff',width:'15vw',height:'0.5vh',top:'0%',left:'50%',transform:'translate(-50%, -50%)',position:'absolute'}}).replace("{","").replace("}","").trim()}}).get(),
                    "animation": html.scriptElement(html.jsCode(()=>{
                        (async()=>{
                            let queue = new interactivesCore.QueueManager([
                                (next, wait)=>{
                                    interactives["interactive-widget"].component.style.top = '-100%';
                                    interactives["interactive-widget"].component.style.position = "absolute";
                                    interactives["interactive-widget"].component.style.fontSize = "2vw";
                                    interactives["interactive-widget"].component.style.transform = "translate(-50%, -50%)";
                                    wait(3000,next);
                                },
                                (next, wait)=>{
                                    interactives.curtain.component.innerText = "What? Blank page!?";
                                    wait(1500,next);
                                },
                                (next, wait)=>{
                                    interactives.curtain.component.innerText = "";
                                    wait(interactives.curtain.addAnimation("height", new interactivesCore.Combination("99.9vh", "00.0vh"), 2),next);
                                },
                                (next, wait)=>{
                                    wait(interactives["underline"].addAnimation("top", new interactivesCore.Combination("00.0%", "49.9%"), 4),()=>{interactives["underline"].addAnimation("top", new interactivesCore.Combination("50.0%", "53.9%"), 16)});
                                    interactives["interactive-widget"].addAnimation("left", new interactivesCore.Combination("00.0%", "79.9%"), 2);
                                    wait(interactives["interactive-widget"].addAnimation("top", new interactivesCore.Combination("00.0%", "79.9%"), 2),next);
                                },
                                (next, wait)=>{
                                    interactives["interactive-widget"].component.style.transitionDuration = '0.9s';
                                    interactives["interactive-widget"].component.style.transitionProperty = 'transform';
                                    interactives["interactive-widget"].component.style.transform = '';//'rotate(360deg)';
                                    wait(1000,next);
                                },
                                (next, wait)=>{
                                    interactives["interactive-widget"].component.style.transform = 'rotate(-360deg) translate(-50%, -50%)';
                                    interactives["interactive-widget"].addAnimation("top", new interactivesCore.Combination("79.9%", "50.0%"), 2);
                                    wait(interactives["interactive-widget"].addAnimation("left", new interactivesCore.Combination("79.9%", "50.0%"), 2),next);
                                },
                                // (next, wait)=>{
                                //     wait(animation,next);
                                // },
                                (next, wait, resolve)=>{
                                    let shake = new interactivesCore.QueueManager([
                                        (next, wait)=>{
                                            wait(interactives["underline"].addAnimation("left", new interactivesCore.Combination("50.0%", "52.9%"), 1),next);
                                        },
                                        (next, wait)=>{
                                            wait(interactives["underline"].addAnimation("left", new interactivesCore.Combination().number("", 53, 47, 1, "%"), 1),next);
                                        },
                                        // this must be maked by interactivesCore.Combination.number because default combination generator treat every char in config as single character, not number and decrementing 49.9 to 47.0 looks like this: 
                                        // ["52.9", "52.8", "52.7", "52.6", "52.5", "52.4", "52.3", "52.2", "52.1", "52.0", "53.9", "53.8", "53.7", "53.6", "53.5", "53.4", "53.3", "53.2", "53.1", "53.0", "54.9", "54.8", "54.7", "54.6", "54.5", "54.4", "54.3", "54.2", "54.1", "54.0", "55.9", "55.8", "55.7", "55.6", "55.5", "55.4", "55.3", "55.2", "55.1", "55.0", "56.9", "56.8", "56.7", "56.6", "56.5", "56.4", "56.3", "56.2", "56.1", "56.0", "57.9", "57.8", "57.7", "57.6", "57.5", "57.4", "57.3", "57.2", "57.1",
                                        // "57.0", <--------
                                        // "42.9", <--------
                                        // "42.8", "42.7", "42.6", "42.5", "42.4", "42.3", "42.2", "42.1", "42.0", "43.9", "43.8", "43.7", "43.6", "43.5", "43.4", "43.3", "43.2", "43.1", "43.0", "44.9", "44.8", "44.7", "44.6", "44.5", "44.4", "44.3", "44.2", "44.1", "44.0", "45.9", "45.8", "45.7", "45.6", "45.5", "45.4", "45.3", "45.2", "45.1", "45.0", …]
                                        (next, wait)=>{
                                            wait(interactives["underline"].addAnimation("left", new interactivesCore.Combination("47.0%", "49.9%"), 1),next);
                                        }
                                    ]);
                                    setInterval(shake.run, 5000);
                                    let flick = new interactivesCore.QueueManager([
                                        (next, wait)=>{
                                            wait(interactives["interactive-widget"].addAnimation("top", new interactivesCore.Combination().number("", 50, 45, 1, "%"), 1), next);
                                        },
                                        (next, wait)=>{
                                            wait(interactives["interactive-widget"].addAnimation("color", new interactivesCore.Combination().number("hsl(0, 100%, ", 100, 50, 1, "%)"), 1), next);
                                        },
                                        (next, wait)=>{
                                            wait(interactives["interactive-widget"].addAnimation("color", new interactivesCore.Combination().number("hsl(", 0, 360, 0, ", 100%, 50%)"), 3), next);
                                        },
                                        (next, wait)=>{
                                            wait(interactives["interactive-widget"].addAnimation("color", new interactivesCore.Combination().number("hsl(360, 100%, ", 50, 100, 1, "%)"), 1), next);
                                        },
                                        (next, wait)=>{
                                            wait(interactives["interactive-widget"].addAnimation("top", new interactivesCore.Combination().number("", 45, 50, 1, "%"), 1), next);
                                        }
                                    ]);
                                    setInterval(flick.run, 15000)
                                    resolve(true);
                                    next();
                                }
                            ]);
                            await queue.promiseRun();
                            console.log("end");
                        })();
                    }))
                }
            }
        }
    }
});