import { RemixBrowser } from "@remix-run/react";

// With these 2 lines, cypress passes
// import { hydrate } from "react-dom";
// hydrate(<RemixBrowser />, document);

// With these 2 lines, cypress fails because of a hydration error
import { hydrateRoot } from "react-dom/client";
hydrateRoot(document, <RemixBrowser />);
