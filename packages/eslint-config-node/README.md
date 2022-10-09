# @uspect/eslint-config-node

ESlint plugin includes Uspect rules for NodeJS applications. 
Designed to use with `@uspect/eslint-config`.

## Usage

Install from npm or yarn

```bash
npm i --save-dev @uspect/eslint-config @uspect/eslint-config-node
yarn add @uspect/eslint-config @uspect/eslint-config-node -D
```

Then, need to include necessary configurations sets to `.eslintrc`. Wee need to choose base configuration, and any
necessary additional configs.

```bash
{
  "extends": ["@uspect/eslint-config/app", "@uspect/eslint-config-node"]
}
```
