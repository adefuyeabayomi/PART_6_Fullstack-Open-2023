import { useSelector } from "react-redux"

const Notification = () => {
  let notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 2,
    borderRadius : 8,
    borderColor : "gray"
  }
  if(notification.show){
    return ( 
      <div style={style}>
        {notification.message}
      </div>
    )    
  }
  else {
    return <div></div>
  }
}

export default Notification