
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";
import { AlertCircle } from 'lucide-react';

const LoginForm = () => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Function to format CPF as user types
  const formatCPF = (value: string) => {
    // Remove non-digits
    const digits = value.replace(/\D/g, '');
    
    // Apply CPF format: 000.000.000-00
    let formattedCPF = digits;
    if (digits.length > 3) {
      formattedCPF = `${digits.substring(0, 3)}.${digits.substring(3)}`;
    }
    if (digits.length > 6) {
      formattedCPF = `${formattedCPF.substring(0, 7)}.${formattedCPF.substring(7)}`;
    }
    if (digits.length > 9) {
      formattedCPF = `${formattedCPF.substring(0, 11)}-${formattedCPF.substring(11, 13)}`;
    }
    
    // Limit to 14 characters (000.000.000-00)
    return formattedCPF.substring(0, 14);
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCPF(e.target.value);
    setCpf(formatted);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      if (cpf === '123.456.789-00' && password === 'senha123') {
        toast({
          title: "Login realizado com sucesso",
          description: "Você será redirecionado para a área do cidadão.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Erro ao fazer login",
          description: "CPF ou senha incorretos. Tente novamente.",
        });
      }
    }, 1500);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Pré-cadastro realizado",
        description: "Verifique seu e-mail para concluir o cadastro.",
      });
      setName('');
      setEmail('');
      setCpf('');
      setPassword('');
    }, 1500);
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card className="border border-gray-200">
            <CardHeader className="bg-brazil-blue text-white rounded-t-lg">
              <CardTitle className="text-xl font-bold text-center">Acesso ao REPIS Cidadão</CardTitle>
              <CardDescription className="text-white/80 text-center">
                Entre com sua conta gov.br ou crie uma conta
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex justify-center mb-6">
                <img 
                  src="https://www.gov.br/++theme++padrao_govbr/img/govbr-colorido-b.png"
                  alt="gov.br" 
                  className="h-8" 
                />
              </div>

              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Entrar</TabsTrigger>
                  <TabsTrigger value="register">Cadastrar</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="cpf">CPF</Label>
                      <Input 
                        id="cpf" 
                        placeholder="000.000.000-00" 
                        value={cpf}
                        onChange={handleCPFChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="password">Senha</Label>
                        <a href="#" className="text-xs text-brazil-blue hover:underline">
                          Esqueceu a senha?
                        </a>
                      </div>
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                      />
                    </div>
                    
                    <Alert className="bg-yellow-50 border-brazil-yellow text-gray-700">
                      <AlertCircle className="h-4 w-4 text-brazil-yellow" />
                      <AlertDescription>
                        Use as mesmas credenciais da sua conta gov.br
                      </AlertDescription>
                    </Alert>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-brazil-green hover:bg-green-700"
                      disabled={isLoading}
                    >
                      {isLoading ? "Entrando..." : "Entrar"}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="register">
                  <form onSubmit={handleRegister} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input 
                        id="name" 
                        placeholder="Digite seu nome completo" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-cpf">CPF</Label>
                      <Input 
                        id="register-cpf" 
                        placeholder="000.000.000-00" 
                        value={cpf}
                        onChange={handleCPFChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-password">Senha</Label>
                      <Input 
                        id="register-password" 
                        type="password" 
                        placeholder="Crie uma senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-brazil-green hover:bg-green-700"
                      disabled={isLoading}
                    >
                      {isLoading ? "Cadastrando..." : "Cadastrar"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-center border-t border-gray-200 px-6 py-4 text-center">
              <p className="text-sm text-gray-600">
                Ao acessar, você concorda com os <a href="#" className="text-brazil-blue hover:underline">Termos de Uso</a> e <a href="#" className="text-brazil-blue hover:underline">Política de Privacidade</a>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
