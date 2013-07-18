require_relative "./piece"

class Elephant < Piece

  def get_moves
    [:up, :down].each do |vertical|
      next unless starting_square.send(vertical) &&
        starting_square.send(vertical).send(vertical) &&
        behind_river?(starting_square.send(vertical).send(vertical))
      [:left, :right].each do |horizontal|
        next unless starting_square.send(horizontal) &&
          starting_square.send(horizontal).send(horizontal)
        blocking_square = starting_square.send(vertical).send(horizontal)
        next if @position.find blocking_square.coordinates
        target_square = blocking_square.send(vertical).send(horizontal)
        target_piece = @position.find target_square.coordinates
        next if target_piece && target_piece.color == @color
        add_move target_square.coordinates
      end
    end
  end
end
