#!/usr/bin/env ruby
require 'json'
require 'document/foliator'
require 'net/http'
require 'uri'
require 'mime/types'
require 'net/http/post/multipart'

puts "Foliator: #{Document::Foliator::VERSION}"
