import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Poper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
    return (
        <div className={cx('wrapper', { [className]: className })}>
            {children}
        </div>
    );
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Wrapper;
