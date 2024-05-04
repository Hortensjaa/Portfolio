import * as React from 'react';
import { Link } from '@tanstack/react-router'
import {Box, Button, Card, CardActions, CardContent, Grid, ListItem, ListItemIcon, ListItemText, Typography} from '@mui/material';
import { StarBorder } from '@mui/icons-material/'
import { hashtag, techstack } from '../repository';
import { SharedStateContext } from '../contextProvider'
import { useContext } from 'react';

interface TechstackCardProps {
    id: hashtag;
    hashtags: hashtag[];
    title: string;
    projects: string[];
    icons: React.ReactNode[];
}

export default function TechStackCards() {
  return (
    <Grid container>
        {
            techstack.map((e, _) => {
                return (
                    <TechStackCard 
                        id = {e.id}
                        hashtags = {e.hashtags}
                        title = {e.title}
                        projects = {e.projects}
                        icons={e.icons}
                    />
                )
            })
        }
    </Grid>
  );
}

const TechStackCard: React.FC<TechstackCardProps> = (
    { id, hashtags, title, projects, icons }
) => {
    const { setFilters } = useContext(SharedStateContext);
    return (
        <Box sx={{width: 300, m:2}}>
            <Card variant="outlined"sx={{height: 310 }}>
                <CardContent sx={{height: 240 }}>
                    <Typography color="secondary"> {hashtags.map((e, _) => {return "#"+e+" "})} </Typography> 
                    <Typography variant="h5" sx={{ mb: 1.5 }}> {title} </Typography>
                    <Typography color="text.secondary">
                        Projects:
                    </Typography>
                    {projects.map((text, index) => {
                    return (
                        <ListItem disablePadding>
                            <ListItemIcon> {icons[index] ? icons[index] : <StarBorder />} </ListItemIcon>
                            <ListItemText>{text}</ListItemText>
                        </ListItem>)
                    })}
                </CardContent>
                <CardActions style={{ justifyContent: 'center' }}>
                    <Button size="small" onClick={() => setFilters([id])}>
                        <Link to="/projects">
                            Show projects
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </Box>
    )
}