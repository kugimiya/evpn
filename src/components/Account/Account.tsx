'use client';

import { Connection } from "@/types/AccountEntity";
import React, { useState } from "react";

export const Account: React.FC<{ data: Connection }> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { ConnectionString, id } = props.data;

  return (
    <div>
      <span>
        Аккаунт #{id};
        <br />&nbsp;&nbsp;&nbsp;<a href={ConnectionString} style={{ display: 'inline-block', padding: '8px', margin: '2px 0', border: '1px solid gray' }}>
          Соединить
        </a>

        <br />&nbsp;&nbsp;&nbsp;<a className="pseudo" onClick={() => setIsOpen(_ => !_)}>Показать строку-подключения</a >
      </span>

      {isOpen && (
        <code><pre style={{ maxWidth: '480px', wordWrap: 'anywhere', wordBreak: 'break-all', whiteSpace: 'break-spaces', padding: '8px', margin: '32px', border: '1px solid gray' }}>{ConnectionString}</pre ></code >
      )}
    </div>
  );
};
