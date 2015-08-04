$(document).ready(function() {

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
   $("form").on("submit",function(e){
      e.preventDefault();

      $.ajax({url:'/contacts' , method: 'post', data: $("form").serialize, dataType: 'json'})
      .done(function(contact){
         console.log("hello");
         $("<li class = 'contact'>"+contact.firstname+contact.lastname+"</li>").appendTo("#contacts");
         $("#firstname").val("");
         $("#lastname").val("");
         $("#phone_number").val("");
         $("#email_address").val("");
      });


   });
});
