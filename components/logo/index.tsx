import styles from './logo.module.css';
import Image from 'next/image';

const Logo = () => {

    return (
        <div className="d-flex align-items-center">
            <Image src={require('../../static/images/logo.png')} alt="loginwall" width={50} className="me-1" />
            <div className={styles.animatedText}>
                <p className={styles.animatedTrans}>
                    <span>M</span><span>i</span><span>c</span><span>r</span><span>o</span><span>s</span>
                    <span>o</span><span>f</span><span>t</span>
                </p>
            </div>
        </div>
    );
};

export default Logo;
