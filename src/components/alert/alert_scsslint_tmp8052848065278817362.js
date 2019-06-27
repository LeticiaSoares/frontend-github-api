import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

const Alert = ({message,handleOnClick}) => (
     <Dialog open={Boolean(message)}>
        <DialogTitle>{message}</DialogTitle>
        <Button onClick={handleOnClick}>Ok</Button>
     </Dialog>
)

Alert.displayName = 'Alert'

export default Alert