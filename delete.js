var Delete = {
  init: function(){

  },
  styling: function(){

  },
  events: function(){
    $('.message').on('mouseover', function(event){
      _.append('<span class="delete">X</span>');
    });
    $('.delete').on('click', function(event){
      deleteText(data);
    });
  },
  deleteText: function() {
    $.ajax({
      method: 'DELETE',
      url: chatPage.messageURL,
      success: function(data) {
        console.log("DELETED", data);
        $('.message').remove(data);
      },
}
