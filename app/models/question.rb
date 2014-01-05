class Question
  include Mongoid::Document
  field :title, type: String
  field :description, type: String
  field :options, type: Hash
  field :correct_option, type: Integer

  belongs_to :exam

#  def option_list=(opts)
    #self.options = opts.split(',').map{|x| x.to_s.strip}
 # end

 # def option_list
 #   (options||[]).join(',')
 # end
end
