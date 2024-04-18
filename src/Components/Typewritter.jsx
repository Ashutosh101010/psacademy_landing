import { useEffect, useState } from "react";

const Typewriter = ({ text1, delay, text2 }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [indexChange, setIndexChange] = useState(false);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            let text = indexChange == true ? text1 : text2;
            if (currentIndex < text.length) {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            } else {
                setCurrentText('');
                setCurrentIndex(0);
                setIndexChange(!indexChange);
            }
        }, delay);

        return () => clearInterval(typingInterval);
    }, [currentIndex, delay, text1, text2, indexChange]);

    return <span>{currentText}</span>;
};

export default Typewriter;
