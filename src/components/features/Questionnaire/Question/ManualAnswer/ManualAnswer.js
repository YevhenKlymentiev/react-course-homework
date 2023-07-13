import { useState } from 'react';

import styles from './ManualAnswer.module.scss';

function ManualAnswer(props) {
  const { handleSubmit } = props;
  const [fieldValue, setFieldValue] = useState('');

  function handleFormSubmit(ev) {
    ev.preventDefault();

    handleSubmit(fieldValue);
  }

  function handleFieldChange(ev) {
    ev.preventDefault();

    setFieldValue(ev.target.value);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text"
             className={styles.field}
             value={fieldValue}
             onChange={handleFieldChange}
             placeholder="Type the answer manually"
      />
    </form>
  );
}

export default ManualAnswer;
