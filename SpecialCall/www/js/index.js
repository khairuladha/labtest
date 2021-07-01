function myFunction(number) {
  var message = "Are you want to call this number?";
  var title = number;
  var buttonLabels = "Cancel,Call";
   
  navigator.notification.confirm(message, confirmCallback, title, buttonLabels);

  function confirmCallback(buttonIndex) {
     if (buttonIndex == 2) {
       window.plugins.CallNumber.callNumber(onSuccess, onError, number);
     }

  }
   
}

function onSuccess(result){
 console.log("Success:"+result);
}

function onError(result) {
 console.log("Error:"+result);
}