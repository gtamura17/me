# Como Atualizar os Componentes com a Nova Imagem

## 1. Salvar a Imagem
Salve a imagem enviada como: `public/assets/profile.jpg`

## 2. Atualizar Hero.tsx
```tsx
// Trocar esta linha:
src="https://media.licdn.com/dms/image/v2/C4D03AQG51t3A-BeKiQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1557934019866?e=2147483647&v=beta&t=U_y9Wg8gb4-2khXfkayAkHd7o5tpJ7OVMXTVoo8rtnI"

// Por esta:
src="/assets/profile.jpg"
```

## 3. Atualizar Header.tsx
```tsx
// Trocar esta linha:
src='https://media.licdn.com/dms/image/v2/C4D03AQG51t3A-BeKiQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1557934019866?e=2147483647&v=beta&t=U_y9Wg8gb4-2khXfkayAkHd7o5tpJ7OVMXTVoo8rtnI'

// Por esta:
src='/assets/profile.jpg'
```

## Vantagens da imagem local:
- ✅ Carregamento mais rápido
- ✅ Não depende de links externos
- ✅ Melhor controle sobre a qualidade
- ✅ Funciona offline
