# ngx-boomer

A simple CLI tool to update or add specific `schematics` keys in an Angular project's `angular.json` file. Designed to be used directly with `npx`—no installation required!

## What does it do?

When run, this tool will:

- Add a `schematics` key to your `angular.json` if it doesn't exist.
- For each of the following keys, add or update their value:
  - `@schematics/angular:component`: `{ type: 'component' }`
  - `@schematics/angular:directive`: `{ type: 'directive' }`
  - `@schematics/angular:service`: `{ type: 'service' }`
  - `@schematics/angular:guard`: `{ typeSeparator: '.' }`
  - `@schematics/angular:interceptor`: `{ typeSeparator: '.' }`
  - `@schematics/angular:module`: `{ typeSeparator: '.' }`
  - `@schematics/angular:pipe`: `{ typeSeparator: '.' }`
  - `@schematics/angular:resolver`: `{ typeSeparator: '.' }`
- Leave any other existing `schematics` keys untouched.

## Usage

### With npx (after publishing)

```sh
npx ngx-boomer
```

This will update the `angular.json` in your current directory.

### Run Locally (before publishing)

1. Make sure you have an `angular.json` in your current directory.
2. Run:
   ```sh
   node cli.js
   ```

## Development & Publishing

1. **Test locally:**

   - Place an `angular.json` in your project root.
   - Run `node cli.js` to test the script.

2. **Prepare for publishing:**

   - Ensure your `package.json` has the correct `name`, `version`, and `bin` fields.
   - Optionally, update the description and keywords.

3. **Publish to npm:**
   - Log in to npm if you haven't already:
     ```sh
     npm login
     ```
   - Publish the package:
     ```sh
     npm publish
     ```

## License

ISC
