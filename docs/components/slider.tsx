import * as Slider from '@radix-ui/react-slider';
import { useState } from 'react';
import { Info } from "lucide-react"
import * as Tooltip from '@radix-ui/react-tooltip';
import './styles.css';

const InfoTooltip = ({text}: {text: string}) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={100} disableHoverableContent={true}>
        <Tooltip.Trigger asChild>
          <Info width={"16px"} height={"16px"} />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="TooltipContent" sideOffset={5}>
            {text}
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};


const SliderDemo = () => {
  const [normalOps, setNormalOps] = useState(1_000n);
  const [sponsoredOps, setSponsoredOps] = useState(0n);
  const [averageGasPrice, setAverageGasPrice] = useState(0.01);

  const apiCreditsCost = (normalOps: bigint, sponsoredOps: bigint) => {
    const totalCredits = (normalOps * 750n + sponsoredOps * 1_050n);
    const result = (totalCredits - 10_000_000n) / 100_000n
    return result > 0 ? result : 0n;
  }

  const userOperationGasFee = (sponsoredOps: bigint, averageGasPrice: number) => {
    return BigInt(Math.floor(Number(sponsoredOps) * averageGasPrice));
  }

  const pimlicoPaymasterFee = (sponsoredOps: bigint, averageGasPrice: number) => {
    return BigInt(Math.floor(Number(sponsoredOps) * averageGasPrice * 0.1));
  }

  const totalCost = (normalOps: bigint, sponsoredOps: bigint, averageGasPrice: number) => {
    return apiCreditsCost(normalOps, sponsoredOps) + userOperationGasFee(sponsoredOps, averageGasPrice) + pimlicoPaymasterFee(sponsoredOps, averageGasPrice);
  }

  return (
    <form>
      <div className="flex flex-col gap-6 p-2">
        <div className="flex flex-col gap-4">
          <div>
            <div>Monthly Unsponsored User Operations</div>
            <div className="text-center">
              {normalOps.toLocaleString()}
            </div>
            <Slider.Root className="SliderRoot" defaultValue={[1_000]} max={100_000} step={100} onValueChange={(value) => setNormalOps(BigInt(value[0]))}>
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" aria-label="Volume" />
            </Slider.Root>
          </div>
        
          <div className="flex flex-row gap-6 justify-between">
            <div className="w-full">
              <div>Monthly Sponsored User Operations</div>
              <div className="text-center">
                {sponsoredOps.toLocaleString()}
              </div>
              <Slider.Root className="SliderRoot" defaultValue={[0]} max={100_000} step={100} onValueChange={(value) => setSponsoredOps(BigInt(value[0]))}>
                <Slider.Track className="SliderTrack">
                  <Slider.Range className="SliderRange" />
                </Slider.Track>
                <Slider.Thumb className="SliderThumb" aria-label="Volume" />
              </Slider.Root>
            </div>
            <div className="w-full">
              <div>Average Transaction Gas Fee</div>
              <div className="text-center">
                ${averageGasPrice.toLocaleString()}
              </div>
              <Slider.Root className="SliderRoot" defaultValue={[0.01]} min={0.01} max={1} step={0.01} onValueChange={(value) => setAverageGasPrice(value[0])}>
                <Slider.Track className="SliderTrack">
                  <Slider.Range className="SliderRange" />
                </Slider.Track>
                <Slider.Thumb className="SliderThumb" aria-label="Volume" />
              </Slider.Root>
            </div>
          </div>
        </div>
        

        <div className='flex flex-col gap-2'>
          <div>
            <div>API Credit Fee</div>
            <div><span className="text-2xl tabular-nums">${apiCreditsCost(normalOps, sponsoredOps).toLocaleString()}</span> /mo</div>
          </div>
          <div>
            <div className='flex flex-row gap-2 place-items-center'><div>User Operation Gas Fee</div><InfoTooltip text="This fee is used solely to cover the onchain network fees of the sponsored transaction. Pimlico does not benefit from this."/></div>
            <div><span className="text-2xl tabular-nums">${userOperationGasFee(sponsoredOps, averageGasPrice).toLocaleString()}</span> /mo</div>
          </div>
          <div>
            <div className='flex flex-row gap-2 place-items-center'>Pimlico Verifying Paymaster Fee</div>
            <div><span className="text-2xl tabular-nums">${pimlicoPaymasterFee(sponsoredOps, averageGasPrice).toLocaleString()}</span> /mo</div>
          </div>
          <div>
              <div className='flex flex-row gap-2 place-items-center text-xl'>Total Cost</div>
              <span className="text-3xl tabular-nums">${totalCost(normalOps, sponsoredOps, averageGasPrice).toLocaleString()}</span><span> /mo</span>
          </div>
          {apiCreditsCost(normalOps, sponsoredOps) + pimlicoPaymasterFee(sponsoredOps, averageGasPrice) > 2000 && <div className="text-orange-600"><div>Based on your spending, it looks like you might benefit from an Enterprise plan!</div><div><a href='mailto:support@pimlico.io' className="underline underline-offset-2">Contact us</a> for more information.</div></div>}
        </div>
      </div>
      

    </form>
  )
};

export default SliderDemo;