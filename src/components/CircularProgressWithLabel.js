import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

const CircularProgressWithLabel = (props) => {
    const progress = props.progress;
    return (
        <div className="text-center cprogress-bar mb-5">
            <CircularProgressbar
                value={progress}
                text={props.current+"/"+props.total}
            />
        </div>
    );
}

export default CircularProgressWithLabel;