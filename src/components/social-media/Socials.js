import React, { Component } from 'react';
import Count from './Count';
import './Socials.css';

export class Socials extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes : (localStorage.getItem('likes')) ? parseInt(localStorage.getItem('likes')) : 0
        }
    }

    increementLike() {
        // this.setState({
        //     likes : this.state.likes + 1
        // }, () => console.log(this.state.likes))
        this.setState((prevState) => ({            
            likes: prevState.likes + 1
        }))
        localStorage.setItem('likes', this.state.likes)
    }

    increementFiveLikes() {
        this.increementLike()
        this.increementLike()
        this.increementLike()
        this.increementLike()
        this.increementLike()        
    }

    render() {
        return (
            <>
            <Count likes={this.state.likes} />
            <div className="modal">
                <div className="like" onClick={() => this.increementLike()}>
                    <span className="material-icons"> thumb_up_alt </span>
                    <h1>LIKE</h1>
                </div>
                <div className="jumbo-like" onClick={() => this.increementFiveLikes()}>
                    <span className="material-icons"> thumb_up_alt </span>
                    <h1>JUMBO LIKE</h1>
                </div>
                <div className="share">
                    <span className="material-icons"> screen_share </span>
                    <h1>SHARE</h1>
                </div>
                <div className="subscribe">
                    <span className="material-icons"> subscriptions </span>
                    <h1>SUBSCRIBE</h1>
                </div>
            </div>
            </>
        )
    }
}

export default Socials
