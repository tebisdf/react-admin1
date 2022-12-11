import Header from "../../components/Header";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme"; 
import Geography from "../../components/Geography";
export default function Geo() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box height="75vh" border = {`1px solid ${colors.grey[100]}`} borderRadius="4px">
        <Geography />
      </Box>
    </Box>
  );
}
