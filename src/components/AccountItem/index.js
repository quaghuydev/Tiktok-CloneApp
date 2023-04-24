import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_300x300.webp?x-expires=1682517600&x-signature=6Ke9qvCWBnNpG172zORDjgunHjY%3D"
                alt="huy"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>bui quang huy</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>quanghuyfs</span>
            </div>
        </div>
    );
}

export default AccountItem;
