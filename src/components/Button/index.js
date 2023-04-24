import classNames from 'classnames/bind';
import style from './Button.module.scss';

const cx = classNames.bind(style);

function Button({ to, href, chidren, onClick }) {
    let Component = 'button';
    const classes = cx('wrapper');
    return <Component classNames={classes}>{chidren}</Component>;
}

export default Button;
