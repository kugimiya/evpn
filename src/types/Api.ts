export type APITemplate<T> = {
  data: T;
  meta: Meta;
};

export type Meta = {
  pagination: Pagination;
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type APIEntity<T> = {
  id: number;
  attributes: {
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
  } & T;
};
