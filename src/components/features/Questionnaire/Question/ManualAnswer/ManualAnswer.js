import { Component } from 'react';

import styles from './ManualAnswer.module.scss';

class ManualAnswer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldValue: ''
    };
  }

  handleFormSubmit = (ev) => {
    ev.preventDefault();

    this.props.handleSubmit(this.state.fieldValue);
  }

  handleFieldChange = (ev) => {
    ev.preventDefault();

    this.setState({ fieldValue: ev.target.value });
  }

  render() {
    const {
      fieldValue
    } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <input type="text"
               className={styles.field}
               value={fieldValue}
               onChange={this.handleFieldChange}
               placeholder="Type the answer manually"
        />
      </form>
    );
  }
}

export default ManualAnswer;
