import bus from '../utils/bus'

const useFlashMessage = () => { 
  const setFlashMessage = (message, type) => { 
    bus.emit('flash', {message, type})
  }

  return { setFlashMessage }
}

export default useFlashMessage