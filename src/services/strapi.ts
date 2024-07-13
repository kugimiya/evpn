import { AccountEntity } from "@/types/AccountEntity";
import { APIEntity, APITemplate } from "@/types/Api";
import { GuideEntity } from "@/types/GuideEntity";
import axios from "axios";

const request = axios.create({
  headers: {
    Authorization: `bearer ${process.env.STRAPI_TOKEN}`
  },
  baseURL: process.env.STRAPI_BASE_URL,
});

export const getStrapiData = async () => {
  const guides = await request.get<APITemplate<APIEntity<GuideEntity>[]>>('/api/guides?populate=*&pagination[pageSize]=1000');
  const accounts = await request.get<APITemplate<APIEntity<AccountEntity>[]>>('/api/accounts?populate=*&pagination[pageSize]=1000');

  return { guides: guides.data.data, accounts: accounts.data.data };
};
