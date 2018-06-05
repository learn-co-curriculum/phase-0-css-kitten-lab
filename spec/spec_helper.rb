require 'yaml'


RSpec.configure do |config|

end

def css_file_contents
  File.read('./css/place-kitty.css')
end

def hint(number)
  Proc.new{YAML.load_file("./.hints")[number]}
end


def parsed_css
  Nokogiri::HTML(css_file_contents) do |config|
    config.strict.dtdload.dtdvalid.noblanks
  end
end
