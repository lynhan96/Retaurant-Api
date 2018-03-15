require 'rails_helper'

RSpec.describe 'Login', type: :request do
  describe 'POST #login' do
    let!(:url) { ENV['TEST_URL'] + 'v1/' }

    it 'login data' do
      params = { email: 'quantrivien@gmail.com', password: '123123' }

      body = RequestHelper.make_request({}, params, [url, 'login'])
      ap body
      expect(body[:code]).to eq 0
    end
  end
end