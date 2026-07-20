import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Land Index — Tier List",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html className="min-h-full bg-[#111410] font-sans" lang="en">
      <head>
        <HeadContent />
        <script src="/random-favicon.js" />
      </head>
      <body className="m-0 min-h-full min-w-80 bg-[radial-gradient(circle_at_74%_0%,rgb(95_119_73_/_16%),transparent_31rem)] text-[#f2f0e9] [font-synthesis:none]">
        {children}
        {import.meta.env.DEV ? (
          <TanStackDevtools
            config={{
              position: "bottom-right",
            }}
            plugins={[
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        ) : null}
        <Scripts />
      </body>
    </html>
  );
}
