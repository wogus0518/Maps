import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';


export default function CheckboxLabels({ youtubers, setYoutubers }) {


  const handleChange = (event) => {
    setYoutubers({ ...youtubers, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            checked={youtubers.섬마을훈태}
            onChange={handleChange}
            name="섬마을훈태"
            color="primary"
          />
        }
        label="섬마을훈태"
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            checked={youtubers.먹적}
            onChange={handleChange}
            name="먹적"
            color="primary"
          />
        }
        label="먹적"
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            checked={youtubers.윤호찌}
            onChange={handleChange}
            name="윤호찌"
            color="primary"
          />
        }
        label="윤호찌"
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            checked={youtubers.지뉼랭가이드}
            onChange={handleChange}
            name="지뉼랭가이드"
            color="primary"
          />
        }
        label="지뉼랭가이드"
      />
    </FormGroup>
  );
}
