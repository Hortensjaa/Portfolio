import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from '@mui/material/';
import { GitHub } from '@mui/icons-material';
import { projects } from '../repository';

interface ProjectComponentProps {
    hashtags: string[],
    title: string,
    description: string,
    photo: string,
    repo: string
}


export default function ProjectsCards() {
    return (
        <Grid container spacing={2}>
            {
                projects.map((e, _) => {
                    return (
                        <ProjectCard 
                            hashtags = {e.hashtags}
                            title = {e.title}
                            description = {e.description}
                            photo={e.photo}
                            repo={e.repo}
                        />
                    )
                })
            }
        </Grid>
    );
}


const ProjectCard: React.FC<ProjectComponentProps> = (
    { hashtags, title, description, photo, repo }
) => {
    return (
        <Card sx={{ width: 600, height: 450, m: 5, position: 'relative' }}>
        <CardMedia
            sx={{ height: 300 }}
            image={photo}
            title={title}
        />
        <CardContent>
            <Typography variant="body2" color="secondary">
            <Typography color="secondary"> {hashtags.map((e, index) => <span key={index}>{"#" + e + " "}</span>)} </Typography>
            </Typography>
            <Typography gutterBottom variant="h5" component="div">{title}</Typography>
            <Typography variant="body2" color="text.secondary">{description}</Typography>
        </CardContent>
        <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
            <CardActions style={{ justifyContent: 'flex-end' }}>
            <Button size="small" href={repo}>See code<GitHub sx={{ml: 2}}/></Button>
            </CardActions>
        </div>
        </Card>
    );
}
      