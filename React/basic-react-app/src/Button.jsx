function handleClick(event) {
    console.log("Hello!");
    console.log(event);
}

function handleMouseOver() {
    console.log("bye!");
}

function handleDblClick() {
    console.log("you double clicked");
}

export default function Button() {
    return(
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>Our Random Paragraph Generator is incredibly user-friendly. Simply choose the number of paragraphs you want to generate, whether it's 1, 2, 3, or more, and click the 'Generate Paragraphs' button. Our tool will generate unpredicted random word paragraphs from a vast database, offering fresh content that you've never encountered before. It's a creative exercise that can stimulate your brain in novel ways.</p>
        <button onDoubleClick={handleDblClick}>double click me!</button>
        </div>
    );
}