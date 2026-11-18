import {worksheet} from "@shared/worksheet";
import {calculate} from "./calculate";

const fields=[
  {
    "name": "Outgoing tail",
    "unit": "fr",
    "initial": 8,
    "min": 0,
    "max": 500,
    "step": 1
  },
  {
    "name": "Incoming head",
    "unit": "fr",
    "initial": 14,
    "min": 0,
    "max": 500,
    "step": 1
  },
  {
    "name": "Desired length",
    "unit": "fr",
    "initial": 24,
    "min": 0,
    "max": 500,
    "step": 1
  },
  {
    "name": "Frame rate",
    "unit": "",
    "initial": 25,
    "min": 1,
    "max": 240,
    "step": 1
  }
];
worksheet({name:"Edit Handles",fields,calculate,accent:"#FC7658",motion:{enabled:false}});
