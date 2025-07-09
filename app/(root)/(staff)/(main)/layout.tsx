import Header from '@/app/components/app-header';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <div>
          <Header />
          <main className="pt-[100px] px-5 lg:px-10">{children}</main>
      </div>
  )
}
