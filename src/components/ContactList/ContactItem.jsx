import PropTypes from 'prop-types';
import { MdPermContactCalendar } from 'react-icons/md';
import css from './ContactItem.module.css';

const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <>
      <MdPermContactCalendar />
      <div className={css.wrapper}>
        <p className={css.text}>{name}:</p>
        <p className={css.text}>{number}</p>
      </div>
      <button
        type="button"
        className={css.btn}
        id={id}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
