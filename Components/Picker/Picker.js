import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const Picker = ({value, setValue}) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Provider', value: 'Provider'},
    {label: 'Parent', value: 'Parent'},
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
};
export default Picker;
