import { get_encoding } from "tiktoken";

const encoding = get_encoding("cl100k_base");

const tokens = encoding.encode(
  "Hi, this is Krishna. A full stack software engineer from India."
);

console.log(tokens);
