/** Main functions for middleware */
function validateSchema(obj) {
  return (req, res, next) => {
    let objFields = new obj().requiredFields();
    let jsonBody = req.body;
    let fieldsNotContained = [];
    objFields.forEach((field) => {
      if (!jsonBody.hasOwnProperty(field)) {
        fieldsNotContained.push(field);
      }
    });
    // Contains all fields
    if (fieldsNotContained.length === 0) {
      let jsonObj = new obj(...Object.values(jsonBody));
      req.body = jsonObj;
      next();
    } else {
      let m = "JSON object does not contain " + fieldsNotContained;
      console.log(m);
      res.json({ msg: m });
    }
  };
}

function handleErrors(err, req, res, next) {
  //TODO: write an error handler that logs out the message of the error and returns it to the user
}

module.exports = { validateSchema, handleErrors };
