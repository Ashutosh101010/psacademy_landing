import { useEffect, useState } from "react";

const Typewriter = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (currentIndex < text.length) {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            } else {
                // Reset typing
                setCurrentText('');
                setCurrentIndex(0);
            }
        }, delay);

        return () => clearInterval(typingInterval);
    }, [currentIndex, delay, text]);

    return <span>{currentText}</span>;
};

export default Typewriter;
