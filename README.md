# sf.gov front end

This is the future [SF.gov] front end, built with the [SF.gov design system] and [Next.js](https://nextjs.org/).

## Local development

### Setup

0. **Optional, but highly recommended**: install [asdf] and [asdf-nodejs]. Once asdf is active in your shell, the [.tool-versions](./.tool-versions) file should prompt for the installation of the required Node.js version.

1. `npm install` to install required dependencies

### Development server
Run `npm run dev` (or `npx next dev`) to run the Next.js development server. This should automatically open a web browser to `http://localhost:3000`, or whichever port you've specified in `$PORT`.

### Link to `@sfgov/react`
If you're also working on the `@sfgov/react` component library, it can be helpful to  [link][npm link] the package for testing.

0. Ensure that `.tool-versions` in the design system repo lists the same version of Node.js that you're running in this repo. **You won't be able to link the package if the design system is running in a different Node.js environment.**

1. `cd` to `packages/react` in the design system repo directory

2. Run `npm link` to create a global link to the local package

3. `cd` back to this repo and run `npm link @sfgov/react` to link the global package here.

From this point on, running `npm run build` in the React package directory should trigger a hot module reload in the Next.js dev server.

[sf.gov]: https://sf.gov
[sf.gov design system]: https://design-system.sf.gov
[asdf]: https://github.com/asdf-vm/asdf
[asdf-nodejs]: https://github.com/asdf-vm/asdf-nodejs
[npm link]: https://docs.npmjs.com/cli/v8/commands/npm-link?v=true