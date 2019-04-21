import React from "react"
import {render} from "react-dom"
import {MDXProvider} from "@mdx-js/react"

import Doc from "./doc.mdx"
import CodeBlock from "./CodeBlock"

const components = {
    h1: props => <h1 style={{color: "tomato"}} {...props} />,
    code: CodeBlock,
}

render(
    <MDXProvider components={components}>
        <Doc />
    </MDXProvider>,
    document.getElementById("root")
)
