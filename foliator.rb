#!/usr/bin/env ruby
require 'faker'
require 'document/foliator'

puts "hello #{Faker::Name.name}"
puts "Foliator: #{Document::Foliator::VERSION}"
