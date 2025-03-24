import styles from './VisuallyHidden.module.css';

const VisuallyHidden = ({ children }) => {
    return <span className={styles.Container}>{children}</span>;
};

export default VisuallyHidden;
