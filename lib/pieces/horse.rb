require_relative "./piece"

class Horse < Piece

  def get_moves position
    directions.each do |direction|
      blocking_square = starting_square.send direction
      next if !blocking_square ||
              position.find(blocking_square.coordinates) ||
              !blocking_square.send(direction)
      pivot_square = blocking_square.send direction
      secondary_directions(direction).each do |secondary_direction|
        target_square = pivot_square.send secondary_direction
        next unless target_square
        blocking_piece = position.find target_square.coordinates
        next if blocking_piece && blocking_piece.color == @color
        add_move target_square.coordinates
      end
    end
  end

private 
  
  def secondary_directions direction
    if [:left, :right].include? direction
      [:up, :down]
    else
      [:left, :right]
    end
  end 
end
