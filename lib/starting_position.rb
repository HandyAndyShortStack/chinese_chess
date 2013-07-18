require_relative "./position.rb"
require_relative "../lib/pieces/chariot"
require_relative "../lib/pieces/horse"
require_relative "../lib/pieces/elephant"
require_relative "../lib/pieces/advisor"
require_relative "../lib/pieces/general"
require_relative "../lib/pieces/cannon"
require_relative "../lib/pieces/soldier"
  
class StartingPosition < Position
  
  def initialize
    super

    place Chariot.new   x: 0, y: 0, color: :red
    place Horse.new     x: 1, y: 0, color: :red
    place Elephant.new  x: 2, y: 0, color: :red
    place Advisor.new   x: 3, y: 0, color: :red
    place General.new   x: 4, y: 0, color: :red
    place Advisor.new   x: 5, y: 0, color: :red
    place Elephant.new  x: 6, y: 0, color: :red
    place Horse.new     x: 7, y: 0, color: :red
    place Chariot.new   x: 8, y: 0, color: :red
    place Cannon.new    x: 1, y: 2, color: :red
    place Cannon.new    x: 7, y: 2, color: :red
    place Soldier.new   x: 0, y: 3, color: :red
    place Soldier.new   x: 2, y: 3, color: :red
    place Soldier.new   x: 4, y: 3, color: :red
    place Soldier.new   x: 6, y: 3, color: :red
    place Soldier.new   x: 8, y: 3, color: :red

    place Chariot.new   x: 0, y: 9, color: :black
    place Horse.new     x: 1, y: 9, color: :black
    place Elephant.new  x: 2, y: 9, color: :black
    place Advisor.new   x: 3, y: 9, color: :black
    place General.new   x: 4, y: 9, color: :black
    place Advisor.new   x: 5, y: 9, color: :black
    place Elephant.new  x: 6, y: 9, color: :black
    place Horse.new     x: 7, y: 9, color: :black
    place Chariot.new   x: 8, y: 9, color: :black
    place Cannon.new    x: 1, y: 7, color: :black
    place Cannon.new    x: 7, y: 7, color: :black
    place Soldier.new   x: 0, y: 6, color: :black
    place Soldier.new   x: 2, y: 6, color: :black
    place Soldier.new   x: 4, y: 6, color: :black
    place Soldier.new   x: 6, y: 6, color: :black
    place Soldier.new   x: 8, y: 6, color: :black

    get_moves
  end
end
