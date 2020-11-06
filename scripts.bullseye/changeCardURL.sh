#!/bin/bash

for i in $(find $1 -name '*.svg'); do sed -i 's/https:\/\/0x8.ch\/HackersCardgame12/https:\/\/0x8.ch\/HackersCardgame17/g' "$i"; done
