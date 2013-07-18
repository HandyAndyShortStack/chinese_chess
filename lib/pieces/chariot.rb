require_relative "./piece"

class Chariot < Piece

  def get_moves position
    directions.each do |direction|
      current_square = starting_square
      next_square = current_square.send direction
      while next_square
        current_square = next_square
        blocking_piece = position.find current_square.coordinates
        if blocking_piece
          if blocking_piece.color != self.color
            add_move current_square.coordinates
          end
          break
        else
          add_move current_square.coordinates
        end
        next_square = current_square.send direction
      end
    end
  end
end
