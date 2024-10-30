import GithubIcon from '../../../assets/images/svg/social/github.png';
import InstagramIcon from '../../../assets/images/svg/social/instagram.png';
import FacebookIcon from '../../../assets/images/svg/social/facebook.png';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.footer} py-3 mt-2`}>
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <a target="_blank" href="https://github.com/vbzt">
                    <img className={`img-footer px-2 ${styles.imgFooter}`} src={GithubIcon} alt="GitHub" />
                </a>
                <a target="_blank" href="https://instagram.com/vitor.bzt">
                    <img className={`img-footer px-2 ${styles.imgFooter}`} src={InstagramIcon} alt="Instagram" />
                </a>
                <a target="_blank" href="https://facebook.com/Guilherme-Rigobello">
                    <img className={`img-footer px-2 ${styles.imgFooter}`} src={FacebookIcon} alt="Facebook" />
                </a>
            </ul>
            <p className="text-center text-body-secondary">© 2024 EcoLeaf, Inc</p>
        </footer>
    );
}

export default Footer;
