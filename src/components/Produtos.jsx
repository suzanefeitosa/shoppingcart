import { Cards } from "./cards";
import styles from "./Produtos.module.css";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";



export function Produtos() {

  const [contador, setContador] = useState(0) 
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("Carrinho") != null) {
     setContador(JSON.parse(localStorage.getItem("Carrinho")).length)}
  }, []);


  const productsArr = [
    {
      id: 1,
      nomeProduto: "STAR WARS - FIGURE BABY YODA 23CM",
      valorPromocional: "R$120",
      valor: 96.00,
      imagemUrl:
        "https://suzanefeitosa.github.io/gatwurno/assets/produto1-baby-yoda.png",
    },
    {
      id: 2,
      nomeProduto: "ONE PIECE - FIGURE RORONOA ZORO 18CM",
      valorPromocional: "R$300",
      valor: 150.00,
      imagemUrl:
        "https://suzanefeitosa.github.io/gatwurno/assets/produto2-zoro.png",
    },
    {
      id: 3,
      nomeProduto: "NARUTO - MOLETOM UNISSEX",
      valor: 80.00,
      imagemUrl:
        "https://suzanefeitosa.github.io/gatwurno/assets/produto3-naruto.png",
    },
    {
      id: 4,
      nomeProduto: "ONE PIECE - FIGURE MONKEY D. LUFFY 18CM",
      valor: 200.00,
      imagemUrl:
        "https://suzanefeitosa.github.io/gatwurno/assets/produto4-luffy.png",
    },
    {
      id: 5,
      nomeProduto: "ONE PUNCH MAN - FIGURE SAITAMA 15CM",
      valor: 120.00,
      imagemUrl:
        "https://suzanefeitosa.github.io/gatwurno/assets/produto5-saitama.png",
    },
    {
      id: 6,
      nomeProduto: "ONE PIECE - FIGURE PORTGAS D. ACE 18CM",
      valor: 115.00,
      imagemUrl:
        "https://suzanefeitosa.github.io/gatwurno/assets/produto6-ace.png",
    },
    {
      id: 7,
      nomeProduto: "DRAGON BALL - FIGURE GOKU 15CM",
      valor: 115.00,
      imagemUrl:
        "https://suzanefeitosa.github.io/gatwurno/assets/produto7-goku.png",
    },
    {
      id: 8,
      nomeProduto: "MARVEL - FUNKO POP HOMEM DE FERRO",
      valor: 100.00,
      imagemUrl:
        "https://suzanefeitosa.github.io/gatwurno/assets/produto8-funko.png",
    },
  ];

  const handleAddCart = (id) => {
    var produto = productsArr.find((product) => product.id == id); // procura o produto pelo parametro id
    produto["quantidade"] = 1; // adiciona ao produto do id o parametro quantidade

    var produtosCarrinho = []; 
    if (localStorage.getItem("Carrinho") != null) { // verifica se o carrinho existe

      produtosCarrinho = JSON.parse(localStorage.getItem("Carrinho")); // pega os produtos do carrinho

      if (produtosCarrinho.find((product) => product.id == id) == undefined) { // verifica se o produto selecionado não está no carrinho

        produtosCarrinho.push(produto); // adiciona o produto ao carrinho de forma temporária

      } else {
        produtosCarrinho.map((product) => { // percorre o carrinho e adiciona mais um na quantidade do produto selecionado

          if (product.id == id) {
            product.quantidade += 1;
          }
          return product;
        });
      }
    }else {
      produtosCarrinho.push(produto); 
    }

    localStorage.setItem("Carrinho", JSON.stringify(produtosCarrinho)); // salva o novo carrinho
    setContador(JSON.parse(localStorage.getItem("Carrinho")).length)
    setShow(true)
    setMessage("Adicionado ao Carrinho")
  };



  return (
    <>
      <Header contador={contador} />
      <ToastContainer
        position="top-center"
        className={styles.alert}
      >
        <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
          <Toast.Body style={{ textAlign: "center" }}>{message}</Toast.Body>
        </Toast>
      </ToastContainer>
      <h1 className={styles.titleProducts}>NOSSOS PRODUTOS</h1>
      <div className={styles.wrapperMap}>
        {productsArr.map((products) => {
          return (
            <Cards
              key={products.id}
              id={products.id}
              nomeProduto={products.nomeProduto}
              valorPromocional={products.valorPromocional}
              valor={products.valor}
              imagemUrl={products.imagemUrl}
              addCarrinho={handleAddCart}
            />
          );
        })}
      </div>
    </>
  );
}
