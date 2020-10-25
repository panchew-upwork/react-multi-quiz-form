import React from 'react';
import { MDBContainer, MDBInput } from "mdbreact";

const TextAnswer = (props) => {
    return (
        <MDBContainer>
            <MDBInput
                type="textarea"
                label="Description About You"
                size="lg"
                rows="3"
                value={props.question.answer}
                onChange={props.onAnswer}
            />
        </MDBContainer>
    )
}

export default TextAnswer;