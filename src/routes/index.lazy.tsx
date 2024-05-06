import { createLazyFileRoute } from '@tanstack/react-router'
import { Typography, Button } from '@mui/material';
import { personalData } from '../repository';

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
    return (
        <div>
          <Typography variant="h1">
            {personalData.name}
          </Typography>
          <Typography variant="h2" sx={{mb: 5}} color="text.secondary">
            {personalData.position}
          </Typography>
          <div>
            {personalData.socials.map((s, _) => {
                return (
                    <Button variant="outlined" href={s.link} endIcon={s.icon} size='large' sx={{mr: 1}} key={s.type}>
                         {s.type}
                    </Button>
                )
            })}
          </div>
        </div>
      );
}
