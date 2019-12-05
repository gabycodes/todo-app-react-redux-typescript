import React from 'react'
import { connect } from 'react-redux'

const Message = (props: any) => (
    props.message 
        ? <span className='message'>{props.message}</span> 
        : null
)

export default connect(
    (state: any) => ({ message: state.message }),

)(Message)

