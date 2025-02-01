# Next.js 15 File Naming Conflict with Dynamic Routes

This repository demonstrates a potential conflict in Next.js 15 when a static page file (`about.js`) shares a name (or part of a name) with a dynamic route segment (`/[slug]`).  This can lead to errors during the build process or unexpected runtime behavior.

## How to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

You should encounter a build error or unexpected behavior.

## Solution

Rename the static page file to something that doesn't conflict with your dynamic routes (e.g., `about-page.js` or `pages/about/index.js`). This resolves the ambiguity for Next.js.

This issue is specific to Next.js 15 and the interaction between statically defined files and dynamically generated routes.  Proper file naming and route structuring are crucial to avoid this type of error.