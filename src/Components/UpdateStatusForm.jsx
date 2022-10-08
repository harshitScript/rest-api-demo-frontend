import { memo, useState } from 'react'
import { Button2 } from './UI/Button'
import { Card1 } from './UI/Card'
import { InputError1 } from './UI/Errors'

const UpdateStatusForm = () => {
  const [statusValue, setStatusValue] = useState('I m a Super Hero Today.')

  const [inputWasTouched, setInputWasTouched] = useState(false)

  const statusErrors = [
    /^[a-zA-Z\s]{9,}$/.test(statusValue) ? '' : 'Invalid Status'
  ]

  const hasError = statusErrors.some((error) => error) && inputWasTouched

  const inputBlurHandler = (e) => setInputWasTouched(true)

  const inputChangeHandler = (e) => setStatusValue(e.target.value)

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <Card1 className='w-3/6 mx-auto mt-10'>
      <form onSubmit={submitHandler} className='p-2 box-border w-full flex'>
        <div className='py-2 w-3/4'>
          <input
            type='text'
            defaultValue={statusValue}
            name='status'
            id='status-input'
            className={`w-full p-2 rounded-lg bg-inherit border-solid border-2 ${
              hasError ? 'border-red' : 'border-white'
            }`}
            onChange={inputChangeHandler}
            placeholder='status'
            onBlur={inputBlurHandler}
          />
          {hasError
            ? (
              <InputError1>
                {statusErrors.filter((err) => err).find((err) => err)}
              </InputError1>
              )
            : (
              <></>
              )}
        </div>
        <div className='flex justify-center w-1/4'>
          <Button2>Update</Button2>
        </div>
      </form>
    </Card1>
  )
}

export default memo(UpdateStatusForm)
