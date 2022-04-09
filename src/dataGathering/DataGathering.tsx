import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import QuestionSet1 from "./components/Questionnaire";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import styles from "./DataGathering.module.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const DataGathering = () => {
  return (
    <Card sx={{ width: 1000, height: 500 }}>
      <div className={styles.cardContainer}>
        <div className={styles.cardTitle}>
          <Typography variant="h5" align="center">
            Personal Information
          </Typography>
        </div>
        <div className={styles.cardContent}>
          <QuestionSet1 />
        </div>
        <div className={styles.backArrow}>
          <ArrowBackIosIcon
            sx={{ fontSize: 40 }}
            className={styles.backArrow}
          />
        </div>
        <div className={styles.forwardArrow}>
          <ArrowForwardIosIcon
            sx={{ fontSize: 40 }}
            className={styles.forwardArrow}
          />
        </div>
      </div>
    </Card>
  );
};

export default DataGathering;
