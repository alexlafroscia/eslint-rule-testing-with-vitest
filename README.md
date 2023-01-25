# eslint-plugin-dummy-plugin

A dummy plugin for demonstrating testing with Vitest

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-dummy-plugin`:

```sh
npm install eslint-plugin-dummy-plugin --save-dev
```

## Usage

Add `dummy-plugin` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["dummy-plugin"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "dummy-plugin/rule-name": 2
  }
}
```

## Rules

<!-- begin auto-generated rules list -->

TODO: Run eslint-doc-generator to generate the rules list.

<!-- end auto-generated rules list -->
