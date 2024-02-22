
class RequestValidator {
  verify(classInstance){
        validate(classInstance,req.body).then(error =>{
            if(error.length > 0) console.log('validation failed. Errors: ',error);
            console.log("Validation Success!")
        });
    }
}