import classNames from 'classnames/bind';
import style from './SideBar.module.scss';

const cx = classNames.bind(style);
function SideBar() {
    return <aside className={cx('wrapper')}>Side</aside>;
}

export default SideBar;
