import React from 'react'
import { useSignMessage } from 'wagmi'
import { verifyMessage } from 'ethers/lib/utils'

export function SignMessage() {
  const recoveredAddress = React.useRef<string>()
  const [message, setMessage] = React.useState<string>('')
  const [signedMessage, setSignedMessage] = React.useState<string>('')
  const {
    data: signature,
    error,
    isLoading,
    signMessage,
  } = useSignMessage({
    onSuccess(data, variables) {
      // Verify signature when sign message succeeds
      const address = verifyMessage(variables.message, data)
      setSignedMessage(variables.message as string)
      recoveredAddress.current = address
    },
  })

  const output = {
    signedMessage,
    recoveredAddress: recoveredAddress.current,
    signature,
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        signMessage({ message })
      }}
    >
      <div>
        <label htmlFor="message">Enter a message to sign</label>
      </div>
      <div>
        <textarea
          id="message"
          name="message"
          placeholder="Type your message"
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
      <div>
        <button disabled={isLoading}>
          {isLoading ? 'Check Wallet' : 'Sign Message'}
        </button>
      </div>

      {signature && (
        <textarea style={{ width: '100%', height: '250px' }}>
          {JSON.stringify(output, null, 4)}
        </textarea>
      )}

      {error && <div>{error.message}</div>}
    </form>
  )
}
