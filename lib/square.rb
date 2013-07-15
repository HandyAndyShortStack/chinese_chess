class Square
  attr_accessor :left, :right, :up, :down
  attr_reader :x, :y

  def initialize x, y
    @x = x
    @y = y
    @left = nil
    @right = nil
    @up = nil
    @down = nil
  end

  def point options
    options.each do |key, value|
      self.send key.to_s + "=", value
    end
    self
  end
end
