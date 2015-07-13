// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var ready;
ready = function(){
  var complete = $('.complete');
  for(var i = 0; i < complete.length; i++){
    var status = complete[i].textContent;

    if (status === "true"){
      complete[i].textContent = "Complete!";
    }
    else{
      complete[i].textContent = "Incomplete!"
    }

  };

  var rows = $('.due');

  for(var i = 0; i < rows.length; i++){
    var dueDate = new Date(rows[i].textContent);
    var today = new Date();
    var soon = new Date();

    soon.setDate(soon.getDate()+2);
    dueDate.setDate(dueDate.getDate() + 1);

    if ((dueDate < today) && (complete[i].textContent === "Incomplete!")){
      $(rows[i]).parent().addClass('red');
    }
    else if ((dueDate < soon) && (complete[i].textContent === "Incomplete!")){
      $(rows[i]).parent().addClass('orange');
    }
    else{
      $(rows[i]).parent().addClass('green');
    };

  };

  for(var j = 0; j < rows.length; j++){
    if ($(rows[j]).parent().hasClass('orange')){
      console.log(rows[j]);
      fullRow = $(rows[j]).parent();
      fullRow.prependTo('tbody');
    };
  };

  for(var j = 0; j < rows.length; j++){
    if ($(rows[j]).parent().hasClass('red')){
      console.log(rows[j]);
      fullRow = $(rows[j]).parent();
      fullRow.prependTo('tbody');
    };
  };
};

$(document).ready(ready);
$(document).on('page:load', ready);
