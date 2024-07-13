export type AccountEntity = {
  AccountName: string;
  Connections: Connection[];
};

export type Connection = {
  id: number;
  ConnectionString: string;
};
