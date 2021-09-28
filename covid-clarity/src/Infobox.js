import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

function Infobox({ title, cases, total }) {
  return (
    <Card className="infoBox1">
      <CardContent>
        <Typography color="textSecondary">{title} </Typogrophy>
        <h2 className="infoBox__cases"> {cases}</h2>
        <Typography className="infoBox" color="textSecondary">
          {total} Total 
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Infobox
