const Link = ({ src, MouseOverEvent, MouseOutEvent }) => {
    return React.createElement("img", { alt: 'link', src: src, onMouseOver: MouseOverEvent, onMouseOut: MouseOutEvent });
};
export default Link;
