import { useTheme, Typography, Box } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
export default function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Question Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            this is the test of sub heading of the accordion. this is the test
            of sub heading of the accordion. this is the test of sub heading of
            the accordion this is the test of sub heading of the accordion.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            this is the test of sub heading of the accordion. this is the test
            of sub heading of the accordion. this is the test of sub heading of
            the accordion this is the test of sub heading of the accordion.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            this is the test of sub heading of the accordion. this is the test
            of sub heading of the accordion. this is the test of sub heading of
            the accordion this is the test of sub heading of the accordion.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            this is the test of sub heading of the accordion. this is the test
            of sub heading of the accordion. this is the test of sub heading of
            the accordion this is the test of sub heading of the accordion.
            this is the test of sub heading of the accordion. this is the test
            of sub heading of the accordion. this is the test of sub heading of
            the accordion this is the test of sub heading of the accordion.
            this is the test of sub heading of the accordion. this is the test
            of sub heading of the accordion. this is the test of sub heading of
            the accordion this is the test of sub heading of the accordion.
            this is the test of sub heading of the accordion. this is the test
            of sub heading of the accordion. this is the test of sub heading of
            the accordion this is the test of sub heading of the accordion.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            this is the test of sub heading of the accordion. this is the test
            of sub heading of the accordion. this is the test of sub heading of
            the accordion this is the test of sub heading of the accordion.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
