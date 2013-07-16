class Position
  attr_reader :sides

  def initialize
    empty_locations
    empty_sides
  end

  def place piece
    @locations[piece.x][piece.y] = piece
    @sides[piece.color] << piece
  end

  def all_pieces
    unless @all_pieces
      @all_pieces = @locations.values.flatten.map { |hsh| hsh.values[0] }
    end
    @all_pieces
  end

  def find hsh
    @locations[hsh[:x]][hsh[:y]]
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
end
