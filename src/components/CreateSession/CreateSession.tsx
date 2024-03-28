'use client'
import styles from './createsession.module.css';
import { Button, TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import createNewTimeSlot from '@/app/libs/createNewTimeSlot';
import Image from 'next/image';

export default function CreateSession({user} : {user : any}) {

  const [selectedDate, setSelectedDate] = useState('');
  const [startTimeValue , setStartTimeValue] = useState(dayjs('2022-04-17T15:30'))
  const [endTimeValue , setEntTimeValue] = useState(dayjs('2022-04-17T15:30'))

  const [isCreated , setCreated] = useState(false)

  async function createTimeSlot() {
    
    const description = document.forms[1]['description'].value
    const capacity = document.forms[1]['capacity'].value
    const date = '2022-05-' + selectedDate 
    const startTimeValuee : any = startTimeValue
    const endTimeValuee : any = endTimeValue

    const startTime = (startTimeValuee.$H) + ':' + (startTimeValuee.$m)
    const endTime = (endTimeValuee.$H) + ':' + (endTimeValuee.$m)

    const newTimeSlot =  await createNewTimeSlot(user , date , startTime , endTime , capacity , description)

    if (newTimeSlot.success){
      setCreated(true)
    }

  }

  function getStartTime () {

    const startTimeValuee : any = startTimeValue
    const startTime = (startTimeValuee.$H) + ':' + (startTimeValuee.$m)
    return startTime

  }

  function getEndTime () {

    const endTimeValuee : any = endTimeValue
    const endTime = (endTimeValuee.$H) + ':' + (endTimeValuee.$m)
    return endTime

  } 

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className={styles.CreateSession}>
          <form  name ='newSession' className={styles.CreateSessionCard}>
              <div className={styles.Grid}>
    
              <h2>Description</h2>
              <div className={styles.InputWrapper}>
                <input type="text" name="description"  />
              </div>

              <h2>Capacity</h2>
              <div className={styles.InputWrapper}>
                <input type="number" name='capacity' />
              </div>

                <h2>Date</h2>
                <div className={styles.ButtonWrapper}>
                    <Button className={selectedDate == '10' ? styles.SelectedButton : ''} onClick={() => setSelectedDate('10')}>10/05/2022</Button><Button className={selectedDate == '11' ? styles.SelectedButton : ''} onClick={() => setSelectedDate('11')}>11/05/2022</Button><Button className={selectedDate == '12' ? styles.SelectedButton : ''}onClick={() => setSelectedDate('12')}>12/05/2022</Button><Button className={selectedDate == '13' ? styles.SelectedButton : ''} onClick={() => setSelectedDate('13')}>13/05/2022</Button>
                </div>

                <div className={styles.tempdiv}>  Time : </div>
                <div className={styles.PickerWrapper}>
                  <div className={styles.PickerUnit}>
                      <h2>Start Time</h2>
                      <TimePicker value={startTimeValue} onChange={(newValue : any) => {setStartTimeValue(newValue)}} ampm={false} slotProps={{ textField: { size: 'small' } }} className={styles.timePicker}/>
                  </div>

                  <div className={styles.PickerUnit}>
                      <h2>End Time</h2>
                      <TimePicker value={endTimeValue} onChange={(newValue : any) => setEntTimeValue(newValue)} ampm={false} slotProps={{ textField: { size: 'small' } }} className={styles.timePicker} />
                  </div>
                  
                </div>

                </div>
                <div className={styles.SubmitWrapper}>
                  <Button onClick={() => {createTimeSlot()}}>Create new session</Button>
                  
                  {isCreated? <div className={styles.CreatedNotify}>
                    <Image className={styles.Checked} src='/Icon/Ok.png' width={0} height={0} sizes='100vh' alt='checked'></Image>
                    <h2>Created session at {getStartTime() + " to " + getEndTime()}</h2>
                    </div>
                    :''}
                  </div>
            
              
          </form>
        </div>
    </LocalizationProvider>
  );
}
