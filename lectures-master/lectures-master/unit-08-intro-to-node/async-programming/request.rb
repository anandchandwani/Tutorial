require 'net/http'

def get_google_home_page
  res = Net::HTTP.get('www.google.com', '/');
  return res
end


puts get_google_home_page
