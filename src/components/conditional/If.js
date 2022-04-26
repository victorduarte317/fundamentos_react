/*
    The concept of the conditional rendering resolves around 
    adding a condition to verify if any given content will be rendered or not.

    <If test = {conditional expression}
        <span> content to render </span>
        <span> content to render </span>
        <span> content to render </span>
    </If>
*/

export default props => {
    if(props.test) {
        return props.children
    } else {
        return false
    }
}