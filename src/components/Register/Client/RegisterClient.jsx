import React,{useState} from 'react'
import Step1 from './Step1'
import Step2 from './Step2'

const RegisterClient = () => {
    const [step, setStep] = useState(1);
    const [values, setValues] = useState({
      firstname: "",
      lastname: "",
      birthdate: "",
      email: "",
      idnumber: "",
      phone: "",
      country: "",
      state: "",
      city: "",
      street: "",
      number: "",
      dept: "",
      password: "",
      confirmpassword: "",
      acceptconditions: "",
    });
  
    //stepper
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
  
    const isStepOptional = (step) => {
      return step === 1;
    };
  
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
  
    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  
    const handleStep = () => {
      switch (step) {
        case 1:
          return (
            <>
              <Step1
                values={values}
                setValues={setValues}
                step={step}
                setStep={setStep}
              />
            </>
          );
        case 2:
          return (
            <Step2
              values={values}
              setValues={setValues}
              step={step}
              setStep={setStep}
            />
          );
  
        // default: return{}
        // never forget the default case, otherwise VS code would be mad!
  
        // do nothing
      }
    };
  
    return <>{handleStep()}</>;
}

export default RegisterClient