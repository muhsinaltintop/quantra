# GitHub Pages Deployment

This project is configured as a static Next.js export and can be deployed to GitHub Pages with GitHub Actions.

## Enable GitHub Pages

1. Push this repository to GitHub.
2. Open the repository on GitHub.
3. Go to **Settings** → **Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Save the settings if GitHub prompts you to do so.

After GitHub Pages is set to **GitHub Actions**, every push to the `main` branch will run `.github/workflows/deploy.yml`, build the static site, upload the `out` directory, and deploy it to Pages.

## Deployment URL

For a project site, the final URL usually follows this format:

```text
https://<github-username>.github.io/<repository-name>/
```

Replace `<github-username>` with the owner account or organization and `<repository-name>` with the repository name.

## Repository Path Configuration

If this site is deployed under a repository path such as:

```text
https://<github-username>.github.io/<repository-name>/
```

then Next.js may need `basePath` and `assetPrefix` configured so generated routes and static assets resolve correctly.

When the repository name is known, update `next.config.js` like this:

```js
/** @type {import('next').NextConfig} */
const repositoryName = "<repository-name>";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: `/${repositoryName}`,
  assetPrefix: `/${repositoryName}/`,
};

module.exports = nextConfig;
```

For a user or organization site deployed at the root URL, such as:

```text
https://<github-username>.github.io/
```

leave `basePath` and `assetPrefix` unset.

## Static Compatibility Report

Checked for the following GitHub Pages and static export incompatibilities:

- API routes: none found.
- Route Handlers: none found.
- Server Actions: none found.
- Middleware: none found.
- SSR-only pages: none found.
- Dynamic runtime features: none found.

The current application routes are static App Router pages and are compatible with `output: "export"`.
