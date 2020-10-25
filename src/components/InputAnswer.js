import React from 'react';
import { MDBContainer, MDBInput } from "mdbreact";

const InputAnswer = (props) => {
    return (
        <MDBContainer>
            <MDBInput
                label="Full Name"
                size="lg"
                value={props.question.answer}
                onChange={props.onAnswer}
            />
        </MDBContainer>
    )
}

export default InputAnswer;