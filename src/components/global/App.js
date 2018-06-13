import React, { Component } from 'react';
import Provider from "react-redux/es/components/Provider";
import ApplicationRouter from "../../routing/ApplicationRouter";

export default class App extends Component {
  render =() =>
      <Provider store={this.props.store}>
          <ApplicationRouter/>
      </Provider>

}
