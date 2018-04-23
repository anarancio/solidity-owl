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
            <div class="card-header" id="heading-${event.id}">
                <h5 class="mb-0">
                    <button class="btn btn-link btn-block text-left d-flex" data-toggle="collapse" data-target="#collapse-${event.id}" aria-expanded="true" aria-controls="collapse-${event.id}">
                        ${event.event}
                    </button>
                </h5>
            </div>

            <div id="collapse-${event.id}" class="collapse" aria-labelledby="heading-${event.id}" data-parent="#accordion">
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

function generateUUID() {
    // http://www.ietf.org/rfc/rfc4122.txt
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

$('#btnAddEvent').click(() => {
  const eventName = $('#txtEventName').val();

  if (!eventsFilters.has(eventName)) {
    const eventId = generateUUID();
    const event = {
      id: eventId,
      name: eventName,
      watching: true,
    };
    eventsFilters.set(eventName, event);
    console.log(eventsFilters);

    // TODO move to a template
    const widgetHtml = `<div class="card bg-success mx-3 col-sm-3" id="boxEventWidget_${eventId}">
                          <div class="card-body text-white">
                            <div class="form-check">
                              <label class="form-check-label" for="ckEvent_${eventId}">${eventName}</label>
                            </div>
                          </div>
                        </div>`;
    $('#boxEventsContainer').append(widgetHtml);
  } else {
    alert('The event is already on the events listening list');
  }
});

$('#btnRemoveLogs').click(() => {
  $('.event-list').empty();
});

$('#btnWatchAll').click(() => {
  eventsFilters.forEach((value, key, map) => {
    const event = eventsFilters.get(key);
    event.watching = false;
    $('#boxEventWidget_' + event.id).removeClass('bg-danger');
    $('#boxEventWidget_' + event.id).addClass('bg-success');
  });
});

$('#btnUnWatchAll').click(() => {
  eventsFilters.forEach((value, key, map) => {
    const event = eventsFilters.get(key);
    event.watching = false;
    $('#boxEventWidget_' + event.id).removeClass('bg-success');
    $('#boxEventWidget_' + event.id).addClass('bg-danger');
  });
});
