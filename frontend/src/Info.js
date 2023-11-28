import React from 'react'

function Info() {
    return (
        <>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col'>
                        <h2>Table of Contents</h2>
                        <p>
                            <ul>
                                <li> Introduction</li>
                                
                                <li>Adding Characteristics and Blocks</li>
                                <li>Selecting a Test Criterion</li>
                                <li>Generating Test Cases</li>
                                <li>Viewing Generated Test Cases</li>
                               
                            </ul>
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h2>1. Introduction</h2>
                        <p>
                            Welcome to the documentation for the Input Space Partitioning (ISP) Test
                            Generation Tool. This tool is designed to assist software testers in creating test cases
                            based on the widely used test criterion known as Input Space Partitioning (ISP). With
                            an intuitive user interface, users can easily define characteristics and blocks, select a
                            test criterion, and generate test cases for their software testing needs.
                        </p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <h2>2. Adding Characteristics and Blocks</h2>
                        <p>
                            In this section, users can define the characteristics and blocks for their test input
                            space.
                            <p>Steps:
                                <ul>
                                    <li>Click on the "Add Characteristic" button to create a new characteristic input field.</li>
                                    <li> Enter the name of the characteristic in the provided text field.</li>
                                    <li> For each characteristic, click on the "Add Block" button to create block input fields.</li>
                                    <li>Enter the names of the blocks in the provided text fields.</li>
                                    <li>Repeat steps 1-4 to add as many characteristics and blocks as required</li>
                                </ul>
                            </p>
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h2>3. Selecting a Test Criterion</h2>
                        <p>
                            Three test criteria are available for selection:
                            <ul>
                                <li> All combinations (ACoC)</li>
                                <li>Each choice (ECC)</li>
                                <li>  Base choice (BCC)</li>
                            </ul>
                        </p><p>
                        Select one of the options corresponding to the desired test criterion
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h2>4. Generating Test Cases</h2>
                        <p>
                            Once the characteristics, blocks, and test criterion have been defined, users can
                            generate test cases.
                        </p>
                        <p>
                            Steps:
                            Click on the "Fetch" button.
                        </p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <h2>5. Viewing Generated Test Cases</h2>
                        <p>
                            After clicking the "Generate" button, the generated test cases will be displayed in the
                            main area.
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h2>6. Previous Test Cases</h2>
                        <p>
                            By clicking “Get all previous results”, users can see all the previous results.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info;