class Exam
  include Mongoid::Document
  field :title, type: String
  field :description, type: String
  field :notes, type: String
  field :time, type: Integer
end
