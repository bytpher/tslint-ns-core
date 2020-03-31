# TSLint NativeScript Core 

Recommended tslint configuration for NativeScript Core applications.

## Requirements

This package works with prettier for an quick and easy code format

```bash
npm i -D prettier prettier-tslint pretty-quick
```

Packages:

* [prettier](https://github.com/prettier/prettier): Prettier is an opinionated code formatter
* [prettier-tslint](https://github.com/azz/prettier-tslint): Formats your TypeScript using `prettier` followed by `tslint --fix``
* [pretty-quick](https://github.com/azz/pretty-quick): Runs Prettier on your changed files.


## Installation

```bash
npm i -D @bytpher/tslint-ns-core
```

## Usage 

```json
{
  "extends": ["@bytpher/tslint-ns-core"]
}
```

## Pre-Commit Hook

You can use [husky](https://github.com/typicode/husky) to configure a pre-commit hook to run [pretty-quick](https://github.com/azz/pretty-quick)

```bash
npm i -D husky
```

Create a `.huskyrc.json` in the root of yor project and add the following configuration

```json
{
  "hooks": {
    "pre-commit": "pretty-quick --staged"
  }
}
```

This configuration will run [pretty-quick](https://github.com/azz/pretty-quick) before each commit and formatting the staged files allowing us a seamless code format between all developers working in the project