import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

const SidebarItem = ({ icon, text, active, action }) => {
    return (
        <ListGroup.Item
            action
            onClick={action}
            active={active}
            className="border-0 rounded-0"
        >
            <div className="d-flex align-items-center">
                {icon && <img src={icon} alt={text} className="me-3"
                    style={{ width: '20px', filter: 'brightness(0) invert(1)' }} />}
                <span>{text}</span>
            </div>
        </ListGroup.Item>
    );
};

SidebarItem.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string.isRequired,
    action: PropTypes.func,
    active: PropTypes.bool
};

SidebarItem.defaultProps = {
    action: () => { },
    active: false
};

export default SidebarItem;