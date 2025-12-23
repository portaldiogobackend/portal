import { motion } from 'framer-motion';
import { ArrowUpRight, Check, ChevronRight, Eye, EyeOff, Home, User } from 'lucide-react';
import React, { useState } from 'react';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';

export const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Validação de senha
  const passwordRequirements = [
    { label: 'Mínimo 8 caracteres', valid: password.length >= 8 },
    { label: 'Uma letra maiúscula', valid: /[A-Z]/.test(password) },
    { label: 'Uma letra minúscula', valid: /[a-z]/.test(password) },
    { label: 'Um número', valid: /[0-9]/.test(password) },
  ];

  const isPasswordValid = passwordRequirements.every(req => req.valid);
  const doPasswordsMatch = password === confirmPassword && password.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isPasswordValid || !doPasswordsMatch || !acceptTerms) {
      return;
    }
    
    setIsLoading(true);
    
    // Simulação - aqui você conectará ao backend
    console.log('SignUp attempt:', { firstName, lastName, email, password });
    
    setTimeout(() => {
      setIsLoading(false);
      // Redirecionar após cadastro bem-sucedido
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* ==================== Breadcrumb Section ==================== */}
      <section className="breadcrumb py-16 lg:py-24 bg-[#E8F1FF] relative z-10 overflow-hidden">
        {/* Decorative Shapes */}
        <motion.img 
          src="/images/shapes/shape1.png" 
          alt="" 
          className="absolute top-16 right-[15%] w-12 h-12 hidden md:block pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.img 
          src="/images/shapes/shape2.png" 
          alt="" 
          className="absolute bottom-20 left-[10%] w-8 h-8 hidden md:block pointer-events-none"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img 
          src="/images/shapes/shape3.png" 
          alt="" 
          className="absolute top-32 left-[5%] w-16 h-16 hidden md:block pointer-events-none"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img 
          src="/images/shapes/shape5.png" 
          alt="" 
          className="absolute bottom-16 right-[8%] w-14 h-14 hidden md:block pointer-events-none"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img 
          src="/images/shapes/shape4.png" 
          alt="" 
          className="absolute top-24 right-[5%] w-4 h-4 pointer-events-none"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img 
          src="/images/shapes/shape4.png" 
          alt="" 
          className="absolute bottom-24 left-[20%] w-4 h-4 pointer-events-none"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex justify-center">
            <div className="w-full lg:w-2/3">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h1 className="text-4xl lg:text-5xl font-semibold text-[#222E48] mb-4">
                  Criar Conta
                </h1>
                <ul className="flex items-center justify-center gap-2 text-sm">
                  <li>
                    <a 
                      href="/" 
                      className="flex items-center gap-1.5 text-[#798090] hover:text-[#0D6EFD] font-medium transition-colors"
                    >
                      <Home className="w-4 h-4" />
                      Início
                    </a>
                  </li>
                  <li>
                    <ChevronRight className="w-4 h-4 text-[#798090]" />
                  </li>
                  <li>
                    <span className="text-[#F2416E] font-medium">Cadastro</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SignUp Form Section ==================== */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Form Card */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 lg:p-10 border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
                  Vamos começar!
                </h1>
                <p className="text-slate-600 text-base">
                  Crie sua conta para começar sua jornada de aprendizado
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Fields - Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div>
                    <label 
                      htmlFor="firstName" 
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Nome
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Seu nome"
                        className="w-full px-4 py-3.5 pl-11 rounded-xl border-2 border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                        required
                      />
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                    </div>
                  </div>

                  {/* Last Name */}
                  <div>
                    <label 
                      htmlFor="lastName" 
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Sobrenome
                    </label>
                    <input 
                      type="text" 
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Seu sobrenome"
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    E-mail
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                    required
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label 
                    htmlFor="password" 
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Senha
                  </label>
                  <div className="relative">
                    <input 
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Crie uma senha forte"
                      className="w-full px-4 py-3.5 pr-12 rounded-xl border-2 border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
                      aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* Password Requirements */}
                  {password.length > 0 && (
                    <motion.div 
                      className="mt-3 grid grid-cols-2 gap-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.2 }}
                    >
                      {passwordRequirements.map((req, index) => (
                        <div 
                          key={index} 
                          className={`flex items-center gap-1.5 text-xs ${
                            req.valid ? 'text-green-600' : 'text-slate-400'
                          }`}
                        >
                          <Check className={`w-3.5 h-3.5 ${req.valid ? 'opacity-100' : 'opacity-40'}`} />
                          {req.label}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label 
                    htmlFor="confirmPassword" 
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Confirmar Senha
                  </label>
                  <div className="relative">
                    <input 
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirme sua senha"
                      className={`w-full px-4 py-3.5 pr-12 rounded-xl border-2 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 transition-all duration-200 ${
                        confirmPassword.length > 0
                          ? doPasswordsMatch
                            ? 'border-green-500 focus:border-green-500 focus:ring-green-500/10'
                            : 'border-red-400 focus:border-red-400 focus:ring-red-400/10'
                          : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/10'
                      }`}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
                      aria-label={showConfirmPassword ? "Ocultar senha" : "Mostrar senha"}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {confirmPassword.length > 0 && !doPasswordsMatch && (
                    <p className="mt-2 text-xs text-red-500">As senhas não coincidem</p>
                  )}
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-3">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="w-5 h-5 rounded border-2 border-slate-300 text-blue-600 focus:ring-blue-500 focus:ring-2 cursor-pointer"
                      required
                    />
                  </div>
                  <label htmlFor="terms" className="text-sm text-slate-600 cursor-pointer">
                    Eu concordo com os{' '}
                    <a href="/termos" className="text-blue-600 hover:text-blue-700 font-medium">
                      Termos de Uso
                    </a>{' '}
                    e a{' '}
                    <a href="/privacidade" className="text-blue-600 hover:text-blue-700 font-medium">
                      Política de Privacidade
                    </a>
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button 
                  type="submit"
                  disabled={isLoading || !isPasswordValid || !doPasswordsMatch || !acceptTerms}
                  className="w-full mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-lg group"
                  whileHover={{ scale: (isLoading || !isPasswordValid || !doPasswordsMatch || !acceptTerms) ? 1 : 1.01 }}
                  whileTap={{ scale: (isLoading || !isPasswordValid || !doPasswordsMatch || !acceptTerms) ? 1 : 0.99 }}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle 
                          className="opacity-25" 
                          cx="12" 
                          cy="12" 
                          r="10" 
                          stroke="currentColor" 
                          strokeWidth="4"
                          fill="none"
                        />
                        <path 
                          className="opacity-75" 
                          fill="currentColor" 
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Criando conta...
                    </>
                  ) : (
                    <>
                      Criar Conta
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-4 text-slate-500 font-medium">
                    ou cadastre-se com
                  </span>
                </div>
              </div>

              {/* Social Login */}
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl border-2 border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 text-slate-700 font-medium group"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="group-hover:text-slate-900 transition-colors">Cadastrar com Google</span>
              </button>

              {/* Sign In Link */}
              <p className="mt-8 text-center text-slate-600">
                Já tem uma conta?{' '}
                <a 
                  href="/login" 
                  className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Fazer login
                </a>
              </p>
            </motion.div>

            {/* Illustration */}
            <motion.div 
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl"></div>
                <img 
                  src="/images/thumbs/account-img.png" 
                  alt="Ilustração de Cadastro" 
                  className="relative max-w-full h-auto drop-shadow-2xl"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SignUp;
