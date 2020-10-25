import React from 'react';
import { MDBContainer } from "mdbreact";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const RadioAnswer = (props) => {
    const answerOptions = props.question.answerOptions;
    return (
        <MDBContainer className="text-center">
            <FormControl component="fieldset" >
                <RadioGroup value={Number(props.question.answer)} name="radioanswer" onChange={props.onAnswer}>
                    {answerOptions.map((answerOption, index) => (
                        <FormControlLabel
                            value={answerOption.value}
                            control={<Radio color="primary"/>}
                            label={answerOption.answerText}
                            id={"radio" + answerOption.value}
                            key={index}
                        />
                    ))}
                </RadioGroup>
            </FormControl >
        </MDBContainer>
    )
}

export default RadioAnswer;