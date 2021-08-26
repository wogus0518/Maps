import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';


export default function CheckboxCategory({ categories, setCategories }) {


  const handleChange = (event) => {
    setCategories({ ...categories, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            checked={categories.한식}
            onChange={handleChange}
            name="한식"
            color="primary"
          />
        }
        label="한식"
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            checked={categories.일식}
            onChange={handleChange}
            name="일식"
            color="primary"
          />
        }
        label="일식"
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            checked={categories.양식}
            onChange={handleChange}
            name="양식"
            color="primary"
          />
        }
        label="양식"
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            checked={categories.중식}
            onChange={handleChange}
            name="중식"
            color="primary"
          />
        }
        label="중식"
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            checked={categories.고기집}
            onChange={handleChange}
            name="고기집"
            color="primary"
          />
        }
        label="고기집"
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            checked={categories.횟집}
            onChange={handleChange}
            name="횟집"
            color="primary"
          />
        }
        label="횟집"
      />
    </FormGroup>
  );
}
