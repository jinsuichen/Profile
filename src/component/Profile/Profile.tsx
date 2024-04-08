import {useState} from "react";
import {animated, useTransition} from "react-spring";
import styles from './index.module.scss'
import Content from "./Content.tsx";
function Profile() {

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleActiveIndex = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === profiles.length - 1 ? 0 : prevIndex + 1
        );
    };

    const profiles = [
        <Content lang={"en-US"} toggleActiveIndex={toggleActiveIndex}/>,
        <Content lang={"zh-CN"} toggleActiveIndex={toggleActiveIndex}/>,
        <Content lang={"zh-TW"} toggleActiveIndex={toggleActiveIndex}/>,
    ];

    const transition = useTransition(activeIndex, {
        from: { opacity: 0, transform: 'translateY(10px)'},
        enter: { opacity: 1, transform: 'translateY(0)' },
        leave: { opacity: 0 },
        config: { duration: 500 },
    });


    return (
        transition((style, item) => (
            <animated.div key={item} style={{...style, position: 'absolute', zIndex: item}} className={styles.Container}>
                {profiles[item]}
            </animated.div>
        ))
    );
}

export default Profile;