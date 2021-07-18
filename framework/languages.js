let languages = {
    languagesDataset: require('../languages'),
    get: (language, id) => {
        if(!language||!id||!languages.languagesDataset[language]||!languages.languagesDataset[language][id]) return false;
        return languages.languagesDataset[language][id];
    },
    refresh: () => {
        languages.languagesDataset = require('../languages');
    }
}
module.exports = languages;