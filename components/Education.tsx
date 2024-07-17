import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { LuSchool } from "react-icons/lu";
import { FaSchool } from "react-icons/fa6";
import { LiaUniversitySolid } from "react-icons/lia";
export default function Education() {
  const theme = useTheme();
  return (
    <div className={" flex-col w-full min-h-screen"} id="achievements">
      <h2
        className={cn(
          "lg:text-4xl text-2xl font-semibold w-full text-center my-10 text-white relative z-20"+` ${theme.theme === "dark" ? "text-white" : "text-black"}`
        )}
      >
        Education
      </h2>
    <Timeline position="alternate" className={` ${theme.theme === "dark" ? "text-white" : "text-black"}`}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2009 - 2013
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <LuSchool />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h5" component="span">
            Primary School
          </Typography>
          <Typography variant='h6'>Harvey Primary School</Typography>
          <Typography variant='h6'>🏢 Kamarajar Salai, Madurai, Tamil Nadu, 625009 </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2014 - 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <FaSchool />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h5" component="span">
            High School
          </Typography>
          <Typography variant='h6' >Thiagarajar Model Higher Secondary School</Typography>
          <Typography variant='h6'>🏢 Teppakulam, Madurai TamilNadu 625009</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2020 - 2025
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LiaUniversitySolid />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h5" component="span">
            College
          </Typography>
          <Typography variant='h6'>PSNA College of Engineering and Technology</Typography>
          <Typography variant='h6'>BE Computer Science</Typography>
          <Typography variant='h6'> 🏢 Kothandaraman Nagar, Tamil Nadu 624622</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}
