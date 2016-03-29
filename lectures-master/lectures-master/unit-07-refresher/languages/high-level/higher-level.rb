def count_twos(num)
  (2..num).reduce(0) { |sum, num| sum + num.to_s.count('2') }
end

p count_twos(100);

# 106 characters typed (not including comment)
