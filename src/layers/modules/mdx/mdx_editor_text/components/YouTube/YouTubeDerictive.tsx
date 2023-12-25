import { JsxEditorProps } from "@mdxeditor/editor";

export interface YouTubeDirectiveProps {
  node: JsxEditorProps;
}

export const YouTubeDirective: React.FC<YouTubeDirectiveProps> = ({ node }) => {
  const id  = node.mdastNode.attributes[0].value
  if (!id) {
    return null;
  }

  const embedUrl = `https://www.youtube.com/embed/${id}?si=V_yhLIRe4OtOqMQR`;

  return (
    <iframe
      width="1000"
      height="500"
      src={embedUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};