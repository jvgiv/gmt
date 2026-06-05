import SiteFooter from '@/app/components/ui/SiteFooter';

export default function CartLayout({ children }) {
  return (
    <>
      {children}
      <SiteFooter />
    </>
  );
}
