require_relative "./piece"

class General < Piece

  def get_moves
    directions.each do |direction|
      target_square = starting_square.send direction
      next unless target_square && in_palace?(target_square)
      target_piece = @position.find target_square.coordinates
      next if target_piece && target_piece.color == @color
      add_move target_square.coordinates
    end
  end

  def sees_other?
    next_square = starting_square.send forward
    while next_square
      current_square = next_square
      target_piece = @position.find current_square.coordinates
      if target_piece
        return true if target_piece.class == General
        break
      end
      next_square = current_square.send forward
    end
    false
  end
end
