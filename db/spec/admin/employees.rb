require 'rails_helper'

RSpec.describe 'Employees', type: :request do
  describe 'POST #employees' do
    let!(:url) { ENV['TEST_URL'] + 'v1/' }

    it 'employees data' do
      body = RequestHelper.make_request({}, {}, [url, 'employees'])
      ap body
      expect(body[:code]).to eq 0
    end
  end
end