import React from 'react'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const StripeContainer = () => {
const PUBLIC_KEY="pk_test_51NMo5dSGuLWoDTpmWwjjqGxVEsJGrrKo4h74HOqXlq2mdzfxiYdn3z3RQflxuljtWBW06SgCBnAJSQ6aS8n2y3M300q1lqGN3V"
const stripeTestPromise=loadStripe(PUBLIC_KEY)
  return (
    <Elements stripe={stripeTestPromise}>
        
        </Elements>
  )
}

export default StripeContainer