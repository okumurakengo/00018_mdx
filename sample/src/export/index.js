import React from "react"
import {render} from "react-dom"

import MDXDocument, { metadata } from "./post.mdx"

render(
    <>
        <MDXDocument />
        <footer>
            <p>By: {metadata.authors.join(", ")}.</p>
        </footer>
    </>,
    document.getElementById("root")
)