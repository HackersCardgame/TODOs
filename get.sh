#!/bin/bash

git clone git clone https://github.com/braindef/Hackers-Cardgame2

for i in $(echo 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21)
do
git clone https://github.com/braindef/HackersCardgame${i}
done

