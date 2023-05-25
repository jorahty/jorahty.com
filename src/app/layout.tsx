export const metadata = {
  title: 'James Tennant',
}

type Props = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
