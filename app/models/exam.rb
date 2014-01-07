class Exam
  include Mongoid::Document

  field :title, type: String
  field :description, type: String
  field :notes, type: String
  field :time, type: Integer #time in minutes

  has_many :questions

  def time_left?(start_time)
    duration = self.time * 1.minute
    duration - (Time.now - start_time) > 0
  end
  
end
