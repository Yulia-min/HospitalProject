export const Checkbox = ({label, id, handleChange, checked}) => (
    <div className="checkbox__input">
      <input
        type="checkbox"
        id={id}
        name={id}
        value={id}
        onChange={handleChange}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
);  