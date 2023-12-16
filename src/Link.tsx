const Link = ({src, MouseOverEvent, MouseOutEvent}) => {
    return <img alt={'link'} src={src} onMouseOver={MouseOverEvent} onMouseOut={MouseOutEvent} />;
}

export default Link;