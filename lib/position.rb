require_relative "../lib/pieces/chariot"
require_relative "../lib/pieces/horse"
require_relative "../lib/pieces/elephant"
require_relative "../lib/pieces/advisor"
require_relative "../lib/pieces/general"
require_relative "../lib/pieces/cannon"
require_relative "../lib/pieces/soldier"

class Position
  attr_reader :sides, :to_move

  def initialize
    empty_locations
    empty_sides
    get_moves
  end

  def place piece
    @locations[piece.x][piece.y] = piece
    @sides[piece.color] << piece
    self
  end

  def import hsh
    hsh[:pieces].each { |piece| place piece }
    @to_move = hsh[:to_move]
    get_moves
    self
  end

  def export
    { pieces: all_pieces, to_move: @to_move }
  end

  def all_pieces
    pieces = []
    @locations.keys.each do |x|
      @locations[x].keys.each do |y|
        pieces << @locations[x][y]
      end
    end
    pieces
  end

  def find hsh
    @locations[hsh[:x]][hsh[:y]]
  end

  def check?
    export_data = export
    export_data[:to_move] = not_to_move
    test_position = Position.new.import export_data
    general = find_general
    return true if general.sees_other? self
    general_coordinates = { x: general.x, y: general.y }
    test_position.all_pieces.each do |piece|
      return true if piece.moves.include? general_coordinates
    end
    false
  end

private
  
  def empty_locations
    @locations = {}
    (0..8).each do |i|
      @locations[i] = {}
    end
  end

  def empty_sides
    @sides = {red: [], black: []}
  end

  def get_moves
    all_pieces.each do |piece|
      piece.get_moves self if piece.color == to_move
    end
  end

  def not_to_move
    @to_move == :red ? :black : :red
  end

  def find_general
    all_pieces.each do |piece|
      return piece if piece.color == @to_move && piece.class == General
    end
  end
end
