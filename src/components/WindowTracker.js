import React from "react";

export default class WindowTracker extends React.Component {
    state = {
        windowWidth: window.innerWidth
    }

    watchWindow = () => {
        this.setState({windowWidth: window.innerWidth})
    }

    componentDidMount() {
        window.addEventListener("resize", this.watchWindow)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.watchWindow)
    }

    render() {
        return (
            <h1>Window width: {this.state.windowWidth} px</h1>
        )
    }
}