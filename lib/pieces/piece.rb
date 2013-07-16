class Piece
  attr_accessor :x, :y
  attr_reader :color

  def initialize hsh
    @color = hsh[:color]
    @x = hsh[:x]
    @y = hsh[:y]
  end
end
