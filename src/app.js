import $ from 'jquery';
import Web3 from 'web3';

let web3 = null;
let contract = null;
let eventsFilters = null;

$('#btnConnect').click(() => {
  $('#btnConnect').addClass('disabled');
  const connectionUrl = $('#txtConnectionUrl').val();
  const contractAddress = $('#txtContractAddress').val();
  const contractAbi = JSON.parse($('#txtContractAbi').val());

  if (connectionUrl && contractAddress && contractAbi) {
    web3 = new Web3(new Web3.providers.WebsocketProvider(connectionUrl));
    contract = new web3.eth.Contract(contractAbi, contractAddress);
    eventsFilters = new Map();

    contract.events.allEvents((error, event) => {
      console.log(event);
    });

    $('#btnDisconnect').removeClass('disabled');
  } else {
    alert('You must provide all the connection data');
    $('#btnConnect').removeClass('disabled');
  }
});

$('#btnDisconnect').click(() => {
  web3 = null;
  contract = null;
  eventsFilters = null;
  $('#btnConnect').removeClass('disabled');
  $('#btnDisconnect').addClass('disabled');
});

$('#btnAddEvent').click(() => {
  const eventName = $('#txtEventName').val();
  if (!eventsFilters.has(eventName)) {
    const event = {
      name: eventName,
    };
    eventsFilters.set(eventName, event);
    console.log(eventsFilters);

    // TODO move to a template
    const widgetHtml = `<div class="card bg-success mx-3 col-sm-3" data-toggle="modal" data-target="#exampleModal">
                          <div class="card-body text-white">
                            <div class="form-check">
                              <input type="checkbox" class="form-check-input" id="exampleCheck1">
                              <label class="form-check-label" for="exampleCheck1">${eventName}</label>
                            </div>
                          </div>
                        </div>`;
    $('#boxEventsContainer').append(widgetHtml);
  } else {
    alert('The event is already on the events listening list');
  }
});
