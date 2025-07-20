import React, { useEffect, useState } from 'react';
import {
  Box, Button, FormControl, Grid, InputLabel,
  MenuItem, Select, Typography
} from '@mui/material';
import type { DaySchedule } from './CourierInterface';




const tags = ["ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი", "კვირა"];
const hours = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
const minutes = ["00", "10", "20", "30", "40", "50"];

interface  CourierTaimprops{
  onchange: (daySchedules:DaySchedule[]) => void
}


const CourierTaim:React.FC<CourierTaimprops> = ({onchange}) => {


  const [daySchedules, setDaySchedules] = useState<DaySchedule[]>([]);

  useEffect(() => {
    onchange(daySchedules )
  }, [daySchedules])


  const toggleDay = (tag: string) => {
    setDaySchedules(prev => {
      const exists = prev.find(d => d.tag === tag);
      if (exists) {
        return prev.filter(d => d.tag !== tag);
      } else {
        return [
          ...prev,
          {
            tag,
            startHour: "08",
            startMinute: "00",
            endHour: "18",
            endMinute: "00"
          }
        ];
      }
    });
  };
  const updateSchedule = (tag: string, field: keyof Omit<DaySchedule, 'tag'>, value: string) => {
    setDaySchedules(prev =>
      prev.map(d =>
        d.tag === tag ? { ...d, [field]: value } : d
      )
    );
  };
  
  return (
    <Box p={4}>
      <Typography variant="h5" gutterBottom>კურიერის სამუშაო გრაფიკი</Typography>
      <Grid container spacing={3}>
        {tags.map(tag => {
          const selected = daySchedules.find(d => d.tag === tag);
          return (
            <Grid item xs={12} sm={6} md={4} key={tag}>
              <Box border={1} borderRadius={2} p={2} borderColor={selected ? 'primary.main' : 'grey.300'}>
                <Typography variant="h6">{tag}</Typography>
                <Button
                  variant={selected ? "contained" : "outlined"}
                  color={selected ? "error" : "primary"}
                  onClick={() => toggleDay(tag)}
                  sx={{ my: 1 }}
                  fullWidth
                >
                  {selected ? "წაშლა" : "დამატება"}
                </Button>
                {selected && (
                  <>
                    <Typography variant="body2">დაწყების დრო</Typography>
                    <Box display="flex" gap={1}>
                      <FormControl fullWidth>
                        <InputLabel>საათი</InputLabel>
                        <Select
                          value={selected.startHour}
                          label="საათი"
                          onChange={(e) => updateSchedule(tag, "startHour", e.target.value)}
                          MenuProps={{
                            PaperProps: {
                            style: {
                                maxHeight: 48 * 4.5, 
                            },
                            },
                        }}
                        >
                          {hours.map(h => <MenuItem key={h} value={h}>{h}</MenuItem>)}
                        </Select>
                      </FormControl>
                      <FormControl fullWidth>
                        <InputLabel>წუთი</InputLabel>
                        <Select
                          value={selected.startMinute}
                          label="წუთი"
                          onChange={(e) => updateSchedule(tag, "startMinute", e.target.value)}
                           MenuProps={{
                            PaperProps: {
                            style: {
                                maxHeight: 48 * 4.5, 
                            },
                            },
                        }}
                        >
                          {minutes.map(m => <MenuItem key={m} value={m}>{m}</MenuItem>)}
                        </Select>
                      </FormControl>
                    </Box>
                    <Typography variant="body2" mt={2}>დასრულების დრო</Typography>
                    <Box display="flex" gap={1}>
                      <FormControl fullWidth>
                        <InputLabel>საათი</InputLabel>
                        <Select
                          value={selected.endHour}
                          label="საათი"
                          onChange={(e) => updateSchedule(tag, "endHour", e.target.value)}
                           MenuProps={{
                            PaperProps: {
                            style: {
                                maxHeight: 48 * 4.5, 
                            },
                            },
                        }}
                        >
                          {hours.map(h => <MenuItem key={h} value={h}>{h}</MenuItem>)}
                        </Select>
                      </FormControl>
                      <FormControl fullWidth>
                        <InputLabel>წუთი</InputLabel>
                        <Select
                          value={selected.endMinute}
                          label="წუთი"
                          onChange={(e) => updateSchedule(tag, "endMinute", e.target.value)}
                           MenuProps={{
                            PaperProps: {
                            style: {
                                maxHeight: 48 * 4.5, 
                            },
                            },
                        }}
                        >
                          {minutes.map(m => <MenuItem key={m} value={m}>{m}</MenuItem>)}
                        </Select>
                      </FormControl>
                    </Box>
                  </>
                )}
              </Box>
            </Grid>
          );
        })}
      </Grid>
      
    </Box>
  );
};
export default CourierTaim;