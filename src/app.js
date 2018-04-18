import $ from 'jquery';
import Web3 from 'web3';

let web3 = null;
let contract = null;
let eventsFilters = null;

function shouldWatchEvent(event) {
  const eventName = event.event;
  return eventsFilters.has(eventName);
}

function getEventWidgetCode(event) {
  const returnValues = JSON.stringify(event.returnValues);
  return `<div class="card mt-3">
            <div class="card-header" id="heading-1">
                <h5 class="mb-0">
                    <button class="btn btn-link btn-block text-left d-flex" data-toggle="collapse" data-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                        ${event.event}
                    </button>
                </h5>
            </div>

            <div id="collapse-1" class="collapse" aria-labelledby="heading-1" data-parent="#accordion">
                <div class="card-body">
                    <dl class="row">
                        <dt class="col-sm-3 col-md-2">Contract Address:</dt>
                        <dd class="col-sm-9 col-md-10">${event.address}</dd>

                        <dt class="col-sm-3 col-md-2">Event Name:</dt>
                        <dd class="col-sm-9 col-md-10">${event.event}</dd>

                        <dt class="col-sm-3 col-md-2">Block Hash:</dt>
                        <dd class="col-sm-9 col-md-10">${event.blockHash}</dd>

                        <dt class="col-sm-3 col-md-2">Block Number:</dt>
                        <dd class="col-sm-9 col-md-10">${event.blockNumber}</dd>

                        <dt class="col-sm-3 col-md-2">Return Values:</dt>
                        <dd class="col-sm-9 col-md-10">${returnValues}</dd>

                        <dt class="col-sm-3 col-md-2">Transaction Hash:</dt>
                        <dd class="col-sm-9 col-md-10">${event.transactionHash}</dd>
                    </dl>
                </div>
            </div>
        </div>`;
}

function addEventWidget(event) {
  $('.event-list').prepend(getEventWidgetCode(event));
}

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

      if (shouldWatchEvent(event)) {
        console.log('es el evento');
        addEventWidget(event);
      }
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
