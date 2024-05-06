import { Accordion, AccordionDetails, AccordionSummary, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

import { experience } from "../repository";

interface ExperienceComponentProps {
    hashtags: string[];
    title: string;
    detailsString: string;
    description: string;
    responsibilities: string[]
}

export default function ExperienceSection() {
    return (
      <div style={{marginTop: "20px"}}>
            {experience.map((e, index) => {
            return (
              <ExperienceComponent 
                key = {index}
                hashtags = {e.hashtags}
                title = {e.title}
                detailsString = {e.detailsString}
                description = {e.description}
                responsibilities = {e.responsibilities}
              />
            )
        })}
     </div>
    )
}


const ExperienceComponent: React.FC<ExperienceComponentProps> = (
  { hashtags, title, detailsString, description, responsibilities}
  ) => {
    return (
      <div>
            <Typography color="secondary"> 
              {hashtags.map((e, index) => <span key={index}>{"#" + e + " "}</span>)} 
            </Typography> 
            <Typography variant="h4" component="div" sx = {{my: 1}}> {title} </Typography>
            <Typography variant = "body2" color="text.secondary"> {detailsString} </Typography>
            <Typography sx = {{my: 1.5}}> {description} </Typography>
            <Accordion>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx = {{alignItems: "center"}}
                > 
                <Typography variant="h6">
                    My responsibilities
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  {responsibilities.map((text, index) => {
                    return (<CustomListItem key={index} title={text} />)
                  })}
                </List>
              </AccordionDetails>
            </Accordion>
            <Divider sx = {{mb: 5}}/>
     </div>
    )
}


const CustomListItem: React.FC<{ title: string }> = ({ title }) => {
    return (
        <ListItem>
            <ListItemIcon>
                <CheckIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary={title} />
        </ListItem>
    );
}