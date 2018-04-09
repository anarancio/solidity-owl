import $ from 'jquery';

/*
$(document).ready(function() {
  console.log($('#connectionModal'));
  $('#connectionModal').modal('show');
});
*/

$('#btnConnect').click(function() {
  let connectionUrl = $('#txtConnectionUrl').val();
  let contractAddress = $('#txtContractAddress').val();
  let contractAbi = $('#txtContractAbi').val();
  if(connectionUrl && contractAddress && contractAbi) {

  } else {
    alert("You must provide all the connection data");
  }
});
