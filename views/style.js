let framework = require('../framework'),
style = framework.css.parse(`body {
    padding: 50px;
    font: 14px "Lucida Grande", Helvetica, Arial, sans-serif
}
a {
    color:#00B7FF
}`);
style.body.backgroundColor = "#ccc";
module.exports = framework.css.stringify(style);