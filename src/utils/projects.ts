import igniteShopPng from '../../public/IgniteShop.png'
import CoffeDeliveryPng from '../../public/coffeeDelivery.png'
import lunaBusPng from '../../public/lunabus.png'
import designSystemPng from '../../public/designsystem.png'
import DevFinderPng from '../../public/devFinderPng.png'
import igniteCallPng from '../../public/IgniteCall.png'

export const projects = [
  {
    title: 'Ignite Call',
    description:
      'O projeto Ignite Call foi construído para agendamentos de compromissos a partir de um calendário com integração com o Google Agenda',
    techs: ['React', 'Next.js', 'Node', 'Google APIs', 'Axios', 'TypeScript'],
    image: igniteCallPng,
    github: 'https://github.com/giovaniocan/ignite-call',
    deploy: 'https://ignite-call-smoky.vercel.app/',
  },
  {
    title: 'Ignite Shop',
    description: 'Site para venda de itens do Ignite.',
    techs: ['React', 'TypeScript', 'Next', 'Stitches', 'Stripe'],
    image: igniteShopPng,
    github: 'https://github.com/giovaniocan/04-iginite-shop',
  },

  {
    title: 'Coffee Delivery',
    description: 'Site para gerenciar um carrinho de compras',
    techs: ['React', 'TypeScript', 'Styled-components'],
    image: CoffeDeliveryPng,
    github: 'https://github.com/giovaniocan/Coffee-Delivery',
  },
  {
    title: 'Luna Bus',
    description:
      'Site para o transporte público voltado para cidades de pequeno e médio porte.',
    techs: ['React', 'Next', 'TypeScript', 'Tailwind CSS'],
    image: lunaBusPng,
    deploy: 'https://lunabus.com.br',
  },
  {
    title: 'Design System Ignite Call',
    description: 'Design System criado para utilizar na aplicação Ignite Call.',
    techs: ['React', 'StoryBook', 'Stitches', 'TypeScript'],
    image: designSystemPng,
    github: 'https://github.com/giovaniocan/05-design-system',
  },
  {
    title: 'Dev Finder',
    description:
      'site para buscar desenvolvedores e empresas no github, e mostrar seus dados mais relevantes',
    techs: [
      'React',
      'TypeScript',
      'Styled-components',
      'Dark_Theme',
      'APIs',
      'Axios',
    ],
    image: DevFinderPng,
    github: 'https://github.com/giovaniocan/devFinder',
    deploy: 'https://dev-finder-woad.vercel.app/',
  },
]
