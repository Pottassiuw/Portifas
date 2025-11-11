import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Portfolio | Desenvolvedor Full Stack',
	description: 'Portfolio de um desenvolvedor especializado em tecnologias modernas',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-BR">
			<body className="bg-dark-500 text-white font-tech antialiased">
				{children}
			</body>
		</html>
	)
}
