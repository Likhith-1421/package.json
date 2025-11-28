
import React from "react"
class UserClass extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
           age : 30
        }
         console.log('Constructor')
    }
    componentDidMount()
    {
        console.log('MOunt did class')
    }
    
    render()
    
    {
        console.log('Render Class')
        const {name , location} = this.props
        return(
            <div>
                <h2> hello every one this is likhith</h2>
                <h2>{name}</h2>
                <h2>{location}</h2>
                <h2>{this.state.age}</h2>
                <button onClick={()=>{this.setState({
                       age : this.state.age +2
                    })}}> increment

                </button>
                <button onClick={()=>{this.setState({
                            age : this.state.age - 2 
                })}}> decrease</button>
                
            </div>
        )
    }
}
export default UserClass;