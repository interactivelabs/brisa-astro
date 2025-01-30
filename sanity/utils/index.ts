export function getBlockText(
  block?: {
    children?: {
      text: string;
    }[];
  }[],
  lineBreakChar: string = "↵ "
) {
  return (
    block?.reduce((a, c, i) => {
      const text = c.children?.flatMap((c) => c.text).join("") ?? "";
      return a + text + (i !== block.length - 1 ? lineBreakChar : "");
    }, "") ?? ""
  );
}

export function count(
  arr: Array<unknown>,
  singular: string = "item",
  plural?: string
) {
  return `${arr?.length || 0} ${arr?.length === 1 ? singular : (plural ?? singular + "s")}`;
}
