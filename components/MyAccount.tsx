import { useAccount } from 'wagmi'
import { SignMessage } from './SignMessage'

export default function MyAccount() {
  const { data: account } = useAccount()
  if (!account?.address) {
    return null
  }
  return (
    <div>
      <div>Full address: {account.address}</div>
      <SignMessage />
    </div>
  )
}
