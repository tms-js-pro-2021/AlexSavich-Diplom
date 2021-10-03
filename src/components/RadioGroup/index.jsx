import * as React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export const RadioGroupCustom = ({ title, btns, onSelect, value }) => {
  const handleChange = event => {
    onSelect(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{title}</FormLabel>{' '}
      <RadioGroup
        row
        aria-label={title}
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        {btns.map(({ val, label, disabled }) => (
          <FormControlLabel
            value={val}
            control={<Radio />}
            label={label}
            disabled={disabled}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
