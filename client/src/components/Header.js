import React from 'react'
import { AppBar, Toolbar, Typography,makeStyles} from '@material-ui/core'
import { Link } from 'react-router-dom'
const useStyle = makeStyles({
    headercom:{
        background:'#333'
    },
    container:{
        justifyContent:'center',
        '& > *':{
            padding:20
        }
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }
})

const Header = () => {
    const classs =useStyle();
    return (
        <AppBar className={classs.headercom}>
            <Toolbar className={classs.container}>
            <Link className={classs.link} to={'/'}>
            <Typography>HOME</Typography>
            </Link>
    
                <Typography>ABOUT</Typography>
                <Typography>CONTACT</Typography>
                
                <Typography>LOGIN</Typography>
           
            </Toolbar>
        </AppBar>
    )
}

export default Header
