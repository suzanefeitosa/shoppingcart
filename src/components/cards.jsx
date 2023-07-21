import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./cards.module.css";

export function Cards({nomeProduto, valorPromocional, valor, imagemUrl, addCarrinho, id}) {

  return (
    <div className={styles.wrapper}>   
      <Card className= {styles.card} style={{ width: "19rem" }}>
        <Card.Img className={styles.imgProduct} variant="top" src={imagemUrl}/>
        <Card.Body className={styles.bodyCard}>
          <Card.Title className={styles.cardTitle}>{nomeProduto}</Card.Title>
          <Card.Text>
          <del className={styles.valorRiscado}>{valorPromocional}</del><span className={styles.valorNormal}>R${valor.toFixed(2)}</span>
          </Card.Text>
         <div><Button onClick={() => addCarrinho(id)} className={styles.button} variant="warning">Adicionar ao Carrinho</Button></div> 
        </Card.Body>
      </Card>
    </div>
  );
}

