import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'
import Link from 'next/link'


import { FormLink, FormWrapper } from '../Form'
import TextField from '../TextField'
import Button from '../Button'


const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField
        name="name"
        placeholder="Name"
        type="name"
        icon={<AccountCircle />}
      />
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <TextField
        name="confirm-password"
        placeholder="Confirm password"
        type="password"
        icon={<Lock />}
      />

      <Button size="large" fullWidth>
        Sign up now
      </Button>

      <FormLink>
        Already have an account?{' '}
        <Link href="/sign-in">
          Sign in
        </Link>
        </FormLink>
        </form>
  </FormWrapper>
)

export default FormSignUp
