import { useEffect, useState } from 'react'
import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts'
import { HomePage } from 'vocs/components'

export function GeneratePrivateKey() {
    const [privateKey, setPrivateKey] = useState()

    useEffect(() => {
        setPrivateKey(generatePrivateKey())
    }, [])

    return (
        <div className='flex flex-col gap-4 p-6'>
            <HomePage.Button onClick={async () => { setPrivateKey(generatePrivateKey()) }}>
                Generate random private key
            </HomePage.Button>

            <div className='flex flex-row gap-3 px-2 text-sm'>
                <div className='self-center'>Private key:</div>

                <div className="font-mono self-center flex-1 text-center break-all">
                    {privateKey}
                </div>
            </div>

            <div className='flex flex-row gap-3 px-2 text-sm'>
                <div className='self-center'>Address:</div>

                <div className="font-mono self-center flex-1 text-center break-all">
                    {privateKey ? privateKeyToAccount(privateKey).address : ""}
                </div>
            </div>
        </div>
    )
}
