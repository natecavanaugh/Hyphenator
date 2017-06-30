#!/bin/sh
":" //# http://sambal.org/?p=1014 ; exec /usr/bin/env node --harmony "$0" "$@"

var hyphenator = require('../hyphenate');

var resp = process.argv[2].split(' ').map(function(word) {
	return hyphenator.hyphenate_word(word).join('-');
}).join(' ');

console.log(resp);