import { useGetQuotesQuery, useSendQuotesMutation } from "./quotesApi";

export const useQuotes = () => {
  const { data: quotes, refetch: refetchQuotes } = useGetQuotesQuery();

  const [sendQuote] = useSendQuotesMutation();

  return { quotes: quotes?.payload, sendQuote, refetchQuotes };
};
