
import styles from './logout.module.css'
import { signOut } from '@/auth'


export default function ButtonLogout() {
    return (
        <button className={styles.logoutBtn} onClick={async () => {
         "use server" 
         await signOut()
        }}>Sair</button>
    );
}