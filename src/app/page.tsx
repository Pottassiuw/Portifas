'use client'

import { useState, useEffect } from 'react'
import { Code2, Database, Globe, Server, Terminal, User, Mail, Github, Linkedin, Download, ChevronDown } from 'lucide-react'

export default function HomePage() {
  const [currentTech, setCurrentTech] = useState(0)
  
  const technologies = [
    'TypeScript', 'Next.js', 'React', 'Node.js', 
    'Python', 'PostgreSQL', 'Docker', 'Git'
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
              &lt;dev.portfolio /&gt;
            </div>
            <div className="flex space-x-8">
              <a href="#about" className="hover:text-primary-500 transition-colors">About</a>
              <a href="#skills" className="hover:text-primary-500 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-primary-500 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark-500 to-dark-400">
        <div className="tech-grid absolute inset-0 opacity-30"></div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex p-6 bg-primary-900/20 border-2 border-primary-500 mb-6 glow">
              <Terminal className="w-16 h-16 text-primary-500" />
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 font-tech leading-tight">
              <span className="text-white">Desenvolvedor</span>
              <br />
              <span className="text-primary-500">Full Stack</span>
            </h1>
            
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Técnico em Desenvolvimento de Sistemas cursando 
              <span className="text-primary-500 font-semibold"> Análise e Desenvolvimento de Sistemas</span>.
              Especializado em criar soluções tecnológicas modernas e eficientes.
            </p>

            <div className="mb-8">
              <p className="text-lg text-zinc-400 mb-4">Especializado em:</p>
              <div className="font-mono text-2xl text-primary-500 h-8 flex items-center justify-center">
                {technologies[currentTech]}
                <span className="cursor-blink">_</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a 
                href="#contact" 
                className="bg-primary-500 hover:bg-primary-600 px-8 py-3 font-semibold transition-all glow hover:glow-lg inline-flex items-center justify-center"
              >
                Ver Projetos
              </a>
              <a 
                href="#" 
                className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-3 font-semibold transition-all inline-flex items-center justify-center"
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

      {/* About Section */}
      <section id="about" className="py-20 bg-dark-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-500">
            Sobre Mim
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-zinc-300 leading-relaxed">
              <p>
                Sou um desenvolvedor apaixonado por tecnologia, com formação técnica em 
                Desenvolvimento de Sistemas e atualmente cursando Análise e Desenvolvimento 
                de Sistemas.
              </p>
              <p>
                Especializo-me em desenvolvimento full stack, trabalhando com tecnologias 
                modernas como TypeScript, React, Next.js, Node.js e bancos de dados relacionais. 
                Sempre busco criar soluções eficientes e escaláveis.
              </p>
              <p>
                Meu foco está em escrever código limpo, performático e manter-me atualizado 
                com as melhores práticas da indústria.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-dark-100 p-6 glow hover:glow-lg transition-all">
                <div className="flex items-center mb-4">
                  <User className="w-6 h-6 text-primary-500 mr-3" />
                  <h3 className="text-xl font-semibold">Formação</h3>
                </div>
                <ul className="space-y-2 text-zinc-300">
                  <li>🎓 Técnico em Desenvolvimento de Sistemas</li>
                  <li>📚 Superior em Análise e Desenvolvimento de Sistemas (em andamento)</li>
                </ul>
              </div>
              
              <div className="bg-dark-100 p-6 glow hover:glow-lg transition-all">
                <div className="flex items-center mb-4">
                  <Code2 className="w-6 h-6 text-primary-500 mr-3" />
                  <h3 className="text-xl font-semibold">Experiência</h3>
                </div>
                <p className="text-zinc-300">
                  Desenvolvedor com experiência em projetos full stack, 
                  desde frontend responsivo até APIs robustas e banco de dados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-dark-500">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-500">
            Tecnologias & Ferramentas
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-200 p-8 glow hover:glow-lg transition-all hover:-translate-y-2 text-center">
              <Globe className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• TypeScript / JavaScript</li>
                <li>• React / Next.js</li>
                <li>• Tailwind CSS</li>
                <li>• HTML5 / CSS3</li>
              </ul>
            </div>

            <div className="bg-dark-200 p-8 glow hover:glow-lg transition-all hover:-translate-y-2 text-center">
              <Server className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• Node.js / Express</li>
                <li>• Python / Django</li>
                <li>• REST APIs</li>
                <li>• Authentication</li>
              </ul>
            </div>

            <div className="bg-dark-200 p-8 glow hover:glow-lg transition-all hover:-translate-y-2 text-center">
              <Database className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Database & Tools</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• PostgreSQL / MySQL</li>
                <li>• Docker / Git</li>
                <li>• AWS / Vercel</li>
                <li>• Linux / Terminal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-primary-500">
            Vamos Trabalhar Juntos
          </h2>
          <p className="text-xl text-zinc-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Entre em contato comigo!
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a 
              href="mailto:seu-email@email.com" 
              className="flex items-center justify-center space-x-3 bg-primary-500 hover:bg-primary-600 px-6 py-3 transition-all glow hover:glow-lg"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a 
              href="https://github.com/seu-usuario" 
              className="flex items-center justify-center space-x-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-6 py-3 transition-all"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/seu-perfil" 
              className="flex items-center justify-center space-x-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-6 py-3 transition-all"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-500 border-t border-primary-800/20 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-zinc-400">
          <p>&copy; 2024 - Desenvolvido com Next.js, TypeScript e Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}