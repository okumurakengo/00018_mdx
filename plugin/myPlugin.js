const visit = require("unist-util-visit")

module.exports = () => (tree, file) => {
    visit(tree, "heading", node => {
        visit(node, "text", textNode => {
            textNode.value = textNode.value.split("").reverse().join("")
        })
    })
}
