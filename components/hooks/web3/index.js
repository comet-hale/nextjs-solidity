import { useHooks } from "@components/providers/web3";

const enhanceHook = (swrRes) => {
  return {
    ...swrRes,
    hasInitialResponse: swrRes.data || swrRes.error,
  };
};

export const useAccount = () => {
  const swrRes = enhanceHook(useHooks((hooks) => hooks.useAccount)());
  return {
    account: swrRes,
  };
};

export const useNetwork = () => {
  const swrRes = enhanceHook(useHooks((hooks) => hooks.useNetwork)());
  return {
    network: swrRes,
  };
};

export const useWalletInfo = () => {
  const { network } = useNetwork();
  const { account } = useAccount();

  const canPurchaseCourse = !!(account.data && network.isSupported);

  return {
    network,
    account,
    canPurchaseCourse,
  };
};
