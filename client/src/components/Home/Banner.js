import React from 'react'
import {makeStyles ,Box} from '@material-ui/core'
const useStyle = makeStyles({
    image:{
        background:`url(${'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?cs=srgb&dl=pexels-negative-space-169573.jpg&fm=jpg'}) center/50% repeat-x #000`,
        width:'100%',
        height:'50vh',
    }
})
const Banner = () => {
    const classes = useStyle();
    return (
        <Box className={classes.image}></Box>
    )
}

export default Banner
