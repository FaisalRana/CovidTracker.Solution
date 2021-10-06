import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import numeral from 'numeral'

function Infobox({ title, cases, total }) {
  return (
    <Card style={{backgroundColor: "orange"}} className="infoBox">
      <CardContent>
        <Typography className="infoBox__title" color="textPrimary"><underlined>{title}</underlined> </Typography>
        <h2 className="infoBox__cases"> {numeral(total).format("0,0")}</h2>
      </CardContent>
    </Card>
  )
}

export default Infobox
