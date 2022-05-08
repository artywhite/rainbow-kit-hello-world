import { useAccount, useEnsName } from 'wagmi'
import { SignMessage } from './SignMessage'

export default function MyAccount() {
  const { data: account } = useAccount()
  const { data: ensName } = useEnsName({
    address: account?.address,
    enabled: Boolean(account?.address),
  })

  if (!account?.address) {
    return null
  }

  return (
    <div>
      <div>Full address: {account.address}</div>
      {ensName ? <div>ENS name: {ensName}</div> : null}
      <SignMessage />
    </div>
  )
}
