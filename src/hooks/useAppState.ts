import { useEffect } from 'react';
import { AppState, AppStateStatus } from 'react-native'

const useAppState = (onAppStateChange : (status : AppStateStatus) => void) => {
  
  useEffect(() => {
    const unsubscribe = AppState.addEventListener('change', onAppStateChange);

    return () => {
      unsubscribe.remove();
    }
  },[onAppStateChange]);
}

export default useAppState;