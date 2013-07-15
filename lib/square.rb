class Square
  attr_accessor :left, :right, :up, :down
  attr_reader :id

  def initialize id
    @left = nil
    @right = nil
    @up = nil
    @down = nil
    @id = id
  end

  def point options
    options.each do |key, value|
      self.send key.to_s + "=", value
    end
    self
  end
end
