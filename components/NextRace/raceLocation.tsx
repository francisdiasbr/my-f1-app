import React from "react";
import { Block, Typography } from "@xprog/prensa";

import { NextRaceObject } from "./types";
import { grandprixProps, venueProps } from './styles'


const RaceLocation: React.FC<NextRaceObject> = (item) => {
  return (
    <Block>
      <Typography css={grandprixProps}>{item.grand_prix}</Typography>
      <Typography css={venueProps}>{item.venue}</Typography>
    </Block>
  )
}

export default RaceLocation