import React,{Component} from 'react'


export default function WithToggle(HocComponent,data){
  return class extends Component{
      constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
          toggleStatus: this.props.initialToggleStatus,
        }
      }
      
      toggle() {
        this.setState({
          toggleStatus: !this.state.toggleStatus
        })
      }
      render(){ 
        return (
          <HocComponent 
            toggle={this.toggle}
            toggleStatus={this.state.toggleStatus}
            data = {data}
          />
        )
      }
  } 
}