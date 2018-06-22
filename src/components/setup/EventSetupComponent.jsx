import React, {Component} from "react";
import {connect} from "react-redux";

import LogToggleComponent from "./LogToggleComponent"

class EventSetupComponent extends Component{

    constructor(props) {
        super(props);
        this.renderCmp = this.renderCmp.bind(this);
    }

    renderCmp = () => {
        //TODO we should implement de watch and unwatch all
        return <div />
    }

    render =()=> <div className="row">
                    {this.renderCmp()}
                    <div className="col-sm-11 col-md-12">
                        <div className="scroller">
                            <div id="boxEventsContainer" className="row flex-nowrap">
                                {this.props.eventList.map((event) => <LogToggleComponent 
                                                                            name={event.name} 
                                                                            idx={event.index} 
                                                                            listening={event.listening} 
                                                                            key={event.index} />)}
                            </div>
                        </div>
                    </div>
                </div>

}

const mapStateToProps = (state) => {
    return {
        eventList: state.configReducer.eventList,
        connected: state.configReducer.connected
    }
}

export default connect(mapStateToProps)(EventSetupComponent);