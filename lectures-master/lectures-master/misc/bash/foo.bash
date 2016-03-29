# log output
echo "lol"
echo lol lmao rofl
echo 2 + 2

# variable assignment
name=andy
echo name
echo $name

# conditionals
if [ 3 -gt 1 ]; then
  echo true
else
  echo false
fi

# loops
for i in $(seq 1 5); do
  echo $i
done

# colors
echo -e "\e[1;31m BOLD RED \e[m"
echo -e "\e[0;31;44m red with blue background \e[m"

# unicode characters
echo -e "\e[0;0;40m \xf0\x9f\x92\x80 \e[m"
echo -e "\e[1;36m \xf0\x9f\x92\x8e \e[m"