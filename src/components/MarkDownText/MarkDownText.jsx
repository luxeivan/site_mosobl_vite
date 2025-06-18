import React from "react";
import { Typography } from "antd";
import Markdown from "markdown-to-jsx";
import styles from "./MarkDownText.module.css";

export default function MarkDownText({ children, }) {
  if (typeof children !== "string") {
    return false;
  }
  return (
    <Markdown
      options={{
        // forceBlock: true,
        // forceInline: true,
        // forceWrapper:true,
        overrides: {
          p: {
            props: {
              className: styles.para,
            },
          },
          h2: {
            component: Typography.Title,
            props: {
              className: styles.heading,
              level: 2,
            },
          },
          h3: {
            component: Typography.Title,
            props: {
              className: styles.heading,
              level: 3,
            },
          },
          h4: {
            component: Typography.Title,
            props: {
              className: styles.heading,
              level: 4,
            },
          },
          h5: {
            component: Typography.Title,
            props: {
              className: styles.heading,
              level: 5,
            },
          },
          a: {
            props: {
              className: styles.link,
            },
          },
          h6: {
            component: Typography.Title,
            props: {
              className: styles.heading,
              level: 5,
            },
          },
          strong: {
            props: {
              className: styles.strong,
            },
          },
          table: {
            props: {
            
              className: styles.table,
            },
          },
          
          ul: {
            props: {
              className: styles.ul,
            },
          },
          li: {
            props: {
              // className: styles.li,
            },
          },
        },
      }}
    >
      {children}
    </Markdown>
  );
}
