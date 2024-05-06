import * as React from 'react';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot} from '@mui/lab';
import Typography from '@mui/material/Typography';
import { education } from '../repository';


interface TimelineComponentProps {
    start_year: number;
    end_year: number | null;
    title: string;
    description: string;
    is_active: boolean;
    icon: React.ElementType
}

export default function EducationTimeline() {
  return (
    <Timeline position="alternate" sx={{ mx: 5 }}>
        {education.map((e, index) => {
            return (
                <TimelineComponent 
                    key={index}
                    start_year={e.start_year}
                    end_year={e.end_year}
                    title={e.title}
                    description={e.description}
                    is_active = {e.is_active}
                    icon = {e.icon}
                />
            )
        })}
    </Timeline>
  );
}
  
const TimelineComponent: React.FC<TimelineComponentProps> = (
    { start_year, end_year, title, description, is_active, icon: Icon }
) => {
    return (
        <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0'}}
            align="right"
            variant="body2"
            color="text.secondary"
        >
            {start_year} - {end_year ? end_year : "..."}
        </TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color={is_active ? "primary" : "grey"}>
                <Icon />
            </TimelineDot>
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant="h6" component="span"> {title} </Typography>
            <Typography> {description} </Typography>
        </TimelineContent>
        </TimelineItem>
    );
}