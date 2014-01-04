json.array!(@questions) do |question|
  json.extract! question, :id, :title, :description, :options, :correct_option
  json.url question_url(question, format: :json)
end
