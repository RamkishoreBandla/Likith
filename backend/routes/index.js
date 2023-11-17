let express = require('express');
const modelOps = require('../model/model');
let router = express.Router();


const ACoc = (chars) => {
  var numChars = chars.length;
  var numTests = 1;
  var temp = [];

  for (var i = 0; i < numChars; i++) {
    numTests *= chars[i].length;
  }

  var Ci = new Array(numChars).fill(0); // Initialize index variables for characteristics

  for (var testNum = 1; testNum <= numTests; testNum++) {
    //process.stdout.write("test # " + testNum + ": ");
    var t1 = [];

    for (var i = 0; i < numChars; i++) {
      //process.stdout.write(chars[i][Ci[i]] + " ");
      t1.push(chars[i][Ci[i]]);
    }

    temp.push(t1);
    //process.stdout.write("\n");

    for (var i = numChars - 1; i >= 0; i--) {
      if (Ci[i] === chars[i].length - 1) {
        Ci[i] = 0;
      } else {
        Ci[i]++;
        break;
      }
    }
  }
  console.log(temp);
  return temp;
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

    outputs = outputs.length > 0 ? outputs : [
      ['A1', 'B1', 'C1'], ['A1', 'B1', 'C2'], ['A1', 'B2', 'C1'], ['A1', 'B2', 'C2'], ['A1', 'B3', 'C1'], ['A1', 'B3', 'C2'],
      ['A2', 'B1', 'C1'], ['A2', 'B1', 'C2'], ['A2', 'B2', 'C1'], ['A2', 'B2', 'C2'], ['A2', 'B3', 'C1'], ['A2', 'B3', 'C2'],
      ['A3', 'B1', 'C1'], ['A3', 'B1', 'C2'], ['A3', 'B2', 'C1'], ['A3', 'B2', 'C2'], ['A3', 'B3', 'C1'], ['A3', 'B3', 'C2']
    ]

    res.json(outputs);
  } catch (error) {
    console.log(error);
    res.statusCode = error.status || 500;
    res.json(error);
  }
});

module.exports = router;
