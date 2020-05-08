import React, { Component } from 'react';
import './App.css'
import Body from './Components/Body';
import TabList from './Components/TabList';
import ScrollUpButton from "react-scroll-up-button";

export class App extends Component {

  constructor(){
    super();
    this.state={
      activeTab: 1
    }

    this.changeTab = (id) => {
      this.setState({
        activeTab: id
      })
    }
  }

  render() {
    const tabs = [
    {
      id: 1,
      title: 'Home'
    },
    {
      id: 2,
      title: 'Images'
    },
    {
      id: 3,
      title: 'Videos'
    },
    {
      id: 4,
      title: 'Projects'
    }
    ]
    return(
      <div className="body">
        <div className="nav-bar">
          <TabList tabs={tabs}
          changeTab={this.changeTab}
          activeTab={this.state.activeTab}/>
        </div>
        <div className="main-body">
          <Body 
          changeTab={this.changeTab}
          activeTab={this.state.activeTab}/>
        </div>
        <div>
          <ScrollUpButton ShowAtPosition={110} ContainerClassName="MyOverRideClass" TransitionClassName="MyOverRideTransitionedClass"/>
        </div>
      </div>
      );
  }
}
export default App;