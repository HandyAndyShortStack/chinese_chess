require_relative "../lib/position"
require_relative "../lib/pieces/piece"
require_relative "../lib/starting_position"

describe Position do

  it "can return all pieces" do
    piece = Piece.new color: :red, x: 0, y: 0
    position = Position.new.place piece
    expect(position.all_pieces[0].color).to eq(piece.color)
  end

  it "can find pieces" do
    piece = Piece.new color: :red, x: 0, y: 0
    position = Position.new.place piece
    expect(position.find(x: 0, y: 0).color).to eq(piece.color)
  end

  it "has sides" do
    piece = Piece.new color: :red, x: 0, y: 0
    position = Position.new.place piece
    expect(position.sides[:red][0]).to eq(piece)
  end

  it "gives its pieces legal moves" do
    position = StartingPosition.new
    position.find(x: 0, y:0).moves.include?({x: 0, y:1}).should be(true)
    position.find(x: 1, y:0).moves.include?({x: 2, y:2}).should be(true)
    position.find(x: 2, y:0).moves.include?({x: 0, y:2}).should be(true)
    position.find(x: 3, y:0).moves.include?({x: 4, y:1}).should be(true)
    position.find(x: 4, y:0).moves.include?({x: 4, y:1}).should be(true)
    position.find(x: 1, y:2).moves.include?({x: 1, y:9}).should be(true)
  end
end
