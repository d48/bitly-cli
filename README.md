# Introduction

This is a small command line interface tool that uses the [node bit.ly api lib](https://github.com/tanepiper/node-bitly) to shorten a url for a custom domain.

# Install

`npm install bitly-cli`

or

`git clone git@github.com/design48/bitly-cli && bitly-cli`

## To create a symbolic link to `bitly-cli` in the `bin` folder. Alias is now `bit`
`npm link`

# Configuration

Create a `config.json` file in the config directory

```javascript
{ 
  "username": "yourBit.lyUsername",
  "apiKey": "yourBit.lyApiKey"
}
```

# Usage

`$ bit shorten "http://www.google.com"`

Ouput would be:

```bash
Shortening this url:  http://www.google.com
Result:  http://d48.io/Wc6PZT

http://d48.io/Wc6PZT has been copied to the clipboard.
```

