import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
  };

  const handleCalloutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Вызов оформлен!",
      description: "Специалист свяжется с вами для уточнения деталей.",
    });
  };

  const services = [
    {
      icon: 'Stethoscope',
      title: 'Медицинский уход',
      description: 'Профессиональный медицинский уход на дому',
    },
    {
      icon: 'Heart',
      title: 'Сопровождение',
      description: 'Помощь в повседневных делах и поддержка',
    },
    {
      icon: 'Pill',
      title: 'Контроль приёма лекарств',
      description: 'Напоминания и контроль приёма медикаментов',
    },
    {
      icon: 'Activity',
      title: 'Реабилитация',
      description: 'Восстановление после операций и травм',
    },
    {
      icon: 'Smile',
      title: 'Психологическая поддержка',
      description: 'Консультации психолога и эмоциональная поддержка',
    },
    {
      icon: 'Home',
      title: 'Помощь по хозяйству',
      description: 'Уборка, приготовление пищи, покупки',
    },
  ];

  const specialists = [
    {
      name: 'Иванова Мария Петровна',
      specialty: 'Врач-терапевт',
      experience: '15 лет опыта',
    },
    {
      name: 'Смирнов Алексей Викторович',
      specialty: 'Врач-невролог',
      experience: '12 лет опыта',
    },
    {
      name: 'Петрова Елена Сергеевна',
      specialty: 'Медсестра',
      experience: '10 лет опыта',
    },
  ];

  const prices = [
    {
      service: 'Консультация врача на дому',
      price: '3 500 ₽',
    },
    {
      service: 'Сопровождение (1 час)',
      price: '800 ₽',
    },
    {
      service: 'Медицинский уход (сутки)',
      price: '4 500 ₽',
    },
    {
      service: 'Психологическая консультация',
      price: '2 500 ₽',
    },
    {
      service: 'Помощь по хозяйству (1 час)',
      price: '600 ₽',
    },
  ];

  const faqs = [
    {
      question: 'Как быстро приедет специалист?',
      answer: 'В среднем специалист прибывает в течение 2-4 часов после оформления вызова. В экстренных случаях — в течение часа.',
    },
    {
      question: 'Какие документы нужны для оформления?',
      answer: 'Для оформления услуг необходим паспорт пациента. Если есть медицинская карта — это будет плюсом для более точной оценки состояния.',
    },
    {
      question: 'Можно ли выбрать конкретного специалиста?',
      answer: 'Да, вы можете выбрать конкретного специалиста при оформлении заявки или вызова.',
    },
    {
      question: 'Работаете ли вы в выходные?',
      answer: 'Да, мы работаем без выходных, 24/7. Вы можете вызвать специалиста в любое удобное время.',
    },
    {
      question: 'Какова стоимость экстренного вызова?',
      answer: 'Экстренный вызов специалиста стоит на 30% дороже стандартного тарифа.',
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Icon name="HeartPulse" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">Забота</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('home')} className="text-sm font-semibold hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-semibold hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-semibold hover:text-primary transition-colors">
              О нас
            </button>
            <button onClick={() => scrollToSection('specialists')} className="text-sm font-semibold hover:text-primary transition-colors">
              Специалисты
            </button>
            <button onClick={() => scrollToSection('prices')} className="text-sm font-semibold hover:text-primary transition-colors">
              Цены
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-semibold hover:text-primary transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-semibold hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>
          <div className="flex gap-2">
            <a href="tel:+78001234567" className="hidden sm:flex">
              <Button variant="outline" size="sm">
                <Icon name="Phone" size={16} className="mr-2" />
                8 (800) 123-45-67
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold leading-tight text-foreground">
                  Профессиональная помощь для ваших близких
                </h1>
                <p className="text-xl text-muted-foreground">
                  Квалифицированные специалисты по уходу за пожилыми людьми. Забота, внимание и профессионализм.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg" className="text-lg">
                        <Icon name="Calendar" size={20} className="mr-2" />
                        Записаться на консультацию
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Запись на консультацию</DialogTitle>
                        <DialogDescription>
                          Заполните форму, и мы свяжемся с вами в ближайшее время
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleConsultationSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="cons-name">Ваше имя</Label>
                          <Input id="cons-name" placeholder="Иван Иванович" required className="text-base" />
                        </div>
                        <div>
                          <Label htmlFor="cons-phone">Телефон</Label>
                          <Input id="cons-phone" type="tel" placeholder="+7 (900) 123-45-67" required className="text-base" />
                        </div>
                        <div>
                          <Label htmlFor="cons-specialist">Выберите специалиста</Label>
                          <Select required>
                            <SelectTrigger id="cons-specialist" className="text-base">
                              <SelectValue placeholder="Выберите специалиста" />
                            </SelectTrigger>
                            <SelectContent>
                              {specialists.map((specialist, idx) => (
                                <SelectItem key={idx} value={specialist.name}>
                                  {specialist.name} — {specialist.specialty}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="cons-message">Комментарий</Label>
                          <Textarea id="cons-message" placeholder="Опишите ваш запрос..." className="text-base" />
                        </div>
                        <Button type="submit" className="w-full text-base">Отправить заявку</Button>
                      </form>
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg" variant="secondary" className="text-lg">
                        <Icon name="UserPlus" size={20} className="mr-2" />
                        Вызвать специалиста
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Вызов специалиста на дом</DialogTitle>
                        <DialogDescription>
                          Укажите адрес и удобное время, наш специалист приедет к вам
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleCalloutSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="call-name">Ваше имя</Label>
                          <Input id="call-name" placeholder="Иван Иванович" required className="text-base" />
                        </div>
                        <div>
                          <Label htmlFor="call-phone">Телефон</Label>
                          <Input id="call-phone" type="tel" placeholder="+7 (900) 123-45-67" required className="text-base" />
                        </div>
                        <div>
                          <Label htmlFor="call-address">Адрес</Label>
                          <Input id="call-address" placeholder="ул. Примерная, д. 1, кв. 1" required className="text-base" />
                        </div>
                        <div>
                          <Label htmlFor="call-service">Требуемая услуга</Label>
                          <Select required>
                            <SelectTrigger id="call-service" className="text-base">
                              <SelectValue placeholder="Выберите услугу" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service, idx) => (
                                <SelectItem key={idx} value={service.title}>
                                  {service.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="call-message">Комментарий</Label>
                          <Textarea id="call-message" placeholder="Дополнительная информация..." className="text-base" />
                        </div>
                        <Button type="submit" className="w-full text-base">Вызвать специалиста</Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://cdn.poehali.dev/projects/712c442c-31af-48df-9134-8be228c976f3/files/13111fb1-6544-4dd5-af28-c24f092ed00f.jpg"
                  alt="Забота о пожилых"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Комплексный уход и поддержка для комфортной жизни ваших близких
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={service.icon} className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://cdn.poehali.dev/projects/712c442c-31af-48df-9134-8be228c976f3/files/d6484ac6-2995-4020-a874-912a1c7f276b.jpg"
                  alt="О нас"
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">О нас</h2>
                <p className="text-lg text-muted-foreground">
                  Мы — команда профессионалов с многолетним опытом работы в сфере ухода за пожилыми людьми. 
                  Наша миссия — обеспечить достойную и комфортную жизнь для людей преклонного возраста.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Award" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">15 лет опыта</h3>
                      <p className="text-muted-foreground">Работаем с 2009 года, помогли более 5000 семьям</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Users" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Квалифицированные специалисты</h3>
                      <p className="text-muted-foreground">Все сотрудники имеют медицинское образование и сертификаты</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Работаем 24/7</h3>
                      <p className="text-muted-foreground">Круглосуточная поддержка и помощь в любое время</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="specialists" className="py-20">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Наши специалисты</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Профессионалы с многолетним опытом и искренней заботой о пациентах
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {specialists.map((specialist, idx) => (
                <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                      <img
                        src="https://cdn.poehali.dev/projects/712c442c-31af-48df-9134-8be228c976f3/files/659564c1-a47b-49a3-8917-77d9e99af224.jpg"
                        alt={specialist.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl">{specialist.name}</CardTitle>
                    <CardDescription className="text-base">
                      <div className="font-semibold text-primary">{specialist.specialty}</div>
                      <div className="mt-2">{specialist.experience}</div>
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="prices" className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Цены на услуги</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Прозрачное ценообразование без скрытых платежей
              </p>
            </div>
            <Card className="max-w-3xl mx-auto">
              <CardContent className="p-0">
                <div className="divide-y">
                  {prices.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-6 hover:bg-muted/50 transition-colors">
                      <span className="text-lg">{item.service}</span>
                      <span className="text-2xl font-bold text-primary">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <p className="text-center mt-8 text-muted-foreground">
              * Окончательная стоимость рассчитывается индивидуально после консультации
            </p>
          </div>
        </section>

        <section id="faq" className="py-20">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ответы на самые популярные вопросы наших клиентов
              </p>
            </div>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="contact" className="py-20 bg-primary text-primary-foreground">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl font-bold">Свяжитесь с нами</h2>
              <p className="text-xl opacity-90">
                Мы всегда готовы ответить на ваши вопросы и помочь вашим близким
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                    <Icon name="Phone" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg">Телефон</h3>
                  <p className="text-lg">8 (800) 123-45-67</p>
                  <p className="opacity-80">Круглосуточно, без выходных</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                    <Icon name="Mail" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-lg">info@zabota-care.ru</p>
                  <p className="opacity-80">Ответим в течение часа</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg">Адрес</h3>
                  <p className="text-lg">г. Москва, ул. Примерная, д. 10</p>
                  <p className="opacity-80">Пн-Пт: 9:00-18:00</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-8">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="HeartPulse" size={24} />
              <span className="text-xl font-bold">Забота</span>
            </div>
            <p className="text-sm opacity-80">© 2024 Забота. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">Политика конфиденциальности</a>
              <a href="#" className="hover:opacity-80 transition-opacity">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
