import Textarea from '@mui/joy/Textarea';
import { Block, Typography } from "@xprog/prensa"
import { textAreaProps, textAreaLabelProps } from './styles';

const TextArea = ({ onChange, name, title, value }: any) => {
  return (
    <Block css={textAreaProps}>
      <Typography css={textAreaLabelProps}>{title}</Typography>
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
    </Block>
  );
}

export default TextArea