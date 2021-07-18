let html = {
    compile: (objectedHTML) => {
        let compute = (id, from) => {
            if(!id&&typeof from == "object") {
                let generated = "";
                Object.keys(from).forEach(element => {
                    generated += compute(element, from[element]);
                });
                return generated
            } 
            if(typeof from == "string") return from;
            let content = [];
            Object.keys(from.content||{}).forEach(element => {
                content.push(compute(element, from.content[element]))
            });
            let inline = "";
            Object.keys(from.inline||{}).forEach(element => {
                inline+=` ${element}="${from.inline[element]}"`;
            });
            return `<${from.tag||"div"}${from.style?` style="${from.style}"`:""}${id&&!id.startsWith("acn")?` id="${id}"`:""}${from.class&&from.class.length>0?` class="${from.class.join(" ")}"`:""}${inline.length>0?inline:""}>${content.join("")}</${from.tag||"div"}>`;
        }
        return compute(false, objectedHTML);
    },
    script: (script, integrity) => {
        return html.compile({"acn":{tag:"script",inline:integrity?{src: script, integrity, crossorigin: "anonymous"}:{src: script, crossorigin: "anonymous"}}});
    },
    scriptLoader: (scriptList, path) => {
        let code = "";
        scriptList.forEach(script => {
            scriptname = Array.isArray(script)?script[0]:script;
            code += html.script((path||"")+scriptname+scriptname.endsWith(".js")?scriptname:scriptname+".js", Array.isArray(script)?script[1]||false:false)
        });
        return code;
    },
    link: (rel, href, type, title) => {
        let inline = {rel: rel?rel:"", href: href?href:""};
        if(type) inline.type = type;
        if(title) inline.title = title;
        return html.void({tag: "link", inline});
    },
    style: (href) => {
        return html.link("stylesheet", href?href:"");
    },
    styleElement: (style) => {
        return `<style>${style?style:""}</style>`;
    },
    void: (voidObjected) => {
        let inline = "";
        Object.keys(voidObjected.inline||{}).forEach(element => {
            inline+=` ${element}="${voidObjected.inline[element]}"`;
        });
        return `<${voidObjected.tag||"br"}${voidObjected.style?` style="${voidObjected.style}"`:""}${voidObjected.class&&voidObjected.class.length>0?` class="${voidObjected.class.join(" ")}"`:""}${inline.length>0?inline:""}/>`;
    }
};

module.exports = html;