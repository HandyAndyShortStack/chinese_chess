require_relative "./piece"

class Advisor < Piece

  def get_moves position
    [:left, :right].each do |direction|
      [:up, :down].each do |secondary_direction|
        target_square = starting_square.send(direction).send(secondary_direction)
        next unless target_square && in_palace?(target_square)
        target_piece = position.find target_square.coordinates
        next if target_piece && target_piece.color == @color
        add_move target_square.coordinates
      end
    end
  end
end
