import SiteFooter from '@/components/ui/SiteFooter';

export default function ProductsLayout({ children }) {
  return (
    <>
      {children}
      <SiteFooter />
    </>
  );
}
