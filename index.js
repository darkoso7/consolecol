#!/usr/bin/env node

import chalk from "chalk";

const
    str = process.argv[2] || '',
    foreColor = process.argv[3],
    backColor = process.argv[4];

let consolecol = chalk;
if(backColor) consolecol = consolecol.bgHex( backColor );
if(foreColor) consolecol = consolecol.hex( foreColor );

console.log( consolecol.bold( str ) );