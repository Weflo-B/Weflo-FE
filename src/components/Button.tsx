import styles from '@/components/Button.module.scss';

interface ButtonProp {
  children: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, style, onClick, ...props }: ButtonProp) => {
  return (
    <button type="button" className={styles.button} style={style} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
