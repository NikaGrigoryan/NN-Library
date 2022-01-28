import PropTypes from 'prop-types'
import { StyledModal } from './styledModal';

const Modal = ({ cancelBtnColor='crimson', continueBtnColor='cornflowerblue', cancelBtn='Cancel', continueBtn='Continue', closeModal, continueModal, color, backgroundColor = 'white', title = 'Are you sure?', subTitle='this page is great' }) =>
{

    // const dark = "#001222"

    return <StyledModal continueBtnColor={continueBtnColor} cancelBtnColor={cancelBtnColor} color = {color} backgroundColor = {backgroundColor}>
        <div className="modalBackground">
        <div className="modalContainer">
            <div className="titleCloseBtn">
                <button onClick={closeModal}>X</button>
            </div>

            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className="body">
                <p>{subTitle}</p>
            </div>
            <div className="footer">
                <button id="cancelBtn" onClick={closeModal}>{cancelBtn}</button>
                <button onClick = {continueModal}>{continueBtn}</button>
            </div>
        </div>
    </div>;
    </StyledModal>
    
};

Modal.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    cancelBtn: PropTypes.string,
    continueBtn: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    cancelBtnColor: PropTypes.string,
    continueBtnColor: PropTypes.string,
    closeModal: PropTypes.func,
    continueModal: PropTypes.func,
}

export default Modal;
