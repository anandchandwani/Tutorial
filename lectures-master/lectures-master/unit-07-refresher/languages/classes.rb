class Person

  def initialize(name)
    @name = name
  end

  def greet
    puts "Hello, my name is #{@name}"
  end
end


class Student < Person
  def study
    puts "I know what the this keyword is!"
  end
end


andy = Student.new('andy')
andy.greet
andy.study

p andy.class
p andy.class.superclass
p Student.superclass
p Student.superclass.superclass