import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SubscribeToFirebase, getInitialTodosFromFirebase } from '../actions';

class CronTasks extends Component {
    constructor(props) {
        super(props);
        getInitialTodosFromFirebase();
        SubscribeToFirebase();

        this.state = {
            username: '',
            password: '',
            functionsSiteRoot: ''
        }
    }

    // Ifall function.json i azure portal läses in under runtime någon gång i framtiden...
    /*
    request() {

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "")

        let GetInit = {
            method: 'GET',
            headers: myHeaders,
        };

        let myRequest = new Request(this.state.functionsSiteRoot + this.GetFunctionJsonUrl('Boulder'), GetInit);
        
        let func =fetch(myRequest).then(response => {
            console.log(response.json())
            return response;
        }).then(func => {
            return func;
        })
        */
    /*
    raw["disabled"] = true;
    console.log(raw);

    myHeaders.append("If-Match", "*")

    let update = {
        method: 'PUT',
        headers: myHeaders,
        body: raw
    };
    /*
    fetch(this.state.functionsSiteRoot + this.GetFunctionJsonUrl('Boulder'), update).then(response => {
        console.log(response);
    })
    
    GetFunctionJsonUrl(functionName) {
        return functionName + "/function.json";
    }

            // this.request()
        let raw = {
            "bindings": [
                {
                    "name": "myTimer",
                    "type": "timerTrigger",
                    "direction": "in",
                    "schedule": "0 0 7 * * *"
                }
            ],
            "disabled": false
        }
    */

    render() {

        return (
            <div>
                <h2>Automatic</h2>
                <ul className="todo-list">
                    <div className="view">
                        <li>
                            <label class="auto">Dishes</label>
                        </li>
                        <li>
                            <label class="auto">Climbing</label>
                        </li>
                        <li>
                            <label class="auto">Cleaning</label>
                        </li>
                        <li>
                            <label class="auto">Weekly Summary</label>
                        </li>
                    </div>
                </ul>
            </div>
        )
    };
}

CronTasks.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default CronTasks