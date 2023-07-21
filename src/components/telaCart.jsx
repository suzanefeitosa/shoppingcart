import styles from "./telaCart.module.css";
import { Header } from "./Header";
import { CaretLeft } from "@phosphor-icons/react";
import { ProdutosCart } from "./produtosCart";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

export function TelaCart() {
  const [contador, setContador] = useState(0);
  const [listaProdCarrinho, setListaProdCarrinho] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  useEffect( () =>  {
    if (localStorage.getItem("Carrinho") != null) {
      setListaProdCarrinho(JSON.parse(localStorage.getItem("Carrinho")));
      setContador(JSON.parse(localStorage.getItem("Carrinho")).length);
      calculaSubTotal()
    }
  }, []);

  function calculaSubTotal(){
    var soma = 0
    JSON.parse(localStorage.getItem("Carrinho")).forEach((produto) => {
      soma += (produto.valor * produto.quantidade)
    })
    setSubTotal(soma)
  }

  function subtraiQtd(id){
    var novaListaCarrinho = listaProdCarrinho.map((produto) => {
      if(produto.id == id && produto.quantidade > 1){
        produto.quantidade -= 1
      }

      return produto

    })
    setListaProdCarrinho(novaListaCarrinho)
    localStorage.setItem("Carrinho", JSON.stringify(novaListaCarrinho))
    calculaSubTotal()
  }

  function addQtd(id){
    var novaListaCarrinho = listaProdCarrinho.map((produto) => {
      if(produto.id == id){
        produto.quantidade += 1
      }

      return produto

    })
    setListaProdCarrinho(novaListaCarrinho)
    localStorage.setItem("Carrinho", JSON.stringify(novaListaCarrinho))
    calculaSubTotal()

  }

  function deletaItem(id){
    
    var novaListaCarrinho = listaProdCarrinho.filter((produto) => produto.id != id )

    setListaProdCarrinho(novaListaCarrinho)
    localStorage.setItem("Carrinho", JSON.stringify(novaListaCarrinho))
    setContador(JSON.parse(localStorage.getItem("Carrinho")).length);
    calculaSubTotal()
    setShow(true)
    setMessage("Produto removido")

  }

  return (
    <>
      <ToastContainer
        className={styles.alert}
        position="top-center"
       
      >
        <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
          <Toast.Body style={{textAlign:"center"}}>{message}</Toast.Body>
        </Toast>
      </ToastContainer>

      <Header contador={contador} />

      <button className={styles.buttonCart}>
        <CaretLeft size={28} />
        <Link className={styles.link} to="/">
          <strong>Continuar Comprando</strong>
        </Link>
      </button>
      <div className="containerComProdutos">
        <hr className={styles.line}></hr>
        <h6 className={styles.titleCart}>Carrinho de Compras</h6>
        <p className={styles.textCart}>
          Você tem <span className={styles.contadorTela}> {contador}</span> itens em seu carrinho
        </p>
        <div className={styles.produtosLista}>
          {listaProdCarrinho.map((prodCarrinho) => {
            return (
              <ProdutosCart
                key={prodCarrinho.id}
                titulo={prodCarrinho.nomeProduto}
                id={prodCarrinho.id}
                quantidade={prodCarrinho.quantidade}
                valor={prodCarrinho.valor}
                imagem={prodCarrinho.imagemUrl}
                adiciona={addQtd}
                remove={deletaItem}
                subtrai={subtraiQtd}
              />
            );
          })}
        </div>
        <footer className={styles.footer}>
          <p className={styles.subtotal}>Subtotal: R$ {subTotal.toFixed(2)} </p>
          <button className={styles.checkout}>Checkout</button>
        </footer>
      </div>
    </>
  );
}
