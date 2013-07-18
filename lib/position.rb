class Position
  attr_reader :sides

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
      piece.get_moves self
    end
  end
end
