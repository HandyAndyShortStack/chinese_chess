require_relative "../lib/board.rb"

describe Board do
  
  board = Board.new

  it "has squares" do
    board.all[0].class.should eql(Square)
  end

  it "can find squares given their coordinates" do
    board.find(x: 0, y: 0).class.should eql(Square)
  end
end
