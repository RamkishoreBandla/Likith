import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'
import Table from 'react-bootstrap/Table'

const DynamicInputs = () => {
    const [inputs, setInputs] = useState([{ name: '', value: '' }]);
    const [selectedOption, setSelectedOption] = useState('');
    const [result, setResults] = useState([]);
    const [error, setError] = useState(false);
    const [outError, setOutError] = useState(false);

    let { origin } = window;
    console.log(origin);
    // const API_URL = 'http://localhost:3005';
    const API_URL = origin;

    const handleDropdownChange = (event) => {
        console.log(event);
        setSelectedOption(event);
    };

    const handleInputChange = (index, event) => {
        const newInputs = [...inputs];
        newInputs[index][event.target.name] = event.target.value;
        setInputs(newInputs);
    };

    const handleAddInput = () => {
        setInputs([...inputs, { name: '', value: '' }]);
    };

    const handleRemoveInput = (index) => {
        const newInputs = [...inputs];
        newInputs.splice(index, 1);
        setInputs(newInputs);
    };

    const fetchResults = async (e) => {
        e.preventDefault();
        let reqObj = {
            criteria: selectedOption,
            characteristics: inputs
        };
        console.log(reqObj);

        if (selectedOption === "" || inputs[0].name === '' || inputs[0].value === '') {
            setError(true);
        }
        else {

            console.log(reqObj);

            try {
                setError(false);
                setOutError(false)
                let response = await axios.post(API_URL + "/getResults", reqObj);
                console.log(response.data);
                setResults(response.data);
            } catch (error) {
                setOutError(true);
            }

        }
    }



    function AccordionResult({ results }) {
        let rows = Math.ceil(results.length / 4);
        return (
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Results</Accordion.Header>
                    <Accordion.Body>
                        {results.length > 0 && outError === false ?
                            <Table hover bordered>

                                {results.map((val, i) => 

                                    <tr key={i}>
                                        <td>{val}</td>
                                    </tr>
                                )}


                            </Table>
                            :
                            null
                        }
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        );
    }



    return (
        <>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <h4>Characterisic Name</h4>
                    </div>
                    <div className='col-md-6'>
                        <h4>Characterisic Value</h4>
                    </div>
                </div>
            </div>
            <div className='container card p-5 mt-2'>
                <form>
                    {inputs.map((input, index) => (
                        <div key={index} className='row mt-2'>
                            <div className='col'>
                                <input className='form-control'
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={input.name}
                                    onChange={(e) => handleInputChange(index, e)}
                                />
                            </div>
                            <div className='col'>
                                <input
                                    className='form-control'
                                    type="text"
                                    placeholder="type format: A1,B1,C1"
                                    name="value"
                                    value={input.value}
                                    onChange={(e) => handleInputChange(index, e)}
                                /></div>
                            <div className='col-md-2'>
                                <button type="button" className='form-control btn btn-danger' onClick={() => handleRemoveInput(index)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </form>


                <div className='row mt-2'>
                    <div className='col-md-3'>
                        <button className='btn btn-success' type="button" onClick={handleAddInput}>
                            Add More
                        </button>
                    </div>
                </div>
                <div className='row mt-2'>
                    <div className='col'>

                        <DropdownButton
                            id="dropdown-button-dark-example2"
                            variant="secondary"
                            title="Select criteria"
                            className="mt-2"
                            onSelect={handleDropdownChange}
                        >
                            <Dropdown.Item eventKey="ACoC">All combinations </Dropdown.Item>
                            <Dropdown.Item eventKey="ECC">Each Choice</Dropdown.Item>
                            <Dropdown.Item eventKey="BCC">Base Choice</Dropdown.Item>
                        </DropdownButton>

                    </div>
                </div>

                <div className='row mt-2'>
                    <button className='btn btn-primary' onClick={(e) => { fetchResults(e) }}>Fetch</button>
                </div>
            </div>

            {/* results container */}
            <div className='container mt-5'>
                <div className='row'>
                    {error === true ?
                        <div>
                            Missing values in input
                        </div>
                        :
                        <span>
                            {outError === false ? result.length > 0 ? <div className='col'>
                                <AccordionResult results={result} />
                            </div> : null :
                                <Alert variant="danger">
                                    Failed to show output
                                </Alert>}
                        </span>}
                </div>

            </div>

        </>
    );
};

export default DynamicInputs;
