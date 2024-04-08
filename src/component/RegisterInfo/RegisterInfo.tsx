import styles from './index.module.scss';
import {Flex} from "antd";

function RegisterInfo() {
    return (
        <footer className={styles.Footer}>
            <Flex justify={'space-evenly'}>
                <span>111</span>
                <span>222</span>
            </Flex>
        </footer>
    );
}

export default RegisterInfo;