require_relative "./piece"

class Soldier < Piece

  def get_moves
    directions.each do |direction|
      target_square = starting_square.send direction
      next unless target_square
      blocking_piece = @position.find target_square.coordinates
      next if blocking_piece && blocking_piece.color == @color
      add_move target_square.coordinates
    end
  end

private

  def directions
    list = [forward]
    list.concat!([:left, :right]) unless behind_river?(starting_square)
    list
  end
end
