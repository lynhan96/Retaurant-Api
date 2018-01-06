require 'digest/md5'

module RequestHelper
  def self.make_request(additional_headers, params, urls)
    default_headers = {
      'Content-Type': 'application/json',
      'Date': Time.now.utc.strftime('%a, %d %b %Y %H:%M:%S GMT'),
      'X-API-Language': 'en',
      'Uid': '',
      'Token': ''
    }
    headers = default_headers.merge(additional_headers)
    headers['Authorization'] = RequestHelper.create_authorization(headers)

    conn = Faraday.new(url: urls[0])
    response = conn.post do |req|
      req.url urls[1]
      headers.each do |key, value|
        req.headers[key] = value
      end
      req.body = params.to_json
    end

    JSON.parse(response.body, symbolize_names: true)
  end

  def self.create_authorization(headers)
    plain = headers[:Token] + headers[:Uid] + headers[:Date]
    Digest::MD5.hexdigest(Digest::MD5.hexdigest(plain))
  end
end