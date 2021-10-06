import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import numeral from 'numeral'
import PieChart from './PieChart'


export function Infobox1({ title, cases, total }) {

  return (
    <Card style={{
      backgroundColor: "lightgreen",
      borderRadius: "20px",
      width: "180px",
      height: "100px",
      border: "1px solid grey",
      // backgroundColor: "smokewhite",
      fontSize: "12pt",
      padding: "10px",
      // position: "relative",
      marginTop: 10,
      // font: "400 2em/90px 'Courier', sans-serif",
      color: "#fbfbfb",
      // textAlign: "center",
      // cursor: "pointer",
    }} className="infoBox">
      <CardContent>
        <Typography className="infoBox__title" color="textPrimary"><i>{title}</i> </Typography>
        <h2 className="infoBox__cases"> {numeral(total).format("0,0")}</h2>
      </CardContent>
    </Card>
  )
}

export default Infobox1
