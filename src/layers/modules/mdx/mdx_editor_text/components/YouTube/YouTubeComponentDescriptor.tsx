import { JsxComponentDescriptor } from "@mdxeditor/editor";
import { YouTubeDirective } from "./YouTubeDerictive";

export const YouTubeComponentDescriptor: JsxComponentDescriptor = {
  name: 'YouTube',
  kind: 'flow',
  props: [
    { name: 'id', type: 'string' },
  ],
  hasChildren: false,
  Editor: (props) => {
    return <YouTubeDirective node={props}/>
  },
};