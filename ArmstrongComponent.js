import React, { useState } from "react";
//An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
function ArmstrongComponent() {
    const [num, setNum] = useState('');
    const [res, setRes] = useState('');

    const handleNumText = (evt) => {
        setNum(evt.target.value);
    }

    const handleCheckButton = () => {
        const n = parseInt(num);
        const digits = n.toString().split('');
        const power = digits.length;
        const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);

        if (sum === n) {
            setRes("Number is Armstrong");
        } else {
            setRes("Number is not Armstrong");
        }
    }

    return (
        <div>
            <center>
                <h4>Check Armstrong Number</h4>
                <table>
                    <tbody>
                        <tr>
                            <td>Enter Number</td>
                            <td>
                                <input type="number" onChange={handleNumText} />
                            </td>
                        </tr>
                        <tr>
                            <td>Result</td>
                            <td>
                                <input type="text" value={res} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" style={{ textAlign: "center" }}>
                                <button type="submit" onClick={handleCheckButton}>Check</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </center>
        </div>
    );
}

export default ArmstrongComponent;
