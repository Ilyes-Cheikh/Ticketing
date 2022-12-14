import { useWeb3Context } from './context'

export const useWallet = () => {
  const { account, balance, blockNumber, error, loading, network, symbol,connectToMetamask } =
    useWeb3Context()
  return {
    account,
    balance,
    blockNumber,
    error,
    loading,
    network,
    symbol,
    connectToMetamask
  }
}
