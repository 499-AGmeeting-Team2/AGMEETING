import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid"; // width is the total of 12
import Button from "@mui/material/Button";

export default function InteractionPanel() {
  return (
    <Box
      sx={{
        width: 550,
        height: 260,
        backgroundColor: "primary.light",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Interactions
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Button
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            variant="contained"
          >
            Button
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            variant="contained"
          >
            Second Item
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            variant="contained"
          >
            Comment FOR
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            variant="contained"
          >
            Comment AGAINST
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            variant="contained"
          >
            Withdraw Comment
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            variant="contained"
          >
            Button
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            variant="contained"
          >
            Comment AGAINST
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            variant="contained"
          >
            Comment AGAINST
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            variant="contained"
          >
            Comment AGAINST
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            variant="contained"
          >
            Comment AGAINST
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            variant="contained"
          >
            Comment AGAINST
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
