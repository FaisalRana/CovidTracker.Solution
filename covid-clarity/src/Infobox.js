import React from 'react'
import { Paper, Card, CardContent, Typography } from '@material-ui/core'
import numeral from 'numeral'
import PieChart from './PieChart'


export function Infobox({ title, cases, total }) {

  return (
    <Card style={{
      backgroundColor: "smokewhite",
      borderRadius: "20px",
      width: "180px",
      height: "100px",
      border: "1px solid grey",
      padding: "10px",
      // backgroundColor: "smokewhite",
      fontSize: "12pt",
      // position: "relative",
      marginTop: 10,
      textAlign:'left',
      // font: "400 2em/90px 'Courier', sans-serif",
      // color: "white",
      // textAlign: "center",
      // cursor: "pointer",
    }} className="infoBox">
      <CardContent>
      <Typography className="infoBox__title" color="textPrimary"><i>{title}</i></Typography>
      <h2 className="infoBox__cases">{numeral(total).format("0,0")}
</h2>
      </CardContent>
    </Card>
  )
}

export default Infobox
