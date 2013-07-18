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

  def secondary_directions direction
    if [:left, :right].include? direction
      [:up, :down]
    else
      [:left, :right]
    end
  end 

  def starting_square
    @@board.find x: @x, y: @y
  end

  def add_move hsh
    @moves << hsh
  end

  def behind_river? y
    if @color == :red
      y <= 4
    else
      y >= 5
    end
  end

  def in_palace?
  end
end
