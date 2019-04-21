import React from "react"
import {render} from "react-dom"
import {MDXProvider} from "@mdx-js/react"

import Doc from "./doc.mdx"

const components = {
    wrapper: props => (
        <div style={{ padding: "20px", backgroundColor: "tomato" }}>
            <main {...props} />
        </div>
    )
}

render(
    <MDXProvider components={components}>
        <Doc />
    </MDXProvider>,
    document.getElementById("root")
)