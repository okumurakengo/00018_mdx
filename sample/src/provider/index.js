import React from "react"
import {render} from "react-dom"
import {MDXProvider} from "@mdx-js/react"
import styled from "styled-components"

import Doc from "./doc.mdx"

const List = styled.li`
    background: skyblue;
    color: #fff;
    padding: 5px;
`

const components = {
    h1: props => <h1 style={{color: "tomato"}} {...props} />,
    h2: props => <h2 style={{color: "limegreen"}} {...props} />,
    li: props => <List {...props} />,
}

render(
    <MDXProvider components={components}>
        <Doc />
    </MDXProvider>,
    document.getElementById("root")
)
