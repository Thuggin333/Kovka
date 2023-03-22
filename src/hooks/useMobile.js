import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';


export default function useMobile() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return matches
}