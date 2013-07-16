require_relative "square"

class Board

  def initialize
    make_squares
  end

  def all
    unless @all
      @all = @squares.values.flatten.map { |hsh| hsh.values[0] }
    end
    @all
  end

  def find hsh
    if @squares[hsh[:x]] && @squares[hsh[:x]][hsh[:y]]
      @squares[hsh[:x]][hsh[:y]]
    end
  end

private
  
  def make_squares
    @squares = {}
    (0..8).each do |x|
      @squares[x] = {}
      (0..9).each do |y|
        square = Square.new x, y
        @squares[x][y] = square
        if @squares[x - 1]
          left_square = @squares[x - 1][y]
          square.point left: left_square
          left_square.point right: square
        end
        if @squares[x][y - 1]
          down_square = @squares[x][y - 1]
          square.point down: down_square
          down_square.point up: square
        end
      end
    end
  end
end
