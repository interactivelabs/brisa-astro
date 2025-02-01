import { type QueryParams } from "sanity";
import { sanityClient } from "sanity:client";

const token = import.meta.env.SANITY_API_READ_TOKEN;

export async function loadQuery<QueryResponse>({
  query,
  params,
}: {
  query: string;
  params?: QueryParams;
}) {
  const perspective = "published";

  const { result, resultSourceMap } = await sanityClient.fetch<QueryResponse>(
    query,
    params ?? {},
    {
      filterResponse: false,
      perspective,
      resultSourceMap: false,
      useCdn: true,
    }
  );

  return {
    data: result,
    sourceMap: resultSourceMap,
    perspective,
  };
}
