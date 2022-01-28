import {PropTypes} from 'prop-types';
import { StyledSpinner } from './styledSpinner';


const Spinner= ({size = 30, light = 'false'}) => {   
    return (
        <StyledSpinner
            size={size}
            light={light}
        />
    );
}
Spinner.propTypes = {
    size: PropTypes.number,
    light: PropTypes.bool
}


export default Spinner;