require 'rails_helper'

RSpec.describe 'Login', type: :request do
  describe 'POST #login' do
    let!(:url) { ENV['TEST_URL'] + 'v1/' }

    it 'return airport data' do
      admin = Employee.where(position: 'admin').first
      params = { email: admin.email, password: '123123' }

      body = RequestHelper.make_request({}, params, [url, 'login'])

      expect(body[:code]).to eq 0
      expect(body[:data][:uid]).to eq admin.id
    end
  end
end