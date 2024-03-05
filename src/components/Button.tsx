import styles from '@/components/Button.module.scss';

interface ButtonProp {
  children: string;
  style?: React.CSSProperties;
}

const Button = ({ children, style, ...props }: ButtonProp) => {
  return (
    <button type="button" className={styles.button} style={style} {...props}>
      {children}
    </button>
  );
};

export default Button;
