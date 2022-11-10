import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { MantineProvider, Global } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* sets up theming and global styles for Mantine */}
    <MantineProvider
      theme={{
        colors: {
          "longhorn-orange": [
            "#E8E1DA",
            "#DBCCBE",
            "#D2B9A1",
            "#CFA783",
            "#D29761",
            "#DC883C",
            "#ED7A11",
            "#C26F23",
            "#A0642E",
            "#865B34",
            "#715236",
            "#604A36",
            "#534334"
          ]
        },
        primaryColor: "longhorn-orange"
      }}
    >
      <Global
        styles={() => ({
          "*, *::before, *::after": {
            boxSizing: "border-box"
          },
          // this is adaptation of CSS reset to override user agent stylesheets
          // https://meyerweb.com/eric/tools/css/reset/
          "html, body, div, span, applet, object, iframe, \
          h1, h2, h3, h4, h5, h6, p, blockquote, pre, \
          a, abbr, acronym, address, big, cite, code, \
          del, dfn, em, img, ins, kbd, q, s, samp, \
          small, strike, strong, sub, sup, tt, var, \
          b, u, i, center, \
          dl, dt, dd, ol, ul, li, \
          fieldset, form, label, legend, \
          table, caption, tbody, tfoot, thead, tr, th, td, \
          article, aside, canvas, details, embed, \
          figure, figcaption, footer, header, hgroup, \
          menu, nav, output, ruby, section, summary, \
          time, mark, audio, video": {
            margin: 0,
            padding: 0,
            border: 0,
            verticalAlign: "baseline"
          }
        })}
      />
      {/* sets up React Router, have it at the top level and define routes below*/}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
