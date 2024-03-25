import '@ovotech/element/reset.css';
import '@ovotech/element/theme.css';
import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import {Heading1} from "@ovotech/element";

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


const IndexPage: React.FC<PageProps> = () => {
    return (
        <main style={pageStyles}>
            <Heading1>Hello Elements Gatsby Demo!</Heading1>
        </main>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
