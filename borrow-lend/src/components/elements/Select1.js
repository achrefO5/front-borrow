import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function Select1() {
  return (
    <Box sx={{backgroundColor: 'white', minWidth: 50 }}>
      <FormControl fullWidth>
        {/* <InputLabel variant="standard" htmlFor="uncontrolled-native" color='error' >
          Market Place
        </InputLabel> */}
        <NativeSelect
          defaultValue={10}
          inputProps={{
            name: 'Market place',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Binance</option>
          <option value={20}>Open Sea</option>
          <option value={30}>Rarible</option>
          <option value={40}>Crypto.com</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

