$(document).ready(function() {

   $.ajax({url:'/contacts/index', method: 'get', dataType: 'json'}).done(function(contacts){
      $.each(contacts,function(){
         $("<div class = 'wrap' id ="+$(this)["0"].id+"><h3 class = 'contact'>" +$(this)["0"].firstname+ "&nbsp;" +$(this)["0"].lastname+ "</h3> \
            <div class='contact'> <p>"+$(this)["0"].phone_number+"&nbsp;"+"&nbsp;"+"&nbsp;"+$(this)["0"].address+"\
            <p class = edit> <u> Edit </u> </p> <p class = delete> <u> Delete </u> </p> </p> </div></div>").appendTo("#accordion");
         $( "#accordion" ).accordion( "refresh" );      
      })
   })   

   $("form").on("submit",function(e){
      e.preventDefault();

      $.ajax({url:'/contacts' , method: 'post', data: $("form").serialize(), dataType: 'json'})
      .done(function(contact){
         if (contact === 1)
         {
            alert("Contact's first name, last name and phone number are required");
         }
         else
         {  
            $("<div class = 'wrap' id ="+contact.id+"><h3 class = 'contact'>"+contact.firstname+"&nbsp;"+contact.lastname+"</h3> \
               <div ><p>"+contact.phone_number+"&nbsp;"+"&nbsp;"+"&nbsp;"+contact.address+"\
               <p class = edit> <u> Edit </u> </p> <p class = delete> <u> Delete </u> </p> </p> </div></div>").appendTo("#accordion");
            $( "#accordion" ).accordion( "refresh" );      
            $("#firstname").val("");
            $("#lastname").val("");
            $("#phone_number").val("");
            $("#email_address").val("");
         }
      });

   });

   $("#accordion").on("click", ".delete", function(e){
      console.log(e);
      console.log($(this));
      console.log($(this).parents('.wrap'));
      var id = $(this).parents('.wrap').attr('id');
      console.log(id);
      $(this).parents('.wrap').remove();
      $.ajax({url: "/contacts/"+id,
         method: "delete"}).success(function(){
            console.log("success")
         });

   })

   $(function() {
    $( "#accordion" ).accordion({
       header: '> div.wrap >h3' 
    });
  });

});
