require_relative "../lib/starting_position"

describe StartingPosition do
  
  position = StartingPosition.new

  it "has properly placed generals" do
    position.find(4, 0).class.should eql(General)
    position.find(4, 10).class.should eql(General)
  end
end
