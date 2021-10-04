import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import numeral from 'numeral'

function Infobox({ title, cases, total }) {
  return (
    <Card className="infoBox">
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">{title} </Typography>
        <h2 className="infoBox__cases"> {numeral(total).format("0,0")}</h2>
        {/* <Typography className="infoBox__total" color="textSecondary">
        {/* {numeral(total).format("0,0")} */}
        {/* </Typography> */} 
      </CardContent>
    </Card>
  )
}

export default Infobox
