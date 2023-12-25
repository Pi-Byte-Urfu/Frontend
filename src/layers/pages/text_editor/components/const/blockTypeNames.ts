import { BlockType } from "../../config/config";

export const blockTypeNames = {
  [BlockType.h1]: "<h1>",
  [BlockType.h2]: "<h2>",
  [BlockType.list]: "<ul>",
  [BlockType.orderList]: "<ol>",
  [BlockType.code]: "<code>",
  [BlockType.cite]: "<cite>",
  [BlockType.default]: "<p>",
  [BlockType.blockquote]: "<blockquote>"
}