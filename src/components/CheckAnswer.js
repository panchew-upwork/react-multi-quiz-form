import React from 'react';
import { MDBContainer } from "mdbreact";
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));

const CheckAnswer = (props) => {
    const classes = useStyles();
    const answerOptions = props.question.answerOptions;
    const answer = props.question.answer;
    return (
        <MDBContainer className="text-center">
            <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                    {answerOptions.map((answerOption, index) => (
                        <FormControlLabel
                            control={<Checkbox checked={answer[answerOption.name]} onChange={props.onAnswer} name={answerOption.name} color="primary"/>}
                            label={answerOption.answerText}
                            key={index}
                        />
                    ))}
                </FormGroup>
            </FormControl>
        </MDBContainer>
    )
}

export default CheckAnswer;