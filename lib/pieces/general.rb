require_relative "./piece"

class General < Piece

  def get_moves position
    directions.each do |direction|
      target_square = starting_square.send direction
      next unless target_square
      target_piece = position.find target_square.coordinates
      next if target_piece && target_piece.color == @color
      add_move target_square.coordinates
    end
  end
end
