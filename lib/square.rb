class Square
  attr_accessor :left, :right, :up, :down
  attr_reader :x, :y

  def initialize x, y
    @x = x
    @y = y
  end

  def point hsh
    hsh.each do |key, value|
      metaclass.send(:define_method, key) { value }
    end
  end

  def coordinates
    { x: @x, y: @y }
  end

private

  def metaclass
    class << self
      self
    end
  end
end
