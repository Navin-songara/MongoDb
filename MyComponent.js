import React, { Component } from "react"; // Destructure Component directly from React
import loadjs from "loadjs";

class MyComponent extends Component {
    constructor() {
        super();
        this.state = { num1: "", num2: "", res: "" };
    }

    handleNum1TextChange = (evt) => {
        this.setState({ num1: evt.target.value });
    }

    handleNum2TextChange = (evt) => {
        this.setState({ num2: evt.target.value });
    }

    handleSumButtonClick = () => {
        var c = parseInt(this.state.num1) + parseInt(this.state.num2);
        this.setState({ res: c });
    }

    render() {
        return (
            <div style={{ backgroundColor: "gray", color: "white" }}>
                <center>
                    <h4>My First React app</h4>
                    <table border={1}> {/* Fixed typo 'taable' to 'table' */}
                        <tbody> {/* Added tbody to fix table structure */}
                            <tr>
                                <td>Enter my first Number</td>
                                <td>
                                    <input type="number" onChange={this.handleNum1TextChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>Enter my second Number</td> {/* Added second number input */}
                                <td>
                                    <input type="number" onChange={this.handleNum2TextChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>Result</td>
                                <td>{this.state.res}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button type="button" onClick={this.handleSumButtonClick}>Sum</button> {/* Fixed typo in function name */}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </center>
            </div>
        );
    }
}

export default MyComponent;
