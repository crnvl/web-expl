import { endpoints } from "@/api/requests";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
  urls?: string[];
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ message: "url query parameter is required" });
  }

  if (typeof url !== "string") {
    return res
      .status(400)
      .json({ message: "url query parameter must be a string" });
  }

  const response = await endpoints.external.getSiteContent(url);
  if (response.status !== 200) {
    return res.status(500).json({ message: "error fetching site content" });
  }

  const html = response.data;

  // filter out the urls from the html which start with http or https
  let urls = html.match(/(http|https):\/\/[a-zA-Z0-9-.]+/g);

  // remove duplicates
  if (urls) {
    urls = Array.from(new Set(urls));
  }

  if (!urls) {
    return res.status(200).json({ message: "no urls found" });
  }

  res.status(200).json({ message: "success", urls });
};

export default handler;
