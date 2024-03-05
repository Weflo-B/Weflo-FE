import styles from '@/components/Button.module.scss';

interface ButtonProp {
  children: string;
  style?: React.CSSProperties;
}

const Button = ({ children, style, ...props }: ButtonProp) => {
  return (
    <div className={styles.button} style={style} {...props}>
      {children}
    </div>
  );
};

export default Button;
