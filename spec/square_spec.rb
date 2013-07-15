require_relative "../lib/square.rb"

describe "Square" do
  
  def e4
    Square.new "e4"
  end

  it "goes left, right, up, and down" do
    square = e4
    [:left, :right, :up, :down].each do |direction|
      square.respond_to?(direction).should be(true)
    end
  end

  it "can point to things" do
    square = e4
    square.point left: 'value'
    square.left.should eql('value')
  end
end
