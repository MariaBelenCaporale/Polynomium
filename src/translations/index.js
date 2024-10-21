import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';



const resources = {
    es: {
        translation: {
            'Nosotros':'Nosotros',
            'Productos':'Productos',
            'Contacto':'Contacto',
            'Innovación sin límites,':'Innovación sin límites,', 
            'no esperamos el futuro;':'no esperamos el futuro;',
            'lo estamos creando hoy.':'lo estamos creando hoy.',
            'ADN tecnológico en constante evolución':'ADN tecnológico en constante evolución',

            '¿QUIENES SOMOS?':'¿QUIENES SOMOS?',
            'Arquitectos de la tecnología futura':'Arquitectos de la tecnología futura',
            'Polynomium es el lienzo en blanco para tus ideas, convirtiéndolas en productos digitales asombrosos, desafiando los límites al crear productos tecnológicos que se adaptan a tu visión.':'Polynomium es el lienzo en blanco para tus ideas, convirtiéndolas en productos digitales asombrosos, desafiando los límites al crear productos tecnológicos que se adaptan a tu visión.',
            'Nuestra visión':'Nuestra visión',
            'Buscamos ser líderes en la creación de futuros digitales, impulsando a empresas y emprendedores hacia la innovación tecnológica. Nos comprometemos a que la tecnología sea accesible para todos, especialmente para las pequeñas empresas, brindando soluciones avanzadas que les permitan crecer y prosperar en un mercado en constante evolución.':'Buscamos ser líderes en la creación de futuros digitales, impulsando a empresas y emprendedores hacia la innovación tecnológica. Nos comprometemos a que la tecnología sea accesible para todos, especialmente para las pequeñas empresas, brindando soluciones avanzadas que les permitan crecer y prosperar en un mercado en constante evolución.',
            'Nuestra misión':'Nuestra misión',
            'Proporcionamos soluciones tecnológicas innovadoras y accesibles que empoderan a empresas y emprendedores, facilitando su crecimiento y adaptación al mercado digital. Creamos plataformas que permiten a las empresas optimizar sus operaciones, expandir su alcance y transformar sus negocios.':'Proporcionamos soluciones tecnológicas innovadoras y accesibles que empoderan a empresas y emprendedores, facilitando su crecimiento y adaptación al mercado digital. Creamos plataformas que permiten a las empresas optimizar sus operaciones, expandir su alcance y transformar sus negocios.',
            'Soluciones':'Soluciones',
            'Desarrollamos soluciones de software específicas para nuestros clientes y creamos productos tecnológicos propios.':'Desarrollamos soluciones de software específicas para nuestros clientes y creamos productos tecnológicos propios.',
            'Soluciones para empresas':'Soluciones para empresas',
            'Nuestros productos':'Nuestros productos',
            'Haciendo Realidad tus Sueños Tecnológicos ¿Tenés una visión ambiciosa? En Polynomium, colaboramos con vos para transformar tus ideas en soluciones digitales innovadoras, acompañándote en cada paso del proceso, desde la concepción hasta su implementación final. ¡Creamos tecnología que impulsa tu éxito! Software Personalizado Convertimos tus ideas en soluciones tecnológicas y las diseñamos basándonos en las necesidades únicas de tu negocio. Desde la optimización de procesos internos, gestión de contenidos eficientes, hasta la automatización de tareas críticas. En Polynomium te ayudamos a operar con mayor agilidad y eficacia a través del desarrollo personalizado de plataformas integrales que se adaptan a tu negocio.':'Haciendo Realidad tus Sueños Tecnológicos ¿Tenés una visión ambiciosa? En Polynomium, colaboramos con vos para transformar tus ideas en soluciones digitales innovadoras, acompañándote en cada paso del proceso, desde la concepción hasta su implementación final. ¡Creamos tecnología que impulsa tu éxito! Software Personalizado Convertimos tus ideas en soluciones tecnológicas y las diseñamos basándonos en las necesidades únicas de tu negocio. Desde la optimización de procesos internos, gestión de contenidos eficientes, hasta la automatización de tareas críticas. En Polynomium te ayudamos a operar con mayor agilidad y eficacia a través del desarrollo personalizado de plataformas integrales que se adaptan a tu negocio.',
            'Empodera tu negocio con herramientas que mejoran la eficiencia y te permiten enfocarte en lo que realmente importa: Crecer. Nuestros desarrollos Cada uno de nuestros productos están pensados y diseñado para ser aplicados en los desarrollos de nuestros clientes en caso de querer hacer crecer sus proyectos existentes. O de igual manera en el caso de querer emprender desde cero brindamos la tecnología como una white label capaz de ser usada de manera independiente con la estética y cualidades agregadas a pedido, según tu necesidad. Plataformas responsivas web y moviles Nuestras soluciones son rápidas, responsivas y completamente optimizadas para ofrecer una experiencia de usuario fluida en cualquier dispositivo.':'Empodera tu negocio con herramientas que mejoran la eficiencia y te permiten enfocarte en lo que realmente importa: Crecer. Nuestros desarrollos Cada uno de nuestros productos están pensados y diseñado para ser aplicados en los desarrollos de nuestros clientes en caso de querer hacer crecer sus proyectos existentes. O de igual manera en el caso de querer emprender desde cero brindamos la tecnología como una white label capaz de ser usada de manera independiente con la estética y cualidades agregadas a pedido, según tu necesidad. Plataformas responsivas web y moviles Nuestras soluciones son rápidas, responsivas y completamente optimizadas para ofrecer una experiencia de usuario fluida en cualquier dispositivo.',

            'Proyectos':'Proyectos',
            'Megapix':'Megapix',
            'Revolucionando los Pagos con PIX':'Revolucionando los Pagos con PIX',
            'Forjamos un ambiente donde los comerciantes prosperan y los turistas disfrutan de pagos sin complicaciones, derribando barreras y construyendo conexiones sin fronteras.':'Forjamos un ambiente donde los comerciantes prosperan y los turistas disfrutan de pagos sin complicaciones, derribando barreras y construyendo conexiones sin fronteras.',
            'Ver más':'Ver más',

            'Assiria':'Assiria',
            'Plataformas Igaming':'Plataformas Igaming',
            'Creamos universos virtuales donde el igaming no es solo entretenimiento, sino una experiencia inmersiva y transformadora.':'Creamos universos virtuales donde el igaming no es solo entretenimiento, sino una experiencia inmersiva y transformadora.',

            'Fluence':'Fluence',
            'Sigue al conejo':'Sigue al conejo',
            'Ser parte de Fluverse implica más que unirse a una plataforma: es adentrarse en un universo de educación financiera.':'Ser parte de Fluverse implica más que unirse a una plataforma: es adentrarse en un universo de educación financiera.',

            'Estoy interesado en:':'Estoy interesado en:',
            'Crear un producto':'Crear un producto',
            'Productos Polynomium':'Productos Polynomium',
            'Nombre completo':'Nombre completo',
            'E-mail':'E-mail',
            'Nombre empresa (Opcional)':'Nombre empresa (Opcional)',
            'País':'País',
            'Desarrollar necesidad (Opcional)':'Desarrollar necesidad (Opcional)',
            'Enviar mensaje':'Enviar mensaje',
            'Polynomium':'Polynomium',
            ' innovando el presente & futuro':' innovando el presente & futuro',

            '¿Quiénes somos?':'¿Quiénes somos?',

            'Preguntas frecuentes':'Preguntas frecuentes',

            'Política de privacidad':'Política de privacidad',

            'Términos & condiciones':'Términos & condiciones',

            'Comunidad':'Comunidad',

        }
    },   
    br: {
        translation: {
            'Nosotros':'Nos',
            'Productos':'Produtos',
            'Contacto':'Contatamos',


            'Innovación sin límites,':'Inovação sem limites,', 
            'no esperamos el futuro;':'não esperamos o futuro;',
            'lo estamos creando hoy.':'estamos criando hoje.',
            'ADN tecnológico en constante evolución':'ADN tecnológico em constante evolução.',

            '¿QUIENES SOMOS?':'QUEM SOMOS?',
            'Arquitectos de la tecnología futura':'Arquitetos da tecnologia do futuro',

            'Polynomium es el lienzo en blanco para tus ideas, convirtiéndolas en productos digitales asombrosos, desafiando los límites al crear productos tecnológicos que se adaptan a tu visión.':'Polynomium é a tela em branco para suas ideias, transformando-as em produtos digitais impressionantes, desafiando os limites ao criar produtos tecnológicos que se adaptam à sua visão.',

            'Nuestra visión':'Nossa visão',
            'Buscamos ser líderes en la creación de futuros digitales, impulsando a empresas y emprendedores hacia la innovación tecnológica. Nos comprometemos a que la tecnología sea accesible para todos, especialmente para las pequeñas empresas, brindando soluciones avanzadas que les permitan crecer y prosperar en un mercado en constante evolución.':'Buscamos ser líderes na criação de futuros digitais, impulsionando empresas e empreendedores em direção à inovação tecnológica. Comprometemo-nos a tornar a tecnologia acessível a todos, especialmente para pequenas empresas, oferecendo soluções avançadas que lhes permitam crescer e prosperar em um mercado em constante evolução.',

            'Nuestra misión':'Nossa missão',
            'Proporcionamos soluciones tecnológicas innovadoras y accesibles que empoderan a empresas y emprendedores, facilitando su crecimiento y adaptación al mercado digital. Creamos plataformas que permiten a las empresas optimizar sus operaciones, expandir su alcance y transformar sus negocios.':'Fornecemos soluções tecnológicas inovadoras e acessíveis que capacitam empresas e empreendedores, facilitando seu crescimento e adaptação ao mercado digital. Criamos plataformas que permitem às empresas otimizar suas operações, expandir seu alcance e transformar seus negócios.',

            'Soluciones':'Soluções',
            'Desarrollamos soluciones de software específicas para nuestros clientes y creamos productos tecnológicos propios.':'Desenvolvemos soluções de software específicas para nossos clientes e criamos produtos tecnológicos próprios.',
            'Soluciones para empresas':'Soluções para empresas',
            'Nuestros productos':'Nossos produtos',
            'Haciendo Realidad tus Sueños Tecnológicos ¿Tenés una visión ambiciosa? En Polynomium, colaboramos con vos para transformar tus ideas en soluciones digitales innovadoras, acompañándote en cada paso del proceso, desde la concepción hasta su implementación final. ¡Creamos tecnología que impulsa tu éxito! Software Personalizado Convertimos tus ideas en soluciones tecnológicas y las diseñamos basándonos en las necesidades únicas de tu negocio. Desde la optimización de procesos internos, gestión de contenidos eficientes, hasta la automatización de tareas críticas. En Polynomium te ayudamos a operar con mayor agilidad y eficacia a través del desarrollo personalizado de plataformas integrales que se adaptan a tu negocio.':'Tornando seus Sonhos Tecnológicos em Realidade Tem uma visão ambiciosa? Na Polynomium, colaboramos com você para transformar suas ideias em soluções digitais inovadoras, acompanhando-o em cada etapa do processo, desde a concepção até a implementação final. Criamos tecnologia que impulsiona seu sucesso! Software Personalizado Convertemos suas ideias em soluções tecnológicas e as projetamos com base nas necessidades únicas do seu negócio. Desde a otimização de processos internos, gestão eficiente de conteúdos, até a automação de tarefas críticas. Na Polynomium, ajudamos você a operar com maior agilidade e eficácia por meio do desenvolvimento personalizado de plataformas integrais que se adaptam ao seu negócio.',

            'Empodera tu negocio con herramientas que mejoran la eficiencia y te permiten enfocarte en lo que realmente importa: Crecer. Nuestros desarrollos Cada uno de nuestros productos están pensados y diseñado para ser aplicados en los desarrollos de nuestros clientes en caso de querer hacer crecer sus proyectos existentes. O de igual manera en el caso de querer emprender desde cero brindamos la tecnología como una white label capaz de ser usada de manera independiente con la estética y cualidades agregadas a pedido, según tu necesidad. Plataformas responsivas web y moviles Nuestras soluciones son rápidas, responsivas y completamente optimizadas para ofrecer una experiencia de usuario fluida en cualquier dispositivo.':'Empodere seu negócio com ferramentas que melhoram a eficiência e permitem que você se concentre no que realmente importa: Crescer. Nossos desenvolvimentos Cada um de nossos produtos é pensado e projetado para ser aplicado nos desenvolvimentos de nossos clientes, caso queiram fazer crescer seus projetos existentes. Da mesma forma, se você quiser empreender do zero, oferecemos a tecnologia como uma solução white label, capaz de ser utilizada de forma independente com a estética e as qualidades personalizadas conforme sua necessidade. Plataformas responsivas web e móveis Nossas soluções são rápidas, responsivas e completamente otimizadas para oferecer uma experiência de usuário fluida em qualquer dispositivo.',

            'Proyectos':'Projetos',
            'Megapix':'Megapix',
            'Revolucionando los Pagos con PIX':'Revolucionando os Pagamentos com PIX',
            'Forjamos un ambiente donde los comerciantes prosperan y los turistas disfrutan de pagos sin complicaciones, derribando barreras y construyendo conexiones sin fronteras.':'Forjamos um ambiente onde os comerciantes prosperam e os turistas desfrutam de pagamentos sem complicações, derrubando barreiras e construindo conexões sem fronteiras.',
            'Ver más':'Ver mais',

            'Assiria':'Assiria',
            'Plataformas Igaming':'Plataformas Igaming',
            'Creamos universos virtuales donde el igaming no es solo entretenimiento, sino una experiencia inmersiva y transformadora.':'Criamos universos virtuais onde o igaming não é apenas entretenimento, mas uma experiência imersiva e transformadora.',

            'Fluence':'Fluence',
            'Sigue al conejo':'Siga o coelho',
            'Ser parte de Fluverse implica más que unirse a una plataforma: es adentrarse en un universo de educación financiera.':'Ser parte do Fluverse implica mais do que apenas se unir a uma plataforma: é mergulhar em um universo de educação financeira.',

            'Estoy interesado en:':'Estou interessado em:',
            'Crear un producto':'Criar um produto',
            'Productos Polynomium':'Produtos Polynomium',
            'Nombre completo':'Nome completo',
            'E-mail':'E-mail',
            'Nombre empresa (Opcional)':'Nome da empresa (Opcional)',
            'País':'País',
            'Desarrollar necesidad (Opcional)':'Necessidade de desenvolvimento (Opcional)',
            'Enviar mensaje':'Enviar mensagem',
            'Polynomium':'Polynomium',
            ' innovando el presente & futuro':' Inovando o presente & futuro',

            '¿Quiénes somos?':'Quem somos?',

            'Preguntas frecuentes':'Perguntas frequentes',

            'Política de privacidad':'Política de privacidade',

            'Términos & condiciones':'Termos & condições',

            'Comunidad':'Comunidade',
        }
    },   
    en: {
        translation: {
            'Nosotros':'About',
            'Productos':'Products',
            'Contacto':'Contact',
            'Innovación sin límites,':'Innovation without limits,', 
            'no esperamos el futuro;':'We do not wait for the future;',
            'lo estamos creando hoy.':'we are creating it today.',

           
            'ADN tecnológico en constante evolución':'Technological DNA in Constant Evolution',

            '¿QUIENES SOMOS?':'WHO WE ARE?',
            'Arquitectos de la tecnología futura':'Architects of the Future Technology',
            'Polynomium es el lienzo en blanco para tus ideas, convirtiéndolas en productos digitales asombrosos, desafiando los límites al crear productos tecnológicos que se adaptan a tu visión.':'Polynomium is the blank canvas for your ideas, turning them into amazing digital products, challenging the limits by creating technological products that adapt to your vision.',

            'Nuestra visión':'Our Vision',
            'Buscamos ser líderes en la creación de futuros digitales, impulsando a empresas y emprendedores hacia la innovación tecnológica. Nos comprometemos a que la tecnología sea accesible para todos, especialmente para las pequeñas empresas, brindando soluciones avanzadas que les permitan crecer y prosperar en un mercado en constante evolución.':'We aim to be leaders in creating digital futures, driving companies and entrepreneurs toward technological innovation. We are committed to making technology accessible to everyone, especially small businesses, providing advanced solutions that allow them to grow and thrive in a constantly evolving market.',

            'Nuestra misión':'Our Mission',
            'Proporcionamos soluciones tecnológicas innovadoras y accesibles que empoderan a empresas y emprendedores, facilitando su crecimiento y adaptación al mercado digital. Creamos plataformas que permiten a las empresas optimizar sus operaciones, expandir su alcance y transformar sus negocios.':'We provide innovative and accessible technological solutions that empower businesses and entrepreneurs, facilitating their growth and adaptation to the digital market. We create platforms that allow companies to optimize their operations, expand their reach, and transform their businesses.',

            'Soluciones':'Solutions',
            'Desarrollamos soluciones de software específicas para nuestros clientes y creamos productos tecnológicos propios.':'We develop specific software solutions for our clients and create our own technological products.',

            'Soluciones para empresas':'Solutions for Businesses',
            'Nuestros productos':'Our Products',
            'Haciendo Realidad tus Sueños Tecnológicos ¿Tenés una visión ambiciosa? En Polynomium, colaboramos con vos para transformar tus ideas en soluciones digitales innovadoras, acompañándote en cada paso del proceso, desde la concepción hasta su implementación final. ¡Creamos tecnología que impulsa tu éxito! Software Personalizado Convertimos tus ideas en soluciones tecnológicas y las diseñamos basándonos en las necesidades únicas de tu negocio. Desde la optimización de procesos internos, gestión de contenidos eficientes, hasta la automatización de tareas críticas. En Polynomium te ayudamos a operar con mayor agilidad y eficacia a través del desarrollo personalizado de plataformas integrales que se adaptan a tu negocio.':'Making Your Technological Dreams a Reality Do you have an ambitious vision? At Polynomium, we collaborate with you to transform your ideas into innovative digital solutions, supporting you every step of the way, from conception to final implementation. We create technology that drives your success! Customized Software We turn your ideas into technological solutions and design them based on the unique needs of your business. From optimizing internal processes and efficient content management to automating critical tasks, at Polynomium we help you operate with greater agility and effectiveness through the customized development of comprehensive platforms that adapt to your business.',

            "Empodera tu negocio con herramientas que mejoran la eficiencia y te permiten enfocarte en lo que realmente importa: Crecer. Nuestros desarrollos Cada uno de nuestros productos están pensados y diseñado para ser aplicados en los desarrollos de nuestros clientes en caso de querer hacer crecer sus proyectos existentes. O de igual manera en el caso de querer emprender desde cero brindamos la tecnología como una white label capaz de ser usada de manera independiente con la estética y cualidades agregadas a pedido, según tu necesidad. Plataformas responsivas web y moviles Nuestras soluciones son rápidas, responsivas y completamente optimizadas para ofrecer una experiencia de usuario fluida en cualquier dispositivo.":"Empower your business with tools that enhance efficiency and allow you to focus on what really matters: Growing. Our Developments Each of our products is designed to be applied in our clients' developments if they want to grow their existing projects. Likewise, if they want to start from scratch, we provide technology as a white label solution that can be used independently with the aesthetics and qualities customized to your needs. Responsive Web and Mobile Platforms Our solutions are fast, responsive, and fully optimized to provide a smooth user experience on any device.",

            'Proyectos':'Projects',
            'Megapix':'Megapix',
            'Revolucionando los Pagos con PIX':'Revolutionizing Payments with PIX',
            'Forjamos un ambiente donde los comerciantes prosperan y los turistas disfrutan de pagos sin complicaciones, derribando barreras y construyendo conexiones sin fronteras.':'We forge an environment where merchants thrive and tourists enjoy hassle-free payments, breaking down barriers and building connections without borders.',
            'Ver más':'Learn More',

            'Assiria':'Assiria',
            'Plataformas Igaming':'Igaming Platforms',
            'Creamos universos virtuales donde el igaming no es solo entretenimiento, sino una experiencia inmersiva y transformadora.':'We create virtual universes where igaming is not just entertainment but an immersive and transformative experience.',

            'Fluence':'Fluence',
            'Sigue al conejo':'Follow the Rabbit',
            'Ser parte de Fluverse implica más que unirse a una plataforma: es adentrarse en un universo de educación financiera.':'Being part of Fluverse means more than just joining a platform: it is entering a universe of financial education.',

            'Estoy interesado en:':'I am interested in:',
            'Crear un producto':'Creating a product',
            'Productos Polynomium':'Polynomium Products',
            'Nombre completo':'Full Name',
            'E-mail':'Email',
            'Nombre empresa (Opcional)':'Company Name (Optional)',
            'País':'Country',
            'Desarrollar necesidad (Opcional)':'Development Needs (Optional)',
            'Enviar mensaje':'Send Message',
            'Polynomium':'Polynomium',
            ' innovando el presente & futuro':' innovating the Present & Future',

            '¿Quiénes somos?':'Who we are?',

            'Preguntas frecuentes':'Frequently Asked Questions',

            'Política de privacidad':'Privacy Policy',

            'Términos & condiciones':'Terms & Conditions',

            'Comunidad':'Community',

        }
    },   
}


i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'es', // Idioma predeterminado
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;