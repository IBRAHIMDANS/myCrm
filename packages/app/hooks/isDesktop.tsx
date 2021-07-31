import React from "react";
import { useMediaQuery } from "@material-ui/core";

const isDesktop = () => useMediaQuery("(min-width:600px)");

export default isDesktop;
