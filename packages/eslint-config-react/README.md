# @uspect/eslint-config-react

ESlint plugin includes Uspect rules for React applications. 
Designed to use with `@uspect/eslint-config`.

## Usage

Install from npm or yarn

```bash
npm i --save-dev @uspect/eslint-config @uspect/eslint-config-react
yarn add @uspect/eslint-config @uspect/eslint-config-react -D
```

Then, need to include necessary configurations sets to `.eslintrc`. Wee need to choose base configuration, and any
necessary additional configs.

```bash
{
  "extends": ["@uspect/eslint-config/app", "@uspect/eslint-config-react"]
}
```

## Internal used plugins

- `eslint-plugin-react` - common react lint rules
- `eslint-plugin-react-hooks` - lint rules for react hooks