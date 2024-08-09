import { getStrapiData } from "@/services/strapi";

export default async function Home() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'baseline' }}>
        <h1>evpn</h1>
        <h3>e9l vpn account access ui</h3>
      </div>

      <div>
        Если вы хотите себе VPN, напишите <a href="https://t.me/kugichka">администратору в Telegram</a>.
      </div>
    </>
  );
}
