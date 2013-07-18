require_relative "../board"

class Piece
  attr_accessor :x, :y
  attr_reader :color, :moves

  def initialize hsh
    @color = hsh[:color]
    @x = hsh[:x]
    @y = hsh[:y]
    @moves = []
  end

  @@board = Board.new

  def get_moves position
  end

private

  def directions
    [:left, :right, :up, :down]
  end

  def starting_square
    @@board.find x: @x, y: @y
  end

  def add_move hsh
    @moves << hsh
  end

  def behind_river? square
    if @color == :red
      square.y <= 4
    else
      square.y >= 5
    end
  end

  def in_palace? square
    if square.x < 3 || square.x > 5
      false
    else
      if @color == :red
        square.y < 3
      else
        square.y > 8
      end
    end
  end
end
