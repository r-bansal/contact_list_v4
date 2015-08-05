class Contact < ActiveRecord::Base
   validates :firstname, presence: true
   validates :lastname, presence: true
   validates :phone_number, presence: true

end