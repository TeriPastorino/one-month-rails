source 'https://rubygems.org'
ruby '2.1.3'

gem 'rails', '4.1.6'
#moved the  sqlite3 to development
gem 'sass-rails', '~> 4.0.3'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.0.0'
gem 'jquery-rails'
gem 'jquery-turbolinks'
gem 'turbolinks'
gem 'jbuilder', '~> 2.0'
gem 'bootstrap-sass'
gem 'devise', '~>3.4.0'
gem 'paperclip', github: 'thoughtbot/paperclip'
gem 'aws-sdk', '~> 1.20.0'
gem 'masonry-rails', '~>0.2.0'
gem 'will_paginate', '~>3.0.3'
gem 'will_paginate-bootstrap'

group :development, :test do
	gem 'sqlite3'
end

group :production do
	gem 'pg'
	gem 'rails_12factor'
end


group :doc do
# bundle exec rake doc:rails generates the API under doc/api.
# original code 
	gem 'sdoc', '~> 0.4.0'         
#group: :doc do 
#gem 'sdoc', require: false
end

# Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
#gem 'spring',        group: :development

