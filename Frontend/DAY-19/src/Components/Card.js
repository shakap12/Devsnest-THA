import React from "react";

export default class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.CountState=this.CountState.bind(this);
    }
    CountState = () => {
        this.setState((lastState) => {
            return {
                count: lastState.count + 1
            }
        })
    }
    render() {
        return (
            <button onClick={this.CountState}>
                {this.state.count}
            </button>
        )
    }
}