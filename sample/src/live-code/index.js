import React from "react"
import {render} from "react-dom"
import {MDXProvider} from "@mdx-js/react"

import Doc from "./doc.mdx"
import CodeBlock from "./CodeBlock"

const components = {
    code: CodeBlock
}

render(
    <MDXProvider components={components}>
        <Doc />
    </MDXProvider>,
    document.getElementById("root")
)
