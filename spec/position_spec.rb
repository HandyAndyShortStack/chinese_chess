require_relative "../lib/position"
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
    position.find(x: 0, y:3).moves.include?({x: 0, y:4}).should be(true)
  end

  it "knows whose turn it is" do
    position = StartingPosition.new
    position.to_move.should eql(:red)
  end

  it "does not consider moves from the wrong side to be legal" do
    position = StartingPosition.new
    position.find(x: 0, y:9).moves.empty?.should be(true)
  end

  it "can import position data" do
    position = Position.new.import({
      pieces: [
        General.new({x: 4, y: 0, color: :red}),
        General.new({x: 3, y: 0, color: :black}),
        Chariot.new({x: 0, y: 0, color: :red})
      ],
      to_move: :red
    })
    position.find(x: 0, y: 0).class.should eql(Chariot)
    position.to_move.should eql(:red)
  end
end
