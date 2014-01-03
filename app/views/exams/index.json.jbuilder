json.array!(@exams) do |exam|
  json.extract! exam, :id, :title, :description, :notes, :time
  json.url exam_url(exam, format: :json)
end
