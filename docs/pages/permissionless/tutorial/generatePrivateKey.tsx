'use client'

import { useEffect, useState } from 'react'
import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts'

export function GeneratePrivateKey() {
    const [privateKey, setPrivateKey] = useState()

    useEffect(() => {
        setPrivateKey(generatePrivateKey())
    }, [])

    return (
        <div className='flex flex-col gap-4 p-6'>
            <div className='flex flex-row gap-3 px-2 text-md'>
                <div className='self-center'>Private key:</div>

                <div className="font-mono self-center flex-1 text-center break-all">
                    {privateKey}
                </div>
            </div>

            <div className='flex flex-row gap-3 px-2 text-md'>
                <div className='self-center'>Address:</div>

                <div className="font-mono self-center flex-1 text-center break-all">
                    {privateKey ? privateKeyToAccount(privateKey).address : ""}
                </div>
            </div>
        </div>
    )
}
