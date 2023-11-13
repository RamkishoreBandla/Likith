let express = require('express');
const modelOps = require('../model/model');
let router = express.Router();


const ACoc = (inputs) => {
  let output = [];
  //write code

  return output;
}

const ECC = (inputs) => {
  let output = [];
  //write code

  return output;
}

const BCC = (inputs) => {
  let output = [];
  //write code

  return output;
}

/* GET home page. */
router.post('/getResults', async function (req, res, next) {

  try {

    console.log(req.body);
    let choice = req.body.criteria;
    let inputs = req.body.characteristics;
    let inputArr = [];
    for (let eval of inputs) {
      console.log(eval);
      let value = eval['value'].split(",")
      inputArr.push(value)
    }

    console.log(inputArr);
    let outputs = []

    if (choice === 'BCC') {

      outputs = BCC(inputArr);

    }
    else if (choice === 'ECC') {
      outputs = ECC(inputArr);
    }
    else {
      outputs = ACoc(inputArr);
    }

    //write API request to store result and input
    let storedData = await modelOps.storeInputandOutput(req.body, outputs);

    outputs=[
      ['A1','B1','C1'], ['A1','B1','C2'], ['A1','B2','C1'], ['A1','B2','C2'], ['A1','B3','C1'], ['A1','B3','C2'],
['A2','B1','C1'], ['A2','B1','C2'], ['A2','B2','C1'], ['A2','B2','C2'], ['A2','B3','C1'], ['A2','B3','C2'],
['A3','B1','C1'], ['A3','B1','C2'], ['A3','B2','C1'], ['A3','B2','C2'], ['A3','B3','C1'], ['A3','B3','C2']
    ]

    res.json(outputs);
  } catch (error) {
console.log(error);
    res.statusCode = error.status || 500;
    res.json(error);
  }
});

module.exports = router;
