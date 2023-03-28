import React, { useState } from 'react'
import '../App.css'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Button from '@mui/material/Button'
import { Stack } from '@mui/system'

const Metalock = (props) => <a href='#' id='metalockIcon'></a> // Need to style this

const Microsoft = (props) => <a href='#' id='microsoftIcon'></a> // Need to style this

const Google = (props) => <a href='#' id='googleIcon'></a> // Need to style this

function Copyright(props: any) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href='https://www.metalockengineering.com/sv/metalock-engineering-swe/'>
        Metalock Machines
      </Link>
      {' ' + new Date().getFullYear() + '.'}
    </Typography>
  )
}

const theme = createTheme()

function LoginMUI() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='sm'>
        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 5,
            borderRadius: 1,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 2,
            height: 'auto',
            width: 'auto',
          }}
        >
          <Stack spacing={2} justifyContent='center' alignItems='center'>
            <Box
              sx={{
                alignItems: 'center',
              }}
            >
              <Metalock />
            </Box>
            <Typography component='h1' variant='h3'>
              Sign in
            </Typography>
            <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 6 }}>
              <TextField
                margin='normal'
                id='email'
                label='Email'
                name='email'
                autoComplete='email'
                fullWidth
                required
                autoFocus
              />
              <TextField
                margin='normal'
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                required
                fullWidth
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              <Button
                onClick={() => {
                  alert('Welcome')
                }}
                type='submit'
                fullWidth
                variant='contained'
                size='large'
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 4, sm: 8, md: 16 }}
              justifyContent='center'
              alignItems='center'
            >
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
              <Link href='#' variant='body2'>
                Sign Up
              </Link>
            </Stack>
            <Typography component='h2' variant='subtitle1'>
              Or Sign in with:
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 4, sm: 8, md: 16 }}
              justifyContent='center'
              alignItems='center'
            >
              <Microsoft />
              <Google />
            </Stack>
          </Stack>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}

export default LoginMUI
