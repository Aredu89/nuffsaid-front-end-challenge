import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)(({ theme }) => ({
  color: 'black',
  fontWeight: 600,
  width: '85px',
  backgroundColor: '#88FCA3',
  '&:hover': {
    backgroundColor: '#60C076',
  },
  margin: '3px',
  display: 'flex',
  alignItems: 'center',
}));