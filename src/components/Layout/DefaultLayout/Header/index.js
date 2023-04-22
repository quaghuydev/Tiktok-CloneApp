import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '~/assets/images';

import style from './Header.module.scss';
import classnames from 'classnames/bind';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classnames.bind(style);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="logo tiktok" />
                </div>
                <div className={cx('search')}>
                    <input type="search" spellCheck={false} placeholder="Search accounts and video" />
                    <div className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </div>
                    <button className={cx('btn-search')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;
