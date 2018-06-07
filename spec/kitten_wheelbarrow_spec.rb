require './spec/spec_helper.rb'

RSpec.describe "Kitten Wheelbarrow" do

  it 'selects the image with a class of kitty-1' do
    expect(css_file_contents).to include('.kitty-1'), "Make sure you have a #ruby CSS selector that selects the image that has a class of kitty-1"
  end

  it 'selects the image with an id of kitty-2' do
    expect(css_file_contents).to include('#kitty-2'), "Make sure you have a #ruby CSS selector that selects the image that has a class of kitty-2"
  end

  it 'selects the image inside the element with an id of basket (via descendent relationship)' do
    expect(css_file_contents).to include('#basket img')
  end

  it 'selects the image based on the respective sibling element' do
    expect(css_file_contents).to include('#ball + img')
  end

  it 'Selects the image that has an attribute value matching "Kitty 5", via the attribute selector' do
    expect(css_file_contents).to include('img[alt="Kitty 5"]')
  end

end
