import React from "react"
import LinkList from "./LinkList"
import { Link, graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/core"

import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  // useStaticQuery
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div
      css={css`
        margin: 0 auto;
        max-wdith: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <header
        css={css`
          margin-bottom: ${rhythm(2)};
        `}
      >
        <Link
          to="/"
          css={css`
            background-image: none;
            text-shadow: none;
          `}
        >
          <h3
            css={css`
              display: inline;
              margin-bottom: ${rhythm(2)};
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>

        {/* UL */}
        <ul
          css={css`
            float: right;
            list-style: none;
          `}
        >
          <LinkList to="/">Home</LinkList>
          <LinkList to="/contact">Contact</LinkList>
          <LinkList to="/about">About</LinkList>
        </ul>
      </header>
      {children}
    </div>
  )
}
