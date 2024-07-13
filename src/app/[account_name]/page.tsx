import { Guide } from "@/components/Guide/Guide";
import { getStrapiData } from "@/services/strapi";
import { Account as ConnectionCmp } from "@/components/Account/Account";

export default async function Account({ params }: { params: { account_name: string } }) {
  const data = await getStrapiData();
  const account = data.accounts.find((account) => account.attributes.AccountName === params.account_name);

  if (!account) {
    return (
      <>Брат, ошибся номером.</>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h2>VPN Аккаунты</h2>
        <p><b>Привет!</b> Это страничка с твоими/вашими аккаунтами для VPN.</p>
        <p>Если вы знаете, что делать, переходите к секции `Ваши аккаунты`.</p>
        <p>Иначе, обязательно ознакомьтесь с гайдами по подключению для вашей платформы.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h2>Гайды по подключению:</h2>

        {data.guides.map((guide) => <Guide key={guide.id} data={guide.attributes} />)}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h2>Ваши аккаунты:</h2>

        {account.attributes.Connections.map((connection) => <ConnectionCmp key={connection.id} data={connection} />)}
      </div>
    </div>
  );
}
