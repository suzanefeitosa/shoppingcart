import styles from './produtosCart.module.css'
import {CaretLeft, Minus, Plus, Trash} from '@phosphor-icons/react'

export function ProdutosCart({titulo, valor, quantidade, id, imagem, adiciona, subtrai, remove}){

    return (
        <>
        <div className={styles.produtosCart}>
        <img className={styles.imgProduto} src={imagem} />
        <div className={styles.columnCart}>
        <h6 className={styles.titleProduto}>{titulo}</h6>
        <p className={styles.valorUnitario}>Valor Unitário: R$ {valor.toFixed(2)}</p>
        </div>
      
        <div className={styles.addOrRemove}> 
        <button onClick={() => subtrai(id)} className={styles.buttonAddAndRemove}><Minus size={24}/></button>
        <p className={styles.quantidadeCart}>{quantidade}</p>
        <button onClick={() => adiciona(id)} className={styles.buttonAddAndRemove}><Plus size={24}/></button>
        </div>


        <p className={styles.valorTotal}><span className={styles.cifrao}>R$</span>{(valor * quantidade).toFixed(2)}</p>
        <button onClick={() => remove(id)} className={styles.trash}><Trash size={24} /></button>
        </div>
        
        </>
    )
}