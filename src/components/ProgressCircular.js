import { Puff } from '@agney/react-loading';
import styles from '../styles/components/ProgressCircular.module.css';

export function ProgressCircular() {
  return(    
    <div className={styles.container}>
      <Puff width="80" />
    </div>
  );
}