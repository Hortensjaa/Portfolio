import { Avatar, Grid, Typography } from "@mui/material";
import { personalData } from "../repository";



export default function AboutMeSection() {
    return (
            <Grid container spacing={2} sx={{display: 'flex', alignItems: 'center', marginTop: 30}}>
                <Avatar src={personalData.picture} sx={{ width: 200, height: 200, mr: 10 }}></Avatar> 
                <Typography variant="h2">About me</Typography>
                <Typography variant="h6"> {personalData.aboutMe}</Typography>
            </Grid>
    )
}
