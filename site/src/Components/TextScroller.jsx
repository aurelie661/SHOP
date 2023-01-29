import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';


const TextScroller = (props) => {
    const {text} = props;
    const [key, setKey] = useState(1);

    const scrolling = useSpring({
        from: { transform: "translate(200%,0)" },
        to: { transform: "translate(-200%,0)" },
        config: { duration: 20000 },
        reset: true,
        onRest: () => {
            setKey(key + 1);
        }
    });

    return (
        <div className='scroller' key={key}>
            <animated.div style={scrolling}>{text}</animated.div>
        </div>
    );
};

export default TextScroller;