# eslint-plugin-spotti

Plugin for Spotti

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-spotti`:

```
$ npm install eslint-plugin-spotti --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-spotti` globally.

## Usage

Add `spotti` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "spotti"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "spotti/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





