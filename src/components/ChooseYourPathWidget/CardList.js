import React from "react";
import Card from "./Card";

import { FlexDiv } from "../../theme/grid";

const data = [
  {
    img: require("../../assets/bitmap_5.png"),
    text: "Corporate",
    num: 86
  },
  {
    img: require("../../assets/bitmap_4.png"),
    text: "Guest Services",
    num: 104
  },
  {
    img: require("../../assets/bitmap_6.png"),
    text: "Students",
    num: 24
  }
];

export default function CardList() {
  return (
    <FlexDiv align="center" justify="space-between">
      {data.map(item => {
        return (
          <Card key={item.num} img={item.img} num={item.num} text={item.text} />
        );
      })}
    </FlexDiv>
  );
}
