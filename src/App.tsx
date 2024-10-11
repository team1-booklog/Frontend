import { useEffect } from 'react'
import Routers from './Routers.tsx'
import { useAuthStore } from './stores/UseCurrentUserStore.ts'
import { maintainLoginState } from './services/AuthService'

function App() {
  const { accessToken, setAccessToken } = useAuthStore()

  useEffect(() => {
    const checkAndMaintainLoginState = async () => {
      if (!accessToken) {
        try {
          await maintainLoginState()
        } catch (error) {
          console.error('서버 에러', error)
        }
      }
    }

    checkAndMaintainLoginState()
  }, [accessToken, setAccessToken])

  return (
    <>
      <Routers />
    </>
  )
}

export default App
