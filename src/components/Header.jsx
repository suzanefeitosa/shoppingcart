import styles from './Header.module.css';
import {ShoppingCart} from '@phosphor-icons/react';
import Badge from 'react-bootstrap/Badge';
import { Link } from "react-router-dom";

export function Header({contador}){
    return (
        <>

        <div className={styles.container}>
        <button className={styles.cartIcon}> 
        <Link className={styles.link} to="/carrinho" ><ShoppingCart size={32}/>
        <Badge className={styles.contador}>{contador}</Badge>
        </Link>
        
        </button>
        </div>

        <div className={styles.header}>
        <img className={styles.logo} src="https://suzanefeitosa.github.io/gatwurno/assets/gatwurno-logo.png" alt="logo-gatwurno" />
        </div>

        </>
    )
}