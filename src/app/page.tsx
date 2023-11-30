"use client";

// react imports
import { useState } from "react";

// joy imports
import {
  Container,
  Input,
  Box,
  Grid,
  Table,
  Typography,
  Button,
} from "@mui/joy";

// third-party imports
import tinycolor from "tinycolor2";
import { SliderPicker } from "react-color";

export default function Home() {
  const [colour1, setColour1] = useState("red");
  const [colour2, setColour2] = useState("blue");

  const options = {
    BOX_WIDTH: "100%",
    BOX_HEIGHT: 350,
    INSIDE_BOX_WIDTH: "40%",
    INSIDE_BOX_HEIGHT: 75,
    rounded: 0,
  };

  function copyText(entryText: string) {
    navigator.clipboard.writeText(entryText);
  }

  const TableRow = ({ _colorString, _colorType }: any) => {
    return (
      <tr style={{ cursor: "pointer" }} onClick={() => copyText(_colorString)}>
        <td>{_colorType}</td>
        <td>{_colorString}</td>
      </tr>
    );
  };

  const ColorConversionTable = (_color: string) => {
    const _tableTinyColor = tinycolor(_color);
    return (
      <Table hoverRow variant="soft" sx={{ fontWeight: 900 }}>
        <tbody>
          <TableRow
            _colorString={_tableTinyColor.toHexString()}
            _colorType="hex"
          />
          <TableRow
            _colorString={_tableTinyColor.toRgbString()}
            _colorType="rgb"
          />
          <TableRow
            _colorString={_tableTinyColor.toHslString()}
            _colorType="hsl"
          />
          <TableRow
            _colorString={_tableTinyColor.toHsvString()}
            _colorType="hsv"
          />
          <TableRow _colorString={_tableTinyColor.toName()} _colorType="name" />
        </tbody>
      </Table>
    );
  };

  const tinyColor1 = tinycolor(colour1);
  const tinyColor2 = tinycolor(colour2);

  return (
    <Container sx={{ py: 5 }}>
      <Typography
        sx={{
          color: "white",
        }}
        level="h1"
      >
        Colour Contrast
      </Typography>
      <Typography
        sx={{
          color: "white",
        }}
        level="body-lg"
      >
        Click a color row in the tables to copy the color straight to your
        clipboard.
      </Typography>
      <Grid container spacing={0} sx={{ my: 2, border: 1 }}>
        <Grid xs={6}>
          <Box
            sx={{
              position: "relative",
              width: options.BOX_WIDTH,
              height: options.BOX_HEIGHT,
              bgcolor: tinyColor1.toString(),
              borderRadius: options.rounded,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                right: 0,
                marginY: "auto",
                top: 0,
                bottom: 0,
                width: options.INSIDE_BOX_WIDTH,
                height: options.INSIDE_BOX_HEIGHT,
                bgcolor: tinyColor2.toString(),
                color: tinyColor1.toString(),
                fontWeight: 900,
                fontSize: "2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                pr: 1,
              }}
            >
              Hello
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, m: 2 }}>
            <Input
              value={colour1}
              onChange={(e) => setColour1(e.target.value)}
              endDecorator={
                <Button
                  onClick={() =>
                    navigator.clipboard
                      .readText()
                      .then((clipText) => setColour1(clipText))
                  }
                >
                  Paste Clipboard
                </Button>
              }
            />
            {ColorConversionTable(colour1)}
            <SliderPicker
              color={colour1}
              onChange={(e: any) => setColour1(e.hex)}
            />
          </Box>
        </Grid>
        <Grid xs={6}>
          <Box
            sx={{
              position: "relative",
              width: options.BOX_WIDTH,
              height: options.BOX_HEIGHT,
              bgcolor: tinyColor2.toString(),
              borderRadius: options.rounded,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                marginY: "auto",
                top: 0,
                bottom: 0,
                width: options.INSIDE_BOX_WIDTH,
                height: options.INSIDE_BOX_HEIGHT,
                bgcolor: tinyColor1.toString(),
                color: tinyColor2.toString(),
                fontWeight: 900,
                fontSize: "2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                pl: 1,
              }}
            >
              World.
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, m: 2 }}>
            <Input
              value={colour2}
              onChange={(e) => setColour2(e.target.value)}
              endDecorator={
                <Button
                  onClick={() =>
                    navigator.clipboard
                      .readText()
                      .then((clipText) => setColour2(clipText))
                  }
                >
                  Paste Clipboard
                </Button>
              }
            />
            {ColorConversionTable(colour2)}
            <SliderPicker
              color={colour2}
              onChange={(e: any) => setColour2(e.hex)}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
