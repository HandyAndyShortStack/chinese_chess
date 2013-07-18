require_relative "../lib/starting_position"

describe StartingPosition do
  
  position = StartingPosition.new

  it "has properly placed generals" do
    position.find(x: 4, y: 0).class.should eql(General)
    position.find(x: 4, y: 9).class.should eql(General)
  end
end
