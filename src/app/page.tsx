"use client";

// react imports
import { useState } from "react";

import { Container, Input, Box, Grid, Divider } from "@mui/joy";

export default function Home() {
  const [colour1, setColour1] = useState("red");
  const [colour2, setColour2] = useState("blue");

  const options = {
    BOX_WIDTH: "100%",
    BOX_HEIGHT: 350,
    rounded: 5,
  };

  return (
    <Container sx={{ py: 5 }}>
      <Grid container spacing={0}>
        <Grid xs={6}>
          <Box
            sx={{
              width: options.BOX_WIDTH,
              height: options.BOX_HEIGHT,
              bgcolor: colour1,
              borderRadius: options.rounded,
            }}
          />
          <Divider />
          <Input
            value={colour1}
            onChange={(e) => setColour1(e.target.value)}
            sx={{ m: 1 }}
          />
        </Grid>
        <Grid xs={6}>
          <Box
            sx={{
              width: options.BOX_WIDTH,
              height: options.BOX_HEIGHT,
              bgcolor: colour2,
              borderRadius: options.rounded,
            }}
          />
          <Input
            value={colour2}
            onChange={(e) => setColour2(e.target.value)}
            sx={{ m: 1 }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
