# Homepage (Root path)
get '/' do
  erb :'contacts/index'
end

get '/contacts/index' do
  erb :'contacts/index'
end

post '/contacts' do
   @contact = Contact.new

   @contact.firstname = params[:firstname]
   @contact.lastname = params[:lastname]
   @contact.phone_number = params[:phone_number]
   @contact.address = params[:email_address]

   puts params
   
   if (@contact.save)
      return @contact.to_json
   end      
end