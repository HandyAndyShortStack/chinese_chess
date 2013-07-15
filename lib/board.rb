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

private
  
  def make_squares
    @squares = {}
    (0..9).each do |x|
      (0..10).each do |y|
        square = Square.new x, y
        @squares[x] = {} unless @squares.include? x
        @squares[x][y] = square
        if @squares[x - 1]
          left_square = @squares[x - 1][y]
          square.point left: left_square
          left_square.point right: square
        end
        if @squares[x][y - 1]
          up_square = @squares[x][y - 1]
          square.point up: up_square
          up_square.point down: square
        end
      end
    end
  end
end
