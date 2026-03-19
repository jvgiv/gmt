import SiteFooter from '@/components/ui/SiteFooter';

export default function CartLayout({ children }) {
  return (
    <>
      {children}
      <SiteFooter />
    </>
  );
}
