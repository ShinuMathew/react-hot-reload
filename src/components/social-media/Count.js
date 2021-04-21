import React, { Component } from 'react'
import './Count.css'

class Count extends Component {    
    constructor(props) {
        super(props)

        this.state = {
            likes : 0
        }

        this.setState({
            likes : this.props.likes
        })
    }
    render() {                
        return (
            <div className="count">                
                <h1>Total likes {localStorage.getItem('likes')}</h1>
            </div>
        )
    }
}

export default Count
