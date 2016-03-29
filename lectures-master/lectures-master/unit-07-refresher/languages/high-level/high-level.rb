def count_twos(num)
  count = 0
  for i in (2..num)
    count += i.to_s.count('2')
  end
  count
end

p count_twos 100

# 119 characters typed (not including comment)
