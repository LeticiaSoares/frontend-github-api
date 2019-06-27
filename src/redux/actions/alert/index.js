export const OPEN_ALERT = '[alert] OPEN'
export const CLOSE_ALERT = '[alert]  CLOSE' 

export const alertActions  = {
  openAlert:  data => ({
    type: OPEN_ALERT,
    payload: data
  }),
  closeAlert:  () => ({
      type: CLOSE_ALERT,
      payload: { message : ''}
    })
} 

