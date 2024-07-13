export type GuideEntity = {
  Guide: Guide;
};

export type Guide = {
  id: number;
  GuidePlatformName: string;
  GuideContent: GuideContent[];
};

export type GuideContent = {
  type: ChildType;
  text?: string;
  url?: string;
  children?: GuideContent[];
  bold?: boolean;
  code?: boolean;
  format?: string;
};

export enum ChildType {
  Link = "link",
  ListItem = "list-item",
  Text = "text",
  List = "list",
  Paragraph = "paragraph",
}
