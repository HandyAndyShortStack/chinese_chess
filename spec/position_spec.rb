require_relative "../lib/position"
require_relative "../lib/pieces/piece"

describe Position do

  it "can return all pieces" do
    piece = Piece.new color: :red, x: 0, y: 0
    position = Position.new.place piece
    expect(position.all_pieces).to eq([piece])
  end

  it "can find pieces" do
    piece = Piece.new color: :red, x: 0, y: 0
    position = Position.new.place piece
    expect(position.find(x: 0, y: 0)).to eq(piece)
  end

  it "has sides" do
    piece = Piece.new color: :red, x: 0, y: 0
    position = Position.new.place piece
    expect(position.sides[:red][0]).to eq(piece)
  end
end
