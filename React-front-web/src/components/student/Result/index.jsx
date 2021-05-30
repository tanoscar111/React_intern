import React from 'react';
import PropTypes from 'prop-types';

index.propTypes = {
    
};

function index(props) {
    console.log("🚀 ~ file: index.jsx ~ line 9 ~ index ~ props", props.match.params)
    return (
        <div>
            Hello
        </div>
    );
}

export default index;