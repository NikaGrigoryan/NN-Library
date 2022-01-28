import PropTypes from 'prop-types'
import { StyledSkeleton } from './styledSkeleton';

const Skeleton= ({margin = '5', width = '100px', height = '100px', borderRadius = 'none'}) => {
        return (
        <StyledSkeleton 
            width={width}
            height={height}
            borderRadius={`${borderRadius}%`}
            margin = {`${margin}px`}
        />
    );
}

Skeleton.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    borderRadius: PropTypes.number,
    margin: PropTypes.number
}

export default Skeleton;