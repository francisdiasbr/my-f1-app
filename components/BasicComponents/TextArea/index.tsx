import Textarea from '@mui/joy/Textarea';
import { Block, Typography } from "@xprog/prensa"
import { inputLabelProps } from '../FormInput/styles';

const TextArea = ({ onChange, name, title, value }: any) => {
  return (
    <>
      <Typography css={inputLabelProps} >{title}</Typography>
      <Textarea
        name={name}
        onChange={onChange}
        placeholder="Type in here…"
        value={value}
        variant="outlined"
        minRows={10}
        size='md'
        sx={{ minWidth: 600 }}
      />
    </>
  );
}

export default TextArea