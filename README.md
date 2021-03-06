# Overview

This is a small command line interface tool that uses the [node bit.ly api lib](https://github.com/tanepiper/node-bitly) to shorten a url for a custom domain.

## Installation

`git clone git@github.com:design48/bitly-cli.git && cd bitly-cli`

Set **bit** as symbolic link and that can be run globally

`$ npm link`

## Configuration

Create a `config.json` file in the config directory

```javascript
{ 
  "username": "yourBit.lyUsername",
  "apiKey": "yourBit.lyApiKey"
}
```

## Usage

`$ bit shorten "http://www.google.com"`

Ouput would be (assuming you set d48.io as your custom short domain):

```bash
Shortening this url:  http://www.google.com
Result:  http://d48.io/Wc6PZT

http://d48.io/Wc6PZT has been copied to the clipboard.
```

## Todo

1. Add other bit.ly api methods other than `shorten` when needed
2. Tests
3. Separate methods in it's own module once gets bigger
