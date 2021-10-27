import Button from '../Button/index';
import * as S from './styled';
import IconFavorite from "../../assets/heart.png";

const CardProduct = () => {
    const produtos = [
        {
          "id": 1,
          "description": "Samsung Smart TV 58 UHD 4K 58AU7700, Processador Crystal 4K, Tela sem limites, Visual Livre de Cabos, Alexa built in, Controle Único",
          "imageUrl": "https://samsungbr.vtexassets.com/arquivos/ids/318708-800-auto?width=800&height=auto&aspect=true",
          "price": "2994,05"
        },
        {
          "id": 2,
          "description": "Console Nintendo Switch - Azul Neon e Vermelho Neon (Nacional)",
          "imageUrl": "https://m.media-amazon.com/images/I/71s9BjamD+L._AC_SL1500_.jpg",
          "price": "2129,00"
        },
        {
          "id": 3,
          "description": "Samsung Smart TV 58 UHD 4K 58AU7700, Processador Crystal 4K, Tela sem limites, Visual Livre de Cabos, Alexa built in, Controle Único",
          "imageUrl": "https://samsungbr.vtexassets.com/arquivos/ids/318708-800-auto?width=800&height=auto&aspect=true",
          "price": "2994,05"
        },
        {
          "id": 4,
          "description": "Console Nintendo Switch - Azul Neon e Vermelho Neon (Nacional)",
          "imageUrl": "https://m.media-amazon.com/images/I/71s9BjamD+L._AC_SL1500_.jpg",
          "price": "2129,00"
        }
      ]

      const cardProdutos = produtos.map((produto, id) => 
      
      <S.Wrapper key={produto.id}>
        <S.Icon src={IconFavorite} alt="icon fav"/>
         
        <S.ProductImg src={produto.imageUrl} alt="imagem do produto"/>
        <p>{produto.description}</p>
        <S.Pricecolor>R$ {produto.price}</S.Pricecolor>
        <Button> ADICIONAR</Button>
      </S.Wrapper>
      )
   
    return (
        <S.WrapperProdutos>
            {cardProdutos}  
        </S.WrapperProdutos>
    )
}

export default CardProduct;