'use client';

import { ChildType, GuideContent, GuideEntity } from "@/types/GuideEntity";
import React, { useState } from "react";

export const Guide: React.FC<{ data: GuideEntity }> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { GuideContent, GuidePlatformName } = props.data.Guide;

  const titleString = (
    <span>&nbsp;&nbsp;{GuidePlatformName}</span>
  );

  const triggerString = (
    <a className="pseudo" onClick={() => setIsOpen((c) => !c)}>({isOpen ? 'закрыть' : 'открыть'})</a>
  );

  const renderContent = (path = 'root', content?: GuideContent[]) => {
    if (!content) {
      return <></>;
    }

    const subContent = content.map((item, index) => {
      const currentPath = `${path}-${index}-${item.type}`;
      const children = renderContent(currentPath, item.children);

      if (item.type === ChildType.Link) {
        return (
          <a key={currentPath} html-x-path={currentPath} href={item.url} target="_blank">{children}</a>
        );
      }

      if (item.type === ChildType.Text) {
        return <span
          key={currentPath} html-x-path={currentPath}
          style={{
            fontWeight: item.bold ? '900' : undefined,
            fontFamily: item.code ? 'monospace' : undefined
          }}
        >{item.text}</span>;
      }

      if (item.type === ChildType.Paragraph) {
        return <p key={currentPath} html-x-path={currentPath}>{children}</p>;
      }

      if (item.type === ChildType.List) {
        return <ol
          key={currentPath} html-x-path={currentPath}
          style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: '24px' }}
        >{children}</ol>;
      }

      if (item.type === ChildType.ListItem) {
        return <li key={currentPath} html-x-path={currentPath}>{children}</li>;
      }
    });

    return <>{subContent}</>;
  }

  const content = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', border: '1px solid gray', padding: '4px', margin: '8px' }}>
      {false && <code><pre>{JSON.stringify(GuideContent, null, 2)}</pre></code>}
      {renderContent(undefined, GuideContent)}
    </div>
  )

  return (
    <div>
      <p>{titleString} {triggerString}</p>
      {isOpen && content}
    </div>
  )
};
