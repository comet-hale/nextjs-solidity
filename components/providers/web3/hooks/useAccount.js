import { useEffect } from "react";
import useSWR from "swr";

const adminAddresses = {
  "0xd8a899c13a6c35d99c6ca8744daed7cbcefd795bcef0991b1f85b00248b1ac32": true,
};

export const handler = (web3, provider) => () => {
  const { data, mutate, ...rest } = useSWR(
    () => (web3 ? "web3/accounts" : null),
    async () => {
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      if (!account) {
        throw new Error(
          "Cannot retreive an account. Please refresh the browser."
        );
      }
      return account;
    }
  );

  useEffect(() => {
    const mutator = (accounts) => mutate(accounts[0] ?? null);
    provider?.on("accountsChanged", mutator);
    return () => {
      provider?.removeListener("accountsChanged", mutator);
    };
  }, [provider]);

  return {
    data,
    isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
    mutate,
    ...rest,
  };
};
