import './backDrop.scss';

const BackDrop = (props) => {
    const {sideToogle} = props
    return (
        sideToogle && <div className="backdrop"></div>
    );
}

export default BackDrop;
