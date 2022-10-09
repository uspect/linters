# @uspect/eslint-config-react-native

ESlint plugin includes Uspect rules for React Native app applications. 
Designed to use with `@uspect/eslint-config`.

## Usage

Install from npm or yarn

```bash
npm i --save-dev @uspect/eslint-config @uspect/eslint-config-react-native
yarn add @uspect/eslint-config @uspect/eslint-config-react-native -D
```

Then, need to include necessary configurations sets to `.eslintrc`. Wee need to choose base configuration, and any
necessary additional configs.

```bash
{
  "extends": ["@uspect/eslint-config/app", "@uspect/eslint-config-react-native"]
}
```

## Internal used plugins

- `eslint-plugin-react-native` - common react native lint rules
- `eslint-plugin-react-native-globals` - react native additional rules
