'use client'

import { useState, useEffect } from 'react'
import { Code2, Database, Globe, Server, Terminal, User, Mail, Github, Linkedin, Download, ChevronDown, Monitor, Settings, Command, BookOpen, Award, FileText, GraduationCap, Briefcase, Target, ExternalLink } from 'lucide-react'

export default function HomePage() {
	const [currentTech, setCurrentTech] = useState(0)
	const technologies = [
		'TypeScript', 'Next.js', 'React', 'Node.js',
		'Python', 'PostgreSQL', 'MySql', 'React Native', 'Linux',
	]
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTech((prev) => (prev + 1) % technologies.length)
		}, 2000)
		return () => clearInterval(interval)
	}, [])

	return (
		<div className="min-h-screen bg-dark-500 text-white font-tech">
			{/* Navigation */}
			<nav className="fixed top-0 w-full z-50 bg-dark-400/80 backdrop-blur-md border-b border-primary-800/20">
				<div className="max-w-6xl mx-auto px-6 py-4">
					<div className="flex justify-between items-center">
						<div className="font-mono font-bold text-xl text-primary-500">
							&lt;TBFN.portfolio /&gt;
						</div>
						<div className="flex space-x-6">
							<a href="#about" className="hover:text-primary-500 transition-colors">Introdução</a>
							<a href="#curriculum" className="hover:text-primary-500 transition-colors">Currículo</a>
							<a href="#projects" className="hover:text-primary-500 transition-colors">Projetos</a>
							<a href="#skills" className="hover:text-primary-500 transition-colors">Habilidades</a>
							<a href="#documents" className="hover:text-primary-500 transition-colors">Documentos</a>
							<a href="#certifications" className="hover:text-primary-500 transition-colors">Certificações</a>
							<a href="#contact" className="hover:text-primary-500 transition-colors">Contato</a>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-500">
				<div className="tech-grid absolute inset-0 opacity-20"></div>

				<div className="max-w-6xl mx-auto px-6 text-center relative z-10">
					<div className="mb-8">
						<div className="inline-flex p-4 bg-dark-400 mb-6 shadow-lg animate-fadeInDown transition-all">
							<Terminal className="w-12 h-12 text-primary-500" />
						</div>

						<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fadeInUp">
							<span className="text-white">Thiago Nascimento</span>
							<br />
							<span className="text-primary-500">Desenvolvedor <strong className="text-cyan-500">Full Stack</strong></span>
						</h1>

						<p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeIn">
							Desenvolvedor Full Stack formado em Desenvolvimento de Sistemas, apaixonado por criar soluções tecnológicas.
							Curioso sobre <span className="text-primary-500 font-semibold"> Sistemas Operacionais</span>,
							<span className="text-cyan-500 font-semibold"> Cybersegurança</span> e
							<span className="text-green-500 font-semibold"> Desenvolvimento Backend</span>.
						</p>

						<div className="mb-8">
							<p className="text-lg text-zinc-400 mb-4">Especializado em:</p>
							<div className="font-mono text-2xl text-primary-500 h-8 flex items-center justify-center">
								{technologies[currentTech]}
								<span className="cursor-blink">_</span>
							</div>
						</div>

						<div className="flex flex-col md:flex-row justify-center gap-4 animate-slideInLeft">
							<a
								href="#projects"
								className="bg-primary-500 hover:bg-primary-600 px-8 py-3 font-medium transition-all inline-flex items-center justify-center hover:shadow-lg"
							>
								Ver Projetos
							</a>
							<a
								href="#"
								className="border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-3 font-medium transition-all inline-flex items-center justify-center"
							>
								<Download className="w-4 h-4 mr-2" />
								Baixar CV
							</a>
						</div>
					</div>
				</div>

				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
					<ChevronDown className="w-6 h-6 text-primary-500" />
				</div>
			</section>

			{/* About Section - Introdução */}
			<section id="about" className="py-20 bg-gradient-to-br from-dark-200 via-dark-300 to-dark-200 relative">
				<div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-cyan-500/5"></div>
				<div className="max-w-6xl mx-auto px-6 relative z-10">
					<h2 className="text-4xl font-bold text-center mb-16 text-primary-500 animate-fadeInDown">
						<span className="relative">
							Sobre Mim
							<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-500 to-cyan-500"></div>
						</span>
					</h2>
					<div className="max-w-5xl mx-auto">
						<div className="bg-dark-100/90 backdrop-blur-sm p-10 mb-12 border border-primary-500/30 transition-all animate-fadeIn">
							<div className="flex items-center justify-center mb-8">
								<div className="bg-primary-500/20 p-4 rounded-lg mr-6">
									<Target className="w-12 h-12 text-primary-500" />
								</div>
								<h3 className="text-3xl font-bold text-primary-500">Objetivo</h3>
							</div>
							<div className="relative">
								<div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary-500 to-cyan-500"></div>
								<p className="text-xl text-zinc-300 leading-relaxed pl-8 italic">
									"Olá! Sou Thiago, desenvolvedor formado em Desenvolvimento de Sistemas. Tenho um interesse fora de série por
									<span className="text-primary-500 font-semibold"> desenvolvimento de software</span> e sou curioso sobre
									<span className="text-cyan-500 font-semibold"> sistemas operacionais</span> e
									<span className="text-green-500 font-semibold"> cybersegurança</span>."
								</p>
							</div>
						</div>
						<div className="grid md:grid-cols-3 gap-6 text-zinc-300">
							<div className="bg-dark-100 p-6 hover:bg-dark-300 transition-all hover-lift animate-fadeInUp">
								<GraduationCap className="w-8 h-8 text-primary-500 mx-auto mb-4" />
								<h4 className="text-xl font-semibold mb-2">Formação</h4>
								<p>Técnico em Desenvolvimento de Sistemas (2023-2024)</p>
							</div>
							<div className="bg-dark-100 p-6 hover:bg-dark-300 transition-all hover-lift animate-fadeInUp">
								<Briefcase className="w-8 h-8 text-primary-500 mx-auto mb-4" />
								<h4 className="text-xl font-semibold mb-2">Foco</h4>
								<p>Desenvolvedor Full Stack em busca de primeira oportunidade profissional</p>
							</div>
							<div className="bg-dark-100 p-6 hover:bg-dark-300 transition-all hover-lift animate-fadeInUp">
								<Terminal className="w-8 h-8 text-primary-500 mx-auto mb-4" />
								<h4 className="text-xl font-semibold mb-2">Paixões</h4>
								<p>Linux, Cybersegurança e Sistemas Operacionais</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Curriculum Section */}
			<section id="curriculum" className="py-20 bg-dark-500 relative overflow-hidden">
				<div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-500/10 to-transparent rounded-full blur-3xl"></div>
				<div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
				<div className="max-w-6xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold mb-4 text-primary-500 animate-fadeInDown">
							<span className="relative inline-block">
								Currículo
								<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary-500 to-cyan-500"></div>
							</span>
						</h2>
						<p className="text-zinc-400 text-lg animate-fadeIn">Minha jornada acadêmica e técnica</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{/* Formação Acadêmica */}
						<div className="bg-dark-200 p-6">
							<div className="flex items-center mb-6">
								<GraduationCap className="w-8 h-8 text-primary-500 mr-4" />
								<h3 className="text-2xl font-bold">Formação Acadêmica</h3>
							</div>
							<div className="space-y-4">
								<div className="border-l-4 border-primary-500 pl-4">
									<h4 className="text-lg font-semibold text-primary-400">
										Técnico em Desenvolvimento de Sistemas
									</h4>
									<p className="text-zinc-300">ETEC - Ensino Técnico Modular</p>
									<p className="text-sm text-zinc-400">2023-2024 • Concluído</p>
								</div>
								<div className="border-l-4 border-red-500 pl-4">
									<h4 className="text-lg font-semibold text-red-400">
										Analista de Sistemas
									</h4>
									<p className="text-zinc-300">FATEC - Ensino Superior</p>
									<p className="text-sm text-zinc-400">2025-202X • Em andamento</p>
								</div>
								<div className="border-l-4 border-cyan-500 pl-4">
									<h4 className="text-lg font-semibold text-cyan-400">
										Ensino Médio Completo
									</h4>
									<p className="text-zinc-300">Ensino Médio - E.E Prof Francisco Lopes de Azevedo</p>
									<p className="text-sm text-zinc-400">2021-2024 • Concluído</p>
								</div>
							</div>
						</div>

						{/* Certificados */}
						<div className="bg-dark-200 p-6">
							<div className="flex items-center mb-6">
								<Award className="w-8 h-8 text-primary-500 mr-4" />
								<h3 className="text-2xl font-bold">Certificados</h3>
							</div>
							<div className="space-y-4">
								<div className="border-l-4 border-green-500 pl-4">
									<h4 className="text-lg font-semibold text-green-400">
										Cisco IT Essentials
									</h4>
									<p className="text-zinc-300">Cisco Networking Academy</p>
									<p className="text-sm text-zinc-400">2025 • 70 horas</p>
								</div>
								<div className="border-l-4 border-blue-500 pl-4">
									<h4 className="text-lg font-semibold text-blue-400">
										Curso Técnico em Desenvolvimento de Sistemas
									</h4>
									<p className="text-zinc-300">ETEC - Centro Paula Souza</p>
									<p className="text-sm text-zinc-400">2024 • 1200 horas</p>
								</div>
								<div className="border-l-4 border-purple-500 pl-4">
									<h4 className="text-lg font-semibold text-purple-400">
										Linux & Open Source (Autodidata)
									</h4>
									<p className="text-zinc-300">Estudos independentes e prática</p>
									<p className="text-sm text-zinc-400">2022-presente</p>
								</div>
							</div>
						</div>

						{/* Competências Técnicas */}
						<div className="bg-dark-200 p-6 md:col-span-2">
							<div className="flex items-center mb-6">
								<Code2 className="w-8 h-8 text-primary-500 mr-4" />
								<h3 className="text-2xl font-bold">Competências Técnicas</h3>
							</div>
							<div className="grid md:grid-cols-4 gap-6">
								<div>
									<h4 className="text-lg font-semibold text-primary-400 mb-3">Linguagens</h4>
									<ul className="space-y-1 text-zinc-300">
										<li>TypeScript</li>
										<li>JavaScript</li>
										<li>Python</li>
										<li>SQL</li>
										<li>HTML & CSS</li>
									</ul>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-cyan-400 mb-3">Frameworks</h4>
									<ul className="space-y-1 text-zinc-300">
										<li>Next.js</li>
										<li>React</li>
										<li>Node.js</li>
										<li>Express</li>
										<li>Flask</li>
									</ul>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-green-400 mb-3">Ferramentas</h4>
									<ul className="space-y-1 text-zinc-300">
										<li>Git & GitHub</li>
										<li>Docker</li>
										<li>MySQL</li>
										<li>PostgreSQL</li>
										<li>AWS</li>
									</ul>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-purple-400 mb-3">Sistemas</h4>
									<ul className="space-y-1 text-zinc-300">
										<li>Linux (CachyOS)</li>
										<li>Ubuntu/Mint</li>
										<li>Arch/Fedora</li>
										<li>Shell Scripting</li>
										<li>System Admin</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section id="projects" className="py-20 bg-gradient-to-b from-dark-200 to-dark-300 relative">
				<div className="absolute inset-0">
					<div className="absolute top-20 left-10 w-2 h-32 bg-gradient-to-b from-primary-500 to-transparent"></div>
					<div className="absolute bottom-20 right-10 w-2 h-40 bg-gradient-to-t from-cyan-500 to-transparent"></div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
				</div>
				<div className="max-w-6xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<div className="inline-flex items-center gap-3 mb-4">
							<div className="w-8 h-1 bg-gradient-to-r from-primary-500 to-cyan-500"></div>
							<h2 className="text-4xl font-bold text-primary-500 animate-fadeInDown">Principais Projetos</h2>
							<div className="w-8 h-1 bg-gradient-to-l from-primary-500 to-cyan-500"></div>
						</div>
						<p className="text-zinc-400 text-lg animate-fadeIn">Soluções que desenvolvi e nas quais colaborei</p>
					</div>

					<div className="space-y-8">
						{/* Projeto Principal */}
						<div className="bg-dark-100 p-8 hover:bg-dark-300 transition-all hover-lift animate-fadeInUp">
							<div className="flex items-start justify-between mb-6">
								<div>
									<h3 className="text-2xl font-bold text-primary-500 mb-2">
										Aplicativo de Notificações ETEC
									</h3>
									<p className="text-zinc-400"> Hackathon • 2023</p>
								</div>
								<div className="flex space-x-3">
									<div className="bg-yellow-500 text-black px-3 py-1 text-sm font-bold rounded">
										HACKATHON
									</div>
								</div>
							</div>

							<p className="text-zinc-300 mb-6 leading-relaxed">
								Desenvolvemos um aplicativo mobile de notificações para estudantes da ETEC durante o hackathon. O app centraliza informações importantes como horários e comunicados.
							</p>

							<div className="grid md:grid-cols-2 gap-6 mb-6">
								<div>
									<h4 className="text-lg font-semibold text-primary-400 mb-3">Tecnologias Utilizadas</h4>
									<div className="flex flex-wrap gap-2">
										<span className="bg-blue-600 text-white px-3 py-1 text-sm">React Native</span>
										<span className="bg-green-600 text-white px-3 py-1 text-sm">PHP My Admin</span>
										<span className="bg-gray-600 text-white px-3 py-1 text-sm">Expo</span>
									</div>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-cyan-400 mb-3">Funcionalidades</h4>
									<ul className="space-y-1 text-zinc-300 text-sm">
										<li>• Push notifications</li>
										<li>• Comunicados oficiais</li>
										<li>• Interface intuitiva</li>
									</ul>
								</div>
							</div>

							<div className="bg-dark-500 p-4 border-l-4 border-yellow-500">
								<h4 className="text-lg font-semibold text-yellow-400 mb-2">Desafio do Evento</h4>
								<p className="text-zinc-300 mb-3">
									Criar uma solução inovadora em 48 horas para melhorar a comunicação entre escola e alunos.
								</p>
								<h4 className="text-lg font-semibold text-green-400 mb-2">Nossa Abordagem</h4>
								<p className="text-zinc-300">
									Focamos na experiência do usuário e na praticidade, criando um app que centraliza todas as informações
									importantes da vida acadêmica em uma interface simples e eficiente.
								</p>
							</div>
						</div>

						{/* Projetos Secundários */}
						<div className="grid md:grid-cols-2 gap-6">
							<div className="bg-dark-100 p-6 hover:bg-dark-300 transition-all hover-lift animate-slideInLeft">
								<h3 className="text-xl font-bold text-primary-500 mb-3">Portfolio Pessoal</h3>
								<p className="text-zinc-300 mb-4">
									Site pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS,
									com design moderno e responsivo. Este próprio portfólio!
								</p>
								<div className="flex space-x-2 mb-4">
									<span className="bg-black text-white px-2 py-1 text-xs">Next.js</span>
									<span className="bg-blue-600 text-white px-2 py-1 text-xs">TypeScript</span>
									<span className="bg-cyan-500 text-white px-2 py-1 text-xs">Tailwind</span>
								</div>
								<a href="#" className="text-primary-500 hover:text-primary-400 transition-colors text-sm">
									Ver no GitHub →
								</a>
							</div>

							<div className="bg-dark-100 p-6 hover:bg-dark-300 transition-all hover-lift animate-slideInRight">
								<h3 className="text-xl font-bold text-primary-500 mb-3">Configurações Linux (Dotfiles)</h3>
								<p className="text-zinc-300 mb-4">
									Minhas configurações personalizadas do CachyOS e outros sistemas Linux,
									incluindo temas, atalhos e customizações de produtividade.
								</p>
								<div className="flex space-x-2 mb-4">
									<span className="bg-orange-600 text-white px-2 py-1 text-xs">Shell</span>
									<span className="bg-purple-600 text-white px-2 py-1 text-xs">Hyprland</span>
									<span className="bg-red-600 text-white px-2 py-1 text-xs">Ricing</span>
								</div>
								<a href="#" className="text-primary-500 hover:text-primary-400 transition-colors text-sm">
									Ver no GitHub →
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Documents Section */}
			<section id="documents" className="py-20 bg-dark-500 relative">
				<div className="absolute inset-0 bg-gradient-to-br from-dark-400 via-dark-500 to-dark-400"></div>
				<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-500/10 to-transparent"></div>
				<div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-green-500/10 to-transparent rounded-full blur-2xl"></div>
				
				<div className="max-w-6xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<div className="inline-flex items-center justify-center mb-6 animate-fadeInDown">
							<div className="bg-primary-500/20 p-3 rounded-lg mr-4">
								<FileText className="w-8 h-8 text-primary-500" />
							</div>
							<h2 className="text-4xl font-bold text-primary-500">
								Trabalhos Acadêmicos
							</h2>
						</div>
						<p className="text-zinc-400 text-lg animate-fadeIn">Projetos e pesquisas desenvolvidos durante minha formação</p>
					</div>

					<div className="space-y-8">
						{/* Trabalho Principal */}
						<div className="bg-dark-200 p-8">
							<div className="flex items-start justify-between mb-6">
								<div>
									<h3 className="text-2xl font-bold text-primary-500 mb-2">
										Sistema Web - Metodologias Ágeis (Scrum)
									</h3>
									<div className="flex gap-3 items-center">
										<p className="text-zinc-400">Projeto Acadêmico - Curso Técnico • 2024</p>
										<a href="https://github.com/LucaSuzuki/FATEC-API-2025" target="_blank"><Github className="w-6 h-6 text-primary-800" />
										</a>
									</div>
								</div>
								<div className="flex items-center space-x-3">
									<p>Atuação</p>
									<div className="bg-green-500 text-black px-3 py-1 text-sm font-bold rounded">
										Product Owner
									</div>
									<FileText className="w-8 h-8 text-primary-500" />
								</div>
							</div>

							<h4 className="text-xl font-semibold text-primary mb-4">
								<span className='text-red-400'>FatecOs</span> - Sistema Web Educacional para Metodologia Ágil Scrum
							</h4>

							<p className="text-zinc-300 mb-6 leading-relaxed">
								Desenvolvemos um sistema web completo que demonstra todos os processos e artefatos da metodologia ágil Scrum.
								O projeto foi criado para fins educacionais, contendo conceitos fundamentais com referências acadêmicas
								e exemplos práticos para facilitar a compreensão dos usuários sobre práticas ágeis.
							</p>

							<div className="grid md:grid-cols-2 gap-6 mb-6">
								<div>
									<h4 className="text-lg font-semibold text-primary-400 mb-3">Tecnologias Utilizadas</h4>
									<div className="flex flex-wrap gap-2">
										<span className="bg-green-600 text-white px-3 py-1 text-sm">Flask</span>
										<span className="bg-yellow-500 text-black px-3 py-1 text-sm">JavaScript</span>
										<span className="bg-blue-600 text-white px-3 py-1 text-sm">Python</span>
										<span className="bg-orange-500 text-white px-3 py-1 text-sm">HTML/CSS</span>
										<span className="bg-red-600 text-white px-3 py-1 text-sm">Bootstrap</span>
									</div>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-green-400 mb-3">Funcionalidades do Sistema</h4>
									<ul className="space-y-1 text-zinc-300 text-sm">
										<li>• Explicação completa dos processos Scrum</li>
										<li>• Exemplos práticos de artefatos</li>
										<li>• Interface interativa e educativa</li>
										<li>• Referências acadêmicas integradas</li>
										<li>• Casos de uso demonstrativos</li>
									</ul>
								</div>
							</div>

							<div className="bg-dark-100 p-6 border-l-4 border-green-500 mb-6">
								<h4 className="text-lg font-semibold text-green-400 mb-3">Minha Atuação como Product Owner (P.O)</h4>
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<h5 className="font-semibold text-cyan-400 mb-2">Responsabilidades Exercidas</h5>
										<ul className="space-y-1 text-zinc-300 text-sm">
											<li>• Gestão do Product Backlog</li>
											<li>• Criação e refinamento do Sprint Backlog</li>
											<li>• Definição de DoD (Definition of Done)</li>
											<li>• Elaboração de DoR (Definition of Ready)</li>
											<li>• Priorização de funcionalidades</li>
										</ul>
									</div>
									<div>
										<h5 className="font-semibold text-purple-400 mb-2">Aprendizados Práticos</h5>
										<ul className="space-y-1 text-zinc-300 text-sm">
											<li>• Planejamento de sprints eficazes</li>
											<li>• Gestão de expectativas e escopo</li>
											<li>• Resolução de impedimentos</li>
											<li>• Validação de entregas</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="bg-dark-500 p-4 border-l-4 border-yellow-500">
								<h4 className="text-lg font-semibold text-yellow-400 mb-2">Desafio Principal</h4>
								<p className="text-zinc-300 mb-3">
									Balancear conteúdo teórico academicamente rigoroso com uma interface web intuitiva e interativa
									que facilitasse o aprendizado prático da metodologia Scrum.
								</p>
								<h4 className="text-lg font-semibold text-green-400 mb-2">Solução Implementada</h4>
								<p className="text-zinc-300">
									Utilizamos Flask para criar uma estrutura modular que separava teoria e prática, permitindo navegação
									fluida entre conceitos fundamentais e exemplos aplicados. Como P.O, garanti que cada sprint
									entregasse valor educacional mensurável.
								</p>
							</div>
						</div>

						{/* Outros Trabalhos */}
						<div className="grid md:grid-cols-2 gap-6">
							<div className="bg-dark-200 p-6">
								<div className="flex items-center mb-4">
									<BookOpen className="w-6 h-6 text-primary-500 mr-3" />
									<h3 className="text-xl font-bold">Relatórios Técnicos</h3>
								</div>
								<div className="space-y-4">
									<div className="border-l-4 border-blue-500 pl-4">
										<h4 className="font-semibold text-blue-400">Análise de Performance em Sistemas Linux</h4>
										<p className="text-sm text-zinc-400">2024 • Estudo comparativo</p>
										<p className="text-zinc-300 text-sm mt-1">
											Análise detalhada de performance entre diferentes distribuições Linux
											em ambientes de desenvolvimento.
										</p>
									</div>
									<div className="border-l-4 border-purple-500 pl-4">
										<h4 className="font-semibold text-purple-400">Implementação de APIs RESTful</h4>
										<p className="text-sm text-zinc-400">2024 • Documentação técnica</p>
										<p className="text-zinc-300 text-sm mt-1">
											Guia completo sobre boas práticas na criação de APIs escaláveis
											e seguras com Node.js.
										</p>
									</div>
								</div>
							</div>

							<div className="bg-dark-200 p-6">
								<div className="flex items-center mb-4">
									<Terminal className="w-6 h-6 text-primary-500 mr-3" />
									<h3 className="text-xl font-bold">Projetos de Pesquisa</h3>
								</div>
								<div className="space-y-4">
									<div className="border-l-4 border-cyan-500 pl-4">
										<h4 className="font-semibold text-cyan-400">Estudos em Cybersegurança</h4>
										<p className="text-sm text-zinc-400">2024 • Estudos independentes</p>
										<p className="text-zinc-300 text-sm mt-1">
											Pesquisa sobre segurança de redes, penetration testing e
											vulnerabilidades em sistemas operacionais.
										</p>
									</div>
									<div className="border-l-4 border-yellow-500 pl-4">
										<h4 className="font-semibold text-yellow-400">Análise de Sistemas Operacionais</h4>
										<p className="text-sm text-zinc-400">2024 • Projeto pessoal</p>
										<p className="text-zinc-300 text-sm mt-1">
											Comparativo detalhado entre diferentes distros Linux,
											focando em performance e customização.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Certifications Section */}
			<section id="certifications" className="py-20 bg-gradient-to-br from-dark-200 via-dark-100 to-dark-200 relative overflow-hidden">
				<div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-yellow-500/10 to-transparent rounded-full blur-2xl"></div>
				<div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-2xl"></div>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
				
				<div className="max-w-6xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<div className="inline-flex items-center justify-center mb-6 animate-fadeInDown">
							<div className="bg-primary-500/20 p-4 rounded-lg mr-4">
								<Award className="w-10 h-10 text-primary-500" />
							</div>
							<h2 className="text-4xl font-bold text-primary-500">
								Certificações
							</h2>
						</div>
						<p className="text-zinc-400 text-lg animate-fadeIn">Conquistas e validações técnicas</p>
						<div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-blue-500 mx-auto mt-4"></div>
					</div>

					<div className="space-y-8">
						{/* Certificações Principais */}
						<div className="grid md:grid-cols-2 gap-8">
							<div className="bg-dark-100 p-8 hover:bg-dark-300 transition-colors">
								<div className="flex items-center justify-between mb-6">
									<Award className="w-12 h-12 text-green-500" />
									<span className="text-sm text-zinc-400">2025</span>
								</div>
								<h3 className="text-xl font-bold text-green-400 mb-3">
									Cisco IT Essentials
								</h3>
								<p className="text-zinc-300 mb-4">
									<strong>Emitido pela:</strong> Cisco Networking Academy<br />
									<strong>Carga Horária:</strong> 70 horas<br />
									<strong>Status:</strong> Em andamento
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									<span className="bg-blue-600 text-white px-2 py-1 text-xs">Hardware</span>
									<span className="bg-orange-600 text-white px-2 py-1 text-xs">Networking</span>
									<span className="bg-purple-600 text-white px-2 py-1 text-xs">IT Support</span>
									<span className="bg-green-600 text-white px-2 py-1 text-xs">Troubleshooting</span>
								</div>
								<div className="text-green-400 text-sm">
									🔄 Certificação em andamento
								</div>
							</div>

							<div className="bg-dark-100 p-8 hover:bg-dark-300 transition-colors">
								<div className="flex items-center justify-between mb-6">
									<Award className="w-12 h-12 text-blue-500" />
									<span className="text-sm text-zinc-400">2024</span>
								</div>
								<h3 className="text-xl font-bold text-blue-400 mb-3">
									Técnico em Desenvolvimento de Sistemas
								</h3>
								<p className="text-zinc-300 mb-4">
									<strong>Emitido pela:</strong> Centro Paula Souza (ETEC)<br />
									<strong>Carga Horária:</strong> 1200 horas<br />
									<strong>Status:</strong> Concluído com êxito
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									<span className="bg-yellow-500 text-black px-2 py-1 text-xs">Programação</span>
									<span className="bg-blue-600 text-white px-2 py-1 text-xs">Banco de Dados</span>
									<span className="bg-green-600 text-white px-2 py-1 text-xs">Web Development</span>
									<span className="bg-gray-600 text-white px-2 py-1 text-xs">Análise de Sistemas</span>
								</div>
								<div className="text-blue-400 text-sm">
									✅ Formação técnica completa
								</div>
							</div>
						</div>

						{/* Certificações de Eventos */}
						<div className="bg-dark-100 p-8">
							<div className="flex items-center mb-6">
								<Award className="w-10 h-10 text-yellow-500 mr-4" />
								<h3 className="text-2xl font-bold text-yellow-500">Participação em Eventos</h3>
							</div>

							<div className="space-y-6">
								<div className="bg-dark-500 p-6 border-l-4 border-yellow-500">
									<div className="flex items-start justify-between mb-4">
										<div>
											<h4 className="text-xl font-bold text-yellow-400">
												Innovation Week - PIT
											</h4>
											<p className="text-zinc-400">São José dos Campos (PIT) • 2023</p>
										</div>
										<div className="text-right">
											<span className="bg-yellow-500 text-black px-3 py-1 text-sm font-bold">
												PARTICIPAÇÃO
											</span>
											<p className="text-xs text-zinc-400 mt-1">Desenvolvimento Mobile</p>
										</div>
									</div>
									<p className="text-zinc-300">
										Participação da Innovation Week em São José dos Campos.
										A
										Innovation Week SJC é um importante evento anual de tecnologia e empreendedorismo realizado no Parque de Inovação Tecnológica de São José dos Campos.
										Seu objetivo é: </p>
									<p className="text-zinc-300 mb-4">
										Conectar startups, investidores, empresas e pesquisadores.
										Discutir tendências e novidades do setor.
										Gerar negócios e fortalecer o ecossistema de inovação da região.

										O evento geralmente inclui palestras, painéis e uma feira de exposições. Para mais detalhes, consulte o site oficial da Innovation Week SJC.
									</p>
									<div className="flex space-x-2">
										<span className="bg-blue-600 text-white px-2 py-1 text-xs">Networking</span>
										<span className="bg-green-600 text-white px-2 py-1 text-xs">Startups</span>
										<span className="bg-purple-600 text-white px-2 py-1 text-xs">Science & Innovation</span>
									</div>
								</div>

								<div className="grid md:grid-cols-2 gap-6">
									<div className="bg-dark-300 p-6 border-l-4 border-green-500">
										<h4 className="font-semibold text-green-400 mb-2">Eventos Futuros</h4>
										<p className="text-sm text-zinc-400 mb-3">Interesse em participar</p>
										<ul className="space-y-1 text-xs text-zinc-300">
											<li>• Campus Party São Paulo</li>
											<li>• DevFest Brazil</li>
											<li>• Python Brasil</li>
											<li>• Hackathons locais</li>
										</ul>
									</div>
									<div className="bg-dark-300 p-6 border-l-4 border-blue-500">
										<h4 className="font-semibold text-blue-400 mb-2">Networking Ativo</h4>
										<p className="text-sm text-zinc-400 mb-3">Comunidades e grupos</p>
										<ul className="space-y-1 text-xs text-zinc-300">
											<li>• Grupos Linux locais</li>
											<li>• Meetups de desenvolvimento</li>
											<li>• Comunidades Discord/Telegram</li>
											<li>• Fóruns de cybersegurança</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section id="skills" className="py-20 bg-dark-500 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-tr from-dark-400 via-dark-500 to-dark-400"></div>
				<div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-green-500/10 to-transparent rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-2 bg-gradient-to-r from-purple-500/20 via-primary-500/20 to-green-500/20 blur-xl"></div>
				
				<div className="max-w-6xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<div className="inline-flex flex-col items-center animate-fadeInDown">
							<div className="flex items-center gap-4 mb-4">
								<div className="w-12 h-1 bg-primary-500/50"></div>
								<div className="bg-primary-500/20 p-3 rounded-lg">
									<User className="w-8 h-8 text-primary-500" />
								</div>
								<div className="w-12 h-1 bg-primary-500/50"></div>
							</div>
							<h2 className="text-4xl font-bold mb-4 text-primary-500">
								Habilidades & Competências
							</h2>
							<p className="text-zinc-400 text-lg animate-fadeIn">Skills técnicas e comportamentais</p>
						</div>
					</div>

					{/* Soft Skills */}
					<div className="grid md:grid-cols-2 gap-8 mb-12">
						<div className="bg-dark-200 p-8">
							<div className="flex items-center mb-6">
								<User className="w-10 h-10 text-primary-500 mr-4" />
								<h3 className="text-2xl font-bold">Soft Skills</h3>
							</div>
							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<h4 className="text-lg font-semibold text-primary-400 mb-3">Comunicação</h4>
									<ul className="space-y-2 text-zinc-300">
										<li>• Apresentações técnicas</li>
										<li>• Documentação clara</li>
										<li>• Trabalho em equipe</li>
										<li>• Feedback construtivo</li>
									</ul>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-cyan-400 mb-3">Liderança</h4>
									<ul className="space-y-2 text-zinc-300">
										<li>• Gestão de projetos</li>
										<li>• Mentoria técnica</li>
										<li>• Tomada de decisões</li>
										<li>• Resolução de conflitos</li>
									</ul>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-green-400 mb-3">Adaptabilidade</h4>
									<ul className="space-y-2 text-zinc-300">
										<li>• Aprendizado contínuo</li>
										<li>• Novas tecnologias</li>
										<li>• Mudanças de escopo</li>
										<li>• Ambientes diversos</li>
									</ul>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-purple-400 mb-3">Analítico</h4>
									<ul className="space-y-2 text-zinc-300">
										<li>• Pensamento crítico</li>
										<li>• Resolução de problemas</li>
										<li>• Debugging complexo</li>
										<li>• Otimização de sistemas</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="bg-dark-200 p-8">
							<div className="flex items-center mb-6">
								<Code2 className="w-10 h-10 text-primary-500 mr-4" />
								<h3 className="text-2xl font-bold">Competências Técnicas</h3>
							</div>
							<div className="space-y-6">
								<div>
									<h4 className="text-lg font-semibold text-primary-400 mb-3">Desenvolvimento</h4>
									<div className="flex flex-wrap gap-2">
										<span className="bg-blue-600 text-white px-3 py-1 text-sm">Full Stack</span>
										<span className="bg-green-600 text-white px-3 py-1 text-sm">APIs RESTful</span>
										<span className="bg-purple-600 text-white px-3 py-1 text-sm">Microservices</span>
										<span className="bg-yellow-500 text-black px-3 py-1 text-sm">Testing</span>
									</div>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-cyan-400 mb-3">Cybersegurança</h4>
									<div className="flex flex-wrap gap-2">
										<span className="bg-orange-600 text-white px-3 py-1 text-sm">Network Security</span>
										<span className="bg-red-600 text-white px-3 py-1 text-sm">Penetration Testing</span>
										<span className="bg-green-500 text-white px-3 py-1 text-sm">Vulnerability Assessment</span>
										<span className="bg-blue-500 text-white px-3 py-1 text-sm">Security Research</span>
									</div>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-green-400 mb-3">DevOps & Infraestrutura</h4>
									<div className="flex flex-wrap gap-2">
										<span className="bg-gray-600 text-white px-3 py-1 text-sm">Docker</span>
										<span className="bg-orange-500 text-white px-3 py-1 text-sm">AWS</span>
										<span className="bg-blue-600 text-white px-3 py-1 text-sm">CI/CD</span>
										<span className="bg-red-600 text-white px-3 py-1 text-sm">Monitoring</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Técnical Skills Grid */}
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-dark-200 p-6 hover:bg-dark-100 transition-colors">
							<Globe className="w-10 h-10 text-primary-500 mb-4" />
							<h3 className="text-xl font-semibold mb-4">Frontend</h3>
							<ul className="space-y-2 text-zinc-300">
								<li>TypeScript / JavaScript</li>
								<li>React / Next.js</li>
								<li>Tailwind CSS</li>
								<li>HTML5 / CSS3</li>
							</ul>
						</div>

						<div className="bg-dark-200 p-6 hover:bg-dark-100 transition-colors">
							<Server className="w-10 h-10 text-primary-500 mb-4" />
							<h3 className="text-xl font-semibold mb-4">Backend</h3>
							<ul className="space-y-2 text-zinc-300">
								<li>Node.js / Express</li>
								<li>Python / Django</li>
								<li>REST APIs</li>
								<li>Authentication</li>
							</ul>
						</div>

						<div className="bg-dark-200 p-6 hover:bg-dark-100 transition-colors">
							<Database className="w-10 h-10 text-primary-500 mb-4" />
							<h3 className="text-xl font-semibold mb-4">Database & DevOps</h3>
							<ul className="space-y-2 text-zinc-300">
								<li>PostgreSQL / MySQL</li>
								<li>Docker / Git</li>
								<li>AWS / Vercel</li>
								<li>CI/CD Pipelines</li>
							</ul>
						</div>
					</div>

					{/* Linux Expertise Section */}
					<div className="mt-12">
						<div className="bg-dark-300 p-6 border-l-4 border-primary-500">
							<div className="flex items-center mb-6">
								<Terminal className="w-12 h-12 text-primary-500 mr-4" />
								<div>
									<h3 className="text-2xl font-bold text-primary-500">Linux Enthusiast</h3>
									<p className="text-zinc-400">Apaixonado por ricing e customização</p>
								</div>
							</div>

							<div className="grid md:grid-cols-3 gap-6">
								<div>
									<div className="flex items-center mb-3">
										<Monitor className="w-5 h-5 text-primary-400 mr-2" />
										<h4 className="text-lg font-semibold text-primary-400">Distros</h4>
									</div>
									<ul className="space-y-1 text-zinc-300 text-sm">
										<li><span className="text-primary-400 font-medium">CachyOS</span> (atual)</li>
										<li>Arch / EndeavourOS</li>
										<li>Ubuntu / Mint</li>
										<li>Fedora / Zorin</li>
										<li>Kali Linux</li>
									</ul>
								</div>

								<div>
									<div className="flex items-center mb-3">
										<Settings className="w-5 h-5 text-primary-400 mr-2" />
										<h4 className="text-lg font-semibold text-primary-400">Ricing</h4>
									</div>
									<ul className="space-y-1 text-zinc-300 text-sm">
										<li>Window Managers (Hyprland, Niri)</li>
										<li>Shell customization</li>
										<li>Dotfiles management</li>
										<li>Theming & Icons</li>
										<li>Status bars</li>
									</ul>
								</div>

								<div>
									<div className="flex items-center mb-3">
										<Command className="w-5 h-5 text-primary-400 mr-2" />
										<h4 className="text-lg font-semibold text-primary-400">Terminal</h4>
									</div>
									<ul className="space-y-1 text-zinc-300 text-sm">
										<li>System administration</li>
										<li>Package management</li>
										<li>Service configuration</li>
										<li>Performance tuning</li>
										<li>Scripting & automation</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-20 bg-gradient-to-br from-dark-200 via-dark-300 to-dark-200 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-tr from-primary-500/5 via-transparent to-cyan-500/5"></div>
				<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-b from-primary-500/10 to-transparent blur-xl"></div>
				<div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-green-500/10 to-transparent rounded-full blur-2xl"></div>
				<div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-2xl"></div>
				
				<div className="max-w-6xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<div className="inline-flex flex-col items-center animate-fadeInDown">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-8 h-1 bg-primary-500/50"></div>
								<div className="bg-primary-500/20 p-4 rounded-lg">
									<Mail className="w-8 h-8 text-primary-500" />
								</div>
								<div className="w-8 h-1 bg-primary-500/50"></div>
							</div>
							<h2 className="text-4xl font-bold mb-4 text-primary-500">
								Vamos Conversar?
							</h2>
							<p className="text-zinc-400 text-lg animate-fadeIn">Entre em contato e vamos construir algo incrível juntos</p>
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-12">
						{/* Informações de Contato */}
						<div className="space-y-8">
							<div className="bg-dark-100 p-8">
								<h3 className="text-2xl font-bold mb-6 text-primary-500">Vamos Conversar!</h3>
								<p className="text-xl text-zinc-300 mb-6 leading-relaxed">
									Estou sempre aberto a novas oportunidades, projetos interessantes e
									colaborações. Entre em contato comigo pelos canais abaixo!
								</p>

								<div className="space-y-4">
									<div className="flex items-center space-x-4">
										<Mail className="w-6 h-6 text-primary-500" />
										<div>
											<h4 className="font-semibold text-primary-400">Email Principal</h4>
											<a href="mailto:pottassiu@proton.me" className="text-zinc-300 hover:text-primary-500 transition-colors">
												pottassiu@proton.me
											</a>
										</div>
									</div>

									<div className="flex items-center space-x-4">
										<Mail className="w-6 h-6 text-cyan-500" />
										<div>
											<h4 className="font-semibold text-cyan-400">Email Acadêmico</h4>
											<a href="mailto:thiago.nascimento@fatec.sp.gov.br" className="text-zinc-300 hover:text-cyan-500 transition-colors">
												thiago.nascimento@fatec.sp.gov.br
											</a>
										</div>
									</div>

									<div className="flex items-center space-x-4">
										<Github className="w-6 h-6 text-purple-500" />
										<div>
											<h4 className="font-semibold text-purple-400">GitHub</h4>
											<a href="https://github.com/Pottassiuw/" className="text-zinc-300 hover:text-purple-500 transition-colors">
												github.com/Pottassiuw
											</a>
										</div>
									</div>

									<div className="flex items-center space-x-4">
										<Linkedin className="w-6 h-6 text-blue-500" />
										<div>
											<h4 className="font-semibold text-blue-400">LinkedIn</h4>
											<a href="https://linkedin.com/in/thiago-nascimento-dev" className="text-zinc-300 hover:text-blue-500 transition-colors">
												linkedin.com/in/thiago-nascimento-dev
											</a>
										</div>
									</div>
								</div>
							</div>

							{/* Disponibilidade */}
							<div className="bg-dark-100 p-6">
								<h3 className="text-xl font-bold mb-4 text-green-500">Disponibilidade</h3>
								<div className="space-y-2 text-zinc-300">
									<p><strong className="text-green-400">Status:</strong> Disponível para oportunidades</p>
									<p><strong className="text-green-400">Localização:</strong> São José dos Campos, SP</p>
									<p><strong className="text-green-400">Modalidade:</strong> Presencial, Híbrido ou Remoto</p>
									<p><strong className="text-green-400">Foco:</strong> Estágio/Trainee em Desenvolvimento</p>
								</div>
							</div>
						</div>

						{/* Botões de Contato e Ações */}
						<div className="space-y-6">
							<div className="bg-dark-100 p-8">
								<h3 className="text-xl font-bold mb-6 text-primary-500">Principais Canais</h3>

								<div className="space-y-4">
									<a
										href="mailto:pottassiu@proton.me"
										className="flex items-center justify-center space-x-3 bg-primary-500 hover:bg-primary-600 px-6 py-4 transition-colors w-full"
									>
										<Mail className="w-5 h-5" />
										<span className="font-medium">Enviar Email</span>
									</a>

									<a
										href="https://github.com/Pottassiuw/"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center space-x-3 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white px-6 py-4 transition-colors w-full"
									>
										<Github className="w-5 h-5" />
										<span className="font-medium">Ver GitHub</span>
									</a>

									<a
										href="https://linkedin.com/in/thiago-nascimento-dev"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center space-x-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-4 transition-colors w-full"
									>
										<Linkedin className="w-5 h-5" />
										<span className="font-medium">Conectar no LinkedIn</span>
									</a>

									<a
										href="#"
										className="flex items-center justify-center space-x-3 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-4 transition-colors w-full"
									>
										<Download className="w-5 h-5" />
										<span className="font-medium">Download CV</span>
									</a>
								</div>
							</div>

							{/* Resposta Rápida */}
							<div className="bg-dark-100 p-6">
								<h3 className="text-lg font-bold mb-4 text-cyan-500">Resposta Rápida</h3>
								<div className="space-y-3 text-sm text-zinc-300">
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-green-500 rounded-full"></div>
										<span>Respondo emails em até 24 horas</span>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
										<span>LinkedIn: resposta em poucas horas</span>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
										<span>GitHub: acompanho issues e PRs diariamente</span>
									</div>
								</div>
							</div>

							{/* Preferências */}
							<div className="bg-dark-100 p-6">
								<h3 className="text-lg font-bold mb-4 text-yellow-500">Preferências de Contato</h3>
								<div className="space-y-2 text-sm text-zinc-300">
									<p><strong className="text-yellow-400">Melhor horário:</strong> 8h às 18h (UTC-3)</p>
									<p><strong className="text-yellow-400">Projeto/Estágio:</strong> Email primeiro</p>
									<p><strong className="text-yellow-400">Networking:</strong> LinkedIn preferível</p>
									<p><strong className="text-yellow-400">Colaboração técnica:</strong> GitHub Issues</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-dark-500 border-t border-primary-800/20 py-8">
				<div className="max-w-6xl mx-auto px-6 text-center text-zinc-400">
					<p>&copy; 2025 - Desenvolvido com Next.js, TypeScript e Tailwind CSS</p>
				</div>
			</footer>
		</div>
	)
}
