# Homepage (Root path)
get '/' do
  erb :index
end

get '/contacts/index' do
   @contacts = Contact.all
   # @contacts.each do |contact|
   #    contact.to_json
   # end
   return @contacts.to_json
end

post '/contacts' do
   @contact = Contact.new
   @contact.firstname = params[:firstname]
   @contact.lastname = params[:lastname]
   @contact.phone_number = params[:phone_number]
   @contact.address = params[:email_address]


   if (@contact.save)
      return @contact.to_json
   else 
      return 1.to_json
   end      
end

delete '/contacts/:id' do
   if Contact.delete(params[:id])
      return 200
   else 
      return 400
   end
end

