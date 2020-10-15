import React, { Component } from 'react';
import ViewEditToggleExample from './ViewEditToggleExample';
import CollapseExpandExample from './CollapseExpandExample'; 
import HOC from './ToggleHOC';


const list = [
  {
      id: 1,
      name: 'Songs'
        
  },
  {
      id: 2,
      name: 'Bike Ride'
  },
  {
      id: 3,
      name: 'Friends & Family'
  }
]; 

const CollapseListing = HOC(CollapseExpandExample,list);
const ViewEditToggle = HOC(ViewEditToggleExample,'Saadhvi');

class App extends Component {
  
  render() {
    return (
      <div>       
        <ViewEditToggle></ViewEditToggle> 
        <CollapseListing></CollapseListing>
      </div>
    )
  }
}

export default App;