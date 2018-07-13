import React from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [],
            text: ''
        }
        this.send = this.send.bind(this)
    }

    send (taskText) {
        axios.post('/', {task: taskText})
    }

    fetch() {
        axios.get('/')
             .then(result => this.setState({tasks: result}))
    }


    render() {
        return(
            <div>
                <div>
                    {this.state.tasks.map((task) => {
                    })}
                </div>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'))