require_relative "./piece"

class Cannon < Piece

  def get_moves position
    directions.each do |direction|
      current_square = starting_square
      next_square = current_square.send direction
      screen_square = nil
      while next_square
        current_square = next_square
        blocking_piece = position.find current_square.coordinates
        if blocking_piece
          screen_square = current_square
        else
          add_move current_square.coordinates
          next_square = current_square.send direction
        end
        if screen_square
          next_square = screen_square.send direction
          while next_square
            current_square = next_square
            blocking_piece = position.find current_square.coordinates
            if blocking_piece
              break if blocking_piece.color == @color
              add_move current_square.coordinates
              break
            end
            next_square = current_square.send direction
          end
          break
        end
      end
    end
  end
end
