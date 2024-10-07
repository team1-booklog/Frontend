import { checkDuplicateId } from '../services/AuthService'
import { useAuthStore } from '../stores/UseAuthStore'

export const UseDuplicatCheck = () => {
  const { duplicatedState, setIsDuplicated } = useAuthStore()

  const handleDuplicateCheck = async (username: string) => {
    try {
      const isDuplicate = await checkDuplicateId(username)
      if (isDuplicate) {
        if (!duplicatedState) setIsDuplicated()
        alert('이미 존재하는 아이디입니다.')
      } else {
        if (duplicatedState) setIsDuplicated()
        alert('사용 가능한 아이디입니다.')
      }
    } finally {
    }
  }

  return { handleDuplicateCheck }
}
