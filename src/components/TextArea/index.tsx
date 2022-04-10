import React from 'react'
// @ts-ignore
import styles from './style.module.css'

type PropTypes = {
  onChange: () => void
  value: string
}

const TextArea: React.FC<PropTypes> = ({ onChange, value }) => {
  return (
    <div className={styles.textArea}>
      <textarea placeholder="Comments…" onChange={onChange} value={value} />
    </div>
  );
};

export default TextArea;
