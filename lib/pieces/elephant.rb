require_relative "./piece"

class Elephant < Piece

  def get_moves position
    directions.each do |direction|
      next unless starting_square.send(direction) &&
        starting_square.send(direction).send(direction)
      secondary_directions(direction).each do |secondary_direction|
        next unless starting_square.send(secondary_direction) &&
          starting_square.send(secondary_direction).send(secondary_direction)
        blocking_square = starting_square.send(direction).send(secondary_direction)
        next if position.find blocking_square.coordinates
        target_square = blocking_square.send(direction).send(secondary_direction)
        next unless behind_river? target_square.y
        target_piece = position.find target_square.coordinates
        next if target_piece && target_piece.color == @color
        add_move target_square.coordinates
      end
    end
  end
end
