import styles from "./Input.module.scss";
import Image from 'next/image'

type IProps = {
  type?: string;
  label?: string;
  nameInput?: string;
  placeholder?: string;
  required?: boolean;
  leftIcon?: string;
  rightIcon?: string;
};

const Input = ({
  type = "text",
  label,
  nameInput,
  placeholder,
  required = false,
  leftIcon,
  rightIcon
}: IProps) => {
  return (
    <div className={styles.input}>
      <label className={styles.input__column}>
        {label && <span className={styles.input__label}>{label}</span>}
        <div className={styles.input__custom}>
          {leftIcon && <Image src={leftIcon} alt="left icon" className={styles.input__icon} />}
          <input
            type={type}
            name={nameInput}
            placeholder={placeholder}
            required={required}
            className={styles.input__ghost}
          />
          {rightIcon && <Image src={rightIcon} alt="right icon" className={styles.input__icon} />}
        </div>
        <p className={styles.input__error}></p>
      </label>
    </div>
  );
}

export default Input;
