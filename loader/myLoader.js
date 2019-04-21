const fs = require("fs");

module.exports = async function(src) {
    const callback = this.async()

    const newSrc = src.replace(/\!\[(?<alt>.*)\]\((?<imgPath>.*\.png)\)/g, (match, alt, imgPath) => {
        const buff = new Buffer(fs.readFileSync(imgPath))
        return `![${alt}](data:image/png;base64,${buff.toString("base64")})`
    })

    return callback(null, newSrc)
}
