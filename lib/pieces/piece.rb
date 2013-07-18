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
end
