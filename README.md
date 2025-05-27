![](/header.png)

# ngx-boomer

As part of their new style guide, Angular does not encourage using suffix on class names and/or files, based on the following rules:

- for components, directives and services, Angular CLI does not generates a suffix for the class name and the file name.

- for guards, interceptors, modules, pipes and resolvers, Angular CLI now use a `-` separator in the file name, between the class name and the file type, moving from `auth.guard.ts` to `auth-guard.ts` for example.

Using `ng update` towards Angular v20 will update your angular.json schematics rules to keep the current behavior, applying these changes:

```json
{
   "@schematics/angular:component": { "type": "component" },
   "@schematics/angular:directive": { "type": "directive" },
   "@schematics/angular:service": { "type": "service" },
   "@schematics/angular:guard": { "typeSeparator": "." },
   "@schematics/angular:interceptor": { "typeSeparator": "." },
   "@schematics/angular:module": { "typeSeparator": "." },
   "@schematics/angular:pipe": { "typeSeparator": "." },
   "@schematics/angular:resolver": { "typeSeparator": "." }
}
```

Creating an Angular project with Angular CLI v20 won't include these rules, using the style guide recommandations by default.

This project is a simple tool to add these rules on any new projet, to keep the previous behavior.

Run `npx ngx-boomer` to update your `angular.json` file.

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
