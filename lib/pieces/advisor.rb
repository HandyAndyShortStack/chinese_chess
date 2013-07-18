require_relative "./piece"

class Advisor < Piece

  def get_moves position
    [:left, :right].each do |horizontal|
      [:up, :down].each do |vertical|
        target_square = starting_square.send(horizontal).send(vertical)
        next unless target_square && in_palace?(target_square)
        target_piece = position.find target_square.coordinates
        next if target_piece && target_piece.color == @color
        add_move target_square.coordinates
      end
    end
  end
end
