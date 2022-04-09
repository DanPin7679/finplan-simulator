import * as React from "react";
import Box from "@mui/material/Box";
import {
  FormControlLabel,
  Stack,
  Typography,
  TextField,
  FormGroup,
  Checkbox,
} from "@mui/material";

export default function QuestionSet1() {
  return (
    <>
      <Stack spacing={2} width="400px">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography>Firstname</Typography>
          <TextField id="outlined-basic" label="Firstname" variant="outlined" />
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography>Lastname</Typography>
          <TextField id="outlined-basic" label="Lastname" variant="outlined" />
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography>Age</Typography>
          <TextField id="outlined-basic" label="Age" variant="outlined" />
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography>Do you have a spouse?</Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Yes" />
          </FormGroup>
        </Stack>
      </Stack>
    </>
  );
}
